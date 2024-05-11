import{_ as d}from"./redis-ha-master-slave-archtecture-001-D8DYfrEH.js";import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as p,c as u,b as r,w as a,f as t,a as e,d as s}from"./app-DR5J2daJ.js";const v={},m=t('<h2 id="主机准备" tabindex="-1"><a class="header-anchor" href="#主机准备"><span>主机准备</span></a></h2><h3 id="拓扑架构" tabindex="-1"><a class="header-anchor" href="#拓扑架构"><span>拓扑架构</span></a></h3><figure><img src="'+d+`" alt="主从架构图" tabindex="0" loading="lazy"><figcaption>主从架构图</figcaption></figure><h3 id="主机信息" tabindex="-1"><a class="header-anchor" href="#主机信息"><span>主机信息</span></a></h3><table><thead><tr><th>编号</th><th>IP 地址</th><th>角色</th><th>操作系统</th><th>内核版本</th><th>数据库版本</th></tr></thead><tbody><tr><td>1</td><td>10.10.13.100</td><td>redis主</td><td>CentOS 7.9</td><td>3.10.0-1160.el7.x86_64</td><td>6.2.14</td></tr><tr><td>2</td><td>10.10.13.101</td><td>redis从</td><td>CentOS 7.9</td><td>3.10.0-1160.el7.x86_64</td><td>6.2.14</td></tr><tr><td>3</td><td>10.10.13.102</td><td>redis从</td><td>CentOS 7.9</td><td>3.10.0-1160.el7.x86_64</td><td>6.2.14</td></tr></tbody></table><h3 id="主机设置" tabindex="-1"><a class="header-anchor" href="#主机设置"><span>主机设置</span></a></h3><ul><li>主机名称设置</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 主节点</span>
hostnamectl set-hostname node0

<span class="token comment"># 从节点</span>
hostnamectl set-hostname node1

<span class="token comment"># 从节点</span>
hostnamectl set-hostname node2

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>主机<code>hosts</code>设置</li></ul><blockquote><p>所有节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/hosts <span class="token operator">&lt;&lt;</span><span class="token string">EOF
127.0.0.1   localhost localhost.localdomain localhost4 localhost4.localdomain4
::1         localhost localhost.localdomain localhost6 localhost6.localdomain6

# by abelit
10.10.13.100 node0
10.10.13.101 node1
10.10.13.102 node2
EOF</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>关闭防火墙</li></ul><blockquote><p>所有节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl stop firewalld
systemctl disable firewalld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>selinux设置</li></ul><blockquote><p>所有节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>setenforce <span class="token number">0</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s/^SELINUX=enforcing/SELINUX=disabled/g&quot;</span> /etc/selinux/config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装依赖" tabindex="-1"><a class="header-anchor" href="#安装依赖"><span>安装依赖</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token function">wget</span>

yum <span class="token parameter variable">-y</span> <span class="token function">install</span> gcc c++ <span class="token function">make</span>  


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装和配置redis主从" tabindex="-1"><a class="header-anchor" href="#安装和配置redis主从"><span>安装和配置Redis主从</span></a></h2><h3 id="安装redis" tabindex="-1"><a class="header-anchor" href="#安装redis"><span>安装Redis</span></a></h3><blockquote><p>所有节点</p></blockquote><ul><li>下载redis</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">wget</span> https://download.redis.io/releases/redis-6.2.14.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>安装redis</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> redis-6.2.14.tar.gz <span class="token parameter variable">-C</span> /usr/local/

<span class="token function">ln</span> <span class="token parameter variable">-sf</span> /usr/local/redis-6.2.14 /usr/local/redis

<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /usr/local/redis/data

<span class="token builtin class-name">cd</span> /usr/local/redis

<span class="token function">make</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置启动服务-可选" tabindex="-1"><a class="header-anchor" href="#配置启动服务-可选"><span>配置启动服务(可选)</span></a></h3><ul><li>使用systemd管理redis服务</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> /lib/systemd/system/redis.service <span class="token operator">&lt;&lt;</span><span class="token string">&#39;EOF&#39;
[Unit]
Description=Redis
After=network.target

[Service]
ExecStart=/usr/local/redis/src/redis-server /usr/local/redis/redis.conf  --daemonize no
ExecStop=/usr/local/redis/src/redis-cli -h 127.0.0.1 -p 6379 shutdown

[Install]
WantedBy=multi-user.target
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>启动redis</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl daemon-reload

systemctl start redis.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="主从配置" tabindex="-1"><a class="header-anchor" href="#主从配置"><span>主从配置</span></a></h3><ul><li>主库配置 编辑<code>/usr/local/redis/redis.conf</code>配置文件，修改如下内容：</li></ul>`,33),b=e("div",{class:"language-conf line-numbers-mode","data-ext":"conf","data-title":"conf"},[e("pre",{class:"language-conf"},[e("code",null,`bind 0.0.0.0
port 6379

protected-mode no
dir /usr/local/redis/data

requirepass Hello@2023
masterauth Hello@2023

appendonly yes
appendfilename "appendonly.aof"
dbfilename dump.rdb

daemonize yes
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),h=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"cp"),s(` /usr/local/redis/redis.conf /usr/local/redis/redis.conf.origin

`),e("span",{class:"token function"},"sed"),s(),e("span",{class:"token parameter variable"},"-i"),s(),e("span",{class:"token string"},"'s/^bind 127.0.0.1 -::1/bind 0.0.0.0/g'"),s(` /usr/local/redis/redis.conf
`),e("span",{class:"token function"},"sed"),s(),e("span",{class:"token parameter variable"},"-i"),s(),e("span",{class:"token string"},"'s/^port 6379/port 6379/g'"),s(` /usr/local/redis/redis.conf
`),e("span",{class:"token function"},"sed"),s(),e("span",{class:"token parameter variable"},"-i"),s(),e("span",{class:"token string"},"'s/^protected-mode yes/protected-mode no/g'"),s(` /usr/local/redis/redis.conf
`),e("span",{class:"token function"},"sed"),s(),e("span",{class:"token parameter variable"},"-i"),s(),e("span",{class:"token string"},"'s/^dir .\\//dir \\/usr\\/local\\/redis\\/data/g'"),s(` /usr/local/redis/redis.conf
`),e("span",{class:"token function"},"sed"),s(),e("span",{class:"token parameter variable"},"-i"),s(),e("span",{class:"token string"},"'s/^# requirepass foobared/requirepass Hello@2023/g'"),s(` /usr/local/redis/redis.conf
`),e("span",{class:"token function"},"sed"),s(),e("span",{class:"token parameter variable"},"-i"),s(),e("span",{class:"token string"},"'s/^# masterauth <master-password>/masterauth Hello@2023/g'"),s(` /usr/local/redis/redis.conf
`),e("span",{class:"token function"},"sed"),s(),e("span",{class:"token parameter variable"},"-i"),s(),e("span",{class:"token string"},"'s/^appendonly no/appendonly yes/g'"),s(` /usr/local/redis/redis.conf
`),e("span",{class:"token function"},"sed"),s(),e("span",{class:"token parameter variable"},"-i"),s(),e("span",{class:"token string"},`'s/^appendfilename "appendonly.aof"/appendfilename "appendonly.aof"/g'`),s(` /usr/local/redis/redis.conf
`),e("span",{class:"token function"},"sed"),s(),e("span",{class:"token parameter variable"},"-i"),s(),e("span",{class:"token string"},"'s/^dbfilename dump.rdb/dbfilename dump.rdb/g'"),s(` /usr/local/redis/redis.conf
`),e("span",{class:"token function"},"sed"),s(),e("span",{class:"token parameter variable"},"-i"),s(),e("span",{class:"token string"},"'s/^daemonize no/daemonize yes/g'"),s(` /usr/local/redis/redis.conf

`),e("span",{class:"token function"},"cat"),s(" /usr/local/redis/redis.conf "),e("span",{class:"token operator"},"|"),s(),e("span",{class:"token function"},"grep"),s(),e("span",{class:"token parameter variable"},"-E"),s(),e("span",{class:"token string"},'"^bind|^port|^protected-mode|^dir|^requirepass|^masterauth|^appendonly|^appendfilename|^dbfilename|^daemonize"'),s(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),g=e("ul",null,[e("li",null,[s("从库配置 编辑"),e("code",null,"/usr/local/redis/redis.conf"),s("配置文件，修改如下内容：")])],-1),k=e("div",{class:"language-conf line-numbers-mode","data-ext":"conf","data-title":"conf"},[e("pre",{class:"language-conf"},[e("code",null,`bind 0.0.0.0
port 6379

protected-mode no
dir /usr/local/redis/data

requirepass Hello@2023
masterauth Hello@2023

appendonly yes
appendfilename "appendonly.aof"
dbfilename dump.rdb

daemonize yes

replicaof node0 6379
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),f=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"cp"),s(` /usr/local/redis/redis.conf /usr/local/redis/redis.conf.origin

`),e("span",{class:"token function"},"sed"),s(),e("span",{class:"token parameter variable"},"-i"),s(),e("span",{class:"token string"},"'s/^bind 127.0.0.1 -::1/bind 0.0.0.0/g'"),s(` /usr/local/redis/redis.conf
`),e("span",{class:"token function"},"sed"),s(),e("span",{class:"token parameter variable"},"-i"),s(),e("span",{class:"token string"},"'s/^port 6379/port 6379/g'"),s(` /usr/local/redis/redis.conf
`),e("span",{class:"token function"},"sed"),s(),e("span",{class:"token parameter variable"},"-i"),s(),e("span",{class:"token string"},"'s/^protected-mode yes/protected-mode no/g'"),s(` /usr/local/redis/redis.conf
`),e("span",{class:"token function"},"sed"),s(),e("span",{class:"token parameter variable"},"-i"),s(),e("span",{class:"token string"},"'s/^dir .\\//dir \\/usr\\/local\\/redis\\/data/g'"),s(` /usr/local/redis/redis.conf
`),e("span",{class:"token function"},"sed"),s(),e("span",{class:"token parameter variable"},"-i"),s(),e("span",{class:"token string"},"'s/^# requirepass foobared/requirepass Hello@2023/g'"),s(` /usr/local/redis/redis.conf
`),e("span",{class:"token function"},"sed"),s(),e("span",{class:"token parameter variable"},"-i"),s(),e("span",{class:"token string"},"'s/^# masterauth <master-password>/masterauth Hello@2023/g'"),s(` /usr/local/redis/redis.conf
`),e("span",{class:"token function"},"sed"),s(),e("span",{class:"token parameter variable"},"-i"),s(),e("span",{class:"token string"},"'s/^appendonly no/appendonly yes/g'"),s(` /usr/local/redis/redis.conf
`),e("span",{class:"token function"},"sed"),s(),e("span",{class:"token parameter variable"},"-i"),s(),e("span",{class:"token string"},`'s/^appendfilename "appendonly.aof"/appendfilename "appendonly.aof"/g'`),s(` /usr/local/redis/redis.conf
`),e("span",{class:"token function"},"sed"),s(),e("span",{class:"token parameter variable"},"-i"),s(),e("span",{class:"token string"},"'s/^dbfilename dump.rdb/dbfilename dump.rdb/g'"),s(` /usr/local/redis/redis.conf
`),e("span",{class:"token function"},"sed"),s(),e("span",{class:"token parameter variable"},"-i"),s(),e("span",{class:"token string"},"'s/^daemonize no/daemonize yes/g'"),s(` /usr/local/redis/redis.conf
`),e("span",{class:"token function"},"sed"),s(),e("span",{class:"token parameter variable"},"-i"),s(),e("span",{class:"token string"},"'s/^# replicaof <masterip> <masterport>/replicaof node0 6379/g'"),s(` /usr/local/redis/redis.conf

`),e("span",{class:"token function"},"cat"),s(" /usr/local/redis/redis.conf "),e("span",{class:"token operator"},"|"),s(),e("span",{class:"token function"},"grep"),s(),e("span",{class:"token parameter variable"},"-E"),s(),e("span",{class:"token string"},'"^bind|^port|^protected-mode|^dir|^requirepass|^masterauth|^appendonly|^appendfilename|^dbfilename|^daemonize|^replicaof"'),s(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),_=t(`<div class="hint-container tip"><p class="hint-container-title">参数说明</p><ul><li>redis protected-mode 是一种安全机制，用于保护 Redis 实例免受未经授权的访问。当 protected-mode 启用时，只有来自本地主机或已在 redis.conf 文件中明确授权的 IP 地址的连接才能访问 Redis 实例。这可以防止恶意攻击者通过网络访问 Redis 实例并执行未经授权的操作。</li></ul></div><h3 id="启动服务" tabindex="-1"><a class="header-anchor" href="#启动服务"><span>启动服务</span></a></h3><ul><li>启动主库</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>/usr/local/redis/src/redis-server /usr/local/redis/redis.conf

<span class="token function">netstat</span>  -antlp<span class="token operator">|</span><span class="token function">grep</span> :6379
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>启动从库</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>/usr/local/redis/src/redis-server /usr/local/redis/redis.conf

<span class="token function">netstat</span>  -antlp<span class="token operator">|</span><span class="token function">grep</span> :6379
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="主从管理" tabindex="-1"><a class="header-anchor" href="#主从管理"><span>主从管理</span></a></h2><h3 id="主从状态检查" tabindex="-1"><a class="header-anchor" href="#主从状态检查"><span>主从状态检查</span></a></h3><h4 id="检查主库状态" tabindex="-1"><a class="header-anchor" href="#检查主库状态"><span>检查主库状态</span></a></h4><ul><li>登陆redis主库</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>/usr/local/redis/src/redis-cli <span class="token parameter variable">-p</span> <span class="token number">6379</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>查看redis主库状态</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>info <span class="token keyword">replication</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>显示结果：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> info replication
<span class="token comment"># Replication</span>
role:master
connected_slaves:2
slave0:ip<span class="token operator">=</span><span class="token number">10.10</span>.13.101,port<span class="token operator">=</span><span class="token number">6379</span>,state<span class="token operator">=</span>online,offset<span class="token operator">=</span><span class="token number">688</span>,lag<span class="token operator">=</span><span class="token number">1</span>
slave1:ip<span class="token operator">=</span><span class="token number">10.10</span>.13.102,port<span class="token operator">=</span><span class="token number">6379</span>,state<span class="token operator">=</span>online,offset<span class="token operator">=</span><span class="token number">688</span>,lag<span class="token operator">=</span><span class="token number">1</span>
master_failover_state:no-failover
master_replid:93041a705f6ea57f30038f54b2e447f2835f79e8
master_replid2:0000000000000000000000000000000000000000
master_repl_offset:688
second_repl_offset:-1
repl_backlog_active:1
repl_backlog_size:1048576
repl_backlog_first_byte_offset:1
repl_backlog_histlen:688
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="检查从库状态" tabindex="-1"><a class="header-anchor" href="#检查从库状态"><span>检查从库状态</span></a></h4><ul><li>登陆redis从库</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>/usr/local/redis/src/redis-cli <span class="token parameter variable">-p</span> <span class="token number">6379</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>查看redis从库状态</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>info <span class="token keyword">replication</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>显示结果：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> info replication
<span class="token comment"># Replication</span>
role:slave
master_host:node0
master_port:6379
master_link_status:up
master_last_io_seconds_ago:6
master_sync_in_progress:0
slave_read_repl_offset:688
slave_repl_offset:688
slave_priority:100
slave_read_only:1
replica_announced:1
connected_slaves:0
master_failover_state:no-failover
master_replid:93041a705f6ea57f30038f54b2e447f2835f79e8
master_replid2:0000000000000000000000000000000000000000
master_repl_offset:688
second_repl_offset:-1
repl_backlog_active:1
repl_backlog_size:1048576
repl_backlog_first_byte_offset:1
repl_backlog_histlen:688
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据同步测试" tabindex="-1"><a class="header-anchor" href="#数据同步测试"><span>数据同步测试</span></a></h2><ul><li>主库写入数据</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost redis<span class="token punctuation">]</span><span class="token comment"># /usr/local/redis/src/redis-cli -p 6379</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> auth Hello@2023
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> name abelit
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get name
<span class="token string">&quot;abelit&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>从库读取数据</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost redis<span class="token punctuation">]</span><span class="token comment"># /usr/local/redis/src/redis-cli -p 6379</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> auth Hello@2023
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get name
<span class="token string">&quot;abelit&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="主从切换" tabindex="-1"><a class="header-anchor" href="#主从切换"><span>主从切换</span></a></h2><h3 id="手动switchover" tabindex="-1"><a class="header-anchor" href="#手动switchover"><span>手动switchover</span></a></h3><ul><li>停止主库</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>/usr/local/redis/src/redis-cli <span class="token parameter variable">-a</span> <span class="token string">&quot;Hello@2023&quot;</span> <span class="token parameter variable">-h</span> node0 <span class="token parameter variable">-p</span> <span class="token number">6379</span> <span class="token function">shutdown</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>把从库设置为主库</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>/usr/local/redis/src/redis-cli <span class="token parameter variable">-a</span> <span class="token string">&quot;Hello@2023&quot;</span> <span class="token parameter variable">-h</span> node1 <span class="token parameter variable">-p</span> <span class="token number">6379</span> replicaof NO ONE
/usr/local/redis/src/redis-cli <span class="token parameter variable">-a</span> <span class="token string">&quot;Hello@2023&quot;</span> <span class="token parameter variable">-h</span> node1 <span class="token parameter variable">-p</span> <span class="token number">6379</span> info replication
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>持久化新主库数据</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>/usr/local/redis/src/redis-cli <span class="token parameter variable">-a</span> <span class="token string">&quot;Hello@2023&quot;</span> <span class="token parameter variable">-h</span> node1 <span class="token parameter variable">-p</span> <span class="token number">6379</span> save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>后面两步可实现原主库恢复。</p><ul><li>复制新主库的数据到原主库</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">scp</span> /usr/local/redis/data/dump.rdb root@node0:/usr/local/redis/data/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>启动原主库</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>/usr/local/redis/src/redis-server /usr/local/redis/redis.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>把新主库转为从库</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>/usr/local/redis/src/redis-cli <span class="token parameter variable">-a</span> <span class="token string">&quot;Hello@2023&quot;</span> <span class="token parameter variable">-h</span> node1 <span class="token parameter variable">-p</span> <span class="token number">6379</span> replicaof node0 <span class="token number">6379</span>
/usr/local/redis/src/redis-cli <span class="token parameter variable">-a</span> <span class="token string">&quot;Hello@2023&quot;</span> <span class="token parameter variable">-h</span> node1 <span class="token parameter variable">-p</span> <span class="token number">6379</span> info replication
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,42);function y(x,q){const i=o("CodeTabs");return p(),u("div",null,[m,r(i,{id:"208",data:[{id:"手动配置"},{id:"自动配置"}],active:0},{title0:a(({value:n,isActive:l})=>[s("手动配置")]),title1:a(({value:n,isActive:l})=>[s("自动配置")]),tab0:a(({value:n,isActive:l})=>[b]),tab1:a(({value:n,isActive:l})=>[h]),_:1}),g,r(i,{id:"223",data:[{id:"手动配置"},{id:"自动配置"}],active:0},{title0:a(({value:n,isActive:l})=>[s("手动配置")]),title1:a(({value:n,isActive:l})=>[s("自动配置")]),tab0:a(({value:n,isActive:l})=>[k]),tab1:a(({value:n,isActive:l})=>[f]),_:1}),_])}const H=c(v,[["render",y],["__file","redis-ha-master-slave.html.vue"]]),O=JSON.parse('{"path":"/guide/database/redis/ha/deployment/redis-ha-master-slave.html","title":"Redis 主从集群搭建","lang":"zh-CN","frontmatter":{"title":"Redis 主从集群搭建","description":"主机准备 拓扑架构 主从架构图主从架构图 主机信息 主机设置 主机名称设置 主机hosts设置 所有节点 关闭防火墙 所有节点 selinux设置 所有节点 安装依赖 安装和配置Redis主从 安装Redis 所有节点 下载redis 安装redis 配置启动服务(可选) 使用systemd管理redis服务 启动redis 主从配置 主库配置 编辑/...","head":[["meta",{"property":"og:url","content":"https://github.com/abelit/abelit-datapeacock.git/guide/database/redis/ha/deployment/redis-ha-master-slave.html"}],["meta",{"property":"og:site_name","content":"数之雀"}],["meta",{"property":"og:title","content":"Redis 主从集群搭建"}],["meta",{"property":"og:description","content":"主机准备 拓扑架构 主从架构图主从架构图 主机信息 主机设置 主机名称设置 主机hosts设置 所有节点 关闭防火墙 所有节点 selinux设置 所有节点 安装依赖 安装和配置Redis主从 安装Redis 所有节点 下载redis 安装redis 配置启动服务(可选) 使用systemd管理redis服务 启动redis 主从配置 主库配置 编辑/..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-11T14:06:18.000Z"}],["meta",{"property":"article:author","content":"Abelit"}],["meta",{"property":"article:modified_time","content":"2024-05-11T14:06:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis 主从集群搭建\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-11T14:06:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Abelit\\",\\"url\\":\\"https://github.com/abelit\\"}]}"]]},"headers":[{"level":2,"title":"主机准备","slug":"主机准备","link":"#主机准备","children":[{"level":3,"title":"拓扑架构","slug":"拓扑架构","link":"#拓扑架构","children":[]},{"level":3,"title":"主机信息","slug":"主机信息","link":"#主机信息","children":[]},{"level":3,"title":"主机设置","slug":"主机设置","link":"#主机设置","children":[]},{"level":3,"title":"安装依赖","slug":"安装依赖","link":"#安装依赖","children":[]}]},{"level":2,"title":"安装和配置Redis主从","slug":"安装和配置redis主从","link":"#安装和配置redis主从","children":[{"level":3,"title":"安装Redis","slug":"安装redis","link":"#安装redis","children":[]},{"level":3,"title":"配置启动服务(可选)","slug":"配置启动服务-可选","link":"#配置启动服务-可选","children":[]},{"level":3,"title":"主从配置","slug":"主从配置","link":"#主从配置","children":[]},{"level":3,"title":"启动服务","slug":"启动服务","link":"#启动服务","children":[]}]},{"level":2,"title":"主从管理","slug":"主从管理","link":"#主从管理","children":[{"level":3,"title":"主从状态检查","slug":"主从状态检查","link":"#主从状态检查","children":[]}]},{"level":2,"title":"数据同步测试","slug":"数据同步测试","link":"#数据同步测试","children":[]},{"level":2,"title":"主从切换","slug":"主从切换","link":"#主从切换","children":[{"level":3,"title":"手动switchover","slug":"手动switchover","link":"#手动switchover","children":[]}]}],"git":{"createdTime":1715436378000,"updatedTime":1715436378000,"contributors":[{"name":"ableit","email":"ychenid@live.com","commits":1}]},"readingTime":{"minutes":3.68,"words":1103},"filePathRelative":"guide/database/redis/ha/deployment/redis-ha-master-slave.md","localizedDate":"2024年5月11日","autoDesc":true,"excerpt":"<h2>主机准备</h2>\\n<h3>拓扑架构</h3>\\n<figure><figcaption>主从架构图</figcaption></figure>\\n<h3>主机信息</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>编号</th>\\n<th>IP 地址</th>\\n<th>角色</th>\\n<th>操作系统</th>\\n<th>内核版本</th>\\n<th>数据库版本</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>1</td>\\n<td>10.10.13.100</td>\\n<td>redis主</td>\\n<td>CentOS 7.9</td>\\n<td>3.10.0-1160.el7.x86_64</td>\\n<td>6.2.14</td>\\n</tr>\\n<tr>\\n<td>2</td>\\n<td>10.10.13.101</td>\\n<td>redis从</td>\\n<td>CentOS 7.9</td>\\n<td>3.10.0-1160.el7.x86_64</td>\\n<td>6.2.14</td>\\n</tr>\\n<tr>\\n<td>3</td>\\n<td>10.10.13.102</td>\\n<td>redis从</td>\\n<td>CentOS 7.9</td>\\n<td>3.10.0-1160.el7.x86_64</td>\\n<td>6.2.14</td>\\n</tr>\\n</tbody>\\n</table>"}');export{H as comp,O as data};
