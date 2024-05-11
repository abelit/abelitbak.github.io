import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r,o as b,c as d,b as t,w as s,a as e,f as p,d as a}from"./app-DR5J2daJ.js";const u={},x=e("h2",{id:"基于centos环境",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#基于centos环境"},[e("span",null,"基于CentOS环境")])],-1),h=e("h3",{id:"安装zabbix依赖",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装zabbix依赖"},[e("span",null,"安装Zabbix依赖")])],-1),v=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"rpm"),a(),e("span",{class:"token parameter variable"},"-Uvh"),a(` https://repo.zabbix.com/zabbix/6.0/rhel/7/x86_64/zabbix-release-6.0-4.el7.noarch.rpm
yum clean all
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),m=e("p",null,"支持版本CentOS 8.x Alma Linux 8 Rocky Linux 8",-1),g=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"rpm"),a(),e("span",{class:"token parameter variable"},"-Uvh"),a(` https://repo.zabbix.com/zabbix/6.0/rhel/8/x86_64/zabbix-release-6.0-4.el8.noarch.rpm
dnf clean all
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),k=e("p",null,[a("支持版本CentOS 9.x Alma Linux 9 Rocky Linux 9 编辑"),e("code",null,"/etc/yum.repos.d/epel.repo"),a(",添加如下信息（禁用epel提供的zabbix源）：")],-1),z=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token punctuation"},"["),a("epel"),e("span",{class:"token punctuation"},"]"),a(`
`),e("span",{class:"token punctuation"},".."),a(`.
`),e("span",{class:"token assign-left variable"},"excludepkgs"),e("span",{class:"token operator"},"="),a(`zabbix*
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),_=e("p",null,"安装Zabbix官方依赖：",-1),y=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"rpm"),a(),e("span",{class:"token parameter variable"},"-Uvh"),a(` https://repo.zabbix.com/zabbix/6.0/rhel/9/x86_64/zabbix-release-6.0-4.el9.noarch.rpm
dnf clean all
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),f=e("h3",{id:"安装zabbix-server-frontend-agent",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装zabbix-server-frontend-agent"},[e("span",null,"安装Zabbix Server,Frontend,Agent")])],-1),S=e("h4",{id:"centos-6-x-7-x",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#centos-6-x-7-x"},[e("span",null,"CentOS 6.x-7.x")])],-1),C=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[a("yum "),e("span",{class:"token function"},"install"),a(` zabbix-server-mysql zabbix-web-mysql zabbix-nginx-conf zabbix-sql-scripts zabbix-selinux-policy zabbix-agent
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),q=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[a("yum "),e("span",{class:"token function"},"install"),a(` zabbix-server-pgsql zabbix-web-pgsql zabbix-nginx-conf zabbix-sql-scripts zabbix-selinux-policy zabbix-agent
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),A=e("h4",{id:"centos-8-x",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#centos-8-x"},[e("span",null,"CentOS 8.x+")])],-1),O=e("p",null,"主要版本：",-1),w=e("ul",null,[e("li",null,"CentOS 8 Stream"),e("li",null,"CentOS 9 Stream"),e("li",null,"Alma Linux 8"),e("li",null,"Alma Linux 9"),e("li",null,"Rocky Linux 8"),e("li",null,"Rocky Linux 9")],-1),L=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[a("dnf "),e("span",{class:"token function"},"install"),a(` zabbix-server-mysql zabbix-web-mysql zabbix-nginx-conf zabbix-sql-scripts zabbix-selinux-policy zabbix-agent
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),Z=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[a("dnf "),e("span",{class:"token function"},"install"),a(` zabbix-server-pgsql zabbix-web-pgsql zabbix-nginx-conf zabbix-sql-scripts zabbix-selinux-policy zabbix-agent
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),N=p(`<h3 id="创建初始数据库" tabindex="-1"><a class="header-anchor" href="#创建初始数据库"><span>创建初始数据库</span></a></h3><h4 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql"><span>MySQL</span></a></h4><ul><li>创建数据库</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">database</span> zabbix <span class="token keyword">character</span> <span class="token keyword">set</span> utf8mb4 <span class="token keyword">collate</span> utf8mb4_bin<span class="token punctuation">;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,22);function P(R,T){const c=r("Tabs"),l=r("CodeTabs");return b(),d("div",null,[x,h,t(c,{id:"6",data:[{id:"CentOS 7.x"},{id:"CentOS 8.x"},{id:"CentOS 9.x"}],active:0},{title0:s(({value:n,isActive:i})=>[a("CentOS 7.x")]),title1:s(({value:n,isActive:i})=>[a("CentOS 8.x")]),title2:s(({value:n,isActive:i})=>[a("CentOS 9.x")]),tab0:s(({value:n,isActive:i})=>[v]),tab1:s(({value:n,isActive:i})=>[m,g]),tab2:s(({value:n,isActive:i})=>[k,z,_,y]),_:1}),f,S,t(l,{id:"33",data:[{id:"MySQL+Nginx"},{id:"PG+Nginx"}],active:0},{title0:s(({value:n,isActive:i})=>[a("MySQL+Nginx")]),title1:s(({value:n,isActive:i})=>[a("PG+Nginx")]),tab0:s(({value:n,isActive:i})=>[C]),tab1:s(({value:n,isActive:i})=>[q]),_:1}),A,O,w,t(l,{id:"79",data:[{id:"MySQL+Nginx"},{id:"PG+Nginx"}],active:0},{title0:s(({value:n,isActive:i})=>[a("MySQL+Nginx")]),title1:s(({value:n,isActive:i})=>[a("PG+Nginx")]),tab0:s(({value:n,isActive:i})=>[L]),tab1:s(({value:n,isActive:i})=>[Z]),_:1}),N])}const Q=o(u,[["render",P],["__file","install-zabbix-server.html.vue"]]),B=JSON.parse('{"path":"/guide/devops/zabbix/installation/6.0/install-zabbix-server.html","title":"安装Zabbix Server","lang":"zh-CN","frontmatter":{"title":"安装Zabbix Server","description":"基于CentOS环境 安装Zabbix依赖 安装Zabbix Server,Frontend,Agent CentOS 6.x-7.x CentOS 8.x+ 主要版本： CentOS 8 Stream CentOS 9 Stream Alma Linux 8 Alma Linux 9 Rocky Linux 8 Rocky Linux 9 创建初始数...","head":[["meta",{"property":"og:url","content":"https://github.com/abelit/abelit-datapeacock.git/guide/devops/zabbix/installation/6.0/install-zabbix-server.html"}],["meta",{"property":"og:site_name","content":"数之雀"}],["meta",{"property":"og:title","content":"安装Zabbix Server"}],["meta",{"property":"og:description","content":"基于CentOS环境 安装Zabbix依赖 安装Zabbix Server,Frontend,Agent CentOS 6.x-7.x CentOS 8.x+ 主要版本： CentOS 8 Stream CentOS 9 Stream Alma Linux 8 Alma Linux 9 Rocky Linux 8 Rocky Linux 9 创建初始数..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-11T14:06:18.000Z"}],["meta",{"property":"article:author","content":"Abelit"}],["meta",{"property":"article:modified_time","content":"2024-05-11T14:06:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"安装Zabbix Server\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-11T14:06:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Abelit\\",\\"url\\":\\"https://github.com/abelit\\"}]}"]]},"headers":[{"level":2,"title":"基于CentOS环境","slug":"基于centos环境","link":"#基于centos环境","children":[{"level":3,"title":"安装Zabbix依赖","slug":"安装zabbix依赖","link":"#安装zabbix依赖","children":[]},{"level":3,"title":"安装Zabbix Server,Frontend,Agent","slug":"安装zabbix-server-frontend-agent","link":"#安装zabbix-server-frontend-agent","children":[]},{"level":3,"title":"创建初始数据库","slug":"创建初始数据库","link":"#创建初始数据库","children":[]},{"level":3,"title":"配置Zabbix Server","slug":"配置zabbix-server","link":"#配置zabbix-server","children":[]},{"level":3,"title":"启动Zabbix Server","slug":"启动zabbix-server","link":"#启动zabbix-server","children":[]}]}],"git":{"createdTime":1715436378000,"updatedTime":1715436378000,"contributors":[{"name":"ableit","email":"ychenid@live.com","commits":1}]},"readingTime":{"minutes":1.4,"words":420},"filePathRelative":"guide/devops/zabbix/installation/6.0/install-zabbix-server.md","localizedDate":"2024年5月11日","autoDesc":true,"excerpt":"<h2>基于CentOS环境</h2>\\n<h3>安装Zabbix依赖</h3>\\n\\n<h3>安装Zabbix Server,Frontend,Agent</h3>\\n<h4>CentOS 6.x-7.x</h4>\\n\\n<h4>CentOS 8.x+</h4>\\n<p>主要版本：</p>\\n<ul>\\n<li>CentOS 8 Stream</li>\\n<li>CentOS 9 Stream</li>\\n<li>Alma Linux 8</li>\\n<li>Alma Linux 9</li>\\n<li>Rocky Linux 8</li>\\n<li>Rocky Linux 9</li>\\n</ul>\\n\\n<h3>创建初始数据库</h3>"}');export{Q as comp,B as data};
