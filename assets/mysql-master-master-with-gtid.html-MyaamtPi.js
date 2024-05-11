import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as e,f as a}from"./app-DR5J2daJ.js";const l={},i=a(`<h2 id="主机准备" tabindex="-1"><a class="header-anchor" href="#主机准备"><span>主机准备</span></a></h2><h3 id="主机信息" tabindex="-1"><a class="header-anchor" href="#主机信息"><span>主机信息</span></a></h3><table><thead><tr><th>编号</th><th>IP 地址</th><th>角色</th><th>操作系统</th><th>内核版本</th><th>数据库版本</th></tr></thead><tbody><tr><td>1</td><td>10.10.13.105</td><td>MySQL主1、Keepalived</td><td>CentOS 7.9</td><td>3.10.0-1160.el7.x86_64</td><td>MySQL 8.0</td></tr><tr><td>2</td><td>10.10.13.106</td><td>MySQL主2、Keepalived</td><td>CentOS 7.9</td><td>3.10.0-1160.el7.x86_64</td><td>MySQL 8.0</td></tr><tr><td>3</td><td>10.10.13.200</td><td>VIP</td><td>CentOS 7.9</td><td>3.10.0-1160.el7.x86_64</td><td></td></tr></tbody></table><h3 id="主机设置" tabindex="-1"><a class="header-anchor" href="#主机设置"><span>主机设置</span></a></h3><ul><li>主机名称设置</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># mysql节点</span>
hostnamectl set-hostname node0

<span class="token comment"># mysql节点</span>
hostnamectl set-hostname node1

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>主机<code>hosts</code>设置</li></ul><blockquote><p>所有节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/hosts <span class="token operator">&lt;&lt;</span><span class="token string">EOF
127.0.0.1   localhost localhost.localdomain localhost4 localhost4.localdomain4
::1         localhost localhost.localdomain localhost6 localhost6.localdomain6

# by abelit
10.10.13.105 node0
10.10.13.106 node1
EOF</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>关闭防火墙</li></ul><blockquote><p>所有节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl stop firewalld
systemctl disable firewalld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>selinux设置</li></ul><blockquote><p>所有节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>setenforce <span class="token number">0</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s/^SELINUX=enforcing/SELINUX=disabled/g&quot;</span> /etc/selinux/config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装依赖" tabindex="-1"><a class="header-anchor" href="#安装依赖"><span>安装依赖</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 先查询一下killall</span>
<span class="token comment"># yum search killall</span>

<span class="token comment"># 安装psmisc</span>
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> psmisc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装数据库" tabindex="-1"><a class="header-anchor" href="#安装数据库"><span>安装数据库</span></a></h2><blockquote><p>主1主2</p></blockquote><ul><li>安装</li></ul><blockquote><p>主1主2</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl stop firewalld
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> https://repo.mysql.com//mysql80-community-release-el7-7.noarch.rpm
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> mysql-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>重启数据库</li></ul><blockquote><p>主1主2节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl restart mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>获取初始化密码</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># cat /var/log/mysqld.log|grep &quot;A temporary password&quot;|awk -F&#39;root@localhost:&#39; &#39;{print $2}&#39;</span>

<span class="token assign-left variable">MYSQL_INITIAL_PASSWORD</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">cat</span> /var/log/mysqld.log<span class="token operator">|</span><span class="token function">grep</span> <span class="token string">&quot;A temporary password&quot;</span><span class="token operator">|</span><span class="token function">tail</span> <span class="token parameter variable">-n</span> <span class="token number">1</span><span class="token operator">|</span><span class="token function">awk</span> -F<span class="token string">&#39;root@localhost:&#39;</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token operator">|</span><span class="token function">sed</span> s/<span class="token punctuation">[</span><span class="token punctuation">[</span>:space:<span class="token punctuation">]</span><span class="token punctuation">]</span>//g<span class="token variable">\`</span></span>

mysql <span class="token parameter variable">-uroot</span> -p<span class="token variable">$MYSQL_INITIAL_PASSWORD</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>更改密码</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">alter</span> <span class="token keyword">user</span> root<span class="token variable">@localhost</span> identified <span class="token keyword">WITH</span> MYSQL_NATIVE_PASSWORD <span class="token keyword">by</span> <span class="token string">&quot;Hello@2023&quot;</span><span class="token punctuation">;</span>
flush <span class="token keyword">privileges</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置主从数据库" tabindex="-1"><a class="header-anchor" href="#配置主从数据库"><span>配置主从数据库</span></a></h3><h4 id="主节点1" tabindex="-1"><a class="header-anchor" href="#主节点1"><span><strong>主节点1</strong></span></a></h4><ul><li>配置文件</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/my.cnf <span class="token operator">&lt;&lt;</span><span class="token string">&#39;EOF&#39;
# For advice on how to change settings please see
# http://dev.mysql.com/doc/refman/8.0/en/server-configuration-defaults.html

[mysqld]
#
# Remove leading # and set to the amount of RAM for the most important data
# cache in MySQL. Start at 70% of total RAM for dedicated server, else 10%.
# innodb_buffer_pool_size = 128M
#
# Remove the leading &quot;# &quot; to disable binary logging
# Binary logging captures changes between backups and is enabled by
# default. It&#39;s default setting is log_bin=binlog
# disable_log_bin
#
# Remove leading # to set options mainly useful for reporting servers.
# The server defaults are faster for transactions and fast SELECTs.
# Adjust sizes as needed, experiment to find the optimal values.
# join_buffer_size = 128M
# sort_buffer_size = 2M
# read_rnd_buffer_size = 2M
#
# Remove leading # to revert to previous value for default_authentication_plugin,
# this will increase compatibility with older clients. For background, see:
# https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_default_authentication_plugin
# default-authentication-plugin=mysql_native_password

datadir=/var/lib/mysql
socket=/var/lib/mysql/mysql.sock

log-error=/var/log/mysqld.log
pid-file=/var/run/mysqld/mysqld.pid

server-id=105
log-bin=mysql-bin
binlog_expire_logs_seconds=2592000
binlog_format=row
gtid-mode=on
enforce-gtid-consistency=true
log-slave-updates=1
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="主节点2" tabindex="-1"><a class="header-anchor" href="#主节点2"><span><strong>主节点2</strong></span></a></h4><ul><li>配置文件</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/my.cnf <span class="token operator">&lt;&lt;</span><span class="token string">&#39;EOF&#39;
# For advice on how to change settings please see
# http://dev.mysql.com/doc/refman/8.0/en/server-configuration-defaults.html

[mysqld]
#
# Remove leading # and set to the amount of RAM for the most important data
# cache in MySQL. Start at 70% of total RAM for dedicated server, else 10%.
# innodb_buffer_pool_size = 128M
#
# Remove the leading &quot;# &quot; to disable binary logging
# Binary logging captures changes between backups and is enabled by
# default. It&#39;s default setting is log_bin=binlog
# disable_log_bin
#
# Remove leading # to set options mainly useful for reporting servers.
# The server defaults are faster for transactions and fast SELECTs.
# Adjust sizes as needed, experiment to find the optimal values.
# join_buffer_size = 128M
# sort_buffer_size = 2M
# read_rnd_buffer_size = 2M
#
# Remove leading # to revert to previous value for default_authentication_plugin,
# this will increase compatibility with older clients. For background, see:
# https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_default_authentication_plugin
# default-authentication-plugin=mysql_native_password

datadir=/var/lib/mysql
socket=/var/lib/mysql/mysql.sock

log-error=/var/log/mysqld.log
pid-file=/var/run/mysqld/mysqld.pid

server-id=106
log-bin=mysql-bin
binlog_expire_logs_seconds=2592000
binlog_format=row
gtid-mode=on
enforce-gtid-consistency=true
log-slave-updates=1
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>参数说明</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 设置 server-id,唯一值，标识主机，必须与从库不一致</span>
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

<span class="token comment"># 同步数据时忽略一下数据库 但是必须在使用use db的情况下才会忽略；如果没有使用use db 比如create user  数据还是会同步的</span>
replicate-ignore-db<span class="token operator">=</span>information_schema
replicate-ignore-db<span class="token operator">=</span>mysql
replicate-ignore-db<span class="token operator">=</span>performance_schema
replicate-ignore-db<span class="token operator">=</span>sys
<span class="token comment"># 使用通配符忽略MySQL系统库的表  这样在create user时也不会进行同步了</span>
<span class="token assign-left variable">replicate_wild_ignore_table</span><span class="token operator">=</span>information_schema.%
<span class="token assign-left variable">replicate_wild_ignore_table</span><span class="token operator">=</span>mysql.%
<span class="token assign-left variable">replicate_wild_ignore_table</span><span class="token operator">=</span>performance_schema.%
<span class="token assign-left variable">replicate_wild_ignore_table</span><span class="token operator">=</span>sys.%
<span class="token comment"># MySQL系统库的日志不计入binlog 这样更加保险了</span>
binlog-ignore-db<span class="token operator">=</span>information_schema
binlog-ignore-db<span class="token operator">=</span>mysql
binlog-ignore-db<span class="token operator">=</span>performance_schema
binlog-ignore-db<span class="token operator">=</span>sys
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>重启数据库</li></ul><blockquote><p>所有节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl restart mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="传输基础数据" tabindex="-1"><a class="header-anchor" href="#传输基础数据"><span>传输基础数据</span></a></h3><ul><li>写入测试数据</li></ul><blockquote><p>主节点1</p></blockquote><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> abelitdb <span class="token keyword">CHARSET</span> utf8mb4<span class="token punctuation">;</span>
<span class="token keyword">USE</span> abelitdb<span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> abelitinfo <span class="token punctuation">(</span>
    id <span class="token keyword">INT</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token keyword">AUTO_INCREMENT</span> <span class="token keyword">COMMENT</span> <span class="token string">&quot;主键&quot;</span><span class="token punctuation">,</span>
    name <span class="token keyword">CHAR</span><span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&quot;姓名&quot;</span><span class="token punctuation">,</span>
    <span class="token keyword">INDEX</span> idx_name<span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token keyword">COMMENT</span> <span class="token string">&quot;普通索引&quot;</span>
<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span> <span class="token keyword">innodb</span> <span class="token keyword">CHARSET</span> utf8mb4 <span class="token keyword">COLLATE</span> utf8mb4_general_ci<span class="token punctuation">;</span>

<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> abelitinfo<span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">&quot;Jack&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&quot;Tom&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&quot;Mary&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> abelitinfo<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>导出数据</li></ul><blockquote><p>主节点1</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>mysqldump <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p</span> --skip-lock-tables --single-transaction --flush-logs --hex-blob --master-data<span class="token operator">=</span><span class="token number">2</span> --all-databases <span class="token operator">&gt;</span> alldatabases.sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">参数说明</p><p>--skip-lock-tables #不锁表</p><p>--single-transaction #设定事务级别为可重复读</p><p>--flush-logs #开启一个新的 binlog 文件</p><p>--hex-blob #以 16 进制导出 blob 数据</p><p>--master-data=2 #导出数据库时将 binlog 信息也一并导出，2 表示注释 binlog 信息</p></div><ul><li>传输数据到从库</li></ul><blockquote><p>主节点1</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">scp</span> alldatabases.sql root@10.10.13.106:/root/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>在从库上还原数据</li></ul><blockquote><p>主节点2</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p</span> <span class="token operator">&lt;</span> alldatabases.sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="创建复制用户-主1-主2" tabindex="-1"><a class="header-anchor" href="#创建复制用户-主1-主2"><span>创建复制用户（主1-&gt;主2）</span></a></h3><p>在主节点1创建复制用户</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>create user <span class="token string">&#39;repl_master&#39;</span>@<span class="token string">&#39;%&#39;</span> identified WITH MYSQL_NATIVE_PASSWORD by <span class="token string">&#39;Hello@2023&#39;</span><span class="token punctuation">;</span>
grant replication slave,replication client on *.* to <span class="token string">&#39;repl_master&#39;</span>@<span class="token string">&#39;%&#39;</span><span class="token punctuation">;</span>
flush privileges<span class="token punctuation">;</span>

show master status<span class="token punctuation">\\</span>G
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置从节点-主1-主2" tabindex="-1"><a class="header-anchor" href="#设置从节点-主1-主2"><span>设置从节点（主1-&gt;主2）</span></a></h3><p>在主节点2连接主节点1，复制数据(主节点1作为主库，主节点2作为备库)。</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>change master <span class="token keyword">to</span>
    master_host<span class="token operator">=</span><span class="token string">&#39;10.10.13.105&#39;</span><span class="token punctuation">,</span>
    master_port<span class="token operator">=</span><span class="token number">3306</span><span class="token punctuation">,</span>
    master_user<span class="token operator">=</span><span class="token string">&#39;repl_master&#39;</span><span class="token punctuation">,</span>
    master_password<span class="token operator">=</span><span class="token string">&#39;Hello@2023&#39;</span><span class="token punctuation">,</span>
    master_connect_retry<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">,</span>
    master_auto_position<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">参数说明</p><p>MASTER_HOST：主库的地址</p><p>MASTER_PORT：主库端口号</p><p>MASTER_USER：主库中用于复制的用户</p><p>MASTER_PASSWORD：主库中用于复制的用户密码</p><p>MASTER_CONNECT_RETRY：主库链接失败后从库重试链接的次数</p><p>MASTER_AUTO_POSITION：是否自动寻找 MASTER 中的 GTID 号位置，详情参见外面的描述 首先我们是使用的 mysqldump 对主库进行全备，并在从库上进行了恢复。 那么全备的 sql 文件中就会存在已截取的 GTID 事务号。</p><p>MASTER_AUTO_POSITION=1 实际上是让从库从主库 GTID 事务号 1 后开始截取，如果是 mysqldump 进行逻辑备份恢复则会自动将该参数调整为全备 SQL 文件中的 GTID 事务号+1。</p><p>那么如果是 XBK 物理备份怎么填写该参数呢？你需要 xtrabackup_binlog_info 文件中，读取出已截取的 GTID 事务号，填写时+1 即可（只截取最后的那个数字！不是整个 uuid+int 的字符串）。</p><p>总结！mysqldump 逻辑备份恢复，该参数填 1，内部会自动进行校正。 XBK 物理备份恢复，检查 xtrabackup_binlog_info 文件，该参数在 GTID 事务号基础上+1</p></div><ul><li>开启从库</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">start</span> slave<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看主从状态-主1-主2" tabindex="-1"><a class="header-anchor" href="#查看主从状态-主1-主2"><span>查看主从状态（主1-&gt;主2）</span></a></h3><ul><li>检查从库状态</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">show</span> slave <span class="token keyword">status</span>\\G
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意事项：</p><p>当 Slave_IO_Running 和 Slave_SQL_Running 都为 Yes 的时候，表示主从同步正常。</p></div><h3 id="创建复制用户-主2-主1" tabindex="-1"><a class="header-anchor" href="#创建复制用户-主2-主1"><span>创建复制用户（主2-&gt;主1）</span></a></h3><p>在主节点2创建复制用户</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>create user <span class="token string">&#39;repl_slave&#39;</span>@<span class="token string">&#39;%&#39;</span> identified WITH MYSQL_NATIVE_PASSWORD by <span class="token string">&#39;Hello@2023&#39;</span><span class="token punctuation">;</span>
grant replication slave,replication client on *.* to <span class="token string">&#39;repl_slave&#39;</span>@<span class="token string">&#39;%&#39;</span><span class="token punctuation">;</span>
flush privileges<span class="token punctuation">;</span>

show master status<span class="token punctuation">\\</span>G
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置从节点-主2-主1" tabindex="-1"><a class="header-anchor" href="#设置从节点-主2-主1"><span>设置从节点（主2-&gt;主1）</span></a></h3><p>在主节点1连接主节点2，复制数据(主节点2作为主库，主节点1作为备库)。</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>change master <span class="token keyword">to</span>
    master_host<span class="token operator">=</span><span class="token string">&#39;10.10.13.106&#39;</span><span class="token punctuation">,</span>
    master_port<span class="token operator">=</span><span class="token number">3306</span><span class="token punctuation">,</span>
    master_user<span class="token operator">=</span><span class="token string">&#39;repl_slave&#39;</span><span class="token punctuation">,</span>
    master_password<span class="token operator">=</span><span class="token string">&#39;Hello@2023&#39;</span><span class="token punctuation">,</span>
    master_connect_retry<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">,</span>
    master_auto_position<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">参数说明</p><p>MASTER_HOST：主库的地址</p><p>MASTER_PORT：主库端口号</p><p>MASTER_USER：主库中用于复制的用户</p><p>MASTER_PASSWORD：主库中用于复制的用户密码</p><p>MASTER_CONNECT_RETRY：主库链接失败后从库重试链接的次数</p><p>MASTER_AUTO_POSITION：是否自动寻找 MASTER 中的 GTID 号位置，详情参见外面的描述 首先我们是使用的 mysqldump 对主库进行全备，并在从库上进行了恢复。 那么全备的 sql 文件中就会存在已截取的 GTID 事务号。</p><p>MASTER_AUTO_POSITION=1 实际上是让从库从主库 GTID 事务号 1 后开始截取，如果是 mysqldump 进行逻辑备份恢复则会自动将该参数调整为全备 SQL 文件中的 GTID 事务号+1。</p><p>那么如果是 XBK 物理备份怎么填写该参数呢？你需要 xtrabackup_binlog_info 文件中，读取出已截取的 GTID 事务号，填写时+1 即可（只截取最后的那个数字！不是整个 uuid+int 的字符串）。</p><p>总结！mysqldump 逻辑备份恢复，该参数填 1，内部会自动进行校正。 XBK 物理备份恢复，检查 xtrabackup_binlog_info 文件，该参数在 GTID 事务号基础上+1</p></div><ul><li>开启从库</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">start</span> slave<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看主从状态-主2-主1" tabindex="-1"><a class="header-anchor" href="#查看主从状态-主2-主1"><span>查看主从状态（主2-&gt;主1）</span></a></h3><ul><li>检查从库状态</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">show</span> slave <span class="token keyword">status</span>\\G
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意事项：</p><p>当 Slave_IO_Running 和 Slave_SQL_Running 都为 Yes 的时候，表示主从同步正常。</p></div><h2 id="keepalive高可用" tabindex="-1"><a class="header-anchor" href="#keepalive高可用"><span>keepalive高可用</span></a></h2><p>Keepalived有两个主要的功能：</p><ul><li>提供虚IP，实现双机热备；</li><li>通过LVS，实现负载均衡。</li></ul><h3 id="安装keepalived软件" tabindex="-1"><a class="header-anchor" href="#安装keepalived软件"><span>安装keepalived软件</span></a></h3><blockquote><p>主1主2</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> keepalived
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="keepalived配置" tabindex="-1"><a class="header-anchor" href="#keepalived配置"><span>keepalived配置</span></a></h3><p>在主节点1上配置</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/keepalived/keepalived.conf <span class="token operator">&lt;&lt;</span><span class="token string">&#39;EOF&#39;
# 全局配置 不用动  只需注释掉vrrp_strict
global_defs {
  notification_email {
    ychenid@126.com
  }
  notification_email_from dba@datatorum.org
  smtp_server 127.0.0.1
  smtp_connect_timeout 30
  router_id LVS_DEVEL
  vrrp_skip_check_adv_addr
  #必须注释掉 否则报错
  #vrrp_strict
  vrrp_garp_interval 0
  vrrp_gna_interval 0
}

# 检查mysql服务是否存活的脚本
vrrp_script check_mysql {
  script &quot;/usr/bin/killall -0 mysqld&quot;
}
# vrrp配置虚IP
vrrp_instance VI_1 {
  # 状态：MASTER  另外一台机器为BACKUP
  state MASTER
  # 绑定的网卡
  interface eth0
  # 虚拟路由id  两台机器需保持一致
  virtual_router_id 51
  # 优先级 MASTER的值要大于BACKUP
  priority 100
  advert_int 1
  authentication {
    auth_type PASS
    auth_pass 1111
  }
  # 虚拟IP地址 两台keepalived需要一致
  virtual_ipaddress {
    10.10.13.200
  }
  # 检查脚本 vrrp_script的名字
  track_script {
    check_mysql
  }
}
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在主节点2上配置</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/keepalived/keepalived.conf <span class="token operator">&lt;&lt;</span><span class="token string">&#39;EOF&#39;
# 全局配置 不用动  只需注释掉vrrp_strict
global_defs {
  notification_email {
    ychenid@126.com
  }
  notification_email_from dba@datatorum.org
  smtp_server 127.0.0.1
  smtp_connect_timeout 30
  router_id LVS_DEVEL
  vrrp_skip_check_adv_addr
  #必须注释掉 否则报错
  #vrrp_strict
  vrrp_garp_interval 0
  vrrp_gna_interval 0
}

# 检查mysql服务是否存活的脚本
vrrp_script check_mysql {
  script &quot;/usr/bin/killall -0 mysqld&quot;
}
# vrrp配置虚IP
vrrp_instance VI_1 {
  # 状态：MASTER  另外一台机器为BACKUP
  state BACKUP
  # 绑定的网卡
  interface eth0
  # 虚拟路由id  两台机器需保持一致
  virtual_router_id 51
  # 优先级 MASTER的值要大于BACKUP
  priority 100
  advert_int 1
  authentication {
    auth_type PASS
    auth_pass 1111
  }
  # 虚拟IP地址 两台keepalived需要一致
  virtual_ipaddress {
    10.10.13.200
  }
  # 检查脚本 vrrp_script的名字
  track_script {
    check_mysql
  }
}
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启动keepalived" tabindex="-1"><a class="header-anchor" href="#启动keepalived"><span>启动keepalived</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl start keepalived
systemctl <span class="token builtin class-name">enable</span> keepalived
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据同步测试" tabindex="-1"><a class="header-anchor" href="#数据同步测试"><span>数据同步测试</span></a></h2><h3 id="主节点1-主节点2-同步测试" tabindex="-1"><a class="header-anchor" href="#主节点1-主节点2-同步测试"><span>主节点1 -&gt; 主节点2 同步测试</span></a></h3><ul><li>主节点1写入数据</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">use</span> abelitdb<span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> abelitinfo<span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">&quot;abelit-primary&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> abelitinfo<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>主节点2查询数据</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">use</span> abelitdb<span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> abelitinfo<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="主节点2-主节点1-同步测试" tabindex="-1"><a class="header-anchor" href="#主节点2-主节点1-同步测试"><span>主节点2 -&gt; 主节点1 同步测试</span></a></h3><ul><li>主节点2写入数据</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">use</span> abelitdb<span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> abelitinfo<span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">&quot;abelit-standby&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> abelitinfo<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>主节点1查询数据</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">use</span> abelitdb<span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> abelitinfo<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="高可用切换测试" tabindex="-1"><a class="header-anchor" href="#高可用切换测试"><span>高可用切换测试</span></a></h2><p>查看VIP所在节点，发现当前VIP在主节点1上： 节点1：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ip a</span>
<span class="token number">1</span>: lo: <span class="token operator">&lt;</span>LOOPBACK,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">65536</span> qdisc noqueue state UNKNOWN group default qlen <span class="token number">1000</span>
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet <span class="token number">127.0</span>.0.1/8 scope <span class="token function">host</span> lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope <span class="token function">host</span> 
       valid_lft forever preferred_lft forever
<span class="token number">2</span>: eth0: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc pfifo_fast state UP group default qlen <span class="token number">1000</span>
    link/ether <span class="token number">50</span>:6b:8d:c1:eb:ad brd ff:ff:ff:ff:ff:ff
    inet <span class="token number">10.10</span>.13.105/24 brd <span class="token number">10.10</span>.13.255 scope global noprefixroute eth0
       valid_lft forever preferred_lft forever
    inet <span class="token number">10.10</span>.13.200/32 scope global eth0
       valid_lft forever preferred_lft forever
    inet6 fe80::526b:8dff:fec1:ebad/64 scope <span class="token function">link</span> 
       valid_lft forever preferred_lft forever
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>节点2：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ip a</span>
<span class="token number">1</span>: lo: <span class="token operator">&lt;</span>LOOPBACK,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">65536</span> qdisc noqueue state UNKNOWN group default qlen <span class="token number">1000</span>
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet <span class="token number">127.0</span>.0.1/8 scope <span class="token function">host</span> lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope <span class="token function">host</span> 
       valid_lft forever preferred_lft forever
<span class="token number">2</span>: eth0: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc pfifo_fast state UP group default qlen <span class="token number">1000</span>
    link/ether <span class="token number">50</span>:6b:8d:db:6d:98 brd ff:ff:ff:ff:ff:ff
    inet <span class="token number">10.10</span>.13.106/24 brd <span class="token number">10.10</span>.13.255 scope global noprefixroute eth0
       valid_lft forever preferred_lft forever
    inet6 fe80::526b:8dff:fedb:6d98/64 scope <span class="token function">link</span> 
       valid_lft forever preferred_lft forever
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>停掉主节点1数据库（模拟主节点1数据库宕机）</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl stop mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>再次查看VIP,发现已经漂移到节点2上了。 节点1:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ip a</span>
<span class="token number">1</span>: lo: <span class="token operator">&lt;</span>LOOPBACK,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">65536</span> qdisc noqueue state UNKNOWN group default qlen <span class="token number">1000</span>
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet <span class="token number">127.0</span>.0.1/8 scope <span class="token function">host</span> lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope <span class="token function">host</span> 
       valid_lft forever preferred_lft forever
<span class="token number">2</span>: eth0: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc pfifo_fast state UP group default qlen <span class="token number">1000</span>
    link/ether <span class="token number">50</span>:6b:8d:c1:eb:ad brd ff:ff:ff:ff:ff:ff
    inet <span class="token number">10.10</span>.13.105/24 brd <span class="token number">10.10</span>.13.255 scope global noprefixroute eth0
       valid_lft forever preferred_lft forever
    inet6 fe80::526b:8dff:fec1:ebad/64 scope <span class="token function">link</span> 
       valid_lft forever preferred_lft forever
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>节点2：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ip a</span>
<span class="token number">1</span>: lo: <span class="token operator">&lt;</span>LOOPBACK,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">65536</span> qdisc noqueue state UNKNOWN group default qlen <span class="token number">1000</span>
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet <span class="token number">127.0</span>.0.1/8 scope <span class="token function">host</span> lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope <span class="token function">host</span> 
       valid_lft forever preferred_lft forever
<span class="token number">2</span>: eth0: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc pfifo_fast state UP group default qlen <span class="token number">1000</span>
    link/ether <span class="token number">50</span>:6b:8d:db:6d:98 brd ff:ff:ff:ff:ff:ff
    inet <span class="token number">10.10</span>.13.106/24 brd <span class="token number">10.10</span>.13.255 scope global noprefixroute eth0
       valid_lft forever preferred_lft forever
    inet <span class="token number">10.10</span>.13.200/32 scope global eth0
       valid_lft forever preferred_lft forever
    inet6 fe80::526b:8dff:fedb:6d98/64 scope <span class="token function">link</span> 
       valid_lft forever preferred_lft forever
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,116),t=[i];function d(r,o){return s(),e("div",null,t)}const v=n(l,[["render",d],["__file","mysql-master-master-with-gtid.html.vue"]]),u=JSON.parse('{"path":"/guide/database/mysql/ha/deployment/mysql-master-master-with-gtid.html","title":"MySQL 双主（GTID）","lang":"zh-CN","frontmatter":{"title":"MySQL 双主（GTID）","description":"主机准备 主机信息 主机设置 主机名称设置 主机hosts设置 所有节点 关闭防火墙 所有节点 selinux设置 所有节点 安装依赖 安装数据库 主1主2 安装 主1主2 重启数据库 主1主2节点 获取初始化密码 更改密码 配置主从数据库 主节点1 配置文件 主节点2 配置文件 参数说明 重启数据库 所有节点 传输基础数据 写入测试数据 主节点1 导...","head":[["meta",{"property":"og:url","content":"https://github.com/abelit/abelit-datapeacock.git/guide/database/mysql/ha/deployment/mysql-master-master-with-gtid.html"}],["meta",{"property":"og:site_name","content":"数之雀"}],["meta",{"property":"og:title","content":"MySQL 双主（GTID）"}],["meta",{"property":"og:description","content":"主机准备 主机信息 主机设置 主机名称设置 主机hosts设置 所有节点 关闭防火墙 所有节点 selinux设置 所有节点 安装依赖 安装数据库 主1主2 安装 主1主2 重启数据库 主1主2节点 获取初始化密码 更改密码 配置主从数据库 主节点1 配置文件 主节点2 配置文件 参数说明 重启数据库 所有节点 传输基础数据 写入测试数据 主节点1 导..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-11T14:06:18.000Z"}],["meta",{"property":"article:author","content":"Abelit"}],["meta",{"property":"article:modified_time","content":"2024-05-11T14:06:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL 双主（GTID）\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-11T14:06:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Abelit\\",\\"url\\":\\"https://github.com/abelit\\"}]}"]]},"headers":[{"level":2,"title":"主机准备","slug":"主机准备","link":"#主机准备","children":[{"level":3,"title":"主机信息","slug":"主机信息","link":"#主机信息","children":[]},{"level":3,"title":"主机设置","slug":"主机设置","link":"#主机设置","children":[]},{"level":3,"title":"安装依赖","slug":"安装依赖","link":"#安装依赖","children":[]}]},{"level":2,"title":"安装数据库","slug":"安装数据库","link":"#安装数据库","children":[{"level":3,"title":"配置主从数据库","slug":"配置主从数据库","link":"#配置主从数据库","children":[]},{"level":3,"title":"传输基础数据","slug":"传输基础数据","link":"#传输基础数据","children":[]},{"level":3,"title":"创建复制用户（主1->主2）","slug":"创建复制用户-主1-主2","link":"#创建复制用户-主1-主2","children":[]},{"level":3,"title":"设置从节点（主1->主2）","slug":"设置从节点-主1-主2","link":"#设置从节点-主1-主2","children":[]},{"level":3,"title":"查看主从状态（主1->主2）","slug":"查看主从状态-主1-主2","link":"#查看主从状态-主1-主2","children":[]},{"level":3,"title":"创建复制用户（主2->主1）","slug":"创建复制用户-主2-主1","link":"#创建复制用户-主2-主1","children":[]},{"level":3,"title":"设置从节点（主2->主1）","slug":"设置从节点-主2-主1","link":"#设置从节点-主2-主1","children":[]},{"level":3,"title":"查看主从状态（主2->主1）","slug":"查看主从状态-主2-主1","link":"#查看主从状态-主2-主1","children":[]}]},{"level":2,"title":"keepalive高可用","slug":"keepalive高可用","link":"#keepalive高可用","children":[{"level":3,"title":"安装keepalived软件","slug":"安装keepalived软件","link":"#安装keepalived软件","children":[]},{"level":3,"title":"keepalived配置","slug":"keepalived配置","link":"#keepalived配置","children":[]},{"level":3,"title":"启动keepalived","slug":"启动keepalived","link":"#启动keepalived","children":[]}]},{"level":2,"title":"数据同步测试","slug":"数据同步测试","link":"#数据同步测试","children":[{"level":3,"title":"主节点1 -> 主节点2 同步测试","slug":"主节点1-主节点2-同步测试","link":"#主节点1-主节点2-同步测试","children":[]},{"level":3,"title":"主节点2 -> 主节点1 同步测试","slug":"主节点2-主节点1-同步测试","link":"#主节点2-主节点1-同步测试","children":[]}]},{"level":2,"title":"高可用切换测试","slug":"高可用切换测试","link":"#高可用切换测试","children":[]}],"git":{"createdTime":1715436378000,"updatedTime":1715436378000,"contributors":[{"name":"ableit","email":"ychenid@live.com","commits":1}]},"readingTime":{"minutes":11.16,"words":3348},"filePathRelative":"guide/database/mysql/ha/deployment/mysql-master-master-with-gtid.md","localizedDate":"2024年5月11日","autoDesc":true,"excerpt":"<h2>主机准备</h2>\\n<h3>主机信息</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>编号</th>\\n<th>IP 地址</th>\\n<th>角色</th>\\n<th>操作系统</th>\\n<th>内核版本</th>\\n<th>数据库版本</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>1</td>\\n<td>10.10.13.105</td>\\n<td>MySQL主1、Keepalived</td>\\n<td>CentOS 7.9</td>\\n<td>3.10.0-1160.el7.x86_64</td>\\n<td>MySQL 8.0</td>\\n</tr>\\n<tr>\\n<td>2</td>\\n<td>10.10.13.106</td>\\n<td>MySQL主2、Keepalived</td>\\n<td>CentOS 7.9</td>\\n<td>3.10.0-1160.el7.x86_64</td>\\n<td>MySQL 8.0</td>\\n</tr>\\n<tr>\\n<td>3</td>\\n<td>10.10.13.200</td>\\n<td>VIP</td>\\n<td>CentOS 7.9</td>\\n<td>3.10.0-1160.el7.x86_64</td>\\n<td></td>\\n</tr>\\n</tbody>\\n</table>"}');export{v as comp,u as data};
