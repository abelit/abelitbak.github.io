import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as a,f as e}from"./app-DR5J2daJ.js";const t={},o=e(`<h2 id="数据库审计最佳实践" tabindex="-1"><a class="header-anchor" href="#数据库审计最佳实践"><span>数据库审计最佳实践</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">show</span> variables <span class="token operator">like</span> <span class="token string">&#39;%log%&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">set</span> <span class="token keyword">global</span> general_log <span class="token operator">=</span> <span class="token keyword">ON</span><span class="token punctuation">;</span>

<span class="token keyword">set</span> <span class="token keyword">global</span> log_output <span class="token operator">=</span> <span class="token string">&#39;TABLE&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> mysql<span class="token punctuation">.</span>general_log<span class="token punctuation">;</span>

<span class="token keyword">create</span> <span class="token keyword">view</span> mysql<span class="token punctuation">.</span>abelit_auditlog  <span class="token keyword">as</span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> mysql<span class="token punctuation">.</span>general_log<span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> mysql<span class="token punctuation">.</span>abelit_auditlog<span class="token punctuation">;</span>
<span class="token keyword">create</span> <span class="token keyword">user</span> readlog_ro<span class="token variable">@&#39;%&#39;</span> identified <span class="token keyword">by</span> <span class="token string">&quot;&lt;password&gt;&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">grant</span> <span class="token keyword">select</span> <span class="token keyword">on</span> mysql<span class="token punctuation">.</span>abelit_auditlog <span class="token keyword">to</span> readlog_ro<span class="token variable">@&#39;%&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">create</span> <span class="token keyword">user</span> auditlog_ro<span class="token variable">@&#39;%&#39;</span> identified <span class="token keyword">by</span> <span class="token string">&quot;&lt;password&gt;&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">grant</span> <span class="token keyword">select</span> <span class="token keyword">on</span> mysql<span class="token punctuation">.</span>abelit_auditlog <span class="token keyword">to</span> auditlog_ro<span class="token variable">@&#39;%&#39;</span><span class="token punctuation">;</span>


<span class="token keyword">create</span> <span class="token keyword">database</span> testauditdb <span class="token keyword">charset</span> <span class="token punctuation">;</span>

<span class="token comment">-- 样例信息</span>
<span class="token comment">-- 数据库地址： 10.10.12.182</span>
<span class="token comment">-- 数据库端口： 3306</span>
<span class="token comment">-- 数据库用户： auditlog_ro</span>
<span class="token comment">-- 数据库密码： &lt;password&gt;</span>
<span class="token comment">-- 查询语句： select * from mysql.abelit_auditlog;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),p=[o];function l(c,i){return n(),a("div",null,p)}const k=s(t,[["render",l],["__file","audit.html.vue"]]),u=JSON.parse(`{"path":"/guide/database/mysql/audit.html","title":"审计","lang":"zh-CN","frontmatter":{"title":"审计","description":"数据库审计最佳实践","head":[["meta",{"property":"og:url","content":"https://github.com/abelit/abelit-datapeacock.git/guide/database/mysql/audit.html"}],["meta",{"property":"og:site_name","content":"数之雀"}],["meta",{"property":"og:title","content":"审计"}],["meta",{"property":"og:description","content":"数据库审计最佳实践"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-11T14:06:18.000Z"}],["meta",{"property":"article:author","content":"Abelit"}],["meta",{"property":"article:modified_time","content":"2024-05-11T14:06:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"审计\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-11T14:06:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Abelit\\",\\"url\\":\\"https://github.com/abelit\\"}]}"]]},"headers":[{"level":2,"title":"数据库审计最佳实践","slug":"数据库审计最佳实践","link":"#数据库审计最佳实践","children":[]}],"git":{"createdTime":1715436378000,"updatedTime":1715436378000,"contributors":[{"name":"ableit","email":"ychenid@live.com","commits":1}]},"readingTime":{"minutes":0.34,"words":101},"filePathRelative":"guide/database/mysql/audit.md","localizedDate":"2024年5月11日","autoDesc":true,"excerpt":"<h2>数据库审计最佳实践</h2>\\n<div class=\\"language-sql\\" data-ext=\\"sql\\" data-title=\\"sql\\"><pre class=\\"language-sql\\"><code><span class=\\"token keyword\\">show</span> variables <span class=\\"token operator\\">like</span> <span class=\\"token string\\">'%log%'</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">set</span> <span class=\\"token keyword\\">global</span> general_log <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">ON</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">set</span> <span class=\\"token keyword\\">global</span> log_output <span class=\\"token operator\\">=</span> <span class=\\"token string\\">'TABLE'</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">select</span> <span class=\\"token operator\\">*</span> <span class=\\"token keyword\\">from</span> mysql<span class=\\"token punctuation\\">.</span>general_log<span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">create</span> <span class=\\"token keyword\\">view</span> mysql<span class=\\"token punctuation\\">.</span>abelit_auditlog  <span class=\\"token keyword\\">as</span> <span class=\\"token keyword\\">select</span> <span class=\\"token operator\\">*</span> <span class=\\"token keyword\\">from</span> mysql<span class=\\"token punctuation\\">.</span>general_log<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">select</span> <span class=\\"token operator\\">*</span> <span class=\\"token keyword\\">from</span> mysql<span class=\\"token punctuation\\">.</span>abelit_auditlog<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">create</span> <span class=\\"token keyword\\">user</span> readlog_ro<span class=\\"token variable\\">@'%'</span> identified <span class=\\"token keyword\\">by</span> <span class=\\"token string\\">\\"&lt;password&gt;\\"</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">grant</span> <span class=\\"token keyword\\">select</span> <span class=\\"token keyword\\">on</span> mysql<span class=\\"token punctuation\\">.</span>abelit_auditlog <span class=\\"token keyword\\">to</span> readlog_ro<span class=\\"token variable\\">@'%'</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">create</span> <span class=\\"token keyword\\">user</span> auditlog_ro<span class=\\"token variable\\">@'%'</span> identified <span class=\\"token keyword\\">by</span> <span class=\\"token string\\">\\"&lt;password&gt;\\"</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">grant</span> <span class=\\"token keyword\\">select</span> <span class=\\"token keyword\\">on</span> mysql<span class=\\"token punctuation\\">.</span>abelit_auditlog <span class=\\"token keyword\\">to</span> auditlog_ro<span class=\\"token variable\\">@'%'</span><span class=\\"token punctuation\\">;</span>\\n\\n\\n<span class=\\"token keyword\\">create</span> <span class=\\"token keyword\\">database</span> testauditdb <span class=\\"token keyword\\">charset</span> <span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">-- 样例信息</span>\\n<span class=\\"token comment\\">-- 数据库地址： 10.10.12.182</span>\\n<span class=\\"token comment\\">-- 数据库端口： 3306</span>\\n<span class=\\"token comment\\">-- 数据库用户： auditlog_ro</span>\\n<span class=\\"token comment\\">-- 数据库密码： &lt;password&gt;</span>\\n<span class=\\"token comment\\">-- 查询语句： select * from mysql.abelit_auditlog;</span>\\n</code></pre></div>"}`);export{k as comp,u as data};
