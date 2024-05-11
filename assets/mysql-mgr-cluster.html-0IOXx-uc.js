import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as e,f as a}from"./app-DR5J2daJ.js";const l="/assets/mysql_mgr_overview_002-Dl5_XytD.png",i={},t=a('<h2 id="mysql-mgr-cluster-8-x-x" tabindex="-1"><a class="header-anchor" href="#mysql-mgr-cluster-8-x-x"><span>MySQL MGR Cluster 8.x.x</span></a></h2><h2 id="主机准备" tabindex="-1"><a class="header-anchor" href="#主机准备"><span>主机准备</span></a></h2><h3 id="主机信息" tabindex="-1"><a class="header-anchor" href="#主机信息"><span>主机信息</span></a></h3><table><thead><tr><th>编号</th><th>IP 地址</th><th>角色</th><th>操作系统</th><th>内核版本</th><th>软件及版本</th></tr></thead><tbody><tr><td>1</td><td>10.10.13.100</td><td>mysql Primary</td><td>CentOS 7.9</td><td>3.10.0-1160.el7.x86_64</td><td>mysql 8.0.34</td></tr><tr><td>2</td><td>10.10.13.101</td><td>mysql Secondary</td><td>CentOS 7.9</td><td>3.10.0-1160.el7.x86_64</td><td>mysql 8.0.34</td></tr><tr><td>3</td><td>10.10.13.102</td><td>mysql Secondary</td><td>CentOS 7.9</td><td>3.10.0-1160.el7.x86_64</td><td>mysql 8.0.34</td></tr></tbody></table><h3 id="拓扑结构" tabindex="-1"><a class="header-anchor" href="#拓扑结构"><span>拓扑结构</span></a></h3><figure><img src="'+l+`" alt="MySQL MGR Cluster" tabindex="0" loading="lazy"><figcaption>MySQL MGR Cluster</figcaption></figure><h3 id="主机设置" tabindex="-1"><a class="header-anchor" href="#主机设置"><span>主机设置</span></a></h3><ul><li>主机名称设置</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 节点1</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Selinux设置</li></ul><blockquote><p>所有节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>setenforce <span class="token number">0</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s/^SELINUX=enforcing/SELINUX=disabled/g&quot;</span> /etc/selinux/config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装配置集群" tabindex="-1"><a class="header-anchor" href="#安装配置集群"><span>安装配置集群</span></a></h2><h3 id="安装和初始化" tabindex="-1"><a class="header-anchor" href="#安装和初始化"><span>安装和初始化</span></a></h3><ul><li>添加yum仓库</li></ul><blockquote><p>所有节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">wget</span> https://repo.mysql.com//mysql80-community-release-el7-9.noarch.rpm
<span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> mysql80-community-release-el7-9.noarch.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>安装MySQL Server</li></ul><blockquote><p>在mysql主/从节点进行此安装</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># wget https://cdn.mysql.com//Downloads/MySQL-8.0/mysql-community-server-8.0.34-1.el7.x86_64.rpm</span>
<span class="token comment"># rpm -ivh mysql-community-server-8.0.34-1.el7.x86_64.rpm</span>
yum <span class="token function">install</span> mysql-community-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>初始化MySQL Server</li></ul><blockquote><p>在mysql主/从节点进行此安装</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># mysqld --initialize</span>

<span class="token comment"># #赋访问权限：</span>
<span class="token comment"># chown mysql:mysql /var/lib/mysql -R</span>

<span class="token comment">#启动mysql服务：</span>
systemctl start mysqld.service

<span class="token comment">#设置mysql开机自启</span>
systemctl <span class="token builtin class-name">enable</span> mysqld.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>获取初始密码</li></ul><blockquote><p>所有节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># cat /var/log/mysqld.log|grep &quot;A temporary password&quot;|awk -F&#39;root@localhost:&#39; &#39;{print $2}&#39;</span>
<span class="token assign-left variable">MYSQL_INITIAL_PASSWORD</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">cat</span> /var/log/mysqld.log<span class="token operator">|</span><span class="token function">grep</span> <span class="token string">&quot;A temporary password&quot;</span><span class="token operator">|</span><span class="token function">awk</span> -F<span class="token string">&#39;root@localhost:&#39;</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token operator">|</span><span class="token function">sed</span> s/<span class="token punctuation">[</span><span class="token punctuation">[</span>:space:<span class="token punctuation">]</span><span class="token punctuation">]</span>//g<span class="token variable">\`</span></span>
<span class="token builtin class-name">echo</span> <span class="token variable">$MYSQL_INITIAL_PASSWORD</span>
mysql <span class="token parameter variable">-uroot</span> -p<span class="token variable">$MYSQL_INITIAL_PASSWORD</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>修改密码及密码策略</li></ul><blockquote><p>所有节点</p></blockquote><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">set</span> <span class="token keyword">global</span> validate_password_policy<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">set</span> <span class="token keyword">global</span> validate_password_length<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>

<span class="token comment">-- 命令来修改密码： </span>
<span class="token keyword">ALTER</span> <span class="token keyword">USER</span> <span class="token string">&#39;root&#39;</span><span class="token variable">@&#39;localhost&#39;</span> IDENTIFIED <span class="token keyword">WITH</span> mysql_native_password <span class="token keyword">BY</span>  <span class="token string">&#39;Hello@2023&#39;</span><span class="token punctuation">;</span>

<span class="token comment">-- 创建远程访问权限：</span>
<span class="token keyword">create</span> <span class="token keyword">user</span> <span class="token string">&#39;root&#39;</span><span class="token variable">@&#39;%&#39;</span> identified <span class="token keyword">with</span> mysql_native_password <span class="token keyword">by</span>  <span class="token string">&#39;Hello@2023&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">GRANT</span> <span class="token keyword">ALL</span> <span class="token keyword">PRIVILEGES</span> <span class="token keyword">ON</span> <span class="token operator">*</span><span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">TO</span> <span class="token string">&#39;root&#39;</span><span class="token variable">@&#39;%&#39;</span> <span class="token keyword">WITH</span> <span class="token keyword">GRANT</span> <span class="token keyword">OPTION</span><span class="token punctuation">;</span>
flush <span class="token keyword">privileges</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置mgr集群" tabindex="-1"><a class="header-anchor" href="#配置mgr集群"><span>配置MGR集群</span></a></h3><blockquote><p>对应节点</p></blockquote><ul><li>节点1配置</li></ul><div class="language-conf line-numbers-mode" data-ext="conf" data-title="conf"><pre class="language-conf"><code>[mysqld]
server_id=100
port=3306
basedir=/var/lib/mysql
datadir=/var/lib/mysql   
socket=/var/lib/mysql/mysql.sock
log-error=/var/lib/mysql/mysqld.log
pid-file=/var/lib/mysql/mysqld.pid

binlog_checksum=NONE
gtid_mode=ON
enforce_gtid_consistency=ON

log_bin=binlog
log_slave_updates=ON
binlog_format=ROW
master_info_repository=TABLE
relay_log_info_repository=TABLE

transaction_write_set_extraction=XXHASH64
default_authentication_plugin=mysql_native_password
loose-group_replication_recovery_get_public_key=on
loose-group_replication_recovery_use_ssl=on
loose-group_replication_group_name=&quot;hiabelit-oooo-pppp-qqqq-rrrrrrrrrrrr&quot;
loose-group_replication_start_on_boot=OFF
loose-group_replication_local_address=&quot;10.10.13.100:33061&quot;
loose-group_replication_group_seeds=&quot;10.10.13.100:33061,10.10.13.101:33061,10.10.13.102:33061&quot;
loose-group_replication_bootstrap_group=OFF

# report_host=10.10.13.100
# report_port=3306
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>节点2配置</li></ul><div class="language-conf line-numbers-mode" data-ext="conf" data-title="conf"><pre class="language-conf"><code>[mysqld]
server_id=101
port=3306
basedir=/var/lib/mysql
datadir=/var/lib/mysql   
socket=/var/lib/mysql/mysql.sock
log-error=/var/lib/mysql/mysqld.log
pid-file=/var/lib/mysql/mysqld.pid

binlog_checksum=NONE
gtid_mode=ON
enforce_gtid_consistency=ON

log_bin=binlog
log_slave_updates=ON
binlog_format=ROW
master_info_repository=TABLE
relay_log_info_repository=TABLE

transaction_write_set_extraction=XXHASH64
default_authentication_plugin=mysql_native_password
loose-group_replication_recovery_get_public_key=on
loose-group_replication_recovery_use_ssl=on
loose-group_replication_group_name=&quot;hiabelit-oooo-pppp-qqqq-rrrrrrrrrrrr&quot;
loose-group_replication_start_on_boot=OFF
loose-group_replication_local_address=&quot;10.10.13.101:33061&quot;
loose-group_replication_group_seeds=&quot;10.10.13.100:33061,10.10.13.101:33061,10.10.13.102:33061&quot;
loose-group_replication_bootstrap_group=OFF

# report_host=10.10.13.101
# report_port=3306
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>节点2配置</li></ul><div class="language-conf line-numbers-mode" data-ext="conf" data-title="conf"><pre class="language-conf"><code>[mysqld]
server_id=102
port=3306
basedir=/var/lib/mysql
datadir=/var/lib/mysql   
socket=/var/lib/mysql/mysql.sock
log-error=/var/lib/mysql/mysqld.log
pid-file=/var/lib/mysql/mysqld.pid

binlog_checksum=NONE
gtid_mode=ON
enforce_gtid_consistency=ON

log_bin=binlog
log_slave_updates=ON
binlog_format=ROW
master_info_repository=TABLE
relay_log_info_repository=TABLE

transaction_write_set_extraction=XXHASH64
default_authentication_plugin=mysql_native_password
loose-group_replication_recovery_get_public_key=on
loose-group_replication_recovery_use_ssl=on
loose-group_replication_group_name=&quot;hiabelit-oooo-pppp-qqqq-rrrrrrrrrrrr&quot;
loose-group_replication_start_on_boot=OFF
loose-group_replication_local_address=&quot;10.10.13.102:33061&quot;
loose-group_replication_group_seeds=&quot;10.10.13.100:33061,10.10.13.101:33061,10.10.13.102:33061&quot;
loose-group_replication_bootstrap_group=OFF

# report_host=10.10.13.102
# report_port=3306
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>参数说明 #定义用户事务期间哈希写入提取的算法，组复制模式下必须设置为XXHASH64 transaction_write_set_extraction=XXHASH64</p><p>#确定组复制恢复时是否应该应用SSL，通常设置为&quot;开&quot;，但默认设置为&quot;关&quot; loose-group_replication_recovery_use_ssl=ON</p><p>#该服务器的实例所在复制组的名称，必须是有效UUID，所有节点必须相同 loose-group_replication_group_name=&quot;hiabelit-oooo-pppp-qqqq-rrrrrrrrrrrr&quot;</p><p>#确定服务器是否应该在服务器启动期间启动组复制 loose-group_replication_start_on_boot=OFF</p><p>#为复制组中其它成员提供网络地址，此处端口号避免使用3306，否则会冲突 loose-group_replication_local_address=&quot;10.10.13.102:33061&quot;</p><p>#用于建立新成员到组的连接组成员列表，该列表指定为由分隔号间隔的组成员网络地址列表 loose-group_replication_group_seeds=&quot;10.10.13.100:33061,10.10.13.101:33061,10.10.13.102:33061&quot;</p><p>#配置此服务器为引导组，该选项必须仅在一台服务器上设置，且仅当第一次启动组或重新启动整个组时，成功引导组启动后，将此选项设置为关闭 loose-group_replication_bootstrap_group=OFF</p><p>#使用mysql_native_password密码策略，防止navicat连不上mysql8 default_authentication_plugin=mysql_native_password</p><p>#设置mysql插件所在目录，因为MGR基于插件，所以必须设置插件路径 plugin_dir=/usr/lib64/mysql/plugin</p><p>#此参数决定primary节点到secondary节点的请求是否基于RSA密匙对的密码交换所需的公匙 loose-group_replication_recovery_get_public_key=on</p></div><ul><li>重启mysql服务：</li></ul><blockquote><p>所有节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl restart mysqld.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="安装mgr插件" tabindex="-1"><a class="header-anchor" href="#安装mgr插件"><span>安装MGR插件</span></a></h3><blockquote><p>所有节点</p></blockquote><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>INSTALL PLUGIN group_replication <span class="token keyword">SONAME</span> <span class="token string">&#39;group_replication.so&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="设置复制账号" tabindex="-1"><a class="header-anchor" href="#设置复制账号"><span>设置复制账号</span></a></h3><blockquote><p>所有节点</p></blockquote><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SET</span> SQL_LOG_BIN<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">USER</span> repl<span class="token variable">@&#39;%&#39;</span> IDENTIFIED <span class="token keyword">BY</span> <span class="token string">&#39;repl&#39;</span><span class="token punctuation">;</span>
<span class="token comment">---更改加密方式，默认的caching_sha2_password会影响同步</span>
<span class="token keyword">ALTER</span> <span class="token keyword">USER</span> <span class="token string">&#39;repl&#39;</span><span class="token variable">@&#39;%&#39;</span> IDENTIFIED <span class="token keyword">WITH</span> mysql_native_password <span class="token keyword">BY</span> <span class="token string">&#39;repl&#39;</span><span class="token punctuation">;</span> 
<span class="token keyword">GRANT</span> <span class="token keyword">REPLICATION</span> SLAVE <span class="token keyword">ON</span> <span class="token operator">*</span><span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">TO</span> repl<span class="token variable">@&#39;%&#39;</span><span class="token punctuation">;</span>
FLUSH <span class="token keyword">PRIVILEGES</span><span class="token punctuation">;</span>
<span class="token keyword">SET</span> SQL_LOG_BIN<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
CHANGE MASTER <span class="token keyword">TO</span> MASTER_USER<span class="token operator">=</span><span class="token string">&#39;repl&#39;</span><span class="token punctuation">,</span> MASTER_PASSWORD<span class="token operator">=</span><span class="token string">&#39;repl&#39;</span> <span class="token keyword">FOR</span> CHANNEL <span class="token string">&#39;group_replication_recovery&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mgr集群-单主模式" tabindex="-1"><a class="header-anchor" href="#mgr集群-单主模式"><span>MGR集群-单主模式</span></a></h3><blockquote><p>对应节点</p></blockquote><ul><li>在节点1上启动MGR</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SET</span> <span class="token keyword">GLOBAL</span> group_replication_bootstrap_group<span class="token operator">=</span><span class="token keyword">ON</span><span class="token punctuation">;</span>
<span class="token keyword">START</span> GROUP_REPLICATION<span class="token punctuation">;</span>
<span class="token keyword">SET</span> <span class="token keyword">GLOBAL</span> group_replication_bootstrap_group<span class="token operator">=</span><span class="token keyword">OFF</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>查看MGR组信息</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> performance_schema<span class="token punctuation">.</span>replication_group_members<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>其他节点加入MGR</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">START</span> GROUP_REPLICATION<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>查看MGR组信息</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> performance_schema<span class="token punctuation">.</span>replication_group_members<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="mgr集群-单主模式切换到多主模式" tabindex="-1"><a class="header-anchor" href="#mgr集群-单主模式切换到多主模式"><span>MGR集群-单主模式切换到多主模式</span></a></h3><p>MGR切换模式需要重新启动组复制，因些需要在所有节点上先关闭组复制，设置 group_replication_single_primary_mode=OFF 等参数，再启动组复制。</p><ul><li>停止组复制</li></ul><blockquote><p>所有节点</p></blockquote><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>stop group_replication<span class="token punctuation">;</span>
<span class="token keyword">set</span> <span class="token keyword">global</span> group_replication_single_primary_mode<span class="token operator">=</span><span class="token keyword">OFF</span><span class="token punctuation">;</span>
<span class="token keyword">set</span> <span class="token keyword">global</span> group_replication_enforce_update_everywhere_checks<span class="token operator">=</span><span class="token keyword">ON</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>任选一个先执行如下命令启动MGR</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SET</span> <span class="token keyword">GLOBAL</span> group_replication_bootstrap_group<span class="token operator">=</span><span class="token keyword">ON</span><span class="token punctuation">;</span>
<span class="token keyword">START</span> GROUP_REPLICATION<span class="token punctuation">;</span>
<span class="token keyword">SET</span> <span class="token keyword">GLOBAL</span> group_replication_bootstrap_group<span class="token operator">=</span><span class="token keyword">OFF</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>其他节点</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">START</span> GROUP_REPLICATION<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>查看MGR组信息</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> performance_schema<span class="token punctuation">.</span>replication_group_members<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="mgr集群-多主模式切换到单主模式" tabindex="-1"><a class="header-anchor" href="#mgr集群-多主模式切换到单主模式"><span>MGR集群-多主模式切换到单主模式</span></a></h3><ul><li>停止组复制</li></ul><blockquote><p>所有节点</p></blockquote><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>stop group_replication<span class="token punctuation">;</span>
<span class="token keyword">set</span> <span class="token keyword">global</span> group_replication_enforce_update_everywhere_checks<span class="token operator">=</span><span class="token keyword">OFF</span><span class="token punctuation">;</span>
<span class="token keyword">set</span> <span class="token keyword">global</span> group_replication_single_primary_mode<span class="token operator">=</span><span class="token keyword">ON</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在节点1（主节点）</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SET</span> <span class="token keyword">GLOBAL</span> group_replication_bootstrap_group<span class="token operator">=</span><span class="token keyword">ON</span><span class="token punctuation">;</span>
<span class="token keyword">START</span> GROUP_REPLICATION<span class="token punctuation">;</span>
<span class="token keyword">SET</span> <span class="token keyword">GLOBAL</span> group_replication_bootstrap_group<span class="token operator">=</span><span class="token keyword">OFF</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>其他节点</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">START</span> GROUP_REPLICATION<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>查看MGR组信息</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> performance_schema<span class="token punctuation">.</span>replication_group_members<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>mgr模式下所有表都需要设置主键，不然会报错</p></div><h2 id="常见错误" tabindex="-1"><a class="header-anchor" href="#常见错误"><span>常见错误</span></a></h2><p>错误1： [ERROR] [MY-011522] [Repl] Plugin group_replication reported: &#39;The member contains transactions not present in the group. The member will now exit the group.&#39;</p><p>处理1：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- 清空Executed_Gtid_Set</span>
reset master<span class="token punctuation">;</span> 
CHANGE MASTER <span class="token keyword">TO</span> MASTER_USER<span class="token operator">=</span><span class="token string">&#39;repl&#39;</span><span class="token punctuation">,</span> MASTER_PASSWORD<span class="token operator">=</span><span class="token string">&#39;repl&#39;</span> <span class="token keyword">FOR</span> CHANNEL <span class="token string">&#39;group_replication_recovery&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">START</span> GROUP_REPLICATION<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,89),o=[t];function r(d,p){return n(),e("div",null,o)}const v=s(i,[["render",r],["__file","mysql-mgr-cluster.html.vue"]]),m=JSON.parse('{"path":"/guide/database/mysql/ha/deployment/mysql-mgr-cluster.html","title":"MySQL MGR Cluster","lang":"zh-CN","frontmatter":{"title":"MySQL MGR Cluster","description":"MySQL MGR Cluster 8.x.x 主机准备 主机信息 拓扑结构 MySQL MGR ClusterMySQL MGR Cluster 主机设置 主机名称设置 主机hosts设置 所有节点 关闭防火墙 所有节点 Selinux设置 所有节点 安装配置集群 安装和初始化 添加yum仓库 所有节点 安装MySQL Server 在mysql主/...","head":[["meta",{"property":"og:url","content":"https://github.com/abelit/abelit-datapeacock.git/guide/database/mysql/ha/deployment/mysql-mgr-cluster.html"}],["meta",{"property":"og:site_name","content":"数之雀"}],["meta",{"property":"og:title","content":"MySQL MGR Cluster"}],["meta",{"property":"og:description","content":"MySQL MGR Cluster 8.x.x 主机准备 主机信息 拓扑结构 MySQL MGR ClusterMySQL MGR Cluster 主机设置 主机名称设置 主机hosts设置 所有节点 关闭防火墙 所有节点 Selinux设置 所有节点 安装配置集群 安装和初始化 添加yum仓库 所有节点 安装MySQL Server 在mysql主/..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-11T14:06:18.000Z"}],["meta",{"property":"article:author","content":"Abelit"}],["meta",{"property":"article:modified_time","content":"2024-05-11T14:06:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL MGR Cluster\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-11T14:06:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Abelit\\",\\"url\\":\\"https://github.com/abelit\\"}]}"]]},"headers":[{"level":2,"title":"MySQL MGR Cluster 8.x.x","slug":"mysql-mgr-cluster-8-x-x","link":"#mysql-mgr-cluster-8-x-x","children":[]},{"level":2,"title":"主机准备","slug":"主机准备","link":"#主机准备","children":[{"level":3,"title":"主机信息","slug":"主机信息","link":"#主机信息","children":[]},{"level":3,"title":"拓扑结构","slug":"拓扑结构","link":"#拓扑结构","children":[]},{"level":3,"title":"主机设置","slug":"主机设置","link":"#主机设置","children":[]}]},{"level":2,"title":"安装配置集群","slug":"安装配置集群","link":"#安装配置集群","children":[{"level":3,"title":"安装和初始化","slug":"安装和初始化","link":"#安装和初始化","children":[]},{"level":3,"title":"配置MGR集群","slug":"配置mgr集群","link":"#配置mgr集群","children":[]},{"level":3,"title":"安装MGR插件","slug":"安装mgr插件","link":"#安装mgr插件","children":[]},{"level":3,"title":"设置复制账号","slug":"设置复制账号","link":"#设置复制账号","children":[]},{"level":3,"title":"MGR集群-单主模式","slug":"mgr集群-单主模式","link":"#mgr集群-单主模式","children":[]},{"level":3,"title":"MGR集群-单主模式切换到多主模式","slug":"mgr集群-单主模式切换到多主模式","link":"#mgr集群-单主模式切换到多主模式","children":[]},{"level":3,"title":"MGR集群-多主模式切换到单主模式","slug":"mgr集群-多主模式切换到单主模式","link":"#mgr集群-多主模式切换到单主模式","children":[]}]},{"level":2,"title":"常见错误","slug":"常见错误","link":"#常见错误","children":[]}],"git":{"createdTime":1715436378000,"updatedTime":1715436378000,"contributors":[{"name":"ableit","email":"ychenid@live.com","commits":1}]},"readingTime":{"minutes":4.71,"words":1413},"filePathRelative":"guide/database/mysql/ha/deployment/mysql-mgr-cluster.md","localizedDate":"2024年5月11日","autoDesc":true,"excerpt":"<h2>MySQL MGR Cluster 8.x.x</h2>\\n<h2>主机准备</h2>\\n<h3>主机信息</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>编号</th>\\n<th>IP 地址</th>\\n<th>角色</th>\\n<th>操作系统</th>\\n<th>内核版本</th>\\n<th>软件及版本</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>1</td>\\n<td>10.10.13.100</td>\\n<td>mysql Primary</td>\\n<td>CentOS 7.9</td>\\n<td>3.10.0-1160.el7.x86_64</td>\\n<td>mysql 8.0.34</td>\\n</tr>\\n<tr>\\n<td>2</td>\\n<td>10.10.13.101</td>\\n<td>mysql Secondary</td>\\n<td>CentOS 7.9</td>\\n<td>3.10.0-1160.el7.x86_64</td>\\n<td>mysql 8.0.34</td>\\n</tr>\\n<tr>\\n<td>3</td>\\n<td>10.10.13.102</td>\\n<td>mysql Secondary</td>\\n<td>CentOS 7.9</td>\\n<td>3.10.0-1160.el7.x86_64</td>\\n<td>mysql 8.0.34</td>\\n</tr>\\n</tbody>\\n</table>"}');export{v as comp,m as data};
