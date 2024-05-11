import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,f as e}from"./app-DR5J2daJ.js";const i={},l=e(`<h2 id="主机准备" tabindex="-1"><a class="header-anchor" href="#主机准备"><span>主机准备</span></a></h2><h3 id="主机信息" tabindex="-1"><a class="header-anchor" href="#主机信息"><span>主机信息</span></a></h3><table><thead><tr><th>编号</th><th>IP 地址</th><th>角色</th><th>操作系统</th><th>内核版本</th><th>数据库版本</th></tr></thead><tbody><tr><td>1</td><td>10.10.13.100</td><td>主</td><td>CentOS 7.9</td><td>3.10.0-1160.el7.x86_64</td><td>MySQL 8.0</td></tr><tr><td>2</td><td>10.10.13.101</td><td>从</td><td>CentOS 7.9</td><td>3.10.0-1160.el7.x86_64</td><td>MySQL 8.0</td></tr><tr><td>3</td><td>10.10.13.102</td><td>中间件/replication manager</td><td>CentOS 7.9</td><td>3.10.0-1160.el7.x86_64</td><td>2.3.13</td></tr><tr><td>4</td><td>10.10.13.110</td><td>VIP</td><td></td><td></td><td></td></tr></tbody></table><h3 id="主机设置" tabindex="-1"><a class="header-anchor" href="#主机设置"><span>主机设置</span></a></h3><ul><li>主机名称设置</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 节点1</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>selinux设置</li></ul><blockquote><p>所有节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>setenforce <span class="token number">0</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s/^SELINUX=enforcing/SELINUX=disabled/g&quot;</span> /etc/selinux/config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="主机互信设置" tabindex="-1"><a class="header-anchor" href="#主机互信设置"><span>主机互信设置</span></a></h3><blockquote><p>在每个节点执行</p></blockquote><ul><li>生成公私钥</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>ssh-keygen <span class="token parameter variable">-t</span> rsa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>拷贝公钥到其他服务器</li></ul><blockquote><p>在中间件节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># root user</span>
<span class="token assign-left variable">hosts</span><span class="token operator">=</span><span class="token string">&quot;10.10.13.100 10.10.13.101&quot;</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">host</span> <span class="token keyword">in</span> <span class="token variable">$hosts</span><span class="token punctuation">;</span> 
<span class="token keyword">do</span> 
sshpass <span class="token parameter variable">-p</span> <span class="token string">&quot;root@123&quot;</span> ssh-copy-id <span class="token parameter variable">-f</span> <span class="token parameter variable">-o</span> <span class="token assign-left variable">StrictHostKeyChecking</span><span class="token operator">=</span>no <span class="token variable">$host</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$host</span>
<span class="token keyword">done</span>

<span class="token assign-left variable">hosts</span><span class="token operator">=</span><span class="token string">&quot;node1 node2&quot;</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">host</span> <span class="token keyword">in</span> <span class="token variable">$hosts</span><span class="token punctuation">;</span> 
<span class="token keyword">do</span> 
sshpass <span class="token parameter variable">-p</span> <span class="token string">&quot;root@123&quot;</span> ssh-copy-id <span class="token parameter variable">-f</span> <span class="token parameter variable">-o</span> <span class="token assign-left variable">StrictHostKeyChecking</span><span class="token operator">=</span>no <span class="token variable">$host</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$host</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装数据库" tabindex="-1"><a class="header-anchor" href="#安装数据库"><span>安装数据库</span></a></h2><ul><li>安装 <blockquote><p>主、从</p></blockquote></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl stop firewalld
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> https://repo.mysql.com//mysql80-community-release-el7-7.noarch.rpm
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> mysql-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>重启数据库 <blockquote><p>主从节点</p></blockquote></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl restart mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>获取初始化密码</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> /var/log/mysqld.log<span class="token operator">|</span><span class="token function">grep</span> <span class="token string">&quot;A temporary password&quot;</span><span class="token operator">|</span><span class="token function">awk</span> -F<span class="token string">&#39;root@localhost:&#39;</span> <span class="token string">&#39;{print $2}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>更改密码</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">alter</span> <span class="token keyword">user</span> root<span class="token variable">@localhost</span> identified <span class="token keyword">by</span> <span class="token string">&quot;Hello@2023&quot;</span><span class="token punctuation">;</span>
flush <span class="token keyword">privileges</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="主从数据库配置" tabindex="-1"><a class="header-anchor" href="#主从数据库配置"><span>主从数据库配置</span></a></h2><h3 id="主节点数据库配置" tabindex="-1"><a class="header-anchor" href="#主节点数据库配置"><span>主节点数据库配置</span></a></h3><ul><li>配置文件</li></ul><div class="language-conf line-numbers-mode" data-ext="conf" data-title="conf"><pre class="language-conf"><code>[mysqld]
server-id=1
log-bin=mysql-bin
binlog_expire_logs_seconds=2592000
binlog_format=row
gtid-mode=on
enforce-gtid-consistency=true
log-slave-updates=1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="从节点数据库配置" tabindex="-1"><a class="header-anchor" href="#从节点数据库配置"><span>从节点数据库配置</span></a></h3><ul><li>配置文件</li></ul><div class="language-conf line-numbers-mode" data-ext="conf" data-title="conf"><pre class="language-conf"><code>[mysqld]
server-id=2
log-bin=mysql-bin
binlog_expire_logs_seconds=2592000
binlog_format=row
gtid-mode=on
enforce-gtid-consistency=true
log-slave-updates=1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>参数说明</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 设置 server-id,唯一值，标识主机，必须与从库不一致</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重启数据库" tabindex="-1"><a class="header-anchor" href="#重启数据库"><span>重启数据库</span></a></h3><blockquote><p>主从节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl restart mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="传输基础数据" tabindex="-1"><a class="header-anchor" href="#传输基础数据"><span>传输基础数据</span></a></h3><ul><li>写入测试数据</li></ul><blockquote><p>主节点</p></blockquote><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> abelitdb <span class="token keyword">CHARSET</span> utf8mb4<span class="token punctuation">;</span>
<span class="token keyword">USE</span> abelitdb<span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> abelitinfo <span class="token punctuation">(</span>
    id <span class="token keyword">INT</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token keyword">AUTO_INCREMENT</span> <span class="token keyword">COMMENT</span> <span class="token string">&quot;主键&quot;</span><span class="token punctuation">,</span>
    name <span class="token keyword">CHAR</span><span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&quot;姓名&quot;</span><span class="token punctuation">,</span>
    <span class="token keyword">INDEX</span> idx_name<span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token keyword">COMMENT</span> <span class="token string">&quot;普通索引&quot;</span>
<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span> <span class="token keyword">innodb</span> <span class="token keyword">CHARSET</span> utf8mb4 <span class="token keyword">COLLATE</span> utf8mb4_general_ci<span class="token punctuation">;</span>

<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> abelitinfo<span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">&quot;Jack&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&quot;Tom&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&quot;Mary&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> abelitinfo<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>导出数据 <blockquote><p>主节点</p></blockquote></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>mysqldump <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p</span> --skip-lock-tables --single-transaction --flush-logs --hex-blob --master-data<span class="token operator">=</span><span class="token number">2</span> --all-databases <span class="token operator">&gt;</span> alldatabases.sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">参数说明</p><p>--skip-lock-tables #不锁表</p><p>--single-transaction #设定事务级别为可重复读</p><p>--flush-logs #开启一个新的 binlog 文件</p><p>--hex-blob #以 16 进制导出 blob 数据</p><p>--master-data=2 #导出数据库时将 binlog 信息也一并导出，2 表示注释 binlog 信息</p></div><ul><li>传输数据到从库 <blockquote><p>主节点</p></blockquote></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">scp</span> alldatabases.sql root@10.10.13.101:/root/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>在从库上还原数据 <blockquote><p>从节点</p></blockquote></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p</span> <span class="token operator">&lt;</span> alldatabases.sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="创建复制用户" tabindex="-1"><a class="header-anchor" href="#创建复制用户"><span>创建复制用户</span></a></h3><ul><li>主节点</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>create user <span class="token string">&#39;repl&#39;</span>@<span class="token string">&#39;%&#39;</span> identified by <span class="token string">&#39;Hello@2023&#39;</span><span class="token punctuation">;</span>
grant replication slave,replication client on *.* to <span class="token string">&#39;repl&#39;</span>@<span class="token string">&#39;%&#39;</span><span class="token punctuation">;</span>
flush privileges<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置从库" tabindex="-1"><a class="header-anchor" href="#设置从库"><span>设置从库</span></a></h3><ul><li>配置从库连接主库信息</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>change master <span class="token keyword">to</span>
    master_host<span class="token operator">=</span><span class="token string">&#39;10.10.13.100&#39;</span><span class="token punctuation">,</span>
    master_port<span class="token operator">=</span><span class="token number">3306</span><span class="token punctuation">,</span>
    master_user<span class="token operator">=</span><span class="token string">&#39;repl&#39;</span><span class="token punctuation">,</span>
    master_password<span class="token operator">=</span><span class="token string">&#39;Hello@2023&#39;</span><span class="token punctuation">,</span>
    master_connect_retry<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">,</span>
    master_auto_position<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">参数说明</p><p>MASTER_HOST：主库的地址</p><p>MASTER_PORT：主库端口号</p><p>MASTER_USER：主库中用于复制的用户</p><p>MASTER_PASSWORD：主库中用于复制的用户密码</p><p>MASTER_CONNECT_RETRY：主库链接失败后从库重试链接的次数</p><p>MASTER_AUTO_POSITION：是否自动寻找 MASTER 中的 GTID 号位置，详情参见外面的描述 首先我们是使用的 mysqldump 对主库进行全备，并在从库上进行了恢复。 那么全备的 sql 文件中就会存在已截取的 GTID 事务号。</p><p>MASTER_AUTO_POSITION=1 实际上是让从库从主库 GTID 事务号 1 后开始截取，如果是 mysqldump 进行逻辑备份恢复则会自动将该参数调整为全备 SQL 文件中的 GTID 事务号+1。</p><p>那么如果是 XBK 物理备份怎么填写该参数呢？你需要 xtrabackup_binlog_info 文件中，读取出已截取的 GTID 事务号，填写时+1 即可（只截取最后的那个数字！不是整个 uuid+int 的字符串）。</p><p>总结！mysqldump 逻辑备份恢复，该参数填 1，内部会自动进行校正。 XBK 物理备份恢复，检查 xtrabackup_binlog_info 文件，该参数在 GTID 事务号基础上+1</p></div><ul><li>开启从库</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>CHANGE MASTER <span class="token keyword">TO</span> GET_MASTER_PUBLIC_KEY<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>

<span class="token keyword">start</span> slave<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="replication-manager安装配置" tabindex="-1"><a class="header-anchor" href="#replication-manager安装配置"><span>Replication Manager安装配置</span></a></h2><h3 id="配置yum源" tabindex="-1"><a class="header-anchor" href="#配置yum源"><span>配置yum源</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/yum.repos.d/signal18.repo <span class="token operator">&lt;&lt;</span><span class="token string">&#39;EOF&#39;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h3><p>replication-manager 配置文件</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/replication-manager/config.toml <span class="token operator">&lt;&lt;</span><span class="token string">&#39;EOF&#39;
# 集群名称
[abelitcluster]
title = &quot;MySQL-Monitor&quot;
db-servers-hosts = &quot;10.10.13.100:3306,10.10.13.101:3306&quot;
db-servers-prefered-master = &quot;10.10.13.100:3306&quot;
db-servers-credential = &quot;rep_monitor:Hello@2023&quot;
db-servers-connect-timeout = 2
replication-credential = &quot;rep_monitor:Hello@2023&quot;
# 可配置忽略某些机器，不会被用于切换
# db-servers-ignored-hosts=&quot;127.0.0.1:5057&quot;

##############
## FAILOVER ##
##############
# 故障自动切换
failover-mode = &quot;automatic&quot;
# 30s内再次发生故障不切换，防止硬件问题或网络问题
failover-time-limit=30
# vip切换脚本
failover-post-script = &quot;/etc/replication-manager/vip_up.sh&quot;

# 【默认】如果一个从站仍可以从主站获取事件，则取消故障转移
failover-falsepositive-heartbeat = true
# 【默认】故障转移和切换将从库设置为只读
failover-readonly-state = true
#【默认】调度程序相关
failover-event-scheduler = false
failover-event-status = false
# 【默认】当从库延迟超过30s时，选主时忽略此服务器
failover-max-slave-delay = 30

[Default]
#########
## LOG ##
#########
log-file = &quot;/var/log/replication-manager.log&quot;
log-heartbeat = false
log-syslog = false
monitoring-datadir = &quot;/var/lib/replication-manager&quot;
log-level=1

replication-multi-master = false
replication-multi-tier-slave = false
failover-readonly-state = true
http-server = true
http-bind-address = &quot;0.0.0.0&quot;
http-port = &quot;10001&quot;
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">关键参数</p><p>db-servers-hosts</p><p>db-servers-prefered-master</p><p>db-servers-credential</p><p>replication-credentia</p></div><p>VIP脚本</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 添加脚本</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/replication-manager/vip_up.sh <span class="token operator">&lt;&lt;</span><span class="token string">&#39;EOF&#39;
#!/bin/bash

# 当前脚本适用于中间件为 replication-manager 的高可用VIP切换,
# 接收传入参数 cluster.oldMaster.Host cluster.master.Host cluster.oldMaster.Port cluster.master.Port
orig_master=$1
new_master=$2
old_port=$3
new_port=$4


emailaddress=&quot;email@example.com&quot;
sendmail=0

# 根据环境配置
# 网卡名称
interface=eth0
# VIP
vip=10.10.13.110
# ssh用户
ssh_options=&#39;&#39;
ssh_user=&#39;root&#39;


# discover commands from our path
ssh=$(which ssh)
arping=$(which arping)
ip2util=$(which ip)

# command for adding our vip
cmd_vip_add=&quot;sudo -n $ip2util address add \${vip} dev \${interface}&quot;
# command for deleting our vip
cmd_vip_del=&quot;sudo -n $ip2util address del \${vip}/32 dev \${interface}&quot;
# command for discovering if our vip is enabled
cmd_vip_chk=&quot;sudo -n $ip2util address show dev \${interface} to \${vip%/*}/32&quot;
# command for sending gratuitous arp to announce ip move
cmd_arp_fix=&quot;sudo -n $arping -c 1 -I \${interface} \${vip%/*}&quot;
# command for sending gratuitous arp to announce ip move on current server
cmd_local_arp_fix=&quot;sudo -n $arping -c 1 \${vip%/*}&quot;

vip_stop() {
    rc=0

    # ensure the vip is removed
    $ssh \${ssh_options} -tt \${ssh_user}@\${orig_master} \\
    &quot;[ -n \\&quot;\\$(\${cmd_vip_chk})\\&quot; ] &amp;&amp; \${cmd_vip_del} &amp;&amp; sudo \${ip2util} route flush cache || [ -z \\&quot;\\$(\${cmd_vip_chk})\\&quot; ]&quot;
    rc=$?
    return $rc
}

vip_start() {
    rc=0

    # ensure the vip is added
    # this command should exit with failure if we are unable to add the vip
    # if the vip already exists always exit 0 (whether or not we added it)
    $ssh \${ssh_options} -tt \${ssh_user}@\${new_master} \\
     &quot;[ -z \\&quot;\\$(\${cmd_vip_chk})\\&quot; ] &amp;&amp; \${cmd_vip_add} &amp;&amp; \${cmd_arp_fix} || [ -n \\&quot;\\$(\${cmd_vip_chk})\\&quot; ]&quot;
    rc=$?
    $cmd_local_arp_fix
    return $rc
}

vip_status() {
    $arping -c 1 \${vip%/*}
    if ping -c 1 -W 1 &quot;$vip&quot;; then
        return 0
    else
        return 1
    fi
}


echo &quot;\`date +&#39;%Y-%m-%d %T&#39;\` Master is dead, failover&quot;
# make sure the vip is not available 
if vip_status; then 
    if vip_stop; then
        if [ $sendmail -eq 1 ]; then mail -s &quot;$vip is removed from orig_master.&quot; &quot;$emailaddress&quot; &lt; /dev/null &amp;&gt; /dev/null  ; fi
    else
        if [ $sendmail -eq 1 ]; then mail -s &quot;Couldn&#39;t remove $vip from orig_master.&quot; &quot;$emailaddress&quot; &lt; /dev/null &amp;&gt; /dev/null  ; fi
        exit 1
    fi
fi

if vip_start; then
      echo &quot;\`date +&#39;%Y-%m-%d %T&#39;\` $vip is moved to $new_master.&quot;
      if [ $sendmail -eq 1 ]; then mail -s &quot;$vip is moved to $new_master.&quot; &quot;$emailaddress&quot; &lt; /dev/null &amp;&gt; /dev/null  ; fi

else
      echo &quot;\`date +&#39;%Y-%m-%d %T&#39;\` Can&#39;t add $vip on $new_master!&quot;
      if [ $sendmail -eq 1 ]; then mail -s &quot;Can&#39;t add $vip on $new_master!&quot; &quot;$emailaddress&quot; &lt; /dev/null &amp;&gt; /dev/null  ; fi
      exit 1
fi
EOF</span>


<span class="token comment"># 脚本授权</span>
<span class="token function">chmod</span> +x /etc/replication-manager/vip_up.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">关键参数</p><p>interface</p><p>vip</p><p>ssh_user</p></div><h3 id="主库设置vip" tabindex="-1"><a class="header-anchor" href="#主库设置vip"><span>主库设置VIP</span></a></h3><ul><li>添加VIP</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">ip</span> address <span class="token function">add</span> <span class="token number">10.10</span>.13.110/24 dev eth0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>移除VIP</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">ip</span> address delete <span class="token number">10.10</span>.13.110/24 dev eth0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="启动replication-manager" tabindex="-1"><a class="header-anchor" href="#启动replication-manager"><span>启动Replication Manager</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 启动</span>
systemctl start replication-manager

<span class="token comment"># 开机启动</span>
systemctl <span class="token builtin class-name">enable</span> replication-manager
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="状态管理" tabindex="-1"><a class="header-anchor" href="#状态管理"><span>状态管理</span></a></h3><ul><li>通过web查看replication manager状态</li></ul><p>打开浏览器输入 http://10.10.13.103:10001 （默认用户名密码为 admin/repman）</p><h2 id="主从管理" tabindex="-1"><a class="header-anchor" href="#主从管理"><span>主从管理</span></a></h2><h3 id="查看主从状态" tabindex="-1"><a class="header-anchor" href="#查看主从状态"><span>查看主从状态</span></a></h3><ul><li>检查从库状态</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">show</span> slave <span class="token keyword">status</span>\\G
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意事项：</p><p>当 Slave_IO_Running 和 Slave_SQL_Running 都为 Yes 的时候，表示主从同步正常。</p></div><h3 id="主从切换" tabindex="-1"><a class="header-anchor" href="#主从切换"><span>主从切换</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>replication-manager-cli switchover
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="故障转移" tabindex="-1"><a class="header-anchor" href="#故障转移"><span>故障转移</span></a></h3><h4 id="关闭主库" tabindex="-1"><a class="header-anchor" href="#关闭主库"><span>关闭主库</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># mysqladmin -h127.0.0.1 -uroot -p shutdown</span>
systemctl stop mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>手动切换：</li></ul><p>在配置文件<code>/etc/replication-manager/config.toml</code>中设置<code>failover-mode = &quot;manual&quot;</code>，通过如下命令进行故障切换：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>replication-manager-cli failover
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>自动切换：</li></ul><p>在配置文件<code>/etc/replication-manager/config.toml</code>中设置<code>failover-mode = &quot;automatic&quot;</code>，重新监视集群即可。这样主库宕机的情况下，会自动执行故障切换。宕机的旧主如果恢复后，会自动变成新主的一个从库，并且处于维护模式。</p><ul><li><p>在replication manager web查看主从状态</p></li><li><p>检查VIP是否成功漂移到原来的备库</p></li></ul><h4 id="开启原主库" tabindex="-1"><a class="header-anchor" href="#开启原主库"><span>开启原主库</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl start mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>在replication manager web查看原主是否加入集群</li></ul><h2 id="数据同步测试" tabindex="-1"><a class="header-anchor" href="#数据同步测试"><span>数据同步测试</span></a></h2><p>主库写入数据</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">use</span> abelitdb<span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> abelitinfo<span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">&quot;abelit&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> abelitinfo<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从库查看数据是否同步</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">use</span> abelitdb<span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> abelitinfo<span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">&quot;abelit&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> abelitinfo<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,112),t=[l];function d(r,o){return s(),a("div",null,t)}const u=n(i,[["render",d],["__file","mysql-master-slave-with-gtid-replication-manager.html.vue"]]),v=JSON.parse('{"path":"/guide/database/mysql/ha/deployment/mysql-master-slave-with-gtid-replication-manager.html","title":"MySQL主从 + replication manager + VIP","lang":"zh-CN","frontmatter":{"title":"MySQL主从 + replication manager + VIP","description":"主机准备 主机信息 主机设置 主机名称设置 主机hosts设置 所有节点 关闭防火墙 所有节点 selinux设置 所有节点 主机互信设置 在每个节点执行 生成公私钥 拷贝公钥到其他服务器 在中间件节点 安装数据库 安装 主、从 重启数据库 主从节点 获取初始化密码 更改密码 主从数据库配置 主节点数据库配置 配置文件 从节点数据库配置 配置文件 参数...","head":[["meta",{"property":"og:url","content":"https://github.com/abelit/abelit-datapeacock.git/guide/database/mysql/ha/deployment/mysql-master-slave-with-gtid-replication-manager.html"}],["meta",{"property":"og:site_name","content":"数之雀"}],["meta",{"property":"og:title","content":"MySQL主从 + replication manager + VIP"}],["meta",{"property":"og:description","content":"主机准备 主机信息 主机设置 主机名称设置 主机hosts设置 所有节点 关闭防火墙 所有节点 selinux设置 所有节点 主机互信设置 在每个节点执行 生成公私钥 拷贝公钥到其他服务器 在中间件节点 安装数据库 安装 主、从 重启数据库 主从节点 获取初始化密码 更改密码 主从数据库配置 主节点数据库配置 配置文件 从节点数据库配置 配置文件 参数..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-11T14:06:18.000Z"}],["meta",{"property":"article:author","content":"Abelit"}],["meta",{"property":"article:modified_time","content":"2024-05-11T14:06:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL主从 + replication manager + VIP\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-11T14:06:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Abelit\\",\\"url\\":\\"https://github.com/abelit\\"}]}"]]},"headers":[{"level":2,"title":"主机准备","slug":"主机准备","link":"#主机准备","children":[{"level":3,"title":"主机信息","slug":"主机信息","link":"#主机信息","children":[]},{"level":3,"title":"主机设置","slug":"主机设置","link":"#主机设置","children":[]},{"level":3,"title":"主机互信设置","slug":"主机互信设置","link":"#主机互信设置","children":[]}]},{"level":2,"title":"安装数据库","slug":"安装数据库","link":"#安装数据库","children":[]},{"level":2,"title":"主从数据库配置","slug":"主从数据库配置","link":"#主从数据库配置","children":[{"level":3,"title":"主节点数据库配置","slug":"主节点数据库配置","link":"#主节点数据库配置","children":[]},{"level":3,"title":"从节点数据库配置","slug":"从节点数据库配置","link":"#从节点数据库配置","children":[]},{"level":3,"title":"重启数据库","slug":"重启数据库","link":"#重启数据库","children":[]},{"level":3,"title":"传输基础数据","slug":"传输基础数据","link":"#传输基础数据","children":[]},{"level":3,"title":"创建复制用户","slug":"创建复制用户","link":"#创建复制用户","children":[]},{"level":3,"title":"设置从库","slug":"设置从库","link":"#设置从库","children":[]}]},{"level":2,"title":"Replication Manager安装配置","slug":"replication-manager安装配置","link":"#replication-manager安装配置","children":[{"level":3,"title":"配置yum源","slug":"配置yum源","link":"#配置yum源","children":[]},{"level":3,"title":"安装relication-manager","slug":"安装relication-manager","link":"#安装relication-manager","children":[]},{"level":3,"title":"创建监控用户","slug":"创建监控用户","link":"#创建监控用户","children":[]},{"level":3,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":3,"title":"主库设置VIP","slug":"主库设置vip","link":"#主库设置vip","children":[]},{"level":3,"title":"启动Replication Manager","slug":"启动replication-manager","link":"#启动replication-manager","children":[]},{"level":3,"title":"状态管理","slug":"状态管理","link":"#状态管理","children":[]}]},{"level":2,"title":"主从管理","slug":"主从管理","link":"#主从管理","children":[{"level":3,"title":"查看主从状态","slug":"查看主从状态","link":"#查看主从状态","children":[]},{"level":3,"title":"主从切换","slug":"主从切换","link":"#主从切换","children":[]},{"level":3,"title":"故障转移","slug":"故障转移","link":"#故障转移","children":[]}]},{"level":2,"title":"数据同步测试","slug":"数据同步测试","link":"#数据同步测试","children":[]}],"git":{"createdTime":1715436378000,"updatedTime":1715436378000,"contributors":[{"name":"ableit","email":"ychenid@live.com","commits":1}]},"readingTime":{"minutes":8.81,"words":2642},"filePathRelative":"guide/database/mysql/ha/deployment/mysql-master-slave-with-gtid-replication-manager.md","localizedDate":"2024年5月11日","autoDesc":true,"excerpt":"<h2>主机准备</h2>\\n<h3>主机信息</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>编号</th>\\n<th>IP 地址</th>\\n<th>角色</th>\\n<th>操作系统</th>\\n<th>内核版本</th>\\n<th>数据库版本</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>1</td>\\n<td>10.10.13.100</td>\\n<td>主</td>\\n<td>CentOS 7.9</td>\\n<td>3.10.0-1160.el7.x86_64</td>\\n<td>MySQL 8.0</td>\\n</tr>\\n<tr>\\n<td>2</td>\\n<td>10.10.13.101</td>\\n<td>从</td>\\n<td>CentOS 7.9</td>\\n<td>3.10.0-1160.el7.x86_64</td>\\n<td>MySQL 8.0</td>\\n</tr>\\n<tr>\\n<td>3</td>\\n<td>10.10.13.102</td>\\n<td>中间件/replication manager</td>\\n<td>CentOS 7.9</td>\\n<td>3.10.0-1160.el7.x86_64</td>\\n<td>2.3.13</td>\\n</tr>\\n<tr>\\n<td>4</td>\\n<td>10.10.13.110</td>\\n<td>VIP</td>\\n<td></td>\\n<td></td>\\n<td></td>\\n</tr>\\n</tbody>\\n</table>"}');export{u as comp,v as data};
