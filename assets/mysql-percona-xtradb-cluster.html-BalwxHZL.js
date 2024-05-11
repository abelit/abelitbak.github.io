import{_ as d,a as r}from"./mysql-galera-cluster-node-state-01-pXha8A7P.js";import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as p,c as u,b as v,w as n,f as i,d as e,a as s}from"./app-DR5J2daJ.js";const m={},b=i('<h2 id="主机准备" tabindex="-1"><a class="header-anchor" href="#主机准备"><span>主机准备</span></a></h2><h3 id="主机信息" tabindex="-1"><a class="header-anchor" href="#主机信息"><span>主机信息</span></a></h3><table><thead><tr><th>编号</th><th>IP 地址</th><th>角色</th><th>操作系统</th><th>内核版本</th><th>软件及版本</th></tr></thead><tbody><tr><td>1</td><td>10.10.13.100</td><td>mysql node 1</td><td>CentOS 7.9</td><td>3.10.0-1160.el7.x86_64</td><td>mysql galera 8.0.34</td></tr><tr><td>2</td><td>10.10.13.101</td><td>mysql node 1</td><td>CentOS 7.9</td><td>3.10.0-1160.el7.x86_64</td><td>mysql galera 8.0.34</td></tr><tr><td>3</td><td>10.10.13.102</td><td>mysql node 1</td><td>CentOS 7.9</td><td>3.10.0-1160.el7.x86_64</td><td>mysql galera 8.0.34</td></tr></tbody></table><h3 id="拓扑结构" tabindex="-1"><a class="header-anchor" href="#拓扑结构"><span>拓扑结构</span></a></h3><figure><img src="'+d+`" alt="MySQL MySQL Galera Cluster" tabindex="0" loading="lazy"><figcaption>MySQL MySQL Galera Cluster</figcaption></figure><h3 id="主机设置" tabindex="-1"><a class="header-anchor" href="#主机设置"><span>主机设置</span></a></h3><ul><li>主机名称设置</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 节点1</span>
hostnamectl set-hostname node1

<span class="token comment"># 节点2</span>
hostnamectl set-hostname node2

<span class="token comment"># 节点3</span>
hostnamectl set-hostname node3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>主机<code>hosts</code>设置</li></ul><blockquote><p>所有节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/hosts <span class="token operator">&lt;&lt;</span><span class="token string">EOF
127.0.0.1   localhost localhost.localdomain localhost4 localhost4.localdomain4
::1         localhost localhost.localdomain localhost6 localhost6.localdomain6

# by abelit
10.10.13.100 node1
10.10.13.101 node2
10.10.13.102 node3
EOF</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>关闭防火墙</li></ul><blockquote><p>所有节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl stop firewalld
systemctl disable firewalld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>需开放端口</p><ul><li>3306</li><li>4444</li><li>4567</li><li>4568</li></ul></li><li><p>Selinux设置</p></li></ul><blockquote><p>所有节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>setenforce <span class="token number">0</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s/^SELINUX=enforcing/SELINUX=disabled/g&quot;</span> /etc/selinux/config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装依赖" tabindex="-1"><a class="header-anchor" href="#安装依赖"><span>安装依赖</span></a></h3><blockquote><p>所有节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> socat stunnel <span class="token function">wget</span> <span class="token function">rsync</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="安装配置集群" tabindex="-1"><a class="header-anchor" href="#安装配置集群"><span>安装配置集群</span></a></h2><h3 id="安装pecona软件依赖库" tabindex="-1"><a class="header-anchor" href="#安装pecona软件依赖库"><span>安装Pecona软件依赖库</span></a></h3><blockquote><p>所有节点</p></blockquote>`,23),h=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"wget"),e(),s("span",{class:"token parameter variable"},"-O"),e(` /etc/yum.repos.d/epel.repo https://mirrors.aliyun.com/repo/epel-7.repo

yum `),s("span",{class:"token function"},"install"),e(),s("span",{class:"token parameter variable"},"-y"),e(` https://repo.percona.com/yum/percona-release-latest.noarch.rpm
percona-release enable-only pxc-80 release
percona-release `),s("span",{class:"token builtin class-name"},"enable"),e(` tools release
yum `),s("span",{class:"token function"},"install"),e(),s("span",{class:"token parameter variable"},"-y"),e(` percona-xtradb-cluster
yum `),s("span",{class:"token function"},"install"),e(),s("span",{class:"token parameter variable"},"-y"),e(` percona-xtrabackup-80
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),k=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[e("yum "),s("span",{class:"token function"},"install"),e(),s("span",{class:"token parameter variable"},"-y"),e(` https://repo.percona.com/yum/percona-release-latest.noarch.rpm
percona-release setup pxc-80
yum `),s("span",{class:"token function"},"install"),e(),s("span",{class:"token parameter variable"},"-y"),e(` percona-xtradb-cluster
yum `),s("span",{class:"token function"},"install"),e(),s("span",{class:"token parameter variable"},"-y"),e(` percona-xtrabackup-80
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),g=i(`<h3 id="修改root密码" tabindex="-1"><a class="header-anchor" href="#修改root密码"><span>修改root密码</span></a></h3><blockquote><p>在第一个节点</p></blockquote><ul><li>启动mysqld</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl start mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>获取初始密码</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># cat /var/log/mysqld.log|grep &quot;A temporary password&quot;|awk -F&#39;root@localhost:&#39; &#39;{print $2}&#39;</span>
<span class="token assign-left variable">MYSQL_INITIAL_PASSWORD</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">cat</span> /var/log/mysqld.log<span class="token operator">|</span><span class="token function">grep</span> <span class="token string">&quot;A temporary password&quot;</span><span class="token operator">|</span><span class="token function">awk</span> -F<span class="token string">&#39;root@localhost:&#39;</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token operator">|</span><span class="token function">sed</span> s/<span class="token punctuation">[</span><span class="token punctuation">[</span>:space:<span class="token punctuation">]</span><span class="token punctuation">]</span>//g<span class="token variable">\`</span></span>

mysql <span class="token parameter variable">-uroot</span> -p<span class="token variable">$MYSQL_INITIAL_PASSWORD</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>修改密码及密码策略</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- set global validate_password_policy=0;</span>
<span class="token comment">-- set global validate_password_length=0;</span>
<span class="token keyword">alter</span> <span class="token keyword">user</span> <span class="token string">&#39;root&#39;</span><span class="token variable">@&#39;localhost&#39;</span> identified <span class="token keyword">by</span> <span class="token string">&#39;rootPass&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建同步用户" tabindex="-1"><a class="header-anchor" href="#创建同步用户"><span>创建同步用户</span></a></h3><blockquote><p>在第一个节点</p></blockquote><ul><li>登陆</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-prootPass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>创建用户</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">user</span> <span class="token string">&#39;sst&#39;</span><span class="token variable">@&#39;%&#39;</span> IDENTIFIED <span class="token keyword">BY</span> <span class="token string">&#39;sst@123&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">grant</span> <span class="token keyword">all</span> <span class="token keyword">on</span> <span class="token operator">*</span><span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">to</span> <span class="token string">&#39;sst&#39;</span><span class="token variable">@&#39;%&#39;</span><span class="token punctuation">;</span>

flush <span class="token keyword">privileges</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>由于MySQL默认的root用户只是用来修改本机配置，我们需要新建一个用户用来同步数据。</p></div><h3 id="配置galera集群" tabindex="-1"><a class="header-anchor" href="#配置galera集群"><span>配置Galera集群</span></a></h3><p>节点1，编辑<code>/etc/my.cnf</code>:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/my.cnf <span class="token operator">&lt;&lt;</span><span class="token string">&#39;EOF&#39;
[mysqld]
datadir=/var/lib/mysql
socket=/var/lib/mysql/mysql.sock
user=mysql
skip-host-cache
skip-name-resolve
wsrep_on=on
performance_schema=on
symbolic-links=0
log-error=/var/log/mysqld.log
pid-file=/var/run/mysqld/mysqld.pid

server_id=1
binlog_format=row
binlog_expire_logs_seconds=604800
bind-address=0.0.0.0
default_storage_engine=InnoDB
innodb_buffer_pool_size=128M
innodb_file_per_table=1
innodb_autoinc_lock_mode=2
innodb_flush_log_at_trx_commit=0
slow_query_log=on
 
wsrep_on=ON
wsrep_provider=/usr/lib64/galera4/libgalera_smm.so
wsrep_cluster_name=&#39;abelitPXC&#39;
# wsrep_cluster_address=&#39;gcomm://&#39;
wsrep_cluster_address=&#39;gcomm://node1,node2,node3&#39;
wsrep_node_name=&#39;node1&#39;
wsrep_node_address=&#39;10.10.13.100&#39;
wsrep_sst_method=xtrabackup-v2
wsrep_slave_threads=8
wsrep_log_conflicts
pxc-encrypt-cluster-traffic=0
# wsrep_provider_options=&quot;socket.ssl_key=server-key.pem;socket.ssl_cert=server-cert.pem;socket.ssl_ca=ca.pem&quot;
# [sst]
# encrypt=4
# ssl-key=server-key.pem
# ssl-ca=ca.pem
# ssl-cert=server-cert.pem

pxc_strict_mode=ENFORCING
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>节点2，编辑<code>/etc/my.cnf</code>:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/my.cnf <span class="token operator">&lt;&lt;</span><span class="token string">&#39;EOF&#39;
[mysqld]
datadir=/var/lib/mysql
socket=/var/lib/mysql/mysql.sock
user=mysql
skip-host-cache
skip-name-resolve
wsrep_on=on
performance_schema=on
symbolic-links=0
log-error=/var/log/mysqld.log
pid-file=/var/run/mysqld/mysqld.pid

server_id=2
binlog_format=row
binlog_expire_logs_seconds=604800
bind-address=0.0.0.0
default_storage_engine=InnoDB
innodb_buffer_pool_size=128M
innodb_file_per_table=1
innodb_autoinc_lock_mode=2
innodb_flush_log_at_trx_commit=0
slow_query_log=on
 
wsrep_on=ON
wsrep_provider=/usr/lib64/galera4/libgalera_smm.so
wsrep_cluster_name=&#39;abelitPXC&#39;
# wsrep_cluster_address=&#39;gcomm://&#39;
wsrep_cluster_address=&#39;gcomm://node1,node2,node3&#39;
wsrep_node_name=&#39;node2&#39;
wsrep_node_address=&#39;10.10.13.101&#39;
wsrep_sst_method=xtrabackup-v2
wsrep_slave_threads=8
wsrep_log_conflicts
pxc-encrypt-cluster-traffic=0
# wsrep_provider_options=&quot;socket.ssl_key=server-key.pem;socket.ssl_cert=server-cert.pem;socket.ssl_ca=ca.pem&quot;
# [sst]
# encrypt=4
# ssl-key=server-key.pem
# ssl-ca=ca.pem
# ssl-cert=server-cert.pem

pxc_strict_mode=ENFORCING
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>节点3，编辑<code>/etc/my.cnf</code>:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/my.cnf <span class="token operator">&lt;&lt;</span><span class="token string">&#39;EOF&#39;
[mysqld]
datadir=/var/lib/mysql
socket=/var/lib/mysql/mysql.sock
user=mysql
skip-host-cache
skip-name-resolve
wsrep_on=on
performance_schema=on
symbolic-links=0
log-error=/var/log/mysqld.log
pid-file=/var/run/mysqld/mysqld.pid

server_id=3
binlog_format=row
binlog_expire_logs_seconds=604800
bind-address=0.0.0.0
default_storage_engine=InnoDB
innodb_buffer_pool_size=128M
innodb_file_per_table=1
innodb_autoinc_lock_mode=2
innodb_flush_log_at_trx_commit=0
slow_query_log=on
 
wsrep_on=ON
wsrep_provider=/usr/lib64/galera4/libgalera_smm.so
wsrep_cluster_name=&#39;abelitPXC&#39;
# wsrep_cluster_address=&#39;gcomm://&#39;
wsrep_cluster_address=&#39;gcomm://node1,node2,node3&#39;
wsrep_node_name=&#39;node3&#39;
wsrep_node_address=&#39;10.10.13.102&#39;
wsrep_sst_method=xtrabackup-v2
wsrep_slave_threads=8
wsrep_log_conflicts
pxc-encrypt-cluster-traffic=0
# wsrep_provider_options=&quot;socket.ssl_key=server-key.pem;socket.ssl_cert=server-cert.pem;socket.ssl_ca=ca.pem&quot;
# [sst]
# encrypt=4
# ssl-key=server-key.pem
# ssl-ca=ca.pem
# ssl-cert=server-cert.pem

pxc_strict_mode=ENFORCING
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">参数说明</p><ul><li>server_id: 每台都不重复</li><li>binlog_format: 使用galera一定要是ROW格式而不能是SQL格式，不然会影响性能和一致性</li><li>default_storage_engine: galera在非事务性的存储引擎，例如MyISAM上无法工作</li><li>innodb_autoinc_lock_mode: AUTO_INCREMENT字段，全部使用interleaved lock mode，此种方式不适用于SQL模式的日志复制，但是比较适合ROW模式，由于insert语句不使用表级auto-inc lock，所以速度比较快</li><li>innodb_flush_log_at_trx_commit: 为了提高性能，galera官方建议使用1s刷一次日志的方式，但是同时也是不安全的方式，如果有备用电源，我认为设置为2比较好</li><li>wsrep_cluster_name: 一个集群用同一个名字,几台机器的必须一样，用来区分不同的集群</li><li>wsrep_node_name: 每台都不重复</li><li>wsrep_node_address: 本机IP地址</li><li>wsrep_sst_auth: 前面创建的用于同步的用户名和密码</li><li>wsrep_cluster_address: 这个比较重要，服务器1设置为&#39;gcomm://&#39;即可，服务器2和3需等1开启之后，再去设置成除本机之外的另外两台IP地址</li><li>wsrep_sst_method: sst(State Snapshot Transfer)的默认同步方式就是rysnc，具体请参考：http://galeracluster.com/documentation-webpages/sst.html</li><li>wsrep_provider: 这个插件位置最关键，没有的话运行不起来, 根据实际清空修改</li><li>pxc_strict_mode: DISABLED,PERMISSIVE,ENFORCING,MASTER</li><li>pxc-encrypt-cluster-traffic: 默认1，此时必须设置<code>wsrep_provider_options</code>证书参数，且每个节点必须使用相同的 SSL 证书</li></ul></div><h3 id="初始化集群" tabindex="-1"><a class="header-anchor" href="#初始化集群"><span>初始化集群</span></a></h3><h4 id="启动第一个节点" tabindex="-1"><a class="header-anchor" href="#启动第一个节点"><span>启动第一个节点</span></a></h4><blockquote><p>在第一个节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl stop mysql

systemctl start mysql@bootstrap.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>检查集群状态</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>mysql <span class="token operator">-</span>uroot <span class="token operator">-</span>prootPass <span class="token operator">-</span>e <span class="token string">&quot;show status like &#39;wsrep%&#39;;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="添加其他节点" tabindex="-1"><a class="header-anchor" href="#添加其他节点"><span>添加其他节点</span></a></h4><blockquote><p>在其他节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl restart mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="集群管理" tabindex="-1"><a class="header-anchor" href="#集群管理"><span>集群管理</span></a></h2><h3 id="检查集群状态" tabindex="-1"><a class="header-anchor" href="#检查集群状态"><span>检查集群状态</span></a></h3><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">show</span> <span class="token keyword">status</span> <span class="token operator">like</span> <span class="token string">&#39;wsrep%&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>wsrep_local_state_comment: 同步状态，正常为Synced wsrep_cluster_size: 集群服务器数量</p></div><h3 id="节点状态变化阶段" tabindex="-1"><a class="header-anchor" href="#节点状态变化阶段"><span>节点状态变化阶段</span></a></h3><ul><li>OPEN：节点启动成功，尝试连接到集群时的状态</li><li>PRIMARY：节点已处于集群中，在新节点加入并选取donor进行数据同步时的状态</li><li>JOINER：节点处于等待接收同步文件时的状态</li><li>JOINERD：节点完成数据同步工作，尝试保持和集群进度一致时的状态</li><li>SYNCED：节点正常提供服务时的状态，表示已经同步完成并和集群进度保持一致</li><li>DONOR(数据的提供者)：节点处于为新加入的节点提供全量数据时的状态</li></ul><figure><img src="`+r+`" alt="节点状态变化阶段" tabindex="0" loading="lazy"><figcaption>节点状态变化阶段</figcaption></figure><h3 id="整个集群关闭后启动操作" tabindex="-1"><a class="header-anchor" href="#整个集群关闭后启动操作"><span>整个集群关闭后启动操作</span></a></h3><ul><li>查看所有的mysql服务器，找到seqno最大的节点，把<code>grastate.dat</code>中<code>safe_to_boostrap</code>的值改为1</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> /var/lib/mysql/grastate.dat 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>在seqno最大的节点启动</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl start mysql@bootstrap.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>启动其他节点</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl start mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="数据同步验证" tabindex="-1"><a class="header-anchor" href="#数据同步验证"><span>数据同步验证</span></a></h2><ul><li>登陆数据库</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-prootPass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>在其中一个节点创建数据库</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">database</span> testdb1<span class="token punctuation">;</span>

<span class="token keyword">show</span> <span class="token keyword">databases</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在其他节点查看数据库</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">show</span> <span class="token keyword">databases</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>在其他节点创建表并写入数据</li><li>登陆数据库</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-prootPass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>创建表和插入测试数据</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">use</span> testdb1<span class="token punctuation">;</span>

<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> tusers <span class="token punctuation">(</span>
  id <span class="token keyword">INT</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>
  name <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  email <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span>
<span class="token punctuation">)</span> <span class="token keyword">AUTO_INCREMENT</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> tusers <span class="token punctuation">(</span>name<span class="token punctuation">,</span> email<span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">&#39;Alice&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;alice@example.com&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在其他节点查看数据是否同步</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">use</span> testdb1<span class="token punctuation">;</span>

<span class="token keyword">select</span> id<span class="token punctuation">,</span> name<span class="token punctuation">,</span> email <span class="token keyword">from</span> tusers<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,59);function _(y,q){const t=o("CodeTabs");return p(),u("div",null,[b,v(t,{id:"195",data:[{id:"CentOS 7"},{id:"CentOS 8.x +"}],active:0},{title0:n(({value:a,isActive:l})=>[e("CentOS 7")]),title1:n(({value:a,isActive:l})=>[e("CentOS 8.x +")]),tab0:n(({value:a,isActive:l})=>[h]),tab1:n(({value:a,isActive:l})=>[k]),_:1}),g])}const S=c(m,[["render",_],["__file","mysql-percona-xtradb-cluster.html.vue"]]),N=JSON.parse('{"path":"/guide/database/mysql/ha/deployment/mysql-percona-xtradb-cluster.html","title":"Percona Xtradb Cluster","lang":"zh-CN","frontmatter":{"title":"Percona Xtradb Cluster","description":"主机准备 主机信息 拓扑结构 MySQL MySQL Galera ClusterMySQL MySQL Galera Cluster 主机设置 主机名称设置 主机hosts设置 所有节点 关闭防火墙 所有节点 需开放端口 3306 4444 4567 4568 Selinux设置 所有节点 安装依赖 所有节点 安装配置集群 安装Pecona软件依赖库...","head":[["meta",{"property":"og:url","content":"https://github.com/abelit/abelit-datapeacock.git/guide/database/mysql/ha/deployment/mysql-percona-xtradb-cluster.html"}],["meta",{"property":"og:site_name","content":"数之雀"}],["meta",{"property":"og:title","content":"Percona Xtradb Cluster"}],["meta",{"property":"og:description","content":"主机准备 主机信息 拓扑结构 MySQL MySQL Galera ClusterMySQL MySQL Galera Cluster 主机设置 主机名称设置 主机hosts设置 所有节点 关闭防火墙 所有节点 需开放端口 3306 4444 4567 4568 Selinux设置 所有节点 安装依赖 所有节点 安装配置集群 安装Pecona软件依赖库..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-11T14:06:18.000Z"}],["meta",{"property":"article:author","content":"Abelit"}],["meta",{"property":"article:modified_time","content":"2024-05-11T14:06:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Percona Xtradb Cluster\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-11T14:06:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Abelit\\",\\"url\\":\\"https://github.com/abelit\\"}]}"]]},"headers":[{"level":2,"title":"主机准备","slug":"主机准备","link":"#主机准备","children":[{"level":3,"title":"主机信息","slug":"主机信息","link":"#主机信息","children":[]},{"level":3,"title":"拓扑结构","slug":"拓扑结构","link":"#拓扑结构","children":[]},{"level":3,"title":"主机设置","slug":"主机设置","link":"#主机设置","children":[]},{"level":3,"title":"安装依赖","slug":"安装依赖","link":"#安装依赖","children":[]}]},{"level":2,"title":"安装配置集群","slug":"安装配置集群","link":"#安装配置集群","children":[{"level":3,"title":"安装Pecona软件依赖库","slug":"安装pecona软件依赖库","link":"#安装pecona软件依赖库","children":[]},{"level":3,"title":"修改root密码","slug":"修改root密码","link":"#修改root密码","children":[]},{"level":3,"title":"创建同步用户","slug":"创建同步用户","link":"#创建同步用户","children":[]},{"level":3,"title":"配置Galera集群","slug":"配置galera集群","link":"#配置galera集群","children":[]},{"level":3,"title":"初始化集群","slug":"初始化集群","link":"#初始化集群","children":[]}]},{"level":2,"title":"集群管理","slug":"集群管理","link":"#集群管理","children":[{"level":3,"title":"检查集群状态","slug":"检查集群状态","link":"#检查集群状态","children":[]},{"level":3,"title":"节点状态变化阶段","slug":"节点状态变化阶段","link":"#节点状态变化阶段","children":[]},{"level":3,"title":"整个集群关闭后启动操作","slug":"整个集群关闭后启动操作","link":"#整个集群关闭后启动操作","children":[]}]},{"level":2,"title":"数据同步验证","slug":"数据同步验证","link":"#数据同步验证","children":[]}],"git":{"createdTime":1715436378000,"updatedTime":1715436378000,"contributors":[{"name":"ableit","email":"ychenid@live.com","commits":1}]},"readingTime":{"minutes":5.36,"words":1608},"filePathRelative":"guide/database/mysql/ha/deployment/mysql-percona-xtradb-cluster.md","localizedDate":"2024年5月11日","autoDesc":true,"excerpt":"<h2>主机准备</h2>\\n<h3>主机信息</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>编号</th>\\n<th>IP 地址</th>\\n<th>角色</th>\\n<th>操作系统</th>\\n<th>内核版本</th>\\n<th>软件及版本</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>1</td>\\n<td>10.10.13.100</td>\\n<td>mysql node 1</td>\\n<td>CentOS 7.9</td>\\n<td>3.10.0-1160.el7.x86_64</td>\\n<td>mysql galera 8.0.34</td>\\n</tr>\\n<tr>\\n<td>2</td>\\n<td>10.10.13.101</td>\\n<td>mysql node 1</td>\\n<td>CentOS 7.9</td>\\n<td>3.10.0-1160.el7.x86_64</td>\\n<td>mysql galera 8.0.34</td>\\n</tr>\\n<tr>\\n<td>3</td>\\n<td>10.10.13.102</td>\\n<td>mysql node 1</td>\\n<td>CentOS 7.9</td>\\n<td>3.10.0-1160.el7.x86_64</td>\\n<td>mysql galera 8.0.34</td>\\n</tr>\\n</tbody>\\n</table>"}');export{S as comp,N as data};
