import{_ as s}from"./mysql_ndb_cluster_overview-tkRitJow.js";import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as e,f as l}from"./app-DR5J2daJ.js";const t={},i=l('<h2 id="mysql-ndb-cluster" tabindex="-1"><a class="header-anchor" href="#mysql-ndb-cluster"><span>MySQL NDB Cluster</span></a></h2><h3 id="组件说明" tabindex="-1"><a class="header-anchor" href="#组件说明"><span>组件说明</span></a></h3><p>MySQL NDB Cluster 由管理节点、数据节点、SQL 节点组成：</p><ul><li>管理节点（NDB_MGMD/MGM）： 集群管理服务器用于管理集群的其他节点。我们可以从管理节点创建和配置新节点、重启、删除或备份集群上的节点。</li><li>数据节点（NDBD/NDB）：这是节点之间发生同步和数据复制过程的层。</li><li>SQL节点（MySQLD/API）：应用程序用来连接到数据库集群的接口服务器。</li></ul><h3 id="主机信息" tabindex="-1"><a class="header-anchor" href="#主机信息"><span>主机信息</span></a></h3><table><thead><tr><th>编号</th><th>IP 地址</th><th>角色</th><th>操作系统</th><th>内核版本</th><th>软件及版本</th></tr></thead><tbody><tr><td>1</td><td>10.10.12.210</td><td>管理节点</td><td>CentOS 7.9</td><td>3.10.0-1160.el7.x86_64</td><td>MySQL 8.0.34</td></tr><tr><td>2</td><td>10.10.12.211</td><td>数据节点</td><td>CentOS 7.9</td><td>3.10.0-1160.el7.x86_64</td><td>MySQL 8.0.34</td></tr><tr><td>3</td><td>10.10.12.212</td><td>数据节点</td><td>CentOS 7.9</td><td>3.10.0-1160.el7.x86_64</td><td>MySQL 8.0.34</td></tr><tr><td>4</td><td>10.10.12.213</td><td>SQL节点</td><td>CentOS 7.9</td><td>3.10.0-1160.el7.x86_64</td><td>MySQL 8.0.34</td></tr><tr><td>5</td><td>10.10.12.214</td><td>SQL节点</td><td>CentOS 7.9</td><td>3.10.0-1160.el7.x86_64</td><td>MySQL 8.0.34</td></tr></tbody></table><h3 id="拓扑结构" tabindex="-1"><a class="header-anchor" href="#拓扑结构"><span>拓扑结构</span></a></h3><figure><img src="'+s+`" alt="MySQL InnoDB Cluster with Keepalived" tabindex="0" loading="lazy"><figcaption>MySQL InnoDB Cluster with Keepalived</figcaption></figure><h3 id="主机设置" tabindex="-1"><a class="header-anchor" href="#主机设置"><span>主机设置</span></a></h3><ul><li>主机名称设置</li></ul><blockquote><p>对应节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 管理节点</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;dataforum-mgm1&quot;</span> <span class="token operator">&gt;</span> /etc/hostname
hostnamectl set-hostname dataforum-mgm1

<span class="token comment"># 数据节点1</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;dataforum-datanode1&quot;</span> <span class="token operator">&gt;</span> /etc/hostname
hostnamectl set-hostname dataforum-datanode1

<span class="token comment"># 数据节点2</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;dataforum-datanode2&quot;</span> <span class="token operator">&gt;</span> /etc/hostname
hostnamectl set-hostname dataforum-datanode2

<span class="token comment"># SQL节点1</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;dataforum-sqlnode1&quot;</span> <span class="token operator">&gt;</span> /etc/hostname
hostnamectl set-hostname dataforum-sqlnode1

<span class="token comment"># SQL节点2</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;dataforum-sqlnode2&quot;</span> <span class="token operator">&gt;</span> /etc/hostname
hostnamectl set-hostname dataforum-sqlnode2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>主机<code>hosts</code>设置</li></ul><blockquote><p>所有节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&lt;&lt;</span> <span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;&gt;</span> /etc/hosts</span>
10.10.12.210 dataforum-mgm1
10.10.12.211 dataforum-datanode1
10.10.12.212 dataforum-datanode2
10.10.12.213 dataforum-sqlnode1
10.10.12.214 dataforum-sqlnode2
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>关闭防火墙</li></ul><blockquote><p>所有节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl stop firewalld
systemctl disable firewalld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Selinux设置</li></ul><blockquote><p>所有节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>setenforce <span class="token number">0</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s/^SELINUX=enforcing/SELINUX=disabled/g&quot;</span> /etc/selinux/config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>ssh免密设置（可选）</li></ul><blockquote><p>所有节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>ssh-keygen <span class="token parameter variable">-t</span> rsa

ssh-copy-id <span class="token parameter variable">-i</span> ~/.ssh/id_rsa.pub <span class="token number">10.10</span>.12.210
ssh-copy-id <span class="token parameter variable">-i</span> ~/.ssh/id_rsa.pub <span class="token number">10.10</span>.12.211
ssh-copy-id <span class="token parameter variable">-i</span> ~/.ssh/id_rsa.pub <span class="token number">10.10</span>.12.212
ssh-copy-id <span class="token parameter variable">-i</span> ~/.ssh/id_rsa.pub <span class="token number">10.10</span>.12.213
ssh-copy-id <span class="token parameter variable">-i</span> ~/.ssh/id_rsa.pub <span class="token number">10.10</span>.12.214
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装包准备" tabindex="-1"><a class="header-anchor" href="#安装包准备"><span>安装包准备</span></a></h3><ul><li>下载安装包</li></ul><blockquote><p>所有节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">wget</span> https://cdn.mysql.com//Downloads/MySQL-Cluster-8.0/mysql-cluster-community-8.0.34-1.el7.x86_64.rpm-bundle.tar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>解压安装包</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-xvf</span> mysql-cluster-community-8.0.34-1.el7.x86_64.rpm-bundle.tar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="管理节点安装与配置" tabindex="-1"><a class="header-anchor" href="#管理节点安装与配置"><span>管理节点安装与配置</span></a></h3><ul><li>安装和移除部分软件包</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> perl-Data-Dumper
yum <span class="token parameter variable">-y</span> remove mariadb-libs

yum <span class="token parameter variable">-y</span> <span class="token function">install</span> epel-release
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> perl-DBI
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> perl-Class-MethodMaker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>安装管理节点软件包</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> mysql-cluster-community-icu-data-files-8.0.34-1.el7.x86_64.rpm
<span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> mysql-cluster-community-common-8.0.34-1.el7.x86_64.rpm
<span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> mysql-cluster-community-client-plugins-8.0.34-1.el7.x86_64.rpm
<span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> mysql-cluster-community-libs-8.0.34-1.el7.x86_64.rpm
<span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> mysql-cluster-community-client-8.0.34-1.el7.x86_64.rpm
<span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> mysql-cluster-community-server-8.0.34-1.el7.x86_64.rpm

<span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> mysql-cluster-community-management-server-8.0.34-1.el7.x86_64.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>管理节点配置 创建目录和配置文件</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /var/lib/mysql-cluster
<span class="token builtin class-name">cd</span> /var/lib/mysql-cluster
<span class="token function">touch</span> config.ini
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code>config.ini</code>中添加如下内容：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>ndb_mgmd default<span class="token punctuation">]</span>
<span class="token comment"># Directory for MGM node log files</span>
<span class="token assign-left variable">DataDir</span><span class="token operator">=</span>/var/lib/mysql-cluster
  
<span class="token punctuation">[</span>ndb_mgmd<span class="token punctuation">]</span>
<span class="token comment">#Management Node db1</span>
<span class="token assign-left variable">HostName</span><span class="token operator">=</span>dataforum-mgm1
<span class="token assign-left variable">NodeId</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">DataDir</span><span class="token operator">=</span>/var/lib/mysql-cluster
  
<span class="token punctuation">[</span>ndbd default<span class="token punctuation">]</span>
<span class="token assign-left variable">NoOfReplicas</span><span class="token operator">=</span><span class="token number">2</span>      <span class="token comment"># Number of replicas</span>
<span class="token assign-left variable">DataMemory</span><span class="token operator">=</span>256M     <span class="token comment"># Memory allocate for data storage</span>
<span class="token assign-left variable">IndexMemory</span><span class="token operator">=</span>128M    <span class="token comment"># Memory allocate for index storage</span>
<span class="token comment">#Directory for Data Node</span>
<span class="token assign-left variable">DataDir</span><span class="token operator">=</span>/var/lib/mysql-cluster
  
<span class="token punctuation">[</span>ndbd<span class="token punctuation">]</span>
<span class="token comment">#dataforum-datanode1</span>
<span class="token assign-left variable">HostName</span><span class="token operator">=</span>dataforum-datanode1
<span class="token assign-left variable">NodeId</span><span class="token operator">=</span><span class="token number">2</span>
<span class="token assign-left variable">DataDir</span><span class="token operator">=</span>/var/lib/mysql-cluster
  
<span class="token punctuation">[</span>ndbd<span class="token punctuation">]</span>
<span class="token comment">#dataforum-datanode2</span>
<span class="token assign-left variable">HostName</span><span class="token operator">=</span>dataforum-datanode2
<span class="token assign-left variable">NodeId</span><span class="token operator">=</span><span class="token number">3</span>
<span class="token assign-left variable">DataDir</span><span class="token operator">=</span>/var/lib/mysql-cluster
  
<span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span>
<span class="token comment">#SQL Node db4</span>
<span class="token assign-left variable">HostName</span><span class="token operator">=</span>dataforum-sqlnode1
<span class="token assign-left variable">NodeId</span><span class="token operator">=</span><span class="token number">4</span>
  
<span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span>
<span class="token comment">#SQL Node db5</span>
<span class="token assign-left variable">HostName</span><span class="token operator">=</span>dataforum-sqlnode2
<span class="token assign-left variable">NodeId</span><span class="token operator">=</span><span class="token number">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据节点安装与配置" tabindex="-1"><a class="header-anchor" href="#数据节点安装与配置"><span>数据节点安装与配置</span></a></h3><blockquote><p>所有数据节点</p></blockquote><ul><li>安装和移除部分软件包</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> perl-Data-Dumper
yum <span class="token parameter variable">-y</span> remove mariadb-libs

yum <span class="token parameter variable">-y</span> <span class="token function">install</span> epel-release
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> perl-DBI
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> perl-Class-MethodMaker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>安装数据节点软件包</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> mysql-cluster-community-icu-data-files-8.0.34-1.el7.x86_64.rpm
<span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> mysql-cluster-community-common-8.0.34-1.el7.x86_64.rpm
<span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> mysql-cluster-community-client-plugins-8.0.34-1.el7.x86_64.rpm
<span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> mysql-cluster-community-libs-8.0.34-1.el7.x86_64.rpm
<span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> mysql-cluster-community-client-8.0.34-1.el7.x86_64.rpm
<span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> mysql-cluster-community-server-8.0.34-1.el7.x86_64.rpm

<span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> mysql-cluster-community-data-node-8.0.34-1.el7.x86_64.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>配置数据节点 编辑<code>/etc/my.cnf</code>,添加如下内容：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span>
ndbcluster
ndb-connectstring<span class="token operator">=</span>dataforum-mgm1    <span class="token comment"># IP address of Management Node</span>
  
<span class="token punctuation">[</span>mysql_cluster<span class="token punctuation">]</span>
ndb-connectstring<span class="token operator">=</span>dataforum-mgm1     <span class="token comment"># IP address of Management Node</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建数据库集群数据目录</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /var/lib/mysql-cluster
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="sql节点安装与配置" tabindex="-1"><a class="header-anchor" href="#sql节点安装与配置"><span>SQL节点安装与配置</span></a></h3><blockquote><p>所有数据节点</p></blockquote><ul><li>安装和移除部分软件包</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> perl-Data-Dumper
yum <span class="token parameter variable">-y</span> remove mariadb-libs

yum <span class="token parameter variable">-y</span> <span class="token function">install</span> epel-release
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> perl-DBI
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> perl-Class-MethodMaker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>安装SQL节点软件包</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> mysql-cluster-community-icu-data-files-8.0.34-1.el7.x86_64.rpm
<span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> mysql-cluster-community-common-8.0.34-1.el7.x86_64.rpm
<span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> mysql-cluster-community-client-plugins-8.0.34-1.el7.x86_64.rpm
<span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> mysql-cluster-community-libs-8.0.34-1.el7.x86_64.rpm
<span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> mysql-cluster-community-client-8.0.34-1.el7.x86_64.rpm
<span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> mysql-cluster-community-server-8.0.34-1.el7.x86_64.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>配置SQL节点 编辑<code>/etc/my.cnf</code>,添加如下内容：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span>
ndbcluster
ndb-connectstring<span class="token operator">=</span>dataforum-mgm1      <span class="token comment"># IP address for server management node</span>
<span class="token assign-left variable">default_storage_engine</span><span class="token operator">=</span>ndbcluster     <span class="token comment"># Define default Storage Engine used by MySQL</span>
  
<span class="token punctuation">[</span>mysql_cluster<span class="token punctuation">]</span>
ndb-connectstring<span class="token operator">=</span>dataforum-mgm1     
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="集群启动与关闭" tabindex="-1"><a class="header-anchor" href="#集群启动与关闭"><span>集群启动与关闭</span></a></h3><h4 id="集群启动和关闭顺序" tabindex="-1"><a class="header-anchor" href="#集群启动和关闭顺序"><span>集群启动和关闭顺序</span></a></h4><p>启动：管理节点服务 —&gt; 数据节点服务 —&gt; sql 节点 ​关闭：关闭管理节点服务，关闭管理节点服务后，nbdb数据节点服务会自动关闭 —&gt; 手动关闭SQL节点。</p><h4 id="集群服务启动" tabindex="-1"><a class="header-anchor" href="#集群服务启动"><span>集群服务启动</span></a></h4><ul><li>启动管理节点</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>ndb_mgmd --config-file<span class="token operator">=</span>/var/lib/mysql-cluster/config.ini
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>启动数据节点</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>ndbd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>启动SQL节点</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl start mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="状态检查" tabindex="-1"><a class="header-anchor" href="#状态检查"><span>状态检查</span></a></h4><ul><li>在管理节点检查集群状态</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>ndb_mgm <span class="token parameter variable">-e</span> show
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="集群服务关闭" tabindex="-1"><a class="header-anchor" href="#集群服务关闭"><span>集群服务关闭</span></a></h4><ul><li>关闭SQL节点</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl stop mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>关闭管理节点</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>ndb_mgm <span class="token parameter variable">-e</span> <span class="token function">shutdown</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>数据节点在管理节点关闭后自动关闭</li></ul><h4 id="自动启动" tabindex="-1"><a class="header-anchor" href="#自动启动"><span>自动启动</span></a></h4><ul><li>管理节点随机启动脚本 编辑<code>/etc/init.d/ndb_mgmd</code>,添加如下内容：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># chkconfig: 345 99 01</span>
<span class="token comment"># description: MySQL Cluster management server start/stop script</span>
 
<span class="token assign-left variable">STARTMGM</span><span class="token operator">=</span><span class="token string">&quot;ndb_mgmd --config-file=/var/lib/mysql-cluster/config.ini&quot;</span>
 
<span class="token function-name function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token variable">$STARTMGM</span>
<span class="token punctuation">}</span>
<span class="token function-name function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token function">killall</span> <span class="token parameter variable">-15</span> ndb_mgmd
       <span class="token function">sleep</span> <span class="token number">1</span>
       <span class="token function">killall</span> <span class="token parameter variable">-9</span> ndb_mgmd
<span class="token punctuation">}</span>
<span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token keyword">in</span>
  start<span class="token punctuation">)</span>
        start
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
  stop<span class="token punctuation">)</span>
        stop
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
  restart<span class="token operator">|</span>reload<span class="token punctuation">)</span>
        stop
        start
        <span class="token assign-left variable">RETVAL</span><span class="token operator">=</span><span class="token variable">$?</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
  *<span class="token punctuation">)</span>
        <span class="token builtin class-name">echo</span> $<span class="token string">&quot;Usage: <span class="token variable">$0</span> {start|stop|restart}&quot;</span>
        <span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token keyword">esac</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>添加脚本执行权限</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">chmod</span> <span class="token number">755</span> /etc/init.d/ndb_mgmd
<span class="token function">chkconfig</span> ndb_mgmd on
<span class="token function">chkconfig</span> <span class="token parameter variable">--level</span> <span class="token number">345</span> ndb_mgmd on
systemctl start ndb_mgmd
systemctl status ndb_mgmd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>数据节点随机启动脚本 编辑<code>/etc/init.d/ndbd</code>,添加如下内容：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># chkconfig: 345 99 01</span>
<span class="token comment"># description: MySQL DATA Node start/stop script</span>
 
<span class="token assign-left variable">STARTDATA</span><span class="token operator">=</span><span class="token string">&quot;ndbd&quot;</span>
 
<span class="token function-name function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token variable">$STARTDATA</span>
<span class="token punctuation">}</span>
<span class="token function-name function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token function">killall</span> <span class="token parameter variable">-15</span> ndb_mgmd
       <span class="token function">sleep</span> <span class="token number">1</span>
       <span class="token function">killall</span> <span class="token parameter variable">-9</span> ndb_mgmd
<span class="token punctuation">}</span>
<span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token keyword">in</span>
  start<span class="token punctuation">)</span>
        start
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
  stop<span class="token punctuation">)</span>
        stop
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
  restart<span class="token operator">|</span>reload<span class="token punctuation">)</span>
        stop
        start
        <span class="token assign-left variable">RETVAL</span><span class="token operator">=</span><span class="token variable">$?</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
  *<span class="token punctuation">)</span>
        <span class="token builtin class-name">echo</span> $<span class="token string">&quot;Usage: <span class="token variable">$0</span> {start|stop|restart}&quot;</span>
        <span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token keyword">esac</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>添加脚本执行权限</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">chmod</span> <span class="token number">755</span> /etc/init.d/ndbd
<span class="token function">chkconfig</span> ndbd on
<span class="token function">chkconfig</span> <span class="token parameter variable">--level</span> <span class="token number">345</span> ndbd on
systemctl start ndbd
systemctl status ndbd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="集群测试" tabindex="-1"><a class="header-anchor" href="#集群测试"><span>集群测试</span></a></h3><h4 id="连接测试" tabindex="-1"><a class="header-anchor" href="#连接测试"><span>连接测试</span></a></h4><p>登陆SQL节点（可使用<code>cat /var/log/mysqld.log |grep password</code>找到初始密码）</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>mysql <span class="token operator">-</span>u root <span class="token operator">-</span>p     
<span class="token keyword">alter</span> <span class="token keyword">user</span> <span class="token string">&#39;root&#39;</span><span class="token variable">@&#39;localhost&#39;</span> identified <span class="token keyword">by</span> <span class="token string">&#39;HelloTest@2023&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">USER</span> <span class="token string">&#39;root&#39;</span><span class="token variable">@&#39;%&#39;</span> IDENTIFIED <span class="token keyword">WITH</span> mysql_native_password <span class="token keyword">BY</span> <span class="token string">&#39;HelloTest@2023&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">grant</span> <span class="token keyword">all</span> <span class="token keyword">privileges</span> <span class="token keyword">on</span> <span class="token operator">*</span><span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">to</span> <span class="token string">&#39;root&#39;</span><span class="token variable">@&#39;%&#39;</span> <span class="token keyword">with</span> <span class="token keyword">grant</span> <span class="token keyword">option</span><span class="token punctuation">;</span>   
FLUSH <span class="token keyword">PRIVILEGES</span><span class="token punctuation">;</span>   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="分布式ndb引擎测试" tabindex="-1"><a class="header-anchor" href="#分布式ndb引擎测试"><span>分布式NDB引擎测试</span></a></h4><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">database</span> testdb<span class="token punctuation">;</span>
<span class="token keyword">use</span> testdb<span class="token punctuation">;</span>
<span class="token keyword">create</span> <span class="token keyword">table</span> users<span class="token punctuation">(</span> id <span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token keyword">engine</span><span class="token operator">=</span>ndbcluster<span class="token punctuation">;</span>
<span class="token keyword">Insert</span> <span class="token keyword">into</span> users<span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> users<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>NDB存储引擎在2个SQL节点都有这个表，并且数据一致。 InnoDB存储引擎只在创建表的节点上存在。</p></div><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h3><ul><li>NDB存储引擎的缺点：</li></ul><ol><li><p>基于内存，数据库的规模受集群总内存的大小限制</p></li><li><p>基于内存，断电后数据可能会有数据丢失，这点还需要通过测试验证。</p></li><li><p>多个节点通过网络实现通讯和数据同步、查询等操作，因此整体性受网络速度影响，</p></li></ol><ul><li>NDB存储引擎的优点：</li></ul><ol><li><p>多个节点之间可以分布在不同的地理位置，因此也是一个实现分布式数据库的方案。</p></li><li><p>扩展性很好，增加节点即可实现数据库集群的扩展。</p></li><li><p>冗余性很好，多个节点上都有完整的数据库数据，因此任何一个节点宕机都不会造成服务中断。</p></li><li><p>实现高可用性的成本比较低，不象传统的高可用方案一样需要共享的存储设备和专用的软件才能实现，NDB 只要有足够的内存就能实现。</p></li></ol>`,97),d=[i];function c(p,r){return a(),e("div",null,d)}const v=n(t,[["render",c],["__file","mysql-ndb-cluster.html.vue"]]),b=JSON.parse('{"path":"/guide/database/mysql/ha/deployment/mysql-ndb-cluster.html","title":"MySQL NDB Cluster","lang":"zh-CN","frontmatter":{"title":"MySQL NDB Cluster","description":"MySQL NDB Cluster 组件说明 MySQL NDB Cluster 由管理节点、数据节点、SQL 节点组成： 管理节点（NDB_MGMD/MGM）： 集群管理服务器用于管理集群的其他节点。我们可以从管理节点创建和配置新节点、重启、删除或备份集群上的节点。 数据节点（NDBD/NDB）：这是节点之间发生同步和数据复制过程的层。 SQL节点（...","head":[["meta",{"property":"og:url","content":"https://github.com/abelit/abelit-datapeacock.git/guide/database/mysql/ha/deployment/mysql-ndb-cluster.html"}],["meta",{"property":"og:site_name","content":"数之雀"}],["meta",{"property":"og:title","content":"MySQL NDB Cluster"}],["meta",{"property":"og:description","content":"MySQL NDB Cluster 组件说明 MySQL NDB Cluster 由管理节点、数据节点、SQL 节点组成： 管理节点（NDB_MGMD/MGM）： 集群管理服务器用于管理集群的其他节点。我们可以从管理节点创建和配置新节点、重启、删除或备份集群上的节点。 数据节点（NDBD/NDB）：这是节点之间发生同步和数据复制过程的层。 SQL节点（..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-11T14:06:18.000Z"}],["meta",{"property":"article:author","content":"Abelit"}],["meta",{"property":"article:modified_time","content":"2024-05-11T14:06:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL NDB Cluster\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-11T14:06:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Abelit\\",\\"url\\":\\"https://github.com/abelit\\"}]}"]]},"headers":[{"level":2,"title":"MySQL NDB Cluster","slug":"mysql-ndb-cluster","link":"#mysql-ndb-cluster","children":[{"level":3,"title":"组件说明","slug":"组件说明","link":"#组件说明","children":[]},{"level":3,"title":"主机信息","slug":"主机信息","link":"#主机信息","children":[]},{"level":3,"title":"拓扑结构","slug":"拓扑结构","link":"#拓扑结构","children":[]},{"level":3,"title":"主机设置","slug":"主机设置","link":"#主机设置","children":[]},{"level":3,"title":"安装包准备","slug":"安装包准备","link":"#安装包准备","children":[]},{"level":3,"title":"管理节点安装与配置","slug":"管理节点安装与配置","link":"#管理节点安装与配置","children":[]},{"level":3,"title":"数据节点安装与配置","slug":"数据节点安装与配置","link":"#数据节点安装与配置","children":[]},{"level":3,"title":"SQL节点安装与配置","slug":"sql节点安装与配置","link":"#sql节点安装与配置","children":[]},{"level":3,"title":"集群启动与关闭","slug":"集群启动与关闭","link":"#集群启动与关闭","children":[]},{"level":3,"title":"集群测试","slug":"集群测试","link":"#集群测试","children":[]},{"level":3,"title":"总结","slug":"总结","link":"#总结","children":[]}]}],"git":{"createdTime":1715436378000,"updatedTime":1715436378000,"contributors":[{"name":"ableit","email":"ychenid@live.com","commits":1}]},"readingTime":{"minutes":5.89,"words":1768},"filePathRelative":"guide/database/mysql/ha/deployment/mysql-ndb-cluster.md","localizedDate":"2024年5月11日","autoDesc":true,"excerpt":"<h2>MySQL NDB Cluster</h2>\\n<h3>组件说明</h3>\\n<p>MySQL NDB Cluster 由管理节点、数据节点、SQL 节点组成：</p>\\n<ul>\\n<li>管理节点（NDB_MGMD/MGM）： 集群管理服务器用于管理集群的其他节点。我们可以从管理节点创建和配置新节点、重启、删除或备份集群上的节点。</li>\\n<li>数据节点（NDBD/NDB）：这是节点之间发生同步和数据复制过程的层。</li>\\n<li>SQL节点（MySQLD/API）：应用程序用来连接到数据库集群的接口服务器。</li>\\n</ul>\\n<h3>主机信息</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>编号</th>\\n<th>IP 地址</th>\\n<th>角色</th>\\n<th>操作系统</th>\\n<th>内核版本</th>\\n<th>软件及版本</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>1</td>\\n<td>10.10.12.210</td>\\n<td>管理节点</td>\\n<td>CentOS 7.9</td>\\n<td>3.10.0-1160.el7.x86_64</td>\\n<td>MySQL 8.0.34</td>\\n</tr>\\n<tr>\\n<td>2</td>\\n<td>10.10.12.211</td>\\n<td>数据节点</td>\\n<td>CentOS 7.9</td>\\n<td>3.10.0-1160.el7.x86_64</td>\\n<td>MySQL 8.0.34</td>\\n</tr>\\n<tr>\\n<td>3</td>\\n<td>10.10.12.212</td>\\n<td>数据节点</td>\\n<td>CentOS 7.9</td>\\n<td>3.10.0-1160.el7.x86_64</td>\\n<td>MySQL 8.0.34</td>\\n</tr>\\n<tr>\\n<td>4</td>\\n<td>10.10.12.213</td>\\n<td>SQL节点</td>\\n<td>CentOS 7.9</td>\\n<td>3.10.0-1160.el7.x86_64</td>\\n<td>MySQL 8.0.34</td>\\n</tr>\\n<tr>\\n<td>5</td>\\n<td>10.10.12.214</td>\\n<td>SQL节点</td>\\n<td>CentOS 7.9</td>\\n<td>3.10.0-1160.el7.x86_64</td>\\n<td>MySQL 8.0.34</td>\\n</tr>\\n</tbody>\\n</table>"}');export{v as comp,b as data};
