import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r,o as p,c as d,b as i,w as a,f as c,a as s,d as n}from"./app-DR5J2daJ.js";const u={},b=c(`<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2><p>Oracle DataGuard 是 Oracle 自带的数据同步功能，基本原理是将日志文件从原数据库传输到目标数据库，然后在目标数据库上应用这些日志文件，从而使目标数据库与源数据库保持同步，是一种数据库级别的高可用性方案。</p><p>DataGuard 可以提供 Oracle 数据库的冗灾、数据保护、故障恢复等，实现数据库快速切换与灾难性恢复。在生产数据库的保证&quot;事务一致性&quot;时，使用生产库的物理全备份创建备库，备库会通过生产库传输过来的归档日志或重做条目自动维护备用数据库。</p><p>Oracle DataGuard 由一个 primary 数据库(生产数据库)及一个或多个 standby 数据库(最多 30 个)组成。组成 Data Guard 的数据库通过 Oracle Net 连接，并且有可以分布于不同地域。只要各库之间可以相互通信，它们的物理位置并没有什么限制，不受操作系统的限制。</p><h2 id="版本特性" tabindex="-1"><a class="header-anchor" href="#版本特性"><span>版本特性</span></a></h2><h3 id="_11-2-版本特性" tabindex="-1"><a class="header-anchor" href="#_11-2-版本特性"><span>11.2 版本特性</span></a></h3><ul><li>重做应用 <ul><li>主数据库中损坏的数据块可以自动替换为实时查询模式下运行的物理备用数据库中该块的未损坏副本。物理备用数据库中损坏的块也可以自动替换为主数据库中块的未损坏副本。</li></ul></li><li>Redo Apply 和 SQL Apply <ul><li>FAL_CLIENT 不再需要数据库初始化参数</li><li>重做传输压缩不再局限于仅在解决重做间隙时才压缩重做数据。当为目标启用压缩时，所有发送到该目标的重做数据都会被压缩。</li><li>新的 ALTER SYSTEM FLUSH REDOSQL 语句可在故障转移时用于将未发送的重做从挂载的主数据库刷新到备用数据库，从而允许执行零数据丢失故障转移，即使主数据库未在零数据丢失数据保护模式下运行.</li><li>Data Guard 配置现在可以包含一个主数据库和最多 30 个备用数据库。</li></ul></li></ul><h2 id="oracle-adg-安装" tabindex="-1"><a class="header-anchor" href="#oracle-adg-安装"><span>Oracle ADG 安装</span></a></h2><h3 id="_0-前提条件" tabindex="-1"><a class="header-anchor" href="#_0-前提条件"><span>0.前提条件</span></a></h3><ul><li><p>主库安装了数据库软件和数据库</p></li><li><p>备库安装了数据库软件</p></li><li><p>主备库 DB_UNIQUE_NAME 不相同</p></li><li><p>主备库网络互通</p></li><li><p>主备库版本相同</p></li><li><p>主备库基本信息</p><table><thead><tr><th>名称</th><th>主库</th><th>备库</th><th>说明</th></tr></thead><tbody><tr><td>IP</td><td>10.10.12.216</td><td>10.10.12.217</td><td></td></tr><tr><td>HostName</td><td>testdb-node01</td><td>testdb-node02</td><td></td></tr><tr><td>DB_NAME</td><td>testdb</td><td>testdb</td><td></td></tr><tr><td>DB_UNIQUE_NAME</td><td>testdbpri</td><td>testdbstd</td><td></td></tr><tr><td>Oracle Net service name</td><td>TESTDB_PRI</td><td>TESTDB_STD</td><td>tnsnames.ora</td></tr><tr><td>ORACLE_SID</td><td>testdb</td><td>testdb</td><td></td></tr><tr><td>Service Name</td><td>testdb</td><td>testdb</td><td></td></tr><tr><td>Instance Name</td><td>testdb</td><td>testdb</td><td></td></tr></tbody></table></li></ul><h3 id="_1-准备工作" tabindex="-1"><a class="header-anchor" href="#_1-准备工作"><span><strong>1.准备工作</strong></span></a></h3><h3 id="_1-1-开启主库归档模式-主库" tabindex="-1"><a class="header-anchor" href="#_1-1-开启主库归档模式-主库"><span>1.1 开启主库归档模式（主库）</span></a></h3><ul><li>开启归档</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SHUTDOWN</span> IMMEDIATE<span class="token punctuation">;</span>
STARTUP MOUNT<span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">DATABASE</span> ARCHIVELOG<span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">DATABASE</span> <span class="token keyword">OPEN</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>查看归档是否开启：</li></ul>`,15),k=s("div",{class:"language-sql line-numbers-mode","data-ext":"sql","data-title":"sql"},[s("pre",{class:"language-sql"},[s("code",null,[s("span",{class:"token keyword"},"SELECT"),n(" log_mode"),s("span",{class:"token punctuation"},","),n("FORCE_LOGGING "),s("span",{class:"token keyword"},"from"),n(" v$"),s("span",{class:"token keyword"},"database"),s("span",{class:"token punctuation"},";"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),v=s("div",{class:"language-sql line-numbers-mode","data-ext":"sql","data-title":"sql"},[s("pre",{class:"language-sql"},[s("code",null,[n("archive log list"),s("span",{class:"token punctuation"},";"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),m=c(`<h3 id="_1-2-开启强制日志模式-主库" tabindex="-1"><a class="header-anchor" href="#_1-2-开启强制日志模式-主库"><span>1.2 开启强制日志模式（主库）</span></a></h3><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">DATABASE</span> <span class="token keyword">FORCE</span> LOGGING<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-3-数据库参数-主库" tabindex="-1"><a class="header-anchor" href="#_1-3-数据库参数-主库"><span>1.3 数据库参数（主库）</span></a></h3><ul><li>设置实例参数</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- alter system set LOG_ARCHIVE_DEST_1=&#39;LOCATION=USE_DB_RECOVERY_FILE_DEST VALID_FOR=(ALL_LOGFILES,ALL_ROLES) DB_UNIQUE_NAME=testdb&#39; scope=both;</span>
<span class="token comment">-- ALTER SYSTEM SET LOG_ARCHIVE_DEST_STATE_1=ENABLE scope=both;</span>
<span class="token comment">-- ALTER SYSTEM SET LOG_ARCHIVE_FORMAT=&#39;%t_%s_%r.arch&#39; SCOPE=SPFILE;</span>
<span class="token comment">-- ALTER SYSTEM SET LOG_ARCHIVE_MAX_PROCESSES=30 scope=both;</span>

<span class="token keyword">ALTER</span> SYSTEM <span class="token keyword">SET</span> DB_UNIQUE_NAME<span class="token operator">=</span><span class="token string">&#39;testdbpri&#39;</span> SCOPE<span class="token operator">=</span>SPFILE<span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> SYSTEM <span class="token keyword">SET</span> REMOTE_LOGIN_PASSWORDFILE<span class="token operator">=</span>EXCLUSIVE SCOPE<span class="token operator">=</span>SPFILE<span class="token punctuation">;</span>

<span class="token keyword">ALTER</span> SYSTEM <span class="token keyword">SET</span> LOG_ARCHIVE_DEST_2<span class="token operator">=</span><span class="token string">&#39;SERVICE=TESTDB_STD LGWR ASYNC VALID_FOR=(ONLINE_LOGFILES,PRIMARY_ROLE) DB_UNIQUE_NAME=testdbstd&#39;</span> scope<span class="token operator">=</span>both<span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> SYSTEM <span class="token keyword">SET</span> LOG_ARCHIVE_DEST_STATE_2<span class="token operator">=</span><span class="token keyword">ENABLE</span> scope<span class="token operator">=</span>both<span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> SYSTEM <span class="token keyword">SET</span> LOG_ARCHIVE_CONFIG<span class="token operator">=</span><span class="token string">&#39;DG_CONFIG=(testdbpri,testdbstd)&#39;</span> scope<span class="token operator">=</span>both<span class="token punctuation">;</span>

<span class="token keyword">ALTER</span> SYSTEM <span class="token keyword">SET</span> DB_FILE_NAME_CONVERT<span class="token operator">=</span><span class="token string">&#39;/data/oracle/oradata/testdb&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;/data/oracle/oradata/testdb&#39;</span> SCOPE<span class="token operator">=</span>SPFILE<span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> SYSTEM <span class="token keyword">SET</span> LOG_FILE_NAME_CONVERT<span class="token operator">=</span><span class="token string">&#39;/data/oracle/oradata/testdb&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;/data/oracle/oradata/testdb&#39;</span>  SCOPE<span class="token operator">=</span>SPFILE<span class="token punctuation">;</span>

<span class="token keyword">alter</span> system <span class="token keyword">set</span> FAL_CLIENT<span class="token operator">=</span><span class="token string">&#39;TESTDB_PRI&#39;</span> scope<span class="token operator">=</span>both<span class="token punctuation">;</span>
<span class="token keyword">alter</span> system <span class="token keyword">set</span> FAL_SERVER<span class="token operator">=</span><span class="token string">&#39;TESTDB_STD&#39;</span> scope<span class="token operator">=</span>both<span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> SYSTEM <span class="token keyword">SET</span> STANDBY_FILE_MANAGEMENT<span class="token operator">=</span>AUTO scope<span class="token operator">=</span>both<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">参数说明</p><p>DB_UNIQUE_NAME 数据库唯一名称，主库和备库的 <code>DB_NAME</code> 需设置相同， <code>DB_UNIQUE_NAME</code> 需设置不同。</p><p>LOG_ARCHIVE_DEST_2 参数中<code>SERVICE</code> 是主库的 <code>tnsname.ora</code> 连接名, <code>DB_UNIQUE_NAME</code> 是备库的 <code>DB_UNIQUE_NAME</code>。</p><p>LOG_ARCHIVE_CONFIG 启用或禁用向远程目标发送重做日志和接收远程重做日志，并 DB_UNIQUE_NAME 为 Data Guard 配置中的每个数据库指定唯一的数据库名称。参数中<code>DG_CONFIG</code> 分别是主库的 <code>DB_UNIQUE_NAME</code> 和备库 的<code>DB_UNIQUE_NAME</code> 。</p><p>DB_FILE_NAME_CONVERT 当主备库数据文件路径不一致时候，须设置此参数实现主备库间数据文件路径转换; 第一个参数填写目标库，第二个参数填写当前库。</p><p>LOG_FILE_NAME_CONVERT 当主备库日志文件路径不一致时候，须设置此参数实现主备库间日志文件路径转换; 第一个参数填写目标库，第二个参数填写当前库。</p><p>REMOTE_LOGIN_PASSWORDFILE 指定 Oracle 是否检查密码文件。</p><p>REMOTE_LOGIN_PASSWORDFILE=shared 一个或多个数据库可以使用密码文件。密码文件可以包含用户 SYS 和非 SYS 用户。</p><p>REMOTE_LOGIN_PASSWORDFILE=exclusive 密码文件只能被一个数据库使用。密码文件可以包含用户 SYS 和非 SYS 用户。</p><p>REMOTE_LOGIN_PASSWORDFILE=none Oracle 忽略任何密码文件。因此，特权用户必须经过操作系统的验证。</p><p>FAL_CLIENT 指定 FAL 服务使用的 FAL（获取归档日志）客户端名称，通过 FAL_SERVER 初始化参数配置，以引用 FAL 客户端。该值是 Oracle Net 服务名称，假定在 FAL 服务器系统上正确配置该名称以指向 FAL 客户端（备用数据库）。</p><p>FAL_SERVER 指定备用数据库的 FAL（获取归档日志）服务器。该值是 Oracle Net 服务名称，假定在备用数据库系统上正确配置该名称以指向所需的 FAL 服务器。</p><p>若 standby_file_management=MANUAL，即使主备库数据文件路径一致，主库添加数据文件，备库也不会自动添加，必须手动完成。</p><p>若 standby_file_management=AUTO，主库添加数据文件，备库会根据 db_file_name_convert 参数自动将数据文件创建到正确路径。</p></div><ul><li>配置 Standby 日志文件组</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">DATABASE</span> <span class="token keyword">ADD</span> STANDBY LOGFILE THREAD <span class="token number">1</span> <span class="token keyword">GROUP</span> <span class="token number">10</span> <span class="token punctuation">(</span><span class="token string">&#39;/data/oracle/oradata/testdb/standby_redo01.log&#39;</span><span class="token punctuation">)</span> SIZE <span class="token number">50</span>M<span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">DATABASE</span> <span class="token keyword">ADD</span> STANDBY LOGFILE THREAD <span class="token number">1</span> <span class="token keyword">GROUP</span> <span class="token number">11</span> <span class="token punctuation">(</span><span class="token string">&#39;/data/oracle/oradata/testdb/standby_redo02.log&#39;</span><span class="token punctuation">)</span> SIZE <span class="token number">50</span>M<span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">DATABASE</span> <span class="token keyword">ADD</span> STANDBY LOGFILE THREAD <span class="token number">1</span> <span class="token keyword">GROUP</span> <span class="token number">12</span> <span class="token punctuation">(</span><span class="token string">&#39;/data/oracle/oradata/testdb/standby_redo03.log&#39;</span><span class="token punctuation">)</span> SIZE <span class="token number">50</span>M<span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">DATABASE</span> <span class="token keyword">ADD</span> STANDBY LOGFILE THREAD <span class="token number">1</span> <span class="token keyword">GROUP</span> <span class="token number">13</span> <span class="token punctuation">(</span><span class="token string">&#39;/data/oracle/oradata/testdb/standby_redo04.log&#39;</span><span class="token punctuation">)</span> SIZE <span class="token number">50</span>M<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>用于备库传输的日志文件大小要大于在线日志文件大小、备库传输的在线日志组数量多余在线日志组。</p></blockquote><h3 id="_1-4-配置监听、网络服务-主库" tabindex="-1"><a class="header-anchor" href="#_1-4-配置监听、网络服务-主库"><span>1.4 配置监听、网络服务（主库）</span></a></h3><ul><li>配置<code>/etc/hosts</code>解析</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token number">10.10</span>.12.216   testdb-node01
<span class="token number">10.10</span>.12.217   testdb-node02
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>监听设置</li></ul><p>在 <code>$ORACLE_HOME/network/admin/listener.ora</code>中添加如下内容：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># listener.ora Network Configuration File: /u01/app/oracle/product/11.2.0.4/db_1/network/admin/listener.ora</span>
<span class="token comment"># Generated by Oracle configuration tools.</span>
SID_LIST_LISTENER <span class="token operator">=</span>
  <span class="token punctuation">(</span>SID_LIST <span class="token operator">=</span>
    <span class="token punctuation">(</span>SID_DESC <span class="token operator">=</span>
      <span class="token punctuation">(</span>GLOBAL_DBNAME <span class="token operator">=</span> testdbpri<span class="token punctuation">)</span>
      <span class="token punctuation">(</span>ORACLE_HOME <span class="token operator">=</span> /u01/app/oracle/product/11.2.0.4/db_1<span class="token punctuation">)</span>
      <span class="token punctuation">(</span>SID_NAME <span class="token operator">=</span> testdb<span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
    <span class="token punctuation">(</span>SID_DESC <span class="token operator">=</span>
      <span class="token punctuation">(</span>GLOBAL_DBNAME <span class="token operator">=</span> testdb_DGMGRL<span class="token punctuation">)</span>
      <span class="token punctuation">(</span>ORACLE_HOME <span class="token operator">=</span> /u01/app/oracle/product/11.2.0.4/db_1<span class="token punctuation">)</span>
      <span class="token punctuation">(</span>SID_NAME <span class="token operator">=</span> testdb<span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">)</span>

LISTENER <span class="token operator">=</span>
  <span class="token punctuation">(</span>DESCRIPTION_LIST <span class="token operator">=</span>
    <span class="token punctuation">(</span>DESCRIPTION <span class="token operator">=</span>
      <span class="token punctuation">(</span>ADDRESS <span class="token operator">=</span> <span class="token punctuation">(</span>PROTOCOL <span class="token operator">=</span> IPC<span class="token punctuation">)</span><span class="token punctuation">(</span>KEY <span class="token operator">=</span> EXTPROC1521<span class="token punctuation">))</span>
      <span class="token punctuation">(</span>ADDRESS <span class="token operator">=</span> <span class="token punctuation">(</span>PROTOCOL <span class="token operator">=</span> TCP<span class="token punctuation">)</span><span class="token punctuation">(</span>HOST <span class="token operator">=</span> testdb-node01<span class="token punctuation">)</span><span class="token punctuation">(</span>PORT <span class="token operator">=</span> <span class="token number">1521</span><span class="token punctuation">))</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">)</span>

ADR_BASE_LISTENER <span class="token operator">=</span> /u01/app/oracle
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>重载监听</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>lsnrctl reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>配置 Oracle 网络服务</li></ul><p>在 <code>$ORACLE_HOME/network/admin/tnsnames.ora</code>中设置以下条目:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>TESTDB_PRI <span class="token operator">=</span>
  <span class="token punctuation">(</span>DESCRIPTION <span class="token operator">=</span>
    <span class="token punctuation">(</span>ADDRESS_LIST <span class="token operator">=</span>
      <span class="token punctuation">(</span>ADDRESS <span class="token operator">=</span> <span class="token punctuation">(</span>PROTOCOL <span class="token operator">=</span> TCP<span class="token punctuation">)</span><span class="token punctuation">(</span>HOST <span class="token operator">=</span> testdb-node01<span class="token punctuation">)</span><span class="token punctuation">(</span>PORT <span class="token operator">=</span> <span class="token number">1521</span><span class="token punctuation">))</span>
    <span class="token punctuation">)</span>
    <span class="token punctuation">(</span>CONNECT_DATA <span class="token operator">=</span>
      <span class="token punctuation">(</span>SERVICE_NAME <span class="token operator">=</span> TESTDBPRI<span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">)</span>

TESTDB_STD <span class="token operator">=</span>
  <span class="token punctuation">(</span>DESCRIPTION <span class="token operator">=</span>
    <span class="token punctuation">(</span>ADDRESS_LIST <span class="token operator">=</span>
      <span class="token punctuation">(</span>ADDRESS <span class="token operator">=</span> <span class="token punctuation">(</span>PROTOCOL <span class="token operator">=</span> TCP<span class="token punctuation">)</span><span class="token punctuation">(</span>HOST <span class="token operator">=</span> testdb-node02<span class="token punctuation">)</span><span class="token punctuation">(</span>PORT <span class="token operator">=</span> <span class="token number">1521</span><span class="token punctuation">))</span>
    <span class="token punctuation">)</span>
    <span class="token punctuation">(</span>CONNECT_DATA <span class="token operator">=</span>
      <span class="token punctuation">(</span>SERVICE_NAME <span class="token operator">=</span> TESTDBSTD<span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-5-备库环境准备-备库" tabindex="-1"><a class="header-anchor" href="#_1-5-备库环境准备-备库"><span>1.5 备库环境准备（备库）</span></a></h3><ul><li><p>安装数据库软件</p></li><li><p>创建相应目录(oracle)</p></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /data/oracle/oradata/testdb
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /data/oracle/fast_recovery_area/testdb
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /data/oracle/fast_recovery_area/TESTDBPRI
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /u01/app/oracle/admin/testdb/adump
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-6-配置监听、网络服务-备库" tabindex="-1"><a class="header-anchor" href="#_1-6-配置监听、网络服务-备库"><span>1.6 配置监听、网络服务（备库）</span></a></h3><ul><li>配置<code>/etc/hosts</code>解析</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token number">10.10</span>.12.216   testdb-node01
<span class="token number">10.10</span>.12.217   testdb-node02
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>监听设置</li></ul><p>在 <code>$ORACLE_HOME/network/admin/listener.ora</code>中添加如下内容：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># listener.ora Network Configuration File: /u01/app/oracle/product/11.2.0.4/db_1/network/admin/listener.ora</span>
<span class="token comment"># Generated by Oracle configuration tools.</span>
SID_LIST_LISTENER <span class="token operator">=</span>
  <span class="token punctuation">(</span>SID_LIST <span class="token operator">=</span>
    <span class="token punctuation">(</span>SID_DESC <span class="token operator">=</span>
      <span class="token punctuation">(</span>GLOBAL_DBNAME <span class="token operator">=</span> testdbstd<span class="token punctuation">)</span>
      <span class="token punctuation">(</span>ORACLE_HOME <span class="token operator">=</span> /u01/app/oracle/product/11.2.0.4/db_1<span class="token punctuation">)</span>
      <span class="token punctuation">(</span>SID_NAME <span class="token operator">=</span> testdb<span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
    <span class="token punctuation">(</span>SID_DESC <span class="token operator">=</span>
      <span class="token punctuation">(</span>GLOBAL_DBNAME <span class="token operator">=</span> testdb_DGMGRL<span class="token punctuation">)</span>
      <span class="token punctuation">(</span>ORACLE_HOME <span class="token operator">=</span> /u01/app/oracle/product/11.2.0.4/db_1<span class="token punctuation">)</span>
      <span class="token punctuation">(</span>SID_NAME <span class="token operator">=</span> testdb<span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">)</span>

LISTENER <span class="token operator">=</span>
  <span class="token punctuation">(</span>DESCRIPTION_LIST <span class="token operator">=</span>
    <span class="token punctuation">(</span>DESCRIPTION <span class="token operator">=</span>
      <span class="token punctuation">(</span>ADDRESS <span class="token operator">=</span> <span class="token punctuation">(</span>PROTOCOL <span class="token operator">=</span> IPC<span class="token punctuation">)</span><span class="token punctuation">(</span>KEY <span class="token operator">=</span> EXTPROC1521<span class="token punctuation">))</span>
      <span class="token punctuation">(</span>ADDRESS <span class="token operator">=</span> <span class="token punctuation">(</span>PROTOCOL <span class="token operator">=</span> TCP<span class="token punctuation">)</span><span class="token punctuation">(</span>HOST <span class="token operator">=</span> testdb-node02<span class="token punctuation">)</span><span class="token punctuation">(</span>PORT <span class="token operator">=</span> <span class="token number">1521</span><span class="token punctuation">))</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">)</span>

ADR_BASE_LISTENER <span class="token operator">=</span> /u01/app/oracle
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>重载监听</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>lsnrctl reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>配置 Oracle 网络服务</li></ul><p>在 <code>$ORACLE_HOME/network/admin/tnsnames.ora</code>中设置以下条目:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>TESTDB_PRI <span class="token operator">=</span>
  <span class="token punctuation">(</span>DESCRIPTION <span class="token operator">=</span>
    <span class="token punctuation">(</span>ADDRESS_LIST <span class="token operator">=</span>
      <span class="token punctuation">(</span>ADDRESS <span class="token operator">=</span> <span class="token punctuation">(</span>PROTOCOL <span class="token operator">=</span> TCP<span class="token punctuation">)</span><span class="token punctuation">(</span>HOST <span class="token operator">=</span> testdb-node01<span class="token punctuation">)</span><span class="token punctuation">(</span>PORT <span class="token operator">=</span> <span class="token number">1521</span><span class="token punctuation">))</span>
    <span class="token punctuation">)</span>
    <span class="token punctuation">(</span>CONNECT_DATA <span class="token operator">=</span>
      <span class="token punctuation">(</span>SERVICE_NAME <span class="token operator">=</span> TESTDBPRI<span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">)</span>

TESTDB_STD <span class="token operator">=</span>
  <span class="token punctuation">(</span>DESCRIPTION <span class="token operator">=</span>
    <span class="token punctuation">(</span>ADDRESS_LIST <span class="token operator">=</span>
      <span class="token punctuation">(</span>ADDRESS <span class="token operator">=</span> <span class="token punctuation">(</span>PROTOCOL <span class="token operator">=</span> TCP<span class="token punctuation">)</span><span class="token punctuation">(</span>HOST <span class="token operator">=</span> testdb-node02<span class="token punctuation">)</span><span class="token punctuation">(</span>PORT <span class="token operator">=</span> <span class="token number">1521</span><span class="token punctuation">))</span>
    <span class="token punctuation">)</span>
    <span class="token punctuation">(</span>CONNECT_DATA <span class="token operator">=</span>
      <span class="token punctuation">(</span>SERVICE_NAME <span class="token operator">=</span> TESTDBSTD<span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-创建备库-备份恢复" tabindex="-1"><a class="header-anchor" href="#_2-创建备库-备份恢复"><span><strong>2.创建备库（备份恢复）</strong></span></a></h3><h3 id="_2-1-备份数据-主库" tabindex="-1"><a class="header-anchor" href="#_2-1-备份数据-主库"><span>2.1 备份数据（主库）</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>rman <span class="token assign-left variable">target</span><span class="token operator">=</span>/
BACKUP FULL DATABASE PLUS ARCHIVELOG<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-创建备库控制文件和参数文件-主库" tabindex="-1"><a class="header-anchor" href="#_2-2-创建备库控制文件和参数文件-主库"><span>2.2 创建备库控制文件和参数文件（主库）</span></a></h3><ul><li>在主库上创建备库使用的控制文件</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">DATABASE</span> <span class="token keyword">CREATE</span> STANDBY CONTROLFILE <span class="token keyword">AS</span> <span class="token string">&#39;/tmp/testdbstd.ctl&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>在主库上创建备库使用的参数文件</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> PFILE<span class="token operator">=</span><span class="token string">&#39;/tmp/inittestdbstd.ora&#39;</span> <span class="token keyword">FROM</span> SPFILE<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-3-传输备份数据-备库" tabindex="-1"><a class="header-anchor" href="#_2-3-传输备份数据-备库"><span>2.3 传输备份数据（备库）</span></a></h3><ul><li>传输数据</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 控制文件</span>
<span class="token function">scp</span> oracle@testdb-node01:/tmp/testdbstd.ctl /data/oracle/oradata/testdbcontrol01.ctl
<span class="token function">cp</span> /data/oracle/oradata/testdbcontrol01.ctl /u01/app/oracle/fast_recovery_area/testdbstd/control02.ctl

<span class="token comment"># 归档和备份文件</span>
<span class="token function">scp</span> <span class="token parameter variable">-r</span> oracle@testdb-node01:/u01/app/oracle/fast_recovery_area/TESTDB/archivelog /u01/app/oracle/fast_recovery_area/TESTDB/
<span class="token function">scp</span> <span class="token parameter variable">-r</span> oracle@testdb-node01:/u01/app/oracle/fast_recovery_area/TESTDB/backupset /u01/app/oracle/fast_recovery_area/TESTDB/

<span class="token comment"># 参数文件</span>
<span class="token function">scp</span> oracle@testdb-node01:/tmp/inittestdbstd.ora /tmp/inittestdbstd.ora

<span class="token comment"># 远程登录密码文件</span>
<span class="token function">scp</span> oracle@testdb-node01:<span class="token variable">$ORACLE_HOME</span>/dbs/orapwtestdb <span class="token variable">$ORACLE_HOME</span>/dbs/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>修改上一步创建的参数文件<code>inittestdbstd.ora</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>*.db_unique_name<span class="token operator">=</span><span class="token string">&#39;testdbstd&#39;</span>
*.log_archive_dest_2<span class="token operator">=</span><span class="token string">&#39;SERVICE=TESTDB_PRI LGWR ASYNC VALID_FOR=(ONLINE_LOGFILES,PRIMARY_ROLE) DB_UNIQUE_NAME=testdbpri&#39;</span>
*.log_archive_config<span class="token operator">=</span><span class="token string">&#39;DG_CONFIG=(testdbstd,testdbpri)&#39;</span>
*.fal_client<span class="token operator">=</span><span class="token string">&#39;TESTDB_STD&#39;</span>
*.fal_server<span class="token operator">=</span><span class="token string">&#39;TESTDB_PRI&#39;</span>
*.log_file_name_convert<span class="token operator">=</span><span class="token string">&#39;/data/oracle/oradata/testdb&#39;</span>,<span class="token string">&#39;/data/oracle/oradata/testdb&#39;</span>
*.log_file_name_convert<span class="token operator">=</span><span class="token string">&#39;/data/oracle/oradata/testdb&#39;</span>,<span class="token string">&#39;/data/oracle/oradata/testdb&#39;</span>
*.standby_file_management<span class="token operator">=</span><span class="token string">&#39;AUTO&#39;</span>
*.remote_login_passwordfile<span class="token operator">=</span><span class="token string">&#39;EXCLUSIVE&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-恢复备份-备库" tabindex="-1"><a class="header-anchor" href="#_2-4-恢复备份-备库"><span>2.4 恢复备份（备库）</span></a></h3><ul><li>创建 spfile</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">ORACLE_SID</span><span class="token operator">=</span>testdb
sqlplus / as sysdba

CREATE SPFILE FROM <span class="token assign-left variable">PFILE</span><span class="token operator">=</span><span class="token string">&#39;/tmp/inittestdbstd.ora&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>恢复数据文件</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">ORACLE_SID</span><span class="token operator">=</span>testdb
rman <span class="token assign-left variable">target</span><span class="token operator">=</span>/

RMAN<span class="token operator">&gt;</span> STARTUP MOUNT<span class="token punctuation">;</span>
RMAN<span class="token operator">&gt;</span> RESTORE DATABASE<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完成创建，开启应用进程。</p><h3 id="_3-创建备库-duplicate" tabindex="-1"><a class="header-anchor" href="#_3-创建备库-duplicate"><span><strong>3.创建备库(DUPLICATE)</strong></span></a></h3><h3 id="_3-1-创建备库控制文件和参数文件-主库" tabindex="-1"><a class="header-anchor" href="#_3-1-创建备库控制文件和参数文件-主库"><span>3.1 创建备库控制文件和参数文件（主库）</span></a></h3><ul><li>在主库上创建备库需要的参数文件</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> PFILE<span class="token operator">=</span><span class="token string">&#39;/tmp/inittestdbstd.ora&#39;</span> <span class="token keyword">FROM</span> SPFILE<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-2-传输文件-备库" tabindex="-1"><a class="header-anchor" href="#_3-2-传输文件-备库"><span>3.2 传输文件（备库）</span></a></h3><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment"># 参数文件</span>
scp oracle<span class="token variable">@testdb</span><span class="token operator">-</span>node01:<span class="token operator">/</span>tmp<span class="token operator">/</span>inittestdbstd<span class="token punctuation">.</span>ora <span class="token operator">/</span>tmp<span class="token operator">/</span>inittestdbstd<span class="token punctuation">.</span>ora

<span class="token comment"># 远程登录密码文件</span>
scp oracle<span class="token variable">@testdb</span><span class="token operator">-</span>node01:$ORACLE_HOME<span class="token operator">/</span>dbs<span class="token operator">/</span>orapwtestdb $ORACLE_HOME<span class="token operator">/</span>dbs<span class="token operator">/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-修改参数文件-备库" tabindex="-1"><a class="header-anchor" href="#_3-3-修改参数文件-备库"><span>3.3 修改参数文件（备库）</span></a></h3><ul><li>修改主库传到备库中的参数文件<code>inittestdbstd.ora</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>*.db_unique_name<span class="token operator">=</span><span class="token string">&#39;testdbstd&#39;</span>
*.log_archive_dest_2<span class="token operator">=</span><span class="token string">&#39;SERVICE=TESTDB_PRI LGWR ASYNC VALID_FOR=(ONLINE_LOGFILES,PRIMARY_ROLE) DB_UNIQUE_NAME=testdbpri&#39;</span>
*.log_archive_config<span class="token operator">=</span><span class="token string">&#39;DG_CONFIG=(testdbstd,testdbpri)&#39;</span>
*.fal_client<span class="token operator">=</span><span class="token string">&#39;TESTDB_STD&#39;</span>
*.fal_server<span class="token operator">=</span><span class="token string">&#39;TESTDB_PRI&#39;</span>
*.log_file_name_convert<span class="token operator">=</span><span class="token string">&#39;/data/oracle/oradata/testdb&#39;</span>,<span class="token string">&#39;/data/oracle/oradata/testdb&#39;</span>
*.log_file_name_convert<span class="token operator">=</span><span class="token string">&#39;/data/oracle/oradata/testdb&#39;</span>,<span class="token string">&#39;/data/oracle/oradata/testdb&#39;</span>
*.standby_file_management<span class="token operator">=</span><span class="token string">&#39;AUTO&#39;</span>
*.remote_login_passwordfile<span class="token operator">=</span><span class="token string">&#39;EXCLUSIVE&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建密码文件</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 如果已经从主库传输密码文件，此步可以不需要</span>
<span class="token comment"># orapwd file=/u01/app/oracle/product/11.2.0.4/db_1/dbs/orapwtestdb password=&lt;password&gt; entries=10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-复制数据库-备库" tabindex="-1"><a class="header-anchor" href="#_3-4-复制数据库-备库"><span>3.4 复制数据库（备库）</span></a></h3><ul><li>启动 auxillary 实例</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>export ORACLE_SID<span class="token operator">=</span>testdb
sqlplus <span class="token operator">/</span> <span class="token keyword">as</span> sysdba

startup nomount PFILE<span class="token operator">=</span><span class="token string">&#39;/tmp/inittestdbstd.ora&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用 RMAN 连接 Target 和 Auxillay 实例</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>rman TARGET sys/password@TESTDB_PRI AUXILIARY sys/password@TESTDB_STD
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><code>TESTDB_PRI</code> 是 <code>tnsnames.ora</code> 中主库的连接信息， <code>TESTDB_STD</code> 是 <code>tnsnames.ora</code> 中备库的连接信息，不要尝试使用操作系统认证。</p></blockquote><ul><li>使用 duplicate 命令创建备库</li></ul>`,71),E=s("div",{class:"language-sql line-numbers-mode","data-ext":"sql","data-title":"sql"},[s("pre",{class:"language-sql"},[s("code",null,[s("span",{class:"token keyword"},"DUPLICATE"),n(" TARGET "),s("span",{class:"token keyword"},"DATABASE"),n(`
  `),s("span",{class:"token keyword"},"FOR"),n(` STANDBY
  `),s("span",{class:"token keyword"},"FROM"),n(" ACTIVE "),s("span",{class:"token keyword"},"DATABASE"),n(`
  DORECOVER
  SPFILE
    `),s("span",{class:"token keyword"},"SET"),n(" db_unique_name"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},"'testdbstd'"),n(),s("span",{class:"token keyword"},"COMMENT"),n(),s("span",{class:"token string"},"'Is standby'"),n(`
    `),s("span",{class:"token keyword"},"SET"),n(" LOG_ARCHIVE_DEST_2"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},"'SERVICE=TESTDB_PRI ASYNC VALID_FOR=(ONLINE_LOGFILES,PRIMARY_ROLE) DB_UNIQUE_NAME=testdbpri'"),n(`
    `),s("span",{class:"token keyword"},"SET"),n(" FAL_CLIENT"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},"'TESTDB_STD'"),n(),s("span",{class:"token keyword"},"COMMENT"),n(),s("span",{class:"token string"},"'Is standby'"),n(`
    `),s("span",{class:"token keyword"},"SET"),n(" FAL_SERVER"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},"'TESTDB_PRI'"),n(),s("span",{class:"token keyword"},"COMMENT"),n(),s("span",{class:"token string"},"'Is primary'"),n(`
  NOFILENAMECHECK`),s("span",{class:"token punctuation"},";"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),A=s("div",{class:"language-sql line-numbers-mode","data-ext":"sql","data-title":"sql"},[s("pre",{class:"language-sql"},[s("code",null,[s("span",{class:"token keyword"},"DUPLICATE"),n(" TARGET "),s("span",{class:"token keyword"},"DATABASE"),n(`
  `),s("span",{class:"token keyword"},"FOR"),n(` STANDBY
  `),s("span",{class:"token keyword"},"FROM"),n(" ACTIVE "),s("span",{class:"token keyword"},"DATABASE"),n(`
  DORECOVER
  NOFILENAMECHECK`),s("span",{class:"token punctuation"},";"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),S=c(`<blockquote><ul><li>FOR STANDBY：这表明该 DUPLICATE 命令将用于备用，因此它不会强制更改 DBID。</li><li>FROM ACTIVE DATABASE:DUPLICATE 将直接从源数据文件创建，无需额外的备份步骤。</li><li>DORECOVER：DUPLICATE 将包括恢复步骤，使备用数据库达到当前时间点。</li><li>SPFILE：允许我们在从源服务器复制 spfile 时重置 spfile 中的值。</li><li>NOFILENAMECHECK: 不检查目标文件位置。</li></ul></blockquote><h2 id="dataguard-管理" tabindex="-1"><a class="header-anchor" href="#dataguard-管理"><span>Dataguard 管理</span></a></h2><h3 id="启动和停止" tabindex="-1"><a class="header-anchor" href="#启动和停止"><span>启动和停止</span></a></h3><ul><li>启动顺序 <ul><li>Data Guard 关闭（先关主库再关备库）</li><li>Data Guard 开启（先开备库再开主库）</li></ul></li></ul><h3 id="相关视图" tabindex="-1"><a class="header-anchor" href="#相关视图"><span>相关视图</span></a></h3><ul><li>查看数据保护模式、角色等信息</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> name<span class="token punctuation">,</span>open_mode<span class="token punctuation">,</span>protection_mode<span class="token punctuation">,</span>DATABASE_ROLE<span class="token punctuation">,</span>GUARD_STATUS<span class="token punctuation">,</span>SWITCHOVER_STATUS<span class="token punctuation">,</span>flashback_on <span class="token keyword">FROM</span> v$<span class="token keyword">database</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>查看应用日志和传输日志状态</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>col name format a30
col <span class="token keyword">value</span> format a20
col TIME_COMPUTED format a20
<span class="token keyword">select</span> name<span class="token punctuation">,</span><span class="token keyword">value</span><span class="token punctuation">,</span>TIME_COMPUTED <span class="token keyword">from</span> v$dataguard_stats<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>查看最新归档日志和切换日志（主）</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">SESSION</span> <span class="token keyword">SET</span> nls_date_format<span class="token operator">=</span><span class="token string">&#39;YYYY-MM-DD HH24:MI:SS&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">SELECT</span> sequence<span class="token comment">#, first_time, next_time</span>
<span class="token keyword">FROM</span>   v$archived_log
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> sequence<span class="token comment">#;</span>

<span class="token keyword">ALTER</span> SYSTEM SWITCH LOGFILE<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>查看传输到备库的归档和应用情况（备）</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">SESSION</span> <span class="token keyword">SET</span> nls_date_format<span class="token operator">=</span><span class="token string">&#39;YYYY-MM-DD HH24:MI:SS&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">SELECT</span> sequence<span class="token comment">#, first_time, next_time, applied</span>
<span class="token keyword">FROM</span>   v$archived_log
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> sequence<span class="token comment">#;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>用数据库相关的 Oracle 数据库进程的当前状态信息</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> process<span class="token punctuation">,</span><span class="token keyword">status</span><span class="token punctuation">,</span>sequence<span class="token comment"># from V$MANAGED_STANDBY;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>在主库上执行只主要是查看日志归档目的地是否可用，如果远程归档目录不可用则 error 会显示错误信息。</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>col dest_name format a30
col <span class="token keyword">status</span> format a10
col error format a30
<span class="token keyword">select</span> dest_name<span class="token punctuation">,</span><span class="token keyword">status</span><span class="token punctuation">,</span>error <span class="token keyword">from</span> v$archive_dest<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>同步情况（备）</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> v$archive_gap<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>检查主备库SCN</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>-- 在主库上执行以下语句，查看主备库的SCN号
<span class="token builtin class-name">set</span> numwidth <span class="token number">30</span>

<span class="token keyword">select</span> <span class="token number">1</span> dest_id, current_scn from <span class="token function">v</span><span class="token variable">$database</span>
union all
<span class="token keyword">select</span> dest_id, applied_scn from <span class="token function">v</span><span class="token variable">$archive_dest</span> where target <span class="token operator">=</span><span class="token string">&#39;STANDBY&#39;</span><span class="token punctuation">;</span>

-- 如果主库和备库的SCN一直在变化，并且很接近，说明备库日志恢复正常。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="应用进程" tabindex="-1"><a class="header-anchor" href="#应用进程"><span>应用进程</span></a></h3><ul><li>开启应用进程（备）</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">DATABASE</span> RECOVER MANAGED STANDBY <span class="token keyword">DATABASE</span> DISCONNECT <span class="token keyword">FROM</span> <span class="token keyword">SESSION</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>关闭应用进程（备）</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">DATABASE</span> RECOVER MANAGED STANDBY <span class="token keyword">DATABASE</span> CANCEL<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>开启延迟传输和应用（备）</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">DATABASE</span> RECOVER MANAGED STANDBY <span class="token keyword">DATABASE</span> CANCEL<span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">DATABASE</span> RECOVER MANAGED STANDBY <span class="token keyword">DATABASE</span> DELAY <span class="token number">30</span> DISCONNECT <span class="token keyword">FROM</span> <span class="token keyword">SESSION</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>关闭延迟传输和应用（备）</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">DATABASE</span> RECOVER MANAGED STANDBY <span class="token keyword">DATABASE</span> CANCEL<span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">DATABASE</span> RECOVER MANAGED STANDBY <span class="token keyword">DATABASE</span> NODELAY DISCONNECT <span class="token keyword">FROM</span> <span class="token keyword">SESSION</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>开启实时应用（备）</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">DATABASE</span> RECOVER MANAGED STANDBY <span class="token keyword">DATABASE</span> <span class="token keyword">USING</span> <span class="token keyword">CURRENT</span> LOGFILE DISCONNECT <span class="token keyword">FROM</span> <span class="token keyword">SESSION</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="只读模式" tabindex="-1"><a class="header-anchor" href="#只读模式"><span>只读模式</span></a></h3><p>Oracle 11g, 引入了 <code>Active Data Guard</code> 特性，允许备库打开 <code>read-only</code> 模式，同时应用重做日志。</p><ul><li>开启 <code>Active Data Guard</code></li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SHUTDOWN</span> IMMEDIATE<span class="token punctuation">;</span>
STARTUP MOUNT<span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">DATABASE</span> <span class="token keyword">OPEN</span> <span class="token keyword">READ</span> ONLY<span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">DATABASE</span> RECOVER MANAGED STANDBY <span class="token keyword">DATABASE</span> <span class="token keyword">USING</span> <span class="token keyword">CURRENT</span> LOGFILE DISCONNECT <span class="token keyword">FROM</span> <span class="token keyword">SESSION</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="保护模式" tabindex="-1"><a class="header-anchor" href="#保护模式"><span>保护模式</span></a></h3><h4 id="主库有三种保护模式" tabindex="-1"><a class="header-anchor" href="#主库有三种保护模式"><span>主库有三种保护模式：</span></a></h4><ul><li>最大可用性（默认值）：在将重做信息写入联机重做日志和至少一个备用位置的备用重做日志之前，主服务器上的事务不会提交。如果没有备用位置可用，它将以与最大性能模式相同的方式运行，直到备用位置再次可用。</li><li>最大性能：一旦重做信息被写入联机重做日志，主提交上的事务。将重做信息传输到备用服务器是异步的，因此不会影响主服务器的性能。</li><li>最大保护：在重做信息被写入联机重做日志和至少一个备用位置的备用重做日志之前，主服务器上的事务不会提交。如果没有合适的备用位置可用，主数据库将关闭。</li></ul><h4 id="保护模式切换" tabindex="-1"><a class="header-anchor" href="#保护模式切换"><span>保护模式切换</span></a></h4><ul><li>最大可用模式</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> SYSTEM <span class="token keyword">SET</span> LOG_ARCHIVE_DEST_2<span class="token operator">=</span><span class="token string">&#39;SERVICE=testdbadg AFFIRM SYNC VALID_FOR=(ONLINE_LOGFILES,PRIMARY_ROLE) DB_UNIQUE_NAME=testdbadg&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">DATABASE</span> <span class="token keyword">SET</span> STANDBY <span class="token keyword">DATABASE</span> <span class="token keyword">TO</span> MAXIMIZE AVAILABILITY<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>最大性能模式</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> SYSTEM <span class="token keyword">SET</span> LOG_ARCHIVE_DEST_2<span class="token operator">=</span><span class="token string">&#39;SERVICE=testdbadg NOAFFIRM ASYNC VALID_FOR=(ONLINE_LOGFILES,PRIMARY_ROLE) DB_UNIQUE_NAME=testdbadg&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">DATABASE</span> <span class="token keyword">SET</span> STANDBY <span class="token keyword">DATABASE</span> <span class="token keyword">TO</span> MAXIMIZE PERFORMANCE<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>最大保护模式</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> SYSTEM <span class="token keyword">SET</span> LOG_ARCHIVE_DEST_2<span class="token operator">=</span><span class="token string">&#39;SERVICE=testdbadg AFFIRM SYNC VALID_FOR=(ONLINE_LOGFILES,PRIMARY_ROLE) DB_UNIQUE_NAME=testdbadg&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">SHUTDOWN</span> IMMEDIATE<span class="token punctuation">;</span>
STARTUP MOUNT<span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">DATABASE</span> <span class="token keyword">SET</span> STANDBY <span class="token keyword">DATABASE</span> <span class="token keyword">TO</span> MAXIMIZE PROTECTION<span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">DATABASE</span> <span class="token keyword">OPEN</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="主备切换-switchover" tabindex="-1"><a class="header-anchor" href="#主备切换-switchover"><span>主备切换(Switchover)</span></a></h3><p>数据库可以处于两种互斥模式（主模式或备用模式）中的一种。这些角色可以在运行时更改，而不会丢失数据或重置重做日志。此过程称为切换，可以使用以下语句执行。</p><ul><li>主库转为备库（原主库）</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- Convert primary database to standby</span>
<span class="token keyword">CONNECT</span> <span class="token operator">/</span> <span class="token keyword">AS</span> SYSDBA
<span class="token keyword">ALTER</span> <span class="token keyword">DATABASE</span> <span class="token keyword">COMMIT</span> <span class="token keyword">TO</span> SWITCHOVER <span class="token keyword">TO</span> STANDBY<span class="token punctuation">;</span>

<span class="token comment">-- Shutdown primary database</span>
<span class="token keyword">SHUTDOWN</span> IMMEDIATE<span class="token punctuation">;</span>

<span class="token comment">-- Mount old primary database as standby database</span>
STARTUP NOMOUNT<span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">DATABASE</span> MOUNT STANDBY <span class="token keyword">DATABASE</span><span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">DATABASE</span> <span class="token keyword">OPEN</span> <span class="token keyword">READ</span> ONLY<span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">DATABASE</span> RECOVER MANAGED STANDBY <span class="token keyword">DATABASE</span> DISCONNECT <span class="token keyword">FROM</span> <span class="token keyword">SESSION</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>备库转为主库（原备库）</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- Convert standby database to primary</span>
<span class="token keyword">CONNECT</span> <span class="token operator">/</span> <span class="token keyword">AS</span> SYSDBA
<span class="token keyword">ALTER</span> <span class="token keyword">DATABASE</span> <span class="token keyword">COMMIT</span> <span class="token keyword">TO</span> SWITCHOVER <span class="token keyword">TO</span> <span class="token keyword">PRIMARY</span><span class="token punctuation">;</span>

<span class="token comment">-- Shutdown standby database</span>
<span class="token keyword">SHUTDOWN</span> IMMEDIATE<span class="token punctuation">;</span>

<span class="token comment">-- Open old standby database as primary</span>
STARTUP<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="故障转移-failover" tabindex="-1"><a class="header-anchor" href="#故障转移-failover"><span>故障转移(Failover)</span></a></h3><p>如果主数据库不可用，可以使用以下语句将备用数据库激活为主数据库。由于备用数据库现在是主数据库，因此应该立即对其进行备份。</p><p>现在可以将原始主数据库配置为备用数据库。如果在主数据库上启用了闪回数据库，那么这可以相对容易地完成。如果不是，则必须遵循整个设置过程，但这次使用原始主服务器作为备用服务器。</p><ul><li>备库设置为主库（原备库）</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">DATABASE</span> RECOVER MANAGED STANDBY <span class="token keyword">DATABASE</span> FINISH<span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">DATABASE</span> ACTIVATE STANDBY <span class="token keyword">DATABASE</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="闪回数据库" tabindex="-1"><a class="header-anchor" href="#闪回数据库"><span>闪回数据库</span></a></h3><p>如果启用了 flashback，在进行故障转移后，可以把原来的主库转为备库。</p><ul><li>查询 SCN（新主库）</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> TO_CHAR<span class="token punctuation">(</span>STANDBY_BECAME_PRIMARY_SCN<span class="token punctuation">)</span> <span class="token keyword">FROM</span> V$<span class="token keyword">DATABASE</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>重新启动旧主库到 mount,并闪回数据库到 STANDBY_BECAME_PRIMARY_SCN 上一步中确定的值</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>startup mount<span class="token punctuation">;</span>

FLASHBACK <span class="token keyword">DATABASE</span> <span class="token keyword">TO</span> SCN <span class="token operator">&lt;</span>SCN<span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在旧主库上将数据库转换为新 standby 备库。</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">DATABASE</span> <span class="token keyword">CONVERT</span> <span class="token keyword">TO</span> PHYSICAL STANDBY<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>在新主库上检查归档日志状态，并 switch logfile;</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> DEST_ID<span class="token punctuation">,</span> DEST_NAME<span class="token punctuation">,</span> <span class="token keyword">STATUS</span><span class="token punctuation">,</span> PROTECTION_MODE<span class="token punctuation">,</span> DESTINATION<span class="token punctuation">,</span> ERROR<span class="token punctuation">,</span>SRL <span class="token keyword">FROM</span> V$ARCHIVE_DEST_STATUS<span class="token punctuation">;</span>

<span class="token keyword">ALTER</span> SYSTEM SWITCH LOGFILE<span class="token punctuation">;</span>

<span class="token keyword">SELECT</span> DEST_ID<span class="token punctuation">,</span> DEST_NAME<span class="token punctuation">,</span> <span class="token keyword">STATUS</span><span class="token punctuation">,</span> PROTECTION_MODE<span class="token punctuation">,</span> DESTINATION<span class="token punctuation">,</span> ERROR<span class="token punctuation">,</span>SRL <span class="token keyword">FROM</span> V$ARCHIVE_DEST_STATUS<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在新 standby 备库上开始应用日志</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SHUTDOWN</span> IMMEDIATE<span class="token punctuation">;</span>
STARTUP MOUNT<span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">DATABASE</span> <span class="token keyword">OPEN</span> <span class="token keyword">READ</span> ONLY<span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">DATABASE</span> RECOVER MANAGED STANDBY <span class="token keyword">DATABASE</span> <span class="token keyword">USING</span> <span class="token keyword">CURRENT</span> LOGFILE DISCONNECT <span class="token keyword">FROM</span> <span class="token keyword">SESSION</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在新 standby 备库上应用完日志后，就可以进行主备库的 switchover 操作了。</li></ul><h3 id="snapshot-standby" tabindex="-1"><a class="header-anchor" href="#snapshot-standby"><span>Snapshot Standby</span></a></h3><p>snapshot standby 允许备库以读写方式打开。当切换回待机模式时，在读写模式下所做的所有更改都将丢失。这是通过使用闪回数据库实现的，但是备用数据库不需要显式启用闪回数据库来利用此功能，认为它的工作原理是一样的。如果您正在使用 RAC，请关闭除一个 RAC 实例之外的所有实例。确保实例处于 MOUNT 模式。</p><ul><li>关闭备库应用恢复模式（备）</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">DATABASE</span> RECOVER MANAGED STANDBY <span class="token keyword">DATABASE</span> CANCEL<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>把备库转为 Snapshot Standby</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> flashback_on <span class="token keyword">FROM</span> v$<span class="token keyword">database</span><span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">DATABASE</span> <span class="token keyword">CONVERT</span> <span class="token keyword">TO</span> <span class="token keyword">SNAPSHOT</span> STANDBY<span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">DATABASE</span> <span class="token keyword">OPEN</span><span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> flashback_on <span class="token keyword">FROM</span> v$<span class="token keyword">database</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>把备库转回 Physical Standby</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SHUTDOWN</span> IMMEDIATE<span class="token punctuation">;</span>
STARTUP MOUNT<span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">DATABASE</span> <span class="token keyword">CONVERT</span> <span class="token keyword">TO</span> PHYSICAL STANDBY<span class="token punctuation">;</span>
<span class="token keyword">SHUTDOWN</span> IMMEDIATE<span class="token punctuation">;</span>
STARTUP NOMOUNT<span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">DATABASE</span> MOUNT STANDBY <span class="token keyword">DATABASE</span><span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">DATABASE</span> RECOVER MANAGED STANDBY <span class="token keyword">DATABASE</span> <span class="token keyword">USING</span> <span class="token keyword">CURRENT</span> LOGFILE DISCONNECT <span class="token keyword">FROM</span> <span class="token keyword">SESSION</span><span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> flashback_on <span class="token keyword">FROM</span> v$<span class="token keyword">database</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="data-guard-broker" tabindex="-1"><a class="header-anchor" href="#data-guard-broker"><span>Data Guard Broker</span></a></h2><h3 id="配置-broker" tabindex="-1"><a class="header-anchor" href="#配置-broker"><span>配置 Broker</span></a></h3><ul><li>启用 Broker（主、备）</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> SYSTEM <span class="token keyword">SET</span> dg_broker_start<span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>登录 broker（主）</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>dgmgrl sys/Password1@testdb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>注册 broker（主）</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>CREATE CONFIGURATION abelit_dg_config AS PRIMARY DATABASE IS testdb CONNECT IDENTIFIER IS testdb<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>添加备库信息（主）</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>ADD DATABASE testdbadg AS CONNECT IDENTIFIER IS testdbadg MAINTAINED AS PHYSICAL<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>启用新配置信息（主）</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>ENABLE CONFIGURATION<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="broker-相关查询" tabindex="-1"><a class="header-anchor" href="#broker-相关查询"><span>Broker 相关查询</span></a></h3><ul><li>查看配置信息</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>SHOW CONFIGURATION<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>查看数据库</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>SHOW DATABASE testdbadg<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="主备切换-switchover-1" tabindex="-1"><a class="header-anchor" href="#主备切换-switchover-1"><span>主备切换(Switchover)</span></a></h3><ul><li>登录 broker（主）</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>dgmgrl sys/Password1@testdb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>主库备切换</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>SWITCHOVER TO testdbadg<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="故障转移-failover-1" tabindex="-1"><a class="header-anchor" href="#故障转移-failover-1"><span>故障转移(Failover)</span></a></h3><p>当主库故障，无法使用时，把备库转为主库。</p><ul><li>登录 broker（备）</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>dgmgrl sys/Password1@testdbadg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>备库升为主库</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>FAILOVER TO testdbadg<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="闪回数据库-1" tabindex="-1"><a class="header-anchor" href="#闪回数据库-1"><span>闪回数据库</span></a></h3><p>如果启用了 flashback，在进行故障转移后，可以把原来的主库转为备库。</p><ul><li>登录 broker（主）</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>dgmgrl sys/Password1@testdbadg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>主库转为备库</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>REINSTATE DATABASE testdb<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="snapshot-standby-1" tabindex="-1"><a class="header-anchor" href="#snapshot-standby-1"><span>Snapshot Standby</span></a></h3><p>snapshot standby 允许备库以读写方式打开。当切换回待机模式时，在读写模式下所做的所有更改都将丢失。这是通过使用闪回数据库实现的，但是备用数据库不需要显式启用闪回数据库来利用此功能，认为它的工作原理是一样的。</p><ul><li>登录 broker（主）</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>dgmgrl sys/Password1@testdb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>把备库转为 Snapshot Standby</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>CONVERT DATABASE testdbadg TO SNAPSHOT STANDBY<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>把备库转回 Physical Standby</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>CONVERT DATABASE testdbadg TO PHYSICAL STANDBY<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="重建备库" tabindex="-1"><a class="header-anchor" href="#重建备库"><span>重建备库</span></a></h2><ul><li>重建备库脚本</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 1) Cleanup the old instance.</span>
sqlplus / as sysdba <span class="token operator">&lt;&lt;</span><span class="token string">EOF
SHUTDOWN IMMEDIATE;
EXIT;
EOF</span>

<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /data/oracle/oradata/testdb
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /u01/app/oracle/fast_recovery_area/testdb
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /u01/app/oracle/fast_recovery_area/TESTDB
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /u01/app/oracle/admin/testdb/adump
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /data/oracle/oradata/testdb
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /u01/app/oracle/fast_recovery_area/testdb
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /u01/app/oracle/fast_recovery_area/TESTDB
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /u01/app/oracle/admin/testdb/adump

<span class="token builtin class-name">export</span> <span class="token assign-left variable">ORACLE_SID</span><span class="token operator">=</span>testdb
sqlplus / as sysdba <span class="token operator">&lt;&lt;</span><span class="token string">EOF
STARTUP NOMOUNT PFILE=&#39;/tmp/inittestdb.ora&#39;;
EXIT;
EOF</span>

<span class="token comment"># 2) Connect to RMAN. Duplicate the database.</span>
rman TARGET sys/Password1@testdb AUXILIARY sys/Password1@testdb <span class="token operator">&lt;&lt;</span><span class="token string">EOF
DUPLICATE TARGET DATABASE
  FOR STANDBY
  FROM ACTIVE DATABASE
  DORECOVER
  SPFILE
    SET db_unique_name=&#39;TESTDB&#39; COMMENT &#39;Is standby&#39;
  NOFILENAMECHECK;
EOF</span>

<span class="token comment"># 3) Connect to DGMDRL on the current primary. Enable the new standby.</span>
dgmgrl sys/Password1@testdb <span class="token operator">&lt;&lt;</span><span class="token string">EOF
DGMGRL&gt; ENABLE DATABASE testdb;
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dg-数据同步测试" tabindex="-1"><a class="header-anchor" href="#dg-数据同步测试"><span>DG 数据同步测试</span></a></h2><h3 id="pdb" tabindex="-1"><a class="header-anchor" href="#pdb"><span>PDB</span></a></h3><h3 id="表与数据" tabindex="-1"><a class="header-anchor" href="#表与数据"><span>表与数据</span></a></h3>`,126),T=s("div",{class:"language-sql line-numbers-mode","data-ext":"sql","data-title":"sql"},[s("pre",{class:"language-sql"},[s("code",null,[s("span",{class:"token keyword"},"create"),n(),s("span",{class:"token keyword"},"user"),n(" abelit identified "),s("span",{class:"token keyword"},"by"),n(),s("span",{class:"token string"},'"abelit"'),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token keyword"},"grant"),n(" dba "),s("span",{class:"token keyword"},"to"),n(" abelit"),s("span",{class:"token punctuation"},";"),n(`

`),s("span",{class:"token keyword"},"create"),n(),s("span",{class:"token keyword"},"table"),n(" abelit"),s("span",{class:"token punctuation"},"."),n("users"),s("span",{class:"token punctuation"},"("),n("id number "),s("span",{class:"token keyword"},"primary"),n(),s("span",{class:"token keyword"},"key"),s("span",{class:"token punctuation"},","),n(" name varchar2"),s("span",{class:"token punctuation"},"("),s("span",{class:"token number"},"100"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),n(`

`),s("span",{class:"token keyword"},"insert"),n(),s("span",{class:"token keyword"},"into"),n(" abelit"),s("span",{class:"token punctuation"},"."),n("users "),s("span",{class:"token keyword"},"values"),s("span",{class:"token punctuation"},"("),s("span",{class:"token number"},"1"),s("span",{class:"token punctuation"},","),s("span",{class:"token string"},"'mongo'"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token keyword"},"insert"),n(),s("span",{class:"token keyword"},"into"),n(" abelit"),s("span",{class:"token punctuation"},"."),n("users "),s("span",{class:"token keyword"},"values"),s("span",{class:"token punctuation"},"("),s("span",{class:"token number"},"2"),s("span",{class:"token punctuation"},","),s("span",{class:"token string"},"'redis'"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token keyword"},"insert"),n(),s("span",{class:"token keyword"},"into"),n(" abelit"),s("span",{class:"token punctuation"},"."),n("users "),s("span",{class:"token keyword"},"values"),s("span",{class:"token punctuation"},"("),s("span",{class:"token number"},"3"),s("span",{class:"token punctuation"},","),s("span",{class:"token string"},"'gauss'"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token keyword"},"insert"),n(),s("span",{class:"token keyword"},"into"),n(" abelit"),s("span",{class:"token punctuation"},"."),n("users "),s("span",{class:"token keyword"},"values"),s("span",{class:"token punctuation"},"("),s("span",{class:"token number"},"4"),s("span",{class:"token punctuation"},","),s("span",{class:"token string"},"'postgres'"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token keyword"},"commit"),s("span",{class:"token punctuation"},";"),n(`

`),s("span",{class:"token keyword"},"update"),n(" abelit"),s("span",{class:"token punctuation"},"."),n("users "),s("span",{class:"token keyword"},"set"),n(" name"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},"'mysql'"),n(),s("span",{class:"token keyword"},"where"),n(" id"),s("span",{class:"token operator"},"="),s("span",{class:"token number"},"3"),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token keyword"},"commit"),s("span",{class:"token punctuation"},";"),n(`

`),s("span",{class:"token keyword"},"delete"),n(),s("span",{class:"token keyword"},"from"),n(" abelit"),s("span",{class:"token punctuation"},"."),n("users"),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token keyword"},"commit"),s("span",{class:"token punctuation"},";"),n(`

`),s("span",{class:"token keyword"},"select"),n(),s("span",{class:"token operator"},"*"),n(),s("span",{class:"token keyword"},"from"),n(" abelit"),s("span",{class:"token punctuation"},"."),n("users"),s("span",{class:"token punctuation"},";"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),_=s("div",{class:"language-sql line-numbers-mode","data-ext":"sql","data-title":"sql"},[s("pre",{class:"language-sql"},[s("code",null,[s("span",{class:"token keyword"},"alter"),n(" pluggable "),s("span",{class:"token keyword"},"database"),n(),s("span",{class:"token keyword"},"all"),n(),s("span",{class:"token keyword"},"open"),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token keyword"},"alter"),n(),s("span",{class:"token keyword"},"session"),n(),s("span",{class:"token keyword"},"set"),n(" container"),s("span",{class:"token operator"},"="),n("testpdb"),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token keyword"},"create"),n(),s("span",{class:"token keyword"},"user"),n(" abelit identified "),s("span",{class:"token keyword"},"by"),n(),s("span",{class:"token string"},'"abelit"'),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token keyword"},"grant"),n(" dba "),s("span",{class:"token keyword"},"to"),n(" abelit"),s("span",{class:"token punctuation"},";"),n(`

`),s("span",{class:"token keyword"},"create"),n(),s("span",{class:"token keyword"},"table"),n(" abelit"),s("span",{class:"token punctuation"},"."),n("users"),s("span",{class:"token punctuation"},"("),n("id number "),s("span",{class:"token keyword"},"primary"),n(),s("span",{class:"token keyword"},"key"),s("span",{class:"token punctuation"},","),n(" name varchar2"),s("span",{class:"token punctuation"},"("),s("span",{class:"token number"},"100"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),n(`

`),s("span",{class:"token keyword"},"insert"),n(),s("span",{class:"token keyword"},"into"),n(" abelit"),s("span",{class:"token punctuation"},"."),n("users "),s("span",{class:"token keyword"},"values"),s("span",{class:"token punctuation"},"("),s("span",{class:"token number"},"1"),s("span",{class:"token punctuation"},","),s("span",{class:"token string"},"'mongo'"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token keyword"},"insert"),n(),s("span",{class:"token keyword"},"into"),n(" abelit"),s("span",{class:"token punctuation"},"."),n("users "),s("span",{class:"token keyword"},"values"),s("span",{class:"token punctuation"},"("),s("span",{class:"token number"},"2"),s("span",{class:"token punctuation"},","),s("span",{class:"token string"},"'redis'"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token keyword"},"insert"),n(),s("span",{class:"token keyword"},"into"),n(" abelit"),s("span",{class:"token punctuation"},"."),n("users "),s("span",{class:"token keyword"},"values"),s("span",{class:"token punctuation"},"("),s("span",{class:"token number"},"3"),s("span",{class:"token punctuation"},","),s("span",{class:"token string"},"'gauss'"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token keyword"},"insert"),n(),s("span",{class:"token keyword"},"into"),n(" abelit"),s("span",{class:"token punctuation"},"."),n("users "),s("span",{class:"token keyword"},"values"),s("span",{class:"token punctuation"},"("),s("span",{class:"token number"},"4"),s("span",{class:"token punctuation"},","),s("span",{class:"token string"},"'postgres'"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token keyword"},"commit"),s("span",{class:"token punctuation"},";"),n(`

`),s("span",{class:"token keyword"},"update"),n(" abelit"),s("span",{class:"token punctuation"},"."),n("users "),s("span",{class:"token keyword"},"set"),n(" name"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},"'mysql'"),n(),s("span",{class:"token keyword"},"where"),n(" id"),s("span",{class:"token operator"},"="),s("span",{class:"token number"},"3"),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token keyword"},"commit"),s("span",{class:"token punctuation"},";"),n(`

`),s("span",{class:"token keyword"},"delete"),n(),s("span",{class:"token keyword"},"from"),n(" abelit"),s("span",{class:"token punctuation"},"."),n("users"),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token keyword"},"commit"),s("span",{class:"token punctuation"},";"),n(`

`),s("span",{class:"token keyword"},"select"),n(),s("span",{class:"token operator"},"*"),n(),s("span",{class:"token keyword"},"from"),n(" abelit"),s("span",{class:"token punctuation"},"."),n("users"),s("span",{class:"token punctuation"},";"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),O=s("h2",{id:"安装脚本",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#安装脚本"},[s("span",null,"安装脚本")])],-1),R=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token shebang important"},"#!/bin/bash"),n(`

`),s("span",{class:"token comment"},"############ Author begin #######################"),n(`
`),s("span",{class:"token comment"},"## Author: Ableit"),n(`
`),s("span",{class:"token comment"},"## Date: 2022-07-20"),n(`
`),s("span",{class:"token comment"},"## Desc: Install Oracle Data Guard automatically."),n(`
`),s("span",{class:"token comment"},"############ Author end #########################"),n(`

`),s("span",{class:"token comment"},"############ Env & Virables begin ###############"),n(`
`),s("span",{class:"token comment"},"### custom settings begin ###"),n(`
`),s("span",{class:"token comment"},"## primary database"),n(`
`),s("span",{class:"token assign-left variable"},"PRIMARY_OS_HOSTNAME"),s("span",{class:"token operator"},"="),n(`testdb-node01
`),s("span",{class:"token assign-left variable"},"PRIMARY_OS_IPADDR"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"10.10.12.216"'),n(`
`),s("span",{class:"token assign-left variable"},"PRIMARY_OS_ORACLE_PASSWORD"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"YsDB_GreatMen2022"'),n(`

`),s("span",{class:"token assign-left variable"},"PRIMARY_ORACLE_SYS_PASSWORD"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"YsDB_GreatMen2022"'),n(`
`),s("span",{class:"token assign-left variable"},"PRIMARY_ORACLE_HOME"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"/u01/app/oracle/product/12.2.0.1/db_1"'),n(`
`),s("span",{class:"token assign-left variable"},"PRIMARY_ORACLE_ADUMP"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"/u01/app/oracle/admin/testcdb/adump"'),n(`
`),s("span",{class:"token assign-left variable"},"PRIMARY_ORACLE_DATA_DIR"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"/data/oracle/oradata/testcdb"'),n(`
`),s("span",{class:"token assign-left variable"},"PRIMARY_ORACLE_RECOVERY_DIR"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"/data/app/oracle/fast_recovery_area"'),n(`
`),s("span",{class:"token assign-left variable"},"PRIMARY_ORACLE_LOG_DIR"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"/data/oracle/oradata/testcdb"'),n(`
`),s("span",{class:"token assign-left variable"},"PRIMARY_ORACLE_LOG_SIZE"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"50M"'),n(`
`),s("span",{class:"token assign-left variable"},"PRIMARY_ORACLE_UNQNAME"),s("span",{class:"token operator"},"="),n(`testcdb
`),s("span",{class:"token assign-left variable"},"PRIMARY_ORACLE_SID"),s("span",{class:"token operator"},"="),n(`testcdb
`),s("span",{class:"token assign-left variable"},"PRIMARY_ORACLE_TNSNAME"),s("span",{class:"token operator"},"="),n(`PRI_TESTCDB

`),s("span",{class:"token comment"},"## standby database"),n(`
`),s("span",{class:"token assign-left variable"},"STANDBY_OS_HOSTNAME"),s("span",{class:"token operator"},"="),n(`testdb-node02
`),s("span",{class:"token assign-left variable"},"STANDBY_OS_IPADDR"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"10.10.12.217"'),n(`
`),s("span",{class:"token assign-left variable"},"STANDBY_OS_ORACLE_PASSWORD"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"YsDB_GreatMen2022"'),n(`

`),s("span",{class:"token assign-left variable"},"STANDBY_ORACLE_SYS_PASSWORD"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"YsDB_GreatMen2022"'),n(`
`),s("span",{class:"token assign-left variable"},"STANDBY_ORACLE_HOME"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"/u01/app/oracle/product/12.2.0.1/db_1"'),n(`
`),s("span",{class:"token assign-left variable"},"STANDBY_ORACLE_ADUMP"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"/u01/app/oracle/admin/testcdb/adump"'),n(`
`),s("span",{class:"token assign-left variable"},"STANDBY_ORACLE_DATA_DIR"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"/data/oracle/oradata/testcdb"'),n(`
`),s("span",{class:"token assign-left variable"},"STANDBY_ORACLE_RECOVERY_DIR"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"/data/app/oracle/fast_recovery_area"'),n(`
`),s("span",{class:"token assign-left variable"},"STANDBY_ORACLE_LOG_DIR"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"/data/oracle/oradata/testcdb"'),n(`
`),s("span",{class:"token assign-left variable"},"STANDBY_ORACLE_LOG_SIZE"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"50M"'),n(`
`),s("span",{class:"token assign-left variable"},"STANDBY_ORACLE_UNQNAME"),s("span",{class:"token operator"},"="),n(`testcdbstd
`),s("span",{class:"token assign-left variable"},"STANDBY_ORACLE_SID"),s("span",{class:"token operator"},"="),n(`testcdb
`),s("span",{class:"token assign-left variable"},"STANDBY_ORACLE_TNSNAME"),s("span",{class:"token operator"},"="),n(`STD_TESTCDB

`),s("span",{class:"token comment"},"### custom settings end ###"),n(`

`),s("span",{class:"token comment"},"### auto settings begin ###"),n(`

`),s("span",{class:"token comment"},"### auto settings end ###"),n(`
`),s("span",{class:"token comment"},"############ Env & Virables end #################"),n(`


`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"InstallPrimary"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Updating hostname ..."'),n(`
hostnamectl set-hostname `),s("span",{class:"token variable"},"${PRIMARY_OS_HOSTNAME}"),n(`

`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Updating hosts ..."'),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"${PRIMARY_OS_IPADDR}"),n("  "),s("span",{class:"token variable"},"${PRIMARY_OS_HOSTNAME}"),n('"')]),n(),s("span",{class:"token operator"},">>"),n(` /etc/hosts
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"${STANDBY_OS_IPADDR}"),n("  "),s("span",{class:"token variable"},"${STANDBY_OS_HOSTNAME}"),n('"')]),n(),s("span",{class:"token operator"},">>"),n(` /etc/hosts

`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Enabling archive log and force logging ..."'),n(`
`),s("span",{class:"token function"},"su"),n(" - oracle "),s("span",{class:"token operator"},"<<"),n(),s("span",{class:"token string"},`OUT
sqlplus / as sysdba <<SQL
SHUTDOWN IMMEDIATE;
STARTUP MOUNT;
ALTER DATABASE ARCHIVELOG;
ALTER DATABASE OPEN;
ALTER DATABASE FORCE LOGGING;
ALTER DATABASE FLASHBACK ON;
ALTER SYSTEM SWITCH LOGFILE;
SQL
OUT`),n(`

`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Adding standby log group in primary database ..."'),n(`
`),s("span",{class:"token function"},"su"),n(" - oracle "),s("span",{class:"token operator"},"<<"),n(),s("span",{class:"token string"},[n(`OUT
sqlplus / as sysdba <<SQL
ALTER DATABASE ADD STANDBY LOGFILE THREAD 1 GROUP 10 ('`),s("span",{class:"token variable"},"${PRIMARY_ORACLE_LOG_DIR}"),n("/standby_redo01.log') SIZE "),s("span",{class:"token variable"},"${PRIMARY_ORACLE_LOG_SIZE}"),n(`;
ALTER DATABASE ADD STANDBY LOGFILE THREAD 1 GROUP 11 ('`),s("span",{class:"token variable"},"${PRIMARY_ORACLE_LOG_DIR}"),n("/standby_redo02.log') SIZE "),s("span",{class:"token variable"},"${PRIMARY_ORACLE_LOG_SIZE}"),n(`;
ALTER DATABASE ADD STANDBY LOGFILE THREAD 1 GROUP 12 ('`),s("span",{class:"token variable"},"${PRIMARY_ORACLE_LOG_DIR}"),n("/standby_redo03.log') SIZE "),s("span",{class:"token variable"},"${PRIMARY_ORACLE_LOG_SIZE}"),n(`;
ALTER DATABASE ADD STANDBY LOGFILE THREAD 1 GROUP 13 ('`),s("span",{class:"token variable"},"${PRIMARY_ORACLE_LOG_DIR}"),n("/standby_redo04.log') SIZE "),s("span",{class:"token variable"},"${PRIMARY_ORACLE_LOG_SIZE}"),n(`;
SQL
OUT`)]),n(`

`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Setting instance parameter ..."'),n(`
`),s("span",{class:"token function"},"su"),n(" - oracle "),s("span",{class:"token operator"},"<<"),n(),s("span",{class:"token string"},[n(`OUT
sqlplus / as sysdba <<SQL
ALTER SYSTEM SET STANDBY_FILE_MANAGEMENT=AUTO SCOPE=SPFILE;
ALTER SYSTEM SET log_archive_config='dg_config=(`),s("span",{class:"token variable"},"${PRIMARY_ORACLE_UNQNAME}"),n(","),s("span",{class:"token variable"},"${STANDBY_ORACLE_UNQNAME}"),n(`)' SCOPE=SPFILE;
-- ALTER SYSTEM SET log_archive_dest_1='location=use_db_recovery_file_dest valid_for=(all_logfiles,all_roles) db_unique_name=`),s("span",{class:"token variable"},"${PRIMARY_ORACLE_UNQNAME}"),n(`' SCOPE=SPFILE;
ALTER SYSTEM SET log_archive_dest_2='service=`),s("span",{class:"token variable"},"${STANDBY_ORACLE_TNSNAME}"),n(" async valid_for=(online_logfiles,primary_role) db_unique_name="),s("span",{class:"token variable"},"${STANDBY_ORACLE_UNQNAME}"),n(`' SCOPE=SPFILE;
ALTER SYSTEM SET fal_server='`),s("span",{class:"token variable"},"${STANDBY_ORACLE_TNSNAME}"),n(`' SCOPE=SPFILE;
-- ALTER SYSTEM SET db_file_name_convert='`),s("span",{class:"token variable"},"${PRIMARY_ORACLE_DATA_DIR}"),n("','"),s("span",{class:"token variable"},"${STANDBY_ORACLE_DATA_DIR}"),n(`' SCOPE=SPFILE;
-- ALTER SYSTEM SET log_file_name_convert='`),s("span",{class:"token variable"},"${PRIMARY_ORACLE_LOG_DIR}"),n("','"),s("span",{class:"token variable"},"${STANDBY_ORACLE_LOG_DIR}"),n(`' SCOPE=SPFILE;
shutdown immediate;
startup;
SQL
OUT`)]),n(`

`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Configuring tnsnames.ora ..."'),n(`
`),s("span",{class:"token function"},"su"),n(" - oracle "),s("span",{class:"token operator"},"<<"),n(),s("span",{class:"token string"},[n(`OUT
cat >> `),s("span",{class:"token variable"},"${PRIMARY_ORACLE_HOME}"),n(`/network/admin/tnsnames.ora <<EOF
`),s("span",{class:"token variable"},"${PRIMARY_ORACLE_TNSNAME}"),n(` =
  (DESCRIPTION =
    (ADDRESS_LIST =
      (ADDRESS = (PROTOCOL = TCP)(HOST = `),s("span",{class:"token variable"},"${PRIMARY_OS_HOSTNAME}"),n(`)(PORT = 1521))
    )
    (CONNECT_DATA =
      (SID = `),s("span",{class:"token variable"},"${PRIMARY_ORACLE_SID}"),n(`)
    )
  )

`),s("span",{class:"token variable"},"${STANDBY_ORACLE_TNSNAME}"),n(` =
  (DESCRIPTION =
    (ADDRESS_LIST =
      (ADDRESS = (PROTOCOL = TCP)(HOST = `),s("span",{class:"token variable"},"${STANDBY_OS_HOSTNAME}"),n(`)(PORT = 1521))
    )
    (CONNECT_DATA =
      (SID = `),s("span",{class:"token variable"},"${STANDBY_ORACLE_SID}"),n(`)
    )
  )
EOF
OUT`)]),n(`


`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Configuring static listener.ora ..."'),n(`
`),s("span",{class:"token function"},"su"),n(" - oracle "),s("span",{class:"token operator"},"<<"),n(),s("span",{class:"token string"},[n(`OUT
cat >> `),s("span",{class:"token variable"},"${PRIMARY_ORACLE_HOME}"),n(`/network/admin/listener.ora <<EOF
LISTENER =
  (DESCRIPTION_LIST =
    (DESCRIPTION =
      (ADDRESS = (PROTOCOL = TCP)(HOST = `),s("span",{class:"token variable"},"${PRIMARY_OS_HOSTNAME}"),n(`)(PORT = 1521))
      (ADDRESS = (PROTOCOL = IPC)(KEY = EXTPROC1521))
    )
  )

SID_LIST_LISTENER =
  (SID_LIST =
    (SID_DESC =
      (GLOBAL_DBNAME = `),s("span",{class:"token variable"},"${PRIMARY_ORACLE_UNQNAME}"),n(`_DGMGRL)
      (ORACLE_HOME = `),s("span",{class:"token variable"},"${PRIMARY_ORACLE_HOME}"),n(`)
      (SID_NAME = `),s("span",{class:"token variable"},"${PRIMARY_ORACLE_SID}"),n(`)
      (ENVS="TNS_ADMIN=`),s("span",{class:"token variable"},"${PRIMARY_ORACLE_HOME}"),n(`/network/admin")
    )
  )

ADR_BASE_LISTENER = /u01/app/oracle
EOF

lsnrctl stop
lsnrctl start
OUT`)]),n(`
`),s("span",{class:"token punctuation"},"}"),n(`



`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"InstallStandby"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Updating hostname ..."'),n(`
hostnamectl set-hostname `),s("span",{class:"token variable"},"${STANDBY_OS_HOSTNAME}"),n(`

`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Updating hosts ..."'),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"${PRIMARY_OS_IPADDR}"),n("  "),s("span",{class:"token variable"},"${PRIMARY_OS_HOSTNAME}"),n('"')]),n(),s("span",{class:"token operator"},">>"),n(` /etc/hosts
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"${STANDBY_OS_IPADDR}"),n("  "),s("span",{class:"token variable"},"${STANDBY_OS_HOSTNAME}"),n('"')]),n(),s("span",{class:"token operator"},">>"),n(` /etc/hosts

`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Creating initial pfile ..."'),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n(`"*.db_name='`),s("span",{class:"token variable"},"${STANDBY_ORACLE_SID}"),n(`'"`)]),n(),s("span",{class:"token operator"},">"),n(" /tmp/init"),s("span",{class:"token variable"},"${STANDBY_ORACLE_SID}"),n(`.ora

`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Creating directory ..."'),n(`
`),s("span",{class:"token function"},"su"),n(" - oracle "),s("span",{class:"token operator"},"<<"),n(),s("span",{class:"token string"},[n(`OUT
mkdir -p `),s("span",{class:"token variable"},"${STANDBY_ORACLE_ADUMP}"),n(`
mkdir -p `),s("span",{class:"token variable"},"${STANDBY_ORACLE_DATA_DIR}"),n(`
mkdir -p `),s("span",{class:"token variable"},"${STANDBY_ORACLE_RECOVERY_DIR}"),n(`
OUT`)]),n(`

`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Creating password file ..."'),n(`
`),s("span",{class:"token function"},"su"),n(" - oracle "),s("span",{class:"token operator"},"<<"),n(),s("span",{class:"token string"},[n(`OUT
orapwd file=`),s("span",{class:"token variable"},"${STANDBY_ORACLE_HOME}"),n("/dbs/orapw"),s("span",{class:"token variable"},"${STANDBY_ORACLE_SID}"),n(" password="),s("span",{class:"token variable"},"${STANDBY_ORACLE_SYS_PASSWORD}"),n(` entries=10
OUT`)]),n(`

`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Configuring tnsnames.ora ..."'),n(`
`),s("span",{class:"token function"},"su"),n(" - oracle "),s("span",{class:"token operator"},"<<"),n(),s("span",{class:"token string"},[n(`OUT
cat >> `),s("span",{class:"token variable"},"${STANDBY_ORACLE_HOME}"),n(`/network/admin/tnsnames.ora <<EOF
`),s("span",{class:"token variable"},"${PRIMARY_ORACLE_TNSNAME}"),n(` =
  (DESCRIPTION =
    (ADDRESS_LIST =
      (ADDRESS = (PROTOCOL = TCP)(HOST = `),s("span",{class:"token variable"},"${PRIMARY_OS_HOSTNAME}"),n(`)(PORT = 1521))
    )
    (CONNECT_DATA =
      (SID = `),s("span",{class:"token variable"},"${PRIMARY_ORACLE_SID}"),n(`)
    )
  )

`),s("span",{class:"token variable"},"${STANDBY_ORACLE_TNSNAME}"),n(` =
  (DESCRIPTION =
    (ADDRESS_LIST =
      (ADDRESS = (PROTOCOL = TCP)(HOST = `),s("span",{class:"token variable"},"${STANDBY_OS_HOSTNAME}"),n(`)(PORT = 1521))
    )
    (CONNECT_DATA =
      (SID = `),s("span",{class:"token variable"},"${STANDBY_ORACLE_SID}"),n(`)
    )
  )
EOF
OUT`)]),n(`


`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Configuring static listener.ora ..."'),n(`
`),s("span",{class:"token function"},"su"),n(" - oracle "),s("span",{class:"token operator"},"<<"),n(),s("span",{class:"token string"},[n(`OUT
cat >> `),s("span",{class:"token variable"},"${STANDBY_ORACLE_HOME}"),n(`/network/admin/listener.ora <<EOF
LISTENER =
  (DESCRIPTION_LIST =
    (DESCRIPTION =
      (ADDRESS = (PROTOCOL = TCP)(HOST = `),s("span",{class:"token variable"},"${STANDBY_OS_HOSTNAME}"),n(`)(PORT = 1521))
      (ADDRESS = (PROTOCOL = IPC)(KEY = EXTPROC1521))
    )
  )

SID_LIST_LISTENER =
  (SID_LIST =
    (SID_DESC =
      (GLOBAL_DBNAME = `),s("span",{class:"token variable"},"${STANDBY_ORACLE_UNQNAME}"),n(`_DGMGRL)
      (ORACLE_HOME = `),s("span",{class:"token variable"},"${STANDBY_ORACLE_HOME}"),n(`)
      (SID_NAME = `),s("span",{class:"token variable"},"${STANDBY_ORACLE_SID}"),n(`)
      (ENVS="TNS_ADMIN=`),s("span",{class:"token variable"},"${STANDBY_ORACLE_HOME}"),n(`/network/admin")
    )
  )

ADR_BASE_LISTENER = /u01/app/oracle
EOF

lsnrctl stop
lsnrctl start
OUT`)]),n(`

`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Creating standby database by duplicate ..."'),n(`
`),s("span",{class:"token function"},"su"),n(" - oracle "),s("span",{class:"token operator"},"<<"),n(),s("span",{class:"token string"},[n(`OUT
export ORACLE_SID=`),s("span",{class:"token variable"},"${STANDBY_ORACLE_SID}"),n(`
sqlplus / as sysdba <<SQL
STARTUP NOMOUNT PFILE='/tmp/init`),s("span",{class:"token variable"},"${STANDBY_ORACLE_SID}"),n(`.ora';
quit;
SQL

rman TARGET sys/`),s("span",{class:"token variable"},"${STANDBY_ORACLE_SYS_PASSWORD}"),n("@"),s("span",{class:"token variable"},"${PRIMARY_ORACLE_TNSNAME}"),n(" AUXILIARY sys/"),s("span",{class:"token variable"},"${STANDBY_ORACLE_SYS_PASSWORD}"),n("@"),s("span",{class:"token variable"},"${STANDBY_ORACLE_TNSNAME}"),n(` <<EOF
DUPLICATE TARGET DATABASE
  FOR STANDBY
  FROM ACTIVE DATABASE
  DORECOVER
  SPFILE
    SET db_unique_name='`),s("span",{class:"token variable"},"${STANDBY_ORACLE_UNQNAME}"),n(`' COMMENT 'Is standby'
    SET log_archive_dest_2='service=`),s("span",{class:"token variable"},"${PRIMARY_ORACLE_TNSNAME}"),n(" async valid_for=(online_logfiles,primary_role) db_unique_name="),s("span",{class:"token variable"},"${PRIMARY_ORACLE_UNQNAME}"),n(`'
    SET FAL_SERVER='`),s("span",{class:"token variable"},"${PRIMARY_ORACLE_TNSNAME}"),n(`' COMMENT 'Is primary'
  NOFILENAMECHECK;
EOF

sqlplus / as sysdba <<SQL
ALTER DATABASE OPEN READ ONLY;
ALTER DATABASE RECOVER MANAGED STANDBY DATABASE USING CURRENT LOGFILE DISCONNECT FROM SESSION;
quit;
SQL
OUT`)]),n(`

`),s("span",{class:"token punctuation"},"}"),n(`


`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"InstallPrimaryBroker"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
`),s("span",{class:"token comment"},"# 启用broker(primary,standby),12.x+以上的版本,使用broker需要取消log_archive_dest_2设置"),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Enabling data guard broker ..."'),n(`
`),s("span",{class:"token function"},"su"),n(" - oracle "),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},`OUT
sqlplus / as sysdba <<SQL
ALTER SYSTEM SET dg_broker_start=false scope=both;
alter system reset log_archive_dest_2 scope=both;
ALTER SYSTEM SET dg_broker_start=true scope=both;
quit;
SQL
OUT`),n(`

`),s("span",{class:"token comment"},"# wait dg_broker_start parameter taking effect"),n(`
`),s("span",{class:"token function"},"sleep"),n(),s("span",{class:"token number"},"10"),n(`

`),s("span",{class:"token comment"},"# 配置borker"),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Configuring broker ..."'),n(`
`),s("span",{class:"token function"},"su"),n(" - oracle "),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`OUT
dgmgrl sys/`),s("span",{class:"token variable"},"${PRIMARY_ORACLE_SYS_PASSWORD}"),n("@"),s("span",{class:"token variable"},"${PRIMARY_ORACLE_TNSNAME}"),n(` <<DGEOF
CREATE CONFIGURATION `),s("span",{class:"token variable"},"${PRIMARY_ORACLE_UNQNAME}"),n("_dg_config AS PRIMARY DATABASE IS "),s("span",{class:"token variable"},"${PRIMARY_ORACLE_UNQNAME}"),n(" CONNECT IDENTIFIER IS "),s("span",{class:"token variable"},"${PRIMARY_ORACLE_TNSNAME}"),n(`;
ADD DATABASE `),s("span",{class:"token variable"},"${STANDBY_ORACLE_UNQNAME}"),n(" AS CONNECT IDENTIFIER IS "),s("span",{class:"token variable"},"${STANDBY_ORACLE_TNSNAME}"),n(` MAINTAINED AS PHYSICAL;
ENABLE CONFIGURATION;

SHOW CONFIGURATION;
SHOW DATABASE `),s("span",{class:"token variable"},"${PRIMARY_ORACLE_UNQNAME}"),n(`;
SHOW DATABASE `),s("span",{class:"token variable"},"${STANDBY_ORACLE_UNQNAME}"),n(`;
DGEOF
OUT`)]),n(`
`),s("span",{class:"token punctuation"},"}"),n(`


`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"InstallStandbyBroker"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
`),s("span",{class:"token comment"},"# 启用broker(primary,standby),12.x+以上的版本,使用broker需要取消log_archive_dest_2设置"),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Enabling data guard broker ..."'),n(`
`),s("span",{class:"token function"},"su"),n(" - oracle "),s("span",{class:"token operator"},"<<"),n(),s("span",{class:"token string"},`OUT
sqlplus / as sysdba <<SQL
ALTER SYSTEM SET dg_broker_start=false scope=both;
alter system reset log_archive_dest_2 scope=both;
ALTER SYSTEM SET dg_broker_start=true scope=both;
SQL
OUT`),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"Usage"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
`),s("span",{class:"token function"},"cat"),n(),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOF
Usage: `),s("span",{class:"token variable"},"$0"),n(` -h|--helpUsage, help message.
       `),s("span",{class:"token variable"},"$0"),n(` -p|--primary, configure primary database.
       `),s("span",{class:"token variable"},"$0"),n(` -s|--standby, configure standby database.
       `),s("span",{class:"token variable"},"$0"),n(` -b|--pribroker, enable primary broker.
       `),s("span",{class:"token variable"},"$0"),n(` -k|--stdbroker, enable standby broker.
EOF`)]),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token assign-left variable"},"ARGS"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"`"),n("getopt "),s("span",{class:"token parameter variable"},"-o"),n(" psbk "),s("span",{class:"token parameter variable"},"--long"),n(" help,primary,standby,pribroker,stdbroker "),s("span",{class:"token parameter variable"},"-n"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$0"),n('"')]),n("  -- "),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$@"),n('"')]),s("span",{class:"token variable"},"`")]),n(`
`),s("span",{class:"token builtin class-name"},"eval"),n(),s("span",{class:"token builtin class-name"},"set"),n(" --  "),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$ARGS"),n('"')]),n(`
`),s("span",{class:"token keyword"},"while"),n(),s("span",{class:"token boolean"},"true"),n(`
`),s("span",{class:"token keyword"},"do"),n(`
`),s("span",{class:"token keyword"},"case"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$1"),n('"')]),n(),s("span",{class:"token keyword"},"in"),n(`
    -h`),s("span",{class:"token operator"},"|"),n("--help"),s("span",{class:"token punctuation"},")"),n(`
    Usage
    `),s("span",{class:"token builtin class-name"},"shift"),n(),s("span",{class:"token number"},"2"),n(`
    `),s("span",{class:"token builtin class-name"},"break"),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    -p`),s("span",{class:"token operator"},"|"),n("--primary"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Configuring Primary Database ..."'),n(`
    `),s("span",{class:"token assign-left variable"},"STARTTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    InstallPrimary
    `),s("span",{class:"token assign-left variable"},"ENDTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"Configuring Primary Database Elapsed: $[ '),s("span",{class:"token variable"},"$ENDTIME"),n(" - "),s("span",{class:"token variable"},"$STARTTIME"),n(' ] s"')]),n(`
    `),s("span",{class:"token builtin class-name"},"shift"),n(),s("span",{class:"token number"},"2"),n(`
    `),s("span",{class:"token builtin class-name"},"break"),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    -s`),s("span",{class:"token operator"},"|"),n("--standby"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Configuring Standby Database ..."'),n(`
    `),s("span",{class:"token assign-left variable"},"STARTTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    InstallStandby
    `),s("span",{class:"token assign-left variable"},"ENDTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"Configuring Standby Database Elapsed: $[ '),s("span",{class:"token variable"},"$ENDTIME"),n(" - "),s("span",{class:"token variable"},"$STARTTIME"),n(' ] s"')]),n(`
    `),s("span",{class:"token builtin class-name"},"shift"),n(),s("span",{class:"token number"},"2"),n(`
    `),s("span",{class:"token builtin class-name"},"break"),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    -b`),s("span",{class:"token operator"},"|"),n("--pribroker"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Enbling primary broker ..."'),n(`
    `),s("span",{class:"token assign-left variable"},"STARTTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    InstallPrimaryBroker
    `),s("span",{class:"token assign-left variable"},"ENDTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"Enbling primary broker Elapsed: $[ '),s("span",{class:"token variable"},"$ENDTIME"),n(" - "),s("span",{class:"token variable"},"$STARTTIME"),n(' ] s"')]),n(`
    `),s("span",{class:"token builtin class-name"},"shift"),n(),s("span",{class:"token number"},"2"),n(`
    `),s("span",{class:"token builtin class-name"},"break"),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    -k`),s("span",{class:"token operator"},"|"),n("--stdbroker"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Enbling standby broker ..."'),n(`
    `),s("span",{class:"token assign-left variable"},"STARTTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    InstallStandbyBroker
    `),s("span",{class:"token assign-left variable"},"ENDTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"Enbling standby broker Elapsed: $[ '),s("span",{class:"token variable"},"$ENDTIME"),n(" - "),s("span",{class:"token variable"},"$STARTTIME"),n(' ] s"')]),n(`
    `),s("span",{class:"token builtin class-name"},"shift"),n(),s("span",{class:"token number"},"2"),n(`
    `),s("span",{class:"token builtin class-name"},"break"),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    *`),s("span",{class:"token punctuation"},")"),n(`
    Usage
    `),s("span",{class:"token builtin class-name"},"exit"),n(),s("span",{class:"token number"},"1"),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token keyword"},"esac"),n(`
`),s("span",{class:"token keyword"},"done"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),g=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token comment"},"################################## primary database ######################################################"),n(`
`),s("span",{class:"token comment"},"# 配置hostname与hosts"),n(`
hostnamectl set-hostname testdb-node01
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"10.10.12.216   testdb-node01"'),n(),s("span",{class:"token operator"},">>"),n(` /etc/hosts
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"10.10.12.217   testdb-node02"'),n(),s("span",{class:"token operator"},">>"),n(` /etc/hosts


`),s("span",{class:"token comment"},"# 开启归档和强制日志模式(primary)"),n(`
`),s("span",{class:"token function"},"su"),n(" - oracle "),s("span",{class:"token operator"},"<<"),n(),s("span",{class:"token string"},`OUT
sqlplus / as sysdba <<SQL
SHUTDOWN IMMEDIATE;
STARTUP MOUNT;
ALTER DATABASE ARCHIVELOG;
ALTER DATABASE OPEN;
ALTER DATABASE FORCE LOGGING;
ALTER DATABASE FLASHBACK ON;
ALTER SYSTEM SWITCH LOGFILE;
SQL
OUT`),n(`


`),s("span",{class:"token comment"},"# 创建Standby Redo日志(primary)"),n(`
`),s("span",{class:"token function"},"su"),n(" - oracle "),s("span",{class:"token operator"},"<<"),n(),s("span",{class:"token string"},`OUT
sqlplus / as sysdba <<SQL
ALTER DATABASE ADD STANDBY LOGFILE THREAD 1 GROUP 10 ('/data/oracle/oradata/testcdb/standby_redo01.log') SIZE 50M;
ALTER DATABASE ADD STANDBY LOGFILE THREAD 1 GROUP 11 ('/data/oracle/oradata/testcdb/standby_redo02.log') SIZE 50M;
ALTER DATABASE ADD STANDBY LOGFILE THREAD 1 GROUP 12 ('/data/oracle/oradata/testcdb/standby_redo03.log') SIZE 50M;
ALTER DATABASE ADD STANDBY LOGFILE THREAD 1 GROUP 13 ('/data/oracle/oradata/testcdb/standby_redo04.log') SIZE 50M;
SQL
OUT`),n(`

`),s("span",{class:"token comment"},"# 设置参数(primary)"),n(`
`),s("span",{class:"token function"},"su"),n(" - oracle "),s("span",{class:"token operator"},"<<"),n(),s("span",{class:"token string"},`OUT
sqlplus / as sysdba <<SQL
ALTER SYSTEM SET STANDBY_FILE_MANAGEMENT=AUTO SCOPE=SPFILE;
ALTER SYSTEM SET log_archive_config='dg_config=(testcdb,testcdbadg)' SCOPE=SPFILE;
-- ALTER SYSTEM SET log_archive_dest_1='location=use_db_recovery_file_dest valid_for=(all_logfiles,all_roles) db_unique_name=testcdb' SCOPE=SPFILE;
ALTER SYSTEM SET log_archive_dest_2='service=testcdbadg async valid_for=(online_logfiles,primary_role) db_unique_name=testcdbadg' SCOPE=SPFILE;
ALTER SYSTEM SET fal_server='testcdbadg' SCOPE=SPFILE;
-- ALTER SYSTEM SET db_file_name_convert='/data/oracle/oradata/testcdb','/data/oracle/oradata/testcdbadg' SCOPE=SPFILE;
-- ALTER SYSTEM SET log_file_name_convert='/data/oracle/oradata/testcdb','/data/oracle/oradata/testcdbadg' SCOPE=SPFILE;
shutdown immediate;
startup;
SQL
OUT`),n(`


`),s("span",{class:"token comment"},"# 配置tnsnames.ora(primary)"),n(`
`),s("span",{class:"token function"},"su"),n(" - oracle "),s("span",{class:"token operator"},"<<"),n(),s("span",{class:"token string"},[n(`OUT
cat >> \\`),s("span",{class:"token variable"},"$ORACLE_HOME"),n(`/network/admin/tnsnames.ora <<EOF
testcdb =
  (DESCRIPTION =
    (ADDRESS_LIST =
      (ADDRESS = (PROTOCOL = TCP)(HOST = testdb-node01)(PORT = 1521))
    )
    (CONNECT_DATA =
      (SID = testcdb)
    )
  )

testcdbadg =
  (DESCRIPTION =
    (ADDRESS_LIST =
      (ADDRESS = (PROTOCOL = TCP)(HOST = testdb-node02)(PORT = 1521))
    )
    (CONNECT_DATA =
      (SID = testcdb)
    )
  )
EOF
OUT`)]),n(`

`),s("span",{class:"token comment"},"# 配置listener.ora(primary)"),n(`
`),s("span",{class:"token function"},"su"),n(" - oracle "),s("span",{class:"token operator"},"<<"),n(),s("span",{class:"token string"},[n(`OUT
cat >> \\`),s("span",{class:"token variable"},"$ORACLE_HOME"),n(`/network/admin/listener.ora << EOF
LISTENER =
  (DESCRIPTION_LIST =
    (DESCRIPTION =
      (ADDRESS = (PROTOCOL = TCP)(HOST = testdb-node01)(PORT = 1521))
      (ADDRESS = (PROTOCOL = IPC)(KEY = EXTPROC1521))
    )
  )

SID_LIST_LISTENER =
  (SID_LIST =
    (SID_DESC =
      (GLOBAL_DBNAME = testcdb_DGMGRL)
      (ORACLE_HOME = /u01/app/oracle/product/12.2.0.1/db_1)
      (SID_NAME = testcdb)
      (ENVS="TNS_ADMIN=/u01/app/oracle/product/12.2.0.1/db_1/network/admin")
    )
  )

ADR_BASE_LISTENER = /u01/app/oracle
EOF
OUT`)]),n(`

`),s("span",{class:"token comment"},"# 重启监听(primary)"),n(`
`),s("span",{class:"token function"},"su"),n(" - oracle "),s("span",{class:"token operator"},"<<"),n(),s("span",{class:"token string"},`OUT
lsnrctl stop
lsnrctl start
OUT`),n(`


`),s("span",{class:"token comment"},"################################## standby database ######################################################"),n(`
`),s("span",{class:"token comment"},"# 配置hostname与hosts"),n(`
hostnamectl set-hostname testdb-node02
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"10.10.12.216   testdb-node01"'),n(),s("span",{class:"token operator"},">>"),n(` /etc/hosts
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"10.10.12.217   testdb-node02"'),n(),s("span",{class:"token operator"},">>"),n(` /etc/hosts

`),s("span",{class:"token comment"},"# 创建实例参数(standby)"),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},`"*.db_name='testcdb'"`),n(),s("span",{class:"token operator"},">"),n(` /tmp/inittestcdbadg.ora

`),s("span",{class:"token comment"},"# 创建目录(standby)"),n(`
`),s("span",{class:"token function"},"su"),n(" - oracle "),s("span",{class:"token operator"},"<<"),n(),s("span",{class:"token string"},`OUT
mkdir -p /u01/app/oracle/admin/testcdb/adump
mkdir -p /data/oracle/oradata/testcdb
mkdir -p /data/app/oracle/fast_recovery_area
OUT`),n(`

`),s("span",{class:"token comment"},"# 创建密码文件"),n(`
`),s("span",{class:"token function"},"su"),n(" - oracle "),s("span",{class:"token operator"},"<<"),n(),s("span",{class:"token string"},`OUT
orapwd file=/u01/app/oracle/product/12.2.0.1/db_1/dbs/orapwtestcdb password=YsDB_GreatMen2022 entries=10
OUT`),n(`

`),s("span",{class:"token comment"},"# 配置tnsnames.ora(standby)"),n(`
`),s("span",{class:"token function"},"su"),n(" - oracle "),s("span",{class:"token operator"},"<<"),n(),s("span",{class:"token string"},[n(`OUT
cat >> \\`),s("span",{class:"token variable"},"$ORACLE_HOME"),n(`/network/admin/tnsnames.ora <<EOF
testcdb =
  (DESCRIPTION =
    (ADDRESS_LIST =
      (ADDRESS = (PROTOCOL = TCP)(HOST = testdb-node01)(PORT = 1521))
    )
    (CONNECT_DATA =
      (SID = testcdb)
    )
  )

testcdbadg =
  (DESCRIPTION =
    (ADDRESS_LIST =
      (ADDRESS = (PROTOCOL = TCP)(HOST = testdb-node02)(PORT = 1521))
    )
    (CONNECT_DATA =
      (SID = testcdb)
    )
  )
EOF
OUT`)]),n(`

`),s("span",{class:"token comment"},"# 配置listener.ora(standby)"),n(`
`),s("span",{class:"token function"},"su"),n(" - oracle "),s("span",{class:"token operator"},"<<"),n(),s("span",{class:"token string"},[n(`OUT
cat >> \\`),s("span",{class:"token variable"},"$ORACLE_HOME"),n(`/network/admin/listener.ora << EOF
LISTENER =
  (DESCRIPTION_LIST =
    (DESCRIPTION =
      (ADDRESS = (PROTOCOL = TCP)(HOST = testdb-node02)(PORT = 1521))
      (ADDRESS = (PROTOCOL = IPC)(KEY = EXTPROC1521))
    )
  )

SID_LIST_LISTENER =
  (SID_LIST =
    (SID_DESC =
      (GLOBAL_DBNAME = testcdbadg_DGMGRL)
      (ORACLE_HOME = /u01/app/oracle/product/12.2.0.1/db_1)
      (SID_NAME = testcdb)
      (ENVS="TNS_ADMIN=/u01/app/oracle/product/12.2.0.1/db_1/network/admin")
    )
  )

ADR_BASE_LISTENER = /u01/app/oracle
EOF
OUT`)]),n(`

`),s("span",{class:"token comment"},"# 重启监听(primary)"),n(`
`),s("span",{class:"token function"},"su"),n(" - oracle "),s("span",{class:"token operator"},"<<"),n(),s("span",{class:"token string"},`OUT
lsnrctl stop
lsnrctl start
OUT`),n(`


`),s("span",{class:"token comment"},"# 复制数据库(standby)"),n(`
`),s("span",{class:"token function"},"su"),n(" - oracle "),s("span",{class:"token operator"},"<<"),n(),s("span",{class:"token string"},`OUT
export ORACLE_SID=testcdb
sqlplus / as sysdba <<SQL
STARTUP NOMOUNT PFILE='/tmp/inittestcdbadg.ora';
quit;
SQL

rman TARGET sys/YsDB_GreatMen2022@testcdb AUXILIARY sys/YsDB_GreatMen2022@testcdbadg <<EOF
DUPLICATE TARGET DATABASE
  FOR STANDBY
  FROM ACTIVE DATABASE
  DORECOVER
  SPFILE
    SET db_unique_name='testcdbadg' COMMENT 'Is standby'
    SET log_archive_dest_2='service=testcdb async valid_for=(online_logfiles,primary_role) db_unique_name=testcdb'
    SET FAL_SERVER='testcdb' COMMENT 'Is primary'
  NOFILENAMECHECK;
EOF

sqlplus / as sysdba <<SQL
ALTER DATABASE OPEN READ ONLY;
ALTER DATABASE RECOVER MANAGED STANDBY DATABASE USING CURRENT LOGFILE DISCONNECT FROM SESSION;
quit;
SQL
OUT`),n(`


`),s("span",{class:"token comment"},"# 启用broker(primary, standby)"),n(`
`),s("span",{class:"token function"},"su"),n(" - oracle "),s("span",{class:"token operator"},"<<"),n(),s("span",{class:"token string"},`OUT
sqlplus / as sysdba <<SQL
ALTER SYSTEM SET dg_broker_start=true scope=both;
quit;
SQL
OUT`),n(`

`),s("span",{class:"token comment"},"# # 重启broker(primary,standby),12.x+以上的版本,使用broker需要取消log_archive_dest_2设置"),n(`
`),s("span",{class:"token function"},"su"),n(" - oracle "),s("span",{class:"token operator"},"<<"),n(),s("span",{class:"token string"},`OUT
sqlplus / as sysdba <<SQL
ALTER SYSTEM SET dg_broker_start=false scope=both;
alter system reset log_archive_dest_2 scope=both;
ALTER SYSTEM SET dg_broker_start=true scope=both;
quit;
SQL
OUT`),n(`

`),s("span",{class:"token comment"},"# 配置borker(standby)"),n(`
`),s("span",{class:"token function"},"su"),n(" - oracle "),s("span",{class:"token operator"},"<<"),n(),s("span",{class:"token string"},`OUT
dgmgrl sys/YsDB_GreatMen2022@testcdb <<DGEOF
CREATE CONFIGURATION abelit_dg_config AS PRIMARY DATABASE IS testcdb CONNECT IDENTIFIER IS testcdb;
ADD DATABASE testcdbadg AS CONNECT IDENTIFIER IS testcdbadg MAINTAINED AS PHYSICAL;
ENABLE CONFIGURATION;

SHOW CONFIGURATION;
SHOW DATABASE testcdb;
SHOW DATABASE testcdbadg;
DGEOF
OUT`),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),D=c(`<h2 id="卸载-data-guard" tabindex="-1"><a class="header-anchor" href="#卸载-data-guard"><span>卸载 Data Guard</span></a></h2><h3 id="取消配置" tabindex="-1"><a class="header-anchor" href="#取消配置"><span>取消配置</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>alter system reset FAL_CLIENT<span class="token punctuation">;</span>
alter system reset FAL_SERVER<span class="token punctuation">;</span>
alter system reset LOG_ARCHIVE_CONFIG<span class="token punctuation">;</span>
alter system reset LOG_ARCHIVE_DEST_2<span class="token punctuation">;</span>
alter system reset LOG_ARCHIVE_DEST_STATE_2<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除-standby-日志组" tabindex="-1"><a class="header-anchor" href="#删除-standby-日志组"><span>删除 Standby 日志组</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>ALTER DATABASE DROP STANDBY LOGFILE GROUP <span class="token number">10</span><span class="token punctuation">;</span>
ALTER DATABASE DROP STANDBY LOGFILE GROUP <span class="token number">11</span><span class="token punctuation">;</span>
ALTER DATABASE DROP STANDBY LOGFILE GROUP <span class="token number">12</span><span class="token punctuation">;</span>
ALTER DATABASE DROP STANDBY LOGFILE GROUP <span class="token number">13</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="清理配置" tabindex="-1"><a class="header-anchor" href="#清理配置"><span>清理配置</span></a></h3><div class="hint-container tip"><p class="hint-container-title">清理如下信息配置</p><p>/etc/hosts</p><p>$ORACLE_HOME/network/admin/tnsnames.ora</p><p>$ORACLE_HOME/network/admin/listener.ora</p></div>`,7);function h(I,L){const t=r("CodeTabs");return p(),d("div",null,[b,i(t,{id:"250",data:[{id:"SQL1"},{id:"SQL2"}],active:0},{title0:a(({value:e,isActive:l})=>[n("SQL1")]),title1:a(({value:e,isActive:l})=>[n("SQL2")]),tab0:a(({value:e,isActive:l})=>[k]),tab1:a(({value:e,isActive:l})=>[v]),_:1}),m,i(t,{id:"560",data:[{id:"需要设置参数"},{id:"无需设置参数"}],active:0},{title0:a(({value:e,isActive:l})=>[n("需要设置参数")]),title1:a(({value:e,isActive:l})=>[n("无需设置参数")]),tab0:a(({value:e,isActive:l})=>[E]),tab1:a(({value:e,isActive:l})=>[A]),_:1}),S,i(t,{id:"1096",data:[{id:"11g-"},{id:"12c+"}],active:0},{title0:a(({value:e,isActive:l})=>[n("11g-")]),title1:a(({value:e,isActive:l})=>[n("12c+")]),tab0:a(({value:e,isActive:l})=>[T]),tab1:a(({value:e,isActive:l})=>[_]),_:1}),O,i(t,{id:"1107",data:[{id:"通用脚本"},{id:"12c+"}],active:0},{title0:a(({value:e,isActive:l})=>[n("通用脚本")]),title1:a(({value:e,isActive:l})=>[n("12c+")]),tab0:a(({value:e,isActive:l})=>[R]),tab1:a(({value:e,isActive:l})=>[g]),_:1}),D])}const C=o(u,[["render",h],["__file","dataguard.html.vue"]]),M=JSON.parse('{"path":"/guide/database/oracle/dataguard.html","title":"Data Guard","lang":"zh-CN","frontmatter":{"title":"Data Guard","description":"介绍 Oracle DataGuard 是 Oracle 自带的数据同步功能，基本原理是将日志文件从原数据库传输到目标数据库，然后在目标数据库上应用这些日志文件，从而使目标数据库与源数据库保持同步，是一种数据库级别的高可用性方案。 DataGuard 可以提供 Oracle 数据库的冗灾、数据保护、故障恢复等，实现数据库快速切换与灾难性恢复。在生产数据...","head":[["meta",{"property":"og:url","content":"https://github.com/abelit/abelit-datapeacock.git/guide/database/oracle/dataguard.html"}],["meta",{"property":"og:site_name","content":"数之雀"}],["meta",{"property":"og:title","content":"Data Guard"}],["meta",{"property":"og:description","content":"介绍 Oracle DataGuard 是 Oracle 自带的数据同步功能，基本原理是将日志文件从原数据库传输到目标数据库，然后在目标数据库上应用这些日志文件，从而使目标数据库与源数据库保持同步，是一种数据库级别的高可用性方案。 DataGuard 可以提供 Oracle 数据库的冗灾、数据保护、故障恢复等，实现数据库快速切换与灾难性恢复。在生产数据..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-11T14:06:18.000Z"}],["meta",{"property":"article:author","content":"Abelit"}],["meta",{"property":"article:modified_time","content":"2024-05-11T14:06:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Data Guard\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-11T14:06:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Abelit\\",\\"url\\":\\"https://github.com/abelit\\"}]}"]]},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"版本特性","slug":"版本特性","link":"#版本特性","children":[{"level":3,"title":"11.2 版本特性","slug":"_11-2-版本特性","link":"#_11-2-版本特性","children":[]}]},{"level":2,"title":"Oracle ADG 安装","slug":"oracle-adg-安装","link":"#oracle-adg-安装","children":[{"level":3,"title":"0.前提条件","slug":"_0-前提条件","link":"#_0-前提条件","children":[]},{"level":3,"title":"1.准备工作","slug":"_1-准备工作","link":"#_1-准备工作","children":[]},{"level":3,"title":"1.1 开启主库归档模式（主库）","slug":"_1-1-开启主库归档模式-主库","link":"#_1-1-开启主库归档模式-主库","children":[]},{"level":3,"title":"1.2 开启强制日志模式（主库）","slug":"_1-2-开启强制日志模式-主库","link":"#_1-2-开启强制日志模式-主库","children":[]},{"level":3,"title":"1.3 数据库参数（主库）","slug":"_1-3-数据库参数-主库","link":"#_1-3-数据库参数-主库","children":[]},{"level":3,"title":"1.4 配置监听、网络服务（主库）","slug":"_1-4-配置监听、网络服务-主库","link":"#_1-4-配置监听、网络服务-主库","children":[]},{"level":3,"title":"1.5 备库环境准备（备库）","slug":"_1-5-备库环境准备-备库","link":"#_1-5-备库环境准备-备库","children":[]},{"level":3,"title":"1.6 配置监听、网络服务（备库）","slug":"_1-6-配置监听、网络服务-备库","link":"#_1-6-配置监听、网络服务-备库","children":[]},{"level":3,"title":"2.创建备库（备份恢复）","slug":"_2-创建备库-备份恢复","link":"#_2-创建备库-备份恢复","children":[]},{"level":3,"title":"2.1 备份数据（主库）","slug":"_2-1-备份数据-主库","link":"#_2-1-备份数据-主库","children":[]},{"level":3,"title":"2.2 创建备库控制文件和参数文件（主库）","slug":"_2-2-创建备库控制文件和参数文件-主库","link":"#_2-2-创建备库控制文件和参数文件-主库","children":[]},{"level":3,"title":"2.3 传输备份数据（备库）","slug":"_2-3-传输备份数据-备库","link":"#_2-3-传输备份数据-备库","children":[]},{"level":3,"title":"2.4 恢复备份（备库）","slug":"_2-4-恢复备份-备库","link":"#_2-4-恢复备份-备库","children":[]},{"level":3,"title":"3.创建备库(DUPLICATE)","slug":"_3-创建备库-duplicate","link":"#_3-创建备库-duplicate","children":[]},{"level":3,"title":"3.1 创建备库控制文件和参数文件（主库）","slug":"_3-1-创建备库控制文件和参数文件-主库","link":"#_3-1-创建备库控制文件和参数文件-主库","children":[]},{"level":3,"title":"3.2 传输文件（备库）","slug":"_3-2-传输文件-备库","link":"#_3-2-传输文件-备库","children":[]},{"level":3,"title":"3.3 修改参数文件（备库）","slug":"_3-3-修改参数文件-备库","link":"#_3-3-修改参数文件-备库","children":[]},{"level":3,"title":"3.4 复制数据库（备库）","slug":"_3-4-复制数据库-备库","link":"#_3-4-复制数据库-备库","children":[]}]},{"level":2,"title":"Dataguard 管理","slug":"dataguard-管理","link":"#dataguard-管理","children":[{"level":3,"title":"启动和停止","slug":"启动和停止","link":"#启动和停止","children":[]},{"level":3,"title":"相关视图","slug":"相关视图","link":"#相关视图","children":[]},{"level":3,"title":"应用进程","slug":"应用进程","link":"#应用进程","children":[]},{"level":3,"title":"只读模式","slug":"只读模式","link":"#只读模式","children":[]},{"level":3,"title":"保护模式","slug":"保护模式","link":"#保护模式","children":[]},{"level":3,"title":"主备切换(Switchover)","slug":"主备切换-switchover","link":"#主备切换-switchover","children":[]},{"level":3,"title":"故障转移(Failover)","slug":"故障转移-failover","link":"#故障转移-failover","children":[]},{"level":3,"title":"闪回数据库","slug":"闪回数据库","link":"#闪回数据库","children":[]},{"level":3,"title":"Snapshot Standby","slug":"snapshot-standby","link":"#snapshot-standby","children":[]}]},{"level":2,"title":"Data Guard Broker","slug":"data-guard-broker","link":"#data-guard-broker","children":[{"level":3,"title":"配置 Broker","slug":"配置-broker","link":"#配置-broker","children":[]},{"level":3,"title":"Broker 相关查询","slug":"broker-相关查询","link":"#broker-相关查询","children":[]},{"level":3,"title":"主备切换(Switchover)","slug":"主备切换-switchover-1","link":"#主备切换-switchover-1","children":[]},{"level":3,"title":"故障转移(Failover)","slug":"故障转移-failover-1","link":"#故障转移-failover-1","children":[]},{"level":3,"title":"闪回数据库","slug":"闪回数据库-1","link":"#闪回数据库-1","children":[]},{"level":3,"title":"Snapshot Standby","slug":"snapshot-standby-1","link":"#snapshot-standby-1","children":[]}]},{"level":2,"title":"重建备库","slug":"重建备库","link":"#重建备库","children":[]},{"level":2,"title":"DG 数据同步测试","slug":"dg-数据同步测试","link":"#dg-数据同步测试","children":[{"level":3,"title":"PDB","slug":"pdb","link":"#pdb","children":[]},{"level":3,"title":"表与数据","slug":"表与数据","link":"#表与数据","children":[]}]},{"level":2,"title":"安装脚本","slug":"安装脚本","link":"#安装脚本","children":[]},{"level":2,"title":"卸载 Data Guard","slug":"卸载-data-guard","link":"#卸载-data-guard","children":[{"level":3,"title":"取消配置","slug":"取消配置","link":"#取消配置","children":[]},{"level":3,"title":"删除 Standby 日志组","slug":"删除-standby-日志组","link":"#删除-standby-日志组","children":[]},{"level":3,"title":"清理配置","slug":"清理配置","link":"#清理配置","children":[]}]}],"git":{"createdTime":1715436378000,"updatedTime":1715436378000,"contributors":[{"name":"ableit","email":"ychenid@live.com","commits":1}]},"readingTime":{"minutes":21.4,"words":6420},"filePathRelative":"guide/database/oracle/dataguard.md","localizedDate":"2024年5月11日","autoDesc":true,"excerpt":"<h2>介绍</h2>\\n<p>Oracle DataGuard 是 Oracle 自带的数据同步功能，基本原理是将日志文件从原数据库传输到目标数据库，然后在目标数据库上应用这些日志文件，从而使目标数据库与源数据库保持同步，是一种数据库级别的高可用性方案。</p>\\n<p>DataGuard 可以提供 Oracle 数据库的冗灾、数据保护、故障恢复等，实现数据库快速切换与灾难性恢复。在生产数据库的保证\\"事务一致性\\"时，使用生产库的物理全备份创建备库，备库会通过生产库传输过来的归档日志或重做条目自动维护备用数据库。</p>\\n<p>Oracle DataGuard 由一个 primary 数据库(生产数据库)及一个或多个 standby 数据库(最多 30 个)组成。组成 Data Guard 的数据库通过 Oracle Net 连接，并且有可以分布于不同地域。只要各库之间可以相互通信，它们的物理位置并没有什么限制，不受操作系统的限制。</p>"}');export{C as comp,M as data};
