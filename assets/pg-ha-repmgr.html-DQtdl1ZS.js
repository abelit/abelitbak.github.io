import{_ as o}from"./pg-ha-repmgr-archtecture-001-BUBkfB5-.js";import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as d,o as p,c as u,b as t,w as e,f as i,d as n,a as s}from"./app-DR5J2daJ.js";const v={},m=i('<h2 id="postgresql高可用集群-repmgr" tabindex="-1"><a class="header-anchor" href="#postgresql高可用集群-repmgr"><span>PostgreSQL高可用集群(REPMGR)</span></a></h2><h3 id="原理及拓扑图" tabindex="-1"><a class="header-anchor" href="#原理及拓扑图"><span>原理及拓扑图</span></a></h3><p>repmgr是一个2ndQuadrant开发的一款复制的开源工具套件，用于管理PostgreSQL服务器集群中的复制和故障转移。最初，它主要是为了简化流副本的管理，后来发展成为一个完整的故障转移管理套件。它通过设置备用服务器，监视复制以及执行管理任务（如故障转移或手动切换操作）的工具，增强了PostgreSQL内置的热备份功能。它支持并增强了PostgreSQL内置的流复制，该复制提供了一个读/写主服务器和一个或多个只读备用服务器，其中包含主服务器数据库的近实时副本。</p><figure><img src="'+o+`" alt="PostgreSQL高可用集群(PGHA-repmgr)" tabindex="0" loading="lazy"><figcaption>PostgreSQL高可用集群(PGHA-repmgr)</figcaption></figure><p>repmgr特点：</p><ul><li><p>repmgr的特点是非常轻量，单功能全面</p></li><li><p>故障检测和自动故障切换：repmgr 可以检测到主服务器故障并自动切换到备用服务器。</p></li><li><p>自动故障恢复：repmgr 可以检测到从服务器故障并自动将其重新加入到复制拓扑中。</p></li><li><p>多个备用服务器：repmgr 支持多个备用服务器，可以在主服务器故障时自动切换到最合适的备用服务器。</p></li><li><p>灵活的复制拓扑：repmgr 支持各种复制拓扑，包括单主服务器和多主服务器。</p></li><li><p>管理和监控：repmgr 提供了用于管理和监控PostgreSQL复制的各种工具和命令。</p></li></ul><p>repmgr兼容性矩阵：</p><table><thead><tr><th>repmgr version</th><th>Supported?</th><th>Latest release</th><th>Supported PostgreSQL versions</th></tr></thead><tbody><tr><td>repmgr 5.4</td><td>(dev)</td><td>5.4.1 (2023-07-04)</td><td>9.4, 9.5, 9.6, 10, 11, 12, 13, 15</td></tr><tr><td>repmgr 5.3</td><td>YES</td><td>5.4.1 (2023-07-04)</td><td>9.4, 9.5, 9.6, 10, 11, 12, 13, 15</td></tr><tr><td>repmgr 5.2</td><td>NO</td><td>5.2.1 (2020-12-07)</td><td>9.4, 9.5, 9.6, 10, 11, 12, 13</td></tr><tr><td>repmgr 5.1</td><td>NO</td><td>5.1.0 (2020-04-13)</td><td>9.3, 9.4, 9.5, 9.6, 10, 11, 12</td></tr><tr><td>repmgr 5.0</td><td>NO</td><td>5.0 (2019-10-15)</td><td>9.3, 9.4, 9.5, 9.6, 10, 11, 12</td></tr><tr><td>repmgr 4.x</td><td>NO</td><td>4.4 (2019-06-27)</td><td>9.3, 9.4, 9.5, 9.6, 10, 11</td></tr><tr><td>repmgr 3.x</td><td>NO</td><td>3.3.2 (2017-05-30)</td><td>9.3, 9.4, 9.5, 9.6</td></tr><tr><td>repmgr 2.x</td><td>NO</td><td>2.0.3 (2015-04-16)</td><td>9.0, 9.1, 9.2, 9.3, 9.4</td></tr></tbody></table><h3 id="主机准备" tabindex="-1"><a class="header-anchor" href="#主机准备"><span>主机准备</span></a></h3><h4 id="主机信息" tabindex="-1"><a class="header-anchor" href="#主机信息"><span>主机信息</span></a></h4><table><thead><tr><th>编号</th><th>IP 地址</th><th>角色</th><th>操作系统</th><th>内核版本</th><th>数据库版本</th></tr></thead><tbody><tr><td>1</td><td>10.10.13.100</td><td>主</td><td>CentOS 7.9</td><td>3.10.0-1160.el7.x86_64</td><td>PostgreSQL 15</td></tr><tr><td>2</td><td>10.10.13.101</td><td>从</td><td>CentOS 7.9</td><td>3.10.0-1160.el7.x86_64</td><td>PostgreSQL 15</td></tr><tr><td>3</td><td>10.10.13.102</td><td>主</td><td>CentOS 7.9</td><td>3.10.0-1160.el7.x86_64</td><td>PostgreSQL 15</td></tr></tbody></table><h4 id="配置主机名称" tabindex="-1"><a class="header-anchor" href="#配置主机名称"><span>配置主机名称</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 对应的节点进行设置</span>
hostnamectl set-hostname node1
hostnamectl set-hostname node2
hostnamectl set-hostname node3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="配置-hosts" tabindex="-1"><a class="header-anchor" href="#配置-hosts"><span>配置 hosts</span></a></h4><blockquote><p>所有节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/hosts <span class="token operator">&lt;&lt;</span><span class="token string">EOF
127.0.0.1   localhost localhost.localdomain localhost4 localhost4.localdomain4
::1         localhost localhost.localdomain localhost6 localhost6.localdomain6

10.10.13.100 node1
10.10.13.101 node2
10.10.13.102 node3
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="关闭-selinux-和防火墙" tabindex="-1"><a class="header-anchor" href="#关闭-selinux-和防火墙"><span>关闭 selinux 和防火墙</span></a></h4><blockquote><p>所有节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/^SELINUX=enforcing/SELINUX=disabled/g&#39;</span> /etc/selinux/config
setenforce <span class="token number">0</span>
sestatus

systemctl stop firewalld.service
systemctl disable firewalld.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="时钟同步" tabindex="-1"><a class="header-anchor" href="#时钟同步"><span>时钟同步</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> ntpdate
ntpdate ntp1.aliyun.com

<span class="token builtin class-name">echo</span> <span class="token string">&quot;* */1 * * * ntpdate ntp1.aliyun.com&quot;</span> <span class="token operator">&gt;</span> /tmp/crontab.txt

<span class="token function">crontab</span> /tmp/crontab.txt

<span class="token function">crontab</span> <span class="token parameter variable">-l</span>

<span class="token function">rm</span> <span class="token parameter variable">-f</span> /tmp/crontab.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="安装依赖" tabindex="-1"><a class="header-anchor" href="#安装依赖"><span>安装依赖</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token function">rsync</span> sshpass <span class="token function">wget</span> flex gcc
 yum groupinstall <span class="token parameter variable">-y</span> <span class="token string">&quot;Development Tools&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="主机互信设置" tabindex="-1"><a class="header-anchor" href="#主机互信设置"><span>主机互信设置</span></a></h4><blockquote><p>在每个节点执行</p></blockquote><ul><li>生成公私钥</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>ssh-keygen <span class="token parameter variable">-t</span> rsa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>拷贝公钥到其他服务器</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># root user</span>
<span class="token assign-left variable">hosts</span><span class="token operator">=</span><span class="token string">&quot;10.10.13.100 10.10.13.101 10.10.13.102&quot;</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">host</span> <span class="token keyword">in</span> <span class="token variable">$hosts</span><span class="token punctuation">;</span> 
<span class="token keyword">do</span> 
sshpass <span class="token parameter variable">-p</span> <span class="token string">&quot;root@123&quot;</span> ssh-copy-id <span class="token parameter variable">-f</span> <span class="token parameter variable">-o</span> <span class="token assign-left variable">StrictHostKeyChecking</span><span class="token operator">=</span>no <span class="token variable">$host</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$host</span>
<span class="token keyword">done</span>

<span class="token assign-left variable">hosts</span><span class="token operator">=</span><span class="token string">&quot;10.10.13.100 10.10.13.101 10.10.13.102&quot;</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">host</span> <span class="token keyword">in</span> <span class="token variable">$hosts</span><span class="token punctuation">;</span> 
<span class="token keyword">do</span> 
sshpass <span class="token parameter variable">-p</span> <span class="token string">&quot;root@123&quot;</span> <span class="token function">ssh</span> <span class="token parameter variable">-o</span> <span class="token assign-left variable">StrictHostKeyChecking</span><span class="token operator">=</span>no <span class="token variable">$host</span> <span class="token function">hostname</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$host</span>
<span class="token keyword">done</span>

<span class="token comment"># postgres user</span>
<span class="token function">su</span> - postgres
<span class="token assign-left variable">hosts</span><span class="token operator">=</span><span class="token string">&quot;node1 node2 node3&quot;</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">host</span> <span class="token keyword">in</span> <span class="token variable">$hosts</span><span class="token punctuation">;</span> 
<span class="token keyword">do</span> 
sshpass <span class="token parameter variable">-p</span> <span class="token string">&quot;postgres&quot;</span> ssh-copy-id <span class="token parameter variable">-f</span> <span class="token parameter variable">-o</span> <span class="token assign-left variable">StrictHostKeyChecking</span><span class="token operator">=</span>no <span class="token variable">$host</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$host</span>
<span class="token keyword">done</span>


<span class="token assign-left variable">hosts</span><span class="token operator">=</span><span class="token string">&quot;node1 node2 node3&quot;</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">host</span> <span class="token keyword">in</span> <span class="token variable">$hosts</span><span class="token punctuation">;</span> 
<span class="token keyword">do</span> 
sshpass <span class="token parameter variable">-p</span> <span class="token string">&quot;postgres&quot;</span> <span class="token function">ssh</span> <span class="token parameter variable">-o</span> <span class="token assign-left variable">StrictHostKeyChecking</span><span class="token operator">=</span>no <span class="token variable">$host</span> <span class="token function">hostname</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$host</span>
<span class="token keyword">done</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="postgresql部署" tabindex="-1"><a class="header-anchor" href="#postgresql部署"><span>PostgreSQL部署</span></a></h3><h4 id="安装postgresql" tabindex="-1"><a class="header-anchor" href="#安装postgresql"><span>安装postgresql</span></a></h4><blockquote><p>在所有节点执行</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># yum install -y https://download.postgresql.org/pub/repos/yum/reporpms/EL-7-x86_64/pgdg-redhat-repo-latest.noarch.rpm</span>

yum <span class="token function">install</span> <span class="token parameter variable">-y</span> https://mirrors.aliyun.com/postgresql/repos/yum/reporpms/EL-7-x86_64/pgdg-redhat-repo-latest.noarch.rpm

<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s@https://download.postgresql.org/pub@https://mirrors.aliyun.com/postgresql@g&quot;</span> /etc/yum.repos.d/pgdg-redhat-all.repo

yum <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token function">wget</span>

<span class="token function">wget</span> <span class="token parameter variable">-O</span> /etc/yum.repos.d/epel.repo https://mirrors.aliyun.com/repo/epel-7.repo

yum <span class="token function">install</span> <span class="token parameter variable">-y</span> centos-release-scl-rh
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> llvm-toolset-7-clang

yum <span class="token function">install</span> <span class="token parameter variable">-y</span> postgresql15-server postgresql15-contrib postgresql15-devel

<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /var/lib/pgsql/15/log
<span class="token function">chown</span> <span class="token parameter variable">-R</span> postgres:postgres /var/lib/pgsql/15/log

/usr/pgsql-15/bin/postgresql-15-setup initdb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="设置postgres用户环境变量" tabindex="-1"><a class="header-anchor" href="#设置postgres用户环境变量"><span>设置postgres用户环境变量</span></a></h4><blockquote><p>所有节点</p></blockquote><ul><li>设置root环境变量</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;&gt;</span> ~/.bash_profile <span class="token operator">&lt;&lt;</span><span class="token string">&#39;EOF&#39;
# PostgreSQL Env
export PGHOME=/usr/pgsql-15
export PGDATA=/var/lib/pgsql/15/data/
export PGPORT=5432
export PGUSER=postgres
export PGDATABASE=postgres
export PGLOG=/var/lib/pgsql/15/log/postgresql.log
export PATH=$PGHOME/bin:$PATH:$HOME/bin
export LD_LIBRARY_PATH=$PGHOME/lib:$LD_LIBRARY_PATH
EOF</span>

<span class="token builtin class-name">source</span> /root/.bash_profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>设置postgres环境变量</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">su</span> - postgres

<span class="token function">cat</span> <span class="token operator">&gt;&gt;</span> ~/.bash_profile <span class="token operator">&lt;&lt;</span><span class="token string">&#39;EOF&#39;
# PostgreSQL Env
export PGHOME=/usr/pgsql-15
export PGDATA=/var/lib/pgsql/15/data/
export PGPORT=5432
export PGUSER=postgres
export PGDATABASE=postgres
export PGLOG=/var/lib/pgsql/15/log/postgresql.log
export PATH=$PGHOME/bin:$PATH:$HOME/bin
export LD_LIBRARY_PATH=$PGHOME/lib:$LD_LIBRARY_PATH
EOF</span>

<span class="token builtin class-name">exit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="repmgr安装配置" tabindex="-1"><a class="header-anchor" href="#repmgr安装配置"><span>repmgr安装配置</span></a></h3><h4 id="安装repmgr" tabindex="-1"><a class="header-anchor" href="#安装repmgr"><span>安装repmgr</span></a></h4><blockquote><p>所有节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 下载并解压</span>
<span class="token comment"># wget --no-check-certificate -c https://repmgr.org/download/repmgr-5.4.1.tar.gz </span>
<span class="token function">wget</span> <span class="token parameter variable">-O</span> repmgr-5.4.1.tar.gz https://codeload.github.com/EnterpriseDB/repmgr/tar.gz/refs/tags/v5.4.1
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> repmgr-5.4.1.tar.gz <span class="token parameter variable">-C</span> /usr/pgsql-15/share/contrib/
<span class="token builtin class-name">cd</span> /usr/pgsql-15/share/contrib/
<span class="token comment"># 编译安装</span>
<span class="token function">mv</span> repmgr-5.4.1/ repmgr
<span class="token builtin class-name">cd</span> repmgr
./configure <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果产生错误，需要进行如下设置：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> curl-devel
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> json-c
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> json-c-devel

<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/lib64/libcurl.so.4.3.0  /usr/lib64/libcurl.so
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/lib64/libjson-c.so.2.0.1  /usr/lib64/libjson-c.so
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/lib64/libselinux.so.1  /usr/lib64/libselinux.so
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/lib64/libzstd.so.1 /usr/lib64/libzstd.so
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/lib64/liblz4.so.1 /usr/lib64/liblz4.so
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/lib64/libxslt.so.1 /usr/lib64/libxslt.so
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/lib64/libxml2.so.2 /usr/lib64/libxml2.so
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/lib64/libpam.so.0 /usr/lib64/libpam.so
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/lib64/libssl.so.10 /usr/lib64/libssl.so
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/lib64/libcrypto.so.10 /usr/lib64/libcrypto.so
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/lib64/libgssapi_krb5.so.2 /usr/lib64/libgssapi_krb5.so
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/lib64/libz.so.1 /usr/lib64/libz.so
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/lib64/libreadline.so.6  /usr/lib64/libreadline.so
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="repmgr" tabindex="-1"><a class="header-anchor" href="#repmgr"><span>repmgr</span></a></h4><ul><li>节点1 编辑<code>/etc/repmgr.conf</code>,设置如下内容：</li></ul><div class="language-conf line-numbers-mode" data-ext="conf" data-title="conf"><pre class="language-conf"><code>cat &gt; /etc/repmgr.conf &lt;&lt;&#39;EOF&#39;
#repmgr基本配置信息
node_id=1
node_name=&#39;node1&#39;
conninfo=&#39;host=node1 user=repmgr dbname=repmgr connect_timeout=2&#39;
data_directory=&#39;/var/lib/pgsql/15/data&#39;
 
#repmgr日志配置
log_level=INFO
log_facility=STDERR
log_file=&#39;/var/lib/pgsql/15/log/repmgr.log&#39;
log_status_interval=10
 
#可执行文件配置
pg_bindir=&#39;/usr/pgsql-15/bin&#39;
 
#集群faibver设置
failover=&#39;automatic&#39;
promote_command=&#39;/usr/pgsql-15/bin/repmgr standby promote -f /etc/repmgr.conf --log-to-file&#39;
follow_command=&#39;/usr/pgsql-15/bin/repmgr standby follow -f /etc/repmgr.conf --log-to-file --upstream-node-id=%n&#39;
log_file=&#39;/var/lib/pgsql/15/log/repmgr.log&#39;
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>节点2 编辑<code>/etc/repmgr.conf</code>,设置如下内容：</li></ul><div class="language-conf line-numbers-mode" data-ext="conf" data-title="conf"><pre class="language-conf"><code>cat &gt; /etc/repmgr.conf &lt;&lt;&#39;EOF&#39;
#repmgr基本配置信息
node_id=2
node_name=&#39;node2&#39;
conninfo=&#39;host=node2 user=repmgr dbname=repmgr connect_timeout=2&#39;
data_directory=&#39;/var/lib/pgsql/15/data&#39;
 
#repmgr日志配置
log_level=INFO
log_facility=STDERR
log_file=&#39;/var/lib/pgsql/15/log/repmgr.log&#39;
log_status_interval=10
 
#可执行文件配置
pg_bindir=&#39;/usr/pgsql-15/bin&#39;
 
#集群faibver设置
failover=&#39;automatic&#39;
promote_command=&#39;/usr/pgsql-15/bin/repmgr standby promote -f /etc/repmgr.conf --log-to-file&#39;
follow_command=&#39;/usr/pgsql-15/bin/repmgr standby follow -f /etc/repmgr.conf --log-to-file --upstream-node-id=%n&#39;
log_file=&#39;/var/lib/pgsql/15/log/repmgr.log&#39;
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>节点3 编辑<code>/etc/repmgr.conf</code>,设置如下内容：</li></ul><div class="language-conf line-numbers-mode" data-ext="conf" data-title="conf"><pre class="language-conf"><code>cat &gt; /etc/repmgr.conf &lt;&lt;&#39;EOF&#39;
#repmgr基本配置信息
node_id=3
node_name=&#39;node3&#39;
conninfo=&#39;host=node3 user=repmgr dbname=repmgr connect_timeout=2&#39;
data_directory=&#39;/var/lib/pgsql/15/data&#39;
 
#repmgr日志配置
log_level=INFO
log_facility=STDERR
log_file=&#39;/var/lib/pgsql/15/log/repmgr.log&#39;
log_status_interval=10
 
#可执行文件配置
pg_bindir=&#39;/usr/pgsql-15/bin&#39;
 
#集群faibver设置
failover=&#39;automatic&#39;
promote_command=&#39;/usr/pgsql-15/bin/repmgr standby promote -f /etc/repmgr.conf --log-to-file&#39;
follow_command=&#39;/usr/pgsql-15/bin/repmgr standby follow -f /etc/repmgr.conf --log-to-file --upstream-node-id=%n&#39;
log_file=&#39;/var/lib/pgsql/15/log/repmgr.log&#39;
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="流复制参数配置" tabindex="-1"><a class="header-anchor" href="#流复制参数配置"><span>流复制参数配置</span></a></h4><blockquote><p>所有节点 编辑<code>/var/lib/pgsql/15/data/postgresql.conf</code>，设置如下参数：</p></blockquote>`,54),b=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[n("listen_addresses "),s("span",{class:"token operator"},"="),n(),s("span",{class:"token string"},"'*'"),n(`
max_wal_senders `),s("span",{class:"token operator"},"="),n(),s("span",{class:"token number"},"10"),n(`
max_replication_slots `),s("span",{class:"token operator"},"="),n(),s("span",{class:"token number"},"10"),n(`
wal_level `),s("span",{class:"token operator"},"="),n(` replica
hot_standby `),s("span",{class:"token operator"},"="),n(` on
wal_log_hints `),s("span",{class:"token operator"},"="),n(` on
full_page_writes `),s("span",{class:"token operator"},"="),n(` on
shared_preload_libraries `),s("span",{class:"token operator"},"="),n(),s("span",{class:"token string"},"'repmgr'"),n(`
wal_keep_size `),s("span",{class:"token operator"},"="),n(),s("span",{class:"token number"},"100"),n(`
archive_mode `),s("span",{class:"token operator"},"="),n(` on
archive_command `),s("span",{class:"token operator"},"="),n(),s("span",{class:"token string"},"'test ! -f /var/lib/pgsql/15/data/archive/%f && cp %p /var/lib/pgsql/15/data/archive/%f'"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),g=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"cat"),n(),s("span",{class:"token operator"},">>"),n(" /var/lib/pgsql/15/data/postgresql.conf "),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},`'EOF'
listen_addresses = '*'
max_wal_senders = 10
max_replication_slots = 10
wal_level = replica
hot_standby = on
wal_log_hints = on
full_page_writes = on
shared_preload_libraries = 'repmgr'
wal_keep_size = 100
archive_mode = on
archive_command = 'test ! -f /var/lib/pgsql/15/data/archive/%f && cp %p /var/lib/pgsql/15/data/archive/%f'
EOF`),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),h=i(`<h4 id="数据库配置" tabindex="-1"><a class="header-anchor" href="#数据库配置"><span>数据库配置</span></a></h4><ul><li>创建repmgr数据库及用户</li></ul><blockquote><p>主节点</p></blockquote><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>systemctl <span class="token keyword">start</span> postgresql<span class="token operator">-</span><span class="token number">15</span>

su <span class="token operator">-</span> postgres

psql

<span class="token keyword">create</span> <span class="token keyword">database</span> repmgr<span class="token punctuation">;</span>
<span class="token keyword">create</span> <span class="token keyword">user</span> repmgr <span class="token keyword">with</span> password <span class="token string">&#39;repmgr&#39;</span> superuser login<span class="token punctuation">;</span>
<span class="token keyword">alter</span> <span class="token keyword">database</span> repmgr owner <span class="token keyword">to</span> repmgr<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>配置pg_hba.conf</li></ul><blockquote><p>所有节点 编辑<code>/var/lib/pgsql/15/data/pg_hba.conf</code>，设置如下参数：</p></blockquote>`,6),k=s("div",{class:"language-conf line-numbers-mode","data-ext":"conf","data-title":"conf"},[s("pre",{class:"language-conf"},[s("code",null,`# TYPE  DATABASE        USER            ADDRESS                 METHOD
 
# "local" is for Unix domain socket connections only
local   all           all                                     trust
# IPv4 local connections:
host       all        all             127.0.0.1/32            trust
local   repmgr     repmgr                                     trust
host    repmgr     repmgr             127.0.0.1/32            trust
host    repmgr     repmgr             10.10.13.0/24        trust
host       all        all             0.0.0.0/0               md5
# IPv6 local connections:
host       all        all             ::1/128                 trust
# Allow replication connections from localhost, by a user with the
# replication privilege.
local   replication     all                                     trust
host    replication     all             127.0.0.1/32            trust
host    replication     all             ::1/128                 trust
 
local   replication     repmgr                                     trust
host    replication     repmgr             127.0.0.1/32            trust
host    replication     repmgr            10.10.13.0/24        trust
`)]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),f=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"cat"),n(),s("span",{class:"token operator"},">"),n(" /var/lib/pgsql/15/data/pg_hba.conf "),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},`'EOF'
# PostgreSQL Client Authentication Configuration File
# ===================================================
#
# Refer to the "Client Authentication" section in the PostgreSQL
# documentation for a complete description of this file.  A short
# synopsis follows.
#
# This file controls: which hosts are allowed to connect, how clients
# are authenticated, which PostgreSQL user names they can use, which
# databases they can access.  Records take one of these forms:
#
# local         DATABASE  USER  METHOD  [OPTIONS]
# host          DATABASE  USER  ADDRESS  METHOD  [OPTIONS]
# hostssl       DATABASE  USER  ADDRESS  METHOD  [OPTIONS]
# hostnossl     DATABASE  USER  ADDRESS  METHOD  [OPTIONS]
# hostgssenc    DATABASE  USER  ADDRESS  METHOD  [OPTIONS]
# hostnogssenc  DATABASE  USER  ADDRESS  METHOD  [OPTIONS]
#
# (The uppercase items must be replaced by actual values.)
#
# The first field is the connection type:
# - "local" is a Unix-domain socket
# - "host" is a TCP/IP socket (encrypted or not)
# - "hostssl" is a TCP/IP socket that is SSL-encrypted
# - "hostnossl" is a TCP/IP socket that is not SSL-encrypted
# - "hostgssenc" is a TCP/IP socket that is GSSAPI-encrypted
# - "hostnogssenc" is a TCP/IP socket that is not GSSAPI-encrypted
#
# DATABASE can be "all", "sameuser", "samerole", "replication", a
# database name, or a comma-separated list thereof. The "all"
# keyword does not match "replication". Access to replication
# must be enabled in a separate record (see example below).
#
# USER can be "all", a user name, a group name prefixed with "+", or a
# comma-separated list thereof.  In both the DATABASE and USER fields
# you can also write a file name prefixed with "@" to include names
# from a separate file.
#
# ADDRESS specifies the set of hosts the record matches.  It can be a
# host name, or it is made up of an IP address and a CIDR mask that is
# an integer (between 0 and 32 (IPv4) or 128 (IPv6) inclusive) that
# specifies the number of significant bits in the mask.  A host name
# that starts with a dot (.) matches a suffix of the actual host name.
# Alternatively, you can write an IP address and netmask in separate
# columns to specify the set of hosts.  Instead of a CIDR-address, you
# can write "samehost" to match any of the server's own IP addresses,
# or "samenet" to match any address in any subnet that the server is
# directly connected to.
#
# METHOD can be "trust", "reject", "md5", "password", "scram-sha-256",
# "gss", "sspi", "ident", "peer", "pam", "ldap", "radius" or "cert".
# Note that "password" sends passwords in clear text; "md5" or
# "scram-sha-256" are preferred since they send encrypted passwords.
#
# OPTIONS are a set of options for the authentication in the format
# NAME=VALUE.  The available options depend on the different
# authentication methods -- refer to the "Client Authentication"
# section in the documentation for a list of which options are
# available for which authentication methods.
#
# Database and user names containing spaces, commas, quotes and other
# special characters must be quoted.  Quoting one of the keywords
# "all", "sameuser", "samerole" or "replication" makes the name lose
# its special character, and just match a database or username with
# that name.
#
# This file is read on server startup and when the server receives a
# SIGHUP signal.  If you edit the file on a running system, you have to
# SIGHUP the server for the changes to take effect, run "pg_ctl reload",
# or execute "SELECT pg_reload_conf()".
#
# Put your actual configuration here
# ----------------------------------
#
# If you want to allow non-local connections, you need to add more
# "host" records.  In that case you will also need to make PostgreSQL
# listen on a non-local interface via the listen_addresses
# configuration parameter, or via the -i or -h command line switches.



# # TYPE  DATABASE        USER            ADDRESS                 METHOD

# # "local" is for Unix domain socket connections only
# local   all             all                                     peer
# # IPv4 local connections:
# host    all             all             127.0.0.1/32            scram-sha-256
# # IPv6 local connections:
# host    all             all             ::1/128                 scram-sha-256
# # Allow replication connections from localhost, by a user with the
# # replication privilege.
# local   replication     all                                     peer
# host    replication     all             127.0.0.1/32            scram-sha-256
# host    replication     all             ::1/128                 scram-sha-256

# TYPE  DATABASE        USER            ADDRESS                 METHOD
 
# "local" is for Unix domain socket connections only
local   all           all                                     trust
# IPv4 local connections:
host       all        all             127.0.0.1/32            trust
local   repmgr     repmgr                                     trust
host    repmgr     repmgr             127.0.0.1/32            trust
host    repmgr     repmgr             10.10.13.0/24           trust
host       all        all             0.0.0.0/0               md5
# IPv6 local connections:
host       all        all             ::1/128                 trust
# Allow replication connections from localhost, by a user with the
# replication privilege.
local   replication     all                                   trust
host    replication     all           127.0.0.1/32            trust
host    replication     all           ::1/128                 trust
 
local   replication     repmgr                                trust
host    replication     repmgr        127.0.0.1/32            trust
host    replication     repmgr        10.10.13.0/24           trust
EOF`),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),q=i(`<h3 id="repmgr集群构建" tabindex="-1"><a class="header-anchor" href="#repmgr集群构建"><span>repmgr集群构建</span></a></h3><h4 id="主机点加入集群" tabindex="-1"><a class="header-anchor" href="#主机点加入集群"><span>主机点加入集群</span></a></h4><blockquote><p>在主节点</p></blockquote><ul><li>启动node1节点数据库</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">su</span> - postgres
pg_ctl stop
pg_ctl start <span class="token parameter variable">-l</span> <span class="token variable">$PGLOG</span>

<span class="token builtin class-name">exit</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>node1节点，将node1数据库注册至集群，并查看状态</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">su</span> - postgres <span class="token parameter variable">-c</span> <span class="token string">&quot;/usr/pgsql-15/bin/repmgr -f /etc/repmgr.conf primary register&quot;</span>
<span class="token function">su</span> - postgres <span class="token parameter variable">-c</span> <span class="token string">&quot;/usr/pgsql-15/bin/repmgr -f /etc/repmgr.conf cluster show&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="从节点加入集群" tabindex="-1"><a class="header-anchor" href="#从节点加入集群"><span>从节点加入集群</span></a></h4><blockquote><p>在所有从节点分别执行</p></blockquote><ul><li>测试连通性并克隆node1数据库数据</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">su</span> - postgres <span class="token parameter variable">-c</span> <span class="token string">&quot;/usr/pgsql-15/bin/repmgr -h node1 -U repmgr -d repmgr -f /etc/repmgr.conf standby clone --dry-run&quot;</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/lib/pgsql/15/data/*
<span class="token function">su</span> - postgres <span class="token parameter variable">-c</span> <span class="token string">&quot;/usr/pgsql-15/bin/repmgr -h node1 -U repmgr -d repmgr -f /etc/repmgr.conf standby clone&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>启动从节点节点数据库</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">su</span> - postgres
pg_ctl start <span class="token parameter variable">-l</span> <span class="token variable">$PGLOG</span>

<span class="token builtin class-name">exit</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>从节点节点，将从节点数据库注册到集群，并查看状态</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">su</span> - postgres <span class="token parameter variable">-c</span> <span class="token string">&quot;/usr/pgsql-15/bin/repmgr -f /etc/repmgr.conf standby register&quot;</span>
<span class="token function">su</span> - postgres <span class="token parameter variable">-c</span> <span class="token string">&quot;/usr/pgsql-15/bin/repmgr -f /etc/repmgr.conf cluster show&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="开启守护进程" tabindex="-1"><a class="header-anchor" href="#开启守护进程"><span>开启守护进程</span></a></h4><ul><li>开启守护进程（故障自动转移）</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">su</span> - postgres <span class="token parameter variable">-c</span> <span class="token string">&quot;/usr/pgsql-15/bin/repmgrd -f /etc/repmgr.conf -d  -p /tmp/repmgrd.pid&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>停止守护进程</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token assign-left variable">REPMGRD_PID</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> repmgrd<span class="token operator">|</span><span class="token function">grep</span>   <span class="token parameter variable">-v</span> <span class="token function">grep</span> <span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{print  $2}&#39;</span><span class="token variable">\`</span></span>
<span class="token function">kill</span> <span class="token parameter variable">-9</span> <span class="token variable">$REPMGRD_PID</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="repmgr管理" tabindex="-1"><a class="header-anchor" href="#repmgr管理"><span>repmgr管理</span></a></h3><ul><li>主备切换并查看</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">su</span> - postgres <span class="token parameter variable">-c</span> <span class="token string">&quot;/usr/pgsql-15/bin/repmgr -f /etc/repmgr.conf standby switchover --siblings-follow -U repmgr  --verbose&quot;</span>
<span class="token function">su</span> - postgres <span class="token parameter variable">-c</span> <span class="token string">&quot;/usr/pgsql-15/bin/repmgr -f /etc/repmgr.conf cluster show&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>从库重新跟随新主库</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">su</span> - postgres <span class="token parameter variable">-c</span> <span class="token string">&quot;/usr/pgsql-15/bin/repmgr -f /etc/repmgr.conf standby follow&quot;</span>
<span class="token function">su</span> - postgres <span class="token parameter variable">-c</span> <span class="token string">&quot;/usr/pgsql-15/bin/repmgr -f /etc/repmgr.conf cluster show&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>驱逐备库节点</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">su</span> - postgres <span class="token parameter variable">-c</span> <span class="token string">&quot;/usr/pgsql-15/bin/repmgr standby unregister -f /etc/repmgr.conf&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>注销不活动的主节点</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">su</span> - postgres <span class="token parameter variable">-c</span> <span class="token string">&quot;/usr/pgsql-15/bin/repmgr primary unregister -f /etc/repmgr.conf&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>主节点故障时，手动升级备库为主节点</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">su</span> - postgres <span class="token parameter variable">-c</span> <span class="token string">&quot;/usr/pgsql-15/bin/repmgr standby promote -f /etc/repmgr.conf --siblings-follow&quot;</span>
<span class="token function">su</span> - postgres <span class="token parameter variable">-c</span> <span class="token string">&quot;/usr/pgsql-15/bin/repmgr -f /etc/repmgr.conf standby follow&quot;</span>
<span class="token function">su</span> - postgres <span class="token parameter variable">-c</span> <span class="token string">&quot;/usr/pgsql-15/bin/repmgr -f /etc/repmgr.conf cluster show&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>故障节点修复后，重新加入集群</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">su</span> - postgres <span class="token parameter variable">-c</span> <span class="token string">&quot;/usr/pgsql-15/bin/repmgr node rejoin -d &#39;host=node2 user=repmgr dbname=repmgr&#39; --force-rewind --verbose -f /etc/repmgr.conf&quot;</span>
<span class="token function">su</span> - postgres <span class="token parameter variable">-c</span> <span class="token string">&quot;/usr/pgsql-15/bin/repmgr -f /etc/repmgr.conf cluster show&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>强制重新注册</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">su</span> - postgres <span class="token parameter variable">-c</span> <span class="token string">&quot;/usr/pgsql-15/bin/repmgr -f /etc/repmgr.conf primary register --force&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="数据同步测试" tabindex="-1"><a class="header-anchor" href="#数据同步测试"><span>数据同步测试</span></a></h3><p>在主节点插入数据</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">su</span> - postgres

psql

create database abelitdb<span class="token punctuation">;</span>

<span class="token punctuation">\\</span>c abelitdb<span class="token punctuation">;</span>

create table abelit_users<span class="token punctuation">(</span>id int, name varchar<span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">))</span><span class="token punctuation">;</span>

insert into abelit_users values<span class="token punctuation">(</span><span class="token number">1</span>,<span class="token string">&#39;abelit&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">select</span> id,name from abelit_users<span class="token punctuation">;</span>
<span class="token builtin class-name">exit</span>

<span class="token builtin class-name">exit</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在从节点查看数据是否同步</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">su</span> - postgres

psql

<span class="token punctuation">\\</span>c abelitdb<span class="token punctuation">;</span>

<span class="token keyword">select</span> id,name from abelit_users<span class="token punctuation">;</span>

<span class="token builtin class-name">exit</span>

<span class="token builtin class-name">exit</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,40);function y(_,x){const r=d("CodeTabs");return p(),u("div",null,[m,t(r,{id:"415",data:[{id:"手动设置"},{id:"命令设置"}],active:0},{title0:e(({value:a,isActive:l})=>[n("手动设置")]),title1:e(({value:a,isActive:l})=>[n("命令设置")]),tab0:e(({value:a,isActive:l})=>[b]),tab1:e(({value:a,isActive:l})=>[g]),_:1}),h,t(r,{id:"454",data:[{id:"手动设置"},{id:"命令设置"}],active:0},{title0:e(({value:a,isActive:l})=>[n("手动设置")]),title1:e(({value:a,isActive:l})=>[n("命令设置")]),tab0:e(({value:a,isActive:l})=>[k]),tab1:e(({value:a,isActive:l})=>[f]),_:1}),q])}const E=c(v,[["render",y],["__file","pg-ha-repmgr.html.vue"]]),A=JSON.parse('{"path":"/guide/database/postgresql/ha/deployment/pg-ha-repmgr.html","title":"PostgreSQL高可用集群(repmgr)","lang":"zh-CN","frontmatter":{"title":"PostgreSQL高可用集群(repmgr)","description":"PostgreSQL高可用集群(REPMGR) 原理及拓扑图 repmgr是一个2ndQuadrant开发的一款复制的开源工具套件，用于管理PostgreSQL服务器集群中的复制和故障转移。最初，它主要是为了简化流副本的管理，后来发展成为一个完整的故障转移管理套件。它通过设置备用服务器，监视复制以及执行管理任务（如故障转移或手动切换操作）的工具，增强了...","head":[["meta",{"property":"og:url","content":"https://github.com/abelit/abelit-datapeacock.git/guide/database/postgresql/ha/deployment/pg-ha-repmgr.html"}],["meta",{"property":"og:site_name","content":"数之雀"}],["meta",{"property":"og:title","content":"PostgreSQL高可用集群(repmgr)"}],["meta",{"property":"og:description","content":"PostgreSQL高可用集群(REPMGR) 原理及拓扑图 repmgr是一个2ndQuadrant开发的一款复制的开源工具套件，用于管理PostgreSQL服务器集群中的复制和故障转移。最初，它主要是为了简化流副本的管理，后来发展成为一个完整的故障转移管理套件。它通过设置备用服务器，监视复制以及执行管理任务（如故障转移或手动切换操作）的工具，增强了..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-11T14:06:18.000Z"}],["meta",{"property":"article:author","content":"Abelit"}],["meta",{"property":"article:modified_time","content":"2024-05-11T14:06:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"PostgreSQL高可用集群(repmgr)\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-11T14:06:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Abelit\\",\\"url\\":\\"https://github.com/abelit\\"}]}"]]},"headers":[{"level":2,"title":"PostgreSQL高可用集群(REPMGR)","slug":"postgresql高可用集群-repmgr","link":"#postgresql高可用集群-repmgr","children":[{"level":3,"title":"原理及拓扑图","slug":"原理及拓扑图","link":"#原理及拓扑图","children":[]},{"level":3,"title":"主机准备","slug":"主机准备","link":"#主机准备","children":[]},{"level":3,"title":"PostgreSQL部署","slug":"postgresql部署","link":"#postgresql部署","children":[]},{"level":3,"title":"repmgr安装配置","slug":"repmgr安装配置","link":"#repmgr安装配置","children":[]},{"level":3,"title":"repmgr集群构建","slug":"repmgr集群构建","link":"#repmgr集群构建","children":[]},{"level":3,"title":"repmgr管理","slug":"repmgr管理","link":"#repmgr管理","children":[]},{"level":3,"title":"数据同步测试","slug":"数据同步测试","link":"#数据同步测试","children":[]}]}],"git":{"createdTime":1715436378000,"updatedTime":1715436378000,"contributors":[{"name":"ableit","email":"ychenid@live.com","commits":1}]},"readingTime":{"minutes":9.88,"words":2964},"filePathRelative":"guide/database/postgresql/ha/deployment/pg-ha-repmgr.md","localizedDate":"2024年5月11日","autoDesc":true,"excerpt":"<h2>PostgreSQL高可用集群(REPMGR)</h2>\\n<h3>原理及拓扑图</h3>\\n<p>repmgr是一个2ndQuadrant开发的一款复制的开源工具套件，用于管理PostgreSQL服务器集群中的复制和故障转移。最初，它主要是为了简化流副本的管理，后来发展成为一个完整的故障转移管理套件。它通过设置备用服务器，监视复制以及执行管理任务（如故障转移或手动切换操作）的工具，增强了PostgreSQL内置的热备份功能。它支持并增强了PostgreSQL内置的流复制，该复制提供了一个读/写主服务器和一个或多个只读备用服务器，其中包含主服务器数据库的近实时副本。</p>\\n<figure><figcaption>PostgreSQL高可用集群(PGHA-repmgr)</figcaption></figure>"}');export{E as comp,A as data};
