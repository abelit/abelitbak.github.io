import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o,c as r,b as d,w as a,f as t,d as s,a as n}from"./app-DR5J2daJ.js";const u="/assets/ha-pg-etcd-patroni-001-CkNiaOEI.png",v={},m=t('<h2 id="postgresql高可用集群-etcd-patroni" tabindex="-1"><a class="header-anchor" href="#postgresql高可用集群-etcd-patroni"><span>PostgreSQL高可用集群(ETCD+Patroni)</span></a></h2><h3 id="原理及拓扑图" tabindex="-1"><a class="header-anchor" href="#原理及拓扑图"><span>原理及拓扑图</span></a></h3><p>pgsql高可用集群采用postgresql+etcd+patroni+haproxy+keepalived等软件实现，以postgresql做数据库，etcd存储集群状态，patroni与etcd结合实现数据库集群故障切换，haproxy实现数据库高可用（读读写分离），keepalived实现VIP跳转。</p><p>Patroni 功能特性</p><ul><li>支持自动failover和按需switchover</li><li>支持一个和多个备节点</li><li>支持级联复制</li><li>支持同步复制，异步复制</li><li>支持同步复制下备库故障时自动降级为异步复制（功效类似于MySQL的半同步，但是更加智能）</li><li>支持控制指定节点是否参与选主，是否参与负载均衡以及是否可以成为同步备机</li><li>支持通过pg_rewind自动修复旧主</li><li>支持多种方式初始化集群和重建备机，包括pg_basebackup和支持wal_e，pgBackRest，barman等备份工具的自定义脚本</li><li>支持自定义外部callback脚本</li><li>支持REST API</li><li>支持通过watchdog防止脑裂</li><li>支持k8s，docker等容器化环境部署</li><li>支持多种常见DCS(Distributed Configuration Store)存储元数据，包括etcd，ZooKeeper，Consul，Kubernetes</li></ul><figure><img src="'+u+`" alt="PostgreSQL高可用集群(ETCD+Patroni)" tabindex="0" loading="lazy"><figcaption>PostgreSQL高可用集群(ETCD+Patroni)</figcaption></figure><h3 id="主机准备" tabindex="-1"><a class="header-anchor" href="#主机准备"><span>主机准备</span></a></h3><h4 id="主机信息" tabindex="-1"><a class="header-anchor" href="#主机信息"><span>主机信息</span></a></h4><table><thead><tr><th>编号</th><th>IP 地址</th><th>角色</th><th>操作系统</th><th>内核版本</th><th>数据库版本</th></tr></thead><tbody><tr><td>1</td><td>10.10.12.210</td><td>主</td><td>CentOS 7.9</td><td>3.10.0-1160.el7.x86_64</td><td>PostgreSQL 11</td></tr><tr><td>2</td><td>10.10.12.211</td><td>从</td><td>CentOS 7.9</td><td>3.10.0-1160.el7.x86_64</td><td>PostgreSQL 11</td></tr><tr><td>3</td><td>10.10.12.212</td><td>主</td><td>CentOS 7.9</td><td>3.10.0-1160.el7.x86_64</td><td>PostgreSQL 11</td></tr></tbody></table><h4 id="配置主机名称" tabindex="-1"><a class="header-anchor" href="#配置主机名称"><span>配置主机名称</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 对应的节点进行设置</span>
hostnamectl set-hostname node1
hostnamectl set-hostname node2
hostnamectl set-hostname node3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="配置-hosts" tabindex="-1"><a class="header-anchor" href="#配置-hosts"><span>配置 hosts</span></a></h4><blockquote><p>所有节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/hosts <span class="token operator">&lt;&lt;</span><span class="token string">EOF
127.0.0.1   localhost localhost.localdomain localhost4 localhost4.localdomain4
::1         localhost localhost.localdomain localhost6 localhost6.localdomain6

10.10.12.210 node1
10.10.12.211 node2
10.10.12.212 node3
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="关闭-selinux-和防火墙" tabindex="-1"><a class="header-anchor" href="#关闭-selinux-和防火墙"><span>关闭 selinux 和防火墙</span></a></h4><blockquote><p>所有节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/^SELINUX=enforcing/SELINUX=disabled/g&#39;</span> /etc/selinux/config
setenforce <span class="token number">0</span>
sestatus

systemctl stop firewalld.service
systemctl disable firewalld.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="时钟同步" tabindex="-1"><a class="header-anchor" href="#时钟同步"><span>时钟同步</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> ntpdate
ntpdate ntp1.aliyun.com

<span class="token builtin class-name">echo</span> <span class="token string">&quot;* */1 * * * ntpdate ntp1.aliyun.com&quot;</span> <span class="token operator">&gt;</span> /tmp/crontab.txt

<span class="token function">crontab</span> /tmp/crontab.txt

<span class="token function">crontab</span> <span class="token parameter variable">-l</span>

<span class="token function">rm</span> <span class="token parameter variable">-f</span> /tmp/crontab.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="postgresql部署" tabindex="-1"><a class="header-anchor" href="#postgresql部署"><span>PostgreSQL部署</span></a></h3><blockquote><p>在所有节点</p></blockquote><h4 id="安装postgresql" tabindex="-1"><a class="header-anchor" href="#安装postgresql"><span>安装postgresql</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># yum install -y https://download.postgresql.org/pub/repos/yum/reporpms/EL-7-x86_64/pgdg-redhat-repo-latest.noarch.rpm</span>

yum <span class="token function">install</span> <span class="token parameter variable">-y</span> https://mirrors.aliyun.com/postgresql/repos/yum/reporpms/EL-7-x86_64/pgdg-redhat-repo-latest.noarch.rpm

<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s@https://download.postgresql.org/pub@https://mirrors.aliyun.com/postgresql@g&quot;</span> /etc/yum.repos.d/pgdg-redhat-all.repo

yum <span class="token function">install</span> <span class="token parameter variable">-y</span> postgresql12-server postgresql12-contrib

<span class="token comment"># /usr/pgsql-12/bin/postgresql-12-setup initdb</span>
<span class="token comment"># systemctl enable postgresql-12</span>
<span class="token comment"># systemctl start postgresql-12</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="设置数据库密码-可选" tabindex="-1"><a class="header-anchor" href="#设置数据库密码-可选"><span>设置数据库密码(可选)</span></a></h4><ul><li>登陆pg</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># psql -U postgres -h localhost</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>更改密码</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- alter user postgres with password &#39;Postgres@123&#39;;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="设置远程连接-可选" tabindex="-1"><a class="header-anchor" href="#设置远程连接-可选"><span>设置远程连接(可选)</span></a></h4><p>编辑<code>/var/lib/pgsql/12/data/pg_hba.conf</code>,设置如下内容：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># host    all             all             0.0.0.0/0               md5</span>
<span class="token comment"># cp /var/lib/pgsql/12/data/pg_hba.conf /var/lib/pgsql/12/data/pg_hba.conf.\`date +%Y%m%d%H%M\`</span>

<span class="token comment"># echo &quot;host    all             all             0.0.0.0/0               md5&quot; &gt;&gt; /var/lib/pgsql/12/data/pg_hba.conf</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编辑<code>/var/lib/pgsql/12/data/postgresql.conf</code>,设置如下内容：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># listen_addresses = &#39;*&#39;</span>
<span class="token comment"># password_encryption = md5</span>

<span class="token comment"># sed -i &quot;s/#listen_addresses = &#39;localhost&#39;/listen_addresses = &#39;*&#39;/g&quot; /var/lib/pgsql/12/data/postgresql.conf</span>
<span class="token comment"># sed -i &quot;s/#password_encryption = md5/password_encryption = md5/g&quot; /var/lib/pgsql/12/data/postgresql.conf</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重启数据库</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># systemctl restart postgresql-12</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设置postgres拥有免密的sudoer权限</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&#39;postgres        ALL=(ALL)       NOPASSWD: ALL&#39;</span><span class="token operator">&gt;</span> /etc/sudoers.d/postgres
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设置postgres用户环境变量</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">su</span> - postgres

<span class="token function">cat</span> <span class="token operator">&gt;</span> ~/.bash_profile <span class="token operator">&lt;&lt;</span><span class="token string">&#39;EOF&#39;
export PGHOME=/usr/pgsql-12
export PGDATA=/var/lib/pgsql/12/data/
export PATH=$PGHOME/bin:$PATH:.
export LD_LIBRARY_PATH=$PGHOME/lib:$LD_LIBRARY_PATH
export PGPORT=5432
export PGUSER=postgres
export PGDATABASE=postgres
EOF</span>

<span class="token builtin class-name">exit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="部署etcd" tabindex="-1"><a class="header-anchor" href="#部署etcd"><span>部署ETCD</span></a></h3><blockquote><p>3个节点</p></blockquote>`,41),b=n("h4",{id:"安装etcd",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安装etcd"},[n("span",null,"安装etcd")])],-1),k=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"wget"),s(` https://github.com/etcd-io/etcd/releases/download/v3.5.10/etcd-v3.5.10-linux-amd64.tar.gz

`),n("span",{class:"token function"},"tar"),s(),n("span",{class:"token parameter variable"},"-xf"),s(" etcd-v3.5.10-linux-amd64.tar.gz "),n("span",{class:"token parameter variable"},"-C"),s(` /usr/local/
`),n("span",{class:"token function"},"ln"),s(),n("span",{class:"token parameter variable"},"-s"),s(` /usr/local/etcd-v3.5.10-linux-amd64 /usr/local/etcd
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=n("h4",{id:"配置etcd集群",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置etcd集群"},[n("span",null,"配置etcd集群")])],-1),g=n("p",null,"在节点1上：",-1),y=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"mkdir"),s(),n("span",{class:"token parameter variable"},"-p"),s(` /usr/local/etcd/data/etcd

`),n("span",{class:"token function"},"cat"),s(),n("span",{class:"token operator"},">"),s(" /usr/local/etcd/conf.yml "),n("span",{class:"token operator"},"<<"),n("span",{class:"token string"},`EOF
name: pgsql_12210
data-dir: /usr/local/etcd/data/etcd
listen-client-urls: http://10.10.12.210:2379,http://127.0.0.1:2379
advertise-client-urls: http://10.10.12.210:2379,http://127.0.0.1:2379
listen-peer-urls: http://10.10.12.210:2380
initial-advertise-peer-urls: http://10.10.12.210:2380
initial-cluster: pgsql_12210=http://10.10.12.210:2380,pgsql_12211=http://10.10.12.211:2380,pgsql_12212=http://10.10.12.212:2380
initial-cluster-token: etcd-cluster-token
initial-cluster-state: new
EOF`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("p",null,"在节点2上：",-1),q=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"mkdir"),s(),n("span",{class:"token parameter variable"},"-p"),s(` /usr/local/etcd/data/etcd

`),n("span",{class:"token function"},"cat"),s(),n("span",{class:"token operator"},">"),s(" /usr/local/etcd/conf.yml "),n("span",{class:"token operator"},"<<"),n("span",{class:"token string"},`EOF
name: pgsql_12211
data-dir: /usr/local/etcd/data/etcd
listen-client-urls: http://10.10.12.211:2379,http://127.0.0.1:2379
advertise-client-urls: http://10.10.12.211:2379,http://127.0.0.1:2379
listen-peer-urls: http://10.10.12.211:2380
initial-advertise-peer-urls: http://10.10.12.211:2380
initial-cluster: pgsql_12210=http://10.10.12.210:2380,pgsql_12211=http://10.10.12.211:2380,pgsql_12212=http://10.10.12.212:2380
initial-cluster-token: etcd-cluster-token
initial-cluster-state: new
EOF`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("p",null,"在节点3上：",-1),E=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"mkdir"),s(),n("span",{class:"token parameter variable"},"-p"),s(` /usr/local/etcd/data/etcd

`),n("span",{class:"token function"},"cat"),s(),n("span",{class:"token operator"},">"),s(" /usr/local/etcd/conf.yml "),n("span",{class:"token operator"},"<<"),n("span",{class:"token string"},`EOF
name: pgsql_12212
data-dir: /usr/local/etcd/data/etcd
listen-client-urls: http://10.10.12.212:2379,http://127.0.0.1:2379
advertise-client-urls: http://10.10.12.212:2379,http://127.0.0.1:2379
listen-peer-urls: http://10.10.12.212:2380
initial-advertise-peer-urls: http://10.10.12.212:2380
initial-cluster: pgsql_12210=http://10.10.12.210:2380,pgsql_12211=http://10.10.12.211:2380,pgsql_12212=http://10.10.12.212:2380
initial-cluster-token: etcd-cluster-token
initial-cluster-state: new
EOF`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=n("h4",{id:"启动",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#启动"},[n("span",null,"启动")])],-1),T=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"nohup"),s(" /usr/local/etcd/etcd --config-file"),n("span",{class:"token operator"},"="),s("/usr/local/etcd/conf.yml "),n("span",{class:"token operator"},"&"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),w=n("h4",{id:"安装etcd-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安装etcd-1"},[n("span",null,"安装etcd")])],-1),I=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("yum "),n("span",{class:"token function"},"install"),s(),n("span",{class:"token parameter variable"},"-y"),s(` etcd

systemctl restart etcd
systemctl `),n("span",{class:"token builtin class-name"},"enable"),s(` etcd
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),P=n("h4",{id:"配置etcd集群-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置etcd集群-1"},[n("span",null,"配置etcd集群")])],-1),S=n("p",null,"在节点1上：",-1),C=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"cat"),s(),n("span",{class:"token operator"},">"),s(" /etc/etcd/etcd.conf "),n("span",{class:"token operator"},"<<"),n("span",{class:"token string"},`EOF
#[Member]
ETCD_NAME="pgsql_12210"
ETCD_DATA_DIR="/var/lib/etcd/default.etcd"
ETCD_LISTEN_CLIENT_URLS="http://10.10.12.210:2379,http://127.0.0.1:2379"

#[Clustering]
ETCD_ADVERTISE_CLIENT_URLS="http://10.10.12.210:2379"
ETCD_LISTEN_PEER_URLS="http://10.10.12.210:2380"
ETCD_INITIAL_ADVERTISE_PEER_URLS="http://10.10.12.210:2380"
ETCD_INITIAL_CLUSTER="etcd01=http://10.10.12.210:2380,etcd02=http://10.10.12.211:2380,etcd03=http://10.10.12.212:2380"
ETCD_INITIAL_CLUSTER_TOKEN="etcd-cluster-token"
ETCD_INITIAL_CLUSTER_STATE="new"
EOF`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),L=n("p",null,"在节点2上：",-1),D=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"cat"),s(),n("span",{class:"token operator"},">"),s(" /etc/etcd/etcd.conf "),n("span",{class:"token operator"},"<<"),n("span",{class:"token string"},`EOF
#[Member]
ETCD_NAME="pgsql_12211"
ETCD_DATA_DIR="/var/lib/etcd/default.etcd"
ETCD_LISTEN_CLIENT_URLS="http://10.10.12.211:2379,http://127.0.0.1:2379"

#[Clustering]
ETCD_ADVERTISE_CLIENT_URLS="http://10.10.12.211:2379"
ETCD_LISTEN_PEER_URLS="http://10.10.12.211:2380"
ETCD_INITIAL_ADVERTISE_PEER_URLS="http://10.10.12.211:2380"
ETCD_INITIAL_CLUSTER="etcd01=http://10.10.12.210:2380,etcd02=http://10.10.12.211:2380,etcd03=http://10.10.12.212:2380"
ETCD_INITIAL_CLUSTER_TOKEN="etcd-cluster-token"
ETCD_INITIAL_CLUSTER_STATE="new"
EOF`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),R=n("p",null,"在节点3上：",-1),A=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"cat"),s(),n("span",{class:"token operator"},">"),s(" /etc/etcd/etcd.conf "),n("span",{class:"token operator"},"<<"),n("span",{class:"token string"},`EOF
#[Member]
ETCD_NAME="pgsql_12212"
ETCD_DATA_DIR="/var/lib/etcd/default.etcd"
ETCD_LISTEN_CLIENT_URLS="http://10.10.12.212:2379,http://127.0.0.1:2379"

#[Clustering]
ETCD_ADVERTISE_CLIENT_URLS="http://10.10.12.212:2379"
ETCD_LISTEN_PEER_URLS="http://10.10.12.212:2380"
ETCD_INITIAL_ADVERTISE_PEER_URLS="http://10.10.12.212:2380"
ETCD_INITIAL_CLUSTER="etcd01=http://10.10.12.210:2380,etcd02=http://10.10.12.211:2380,etcd03=http://10.10.12.212:2380"
ETCD_INITIAL_CLUSTER_TOKEN="etcd-cluster-token"
ETCD_INITIAL_CLUSTER_STATE="new"
EOF`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),N=n("h4",{id:"启动-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#启动-1"},[n("span",null,"启动")])],-1),O=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[s(`systemctl restart etcd
systemctl `),n("span",{class:"token builtin class-name"},"enable"),s(` etcd
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),F=t(`<h4 id="etcd集群检查" tabindex="-1"><a class="header-anchor" href="#etcd集群检查"><span>etcd集群检查</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl status etcd
<span class="token function">netstat</span> -lntup<span class="token operator">|</span><span class="token function">grep</span> etcd
etcdctl member list

<span class="token builtin class-name">export</span> <span class="token assign-left variable">ETCDCTL_API</span><span class="token operator">=</span><span class="token number">3</span>

etcdctl endpoint health <span class="token parameter variable">--endpoints</span><span class="token operator">=</span><span class="token string">&#39;10.10.12.210:2379,10.10.12.211:2379,10.10.12.212:2379&#39;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="patroni部署" tabindex="-1"><a class="header-anchor" href="#patroni部署"><span>patroni部署</span></a></h3><blockquote><p>所有节点</p></blockquote><h4 id="数据库配置-可选" tabindex="-1"><a class="header-anchor" href="#数据库配置-可选"><span>数据库配置(可选)</span></a></h4><ul><li>编辑<code>/var/lib/pgsql/12/data/postgresql.conf</code>,设置如下内容：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>max_connections <span class="token operator">=</span> <span class="token string">&#39;500&#39;</span>
max_wal_senders <span class="token operator">=</span> <span class="token string">&#39;10&#39;</span>
port <span class="token operator">=</span> <span class="token string">&#39;5432&#39;</span>
listen_addresses <span class="token operator">=</span> <span class="token string">&#39;*&#39;</span>
synchronous_commit <span class="token operator">=</span> on
full_page_writes <span class="token operator">=</span> on
wal_log_hints <span class="token operator">=</span> on
synchronous_standby_names <span class="token operator">=</span> <span class="token string">&#39;*&#39;</span>
max_replication_slots <span class="token operator">=</span> <span class="token number">10</span>
wal_level <span class="token operator">=</span> replica
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>编辑<code>/var/lib/pgsql/12/data/pg_hba.conf</code>,设置如下内容：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">local</span>   all             all                                     peer
<span class="token function">host</span>    all             all             <span class="token number">127.0</span>.0.1/32            md5
<span class="token function">host</span>    all             postgres        <span class="token number">127.0</span>.0.1/32            md5
<span class="token function">host</span>    all             all             <span class="token number">10.10</span>.12.0/24      md5
<span class="token function">host</span>    all             all             ::1/128                 md5
<span class="token builtin class-name">local</span>   replication     replicator                                peer
<span class="token function">host</span>    replication     replicator        <span class="token number">127.0</span>.0.1/32            md5
<span class="token function">host</span>    replication     replicator        ::1/128                 md5
<span class="token function">host</span>    replication     replicator        <span class="token number">10.10</span>.12.210/32      md5
<span class="token function">host</span>    replication     replicator        <span class="token number">10.10</span>.12.211/32      md5
<span class="token function">host</span>    replication     replicator        <span class="token number">10.10</span>.12.212/32      md5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>重启数据库</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl daemon-reload
systemctl restart postgresql-12
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在主节点上创建复制槽</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">user</span> replicator <span class="token keyword">replication</span> login encrypted password <span class="token string">&#39;Postgres@123&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>在从节点上配置stream replication</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl stop postgresql<span class="token operator">&amp;&amp;</span><span class="token function">su</span> - postgres
<span class="token builtin class-name">cd</span> /data/ <span class="token operator">&amp;&amp;</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> pg_data
/usr/pgsql-12/bin/pg_basebackup <span class="token parameter variable">-h</span> <span class="token number">10.10</span>.12.210 <span class="token parameter variable">-D</span> /var/lib/pgsql/12/data/ <span class="token parameter variable">-U</span> replicator <span class="token parameter variable">-v</span> <span class="token parameter variable">-P</span> <span class="token parameter variable">-R</span>
systemctl start postgresql-12
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="安装watchdog" tabindex="-1"><a class="header-anchor" href="#安装watchdog"><span>安装watchdog</span></a></h4><p>使用watchdog为防止出现脑裂</p><ul><li>安装</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> watchdog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>初始化watchdog字符设备</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>modprobe softdog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>修改/dev/watchdog设备权限</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">chmod</span> <span class="token number">666</span> /dev/watchdog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>启动watchdog服务</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl start watchdog
systemctl <span class="token builtin class-name">enable</span> watchdog

systemctl status watchdog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="安装patroni" tabindex="-1"><a class="header-anchor" href="#安装patroni"><span>安装patroni</span></a></h4><blockquote><p>所有节点</p></blockquote><ul><li>安装patroni</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> python3 python3-psycopg2 python3-devel
pip3 <span class="token function">install</span> <span class="token parameter variable">--upgrade</span> pip <span class="token parameter variable">-i</span> http://pypi.douban.com/simple/ --trusted-host pypi.douban.com
pip3 <span class="token function">install</span> psycopg2-binary <span class="token parameter variable">-i</span> http://pypi.douban.com/simple/ --trusted-host pypi.douban.com
pip3 <span class="token function">install</span> patroni<span class="token punctuation">[</span>etcd<span class="token punctuation">]</span> <span class="token parameter variable">-i</span> http://pypi.douban.com/simple/ --trusted-host pypi.douban.com

<span class="token function">which</span> patroni
patronictl <span class="token parameter variable">--help</span>

<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/patroni/
<span class="token function">chown</span> <span class="token parameter variable">-R</span>  postgres:postgres /etc/patroni/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建patroni配置文件 在节点1上：</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code>cat <span class="token punctuation">&gt;</span> /etc/patroni/patroni.yml &lt;&lt;EOF
<span class="token key atrule">scope</span><span class="token punctuation">:</span> pgsql
<span class="token key atrule">namespace</span><span class="token punctuation">:</span> abelit_lab
<span class="token key atrule">name</span><span class="token punctuation">:</span> node1

<span class="token key atrule">restapi</span><span class="token punctuation">:</span>
  <span class="token key atrule">listen</span><span class="token punctuation">:</span> 0.0.0.0<span class="token punctuation">:</span><span class="token number">8008</span>
  <span class="token key atrule">connect_address</span><span class="token punctuation">:</span> 10.10.12.210<span class="token punctuation">:</span><span class="token number">8008</span>

<span class="token key atrule">etcd</span><span class="token punctuation">:</span>
  <span class="token key atrule">hosts</span><span class="token punctuation">:</span> 10.10.12.210<span class="token punctuation">:</span><span class="token number">2379</span><span class="token punctuation">,</span>10.10.12.211<span class="token punctuation">:</span><span class="token number">2379</span><span class="token punctuation">,</span>10.10.12.212<span class="token punctuation">:</span><span class="token number">2379</span>

<span class="token key atrule">bootstrap</span><span class="token punctuation">:</span>
  <span class="token key atrule">dcs</span><span class="token punctuation">:</span>
    <span class="token key atrule">ttl</span><span class="token punctuation">:</span> <span class="token number">30</span>
    <span class="token key atrule">loop_wait</span><span class="token punctuation">:</span> <span class="token number">10</span>
    <span class="token key atrule">retry_timeout</span><span class="token punctuation">:</span> <span class="token number">10</span>
    <span class="token key atrule">maximum_lag_on_failover</span><span class="token punctuation">:</span> <span class="token number">1048576</span>
    <span class="token key atrule">master_start_timeout</span><span class="token punctuation">:</span> <span class="token number">300</span>
    <span class="token key atrule">synchronous_mode</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
    <span class="token key atrule">postgresql</span><span class="token punctuation">:</span>
      <span class="token key atrule">use_pg_rewind</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">use_slots</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">parameters</span><span class="token punctuation">:</span>
        <span class="token key atrule">listen_addresses</span><span class="token punctuation">:</span> <span class="token string">&quot;0.0.0.0&quot;</span>
        <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">5432</span>
        <span class="token key atrule">wal_level</span><span class="token punctuation">:</span> logical
        <span class="token key atrule">hot_standby</span><span class="token punctuation">:</span> <span class="token string">&quot;on&quot;</span>
        <span class="token key atrule">wal_keep_segments</span><span class="token punctuation">:</span> <span class="token number">1000</span>
        <span class="token key atrule">max_wal_senders</span><span class="token punctuation">:</span> <span class="token number">10</span>
        <span class="token key atrule">max_replication_slots</span><span class="token punctuation">:</span> <span class="token number">10</span>
        <span class="token key atrule">wal_log_hints</span><span class="token punctuation">:</span> <span class="token string">&quot;on&quot;</span>
        <span class="token key atrule">logging_collector</span><span class="token punctuation">:</span> <span class="token string">&quot;on&quot;</span>
    <span class="token comment">#     archive_mode: &quot;on&quot;</span>
    <span class="token comment">#     archive_timeout: 1800s</span>
    <span class="token comment">#     archive_command: mkdir -p /var/lib/pgsql/12/wal_archive &amp;&amp; test ! -f /var/lib/pgsql/12/wal_archive/%f &amp;&amp; cp %p /var/lib/pgsql/12/wal_archive/%f</span>
    <span class="token comment">#   recovery_conf:</span>
    <span class="token comment">#     restore_command: cp /var/lib/pgsql/12/wal_archive/%f %p</span>

  <span class="token key atrule">initdb</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">encoding</span><span class="token punctuation">:</span> UTF8
<span class="token comment">#   - locale: C</span>
<span class="token comment">#   - lc-ctype: zh_CN.UTF-8</span>
  <span class="token punctuation">-</span> data<span class="token punctuation">-</span>checksums

  <span class="token key atrule">pg_hba</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> host replication replicator 127.0.0.1/32 trust
  <span class="token punctuation">-</span> host replication replicator 0.0.0.0/0 md5
  <span class="token punctuation">-</span> host all all 0.0.0.0/0 md5
  <span class="token punctuation">-</span> host all all <span class="token punctuation">:</span><span class="token punctuation">:</span>0/0 md5
    
  <span class="token comment"># Some additional users which needs to be created after initializing new cluster</span>
  <span class="token key atrule">users</span><span class="token punctuation">:</span>
    <span class="token key atrule">admin</span><span class="token punctuation">:</span>
      <span class="token key atrule">password</span><span class="token punctuation">:</span> qaz123
      <span class="token key atrule">options</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> createrole
      <span class="token punctuation">-</span> createdb
    <span class="token key atrule">percona</span><span class="token punctuation">:</span>
      <span class="token key atrule">password</span><span class="token punctuation">:</span> qaz123
      <span class="token key atrule">options</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> createrole
      <span class="token punctuation">-</span> createdb 

<span class="token key atrule">postgresql</span><span class="token punctuation">:</span>
  <span class="token key atrule">cluster_name</span><span class="token punctuation">:</span> abelit_pgcluster
  <span class="token key atrule">listen</span><span class="token punctuation">:</span> 0.0.0.0<span class="token punctuation">:</span><span class="token number">5432</span>
  <span class="token key atrule">connect_address</span><span class="token punctuation">:</span> 10.10.12.210<span class="token punctuation">:</span><span class="token number">5432</span>
  <span class="token key atrule">data_dir</span><span class="token punctuation">:</span> /var/lib/pgsql/12/data/
  <span class="token key atrule">bin_dir</span><span class="token punctuation">:</span> /usr/pgsql<span class="token punctuation">-</span>12/bin/
  <span class="token key atrule">authentication</span><span class="token punctuation">:</span>
    <span class="token key atrule">replication</span><span class="token punctuation">:</span>
      <span class="token key atrule">username</span><span class="token punctuation">:</span> replicator
      <span class="token key atrule">password</span><span class="token punctuation">:</span> Postgres@123
    <span class="token key atrule">superuser</span><span class="token punctuation">:</span>
      <span class="token key atrule">username</span><span class="token punctuation">:</span> postgres
      <span class="token key atrule">password</span><span class="token punctuation">:</span> Postgres@123
    <span class="token key atrule">rewind</span><span class="token punctuation">:</span>
      <span class="token key atrule">username</span><span class="token punctuation">:</span> postgres
      <span class="token key atrule">password</span><span class="token punctuation">:</span> Postgres@123
  <span class="token key atrule">parameters</span><span class="token punctuation">:</span>
    <span class="token key atrule">unix_socket_directories</span><span class="token punctuation">:</span> <span class="token string">&quot;/var/run/postgresql/&quot;</span>

  <span class="token key atrule">create_replica_methods</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> basebackup
  <span class="token key atrule">basebackup</span><span class="token punctuation">:</span>
    <span class="token key atrule">checkpoint</span><span class="token punctuation">:</span> <span class="token string">&#39;fast&#39;</span>

  <span class="token key atrule">basebackup</span><span class="token punctuation">:</span>
    <span class="token key atrule">max-rate</span><span class="token punctuation">:</span> 100M
    <span class="token key atrule">checkpoint</span><span class="token punctuation">:</span> fast

<span class="token comment">#   callbacks:</span>
<span class="token comment">#     on_start: /bin/bash /usr/pgsql-12/bin/patroni_callback.sh</span>
<span class="token comment">#     on_stop: /bin/bash /usr/pgsql-12/bin/patroni_callback.sh</span>
<span class="token comment">#     on_role_change: /bin/bash /usr/pgsql-12/bin/patroni_callback.sh</span>

<span class="token key atrule">watchdog</span><span class="token punctuation">:</span>
  <span class="token key atrule">mode</span><span class="token punctuation">:</span> automatic
  <span class="token key atrule">device</span><span class="token punctuation">:</span> /dev/watchdog
  <span class="token key atrule">safety_margin</span><span class="token punctuation">:</span> <span class="token number">5</span>

<span class="token key atrule">tags</span><span class="token punctuation">:</span>
  <span class="token key atrule">nofailover</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">noloadbalance</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">clonefrom</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">nosync</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在节点2上：</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code>cat <span class="token punctuation">&gt;</span> /etc/patroni/patroni.yml &lt;&lt;EOF
<span class="token key atrule">scope</span><span class="token punctuation">:</span> pgsql
<span class="token key atrule">namespace</span><span class="token punctuation">:</span> abelit_lab
<span class="token key atrule">name</span><span class="token punctuation">:</span> node2

<span class="token key atrule">restapi</span><span class="token punctuation">:</span>
  <span class="token key atrule">listen</span><span class="token punctuation">:</span> 0.0.0.0<span class="token punctuation">:</span><span class="token number">8008</span>
  <span class="token key atrule">connect_address</span><span class="token punctuation">:</span> 10.10.12.211<span class="token punctuation">:</span><span class="token number">8008</span>

<span class="token key atrule">etcd</span><span class="token punctuation">:</span>
  <span class="token key atrule">hosts</span><span class="token punctuation">:</span> 10.10.12.210<span class="token punctuation">:</span><span class="token number">2379</span><span class="token punctuation">,</span>10.10.12.211<span class="token punctuation">:</span><span class="token number">2379</span><span class="token punctuation">,</span>10.10.12.212<span class="token punctuation">:</span><span class="token number">2379</span>

<span class="token key atrule">bootstrap</span><span class="token punctuation">:</span>
  <span class="token key atrule">dcs</span><span class="token punctuation">:</span>
    <span class="token key atrule">ttl</span><span class="token punctuation">:</span> <span class="token number">30</span>
    <span class="token key atrule">loop_wait</span><span class="token punctuation">:</span> <span class="token number">10</span>
    <span class="token key atrule">retry_timeout</span><span class="token punctuation">:</span> <span class="token number">10</span>
    <span class="token key atrule">maximum_lag_on_failover</span><span class="token punctuation">:</span> <span class="token number">1048576</span>
    <span class="token key atrule">master_start_timeout</span><span class="token punctuation">:</span> <span class="token number">300</span>
    <span class="token key atrule">synchronous_mode</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
    <span class="token key atrule">postgresql</span><span class="token punctuation">:</span>
      <span class="token key atrule">use_pg_rewind</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">use_slots</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">parameters</span><span class="token punctuation">:</span>
        <span class="token key atrule">listen_addresses</span><span class="token punctuation">:</span> <span class="token string">&quot;0.0.0.0&quot;</span>
        <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">5432</span>
        <span class="token key atrule">wal_level</span><span class="token punctuation">:</span> logical
        <span class="token key atrule">hot_standby</span><span class="token punctuation">:</span> <span class="token string">&quot;on&quot;</span>
        <span class="token key atrule">wal_keep_segments</span><span class="token punctuation">:</span> <span class="token number">1000</span>
        <span class="token key atrule">max_wal_senders</span><span class="token punctuation">:</span> <span class="token number">10</span>
        <span class="token key atrule">max_replication_slots</span><span class="token punctuation">:</span> <span class="token number">10</span>
        <span class="token key atrule">wal_log_hints</span><span class="token punctuation">:</span> <span class="token string">&quot;on&quot;</span>
        <span class="token key atrule">logging_collector</span><span class="token punctuation">:</span> <span class="token string">&quot;on&quot;</span>
    <span class="token comment">#     archive_mode: &quot;on&quot;</span>
    <span class="token comment">#     archive_timeout: 1800s</span>
    <span class="token comment">#     archive_command: mkdir -p /var/lib/pgsql/12/wal_archive &amp;&amp; test ! -f /var/lib/pgsql/12/wal_archive/%f &amp;&amp; cp %p /var/lib/pgsql/12/wal_archive/%f</span>
    <span class="token comment">#   recovery_conf:</span>
    <span class="token comment">#     restore_command: cp /var/lib/pgsql/12/wal_archive/%f %p</span>

  <span class="token key atrule">initdb</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">encoding</span><span class="token punctuation">:</span> UTF8
<span class="token comment">#   - locale: C</span>
<span class="token comment">#   - lc-ctype: zh_CN.UTF-8</span>
  <span class="token punctuation">-</span> data<span class="token punctuation">-</span>checksums

  <span class="token key atrule">pg_hba</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> host replication replicator 127.0.0.1/32 trust
  <span class="token punctuation">-</span> host replication replicator 0.0.0.0/0 md5
  <span class="token punctuation">-</span> host all all 0.0.0.0/0 md5
  <span class="token punctuation">-</span> host all all <span class="token punctuation">:</span><span class="token punctuation">:</span>0/0 md5
    
  <span class="token comment"># Some additional users which needs to be created after initializing new cluster</span>
  <span class="token key atrule">users</span><span class="token punctuation">:</span>
    <span class="token key atrule">admin</span><span class="token punctuation">:</span>
      <span class="token key atrule">password</span><span class="token punctuation">:</span> qaz123
      <span class="token key atrule">options</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> createrole
      <span class="token punctuation">-</span> createdb
    <span class="token key atrule">percona</span><span class="token punctuation">:</span>
      <span class="token key atrule">password</span><span class="token punctuation">:</span> qaz123
      <span class="token key atrule">options</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> createrole
      <span class="token punctuation">-</span> createdb 

<span class="token key atrule">postgresql</span><span class="token punctuation">:</span>
  <span class="token key atrule">cluster_name</span><span class="token punctuation">:</span> abelit_pgcluster
  <span class="token key atrule">listen</span><span class="token punctuation">:</span> 0.0.0.0<span class="token punctuation">:</span><span class="token number">5432</span>
  <span class="token key atrule">connect_address</span><span class="token punctuation">:</span> 10.10.12.211<span class="token punctuation">:</span><span class="token number">5432</span>
  <span class="token key atrule">data_dir</span><span class="token punctuation">:</span> /var/lib/pgsql/12/data/
  <span class="token key atrule">bin_dir</span><span class="token punctuation">:</span> /usr/pgsql<span class="token punctuation">-</span>12/bin/
  <span class="token key atrule">authentication</span><span class="token punctuation">:</span>
    <span class="token key atrule">replication</span><span class="token punctuation">:</span>
      <span class="token key atrule">username</span><span class="token punctuation">:</span> replicator
      <span class="token key atrule">password</span><span class="token punctuation">:</span> Postgres@123
    <span class="token key atrule">superuser</span><span class="token punctuation">:</span>
      <span class="token key atrule">username</span><span class="token punctuation">:</span> postgres
      <span class="token key atrule">password</span><span class="token punctuation">:</span> Postgres@123
    <span class="token key atrule">rewind</span><span class="token punctuation">:</span>
      <span class="token key atrule">username</span><span class="token punctuation">:</span> postgres
      <span class="token key atrule">password</span><span class="token punctuation">:</span> Postgres@123
  <span class="token key atrule">parameters</span><span class="token punctuation">:</span>
    <span class="token key atrule">unix_socket_directories</span><span class="token punctuation">:</span> <span class="token string">&quot;/var/run/postgresql/&quot;</span>

  <span class="token key atrule">create_replica_methods</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> basebackup
  <span class="token key atrule">basebackup</span><span class="token punctuation">:</span>
    <span class="token key atrule">checkpoint</span><span class="token punctuation">:</span> <span class="token string">&#39;fast&#39;</span>

  <span class="token key atrule">basebackup</span><span class="token punctuation">:</span>
    <span class="token key atrule">max-rate</span><span class="token punctuation">:</span> 100M
    <span class="token key atrule">checkpoint</span><span class="token punctuation">:</span> fast

<span class="token comment">#   callbacks:</span>
<span class="token comment">#     on_start: /bin/bash /usr/pgsql-12/bin/patroni_callback.sh</span>
<span class="token comment">#     on_stop: /bin/bash /usr/pgsql-12/bin/patroni_callback.sh</span>
<span class="token comment">#     on_role_change: /bin/bash /usr/pgsql-12/bin/patroni_callback.sh</span>

<span class="token key atrule">watchdog</span><span class="token punctuation">:</span>
  <span class="token key atrule">mode</span><span class="token punctuation">:</span> automatic
  <span class="token key atrule">device</span><span class="token punctuation">:</span> /dev/watchdog
  <span class="token key atrule">safety_margin</span><span class="token punctuation">:</span> <span class="token number">5</span>

<span class="token key atrule">tags</span><span class="token punctuation">:</span>
  <span class="token key atrule">nofailover</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">noloadbalance</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">clonefrom</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">nosync</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在节点3上：</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code>cat <span class="token punctuation">&gt;</span> /etc/patroni/patroni.yml &lt;&lt;EOF
<span class="token key atrule">scope</span><span class="token punctuation">:</span> pgsql
<span class="token key atrule">namespace</span><span class="token punctuation">:</span> abelit_lab
<span class="token key atrule">name</span><span class="token punctuation">:</span> node3

<span class="token key atrule">restapi</span><span class="token punctuation">:</span>
  <span class="token key atrule">listen</span><span class="token punctuation">:</span> 0.0.0.0<span class="token punctuation">:</span><span class="token number">8008</span>
  <span class="token key atrule">connect_address</span><span class="token punctuation">:</span> 10.10.12.212<span class="token punctuation">:</span><span class="token number">8008</span>

<span class="token key atrule">etcd</span><span class="token punctuation">:</span>
  <span class="token key atrule">hosts</span><span class="token punctuation">:</span> 10.10.12.210<span class="token punctuation">:</span><span class="token number">2379</span><span class="token punctuation">,</span>10.10.12.211<span class="token punctuation">:</span><span class="token number">2379</span><span class="token punctuation">,</span>10.10.12.212<span class="token punctuation">:</span><span class="token number">2379</span>

<span class="token key atrule">bootstrap</span><span class="token punctuation">:</span>
  <span class="token key atrule">dcs</span><span class="token punctuation">:</span>
    <span class="token key atrule">ttl</span><span class="token punctuation">:</span> <span class="token number">30</span>
    <span class="token key atrule">loop_wait</span><span class="token punctuation">:</span> <span class="token number">10</span>
    <span class="token key atrule">retry_timeout</span><span class="token punctuation">:</span> <span class="token number">10</span>
    <span class="token key atrule">maximum_lag_on_failover</span><span class="token punctuation">:</span> <span class="token number">1048576</span>
    <span class="token key atrule">master_start_timeout</span><span class="token punctuation">:</span> <span class="token number">300</span>
    <span class="token key atrule">synchronous_mode</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
    <span class="token key atrule">postgresql</span><span class="token punctuation">:</span>
      <span class="token key atrule">use_pg_rewind</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">use_slots</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">parameters</span><span class="token punctuation">:</span>
        <span class="token key atrule">listen_addresses</span><span class="token punctuation">:</span> <span class="token string">&quot;0.0.0.0&quot;</span>
        <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">5432</span>
        <span class="token key atrule">wal_level</span><span class="token punctuation">:</span> logical
        <span class="token key atrule">hot_standby</span><span class="token punctuation">:</span> <span class="token string">&quot;on&quot;</span>
        <span class="token key atrule">wal_keep_segments</span><span class="token punctuation">:</span> <span class="token number">1000</span>
        <span class="token key atrule">max_wal_senders</span><span class="token punctuation">:</span> <span class="token number">10</span>
        <span class="token key atrule">max_replication_slots</span><span class="token punctuation">:</span> <span class="token number">10</span>
        <span class="token key atrule">wal_log_hints</span><span class="token punctuation">:</span> <span class="token string">&quot;on&quot;</span>
        <span class="token key atrule">logging_collector</span><span class="token punctuation">:</span> <span class="token string">&quot;on&quot;</span>
    <span class="token comment">#     archive_mode: &quot;on&quot;</span>
    <span class="token comment">#     archive_timeout: 1800s</span>
    <span class="token comment">#     archive_command: mkdir -p /var/lib/pgsql/12/wal_archive &amp;&amp; test ! -f /var/lib/pgsql/12/wal_archive/%f &amp;&amp; cp %p /var/lib/pgsql/12/wal_archive/%f</span>
    <span class="token comment">#   recovery_conf:</span>
    <span class="token comment">#     restore_command: cp /var/lib/pgsql/12/wal_archive/%f %p</span>

  <span class="token key atrule">initdb</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">encoding</span><span class="token punctuation">:</span> UTF8
<span class="token comment">#   - locale: C</span>
<span class="token comment">#   - lc-ctype: zh_CN.UTF-8</span>
  <span class="token punctuation">-</span> data<span class="token punctuation">-</span>checksums

  <span class="token key atrule">pg_hba</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> host replication replicator 127.0.0.1/32 trust
  <span class="token punctuation">-</span> host replication replicator 0.0.0.0/0 md5
  <span class="token punctuation">-</span> host all all 0.0.0.0/0 md5
  <span class="token punctuation">-</span> host all all <span class="token punctuation">:</span><span class="token punctuation">:</span>0/0 md5
    
  <span class="token comment"># Some additional users which needs to be created after initializing new cluster</span>
  <span class="token key atrule">users</span><span class="token punctuation">:</span>
    <span class="token key atrule">admin</span><span class="token punctuation">:</span>
      <span class="token key atrule">password</span><span class="token punctuation">:</span> qaz123
      <span class="token key atrule">options</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> createrole
      <span class="token punctuation">-</span> createdb
    <span class="token key atrule">percona</span><span class="token punctuation">:</span>
      <span class="token key atrule">password</span><span class="token punctuation">:</span> qaz123
      <span class="token key atrule">options</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> createrole
      <span class="token punctuation">-</span> createdb 

<span class="token key atrule">postgresql</span><span class="token punctuation">:</span>
  <span class="token key atrule">cluster_name</span><span class="token punctuation">:</span> abelit_pgcluster
  <span class="token key atrule">listen</span><span class="token punctuation">:</span> 0.0.0.0<span class="token punctuation">:</span><span class="token number">5432</span>
  <span class="token key atrule">connect_address</span><span class="token punctuation">:</span> 10.10.12.212<span class="token punctuation">:</span><span class="token number">5432</span>
  <span class="token key atrule">data_dir</span><span class="token punctuation">:</span> /var/lib/pgsql/12/data/
  <span class="token key atrule">bin_dir</span><span class="token punctuation">:</span> /usr/pgsql<span class="token punctuation">-</span>12/bin/
  <span class="token key atrule">authentication</span><span class="token punctuation">:</span>
    <span class="token key atrule">replication</span><span class="token punctuation">:</span>
      <span class="token key atrule">username</span><span class="token punctuation">:</span> replicator
      <span class="token key atrule">password</span><span class="token punctuation">:</span> Postgres@123
    <span class="token key atrule">superuser</span><span class="token punctuation">:</span>
      <span class="token key atrule">username</span><span class="token punctuation">:</span> postgres
      <span class="token key atrule">password</span><span class="token punctuation">:</span> Postgres@123
    <span class="token key atrule">rewind</span><span class="token punctuation">:</span>
      <span class="token key atrule">username</span><span class="token punctuation">:</span> postgres
      <span class="token key atrule">password</span><span class="token punctuation">:</span> Postgres@123
  <span class="token key atrule">parameters</span><span class="token punctuation">:</span>
    <span class="token key atrule">unix_socket_directories</span><span class="token punctuation">:</span> <span class="token string">&quot;/var/run/postgresql/&quot;</span>

  <span class="token key atrule">create_replica_methods</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> basebackup
  <span class="token key atrule">basebackup</span><span class="token punctuation">:</span>
    <span class="token key atrule">checkpoint</span><span class="token punctuation">:</span> <span class="token string">&#39;fast&#39;</span>

  <span class="token key atrule">basebackup</span><span class="token punctuation">:</span>
    <span class="token key atrule">max-rate</span><span class="token punctuation">:</span> 100M
    <span class="token key atrule">checkpoint</span><span class="token punctuation">:</span> fast

<span class="token comment">#   callbacks:</span>
<span class="token comment">#     on_start: /bin/bash /usr/pgsql-12/bin/patroni_callback.sh</span>
<span class="token comment">#     on_stop: /bin/bash /usr/pgsql-12/bin/patroni_callback.sh</span>
<span class="token comment">#     on_role_change: /bin/bash /usr/pgsql-12/bin/patroni_callback.sh</span>

<span class="token key atrule">watchdog</span><span class="token punctuation">:</span>
  <span class="token key atrule">mode</span><span class="token punctuation">:</span> automatic
  <span class="token key atrule">device</span><span class="token punctuation">:</span> /dev/watchdog
  <span class="token key atrule">safety_margin</span><span class="token punctuation">:</span> <span class="token number">5</span>

<span class="token key atrule">tags</span><span class="token punctuation">:</span>
  <span class="token key atrule">nofailover</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">noloadbalance</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">clonefrom</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">nosync</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>patroni_callback.sh</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> /usr/pgsql-12/bin/patroni_callback.sh <span class="token operator">&lt;&lt;</span><span class="token string">&#39;EOF&#39;
#!/bin/bash

readonly OPERATION=$1
readonly ROLE=$2
readonly SCOPE=$3

VIP=&#39;10.10.12.230&#39;
PREFIX=&#39;24&#39;
GATEWAY=&#39;10.10.12.254&#39;
BRD=&#39;10.10.12.255&#39;
INF=&#39;eth0&#39;

function usage() {
    echo &quot;Usage: $0 &lt;on_start|on_stop|on_role_change&gt; &lt;ROLE&gt; &lt;SCOPE&gt;&quot;;
    exit 1;
}

echo &quot;$(date &quot;+%Y-%m-%d %H:%M:%S %z&quot;) This is patroni callback $OPERATION $ROLE $SCOPE&quot;

case $OPERATION in
    on_stop)
        sudo ip addr del \${VIP}/\${PREFIX} dev \${INF} label \${INF}:1
        echo &quot;$(date &quot;+%Y-%m-%d %H:%M:%S %z&quot;) VIP \${VIP} removed&quot;
    ;;
    on_start | on_restart | on_role_change)
        if [[ $ROLE == &#39;master&#39; || $ROLE == &#39;standby_leader&#39; ]]; then
            sudo ip addr add \${VIP}/\${PREFIX} brd \${BRD} dev \${INF} label \${INF}:1
            sudo arping -q -A -c 1 -I \${INF} \${VIP}
            echo &quot;$(date &quot;+%Y-%m-%d %H:%M:%S %z&quot;) VIP \${VIP} added&quot;
        else
            sudo ip addr del \${VIP}/\${PREFIX} dev \${INF} label \${INF}:1
            echo &quot;$(date &quot;+%Y-%m-%d %H:%M:%S %z&quot;) VIP \${VIP} removed&quot;
        fi
    ;;
    *)
        usage
    ;;
esac
EOF</span>

<span class="token function">chmod</span> u+x /usr/pgsql-12/bin/patroni_callback.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="patroni服务" tabindex="-1"><a class="header-anchor" href="#patroni服务"><span>patroni服务</span></a></h4><blockquote><p>所有节点</p></blockquote><ul><li>编写启动服务文件</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/systemd/system/patroni.service <span class="token operator">&lt;&lt;</span><span class="token string">EOF
[Unit]
Description=Runners to orchestrate a high-availability PostgreSQL
After=syslog.target network.target
 
[Service]
Type=simple
User=postgres
Group=postgres
#StandardOutput=syslog
ExecStart=/usr/local/bin/patroni /etc/patroni/patroni.yml
ExecReload=/bin/kill -s HUP <span class="token variable">$MAINPID</span>
KillMode=process
TimeoutSec=30
Restart=no
 
[Install]
WantedBy=multi-user.target
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/systemd/system/patroni.service <span class="token operator">&lt;&lt;</span><span class="token string">EOF
[Unit]
Description=Runners to orchestrate a high-availability PostgreSQL
After=syslog.target network.target
 
[Service]
Type=simple
User=postgres
Group=postgres
#StandardOutput=syslog
EnvironmentFile=-/etc/patroni/patroni_env.conf
ExecStartPre=-/usr/bin/sudo /sbin/modprobe softdog
ExecStartPre=-/usr/bin/sudo /bin/chown postgres /dev/watchdog
ExecStart=/usr/local/bin/patroni /etc/patroni/patroni.yml
ExecReload=/bin/kill -s HUP <span class="token variable">$MAINPID</span>
KillMode=process
TimeoutSec=30
Restart=no
 
[Install]
WantedBy=multi-user.target
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>启动patroni服务 确保etcd服务已正常启动，状态健康</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl status etcd
<span class="token builtin class-name">export</span> <span class="token assign-left variable">ETCDCTL_API</span><span class="token operator">=</span><span class="token number">3</span>
etcdctl endpoint health <span class="token parameter variable">--endpoints</span><span class="token operator">=</span><span class="token string">&#39;10.10.12.210:2379,10.10.12.211:2379,10.10.12.212:2379&#39;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>禁用postgresql脚本采用patroni服务启动数据库</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># systemctl stop postgresql-12</span>
<span class="token comment"># systemctl status postgresql-12</span>
<span class="token comment"># systemctl disable postgresql-12</span>

systemctl daemon-reload
systemctl restart patroni
systemctl status patroni

systemctl <span class="token builtin class-name">enable</span> patroni
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="集群管理" tabindex="-1"><a class="header-anchor" href="#集群管理"><span>集群管理</span></a></h3><ul><li>数据库集群检查</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>patronictl <span class="token parameter variable">-c</span> /etc/patroni/patroni.yml list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>etcd检查</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">ETCDCTL_API</span><span class="token operator">=</span><span class="token number">3</span>
etcdctl endpoint health <span class="token parameter variable">--endpoints</span><span class="token operator">=</span><span class="token string">&#39;10.10.12.210:2379,10.10.12.211:2379,10.10.12.212:2379&#39;</span> 

etcdctl <span class="token function">ls</span> /service/batman
etcdctl get /service/batman/members/pg1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,51);function U($,M){const i=p("Tabs");return o(),r("div",null,[m,d(i,{id:"262",data:[{id:"二进制安装"},{id:"rpm安装"}],active:1},{title0:a(({value:e,isActive:l})=>[s("二进制安装")]),title1:a(({value:e,isActive:l})=>[s("rpm安装")]),tab0:a(({value:e,isActive:l})=>[b,k,h,g,y,_,q,f,E,x,T]),tab1:a(({value:e,isActive:l})=>[w,I,P,S,C,L,D,R,A,N,O]),_:1}),F])}const Q=c(v,[["render",U],["__file","pg-ha-patroni-etcd.html.vue"]]),H=JSON.parse('{"path":"/guide/database/postgresql/ha/deployment/pg-ha-patroni-etcd.html","title":"PostgreSQL高可用集群(ETCD+Patroni)","lang":"zh-CN","frontmatter":{"title":"PostgreSQL高可用集群(ETCD+Patroni)","description":"PostgreSQL高可用集群(ETCD+Patroni) 原理及拓扑图 pgsql高可用集群采用postgresql+etcd+patroni+haproxy+keepalived等软件实现，以postgresql做数据库，etcd存储集群状态，patroni与etcd结合实现数据库集群故障切换，haproxy实现数据库高可用（读读写分离），keep...","head":[["meta",{"property":"og:url","content":"https://github.com/abelit/abelit-datapeacock.git/guide/database/postgresql/ha/deployment/pg-ha-patroni-etcd.html"}],["meta",{"property":"og:site_name","content":"数之雀"}],["meta",{"property":"og:title","content":"PostgreSQL高可用集群(ETCD+Patroni)"}],["meta",{"property":"og:description","content":"PostgreSQL高可用集群(ETCD+Patroni) 原理及拓扑图 pgsql高可用集群采用postgresql+etcd+patroni+haproxy+keepalived等软件实现，以postgresql做数据库，etcd存储集群状态，patroni与etcd结合实现数据库集群故障切换，haproxy实现数据库高可用（读读写分离），keep..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-11T14:06:18.000Z"}],["meta",{"property":"article:author","content":"Abelit"}],["meta",{"property":"article:modified_time","content":"2024-05-11T14:06:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"PostgreSQL高可用集群(ETCD+Patroni)\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-11T14:06:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Abelit\\",\\"url\\":\\"https://github.com/abelit\\"}]}"]]},"headers":[{"level":2,"title":"PostgreSQL高可用集群(ETCD+Patroni)","slug":"postgresql高可用集群-etcd-patroni","link":"#postgresql高可用集群-etcd-patroni","children":[{"level":3,"title":"原理及拓扑图","slug":"原理及拓扑图","link":"#原理及拓扑图","children":[]},{"level":3,"title":"主机准备","slug":"主机准备","link":"#主机准备","children":[]},{"level":3,"title":"PostgreSQL部署","slug":"postgresql部署","link":"#postgresql部署","children":[]},{"level":3,"title":"部署ETCD","slug":"部署etcd","link":"#部署etcd","children":[]},{"level":3,"title":"patroni部署","slug":"patroni部署","link":"#patroni部署","children":[]},{"level":3,"title":"集群管理","slug":"集群管理","link":"#集群管理","children":[]}]}],"git":{"createdTime":1715436378000,"updatedTime":1715436378000,"contributors":[{"name":"ableit","email":"ychenid@live.com","commits":1}]},"readingTime":{"minutes":8.5,"words":2551},"filePathRelative":"guide/database/postgresql/ha/deployment/pg-ha-patroni-etcd.md","localizedDate":"2024年5月11日","autoDesc":true,"excerpt":"<h2>PostgreSQL高可用集群(ETCD+Patroni)</h2>\\n<h3>原理及拓扑图</h3>\\n<p>pgsql高可用集群采用postgresql+etcd+patroni+haproxy+keepalived等软件实现，以postgresql做数据库，etcd存储集群状态，patroni与etcd结合实现数据库集群故障切换，haproxy实现数据库高可用（读读写分离），keepalived实现VIP跳转。</p>\\n<p>Patroni 功能特性</p>\\n<ul>\\n<li>支持自动failover和按需switchover</li>\\n<li>支持一个和多个备节点</li>\\n<li>支持级联复制</li>\\n<li>支持同步复制，异步复制</li>\\n<li>支持同步复制下备库故障时自动降级为异步复制（功效类似于MySQL的半同步，但是更加智能）</li>\\n<li>支持控制指定节点是否参与选主，是否参与负载均衡以及是否可以成为同步备机</li>\\n<li>支持通过pg_rewind自动修复旧主</li>\\n<li>支持多种方式初始化集群和重建备机，包括pg_basebackup和支持wal_e，pgBackRest，barman等备份工具的自定义脚本</li>\\n<li>支持自定义外部callback脚本</li>\\n<li>支持REST API</li>\\n<li>支持通过watchdog防止脑裂</li>\\n<li>支持k8s，docker等容器化环境部署</li>\\n<li>支持多种常见DCS(Distributed Configuration Store)存储元数据，包括etcd，ZooKeeper，Consul，Kubernetes</li>\\n</ul>"}');export{Q as comp,H as data};
