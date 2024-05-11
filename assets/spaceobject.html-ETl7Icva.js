import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,f as e}from"./app-DR5J2daJ.js";const t={},p=e(`<h2 id="管理空间与对象" tabindex="-1"><a class="header-anchor" href="#管理空间与对象"><span>管理空间与对象</span></a></h2><ul><li>查询</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> dba_advisor_definitions<span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="手动创建段指导顾问" tabindex="-1"><a class="header-anchor" href="#手动创建段指导顾问"><span>手动创建段指导顾问</span></a></h3><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">BEGIN</span>
    <span class="token keyword">DECLARE</span>
        task_name   VARCHAR2<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        task_desc  VARCHAR2<span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        task_id     NUMBER<span class="token punctuation">;</span>
        object_id NUMBER<span class="token punctuation">;</span>
    <span class="token keyword">BEGIN</span>
        name :<span class="token operator">=</span> <span class="token string">&#39;Manual_Employees&#39;</span><span class="token punctuation">;</span>
        descr :<span class="token operator">=</span> <span class="token string">&#39;Segment Advisor Example&#39;</span><span class="token punctuation">;</span>
        task_id :<span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        dbms_advisor<span class="token punctuation">.</span>create_task<span class="token punctuation">(</span>
                                advisor_name <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&#39;Segment Advisor&#39;</span><span class="token punctuation">,</span>
                                task_id <span class="token operator">=</span><span class="token operator">&gt;</span> task_id<span class="token punctuation">,</span>
                                task_name <span class="token operator">=</span><span class="token operator">&gt;</span> task_name<span class="token punctuation">,</span>
                                task_desc <span class="token operator">=</span><span class="token operator">&gt;</span> task_desc
        <span class="token punctuation">)</span><span class="token punctuation">;</span>

        dbms_advisor<span class="token punctuation">.</span>create_object<span class="token punctuation">(</span>
                                  task_name <span class="token operator">=</span><span class="token operator">&gt;</span> task_name<span class="token punctuation">,</span>
                                  object_type <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&#39;TABLE&#39;</span><span class="token punctuation">,</span>
                                  attr1 <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&#39;TEST&#39;</span><span class="token punctuation">,</span>
                                  attr2 <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&#39;USERS&#39;</span><span class="token punctuation">,</span>
                                  attr3 <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
                                  attr4 <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
                                  attr5 <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
                                  object_id <span class="token operator">=</span><span class="token operator">&gt;</span> object_id
        <span class="token punctuation">)</span><span class="token punctuation">;</span>

        dbms_advisor<span class="token punctuation">.</span>set_task_parameter<span class="token punctuation">(</span>
                                       task_name <span class="token operator">=</span><span class="token operator">&gt;</span> task_name<span class="token punctuation">,</span>
                                       parameter <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&#39;recommend_all&#39;</span><span class="token punctuation">,</span>
                                       <span class="token keyword">value</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&#39;TRUE&#39;</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>

        dbms_advisor<span class="token punctuation">.</span>execute_task<span class="token punctuation">(</span>task_name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">--        dbms_advisor.delete_task(</span>
<span class="token comment">--                              task_name =&gt; task_name</span>
<span class="token comment">--        );</span>

    <span class="token keyword">END</span><span class="token punctuation">;</span>
<span class="token keyword">END</span><span class="token punctuation">;</span>
<span class="token operator">/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>通过DBA_ADVISOR_TASKS视图查询Segment Advisor状态</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
    task_name<span class="token punctuation">,</span>
    <span class="token keyword">status</span>
<span class="token keyword">FROM</span>
    dba_advisor_tasks
<span class="token keyword">WHERE</span>
    owner <span class="token operator">=</span> <span class="token string">&#39;YSDBA&#39;</span>
    <span class="token operator">AND</span> advisor_name <span class="token operator">=</span> <span class="token string">&#39;Segment Advisor&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>查询Segment Advisor发现事项和意见</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
    af<span class="token punctuation">.</span>task_name<span class="token punctuation">,</span>
    ao<span class="token punctuation">.</span>attr2 segname<span class="token punctuation">,</span>
    ao<span class="token punctuation">.</span>attr3 <span class="token keyword">partition</span><span class="token punctuation">,</span>
    ao<span class="token punctuation">.</span><span class="token keyword">type</span><span class="token punctuation">,</span>
    af<span class="token punctuation">.</span>message
<span class="token keyword">FROM</span>
    dba_advisor_findings af<span class="token punctuation">,</span>
    dba_advisor_objects  ao
<span class="token keyword">WHERE</span>
    ao<span class="token punctuation">.</span>task_id <span class="token operator">=</span> af<span class="token punctuation">.</span>task_id
    <span class="token operator">AND</span> ao<span class="token punctuation">.</span>object_id <span class="token operator">=</span> af<span class="token punctuation">.</span>object_id
    <span class="token operator">AND</span> ao<span class="token punctuation">.</span>owner <span class="token operator">=</span> <span class="token string">&#39;YSDBA&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),o=[p];function i(l,c){return s(),a("div",null,o)}const u=n(t,[["render",i],["__file","spaceobject.html.vue"]]),k=JSON.parse('{"path":"/guide/database/oracle/spaceobject.html","title":"数据库对象","lang":"zh-CN","frontmatter":{"title":"数据库对象","description":"管理空间与对象 查询 手动创建段指导顾问 通过DBA_ADVISOR_TASKS视图查询Segment Advisor状态 查询Segment Advisor发现事项和意见","head":[["meta",{"property":"og:url","content":"https://github.com/abelit/abelit-datapeacock.git/guide/database/oracle/spaceobject.html"}],["meta",{"property":"og:site_name","content":"数之雀"}],["meta",{"property":"og:title","content":"数据库对象"}],["meta",{"property":"og:description","content":"管理空间与对象 查询 手动创建段指导顾问 通过DBA_ADVISOR_TASKS视图查询Segment Advisor状态 查询Segment Advisor发现事项和意见"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-11T14:06:18.000Z"}],["meta",{"property":"article:author","content":"Abelit"}],["meta",{"property":"article:modified_time","content":"2024-05-11T14:06:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数据库对象\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-11T14:06:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Abelit\\",\\"url\\":\\"https://github.com/abelit\\"}]}"]]},"headers":[{"level":2,"title":"管理空间与对象","slug":"管理空间与对象","link":"#管理空间与对象","children":[{"level":3,"title":"手动创建段指导顾问","slug":"手动创建段指导顾问","link":"#手动创建段指导顾问","children":[]}]}],"git":{"createdTime":1715436378000,"updatedTime":1715436378000,"contributors":[{"name":"ableit","email":"ychenid@live.com","commits":1}]},"readingTime":{"minutes":0.5,"words":150},"filePathRelative":"guide/database/oracle/spaceobject.md","localizedDate":"2024年5月11日","autoDesc":true,"excerpt":"<h2>管理空间与对象</h2>\\n<ul>\\n<li>查询</li>\\n</ul>\\n<div class=\\"language-sql\\" data-ext=\\"sql\\" data-title=\\"sql\\"><pre class=\\"language-sql\\"><code><span class=\\"token keyword\\">select</span> <span class=\\"token operator\\">*</span> <span class=\\"token keyword\\">from</span> dba_advisor_definitions<span class=\\"token punctuation\\">;</span> \\n</code></pre></div>"}');export{u as comp,k as data};
