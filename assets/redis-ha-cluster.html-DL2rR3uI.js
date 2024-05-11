import{_ as c}from"./redis-ha-master-slave-archtecture-001-D8DYfrEH.js";import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o as d,c as r,b as u,w as a,f as l,d as n,a as s}from"./app-DR5J2daJ.js";const m={},b=l('<h2 id="主机准备" tabindex="-1"><a class="header-anchor" href="#主机准备"><span>主机准备</span></a></h2><h3 id="拓扑架构" tabindex="-1"><a class="header-anchor" href="#拓扑架构"><span>拓扑架构</span></a></h3><figure><img src="'+c+`" alt="主从架构图" tabindex="0" loading="lazy"><figcaption>主从架构图</figcaption></figure><h3 id="主机信息" tabindex="-1"><a class="header-anchor" href="#主机信息"><span>主机信息</span></a></h3><table><thead><tr><th>编号</th><th>IP 地址</th><th>角色</th><th>操作系统</th><th>内核版本</th><th>数据库版本</th></tr></thead><tbody><tr><td>1</td><td>10.10.13.100</td><td>redis</td><td>CentOS 7.9</td><td>3.10.0-1160.el7.x86_64</td><td>6.2.14</td></tr><tr><td>2</td><td>10.10.13.101</td><td>redis</td><td>CentOS 7.9</td><td>3.10.0-1160.el7.x86_64</td><td>6.2.14</td></tr><tr><td>3</td><td>10.10.13.102</td><td>redis</td><td>CentOS 7.9</td><td>3.10.0-1160.el7.x86_64</td><td>6.2.14</td></tr><tr><td>1</td><td>10.10.13.103</td><td>redis</td><td>CentOS 7.9</td><td>3.10.0-1160.el7.x86_64</td><td>6.2.14</td></tr><tr><td>2</td><td>10.10.13.104</td><td>redis</td><td>CentOS 7.9</td><td>3.10.0-1160.el7.x86_64</td><td>6.2.14</td></tr><tr><td>3</td><td>10.10.13.105</td><td>redis</td><td>CentOS 7.9</td><td>3.10.0-1160.el7.x86_64</td><td>6.2.14</td></tr></tbody></table><h3 id="主机设置" tabindex="-1"><a class="header-anchor" href="#主机设置"><span>主机设置</span></a></h3><ul><li>主机名称设置</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 节点</span>
hostnamectl set-hostname node0
<span class="token comment"># 节点</span>
hostnamectl set-hostname node1
<span class="token comment"># 节点</span>
hostnamectl set-hostname node2
<span class="token comment"># 节点</span>
hostnamectl set-hostname node3
<span class="token comment"># 节点</span>
hostnamectl set-hostname node4
<span class="token comment"># 节点</span>
hostnamectl set-hostname node5

<span class="token comment"># hosts=&quot;10.10.13.100 10.10.13.101 10.10.13.102 10.10.13.103 10.10.13.104 10.10.13.105&quot;</span>
<span class="token comment"># num=0</span>
<span class="token comment"># for host in $hosts; </span>
<span class="token comment"># do </span>
<span class="token comment"># sshpass -p &#39;root@123&#39; ssh -o StrictHostKeyChecking=no root@\${host} hostnamectl set-hostname node$num ;num=$(($num+1));</span>
<span class="token comment"># done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>主机<code>hosts</code>设置</li></ul><blockquote><p>所有节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/hosts <span class="token operator">&lt;&lt;</span><span class="token string">EOF
127.0.0.1   localhost localhost.localdomain localhost4 localhost4.localdomain4
::1         localhost localhost.localdomain localhost6 localhost6.localdomain6

# by abelit
10.10.13.100 node0
10.10.13.101 node1
10.10.13.102 node2
10.10.13.103 node3
10.10.13.104 node4
10.10.13.105 node5
EOF</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>关闭防火墙</li></ul><blockquote><p>所有节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl stop firewalld
systemctl disable firewalld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>selinux设置</li></ul><blockquote><p>所有节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>setenforce <span class="token number">0</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s/^SELINUX=enforcing/SELINUX=disabled/g&quot;</span> /etc/selinux/config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装依赖" tabindex="-1"><a class="header-anchor" href="#安装依赖"><span>安装依赖</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token function">wget</span>

yum <span class="token parameter variable">-y</span> <span class="token function">install</span> gcc c++ <span class="token function">make</span>  


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装和配置redis集群" tabindex="-1"><a class="header-anchor" href="#安装和配置redis集群"><span>安装和配置Redis集群</span></a></h2><h3 id="安装redis" tabindex="-1"><a class="header-anchor" href="#安装redis"><span>安装Redis</span></a></h3><blockquote><p>所有节点</p></blockquote><ul><li>下载redis</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">wget</span> https://download.redis.io/releases/redis-6.2.14.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>安装redis</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> redis-6.2.14.tar.gz <span class="token parameter variable">-C</span> /usr/local/

<span class="token function">ln</span> <span class="token parameter variable">-sf</span> /usr/local/redis-6.2.14 /usr/local/redis

<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /usr/local/redis/data/redis

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="redis集群节点配置" tabindex="-1"><a class="header-anchor" href="#redis集群节点配置"><span>redis集群节点配置</span></a></h3><blockquote><p>所有节点</p></blockquote><p>编辑<code>/usr/local/redis/redis.conf</code>配置文件，修改如下内容：</p>`,34),v=s("div",{class:"language-conf line-numbers-mode","data-ext":"conf","data-title":"conf"},[s("pre",{class:"language-conf"},[s("code",null,`bind 0.0.0.0
port 6379

protected-mode no
dir /usr/local/redis/data

requirepass Hello@2023
masterauth Hello@2023

appendonly yes
appendfilename "appendonly.aof"
dbfilename dump.rdb

daemonize yes

cluster-enabled yes
cluster-config-file nodes-cluster.conf  # 设置成对应服务专属的
`)]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),k=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"cp"),n(` /usr/local/redis/redis.conf /usr/local/redis/redis.conf.origin

`),s("span",{class:"token function"},"sed"),n(),s("span",{class:"token parameter variable"},"-i"),n(),s("span",{class:"token string"},"'s/^bind 127.0.0.1 -::1/bind 0.0.0.0/g'"),n(` /usr/local/redis/redis.conf
`),s("span",{class:"token function"},"sed"),n(),s("span",{class:"token parameter variable"},"-i"),n(),s("span",{class:"token string"},"'s/^port 6379/port 6379/g'"),n(` /usr/local/redis/redis.conf
`),s("span",{class:"token function"},"sed"),n(),s("span",{class:"token parameter variable"},"-i"),n(),s("span",{class:"token string"},"'s/^protected-mode yes/protected-mode no/g'"),n(` /usr/local/redis/redis.conf
`),s("span",{class:"token function"},"sed"),n(),s("span",{class:"token parameter variable"},"-i"),n(),s("span",{class:"token string"},"'s/^dir .\\//dir \\/usr\\/local\\/redis\\/data\\/redis/g'"),n(` /usr/local/redis/redis.conf
`),s("span",{class:"token function"},"sed"),n(),s("span",{class:"token parameter variable"},"-i"),n(),s("span",{class:"token string"},"'s/^# requirepass foobared/requirepass Hello@2023/g'"),n(` /usr/local/redis/redis.conf
`),s("span",{class:"token function"},"sed"),n(),s("span",{class:"token parameter variable"},"-i"),n(),s("span",{class:"token string"},"'s/^# masterauth <master-password>/masterauth Hello@2023/g'"),n(` /usr/local/redis/redis.conf
`),s("span",{class:"token function"},"sed"),n(),s("span",{class:"token parameter variable"},"-i"),n(),s("span",{class:"token string"},"'s/^appendonly no/appendonly yes/g'"),n(` /usr/local/redis/redis.conf
`),s("span",{class:"token function"},"sed"),n(),s("span",{class:"token parameter variable"},"-i"),n(),s("span",{class:"token string"},`'s/^appendfilename "appendonly.aof"/appendfilename "appendonly.aof"/g'`),n(` /usr/local/redis/redis.conf
`),s("span",{class:"token function"},"sed"),n(),s("span",{class:"token parameter variable"},"-i"),n(),s("span",{class:"token string"},"'s/^dbfilename dump.rdb/dbfilename dump.rdb/g'"),n(` /usr/local/redis/redis.conf
`),s("span",{class:"token function"},"sed"),n(),s("span",{class:"token parameter variable"},"-i"),n(),s("span",{class:"token string"},"'s/^daemonize no/daemonize yes/g'"),n(` /usr/local/redis/redis.conf
`),s("span",{class:"token function"},"sed"),n(),s("span",{class:"token parameter variable"},"-i"),n(),s("span",{class:"token string"},"'s/^# cluster-enabled yes/cluster-enabled yes/g'"),n(` /usr/local/redis/redis.conf
`),s("span",{class:"token function"},"sed"),n(),s("span",{class:"token parameter variable"},"-i"),n(),s("span",{class:"token string"},"'s/^# cluster-config-file nodes-6379.conf/cluster-config-file nodes-6379.conf/g'"),n(` /usr/local/redis/redis.conf

`),s("span",{class:"token function"},"cat"),n(" /usr/local/redis/redis.conf "),s("span",{class:"token operator"},"|"),n(),s("span",{class:"token function"},"grep"),n(),s("span",{class:"token parameter variable"},"-E"),n(),s("span",{class:"token string"},'"^bind|^port|^protected-mode|^dir|^requirepass|^masterauth|^appendonly|^appendfilename|^dbfilename|^daemonize|^cluster-enabled|^cluster-config-file"'),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),h=l(`<div class="hint-container tip"><p class="hint-container-title">参数说明</p><ul><li>redis protected-mode 是一种安全机制，用于保护 Redis 实例免受未经授权的访问。当 protected-mode 启用时，只有来自本地主机或已在 redis.conf 文件中明确授权的 IP 地址的连接才能访问 Redis 实例。这可以防止恶意攻击者通过网络访问 Redis 实例并执行未经授权的操作。</li></ul></div><h3 id="启动服务" tabindex="-1"><a class="header-anchor" href="#启动服务"><span>启动服务</span></a></h3><p>启动所有redis节点</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>/usr/local/redis/src/redis-server /usr/local/redis/redis.conf

<span class="token function">netstat</span>  -antlp<span class="token operator">|</span><span class="token function">grep</span> :6379
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建集群" tabindex="-1"><a class="header-anchor" href="#创建集群"><span>创建集群</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>/usr/local/redis/src/redis-cli <span class="token parameter variable">--cluster</span> create <span class="token number">10.10</span>.13.100:6379 <span class="token number">10.10</span>.13.101:6379 <span class="token number">10.10</span>.13.102:6379 <span class="token number">10.10</span>.13.103:6379 <span class="token number">10.10</span>.13.104:6379 <span class="token number">10.10</span>.13.105:6379 --cluster-replicas <span class="token number">1</span> <span class="token parameter variable">-a</span> Hello@2023
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">参数说明</p><ul><li>--cluster-replicas 1 表示为每个master创建一个slave节点</li></ul></div><p>结果显示：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost redis<span class="token punctuation">]</span><span class="token comment"># /usr/local/redis/src/redis-cli --cluster create 10.10.13.100:6379 10.10.13.101:6379 10.10.13.102:6379 10.10.13.103:6379 10.10.13.104:6379 10.10.13.105:6379 --cluster-replicas 1 -a Hello@2023</span>
Warning: Using a password with <span class="token string">&#39;-a&#39;</span> or <span class="token string">&#39;-u&#39;</span> option on the <span class="token builtin class-name">command</span> line interface may not be safe.
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> Performing <span class="token builtin class-name">hash</span> slots allocation on <span class="token number">6</span> nodes<span class="token punctuation">..</span>.
Master<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> -<span class="token operator">&gt;</span> Slots <span class="token number">0</span> - <span class="token number">5460</span>
Master<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> -<span class="token operator">&gt;</span> Slots <span class="token number">5461</span> - <span class="token number">10922</span>
Master<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> -<span class="token operator">&gt;</span> Slots <span class="token number">10923</span> - <span class="token number">16383</span>
Adding replica <span class="token number">10.10</span>.13.104:6379 to <span class="token number">10.10</span>.13.100:6379
Adding replica <span class="token number">10.10</span>.13.105:6379 to <span class="token number">10.10</span>.13.101:6379
Adding replica <span class="token number">10.10</span>.13.103:6379 to <span class="token number">10.10</span>.13.102:6379
M: a5cbff27167b037af20cd603ae6bfdced9857a09 <span class="token number">10.10</span>.13.100:6379
   slots:<span class="token punctuation">[</span><span class="token number">0</span>-5460<span class="token punctuation">]</span> <span class="token punctuation">(</span><span class="token number">5461</span> slots<span class="token punctuation">)</span> master
M: 1bdccf8bd780534b9dd6a90bc9843ed769a5fa74 <span class="token number">10.10</span>.13.101:6379
   slots:<span class="token punctuation">[</span><span class="token number">5461</span>-10922<span class="token punctuation">]</span> <span class="token punctuation">(</span><span class="token number">5462</span> slots<span class="token punctuation">)</span> master
M: 96abccb94d8a1e6c1081f0f46fe2684305192303 <span class="token number">10.10</span>.13.102:6379
   slots:<span class="token punctuation">[</span><span class="token number">10923</span>-16383<span class="token punctuation">]</span> <span class="token punctuation">(</span><span class="token number">5461</span> slots<span class="token punctuation">)</span> master
S: 243a593b11a862eb40dc84a80a51b38b45bedf7a <span class="token number">10.10</span>.13.103:6379
   replicates 96abccb94d8a1e6c1081f0f46fe2684305192303
S: 47c10eb994d6dff1768c3dafca8ab30538a58adf <span class="token number">10.10</span>.13.104:6379
   replicates a5cbff27167b037af20cd603ae6bfdced9857a09
S: 155f5f7efeece7bb7c2b239b206e3792a432dbdf <span class="token number">10.10</span>.13.105:6379
   replicates 1bdccf8bd780534b9dd6a90bc9843ed769a5fa74
Can I <span class="token builtin class-name">set</span> the above configuration? <span class="token punctuation">(</span>type <span class="token string">&#39;yes&#39;</span> to accept<span class="token punctuation">)</span>: <span class="token function">yes</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> Nodes configuration updated
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> Assign a different config epoch to each <span class="token function">node</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> Sending CLUSTER MEET messages to <span class="token function">join</span> the cluster
Waiting <span class="token keyword">for</span> the cluster to <span class="token function">join</span>
<span class="token builtin class-name">.</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> Performing Cluster Check <span class="token punctuation">(</span>using <span class="token function">node</span> <span class="token number">10.10</span>.13.100:6379<span class="token punctuation">)</span>
M: a5cbff27167b037af20cd603ae6bfdced9857a09 <span class="token number">10.10</span>.13.100:6379
   slots:<span class="token punctuation">[</span><span class="token number">0</span>-5460<span class="token punctuation">]</span> <span class="token punctuation">(</span><span class="token number">5461</span> slots<span class="token punctuation">)</span> master
   <span class="token number">1</span> additional replica<span class="token punctuation">(</span>s<span class="token punctuation">)</span>
S: 243a593b11a862eb40dc84a80a51b38b45bedf7a <span class="token number">10.10</span>.13.103:6379
   slots: <span class="token punctuation">(</span><span class="token number">0</span> slots<span class="token punctuation">)</span> slave
   replicates 96abccb94d8a1e6c1081f0f46fe2684305192303
M: 96abccb94d8a1e6c1081f0f46fe2684305192303 <span class="token number">10.10</span>.13.102:6379
   slots:<span class="token punctuation">[</span><span class="token number">10923</span>-16383<span class="token punctuation">]</span> <span class="token punctuation">(</span><span class="token number">5461</span> slots<span class="token punctuation">)</span> master
   <span class="token number">1</span> additional replica<span class="token punctuation">(</span>s<span class="token punctuation">)</span>
S: 155f5f7efeece7bb7c2b239b206e3792a432dbdf <span class="token number">10.10</span>.13.105:6379
   slots: <span class="token punctuation">(</span><span class="token number">0</span> slots<span class="token punctuation">)</span> slave
   replicates 1bdccf8bd780534b9dd6a90bc9843ed769a5fa74
S: 47c10eb994d6dff1768c3dafca8ab30538a58adf <span class="token number">10.10</span>.13.104:6379
   slots: <span class="token punctuation">(</span><span class="token number">0</span> slots<span class="token punctuation">)</span> slave
   replicates a5cbff27167b037af20cd603ae6bfdced9857a09
M: 1bdccf8bd780534b9dd6a90bc9843ed769a5fa74 <span class="token number">10.10</span>.13.101:6379
   slots:<span class="token punctuation">[</span><span class="token number">5461</span>-10922<span class="token punctuation">]</span> <span class="token punctuation">(</span><span class="token number">5462</span> slots<span class="token punctuation">)</span> master
   <span class="token number">1</span> additional replica<span class="token punctuation">(</span>s<span class="token punctuation">)</span>
<span class="token punctuation">[</span>OK<span class="token punctuation">]</span> All nodes agree about slots configuration.
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> Check <span class="token keyword">for</span> <span class="token function">open</span> slots<span class="token punctuation">..</span>.
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> Check slots coverage<span class="token punctuation">..</span>.
<span class="token punctuation">[</span>OK<span class="token punctuation">]</span> All <span class="token number">16384</span> slots covered.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="集群管理" tabindex="-1"><a class="header-anchor" href="#集群管理"><span>集群管理</span></a></h2><h3 id="集群状态检查" tabindex="-1"><a class="header-anchor" href="#集群状态检查"><span>集群状态检查</span></a></h3><ul><li>查看主从关系</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>/usr/local/redis/src/redis-cli <span class="token parameter variable">--cluster</span> check node0:6379 <span class="token parameter variable">-a</span> Hello@2023
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>显示结果：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost redis<span class="token punctuation">]</span><span class="token comment"># /usr/local/redis/src/redis-cli --cluster check node0:6379 -a Hello@2023</span>
Warning: Using a password with <span class="token string">&#39;-a&#39;</span> or <span class="token string">&#39;-u&#39;</span> option on the <span class="token builtin class-name">command</span> line interface may not be safe.
node0:6379 <span class="token punctuation">(</span>a5cbff27<span class="token punctuation">..</span>.<span class="token punctuation">)</span> -<span class="token operator">&gt;</span> <span class="token number">0</span> keys <span class="token operator">|</span> <span class="token number">5461</span> slots <span class="token operator">|</span> <span class="token number">1</span> slaves.
<span class="token number">10.10</span>.13.102:6379 <span class="token punctuation">(</span>96abccb9<span class="token punctuation">..</span>.<span class="token punctuation">)</span> -<span class="token operator">&gt;</span> <span class="token number">0</span> keys <span class="token operator">|</span> <span class="token number">5461</span> slots <span class="token operator">|</span> <span class="token number">1</span> slaves.
<span class="token number">10.10</span>.13.101:6379 <span class="token punctuation">(</span>1bdccf8b<span class="token punctuation">..</span>.<span class="token punctuation">)</span> -<span class="token operator">&gt;</span> <span class="token number">0</span> keys <span class="token operator">|</span> <span class="token number">5462</span> slots <span class="token operator">|</span> <span class="token number">1</span> slaves.
<span class="token punctuation">[</span>OK<span class="token punctuation">]</span> <span class="token number">0</span> keys <span class="token keyword">in</span> <span class="token number">3</span> masters.
<span class="token number">0.00</span> keys per slot on average.
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> Performing Cluster Check <span class="token punctuation">(</span>using <span class="token function">node</span> node0:6379<span class="token punctuation">)</span>
M: a5cbff27167b037af20cd603ae6bfdced9857a09 node0:6379
   slots:<span class="token punctuation">[</span><span class="token number">0</span>-5460<span class="token punctuation">]</span> <span class="token punctuation">(</span><span class="token number">5461</span> slots<span class="token punctuation">)</span> master
   <span class="token number">1</span> additional replica<span class="token punctuation">(</span>s<span class="token punctuation">)</span>
S: 243a593b11a862eb40dc84a80a51b38b45bedf7a <span class="token number">10.10</span>.13.103:6379
   slots: <span class="token punctuation">(</span><span class="token number">0</span> slots<span class="token punctuation">)</span> slave
   replicates 96abccb94d8a1e6c1081f0f46fe2684305192303
M: 96abccb94d8a1e6c1081f0f46fe2684305192303 <span class="token number">10.10</span>.13.102:6379
   slots:<span class="token punctuation">[</span><span class="token number">10923</span>-16383<span class="token punctuation">]</span> <span class="token punctuation">(</span><span class="token number">5461</span> slots<span class="token punctuation">)</span> master
   <span class="token number">1</span> additional replica<span class="token punctuation">(</span>s<span class="token punctuation">)</span>
S: 155f5f7efeece7bb7c2b239b206e3792a432dbdf <span class="token number">10.10</span>.13.105:6379
   slots: <span class="token punctuation">(</span><span class="token number">0</span> slots<span class="token punctuation">)</span> slave
   replicates 1bdccf8bd780534b9dd6a90bc9843ed769a5fa74
S: 47c10eb994d6dff1768c3dafca8ab30538a58adf <span class="token number">10.10</span>.13.104:6379
   slots: <span class="token punctuation">(</span><span class="token number">0</span> slots<span class="token punctuation">)</span> slave
   replicates a5cbff27167b037af20cd603ae6bfdced9857a09
M: 1bdccf8bd780534b9dd6a90bc9843ed769a5fa74 <span class="token number">10.10</span>.13.101:6379
   slots:<span class="token punctuation">[</span><span class="token number">5461</span>-10922<span class="token punctuation">]</span> <span class="token punctuation">(</span><span class="token number">5462</span> slots<span class="token punctuation">)</span> master
   <span class="token number">1</span> additional replica<span class="token punctuation">(</span>s<span class="token punctuation">)</span>
<span class="token punctuation">[</span>OK<span class="token punctuation">]</span> All nodes agree about slots configuration.
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> Check <span class="token keyword">for</span> <span class="token function">open</span> slots<span class="token punctuation">..</span>.
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> Check slots coverage<span class="token punctuation">..</span>.
<span class="token punctuation">[</span>OK<span class="token punctuation">]</span> All <span class="token number">16384</span> slots covered.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据同步测试" tabindex="-1"><a class="header-anchor" href="#数据同步测试"><span>数据同步测试</span></a></h2><ul><li>主节点写入数据</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost redis<span class="token punctuation">]</span><span class="token comment"># /usr/local/redis/src/redis-cli -h node0 -p 6379 -c</span>
node0:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> auth Hello@2023
OK
node0:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> name abelit
-<span class="token operator">&gt;</span> Redirected to slot <span class="token punctuation">[</span><span class="token number">5798</span><span class="token punctuation">]</span> located at <span class="token number">10.10</span>.13.101:6379
<span class="token punctuation">(</span>error<span class="token punctuation">)</span> NOAUTH Authentication required.
<span class="token number">10.10</span>.13.101:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> auth Hello@2023
OK
<span class="token number">10.10</span>.13.101:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> name abelit
OK
<span class="token number">10.10</span>.13.101:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> age <span class="token number">30</span>
-<span class="token operator">&gt;</span> Redirected to slot <span class="token punctuation">[</span><span class="token number">741</span><span class="token punctuation">]</span> located at <span class="token number">10.10</span>.13.100:6379
<span class="token punctuation">(</span>error<span class="token punctuation">)</span> NOAUTH Authentication required.
<span class="token number">10.10</span>.13.100:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> auth Hello@2023
OK
<span class="token number">10.10</span>.13.100:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> age <span class="token number">30</span>
OK
<span class="token number">10.10</span>.13.100:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> keys *
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;age&quot;</span>
<span class="token number">10.10</span>.13.100:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><ul><li>-c 参数， 防止路由失效。</li></ul></div><ul><li>从节点读取数据</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost redis<span class="token punctuation">]</span><span class="token comment"># /usr/local/redis/src/redis-cli -h node3 -p 6379 -c</span>
node3:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get name
<span class="token punctuation">(</span>error<span class="token punctuation">)</span> NOAUTH Authentication required.
node3:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> auth Hello@2023
OK
node3:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get name
-<span class="token operator">&gt;</span> Redirected to slot <span class="token punctuation">[</span><span class="token number">5798</span><span class="token punctuation">]</span> located at <span class="token number">10.10</span>.13.101:6379
<span class="token punctuation">(</span>error<span class="token punctuation">)</span> NOAUTH Authentication required.
<span class="token number">10.10</span>.13.101:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> auth Hello@2023
OK
<span class="token number">10.10</span>.13.101:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get name
<span class="token string">&quot;abelit&quot;</span>
<span class="token number">10.10</span>.13.101:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get age
-<span class="token operator">&gt;</span> Redirected to slot <span class="token punctuation">[</span><span class="token number">741</span><span class="token punctuation">]</span> located at <span class="token number">10.10</span>.13.100:6379
<span class="token punctuation">(</span>error<span class="token punctuation">)</span> NOAUTH Authentication required.
<span class="token number">10.10</span>.13.100:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> auth Hello@2023
OK
<span class="token number">10.10</span>.13.100:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get name
-<span class="token operator">&gt;</span> Redirected to slot <span class="token punctuation">[</span><span class="token number">5798</span><span class="token punctuation">]</span> located at <span class="token number">10.10</span>.13.101:6379
<span class="token punctuation">(</span>error<span class="token punctuation">)</span> NOAUTH Authentication required.
<span class="token number">10.10</span>.13.101:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get age
<span class="token punctuation">(</span>error<span class="token punctuation">)</span> NOAUTH Authentication required.
<span class="token number">10.10</span>.13.101:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> auth Hello@2023
OK
<span class="token number">10.10</span>.13.101:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get age
-<span class="token operator">&gt;</span> Redirected to slot <span class="token punctuation">[</span><span class="token number">741</span><span class="token punctuation">]</span> located at <span class="token number">10.10</span>.13.100:6379
<span class="token punctuation">(</span>error<span class="token punctuation">)</span> NOAUTH Authentication required.
<span class="token number">10.10</span>.13.100:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> auth Hello@2023
OK
<span class="token number">10.10</span>.13.100:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get age
<span class="token string">&quot;30&quot;</span>
<span class="token number">10.10</span>.13.100:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>情况：redis cluster集群中slave节点能成功复制master节点数据槽数据，但是无法get数据，显示只能到对应的master节点读取</p><p>原因：Redis Cluster集群中的从节点，官方默认设置的是不分担读请求的、只作备份和故障转移用,当有请求读向从节点时，会被重定向对应的主节点来处理</p><p>解决办法：在get数据之前先使用命令readonly,这个readonly告诉 Redis Cluster 从节点客户端愿意读取可能过时的数据并且对写请求不感兴趣</p><p>注意:断开连接后readonly就失效了，再次连接需要重新使用该命令。</p></div>`,22);function g(f,y){const i=p("CodeTabs");return d(),r("div",null,[b,u(i,{id:"269",data:[{id:"手动配置"},{id:"自动配置"}],active:0},{title0:a(({value:e,isActive:t})=>[n("手动配置")]),title1:a(({value:e,isActive:t})=>[n("自动配置")]),tab0:a(({value:e,isActive:t})=>[v]),tab1:a(({value:e,isActive:t})=>[k]),_:1}),h])}const C=o(m,[["render",g],["__file","redis-ha-cluster.html.vue"]]),S=JSON.parse('{"path":"/guide/database/redis/ha/deployment/redis-ha-cluster.html","title":"Redis Cluster 集群搭建","lang":"zh-CN","frontmatter":{"title":"Redis Cluster 集群搭建","description":"主机准备 拓扑架构 主从架构图主从架构图 主机信息 主机设置 主机名称设置 主机hosts设置 所有节点 关闭防火墙 所有节点 selinux设置 所有节点 安装依赖 安装和配置Redis集群 安装Redis 所有节点 下载redis 安装redis 配置启动服务(可选) 使用systemd管理redis服务 启动redis redis集群节点配置 所...","head":[["meta",{"property":"og:url","content":"https://github.com/abelit/abelit-datapeacock.git/guide/database/redis/ha/deployment/redis-ha-cluster.html"}],["meta",{"property":"og:site_name","content":"数之雀"}],["meta",{"property":"og:title","content":"Redis Cluster 集群搭建"}],["meta",{"property":"og:description","content":"主机准备 拓扑架构 主从架构图主从架构图 主机信息 主机设置 主机名称设置 主机hosts设置 所有节点 关闭防火墙 所有节点 selinux设置 所有节点 安装依赖 安装和配置Redis集群 安装Redis 所有节点 下载redis 安装redis 配置启动服务(可选) 使用systemd管理redis服务 启动redis redis集群节点配置 所..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-11T14:06:18.000Z"}],["meta",{"property":"article:author","content":"Abelit"}],["meta",{"property":"article:modified_time","content":"2024-05-11T14:06:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis Cluster 集群搭建\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-11T14:06:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Abelit\\",\\"url\\":\\"https://github.com/abelit\\"}]}"]]},"headers":[{"level":2,"title":"主机准备","slug":"主机准备","link":"#主机准备","children":[{"level":3,"title":"拓扑架构","slug":"拓扑架构","link":"#拓扑架构","children":[]},{"level":3,"title":"主机信息","slug":"主机信息","link":"#主机信息","children":[]},{"level":3,"title":"主机设置","slug":"主机设置","link":"#主机设置","children":[]},{"level":3,"title":"安装依赖","slug":"安装依赖","link":"#安装依赖","children":[]}]},{"level":2,"title":"安装和配置Redis集群","slug":"安装和配置redis集群","link":"#安装和配置redis集群","children":[{"level":3,"title":"安装Redis","slug":"安装redis","link":"#安装redis","children":[]},{"level":3,"title":"配置启动服务(可选)","slug":"配置启动服务-可选","link":"#配置启动服务-可选","children":[]},{"level":3,"title":"redis集群节点配置","slug":"redis集群节点配置","link":"#redis集群节点配置","children":[]},{"level":3,"title":"启动服务","slug":"启动服务","link":"#启动服务","children":[]},{"level":3,"title":"创建集群","slug":"创建集群","link":"#创建集群","children":[]}]},{"level":2,"title":"集群管理","slug":"集群管理","link":"#集群管理","children":[{"level":3,"title":"集群状态检查","slug":"集群状态检查","link":"#集群状态检查","children":[]}]},{"level":2,"title":"数据同步测试","slug":"数据同步测试","link":"#数据同步测试","children":[]}],"git":{"createdTime":1715436378000,"updatedTime":1715436378000,"contributors":[{"name":"ableit","email":"ychenid@live.com","commits":1}]},"readingTime":{"minutes":5.38,"words":1613},"filePathRelative":"guide/database/redis/ha/deployment/redis-ha-cluster.md","localizedDate":"2024年5月11日","autoDesc":true,"excerpt":"<h2>主机准备</h2>\\n<h3>拓扑架构</h3>\\n<figure><figcaption>主从架构图</figcaption></figure>\\n<h3>主机信息</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>编号</th>\\n<th>IP 地址</th>\\n<th>角色</th>\\n<th>操作系统</th>\\n<th>内核版本</th>\\n<th>数据库版本</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>1</td>\\n<td>10.10.13.100</td>\\n<td>redis</td>\\n<td>CentOS 7.9</td>\\n<td>3.10.0-1160.el7.x86_64</td>\\n<td>6.2.14</td>\\n</tr>\\n<tr>\\n<td>2</td>\\n<td>10.10.13.101</td>\\n<td>redis</td>\\n<td>CentOS 7.9</td>\\n<td>3.10.0-1160.el7.x86_64</td>\\n<td>6.2.14</td>\\n</tr>\\n<tr>\\n<td>3</td>\\n<td>10.10.13.102</td>\\n<td>redis</td>\\n<td>CentOS 7.9</td>\\n<td>3.10.0-1160.el7.x86_64</td>\\n<td>6.2.14</td>\\n</tr>\\n<tr>\\n<td>1</td>\\n<td>10.10.13.103</td>\\n<td>redis</td>\\n<td>CentOS 7.9</td>\\n<td>3.10.0-1160.el7.x86_64</td>\\n<td>6.2.14</td>\\n</tr>\\n<tr>\\n<td>2</td>\\n<td>10.10.13.104</td>\\n<td>redis</td>\\n<td>CentOS 7.9</td>\\n<td>3.10.0-1160.el7.x86_64</td>\\n<td>6.2.14</td>\\n</tr>\\n<tr>\\n<td>3</td>\\n<td>10.10.13.105</td>\\n<td>redis</td>\\n<td>CentOS 7.9</td>\\n<td>3.10.0-1160.el7.x86_64</td>\\n<td>6.2.14</td>\\n</tr>\\n</tbody>\\n</table>"}');export{C as comp,S as data};
