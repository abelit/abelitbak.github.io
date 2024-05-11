import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as e,f as n}from"./app-DR5J2daJ.js";const l={},t=n(`<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2><p>rlwrap 是GitHub的一个项目：使用readline封装一些linux命令。例如：sqlplus，rman等等，配合 alias 一起食用更佳。</p><h2 id="安装配置" tabindex="-1"><a class="header-anchor" href="#安装配置"><span>安装配置</span></a></h2><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h3><ul><li>安装readline依赖包</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> readline*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>下载rlwrap</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-xvf</span> rlwrap-0.42.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>下载地址：https://github.com/hanslub42/rlwrap/releases/tag/v0.45.2</p></blockquote><ul><li>安装rlwrap</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> rlwrap-0.42
./configure <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置环境变量" tabindex="-1"><a class="header-anchor" href="#配置环境变量"><span>配置环境变量</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 添加配置</span>
<span class="token function">cat</span> <span class="token operator">&lt;&lt;</span>EOF<span class="token operator">&gt;&gt;</span> ~/.bash_profile
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">sqlplus</span><span class="token operator">=</span><span class="token string">&#39;rlwrap sqlplus&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">rman</span><span class="token operator">=</span><span class="token string">&#39;rlwrap rman&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">lsnrctl</span><span class="token operator">=</span><span class="token string">&#39;rlwrap lsnrctl&#39;</span>
EOF

<span class="token comment"># 生效</span>
<span class="token builtin class-name">source</span> ~/.bash_profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用方式" tabindex="-1"><a class="header-anchor" href="#使用方式"><span>使用方式</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">su</span> - oracle <span class="token parameter variable">-c</span> sqlplus / as sysdba <span class="token operator">&lt;&lt;</span><span class="token string">EOF
connect / as sysdba
SELECT log_mode,FORCE_LOGGING from v\\<span class="token variable">$database</span>;
quit
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),i=[t];function r(p,c){return s(),e("div",null,i)}const u=a(l,[["render",r],["__file","sqlplus.html.vue"]]),m=JSON.parse('{"path":"/guide/database/oracle/sqlplus.html","title":"sqlplus工具","lang":"zh-CN","frontmatter":{"title":"sqlplus工具","description":"介绍 rlwrap 是GitHub的一个项目：使用readline封装一些linux命令。例如：sqlplus，rman等等，配合 alias 一起食用更佳。 安装配置 安装 安装readline依赖包 下载rlwrap 下载地址：https://github.com/hanslub42/rlwrap/releases/tag/v0.45.2 安装rl...","head":[["meta",{"property":"og:url","content":"https://github.com/abelit/abelit-datapeacock.git/guide/database/oracle/sqlplus.html"}],["meta",{"property":"og:site_name","content":"数之雀"}],["meta",{"property":"og:title","content":"sqlplus工具"}],["meta",{"property":"og:description","content":"介绍 rlwrap 是GitHub的一个项目：使用readline封装一些linux命令。例如：sqlplus，rman等等，配合 alias 一起食用更佳。 安装配置 安装 安装readline依赖包 下载rlwrap 下载地址：https://github.com/hanslub42/rlwrap/releases/tag/v0.45.2 安装rl..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-11T14:06:18.000Z"}],["meta",{"property":"article:author","content":"Abelit"}],["meta",{"property":"article:modified_time","content":"2024-05-11T14:06:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"sqlplus工具\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-11T14:06:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Abelit\\",\\"url\\":\\"https://github.com/abelit\\"}]}"]]},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"安装配置","slug":"安装配置","link":"#安装配置","children":[{"level":3,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":3,"title":"配置环境变量","slug":"配置环境变量","link":"#配置环境变量","children":[]},{"level":3,"title":"使用方式","slug":"使用方式","link":"#使用方式","children":[]}]}],"git":{"createdTime":1715436378000,"updatedTime":1715436378000,"contributors":[{"name":"ableit","email":"ychenid@live.com","commits":1}]},"readingTime":{"minutes":0.46,"words":137},"filePathRelative":"guide/database/oracle/sqlplus.md","localizedDate":"2024年5月11日","autoDesc":true,"excerpt":"<h2>介绍</h2>\\n<p>rlwrap 是GitHub的一个项目：使用readline封装一些linux命令。例如：sqlplus，rman等等，配合 alias 一起食用更佳。</p>\\n<h2>安装配置</h2>\\n<h3>安装</h3>\\n<ul>\\n<li>安装readline依赖包</li>\\n</ul>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code>yum <span class=\\"token function\\">install</span> <span class=\\"token parameter variable\\">-y</span> readline*\\n</code></pre></div>"}');export{u as comp,m as data};