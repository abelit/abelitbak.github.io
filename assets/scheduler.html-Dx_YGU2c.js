import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,f as e}from"./app-DR5J2daJ.js";const t={},p=e(`<h2 id="scheduler-jobs" tabindex="-1"><a class="header-anchor" href="#scheduler-jobs"><span>Scheduler Jobs</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- File name:   show_sched_job.sql</span>
<span class="token comment">-- Purpose:     display information about scheduler jobs </span>
<span class="token comment">-- Author:      Jeremy Baumont</span>
<span class="token comment">-- Copyright:   Apache License, Version 2.0</span>
<span class="token comment">--</span>
<span class="token comment">-- Usage:       @show_sched_job</span>
<span class="token comment">--------------------------------------------------------------------------------</span>


undefine sched_job_name

<span class="token keyword">set</span> <span class="token keyword">lines</span> <span class="token number">666</span>
prompt <span class="token comment">-- Enter the scheduler job name:</span>
<span class="token keyword">set</span> termout <span class="token keyword">off</span>
<span class="token keyword">select</span> <span class="token string">&#39;&amp;&amp;sched_job_name&#39;</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span>
<span class="token keyword">set</span> termout <span class="token keyword">on</span>

prompt
prompt <span class="token comment">-- Check is the job is disable</span>
<span class="token keyword">select</span> 
	job_name<span class="token punctuation">,</span> 
	state 
<span class="token keyword">from</span> 
	dba_scheduler_jobs 
<span class="token keyword">where</span> 
	job_name <span class="token operator">in</span> <span class="token punctuation">(</span><span class="token string">&#39;&amp;&amp;sched_job_name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

col schedule_name <span class="token keyword">for</span> a35
prompt
prompt <span class="token comment">-- Display job details</span>
<span class="token keyword">select</span> 
	owner<span class="token punctuation">,</span> job_name 
	program_name<span class="token punctuation">,</span>
	schedule_name<span class="token punctuation">,</span>
	schedule_type<span class="token punctuation">,</span>
	job_class<span class="token punctuation">,</span>
	restartable<span class="token punctuation">,</span>
	state
<span class="token keyword">from</span>
	dba_scheduler_jobs
<span class="token keyword">where</span>
	job_name <span class="token operator">in</span> <span class="token punctuation">(</span><span class="token string">&#39;&amp;&amp;sched_job_name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
<span class="token keyword">set</span> termout <span class="token keyword">off</span>
<span class="token keyword">column</span> prog new_value prog noprint
<span class="token keyword">select</span> program_name prog 
<span class="token keyword">from</span>
	dba_scheduler_jobs
<span class="token keyword">where</span>
	job_name <span class="token operator">=</span> <span class="token string">&#39;&amp;&amp;sched_job_name&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">column</span> schedule new_value schedule noprint
<span class="token keyword">select</span> schedule_name schedule
<span class="token keyword">from</span> 
	dba_scheduler_jobs
<span class="token keyword">where</span>
	job_name <span class="token operator">=</span> <span class="token string">&#39;&amp;&amp;sched_job_name&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">set</span> termout <span class="token keyword">on</span>


col program_action <span class="token keyword">for</span> a80
<span class="token keyword">set</span> <span class="token keyword">lines</span> <span class="token number">666</span>
prompt
prompt <span class="token comment">-- Display the program details.</span>
<span class="token keyword">SELECT</span> 
	owner<span class="token punctuation">,</span> 
	program_name<span class="token punctuation">,</span> 
	enabled<span class="token punctuation">,</span> 
	program_action
<span class="token keyword">FROM</span> 
	dba_scheduler_programs
<span class="token keyword">WHERE</span>
	program_name <span class="token operator">in</span> <span class="token punctuation">(</span><span class="token string">&#39;&amp;&amp;prog&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

col repeat_interval <span class="token keyword">for</span> a80
col start_date <span class="token keyword">for</span> a35
prompt
prompt <span class="token comment">-- Display the schedule details.</span>
<span class="token keyword">SELECT</span> 
	owner<span class="token punctuation">,</span> 
	schedule_name<span class="token punctuation">,</span>
	schedule_type<span class="token punctuation">,</span>
	start_date<span class="token punctuation">,</span>
	repeat_interval 
<span class="token keyword">FROM</span> 
	dba_scheduler_schedules 
<span class="token keyword">where</span> 
	schedule_name <span class="token operator">in</span> <span class="token punctuation">(</span><span class="token string">&#39;&amp;&amp;schedule&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

prompt
prompt <span class="token comment">-- Display the window group details.</span>
<span class="token keyword">SELECT</span> 
	window_group_name<span class="token punctuation">,</span> enabled<span class="token punctuation">,</span> number_of_windows
<span class="token keyword">FROM</span>   
	dba_scheduler_window_groups
<span class="token keyword">where</span> window_group_name <span class="token operator">in</span> <span class="token punctuation">(</span><span class="token string">&#39;&amp;&amp;schedule&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


prompt
prompt <span class="token comment">-- Display the window group members.</span>
<span class="token keyword">SELECT</span> window_group_name<span class="token punctuation">,</span> window_name
<span class="token keyword">FROM</span>   dba_scheduler_wingroup_members
<span class="token keyword">where</span> window_group_name <span class="token operator">in</span> <span class="token punctuation">(</span><span class="token string">&#39;&amp;&amp;schedule&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

prompt
prompt <span class="token comment">-- Display the window details.</span>
<span class="token keyword">SELECT</span> 
	window_name<span class="token punctuation">,</span> resource_plan<span class="token punctuation">,</span> enabled<span class="token punctuation">,</span> active<span class="token punctuation">,</span>repeat_interval
<span class="token keyword">FROM</span>   
	dba_scheduler_windows
<span class="token keyword">where</span> window_name <span class="token operator">in</span> <span class="token punctuation">(</span>
<span class="token keyword">SELECT</span>  window_name
<span class="token keyword">FROM</span>   dba_scheduler_wingroup_members
<span class="token keyword">where</span> window_group_name <span class="token operator">in</span> <span class="token punctuation">(</span><span class="token string">&#39;&amp;&amp;schedule&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[p];function l(c,i){return s(),a("div",null,o)}const u=n(t,[["render",l],["__file","scheduler.html.vue"]]),m=JSON.parse(`{"path":"/guide/database/oracle/scheduler.html","title":"调度器","lang":"zh-CN","frontmatter":{"title":"调度器","description":"Scheduler Jobs","head":[["meta",{"property":"og:url","content":"https://github.com/abelit/abelit-datapeacock.git/guide/database/oracle/scheduler.html"}],["meta",{"property":"og:site_name","content":"数之雀"}],["meta",{"property":"og:title","content":"调度器"}],["meta",{"property":"og:description","content":"Scheduler Jobs"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-11T14:06:18.000Z"}],["meta",{"property":"article:author","content":"Abelit"}],["meta",{"property":"article:modified_time","content":"2024-05-11T14:06:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"调度器\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-11T14:06:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Abelit\\",\\"url\\":\\"https://github.com/abelit\\"}]}"]]},"headers":[{"level":2,"title":"Scheduler Jobs","slug":"scheduler-jobs","link":"#scheduler-jobs","children":[]}],"git":{"createdTime":1715436378000,"updatedTime":1715436378000,"contributors":[{"name":"ableit","email":"ychenid@live.com","commits":1}]},"readingTime":{"minutes":0.76,"words":228},"filePathRelative":"guide/database/oracle/scheduler.md","localizedDate":"2024年5月11日","autoDesc":true,"excerpt":"<h2>Scheduler Jobs</h2>\\n<div class=\\"language-sql\\" data-ext=\\"sql\\" data-title=\\"sql\\"><pre class=\\"language-sql\\"><code><span class=\\"token comment\\">-- File name:   show_sched_job.sql</span>\\n<span class=\\"token comment\\">-- Purpose:     display information about scheduler jobs </span>\\n<span class=\\"token comment\\">-- Author:      Jeremy Baumont</span>\\n<span class=\\"token comment\\">-- Copyright:   Apache License, Version 2.0</span>\\n<span class=\\"token comment\\">--</span>\\n<span class=\\"token comment\\">-- Usage:       @show_sched_job</span>\\n<span class=\\"token comment\\">--------------------------------------------------------------------------------</span>\\n\\n\\nundefine sched_job_name\\n\\n<span class=\\"token keyword\\">set</span> <span class=\\"token keyword\\">lines</span> <span class=\\"token number\\">666</span>\\nprompt <span class=\\"token comment\\">-- Enter the scheduler job name:</span>\\n<span class=\\"token keyword\\">set</span> termout <span class=\\"token keyword\\">off</span>\\n<span class=\\"token keyword\\">select</span> <span class=\\"token string\\">'&amp;&amp;sched_job_name'</span> <span class=\\"token keyword\\">from</span> dual<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">set</span> termout <span class=\\"token keyword\\">on</span>\\n\\nprompt\\nprompt <span class=\\"token comment\\">-- Check is the job is disable</span>\\n<span class=\\"token keyword\\">select</span> \\n\\tjob_name<span class=\\"token punctuation\\">,</span> \\n\\tstate \\n<span class=\\"token keyword\\">from</span> \\n\\tdba_scheduler_jobs \\n<span class=\\"token keyword\\">where</span> \\n\\tjob_name <span class=\\"token operator\\">in</span> <span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'&amp;&amp;sched_job_name'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\ncol schedule_name <span class=\\"token keyword\\">for</span> a35\\nprompt\\nprompt <span class=\\"token comment\\">-- Display job details</span>\\n<span class=\\"token keyword\\">select</span> \\n\\towner<span class=\\"token punctuation\\">,</span> job_name \\n\\tprogram_name<span class=\\"token punctuation\\">,</span>\\n\\tschedule_name<span class=\\"token punctuation\\">,</span>\\n\\tschedule_type<span class=\\"token punctuation\\">,</span>\\n\\tjob_class<span class=\\"token punctuation\\">,</span>\\n\\trestartable<span class=\\"token punctuation\\">,</span>\\n\\tstate\\n<span class=\\"token keyword\\">from</span>\\n\\tdba_scheduler_jobs\\n<span class=\\"token keyword\\">where</span>\\n\\tjob_name <span class=\\"token operator\\">in</span> <span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'&amp;&amp;sched_job_name'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t\\n<span class=\\"token keyword\\">set</span> termout <span class=\\"token keyword\\">off</span>\\n<span class=\\"token keyword\\">column</span> prog new_value prog noprint\\n<span class=\\"token keyword\\">select</span> program_name prog \\n<span class=\\"token keyword\\">from</span>\\n\\tdba_scheduler_jobs\\n<span class=\\"token keyword\\">where</span>\\n\\tjob_name <span class=\\"token operator\\">=</span> <span class=\\"token string\\">'&amp;&amp;sched_job_name'</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">column</span> schedule new_value schedule noprint\\n<span class=\\"token keyword\\">select</span> schedule_name schedule\\n<span class=\\"token keyword\\">from</span> \\n\\tdba_scheduler_jobs\\n<span class=\\"token keyword\\">where</span>\\n\\tjob_name <span class=\\"token operator\\">=</span> <span class=\\"token string\\">'&amp;&amp;sched_job_name'</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">set</span> termout <span class=\\"token keyword\\">on</span>\\n\\n\\ncol program_action <span class=\\"token keyword\\">for</span> a80\\n<span class=\\"token keyword\\">set</span> <span class=\\"token keyword\\">lines</span> <span class=\\"token number\\">666</span>\\nprompt\\nprompt <span class=\\"token comment\\">-- Display the program details.</span>\\n<span class=\\"token keyword\\">SELECT</span> \\n\\towner<span class=\\"token punctuation\\">,</span> \\n\\tprogram_name<span class=\\"token punctuation\\">,</span> \\n\\tenabled<span class=\\"token punctuation\\">,</span> \\n\\tprogram_action\\n<span class=\\"token keyword\\">FROM</span> \\n\\tdba_scheduler_programs\\n<span class=\\"token keyword\\">WHERE</span>\\n\\tprogram_name <span class=\\"token operator\\">in</span> <span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'&amp;&amp;prog'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\ncol repeat_interval <span class=\\"token keyword\\">for</span> a80\\ncol start_date <span class=\\"token keyword\\">for</span> a35\\nprompt\\nprompt <span class=\\"token comment\\">-- Display the schedule details.</span>\\n<span class=\\"token keyword\\">SELECT</span> \\n\\towner<span class=\\"token punctuation\\">,</span> \\n\\tschedule_name<span class=\\"token punctuation\\">,</span>\\n\\tschedule_type<span class=\\"token punctuation\\">,</span>\\n\\tstart_date<span class=\\"token punctuation\\">,</span>\\n\\trepeat_interval \\n<span class=\\"token keyword\\">FROM</span> \\n\\tdba_scheduler_schedules \\n<span class=\\"token keyword\\">where</span> \\n\\tschedule_name <span class=\\"token operator\\">in</span> <span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'&amp;&amp;schedule'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\nprompt\\nprompt <span class=\\"token comment\\">-- Display the window group details.</span>\\n<span class=\\"token keyword\\">SELECT</span> \\n\\twindow_group_name<span class=\\"token punctuation\\">,</span> enabled<span class=\\"token punctuation\\">,</span> number_of_windows\\n<span class=\\"token keyword\\">FROM</span>   \\n\\tdba_scheduler_window_groups\\n<span class=\\"token keyword\\">where</span> window_group_name <span class=\\"token operator\\">in</span> <span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'&amp;&amp;schedule'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n\\nprompt\\nprompt <span class=\\"token comment\\">-- Display the window group members.</span>\\n<span class=\\"token keyword\\">SELECT</span> window_group_name<span class=\\"token punctuation\\">,</span> window_name\\n<span class=\\"token keyword\\">FROM</span>   dba_scheduler_wingroup_members\\n<span class=\\"token keyword\\">where</span> window_group_name <span class=\\"token operator\\">in</span> <span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'&amp;&amp;schedule'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\nprompt\\nprompt <span class=\\"token comment\\">-- Display the window details.</span>\\n<span class=\\"token keyword\\">SELECT</span> \\n\\twindow_name<span class=\\"token punctuation\\">,</span> resource_plan<span class=\\"token punctuation\\">,</span> enabled<span class=\\"token punctuation\\">,</span> active<span class=\\"token punctuation\\">,</span>repeat_interval\\n<span class=\\"token keyword\\">FROM</span>   \\n\\tdba_scheduler_windows\\n<span class=\\"token keyword\\">where</span> window_name <span class=\\"token operator\\">in</span> <span class=\\"token punctuation\\">(</span>\\n<span class=\\"token keyword\\">SELECT</span>  window_name\\n<span class=\\"token keyword\\">FROM</span>   dba_scheduler_wingroup_members\\n<span class=\\"token keyword\\">where</span> window_group_name <span class=\\"token operator\\">in</span> <span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'&amp;&amp;schedule'</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre></div>"}`);export{u as comp,m as data};
