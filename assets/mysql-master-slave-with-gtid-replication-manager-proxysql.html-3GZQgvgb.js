import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as e,f as a}from"./app-DR5J2daJ.js";const i={},l=a(`<h2 id="主机准备" tabindex="-1"><a class="header-anchor" href="#主机准备"><span>主机准备</span></a></h2><h3 id="主机信息" tabindex="-1"><a class="header-anchor" href="#主机信息"><span>主机信息</span></a></h3><table><thead><tr><th>编号</th><th>IP 地址</th><th>角色</th><th>操作系统</th><th>内核版本</th><th>数据库版本</th></tr></thead><tbody><tr><td>1</td><td>10.10.13.100</td><td>replication manager、proxysql</td><td>CentOS 7.9</td><td>3.10.0-1160.el7.x86_64</td><td>2.3.13、2.5.5</td></tr><tr><td>2</td><td>10.10.13.101</td><td>主</td><td>CentOS 7.9</td><td>3.10.0-1160.el7.x86_64</td><td>MySQL 8.0</td></tr><tr><td>3</td><td>10.10.13.102</td><td>从</td><td>CentOS 7.9</td><td>3.10.0-1160.el7.x86_64</td><td>MySQL 8.0</td></tr><tr><td>4</td><td>10.10.13.103</td><td>从</td><td>CentOS 7.9</td><td>3.10.0-1160.el7.x86_64</td><td>MySQL 8.0</td></tr></tbody></table><h3 id="主机设置" tabindex="-1"><a class="header-anchor" href="#主机设置"><span>主机设置</span></a></h3><ul><li>主机名称设置</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># replication manager/proxysql节点</span>
hostnamectl set-hostname node0

<span class="token comment"># mysql节点</span>
hostnamectl set-hostname node1

<span class="token comment"># mysql节点</span>
hostnamectl set-hostname node2

<span class="token comment"># mysql节点</span>
hostnamectl set-hostname node3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>主机<code>hosts</code>设置</li></ul><blockquote><p>所有节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/hosts <span class="token operator">&lt;&lt;</span><span class="token string">EOF
127.0.0.1   localhost localhost.localdomain localhost4 localhost4.localdomain4
::1         localhost localhost.localdomain localhost6 localhost6.localdomain6

# by abelit
10.10.13.100 node0
10.10.13.101 node1
10.10.13.102 node2
10.10.13.103 node3
EOF</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>关闭防火墙</li></ul><blockquote><p>所有节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl stop firewalld
systemctl disable firewalld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>selinux设置</li></ul><blockquote><p>所有节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>setenforce <span class="token number">0</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s/^SELINUX=enforcing/SELINUX=disabled/g&quot;</span> /etc/selinux/config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="主机互信设置" tabindex="-1"><a class="header-anchor" href="#主机互信设置"><span>主机互信设置</span></a></h3><blockquote><p>在每个节点执行</p></blockquote><ul><li>生成公私钥</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>ssh-keygen <span class="token parameter variable">-t</span> rsa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>拷贝公钥到其他服务器</li></ul><blockquote><p>在中间件节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># root user</span>
<span class="token assign-left variable">hosts</span><span class="token operator">=</span><span class="token string">&quot;10.10.13.101 10.10.13.102 10.10.13.103&quot;</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">host</span> <span class="token keyword">in</span> <span class="token variable">$hosts</span><span class="token punctuation">;</span> 
<span class="token keyword">do</span> 
sshpass <span class="token parameter variable">-p</span> <span class="token string">&quot;root@123&quot;</span> ssh-copy-id <span class="token parameter variable">-f</span> <span class="token parameter variable">-o</span> <span class="token assign-left variable">StrictHostKeyChecking</span><span class="token operator">=</span>no <span class="token variable">$host</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$host</span>
<span class="token keyword">done</span>

<span class="token assign-left variable">hosts</span><span class="token operator">=</span><span class="token string">&quot;node1 node2 node3&quot;</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">host</span> <span class="token keyword">in</span> <span class="token variable">$hosts</span><span class="token punctuation">;</span> 
<span class="token keyword">do</span> 
sshpass <span class="token parameter variable">-p</span> <span class="token string">&quot;root@123&quot;</span> ssh-copy-id <span class="token parameter variable">-f</span> <span class="token parameter variable">-o</span> <span class="token assign-left variable">StrictHostKeyChecking</span><span class="token operator">=</span>no <span class="token variable">$host</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$host</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装依赖" tabindex="-1"><a class="header-anchor" href="#安装依赖"><span>安装依赖</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> sshpass <span class="token function">wget</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="安装数据库" tabindex="-1"><a class="header-anchor" href="#安装数据库"><span>安装数据库</span></a></h2><ul><li>安装 <blockquote><p>主、从</p></blockquote></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl stop firewalld
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> https://repo.mysql.com//mysql80-community-release-el7-7.noarch.rpm
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> mysql-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>重启数据库 <blockquote><p>主从节点</p></blockquote></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl restart mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>获取初始化密码</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># cat /var/log/mysqld.log|grep &quot;A temporary password&quot;|awk -F&#39;root@localhost:&#39; &#39;{print $2}&#39;</span>
<span class="token assign-left variable">MYSQL_INITIAL_PASSWORD</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">cat</span> /var/log/mysqld.log<span class="token operator">|</span><span class="token function">grep</span> <span class="token string">&quot;A temporary password&quot;</span><span class="token operator">|</span><span class="token function">awk</span> -F<span class="token string">&#39;root@localhost:&#39;</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token operator">|</span><span class="token function">sed</span> s/<span class="token punctuation">[</span><span class="token punctuation">[</span>:space:<span class="token punctuation">]</span><span class="token punctuation">]</span>//g<span class="token variable">\`</span></span>

mysql <span class="token parameter variable">-uroot</span> -p<span class="token variable">$MYSQL_INITIAL_PASSWORD</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>更改密码</li></ul><p>mysql8的默认加密插件变为了caching_sha2_password需要修改成mysql_native_password，因为proxysql不支持caching_sha2_password。</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">alter</span> <span class="token keyword">user</span> root<span class="token variable">@localhost</span> identified  <span class="token keyword">WITH</span> mysql_native_password <span class="token keyword">by</span> <span class="token string">&quot;Hello@2023&quot;</span><span class="token punctuation">;</span>
flush <span class="token keyword">privileges</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="主从数据库配置" tabindex="-1"><a class="header-anchor" href="#主从数据库配置"><span>主从数据库配置</span></a></h2><h3 id="主节点数据库配置" tabindex="-1"><a class="header-anchor" href="#主节点数据库配置"><span>主节点数据库配置</span></a></h3><ul><li>主节点配置文件</li></ul><div class="language-conf line-numbers-mode" data-ext="conf" data-title="conf"><pre class="language-conf"><code>cat &gt; /etc/my.cnf &lt;&lt;&#39;EOF&#39;
[mysqld]
datadir=/var/lib/mysql
socket=/var/lib/mysql/mysql.sock

log-error=/var/log/mysqld.log
pid-file=/var/run/mysqld/mysqld.pid

default-authentication-plugin=mysql_native_password

######replication settings######
server-id=101
log-bin=mysql-bin
binlog_expire_logs_seconds=2592000
binlog_format=row

# binlog-ignore-db=mysql
# binlog-ignore-db=information_schema
# binlog-ignore-db=performance_schema
# binlog-ignore-db=sys

######gtid#######
gtid-mode=on
enforce-gtid-consistency=true
binlog_gtid_simple_recovery=on

relay_log_recovery = ON
relay-log-index=mysql-relay
relay-log=mysql-relay

loose_rpl_semi_sync_source_enabled = ON
loose_rpl_semi_sync_replica_enabled = ON

log_slow_replica_statements = 1
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="从节点数据库配置" tabindex="-1"><a class="header-anchor" href="#从节点数据库配置"><span>从节点数据库配置</span></a></h3><ul><li>从节点1 配置文件</li></ul><div class="language-conf line-numbers-mode" data-ext="conf" data-title="conf"><pre class="language-conf"><code>cat &gt; /etc/my.cnf &lt;&lt;&#39;EOF&#39;
[mysqld]
datadir=/var/lib/mysql
socket=/var/lib/mysql/mysql.sock

log-error=/var/log/mysqld.log
pid-file=/var/run/mysqld/mysqld.pid

default-authentication-plugin=mysql_native_password

######replication settings######
server-id=102
log-bin=mysql-bin
binlog_expire_logs_seconds=2592000
binlog_format=row

# binlog-ignore-db=mysql
# binlog-ignore-db=information_schema
# binlog-ignore-db=performance_schema
# binlog-ignore-db=sys

######gtid#######
gtid-mode=on
enforce-gtid-consistency=true
binlog_gtid_simple_recovery=on

log_slave_updates=on
relay_log_recovery=1

relay_log_recovery = ON
relay-log-index=mysql-relay
relay-log=mysql-relay

loose_rpl_semi_sync_source_enabled = ON
loose_rpl_semi_sync_replica_enabled = ON

log_slow_replica_statements = 1

read_only = on
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>从节点2 配置文件</li></ul><div class="language-conf line-numbers-mode" data-ext="conf" data-title="conf"><pre class="language-conf"><code>cat &gt; /etc/my.cnf &lt;&lt;&#39;EOF&#39;
[mysqld]
datadir=/var/lib/mysql
socket=/var/lib/mysql/mysql.sock

log-error=/var/log/mysqld.log
pid-file=/var/run/mysqld/mysqld.pid

default-authentication-plugin=mysql_native_password

######replication settings######
server-id=103
log-bin=mysql-bin
binlog_expire_logs_seconds=2592000
binlog_format=row

# binlog-ignore-db=mysql
# binlog-ignore-db=information_schema
# binlog-ignore-db=performance_schema
# binlog-ignore-db=sys

######gtid#######
gtid-mode=on
enforce-gtid-consistency=true
binlog_gtid_simple_recovery=on

log_slave_updates=on
relay_log_recovery=1

relay_log_recovery = ON
relay-log-index=mysql-relay
relay-log=mysql-relay
loose_rpl_semi_sync_source_enabled = ON
loose_rpl_semi_sync_replica_enabled = ON

log_slow_replica_statements = 1

read_only = on
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>参数说明</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 设置 server-id,唯一值，标识主机，必须与从库不一致</span>
server-id<span class="token operator">=</span><span class="token number">1</span>
<span class="token comment"># 开启二进制日志，主库必须开启</span>
log-bin<span class="token operator">=</span>mysql-bin
<span class="token comment"># 自动删除 2592000 秒（30 天）前的日志</span>
<span class="token comment"># 8.0 以前的版本中这个配置为 expire_logs_days，单位为天</span>
<span class="token assign-left variable">binlog_expire_logs_seconds</span><span class="token operator">=</span><span class="token number">2592000</span>
<span class="token comment"># binlog 记录的模式</span>
<span class="token comment"># statement 模式不会记录每一条更改语句，节约资源但主从数据可能不一致</span>
<span class="token comment"># row 模式记录每一条更改的语句，日志量非常大</span>
<span class="token comment"># mixed 模式是前两者优点的综合，但日志结构较为复杂</span>
<span class="token assign-left variable">binlog_format</span><span class="token operator">=</span>row
<span class="token comment">#启用gitd功能</span>
gtid-mode<span class="token operator">=</span>on
<span class="token comment">#开启强制GTID一致性</span>
enforce-gtid-consistency<span class="token operator">=</span>true
<span class="token comment"># 记录IO线程读取已经读取到的master binlog位置，用于slave宕机后IO线程根据文件中的POS点重新拉取binlog日志</span>
master-info-repository <span class="token operator">=</span> TABLE
<span class="token comment">#记录SQL线程读取Master binlog的位置，用于Slave 宕机后根据文件中记录的pos点恢复Sql线程</span>
relay-log-info-repository <span class="token operator">=</span> TABLE
<span class="token comment">#启用确保无信息丢失；任何一个事务提交后, 将二进制日志的文件名及事件位置记录到文件中</span>
sync-master-info <span class="token operator">=</span> <span class="token number">1</span>
<span class="token comment">#设定从服务器的复制线程数；0表示关闭多线程复制功能</span>
slave-parallel-workers <span class="token operator">=</span> <span class="token number">2</span>
<span class="token comment">#设置binlog校验算法（循环冗余校验码）</span>
binlog-checksum <span class="token operator">=</span> CRC32
<span class="token comment">#设置主服务器是否校验</span>
master-verify-checksum <span class="token operator">=</span> <span class="token number">1</span>
<span class="token comment">#设置从服务器是否校验</span>
slave-sql-verify-checksum <span class="token operator">=</span> <span class="token number">1</span>
<span class="token comment">#用于在二进制日志记录事件相关的信息，可降低故障排除的复杂度</span>
binlog-rows-query-log_events <span class="token operator">=</span> <span class="token number">1</span>
<span class="token comment">#保证master crash safe，该参数必须设置为1</span>
sync_binlog <span class="token operator">=</span> <span class="token number">1</span>
<span class="token comment">#保证master crash safe，该参数必须设置为1</span>
innodb_flush_log_at_trx_commit <span class="token operator">=</span> <span class="token number">1</span>
<span class="token comment"># 释义：slave更新是否记入binlog日志，方便数据恢复后从库进行全备，切换主从身份，这里打开即可</span>
log-slave-updates<span class="token operator">=</span><span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="主从库上安装半同步插件" tabindex="-1"><a class="header-anchor" href="#主从库上安装半同步插件"><span>主从库上安装半同步插件</span></a></h3><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>install plugin rpl_semi_sync_source <span class="token keyword">soname</span> <span class="token string">&#39;semisync_source.so&#39;</span><span class="token punctuation">;</span>
install plugin rpl_semi_sync_replica <span class="token keyword">soname</span> <span class="token string">&#39;semisync_replica.so&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">show</span> plugins<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在主从库上查看是否启用半同步</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">show</span> variables <span class="token operator">like</span> <span class="token string">&#39;rpl_semi%&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="重启数据库" tabindex="-1"><a class="header-anchor" href="#重启数据库"><span>重启数据库</span></a></h3><blockquote><p>主从节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl restart mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="传输基础数据" tabindex="-1"><a class="header-anchor" href="#传输基础数据"><span>传输基础数据</span></a></h3><ul><li>写入测试数据</li></ul><blockquote><p>主节点</p></blockquote><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> abelitdb <span class="token keyword">CHARSET</span> utf8mb4<span class="token punctuation">;</span>
<span class="token keyword">USE</span> abelitdb<span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> abelitinfo <span class="token punctuation">(</span>
    id <span class="token keyword">INT</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token keyword">AUTO_INCREMENT</span> <span class="token keyword">COMMENT</span> <span class="token string">&quot;主键&quot;</span><span class="token punctuation">,</span>
    name <span class="token keyword">CHAR</span><span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&quot;姓名&quot;</span><span class="token punctuation">,</span>
    <span class="token keyword">INDEX</span> idx_name<span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token keyword">COMMENT</span> <span class="token string">&quot;普通索引&quot;</span>
<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span> <span class="token keyword">innodb</span> <span class="token keyword">CHARSET</span> utf8mb4 <span class="token keyword">COLLATE</span> utf8mb4_general_ci<span class="token punctuation">;</span>

<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> abelitinfo<span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">&quot;Jack&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&quot;Tom&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&quot;Mary&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> abelitinfo<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>导出数据 <blockquote><p>主节点</p></blockquote></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>mysqldump <span class="token parameter variable">-uroot</span> -pHello@2023 --skip-lock-tables --single-transaction --flush-logs --hex-blob --master-data<span class="token operator">=</span><span class="token number">2</span> --all-databases <span class="token operator">&gt;</span> alldatabases.sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">参数说明</p><p>--skip-lock-tables #不锁表</p><p>--single-transaction #设定事务级别为可重复读</p><p>--flush-logs #开启一个新的 binlog 文件</p><p>--hex-blob #以 16 进制导出 blob 数据</p><p>--master-data=2 #导出数据库时将 binlog 信息也一并导出，2 表示注释 binlog 信息</p></div><ul><li>传输数据到从库 <blockquote><p>主节点</p></blockquote></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># scp alldatabases.sql root@10.10.13.101:/root/</span>
<span class="token assign-left variable">hosts</span><span class="token operator">=</span><span class="token string">&quot;node2 node3&quot;</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">host</span> <span class="token keyword">in</span> <span class="token variable">$hosts</span><span class="token punctuation">;</span> 
<span class="token keyword">do</span> 
sshpass <span class="token parameter variable">-p</span> <span class="token string">&quot;root@123&quot;</span> <span class="token function">scp</span> <span class="token parameter variable">-o</span> <span class="token assign-left variable">StrictHostKeyChecking</span><span class="token operator">=</span>no alldatabases.sql root@<span class="token variable">\${host}</span>:/root/
<span class="token builtin class-name">echo</span> <span class="token variable">$host</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在从库上还原数据 <blockquote><p>从节点</p></blockquote></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p</span> <span class="token operator">&lt;</span> alldatabases.sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="创建复制用户" tabindex="-1"><a class="header-anchor" href="#创建复制用户"><span>创建复制用户</span></a></h3><ul><li>主节点</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>create user <span class="token string">&#39;rep-manager&#39;</span>@<span class="token string">&#39;%&#39;</span> identified by <span class="token string">&#39;Hello@2023&#39;</span><span class="token punctuation">;</span>
grant all privileges on *.* to <span class="token string">&#39;rep-manager&#39;</span>@<span class="token string">&#39;%&#39;</span> with grant option<span class="token punctuation">;</span>

create user <span class="token string">&#39;proxysql&#39;</span>@<span class="token string">&#39;%&#39;</span> identified by <span class="token string">&#39;Hello@2023&#39;</span><span class="token punctuation">;</span>
grant process,replication slave,replication client on *.* to <span class="token string">&#39;proxysql&#39;</span>@<span class="token string">&#39;%&#39;</span><span class="token punctuation">;</span>

create user <span class="token string">&#39;repl&#39;</span>@<span class="token string">&#39;%&#39;</span> identified by <span class="token string">&#39;Hello@2023&#39;</span><span class="token punctuation">;</span>
grant replication slave,replication client on *.* to <span class="token string">&#39;repl&#39;</span>@<span class="token string">&#39;%&#39;</span><span class="token punctuation">;</span>


flush privileges<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置从库" tabindex="-1"><a class="header-anchor" href="#设置从库"><span>设置从库</span></a></h3><ul><li>配置从库连接主库信息</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>CHANGE <span class="token keyword">REPLICATION</span> SOURCE <span class="token keyword">to</span> 
        SOURCE_HOST<span class="token operator">=</span><span class="token string">&#39;node1&#39;</span><span class="token punctuation">,</span>
        SOURCE_USER<span class="token operator">=</span><span class="token string">&#39;repl&#39;</span><span class="token punctuation">,</span>
        SOURCE_PASSWORD<span class="token operator">=</span><span class="token string">&#39;Hello@2023&#39;</span><span class="token punctuation">,</span>
        SOURCE_PORT<span class="token operator">=</span><span class="token number">3306</span><span class="token punctuation">,</span>
        SOURCE_CONNECT_RETRY<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">,</span>
        SOURCE_AUTO_POSITION<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">参数说明</p><p>SOURCE_HOST： 主库的地址</p><p>SOURCE_PORT：主库端口号</p><p>SOURCE_USER：主库中用于复制的用户</p><p>SOURCE_PASSWORD：主库中用于复制的用户密码</p><p>SOURCE_CONNECT_RETRY：主库链接失败后从库重试链接的次数</p><p>SOURCE_AUTO_POSITION：是否自动寻找 SOURCE 中的 GTID 号位置，详情参见外面的描述 首先我们是使用的 mysqldump 对主库进行全备，并在从库上进行了恢复。 那么全备的 sql 文件中就会存在已截取的 GTID 事务号。</p><p>SOURCE_AUTO_POSITION=1 实际上是让从库从主库 GTID 事务号 1 后开始截取，如果是 mysqldump 进行逻辑备份恢复则会自动将该参数调整为全备 SQL 文件中的 GTID 事务号+1。</p><p>那么如果是 XBK 物理备份怎么填写该参数呢？你需要 xtrabackup_binlog_info 文件中，读取出已截取的 GTID 事务号，填写时+1 即可（只截取最后的那个数字！不是整个 uuid+int 的字符串）。</p><p>总结！mysqldump 逻辑备份恢复，该参数填 1，内部会自动进行校正。 XBK 物理备份恢复，检查 xtrabackup_binlog_info 文件，该参数在 GTID 事务号基础上+1</p></div><ul><li>开启从库</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- CHANGE MASTER TO GET_MASTER_PUBLIC_KEY=1;</span>

<span class="token keyword">start</span> replica<span class="token punctuation">;</span>

<span class="token keyword">show</span> replica <span class="token keyword">status</span>\\G<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="replication-manager安装配置" tabindex="-1"><a class="header-anchor" href="#replication-manager安装配置"><span>Replication Manager安装配置</span></a></h2><h3 id="配置yum源" tabindex="-1"><a class="header-anchor" href="#配置yum源"><span>配置yum源</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/yum.repos.d/signal18.repo <span class="token operator">&lt;&lt;</span><span class="token string">&#39;EOF&#39;
# 添加如下内容
[signal18]
name=Signal18 repositories
# 可以先试试这个路径，之前可以的，当前再次测试时候发现有问题，可替换为下面这个，注意版本
baseurl=http://repo.signal18.io/centos/$releasever/$basearch/ 
# baseurl=http://repo.signal18.io/centos/2.2/$releasever/$basearch/
gpgcheck=0
enabled=1
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装relication-manager" tabindex="-1"><a class="header-anchor" href="#安装relication-manager"><span>安装relication-manager</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> replication-manager-osc <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="创建监控用户" tabindex="-1"><a class="header-anchor" href="#创建监控用户"><span>创建监控用户</span></a></h3><blockquote><p>在主库进行</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># MySQL主库操作</span>
create user <span class="token string">&#39;rep_monitor&#39;</span>@<span class="token string">&#39;%&#39;</span> identified by <span class="token string">&#39;Hello@2023&#39;</span><span class="token punctuation">;</span>
GRANT RELOAD, PROCESS, SUPER, REPLICATION SLAVE, REPLICATION CLIENT, EVENT ON *.* TO <span class="token string">&#39;rep_monitor&#39;</span>@<span class="token string">&#39;%&#39;</span><span class="token punctuation">;</span>
GRANT SELECT ON <span class="token variable"><span class="token variable">\`</span>mysql<span class="token variable">\`</span></span><span class="token builtin class-name">.</span><span class="token variable"><span class="token variable">\`</span>user<span class="token variable">\`</span></span> TO <span class="token string">&#39;rep_monitor&#39;</span>@<span class="token string">&#39;%&#39;</span><span class="token punctuation">;</span>
GRANT SELECT ON performance_schema.setup_consumers TO <span class="token string">&#39;rep_monitor&#39;</span>@<span class="token string">&#39;%&#39;</span><span class="token punctuation">;</span>

GRANT ALL PRIVILEGES ON *.* to <span class="token string">&#39;rep_monitor&#39;</span>@<span class="token string">&#39;%&#39;</span> with grant option<span class="token punctuation">;</span>

FLUSH PRIVILEGES<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置relication-manager" tabindex="-1"><a class="header-anchor" href="#配置relication-manager"><span>配置relication-manager</span></a></h3><p>cluster1.toml 配置文件</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cp</span> /etc/replication-manager/cluster.d/cluster1.toml.sample /etc/replication-manager/cluster.d/cluster1.toml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-conf line-numbers-mode" data-ext="conf" data-title="conf"><pre class="language-conf"><code>cat &gt; /etc/replication-manager/cluster.d/cluster1.toml &lt;&lt;&#39;EOF&#39;
[cluster1]
title = &quot;cluster1&quot;
prov-orchestrator = &quot;onpremise&quot;
prov-db-tags = &quot;innodb,noquerycache,slow,pfs,pkg,linux,smallredolog,logtotable&quot;
prov-db-memory = &quot;256&quot;
prov-db-memory-shared-pct = &quot;threads:16,innodb:60,myisam:10,aria:10,rocksdb:1,tokudb:1,s3:1,archive:1,querycache:0&quot;
prov-db-disk-size = &quot;1&quot;
prov-db-cpu-cores = &quot;1&quot;
prov-db-disk-iops = &quot;300&quot;

db-servers-hosts = &quot;node1:3306,node2:3306,node3:3306&quot;
db-servers-prefered-master = &quot;node1:3306&quot;
db-servers-credential = &quot;rep-manager:Hello@2023&quot;
db-servers-connect-timeout = 1
replication-credential = &quot;rep-manager:Hello@2023&quot;

verbose = false
log-failed-election  = true
log-level = 1
log-rotate-max-age = 7
log-rotate-max-backup = 7
log-rotate-max-size = 5
log-sql-in-monitoring   = true
log-sst = true

##############
## TOPOLOGY ##
##############

replication-multi-master = false
replication-multi-tier-slave = false

############
# BACKUPS ##
###########


backup-streaming = false
backup-streaming-aws-access-key-id = &quot;admin&quot;
backup-streaming-aws-access-secret = &quot;xxxx&quot;
backup-streaming-endpoint= &quot;https://s3.signal18.io/&quot;
backup-streaming-region= &quot;fr-1&quot;
backup-streaming-bucket= &quot;repman&quot;

backup-restic = true
backup-restic-aws =  false
backup-physical-type = &quot;mariabackup&quot;
backup-logical-type = &quot;mysqldump&quot;
backup-restic-aws-access-secret = &quot;xxxx&quot;
backup-restic-password = &quot;xxxx&quot;
backup-restic-binary-path = &quot;/usr/local/bin/restic&quot;

monitoring-scheduler = true
scheduler-db-servers-logical-backup  = false
scheduler-db-servers-logical-backup-cron= &quot;0 0 1 * * 6&quot;
scheduler-db-servers-logs   =  false
scheduler-db-servers-logs-cron = &quot;0 0 * * * *&quot;
scheduler-db-servers-logs-table-keep = 4
scheduler-db-servers-logs-table-rotate  = false
scheduler-db-servers-logs-table-rotate-cron = &quot;0 0 0/6 * * *&quot;
scheduler-db-servers-optimize  = false
scheduler-db-servers-optimize-cron = &quot;0 0 3 1 * 5&quot;
scheduler-db-servers-physical-backup = false
scheduler-db-servers-physical-backup-cron = &quot;0 0 0 * * *&quot;

##############
## FAILOVER ##
##############

failover-mode = &quot;manual&quot;
failover-pre-script = &quot;&quot;
failover-post-script = &quot;&quot;

## Slaves will re enter with read-only

failover-readonly-state = true
failover-event-scheduler = false
failover-event-status = false

## Failover after N failures detection

failover-falsepositive-ping-counter = 5

## Cancel failover if already N failover
## Cancel failover if last failover was N seconds before
## Cancel failover in semi-sync when one slave is not in sync
## Cancel failover if one slave receive master heartbeat
## Cancel failover when replication delay is more than N seconds

failover-limit = 0
failover-time-limit = 0
failover-at-sync = false
failover-max-slave-delay = 30
failover-restart-unsafe = false

# failover-falsepositive-heartbeat = true
# failover-falsepositive-heartbeat-timeout = 3
# failover-falsepositive-maxscale = false
# failover-falsepositive-maxscale-timeout = 14
# failover-falsepositive-external = false
# failover-falsepositive-external-port = 80

################
## SWITCHOVER ##
################

## In switchover Wait N milliseconds before killing long running transactions
## Cancel switchover if transaction running more than N seconds
## Cancel switchover if write query running more than N seconds
## Cancel switchover if one of the slaves is not synced based on GTID equality

switchover-wait-kill = 5000
switchover-wait-trx = 10
switchover-wait-write-query = 10
switchover-at-equal-gtid = false
switchover-at-sync = false
switchover-max-slave-delay = 30

############
## REJOIN ##
############

autorejoin = true
autorejoin-script = &quot;&quot;
autorejoin-semisync = true
autorejoin-backup-binlog = true
autorejoin-flashback = false
autorejoin-mysqldump = false


####################
## CHECKS &amp; FORCE ##
####################

check-replication-filters = true
check-binlog-filters = true
check-replication-state = true

force-slave-heartbeat= false
force-slave-heartbeat-retry = 5
force-slave-heartbeat-time = 3
force-slave-gtid-mode = false
force-slave-semisync = false
force-slave-failover-readonly-state = false
force-binlog-row = false
force-binlog-annotate = false
force-binlog-slowqueries = false
force-binlog-compress = false
force-binlog-checksum = false
force-inmemory-binlog-cache-size = false
force-disk-relaylog-size-limit = false
force-disk-relaylog-size-limit-size = 1000000000
force-sync-binlog = false
force-sync-innodb = false

##############
## MAXSCALE ##
##############

## for 2 nodes cluster maxscale can be driven by replication manager

maxscale = false
maxscale-binlog = false
maxscale-servers = &quot;192.168.0.201&quot;
maxscale-port = 4003
maxscale-user = &quot;admin&quot;
maxscale-pass = &quot;mariadb&quot;

## When true replication manager drive maxscale server state
## Not required unless multiple maxscale or release does not support detect_stale_slave

maxscale-disable-monitor = false

## maxinfo|maxadmin

maxscale-get-info-method = &quot;maxadmin&quot;
maxscale-maxinfo-port = 4002

maxscale-write-port = 4007
maxscale-read-port = 4008
maxscale-read-write-port = 4006
maxscale-binlog-port = 4000

#############
## HAPROXY ##
#############

## Wrapper mode unless maxscale or proxysql required to be located with replication-manager

haproxy = false
haproxy-binary-path = &quot;/usr/sbin/haproxy&quot;

## Read write traffic
## Read only load balance least connection traffic
haproxy-write-port = 3306
haproxy-read-port = 3307

####################
## SHARDING PROXY ##
####################

mdbshardproxy = false
mdbshardproxy-hosts = &quot;127.0.0.1:3306&quot;
mdbshardproxy-user = &quot;root:mariadb&quot;

#################################
###### proxysql settings ########
#################################
proxysql = true
proxysql-servers = &quot;127.0.0.1&quot;
proxysql-port = &quot;6033&quot;
proxysql-admin-port = &quot;6032&quot;
proxysql-writer-hostgroup = &quot;1000&quot;
proxysql-reader-hostgroup = &quot;1001&quot;
proxysql-user = &quot;admin&quot;
proxysql-password = &quot;admin&quot;
proxysql-bootstrap = false
# 不从master复制用户到proxysql，因为复制会出问题
proxysql-bootstrap-users = false
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>config.toml 配置文件</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/replication-manager/config.toml <span class="token operator">&lt;&lt;</span><span class="token string">&#39;EOF&#39;
[Default]
include = &quot;/etc/replication-manager/cluster.d&quot;

# monitoring-save-config = false
monitoring-datadir = &quot;/var/lib/replication-manager&quot;
monitoring-ticker = 2
log-level=1

replication-multi-master = false
replication-multi-tier-slave = false
failover-readonly-state = true

##########
## HTTP ##
##########
http-server = true
http-bind-address = &quot;0.0.0.0&quot;
http-port = &quot;10001&quot;
http-auth = false
http-session-lifetime =   3600
http-bootstrap-button = false
http-refresh-interval = 4000

#########
## API ##
#########

api-credentials = &quot;admin:repman&quot;
api-port = &quot;10005&quot;
api-https-bind = false

api-credentials-acl-allow =  &quot;admin:cluster proxy db prov,dba:cluster proxy db,foo:&quot;
api-credentials-acl-discard = false
api-credentials-external = &quot;dba:repman,foo:bar&quot;

#########
## LOG ##
#########
log-file = &quot;/var/log/replication-manager.log&quot;
log-heartbeat = false
log-syslog = false

############
## ALERTS ##
############

mail-from = &quot;replication-manager@localhost&quot;
mail-smtp-addr = &quot;localhost:25&quot;
mail-to = &quot;replication-manager@signal18.io&quot;
mail-smtp-password=&quot;&quot;
mail-smtp-user=&quot;&quot;

alert-slack-channel = &quot;#support&quot;
alert-slack-url = &quot;&quot;
alert-slack-user = &quot;svar&quot;

##########
# STATS ##
##########
graphite-metrics = false
graphite-carbon-host = &quot;127.0.0.1&quot;
graphite-carbon-port = 2003
graphite-embedded = false
graphite-carbon-api-port = 10002
graphite-carbon-server-port = 10003
graphite-carbon-link-port = 7002
graphite-carbon-pickle-port = 2004
graphite-carbon-pprof-port = 7007

####这里可以设置逻辑备份和物理备份的程序，结合上面的配置里的restic做备份，很不错，后续有时间了再继续配置吧
backup-mydumper-path = &quot;/usr/local/bin/mydumper&quot;
backup-myloader-path = &quot;/usr/local/bin/myloader&quot;
backup-mysqlbinlog-path = &quot;/usr/local/bin/mysqlbinlog&quot;
backup-mysqldump-path = &quot;/usr/local/bin/mysqldump&quot;

##############
# BENCHMARK ##
##############

sysbench-binary-path = &quot;/usr/bin/sysbench&quot;
sysbench-threads = 4
sysbench-time = 100
sysbench-v1 = true

# 集群名称
[abelitcluster]
title = &quot;MySQL-Monitor&quot;
db-servers-hosts = &quot;node1:3306,node2:3306,node3:3306&quot;
db-servers-prefered-master = &quot;node1:3306&quot;
db-servers-credential = &quot;rep-manager:Hello@2023&quot;
db-servers-connect-timeout = 2
replication-credential = &quot;rep-manager:Hello@2023&quot;

# 可配置忽略某些机器，不会被用于切换
# db-servers-ignored-hosts=&quot;127.0.0.1:5057&quot;

##############
## FAILOVER ##
##############
# 故障自动切换
failover-mode = &quot;automatic&quot;
# 30s内再次发生故障不切换，防止硬件问题或网络问题
failover-time-limit=30

# 【默认】如果一个从站仍可以从主站获取事件，则取消故障转移
failover-falsepositive-heartbeat = true
# 【默认】故障转移和切换将从库设置为只读
failover-readonly-state = true
#【默认】调度程序相关
failover-event-scheduler = false
failover-event-status = false
# 【默认】当从库延迟超过30s时，选主时忽略此服务器
failover-max-slave-delay = 30

EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">关键参数</p><p>db-servers-hosts</p><p>db-servers-prefered-master</p><p>db-servers-credential</p><p>replication-credentia</p></div><h3 id="启动replication-manager" tabindex="-1"><a class="header-anchor" href="#启动replication-manager"><span>启动Replication Manager</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 启动</span>
systemctl start replication-manager

<span class="token comment"># 开机启动</span>
systemctl <span class="token builtin class-name">enable</span> replication-manager
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="状态管理" tabindex="-1"><a class="header-anchor" href="#状态管理"><span>状态管理</span></a></h3><ul><li>通过web查看replication manager状态</li></ul><p>打开浏览器输入 http://10.10.13.100:10001 （默认用户名密码为 admin/repman）</p><h2 id="安装配置proxysql" tabindex="-1"><a class="header-anchor" href="#安装配置proxysql"><span>安装配置proxysql</span></a></h2><h3 id="安装proxysql" tabindex="-1"><a class="header-anchor" href="#安装proxysql"><span>安装proxysql</span></a></h3><p>添加yum源</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">|</span> <span class="token function">tee</span> /etc/yum.repos.d/proxysql.repo</span>
[proxysql_repo]
name=ProxySQL repository
baseurl=https://repo.proxysql.com/ProxySQL/proxysql-2.5.x/centos/\\<span class="token variable">$releasever</span>
gpgcheck=1
gpgkey=https://repo.proxysql.com/ProxySQL/proxysql-2.5.x/repo_pub_key
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装proxysql</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> proxysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="配置proxysql" tabindex="-1"><a class="header-anchor" href="#配置proxysql"><span>配置proxysql</span></a></h3><p>无需修改此配置，在数据库中添加配置。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/proxysql.cnf <span class="token operator">&lt;&lt;</span><span class="token string">&#39;EOF&#39;
#file proxysql.cfg

########################################################################################
# This config file is parsed using libconfig , and its grammar is described in:        
# http://www.hyperrealm.com/libconfig/libconfig_manual.html#Configuration-File-Grammar 
# Grammar is also copied at the end of this file                                       
########################################################################################

########################################################################################
# IMPORTANT INFORMATION REGARDING THIS CONFIGURATION FILE:                             
########################################################################################
# On startup, ProxySQL reads its config file (if present) to determine its datadir. 
# What happens next depends on if the database file (disk) is present in the defined
# datadir (i.e. &quot;/var/lib/proxysql/proxysql.db&quot;).
#
# If the database file is found, ProxySQL initializes its in-memory configuration from 
# the persisted on-disk database. So, disk configuration gets loaded into memory and 
# then propagated towards the runtime configuration. 
#
# If the database file is not found and a config file exists, the config file is parsed 
# and its content is loaded into the in-memory database, to then be both saved on-disk 
# database and loaded at runtime.
#
# IMPORTANT: If a database file is found, the config file is NOT parsed. In this case
#            ProxySQL initializes its in-memory configuration from the persisted on-disk
#            database ONLY. In other words, the configuration found in the proxysql.cnf
#            file is only used to initial the on-disk database read on the first startup.
#
# In order to FORCE a re-initialise of the on-disk database from the configuration file 
# the ProxySQL service should be started with &quot;systemctl start proxysql-initial&quot;.
#
########################################################################################

datadir=&quot;/var/lib/proxysql&quot;
errorlog=&quot;/var/lib/proxysql/proxysql.log&quot;

admin_variables=
{
	admin_credentials=&quot;admin:admin&quot;
#	mysql_ifaces=&quot;127.0.0.1:6032;/tmp/proxysql_admin.sock&quot;
	mysql_ifaces=&quot;0.0.0.0:6032&quot;
#	refresh_interval=2000
#	debug=true
}

mysql_variables=
{
	threads=4
	max_connections=2048
	default_query_delay=0
	default_query_timeout=36000000
	have_compress=true
	poll_timeout=2000
#	interfaces=&quot;0.0.0.0:6033;/tmp/proxysql.sock&quot;
	interfaces=&quot;0.0.0.0:6033&quot;
	default_schema=&quot;information_schema&quot;
	stacksize=1048576
	server_version=&quot;5.5.30&quot;
	connect_timeout_server=3000
# make sure to configure monitor username and password
# https://github.com/sysown/proxysql/wiki/Global-variables#mysql-monitor_username-mysql-monitor_password
	monitor_username=&quot;monitor&quot;
	monitor_password=&quot;monitor&quot;
	monitor_history=600000
	monitor_connect_interval=60000
	monitor_ping_interval=10000
	monitor_read_only_interval=1500
	monitor_read_only_timeout=500
	ping_interval_server_msec=120000
	ping_timeout_server=500
	commands_stats=true
	sessions_sort=true
	connect_retries_on_failure=10
}


# defines all the MySQL servers
mysql_servers =
(
#	{
#		address = &quot;127.0.0.1&quot; # no default, required . If port is 0 , address is interpred as a Unix Socket Domain
#		port = 3306           # no default, required . If port is 0 , address is interpred as a Unix Socket Domain
#		hostgroup = 0	        # no default, required
#		status = &quot;ONLINE&quot;     # default: ONLINE
#		weight = 1            # default: 1
#		compression = 0       # default: 0
#   max_replication_lag = 10  # default 0 . If greater than 0 and replication lag passes such threshold, the server is shunned
#	},
#	{
#		address = &quot;/var/lib/mysql/mysql.sock&quot;
#		port = 0
#		hostgroup = 0
#	},
#	{
#		address=&quot;127.0.0.1&quot;
#		port=21891
#		hostgroup=0
#		max_connections=200
#	},
#	{ address=&quot;127.0.0.2&quot; , port=3306 , hostgroup=0, max_connections=5 },
#	{ address=&quot;127.0.0.1&quot; , port=21892 , hostgroup=1 },
#	{ address=&quot;127.0.0.1&quot; , port=21893 , hostgroup=1 }
#	{ address=&quot;127.0.0.2&quot; , port=3306 , hostgroup=1 },
#	{ address=&quot;127.0.0.3&quot; , port=3306 , hostgroup=1 },
#	{ address=&quot;127.0.0.4&quot; , port=3306 , hostgroup=1 },
#	{ address=&quot;/var/lib/mysql/mysql.sock&quot; , port=0 , hostgroup=1 }
)


# defines all the MySQL users
mysql_users:
(
#	{
#		username = &quot;username&quot; # no default , required
#		password = &quot;password&quot; # default: &#39;&#39;
#		default_hostgroup = 0 # default: 0
#		active = 1            # default: 1
#	},
#	{
#		username = &quot;root&quot;
#		password = &quot;&quot;
#		default_hostgroup = 0
#		max_connections=1000
#		default_schema=&quot;test&quot;
#		active = 1
#	},
#	{ username = &quot;user1&quot; , password = &quot;password&quot; , default_hostgroup = 0 , active = 0 }
)



#defines MySQL Query Rules
mysql_query_rules:
(
#	{
#		rule_id=1
#		active=1
#		match_pattern=&quot;^SELECT .* FOR UPDATE$&quot;
#		destination_hostgroup=0
#		apply=1
#	},
#	{
#		rule_id=2
#		active=1
#		match_pattern=&quot;^SELECT&quot;
#		destination_hostgroup=1
#		apply=1
#	}
)

scheduler=
(
#  {
#    id=1
#    active=0
#    interval_ms=10000
#    filename=&quot;/var/lib/proxysql/proxysql_galera_checker.sh&quot;
#    arg1=&quot;0&quot;
#    arg2=&quot;0&quot;
#    arg3=&quot;0&quot;
#    arg4=&quot;1&quot;
#    arg5=&quot;/var/lib/proxysql/proxysql_galera_checker.log&quot;
#  }
)


mysql_replication_hostgroups=
(
#        {
#                writer_hostgroup=30
#                reader_hostgroup=40
#                comment=&quot;test repl 1&quot;
#       },
#       {
#                writer_hostgroup=50
#                reader_hostgroup=60
#                comment=&quot;test repl 2&quot;
#        }
)




# http://www.hyperrealm.com/libconfig/libconfig_manual.html#Configuration-File-Grammar
#
# Below is the BNF grammar for configuration files. Comments and include directives are not part of the grammar, so they are not included here. 
#
# configuration = setting-list | empty
#
# setting-list = setting | setting-list setting
#     
# setting = name (&quot;:&quot; | &quot;=&quot;) value (&quot;;&quot; | &quot;,&quot; | empty)
#     
# value = scalar-value | array | list | group
#     
# value-list = value | value-list &quot;,&quot; value
#     
# scalar-value = boolean | integer | integer64 | hex | hex64 | float
#                | string
#     
# scalar-value-list = scalar-value | scalar-value-list &quot;,&quot; scalar-value
#     
# array = &quot;[&quot; (scalar-value-list | empty) &quot;]&quot;
#     
# list = &quot;(&quot; (value-list | empty) &quot;)&quot;
#     
# group = &quot;{&quot; (setting-list | empty) &quot;}&quot;
#     
# empty =
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动proxysql:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl start proxysql

systemctl <span class="token builtin class-name">enable</span> proxysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在proxysql节点上登陆</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>mysql <span class="token parameter variable">-uadmin</span> <span class="token parameter variable">-p</span> <span class="token parameter variable">-P6032</span> <span class="token parameter variable">-h127.0.0.1</span> <span class="token parameter variable">--prompt</span><span class="token operator">=</span><span class="token string">&#39;admin&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>开始在数据库中配置proxysql</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">set</span> mysql<span class="token operator">-</span>monitor_username<span class="token operator">=</span><span class="token string">&#39;proxysql&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">set</span> mysql<span class="token operator">-</span>monitor_password<span class="token operator">=</span><span class="token string">&#39;Hello@2023&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> global_variables<span class="token punctuation">;</span>
<span class="token keyword">load</span> mysql variables <span class="token keyword">to</span> runtime<span class="token punctuation">;</span>
<span class="token keyword">save</span> mysql variables <span class="token keyword">to</span> <span class="token keyword">disk</span><span class="token punctuation">;</span>

<span class="token keyword">insert</span> <span class="token keyword">into</span> mysql_replication_hostgroups <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">,</span><span class="token number">1001</span><span class="token punctuation">,</span><span class="token string">&#39;read_only&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;读1000写1001分离&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> mysql_servers<span class="token punctuation">(</span>hostgroup_id<span class="token punctuation">,</span>hostname<span class="token punctuation">,</span>port<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">,</span><span class="token string">&#39;node1&#39;</span><span class="token punctuation">,</span><span class="token number">3306</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> mysql_servers<span class="token punctuation">(</span>hostgroup_id<span class="token punctuation">,</span>hostname<span class="token punctuation">,</span>port<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">1001</span><span class="token punctuation">,</span><span class="token string">&#39;node2&#39;</span><span class="token punctuation">,</span><span class="token number">3306</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> mysql_servers<span class="token punctuation">(</span>hostgroup_id<span class="token punctuation">,</span>hostname<span class="token punctuation">,</span>port<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">1001</span><span class="token punctuation">,</span><span class="token string">&#39;node3&#39;</span><span class="token punctuation">,</span><span class="token number">3306</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">load</span> mysql servers <span class="token keyword">to</span> runtime<span class="token punctuation">;</span>
<span class="token keyword">save</span> mysql servers <span class="token keyword">to</span> <span class="token keyword">disk</span><span class="token punctuation">;</span>

<span class="token keyword">delete</span> <span class="token keyword">from</span> mysql_users<span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> mysql_users<span class="token punctuation">(</span>username<span class="token punctuation">,</span>password<span class="token punctuation">,</span>default_hostgroup<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token string">&#39;abelitapp&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;Hello@2023&#39;</span><span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">load</span> mysql users <span class="token keyword">to</span> runtime<span class="token punctuation">;</span>
<span class="token keyword">save</span> mysql users <span class="token keyword">to</span> <span class="token keyword">disk</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="主从管理" tabindex="-1"><a class="header-anchor" href="#主从管理"><span>主从管理</span></a></h2><h3 id="查看主从状态" tabindex="-1"><a class="header-anchor" href="#查看主从状态"><span>查看主从状态</span></a></h3><ul><li>检查从库状态</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">show</span> replica <span class="token keyword">status</span>\\G
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意事项：</p><p>当 Replica_IO_Running 和 Replica_SQL_Running 都为 Yes 的时候，表示主从同步正常。</p></div><h3 id="主从切换" tabindex="-1"><a class="header-anchor" href="#主从切换"><span>主从切换</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>replication-manager-cli switchover
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="故障转移" tabindex="-1"><a class="header-anchor" href="#故障转移"><span>故障转移</span></a></h3><h4 id="关闭主库" tabindex="-1"><a class="header-anchor" href="#关闭主库"><span>关闭主库</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># mysqladmin -h127.0.0.1 -uroot -p shutdown</span>
systemctl stop mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>手动切换：</li></ul><p>在配置文件<code>/etc/replication-manager/config.toml</code>中设置<code>failover-mode = &quot;manual&quot;</code>，通过如下命令进行故障切换：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>replication-manager-cli failover
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>自动切换：</li></ul><p>在配置文件<code>/etc/replication-manager/config.toml</code>中设置<code>failover-mode = &quot;automatic&quot;</code>，重新监视集群即可。这样主库宕机的情况下，会自动执行故障切换。宕机的旧主如果恢复后，会自动变成新主的一个从库，并且处于维护模式。</p><ul><li><p>在replication manager web查看主从状态</p></li><li><p>检查VIP是否成功漂移到原来的备库</p></li></ul><h4 id="开启原主库" tabindex="-1"><a class="header-anchor" href="#开启原主库"><span>开启原主库</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl start mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>在replication manager web查看原主是否加入集群</li></ul><h2 id="连接测试" tabindex="-1"><a class="header-anchor" href="#连接测试"><span>连接测试</span></a></h2><ul><li>在主库上创建 abelitapp 用户</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">user</span> abelitapp<span class="token variable">@&#39;%&#39;</span> identified <span class="token keyword">by</span> <span class="token string">&#39;Hello@2023&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">create</span> <span class="token keyword">database</span> abelitdb <span class="token keyword">character</span> <span class="token keyword">set</span> utf8mb4<span class="token punctuation">;</span>

<span class="token keyword">grant</span> <span class="token keyword">all</span> <span class="token keyword">privileges</span> <span class="token keyword">on</span> abelitdb<span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">to</span> abelitapp<span class="token variable">@&#39;%&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用mysql客户端连接</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>mysql <span class="token parameter variable">-uabelitapp</span> -pHello@2023 <span class="token parameter variable">-h</span> node0 <span class="token parameter variable">-P</span> <span class="token number">6033</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>在proxysql中插入读写规则 在proxysql节点上登陆</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>mysql <span class="token parameter variable">-uadmin</span> <span class="token parameter variable">-p</span> <span class="token parameter variable">-P6032</span> <span class="token parameter variable">-h127.0.0.1</span> <span class="token parameter variable">--prompt</span><span class="token operator">=</span><span class="token string">&#39;admin&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>插入读写规则</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">insert</span> <span class="token keyword">into</span> mysql_query_rules<span class="token punctuation">(</span>rule_id<span class="token punctuation">,</span>active<span class="token punctuation">,</span>match_digest<span class="token punctuation">,</span>destination_hostgroup<span class="token punctuation">,</span><span class="token keyword">apply</span><span class="token punctuation">)</span><span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">&#39;^SELECT.*FOR UPDATE$&#39;</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> mysql_query_rules<span class="token punctuation">(</span>rule_id<span class="token punctuation">,</span>active<span class="token punctuation">,</span>match_digest<span class="token punctuation">,</span>destination_hostgroup<span class="token punctuation">,</span><span class="token keyword">apply</span><span class="token punctuation">)</span><span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">&#39;^SELECT&#39;</span><span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">load</span> mysql query rules <span class="token keyword">to</span> runtime<span class="token punctuation">;</span>
<span class="token keyword">save</span> mysql query rules <span class="token keyword">to</span> <span class="token keyword">disk</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>读写测试</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">..</span><span class="token number">100</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token keyword">do</span> mysql <span class="token parameter variable">-uabelitapp</span> -pHello@2023 <span class="token parameter variable">-h</span> node0 <span class="token parameter variable">-P</span> <span class="token number">6033</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;select @@server_id;&#39;</span> <span class="token punctuation">;</span> <span class="token function">sleep</span> <span class="token number">0.5</span><span class="token punctuation">;</span> <span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="数据同步测试" tabindex="-1"><a class="header-anchor" href="#数据同步测试"><span>数据同步测试</span></a></h2><p>主库写入数据</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">use</span> abelitdb<span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> abelitinfo<span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">&quot;abelit&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> abelitinfo<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从库查看数据是否同步</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">use</span> abelitdb<span class="token punctuation">;</span>
<span class="token comment">-- INSERT INTO abelitinfo(name) VALUES (&quot;abelit&quot;);</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> abelitinfo<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="重置数据库信息" tabindex="-1"><a class="header-anchor" href="#重置数据库信息"><span>重置数据库信息</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl stop mysqld
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/lib/mysql
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/log/mysqld.log 
systemctl start mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,144),t=[l];function d(r,o){return s(),e("div",null,t)}const v=n(i,[["render",d],["__file","mysql-master-slave-with-gtid-replication-manager-proxysql.html.vue"]]),p=JSON.parse('{"path":"/guide/database/mysql/ha/deployment/mysql-master-slave-with-gtid-replication-manager-proxysql.html","title":"MySQL主从 + replication manager + proxysql","lang":"zh-CN","frontmatter":{"title":"MySQL主从 + replication manager + proxysql","description":"主机准备 主机信息 主机设置 主机名称设置 主机hosts设置 所有节点 关闭防火墙 所有节点 selinux设置 所有节点 主机互信设置 在每个节点执行 生成公私钥 拷贝公钥到其他服务器 在中间件节点 安装依赖 安装数据库 安装 主、从 重启数据库 主从节点 获取初始化密码 更改密码 mysql8的默认加密插件变为了caching_sha2_pass...","head":[["meta",{"property":"og:url","content":"https://github.com/abelit/abelit-datapeacock.git/guide/database/mysql/ha/deployment/mysql-master-slave-with-gtid-replication-manager-proxysql.html"}],["meta",{"property":"og:site_name","content":"数之雀"}],["meta",{"property":"og:title","content":"MySQL主从 + replication manager + proxysql"}],["meta",{"property":"og:description","content":"主机准备 主机信息 主机设置 主机名称设置 主机hosts设置 所有节点 关闭防火墙 所有节点 selinux设置 所有节点 主机互信设置 在每个节点执行 生成公私钥 拷贝公钥到其他服务器 在中间件节点 安装依赖 安装数据库 安装 主、从 重启数据库 主从节点 获取初始化密码 更改密码 mysql8的默认加密插件变为了caching_sha2_pass..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-11T14:06:18.000Z"}],["meta",{"property":"article:author","content":"Abelit"}],["meta",{"property":"article:modified_time","content":"2024-05-11T14:06:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL主从 + replication manager + proxysql\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-11T14:06:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Abelit\\",\\"url\\":\\"https://github.com/abelit\\"}]}"]]},"headers":[{"level":2,"title":"主机准备","slug":"主机准备","link":"#主机准备","children":[{"level":3,"title":"主机信息","slug":"主机信息","link":"#主机信息","children":[]},{"level":3,"title":"主机设置","slug":"主机设置","link":"#主机设置","children":[]},{"level":3,"title":"主机互信设置","slug":"主机互信设置","link":"#主机互信设置","children":[]},{"level":3,"title":"安装依赖","slug":"安装依赖","link":"#安装依赖","children":[]}]},{"level":2,"title":"安装数据库","slug":"安装数据库","link":"#安装数据库","children":[]},{"level":2,"title":"主从数据库配置","slug":"主从数据库配置","link":"#主从数据库配置","children":[{"level":3,"title":"主节点数据库配置","slug":"主节点数据库配置","link":"#主节点数据库配置","children":[]},{"level":3,"title":"从节点数据库配置","slug":"从节点数据库配置","link":"#从节点数据库配置","children":[]},{"level":3,"title":"主从库上安装半同步插件","slug":"主从库上安装半同步插件","link":"#主从库上安装半同步插件","children":[]},{"level":3,"title":"重启数据库","slug":"重启数据库","link":"#重启数据库","children":[]},{"level":3,"title":"传输基础数据","slug":"传输基础数据","link":"#传输基础数据","children":[]},{"level":3,"title":"创建复制用户","slug":"创建复制用户","link":"#创建复制用户","children":[]},{"level":3,"title":"设置从库","slug":"设置从库","link":"#设置从库","children":[]}]},{"level":2,"title":"Replication Manager安装配置","slug":"replication-manager安装配置","link":"#replication-manager安装配置","children":[{"level":3,"title":"配置yum源","slug":"配置yum源","link":"#配置yum源","children":[]},{"level":3,"title":"安装relication-manager","slug":"安装relication-manager","link":"#安装relication-manager","children":[]},{"level":3,"title":"创建监控用户","slug":"创建监控用户","link":"#创建监控用户","children":[]},{"level":3,"title":"配置relication-manager","slug":"配置relication-manager","link":"#配置relication-manager","children":[]},{"level":3,"title":"启动Replication Manager","slug":"启动replication-manager","link":"#启动replication-manager","children":[]},{"level":3,"title":"状态管理","slug":"状态管理","link":"#状态管理","children":[]}]},{"level":2,"title":"安装配置proxysql","slug":"安装配置proxysql","link":"#安装配置proxysql","children":[{"level":3,"title":"安装proxysql","slug":"安装proxysql","link":"#安装proxysql","children":[]},{"level":3,"title":"配置proxysql","slug":"配置proxysql","link":"#配置proxysql","children":[]}]},{"level":2,"title":"主从管理","slug":"主从管理","link":"#主从管理","children":[{"level":3,"title":"查看主从状态","slug":"查看主从状态","link":"#查看主从状态","children":[]},{"level":3,"title":"主从切换","slug":"主从切换","link":"#主从切换","children":[]},{"level":3,"title":"故障转移","slug":"故障转移","link":"#故障转移","children":[]}]},{"level":2,"title":"连接测试","slug":"连接测试","link":"#连接测试","children":[]},{"level":2,"title":"数据同步测试","slug":"数据同步测试","link":"#数据同步测试","children":[]},{"level":2,"title":"重置数据库信息","slug":"重置数据库信息","link":"#重置数据库信息","children":[]}],"git":{"createdTime":1715436378000,"updatedTime":1715436378000,"contributors":[{"name":"ableit","email":"ychenid@live.com","commits":1}]},"readingTime":{"minutes":15.26,"words":4579},"filePathRelative":"guide/database/mysql/ha/deployment/mysql-master-slave-with-gtid-replication-manager-proxysql.md","localizedDate":"2024年5月11日","autoDesc":true,"excerpt":"<h2>主机准备</h2>\\n<h3>主机信息</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>编号</th>\\n<th>IP 地址</th>\\n<th>角色</th>\\n<th>操作系统</th>\\n<th>内核版本</th>\\n<th>数据库版本</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>1</td>\\n<td>10.10.13.100</td>\\n<td>replication manager、proxysql</td>\\n<td>CentOS 7.9</td>\\n<td>3.10.0-1160.el7.x86_64</td>\\n<td>2.3.13、2.5.5</td>\\n</tr>\\n<tr>\\n<td>2</td>\\n<td>10.10.13.101</td>\\n<td>主</td>\\n<td>CentOS 7.9</td>\\n<td>3.10.0-1160.el7.x86_64</td>\\n<td>MySQL 8.0</td>\\n</tr>\\n<tr>\\n<td>3</td>\\n<td>10.10.13.102</td>\\n<td>从</td>\\n<td>CentOS 7.9</td>\\n<td>3.10.0-1160.el7.x86_64</td>\\n<td>MySQL 8.0</td>\\n</tr>\\n<tr>\\n<td>4</td>\\n<td>10.10.13.103</td>\\n<td>从</td>\\n<td>CentOS 7.9</td>\\n<td>3.10.0-1160.el7.x86_64</td>\\n<td>MySQL 8.0</td>\\n</tr>\\n</tbody>\\n</table>"}');export{v as comp,p as data};
