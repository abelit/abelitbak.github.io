import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as n,f as e}from"./app-DR5J2daJ.js";const t={},p=e(`<h2 id="状态检查" tabindex="-1"><a class="header-anchor" href="#状态检查"><span>状态检查</span></a></h2><h3 id="mysql健康状态检查" tabindex="-1"><a class="header-anchor" href="#mysql健康状态检查"><span>MySQL健康状态检查</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment"># MySQL Credentials</span>
<span class="token assign-left variable">MYSQL_HOST</span><span class="token operator">=</span><span class="token string">&quot;localhost&quot;</span>
<span class="token assign-left variable">MYSQL_PORT</span><span class="token operator">=</span><span class="token string">&quot;3306&quot;</span>
<span class="token assign-left variable">MYSQL_USERNAME</span><span class="token operator">=</span><span class="token string">&quot;root&quot;</span>
<span class="token assign-left variable">MYSQL_PASSWORD</span><span class="token operator">=</span><span class="token string">&quot;XXXXXXXXXXXX&quot;</span>

mysql <span class="token parameter variable">-h</span> <span class="token variable">$MYSQL_HOST</span> <span class="token parameter variable">-P</span> <span class="token variable">$MYSQL_PORT</span> <span class="token parameter variable">-u</span> <span class="token variable">$MYSQL_USERNAME</span>  -p<span class="token variable">$MYSQL_PASSWORD</span> <span class="token parameter variable">--connect_timeout</span><span class="token operator">=</span><span class="token number">5</span> <span class="token parameter variable">-Bse</span> <span class="token string">&#39;SELECT version();&#39;</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-ne</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;bad&quot;</span>
  <span class="token builtin class-name">exit</span> <span class="token number">1</span>      <span class="token comment"># mysql node is bad</span>
<span class="token keyword">fi</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;good&quot;</span>
<span class="token builtin class-name">exit</span> <span class="token number">0</span>        <span class="token comment"># mysql node is good</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mysql端口检查" tabindex="-1"><a class="header-anchor" href="#mysql端口检查"><span>MySQL端口检查</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable">counter</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">netstat</span> -na<span class="token operator">|</span><span class="token function">grep</span> <span class="token string">&quot;LISTEN&quot;</span><span class="token operator">|</span><span class="token function">grep</span> <span class="token string">&quot;3306&quot;</span><span class="token operator">|</span><span class="token function">wc</span> <span class="token parameter variable">-l</span><span class="token variable">)</span></span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">\${counter}</span>&quot;</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    systemctl stop keepalived
<span class="token keyword">fi</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),l=[p];function o(i,c){return a(),n("div",null,l)}const m=s(t,[["render",o],["__file","index.html.vue"]]),k=JSON.parse(`{"path":"/guide/database/mysql/monitor/","title":"MySQL监控","lang":"zh-CN","frontmatter":{"title":"MySQL监控","description":"状态检查 MySQL健康状态检查 MySQL端口检查","head":[["meta",{"property":"og:url","content":"https://github.com/abelit/abelit-datapeacock.git/guide/database/mysql/monitor/"}],["meta",{"property":"og:site_name","content":"数之雀"}],["meta",{"property":"og:title","content":"MySQL监控"}],["meta",{"property":"og:description","content":"状态检查 MySQL健康状态检查 MySQL端口检查"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-11T14:06:18.000Z"}],["meta",{"property":"article:author","content":"Abelit"}],["meta",{"property":"article:modified_time","content":"2024-05-11T14:06:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL监控\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-11T14:06:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Abelit\\",\\"url\\":\\"https://github.com/abelit\\"}]}"]]},"headers":[{"level":2,"title":"状态检查","slug":"状态检查","link":"#状态检查","children":[{"level":3,"title":"MySQL健康状态检查","slug":"mysql健康状态检查","link":"#mysql健康状态检查","children":[]},{"level":3,"title":"MySQL端口检查","slug":"mysql端口检查","link":"#mysql端口检查","children":[]}]}],"git":{"createdTime":1715436378000,"updatedTime":1715436378000,"contributors":[{"name":"ableit","email":"ychenid@live.com","commits":1}]},"readingTime":{"minutes":0.29,"words":87},"filePathRelative":"guide/database/mysql/monitor/README.md","localizedDate":"2024年5月11日","autoDesc":true,"excerpt":"<h2>状态检查</h2>\\n<h3>MySQL健康状态检查</h3>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token shebang important\\">#!/bin/bash</span>\\n\\n<span class=\\"token comment\\"># MySQL Credentials</span>\\n<span class=\\"token assign-left variable\\">MYSQL_HOST</span><span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"localhost\\"</span>\\n<span class=\\"token assign-left variable\\">MYSQL_PORT</span><span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"3306\\"</span>\\n<span class=\\"token assign-left variable\\">MYSQL_USERNAME</span><span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"root\\"</span>\\n<span class=\\"token assign-left variable\\">MYSQL_PASSWORD</span><span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"XXXXXXXXXXXX\\"</span>\\n\\nmysql <span class=\\"token parameter variable\\">-h</span> <span class=\\"token variable\\">$MYSQL_HOST</span> <span class=\\"token parameter variable\\">-P</span> <span class=\\"token variable\\">$MYSQL_PORT</span> <span class=\\"token parameter variable\\">-u</span> <span class=\\"token variable\\">$MYSQL_USERNAME</span>  -p<span class=\\"token variable\\">$MYSQL_PASSWORD</span> <span class=\\"token parameter variable\\">--connect_timeout</span><span class=\\"token operator\\">=</span><span class=\\"token number\\">5</span> <span class=\\"token parameter variable\\">-Bse</span> <span class=\\"token string\\">'SELECT version();'</span>\\n\\n<span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">[</span> <span class=\\"token variable\\">$?</span> <span class=\\"token parameter variable\\">-ne</span> <span class=\\"token number\\">0</span> <span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span> <span class=\\"token keyword\\">then</span>\\n  <span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"bad\\"</span>\\n  <span class=\\"token builtin class-name\\">exit</span> <span class=\\"token number\\">1</span>      <span class=\\"token comment\\"># mysql node is bad</span>\\n<span class=\\"token keyword\\">fi</span>\\n\\n<span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"good\\"</span>\\n<span class=\\"token builtin class-name\\">exit</span> <span class=\\"token number\\">0</span>        <span class=\\"token comment\\"># mysql node is good</span>\\n</code></pre></div>"}`);export{m as comp,k as data};
