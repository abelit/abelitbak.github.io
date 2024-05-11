import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r,o as d,c as p,b as l,w as n,a as s,f as b,d as a}from"./app-DR5J2daJ.js";const u={},v=s("h2",{id:"基于centos环境",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#基于centos环境"},[s("span",null,"基于CentOS环境")])],-1),m=s("h3",{id:"安装zabbix依赖",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#安装zabbix依赖"},[s("span",null,"安装Zabbix依赖")])],-1),k=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"rpm"),a(),s("span",{class:"token parameter variable"},"-Uvh"),a(` https://repo.zabbix.com/zabbix/6.4/rhel/7/x86_64/zabbix-release-6.4-1.el7.noarch.rpm
yum clean all
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),h=s("p",null,"支持版本CentOS 8.x Alma Linux 8 Rocky Linux 8",-1),x=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"rpm"),a(),s("span",{class:"token parameter variable"},"-Uvh"),a(` https://repo.zabbix.com/zabbix/6.4/rhel/8/x86_64/zabbix-release-6.4-1.el8.noarch.rpm
dnf clean all
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),g=s("p",null,"切换PHP版本",-1),y=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[s("pre",{class:"language-bash"},[s("code",null,`dnf module switch-to php:7.4
`)]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),_=s("p",null,[a("支持版本CentOS 9.x Alma Linux 9 Rocky Linux 9 编辑"),s("code",null,"/etc/yum.repos.d/epel.repo"),a(",添加如下信息（禁用epel提供的zabbix源）：")],-1),z=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token punctuation"},"["),a("epel"),s("span",{class:"token punctuation"},"]"),a(`
`),s("span",{class:"token punctuation"},".."),a(`.
`),s("span",{class:"token assign-left variable"},"excludepkgs"),s("span",{class:"token operator"},"="),a(`zabbix*
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),S=s("p",null,"安装Zabbix官方依赖：",-1),O=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"rpm"),a(),s("span",{class:"token parameter variable"},"-Uvh"),a(` https://repo.zabbix.com/zabbix/6.4/rhel/9/x86_64/zabbix-release-6.4-1.el9.noarch.rpm
dnf clean all
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),f=s("h3",{id:"安装zabbix-server-frontend-agent",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#安装zabbix-server-frontend-agent"},[s("span",null,"安装Zabbix Server,Frontend,Agent")])],-1),A=s("h4",{id:"centos-6-x-7-x",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#centos-6-x-7-x"},[s("span",null,"CentOS 6.x-7.x")])],-1),C=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[a("yum "),s("span",{class:"token function"},"install"),a(` zabbix-server-mysql zabbix-web-mysql zabbix-nginx-conf zabbix-sql-scripts zabbix-selinux-policy zabbix-agent
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),T=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[a("yum "),s("span",{class:"token function"},"install"),a(` zabbix-server-pgsql zabbix-web-pgsql zabbix-nginx-conf zabbix-sql-scripts zabbix-selinux-policy zabbix-agent
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),w=s("h4",{id:"centos-8-x",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#centos-8-x"},[s("span",null,"CentOS 8.x+")])],-1),L=s("p",null,"主要版本：",-1),E=s("ul",null,[s("li",null,"CentOS 8 Stream"),s("li",null,"CentOS 9 Stream"),s("li",null,"Alma Linux 8"),s("li",null,"Alma Linux 9"),s("li",null,"Rocky Linux 8"),s("li",null,"Rocky Linux 9")],-1),N=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[a("dnf "),s("span",{class:"token function"},"install"),a(` zabbix-server-mysql zabbix-web-mysql zabbix-nginx-conf zabbix-sql-scripts zabbix-selinux-policy zabbix-agent
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),D=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[a("dnf "),s("span",{class:"token function"},"install"),a(` zabbix-server-pgsql zabbix-web-pgsql zabbix-nginx-conf zabbix-sql-scripts zabbix-selinux-policy zabbix-agent
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),R=b(`<h3 id="创建初始数据库" tabindex="-1"><a class="header-anchor" href="#创建初始数据库"><span>创建初始数据库</span></a></h3><h4 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql"><span>MySQL</span></a></h4><ul><li>创建数据库</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">database</span> zabbix <span class="token keyword">character</span> <span class="token keyword">set</span> utf8mb4 <span class="token keyword">collate</span> utf8mb4_bin<span class="token punctuation">;</span>
<span class="token keyword">create</span> <span class="token keyword">user</span> zabbix<span class="token variable">@localhost</span> identified <span class="token keyword">by</span> <span class="token string">&#39;Password@123&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">grant</span> <span class="token keyword">all</span> <span class="token keyword">privileges</span> <span class="token keyword">on</span> zabbix<span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">to</span> zabbix<span class="token variable">@localhost</span><span class="token punctuation">;</span>
<span class="token keyword">set</span> <span class="token keyword">global</span> log_bin_trust_function_creators <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
quit<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>导入数据结构</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>zcat /usr/share/zabbix-sql-scripts/mysql/server.sql.gz <span class="token operator">|</span> mysql --default-character-set<span class="token operator">=</span>utf8mb4 <span class="token parameter variable">-uzabbix</span> <span class="token parameter variable">-p</span> zabbix
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>还原数据设置</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">set</span> <span class="token keyword">global</span> log_bin_trust_function_creators <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="postgresql" tabindex="-1"><a class="header-anchor" href="#postgresql"><span>PostgreSQL</span></a></h4><ul><li>创建数据库</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token parameter variable">-u</span> postgres createuser <span class="token parameter variable">--pwprompt</span> zabbix
<span class="token function">sudo</span> <span class="token parameter variable">-u</span> postgres createdb <span class="token parameter variable">-O</span> zabbix zabbix
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>导入数据结构</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>zcat /usr/share/zabbix-sql-scripts/postgresql/server.sql.gz <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token parameter variable">-u</span> zabbix psql zabbix
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="配置zabbix-server" tabindex="-1"><a class="header-anchor" href="#配置zabbix-server"><span>配置Zabbix Server</span></a></h3><h4 id="配置zabbix-server连接数据库信息" tabindex="-1"><a class="header-anchor" href="#配置zabbix-server连接数据库信息"><span>配置Zabbix Server连接数据库信息</span></a></h4><p>编辑<code>/etc/zabbix/zabbix_server.conf</code>,修改如下信息：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token assign-left variable">DBPassword</span><span class="token operator">=</span>Password@123
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="配置-zabbix-frontend-php信息" tabindex="-1"><a class="header-anchor" href="#配置-zabbix-frontend-php信息"><span>配置 Zabbix Frontend PHP信息</span></a></h4><p>编辑<code>/etc/nginx/conf.d/zabbix.conf</code>，修改如下信息：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>listen <span class="token number">8080</span><span class="token punctuation">;</span>
server_name example.com<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启动zabbix-server" tabindex="-1"><a class="header-anchor" href="#启动zabbix-server"><span>启动Zabbix Server</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl restart zabbix-server zabbix-agent nginx php-fpm
systemctl <span class="token builtin class-name">enable</span> zabbix-server zabbix-agent nginx php-fpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="zabbix-oracle-by-odbc配置" tabindex="-1"><a class="header-anchor" href="#zabbix-oracle-by-odbc配置"><span>Zabbix Oracle by ODBC配置</span></a></h2><h3 id="zabbix-oracle-by-odbc-server端配置" tabindex="-1"><a class="header-anchor" href="#zabbix-oracle-by-odbc-server端配置"><span>Zabbix Oracle by ODBC Server端配置</span></a></h3><ul><li>下载Oracle驱动</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">wget</span> https://download.oracle.com/otn_software/linux/instantclient/216000/instantclient-odbc-linux.x64-21.6.0.0.0dbru.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>如果是zabbix server，则在文件 <code>/etc/sysconfig/zabbix-server</code>中添加以下内容, 如果是zabbix，在文件 <code>/etc/sysconfig/zabbix-proxy</code>中添加以下内容。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/sysconfig/zabbix-server <span class="token operator">&lt;&lt;-</span><span class="token string">EOF
ORACLE_HOME=/opt/instantclient_21_6
PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/opt/instantclient_21_6
LD_LIBRARY_PATH=/opt/instantclient_21_6:/usr/lib64
TNS_ADMIN=/opt/instantclient_21_6/network/admin

export ORACLE_HOME
export PATH
export LD_LIBRARY_PATH
export TNS_ADMIN
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>安装ODBC</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> unixODBC-devel unixODBC
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>ODBC驱动配置</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># [root@node01 ~]# cat /etc/odbcinst.ini </span>
<span class="token punctuation">[</span>Oracle <span class="token number">21</span> ODBC driver<span class="token punctuation">]</span>
Description     <span class="token operator">=</span> Oracle ODBC driver <span class="token keyword">for</span> Oracle <span class="token number">21</span>
Driver          <span class="token operator">=</span> /opt/instantclient_21_6/libsqora.so.21.1
Setup           <span class="token operator">=</span>
FileUsage       <span class="token operator">=</span>
CPTimeout       <span class="token operator">=</span>
CPReuse         <span class="token operator">=</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>ODBC连接信息配置</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># [root@node01 ~]# cat /etc/odbc.ini </span>
<span class="token punctuation">[</span>ysls-ystwodg<span class="token punctuation">]</span>
AggregateSQLType <span class="token operator">=</span> FLOAT
Application Attributes <span class="token operator">=</span> T
Attributes <span class="token operator">=</span> W
BatchAutocommitMode <span class="token operator">=</span> IfAllSuccessful
BindAsFLOAT <span class="token operator">=</span> F
CacheBufferSize <span class="token operator">=</span> <span class="token number">20</span>
CloseCursor <span class="token operator">=</span> F
DisableDPM <span class="token operator">=</span> F
DisableMTS <span class="token operator">=</span> T
DisableRULEHint <span class="token operator">=</span> T
Driver <span class="token operator">=</span> Oracle <span class="token number">21</span> ODBC driver
DSN <span class="token operator">=</span> ysls-ystwodg
EXECSchemaOpt <span class="token operator">=</span>
EXECSyntax <span class="token operator">=</span> T
Failover <span class="token operator">=</span> T
FailoverDelay <span class="token operator">=</span> <span class="token number">10</span>
FailoverRetryCount <span class="token operator">=</span> <span class="token number">10</span>
FetchBufferSize <span class="token operator">=</span> <span class="token number">64000</span>
ForceWCHAR <span class="token operator">=</span> F
LobPrefetchSize <span class="token operator">=</span> <span class="token number">8192</span>
Lobs <span class="token operator">=</span> T
Longs <span class="token operator">=</span> T
MaxLargeData <span class="token operator">=</span> <span class="token number">0</span>
MaxTokenSize <span class="token operator">=</span> <span class="token number">8192</span>
MetadataIdDefault <span class="token operator">=</span> F
QueryTimeout <span class="token operator">=</span> T
ResultSets <span class="token operator">=</span> T
ServerName <span class="token operator">=</span> //47.112.111.72:1521/ystwodg
SQLGetData extensions <span class="token operator">=</span> F
SQLTranslateErrors <span class="token operator">=</span> F
StatementCache <span class="token operator">=</span> F
Translation DLL <span class="token operator">=</span>
Translation Option <span class="token operator">=</span> <span class="token number">0</span>
UseOCIDescribeAny <span class="token operator">=</span> F
UserID <span class="token operator">=</span> yszabbix
Password <span class="token operator">=</span> YsZabbix2022_ZBX
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>测试</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@node01 externalscripts<span class="token punctuation">]</span><span class="token comment"># isql ystwodg -v</span>
+---------------------------------------+
<span class="token operator">|</span> Connected<span class="token operator">!</span>                            <span class="token operator">|</span>
<span class="token operator">|</span>                                       <span class="token operator">|</span>
<span class="token operator">|</span> sql-statement                         <span class="token operator">|</span>
<span class="token operator">|</span> <span class="token builtin class-name">help</span> <span class="token punctuation">[</span>tablename<span class="token punctuation">]</span>                      <span class="token operator">|</span>
<span class="token operator">|</span> quit                                  <span class="token operator">|</span>
<span class="token operator">|</span>                                       <span class="token operator">|</span>
+---------------------------------------+
SQL<span class="token operator">&gt;</span> 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>修改时区</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">ln</span> <span class="token parameter variable">-sf</span> /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>重启服务</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl restart zabbix-agent.service zabbix-server.service 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>检查环境变量是否生效, 命令: <code>strings -a /proc/&lt;Zabbix Main PID&gt;/environ </code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@node01 ~<span class="token punctuation">]</span><span class="token comment"># ps -ef |grep zabbix_server</span>
zabbix     <span class="token number">11047</span>       <span class="token number">1</span>  <span class="token number">0</span> 09:01 ?        00:00:01 /usr/sbin/zabbix_server <span class="token parameter variable">-c</span> /etc/zabbix/zabbix_server.conf

<span class="token punctuation">[</span>root@node01 ~<span class="token punctuation">]</span><span class="token comment"># strings -a /proc/11047/environ </span>
<span class="token assign-left variable"><span class="token environment constant">LANG</span></span><span class="token operator">=</span>en_US.UTF-8
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/opt/instantclient_21_6
<span class="token assign-left variable">INVOCATION_ID</span><span class="token operator">=</span>253e50af5bc349a090d7b26413a62d88
<span class="token assign-left variable">JOURNAL_STREAM</span><span class="token operator">=</span><span class="token number">9</span>:170202
<span class="token assign-left variable">CONFFILE</span><span class="token operator">=</span>/etc/zabbix/zabbix_server.conf
<span class="token assign-left variable">ORACLE_HOME</span><span class="token operator">=</span>/opt/instantclient_21_6
<span class="token assign-left variable">LD_LIBRARY_PATH</span><span class="token operator">=</span>/opt/instantclient_21_6:/usr/lib64
<span class="token assign-left variable">TNS_ADMIN</span><span class="token operator">=</span>/opt/instantclient_21_6/network/admin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注释：如果成功显示ORACLE_HOME，LD_LIBRARY_PATH，TNS_ADMIN，说明配置生效。</p></blockquote><h3 id="zabbix-oracle-by-odbc-client端配置" tabindex="-1"><a class="header-anchor" href="#zabbix-oracle-by-odbc-client端配置"><span>Zabbix Oracle by ODBC Client端配置</span></a></h3><ul><li>在数据库中创建用户并授权访问相应视图</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">USER</span> yszabbix IDENTIFIED <span class="token keyword">BY</span> YsZabbix2022_ZBX<span class="token punctuation">;</span>
<span class="token keyword">GRANT</span> <span class="token keyword">SELECT</span> <span class="token keyword">ANY</span> <span class="token keyword">TABLE</span> <span class="token keyword">TO</span> yszabbix<span class="token punctuation">;</span>
<span class="token keyword">GRANT</span> <span class="token keyword">CREATE</span> <span class="token keyword">SESSION</span> <span class="token keyword">TO</span> yszabbix<span class="token punctuation">;</span>
<span class="token keyword">GRANT</span> <span class="token keyword">SELECT</span> <span class="token keyword">ANY</span> DICTIONARY <span class="token keyword">TO</span> yszabbix<span class="token punctuation">;</span>
<span class="token keyword">GRANT</span> UNLIMITED <span class="token keyword">TABLESPACE</span> <span class="token keyword">TO</span> yszabbix<span class="token punctuation">;</span>
<span class="token keyword">GRANT</span> <span class="token keyword">SELECT</span> <span class="token keyword">ON</span> V_$<span class="token keyword">SESSION</span> <span class="token keyword">TO</span> yszabbix<span class="token punctuation">;</span>
<span class="token keyword">GRANT</span> <span class="token keyword">SELECT</span> <span class="token keyword">ON</span> V_$SYSTEM_EVENT <span class="token keyword">TO</span> yszabbix<span class="token punctuation">;</span>
<span class="token keyword">GRANT</span> <span class="token keyword">SELECT</span> <span class="token keyword">ON</span> V_$EVENT_NAME <span class="token keyword">TO</span> yszabbix<span class="token punctuation">;</span>
<span class="token keyword">GRANT</span> <span class="token keyword">SELECT</span> <span class="token keyword">ON</span> V_$RECOVERY_FILE_DEST <span class="token keyword">TO</span> yszabbix<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>模板中使用参数</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Oracle: Service&#39;s TCP port state

net.tcp.service[tcp,{HOST.CONN},{$ORACLE.PORT}]

net.tcp.service[tcp,,{$ORACLE.PORT}]



Tablespace discovery

Oracle TBS &#39;H1_HIS_DATA&#39;: Tablespace allocated, percent

oracle.tbs_used_pct[&quot;H1_HIS_DATA&quot;]

Allocated bytes/Max bytes*100


select * from v$event_name;

select * from v$eventmetric;

SELECT
    t2.name,
    to_char(t1.begin_time,&#39;yyyy-mm-dd hh24:mi:ss&#39;),
    to_char(t1.end_time,&#39;yyyy-mm-dd hh24:mi:ss&#39;),
    t1.num_sess_waiting,
    t1.time_waited,
    wait_count,
     t1.time_waited/t1.wait_count
FROM
         v$eventmetric t1
    JOIN v$event_name t2 ON t1.event_id = t2.event_id
    where t1.wait_count&gt;0
    order by  t1.time_waited desc;



{min(/Oracle by ODBC/oracle.tbs_used_max_pct[&quot;{#TABLESPACE}&quot;],5m)&gt;{$ORACLE.TBS.USED.PCT.MAX.HIGH}}&amp;{min(/Oracle by ODBC/oracle.tbs_free_bytes[&quot;{#TABLESPACE}&quot;],5m)}&lt;{$ORACLE.TBS.FREE.MAX.HIGH}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,48);function q(B,Z){const o=r("Tabs"),t=r("CodeTabs");return d(),p("div",null,[v,m,l(o,{id:"6",data:[{id:"CentOS 7.x"},{id:"CentOS 8.x"},{id:"CentOS 9.x"}],active:0},{title0:n(({value:e,isActive:i})=>[a("CentOS 7.x")]),title1:n(({value:e,isActive:i})=>[a("CentOS 8.x")]),title2:n(({value:e,isActive:i})=>[a("CentOS 9.x")]),tab0:n(({value:e,isActive:i})=>[k]),tab1:n(({value:e,isActive:i})=>[h,x,g,y]),tab2:n(({value:e,isActive:i})=>[_,z,S,O]),_:1}),f,A,l(t,{id:"37",data:[{id:"MySQL+Nginx"},{id:"PG+Nginx"}],active:0},{title0:n(({value:e,isActive:i})=>[a("MySQL+Nginx")]),title1:n(({value:e,isActive:i})=>[a("PG+Nginx")]),tab0:n(({value:e,isActive:i})=>[C]),tab1:n(({value:e,isActive:i})=>[T]),_:1}),w,L,E,l(t,{id:"83",data:[{id:"MySQL+Nginx"},{id:"PG+Nginx"}],active:0},{title0:n(({value:e,isActive:i})=>[a("MySQL+Nginx")]),title1:n(({value:e,isActive:i})=>[a("PG+Nginx")]),tab0:n(({value:e,isActive:i})=>[N]),tab1:n(({value:e,isActive:i})=>[D]),_:1}),R])}const I=c(u,[["render",q],["__file","install-zabbix-server.html.vue"]]),M=JSON.parse('{"path":"/guide/devops/zabbix/installation/6.4/install-zabbix-server.html","title":"安装Zabbix Server","lang":"zh-CN","frontmatter":{"title":"安装Zabbix Server","description":"基于CentOS环境 安装Zabbix依赖 安装Zabbix Server,Frontend,Agent CentOS 6.x-7.x CentOS 8.x+ 主要版本： CentOS 8 Stream CentOS 9 Stream Alma Linux 8 Alma Linux 9 Rocky Linux 8 Rocky Linux 9 创建初始数...","head":[["meta",{"property":"og:url","content":"https://github.com/abelit/abelit-datapeacock.git/guide/devops/zabbix/installation/6.4/install-zabbix-server.html"}],["meta",{"property":"og:site_name","content":"数之雀"}],["meta",{"property":"og:title","content":"安装Zabbix Server"}],["meta",{"property":"og:description","content":"基于CentOS环境 安装Zabbix依赖 安装Zabbix Server,Frontend,Agent CentOS 6.x-7.x CentOS 8.x+ 主要版本： CentOS 8 Stream CentOS 9 Stream Alma Linux 8 Alma Linux 9 Rocky Linux 8 Rocky Linux 9 创建初始数..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-11T14:06:18.000Z"}],["meta",{"property":"article:author","content":"Abelit"}],["meta",{"property":"article:modified_time","content":"2024-05-11T14:06:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"安装Zabbix Server\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-11T14:06:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Abelit\\",\\"url\\":\\"https://github.com/abelit\\"}]}"]]},"headers":[{"level":2,"title":"基于CentOS环境","slug":"基于centos环境","link":"#基于centos环境","children":[{"level":3,"title":"安装Zabbix依赖","slug":"安装zabbix依赖","link":"#安装zabbix依赖","children":[]},{"level":3,"title":"安装Zabbix Server,Frontend,Agent","slug":"安装zabbix-server-frontend-agent","link":"#安装zabbix-server-frontend-agent","children":[]},{"level":3,"title":"创建初始数据库","slug":"创建初始数据库","link":"#创建初始数据库","children":[]},{"level":3,"title":"配置Zabbix Server","slug":"配置zabbix-server","link":"#配置zabbix-server","children":[]},{"level":3,"title":"启动Zabbix Server","slug":"启动zabbix-server","link":"#启动zabbix-server","children":[]}]},{"level":2,"title":"Zabbix Oracle by ODBC配置","slug":"zabbix-oracle-by-odbc配置","link":"#zabbix-oracle-by-odbc配置","children":[{"level":3,"title":"Zabbix Oracle by ODBC Server端配置","slug":"zabbix-oracle-by-odbc-server端配置","link":"#zabbix-oracle-by-odbc-server端配置","children":[]},{"level":3,"title":"Zabbix Oracle by ODBC Client端配置","slug":"zabbix-oracle-by-odbc-client端配置","link":"#zabbix-oracle-by-odbc-client端配置","children":[]}]}],"git":{"createdTime":1715436378000,"updatedTime":1715436378000,"contributors":[{"name":"ableit","email":"ychenid@live.com","commits":1}]},"readingTime":{"minutes":3.14,"words":942},"filePathRelative":"guide/devops/zabbix/installation/6.4/install-zabbix-server.md","localizedDate":"2024年5月11日","autoDesc":true,"excerpt":"<h2>基于CentOS环境</h2>\\n<h3>安装Zabbix依赖</h3>\\n\\n<h3>安装Zabbix Server,Frontend,Agent</h3>\\n<h4>CentOS 6.x-7.x</h4>\\n\\n<h4>CentOS 8.x+</h4>\\n<p>主要版本：</p>\\n<ul>\\n<li>CentOS 8 Stream</li>\\n<li>CentOS 9 Stream</li>\\n<li>Alma Linux 8</li>\\n<li>Alma Linux 9</li>\\n<li>Rocky Linux 8</li>\\n<li>Rocky Linux 9</li>\\n</ul>\\n\\n<h3>创建初始数据库</h3>"}');export{I as comp,M as data};
