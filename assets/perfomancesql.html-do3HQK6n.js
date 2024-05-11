import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,f as e}from"./app-DR5J2daJ.js";const p={},t=e(`<h2 id="top-sql" tabindex="-1"><a class="header-anchor" href="#top-sql"><span>TOP SQL</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- -----------------------------------------------------------------------------------</span>
<span class="token comment">-- File Name    : https://oracle-base.com/dba/monitoring/top_sql.sql</span>
<span class="token comment">-- Author       : Tim Hall</span>
<span class="token comment">-- Description  : Displays a list of SQL statements that are using the most resources.</span>
<span class="token comment">-- Comments     : The address column can be use as a parameter with SQL_Text.sql to display the full statement.</span>
<span class="token comment">-- Requirements : Access to the V$ views.</span>
<span class="token comment">-- Call Syntax  : @top_sql (number)</span>
<span class="token comment">-- Last Modified: 15/07/2000</span>
<span class="token comment">-- -----------------------------------------------------------------------------------</span>
<span class="token keyword">SET</span> LINESIZE <span class="token number">500</span>
<span class="token keyword">SET</span> PAGESIZE <span class="token number">1000</span>
<span class="token keyword">SET</span> VERIFY <span class="token keyword">OFF</span>

<span class="token keyword">SELECT</span> <span class="token operator">*</span>
<span class="token keyword">FROM</span>   <span class="token punctuation">(</span><span class="token keyword">SELECT</span> sql_id<span class="token punctuation">,</span>
               Substr<span class="token punctuation">(</span>a<span class="token punctuation">.</span>sql_text<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">50</span><span class="token punctuation">)</span> sql_text<span class="token punctuation">,</span>
               parsing_schema_name<span class="token punctuation">,</span>
               Trunc<span class="token punctuation">(</span>a<span class="token punctuation">.</span>disk_reads<span class="token operator">/</span>Decode<span class="token punctuation">(</span>a<span class="token punctuation">.</span>executions<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span>a<span class="token punctuation">.</span>executions<span class="token punctuation">)</span><span class="token punctuation">)</span> reads_per_execution<span class="token punctuation">,</span> 
               a<span class="token punctuation">.</span>buffer_gets<span class="token punctuation">,</span> 
               a<span class="token punctuation">.</span>disk_reads<span class="token punctuation">,</span> 
               a<span class="token punctuation">.</span>executions<span class="token punctuation">,</span> 
               a<span class="token punctuation">.</span>sorts<span class="token punctuation">,</span>
               a<span class="token punctuation">.</span>address
        <span class="token keyword">FROM</span>   v$sqlarea a
        <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> reads_per_execution <span class="token keyword">DESC</span><span class="token punctuation">)</span>
<span class="token keyword">WHERE</span>  rownum <span class="token operator">&lt;=</span> <span class="token operator">&amp;&amp;</span><span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="活动事务" tabindex="-1"><a class="header-anchor" href="#活动事务"><span>活动事务</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>col RBS format a15 trunc
col SID format <span class="token number">9999</span>
col <span class="token keyword">USER</span> format a15 trunc
col COMMAND format a60 trunc
col <span class="token keyword">status</span> format a8 trunc

<span class="token keyword">SELECT</span>
    r<span class="token punctuation">.</span>name     <span class="token string">&quot;RBS&quot;</span><span class="token punctuation">,</span>
    s<span class="token punctuation">.</span>sid<span class="token punctuation">,</span>
    s<span class="token punctuation">.</span><span class="token keyword">serial</span><span class="token comment">#,</span>
    s<span class="token punctuation">.</span>username <span class="token string">&quot;USER&quot;</span><span class="token punctuation">,</span>
    t<span class="token punctuation">.</span><span class="token keyword">status</span><span class="token punctuation">,</span>
    t<span class="token punctuation">.</span>cr_get<span class="token punctuation">,</span>
    t<span class="token punctuation">.</span>phy_io<span class="token punctuation">,</span>
    t<span class="token punctuation">.</span>used_ublk<span class="token punctuation">,</span>
    t<span class="token punctuation">.</span>noundo<span class="token punctuation">,</span>
    substr<span class="token punctuation">(</span>
        s<span class="token punctuation">.</span>program<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">78</span>
    <span class="token punctuation">)</span>          <span class="token string">&quot;COMMAND&quot;</span>
<span class="token keyword">FROM</span>
    v$<span class="token keyword">session</span>     s<span class="token punctuation">,</span>
    v$<span class="token keyword">transaction</span> t<span class="token punctuation">,</span>
    v$rollname    r
<span class="token keyword">WHERE</span>
    t<span class="token punctuation">.</span>addr <span class="token operator">=</span> s<span class="token punctuation">.</span>taddr
    <span class="token operator">AND</span> t<span class="token punctuation">.</span>xidusn <span class="token operator">=</span> r<span class="token punctuation">.</span>usn
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
    t<span class="token punctuation">.</span>cr_get<span class="token punctuation">,</span>
    t<span class="token punctuation">.</span>phy_io<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="会话使用内存" tabindex="-1"><a class="header-anchor" href="#会话使用内存"><span>会话使用内存</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>

<span class="token comment">-- -----------------------------------------------------------------------------------</span>
<span class="token comment">-- File Name    : https://oracle-base.com/dba/monitoring/monitor_memory.sql</span>
<span class="token comment">-- Author       : Tim Hall</span>
<span class="token comment">-- Description  : Displays memory allocations for the current database sessions.</span>
<span class="token comment">-- Requirements : Access to the V$ views.</span>
<span class="token comment">-- Call Syntax  : @monitor_memory</span>
<span class="token comment">-- Last Modified: 15-JUL-2000</span>
<span class="token comment">-- -----------------------------------------------------------------------------------</span>
<span class="token keyword">SET</span> LINESIZE <span class="token number">200</span>

<span class="token keyword">COLUMN</span> username FORMAT A20
<span class="token keyword">COLUMN</span> module FORMAT A20

<span class="token keyword">SELECT</span> NVL<span class="token punctuation">(</span>a<span class="token punctuation">.</span>username<span class="token punctuation">,</span><span class="token string">&#39;(oracle)&#39;</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> username<span class="token punctuation">,</span>
       a<span class="token punctuation">.</span>module<span class="token punctuation">,</span>
       a<span class="token punctuation">.</span>program<span class="token punctuation">,</span>
       Trunc<span class="token punctuation">(</span>b<span class="token punctuation">.</span><span class="token keyword">value</span><span class="token operator">/</span><span class="token number">1024</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> memory_kb
<span class="token keyword">FROM</span>   v$<span class="token keyword">session</span> a<span class="token punctuation">,</span>
       v$sesstat b<span class="token punctuation">,</span>
       v$statname c
<span class="token keyword">WHERE</span>  a<span class="token punctuation">.</span>sid <span class="token operator">=</span> b<span class="token punctuation">.</span>sid
<span class="token operator">AND</span>    b<span class="token punctuation">.</span>statistic<span class="token comment"># = c.statistic#</span>
<span class="token operator">AND</span>    c<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;session pga memory&#39;</span>
<span class="token operator">AND</span>    a<span class="token punctuation">.</span>program <span class="token operator">IS</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> b<span class="token punctuation">.</span><span class="token keyword">value</span> <span class="token keyword">DESC</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="事件" tabindex="-1"><a class="header-anchor" href="#事件"><span>事件</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SET</span> LINESIZE <span class="token number">200</span>
<span class="token keyword">SET</span> PAGESIZE <span class="token number">1000</span>
<span class="token keyword">SET</span> VERIFY <span class="token keyword">OFF</span>

<span class="token keyword">COLUMN</span> username FORMAT A20
<span class="token keyword">COLUMN</span> event FORMAT A40

<span class="token keyword">SELECT</span> NVL<span class="token punctuation">(</span>s<span class="token punctuation">.</span>username<span class="token punctuation">,</span> <span class="token string">&#39;(oracle)&#39;</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> username<span class="token punctuation">,</span>
       s<span class="token punctuation">.</span>sid<span class="token punctuation">,</span>
       s<span class="token punctuation">.</span><span class="token keyword">serial</span><span class="token comment">#,</span>
       se<span class="token punctuation">.</span>event<span class="token punctuation">,</span>
       se<span class="token punctuation">.</span>total_waits<span class="token punctuation">,</span>
       se<span class="token punctuation">.</span>total_timeouts<span class="token punctuation">,</span>
       se<span class="token punctuation">.</span>time_waited<span class="token punctuation">,</span>
       se<span class="token punctuation">.</span>average_wait<span class="token punctuation">,</span>
       se<span class="token punctuation">.</span>max_wait<span class="token punctuation">,</span>
       se<span class="token punctuation">.</span>time_waited_micro
<span class="token keyword">FROM</span>   v$session_event se<span class="token punctuation">,</span>
       v$<span class="token keyword">session</span> s
<span class="token keyword">WHERE</span>  s<span class="token punctuation">.</span>sid <span class="token operator">=</span> se<span class="token punctuation">.</span>sid
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> se<span class="token punctuation">.</span>time_waited <span class="token keyword">DESC</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="会话事件" tabindex="-1"><a class="header-anchor" href="#会话事件"><span>会话事件</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- -----------------------------------------------------------------------------------</span>
<span class="token comment">-- File Name    : https://oracle-base.com/dba/monitoring/session_events.sql</span>
<span class="token comment">-- Author       : Tim Hall</span>
<span class="token comment">-- Description  : Displays information on all database session events.</span>
<span class="token comment">-- Requirements : Access to the V$ views.</span>
<span class="token comment">-- Call Syntax  : @session_events</span>
<span class="token comment">-- Last Modified: 11/03/2005</span>
<span class="token comment">-- -----------------------------------------------------------------------------------</span>
<span class="token keyword">SET</span> LINESIZE <span class="token number">200</span>
<span class="token keyword">SET</span> PAGESIZE <span class="token number">1000</span>
<span class="token keyword">SET</span> VERIFY <span class="token keyword">OFF</span>

<span class="token keyword">COLUMN</span> username FORMAT A20
<span class="token keyword">COLUMN</span> event FORMAT A40

<span class="token keyword">SELECT</span> NVL<span class="token punctuation">(</span>s<span class="token punctuation">.</span>username<span class="token punctuation">,</span> <span class="token string">&#39;(oracle)&#39;</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> username<span class="token punctuation">,</span>
       s<span class="token punctuation">.</span>sid<span class="token punctuation">,</span>
       s<span class="token punctuation">.</span><span class="token keyword">serial</span><span class="token comment">#,</span>
       se<span class="token punctuation">.</span>event<span class="token punctuation">,</span>
       se<span class="token punctuation">.</span>total_waits<span class="token punctuation">,</span>
       se<span class="token punctuation">.</span>total_timeouts<span class="token punctuation">,</span>
       se<span class="token punctuation">.</span>time_waited<span class="token punctuation">,</span>
       se<span class="token punctuation">.</span>average_wait<span class="token punctuation">,</span>
       se<span class="token punctuation">.</span>max_wait<span class="token punctuation">,</span>
       se<span class="token punctuation">.</span>time_waited_micro
<span class="token keyword">FROM</span>   v$session_event se<span class="token punctuation">,</span>
       v$<span class="token keyword">session</span> s
<span class="token keyword">WHERE</span>  s<span class="token punctuation">.</span>sid <span class="token operator">=</span> se<span class="token punctuation">.</span>sid
<span class="token operator">AND</span>    s<span class="token punctuation">.</span>sid <span class="token operator">=</span> <span class="token operator">&amp;</span><span class="token number">1</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> se<span class="token punctuation">.</span>time_waited <span class="token keyword">DESC</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="等待会话" tabindex="-1"><a class="header-anchor" href="#等待会话"><span>等待会话</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- -----------------------------------------------------------------------------------</span>
<span class="token comment">-- File Name    : https://oracle-base.com/dba/monitoring/session_waits.sql</span>
<span class="token comment">-- Author       : Tim Hall</span>
<span class="token comment">-- Description  : Displays information on all database session waits.</span>
<span class="token comment">-- Requirements : Access to the V$ views.</span>
<span class="token comment">-- Call Syntax  : @session_waits</span>
<span class="token comment">-- Last Modified: 11/03/2005</span>
<span class="token comment">-- -----------------------------------------------------------------------------------</span>
<span class="token keyword">SET</span> LINESIZE <span class="token number">200</span>
<span class="token keyword">SET</span> PAGESIZE <span class="token number">1000</span>

<span class="token keyword">COLUMN</span> username FORMAT A20
<span class="token keyword">COLUMN</span> event FORMAT A30

<span class="token keyword">SELECT</span> NVL<span class="token punctuation">(</span>s<span class="token punctuation">.</span>username<span class="token punctuation">,</span> <span class="token string">&#39;(oracle)&#39;</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> username<span class="token punctuation">,</span>
       s<span class="token punctuation">.</span>sid<span class="token punctuation">,</span>
       s<span class="token punctuation">.</span><span class="token keyword">serial</span><span class="token comment">#,</span>
       sw<span class="token punctuation">.</span>event<span class="token punctuation">,</span>
       sw<span class="token punctuation">.</span>wait_time<span class="token punctuation">,</span>
       sw<span class="token punctuation">.</span>seconds_in_wait<span class="token punctuation">,</span>
       sw<span class="token punctuation">.</span>state
<span class="token keyword">FROM</span>   v$session_wait sw<span class="token punctuation">,</span>
       v$<span class="token keyword">session</span> s
<span class="token keyword">WHERE</span>  s<span class="token punctuation">.</span>sid <span class="token operator">=</span> sw<span class="token punctuation">.</span>sid
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> sw<span class="token punctuation">.</span>seconds_in_wait <span class="token keyword">DESC</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="会话io" tabindex="-1"><a class="header-anchor" href="#会话io"><span>会话IO</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- -----------------------------------------------------------------------------------</span>
<span class="token comment">-- File Name    : https://oracle-base.com/dba/monitoring/session_io.sql</span>
<span class="token comment">-- Author       : Tim Hall</span>
<span class="token comment">-- Description  : Displays I/O information on all database sessions.</span>
<span class="token comment">-- Requirements : Access to the V$ views.</span>
<span class="token comment">-- Call Syntax  : @session_io</span>
<span class="token comment">-- Last Modified: 21-FEB-2005</span>
<span class="token comment">-- -----------------------------------------------------------------------------------</span>
<span class="token keyword">SET</span> LINESIZE <span class="token number">500</span>
<span class="token keyword">SET</span> PAGESIZE <span class="token number">1000</span>

<span class="token keyword">COLUMN</span> username FORMAT A15

<span class="token keyword">SELECT</span> NVL<span class="token punctuation">(</span>s<span class="token punctuation">.</span>username<span class="token punctuation">,</span> <span class="token string">&#39;(oracle)&#39;</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> username<span class="token punctuation">,</span>
       s<span class="token punctuation">.</span>osuser<span class="token punctuation">,</span>
       s<span class="token punctuation">.</span>sid<span class="token punctuation">,</span>
       s<span class="token punctuation">.</span><span class="token keyword">serial</span><span class="token comment">#,</span>
       si<span class="token punctuation">.</span>block_gets<span class="token punctuation">,</span>
       si<span class="token punctuation">.</span>consistent_gets<span class="token punctuation">,</span>
       si<span class="token punctuation">.</span>physical_reads<span class="token punctuation">,</span>
       si<span class="token punctuation">.</span>block_changes<span class="token punctuation">,</span>
       si<span class="token punctuation">.</span>consistent_changes
<span class="token keyword">FROM</span>   v$<span class="token keyword">session</span> s<span class="token punctuation">,</span>
       v$sess_io si
<span class="token keyword">WHERE</span>  s<span class="token punctuation">.</span>sid <span class="token operator">=</span> si<span class="token punctuation">.</span>sid
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> s<span class="token punctuation">.</span>username<span class="token punctuation">,</span> s<span class="token punctuation">.</span>osuser<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="会话pga" tabindex="-1"><a class="header-anchor" href="#会话pga"><span>会话PGA</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- -----------------------------------------------------------------------------------</span>
<span class="token comment">-- File Name    : https://oracle-base.com/dba/monitoring/session_pga.sql</span>
<span class="token comment">-- Author       : Tim Hall</span>
<span class="token comment">-- Description  : Displays information about PGA usage for each session.</span>
<span class="token comment">-- Requirements : Access to the V$ views.</span>
<span class="token comment">-- Call Syntax  : @session_pga</span>
<span class="token comment">-- Last Modified: 21-FEB-2005</span>
<span class="token comment">-- -----------------------------------------------------------------------------------</span>
<span class="token keyword">SET</span> LINESIZE <span class="token number">500</span>
<span class="token keyword">SET</span> PAGESIZE <span class="token number">1000</span>

<span class="token keyword">COLUMN</span> username FORMAT A30
<span class="token keyword">COLUMN</span> osuser FORMAT A20
<span class="token keyword">COLUMN</span> spid FORMAT A10
<span class="token keyword">COLUMN</span> service_name FORMAT A15
<span class="token keyword">COLUMN</span> module FORMAT A45
<span class="token keyword">COLUMN</span> machine FORMAT A30
<span class="token keyword">COLUMN</span> logon_time FORMAT A20
<span class="token keyword">COLUMN</span> pga_used_mem_mb FORMAT <span class="token number">99990.00</span>
<span class="token keyword">COLUMN</span> pga_alloc_mem_mb FORMAT <span class="token number">99990.00</span>
<span class="token keyword">COLUMN</span> pga_freeable_mem_mb FORMAT <span class="token number">99990.00</span>
<span class="token keyword">COLUMN</span> pga_max_mem_mb FORMAT <span class="token number">99990.00</span>

<span class="token keyword">SELECT</span> NVL<span class="token punctuation">(</span>s<span class="token punctuation">.</span>username<span class="token punctuation">,</span> <span class="token string">&#39;(oracle)&#39;</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> username<span class="token punctuation">,</span>
       s<span class="token punctuation">.</span>osuser<span class="token punctuation">,</span>
       s<span class="token punctuation">.</span>sid<span class="token punctuation">,</span>
       s<span class="token punctuation">.</span><span class="token keyword">serial</span><span class="token comment">#,</span>
       p<span class="token punctuation">.</span>spid<span class="token punctuation">,</span>
       <span class="token function">ROUND</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>pga_used_mem<span class="token operator">/</span><span class="token number">1024</span><span class="token operator">/</span><span class="token number">1024</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> pga_used_mem_mb<span class="token punctuation">,</span>
       <span class="token function">ROUND</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>pga_alloc_mem<span class="token operator">/</span><span class="token number">1024</span><span class="token operator">/</span><span class="token number">1024</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> pga_alloc_mem_mb<span class="token punctuation">,</span>
       <span class="token function">ROUND</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>pga_freeable_mem<span class="token operator">/</span><span class="token number">1024</span><span class="token operator">/</span><span class="token number">1024</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> pga_freeable_mem_mb<span class="token punctuation">,</span>
       <span class="token function">ROUND</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>pga_max_mem<span class="token operator">/</span><span class="token number">1024</span><span class="token operator">/</span><span class="token number">1024</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> pga_max_mem_mb<span class="token punctuation">,</span>
       s<span class="token punctuation">.</span>lockwait<span class="token punctuation">,</span>
       s<span class="token punctuation">.</span><span class="token keyword">status</span><span class="token punctuation">,</span>
       s<span class="token punctuation">.</span>service_name<span class="token punctuation">,</span>
       s<span class="token punctuation">.</span>module<span class="token punctuation">,</span>
       s<span class="token punctuation">.</span>machine<span class="token punctuation">,</span>
       s<span class="token punctuation">.</span>program<span class="token punctuation">,</span>
       TO_CHAR<span class="token punctuation">(</span>s<span class="token punctuation">.</span>logon_Time<span class="token punctuation">,</span><span class="token string">&#39;DD-MON-YYYY HH24:MI:SS&#39;</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> logon_time<span class="token punctuation">,</span>
       s<span class="token punctuation">.</span>last_call_et <span class="token keyword">AS</span> last_call_et_secs
<span class="token keyword">FROM</span>   v$<span class="token keyword">session</span> s<span class="token punctuation">,</span>
       v$process p
<span class="token keyword">WHERE</span>  s<span class="token punctuation">.</span>paddr <span class="token operator">=</span> p<span class="token punctuation">.</span>addr
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> s<span class="token punctuation">.</span>username<span class="token punctuation">,</span> s<span class="token punctuation">.</span>osuser<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="会话rollback" tabindex="-1"><a class="header-anchor" href="#会话rollback"><span>会话Rollback</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- -----------------------------------------------------------------------------------</span>
<span class="token comment">-- File Name    : https://oracle-base.com/dba/monitoring/session_rollback.sql</span>
<span class="token comment">-- Author       : Tim Hall</span>
<span class="token comment">-- Description  : Displays rollback information on relevant database sessions.</span>
<span class="token comment">-- Requirements : Access to the V$ views.</span>
<span class="token comment">-- Call Syntax  : @session_rollback</span>
<span class="token comment">-- Last Modified: 29/03/2005</span>
<span class="token comment">-- -----------------------------------------------------------------------------------</span>
<span class="token keyword">SET</span> LINESIZE <span class="token number">200</span>

<span class="token keyword">COLUMN</span> username FORMAT A15

<span class="token keyword">SELECT</span> s<span class="token punctuation">.</span>username<span class="token punctuation">,</span>
       s<span class="token punctuation">.</span>sid<span class="token punctuation">,</span>
       s<span class="token punctuation">.</span><span class="token keyword">serial</span><span class="token comment">#,</span>
       t<span class="token punctuation">.</span>used_ublk<span class="token punctuation">,</span>
       t<span class="token punctuation">.</span>used_urec<span class="token punctuation">,</span>
       rs<span class="token punctuation">.</span>segment_name<span class="token punctuation">,</span>
       r<span class="token punctuation">.</span>rssize<span class="token punctuation">,</span>
       r<span class="token punctuation">.</span><span class="token keyword">status</span>
<span class="token keyword">FROM</span>   v$<span class="token keyword">transaction</span> t<span class="token punctuation">,</span>
       v$<span class="token keyword">session</span> s<span class="token punctuation">,</span>
       v$rollstat r<span class="token punctuation">,</span>
       dba_rollback_segs rs
<span class="token keyword">WHERE</span>  s<span class="token punctuation">.</span>saddr <span class="token operator">=</span> t<span class="token punctuation">.</span>ses_addr
<span class="token operator">AND</span>    t<span class="token punctuation">.</span>xidusn <span class="token operator">=</span> r<span class="token punctuation">.</span>usn
<span class="token operator">AND</span>   rs<span class="token punctuation">.</span>segment_id <span class="token operator">=</span> t<span class="token punctuation">.</span>xidusn
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> t<span class="token punctuation">.</span>used_ublk <span class="token keyword">DESC</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="主机会话" tabindex="-1"><a class="header-anchor" href="#主机会话"><span>主机会话</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- -----------------------------------------------------------------------------------</span>
<span class="token comment">-- File Name    : https://oracle-base.com/dba/monitoring/sessions_by_machine.sql</span>
<span class="token comment">-- Author       : Tim Hall</span>
<span class="token comment">-- Description  : Displays the number of sessions for each client machine.</span>
<span class="token comment">-- Requirements : Access to the V$ views.</span>
<span class="token comment">-- Call Syntax  : @sessions_by_machine</span>
<span class="token comment">-- Last Modified: 20-JUL-2014</span>
<span class="token comment">-- -----------------------------------------------------------------------------------</span>
<span class="token keyword">SET</span> PAGESIZE <span class="token number">1000</span>

<span class="token keyword">SELECT</span> machine<span class="token punctuation">,</span>
       NVL<span class="token punctuation">(</span>active_count<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> active<span class="token punctuation">,</span>
       NVL<span class="token punctuation">(</span>inactive_count<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> inactive<span class="token punctuation">,</span>
       NVL<span class="token punctuation">(</span>killed_count<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> killed 
<span class="token keyword">FROM</span>   <span class="token punctuation">(</span><span class="token keyword">SELECT</span> machine<span class="token punctuation">,</span> <span class="token keyword">status</span><span class="token punctuation">,</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> quantity
        <span class="token keyword">FROM</span>   v$<span class="token keyword">session</span>
        <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> machine<span class="token punctuation">,</span> <span class="token keyword">status</span><span class="token punctuation">)</span>
<span class="token keyword">PIVOT</span>  <span class="token punctuation">(</span><span class="token function">SUM</span><span class="token punctuation">(</span>quantity<span class="token punctuation">)</span> <span class="token keyword">AS</span> count <span class="token keyword">FOR</span> <span class="token punctuation">(</span><span class="token keyword">status</span><span class="token punctuation">)</span> <span class="token operator">IN</span> <span class="token punctuation">(</span><span class="token string">&#39;ACTIVE&#39;</span> <span class="token keyword">AS</span> active<span class="token punctuation">,</span> <span class="token string">&#39;INACTIVE&#39;</span> <span class="token keyword">AS</span> inactive<span class="token punctuation">,</span> <span class="token string">&#39;KILLED&#39;</span> <span class="token keyword">AS</span> killed<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> machine<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="会话统计信息" tabindex="-1"><a class="header-anchor" href="#会话统计信息"><span>会话统计信息</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- -----------------------------------------------------------------------------------</span>
<span class="token comment">-- File Name    : https://oracle-base.com/dba/monitoring/session_stats.sql</span>
<span class="token comment">-- Author       : Tim Hall</span>
<span class="token comment">-- Description  : Displays session-specific statistics.</span>
<span class="token comment">-- Requirements : Access to the V$ views.</span>
<span class="token comment">-- Call Syntax  : @session_stats (statistic-name or all)</span>
<span class="token comment">-- Last Modified: 03/11/2004</span>
<span class="token comment">-- -----------------------------------------------------------------------------------</span>

<span class="token keyword">SET</span> VERIFY <span class="token keyword">OFF</span>
<span class="token keyword">SELECT</span> sn<span class="token punctuation">.</span>name<span class="token punctuation">,</span> ss<span class="token punctuation">.</span><span class="token keyword">value</span>
<span class="token keyword">FROM</span>   v$sesstat ss<span class="token punctuation">,</span>
       v$statname sn<span class="token punctuation">,</span>
       v$<span class="token keyword">session</span> s
<span class="token keyword">WHERE</span>  ss<span class="token punctuation">.</span>statistic<span class="token comment"># = sn.statistic#</span>
<span class="token operator">AND</span>    s<span class="token punctuation">.</span>sid <span class="token operator">=</span> ss<span class="token punctuation">.</span>sid
<span class="token operator">AND</span>    s<span class="token punctuation">.</span>audsid <span class="token operator">=</span> SYS_CONTEXT<span class="token punctuation">(</span><span class="token string">&#39;USERENV&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;SESSIONID&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="会话undo" tabindex="-1"><a class="header-anchor" href="#会话undo"><span>会话undo</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- -----------------------------------------------------------------------------------</span>
<span class="token comment">-- File Name    : https://oracle-base.com/dba/monitoring/session_undo.sql</span>
<span class="token comment">-- Author       : Tim Hall</span>
<span class="token comment">-- Description  : Displays undo information on relevant database sessions.</span>
<span class="token comment">-- Requirements : Access to the V$ views.</span>
<span class="token comment">-- Call Syntax  : @session_undo</span>
<span class="token comment">-- Last Modified: 29/03/2005</span>
<span class="token comment">-- -----------------------------------------------------------------------------------</span>
<span class="token keyword">SET</span> LINESIZE <span class="token number">200</span>

<span class="token keyword">COLUMN</span> username FORMAT A15

<span class="token keyword">SELECT</span> s<span class="token punctuation">.</span>username<span class="token punctuation">,</span>
       s<span class="token punctuation">.</span>sid<span class="token punctuation">,</span>
       s<span class="token punctuation">.</span><span class="token keyword">serial</span><span class="token comment">#,</span>
       t<span class="token punctuation">.</span>used_ublk<span class="token punctuation">,</span>
       t<span class="token punctuation">.</span>used_urec<span class="token punctuation">,</span>
       rs<span class="token punctuation">.</span>segment_name<span class="token punctuation">,</span>
       r<span class="token punctuation">.</span>rssize<span class="token punctuation">,</span>
       r<span class="token punctuation">.</span><span class="token keyword">status</span>
<span class="token keyword">FROM</span>   v$<span class="token keyword">transaction</span> t<span class="token punctuation">,</span>
       v$<span class="token keyword">session</span> s<span class="token punctuation">,</span>
       v$rollstat r<span class="token punctuation">,</span>
       dba_rollback_segs rs
<span class="token keyword">WHERE</span>  s<span class="token punctuation">.</span>saddr <span class="token operator">=</span> t<span class="token punctuation">.</span>ses_addr
<span class="token operator">AND</span>    t<span class="token punctuation">.</span>xidusn <span class="token operator">=</span> r<span class="token punctuation">.</span>usn
<span class="token operator">AND</span>    rs<span class="token punctuation">.</span>segment_id <span class="token operator">=</span> t<span class="token punctuation">.</span>xidusn
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> t<span class="token punctuation">.</span>used_ublk <span class="token keyword">DESC</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="top会话" tabindex="-1"><a class="header-anchor" href="#top会话"><span>Top会话</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>

<span class="token comment">-- -----------------------------------------------------------------------------------</span>
<span class="token comment">-- File Name    : https://oracle-base.com/dba/monitoring/top_sessions.sql</span>
<span class="token comment">-- Author       : Tim Hall</span>
<span class="token comment">-- Description  : Displays information on all database sessions ordered by executions.</span>
<span class="token comment">-- Requirements : Access to the V$ views.</span>
<span class="token comment">-- Call Syntax  : @top_sessions.sql (reads, execs or cpu)</span>
<span class="token comment">-- Last Modified: 21/02/2005</span>
<span class="token comment">-- -----------------------------------------------------------------------------------</span>
<span class="token keyword">SET</span> LINESIZE <span class="token number">500</span>
<span class="token keyword">SET</span> PAGESIZE <span class="token number">1000</span>
<span class="token keyword">SET</span> VERIFY <span class="token keyword">OFF</span>

<span class="token keyword">COLUMN</span> username FORMAT A15
<span class="token keyword">COLUMN</span> machine FORMAT A25
<span class="token keyword">COLUMN</span> logon_time FORMAT A20

<span class="token keyword">SELECT</span> NVL<span class="token punctuation">(</span>a<span class="token punctuation">.</span>username<span class="token punctuation">,</span> <span class="token string">&#39;(oracle)&#39;</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> username<span class="token punctuation">,</span>
       a<span class="token punctuation">.</span>osuser<span class="token punctuation">,</span>
       a<span class="token punctuation">.</span>sid<span class="token punctuation">,</span>
       a<span class="token punctuation">.</span><span class="token keyword">serial</span><span class="token comment">#,</span>
       c<span class="token punctuation">.</span><span class="token keyword">value</span> <span class="token keyword">AS</span> <span class="token operator">&amp;</span><span class="token number">1</span><span class="token punctuation">,</span>
       a<span class="token punctuation">.</span>lockwait<span class="token punctuation">,</span>
       a<span class="token punctuation">.</span><span class="token keyword">status</span><span class="token punctuation">,</span>
       a<span class="token punctuation">.</span>module<span class="token punctuation">,</span>
       a<span class="token punctuation">.</span>machine<span class="token punctuation">,</span>
       a<span class="token punctuation">.</span>program<span class="token punctuation">,</span>
       TO_CHAR<span class="token punctuation">(</span>a<span class="token punctuation">.</span>logon_Time<span class="token punctuation">,</span><span class="token string">&#39;DD-MON-YYYY HH24:MI:SS&#39;</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> logon_time
<span class="token keyword">FROM</span>   v$<span class="token keyword">session</span> a<span class="token punctuation">,</span>
       v$sesstat c<span class="token punctuation">,</span>
       v$statname d
<span class="token keyword">WHERE</span>  a<span class="token punctuation">.</span>sid        <span class="token operator">=</span> c<span class="token punctuation">.</span>sid
<span class="token operator">AND</span>    c<span class="token punctuation">.</span>statistic<span class="token comment"># = d.statistic#</span>
<span class="token operator">AND</span>    d<span class="token punctuation">.</span>name       <span class="token operator">=</span> DECODE<span class="token punctuation">(</span>UPPER<span class="token punctuation">(</span><span class="token string">&#39;&amp;1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;READS&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;session logical reads&#39;</span><span class="token punctuation">,</span>
                                          <span class="token string">&#39;EXECS&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;execute count&#39;</span><span class="token punctuation">,</span>
                                          <span class="token string">&#39;CPU&#39;</span><span class="token punctuation">,</span>   <span class="token string">&#39;CPU used by this session&#39;</span><span class="token punctuation">,</span>
                                                   <span class="token string">&#39;CPU used by this session&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> c<span class="token punctuation">.</span><span class="token keyword">value</span> <span class="token keyword">DESC</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="表大小增长情况" tabindex="-1"><a class="header-anchor" href="#表大小增长情况"><span>表大小增长情况</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- -----------------------------------------------------------------------------------</span>
<span class="token comment">-- File Name    : https://oracle-base.com/dba/monitoring/table_growth.sql</span>
<span class="token comment">-- Author       : Tim Hall</span>
<span class="token comment">-- Description  : Displays information on all active database sessions.</span>
<span class="token comment">-- Requirements : Access to the DBA_HIST views. Diagnostics and Tuning license.</span>
<span class="token comment">-- Call Syntax  : @table_growth (schema-name) (table_name)</span>
<span class="token comment">-- Last Modified: 03-DEC-2019</span>
<span class="token comment">-- -----------------------------------------------------------------------------------</span>
<span class="token keyword">COLUMN</span> object_name FORMAT A30
 
<span class="token keyword">SELECT</span> TO_CHAR<span class="token punctuation">(</span>sn<span class="token punctuation">.</span>begin_interval_time<span class="token punctuation">,</span><span class="token string">&#39;DD-MON-YYYY HH24:MM&#39;</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> begin_interval_time<span class="token punctuation">,</span>
       sso<span class="token punctuation">.</span>object_name<span class="token punctuation">,</span>
       ss<span class="token punctuation">.</span>space_used_total
<span class="token keyword">FROM</span>   dba_hist_seg_stat ss<span class="token punctuation">,</span>
       dba_hist_seg_stat_obj sso<span class="token punctuation">,</span>
       dba_hist_snapshot sn
<span class="token keyword">WHERE</span>  sso<span class="token punctuation">.</span>owner <span class="token operator">=</span> UPPER<span class="token punctuation">(</span><span class="token string">&#39;&amp;1&#39;</span><span class="token punctuation">)</span>
<span class="token operator">AND</span>    sso<span class="token punctuation">.</span>obj<span class="token comment"># = ss.obj#</span>
<span class="token operator">AND</span>    sn<span class="token punctuation">.</span>snap_id <span class="token operator">=</span> ss<span class="token punctuation">.</span>snap_id
<span class="token operator">AND</span>    sso<span class="token punctuation">.</span>object_name <span class="token operator">LIKE</span> UPPER<span class="token punctuation">(</span><span class="token string">&#39;&amp;2&#39;</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">&#39;%&#39;</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> sn<span class="token punctuation">.</span>begin_interval_time<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="top-latch" tabindex="-1"><a class="header-anchor" href="#top-latch"><span>TOP Latch</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- -----------------------------------------------------------------------------------</span>
<span class="token comment">-- File Name    : https://oracle-base.com/dba/monitoring/top_latches.sql</span>
<span class="token comment">-- Author       : Tim Hall</span>
<span class="token comment">-- Description  : Displays information about the top latches.</span>
<span class="token comment">-- Requirements : Access to the V$ views.</span>
<span class="token comment">-- Call Syntax  : @top_latches</span>
<span class="token comment">-- Last Modified: 15-JUL-2000</span>
<span class="token comment">-- -----------------------------------------------------------------------------------</span>

<span class="token keyword">SET</span> LINESIZE <span class="token number">200</span>

<span class="token keyword">SELECT</span> l<span class="token punctuation">.</span>latch<span class="token comment">#,</span>
       l<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
       l<span class="token punctuation">.</span>gets<span class="token punctuation">,</span>
       l<span class="token punctuation">.</span>misses<span class="token punctuation">,</span>
       l<span class="token punctuation">.</span>sleeps<span class="token punctuation">,</span>
       l<span class="token punctuation">.</span>immediate_gets<span class="token punctuation">,</span>
       l<span class="token punctuation">.</span>immediate_misses<span class="token punctuation">,</span>
       l<span class="token punctuation">.</span>spin_gets
<span class="token keyword">FROM</span>   v$latch l
<span class="token keyword">WHERE</span>  l<span class="token punctuation">.</span>misses <span class="token operator">&gt;</span> <span class="token number">0</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> l<span class="token punctuation">.</span>misses <span class="token keyword">DESC</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="热块" tabindex="-1"><a class="header-anchor" href="#热块"><span>热块</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- -----------------------------------------------------------------------------------</span>
<span class="token comment">-- File Name    : https://oracle-base.com/dba/monitoring/hot_blocks.sql</span>
<span class="token comment">-- Author       : Tim Hall</span>
<span class="token comment">-- Description  : Detects hot blocks.</span>
<span class="token comment">-- Call Syntax  : @hot_blocks</span>
<span class="token comment">-- Last Modified: 17/02/2005</span>
<span class="token comment">-- -----------------------------------------------------------------------------------</span>
<span class="token keyword">SET</span> LINESIZE <span class="token number">200</span>
<span class="token keyword">SET</span> VERIFY <span class="token keyword">OFF</span>

<span class="token keyword">SELECT</span> <span class="token operator">*</span>
<span class="token keyword">FROM</span>   <span class="token punctuation">(</span><span class="token keyword">SELECT</span> name<span class="token punctuation">,</span>
               addr<span class="token punctuation">,</span>
               gets<span class="token punctuation">,</span>
               misses<span class="token punctuation">,</span>
               sleeps
        <span class="token keyword">FROM</span>   v$latch_children
        <span class="token keyword">WHERE</span>  name <span class="token operator">=</span> <span class="token string">&#39;cache buffers chains&#39;</span>
        <span class="token operator">AND</span>    misses <span class="token operator">&gt;</span> <span class="token number">0</span>
        <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> misses <span class="token keyword">DESC</span><span class="token punctuation">)</span>
<span class="token keyword">WHERE</span>  rownum <span class="token operator">&lt;</span> <span class="token number">11</span><span class="token punctuation">;</span>

ACCEPT address PROMPT <span class="token string">&quot;Enter ADDR: &quot;</span>

<span class="token keyword">COLUMN</span> owner FORMAT A15
<span class="token keyword">COLUMN</span> object_name FORMAT A30
<span class="token keyword">COLUMN</span> subobject_name FORMAT A20

<span class="token keyword">SELECT</span> <span class="token operator">*</span>
<span class="token keyword">FROM</span>   <span class="token punctuation">(</span><span class="token keyword">SELECT</span> o<span class="token punctuation">.</span>owner<span class="token punctuation">,</span>
               o<span class="token punctuation">.</span>object_name<span class="token punctuation">,</span>
               o<span class="token punctuation">.</span>subobject_name<span class="token punctuation">,</span>
               bh<span class="token punctuation">.</span>tch<span class="token punctuation">,</span>
               bh<span class="token punctuation">.</span>obj<span class="token punctuation">,</span>
               bh<span class="token punctuation">.</span><span class="token keyword">file</span><span class="token comment">#,</span>
               bh<span class="token punctuation">.</span>dbablk<span class="token punctuation">,</span>
               bh<span class="token punctuation">.</span>class<span class="token punctuation">,</span>
               bh<span class="token punctuation">.</span>state
        <span class="token keyword">FROM</span>   x$bh bh<span class="token punctuation">,</span>
               dba_objects o
        <span class="token keyword">WHERE</span>  o<span class="token punctuation">.</span>data_object_id <span class="token operator">=</span> bh<span class="token punctuation">.</span>obj
        <span class="token operator">AND</span>    hladdr <span class="token operator">=</span> <span class="token string">&#39;&amp;address&#39;</span>
        <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> tch <span class="token keyword">DESC</span><span class="token punctuation">)</span>
<span class="token keyword">WHERE</span>  rownum <span class="token operator">&lt;</span> <span class="token number">11</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="缓存命中率" tabindex="-1"><a class="header-anchor" href="#缓存命中率"><span>缓存命中率</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- -----------------------------------------------------------------------------------</span>
<span class="token comment">-- File Name    : https://oracle-base.com/dba/monitoring/cache_hit_ratio.sql</span>
<span class="token comment">-- Author       : Tim Hall</span>
<span class="token comment">-- Description  : Displays cache hit ratio for the database.</span>
<span class="token comment">-- Comments     : The minimum figure of 89% is often quoted, but depending on the type of system this may not be possible.</span>
<span class="token comment">-- Requirements : Access to the v$ views.</span>
<span class="token comment">-- Call Syntax  : @cache_hit_ratio</span>
<span class="token comment">-- Last Modified: 15/07/2000</span>
<span class="token comment">-- -----------------------------------------------------------------------------------</span>
PROMPT
PROMPT Hit ratio should exceed <span class="token number">89</span><span class="token operator">%</span>

<span class="token keyword">SELECT</span> <span class="token function">Sum</span><span class="token punctuation">(</span>Decode<span class="token punctuation">(</span>a<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token string">&#39;consistent gets&#39;</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token keyword">value</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token string">&quot;Consistent Gets&quot;</span><span class="token punctuation">,</span>
       <span class="token function">Sum</span><span class="token punctuation">(</span>Decode<span class="token punctuation">(</span>a<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token string">&#39;db block gets&#39;</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token keyword">value</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token string">&quot;DB Block Gets&quot;</span><span class="token punctuation">,</span>
       <span class="token function">Sum</span><span class="token punctuation">(</span>Decode<span class="token punctuation">(</span>a<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token string">&#39;physical reads&#39;</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token keyword">value</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token string">&quot;Physical Reads&quot;</span><span class="token punctuation">,</span>
       <span class="token function">Round</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token function">Sum</span><span class="token punctuation">(</span>Decode<span class="token punctuation">(</span>a<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token string">&#39;consistent gets&#39;</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token keyword">value</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
         <span class="token function">Sum</span><span class="token punctuation">(</span>Decode<span class="token punctuation">(</span>a<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token string">&#39;db block gets&#39;</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token keyword">value</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">-</span>
         <span class="token function">Sum</span><span class="token punctuation">(</span>Decode<span class="token punctuation">(</span>a<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token string">&#39;physical reads&#39;</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token keyword">value</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token punctuation">)</span><span class="token operator">/</span>
           <span class="token punctuation">(</span><span class="token function">Sum</span><span class="token punctuation">(</span>Decode<span class="token punctuation">(</span>a<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token string">&#39;consistent gets&#39;</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token keyword">value</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
             <span class="token function">Sum</span><span class="token punctuation">(</span>Decode<span class="token punctuation">(</span>a<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token string">&#39;db block gets&#39;</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token keyword">value</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
             <span class="token operator">*</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;Hit Ratio %&quot;</span>
<span class="token keyword">FROM</span>   v$sysstat a<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="缓存建议" tabindex="-1"><a class="header-anchor" href="#缓存建议"><span>缓存建议</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>

<span class="token comment">-- -----------------------------------------------------------------------------------</span>
<span class="token comment">-- File Name    : https://oracle-base.com/dba/monitoring/db_cache_advice.sql</span>
<span class="token comment">-- Author       : Tim Hall</span>
<span class="token comment">-- Description  : Predicts how changes to the buffer cache will affect physical reads.</span>
<span class="token comment">-- Requirements : Access to the V$ views.</span>
<span class="token comment">-- Call Syntax  : @db_cache_advice</span>
<span class="token comment">-- Last Modified: 12/02/2004</span>
<span class="token comment">-- -----------------------------------------------------------------------------------</span>

<span class="token keyword">COLUMN</span> size_for_estimate          FORMAT <span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span> heading <span class="token string">&#39;Cache Size (MB)&#39;</span>
<span class="token keyword">COLUMN</span> buffers_for_estimate       FORMAT <span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span> heading <span class="token string">&#39;Buffers&#39;</span>
<span class="token keyword">COLUMN</span> estd_physical_read_factor  FORMAT <span class="token number">999.90</span> heading <span class="token string">&#39;Estd Phys|Read Factor&#39;</span>
<span class="token keyword">COLUMN</span> estd_physical_reads        FORMAT <span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span> heading <span class="token string">&#39;Estd Phys| Reads&#39;</span>

<span class="token keyword">SELECT</span> size_for_estimate<span class="token punctuation">,</span> 
       buffers_for_estimate<span class="token punctuation">,</span>
       estd_physical_read_factor<span class="token punctuation">,</span>
       estd_physical_reads
<span class="token keyword">FROM</span>   v$db_cache_advice
<span class="token keyword">WHERE</span>  name          <span class="token operator">=</span> <span class="token string">&#39;DEFAULT&#39;</span>
<span class="token operator">AND</span>    block_size    <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> <span class="token keyword">value</span>
                        <span class="token keyword">FROM</span>   v$parameter
                        <span class="token keyword">WHERE</span>  name <span class="token operator">=</span> <span class="token string">&#39;db_block_size&#39;</span><span class="token punctuation">)</span>
<span class="token operator">AND</span>    advice_status <span class="token operator">=</span> <span class="token string">&#39;ON&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="命中率" tabindex="-1"><a class="header-anchor" href="#命中率"><span>命中率</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- -----------------------------------------------------------------------------------</span>
<span class="token comment">-- File Name    : https://oracle-base.com/dba/monitoring/tuning.sql</span>
<span class="token comment">-- Author       : Tim Hall</span>
<span class="token comment">-- Description  : Displays several performance indicators and comments on the value.</span>
<span class="token comment">-- Requirements : Access to the V$ views.</span>
<span class="token comment">-- Call Syntax  : @tuning</span>
<span class="token comment">-- Last Modified: 15/07/2000</span>
<span class="token comment">-- -----------------------------------------------------------------------------------</span>

<span class="token keyword">SET</span> SERVEROUTPUT <span class="token keyword">ON</span>
<span class="token keyword">SET</span> LINESIZE <span class="token number">1000</span>
<span class="token keyword">SET</span> FEEDBACK <span class="token keyword">OFF</span>

<span class="token keyword">DECLARE</span>
  v_value  NUMBER<span class="token punctuation">;</span>

  <span class="token keyword">FUNCTION</span> <span class="token function">Format</span><span class="token punctuation">(</span>p_value  <span class="token operator">IN</span>  NUMBER<span class="token punctuation">)</span> 
    <span class="token keyword">RETURN</span> VARCHAR2 <span class="token operator">IS</span>
  <span class="token keyword">BEGIN</span>
    <span class="token keyword">RETURN</span> LPad<span class="token punctuation">(</span>To_Char<span class="token punctuation">(</span><span class="token function">Round</span><span class="token punctuation">(</span>p_value<span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;990.00&#39;</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">&#39;%&#39;</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">&#39;  &#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">END</span><span class="token punctuation">;</span>

<span class="token keyword">BEGIN</span>

  <span class="token comment">-- --------------------------</span>
  <span class="token comment">-- Dictionary Cache Hit Ratio</span>
  <span class="token comment">-- --------------------------</span>
  <span class="token keyword">SELECT</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">-</span> <span class="token punctuation">(</span><span class="token function">Sum</span><span class="token punctuation">(</span>getmisses<span class="token punctuation">)</span><span class="token operator">/</span><span class="token punctuation">(</span><span class="token function">Sum</span><span class="token punctuation">(</span>gets<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">Sum</span><span class="token punctuation">(</span>getmisses<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span>
  <span class="token keyword">INTO</span>   v_value
  <span class="token keyword">FROM</span>   v$rowcache<span class="token punctuation">;</span>

  DBMS_Output<span class="token punctuation">.</span>Put<span class="token punctuation">(</span><span class="token string">&#39;Dictionary Cache Hit Ratio       : &#39;</span> <span class="token operator">||</span> <span class="token function">Format</span><span class="token punctuation">(</span>v_value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">IF</span> v_value <span class="token operator">&lt;</span> <span class="token number">90</span> <span class="token keyword">THEN</span>
    DBMS_Output<span class="token punctuation">.</span>Put_Line<span class="token punctuation">(</span><span class="token string">&#39;Increase SHARED_POOL_SIZE parameter to bring value above 90%&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">ELSE</span>
    DBMS_Output<span class="token punctuation">.</span>Put_Line<span class="token punctuation">(</span><span class="token string">&#39;Value Acceptable.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
  <span class="token keyword">END</span> <span class="token keyword">IF</span><span class="token punctuation">;</span>

  <span class="token comment">-- -----------------------</span>
  <span class="token comment">-- Library Cache Hit Ratio</span>
  <span class="token comment">-- -----------------------</span>
  <span class="token keyword">SELECT</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">-</span><span class="token punctuation">(</span><span class="token function">Sum</span><span class="token punctuation">(</span>reloads<span class="token punctuation">)</span><span class="token operator">/</span><span class="token punctuation">(</span><span class="token function">Sum</span><span class="token punctuation">(</span>pins<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">Sum</span><span class="token punctuation">(</span>reloads<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span>
  <span class="token keyword">INTO</span>   v_value
  <span class="token keyword">FROM</span>   v$librarycache<span class="token punctuation">;</span>

  DBMS_Output<span class="token punctuation">.</span>Put<span class="token punctuation">(</span><span class="token string">&#39;Library Cache Hit Ratio          : &#39;</span> <span class="token operator">||</span> <span class="token function">Format</span><span class="token punctuation">(</span>v_value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">IF</span> v_value <span class="token operator">&lt;</span> <span class="token number">99</span> <span class="token keyword">THEN</span>
    DBMS_Output<span class="token punctuation">.</span>Put_Line<span class="token punctuation">(</span><span class="token string">&#39;Increase SHARED_POOL_SIZE parameter to bring value above 99%&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">ELSE</span>
    DBMS_Output<span class="token punctuation">.</span>Put_Line<span class="token punctuation">(</span><span class="token string">&#39;Value Acceptable.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
  <span class="token keyword">END</span> <span class="token keyword">IF</span><span class="token punctuation">;</span>

  <span class="token comment">-- -------------------------------</span>
  <span class="token comment">-- DB Block Buffer Cache Hit Ratio</span>
  <span class="token comment">-- -------------------------------</span>
  <span class="token keyword">SELECT</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">-</span> <span class="token punctuation">(</span>phys<span class="token punctuation">.</span><span class="token keyword">value</span> <span class="token operator">/</span> <span class="token punctuation">(</span>db<span class="token punctuation">.</span><span class="token keyword">value</span> <span class="token operator">+</span> cons<span class="token punctuation">.</span><span class="token keyword">value</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span>
  <span class="token keyword">INTO</span>   v_value
  <span class="token keyword">FROM</span>   v$sysstat phys<span class="token punctuation">,</span>
         v$sysstat db<span class="token punctuation">,</span>
         v$sysstat cons
  <span class="token keyword">WHERE</span>  phys<span class="token punctuation">.</span>name  <span class="token operator">=</span> <span class="token string">&#39;physical reads&#39;</span>
  <span class="token operator">AND</span>    db<span class="token punctuation">.</span>name    <span class="token operator">=</span> <span class="token string">&#39;db block gets&#39;</span>
  <span class="token operator">AND</span>    cons<span class="token punctuation">.</span>name  <span class="token operator">=</span> <span class="token string">&#39;consistent gets&#39;</span><span class="token punctuation">;</span>

  DBMS_Output<span class="token punctuation">.</span>Put<span class="token punctuation">(</span><span class="token string">&#39;DB Block Buffer Cache Hit Ratio  : &#39;</span> <span class="token operator">||</span> <span class="token function">Format</span><span class="token punctuation">(</span>v_value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">IF</span> v_value <span class="token operator">&lt;</span> <span class="token number">89</span> <span class="token keyword">THEN</span>
    DBMS_Output<span class="token punctuation">.</span>Put_Line<span class="token punctuation">(</span><span class="token string">&#39;Increase DB_BLOCK_BUFFERS parameter to bring value above 89%&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">ELSE</span>
    DBMS_Output<span class="token punctuation">.</span>Put_Line<span class="token punctuation">(</span><span class="token string">&#39;Value Acceptable.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
  <span class="token keyword">END</span> <span class="token keyword">IF</span><span class="token punctuation">;</span>
  
  <span class="token comment">-- ---------------</span>
  <span class="token comment">-- Latch Hit Ratio</span>
  <span class="token comment">-- ---------------</span>
  <span class="token keyword">SELECT</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">-</span> <span class="token punctuation">(</span><span class="token function">Sum</span><span class="token punctuation">(</span>misses<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token function">Sum</span><span class="token punctuation">(</span>gets<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span>
  <span class="token keyword">INTO</span>   v_value
  <span class="token keyword">FROM</span>   v$latch<span class="token punctuation">;</span>

  DBMS_Output<span class="token punctuation">.</span>Put<span class="token punctuation">(</span><span class="token string">&#39;Latch Hit Ratio                  : &#39;</span> <span class="token operator">||</span> <span class="token function">Format</span><span class="token punctuation">(</span>v_value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">IF</span> v_value <span class="token operator">&lt;</span> <span class="token number">98</span> <span class="token keyword">THEN</span>
    DBMS_Output<span class="token punctuation">.</span>Put_Line<span class="token punctuation">(</span><span class="token string">&#39;Increase number of latches to bring the value above 98%&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">ELSE</span>
    DBMS_Output<span class="token punctuation">.</span>Put_Line<span class="token punctuation">(</span><span class="token string">&#39;Value acceptable.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">END</span> <span class="token keyword">IF</span><span class="token punctuation">;</span>

  <span class="token comment">-- -----------------------</span>
  <span class="token comment">-- Disk Sort Ratio</span>
  <span class="token comment">-- -----------------------</span>
  <span class="token keyword">SELECT</span> <span class="token punctuation">(</span><span class="token keyword">disk</span><span class="token punctuation">.</span><span class="token keyword">value</span><span class="token operator">/</span>mem<span class="token punctuation">.</span><span class="token keyword">value</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span>
  <span class="token keyword">INTO</span>   v_value
  <span class="token keyword">FROM</span>   v$sysstat <span class="token keyword">disk</span><span class="token punctuation">,</span>
         v$sysstat mem
  <span class="token keyword">WHERE</span>  <span class="token keyword">disk</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;sorts (disk)&#39;</span>
  <span class="token operator">AND</span>    mem<span class="token punctuation">.</span>name  <span class="token operator">=</span> <span class="token string">&#39;sorts (memory)&#39;</span><span class="token punctuation">;</span>

  DBMS_Output<span class="token punctuation">.</span>Put<span class="token punctuation">(</span><span class="token string">&#39;Disk Sort Ratio                  : &#39;</span> <span class="token operator">||</span> <span class="token function">Format</span><span class="token punctuation">(</span>v_value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">IF</span> v_value <span class="token operator">&gt;</span> <span class="token number">5</span> <span class="token keyword">THEN</span>
    DBMS_Output<span class="token punctuation">.</span>Put_Line<span class="token punctuation">(</span><span class="token string">&#39;Increase SORT_AREA_SIZE parameter to bring value below 5%&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">ELSE</span>
    DBMS_Output<span class="token punctuation">.</span>Put_Line<span class="token punctuation">(</span><span class="token string">&#39;Value Acceptable.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
  <span class="token keyword">END</span> <span class="token keyword">IF</span><span class="token punctuation">;</span>
  
  <span class="token comment">-- ----------------------</span>
  <span class="token comment">-- Rollback Segment Waits</span>
  <span class="token comment">-- ----------------------</span>
  <span class="token keyword">SELECT</span> <span class="token punctuation">(</span><span class="token function">Sum</span><span class="token punctuation">(</span>waits<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token function">Sum</span><span class="token punctuation">(</span>gets<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span>
  <span class="token keyword">INTO</span>   v_value
  <span class="token keyword">FROM</span>   v$rollstat<span class="token punctuation">;</span>

  DBMS_Output<span class="token punctuation">.</span>Put<span class="token punctuation">(</span><span class="token string">&#39;Rollback Segment Waits           : &#39;</span> <span class="token operator">||</span> <span class="token function">Format</span><span class="token punctuation">(</span>v_value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">IF</span> v_value <span class="token operator">&gt;</span> <span class="token number">5</span> <span class="token keyword">THEN</span>
    DBMS_Output<span class="token punctuation">.</span>Put_Line<span class="token punctuation">(</span><span class="token string">&#39;Increase number of Rollback Segments to bring the value below 5%&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">ELSE</span>
    DBMS_Output<span class="token punctuation">.</span>Put_Line<span class="token punctuation">(</span><span class="token string">&#39;Value acceptable.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">END</span> <span class="token keyword">IF</span><span class="token punctuation">;</span>

  <span class="token comment">-- -------------------</span>
  <span class="token comment">-- Dispatcher Workload</span>
  <span class="token comment">-- -------------------</span>
  <span class="token keyword">SELECT</span> NVL<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token function">Sum</span><span class="token punctuation">(</span>busy<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token punctuation">(</span><span class="token function">Sum</span><span class="token punctuation">(</span>busy<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">Sum</span><span class="token punctuation">(</span>idle<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token keyword">INTO</span>   v_value
  <span class="token keyword">FROM</span>   v$dispatcher<span class="token punctuation">;</span>

  DBMS_Output<span class="token punctuation">.</span>Put<span class="token punctuation">(</span><span class="token string">&#39;Dispatcher Workload              : &#39;</span> <span class="token operator">||</span> <span class="token function">Format</span><span class="token punctuation">(</span>v_value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">IF</span> v_value <span class="token operator">&gt;</span> <span class="token number">50</span> <span class="token keyword">THEN</span>
    DBMS_Output<span class="token punctuation">.</span>Put_Line<span class="token punctuation">(</span><span class="token string">&#39;Increase MTS_DISPATCHERS to bring the value below 50%&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">ELSE</span>
    DBMS_Output<span class="token punctuation">.</span>Put_Line<span class="token punctuation">(</span><span class="token string">&#39;Value acceptable.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">END</span> <span class="token keyword">IF</span><span class="token punctuation">;</span>
  
<span class="token keyword">END</span><span class="token punctuation">;</span>
<span class="token operator">/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="lru-latch-hist-ratio" tabindex="-1"><a class="header-anchor" href="#lru-latch-hist-ratio"><span>LRU Latch Hist Ratio</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- -----------------------------------------------------------------------------------</span>
<span class="token comment">-- File Name    : https://oracle-base.com/dba/monitoring/lru_latch_ratio.sql</span>
<span class="token comment">-- Author       : Tim Hall</span>
<span class="token comment">-- Description  : Displays current LRU latch ratios.</span>
<span class="token comment">-- Requirements : Access to the V$ views.</span>
<span class="token comment">-- Call Syntax  : @lru_latch_hit_ratio</span>
<span class="token comment">-- Last Modified: 15/07/2000</span>
<span class="token comment">-- -----------------------------------------------------------------------------------</span>
<span class="token keyword">SET</span> LINESIZE <span class="token number">500</span>
<span class="token keyword">SET</span> PAGESIZE <span class="token number">1000</span>
<span class="token keyword">COLUMN</span> <span class="token string">&quot;Ratio %&quot;</span> FORMAT <span class="token number">990.00</span>
 
<span class="token keyword">SELECT</span>
    a<span class="token punctuation">.</span>child<span class="token comment">#,</span>
    decode<span class="token punctuation">(</span>
        a<span class="token punctuation">.</span>gets<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>sleeps <span class="token operator">/</span> a<span class="token punctuation">.</span>gets<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span>
    <span class="token punctuation">)</span>
<span class="token keyword">FROM</span>
    v$latch_children a
<span class="token keyword">WHERE</span>
    a<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;cache buffers lru chain&#39;</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
    <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="长事务会话" tabindex="-1"><a class="header-anchor" href="#长事务会话"><span>长事务会话</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- -----------------------------------------------------------------------------------</span>
<span class="token comment">-- File Name    : https://oracle-base.com/dba/monitoring/longops.sql</span>
<span class="token comment">-- Author       : Tim Hall</span>
<span class="token comment">-- Description  : Displays information on all long operations.</span>
<span class="token comment">-- Requirements : Access to the V$ views.</span>
<span class="token comment">-- Call Syntax  : @longops</span>
<span class="token comment">-- Last Modified: 03/07/2003</span>
<span class="token comment">-- -----------------------------------------------------------------------------------</span>
<span class="token keyword">COLUMN</span> sid FORMAT <span class="token number">999</span>
<span class="token keyword">COLUMN</span> <span class="token keyword">serial</span><span class="token comment"># FORMAT 9999999</span>
<span class="token keyword">COLUMN</span> machine FORMAT A30
<span class="token keyword">COLUMN</span> progress_pct FORMAT <span class="token number">99999999.00</span>
<span class="token keyword">COLUMN</span> elapsed FORMAT A10
<span class="token keyword">COLUMN</span> remaining FORMAT A10

<span class="token keyword">SELECT</span> s<span class="token punctuation">.</span>sid<span class="token punctuation">,</span>
       s<span class="token punctuation">.</span><span class="token keyword">serial</span><span class="token comment">#,</span>
       s<span class="token punctuation">.</span>machine<span class="token punctuation">,</span>
       <span class="token function">ROUND</span><span class="token punctuation">(</span>sl<span class="token punctuation">.</span>elapsed_seconds<span class="token operator">/</span><span class="token number">60</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">&#39;:&#39;</span> <span class="token operator">||</span> <span class="token function">MOD</span><span class="token punctuation">(</span>sl<span class="token punctuation">.</span>elapsed_seconds<span class="token punctuation">,</span><span class="token number">60</span><span class="token punctuation">)</span> elapsed<span class="token punctuation">,</span>
       <span class="token function">ROUND</span><span class="token punctuation">(</span>sl<span class="token punctuation">.</span>time_remaining<span class="token operator">/</span><span class="token number">60</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">&#39;:&#39;</span> <span class="token operator">||</span> <span class="token function">MOD</span><span class="token punctuation">(</span>sl<span class="token punctuation">.</span>time_remaining<span class="token punctuation">,</span><span class="token number">60</span><span class="token punctuation">)</span> remaining<span class="token punctuation">,</span>
       <span class="token function">ROUND</span><span class="token punctuation">(</span>sl<span class="token punctuation">.</span>sofar<span class="token operator">/</span>sl<span class="token punctuation">.</span>totalwork<span class="token operator">*</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> progress_pct
<span class="token keyword">FROM</span>   v$<span class="token keyword">session</span> s<span class="token punctuation">,</span>
       v$session_longops sl
<span class="token keyword">WHERE</span>  s<span class="token punctuation">.</span>sid     <span class="token operator">=</span> sl<span class="token punctuation">.</span>sid
<span class="token operator">AND</span>    s<span class="token punctuation">.</span><span class="token keyword">serial</span><span class="token comment"># = sl.serial#;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="日志及日志文件" tabindex="-1"><a class="header-anchor" href="#日志及日志文件"><span>日志及日志文件</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- -----------------------------------------------------------------------------------</span>
<span class="token comment">-- File Name    : https://oracle-base.com/dba/monitoring/logfiles.sql</span>
<span class="token comment">-- Author       : Tim Hall</span>
<span class="token comment">-- Description  : Displays information about redo log files.</span>
<span class="token comment">-- Requirements : Access to the V$ views.</span>
<span class="token comment">-- Call Syntax  : @logfiles</span>
<span class="token comment">-- Last Modified: 21/12/2004</span>
<span class="token comment">-- -----------------------------------------------------------------------------------</span>

<span class="token keyword">SET</span> LINESIZE <span class="token number">200</span>
<span class="token keyword">COLUMN</span> member FORMAT A50
<span class="token keyword">COLUMN</span> first_change<span class="token comment"># FORMAT 99999999999999999999</span>
<span class="token keyword">COLUMN</span> next_change<span class="token comment"># FORMAT 99999999999999999999</span>

<span class="token keyword">SELECT</span> l<span class="token punctuation">.</span>thread<span class="token comment">#,</span>
       lf<span class="token punctuation">.</span><span class="token keyword">group</span><span class="token comment">#,</span>
       lf<span class="token punctuation">.</span>member<span class="token punctuation">,</span>
       TRUNC<span class="token punctuation">(</span>l<span class="token punctuation">.</span>bytes<span class="token operator">/</span><span class="token number">1024</span><span class="token operator">/</span><span class="token number">1024</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> size_mb<span class="token punctuation">,</span>
       l<span class="token punctuation">.</span><span class="token keyword">status</span><span class="token punctuation">,</span>
       l<span class="token punctuation">.</span>archived<span class="token punctuation">,</span>
       lf<span class="token punctuation">.</span><span class="token keyword">type</span><span class="token punctuation">,</span>
       lf<span class="token punctuation">.</span>is_recovery_dest_file <span class="token keyword">AS</span> rdf<span class="token punctuation">,</span>
       l<span class="token punctuation">.</span>sequence<span class="token comment">#,</span>
       l<span class="token punctuation">.</span>first_change<span class="token comment">#,</span>
       l<span class="token punctuation">.</span>next_change<span class="token comment">#   </span>
<span class="token keyword">FROM</span>   v$logfile lf
       <span class="token keyword">JOIN</span> v$log l <span class="token keyword">ON</span> l<span class="token punctuation">.</span><span class="token keyword">group</span><span class="token comment"># = lf.group#</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> l<span class="token punctuation">.</span>thread<span class="token comment">#,lf.group#, lf.member;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="库缓存统计信息" tabindex="-1"><a class="header-anchor" href="#库缓存统计信息"><span>库缓存统计信息</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- -----------------------------------------------------------------------------------</span>
<span class="token comment">-- File Name    : https://oracle-base.com/dba/monitoring/library_cache.sql</span>
<span class="token comment">-- Author       : Tim Hall</span>
<span class="token comment">-- Description  : Displays library cache statistics.</span>
<span class="token comment">-- Requirements : Access to the V$ views.</span>
<span class="token comment">-- Call Syntax  : @library_cache</span>
<span class="token comment">-- Last Modified: 15/07/2000</span>
<span class="token comment">-- -----------------------------------------------------------------------------------</span>
<span class="token keyword">SET</span> LINESIZE <span class="token number">500</span>
<span class="token keyword">SET</span> PAGESIZE <span class="token number">1000</span>
<span class="token keyword">SET</span> VERIFY <span class="token keyword">OFF</span>

<span class="token keyword">SELECT</span> a<span class="token punctuation">.</span>namespace <span class="token string">&quot;Name Space&quot;</span><span class="token punctuation">,</span>
       a<span class="token punctuation">.</span>gets <span class="token string">&quot;Get Requests&quot;</span><span class="token punctuation">,</span>
       a<span class="token punctuation">.</span>gethits <span class="token string">&quot;Get Hits&quot;</span><span class="token punctuation">,</span>
       <span class="token function">Round</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>gethitratio<span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;Get Ratio&quot;</span><span class="token punctuation">,</span>
       a<span class="token punctuation">.</span>pins <span class="token string">&quot;Pin Requests&quot;</span><span class="token punctuation">,</span>
       a<span class="token punctuation">.</span>pinhits <span class="token string">&quot;Pin Hits&quot;</span><span class="token punctuation">,</span>
       <span class="token function">Round</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>pinhitratio<span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;Pin Ratio&quot;</span><span class="token punctuation">,</span>
       a<span class="token punctuation">.</span>reloads <span class="token string">&quot;Reloads&quot;</span><span class="token punctuation">,</span>
       a<span class="token punctuation">.</span>invalidations <span class="token string">&quot;Invalidations&quot;</span>
<span class="token keyword">FROM</span>   v$librarycache a
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="当前latch" tabindex="-1"><a class="header-anchor" href="#当前latch"><span>当前latch</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- -----------------------------------------------------------------------------------</span>
<span class="token comment">-- File Name    : https://oracle-base.com/dba/monitoring/latches.sql</span>
<span class="token comment">-- Author       : Tim Hall</span>
<span class="token comment">-- Description  : Displays information about all current latches.</span>
<span class="token comment">-- Requirements : Access to the V$ views.</span>
<span class="token comment">-- Call Syntax  : @latches</span>
<span class="token comment">-- Last Modified: 15-JUL-2000</span>
<span class="token comment">-- -----------------------------------------------------------------------------------</span>
<span class="token keyword">SET</span> LINESIZE <span class="token number">200</span>

<span class="token keyword">SELECT</span> l<span class="token punctuation">.</span>latch<span class="token comment">#,</span>
       l<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
       l<span class="token punctuation">.</span>gets<span class="token punctuation">,</span>
       l<span class="token punctuation">.</span>misses<span class="token punctuation">,</span>
       l<span class="token punctuation">.</span>sleeps<span class="token punctuation">,</span>
       l<span class="token punctuation">.</span>immediate_gets<span class="token punctuation">,</span>
       l<span class="token punctuation">.</span>immediate_misses<span class="token punctuation">,</span>
       l<span class="token punctuation">.</span>spin_gets
<span class="token keyword">FROM</span>   v$latch l
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> l<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="当前latch持有者" tabindex="-1"><a class="header-anchor" href="#当前latch持有者"><span>当前latch持有者</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- -----------------------------------------------------------------------------------</span>
<span class="token comment">-- File Name    : https://oracle-base.com/dba/monitoring/latch_holders.sql</span>
<span class="token comment">-- Author       : Tim Hall</span>
<span class="token comment">-- Description  : Displays information about all current latch holders.</span>
<span class="token comment">-- Requirements : Access to the V$ views.</span>
<span class="token comment">-- Call Syntax  : @latch_holders</span>
<span class="token comment">-- Last Modified: 15-JUL-2000</span>
<span class="token comment">-- -----------------------------------------------------------------------------------</span>
<span class="token keyword">SET</span> LINESIZE <span class="token number">200</span>

<span class="token keyword">SELECT</span> l<span class="token punctuation">.</span>name <span class="token string">&quot;Latch Name&quot;</span><span class="token punctuation">,</span>
       lh<span class="token punctuation">.</span>pid <span class="token string">&quot;PID&quot;</span><span class="token punctuation">,</span>
       lh<span class="token punctuation">.</span>sid <span class="token string">&quot;SID&quot;</span><span class="token punctuation">,</span>
       l<span class="token punctuation">.</span>gets <span class="token string">&quot;Gets (Wait)&quot;</span><span class="token punctuation">,</span>
       l<span class="token punctuation">.</span>misses <span class="token string">&quot;Misses (Wait)&quot;</span><span class="token punctuation">,</span>
       l<span class="token punctuation">.</span>sleeps <span class="token string">&quot;Sleeps (Wait)&quot;</span><span class="token punctuation">,</span>
       l<span class="token punctuation">.</span>immediate_gets <span class="token string">&quot;Gets (No Wait)&quot;</span><span class="token punctuation">,</span>
       l<span class="token punctuation">.</span>immediate_misses <span class="token string">&quot;Misses (Wait)&quot;</span>
<span class="token keyword">FROM</span>   v$latch l<span class="token punctuation">,</span>
       v$latchholder lh
<span class="token keyword">WHERE</span>  l<span class="token punctuation">.</span>addr <span class="token operator">=</span> lh<span class="token punctuation">.</span>laddr
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> l<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="当前latch命中率" tabindex="-1"><a class="header-anchor" href="#当前latch命中率"><span>当前latch命中率</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- -----------------------------------------------------------------------------------</span>
<span class="token comment">-- File Name    : https://oracle-base.com/dba/monitoring/latch_hit_ratios.sql</span>
<span class="token comment">-- Author       : Tim Hall</span>
<span class="token comment">-- Description  : Displays current latch hit ratios.</span>
<span class="token comment">-- Requirements : Access to the V$ views.</span>
<span class="token comment">-- Call Syntax  : @latch_hit_ratios</span>
<span class="token comment">-- Last Modified: 15-JUL-2000</span>
<span class="token comment">-- -----------------------------------------------------------------------------------</span>
<span class="token keyword">SET</span> LINESIZE <span class="token number">200</span>

<span class="token keyword">COLUMN</span> latch_hit_ratio FORMAT <span class="token number">990.00</span>
 
<span class="token keyword">SELECT</span> l<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
       l<span class="token punctuation">.</span>gets<span class="token punctuation">,</span>
       l<span class="token punctuation">.</span>misses<span class="token punctuation">,</span>
       <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">-</span> <span class="token punctuation">(</span>l<span class="token punctuation">.</span>misses <span class="token operator">/</span> l<span class="token punctuation">.</span>gets<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> latch_hit_ratio
<span class="token keyword">FROM</span>   v$latch l
<span class="token keyword">WHERE</span>  l<span class="token punctuation">.</span>gets   <span class="token operator">!=</span> <span class="token number">0</span>
<span class="token keyword">UNION</span>
<span class="token keyword">SELECT</span> l<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
       l<span class="token punctuation">.</span>gets<span class="token punctuation">,</span>
       l<span class="token punctuation">.</span>misses<span class="token punctuation">,</span>
       <span class="token number">100</span> <span class="token keyword">AS</span> latch_hit_ratio
<span class="token keyword">FROM</span>   v$latch l
<span class="token keyword">WHERE</span>  l<span class="token punctuation">.</span>gets   <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="隐藏参数" tabindex="-1"><a class="header-anchor" href="#隐藏参数"><span>隐藏参数</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- -----------------------------------------------------------------------------------</span>
<span class="token comment">-- File Name    : http://www.oracle-base.com/dba/monitoring/hidden_parameters.sql</span>
<span class="token comment">-- Author       : DR Timothy S Hall</span>
<span class="token comment">-- Description  : Displays a list of one or all the hidden parameters.</span>
<span class="token comment">-- Requirements : Access to the v$ views.</span>
<span class="token comment">-- Call Syntax  : @hidden_parameters (parameter-name or all)</span>
<span class="token comment">-- Last Modified: 28-NOV-2006</span>
<span class="token comment">-- -----------------------------------------------------------------------------------</span>
<span class="token keyword">SET</span> VERIFY <span class="token keyword">OFF</span>
<span class="token keyword">COLUMN</span> parameter      FORMAT a37
<span class="token keyword">COLUMN</span> description    FORMAT a30 WORD_WRAPPED
<span class="token keyword">COLUMN</span> session_value  FORMAT a10
<span class="token keyword">COLUMN</span> instance_value FORMAT a10
 
<span class="token keyword">SELECT</span> a<span class="token punctuation">.</span>ksppinm <span class="token keyword">AS</span> parameter<span class="token punctuation">,</span>
       a<span class="token punctuation">.</span>ksppdesc <span class="token keyword">AS</span> description<span class="token punctuation">,</span>
       b<span class="token punctuation">.</span>ksppstvl <span class="token keyword">AS</span> session_value<span class="token punctuation">,</span>
       c<span class="token punctuation">.</span>ksppstvl <span class="token keyword">AS</span> instance_value
<span class="token keyword">FROM</span>   x$ksppi a<span class="token punctuation">,</span>
       x$ksppcv b<span class="token punctuation">,</span>
       x$ksppsv c
<span class="token keyword">WHERE</span>  a<span class="token punctuation">.</span>indx <span class="token operator">=</span> b<span class="token punctuation">.</span>indx
<span class="token operator">AND</span>    a<span class="token punctuation">.</span>indx <span class="token operator">=</span> c<span class="token punctuation">.</span>indx
<span class="token operator">AND</span>    a<span class="token punctuation">.</span>ksppinm <span class="token operator">LIKE</span> <span class="token string">&#39;/_%&#39;</span> <span class="token keyword">ESCAPE</span> <span class="token string">&#39;/&#39;</span>
<span class="token operator">AND</span>    a<span class="token punctuation">.</span>ksppinm <span class="token operator">=</span> DECODE<span class="token punctuation">(</span>LOWER<span class="token punctuation">(</span><span class="token string">&#39;&amp;1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;all&#39;</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span>ksppinm<span class="token punctuation">,</span> LOWER<span class="token punctuation">(</span><span class="token string">&#39;&amp;1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> a<span class="token punctuation">.</span>ksppinm<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="高水位线" tabindex="-1"><a class="header-anchor" href="#高水位线"><span>高水位线</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- -----------------------------------------------------------------------------------</span>
<span class="token comment">-- File Name    : https://oracle-base.com/dba/monitoring/high_water_mark.sql</span>
<span class="token comment">-- Author       : Tim Hall</span>
<span class="token comment">-- Description  : Displays the High Water Mark for the specified table, or all tables.</span>
<span class="token comment">-- Requirements : Access to the Dbms_Space.</span>
<span class="token comment">-- Call Syntax  : @high_water_mark (table_name or all) (schema-name)</span>
<span class="token comment">-- Last Modified: 15/07/2000</span>
<span class="token comment">-- -----------------------------------------------------------------------------------</span>
<span class="token keyword">SET</span> SERVEROUTPUT <span class="token keyword">ON</span>
<span class="token keyword">SET</span> VERIFY <span class="token keyword">OFF</span>

<span class="token keyword">DECLARE</span>
  <span class="token keyword">CURSOR</span> cu_tables <span class="token operator">IS</span>
    <span class="token keyword">SELECT</span> a<span class="token punctuation">.</span>owner<span class="token punctuation">,</span>
           a<span class="token punctuation">.</span>table_name
    <span class="token keyword">FROM</span>   all_tables a
    <span class="token keyword">WHERE</span>  a<span class="token punctuation">.</span>table_name <span class="token operator">=</span> Decode<span class="token punctuation">(</span>Upper<span class="token punctuation">(</span><span class="token string">&#39;&amp;&amp;1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;ALL&#39;</span><span class="token punctuation">,</span>a<span class="token punctuation">.</span>table_name<span class="token punctuation">,</span>Upper<span class="token punctuation">(</span><span class="token string">&#39;&amp;&amp;1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token operator">AND</span>    a<span class="token punctuation">.</span>owner      <span class="token operator">=</span> Upper<span class="token punctuation">(</span><span class="token string">&#39;&amp;&amp;2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  op1  NUMBER<span class="token punctuation">;</span>
  op2  NUMBER<span class="token punctuation">;</span>
  op3  NUMBER<span class="token punctuation">;</span>
  op4  NUMBER<span class="token punctuation">;</span>
  op5  NUMBER<span class="token punctuation">;</span>
  op6  NUMBER<span class="token punctuation">;</span>
  op7  NUMBER<span class="token punctuation">;</span>
<span class="token keyword">BEGIN</span>

  Dbms_Output<span class="token punctuation">.</span><span class="token keyword">Disable</span><span class="token punctuation">;</span>
  Dbms_Output<span class="token punctuation">.</span><span class="token keyword">Enable</span><span class="token punctuation">(</span><span class="token number">1000000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  Dbms_Output<span class="token punctuation">.</span>Put_Line<span class="token punctuation">(</span><span class="token string">&#39;TABLE                             UNUSED BLOCKS     TOTAL BLOCKS  HIGH WATER MARK&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  Dbms_Output<span class="token punctuation">.</span>Put_Line<span class="token punctuation">(</span><span class="token string">&#39;------------------------------  ---------------  ---------------  ---------------&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">FOR</span> cur_rec <span class="token operator">IN</span> cu_tables <span class="token keyword">LOOP</span>
    Dbms_Space<span class="token punctuation">.</span>Unused_Space<span class="token punctuation">(</span>cur_rec<span class="token punctuation">.</span>owner<span class="token punctuation">,</span>cur_rec<span class="token punctuation">.</span>table_name<span class="token punctuation">,</span><span class="token string">&#39;TABLE&#39;</span><span class="token punctuation">,</span>op1<span class="token punctuation">,</span>op2<span class="token punctuation">,</span>op3<span class="token punctuation">,</span>op4<span class="token punctuation">,</span>op5<span class="token punctuation">,</span>op6<span class="token punctuation">,</span>op7<span class="token punctuation">)</span><span class="token punctuation">;</span>
    Dbms_Output<span class="token punctuation">.</span>Put_Line<span class="token punctuation">(</span>RPad<span class="token punctuation">(</span>cur_rec<span class="token punctuation">.</span>table_name<span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">,</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span> <span class="token operator">||</span>
                         LPad<span class="token punctuation">(</span>op3<span class="token punctuation">,</span><span class="token number">15</span><span class="token punctuation">,</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span>                <span class="token operator">||</span>
                         LPad<span class="token punctuation">(</span>op1<span class="token punctuation">,</span><span class="token number">15</span><span class="token punctuation">,</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span>                <span class="token operator">||</span>
                         LPad<span class="token punctuation">(</span>Trunc<span class="token punctuation">(</span>op1<span class="token operator">-</span>op3<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">15</span><span class="token punctuation">,</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
  <span class="token keyword">END</span> <span class="token keyword">LOOP</span><span class="token punctuation">;</span>

<span class="token keyword">END</span><span class="token punctuation">;</span>
<span class="token operator">/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="高水位线hwm" tabindex="-1"><a class="header-anchor" href="#高水位线hwm"><span>高水位线HWM</span></a></h3><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>

<span class="token comment">-- File name:   high_water_mark.sql</span>
<span class="token comment">-- Purpose:     display information about high water mark </span>
<span class="token comment">-- Author:      Jeremy Baumont</span>
<span class="token comment">-- Copyright:   Apache License, Version 2.0</span>
<span class="token comment">--</span>
<span class="token comment">-- Usage:       @high_water_mark.sql</span>
<span class="token comment">--------------------------------------------------------------------------------</span>

<span class="token keyword">SELECT</span>
    uts<span class="token punctuation">.</span>table_name<span class="token punctuation">,</span>
    uts<span class="token punctuation">.</span>blocks                                                             blks_used<span class="token punctuation">,</span>
    uts<span class="token punctuation">.</span>avg_space<span class="token punctuation">,</span>
    uts<span class="token punctuation">.</span>num_rows<span class="token punctuation">,</span>
    uts<span class="token punctuation">.</span>avg_row_len<span class="token punctuation">,</span>
    uts<span class="token punctuation">.</span>empty_blocks                                                       empty_blks<span class="token punctuation">,</span>
    usse<span class="token punctuation">.</span>blocks                                                            alloc_blks<span class="token punctuation">,</span>
    greatest<span class="token punctuation">(</span>
        uts<span class="token punctuation">.</span>blocks<span class="token punctuation">,</span> <span class="token number">1</span>
    <span class="token punctuation">)</span> <span class="token operator">/</span> greatest<span class="token punctuation">(</span>
        usse<span class="token punctuation">.</span>blocks<span class="token punctuation">,</span> <span class="token number">1</span>
    <span class="token punctuation">)</span>                                                                      pct_hwm<span class="token punctuation">,</span>
    uts<span class="token punctuation">.</span>num_rows <span class="token operator">*</span> uts<span class="token punctuation">.</span>avg_row_len                                         data_in_bytes<span class="token punctuation">,</span>
    <span class="token punctuation">(</span> uts<span class="token punctuation">.</span>num_rows <span class="token operator">*</span> uts<span class="token punctuation">.</span>avg_row_len <span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">8192</span>                              data_in_blks<span class="token punctuation">,</span>
    <span class="token punctuation">(</span> <span class="token punctuation">(</span> uts<span class="token punctuation">.</span>num_rows <span class="token operator">*</span> uts<span class="token punctuation">.</span>avg_row_len <span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">8192</span> <span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">1.25</span>                   mod_data_in_blks<span class="token punctuation">,</span>
    <span class="token punctuation">(</span> <span class="token punctuation">(</span> <span class="token punctuation">(</span> uts<span class="token punctuation">.</span>num_rows <span class="token operator">*</span> uts<span class="token punctuation">.</span>avg_row_len <span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">8192</span> <span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">1.25</span> <span class="token punctuation">)</span> <span class="token operator">/</span> usse<span class="token punctuation">.</span>blocks pct_spc_used
<span class="token keyword">FROM</span>
    dba_tab_statistics uts<span class="token punctuation">,</span>
    dba_segments       usse
<span class="token keyword">WHERE</span>
    uts<span class="token punctuation">.</span>owner <span class="token operator">=</span> <span class="token string">&#39;&amp;owner&#39;</span>
    <span class="token operator">AND</span> uts<span class="token punctuation">.</span>table_name <span class="token operator">=</span> <span class="token string">&#39;&amp;table_name&#39;</span>
    <span class="token operator">AND</span> uts<span class="token punctuation">.</span>table_name <span class="token operator">=</span> usse<span class="token punctuation">.</span>segment_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="lock-and-blocks" tabindex="-1"><a class="header-anchor" href="#lock-and-blocks"><span>lock and blocks</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- File name:   blocked.sql</span>
<span class="token comment">-- Purpose:     display current locks and blocks </span>
<span class="token comment">--</span>
<span class="token comment">-- Usage:       @blocked</span>
<span class="token comment">--------------------------------------------------------------------------------</span>



prompt Currently locked objects:
col U_NAME <span class="token keyword">for</span> a20
col OBJ_OWNER <span class="token keyword">for</span> a20
col object_name <span class="token keyword">for</span> a20
col object_type <span class="token keyword">for</span> a20
col osuser <span class="token keyword">for</span> a20
col <span class="token keyword">status</span> <span class="token keyword">for</span> a15
col mode_held <span class="token keyword">for</span> a20

 
<span class="token keyword">SELECT</span> username U_NAME<span class="token punctuation">,</span> owner OBJ_OWNER<span class="token punctuation">,</span>
object_name<span class="token punctuation">,</span> object_type<span class="token punctuation">,</span> s<span class="token punctuation">.</span>osuser<span class="token punctuation">,</span>
DECODE<span class="token punctuation">(</span>l<span class="token punctuation">.</span>block<span class="token punctuation">,</span>
  <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&#39;Not Blocking&#39;</span><span class="token punctuation">,</span>
  <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;Blocking&#39;</span><span class="token punctuation">,</span>
  <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;Global&#39;</span><span class="token punctuation">)</span> <span class="token keyword">STATUS</span><span class="token punctuation">,</span>
  DECODE<span class="token punctuation">(</span>v<span class="token punctuation">.</span>locked_mode<span class="token punctuation">,</span>
    <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&#39;None&#39;</span><span class="token punctuation">,</span>
    <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;Null&#39;</span><span class="token punctuation">,</span>
    <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;Row-S (SS)&#39;</span><span class="token punctuation">,</span>
    <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;Row-X (SX)&#39;</span><span class="token punctuation">,</span>
    <span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">&#39;Share&#39;</span><span class="token punctuation">,</span>
    <span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">&#39;S/Row-X (SSX)&#39;</span><span class="token punctuation">,</span>
    <span class="token number">6</span><span class="token punctuation">,</span> <span class="token string">&#39;Exclusive&#39;</span><span class="token punctuation">,</span> TO_CHAR<span class="token punctuation">(</span>lmode<span class="token punctuation">)</span>
  <span class="token punctuation">)</span> MODE_HELD
<span class="token keyword">FROM</span> gv$locked_object v<span class="token punctuation">,</span> dba_objects d<span class="token punctuation">,</span>
gv$<span class="token keyword">lock</span> l<span class="token punctuation">,</span> gv$<span class="token keyword">session</span> s
<span class="token keyword">WHERE</span> v<span class="token punctuation">.</span>object_id <span class="token operator">=</span> d<span class="token punctuation">.</span>object_id
<span class="token operator">AND</span> <span class="token punctuation">(</span>v<span class="token punctuation">.</span>object_id <span class="token operator">=</span> l<span class="token punctuation">.</span>id1<span class="token punctuation">)</span>
<span class="token operator">AND</span> v<span class="token punctuation">.</span>session_id <span class="token operator">=</span> s<span class="token punctuation">.</span>sid
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> username<span class="token punctuation">,</span> session_id<span class="token punctuation">;</span>
 
 
PROMPT List <span class="token keyword">current</span> locks
col mode_requested <span class="token keyword">for</span> a20
col blocking_others <span class="token keyword">for</span> a20
 
<span class="token keyword">SELECT</span> session_id<span class="token punctuation">,</span>lock_type<span class="token punctuation">,</span> 
mode_held<span class="token punctuation">,</span> 
mode_requested<span class="token punctuation">,</span> 
blocking_others<span class="token punctuation">,</span> 
lock_id1
<span class="token keyword">FROM</span> dba_lock l
<span class="token keyword">WHERE</span> lock_type 
<span class="token operator">NOT</span> <span class="token operator">IN</span> <span class="token punctuation">(</span><span class="token string">&#39;Media Recovery&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Redo Thread&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
 
prompt List objects that have been  locked <span class="token keyword">for</span> <span class="token number">60</span> seconds <span class="token operator">or</span> more: 
col <span class="token string">&quot;WAITING User&quot;</span> <span class="token keyword">for</span> a20
col <span class="token string">&quot;WAITING Program&quot;</span> <span class="token keyword">for</span> a20
col <span class="token string">&quot;WAITING Client&quot;</span> <span class="token keyword">for</span> a20
col <span class="token string">&quot;HOLDING User&quot;</span> <span class="token keyword">for</span> a20
col <span class="token string">&quot;HOLDING Program&quot;</span> <span class="token keyword">for</span> a20
col <span class="token string">&quot;HOLDING Client&quot;</span> <span class="token keyword">for</span> a20
col WSID <span class="token keyword">for</span> a10 
col WPID <span class="token keyword">for</span> <span class="token number">9999999</span>
col HSID <span class="token keyword">for</span> a10
col HPID <span class="token keyword">for</span> <span class="token number">9999999</span>
col <span class="token string">&quot;OS User&quot;</span> <span class="token keyword">for</span> a15
col <span class="token string">&quot;HOLDING Object&quot;</span> <span class="token keyword">for</span> a25

 
<span class="token keyword">SELECT</span> SUBSTR<span class="token punctuation">(</span>TO_CHAR<span class="token punctuation">(</span>w<span class="token punctuation">.</span>session_id<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span> WSID<span class="token punctuation">,</span> p1<span class="token punctuation">.</span>spid WPID<span class="token punctuation">,</span>
SUBSTR<span class="token punctuation">(</span>s1<span class="token punctuation">.</span>username<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">12</span><span class="token punctuation">)</span> <span class="token string">&quot;WAITING User&quot;</span><span class="token punctuation">,</span>
SUBSTR<span class="token punctuation">(</span>s1<span class="token punctuation">.</span>osuser<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">)</span> <span class="token string">&quot;OS User&quot;</span><span class="token punctuation">,</span>
<span class="token comment">--SUBSTR(s1.program,1,20) &quot;WAITING Program&quot;,</span>
<span class="token comment">--s1.client_info &quot;WAITING Client&quot;,</span>
SUBSTR<span class="token punctuation">(</span>TO_CHAR<span class="token punctuation">(</span>h<span class="token punctuation">.</span>session_id<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span> HSID<span class="token punctuation">,</span> p2<span class="token punctuation">.</span>spid HPID<span class="token punctuation">,</span>
SUBSTR<span class="token punctuation">(</span>s2<span class="token punctuation">.</span>username<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">12</span><span class="token punctuation">)</span> <span class="token string">&quot;HOLDING User&quot;</span><span class="token punctuation">,</span>
SUBSTR<span class="token punctuation">(</span>s2<span class="token punctuation">.</span>osuser<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">)</span> <span class="token string">&quot;OS User&quot;</span><span class="token punctuation">,</span>
<span class="token comment">--SUBSTR(s2.program,1,20) &quot;HOLDING Program&quot;,</span>
<span class="token comment">--s2.client_info &quot;HOLDING Client&quot;,</span>
o<span class="token punctuation">.</span>object_name <span class="token string">&quot;HOLDING Object&quot;</span>
<span class="token keyword">FROM</span> gv$process p1<span class="token punctuation">,</span> gv$process p2<span class="token punctuation">,</span> gv$<span class="token keyword">session</span> s1<span class="token punctuation">,</span>
gv$<span class="token keyword">session</span> s2<span class="token punctuation">,</span> dba_locks w<span class="token punctuation">,</span> dba_locks h<span class="token punctuation">,</span> dba_objects o
<span class="token keyword">WHERE</span> w<span class="token punctuation">.</span>last_convert <span class="token operator">&gt;</span> <span class="token number">60</span>
<span class="token operator">AND</span> h<span class="token punctuation">.</span>mode_held <span class="token operator">!=</span> <span class="token string">&#39;None&#39;</span>
<span class="token operator">AND</span> h<span class="token punctuation">.</span>mode_held <span class="token operator">!=</span> <span class="token string">&#39;Null&#39;</span>
<span class="token operator">AND</span> w<span class="token punctuation">.</span>mode_requested <span class="token operator">!=</span> <span class="token string">&#39;None&#39;</span>
<span class="token operator">AND</span> s1<span class="token punctuation">.</span>row_wait_obj<span class="token comment"># = o.object_id</span>
<span class="token operator">AND</span> w<span class="token punctuation">.</span>lock_type<span class="token punctuation">(</span><span class="token operator">+</span><span class="token punctuation">)</span> <span class="token operator">=</span> h<span class="token punctuation">.</span>lock_type
<span class="token operator">AND</span> w<span class="token punctuation">.</span>lock_id1<span class="token punctuation">(</span><span class="token operator">+</span><span class="token punctuation">)</span> <span class="token operator">=</span> h<span class="token punctuation">.</span>lock_id1
<span class="token operator">AND</span> w<span class="token punctuation">.</span>lock_id2 <span class="token punctuation">(</span><span class="token operator">+</span><span class="token punctuation">)</span> <span class="token operator">=</span> h<span class="token punctuation">.</span>lock_id2
<span class="token operator">AND</span> w<span class="token punctuation">.</span>session_id <span class="token operator">=</span> s1<span class="token punctuation">.</span>sid <span class="token punctuation">(</span><span class="token operator">+</span><span class="token punctuation">)</span>
<span class="token operator">AND</span> h<span class="token punctuation">.</span>session_id <span class="token operator">=</span> s2<span class="token punctuation">.</span>sid <span class="token punctuation">(</span><span class="token operator">+</span><span class="token punctuation">)</span>
<span class="token operator">AND</span> s1<span class="token punctuation">.</span>paddr <span class="token operator">=</span> p1<span class="token punctuation">.</span>addr <span class="token punctuation">(</span><span class="token operator">+</span><span class="token punctuation">)</span>
<span class="token operator">AND</span> s2<span class="token punctuation">.</span>paddr <span class="token operator">=</span> p2<span class="token punctuation">.</span>addr <span class="token punctuation">(</span><span class="token operator">+</span><span class="token punctuation">)</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> w<span class="token punctuation">.</span>last_convert <span class="token keyword">DESC</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="disk-file-operations" tabindex="-1"><a class="header-anchor" href="#disk-file-operations"><span>disk file operations</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>

<span class="token comment">-- File name:   disk_ops.sql</span>
<span class="token comment">-- Purpose:     display disk file operations </span>
<span class="token comment">-- Author:      Jeremy Baumont</span>
<span class="token comment">-- Copyright:   Apache License, Version 2.0</span>
<span class="token comment">--</span>
<span class="token comment">-- Usage:       @disk_ops  &lt;OWNER&gt;</span>
<span class="token comment">--------------------------------------------------------------------------------</span>

col file_type <span class="token keyword">for</span> a20
col file_operation <span class="token keyword">for</span> a20
<span class="token keyword">select</span>
    decode<span class="token punctuation">(</span>p3<span class="token punctuation">,</span><span class="token number">0</span> <span class="token punctuation">,</span><span class="token string">&#39;Other&#39;</span><span class="token punctuation">,</span>
              <span class="token number">1</span> <span class="token punctuation">,</span><span class="token string">&#39;Control File&#39;</span><span class="token punctuation">,</span>
              <span class="token number">2</span> <span class="token punctuation">,</span><span class="token string">&#39;Data File&#39;</span><span class="token punctuation">,</span>
              <span class="token number">3</span> <span class="token punctuation">,</span><span class="token string">&#39;Log File&#39;</span><span class="token punctuation">,</span>
              <span class="token number">4</span> <span class="token punctuation">,</span><span class="token string">&#39;Archive Log&#39;</span><span class="token punctuation">,</span>
              <span class="token number">6</span> <span class="token punctuation">,</span><span class="token string">&#39;Temp File&#39;</span><span class="token punctuation">,</span>
              <span class="token number">9</span> <span class="token punctuation">,</span><span class="token string">&#39;Data File Backup&#39;</span><span class="token punctuation">,</span>
              <span class="token number">10</span><span class="token punctuation">,</span><span class="token string">&#39;Data File Incremental Backup&#39;</span><span class="token punctuation">,</span>
              <span class="token number">11</span><span class="token punctuation">,</span><span class="token string">&#39;Archive Log Backup&#39;</span><span class="token punctuation">,</span>
              <span class="token number">12</span><span class="token punctuation">,</span><span class="token string">&#39;Data File Copy&#39;</span><span class="token punctuation">,</span>
              <span class="token number">17</span><span class="token punctuation">,</span><span class="token string">&#39;Flashback Log&#39;</span><span class="token punctuation">,</span>
              <span class="token number">18</span><span class="token punctuation">,</span><span class="token string">&#39;Data Pump Dump File&#39;</span><span class="token punctuation">,</span>
                  <span class="token string">&#39;unknown &#39;</span><span class="token operator">||</span>p1<span class="token punctuation">)</span>  file_type<span class="token punctuation">,</span>
    decode<span class="token punctuation">(</span>p1<span class="token punctuation">,</span><span class="token number">1</span> <span class="token punctuation">,</span><span class="token string">&#39;file creation&#39;</span><span class="token punctuation">,</span>
              <span class="token number">2</span> <span class="token punctuation">,</span><span class="token string">&#39;file open&#39;</span><span class="token punctuation">,</span>
              <span class="token number">3</span> <span class="token punctuation">,</span><span class="token string">&#39;file resize&#39;</span><span class="token punctuation">,</span>
              <span class="token number">4</span> <span class="token punctuation">,</span><span class="token string">&#39;file deletion&#39;</span><span class="token punctuation">,</span>
              <span class="token number">5</span> <span class="token punctuation">,</span><span class="token string">&#39;file close&#39;</span><span class="token punctuation">,</span>
              <span class="token number">6</span> <span class="token punctuation">,</span><span class="token string">&#39;wait for all aio requests to finish&#39;</span><span class="token punctuation">,</span>
              <span class="token number">7</span> <span class="token punctuation">,</span><span class="token string">&#39;write verification&#39;</span><span class="token punctuation">,</span>
              <span class="token number">8</span> <span class="token punctuation">,</span><span class="token string">&#39;wait for miscellaneous io (ftp, block dump, passwd file)&#39;</span><span class="token punctuation">,</span>
              <span class="token number">9</span> <span class="token punctuation">,</span><span class="token string">&#39;read from snapshot files&#39;</span><span class="token punctuation">,</span>
                 <span class="token string">&#39;unknown &#39;</span><span class="token operator">||</span>p3<span class="token punctuation">)</span> file_operation<span class="token punctuation">,</span>
    decode<span class="token punctuation">(</span>p3<span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>p2<span class="token punctuation">)</span> <span class="token keyword">file</span><span class="token comment">#,</span>
    <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span>
<span class="token keyword">from</span> dba_hist_active_sess_history
<span class="token keyword">where</span> event <span class="token operator">=</span><span class="token string">&#39;Disk file operations I/O&#39;</span>
<span class="token keyword">group</span> <span class="token keyword">by</span> p1<span class="token punctuation">,</span>p3<span class="token punctuation">,</span>
    decode<span class="token punctuation">(</span>p3<span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>p2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="scn-health" tabindex="-1"><a class="header-anchor" href="#scn-health"><span>scn health</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- File name:   check_scn_health.sql</span>
<span class="token comment">-- Purpose:     display information about the scn health </span>
<span class="token comment">--</span>
<span class="token comment">--              display information about the scn health over the scn</span>
<span class="token comment">--              headroom being the difference between current scn and</span>
<span class="token comment">--              scn soft limit (number of seconds between now and </span>
<span class="token comment">--              1988/01/01 00:00:00 </span>
<span class="token comment">--</span>
<span class="token comment">-- Author:      Jeremy Baumont</span>
<span class="token comment">-- Copyright:   Apache License v2.0</span>
<span class="token comment">--</span>
<span class="token comment">-- Usage:       @check_scn_health  </span>
<span class="token comment">--------------------------------------------------------------------------------</span>

<span class="token keyword">set</span> serveroutput <span class="token keyword">on</span>

<span class="token keyword">DECLARE</span>
   right_now <span class="token keyword">TIMESTAMP</span><span class="token punctuation">;</span> one_second_ago <span class="token keyword">TIMESTAMP</span><span class="token punctuation">;</span> one_day_ago <span class="token keyword">TIMESTAMP</span><span class="token punctuation">;</span> 
   soft_limit_date <span class="token keyword">DATE</span> <span class="token keyword">DEFAULT</span> TO_DATE<span class="token punctuation">(</span><span class="token string">&#39;12:00:00 19880101&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;HH:MI:SS YYYYMMDD&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   scn1 <span class="token keyword">INTEGER</span><span class="token punctuation">;</span> scn2 <span class="token keyword">INTEGER</span><span class="token punctuation">;</span> scn3 <span class="token keyword">INTEGER</span><span class="token punctuation">;</span> scndiff <span class="token keyword">INTEGER</span><span class="token punctuation">;</span>
   scndiffaday <span class="token keyword">INTEGER</span><span class="token punctuation">;</span> 
   soft_limit <span class="token keyword">INTEGER</span><span class="token punctuation">;</span>
   indicator <span class="token keyword">INTEGER</span><span class="token punctuation">;</span>
   scnheadroom <span class="token keyword">INTEGER</span><span class="token punctuation">;</span>

    <span class="token keyword">FUNCTION</span> time_diff <span class="token punctuation">(</span>
    DATE_1 <span class="token operator">IN</span> <span class="token keyword">DATE</span><span class="token punctuation">,</span> DATE_2 <span class="token operator">IN</span> <span class="token keyword">DATE</span><span class="token punctuation">)</span> <span class="token keyword">RETURN</span> NUMBER <span class="token operator">IS</span>
 
    NDATE_1   NUMBER<span class="token punctuation">;</span>
    NDATE_2   NUMBER<span class="token punctuation">;</span>
    NSECOND_1 NUMBER<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    NSECOND_2 NUMBER<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
    <span class="token keyword">BEGIN</span>
        NDATE_1 :<span class="token operator">=</span> TO_NUMBER<span class="token punctuation">(</span>TO_CHAR<span class="token punctuation">(</span>DATE_1<span class="token punctuation">,</span> <span class="token string">&#39;J&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        NDATE_2 :<span class="token operator">=</span> TO_NUMBER<span class="token punctuation">(</span>TO_CHAR<span class="token punctuation">(</span>DATE_2<span class="token punctuation">,</span> <span class="token string">&#39;J&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        NSECOND_1 :<span class="token operator">=</span> TO_NUMBER<span class="token punctuation">(</span>TO_CHAR<span class="token punctuation">(</span>DATE_1<span class="token punctuation">,</span> <span class="token string">&#39;SSSSS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        NSECOND_2 :<span class="token operator">=</span> TO_NUMBER<span class="token punctuation">(</span>TO_CHAR<span class="token punctuation">(</span>DATE_2<span class="token punctuation">,</span> <span class="token string">&#39;SSSSS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
        <span class="token keyword">RETURN</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span>NDATE_2 <span class="token operator">-</span> NDATE_1<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">86400</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token punctuation">(</span>NSECOND_2 <span class="token operator">-</span> NSECOND_1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">END</span> time_diff<span class="token punctuation">;</span>



<span class="token keyword">BEGIN</span>
<span class="token comment">-- Calculating soft limit</span>
   soft_limit :<span class="token operator">=</span> time_diff<span class="token punctuation">(</span>soft_limit_date<span class="token punctuation">,</span> sysdate<span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">16384</span><span class="token punctuation">;</span>
   dbms_output<span class="token punctuation">.</span>put_line<span class="token punctuation">(</span><span class="token string">&#39;Soft limit value of the SCNs is &#39;</span> <span class="token operator">||</span> soft_limit<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- Get the current SCN.</span>
   right_now :<span class="token operator">=</span> SYSTIMESTAMP<span class="token punctuation">;</span>
   scn1 :<span class="token operator">=</span> TIMESTAMP_TO_SCN<span class="token punctuation">(</span>right_now<span class="token punctuation">)</span><span class="token punctuation">;</span>
   dbms_output<span class="token punctuation">.</span>put_line<span class="token punctuation">(</span><span class="token string">&#39;Current SCN is &#39;</span> <span class="token operator">||</span> scn1<span class="token punctuation">)</span><span class="token punctuation">;</span>
   one_day_ago :<span class="token operator">=</span> right_now <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
   scn3 :<span class="token operator">=</span> TIMESTAMP_TO_SCN<span class="token punctuation">(</span>one_day_ago<span class="token punctuation">)</span><span class="token punctuation">;</span>
   scndiffaday :<span class="token operator">=</span> <span class="token punctuation">(</span>scn1 <span class="token operator">-</span> scn3<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- Get the SCN from exactly 1 day ago.</span>
   one_second_ago :<span class="token operator">=</span> right_now <span class="token operator">-</span> <span class="token number">1</span><span class="token operator">/</span><span class="token number">3600</span><span class="token punctuation">;</span>
   scn2 :<span class="token operator">=</span> TIMESTAMP_TO_SCN<span class="token punctuation">(</span>one_second_ago<span class="token punctuation">)</span><span class="token punctuation">;</span>
   dbms_output<span class="token punctuation">.</span>put_line<span class="token punctuation">(</span><span class="token string">&#39;SCN from one_second_ago is &#39;</span> <span class="token operator">||</span> scn2<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- Find an arbitrary SCN somewhere between one_second_ago and today.</span>
<span class="token comment">-- (In a real program we would have stored the SCN at some significant</span>
<span class="token comment">-- moment.)</span>
   scndiff :<span class="token operator">=</span> <span class="token punctuation">(</span>scn1 <span class="token operator">-</span> scn2<span class="token punctuation">)</span><span class="token punctuation">;</span>
   dbms_output<span class="token punctuation">.</span>put_line<span class="token punctuation">(</span><span class="token string">&#39;SCN increase in the last second: &#39;</span> <span class="token operator">||</span> scndiff<span class="token punctuation">)</span><span class="token punctuation">;</span> 

<span class="token comment">-- Estimation before impact of the soft limit</span>
   scnheadroom :<span class="token operator">=</span> soft_limit <span class="token operator">-</span>scn1<span class="token punctuation">;</span>
   indicator :<span class="token operator">=</span> scnheadroom<span class="token operator">/</span><span class="token punctuation">(</span><span class="token number">16384</span><span class="token operator">*</span><span class="token number">86400</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
   dbms_output<span class="token punctuation">.</span>put_line<span class="token punctuation">(</span><span class="token string">&#39;SCN Headroom: &#39;</span> <span class="token operator">||</span> scnheadroom<span class="token punctuation">)</span><span class="token punctuation">;</span> 
   dbms_output<span class="token punctuation">.</span>put_line<span class="token punctuation">(</span><span class="token string">&#39;Average SCN increase per second in the last day: &#39;</span> <span class="token operator">||</span> <span class="token function">round</span><span class="token punctuation">(</span>scndiffaday<span class="token operator">/</span><span class="token number">86400</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">&#39; should not be more that 16384.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
   dbms_output<span class="token punctuation">.</span>put_line<span class="token punctuation">(</span><span class="token string">&#39;Health Indicator: &#39;</span> <span class="token operator">||</span> indicator <span class="token operator">||</span> <span class="token string">&#39; should be more than 62.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 

<span class="token keyword">END</span><span class="token punctuation">;</span>
<span class="token operator">/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="locks-dml-lock-time" tabindex="-1"><a class="header-anchor" href="#locks-dml-lock-time"><span>locks dml lock time</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- +----------------------------------------------------------------------------+</span>
<span class="token comment">-- |                          Jeffrey M. Hunter                                 |</span>
<span class="token comment">-- |                      jhunter@idevelopment.info                             |</span>
<span class="token comment">-- |                         www.idevelopment.info                              |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- |      Copyright (c) 1998-2015 Jeffrey M. Hunter. All rights reserved.       |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- | DATABASE : Oracle                                                          |</span>
<span class="token comment">-- | FILE     : locks_dml_lock_time.sql                                         |</span>
<span class="token comment">-- | CLASS    : Locks                                                           |</span>
<span class="token comment">-- | PURPOSE  : Query all DML locks in the database (INSERT, UPDATE, DELETE)    |</span>
<span class="token comment">-- |            and the number of minutes they have been holding the lock.      |</span>
<span class="token comment">-- |            This script will also query critical information about the lock |</span>
<span class="token comment">-- |            including Lock Type, Object Name/Owner, OS/Oracle User and Wait |</span>
<span class="token comment">-- |            time (in minutes). This script is not RAC enabled and will only |</span>
<span class="token comment">-- |            display locks on the current instance.                          |</span>
<span class="token comment">-- | NOTE     : As with any code, ensure to test this script in a development   |</span>
<span class="token comment">-- |            environment before attempting to run it in production.          |</span>
<span class="token comment">-- +----------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> TERMOUT <span class="token keyword">OFF</span><span class="token punctuation">;</span>
<span class="token keyword">COLUMN</span> current_instance NEW_VALUE current_instance NOPRINT<span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> rpad<span class="token punctuation">(</span>instance_name<span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">)</span> current_instance <span class="token keyword">FROM</span> v$instance<span class="token punctuation">;</span>
<span class="token keyword">SET</span> TERMOUT <span class="token keyword">ON</span><span class="token punctuation">;</span>

PROMPT 
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>
PROMPT <span class="token operator">|</span> Report   : DML <span class="token keyword">Table</span> <span class="token keyword">Lock</span> <span class="token keyword">Time</span>                                         <span class="token operator">|</span>
PROMPT <span class="token operator">|</span> Instance : <span class="token operator">&amp;</span>current_instance                                           <span class="token operator">|</span>
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> ECHO        <span class="token keyword">OFF</span>
<span class="token keyword">SET</span> FEEDBACK    <span class="token number">6</span>
<span class="token keyword">SET</span> HEADING     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> LINESIZE    <span class="token number">256</span>
<span class="token keyword">SET</span> PAGESIZE    <span class="token number">50000</span>
<span class="token keyword">SET</span> TERMOUT     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> TIMING      <span class="token keyword">OFF</span>
<span class="token keyword">SET</span> TRIMOUT     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> TRIMSPOOL   <span class="token keyword">ON</span>
<span class="token keyword">SET</span> VERIFY      <span class="token keyword">OFF</span>

CLEAR <span class="token keyword">COLUMNS</span>
CLEAR BREAKS
CLEAR COMPUTES

<span class="token keyword">COLUMN</span> instance_name                FORMAT a9           HEADING <span class="token string">&#39;Instance&#39;</span>
<span class="token keyword">COLUMN</span> locking_oracle_user          FORMAT a20          HEADING <span class="token string">&#39;Locking Oracle User&#39;</span>
<span class="token keyword">COLUMN</span> sid_serial                   FORMAT a15          HEADING <span class="token string">&#39;SID / Serial#&#39;</span>
<span class="token keyword">COLUMN</span> mode_held                    FORMAT a15          HEADING <span class="token string">&#39;Mode Held&#39;</span>
<span class="token keyword">COLUMN</span> mode_requested               FORMAT a15          HEADING <span class="token string">&#39;Mode Requested&#39;</span>
<span class="token keyword">COLUMN</span> lock_type                    FORMAT a15          HEADING <span class="token string">&#39;Lock Type&#39;</span>
<span class="token keyword">COLUMN</span> object                       FORMAT a42          HEADING <span class="token string">&#39;Object&#39;</span>
<span class="token keyword">COLUMN</span> program                      FORMAT a20          HEADING <span class="token string">&#39;Program&#39;</span>
<span class="token keyword">COLUMN</span> lock_time_min                FORMAT <span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>      HEADING <span class="token string">&#39;Lock Time (min)&#39;</span>

CLEAR BREAKS

<span class="token keyword">SELECT</span>
    i<span class="token punctuation">.</span>instance_name                                 instance_name
  <span class="token punctuation">,</span> l<span class="token punctuation">.</span>sid <span class="token operator">||</span> <span class="token string">&#39; / &#39;</span> <span class="token operator">||</span> s<span class="token punctuation">.</span><span class="token keyword">serial</span><span class="token comment">#                     sid_serial</span>
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span>username                                      locking_oracle_user
  <span class="token punctuation">,</span> DECODE<span class="token punctuation">(</span>   l<span class="token punctuation">.</span>lmode
            <span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span>
            <span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;Row Share&#39;</span>
            <span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;Row Exclusive&#39;</span>
            <span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">&#39;Share&#39;</span>
            <span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">&#39;Share Row Exclusive&#39;</span>
            <span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token string">&#39;Exclusive&#39;</span>
            <span class="token punctuation">,</span>    <span class="token string">&#39;None&#39;</span><span class="token punctuation">)</span>                            mode_held
  <span class="token punctuation">,</span> DECODE<span class="token punctuation">(</span>   l<span class="token punctuation">.</span>request
            <span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span>
            <span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;Row Share&#39;</span>
            <span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;Row Exclusive&#39;</span>
            <span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">&#39;Share&#39;</span>
            <span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">&#39;Share Row Exclusive&#39;</span>
            <span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token string">&#39;Exclusive&#39;</span>
            <span class="token punctuation">,</span>    <span class="token string">&#39;None&#39;</span><span class="token punctuation">)</span>                            mode_requested
  <span class="token punctuation">,</span> DECODE <span class="token punctuation">(</span>   l<span class="token punctuation">.</span><span class="token keyword">type</span>
             <span class="token punctuation">,</span> <span class="token string">&#39;CF&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Control File&#39;</span>
             <span class="token punctuation">,</span> <span class="token string">&#39;DX&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Distributed Transaction&#39;</span>
             <span class="token punctuation">,</span> <span class="token string">&#39;FS&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;File Set&#39;</span>
             <span class="token punctuation">,</span> <span class="token string">&#39;IR&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Instance Recovery&#39;</span>
             <span class="token punctuation">,</span> <span class="token string">&#39;IS&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Instance State&#39;</span>
             <span class="token punctuation">,</span> <span class="token string">&#39;IV&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Libcache Invalidation&#39;</span>
             <span class="token punctuation">,</span> <span class="token string">&#39;LS&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Log Start or Log Switch&#39;</span>
             <span class="token punctuation">,</span> <span class="token string">&#39;MR&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Media Recovery&#39;</span>
             <span class="token punctuation">,</span> <span class="token string">&#39;RT&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Redo Thread&#39;</span>
             <span class="token punctuation">,</span> <span class="token string">&#39;RW&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Row Wait&#39;</span>
             <span class="token punctuation">,</span> <span class="token string">&#39;SQ&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Sequence Number&#39;</span>
             <span class="token punctuation">,</span> <span class="token string">&#39;ST&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Diskspace Transaction&#39;</span>
             <span class="token punctuation">,</span> <span class="token string">&#39;TE&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Extend Table&#39;</span>
             <span class="token punctuation">,</span> <span class="token string">&#39;TT&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Temp Table&#39;</span>
             <span class="token punctuation">,</span> <span class="token string">&#39;TX&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Transaction&#39;</span>
             <span class="token punctuation">,</span> <span class="token string">&#39;TM&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;DML&#39;</span>
             <span class="token punctuation">,</span> <span class="token string">&#39;UL&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;PLSQL User_lock&#39;</span>
             <span class="token punctuation">,</span> <span class="token string">&#39;UN&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;User Name&#39;</span>
             <span class="token punctuation">,</span>       <span class="token string">&#39;Nothing&#39;</span>
           <span class="token punctuation">)</span>                                        lock_type
  <span class="token punctuation">,</span> o<span class="token punctuation">.</span>owner <span class="token operator">||</span> <span class="token string">&#39;.&#39;</span> <span class="token operator">||</span> o<span class="token punctuation">.</span>object_name                 object
  <span class="token punctuation">,</span> <span class="token function">ROUND</span><span class="token punctuation">(</span>l<span class="token punctuation">.</span>ctime<span class="token operator">/</span><span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>                            lock_time_min
<span class="token keyword">FROM</span>
    v$instance    i
  <span class="token punctuation">,</span> v$<span class="token keyword">session</span>     s
  <span class="token punctuation">,</span> v$<span class="token keyword">lock</span>        l
  <span class="token punctuation">,</span> dba_objects   o
  <span class="token punctuation">,</span> dba_tables    t
<span class="token keyword">WHERE</span>
      l<span class="token punctuation">.</span>id1            <span class="token operator">=</span>  o<span class="token punctuation">.</span>object_id 
  <span class="token operator">AND</span> s<span class="token punctuation">.</span>sid            <span class="token operator">=</span>  l<span class="token punctuation">.</span>sid
  <span class="token operator">AND</span> o<span class="token punctuation">.</span>owner          <span class="token operator">=</span>  t<span class="token punctuation">.</span>owner
  <span class="token operator">AND</span> o<span class="token punctuation">.</span>object_name    <span class="token operator">=</span>  t<span class="token punctuation">.</span>table_name
  <span class="token operator">AND</span> o<span class="token punctuation">.</span>owner          <span class="token operator">&lt;&gt;</span> <span class="token string">&#39;SYS&#39;</span>
  <span class="token operator">AND</span> l<span class="token punctuation">.</span><span class="token keyword">type</span>           <span class="token operator">=</span>  <span class="token string">&#39;TM&#39;</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
    i<span class="token punctuation">.</span>instance_name
  <span class="token punctuation">,</span> l<span class="token punctuation">.</span>sid<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="lock-dml-ddl" tabindex="-1"><a class="header-anchor" href="#lock-dml-ddl"><span>lock dml ddl</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>

<span class="token comment">-- +----------------------------------------------------------------------------+</span>
<span class="token comment">-- |                          Jeffrey M. Hunter                                 |</span>
<span class="token comment">-- |                      jhunter@idevelopment.info                             |</span>
<span class="token comment">-- |                         www.idevelopment.info                              |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- |      Copyright (c) 1998-2015 Jeffrey M. Hunter. All rights reserved.       |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- | DATABASE : Oracle                                                          |</span>
<span class="token comment">-- | FILE     : locks_dml_ddl.sql                                               |</span>
<span class="token comment">-- | CLASS    : Locks                                                           |</span>
<span class="token comment">-- | PURPOSE  : Query all DML and DDL locks in the database. This script will   |</span>
<span class="token comment">-- |            query critical information about the lock including Lock Type,  |</span>
<span class="token comment">-- |            Object Name/Owner, OS/Oracle User and Wait time (in minutes).   |</span>
<span class="token comment">-- |            This script is not RAC enabled and will only display locks on   |</span>
<span class="token comment">-- |            the current instance.                                           |</span>
<span class="token comment">-- | NOTE     : As with any code, ensure to test this script in a development   |</span>
<span class="token comment">-- |            environment before attempting to run it in production.          |</span>
<span class="token comment">-- +----------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> TERMOUT <span class="token keyword">OFF</span><span class="token punctuation">;</span>
<span class="token keyword">COLUMN</span> current_instance NEW_VALUE current_instance NOPRINT<span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> rpad<span class="token punctuation">(</span>instance_name<span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">)</span> current_instance <span class="token keyword">FROM</span> v$instance<span class="token punctuation">;</span>
<span class="token keyword">SET</span> TERMOUT <span class="token keyword">ON</span><span class="token punctuation">;</span>

PROMPT 
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>
PROMPT <span class="token operator">|</span> Report   : DML <span class="token operator">and</span> DDL Locks                                           <span class="token operator">|</span>
PROMPT <span class="token operator">|</span> Instance : <span class="token operator">&amp;</span>current_instance                                           <span class="token operator">|</span>
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> ECHO        <span class="token keyword">OFF</span>
<span class="token keyword">SET</span> FEEDBACK    <span class="token number">6</span>
<span class="token keyword">SET</span> HEADING     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> LINESIZE    <span class="token number">256</span>
<span class="token keyword">SET</span> PAGESIZE    <span class="token number">50000</span>
<span class="token keyword">SET</span> TERMOUT     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> TIMING      <span class="token keyword">OFF</span>
<span class="token keyword">SET</span> TRIMOUT     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> TRIMSPOOL   <span class="token keyword">ON</span>
<span class="token keyword">SET</span> VERIFY      <span class="token keyword">OFF</span>

CLEAR <span class="token keyword">COLUMNS</span>
CLEAR BREAKS
CLEAR COMPUTES

<span class="token keyword">COLUMN</span> instance_name                FORMAT a9           HEADING <span class="token string">&#39;Instance&#39;</span>
<span class="token keyword">COLUMN</span> sid_serial                   FORMAT a15          HEADING <span class="token string">&#39;SID / Serial#&#39;</span>
<span class="token keyword">COLUMN</span> session_status               FORMAT a9           HEADING <span class="token string">&#39;Status&#39;</span>
<span class="token keyword">COLUMN</span> locking_oracle_user          FORMAT a20          HEADING <span class="token string">&#39;Locking Oracle User&#39;</span>
<span class="token keyword">COLUMN</span> lock_type                    FORMAT a9           HEADING <span class="token string">&#39;Lock Type&#39;</span>
<span class="token keyword">COLUMN</span> mode_held                    FORMAT a10          HEADING <span class="token string">&#39;Mode Held&#39;</span>
<span class="token keyword">COLUMN</span> object                       FORMAT a42          HEADING <span class="token string">&#39;Object&#39;</span>
<span class="token keyword">COLUMN</span> program                      FORMAT a20          HEADING <span class="token string">&#39;Program&#39;</span>
<span class="token keyword">COLUMN</span> wait_time_min                FORMAT <span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>      HEADING <span class="token string">&#39;Wait Time (min)&#39;</span>

CLEAR BREAKS

<span class="token keyword">SELECT</span>
    i<span class="token punctuation">.</span>instance_name                                 instance_name
  <span class="token punctuation">,</span> l<span class="token punctuation">.</span>session_id <span class="token operator">||</span> <span class="token string">&#39; / &#39;</span> <span class="token operator">||</span> s<span class="token punctuation">.</span><span class="token keyword">serial</span><span class="token comment">#              sid_serial</span>
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span><span class="token keyword">status</span>                                        session_status
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span>username                                      locking_oracle_user
  <span class="token punctuation">,</span> l<span class="token punctuation">.</span>lock_type                                     lock_type
  <span class="token punctuation">,</span> l<span class="token punctuation">.</span>mode_held                                     mode_held
  <span class="token punctuation">,</span> o<span class="token punctuation">.</span>owner <span class="token operator">||</span> <span class="token string">&#39;.&#39;</span> <span class="token operator">||</span> o<span class="token punctuation">.</span>object_name                 object
  <span class="token punctuation">,</span> SUBSTR<span class="token punctuation">(</span>s<span class="token punctuation">.</span>program<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span>                        program
  <span class="token punctuation">,</span> <span class="token function">ROUND</span><span class="token punctuation">(</span>w<span class="token punctuation">.</span>seconds_in_wait<span class="token operator">/</span><span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>                  wait_time_min
<span class="token keyword">FROM</span>
    v$instance      i
  <span class="token punctuation">,</span> v$<span class="token keyword">session</span>       s
  <span class="token punctuation">,</span> dba_locks       l
  <span class="token punctuation">,</span> dba_objects     o
  <span class="token punctuation">,</span> v$session_wait  w
<span class="token keyword">WHERE</span> 
      s<span class="token punctuation">.</span>sid <span class="token operator">=</span> l<span class="token punctuation">.</span>session_id
  <span class="token operator">AND</span> l<span class="token punctuation">.</span>lock_type <span class="token operator">IN</span> <span class="token punctuation">(</span><span class="token string">&#39;DML&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;DDL&#39;</span><span class="token punctuation">)</span>
  <span class="token operator">AND</span> l<span class="token punctuation">.</span>lock_id1 <span class="token operator">=</span> o<span class="token punctuation">.</span>object_id
  <span class="token operator">AND</span> l<span class="token punctuation">.</span>session_id <span class="token operator">=</span> w<span class="token punctuation">.</span>sid
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
    i<span class="token punctuation">.</span>instance_name
  <span class="token punctuation">,</span> l<span class="token punctuation">.</span>session_id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="lock-blocking" tabindex="-1"><a class="header-anchor" href="#lock-blocking"><span>lock blocking</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- +----------------------------------------------------------------------------+</span>
<span class="token comment">-- |                          Jeffrey M. Hunter                                 |</span>
<span class="token comment">-- |                      jhunter@idevelopment.info                             |</span>
<span class="token comment">-- |                         www.idevelopment.info                              |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- |      Copyright (c) 1998-2015 Jeffrey M. Hunter. All rights reserved.       |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- | DATABASE : Oracle                                                          |</span>
<span class="token comment">-- | FILE     : locks_blocking.sql                                              |</span>
<span class="token comment">-- | CLASS    : Locks                                                           |</span>
<span class="token comment">-- | PURPOSE  : Query all Blocking Locks in the databases. This query will      |</span>
<span class="token comment">-- |            display both the user(s) holding the lock and the user(s)       |</span>
<span class="token comment">-- |            waiting for the lock. This script is RAC enabled.               |</span>
<span class="token comment">-- | NOTE     : As with any code, ensure to test this script in a development   |</span>
<span class="token comment">-- |            environment before attempting to run it in production.          |</span>
<span class="token comment">-- +----------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> TERMOUT <span class="token keyword">OFF</span><span class="token punctuation">;</span>
<span class="token keyword">COLUMN</span> current_instance NEW_VALUE current_instance NOPRINT<span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> rpad<span class="token punctuation">(</span>instance_name<span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">)</span> current_instance <span class="token keyword">FROM</span> v$instance<span class="token punctuation">;</span>
<span class="token keyword">SET</span> TERMOUT <span class="token keyword">ON</span><span class="token punctuation">;</span>

PROMPT 
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>
PROMPT <span class="token operator">|</span> Report   : Blocking Locks                                              <span class="token operator">|</span>
PROMPT <span class="token operator">|</span> Instance : <span class="token operator">&amp;</span>current_instance                                           <span class="token operator">|</span>
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> ECHO        <span class="token keyword">OFF</span>
<span class="token keyword">SET</span> FEEDBACK    <span class="token number">6</span>
<span class="token keyword">SET</span> HEADING     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> LINESIZE    <span class="token number">180</span>
<span class="token keyword">SET</span> PAGESIZE    <span class="token number">50000</span>
<span class="token keyword">SET</span> TERMOUT     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> TIMING      <span class="token keyword">OFF</span>
<span class="token keyword">SET</span> TRIMOUT     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> TRIMSPOOL   <span class="token keyword">ON</span>
<span class="token keyword">SET</span> VERIFY      <span class="token keyword">OFF</span>

CLEAR <span class="token keyword">COLUMNS</span>
CLEAR BREAKS
CLEAR COMPUTES

PROMPT 
PROMPT 
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>
PROMPT <span class="token operator">|</span> BLOCKING LOCKS <span class="token punctuation">(</span>Summary<span class="token punctuation">)</span>                                               <span class="token operator">|</span>
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>
PROMPT 

<span class="token keyword">SET</span> serveroutput <span class="token keyword">ON</span> FORMAT WRAPPED
<span class="token keyword">SET</span> feedback <span class="token keyword">OFF</span>

<span class="token keyword">DECLARE</span>

    <span class="token keyword">CURSOR</span> cur_BlockingLocks <span class="token operator">IS</span>
        <span class="token keyword">SELECT</span>
            iw<span class="token punctuation">.</span>instance_name                                                    <span class="token keyword">AS</span> waiting_instance
          <span class="token punctuation">,</span> sw<span class="token punctuation">.</span><span class="token keyword">status</span>                                                           <span class="token keyword">AS</span> waiting_status
          <span class="token punctuation">,</span> lw<span class="token punctuation">.</span>sid                                                              <span class="token keyword">AS</span> waiting_sid
          <span class="token punctuation">,</span> sw<span class="token punctuation">.</span><span class="token keyword">serial</span><span class="token comment">#                                                          AS waiting_serial_num</span>
          <span class="token punctuation">,</span> sw<span class="token punctuation">.</span>username                                                         <span class="token keyword">AS</span> waiting_oracle_username
          <span class="token punctuation">,</span> sw<span class="token punctuation">.</span>osuser                                                           <span class="token keyword">AS</span> waiting_os_username
          <span class="token punctuation">,</span> sw<span class="token punctuation">.</span>machine                                                          <span class="token keyword">AS</span> waiting_machine
          <span class="token punctuation">,</span> pw<span class="token punctuation">.</span>spid                                                             <span class="token keyword">AS</span> waiting_spid
          <span class="token punctuation">,</span> SUBSTR<span class="token punctuation">(</span>sw<span class="token punctuation">.</span>terminal<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">39</span><span class="token punctuation">)</span>                                           <span class="token keyword">AS</span> waiting_terminal
          <span class="token punctuation">,</span> SUBSTR<span class="token punctuation">(</span>sw<span class="token punctuation">.</span>program<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">39</span><span class="token punctuation">)</span>                                            <span class="token keyword">AS</span> waiting_program
          <span class="token punctuation">,</span> <span class="token function">ROUND</span><span class="token punctuation">(</span>lw<span class="token punctuation">.</span>ctime<span class="token operator">/</span><span class="token number">60</span><span class="token punctuation">)</span>                                                  <span class="token keyword">AS</span> waiting_lock_time_min
          <span class="token punctuation">,</span> DECODE <span class="token punctuation">(</span>   lh<span class="token punctuation">.</span><span class="token keyword">type</span>
                     <span class="token punctuation">,</span> <span class="token string">&#39;CF&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Control File&#39;</span>
                     <span class="token punctuation">,</span> <span class="token string">&#39;DX&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Distributed Transaction&#39;</span>
                     <span class="token punctuation">,</span> <span class="token string">&#39;FS&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;File Set&#39;</span>
                     <span class="token punctuation">,</span> <span class="token string">&#39;IR&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Instance Recovery&#39;</span>
                     <span class="token punctuation">,</span> <span class="token string">&#39;IS&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Instance State&#39;</span>
                     <span class="token punctuation">,</span> <span class="token string">&#39;IV&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Libcache Invalidation&#39;</span>
                     <span class="token punctuation">,</span> <span class="token string">&#39;LS&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Log Start or Log Switch&#39;</span>
                     <span class="token punctuation">,</span> <span class="token string">&#39;MR&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Media Recovery&#39;</span>
                     <span class="token punctuation">,</span> <span class="token string">&#39;RT&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Redo Thread&#39;</span>
                     <span class="token punctuation">,</span> <span class="token string">&#39;RW&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Row Wait&#39;</span>
                     <span class="token punctuation">,</span> <span class="token string">&#39;SQ&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Sequence Number&#39;</span>
                     <span class="token punctuation">,</span> <span class="token string">&#39;ST&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Diskspace Transaction&#39;</span>
                     <span class="token punctuation">,</span> <span class="token string">&#39;TE&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Extend Table&#39;</span>
                     <span class="token punctuation">,</span> <span class="token string">&#39;TT&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Temp Table&#39;</span>
                     <span class="token punctuation">,</span> <span class="token string">&#39;TX&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Transaction&#39;</span>
                     <span class="token punctuation">,</span> <span class="token string">&#39;TM&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;DML&#39;</span>
                     <span class="token punctuation">,</span> <span class="token string">&#39;UL&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;PLSQL User_lock&#39;</span>
                     <span class="token punctuation">,</span> <span class="token string">&#39;UN&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;User Name&#39;</span>
                     <span class="token punctuation">,</span> <span class="token string">&#39;Nothing-&#39;</span>
                   <span class="token punctuation">)</span>                                                            <span class="token keyword">AS</span> waiter_lock_type
          <span class="token punctuation">,</span> DECODE <span class="token punctuation">(</span>   lw<span class="token punctuation">.</span>request
                     <span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&#39;None&#39;</span>                        <span class="token comment">/* Mon Lock equivalent */</span>
                     <span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;NoLock&#39;</span>                      <span class="token comment">/* N */</span>
                     <span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;Row-Share (SS)&#39;</span>              <span class="token comment">/* L */</span>
                     <span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;Row-Exclusive (SX)&#39;</span>          <span class="token comment">/* R */</span>
                     <span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">&#39;Share-Table&#39;</span>                 <span class="token comment">/* S */</span>
                     <span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">&#39;Share-Row-Exclusive (SSX)&#39;</span>   <span class="token comment">/* C */</span>
                     <span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token string">&#39;Exclusive&#39;</span>                   <span class="token comment">/* X */</span>
                     <span class="token punctuation">,</span>    <span class="token string">&#39;[Nothing]&#39;</span>
                   <span class="token punctuation">)</span>                                                            <span class="token keyword">AS</span> waiter_mode_request
          <span class="token punctuation">,</span> ih<span class="token punctuation">.</span>instance_name                                                    <span class="token keyword">AS</span> locking_instance
          <span class="token punctuation">,</span> sh<span class="token punctuation">.</span><span class="token keyword">status</span>                                                           <span class="token keyword">AS</span> locking_status
          <span class="token punctuation">,</span> lh<span class="token punctuation">.</span>sid                                                              <span class="token keyword">AS</span> locking_sid
          <span class="token punctuation">,</span> sh<span class="token punctuation">.</span><span class="token keyword">serial</span><span class="token comment">#                                                          AS locking_serial_num</span>
          <span class="token punctuation">,</span> sh<span class="token punctuation">.</span>username                                                         <span class="token keyword">AS</span> locking_oracle_username
          <span class="token punctuation">,</span> sh<span class="token punctuation">.</span>osuser                                                           <span class="token keyword">AS</span> locking_os_username
          <span class="token punctuation">,</span> sh<span class="token punctuation">.</span>machine                                                          <span class="token keyword">AS</span> locking_machine
          <span class="token punctuation">,</span> ph<span class="token punctuation">.</span>spid                                                             <span class="token keyword">AS</span> locking_spid
          <span class="token punctuation">,</span> SUBSTR<span class="token punctuation">(</span>sh<span class="token punctuation">.</span>terminal<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">39</span><span class="token punctuation">)</span>                                           <span class="token keyword">AS</span> locking_terminal
          <span class="token punctuation">,</span> SUBSTR<span class="token punctuation">(</span>sh<span class="token punctuation">.</span>program<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">39</span><span class="token punctuation">)</span>                                            <span class="token keyword">AS</span> locking_program
          <span class="token punctuation">,</span> <span class="token function">ROUND</span><span class="token punctuation">(</span>lh<span class="token punctuation">.</span>ctime<span class="token operator">/</span><span class="token number">60</span><span class="token punctuation">)</span>                                                  <span class="token keyword">AS</span> locking_lock_time_min
          <span class="token punctuation">,</span> aw<span class="token punctuation">.</span>sql_text                                                         <span class="token keyword">AS</span> waiting_sql_text
        <span class="token keyword">FROM</span>
            gv$<span class="token keyword">lock</span>     lw
          <span class="token punctuation">,</span> gv$<span class="token keyword">lock</span>     lh
          <span class="token punctuation">,</span> gv$instance iw
          <span class="token punctuation">,</span> gv$instance ih
          <span class="token punctuation">,</span> gv$<span class="token keyword">session</span>  sw
          <span class="token punctuation">,</span> gv$<span class="token keyword">session</span>  sh
          <span class="token punctuation">,</span> gv$process  pw
          <span class="token punctuation">,</span> gv$process  ph
          <span class="token punctuation">,</span> gv$sqlarea  aw
        <span class="token keyword">WHERE</span>
              iw<span class="token punctuation">.</span>inst_id  <span class="token operator">=</span> lw<span class="token punctuation">.</span>inst_id
          <span class="token operator">AND</span> ih<span class="token punctuation">.</span>inst_id  <span class="token operator">=</span> lh<span class="token punctuation">.</span>inst_id
          <span class="token operator">AND</span> sw<span class="token punctuation">.</span>inst_id  <span class="token operator">=</span> lw<span class="token punctuation">.</span>inst_id
          <span class="token operator">AND</span> sh<span class="token punctuation">.</span>inst_id  <span class="token operator">=</span> lh<span class="token punctuation">.</span>inst_id
          <span class="token operator">AND</span> pw<span class="token punctuation">.</span>inst_id  <span class="token operator">=</span> lw<span class="token punctuation">.</span>inst_id
          <span class="token operator">AND</span> ph<span class="token punctuation">.</span>inst_id  <span class="token operator">=</span> lh<span class="token punctuation">.</span>inst_id
          <span class="token operator">AND</span> aw<span class="token punctuation">.</span>inst_id  <span class="token operator">=</span> lw<span class="token punctuation">.</span>inst_id
          <span class="token operator">AND</span> sw<span class="token punctuation">.</span>sid      <span class="token operator">=</span> lw<span class="token punctuation">.</span>sid
          <span class="token operator">AND</span> sh<span class="token punctuation">.</span>sid      <span class="token operator">=</span> lh<span class="token punctuation">.</span>sid
          <span class="token operator">AND</span> lh<span class="token punctuation">.</span>id1      <span class="token operator">=</span> lw<span class="token punctuation">.</span>id1
          <span class="token operator">AND</span> lh<span class="token punctuation">.</span>id2      <span class="token operator">=</span> lw<span class="token punctuation">.</span>id2
          <span class="token operator">AND</span> lh<span class="token punctuation">.</span>request  <span class="token operator">=</span> <span class="token number">0</span>
          <span class="token operator">AND</span> lw<span class="token punctuation">.</span>lmode    <span class="token operator">=</span> <span class="token number">0</span>
          <span class="token operator">AND</span> <span class="token punctuation">(</span>lh<span class="token punctuation">.</span>id1<span class="token punctuation">,</span> lh<span class="token punctuation">.</span>id2<span class="token punctuation">)</span> <span class="token operator">IN</span> <span class="token punctuation">(</span> <span class="token keyword">SELECT</span> id1<span class="token punctuation">,</span>id2
                                    <span class="token keyword">FROM</span>   gv$<span class="token keyword">lock</span>
                                    <span class="token keyword">WHERE</span>  request <span class="token operator">=</span> <span class="token number">0</span>
                                    <span class="token keyword">INTERSECT</span>
                                    <span class="token keyword">SELECT</span> id1<span class="token punctuation">,</span>id2
                                    <span class="token keyword">FROM</span>   gv$<span class="token keyword">lock</span>
                                    <span class="token keyword">WHERE</span>  lmode <span class="token operator">=</span> <span class="token number">0</span>
                                  <span class="token punctuation">)</span>
          <span class="token operator">AND</span> sw<span class="token punctuation">.</span>paddr  <span class="token operator">=</span> pw<span class="token punctuation">.</span>addr <span class="token punctuation">(</span><span class="token operator">+</span><span class="token punctuation">)</span>
          <span class="token operator">AND</span> sh<span class="token punctuation">.</span>paddr  <span class="token operator">=</span> ph<span class="token punctuation">.</span>addr <span class="token punctuation">(</span><span class="token operator">+</span><span class="token punctuation">)</span>
          <span class="token operator">AND</span> sw<span class="token punctuation">.</span>sql_address  <span class="token operator">=</span> aw<span class="token punctuation">.</span>address
        <span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
            iw<span class="token punctuation">.</span>instance_name
          <span class="token punctuation">,</span> lw<span class="token punctuation">.</span>sid<span class="token punctuation">;</span>

    <span class="token keyword">TYPE</span> t_BlockingLockRecord <span class="token operator">IS</span> RECORD <span class="token punctuation">(</span>
          WaitingInstanceName       VARCHAR2<span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span>
        <span class="token punctuation">,</span> WaitingStatus             VARCHAR2<span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span>
        <span class="token punctuation">,</span> WaitingSid                NUMBER
        <span class="token punctuation">,</span> WaitingSerialNum          NUMBER
        <span class="token punctuation">,</span> WaitingOracleUsername     VARCHAR2<span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span>
        <span class="token punctuation">,</span> WaitingOSUsername         VARCHAR2<span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span>
        <span class="token punctuation">,</span> WaitingMachine            VARCHAR2<span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">)</span>
        <span class="token punctuation">,</span> WaitingSpid               VARCHAR2<span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span>
        <span class="token punctuation">,</span> WaitingTerminal           VARCHAR2<span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span>
        <span class="token punctuation">,</span> WaitingProgram            VARCHAR2<span class="token punctuation">(</span><span class="token number">48</span><span class="token punctuation">)</span>
        <span class="token punctuation">,</span> WaitingLockTimeMinute     NUMBER
        <span class="token punctuation">,</span> WaiterLockType            VARCHAR2<span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span>
        <span class="token punctuation">,</span> WaiterModeRequest         VARCHAR2<span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span>
        <span class="token punctuation">,</span> LockingInstanceName       VARCHAR2<span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span>
        <span class="token punctuation">,</span> LockingStatus             VARCHAR2<span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span>
        <span class="token punctuation">,</span> LockingSid                NUMBER
        <span class="token punctuation">,</span> LockingSerialNum          NUMBER
        <span class="token punctuation">,</span> LockingOracleUsername     VARCHAR2<span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span>
        <span class="token punctuation">,</span> LockingOSUsername         VARCHAR2<span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span>
        <span class="token punctuation">,</span> LockingMachine            VARCHAR2<span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">)</span>
        <span class="token punctuation">,</span> LockingSpid               VARCHAR2<span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span>
        <span class="token punctuation">,</span> LockingTerminal           VARCHAR2<span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span>
        <span class="token punctuation">,</span> LockingProgram            VARCHAR2<span class="token punctuation">(</span><span class="token number">48</span><span class="token punctuation">)</span>
        <span class="token punctuation">,</span> LockingLockTimeMinute     NUMBER
        <span class="token punctuation">,</span> SQLText                   VARCHAR2<span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span>

    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">TYPE</span> t_BlockingLockRecordTable <span class="token operator">IS</span> <span class="token keyword">TABLE</span> <span class="token keyword">OF</span> t_BlockingLockRecord <span class="token keyword">INDEX</span> <span class="token keyword">BY</span> BINARY_INTEGER<span class="token punctuation">;</span>

    v_BlockingLockArray             t_BlockingLockRecordTable<span class="token punctuation">;</span>
    v_BlockingLockRec               cur_BlockingLocks<span class="token operator">%</span>ROWTYPE<span class="token punctuation">;</span>
    v_NumBlockingLocksIncidents     BINARY_INTEGER :<span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token keyword">BEGIN</span>

    DBMS_OUTPUT<span class="token punctuation">.</span><span class="token keyword">ENABLE</span><span class="token punctuation">(</span><span class="token number">1000000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">OPEN</span> cur_BlockingLocks<span class="token punctuation">;</span>

    <span class="token keyword">LOOP</span>
        <span class="token keyword">FETCH</span> cur_BlockingLocks <span class="token keyword">INTO</span> v_BlockingLockRec<span class="token punctuation">;</span>
        <span class="token keyword">EXIT</span> <span class="token keyword">WHEN</span> cur_BlockingLocks<span class="token operator">%</span>NOTFOUND<span class="token punctuation">;</span>

        v_NumBlockingLocksIncidents :<span class="token operator">=</span> v_NumBlockingLocksIncidents <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>

        v_BlockingLockArray<span class="token punctuation">(</span>v_NumBlockingLocksIncidents<span class="token punctuation">)</span><span class="token punctuation">.</span>WaitingInstanceName      :<span class="token operator">=</span> v_BlockingLockRec<span class="token punctuation">.</span>waiting_instance<span class="token punctuation">;</span>
        v_BlockingLockArray<span class="token punctuation">(</span>v_NumBlockingLocksIncidents<span class="token punctuation">)</span><span class="token punctuation">.</span>WaitingStatus            :<span class="token operator">=</span> v_BlockingLockRec<span class="token punctuation">.</span>waiting_status<span class="token punctuation">;</span>
        v_BlockingLockArray<span class="token punctuation">(</span>v_NumBlockingLocksIncidents<span class="token punctuation">)</span><span class="token punctuation">.</span>WaitingSid               :<span class="token operator">=</span> v_BlockingLockRec<span class="token punctuation">.</span>waiting_sid<span class="token punctuation">;</span>
        v_BlockingLockArray<span class="token punctuation">(</span>v_NumBlockingLocksIncidents<span class="token punctuation">)</span><span class="token punctuation">.</span>WaitingSerialNum         :<span class="token operator">=</span> v_BlockingLockRec<span class="token punctuation">.</span>waiting_serial_num<span class="token punctuation">;</span>
        v_BlockingLockArray<span class="token punctuation">(</span>v_NumBlockingLocksIncidents<span class="token punctuation">)</span><span class="token punctuation">.</span>WaitingOracleUsername    :<span class="token operator">=</span> v_BlockingLockRec<span class="token punctuation">.</span>waiting_oracle_username<span class="token punctuation">;</span>
        v_BlockingLockArray<span class="token punctuation">(</span>v_NumBlockingLocksIncidents<span class="token punctuation">)</span><span class="token punctuation">.</span>WaitingOSUsername        :<span class="token operator">=</span> v_BlockingLockRec<span class="token punctuation">.</span>waiting_os_username<span class="token punctuation">;</span>
        v_BlockingLockArray<span class="token punctuation">(</span>v_NumBlockingLocksIncidents<span class="token punctuation">)</span><span class="token punctuation">.</span>WaitingMachine           :<span class="token operator">=</span> v_BlockingLockRec<span class="token punctuation">.</span>waiting_machine<span class="token punctuation">;</span>
        v_BlockingLockArray<span class="token punctuation">(</span>v_NumBlockingLocksIncidents<span class="token punctuation">)</span><span class="token punctuation">.</span>WaitingSpid              :<span class="token operator">=</span> v_BlockingLockRec<span class="token punctuation">.</span>waiting_spid<span class="token punctuation">;</span>
        v_BlockingLockArray<span class="token punctuation">(</span>v_NumBlockingLocksIncidents<span class="token punctuation">)</span><span class="token punctuation">.</span>WaitingTerminal          :<span class="token operator">=</span> v_BlockingLockRec<span class="token punctuation">.</span>waiting_terminal<span class="token punctuation">;</span>
        v_BlockingLockArray<span class="token punctuation">(</span>v_NumBlockingLocksIncidents<span class="token punctuation">)</span><span class="token punctuation">.</span>WaitingProgram           :<span class="token operator">=</span> v_BlockingLockRec<span class="token punctuation">.</span>waiting_program<span class="token punctuation">;</span>
        v_BlockingLockArray<span class="token punctuation">(</span>v_NumBlockingLocksIncidents<span class="token punctuation">)</span><span class="token punctuation">.</span>WaitingLockTimeMinute    :<span class="token operator">=</span> v_BlockingLockRec<span class="token punctuation">.</span>waiting_lock_time_min<span class="token punctuation">;</span>
        v_BlockingLockArray<span class="token punctuation">(</span>v_NumBlockingLocksIncidents<span class="token punctuation">)</span><span class="token punctuation">.</span>WaiterLockType           :<span class="token operator">=</span> v_BlockingLockRec<span class="token punctuation">.</span>waiter_lock_type<span class="token punctuation">;</span>
        v_BlockingLockArray<span class="token punctuation">(</span>v_NumBlockingLocksIncidents<span class="token punctuation">)</span><span class="token punctuation">.</span>WaiterModeRequest        :<span class="token operator">=</span> v_BlockingLockRec<span class="token punctuation">.</span>waiter_mode_request<span class="token punctuation">;</span>
        v_BlockingLockArray<span class="token punctuation">(</span>v_NumBlockingLocksIncidents<span class="token punctuation">)</span><span class="token punctuation">.</span>LockingInstanceName      :<span class="token operator">=</span> v_BlockingLockRec<span class="token punctuation">.</span>locking_instance<span class="token punctuation">;</span>
        v_BlockingLockArray<span class="token punctuation">(</span>v_NumBlockingLocksIncidents<span class="token punctuation">)</span><span class="token punctuation">.</span>LockingStatus            :<span class="token operator">=</span> v_BlockingLockRec<span class="token punctuation">.</span>locking_status<span class="token punctuation">;</span>
        v_BlockingLockArray<span class="token punctuation">(</span>v_NumBlockingLocksIncidents<span class="token punctuation">)</span><span class="token punctuation">.</span>LockingSid               :<span class="token operator">=</span> v_BlockingLockRec<span class="token punctuation">.</span>locking_sid<span class="token punctuation">;</span>
        v_BlockingLockArray<span class="token punctuation">(</span>v_NumBlockingLocksIncidents<span class="token punctuation">)</span><span class="token punctuation">.</span>LockingSerialNum         :<span class="token operator">=</span> v_BlockingLockRec<span class="token punctuation">.</span>locking_serial_num<span class="token punctuation">;</span>
        v_BlockingLockArray<span class="token punctuation">(</span>v_NumBlockingLocksIncidents<span class="token punctuation">)</span><span class="token punctuation">.</span>LockingOracleUsername    :<span class="token operator">=</span> v_BlockingLockRec<span class="token punctuation">.</span>locking_oracle_username<span class="token punctuation">;</span>
        v_BlockingLockArray<span class="token punctuation">(</span>v_NumBlockingLocksIncidents<span class="token punctuation">)</span><span class="token punctuation">.</span>LockingOSUsername        :<span class="token operator">=</span> v_BlockingLockRec<span class="token punctuation">.</span>locking_os_username<span class="token punctuation">;</span>
        v_BlockingLockArray<span class="token punctuation">(</span>v_NumBlockingLocksIncidents<span class="token punctuation">)</span><span class="token punctuation">.</span>LockingMachine           :<span class="token operator">=</span> v_BlockingLockRec<span class="token punctuation">.</span>locking_machine<span class="token punctuation">;</span>
        v_BlockingLockArray<span class="token punctuation">(</span>v_NumBlockingLocksIncidents<span class="token punctuation">)</span><span class="token punctuation">.</span>LockingSpid              :<span class="token operator">=</span> v_BlockingLockRec<span class="token punctuation">.</span>locking_spid<span class="token punctuation">;</span>
        v_BlockingLockArray<span class="token punctuation">(</span>v_NumBlockingLocksIncidents<span class="token punctuation">)</span><span class="token punctuation">.</span>LockingTerminal          :<span class="token operator">=</span> v_BlockingLockRec<span class="token punctuation">.</span>locking_terminal<span class="token punctuation">;</span>
        v_BlockingLockArray<span class="token punctuation">(</span>v_NumBlockingLocksIncidents<span class="token punctuation">)</span><span class="token punctuation">.</span>LockingProgram           :<span class="token operator">=</span> v_BlockingLockRec<span class="token punctuation">.</span>locking_program<span class="token punctuation">;</span>
        v_BlockingLockArray<span class="token punctuation">(</span>v_NumBlockingLocksIncidents<span class="token punctuation">)</span><span class="token punctuation">.</span>LockingLockTimeMinute    :<span class="token operator">=</span> v_BlockingLockRec<span class="token punctuation">.</span>locking_lock_time_min<span class="token punctuation">;</span>
        v_BlockingLockArray<span class="token punctuation">(</span>v_NumBlockingLocksIncidents<span class="token punctuation">)</span><span class="token punctuation">.</span>SQLText                  :<span class="token operator">=</span> v_BlockingLockRec<span class="token punctuation">.</span>waiting_sql_text<span class="token punctuation">;</span>
    <span class="token keyword">END</span> <span class="token keyword">LOOP</span><span class="token punctuation">;</span>

    <span class="token keyword">CLOSE</span> cur_BlockingLocks<span class="token punctuation">;</span>

    DBMS_OUTPUT<span class="token punctuation">.</span>PUT_LINE<span class="token punctuation">(</span><span class="token string">&#39;Number of blocking lock incidents: &#39;</span> <span class="token operator">||</span> v_BlockingLockArray<span class="token punctuation">.</span>COUNT<span class="token punctuation">)</span><span class="token punctuation">;</span>
    DBMS_OUTPUT<span class="token punctuation">.</span>PUT<span class="token punctuation">(</span>chr<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">FOR</span> RowIndex <span class="token operator">IN</span> <span class="token number">1</span> <span class="token punctuation">.</span><span class="token punctuation">.</span> v_BlockingLockArray<span class="token punctuation">.</span>COUNT
    <span class="token keyword">LOOP</span>
        DBMS_OUTPUT<span class="token punctuation">.</span>PUT_LINE<span class="token punctuation">(</span><span class="token string">&#39;Incident &#39;</span> <span class="token operator">||</span> RowIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
        DBMS_OUTPUT<span class="token punctuation">.</span>PUT_LINE<span class="token punctuation">(</span><span class="token string">&#39;---------------------------------------------------------------------------------------------------------&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        DBMS_OUTPUT<span class="token punctuation">.</span>PUT_LINE<span class="token punctuation">(</span><span class="token string">&#39;                        WAITING                                  BLOCKING&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        DBMS_OUTPUT<span class="token punctuation">.</span>PUT_LINE<span class="token punctuation">(</span><span class="token string">&#39;                        ---------------------------------------- ----------------------------------------&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        DBMS_OUTPUT<span class="token punctuation">.</span>PUT_LINE<span class="token punctuation">(</span><span class="token string">&#39;Instance Name         : &#39;</span> <span class="token operator">||</span> RPAD<span class="token punctuation">(</span>v_BlockingLockArray<span class="token punctuation">(</span>RowIndex<span class="token punctuation">)</span><span class="token punctuation">.</span>WaitingInstanceName<span class="token punctuation">,</span> <span class="token number">41</span><span class="token punctuation">)</span>   <span class="token operator">||</span> v_BlockingLockArray<span class="token punctuation">(</span>RowIndex<span class="token punctuation">)</span><span class="token punctuation">.</span>LockingInstanceName<span class="token punctuation">)</span><span class="token punctuation">;</span>
        DBMS_OUTPUT<span class="token punctuation">.</span>PUT_LINE<span class="token punctuation">(</span><span class="token string">&#39;Oracle SID            : &#39;</span> <span class="token operator">||</span> RPAD<span class="token punctuation">(</span>v_BlockingLockArray<span class="token punctuation">(</span>RowIndex<span class="token punctuation">)</span><span class="token punctuation">.</span>WaitingSid<span class="token punctuation">,</span> <span class="token number">41</span><span class="token punctuation">)</span>            <span class="token operator">||</span> v_BlockingLockArray<span class="token punctuation">(</span>RowIndex<span class="token punctuation">)</span><span class="token punctuation">.</span>LockingSid<span class="token punctuation">)</span><span class="token punctuation">;</span>
        DBMS_OUTPUT<span class="token punctuation">.</span>PUT_LINE<span class="token punctuation">(</span><span class="token string">&#39;Serial#               : &#39;</span> <span class="token operator">||</span> RPAD<span class="token punctuation">(</span>v_BlockingLockArray<span class="token punctuation">(</span>RowIndex<span class="token punctuation">)</span><span class="token punctuation">.</span>WaitingSerialNum<span class="token punctuation">,</span> <span class="token number">41</span><span class="token punctuation">)</span>      <span class="token operator">||</span> v_BlockingLockArray<span class="token punctuation">(</span>RowIndex<span class="token punctuation">)</span><span class="token punctuation">.</span>LockingSerialNum<span class="token punctuation">)</span><span class="token punctuation">;</span>
        DBMS_OUTPUT<span class="token punctuation">.</span>PUT_LINE<span class="token punctuation">(</span><span class="token string">&#39;Oracle User           : &#39;</span> <span class="token operator">||</span> RPAD<span class="token punctuation">(</span>v_BlockingLockArray<span class="token punctuation">(</span>RowIndex<span class="token punctuation">)</span><span class="token punctuation">.</span>WaitingOracleUsername<span class="token punctuation">,</span> <span class="token number">41</span><span class="token punctuation">)</span> <span class="token operator">||</span> v_BlockingLockArray<span class="token punctuation">(</span>RowIndex<span class="token punctuation">)</span><span class="token punctuation">.</span>LockingOracleUsername<span class="token punctuation">)</span><span class="token punctuation">;</span>
        DBMS_OUTPUT<span class="token punctuation">.</span>PUT_LINE<span class="token punctuation">(</span><span class="token string">&#39;O/S User              : &#39;</span> <span class="token operator">||</span> RPAD<span class="token punctuation">(</span>v_BlockingLockArray<span class="token punctuation">(</span>RowIndex<span class="token punctuation">)</span><span class="token punctuation">.</span>WaitingOSUsername<span class="token punctuation">,</span> <span class="token number">41</span><span class="token punctuation">)</span> <span class="token operator">||</span> v_BlockingLockArray<span class="token punctuation">(</span>RowIndex<span class="token punctuation">)</span><span class="token punctuation">.</span>LockingOSUsername<span class="token punctuation">)</span><span class="token punctuation">;</span>
        DBMS_OUTPUT<span class="token punctuation">.</span>PUT_LINE<span class="token punctuation">(</span><span class="token string">&#39;Machine               : &#39;</span> <span class="token operator">||</span> RPAD<span class="token punctuation">(</span>v_BlockingLockArray<span class="token punctuation">(</span>RowIndex<span class="token punctuation">)</span><span class="token punctuation">.</span>WaitingMachine<span class="token punctuation">,</span> <span class="token number">41</span><span class="token punctuation">)</span> <span class="token operator">||</span> v_BlockingLockArray<span class="token punctuation">(</span>RowIndex<span class="token punctuation">)</span><span class="token punctuation">.</span>LockingMachine<span class="token punctuation">)</span><span class="token punctuation">;</span>
        DBMS_OUTPUT<span class="token punctuation">.</span>PUT_LINE<span class="token punctuation">(</span><span class="token string">&#39;O/S PID               : &#39;</span> <span class="token operator">||</span> RPAD<span class="token punctuation">(</span>v_BlockingLockArray<span class="token punctuation">(</span>RowIndex<span class="token punctuation">)</span><span class="token punctuation">.</span>WaitingSpid<span class="token punctuation">,</span> <span class="token number">41</span><span class="token punctuation">)</span> <span class="token operator">||</span> v_BlockingLockArray<span class="token punctuation">(</span>RowIndex<span class="token punctuation">)</span><span class="token punctuation">.</span>LockingSpid<span class="token punctuation">)</span><span class="token punctuation">;</span>
        DBMS_OUTPUT<span class="token punctuation">.</span>PUT_LINE<span class="token punctuation">(</span><span class="token string">&#39;Terminal              : &#39;</span> <span class="token operator">||</span> RPAD<span class="token punctuation">(</span>v_BlockingLockArray<span class="token punctuation">(</span>RowIndex<span class="token punctuation">)</span><span class="token punctuation">.</span>WaitingTerminal<span class="token punctuation">,</span> <span class="token number">41</span><span class="token punctuation">)</span> <span class="token operator">||</span> v_BlockingLockArray<span class="token punctuation">(</span>RowIndex<span class="token punctuation">)</span><span class="token punctuation">.</span>LockingTerminal<span class="token punctuation">)</span><span class="token punctuation">;</span>
        DBMS_OUTPUT<span class="token punctuation">.</span>PUT_LINE<span class="token punctuation">(</span><span class="token string">&#39;Lock Time             : &#39;</span> <span class="token operator">||</span> RPAD<span class="token punctuation">(</span>v_BlockingLockArray<span class="token punctuation">(</span>RowIndex<span class="token punctuation">)</span><span class="token punctuation">.</span>WaitingLockTimeMinute <span class="token operator">||</span> <span class="token string">&#39; minutes&#39;</span><span class="token punctuation">,</span> <span class="token number">41</span><span class="token punctuation">)</span>  <span class="token operator">||</span> v_BlockingLockArray<span class="token punctuation">(</span>RowIndex<span class="token punctuation">)</span><span class="token punctuation">.</span>LockingLockTimeMinute <span class="token operator">||</span><span class="token string">&#39; minutes&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        DBMS_OUTPUT<span class="token punctuation">.</span>PUT_LINE<span class="token punctuation">(</span><span class="token string">&#39;Status                : &#39;</span> <span class="token operator">||</span> RPAD<span class="token punctuation">(</span>v_BlockingLockArray<span class="token punctuation">(</span>RowIndex<span class="token punctuation">)</span><span class="token punctuation">.</span>WaitingStatus<span class="token punctuation">,</span> <span class="token number">41</span><span class="token punctuation">)</span> <span class="token operator">||</span> v_BlockingLockArray<span class="token punctuation">(</span>RowIndex<span class="token punctuation">)</span><span class="token punctuation">.</span>LockingStatus<span class="token punctuation">)</span><span class="token punctuation">;</span>
        DBMS_OUTPUT<span class="token punctuation">.</span>PUT_LINE<span class="token punctuation">(</span><span class="token string">&#39;Program               : &#39;</span> <span class="token operator">||</span> RPAD<span class="token punctuation">(</span>v_BlockingLockArray<span class="token punctuation">(</span>RowIndex<span class="token punctuation">)</span><span class="token punctuation">.</span>WaitingProgram<span class="token punctuation">,</span> <span class="token number">41</span><span class="token punctuation">)</span> <span class="token operator">||</span> v_BlockingLockArray<span class="token punctuation">(</span>RowIndex<span class="token punctuation">)</span><span class="token punctuation">.</span>LockingProgram<span class="token punctuation">)</span><span class="token punctuation">;</span>
        DBMS_OUTPUT<span class="token punctuation">.</span>PUT_LINE<span class="token punctuation">(</span><span class="token string">&#39;Waiter Lock Type      : &#39;</span> <span class="token operator">||</span> v_BlockingLockArray<span class="token punctuation">(</span>RowIndex<span class="token punctuation">)</span><span class="token punctuation">.</span>WaiterLockType<span class="token punctuation">)</span><span class="token punctuation">;</span>
        DBMS_OUTPUT<span class="token punctuation">.</span>PUT_LINE<span class="token punctuation">(</span><span class="token string">&#39;Waiter Mode Request   : &#39;</span> <span class="token operator">||</span> v_BlockingLockArray<span class="token punctuation">(</span>RowIndex<span class="token punctuation">)</span><span class="token punctuation">.</span>WaiterModeRequest<span class="token punctuation">)</span><span class="token punctuation">;</span>
        DBMS_OUTPUT<span class="token punctuation">.</span>PUT_LINE<span class="token punctuation">(</span><span class="token string">&#39;Waiting SQL           : &#39;</span> <span class="token operator">||</span> v_BlockingLockArray<span class="token punctuation">(</span>RowIndex<span class="token punctuation">)</span><span class="token punctuation">.</span>SQLText<span class="token punctuation">)</span><span class="token punctuation">;</span>
        DBMS_OUTPUT<span class="token punctuation">.</span>PUT<span class="token punctuation">(</span>chr<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">END</span> <span class="token keyword">LOOP</span><span class="token punctuation">;</span>

<span class="token keyword">END</span><span class="token punctuation">;</span>
<span class="token operator">/</span>

<span class="token keyword">SET</span> ECHO        <span class="token keyword">OFF</span>
<span class="token keyword">SET</span> FEEDBACK    <span class="token number">6</span>
<span class="token keyword">SET</span> HEADING     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> LINESIZE    <span class="token number">256</span>
<span class="token keyword">SET</span> PAGESIZE    <span class="token number">50000</span>
<span class="token keyword">SET</span> TERMOUT     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> TIMING      <span class="token keyword">OFF</span>
<span class="token keyword">SET</span> TRIMOUT     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> TRIMSPOOL   <span class="token keyword">ON</span>
<span class="token keyword">SET</span> VERIFY      <span class="token keyword">OFF</span>

CLEAR <span class="token keyword">COLUMNS</span>
CLEAR BREAKS
CLEAR COMPUTES

<span class="token keyword">COLUMN</span> instance_name                FORMAT a9           HEADING <span class="token string">&#39;Instance&#39;</span>
<span class="token keyword">COLUMN</span> sid                          FORMAT <span class="token number">999999</span>       HEADING <span class="token string">&#39;SID&#39;</span>
<span class="token keyword">COLUMN</span> sid_serial                   FORMAT a15          HEADING <span class="token string">&#39;SID / Serial#&#39;</span>
<span class="token keyword">COLUMN</span> session_status               FORMAT a9           HEADING <span class="token string">&#39;Status&#39;</span>
<span class="token keyword">COLUMN</span> locking_oracle_user          FORMAT a20          HEADING <span class="token string">&#39;Locking Oracle User&#39;</span>
<span class="token keyword">COLUMN</span> object_owner                 FORMAT a15          HEADING <span class="token string">&#39;Object Owner&#39;</span>
<span class="token keyword">COLUMN</span> object_name                  FORMAT a25          HEADING <span class="token string">&#39;Object Name&#39;</span>
<span class="token keyword">COLUMN</span> object_type                  FORMAT a15          HEADING <span class="token string">&#39;Object Type&#39;</span>
<span class="token keyword">COLUMN</span> locked_mode                                      HEADING <span class="token string">&#39;Locked Mode&#39;</span>

CLEAR BREAKS

PROMPT 
PROMPT 
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>
PROMPT <span class="token operator">|</span> LOCKED OBJECTS                                                         <span class="token operator">|</span>
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>

<span class="token keyword">SELECT</span>
    i<span class="token punctuation">.</span>instance_name                       instance_name
  <span class="token punctuation">,</span> l<span class="token punctuation">.</span>session_id <span class="token operator">||</span> <span class="token string">&#39; / &#39;</span> <span class="token operator">||</span> s<span class="token punctuation">.</span><span class="token keyword">serial</span><span class="token comment">#    sid_serial</span>
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span><span class="token keyword">status</span>                              session_status
  <span class="token punctuation">,</span> l<span class="token punctuation">.</span>oracle_username                     locking_oracle_user
  <span class="token punctuation">,</span> o<span class="token punctuation">.</span>owner                               object_owner
  <span class="token punctuation">,</span> o<span class="token punctuation">.</span>object_name                         object_name
  <span class="token punctuation">,</span> o<span class="token punctuation">.</span>object_type                         object_type
  <span class="token punctuation">,</span> DECODE <span class="token punctuation">(</span>   l<span class="token punctuation">.</span>locked_mode
             <span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&#39;None&#39;</span>                        <span class="token comment">/* Mon Lock equivalent */</span>
             <span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;NoLock&#39;</span>                      <span class="token comment">/* N */</span>
             <span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;Row-Share (SS)&#39;</span>              <span class="token comment">/* L */</span>
             <span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;Row-Exclusive (SX)&#39;</span>          <span class="token comment">/* R */</span>
             <span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">&#39;Share-Table&#39;</span>                 <span class="token comment">/* S */</span>
             <span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">&#39;Share-Row-Exclusive (SSX)&#39;</span>   <span class="token comment">/* C */</span>
             <span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token string">&#39;Exclusive&#39;</span>                   <span class="token comment">/* X */</span>
             <span class="token punctuation">,</span>    <span class="token string">&#39;[Nothing]&#39;</span>
           <span class="token punctuation">)</span>                  locked_mode
<span class="token keyword">FROM</span>
    dba_objects       o
  <span class="token punctuation">,</span> gv$<span class="token keyword">session</span>        s
  <span class="token punctuation">,</span> gv$locked_object  l
  <span class="token punctuation">,</span> gv$instance       i
<span class="token keyword">WHERE</span>
      i<span class="token punctuation">.</span>inst_id     <span class="token operator">=</span> l<span class="token punctuation">.</span>inst_id
  <span class="token operator">AND</span> s<span class="token punctuation">.</span>inst_id     <span class="token operator">=</span> l<span class="token punctuation">.</span>inst_id
  <span class="token operator">AND</span> s<span class="token punctuation">.</span>sid         <span class="token operator">=</span> l<span class="token punctuation">.</span>session_id
  <span class="token operator">AND</span> o<span class="token punctuation">.</span>object_id   <span class="token operator">=</span> l<span class="token punctuation">.</span>object_id
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
    i<span class="token punctuation">.</span>instance_name
  <span class="token punctuation">,</span> l<span class="token punctuation">.</span>session_id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="lock-blocking-1" tabindex="-1"><a class="header-anchor" href="#lock-blocking-1"><span>lock blocking</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- +----------------------------------------------------------------------------+</span>
<span class="token comment">-- |                          Jeffrey M. Hunter                                 |</span>
<span class="token comment">-- |                      jhunter@idevelopment.info                             |</span>
<span class="token comment">-- |                         www.idevelopment.info                              |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- |      Copyright (c) 1998-2015 Jeffrey M. Hunter. All rights reserved.       |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- | DATABASE : Oracle                                                          |</span>
<span class="token comment">-- | FILE     : locks_blocking2.sql                                             |</span>
<span class="token comment">-- | CLASS    : Locks                                                           |</span>
<span class="token comment">-- | PURPOSE  : Query all Blocking Locks in the databases. This query will      |</span>
<span class="token comment">-- |            display both the user(s) holding the lock and the user(s)       |</span>
<span class="token comment">-- |            waiting for the lock. This script is RAC enabled.               |</span>
<span class="token comment">-- | NOTE     : As with any code, ensure to test this script in a development   |</span>
<span class="token comment">-- |            environment before attempting to run it in production.          |</span>
<span class="token comment">-- +----------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> TERMOUT <span class="token keyword">OFF</span><span class="token punctuation">;</span>
<span class="token keyword">COLUMN</span> current_instance NEW_VALUE current_instance NOPRINT<span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> rpad<span class="token punctuation">(</span>instance_name<span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">)</span> current_instance <span class="token keyword">FROM</span> v$instance<span class="token punctuation">;</span>
<span class="token keyword">SET</span> TERMOUT <span class="token keyword">ON</span><span class="token punctuation">;</span>

PROMPT 
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>
PROMPT <span class="token operator">|</span> Report   : Blocking Locks                                              <span class="token operator">|</span>
PROMPT <span class="token operator">|</span> Instance : <span class="token operator">&amp;</span>current_instance                                           <span class="token operator">|</span>
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> ECHO        <span class="token keyword">OFF</span>
<span class="token keyword">SET</span> FEEDBACK    <span class="token number">6</span>
<span class="token keyword">SET</span> HEADING     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> LINESIZE    <span class="token number">256</span>
<span class="token keyword">SET</span> PAGESIZE    <span class="token number">50000</span>
<span class="token keyword">SET</span> TERMOUT     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> TIMING      <span class="token keyword">OFF</span>
<span class="token keyword">SET</span> TRIMOUT     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> TRIMSPOOL   <span class="token keyword">ON</span>
<span class="token keyword">SET</span> VERIFY      <span class="token keyword">OFF</span>

CLEAR <span class="token keyword">COLUMNS</span>
CLEAR BREAKS
CLEAR COMPUTES

<span class="token keyword">COLUMN</span> waiting_instance_sid_serial  FORMAT a24          HEADING <span class="token string">&#39;[WAITING]|Instance - SID / Serial#&#39;</span>
<span class="token keyword">COLUMN</span> waiting_oracle_username      FORMAT a20          HEADING <span class="token string">&#39;[WAITING]|Oracle User&#39;</span>
<span class="token keyword">COLUMN</span> waiting_pid                  FORMAT a11          HEADING <span class="token string">&#39;[WAITING]|PID&#39;</span>
<span class="token keyword">COLUMN</span> waiting_machine              FORMAT a15          HEADING <span class="token string">&#39;[WAITING]|Machine&#39;</span>   TRUNC
<span class="token keyword">COLUMN</span> waiting_os_username          FORMAT a15          HEADING <span class="token string">&#39;[WAITING]|O/S User&#39;</span>
<span class="token keyword">COLUMN</span> waiter_lock_type_mode_req    FORMAT a35          HEADING <span class="token string">&#39;Waiter Lock Type / Mode Requested&#39;</span>
<span class="token keyword">COLUMN</span> waiting_lock_time_min        FORMAT a10          HEADING <span class="token string">&#39;[WAITING]|Lock Time&#39;</span>
<span class="token keyword">COLUMN</span> waiting_instance_sid         FORMAT a15          HEADING <span class="token string">&#39;[WAITING]|Instance - SID&#39;</span>
<span class="token keyword">COLUMN</span> waiting_sql_text             FORMAT a105         HEADING <span class="token string">&#39;[WAITING]|SQL Text&#39;</span>    WRAP

<span class="token keyword">COLUMN</span> locking_instance_sid_serial  FORMAT a24          HEADING <span class="token string">&#39;[LOCKING]|Instance - SID / Serial#&#39;</span>
<span class="token keyword">COLUMN</span> locking_oracle_username      FORMAT a20          HEADING <span class="token string">&#39;[LOCKING]|Oracle User&#39;</span>
<span class="token keyword">COLUMN</span> locking_pid                  FORMAT a11          HEADING <span class="token string">&#39;[LOCKING]|PID&#39;</span>
<span class="token keyword">COLUMN</span> locking_machine              FORMAT a15          HEADING <span class="token string">&#39;[LOCKING]|Machine&#39;</span>   TRUNC
<span class="token keyword">COLUMN</span> locking_os_username          FORMAT a15          HEADING <span class="token string">&#39;[LOCKING]|O/S User&#39;</span>
<span class="token keyword">COLUMN</span> locking_lock_time_min        FORMAT a10          HEADING <span class="token string">&#39;[LOCKING]|Lock Time&#39;</span>

<span class="token keyword">COLUMN</span> instance_name                FORMAT a8           HEADING <span class="token string">&#39;Instance&#39;</span>
<span class="token keyword">COLUMN</span> sid                          FORMAT <span class="token number">999999</span>       HEADING <span class="token string">&#39;SID&#39;</span>
<span class="token keyword">COLUMN</span> session_status               FORMAT a9           HEADING <span class="token string">&#39;Status&#39;</span>
<span class="token keyword">COLUMN</span> locking_oracle_user          FORMAT a20          HEADING <span class="token string">&#39;Locking Oracle User&#39;</span>
<span class="token keyword">COLUMN</span> locking_os_user              FORMAT a20          HEADING <span class="token string">&#39;Locking O/S User&#39;</span>
<span class="token keyword">COLUMN</span> locking_os_pid               FORMAT a11          HEADING <span class="token string">&#39;Locking PID&#39;</span>
<span class="token keyword">COLUMN</span> locking_machine              FORMAT a15          HEADING <span class="token string">&#39;Locking Machine&#39;</span>   TRUNC
<span class="token keyword">COLUMN</span> object_owner                 FORMAT a15          HEADING <span class="token string">&#39;Object Owner&#39;</span>
<span class="token keyword">COLUMN</span> object_name                  FORMAT a25          HEADING <span class="token string">&#39;Object Name&#39;</span>
<span class="token keyword">COLUMN</span> object_type                  FORMAT a15          HEADING <span class="token string">&#39;Object Type&#39;</span>
<span class="token keyword">COLUMN</span> locked_mode                                      HEADING <span class="token string">&#39;Locked Mode&#39;</span>

CLEAR BREAKS

PROMPT 
PROMPT 
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>
PROMPT <span class="token operator">|</span> BLOCKING LOCKS <span class="token punctuation">(</span>Summary<span class="token punctuation">)</span>                                               <span class="token operator">|</span>
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>

<span class="token keyword">SELECT</span>
    iw<span class="token punctuation">.</span>instance_name <span class="token operator">||</span> <span class="token string">&#39; - &#39;</span> <span class="token operator">||</span> lw<span class="token punctuation">.</span>sid <span class="token operator">||</span> <span class="token string">&#39; / &#39;</span> <span class="token operator">||</span> sw<span class="token punctuation">.</span><span class="token keyword">serial</span><span class="token comment">#  waiting_instance_sid_serial</span>
  <span class="token punctuation">,</span> sw<span class="token punctuation">.</span>username                                                 waiting_oracle_username
  <span class="token punctuation">,</span> <span class="token function">ROUND</span><span class="token punctuation">(</span>lw<span class="token punctuation">.</span>ctime<span class="token operator">/</span><span class="token number">60</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">&#39; min.&#39;</span>                               waiting_lock_time_min
  <span class="token punctuation">,</span> DECODE <span class="token punctuation">(</span>   lh<span class="token punctuation">.</span><span class="token keyword">type</span>
             <span class="token punctuation">,</span> <span class="token string">&#39;CF&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Control File&#39;</span>
             <span class="token punctuation">,</span> <span class="token string">&#39;DX&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Distributed Transaction&#39;</span>
             <span class="token punctuation">,</span> <span class="token string">&#39;FS&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;File Set&#39;</span>
             <span class="token punctuation">,</span> <span class="token string">&#39;IR&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Instance Recovery&#39;</span>
             <span class="token punctuation">,</span> <span class="token string">&#39;IS&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Instance State&#39;</span>
             <span class="token punctuation">,</span> <span class="token string">&#39;IV&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Libcache Invalidation&#39;</span>
             <span class="token punctuation">,</span> <span class="token string">&#39;LS&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Log Start or Log Switch&#39;</span>
             <span class="token punctuation">,</span> <span class="token string">&#39;MR&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Media Recovery&#39;</span>
             <span class="token punctuation">,</span> <span class="token string">&#39;RT&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Redo Thread&#39;</span>
             <span class="token punctuation">,</span> <span class="token string">&#39;RW&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Row Wait&#39;</span>
             <span class="token punctuation">,</span> <span class="token string">&#39;SQ&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Sequence Number&#39;</span>
             <span class="token punctuation">,</span> <span class="token string">&#39;ST&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Diskspace Transaction&#39;</span>
             <span class="token punctuation">,</span> <span class="token string">&#39;TE&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Extend Table&#39;</span>
             <span class="token punctuation">,</span> <span class="token string">&#39;TT&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Temp Table&#39;</span>
             <span class="token punctuation">,</span> <span class="token string">&#39;TX&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Transaction&#39;</span>
             <span class="token punctuation">,</span> <span class="token string">&#39;TM&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;DML&#39;</span>
             <span class="token punctuation">,</span> <span class="token string">&#39;UL&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;PLSQL User_lock&#39;</span>
             <span class="token punctuation">,</span> <span class="token string">&#39;UN&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;User Name&#39;</span>
             <span class="token punctuation">,</span> <span class="token string">&#39;Nothing-&#39;</span>
           <span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">&#39; / &#39;</span> <span class="token operator">||</span>
    DECODE <span class="token punctuation">(</span>   lw<span class="token punctuation">.</span>request
             <span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&#39;None&#39;</span>                        <span class="token comment">/* Mon Lock equivalent */</span>
             <span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;NoLock&#39;</span>                      <span class="token comment">/* N */</span>
             <span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;Row-Share (SS)&#39;</span>              <span class="token comment">/* L */</span>
             <span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;Row-Exclusive (SX)&#39;</span>          <span class="token comment">/* R */</span>
             <span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">&#39;Share-Table&#39;</span>                 <span class="token comment">/* S */</span>
             <span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">&#39;Share-Row-Exclusive (SSX)&#39;</span>   <span class="token comment">/* C */</span>
             <span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token string">&#39;Exclusive&#39;</span>                   <span class="token comment">/* X */</span>
             <span class="token punctuation">,</span>    <span class="token string">&#39;[Nothing]&#39;</span>
           <span class="token punctuation">)</span>                                                            waiter_lock_type_mode_req
  <span class="token punctuation">,</span> ih<span class="token punctuation">.</span>instance_name <span class="token operator">||</span> <span class="token string">&#39; - &#39;</span> <span class="token operator">||</span> lh<span class="token punctuation">.</span>sid <span class="token operator">||</span> <span class="token string">&#39; / &#39;</span> <span class="token operator">||</span> sh<span class="token punctuation">.</span><span class="token keyword">serial</span><span class="token comment">#          locking_instance_sid_serial</span>
  <span class="token punctuation">,</span> sh<span class="token punctuation">.</span>username                                                         locking_oracle_username
  <span class="token punctuation">,</span> <span class="token function">ROUND</span><span class="token punctuation">(</span>lh<span class="token punctuation">.</span>ctime<span class="token operator">/</span><span class="token number">60</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">&#39; min.&#39;</span>                                       locking_lock_time_min
<span class="token keyword">FROM</span>
    gv$<span class="token keyword">lock</span>     lw
  <span class="token punctuation">,</span> gv$<span class="token keyword">lock</span>     lh
  <span class="token punctuation">,</span> gv$instance iw
  <span class="token punctuation">,</span> gv$instance ih
  <span class="token punctuation">,</span> gv$<span class="token keyword">session</span>  sw
  <span class="token punctuation">,</span> gv$<span class="token keyword">session</span>  sh
<span class="token keyword">WHERE</span>
      iw<span class="token punctuation">.</span>inst_id  <span class="token operator">=</span> lw<span class="token punctuation">.</span>inst_id
  <span class="token operator">AND</span> ih<span class="token punctuation">.</span>inst_id  <span class="token operator">=</span> lh<span class="token punctuation">.</span>inst_id
  <span class="token operator">AND</span> sw<span class="token punctuation">.</span>inst_id  <span class="token operator">=</span> lw<span class="token punctuation">.</span>inst_id
  <span class="token operator">AND</span> sh<span class="token punctuation">.</span>inst_id  <span class="token operator">=</span> lh<span class="token punctuation">.</span>inst_id
  <span class="token operator">AND</span> sw<span class="token punctuation">.</span>sid      <span class="token operator">=</span> lw<span class="token punctuation">.</span>sid
  <span class="token operator">AND</span> sh<span class="token punctuation">.</span>sid      <span class="token operator">=</span> lh<span class="token punctuation">.</span>sid
  <span class="token operator">AND</span> lh<span class="token punctuation">.</span>id1      <span class="token operator">=</span> lw<span class="token punctuation">.</span>id1
  <span class="token operator">AND</span> lh<span class="token punctuation">.</span>id2      <span class="token operator">=</span> lw<span class="token punctuation">.</span>id2
  <span class="token operator">AND</span> lh<span class="token punctuation">.</span>request  <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token operator">AND</span> lw<span class="token punctuation">.</span>lmode    <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token operator">AND</span> <span class="token punctuation">(</span>lh<span class="token punctuation">.</span>id1<span class="token punctuation">,</span> lh<span class="token punctuation">.</span>id2<span class="token punctuation">)</span> <span class="token operator">IN</span> <span class="token punctuation">(</span> <span class="token keyword">SELECT</span> id1<span class="token punctuation">,</span>id2
                            <span class="token keyword">FROM</span>   gv$<span class="token keyword">lock</span>
                            <span class="token keyword">WHERE</span>  request <span class="token operator">=</span> <span class="token number">0</span>
                            <span class="token keyword">INTERSECT</span>
                            <span class="token keyword">SELECT</span> id1<span class="token punctuation">,</span>id2
                            <span class="token keyword">FROM</span>   gv$<span class="token keyword">lock</span>
                            <span class="token keyword">WHERE</span>  lmode <span class="token operator">=</span> <span class="token number">0</span>
                          <span class="token punctuation">)</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
    iw<span class="token punctuation">.</span>instance_name
  <span class="token punctuation">,</span> lw<span class="token punctuation">.</span>sid<span class="token punctuation">;</span>


PROMPT 
PROMPT 
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>
PROMPT <span class="token operator">|</span> BLOCKING LOCKS <span class="token punctuation">(</span><span class="token keyword">User</span> Details<span class="token punctuation">)</span>                                          <span class="token operator">|</span>
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>

<span class="token keyword">SELECT</span>
    iw<span class="token punctuation">.</span>instance_name <span class="token operator">||</span> <span class="token string">&#39; - &#39;</span> <span class="token operator">||</span> lw<span class="token punctuation">.</span>sid <span class="token operator">||</span> <span class="token string">&#39; / &#39;</span> <span class="token operator">||</span> sw<span class="token punctuation">.</span><span class="token keyword">serial</span><span class="token comment">#          waiting_instance_sid_serial</span>
  <span class="token punctuation">,</span> sw<span class="token punctuation">.</span>username                                                         waiting_oracle_username
  <span class="token punctuation">,</span> sw<span class="token punctuation">.</span>osuser                                                           waiting_os_username
  <span class="token punctuation">,</span> sw<span class="token punctuation">.</span>machine                                                          waiting_machine
  <span class="token punctuation">,</span> pw<span class="token punctuation">.</span>spid                                                             waiting_pid
  <span class="token punctuation">,</span> ih<span class="token punctuation">.</span>instance_name <span class="token operator">||</span> <span class="token string">&#39; - &#39;</span> <span class="token operator">||</span> lh<span class="token punctuation">.</span>sid <span class="token operator">||</span> <span class="token string">&#39; / &#39;</span> <span class="token operator">||</span> sh<span class="token punctuation">.</span><span class="token keyword">serial</span><span class="token comment">#          locking_instance_sid_serial</span>
  <span class="token punctuation">,</span> sh<span class="token punctuation">.</span>username                                                         locking_oracle_username
  <span class="token punctuation">,</span> sh<span class="token punctuation">.</span>osuser                                                           locking_os_username
  <span class="token punctuation">,</span> sh<span class="token punctuation">.</span>machine                                                          locking_machine
  <span class="token punctuation">,</span> ph<span class="token punctuation">.</span>spid                                                             locking_pid
<span class="token keyword">FROM</span>
    gv$<span class="token keyword">lock</span>     lw
  <span class="token punctuation">,</span> gv$<span class="token keyword">lock</span>     lh
  <span class="token punctuation">,</span> gv$instance iw
  <span class="token punctuation">,</span> gv$instance ih
  <span class="token punctuation">,</span> gv$<span class="token keyword">session</span>  sw
  <span class="token punctuation">,</span> gv$<span class="token keyword">session</span>  sh
  <span class="token punctuation">,</span> gv$process  pw
  <span class="token punctuation">,</span> gv$process  ph
<span class="token keyword">WHERE</span>
      iw<span class="token punctuation">.</span>inst_id  <span class="token operator">=</span> lw<span class="token punctuation">.</span>inst_id
  <span class="token operator">AND</span> ih<span class="token punctuation">.</span>inst_id  <span class="token operator">=</span> lh<span class="token punctuation">.</span>inst_id
  <span class="token operator">AND</span> sw<span class="token punctuation">.</span>inst_id  <span class="token operator">=</span> lw<span class="token punctuation">.</span>inst_id
  <span class="token operator">AND</span> sh<span class="token punctuation">.</span>inst_id  <span class="token operator">=</span> lh<span class="token punctuation">.</span>inst_id
  <span class="token operator">AND</span> pw<span class="token punctuation">.</span>inst_id  <span class="token operator">=</span> lw<span class="token punctuation">.</span>inst_id
  <span class="token operator">AND</span> ph<span class="token punctuation">.</span>inst_id  <span class="token operator">=</span> lh<span class="token punctuation">.</span>inst_id
  <span class="token operator">AND</span> sw<span class="token punctuation">.</span>sid      <span class="token operator">=</span> lw<span class="token punctuation">.</span>sid
  <span class="token operator">AND</span> sh<span class="token punctuation">.</span>sid      <span class="token operator">=</span> lh<span class="token punctuation">.</span>sid
  <span class="token operator">AND</span> lh<span class="token punctuation">.</span>id1      <span class="token operator">=</span> lw<span class="token punctuation">.</span>id1
  <span class="token operator">AND</span> lh<span class="token punctuation">.</span>id2      <span class="token operator">=</span> lw<span class="token punctuation">.</span>id2
  <span class="token operator">AND</span> lh<span class="token punctuation">.</span>request  <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token operator">AND</span> lw<span class="token punctuation">.</span>lmode    <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token operator">AND</span> <span class="token punctuation">(</span>lh<span class="token punctuation">.</span>id1<span class="token punctuation">,</span> lh<span class="token punctuation">.</span>id2<span class="token punctuation">)</span> <span class="token operator">IN</span> <span class="token punctuation">(</span> <span class="token keyword">SELECT</span> id1<span class="token punctuation">,</span>id2
                            <span class="token keyword">FROM</span>   gv$<span class="token keyword">lock</span>
                            <span class="token keyword">WHERE</span>  request <span class="token operator">=</span> <span class="token number">0</span>
                            <span class="token keyword">INTERSECT</span>
                            <span class="token keyword">SELECT</span> id1<span class="token punctuation">,</span>id2
                            <span class="token keyword">FROM</span>   gv$<span class="token keyword">lock</span>
                            <span class="token keyword">WHERE</span>  lmode <span class="token operator">=</span> <span class="token number">0</span>
                          <span class="token punctuation">)</span>
  <span class="token operator">AND</span> sw<span class="token punctuation">.</span>paddr  <span class="token operator">=</span> pw<span class="token punctuation">.</span>addr <span class="token punctuation">(</span><span class="token operator">+</span><span class="token punctuation">)</span>
  <span class="token operator">AND</span> sh<span class="token punctuation">.</span>paddr  <span class="token operator">=</span> ph<span class="token punctuation">.</span>addr <span class="token punctuation">(</span><span class="token operator">+</span><span class="token punctuation">)</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
    iw<span class="token punctuation">.</span>instance_name
  <span class="token punctuation">,</span> lw<span class="token punctuation">.</span>sid<span class="token punctuation">;</span>


PROMPT 
PROMPT 
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>
PROMPT <span class="token operator">|</span> BLOCKING LOCKS <span class="token punctuation">(</span>Waiting <span class="token keyword">SQL</span><span class="token punctuation">)</span>                                           <span class="token operator">|</span>
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>

<span class="token keyword">SELECT</span>
    iw<span class="token punctuation">.</span>instance_name <span class="token operator">||</span> <span class="token string">&#39; - &#39;</span> <span class="token operator">||</span> lw<span class="token punctuation">.</span>sid <span class="token operator">||</span> <span class="token string">&#39; / &#39;</span> <span class="token operator">||</span> sw<span class="token punctuation">.</span><span class="token keyword">serial</span><span class="token comment">#    waiting_instance_sid_serial</span>
  <span class="token punctuation">,</span> aw<span class="token punctuation">.</span>sql_text                                                   waiting_sql_text
<span class="token keyword">FROM</span>
    gv$<span class="token keyword">lock</span>     lw
  <span class="token punctuation">,</span> gv$<span class="token keyword">lock</span>     lh
  <span class="token punctuation">,</span> gv$instance iw
  <span class="token punctuation">,</span> gv$instance ih
  <span class="token punctuation">,</span> gv$<span class="token keyword">session</span>  sw
  <span class="token punctuation">,</span> gv$<span class="token keyword">session</span>  sh
  <span class="token punctuation">,</span> gv$sqlarea  aw
<span class="token keyword">WHERE</span>
      iw<span class="token punctuation">.</span>inst_id  <span class="token operator">=</span> lw<span class="token punctuation">.</span>inst_id
  <span class="token operator">AND</span> ih<span class="token punctuation">.</span>inst_id  <span class="token operator">=</span> lh<span class="token punctuation">.</span>inst_id
  <span class="token operator">AND</span> sw<span class="token punctuation">.</span>inst_id  <span class="token operator">=</span> lw<span class="token punctuation">.</span>inst_id
  <span class="token operator">AND</span> sh<span class="token punctuation">.</span>inst_id  <span class="token operator">=</span> lh<span class="token punctuation">.</span>inst_id
  <span class="token operator">AND</span> aw<span class="token punctuation">.</span>inst_id  <span class="token operator">=</span> lw<span class="token punctuation">.</span>inst_id
  <span class="token operator">AND</span> sw<span class="token punctuation">.</span>sid      <span class="token operator">=</span> lw<span class="token punctuation">.</span>sid
  <span class="token operator">AND</span> sh<span class="token punctuation">.</span>sid      <span class="token operator">=</span> lh<span class="token punctuation">.</span>sid
  <span class="token operator">AND</span> lh<span class="token punctuation">.</span>id1      <span class="token operator">=</span> lw<span class="token punctuation">.</span>id1
  <span class="token operator">AND</span> lh<span class="token punctuation">.</span>id2      <span class="token operator">=</span> lw<span class="token punctuation">.</span>id2
  <span class="token operator">AND</span> lh<span class="token punctuation">.</span>request  <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token operator">AND</span> lw<span class="token punctuation">.</span>lmode    <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token operator">AND</span> <span class="token punctuation">(</span>lh<span class="token punctuation">.</span>id1<span class="token punctuation">,</span> lh<span class="token punctuation">.</span>id2<span class="token punctuation">)</span> <span class="token operator">IN</span> <span class="token punctuation">(</span> <span class="token keyword">SELECT</span> id1<span class="token punctuation">,</span>id2
                            <span class="token keyword">FROM</span>   gv$<span class="token keyword">lock</span>
                            <span class="token keyword">WHERE</span>  request <span class="token operator">=</span> <span class="token number">0</span>
                            <span class="token keyword">INTERSECT</span>
                            <span class="token keyword">SELECT</span> id1<span class="token punctuation">,</span>id2
                            <span class="token keyword">FROM</span>   gv$<span class="token keyword">lock</span>
                            <span class="token keyword">WHERE</span>  lmode <span class="token operator">=</span> <span class="token number">0</span>
                          <span class="token punctuation">)</span>
  <span class="token operator">AND</span> sw<span class="token punctuation">.</span>sql_address  <span class="token operator">=</span> aw<span class="token punctuation">.</span>address
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
    iw<span class="token punctuation">.</span>instance_name
  <span class="token punctuation">,</span> lw<span class="token punctuation">.</span>sid<span class="token punctuation">;</span>


PROMPT 
PROMPT 
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>
PROMPT <span class="token operator">|</span> LOCKED OBJECTS                                                         <span class="token operator">|</span>
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>

<span class="token keyword">SELECT</span>
    i<span class="token punctuation">.</span>instance_name           instance_name
  <span class="token punctuation">,</span> l<span class="token punctuation">.</span>session_id              sid
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span><span class="token keyword">status</span>                  session_status
  <span class="token punctuation">,</span> l<span class="token punctuation">.</span>oracle_username         locking_oracle_user
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span>osuser                  locking_os_user
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span>machine                 locking_machine
  <span class="token punctuation">,</span> p<span class="token punctuation">.</span>spid                    locking_os_pid
  <span class="token punctuation">,</span> o<span class="token punctuation">.</span>owner                   object_owner
  <span class="token punctuation">,</span> o<span class="token punctuation">.</span>object_name             object_name
  <span class="token punctuation">,</span> o<span class="token punctuation">.</span>object_type             object_type
  <span class="token punctuation">,</span> DECODE <span class="token punctuation">(</span>   l<span class="token punctuation">.</span>locked_mode
             <span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&#39;None&#39;</span>                        <span class="token comment">/* Mon Lock equivalent */</span>
             <span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;NoLock&#39;</span>                      <span class="token comment">/* N */</span>
             <span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;Row-Share (SS)&#39;</span>              <span class="token comment">/* L */</span>
             <span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;Row-Exclusive (SX)&#39;</span>          <span class="token comment">/* R */</span>
             <span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">&#39;Share-Table&#39;</span>                 <span class="token comment">/* S */</span>
             <span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">&#39;Share-Row-Exclusive (SSX)&#39;</span>   <span class="token comment">/* C */</span>
             <span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token string">&#39;Exclusive&#39;</span>                   <span class="token comment">/* X */</span>
             <span class="token punctuation">,</span>    <span class="token string">&#39;[Nothing]&#39;</span>
           <span class="token punctuation">)</span>                  locked_mode
<span class="token keyword">FROM</span>
    dba_objects       o
  <span class="token punctuation">,</span> gv$<span class="token keyword">session</span>        s
  <span class="token punctuation">,</span> gv$process        p
  <span class="token punctuation">,</span> gv$locked_object  l
  <span class="token punctuation">,</span> gv$instance       i
<span class="token keyword">WHERE</span>
      i<span class="token punctuation">.</span>inst_id     <span class="token operator">=</span> l<span class="token punctuation">.</span>inst_id
  <span class="token operator">AND</span> s<span class="token punctuation">.</span>inst_id     <span class="token operator">=</span> l<span class="token punctuation">.</span>inst_id
  <span class="token operator">AND</span> s<span class="token punctuation">.</span>inst_id     <span class="token operator">=</span> p<span class="token punctuation">.</span>inst_id
  <span class="token operator">AND</span> s<span class="token punctuation">.</span>sid         <span class="token operator">=</span> l<span class="token punctuation">.</span>session_id
  <span class="token operator">AND</span> o<span class="token punctuation">.</span>object_id   <span class="token operator">=</span> l<span class="token punctuation">.</span>object_id
  <span class="token operator">AND</span> s<span class="token punctuation">.</span>paddr       <span class="token operator">=</span> p<span class="token punctuation">.</span>addr
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
    i<span class="token punctuation">.</span>instance_name
  <span class="token punctuation">,</span> l<span class="token punctuation">.</span>session_id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rman-backup-piece" tabindex="-1"><a class="header-anchor" href="#rman-backup-piece"><span>rman backup piece</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- +----------------------------------------------------------------------------+</span>
<span class="token comment">-- |                          Jeffrey M. Hunter                                 |</span>
<span class="token comment">-- |                      jhunter@idevelopment.info                             |</span>
<span class="token comment">-- |                         www.idevelopment.info                              |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- |      Copyright (c) 1998-2015 Jeffrey M. Hunter. All rights reserved.       |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- | DATABASE : Oracle                                                          |</span>
<span class="token comment">-- | FILE     : rman_backup_pieces.sql                                          |</span>
<span class="token comment">-- | CLASS    : Recovery Manager                                                |</span>
<span class="token comment">-- | PURPOSE  : Provide a listing of all RMAN Backup Pieces.                    |</span>
<span class="token comment">-- | NOTE     : As with any code, ensure to test this script in a development   |</span>
<span class="token comment">-- |            environment before attempting to run it in production.          |</span>
<span class="token comment">-- +----------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> TERMOUT <span class="token keyword">OFF</span><span class="token punctuation">;</span>
<span class="token keyword">COLUMN</span> current_instance NEW_VALUE current_instance NOPRINT<span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> rpad<span class="token punctuation">(</span>instance_name<span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">)</span> current_instance <span class="token keyword">FROM</span> v$instance<span class="token punctuation">;</span>
<span class="token keyword">SET</span> TERMOUT <span class="token keyword">ON</span><span class="token punctuation">;</span>

PROMPT 
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>
PROMPT <span class="token operator">|</span> Report   : RMAN <span class="token keyword">Backup</span> Pieces                                          <span class="token operator">|</span>
PROMPT <span class="token operator">|</span> Instance : <span class="token operator">&amp;</span>current_instance                                           <span class="token operator">|</span>
PROMPT <span class="token operator">|</span> Note     : Available <span class="token keyword">backup</span> pieces contained <span class="token operator">in</span> the control <span class="token keyword">file</span><span class="token punctuation">.</span>      <span class="token operator">|</span>
PROMPT <span class="token operator">|</span>            Includes available <span class="token operator">and</span> expired <span class="token keyword">backup</span> sets<span class="token punctuation">.</span>                 <span class="token operator">|</span>
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> ECHO        <span class="token keyword">OFF</span>
<span class="token keyword">SET</span> FEEDBACK    <span class="token number">6</span>
<span class="token keyword">SET</span> HEADING     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> LINESIZE    <span class="token number">180</span>
<span class="token keyword">SET</span> PAGESIZE    <span class="token number">50000</span>
<span class="token keyword">SET</span> TERMOUT     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> TIMING      <span class="token keyword">OFF</span>
<span class="token keyword">SET</span> TRIMOUT     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> TRIMSPOOL   <span class="token keyword">ON</span>
<span class="token keyword">SET</span> VERIFY      <span class="token keyword">OFF</span>

CLEAR <span class="token keyword">COLUMNS</span>
CLEAR BREAKS
CLEAR COMPUTES

<span class="token keyword">COLUMN</span> bs_key              FORMAT <span class="token number">9999</span>          HEADING <span class="token string">&#39;BS|Key&#39;</span>
<span class="token keyword">COLUMN</span> piece<span class="token comment">#              FORMAT 99999         HEADING &#39;Piece|#&#39;</span>
<span class="token keyword">COLUMN</span> copy<span class="token comment">#               FORMAT 9999          HEADING &#39;Copy|#&#39;</span>
<span class="token keyword">COLUMN</span> bp_key              FORMAT <span class="token number">9999</span>          HEADING <span class="token string">&#39;BP|Key&#39;</span>
<span class="token keyword">COLUMN</span> <span class="token keyword">status</span>              FORMAT a9            HEADING <span class="token string">&#39;Status&#39;</span>
<span class="token keyword">COLUMN</span> handle              FORMAT a75           HEADING <span class="token string">&#39;Handle&#39;</span>
<span class="token keyword">COLUMN</span> start_time          FORMAT a19           HEADING <span class="token string">&#39;Start|Time&#39;</span>
<span class="token keyword">COLUMN</span> completion_time     FORMAT a19           HEADING <span class="token string">&#39;End|Time&#39;</span>
<span class="token keyword">COLUMN</span> elapsed_seconds     FORMAT <span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>       HEADING <span class="token string">&#39;Elapsed|Seconds&#39;</span>
<span class="token keyword">COLUMN</span> deleted             FORMAT a8            HEADING <span class="token string">&#39;Deleted?&#39;</span>

<span class="token keyword">BREAK</span> <span class="token keyword">ON</span> bs_key SKIP <span class="token number">2</span>

<span class="token keyword">SELECT</span>
    bs<span class="token punctuation">.</span>recid                                            bs_key
  <span class="token punctuation">,</span> bp<span class="token punctuation">.</span>piece<span class="token comment">#                                           piece#</span>
  <span class="token punctuation">,</span> bp<span class="token punctuation">.</span>copy<span class="token comment">#                                            copy#</span>
  <span class="token punctuation">,</span> bp<span class="token punctuation">.</span>recid                                            bp_key
  <span class="token punctuation">,</span> DECODE<span class="token punctuation">(</span>   bp<span class="token punctuation">.</span><span class="token keyword">status</span>
            <span class="token punctuation">,</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Available&#39;</span>
            <span class="token punctuation">,</span> <span class="token string">&#39;D&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Deleted&#39;</span>
            <span class="token punctuation">,</span> <span class="token string">&#39;X&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Expired&#39;</span><span class="token punctuation">)</span>                             <span class="token keyword">status</span>
  <span class="token punctuation">,</span> bp<span class="token punctuation">.</span>handle                                             handle
  <span class="token punctuation">,</span> TO_CHAR<span class="token punctuation">(</span>bp<span class="token punctuation">.</span>start_time<span class="token punctuation">,</span> <span class="token string">&#39;mm/dd/yyyy HH24:MI:SS&#39;</span><span class="token punctuation">)</span>       start_time
  <span class="token punctuation">,</span> TO_CHAR<span class="token punctuation">(</span>bp<span class="token punctuation">.</span>completion_time<span class="token punctuation">,</span> <span class="token string">&#39;mm/dd/yyyy HH24:MI:SS&#39;</span><span class="token punctuation">)</span>  completion_time
  <span class="token punctuation">,</span> bp<span class="token punctuation">.</span>elapsed_seconds                                    elapsed_seconds
<span class="token keyword">FROM</span>
    v$backup_set bs <span class="token keyword">JOIN</span> v$backup_piece bp <span class="token keyword">USING</span> <span class="token punctuation">(</span>set_stamp<span class="token punctuation">,</span>set_count<span class="token punctuation">)</span>
<span class="token keyword">WHERE</span>
    bp<span class="token punctuation">.</span><span class="token keyword">status</span> <span class="token operator">IN</span> <span class="token punctuation">(</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;X&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
    bs<span class="token punctuation">.</span>recid
  <span class="token punctuation">,</span> bp<span class="token punctuation">.</span>piece<span class="token comment">#</span>
<span class="token operator">/</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rman-backup-sets" tabindex="-1"><a class="header-anchor" href="#rman-backup-sets"><span>rman backup sets</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>

<span class="token comment">-- +----------------------------------------------------------------------------+</span>
<span class="token comment">-- |                          Jeffrey M. Hunter                                 |</span>
<span class="token comment">-- |                      jhunter@idevelopment.info                             |</span>
<span class="token comment">-- |                         www.idevelopment.info                              |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- |      Copyright (c) 1998-2015 Jeffrey M. Hunter. All rights reserved.       |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- | DATABASE : Oracle                                                          |</span>
<span class="token comment">-- | FILE     : rman_backup_sets.sql                                            |</span>
<span class="token comment">-- | CLASS    : Recovery Manager                                                |</span>
<span class="token comment">-- | PURPOSE  : Provide a listing of all RMAN Backup Sets.                      |</span>
<span class="token comment">-- | NOTE     : As with any code, ensure to test this script in a development   |</span>
<span class="token comment">-- |            environment before attempting to run it in production.          |</span>
<span class="token comment">-- +----------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> TERMOUT <span class="token keyword">OFF</span><span class="token punctuation">;</span>
<span class="token keyword">COLUMN</span> current_instance NEW_VALUE current_instance NOPRINT<span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> rpad<span class="token punctuation">(</span>instance_name<span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">)</span> current_instance <span class="token keyword">FROM</span> v$instance<span class="token punctuation">;</span>
<span class="token keyword">SET</span> TERMOUT <span class="token keyword">ON</span><span class="token punctuation">;</span>

PROMPT 
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>
PROMPT <span class="token operator">|</span> Report   : RMAN <span class="token keyword">Backup</span> Sets                                            <span class="token operator">|</span>
PROMPT <span class="token operator">|</span> Instance : <span class="token operator">&amp;</span>current_instance                                           <span class="token operator">|</span>
PROMPT <span class="token operator">|</span> Note     : Available <span class="token keyword">backup</span> sets contained <span class="token operator">in</span> the control <span class="token keyword">file</span><span class="token punctuation">.</span>        <span class="token operator">|</span>
PROMPT <span class="token operator">|</span>            Includes available <span class="token operator">and</span> expired <span class="token keyword">backup</span> sets<span class="token punctuation">.</span>                 <span class="token operator">|</span>
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> ECHO        <span class="token keyword">OFF</span>
<span class="token keyword">SET</span> FEEDBACK    <span class="token number">6</span>
<span class="token keyword">SET</span> HEADING     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> LINESIZE    <span class="token number">180</span>
<span class="token keyword">SET</span> PAGESIZE    <span class="token number">50000</span>
<span class="token keyword">SET</span> TERMOUT     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> TIMING      <span class="token keyword">OFF</span>
<span class="token keyword">SET</span> TRIMOUT     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> TRIMSPOOL   <span class="token keyword">ON</span>
<span class="token keyword">SET</span> VERIFY      <span class="token keyword">OFF</span>

CLEAR <span class="token keyword">COLUMNS</span>
CLEAR BREAKS
CLEAR COMPUTES

<span class="token keyword">COLUMN</span> bs_key                 FORMAT <span class="token number">999999</span>                 HEADING <span class="token string">&#39;BS|Key&#39;</span>
<span class="token keyword">COLUMN</span> backup_type            FORMAT a14                    HEADING <span class="token string">&#39;Backup|Type&#39;</span>
<span class="token keyword">COLUMN</span> device_type            FORMAT a6                     HEADING <span class="token string">&#39;Device|Type&#39;</span>
<span class="token keyword">COLUMN</span> controlfile_included   FORMAT a11                    HEADING <span class="token string">&#39;Controlfile|Included?&#39;</span>
<span class="token keyword">COLUMN</span> spfile_included        FORMAT a9                     HEADING <span class="token string">&#39;SPFILE|Included?&#39;</span>
<span class="token keyword">COLUMN</span> incremental_level      FORMAT <span class="token number">999999</span>                 HEADING <span class="token string">&#39;Inc.|Level&#39;</span>
<span class="token keyword">COLUMN</span> pieces                 FORMAT <span class="token number">9</span><span class="token punctuation">,</span><span class="token number">999</span>                  HEADING <span class="token string">&#39;# of|Pieces&#39;</span>
<span class="token keyword">COLUMN</span> start_time             FORMAT a19                    HEADING <span class="token string">&#39;Start|Time&#39;</span>
<span class="token keyword">COLUMN</span> completion_time        FORMAT a19                    HEADING <span class="token string">&#39;End|Time&#39;</span>
<span class="token keyword">COLUMN</span> elapsed_seconds        FORMAT <span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>                HEADING <span class="token string">&#39;Elapsed|Seconds&#39;</span>
<span class="token keyword">COLUMN</span> tag                    FORMAT a19                    HEADING <span class="token string">&#39;Tag&#39;</span>
<span class="token keyword">COLUMN</span> block_size             FORMAT <span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>                HEADING <span class="token string">&#39;Block|Size&#39;</span>

<span class="token keyword">SELECT</span>
    bs<span class="token punctuation">.</span>recid                                              bs_key
  <span class="token punctuation">,</span> DECODE<span class="token punctuation">(</span>backup_type
           <span class="token punctuation">,</span> <span class="token string">&#39;L&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Archived Logs&#39;</span>
           <span class="token punctuation">,</span> <span class="token string">&#39;D&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Datafile Full&#39;</span>
           <span class="token punctuation">,</span> <span class="token string">&#39;I&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Incremental&#39;</span><span class="token punctuation">)</span>                          backup_type
  <span class="token punctuation">,</span> device_type                                           device_type
  <span class="token punctuation">,</span> DECODE<span class="token punctuation">(</span>   bs<span class="token punctuation">.</span>controlfile_included
            <span class="token punctuation">,</span> <span class="token string">&#39;NO&#39;</span><span class="token punctuation">,</span> <span class="token boolean">null</span>
            <span class="token punctuation">,</span> bs<span class="token punctuation">.</span>controlfile_included<span class="token punctuation">)</span>                    controlfile_included
  <span class="token punctuation">,</span> sp<span class="token punctuation">.</span>spfile_included                                    spfile_included
  <span class="token punctuation">,</span> bs<span class="token punctuation">.</span>incremental_level                                  incremental_level
  <span class="token punctuation">,</span> bs<span class="token punctuation">.</span>pieces                                             pieces
  <span class="token punctuation">,</span> TO_CHAR<span class="token punctuation">(</span>bs<span class="token punctuation">.</span>start_time<span class="token punctuation">,</span> <span class="token string">&#39;mm/dd/yyyy HH24:MI:SS&#39;</span><span class="token punctuation">)</span>       start_time
  <span class="token punctuation">,</span> TO_CHAR<span class="token punctuation">(</span>bs<span class="token punctuation">.</span>completion_time<span class="token punctuation">,</span> <span class="token string">&#39;mm/dd/yyyy HH24:MI:SS&#39;</span><span class="token punctuation">)</span>  completion_time
  <span class="token punctuation">,</span> bs<span class="token punctuation">.</span>elapsed_seconds                                    elapsed_seconds
  <span class="token punctuation">,</span> bp<span class="token punctuation">.</span>tag                                                tag
  <span class="token punctuation">,</span> bs<span class="token punctuation">.</span>block_size                                         block_size
<span class="token keyword">FROM</span>
    v$backup_set                           bs
  <span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token keyword">distinct</span>
         set_stamp
       <span class="token punctuation">,</span> set_count
       <span class="token punctuation">,</span> tag
       <span class="token punctuation">,</span> device_type
     <span class="token keyword">from</span> v$backup_piece
     <span class="token keyword">where</span> <span class="token keyword">status</span> <span class="token operator">in</span> <span class="token punctuation">(</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;X&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>           bp
 <span class="token punctuation">,</span>  <span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token keyword">distinct</span>
         set_stamp
       <span class="token punctuation">,</span> set_count
       <span class="token punctuation">,</span> <span class="token string">&#39;YES&#39;</span>     spfile_included
     <span class="token keyword">from</span> v$backup_spfile<span class="token punctuation">)</span>                 sp
<span class="token keyword">WHERE</span>
      bs<span class="token punctuation">.</span>set_stamp <span class="token operator">=</span> bp<span class="token punctuation">.</span>set_stamp
  <span class="token operator">AND</span> bs<span class="token punctuation">.</span>set_count <span class="token operator">=</span> bp<span class="token punctuation">.</span>set_count
  <span class="token operator">AND</span> bs<span class="token punctuation">.</span>set_stamp <span class="token operator">=</span> sp<span class="token punctuation">.</span>set_stamp <span class="token punctuation">(</span><span class="token operator">+</span><span class="token punctuation">)</span>
  <span class="token operator">AND</span> bs<span class="token punctuation">.</span>set_count <span class="token operator">=</span> sp<span class="token punctuation">.</span>set_count <span class="token punctuation">(</span><span class="token operator">+</span><span class="token punctuation">)</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
    bs<span class="token punctuation">.</span>recid
<span class="token operator">/</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rman-controfiles" tabindex="-1"><a class="header-anchor" href="#rman-controfiles"><span>rman controfiles</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- +----------------------------------------------------------------------------+</span>
<span class="token comment">-- |                          Jeffrey M. Hunter                                 |</span>
<span class="token comment">-- |                      jhunter@idevelopment.info                             |</span>
<span class="token comment">-- |                         www.idevelopment.info                              |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- |      Copyright (c) 1998-2015 Jeffrey M. Hunter. All rights reserved.       |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- | DATABASE : Oracle                                                          |</span>
<span class="token comment">-- | FILE     : rman_controlfiles.sql                                           |</span>
<span class="token comment">-- | CLASS    : Recovery Manager                                                |</span>
<span class="token comment">-- | PURPOSE  : Provide a listing of automatically backed up control files.     |</span>
<span class="token comment">-- | NOTE     : As with any code, ensure to test this script in a development   |</span>
<span class="token comment">-- |            environment before attempting to run it in production.          |</span>
<span class="token comment">-- +----------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> TERMOUT <span class="token keyword">OFF</span><span class="token punctuation">;</span>
<span class="token keyword">COLUMN</span> current_instance NEW_VALUE current_instance NOPRINT<span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> rpad<span class="token punctuation">(</span>instance_name<span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">)</span> current_instance <span class="token keyword">FROM</span> v$instance<span class="token punctuation">;</span>
<span class="token keyword">SET</span> TERMOUT <span class="token keyword">ON</span><span class="token punctuation">;</span>

PROMPT 
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>
PROMPT <span class="token operator">|</span> Report   : RMAN Control Files                                          <span class="token operator">|</span>
PROMPT <span class="token operator">|</span> Instance : <span class="token operator">&amp;</span>current_instance                                           <span class="token operator">|</span>
PROMPT <span class="token operator">|</span> Note     : Available automatic control files <span class="token keyword">within</span> <span class="token keyword">all</span> available      <span class="token operator">|</span>
PROMPT <span class="token operator">|</span>            <span class="token punctuation">(</span><span class="token operator">and</span> expired<span class="token punctuation">)</span> <span class="token keyword">backup</span> sets<span class="token punctuation">.</span>                                  <span class="token operator">|</span>
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> ECHO        <span class="token keyword">OFF</span>
<span class="token keyword">SET</span> FEEDBACK    <span class="token number">6</span>
<span class="token keyword">SET</span> HEADING     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> LINESIZE    <span class="token number">180</span>
<span class="token keyword">SET</span> PAGESIZE    <span class="token number">50000</span>
<span class="token keyword">SET</span> TERMOUT     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> TIMING      <span class="token keyword">OFF</span>
<span class="token keyword">SET</span> TRIMOUT     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> TRIMSPOOL   <span class="token keyword">ON</span>
<span class="token keyword">SET</span> VERIFY      <span class="token keyword">OFF</span>

CLEAR <span class="token keyword">COLUMNS</span>
CLEAR BREAKS
CLEAR COMPUTES

<span class="token keyword">COLUMN</span> bs_key                 FORMAT <span class="token number">9999</span>     HEADING <span class="token string">&#39;BS|Key&#39;</span>
<span class="token keyword">COLUMN</span> piece<span class="token comment">#                 FORMAT 99999    HEADING &#39;Piece|#&#39;</span>
<span class="token keyword">COLUMN</span> copy<span class="token comment">#                  FORMAT 9999     HEADING &#39;Copy|#&#39;</span>
<span class="token keyword">COLUMN</span> bp_key                 FORMAT <span class="token number">9999</span>     HEADING <span class="token string">&#39;BP|Key&#39;</span>
<span class="token keyword">COLUMN</span> controlfile_included   FORMAT a11      HEADING <span class="token string">&#39;Controlfile|Included?&#39;</span>
<span class="token keyword">COLUMN</span> completion_time        FORMAT a20      HEADING <span class="token string">&#39;Completion|Time&#39;</span>
<span class="token keyword">COLUMN</span> <span class="token keyword">status</span>                 FORMAT a9       HEADING <span class="token string">&#39;Status&#39;</span>
<span class="token keyword">COLUMN</span> handle                 FORMAT a75      HEADING <span class="token string">&#39;Handle&#39;</span>

<span class="token keyword">BREAK</span> <span class="token keyword">ON</span> bs_key

<span class="token keyword">SELECT</span>
    bs<span class="token punctuation">.</span>recid                                               bs_key
  <span class="token punctuation">,</span> bp<span class="token punctuation">.</span>piece<span class="token comment">#                                              piece#</span>
  <span class="token punctuation">,</span> bp<span class="token punctuation">.</span>copy<span class="token comment">#                                               copy#</span>
  <span class="token punctuation">,</span> bp<span class="token punctuation">.</span>recid                                               bp_key
  <span class="token punctuation">,</span> DECODE<span class="token punctuation">(</span>   bs<span class="token punctuation">.</span>controlfile_included
            <span class="token punctuation">,</span> <span class="token string">&#39;NO&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;-&#39;</span>
            <span class="token punctuation">,</span> bs<span class="token punctuation">.</span>controlfile_included<span class="token punctuation">)</span>                     controlfile_included
  <span class="token punctuation">,</span> TO_CHAR<span class="token punctuation">(</span>bs<span class="token punctuation">.</span>completion_time<span class="token punctuation">,</span> <span class="token string">&#39;mm/dd/yyyy HH24:MI:SS&#39;</span><span class="token punctuation">)</span>   completion_time
  <span class="token punctuation">,</span> DECODE<span class="token punctuation">(</span>   <span class="token keyword">status</span>
            <span class="token punctuation">,</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Available&#39;</span>
            <span class="token punctuation">,</span> <span class="token string">&#39;D&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Deleted&#39;</span>
            <span class="token punctuation">,</span> <span class="token string">&#39;X&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Expired&#39;</span><span class="token punctuation">)</span>                              <span class="token keyword">status</span>
  <span class="token punctuation">,</span> handle                                                 handle
<span class="token keyword">FROM</span>
    v$backup_set bs <span class="token keyword">JOIN</span> v$backup_piece bp <span class="token keyword">USING</span> <span class="token punctuation">(</span>set_stamp<span class="token punctuation">,</span>set_count<span class="token punctuation">)</span>
<span class="token keyword">WHERE</span>
      bp<span class="token punctuation">.</span><span class="token keyword">status</span> <span class="token operator">IN</span> <span class="token punctuation">(</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;X&#39;</span><span class="token punctuation">)</span>
  <span class="token operator">AND</span> bs<span class="token punctuation">.</span>controlfile_included <span class="token operator">!=</span> <span class="token string">&#39;NO&#39;</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
    bs<span class="token punctuation">.</span>recid
  <span class="token punctuation">,</span> piece<span class="token comment">#</span>
<span class="token operator">/</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rman-progress" tabindex="-1"><a class="header-anchor" href="#rman-progress"><span>rman progress</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- +----------------------------------------------------------------------------+</span>
<span class="token comment">-- |                          Jeffrey M. Hunter                                 |</span>
<span class="token comment">-- |                      jhunter@idevelopment.info                             |</span>
<span class="token comment">-- |                         www.idevelopment.info                              |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- |      Copyright (c) 1998-2015 Jeffrey M. Hunter. All rights reserved.       |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- | DATABASE : Oracle                                                          |</span>
<span class="token comment">-- | FILE     : rman_progress.sql                                               |</span>
<span class="token comment">-- | CLASS    : Recovery Manager                                                |</span>
<span class="token comment">-- | PURPOSE  : Provide a listing of all current RMAN operations and their      |</span>
<span class="token comment">-- |            estimated timings.                                              |</span>
<span class="token comment">-- | NOTE     : As with any code, ensure to test this script in a development   |</span>
<span class="token comment">-- |            environment before attempting to run it in production.          |</span>
<span class="token comment">-- +----------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> TERMOUT <span class="token keyword">OFF</span><span class="token punctuation">;</span>
<span class="token keyword">COLUMN</span> current_instance NEW_VALUE current_instance NOPRINT<span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> rpad<span class="token punctuation">(</span>instance_name<span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">)</span> current_instance <span class="token keyword">FROM</span> v$instance<span class="token punctuation">;</span>
<span class="token keyword">SET</span> TERMOUT <span class="token keyword">ON</span><span class="token punctuation">;</span>

PROMPT 
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>
PROMPT <span class="token operator">|</span> Report   : RMAN <span class="token keyword">Backup</span> Progress                                        <span class="token operator">|</span>
PROMPT <span class="token operator">|</span> Instance : <span class="token operator">&amp;</span>current_instance                                           <span class="token operator">|</span>
PROMPT <span class="token operator">|</span> Note     : A listing <span class="token keyword">of</span> <span class="token keyword">all</span> <span class="token keyword">current</span> RMAN operations <span class="token operator">and</span> their          <span class="token operator">|</span>
PROMPT <span class="token operator">|</span>            estimated timings<span class="token punctuation">.</span>                                          <span class="token operator">|</span>
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> ECHO        <span class="token keyword">OFF</span>
<span class="token keyword">SET</span> FEEDBACK    <span class="token number">6</span>
<span class="token keyword">SET</span> HEADING     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> LINESIZE    <span class="token number">180</span>
<span class="token keyword">SET</span> PAGESIZE    <span class="token number">50000</span>
<span class="token keyword">SET</span> TERMOUT     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> TIMING      <span class="token keyword">OFF</span>
<span class="token keyword">SET</span> TRIMOUT     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> TRIMSPOOL   <span class="token keyword">ON</span>
<span class="token keyword">SET</span> VERIFY      <span class="token keyword">OFF</span>

CLEAR <span class="token keyword">COLUMNS</span>
CLEAR BREAKS
CLEAR COMPUTES

<span class="token keyword">COLUMN</span> instance_name      FORMAT a10      HEADING <span class="token string">&#39;Instance&#39;</span>
<span class="token keyword">COLUMN</span> sid                                HEADING <span class="token string">&#39;Oracle|SID&#39;</span>
<span class="token keyword">COLUMN</span> serial_num                         HEADING <span class="token string">&#39;Serial|#&#39;</span>
<span class="token keyword">COLUMN</span> opname             FORMAT a30      HEADING <span class="token string">&#39;RMAN|Operation&#39;</span>
<span class="token keyword">COLUMN</span> start_time         FORMAT a18      HEADING <span class="token string">&#39;Start|Time&#39;</span>
<span class="token keyword">COLUMN</span> totalwork                          HEADING <span class="token string">&#39;Total|Work&#39;</span>
<span class="token keyword">COLUMN</span> sofar                              HEADING <span class="token string">&#39;So|Far&#39;</span>
<span class="token keyword">COLUMN</span> pct_done                           HEADING <span class="token string">&#39;Percent|Done&#39;</span>
<span class="token keyword">COLUMN</span> elapsed_seconds                    HEADING <span class="token string">&#39;Elapsed|Seconds&#39;</span>
<span class="token keyword">COLUMN</span> time_remaining                     HEADING <span class="token string">&#39;Seconds|Remaining&#39;</span>
<span class="token keyword">COLUMN</span> done_at            FORMAT a18      HEADING <span class="token string">&#39;Done|At&#39;</span>

<span class="token keyword">SELECT</span>
    i<span class="token punctuation">.</span>instance_name                                 instance_name
  <span class="token punctuation">,</span> sid                                             sid
  <span class="token punctuation">,</span> <span class="token keyword">serial</span><span class="token comment">#                                         serial_num</span>
  <span class="token punctuation">,</span> b<span class="token punctuation">.</span>opname                                        opname
  <span class="token punctuation">,</span> TO_CHAR<span class="token punctuation">(</span>b<span class="token punctuation">.</span>start_time<span class="token punctuation">,</span> <span class="token string">&#39;mm/dd/yy HH24:MI:SS&#39;</span><span class="token punctuation">)</span>    start_time
  <span class="token punctuation">,</span> b<span class="token punctuation">.</span>totalwork                                     totalwork
  <span class="token punctuation">,</span> b<span class="token punctuation">.</span>sofar                                         sofar
  <span class="token punctuation">,</span> <span class="token function">ROUND</span><span class="token punctuation">(</span> <span class="token punctuation">(</span>b<span class="token punctuation">.</span>sofar<span class="token operator">/</span>DECODE<span class="token punctuation">(</span>   b<span class="token punctuation">.</span>totalwork
                            <span class="token punctuation">,</span> <span class="token number">0</span>
                            <span class="token punctuation">,</span> <span class="token number">0.001</span>
                            <span class="token punctuation">,</span> b<span class="token punctuation">.</span>totalwork<span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>  pct_done
  <span class="token punctuation">,</span> b<span class="token punctuation">.</span>elapsed_seconds                               elapsed_seconds
  <span class="token punctuation">,</span> b<span class="token punctuation">.</span>time_remaining                                time_remaining
  <span class="token punctuation">,</span> DECODE<span class="token punctuation">(</span>   b<span class="token punctuation">.</span>time_remaining
            <span class="token punctuation">,</span> <span class="token number">0</span>
            <span class="token punctuation">,</span> TO_CHAR<span class="token punctuation">(</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>start_time <span class="token operator">+</span> b<span class="token punctuation">.</span>elapsed_seconds<span class="token operator">/</span><span class="token number">3600</span><span class="token operator">/</span><span class="token number">24</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;mm/dd/yy HH24:MI:SS&#39;</span><span class="token punctuation">)</span>
            <span class="token punctuation">,</span> TO_CHAR<span class="token punctuation">(</span><span class="token punctuation">(</span>SYSDATE <span class="token operator">+</span> b<span class="token punctuation">.</span>time_remaining<span class="token operator">/</span><span class="token number">3600</span><span class="token operator">/</span><span class="token number">24</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;mm/dd/yy HH24:MI:SS&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span> done_at
<span class="token keyword">FROM</span>
       gv$<span class="token keyword">session</span>         a
  <span class="token keyword">JOIN</span> gv$session_longops b <span class="token keyword">USING</span> <span class="token punctuation">(</span>sid<span class="token punctuation">,</span><span class="token keyword">serial</span><span class="token comment">#)</span>
  <span class="token keyword">JOIN</span> gv$instance        i <span class="token keyword">ON</span> <span class="token punctuation">(</span>      i<span class="token punctuation">.</span>inst_id <span class="token operator">=</span> a<span class="token punctuation">.</span>inst_id
                                  <span class="token operator">AND</span> i<span class="token punctuation">.</span>inst_id <span class="token operator">=</span> b<span class="token punctuation">.</span>inst_id<span class="token punctuation">)</span>
<span class="token keyword">WHERE</span>
      a<span class="token punctuation">.</span>program <span class="token operator">LIKE</span> <span class="token string">&#39;rman%&#39;</span>
  <span class="token operator">AND</span> b<span class="token punctuation">.</span>opname <span class="token operator">LIKE</span> <span class="token string">&#39;RMAN%&#39;</span>
  <span class="token operator">AND</span> b<span class="token punctuation">.</span>opname <span class="token operator">NOT</span> <span class="token operator">LIKE</span> <span class="token string">&#39;%aggregate%&#39;</span>
  <span class="token operator">AND</span> b<span class="token punctuation">.</span>totalwork <span class="token operator">&gt;</span> <span class="token number">0</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
    i<span class="token punctuation">.</span>instance_name
  <span class="token punctuation">,</span> b<span class="token punctuation">.</span>start_time
<span class="token operator">/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rman-spfiles" tabindex="-1"><a class="header-anchor" href="#rman-spfiles"><span>rman spfiles</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- +----------------------------------------------------------------------------+</span>
<span class="token comment">-- |                          Jeffrey M. Hunter                                 |</span>
<span class="token comment">-- |                      jhunter@idevelopment.info                             |</span>
<span class="token comment">-- |                         www.idevelopment.info                              |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- |      Copyright (c) 1998-2015 Jeffrey M. Hunter. All rights reserved.       |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- | DATABASE : Oracle                                                          |</span>
<span class="token comment">-- | FILE     : rman_spfiles.sql                                                |</span>
<span class="token comment">-- | CLASS    : Recovery Manager                                                |</span>
<span class="token comment">-- | PURPOSE  : Provide a listing of automatically backed up SPFILEs.           |</span>
<span class="token comment">-- | NOTE     : As with any code, ensure to test this script in a development   |</span>
<span class="token comment">-- |            environment before attempting to run it in production.          |</span>
<span class="token comment">-- +----------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> TERMOUT <span class="token keyword">OFF</span><span class="token punctuation">;</span>
<span class="token keyword">COLUMN</span> current_instance NEW_VALUE current_instance NOPRINT<span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> rpad<span class="token punctuation">(</span>instance_name<span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">)</span> current_instance <span class="token keyword">FROM</span> v$instance<span class="token punctuation">;</span>
<span class="token keyword">SET</span> TERMOUT <span class="token keyword">ON</span><span class="token punctuation">;</span>

PROMPT 
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>
PROMPT <span class="token operator">|</span> Report   : RMAN Server Parameter Files <span class="token punctuation">(</span>SPFILE<span class="token punctuation">)</span>                        <span class="token operator">|</span>
PROMPT <span class="token operator">|</span> Instance : <span class="token operator">&amp;</span>current_instance                                           <span class="token operator">|</span>
PROMPT <span class="token operator">|</span> Note     : Available automatic SPFILE files <span class="token keyword">within</span> <span class="token keyword">all</span> available       <span class="token operator">|</span>
PROMPT <span class="token operator">|</span>            <span class="token punctuation">(</span><span class="token operator">and</span> expired<span class="token punctuation">)</span> <span class="token keyword">backup</span> sets<span class="token punctuation">.</span>                                  <span class="token operator">|</span>
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> ECHO        <span class="token keyword">OFF</span>
<span class="token keyword">SET</span> FEEDBACK    <span class="token number">6</span>
<span class="token keyword">SET</span> HEADING     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> LINESIZE    <span class="token number">180</span>
<span class="token keyword">SET</span> PAGESIZE    <span class="token number">50000</span>
<span class="token keyword">SET</span> TERMOUT     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> TIMING      <span class="token keyword">OFF</span>
<span class="token keyword">SET</span> TRIMOUT     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> TRIMSPOOL   <span class="token keyword">ON</span>
<span class="token keyword">SET</span> VERIFY      <span class="token keyword">OFF</span>

CLEAR <span class="token keyword">COLUMNS</span>
CLEAR BREAKS
CLEAR COMPUTES

<span class="token keyword">COLUMN</span> bs_key                 FORMAT <span class="token number">9999</span>     HEADING <span class="token string">&#39;BS|Key&#39;</span>
<span class="token keyword">COLUMN</span> piece<span class="token comment">#                 FORMAT 99999    HEADING &#39;Piece|#&#39;</span>
<span class="token keyword">COLUMN</span> copy<span class="token comment">#                  FORMAT 9999     HEADING &#39;Copy|#&#39;</span>
<span class="token keyword">COLUMN</span> bp_key                 FORMAT <span class="token number">9999</span>     HEADING <span class="token string">&#39;BP|Key&#39;</span>
<span class="token keyword">COLUMN</span> spfile_included        FORMAT a11      HEADING <span class="token string">&#39;SPFILE|Included?&#39;</span>
<span class="token keyword">COLUMN</span> completion_time        FORMAT a20      HEADING <span class="token string">&#39;Completion|Time&#39;</span>
<span class="token keyword">COLUMN</span> <span class="token keyword">status</span>                 FORMAT a9       HEADING <span class="token string">&#39;Status&#39;</span>
<span class="token keyword">COLUMN</span> handle                 FORMAT a75      HEADING <span class="token string">&#39;Handle&#39;</span>

<span class="token keyword">BREAK</span> <span class="token keyword">ON</span> bs_key

<span class="token keyword">SELECT</span>
    bs<span class="token punctuation">.</span>recid                                               bs_key
  <span class="token punctuation">,</span> bp<span class="token punctuation">.</span>piece<span class="token comment">#                                              piece#</span>
  <span class="token punctuation">,</span> bp<span class="token punctuation">.</span>copy<span class="token comment">#                                               copy#</span>
  <span class="token punctuation">,</span> bp<span class="token punctuation">.</span>recid                                               bp_key
  <span class="token punctuation">,</span> sp<span class="token punctuation">.</span>spfile_included                                     spfile_included
  <span class="token punctuation">,</span> TO_CHAR<span class="token punctuation">(</span>bs<span class="token punctuation">.</span>completion_time<span class="token punctuation">,</span> <span class="token string">&#39;mm/dd/yyyy HH24:MI:SS&#39;</span><span class="token punctuation">)</span>   completion_time
  <span class="token punctuation">,</span> DECODE<span class="token punctuation">(</span>   <span class="token keyword">status</span>
            <span class="token punctuation">,</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Available&#39;</span>
            <span class="token punctuation">,</span> <span class="token string">&#39;D&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Deleted&#39;</span>
            <span class="token punctuation">,</span> <span class="token string">&#39;X&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Expired&#39;</span><span class="token punctuation">)</span>                              <span class="token keyword">status</span>
  <span class="token punctuation">,</span> handle                                                 handle
<span class="token keyword">FROM</span>
    v$backup_set                                           bs
  <span class="token punctuation">,</span> v$backup_piece                                         bp
  <span class="token punctuation">,</span>  <span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token keyword">distinct</span>
          set_stamp
        <span class="token punctuation">,</span> set_count
        <span class="token punctuation">,</span> <span class="token string">&#39;YES&#39;</span>     spfile_included
      <span class="token keyword">from</span> v$backup_spfile<span class="token punctuation">)</span>                                sp
<span class="token keyword">WHERE</span>
      bs<span class="token punctuation">.</span>set_stamp <span class="token operator">=</span> bp<span class="token punctuation">.</span>set_stamp
  <span class="token operator">AND</span> bs<span class="token punctuation">.</span>set_count <span class="token operator">=</span> bp<span class="token punctuation">.</span>set_count
  <span class="token operator">AND</span> bp<span class="token punctuation">.</span><span class="token keyword">status</span> <span class="token operator">IN</span> <span class="token punctuation">(</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;X&#39;</span><span class="token punctuation">)</span>
  <span class="token operator">AND</span> bs<span class="token punctuation">.</span>set_stamp <span class="token operator">=</span> sp<span class="token punctuation">.</span>set_stamp
  <span class="token operator">AND</span> bs<span class="token punctuation">.</span>set_count <span class="token operator">=</span> sp<span class="token punctuation">.</span>set_count
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
    bs<span class="token punctuation">.</span>recid
  <span class="token punctuation">,</span> piece<span class="token comment">#</span>
<span class="token operator">/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rollback-segments" tabindex="-1"><a class="header-anchor" href="#rollback-segments"><span>rollback segments</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- +----------------------------------------------------------------------------+</span>
<span class="token comment">-- |                          Jeffrey M. Hunter                                 |</span>
<span class="token comment">-- |                      jhunter@idevelopment.info                             |</span>
<span class="token comment">-- |                         www.idevelopment.info                              |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- |      Copyright (c) 1998-2015 Jeffrey M. Hunter. All rights reserved.       |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- | DATABASE : Oracle                                                          |</span>
<span class="token comment">-- | FILE     : rollback_segments.sql                                           |</span>
<span class="token comment">-- | CLASS    : Rollback Segments                                               |</span>
<span class="token comment">-- | PURPOSE  : Reports rollback statistic information including name, shrinks, |</span>
<span class="token comment">-- |            wraps, size and optimal size. This script is enabled to work    |</span>
<span class="token comment">-- |            with Oracle parallel server.                                    |</span>
<span class="token comment">-- | NOTE     : As with any code, ensure to test this script in a development   |</span>
<span class="token comment">-- |            environment before attempting to run it in production.          |</span>
<span class="token comment">-- +----------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> TERMOUT <span class="token keyword">OFF</span><span class="token punctuation">;</span>
<span class="token keyword">COLUMN</span> current_instance NEW_VALUE current_instance NOPRINT<span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> rpad<span class="token punctuation">(</span>instance_name<span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">)</span> current_instance <span class="token keyword">FROM</span> v$instance<span class="token punctuation">;</span>
<span class="token keyword">SET</span> TERMOUT <span class="token keyword">ON</span><span class="token punctuation">;</span>

PROMPT 
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>
PROMPT <span class="token operator">|</span> Report   : <span class="token keyword">Rollback</span> Segments                                           <span class="token operator">|</span>
PROMPT <span class="token operator">|</span> Instance : <span class="token operator">&amp;</span>current_instance                                           <span class="token operator">|</span>
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> ECHO        <span class="token keyword">OFF</span>
<span class="token keyword">SET</span> FEEDBACK    <span class="token number">6</span>
<span class="token keyword">SET</span> HEADING     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> LINESIZE    <span class="token number">180</span>
<span class="token keyword">SET</span> PAGESIZE    <span class="token number">50000</span>
<span class="token keyword">SET</span> TERMOUT     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> TIMING      <span class="token keyword">OFF</span>
<span class="token keyword">SET</span> TRIMOUT     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> TRIMSPOOL   <span class="token keyword">ON</span>
<span class="token keyword">SET</span> VERIFY      <span class="token keyword">OFF</span>

CLEAR <span class="token keyword">COLUMNS</span>
CLEAR BREAKS
CLEAR COMPUTES

<span class="token keyword">COLUMN</span> instance_name  FORMAT a9               HEADING <span class="token string">&#39;Instance&#39;</span>
<span class="token keyword">COLUMN</span> rollback_name  FORMAT a30              HEADING <span class="token string">&#39;Rollback Name&#39;</span>
<span class="token keyword">COLUMN</span> <span class="token keyword">tablespace</span>     FORMAT a11              HEADING <span class="token string">&#39;Tablspace&#39;</span>
<span class="token keyword">COLUMN</span> in_extents     FORMAT a23              HEADING <span class="token string">&#39;Init / Next Extents&#39;</span>
<span class="token keyword">COLUMN</span> m_extents      FORMAT a23              HEADING <span class="token string">&#39;Min / Max Extents&#39;</span>
<span class="token keyword">COLUMN</span> <span class="token keyword">status</span>         FORMAT a8               HEADING <span class="token string">&#39;Status&#39;</span>
<span class="token keyword">COLUMN</span> wraps          FORMAT <span class="token number">99</span><span class="token punctuation">,</span><span class="token number">999</span>           HEADING <span class="token string">&#39;Wraps&#39;</span> 
<span class="token keyword">COLUMN</span> shrinks        FORMAT <span class="token number">99</span><span class="token punctuation">,</span><span class="token number">999</span>           HEADING <span class="token string">&#39;Shrinks&#39;</span>
<span class="token keyword">COLUMN</span> opt            FORMAT <span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>  HEADING <span class="token string">&#39;Opt. Size&#39;</span>
<span class="token keyword">COLUMN</span> bytes          FORMAT <span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>  HEADING <span class="token string">&#39;Bytes&#39;</span>
<span class="token keyword">COLUMN</span> extents        FORMAT <span class="token number">999</span>              HEADING <span class="token string">&#39;Extents&#39;</span>

<span class="token keyword">BREAK</span> <span class="token keyword">ON</span> instance_name SKIP <span class="token number">2</span>

<span class="token keyword">COMPUTE</span> SUM LABEL <span class="token string">&#39;Total: &#39;</span> <span class="token keyword">OF</span> bytes <span class="token keyword">ON</span> instance_name

<span class="token keyword">SELECT</span>
    i<span class="token punctuation">.</span>instance_name                           instance_name
  <span class="token punctuation">,</span> a<span class="token punctuation">.</span>owner <span class="token operator">||</span> <span class="token string">&#39;.&#39;</span> <span class="token operator">||</span> a<span class="token punctuation">.</span>segment_name          rollback_name
  <span class="token punctuation">,</span> a<span class="token punctuation">.</span>tablespace_name                         <span class="token keyword">tablespace</span>
  <span class="token punctuation">,</span> TRIM<span class="token punctuation">(</span>TO_CHAR<span class="token punctuation">(</span>a<span class="token punctuation">.</span>initial_extent<span class="token punctuation">,</span> <span class="token string">&#39;999,999,999,999&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">&#39; / &#39;</span> <span class="token operator">||</span>
    TRIM<span class="token punctuation">(</span>TO_CHAR<span class="token punctuation">(</span>a<span class="token punctuation">.</span>next_extent<span class="token punctuation">,</span> <span class="token string">&#39;999,999,999,999&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>                    in_extents
  <span class="token punctuation">,</span> TRIM<span class="token punctuation">(</span>TO_CHAR<span class="token punctuation">(</span>a<span class="token punctuation">.</span>min_extents<span class="token punctuation">,</span> <span class="token string">&#39;999,999,999,999&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>    <span class="token operator">||</span> <span class="token string">&#39; / &#39;</span> <span class="token operator">||</span>
    TRIM<span class="token punctuation">(</span>TO_CHAR<span class="token punctuation">(</span>a<span class="token punctuation">.</span>max_extents<span class="token punctuation">,</span> <span class="token string">&#39;999,999,999,999&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>                    m_extents
  <span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token keyword">status</span>                                  <span class="token keyword">status</span>
  <span class="token punctuation">,</span> b<span class="token punctuation">.</span>bytes                                   bytes
  <span class="token punctuation">,</span> b<span class="token punctuation">.</span>extents                                 extents
  <span class="token punctuation">,</span> d<span class="token punctuation">.</span>shrinks                                 shrinks
  <span class="token punctuation">,</span> d<span class="token punctuation">.</span>wraps                                   wraps
  <span class="token punctuation">,</span> d<span class="token punctuation">.</span>optsize                                 opt
<span class="token keyword">FROM</span>
    gv$instance       i
  <span class="token punctuation">,</span> gv$rollstat       d
  <span class="token punctuation">,</span> sys<span class="token punctuation">.</span>undo$         c
  <span class="token punctuation">,</span> dba_rollback_segs a
  <span class="token punctuation">,</span> dba_segments      b
<span class="token keyword">WHERE</span>
      i<span class="token punctuation">.</span>inst_id      <span class="token operator">=</span> d<span class="token punctuation">.</span>inst_id
  <span class="token operator">AND</span> d<span class="token punctuation">.</span>usn          <span class="token operator">=</span> c<span class="token punctuation">.</span>us<span class="token comment">#</span>
  <span class="token operator">AND</span> a<span class="token punctuation">.</span>segment_name <span class="token operator">=</span> c<span class="token punctuation">.</span>name
  <span class="token operator">AND</span> a<span class="token punctuation">.</span>segment_name <span class="token operator">=</span> b<span class="token punctuation">.</span>segment_name
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
    i<span class="token punctuation">.</span>instance_name
  <span class="token punctuation">,</span> a<span class="token punctuation">.</span>segment_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="session-current-user-transaction" tabindex="-1"><a class="header-anchor" href="#session-current-user-transaction"><span>session current user transaction</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- +----------------------------------------------------------------------------+</span>
<span class="token comment">-- |                          Jeffrey M. Hunter                                 |</span>
<span class="token comment">-- |                      jhunter@idevelopment.info                             |</span>
<span class="token comment">-- |                         www.idevelopment.info                              |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- |      Copyright (c) 1998-2015 Jeffrey M. Hunter. All rights reserved.       |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- | DATABASE : Oracle                                                          |</span>
<span class="token comment">-- | FILE     : sess_current_user_transactions.sql                              |</span>
<span class="token comment">-- | CLASS    : Session Management                                              |</span>
<span class="token comment">-- | PURPOSE  : List table locking and current user transactions information.   |</span>
<span class="token comment">-- | NOTE     : As with any code, ensure to test this script in a development   |</span>
<span class="token comment">-- |            environment before attempting to run it in production.          |</span>
<span class="token comment">-- +----------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> TERMOUT <span class="token keyword">OFF</span><span class="token punctuation">;</span>
<span class="token keyword">COLUMN</span> current_instance NEW_VALUE current_instance NOPRINT<span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> rpad<span class="token punctuation">(</span>instance_name<span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">)</span> current_instance <span class="token keyword">FROM</span> v$instance<span class="token punctuation">;</span>
<span class="token keyword">SET</span> TERMOUT <span class="token keyword">ON</span><span class="token punctuation">;</span>

PROMPT 
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>
PROMPT <span class="token operator">|</span> Report   : <span class="token keyword">User</span> <span class="token keyword">Transactions</span>                                           <span class="token operator">|</span>
PROMPT <span class="token operator">|</span> Instance : <span class="token operator">&amp;</span>current_instance                                           <span class="token operator">|</span>
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> ECHO        <span class="token keyword">OFF</span>
<span class="token keyword">SET</span> FEEDBACK    <span class="token number">6</span>
<span class="token keyword">SET</span> HEADING     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> LINESIZE    <span class="token number">256</span>
<span class="token keyword">SET</span> PAGESIZE    <span class="token number">50000</span>
<span class="token keyword">SET</span> TERMOUT     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> TIMING      <span class="token keyword">OFF</span>
<span class="token keyword">SET</span> TRIMOUT     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> TRIMSPOOL   <span class="token keyword">ON</span>
<span class="token keyword">SET</span> VERIFY      <span class="token keyword">OFF</span>

CLEAR <span class="token keyword">COLUMNS</span>
CLEAR BREAKS
CLEAR COMPUTES

<span class="token keyword">COLUMN</span> sid                FORMAT <span class="token number">999999</span>     HEADING <span class="token string">&#39;SID&#39;</span>
<span class="token keyword">COLUMN</span> serial_id          FORMAT <span class="token number">99999999</span>   HEADING <span class="token string">&#39;Serial ID&#39;</span>
<span class="token keyword">COLUMN</span> oracle_username    FORMAT a18        HEADING <span class="token string">&#39;Oracle User&#39;</span>
<span class="token keyword">COLUMN</span> logon_time         FORMAT a18        HEADING <span class="token string">&#39;Login Time&#39;</span>
<span class="token keyword">COLUMN</span> owner              FORMAT a20        HEADING <span class="token string">&#39;Owner&#39;</span>
<span class="token keyword">COLUMN</span> object_type        FORMAT a11        HEADING <span class="token string">&#39;Object Type&#39;</span>
<span class="token keyword">COLUMN</span> object_name        FORMAT a25        HEADING <span class="token string">&#39;Object Name&#39;</span>
<span class="token keyword">COLUMN</span> locked_mode        FORMAT a11        HEADING <span class="token string">&#39;Locked Mode&#39;</span>

prompt 
prompt <span class="token operator">+</span><span class="token comment">----------------------------------------------------+</span>
prompt <span class="token operator">|</span> <span class="token keyword">Table</span> Locking Information                          <span class="token operator">|</span>
prompt <span class="token operator">+</span><span class="token comment">----------------------------------------------------+</span>

<span class="token keyword">SELECT</span>
    a<span class="token punctuation">.</span>session_id                    sid
  <span class="token punctuation">,</span> c<span class="token punctuation">.</span><span class="token keyword">serial</span><span class="token comment">#                       serial_id</span>
  <span class="token punctuation">,</span> a<span class="token punctuation">.</span>oracle_username               oracle_username
  <span class="token punctuation">,</span> TO_CHAR<span class="token punctuation">(</span>
      c<span class="token punctuation">.</span>logon_time<span class="token punctuation">,</span><span class="token string">&#39;mm/dd/yy hh24:mi:ss&#39;</span>
    <span class="token punctuation">)</span>                               logon_time
  <span class="token punctuation">,</span> b<span class="token punctuation">.</span>owner                         owner
  <span class="token punctuation">,</span> b<span class="token punctuation">.</span>object_type                   object_type
  <span class="token punctuation">,</span> b<span class="token punctuation">.</span>object_name                   object_name
  <span class="token punctuation">,</span> DECODE<span class="token punctuation">(</span>
        a<span class="token punctuation">.</span>locked_mode
      <span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&#39;None&#39;</span>
      <span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;Null&#39;</span>
      <span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;Row-S&#39;</span>
      <span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;Row-X&#39;</span>
      <span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">&#39;Share&#39;</span>
      <span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">&#39;S/Row-X&#39;</span>
      <span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token string">&#39;Exclusive&#39;</span>
    <span class="token punctuation">)</span>                               locked_mode
<span class="token keyword">FROM</span>
    v$locked_object a
  <span class="token punctuation">,</span> dba_objects b
  <span class="token punctuation">,</span> v$<span class="token keyword">session</span> c
<span class="token keyword">WHERE</span>
      a<span class="token punctuation">.</span>object_id  <span class="token operator">=</span> b<span class="token punctuation">.</span>object_id
  <span class="token operator">AND</span> a<span class="token punctuation">.</span>session_id <span class="token operator">=</span> c<span class="token punctuation">.</span>sid
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
    b<span class="token punctuation">.</span>owner
  <span class="token punctuation">,</span> b<span class="token punctuation">.</span>object_type
  <span class="token punctuation">,</span> b<span class="token punctuation">.</span>object_name
<span class="token operator">/</span>


prompt 
prompt <span class="token operator">+</span><span class="token comment">----------------------------------------------------+</span>
prompt <span class="token operator">|</span> <span class="token keyword">User</span> <span class="token keyword">Transactions</span> Information                      <span class="token operator">|</span>
prompt <span class="token operator">+</span><span class="token comment">----------------------------------------------------+</span>


<span class="token keyword">COLUMN</span> sid                      FORMAT <span class="token number">999999</span>           HEADING <span class="token string">&#39;SID&#39;</span>
<span class="token keyword">COLUMN</span> serial_id                FORMAT <span class="token number">99999999</span>         HEADING <span class="token string">&#39;Serial ID&#39;</span>
<span class="token keyword">COLUMN</span> session_status           FORMAT a9               HEADING <span class="token string">&#39;Status&#39;</span>
<span class="token keyword">COLUMN</span> oracle_username          FORMAT a18              HEADING <span class="token string">&#39;Oracle User&#39;</span>
<span class="token keyword">COLUMN</span> os_username              FORMAT a18              HEADING <span class="token string">&#39;O/S User&#39;</span>
<span class="token keyword">COLUMN</span> os_pid                   FORMAT a8               HEADING <span class="token string">&#39;O/S PID&#39;</span>
<span class="token keyword">COLUMN</span> trnx_start_time          FORMAT a18              HEADING <span class="token string">&#39;Trnx Start Time&#39;</span>
<span class="token keyword">COLUMN</span> <span class="token keyword">current_time</span>             FORMAT a18              HEADING <span class="token string">&#39;Current Time&#39;</span>
<span class="token keyword">COLUMN</span> elapsed_time             FORMAT <span class="token number">999999999.99</span>     HEADING <span class="token string">&#39;Elapsed(mins)&#39;</span>
<span class="token keyword">COLUMN</span> undo_name                FORMAT a10              HEADING <span class="token string">&#39;Undo Name&#39;</span>             TRUNC
<span class="token keyword">COLUMN</span> number_of_undo_records   FORMAT <span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>  HEADING <span class="token string">&#39;# Undo Records&#39;</span>
<span class="token keyword">COLUMN</span> used_undo_blks           FORMAT     <span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>  HEADING <span class="token string">&#39;Used Undo Blks&#39;</span> 
<span class="token keyword">COLUMN</span> used_undo_size           FORMAT     <span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>  HEADING <span class="token string">&#39;Used Undo (MB)&#39;</span>
<span class="token keyword">COLUMN</span> logical_io_blks          FORMAT     <span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>  HEADING <span class="token string">&#39;Logical I/O (Blks)&#39;</span>
<span class="token keyword">COLUMN</span> logical_io_size          FORMAT <span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>  HEADING <span class="token string">&#39;Logical I/O (MB)&#39;</span> 
<span class="token keyword">COLUMN</span> physical_io_blks         FORMAT     <span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>  HEADING <span class="token string">&#39;Physical I/O (Blks)&#39;</span>
<span class="token keyword">COLUMN</span> physical_io_size         FORMAT <span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>  HEADING <span class="token string">&#39;Physical I/O (MB)&#39;</span>
<span class="token keyword">COLUMN</span> session_program          FORMAT a26              HEADING <span class="token string">&#39;Session Program&#39;</span>       TRUNC

<span class="token keyword">SELECT</span>
    s<span class="token punctuation">.</span>sid                               sid
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span><span class="token keyword">status</span>                            session_status
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span>username                          oracle_username
  <span class="token punctuation">,</span> p<span class="token punctuation">.</span>spid                              os_pid
  <span class="token punctuation">,</span> TO_CHAR<span class="token punctuation">(</span>
        TO_DATE<span class="token punctuation">(</span>
            b<span class="token punctuation">.</span>start_time
          <span class="token punctuation">,</span><span class="token string">&#39;mm/dd/yy hh24:mi:ss&#39;</span>
        <span class="token punctuation">)</span>
        <span class="token punctuation">,</span> <span class="token string">&#39;mm/dd/yy hh24:mi:ss&#39;</span>
    <span class="token punctuation">)</span>                                   trnx_start_time
  <span class="token punctuation">,</span> <span class="token function">ROUND</span><span class="token punctuation">(</span><span class="token number">60</span><span class="token operator">*</span><span class="token number">24</span><span class="token operator">*</span><span class="token punctuation">(</span>sysdate<span class="token operator">-</span>to_date<span class="token punctuation">(</span>b<span class="token punctuation">.</span>start_time<span class="token punctuation">,</span><span class="token string">&#39;mm/dd/yy hh24:mi:ss&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>  elapsed_time
  <span class="token punctuation">,</span> c<span class="token punctuation">.</span>segment_name                      undo_name
  <span class="token punctuation">,</span> b<span class="token punctuation">.</span>used_urec                         number_of_undo_records
  <span class="token punctuation">,</span> <span class="token punctuation">(</span>b<span class="token punctuation">.</span>used_ublk <span class="token operator">*</span> d<span class="token punctuation">.</span><span class="token keyword">value</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">1024</span><span class="token operator">/</span><span class="token number">1024</span>   used_undo_size
  <span class="token punctuation">,</span> <span class="token punctuation">(</span>b<span class="token punctuation">.</span>log_io<span class="token operator">*</span>d<span class="token punctuation">.</span><span class="token keyword">value</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">1024</span><span class="token operator">/</span><span class="token number">1024</span>        logical_io_size
  <span class="token punctuation">,</span> <span class="token punctuation">(</span>b<span class="token punctuation">.</span>phy_io<span class="token operator">*</span>d<span class="token punctuation">.</span><span class="token keyword">value</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">1024</span><span class="token operator">/</span><span class="token number">1024</span>        physical_io_size
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span>program                           session_program
<span class="token keyword">FROM</span>
    v$<span class="token keyword">session</span>         s
  <span class="token punctuation">,</span> v$<span class="token keyword">transaction</span>     b
  <span class="token punctuation">,</span> dba_rollback_segs c
  <span class="token punctuation">,</span> v$parameter       d
  <span class="token punctuation">,</span> v$process         p
<span class="token keyword">WHERE</span>
      b<span class="token punctuation">.</span>ses_addr <span class="token operator">=</span> s<span class="token punctuation">.</span>saddr
  <span class="token operator">AND</span> b<span class="token punctuation">.</span>xidusn   <span class="token operator">=</span> c<span class="token punctuation">.</span>segment_id
  <span class="token operator">AND</span> d<span class="token punctuation">.</span>name     <span class="token operator">=</span> <span class="token string">&#39;db_block_size&#39;</span>
  <span class="token operator">AND</span> p<span class="token punctuation">.</span>ADDR     <span class="token operator">=</span> s<span class="token punctuation">.</span>PADDR
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> <span class="token number">1</span>
<span class="token operator">/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="session-uncommited-transaction" tabindex="-1"><a class="header-anchor" href="#session-uncommited-transaction"><span>session uncommited transaction</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- +----------------------------------------------------------------------------+</span>
<span class="token comment">-- |                          Jeffrey M. Hunter                                 |</span>
<span class="token comment">-- |                      jhunter@idevelopment.info                             |</span>
<span class="token comment">-- |                         www.idevelopment.info                              |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- |      Copyright (c) 1998-2015 Jeffrey M. Hunter. All rights reserved.       |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- | DATABASE : Oracle                                                          |</span>
<span class="token comment">-- | FILE     : sess_uncommited_transactions.sql                                |</span>
<span class="token comment">-- | CLASS    : Session Management                                              |</span>
<span class="token comment">-- | PURPOSE  : Query all users with uncommited transactions.                   |</span>
<span class="token comment">-- | NOTE     : As with any code, ensure to test this script in a development   |</span>
<span class="token comment">-- |            environment before attempting to run it in production.          |</span>
<span class="token comment">-- +----------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> TERMOUT <span class="token keyword">OFF</span><span class="token punctuation">;</span>
<span class="token keyword">COLUMN</span> current_instance NEW_VALUE current_instance NOPRINT<span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> rpad<span class="token punctuation">(</span>instance_name<span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">)</span> current_instance <span class="token keyword">FROM</span> v$instance<span class="token punctuation">;</span>
<span class="token keyword">SET</span> TERMOUT <span class="token keyword">ON</span><span class="token punctuation">;</span>

PROMPT 
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>
PROMPT <span class="token operator">|</span> Report   : Uncommited <span class="token keyword">Transactions</span>                                     <span class="token operator">|</span>
PROMPT <span class="token operator">|</span> Instance : <span class="token operator">&amp;</span>current_instance                                           <span class="token operator">|</span>
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> ECHO        <span class="token keyword">OFF</span>
<span class="token keyword">SET</span> FEEDBACK    <span class="token number">6</span>
<span class="token keyword">SET</span> HEADING     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> LINESIZE    <span class="token number">180</span>
<span class="token keyword">SET</span> PAGESIZE    <span class="token number">50000</span>
<span class="token keyword">SET</span> TERMOUT     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> TIMING      <span class="token keyword">OFF</span>
<span class="token keyword">SET</span> TRIMOUT     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> TRIMSPOOL   <span class="token keyword">ON</span>
<span class="token keyword">SET</span> VERIFY      <span class="token keyword">OFF</span>

CLEAR <span class="token keyword">COLUMNS</span>
CLEAR BREAKS
CLEAR COMPUTES

<span class="token keyword">COLUMN</span> sid                      FORMAT <span class="token number">999999</span>           HEADING <span class="token string">&#39;SID&#39;</span>
<span class="token keyword">COLUMN</span> serial_id                FORMAT <span class="token number">99999999</span>         HEADING <span class="token string">&#39;Serial ID&#39;</span>
<span class="token keyword">COLUMN</span> session_status           FORMAT a9               HEADING <span class="token string">&#39;Status&#39;</span>
<span class="token keyword">COLUMN</span> oracle_username          FORMAT a18              HEADING <span class="token string">&#39;Oracle User&#39;</span>
<span class="token keyword">COLUMN</span> os_username              FORMAT a18              HEADING <span class="token string">&#39;O/S User&#39;</span>
<span class="token keyword">COLUMN</span> os_pid                   FORMAT a8               HEADING <span class="token string">&#39;O/S PID&#39;</span>
<span class="token keyword">COLUMN</span> session_program          FORMAT a30              HEADING <span class="token string">&#39;Session Program&#39;</span>  TRUNC
<span class="token keyword">COLUMN</span> session_machine          FORMAT a30              HEADING <span class="token string">&#39;Machine&#39;</span>          TRUNC
<span class="token keyword">COLUMN</span> number_of_undo_records   FORMAT <span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>  HEADING <span class="token string">&quot;# Undo Records&quot;</span>
<span class="token keyword">COLUMN</span> used_undo_size           FORMAT     <span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>  HEADING  <span class="token string">&quot;Used Undo (MB)&quot;</span>

<span class="token keyword">SELECT</span>
    s<span class="token punctuation">.</span>sid                               sid
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span><span class="token keyword">status</span>                            session_status
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span>username                          oracle_username
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span>osuser                            os_username
  <span class="token punctuation">,</span> p<span class="token punctuation">.</span>spid                              os_pid
  <span class="token punctuation">,</span> b<span class="token punctuation">.</span>used_urec                         number_of_undo_records
  <span class="token punctuation">,</span> <span class="token punctuation">(</span>b<span class="token punctuation">.</span>used_ublk <span class="token operator">*</span> d<span class="token punctuation">.</span><span class="token keyword">value</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">1024</span><span class="token operator">/</span><span class="token number">1024</span>   used_undo_size
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span>program                           session_program
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span>machine                           session_machine
<span class="token keyword">FROM</span>
    v$process      p
  <span class="token punctuation">,</span> v$<span class="token keyword">session</span>      s
  <span class="token punctuation">,</span> v$<span class="token keyword">transaction</span>  b
  <span class="token punctuation">,</span> v$parameter    d
<span class="token keyword">WHERE</span>
      b<span class="token punctuation">.</span>ses_addr <span class="token operator">=</span>  s<span class="token punctuation">.</span>saddr
  <span class="token operator">AND</span> p<span class="token punctuation">.</span>addr <span class="token punctuation">(</span><span class="token operator">+</span><span class="token punctuation">)</span> <span class="token operator">=</span>  s<span class="token punctuation">.</span>paddr
  <span class="token operator">AND</span> s<span class="token punctuation">.</span>audsid   <span class="token operator">&lt;&gt;</span> userenv<span class="token punctuation">(</span><span class="token string">&#39;SESSIONID&#39;</span><span class="token punctuation">)</span>
  <span class="token operator">AND</span> d<span class="token punctuation">.</span>name     <span class="token operator">=</span>  <span class="token string">&#39;db_block_size&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="session-user-stats" tabindex="-1"><a class="header-anchor" href="#session-user-stats"><span>session user stats</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- +----------------------------------------------------------------------------+</span>
<span class="token comment">-- |                          Jeffrey M. Hunter                                 |</span>
<span class="token comment">-- |                      jhunter@idevelopment.info                             |</span>
<span class="token comment">-- |                         www.idevelopment.info                              |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- |      Copyright (c) 1998-2015 Jeffrey M. Hunter. All rights reserved.       |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- | DATABASE : Oracle                                                          |</span>
<span class="token comment">-- | FILE     : sess_user_stats.sql                                             |</span>
<span class="token comment">-- | CLASS    : Session Management                                              |</span>
<span class="token comment">-- | PURPOSE  : List all currently connected user sessions ordered by Logical   |</span>
<span class="token comment">-- |            I/O. This report contains all common statistics for each user   |</span>
<span class="token comment">-- |            connection.                                                     |</span>
<span class="token comment">-- | NOTE     : As with any code, ensure to test this script in a development   |</span>
<span class="token comment">-- |            environment before attempting to run it in production.          |</span>
<span class="token comment">-- +----------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> TERMOUT <span class="token keyword">OFF</span><span class="token punctuation">;</span>
<span class="token keyword">COLUMN</span> current_instance NEW_VALUE current_instance NOPRINT<span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> rpad<span class="token punctuation">(</span>instance_name<span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">)</span> current_instance <span class="token keyword">FROM</span> v$instance<span class="token punctuation">;</span>
<span class="token keyword">SET</span> TERMOUT <span class="token keyword">ON</span><span class="token punctuation">;</span>

PROMPT 
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>
PROMPT <span class="token operator">|</span> Report   : <span class="token keyword">User</span> Sessions <span class="token operator">and</span> <span class="token keyword">Statistics</span> Ordered <span class="token keyword">by</span> Logical I<span class="token operator">/</span>O         <span class="token operator">|</span>
PROMPT <span class="token operator">|</span> Instance : <span class="token operator">&amp;</span>current_instance                                           <span class="token operator">|</span>
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> ECHO        <span class="token keyword">OFF</span>
<span class="token keyword">SET</span> FEEDBACK    <span class="token number">6</span>
<span class="token keyword">SET</span> HEADING     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> LINESIZE    <span class="token number">180</span>
<span class="token keyword">SET</span> PAGESIZE    <span class="token number">50000</span>
<span class="token keyword">SET</span> TERMOUT     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> TIMING      <span class="token keyword">OFF</span>
<span class="token keyword">SET</span> TRIMOUT     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> TRIMSPOOL   <span class="token keyword">ON</span>
<span class="token keyword">SET</span> VERIFY      <span class="token keyword">OFF</span>

CLEAR <span class="token keyword">COLUMNS</span>
CLEAR BREAKS
CLEAR COMPUTES

<span class="token keyword">COLUMN</span> sid                  FORMAT <span class="token number">999999</span>           HEADING <span class="token string">&#39;SID&#39;</span>
<span class="token keyword">COLUMN</span> session_status       FORMAT a9               HEADING <span class="token string">&#39;Status&#39;</span>
<span class="token keyword">COLUMN</span> oracle_username      FORMAT a18              HEADING <span class="token string">&#39;Oracle User&#39;</span>
<span class="token keyword">COLUMN</span> session_program      FORMAT a40              HEADING <span class="token string">&#39;Session Program&#39;</span>  TRUNC
<span class="token keyword">COLUMN</span> cpu_value            FORMAT <span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>      HEADING <span class="token string">&#39;CPU&#39;</span>
<span class="token keyword">COLUMN</span> logical_io           FORMAT <span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>  HEADING <span class="token string">&#39;Logical I/O&#39;</span>
<span class="token keyword">COLUMN</span> physical_reads       FORMAT <span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>  HEADING <span class="token string">&#39;Physical Reads&#39;</span>
<span class="token keyword">COLUMN</span> physical_writes      FORMAT <span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>  HEADING <span class="token string">&#39;Physical Writes&#39;</span>
<span class="token keyword">COLUMN</span> session_pga_memory   FORMAT <span class="token number">9</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>    HEADING <span class="token string">&#39;PGA Memory&#39;</span> 
<span class="token keyword">COLUMN</span> open_cursors         FORMAT <span class="token number">99</span><span class="token punctuation">,</span><span class="token number">999</span>           HEADING <span class="token string">&#39;Cursors&#39;</span>
<span class="token keyword">COLUMN</span> num_transactions     FORMAT <span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>          HEADING <span class="token string">&#39;Txns&#39;</span>

<span class="token keyword">SELECT</span>
    s<span class="token punctuation">.</span>sid                 sid
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span><span class="token keyword">status</span>              session_status
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span>username            oracle_username
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span>program             session_program
  <span class="token punctuation">,</span> sstat1<span class="token punctuation">.</span><span class="token keyword">value</span>          cpu_value
  <span class="token punctuation">,</span> sstat2<span class="token punctuation">.</span><span class="token keyword">value</span> <span class="token operator">+</span>
    sstat3<span class="token punctuation">.</span><span class="token keyword">value</span>          logical_io
  <span class="token punctuation">,</span> sstat4<span class="token punctuation">.</span><span class="token keyword">value</span>          physical_reads
  <span class="token punctuation">,</span> sstat5<span class="token punctuation">.</span><span class="token keyword">value</span>          physical_writes
  <span class="token punctuation">,</span> sstat6<span class="token punctuation">.</span><span class="token keyword">value</span>          session_pga_memory
  <span class="token punctuation">,</span> sstat7<span class="token punctuation">.</span><span class="token keyword">value</span>          open_cursors
  <span class="token punctuation">,</span> sstat8<span class="token punctuation">.</span><span class="token keyword">value</span>          num_transactions
<span class="token keyword">FROM</span> 
    v$process  p
  <span class="token punctuation">,</span> v$<span class="token keyword">session</span>  s
  <span class="token punctuation">,</span> v$sesstat  sstat1
  <span class="token punctuation">,</span> v$sesstat  sstat2
  <span class="token punctuation">,</span> v$sesstat  sstat3
  <span class="token punctuation">,</span> v$sesstat  sstat4
  <span class="token punctuation">,</span> v$sesstat  sstat5
  <span class="token punctuation">,</span> v$sesstat  sstat6
  <span class="token punctuation">,</span> v$sesstat  sstat7
  <span class="token punctuation">,</span> v$sesstat  sstat8
  <span class="token punctuation">,</span> v$statname statname1
  <span class="token punctuation">,</span> v$statname statname2
  <span class="token punctuation">,</span> v$statname statname3
  <span class="token punctuation">,</span> v$statname statname4
  <span class="token punctuation">,</span> v$statname statname5
  <span class="token punctuation">,</span> v$statname statname6
  <span class="token punctuation">,</span> v$statname statname7
  <span class="token punctuation">,</span> v$statname statname8
<span class="token keyword">WHERE</span>
      p<span class="token punctuation">.</span>addr <span class="token punctuation">(</span><span class="token operator">+</span><span class="token punctuation">)</span>            <span class="token operator">=</span> s<span class="token punctuation">.</span>paddr
  <span class="token operator">AND</span> s<span class="token punctuation">.</span>sid                 <span class="token operator">=</span> sstat1<span class="token punctuation">.</span>sid
  <span class="token operator">AND</span> s<span class="token punctuation">.</span>sid                 <span class="token operator">=</span> sstat2<span class="token punctuation">.</span>sid
  <span class="token operator">AND</span> s<span class="token punctuation">.</span>sid                 <span class="token operator">=</span> sstat3<span class="token punctuation">.</span>sid
  <span class="token operator">AND</span> s<span class="token punctuation">.</span>sid                 <span class="token operator">=</span> sstat4<span class="token punctuation">.</span>sid
  <span class="token operator">AND</span> s<span class="token punctuation">.</span>sid                 <span class="token operator">=</span> sstat5<span class="token punctuation">.</span>sid
  <span class="token operator">AND</span> s<span class="token punctuation">.</span>sid                 <span class="token operator">=</span> sstat6<span class="token punctuation">.</span>sid
  <span class="token operator">AND</span> s<span class="token punctuation">.</span>sid                 <span class="token operator">=</span> sstat7<span class="token punctuation">.</span>sid
  <span class="token operator">AND</span> s<span class="token punctuation">.</span>sid                 <span class="token operator">=</span> sstat8<span class="token punctuation">.</span>sid
  <span class="token operator">AND</span> statname1<span class="token punctuation">.</span>statistic<span class="token comment">#  = sstat1.statistic#</span>
  <span class="token operator">AND</span> statname2<span class="token punctuation">.</span>statistic<span class="token comment">#  = sstat2.statistic#</span>
  <span class="token operator">AND</span> statname3<span class="token punctuation">.</span>statistic<span class="token comment">#  = sstat3.statistic#</span>
  <span class="token operator">AND</span> statname4<span class="token punctuation">.</span>statistic<span class="token comment">#  = sstat4.statistic#</span>
  <span class="token operator">AND</span> statname5<span class="token punctuation">.</span>statistic<span class="token comment">#  = sstat5.statistic#</span>
  <span class="token operator">AND</span> statname6<span class="token punctuation">.</span>statistic<span class="token comment">#  = sstat6.statistic#</span>
  <span class="token operator">AND</span> statname7<span class="token punctuation">.</span>statistic<span class="token comment">#  = sstat7.statistic#</span>
  <span class="token operator">AND</span> statname8<span class="token punctuation">.</span>statistic<span class="token comment">#  = sstat8.statistic#</span>
  <span class="token operator">AND</span> statname1<span class="token punctuation">.</span>name        <span class="token operator">=</span> <span class="token string">&#39;CPU used by this session&#39;</span>
  <span class="token operator">AND</span> statname2<span class="token punctuation">.</span>name        <span class="token operator">=</span> <span class="token string">&#39;db block gets&#39;</span>
  <span class="token operator">AND</span> statname3<span class="token punctuation">.</span>name        <span class="token operator">=</span> <span class="token string">&#39;consistent gets&#39;</span>
  <span class="token operator">AND</span> statname4<span class="token punctuation">.</span>name        <span class="token operator">=</span> <span class="token string">&#39;physical reads&#39;</span>
  <span class="token operator">AND</span> statname5<span class="token punctuation">.</span>name        <span class="token operator">=</span> <span class="token string">&#39;physical writes&#39;</span>
  <span class="token operator">AND</span> statname6<span class="token punctuation">.</span>name        <span class="token operator">=</span> <span class="token string">&#39;session pga memory&#39;</span>
  <span class="token operator">AND</span> statname7<span class="token punctuation">.</span>name        <span class="token operator">=</span> <span class="token string">&#39;opened cursors current&#39;</span>
  <span class="token operator">AND</span> statname8<span class="token punctuation">.</span>name        <span class="token operator">=</span> <span class="token string">&#39;user commits&#39;</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> logical_io <span class="token keyword">DESC</span>
<span class="token operator">/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="user-trace-file" tabindex="-1"><a class="header-anchor" href="#user-trace-file"><span>user trace file</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- +----------------------------------------------------------------------------+</span>
<span class="token comment">-- |                          Jeffrey M. Hunter                                 |</span>
<span class="token comment">-- |                      jhunter@idevelopment.info                             |</span>
<span class="token comment">-- |                         www.idevelopment.info                              |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- |      Copyright (c) 1998-2015 Jeffrey M. Hunter. All rights reserved.       |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- | DATABASE : Oracle                                                          |</span>
<span class="token comment">-- | FILE     : sess_user_trace_file_location.sql                               |</span>
<span class="token comment">-- | CLASS    : Session Management                                              |</span>
<span class="token comment">-- | PURPOSE  : Oracle writes TRACE to the directory based on the value of your |</span>
<span class="token comment">-- |            &quot;user_dump_dest&quot; parameter in init.ora file. The trace files    |</span>
<span class="token comment">-- |            use the &quot;System Process ID&quot; as part of the file name to ensure  |</span>
<span class="token comment">-- |            a unique file for each user session. The following query helps  |</span>
<span class="token comment">-- |            the DBA to determine where the TRACE files will be written and  |</span>
<span class="token comment">-- |            the name of the file it would create for its particular         |</span>
<span class="token comment">-- |            session.                                                        |</span>
<span class="token comment">-- | NOTE     : As with any code, ensure to test this script in a development   |</span>
<span class="token comment">-- |            environment before attempting to run it in production.          |</span>
<span class="token comment">-- +----------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> TERMOUT <span class="token keyword">OFF</span><span class="token punctuation">;</span>
<span class="token keyword">COLUMN</span> current_instance NEW_VALUE current_instance NOPRINT<span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> rpad<span class="token punctuation">(</span>instance_name<span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">)</span> current_instance <span class="token keyword">FROM</span> v$instance<span class="token punctuation">;</span>
<span class="token keyword">SET</span> TERMOUT <span class="token keyword">ON</span><span class="token punctuation">;</span>

PROMPT 
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>
PROMPT <span class="token operator">|</span> Report   : <span class="token keyword">User</span> <span class="token keyword">Session</span> Trace <span class="token keyword">File</span> Location                            <span class="token operator">|</span>
PROMPT <span class="token operator">|</span> Instance : <span class="token operator">&amp;</span>current_instance                                           <span class="token operator">|</span>
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> ECHO        <span class="token keyword">OFF</span>
<span class="token keyword">SET</span> FEEDBACK    <span class="token number">6</span>
<span class="token keyword">SET</span> HEADING     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> LINESIZE    <span class="token number">180</span>
<span class="token keyword">SET</span> PAGESIZE    <span class="token number">50000</span>
<span class="token keyword">SET</span> TERMOUT     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> TIMING      <span class="token keyword">OFF</span>
<span class="token keyword">SET</span> TRIMOUT     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> TRIMSPOOL   <span class="token keyword">ON</span>
<span class="token keyword">SET</span> VERIFY      <span class="token keyword">OFF</span>

CLEAR <span class="token keyword">COLUMNS</span>
CLEAR BREAKS
CLEAR COMPUTES

<span class="token keyword">COLUMN</span> <span class="token string">&quot;Trace File Path&quot;</span> FORMAT a80 HEADING <span class="token string">&#39;Your trace file with path is:&#39;</span>

<span class="token keyword">SELECT</span>
    a<span class="token punctuation">.</span>trace_path <span class="token operator">||</span> <span class="token string">&#39; &gt; &#39;</span> <span class="token operator">||</span> b<span class="token punctuation">.</span>trace_file <span class="token string">&quot;Trace File Path&quot;</span>
<span class="token keyword">FROM</span>
    <span class="token punctuation">(</span>  <span class="token keyword">SELECT</span> <span class="token keyword">value</span> trace_path 
       <span class="token keyword">FROM</span>   v$parameter 
       <span class="token keyword">WHERE</span>  name<span class="token operator">=</span><span class="token string">&#39;user_dump_dest&#39;</span>
    <span class="token punctuation">)</span> a
  <span class="token punctuation">,</span> <span class="token punctuation">(</span>  <span class="token keyword">SELECT</span> c<span class="token punctuation">.</span>instance <span class="token operator">||</span> <span class="token string">&#39;_ora_&#39;</span> <span class="token operator">||</span> spid <span class="token operator">||</span><span class="token string">&#39;.trc&#39;</span> TRACE_FILE 
       <span class="token keyword">FROM</span>   v$process<span class="token punctuation">,</span>
              <span class="token punctuation">(</span><span class="token keyword">select</span> lower<span class="token punctuation">(</span>instance_name<span class="token punctuation">)</span> instance <span class="token keyword">from</span> v$instance<span class="token punctuation">)</span>  c
       <span class="token keyword">WHERE</span>  addr <span class="token operator">=</span> <span class="token punctuation">(</span> <span class="token keyword">SELECT</span> paddr 
                       <span class="token keyword">FROM</span> v$<span class="token keyword">session</span> 
                       <span class="token keyword">WHERE</span> <span class="token punctuation">(</span>audsid<span class="token punctuation">,</span> sid<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">(</span>  <span class="token keyword">SELECT</span>
                                                    sys_context<span class="token punctuation">(</span><span class="token string">&#39;USERENV&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;SESSIONID&#39;</span><span class="token punctuation">)</span>
                                                  <span class="token punctuation">,</span> sys_context<span class="token punctuation">(</span><span class="token string">&#39;USERENV&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;SID&#39;</span><span class="token punctuation">)</span> 
                                                <span class="token keyword">FROM</span> dual
                                              <span class="token punctuation">)</span>
                     <span class="token punctuation">)</span>
    <span class="token punctuation">)</span> b
<span class="token operator">/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="user-active-session" tabindex="-1"><a class="header-anchor" href="#user-active-session"><span>user active session</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
    i<span class="token punctuation">.</span>instance_name     instance_name
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span>sid               sid
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span><span class="token keyword">serial</span><span class="token comment">#           serial_id</span>
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span><span class="token keyword">status</span>            session_status
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span>username          oracle_username
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span>osuser            os_username
  <span class="token punctuation">,</span> p<span class="token punctuation">.</span>spid              os_pid
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span>terminal          session_terminal
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span>machine           session_machine
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span>program           session_program
<span class="token keyword">FROM</span>
             gv$<span class="token keyword">session</span>  s
  <span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> gv$process  p <span class="token keyword">ON</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span>paddr <span class="token operator">=</span> p<span class="token punctuation">.</span>addr <span class="token operator">AND</span> s<span class="token punctuation">.</span>inst_id <span class="token operator">=</span> p<span class="token punctuation">.</span>inst_id<span class="token punctuation">)</span>
  <span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> gv$instance i <span class="token keyword">ON</span> <span class="token punctuation">(</span>p<span class="token punctuation">.</span>inst_id <span class="token operator">=</span> i<span class="token punctuation">.</span>inst_id<span class="token punctuation">)</span>
<span class="token keyword">WHERE</span>
      s<span class="token punctuation">.</span><span class="token keyword">status</span> <span class="token operator">=</span> <span class="token string">&#39;ACTIVE&#39;</span>
  <span class="token operator">AND</span> s<span class="token punctuation">.</span>username <span class="token operator">IS</span> <span class="token operator">NOT</span> <span class="token boolean">null</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
    i<span class="token punctuation">.</span>instance_name
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span>sid<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="session-by-cpu" tabindex="-1"><a class="header-anchor" href="#session-by-cpu"><span>session by cpu</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- +----------------------------------------------------------------------------+</span>
<span class="token comment">-- |                          Jeffrey M. Hunter                                 |</span>
<span class="token comment">-- |                      jhunter@idevelopment.info                             |</span>
<span class="token comment">-- |                         www.idevelopment.info                              |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- |      Copyright (c) 1998-2015 Jeffrey M. Hunter. All rights reserved.       |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- | DATABASE : Oracle                                                          |</span>
<span class="token comment">-- | FILE     : sess_users_by_cpu.sql                                           |</span>
<span class="token comment">-- | CLASS    : Session Management                                              |</span>
<span class="token comment">-- | PURPOSE  : List all currently connected user sessions ordered by CPU time. |</span>
<span class="token comment">-- | NOTE     : As with any code, ensure to test this script in a development   |</span>
<span class="token comment">-- |            environment before attempting to run it in production.          |</span>
<span class="token comment">-- +----------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> TERMOUT <span class="token keyword">OFF</span><span class="token punctuation">;</span>
<span class="token keyword">COLUMN</span> current_instance NEW_VALUE current_instance NOPRINT<span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> rpad<span class="token punctuation">(</span>instance_name<span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">)</span> current_instance <span class="token keyword">FROM</span> v$instance<span class="token punctuation">;</span>
<span class="token keyword">SET</span> TERMOUT <span class="token keyword">ON</span><span class="token punctuation">;</span>

PROMPT 
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>
PROMPT <span class="token operator">|</span> Report   : <span class="token keyword">User</span> Sessions Ordered <span class="token keyword">by</span> CPU                                <span class="token operator">|</span>
PROMPT <span class="token operator">|</span> Instance : <span class="token operator">&amp;</span>current_instance                                           <span class="token operator">|</span>
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> ECHO        <span class="token keyword">OFF</span>
<span class="token keyword">SET</span> FEEDBACK    <span class="token number">6</span>
<span class="token keyword">SET</span> HEADING     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> LINESIZE    <span class="token number">180</span>
<span class="token keyword">SET</span> PAGESIZE    <span class="token number">50000</span>
<span class="token keyword">SET</span> TERMOUT     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> TIMING      <span class="token keyword">OFF</span>
<span class="token keyword">SET</span> TRIMOUT     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> TRIMSPOOL   <span class="token keyword">ON</span>
<span class="token keyword">SET</span> VERIFY      <span class="token keyword">OFF</span>

CLEAR <span class="token keyword">COLUMNS</span>
CLEAR BREAKS
CLEAR COMPUTES

<span class="token keyword">COLUMN</span> sid               FORMAT <span class="token number">999999</span>            HEADING <span class="token string">&#39;SID&#39;</span>
<span class="token keyword">COLUMN</span> serial_id         FORMAT <span class="token number">99999999</span>          HEADING <span class="token string">&#39;Serial ID&#39;</span>
<span class="token keyword">COLUMN</span> session_status    FORMAT a9                HEADING <span class="token string">&#39;Status&#39;</span>
<span class="token keyword">COLUMN</span> oracle_username   FORMAT a18               HEADING <span class="token string">&#39;Oracle User&#39;</span>
<span class="token keyword">COLUMN</span> os_username       FORMAT a18               HEADING <span class="token string">&#39;O/S User&#39;</span>
<span class="token keyword">COLUMN</span> os_pid            FORMAT a8                HEADING <span class="token string">&#39;O/S PID&#39;</span>
<span class="token keyword">COLUMN</span> session_machine   FORMAT a30               HEADING <span class="token string">&#39;Machine&#39;</span>          TRUNC
<span class="token keyword">COLUMN</span> session_program   FORMAT a40               HEADING <span class="token string">&#39;Session Program&#39;</span>  TRUNC
<span class="token keyword">COLUMN</span> cpu_value         FORMAT <span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>   HEADING <span class="token string">&#39;CPU&#39;</span>

<span class="token keyword">SELECT</span>
    s<span class="token punctuation">.</span>sid           sid
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span><span class="token keyword">serial</span><span class="token comment">#       serial_id</span>
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span><span class="token keyword">status</span>        session_status
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span>username      oracle_username
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span>osuser        os_username
  <span class="token punctuation">,</span> p<span class="token punctuation">.</span>spid          os_pid
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span>machine       session_machine
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span>program       session_program
  <span class="token punctuation">,</span> sstat<span class="token punctuation">.</span><span class="token keyword">value</span>     cpu_value
<span class="token keyword">FROM</span> 
    v$process  p
  <span class="token punctuation">,</span> v$<span class="token keyword">session</span>  s
  <span class="token punctuation">,</span> v$sesstat  sstat
  <span class="token punctuation">,</span> v$statname statname
<span class="token keyword">WHERE</span>
      p<span class="token punctuation">.</span>addr <span class="token punctuation">(</span><span class="token operator">+</span><span class="token punctuation">)</span>          <span class="token operator">=</span> s<span class="token punctuation">.</span>paddr
  <span class="token operator">AND</span> s<span class="token punctuation">.</span>sid               <span class="token operator">=</span> sstat<span class="token punctuation">.</span>sid
  <span class="token operator">AND</span> statname<span class="token punctuation">.</span>statistic<span class="token comment"># = sstat.statistic#</span>
  <span class="token operator">AND</span> statname<span class="token punctuation">.</span>name       <span class="token operator">=</span> <span class="token string">&#39;CPU used by this session&#39;</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> cpu_value <span class="token keyword">DESC</span>
<span class="token operator">/</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="session-by-cursor" tabindex="-1"><a class="header-anchor" href="#session-by-cursor"><span>session by cursor</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- +----------------------------------------------------------------------------+</span>
<span class="token comment">-- |                          Jeffrey M. Hunter                                 |</span>
<span class="token comment">-- |                      jhunter@idevelopment.info                             |</span>
<span class="token comment">-- |                         www.idevelopment.info                              |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- |      Copyright (c) 1998-2015 Jeffrey M. Hunter. All rights reserved.       |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- | DATABASE : Oracle                                                          |</span>
<span class="token comment">-- | FILE     : sess_users_by_cursors.sql                                       |</span>
<span class="token comment">-- | CLASS    : Session Management                                              |</span>
<span class="token comment">-- | PURPOSE  : List all currently connected user sessions ordered by the       |</span>
<span class="token comment">-- |            number of current open cursors within their session.            |</span>
<span class="token comment">-- | NOTE     : As with any code, ensure to test this script in a development   |</span>
<span class="token comment">-- |            environment before attempting to run it in production.          |</span>
<span class="token comment">-- +----------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> TERMOUT <span class="token keyword">OFF</span><span class="token punctuation">;</span>
<span class="token keyword">COLUMN</span> current_instance NEW_VALUE current_instance NOPRINT<span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> rpad<span class="token punctuation">(</span>instance_name<span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">)</span> current_instance <span class="token keyword">FROM</span> v$instance<span class="token punctuation">;</span>
<span class="token keyword">SET</span> TERMOUT <span class="token keyword">ON</span><span class="token punctuation">;</span>

PROMPT 
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>
PROMPT <span class="token operator">|</span> Report   : <span class="token keyword">User</span> Sessions Ordered <span class="token keyword">by</span> Number <span class="token keyword">of</span> <span class="token keyword">Open</span> Cursors             <span class="token operator">|</span>
PROMPT <span class="token operator">|</span> Instance : <span class="token operator">&amp;</span>current_instance                                           <span class="token operator">|</span>
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> ECHO        <span class="token keyword">OFF</span>
<span class="token keyword">SET</span> FEEDBACK    <span class="token number">6</span>
<span class="token keyword">SET</span> HEADING     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> LINESIZE    <span class="token number">180</span>
<span class="token keyword">SET</span> PAGESIZE    <span class="token number">50000</span>
<span class="token keyword">SET</span> TERMOUT     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> TIMING      <span class="token keyword">OFF</span>
<span class="token keyword">SET</span> TRIMOUT     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> TRIMSPOOL   <span class="token keyword">ON</span>
<span class="token keyword">SET</span> VERIFY      <span class="token keyword">OFF</span>

CLEAR <span class="token keyword">COLUMNS</span>
CLEAR BREAKS
CLEAR COMPUTES

<span class="token keyword">COLUMN</span> sid               FORMAT <span class="token number">999999</span>            HEADING <span class="token string">&#39;SID&#39;</span>
<span class="token keyword">COLUMN</span> serial_id         FORMAT <span class="token number">99999999</span>          HEADING <span class="token string">&#39;Serial ID&#39;</span>
<span class="token keyword">COLUMN</span> session_status    FORMAT a9                HEADING <span class="token string">&#39;Status&#39;</span>
<span class="token keyword">COLUMN</span> oracle_username   FORMAT a18               HEADING <span class="token string">&#39;Oracle User&#39;</span>
<span class="token keyword">COLUMN</span> os_username       FORMAT a18               HEADING <span class="token string">&#39;O/S User&#39;</span>
<span class="token keyword">COLUMN</span> os_pid            FORMAT a8                HEADING <span class="token string">&#39;O/S PID&#39;</span>
<span class="token keyword">COLUMN</span> session_machine   FORMAT a30               HEADING <span class="token string">&#39;Machine&#39;</span>          TRUNC
<span class="token keyword">COLUMN</span> session_program   FORMAT a40               HEADING <span class="token string">&#39;Session Program&#39;</span>  TRUNC
<span class="token keyword">COLUMN</span> open_cursors      FORMAT <span class="token number">99</span><span class="token punctuation">,</span><span class="token number">999</span>            HEADING <span class="token string">&#39;Open Cursors&#39;</span>
<span class="token keyword">COLUMN</span> open_pct          FORMAT <span class="token number">999</span>               HEADING <span class="token string">&#39;Open %&#39;</span>

<span class="token keyword">SELECT</span>
    s<span class="token punctuation">.</span>sid                             sid
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span><span class="token keyword">serial</span><span class="token comment">#                         serial_id</span>
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span><span class="token keyword">status</span>                          session_status
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span>username                        oracle_username
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span>osuser                          os_username
  <span class="token punctuation">,</span> p<span class="token punctuation">.</span>spid                            os_pid
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span>machine                         session_machine
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span>program                         session_program
  <span class="token punctuation">,</span> sstat<span class="token punctuation">.</span><span class="token keyword">value</span>                       open_cursors
  <span class="token punctuation">,</span> <span class="token function">ROUND</span><span class="token punctuation">(</span><span class="token punctuation">(</span>sstat<span class="token punctuation">.</span><span class="token keyword">value</span><span class="token operator">/</span>u<span class="token punctuation">.</span><span class="token keyword">value</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">100</span><span class="token punctuation">)</span>  open_pct
<span class="token keyword">FROM</span> 
    v$process  p
  <span class="token punctuation">,</span> v$<span class="token keyword">session</span>  s
  <span class="token punctuation">,</span> v$sesstat  sstat
  <span class="token punctuation">,</span> v$statname statname
  <span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">select</span> name<span class="token punctuation">,</span> <span class="token keyword">value</span>
     <span class="token keyword">from</span> v$parameter<span class="token punctuation">)</span> u
<span class="token keyword">WHERE</span>
      p<span class="token punctuation">.</span>addr <span class="token punctuation">(</span><span class="token operator">+</span><span class="token punctuation">)</span>          <span class="token operator">=</span> s<span class="token punctuation">.</span>paddr
  <span class="token operator">AND</span> s<span class="token punctuation">.</span>sid               <span class="token operator">=</span> sstat<span class="token punctuation">.</span>sid
  <span class="token operator">AND</span> statname<span class="token punctuation">.</span>statistic<span class="token comment"># = sstat.statistic#</span>
  <span class="token operator">AND</span> statname<span class="token punctuation">.</span>name       <span class="token operator">=</span> <span class="token string">&#39;opened cursors current&#39;</span>
  <span class="token operator">AND</span> u<span class="token punctuation">.</span>name              <span class="token operator">=</span> <span class="token string">&#39;open_cursors&#39;</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> open_cursors <span class="token keyword">DESC</span>
<span class="token operator">/</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="session-by-io" tabindex="-1"><a class="header-anchor" href="#session-by-io"><span>session by io</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- +----------------------------------------------------------------------------+</span>
<span class="token comment">-- |                          Jeffrey M. Hunter                                 |</span>
<span class="token comment">-- |                      jhunter@idevelopment.info                             |</span>
<span class="token comment">-- |                         www.idevelopment.info                              |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- |      Copyright (c) 1998-2015 Jeffrey M. Hunter. All rights reserved.       |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- | DATABASE : Oracle                                                          |</span>
<span class="token comment">-- | FILE     : sess_users_by_io.sql                                            |</span>
<span class="token comment">-- | CLASS    : Session Management                                              |</span>
<span class="token comment">-- | PURPOSE  : List all currently connected user sessions ordered by Logical   |</span>
<span class="token comment">-- |            I/O.                                                            |</span>
<span class="token comment">-- | NOTE     : As with any code, ensure to test this script in a development   |</span>
<span class="token comment">-- |            environment before attempting to run it in production.          |</span>
<span class="token comment">-- +----------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> TERMOUT <span class="token keyword">OFF</span><span class="token punctuation">;</span>
<span class="token keyword">COLUMN</span> current_instance NEW_VALUE current_instance NOPRINT<span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> rpad<span class="token punctuation">(</span>instance_name<span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">)</span> current_instance <span class="token keyword">FROM</span> v$instance<span class="token punctuation">;</span>
<span class="token keyword">SET</span> TERMOUT <span class="token keyword">ON</span><span class="token punctuation">;</span>

PROMPT 
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>
PROMPT <span class="token operator">|</span> Report   : <span class="token keyword">User</span> Sessions Ordered <span class="token keyword">by</span> Logical I<span class="token operator">/</span>O                        <span class="token operator">|</span>
PROMPT <span class="token operator">|</span> Instance : <span class="token operator">&amp;</span>current_instance                                           <span class="token operator">|</span>
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> ECHO        <span class="token keyword">OFF</span>
<span class="token keyword">SET</span> FEEDBACK    <span class="token number">6</span>
<span class="token keyword">SET</span> HEADING     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> LINESIZE    <span class="token number">180</span>
<span class="token keyword">SET</span> PAGESIZE    <span class="token number">50000</span>
<span class="token keyword">SET</span> TERMOUT     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> TIMING      <span class="token keyword">OFF</span>
<span class="token keyword">SET</span> TRIMOUT     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> TRIMSPOOL   <span class="token keyword">ON</span>
<span class="token keyword">SET</span> VERIFY      <span class="token keyword">OFF</span>

CLEAR <span class="token keyword">COLUMNS</span>
CLEAR BREAKS
CLEAR COMPUTES

<span class="token keyword">COLUMN</span> sid               FORMAT <span class="token number">999999</span>            HEADING <span class="token string">&#39;SID&#39;</span>
<span class="token keyword">COLUMN</span> serial_id         FORMAT <span class="token number">99999999</span>          HEADING <span class="token string">&#39;Serial ID&#39;</span>
<span class="token keyword">COLUMN</span> session_status    FORMAT a9                HEADING <span class="token string">&#39;Status&#39;</span>
<span class="token keyword">COLUMN</span> oracle_username   FORMAT a12               HEADING <span class="token string">&#39;Oracle User&#39;</span>
<span class="token keyword">COLUMN</span> os_username       FORMAT a12               HEADING <span class="token string">&#39;O/S User&#39;</span>
<span class="token keyword">COLUMN</span> os_pid            FORMAT a8                HEADING <span class="token string">&#39;O/S PID&#39;</span>
<span class="token keyword">COLUMN</span> session_machine   FORMAT a25               HEADING <span class="token string">&#39;Machine&#39;</span>          TRUNC
<span class="token keyword">COLUMN</span> session_program   FORMAT a40               HEADING <span class="token string">&#39;Session Program&#39;</span>  TRUNC
<span class="token keyword">COLUMN</span> logical_io        FORMAT <span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>   HEADING <span class="token string">&#39;Logical I/O&#39;</span>
<span class="token keyword">COLUMN</span> physical_reads    FORMAT <span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>   HEADING <span class="token string">&#39;Physical Reads&#39;</span>
<span class="token keyword">COLUMN</span> physical_writes   FORMAT <span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>   HEADING <span class="token string">&#39;Physical Writes&#39;</span>

<span class="token keyword">SELECT</span>
    s<span class="token punctuation">.</span>sid                 sid
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span><span class="token keyword">serial</span><span class="token comment">#             serial_id</span>
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span><span class="token keyword">status</span>              session_status
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span>username            oracle_username
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span>osuser              os_username
  <span class="token punctuation">,</span> p<span class="token punctuation">.</span>spid                os_pid
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span>machine             session_machine
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span>program             session_program
  <span class="token punctuation">,</span> sstat1<span class="token punctuation">.</span><span class="token keyword">value</span>
    <span class="token operator">+</span> sstat2<span class="token punctuation">.</span><span class="token keyword">value</span>        logical_io
  <span class="token punctuation">,</span> sstat3<span class="token punctuation">.</span><span class="token keyword">value</span>          physical_reads
  <span class="token punctuation">,</span> sstat4<span class="token punctuation">.</span><span class="token keyword">value</span>          physical_writes
<span class="token keyword">FROM</span> 
    v$process  p
  <span class="token punctuation">,</span> v$<span class="token keyword">session</span>  s
  <span class="token punctuation">,</span> v$sesstat  sstat1
  <span class="token punctuation">,</span> v$sesstat  sstat2
  <span class="token punctuation">,</span> v$sesstat  sstat3
  <span class="token punctuation">,</span> v$sesstat  sstat4
  <span class="token punctuation">,</span> v$statname statname1
  <span class="token punctuation">,</span> v$statname statname2
  <span class="token punctuation">,</span> v$statname statname3
  <span class="token punctuation">,</span> v$statname statname4
<span class="token keyword">WHERE</span>
      p<span class="token punctuation">.</span>addr <span class="token punctuation">(</span><span class="token operator">+</span><span class="token punctuation">)</span>            <span class="token operator">=</span> s<span class="token punctuation">.</span>paddr
  <span class="token operator">AND</span> s<span class="token punctuation">.</span>sid                 <span class="token operator">=</span> sstat1<span class="token punctuation">.</span>sid
  <span class="token operator">AND</span> s<span class="token punctuation">.</span>sid                 <span class="token operator">=</span> sstat2<span class="token punctuation">.</span>sid
  <span class="token operator">AND</span> s<span class="token punctuation">.</span>sid                 <span class="token operator">=</span> sstat3<span class="token punctuation">.</span>sid
  <span class="token operator">AND</span> s<span class="token punctuation">.</span>sid                 <span class="token operator">=</span> sstat4<span class="token punctuation">.</span>sid
  <span class="token operator">AND</span> statname1<span class="token punctuation">.</span>statistic<span class="token comment">#  = sstat1.statistic#</span>
  <span class="token operator">AND</span> statname2<span class="token punctuation">.</span>statistic<span class="token comment">#  = sstat2.statistic#</span>
  <span class="token operator">AND</span> statname3<span class="token punctuation">.</span>statistic<span class="token comment">#  = sstat3.statistic#</span>
  <span class="token operator">AND</span> statname4<span class="token punctuation">.</span>statistic<span class="token comment">#  = sstat4.statistic#</span>
  <span class="token operator">AND</span> statname1<span class="token punctuation">.</span>name        <span class="token operator">=</span> <span class="token string">&#39;db block gets&#39;</span>
  <span class="token operator">AND</span> statname2<span class="token punctuation">.</span>name        <span class="token operator">=</span> <span class="token string">&#39;consistent gets&#39;</span>
  <span class="token operator">AND</span> statname3<span class="token punctuation">.</span>name        <span class="token operator">=</span> <span class="token string">&#39;physical reads&#39;</span>
  <span class="token operator">AND</span> statname4<span class="token punctuation">.</span>name        <span class="token operator">=</span> <span class="token string">&#39;physical writes&#39;</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> logical_io <span class="token keyword">DESC</span>
<span class="token operator">/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="session-by-memory" tabindex="-1"><a class="header-anchor" href="#session-by-memory"><span>session by memory</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- +----------------------------------------------------------------------------+</span>
<span class="token comment">-- |                          Jeffrey M. Hunter                                 |</span>
<span class="token comment">-- |                      jhunter@idevelopment.info                             |</span>
<span class="token comment">-- |                         www.idevelopment.info                              |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- |      Copyright (c) 1998-2015 Jeffrey M. Hunter. All rights reserved.       |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- | DATABASE : Oracle                                                          |</span>
<span class="token comment">-- | FILE     : sess_users_by_memory.sql                                        |</span>
<span class="token comment">-- | CLASS    : Session Management                                              |</span>
<span class="token comment">-- | PURPOSE  : List all currently connected user sessions ordered by current   |</span>
<span class="token comment">-- |            PGA size.                                                       |</span>
<span class="token comment">-- | NOTE     : As with any code, ensure to test this script in a development   |</span>
<span class="token comment">-- |            environment before attempting to run it in production.          |</span>
<span class="token comment">-- +----------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> TERMOUT <span class="token keyword">OFF</span><span class="token punctuation">;</span>
<span class="token keyword">COLUMN</span> current_instance NEW_VALUE current_instance NOPRINT<span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> rpad<span class="token punctuation">(</span>instance_name<span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">)</span> current_instance <span class="token keyword">FROM</span> v$instance<span class="token punctuation">;</span>
<span class="token keyword">SET</span> TERMOUT <span class="token keyword">ON</span><span class="token punctuation">;</span>

PROMPT 
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>
PROMPT <span class="token operator">|</span> Report   : <span class="token keyword">User</span> Sessions Ordered <span class="token keyword">by</span> <span class="token keyword">Current</span> PGA Size                   <span class="token operator">|</span>
PROMPT <span class="token operator">|</span> Instance : <span class="token operator">&amp;</span>current_instance                                           <span class="token operator">|</span>
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> ECHO        <span class="token keyword">OFF</span>
<span class="token keyword">SET</span> FEEDBACK    <span class="token number">6</span>
<span class="token keyword">SET</span> HEADING     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> LINESIZE    <span class="token number">180</span>
<span class="token keyword">SET</span> PAGESIZE    <span class="token number">50000</span>
<span class="token keyword">SET</span> TERMOUT     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> TIMING      <span class="token keyword">OFF</span>
<span class="token keyword">SET</span> TRIMOUT     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> TRIMSPOOL   <span class="token keyword">ON</span>
<span class="token keyword">SET</span> VERIFY      <span class="token keyword">OFF</span>

CLEAR <span class="token keyword">COLUMNS</span>
CLEAR BREAKS
CLEAR COMPUTES

<span class="token keyword">COLUMN</span> sid                      FORMAT <span class="token number">999999</span>         HEADING <span class="token string">&#39;SID&#39;</span>
<span class="token keyword">COLUMN</span> serial_id                FORMAT <span class="token number">99999999</span>       HEADING <span class="token string">&#39;Serial ID&#39;</span>
<span class="token keyword">COLUMN</span> session_status           FORMAT a9             HEADING <span class="token string">&#39;Status&#39;</span>
<span class="token keyword">COLUMN</span> oracle_username          FORMAT a12            HEADING <span class="token string">&#39;Oracle User&#39;</span>
<span class="token keyword">COLUMN</span> os_username              FORMAT a12            HEADING <span class="token string">&#39;O/S User&#39;</span>
<span class="token keyword">COLUMN</span> os_pid                   FORMAT a8             HEADING <span class="token string">&#39;O/S PID&#39;</span>
<span class="token keyword">COLUMN</span> session_machine          FORMAT a20            HEADING <span class="token string">&#39;Machine&#39;</span>          TRUNC
<span class="token keyword">COLUMN</span> session_program          FORMAT a30            HEADING <span class="token string">&#39;Session Program&#39;</span>  TRUNC
<span class="token keyword">COLUMN</span> session_pga_memory       FORMAT <span class="token number">9</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>  HEADING <span class="token string">&#39;PGA Memory&#39;</span>
<span class="token keyword">COLUMN</span> session_pga_memory_max   FORMAT <span class="token number">9</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>  HEADING <span class="token string">&#39;PGA Memory Max&#39;</span>
<span class="token keyword">COLUMN</span> session_uga_memory       FORMAT <span class="token number">9</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>  HEADING <span class="token string">&#39;UGA Memory&#39;</span>
<span class="token keyword">COLUMN</span> session_uga_memory_max   FORMAT <span class="token number">9</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>  HEADING <span class="token string">&#39;UGA Memory MAX&#39;</span>

<span class="token keyword">SELECT</span>
    s<span class="token punctuation">.</span>sid             sid
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span><span class="token keyword">serial</span><span class="token comment">#         serial_id</span>
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span><span class="token keyword">status</span>          session_status
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span>username        oracle_username
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span>osuser          os_username
  <span class="token punctuation">,</span> p<span class="token punctuation">.</span>spid            os_pid
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span>machine         session_machine
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span>program         session_program
  <span class="token punctuation">,</span> sstat1<span class="token punctuation">.</span><span class="token keyword">value</span>      session_pga_memory
  <span class="token punctuation">,</span> sstat2<span class="token punctuation">.</span><span class="token keyword">value</span>      session_pga_memory_max
  <span class="token punctuation">,</span> sstat3<span class="token punctuation">.</span><span class="token keyword">value</span>      session_uga_memory
  <span class="token punctuation">,</span> sstat4<span class="token punctuation">.</span><span class="token keyword">value</span>      session_uga_memory_max
<span class="token keyword">FROM</span> 
    v$process  p
  <span class="token punctuation">,</span> v$<span class="token keyword">session</span>  s
  <span class="token punctuation">,</span> v$sesstat  sstat1
  <span class="token punctuation">,</span> v$sesstat  sstat2
  <span class="token punctuation">,</span> v$sesstat  sstat3
  <span class="token punctuation">,</span> v$sesstat  sstat4
  <span class="token punctuation">,</span> v$statname statname1
  <span class="token punctuation">,</span> v$statname statname2
  <span class="token punctuation">,</span> v$statname statname3
  <span class="token punctuation">,</span> v$statname statname4
<span class="token keyword">WHERE</span>
      p<span class="token punctuation">.</span>addr <span class="token punctuation">(</span><span class="token operator">+</span><span class="token punctuation">)</span>            <span class="token operator">=</span> s<span class="token punctuation">.</span>paddr
  <span class="token operator">AND</span> s<span class="token punctuation">.</span>sid                 <span class="token operator">=</span> sstat1<span class="token punctuation">.</span>sid
  <span class="token operator">AND</span> s<span class="token punctuation">.</span>sid                 <span class="token operator">=</span> sstat2<span class="token punctuation">.</span>sid
  <span class="token operator">AND</span> s<span class="token punctuation">.</span>sid                 <span class="token operator">=</span> sstat3<span class="token punctuation">.</span>sid
  <span class="token operator">AND</span> s<span class="token punctuation">.</span>sid                 <span class="token operator">=</span> sstat4<span class="token punctuation">.</span>sid
  <span class="token operator">AND</span> statname1<span class="token punctuation">.</span>statistic<span class="token comment">#  = sstat1.statistic#</span>
  <span class="token operator">AND</span> statname2<span class="token punctuation">.</span>statistic<span class="token comment">#  = sstat2.statistic#</span>
  <span class="token operator">AND</span> statname3<span class="token punctuation">.</span>statistic<span class="token comment">#  = sstat3.statistic#</span>
  <span class="token operator">AND</span> statname4<span class="token punctuation">.</span>statistic<span class="token comment">#  = sstat4.statistic#</span>
  <span class="token operator">AND</span> statname1<span class="token punctuation">.</span>name        <span class="token operator">=</span> <span class="token string">&#39;session pga memory&#39;</span>
  <span class="token operator">AND</span> statname2<span class="token punctuation">.</span>name        <span class="token operator">=</span> <span class="token string">&#39;session pga memory max&#39;</span>
  <span class="token operator">AND</span> statname3<span class="token punctuation">.</span>name        <span class="token operator">=</span> <span class="token string">&#39;session uga memory&#39;</span>
  <span class="token operator">AND</span> statname4<span class="token punctuation">.</span>name        <span class="token operator">=</span> <span class="token string">&#39;session uga memory max&#39;</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> session_pga_memory <span class="token keyword">DESC</span>
<span class="token operator">/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="session-by-transaction" tabindex="-1"><a class="header-anchor" href="#session-by-transaction"><span>session by transaction</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- +----------------------------------------------------------------------------+</span>
<span class="token comment">-- |                          Jeffrey M. Hunter                                 |</span>
<span class="token comment">-- |                      jhunter@idevelopment.info                             |</span>
<span class="token comment">-- |                         www.idevelopment.info                              |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- |      Copyright (c) 1998-2015 Jeffrey M. Hunter. All rights reserved.       |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- | DATABASE : Oracle                                                          |</span>
<span class="token comment">-- | FILE     : sess_users_by_transactions.sql                                  |</span>
<span class="token comment">-- | CLASS    : Session Management                                              |</span>
<span class="token comment">-- | PURPOSE  : List all currently connected user sessions ordered by the       |</span>
<span class="token comment">-- |            number of transactions.                                         |</span>
<span class="token comment">-- | NOTE     : As with any code, ensure to test this script in a development   |</span>
<span class="token comment">-- |            environment before attempting to run it in production.          |</span>
<span class="token comment">-- +----------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> TERMOUT <span class="token keyword">OFF</span><span class="token punctuation">;</span>
<span class="token keyword">COLUMN</span> current_instance NEW_VALUE current_instance NOPRINT<span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> rpad<span class="token punctuation">(</span>instance_name<span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">)</span> current_instance <span class="token keyword">FROM</span> v$instance<span class="token punctuation">;</span>
<span class="token keyword">SET</span> TERMOUT <span class="token keyword">ON</span><span class="token punctuation">;</span>

PROMPT 
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>
PROMPT <span class="token operator">|</span> Report   : <span class="token keyword">User</span> Sessions Ordered <span class="token keyword">by</span> Number <span class="token keyword">of</span> <span class="token keyword">Transactions</span>             <span class="token operator">|</span>
PROMPT <span class="token operator">|</span> Instance : <span class="token operator">&amp;</span>current_instance                                           <span class="token operator">|</span>
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> ECHO        <span class="token keyword">OFF</span>
<span class="token keyword">SET</span> FEEDBACK    <span class="token number">6</span>
<span class="token keyword">SET</span> HEADING     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> LINESIZE    <span class="token number">180</span>
<span class="token keyword">SET</span> PAGESIZE    <span class="token number">50000</span>
<span class="token keyword">SET</span> TERMOUT     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> TIMING      <span class="token keyword">OFF</span>
<span class="token keyword">SET</span> TRIMOUT     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> TRIMSPOOL   <span class="token keyword">ON</span>
<span class="token keyword">SET</span> VERIFY      <span class="token keyword">OFF</span>

CLEAR <span class="token keyword">COLUMNS</span>
CLEAR BREAKS
CLEAR COMPUTES

<span class="token keyword">COLUMN</span> sid               FORMAT <span class="token number">999999</span>            HEADING <span class="token string">&#39;SID&#39;</span>
<span class="token keyword">COLUMN</span> serial_id         FORMAT <span class="token number">99999999</span>          HEADING <span class="token string">&#39;Serial ID&#39;</span>
<span class="token keyword">COLUMN</span> session_status    FORMAT a9                HEADING <span class="token string">&#39;Status&#39;</span>
<span class="token keyword">COLUMN</span> oracle_username   FORMAT a18               HEADING <span class="token string">&#39;Oracle User&#39;</span>
<span class="token keyword">COLUMN</span> os_username       FORMAT a18               HEADING <span class="token string">&#39;O/S User&#39;</span>
<span class="token keyword">COLUMN</span> os_pid            FORMAT a8                HEADING <span class="token string">&#39;O/S PID&#39;</span>
<span class="token keyword">COLUMN</span> session_machine   FORMAT a30               HEADING <span class="token string">&#39;Machine&#39;</span>          TRUNC
<span class="token keyword">COLUMN</span> session_program   FORMAT a40               HEADING <span class="token string">&#39;Session Program&#39;</span>  TRUNC
<span class="token keyword">COLUMN</span> num_transactions  FORMAT <span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>   HEADING <span class="token string">&#39;# Transactions&#39;</span>

<span class="token keyword">SELECT</span>
    s<span class="token punctuation">.</span>sid             sid
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span><span class="token keyword">serial</span><span class="token comment">#         serial_id</span>
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span><span class="token keyword">status</span>          session_status
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span>username        oracle_username
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span>osuser          os_username
  <span class="token punctuation">,</span> p<span class="token punctuation">.</span>spid            os_pid
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span>machine         session_machine
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span>program         session_program
  <span class="token punctuation">,</span> sstat<span class="token punctuation">.</span><span class="token keyword">value</span>       num_transactions
<span class="token keyword">FROM</span> 
    v$process  p
  <span class="token punctuation">,</span> v$<span class="token keyword">session</span>  s
  <span class="token punctuation">,</span> v$sesstat  sstat
  <span class="token punctuation">,</span> v$statname statname
<span class="token keyword">WHERE</span>
      p<span class="token punctuation">.</span>addr <span class="token punctuation">(</span><span class="token operator">+</span><span class="token punctuation">)</span>           <span class="token operator">=</span> s<span class="token punctuation">.</span>paddr
  <span class="token operator">AND</span> s<span class="token punctuation">.</span>sid                <span class="token operator">=</span> sstat<span class="token punctuation">.</span>sid
  <span class="token operator">AND</span> statname<span class="token punctuation">.</span>statistic<span class="token comment">#  = sstat.statistic#</span>
  <span class="token operator">AND</span> statname<span class="token punctuation">.</span>name        <span class="token operator">=</span> <span class="token string">&#39;user commits&#39;</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> num_transactions <span class="token keyword">DESC</span>
<span class="token operator">/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="session-waiting" tabindex="-1"><a class="header-anchor" href="#session-waiting"><span>session waiting</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- +----------------------------------------------------------------------------+</span>
<span class="token comment">-- |                          Jeffrey M. Hunter                                 |</span>
<span class="token comment">-- |                      jhunter@idevelopment.info                             |</span>
<span class="token comment">-- |                         www.idevelopment.info                              |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- |      Copyright (c) 1998-2015 Jeffrey M. Hunter. All rights reserved.       |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- | DATABASE : Oracle                                                          |</span>
<span class="token comment">-- | FILE     : sess_waiting.sql                                                |</span>
<span class="token comment">-- | CLASS    : Session Management                                              |</span>
<span class="token comment">-- | PURPOSE  : This script produces a report of the top sessions that have     |</span>
<span class="token comment">-- |            waited (the entries at top have waited the longest) for         |</span>
<span class="token comment">-- |            non-idle wait events (event column). The Oracle Server          |</span>
<span class="token comment">-- |            Reference Manual can be used to further diagnose the wait event |</span>
<span class="token comment">-- |            (along with its parameters). Metalink can also be used by       |</span>
<span class="token comment">-- |            supplying the event name in the search bar.                     |</span>
<span class="token comment">-- |                                                                            |</span>
<span class="token comment">-- |            The INST_ID column shows the instance where the session resides |</span>
<span class="token comment">-- |            and the SID is the unique identifier for the session            |</span>
<span class="token comment">-- |            (gv$session). The p1, p2, and p3 columns will show event        |</span>
<span class="token comment">-- |            specific information that may be important to debug the         |</span>
<span class="token comment">-- |            problem.                                                        |</span>
<span class="token comment">-- | EXAMPLE  : For example, you can search Metalink by supplying the event     |</span>
<span class="token comment">-- | METALINK : name (surrounded by single quotes) as in the following example: |</span>
<span class="token comment">-- | SEARCH   :                                                                 |</span>
<span class="token comment">-- |                          [ &#39;Sync ASM rebalance&#39; ]                          |</span>
<span class="token comment">-- | NOTE     : As with any code, ensure to test this script in a development   |</span>
<span class="token comment">-- |            environment before attempting to run it in production.          |</span>
<span class="token comment">-- +----------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> TERMOUT <span class="token keyword">OFF</span><span class="token punctuation">;</span>
<span class="token keyword">COLUMN</span> current_instance NEW_VALUE current_instance NOPRINT<span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> rpad<span class="token punctuation">(</span>instance_name<span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">)</span> current_instance <span class="token keyword">FROM</span> v$instance<span class="token punctuation">;</span>
<span class="token keyword">SET</span> TERMOUT <span class="token keyword">ON</span><span class="token punctuation">;</span>

PROMPT 
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>
PROMPT <span class="token operator">|</span> Report   : <span class="token keyword">Session</span> Waits                                               <span class="token operator">|</span>
PROMPT <span class="token operator">|</span> Instance : <span class="token operator">&amp;</span>current_instance                                           <span class="token operator">|</span>
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> ECHO        <span class="token keyword">OFF</span>
<span class="token keyword">SET</span> FEEDBACK    <span class="token number">6</span>
<span class="token keyword">SET</span> HEADING     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> LINESIZE    <span class="token number">180</span>
<span class="token keyword">SET</span> PAGESIZE    <span class="token number">50000</span>
<span class="token keyword">SET</span> TERMOUT     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> TIMING      <span class="token keyword">OFF</span>
<span class="token keyword">SET</span> TRIMOUT     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> TRIMSPOOL   <span class="token keyword">ON</span>
<span class="token keyword">SET</span> VERIFY      <span class="token keyword">OFF</span>

CLEAR <span class="token keyword">COLUMNS</span>
CLEAR BREAKS
CLEAR COMPUTES

<span class="token keyword">COLUMN</span> instance_name     FORMAT a9            HEADING <span class="token string">&#39;Instance&#39;</span>
<span class="token keyword">COLUMN</span> sid               FORMAT <span class="token number">999999</span>        HEADING <span class="token string">&#39;SID&#39;</span>
<span class="token keyword">COLUMN</span> serial_id         FORMAT <span class="token number">99999999</span>      HEADING <span class="token string">&#39;Serial ID&#39;</span>
<span class="token keyword">COLUMN</span> session_status    FORMAT a9            HEADING <span class="token string">&#39;Status&#39;</span>
<span class="token keyword">COLUMN</span> oracle_username   FORMAT a20           HEADING <span class="token string">&#39;Oracle User&#39;</span>
<span class="token keyword">COLUMN</span> state             FORMAT a8            HEADING <span class="token string">&#39;State&#39;</span>
<span class="token keyword">COLUMN</span> event             FORMAT a25           HEADING <span class="token string">&#39;Event&#39;</span>
<span class="token keyword">COLUMN</span> wait_time_sec     FORMAT <span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>   HEADING <span class="token string">&#39;Wait Time (sec)&#39;</span>
<span class="token keyword">COLUMN</span> last_sql          FORMAT a45           HEADING <span class="token string">&#39;Last SQL&#39;</span>

<span class="token keyword">SELECT</span>
    i<span class="token punctuation">.</span>instance_name                 instance_name
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span>sid                           sid
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span><span class="token keyword">serial</span><span class="token comment">#                       serial_id</span>
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span>username                      oracle_username
  <span class="token punctuation">,</span> sw<span class="token punctuation">.</span>state                        state
  <span class="token punctuation">,</span> sw<span class="token punctuation">.</span>event                        event
  <span class="token punctuation">,</span> sw<span class="token punctuation">.</span>seconds_in_wait              wait_time_sec
  <span class="token punctuation">,</span> sa<span class="token punctuation">.</span>sql_text                     last_sql
<span class="token keyword">FROM</span>
             gv$session_wait sw
  <span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> gv$<span class="token keyword">session</span> s   <span class="token keyword">ON</span>  <span class="token punctuation">(</span> sw<span class="token punctuation">.</span>inst_id <span class="token operator">=</span> s<span class="token punctuation">.</span>inst_id
                                  <span class="token operator">AND</span>
                                  sw<span class="token punctuation">.</span>sid     <span class="token operator">=</span> s<span class="token punctuation">.</span>sid
                                <span class="token punctuation">)</span>
  <span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> gv$sqlarea sa  <span class="token keyword">ON</span>  <span class="token punctuation">(</span> s<span class="token punctuation">.</span>inst_id     <span class="token operator">=</span> sa<span class="token punctuation">.</span>inst_id
                                  <span class="token operator">AND</span>
                                  s<span class="token punctuation">.</span>sql_address <span class="token operator">=</span> sa<span class="token punctuation">.</span>address
                                <span class="token punctuation">)</span>
  <span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> gv$instance i  <span class="token keyword">ON</span>  <span class="token punctuation">(</span> s<span class="token punctuation">.</span>inst_id <span class="token operator">=</span> i<span class="token punctuation">.</span>inst_id<span class="token punctuation">)</span>
<span class="token keyword">WHERE</span>
      sw<span class="token punctuation">.</span>event <span class="token operator">NOT</span> <span class="token operator">IN</span> <span class="token punctuation">(</span>   <span class="token string">&#39;rdbms ipc message&#39;</span>
                        <span class="token punctuation">,</span> <span class="token string">&#39;smon timer&#39;</span>
                        <span class="token punctuation">,</span> <span class="token string">&#39;pmon timer&#39;</span>
                        <span class="token punctuation">,</span> <span class="token string">&#39;SQL*Net message from client&#39;</span>
                        <span class="token punctuation">,</span> <span class="token string">&#39;lock manager wait for remote message&#39;</span>
                        <span class="token punctuation">,</span> <span class="token string">&#39;ges remote message&#39;</span>
                        <span class="token punctuation">,</span> <span class="token string">&#39;gcs remote message&#39;</span>
                        <span class="token punctuation">,</span> <span class="token string">&#39;gcs for action&#39;</span>
                        <span class="token punctuation">,</span> <span class="token string">&#39;client message&#39;</span>
                        <span class="token punctuation">,</span> <span class="token string">&#39;pipe get&#39;</span>
                        <span class="token punctuation">,</span> <span class="token string">&#39;null event&#39;</span>
                        <span class="token punctuation">,</span> <span class="token string">&#39;PX Idle Wait&#39;</span>
                        <span class="token punctuation">,</span> <span class="token string">&#39;single-task message&#39;</span>
                        <span class="token punctuation">,</span> <span class="token string">&#39;PX Deq: Execution Msg&#39;</span>
                        <span class="token punctuation">,</span> <span class="token string">&#39;KXFQ: kxfqdeq - normal deqeue&#39;</span>
                        <span class="token punctuation">,</span> <span class="token string">&#39;listen endpoint status&#39;</span>
                        <span class="token punctuation">,</span> <span class="token string">&#39;slave wait&#39;</span>
                        <span class="token punctuation">,</span> <span class="token string">&#39;wakeup time manager&#39;</span>
                      <span class="token punctuation">)</span>
  <span class="token operator">AND</span> sw<span class="token punctuation">.</span>seconds_in_wait <span class="token operator">&gt;</span> <span class="token number">0</span> 
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
    wait_time_sec <span class="token keyword">DESC</span>
  <span class="token punctuation">,</span> i<span class="token punctuation">.</span>instance_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="undo-contention" tabindex="-1"><a class="header-anchor" href="#undo-contention"><span>undo contention</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
    i<span class="token punctuation">.</span>instance_name                     instance_name
  <span class="token punctuation">,</span> w<span class="token punctuation">.</span>class                             class
  <span class="token punctuation">,</span> <span class="token function">ROUND</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token operator">*</span><span class="token punctuation">(</span>w<span class="token punctuation">.</span>count<span class="token operator">/</span><span class="token function">SUM</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token keyword">value</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">)</span> ratio
<span class="token keyword">FROM</span>
    gv$instance i
  <span class="token punctuation">,</span> gv$waitstat w
  <span class="token punctuation">,</span> gv$sysstat s
<span class="token keyword">WHERE</span>
      i<span class="token punctuation">.</span>inst_id <span class="token operator">=</span> w<span class="token punctuation">.</span>inst_id
  <span class="token operator">AND</span> i<span class="token punctuation">.</span>inst_id <span class="token operator">=</span> s<span class="token punctuation">.</span>inst_id
  <span class="token operator">AND</span> w<span class="token punctuation">.</span>class <span class="token operator">IN</span> <span class="token punctuation">(</span>  <span class="token string">&#39;system undo header&#39;</span>
                  <span class="token punctuation">,</span> <span class="token string">&#39;system undo block&#39;</span>
                  <span class="token punctuation">,</span> <span class="token string">&#39;undo header&#39;</span>
                  <span class="token punctuation">,</span> <span class="token string">&#39;undo block&#39;</span>
                 <span class="token punctuation">)</span>
  <span class="token operator">AND</span> s<span class="token punctuation">.</span>name <span class="token operator">IN</span> <span class="token punctuation">(</span><span class="token string">&#39;db block gets&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;consistent gets&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span>
    i<span class="token punctuation">.</span>instance_name
  <span class="token punctuation">,</span> w<span class="token punctuation">.</span>class
  <span class="token punctuation">,</span> w<span class="token punctuation">.</span>count
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
    i<span class="token punctuation">.</span>instance_name
  <span class="token punctuation">,</span> w<span class="token punctuation">.</span>class<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="top-sql-by-disk-read" tabindex="-1"><a class="header-anchor" href="#top-sql-by-disk-read"><span>top sql by disk read</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- +----------------------------------------------------------------------------+</span>
<span class="token comment">-- |                          Jeffrey M. Hunter                                 |</span>
<span class="token comment">-- |                      jhunter@idevelopment.info                             |</span>
<span class="token comment">-- |                         www.idevelopment.info                              |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- |      Copyright (c) 1998-2015 Jeffrey M. Hunter. All rights reserved.       |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- | DATABASE : Oracle                                                          |</span>
<span class="token comment">-- | FILE     : perf_top_sql_by_disk_reads.sql                                  |</span>
<span class="token comment">-- | CLASS    : Tuning                                                          |</span>
<span class="token comment">-- | PURPOSE  : Report on top SQL statements ordered by disk reads.             |</span>
<span class="token comment">-- | NOTE     : As with any code, ensure to test this script in a development   |</span>
<span class="token comment">-- |            environment before attempting to run it in production.          |</span>
<span class="token comment">-- +----------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> LINESIZE <span class="token number">145</span>
<span class="token keyword">SET</span> PAGESIZE <span class="token number">9999</span>
<span class="token keyword">SET</span> VERIFY   <span class="token keyword">off</span>

<span class="token keyword">COLUMN</span> username        FORMAT a18                  HEADING <span class="token string">&#39;Username&#39;</span>
<span class="token keyword">COLUMN</span> disk_reads      FORMAT <span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>  HEADING <span class="token string">&#39;Disk Reads&#39;</span>
<span class="token keyword">COLUMN</span> executions      FORMAT <span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>  HEADING <span class="token string">&#39;Executions&#39;</span>
<span class="token keyword">COLUMN</span> reads_per_exec  FORMAT <span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>  HEADING <span class="token string">&#39;Reads / Executions&#39;</span>
<span class="token keyword">COLUMN</span> <span class="token keyword">sql</span>                                         HEADING <span class="token string">&#39;SQL Statement&#39;</span>

<span class="token keyword">BREAK</span> <span class="token keyword">ON</span> report
<span class="token keyword">COMPUTE</span> sum <span class="token keyword">OF</span> disk_reads     <span class="token keyword">ON</span> report
<span class="token keyword">COMPUTE</span> sum <span class="token keyword">OF</span> executions     <span class="token keyword">ON</span> report
<span class="token keyword">COMPUTE</span> sum <span class="token keyword">OF</span> reads_per_exec <span class="token keyword">ON</span> report

prompt 
prompt <span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span>
prompt <span class="token keyword">SQL</span> <span class="token keyword">with</span> <span class="token keyword">disk</span> <span class="token keyword">reads</span> greater than <span class="token number">1000</span>
prompt <span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span>

<span class="token keyword">SELECT</span>
    UPPER<span class="token punctuation">(</span>b<span class="token punctuation">.</span>username<span class="token punctuation">)</span>                                       username
  <span class="token punctuation">,</span> a<span class="token punctuation">.</span>disk_reads                                            disk_reads
  <span class="token punctuation">,</span> a<span class="token punctuation">.</span>executions                                            executions
  <span class="token punctuation">,</span> a<span class="token punctuation">.</span>disk_reads <span class="token operator">/</span> decode<span class="token punctuation">(</span>a<span class="token punctuation">.</span>executions<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span>executions<span class="token punctuation">)</span> reads_per_exec
  <span class="token punctuation">,</span> sql_text <span class="token operator">||</span> chr<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">||</span> chr<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>                          <span class="token keyword">sql</span> 
<span class="token keyword">FROM</span> 
    sys<span class="token punctuation">.</span>v_$sqlarea a
  <span class="token punctuation">,</span> dba_users b
<span class="token keyword">WHERE</span>
      a<span class="token punctuation">.</span>parsing_user_id <span class="token operator">=</span> b<span class="token punctuation">.</span>user_id 
  <span class="token operator">AND</span> a<span class="token punctuation">.</span>disk_reads <span class="token operator">&gt;</span> <span class="token number">1000</span>
  <span class="token operator">AND</span> b<span class="token punctuation">.</span>username <span class="token operator">NOT</span> <span class="token operator">IN</span> <span class="token punctuation">(</span><span class="token string">&#39;SYS&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;SYSTEM&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
    disk_reads <span class="token keyword">desc</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="top-sql-by-buffer-gets" tabindex="-1"><a class="header-anchor" href="#top-sql-by-buffer-gets"><span>top sql by buffer gets</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- +----------------------------------------------------------------------------+</span>
<span class="token comment">-- |                          Jeffrey M. Hunter                                 |</span>
<span class="token comment">-- |                      jhunter@idevelopment.info                             |</span>
<span class="token comment">-- |                         www.idevelopment.info                              |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- |      Copyright (c) 1998-2015 Jeffrey M. Hunter. All rights reserved.       |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- | DATABASE : Oracle                                                          |</span>
<span class="token comment">-- | FILE     : perf_top_sql_by_buffer_gets.sql                                 |</span>
<span class="token comment">-- | CLASS    : Tuning                                                          |</span>
<span class="token comment">-- | PURPOSE  : Report on top SQL statements ordered by most buffer gets.       |</span>
<span class="token comment">-- | NOTE     : As with any code, ensure to test this script in a development   |</span>
<span class="token comment">-- |            environment before attempting to run it in production.          |</span>
<span class="token comment">-- +----------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> LINESIZE <span class="token number">145</span>
<span class="token keyword">SET</span> PAGESIZE <span class="token number">9999</span>
<span class="token keyword">SET</span> VERIFY   <span class="token keyword">off</span>

<span class="token keyword">COLUMN</span> username        FORMAT a18                  HEADING <span class="token string">&#39;Username&#39;</span>
<span class="token keyword">COLUMN</span> buffer_gets     FORMAT <span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>  HEADING <span class="token string">&#39;Buffer Gets&#39;</span>
<span class="token keyword">COLUMN</span> executions      FORMAT <span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>  HEADING <span class="token string">&#39;Executions&#39;</span>
<span class="token keyword">COLUMN</span> gets_per_exec   FORMAT <span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>  HEADING <span class="token string">&#39;Gets / Executions&#39;</span>
<span class="token keyword">COLUMN</span> <span class="token keyword">sql</span>                                         HEADING <span class="token string">&#39;SQL Statement&#39;</span>

<span class="token keyword">BREAK</span> <span class="token keyword">ON</span> report
<span class="token keyword">COMPUTE</span> sum <span class="token keyword">OF</span> buffer_gets    <span class="token keyword">ON</span> report
<span class="token keyword">COMPUTE</span> sum <span class="token keyword">OF</span> executions     <span class="token keyword">ON</span> report
<span class="token keyword">COMPUTE</span> sum <span class="token keyword">OF</span> gets_per_exec  <span class="token keyword">ON</span> report

prompt 
prompt <span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span>
prompt <span class="token keyword">SQL</span> <span class="token keyword">with</span> buffer gets greater than <span class="token number">1000</span>
prompt <span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span>


<span class="token keyword">SELECT</span>
    UPPER<span class="token punctuation">(</span>b<span class="token punctuation">.</span>username<span class="token punctuation">)</span>                                        username
  <span class="token punctuation">,</span> a<span class="token punctuation">.</span>buffer_gets                                            buffer_gets
  <span class="token punctuation">,</span> a<span class="token punctuation">.</span>executions                                             executions
  <span class="token punctuation">,</span> a<span class="token punctuation">.</span>buffer_gets <span class="token operator">/</span> decode<span class="token punctuation">(</span>a<span class="token punctuation">.</span>executions<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span>executions<span class="token punctuation">)</span> gets_per_exec
  <span class="token punctuation">,</span> sql_text <span class="token operator">||</span> chr<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">||</span> chr<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>                           <span class="token keyword">sql</span> 
<span class="token keyword">FROM</span> 
    sys<span class="token punctuation">.</span>v_$sqlarea a
  <span class="token punctuation">,</span> dba_users b
<span class="token keyword">WHERE</span>
      a<span class="token punctuation">.</span>parsing_user_id <span class="token operator">=</span> b<span class="token punctuation">.</span>user_id 
  <span class="token operator">AND</span> a<span class="token punctuation">.</span>buffer_gets <span class="token operator">&gt;</span> <span class="token number">1000</span>
  <span class="token operator">AND</span> b<span class="token punctuation">.</span>username <span class="token operator">NOT</span> <span class="token operator">IN</span> <span class="token punctuation">(</span><span class="token string">&#39;SYS&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;SYSTEM&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
    buffer_gets <span class="token keyword">desc</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="top-procedure" tabindex="-1"><a class="header-anchor" href="#top-procedure"><span>top procedure</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>
<span class="token keyword">SELECT</span>
    ptyp
  <span class="token punctuation">,</span> obj
  <span class="token punctuation">,</span> <span class="token number">0</span> <span class="token operator">-</span> exem noe
<span class="token keyword">FROM</span> <span class="token punctuation">(</span> <span class="token keyword">select</span> <span class="token keyword">distinct</span> exem<span class="token punctuation">,</span> ptyp<span class="token punctuation">,</span> obj  
       <span class="token keyword">from</span> <span class="token punctuation">(</span> <span class="token keyword">select</span>
                  o<span class="token punctuation">.</span><span class="token keyword">type</span>                    ptyp
                <span class="token punctuation">,</span> o<span class="token punctuation">.</span>owner <span class="token operator">||</span> <span class="token string">&#39;.&#39;</span> <span class="token operator">||</span> o<span class="token punctuation">.</span>name  obj
                <span class="token punctuation">,</span> <span class="token number">0</span> <span class="token operator">-</span> o<span class="token punctuation">.</span>executions          exem
              <span class="token keyword">from</span>  v$db_object_cache O 
              <span class="token keyword">where</span> o<span class="token punctuation">.</span><span class="token keyword">type</span> <span class="token operator">in</span> <span class="token punctuation">(</span><span class="token string">&#39;FUNCTION&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;PACKAGE&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;PACKAGE BODY&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;PROCEDURE&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;TRIGGER&#39;</span><span class="token punctuation">)</span>
	   <span class="token punctuation">)</span>
     <span class="token punctuation">)</span>
<span class="token keyword">WHERE</span> rownum <span class="token operator">&lt;=</span> <span class="token number">10</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="redo-contention" tabindex="-1"><a class="header-anchor" href="#redo-contention"><span>redo contention</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- +----------------------------------------------------------------------------+</span>
<span class="token comment">-- |                          Jeffrey M. Hunter                                 |</span>
<span class="token comment">-- |                      jhunter@idevelopment.info                             |</span>
<span class="token comment">-- |                         www.idevelopment.info                              |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- |      Copyright (c) 1998-2015 Jeffrey M. Hunter. All rights reserved.       |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- | DATABASE : Oracle                                                          |</span>
<span class="token comment">-- | FILE     : perf_redo_log_contention.sql                                    |</span>
<span class="token comment">-- | CLASS    : Tuning                                                          |</span>
<span class="token comment">-- | PURPOSE  : Report on overall redo log contention for the instance since    |</span>
<span class="token comment">-- |            the instance was last started.                                  |</span>
<span class="token comment">-- | NOTE     : As with any code, ensure to test this script in a development   |</span>
<span class="token comment">-- |            environment before attempting to run it in production.          |</span>
<span class="token comment">-- +----------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> LINESIZE <span class="token number">145</span>
<span class="token keyword">SET</span> PAGESIZE <span class="token number">9999</span>
<span class="token keyword">SET</span> VERIFY   <span class="token keyword">off</span>

prompt
prompt <span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span>
prompt Latches
prompt <span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span>
prompt 

<span class="token keyword">COLUMN</span> name             FORMAT a30           HEADING <span class="token string">&#39;Latch Name&#39;</span>
<span class="token keyword">COLUMN</span> gets             FORMAT <span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>   HEADING <span class="token string">&#39;Gets&#39;</span>
<span class="token keyword">COLUMN</span> misses           FORMAT <span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>   HEADING <span class="token string">&#39;Misses&#39;</span>
<span class="token keyword">COLUMN</span> sleeps           FORMAT <span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>   HEADING <span class="token string">&#39;Sleeps&#39;</span>
<span class="token keyword">COLUMN</span> immediate_gets   FORMAT <span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>   HEADING <span class="token string">&#39;Immediate Gets&#39;</span>
<span class="token keyword">COLUMN</span> immediate_misses FORMAT <span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>   HEADING <span class="token string">&#39;Immediate Misses&#39;</span>

<span class="token keyword">BREAK</span> <span class="token keyword">ON</span> report
<span class="token keyword">COMPUTE</span> SUM <span class="token keyword">OF</span> gets             <span class="token keyword">ON</span> report
<span class="token keyword">COMPUTE</span> SUM <span class="token keyword">OF</span> misses           <span class="token keyword">ON</span> report
<span class="token keyword">COMPUTE</span> SUM <span class="token keyword">OF</span> sleeps           <span class="token keyword">ON</span> report
<span class="token keyword">COMPUTE</span> SUM <span class="token keyword">OF</span> immediate_gets   <span class="token keyword">ON</span> report
<span class="token keyword">COMPUTE</span> SUM <span class="token keyword">OF</span> immediate_misses <span class="token keyword">ON</span> report

<span class="token keyword">SELECT</span> 
    INITCAP<span class="token punctuation">(</span>name<span class="token punctuation">)</span> name
  <span class="token punctuation">,</span> gets
  <span class="token punctuation">,</span> misses
  <span class="token punctuation">,</span> sleeps
  <span class="token punctuation">,</span> immediate_gets
  <span class="token punctuation">,</span> immediate_misses
<span class="token keyword">FROM</span>  sys<span class="token punctuation">.</span>v_$latch
<span class="token keyword">WHERE</span> name <span class="token operator">LIKE</span> <span class="token string">&#39;redo%&#39;</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> <span class="token number">1</span><span class="token punctuation">;</span>


prompt
prompt <span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span>
prompt System <span class="token keyword">Statistics</span>
prompt <span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span>
prompt

<span class="token keyword">COLUMN</span> name    FORMAT a30               HEADING <span class="token string">&#39;Statistics Name&#39;</span>
<span class="token keyword">COLUMN</span> <span class="token keyword">value</span>   FORMAT <span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>   HEADING <span class="token string">&#39;Value&#39;</span>

<span class="token keyword">SELECT</span>
    name
  <span class="token punctuation">,</span> <span class="token keyword">value</span>
<span class="token keyword">FROM</span>
    v$sysstat
<span class="token keyword">WHERE</span>
    name <span class="token operator">LIKE</span> <span class="token string">&#39;redo%&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="lru-latch-contention" tabindex="-1"><a class="header-anchor" href="#lru-latch-contention"><span>lru latch contention</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- +----------------------------------------------------------------------------+</span>
<span class="token comment">-- |                          Jeffrey M. Hunter                                 |</span>
<span class="token comment">-- |                      jhunter@idevelopment.info                             |</span>
<span class="token comment">-- |                         www.idevelopment.info                              |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- |      Copyright (c) 1998-2015 Jeffrey M. Hunter. All rights reserved.       |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- | DATABASE : Oracle                                                          |</span>
<span class="token comment">-- | FILE     : perf_lru_latch_contention.sql                                   |</span>
<span class="token comment">-- | CLASS    : Tuning                                                          |</span>
<span class="token comment">-- | PURPOSE  : This script will detect latch contention in the db block buffer |</span>
<span class="token comment">-- |            LRU. The ratio of sleeps/gets should be &lt; 1%.                   |</span>
<span class="token comment">-- | NOTE     : As with any code, ensure to test this script in a development   |</span>
<span class="token comment">-- |            environment before attempting to run it in production.          |</span>
<span class="token comment">-- +----------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> LINESIZE <span class="token number">145</span>
<span class="token keyword">SET</span> PAGESIZE <span class="token number">9999</span>
<span class="token keyword">SET</span> VERIFY   <span class="token keyword">off</span>

<span class="token keyword">COLUMN</span> child_num           HEADING <span class="token string">&quot;Child Number&quot;</span>
<span class="token keyword">COLUMN</span> ratio_sleeps_gets   HEADING <span class="token string">&quot;Sleeps / Gets Ratio&quot;</span>
<span class="token keyword">COLUMN</span> ratio               HEADING <span class="token string">&quot;Ratio&quot;</span>

<span class="token keyword">SELECT</span>
    child<span class="token comment">#                             child_num</span>
  <span class="token punctuation">,</span> <span class="token function">ROUND</span><span class="token punctuation">(</span>sleeps<span class="token operator">/</span>gets <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>         ratio_sleeps_gets
  <span class="token punctuation">,</span> <span class="token function">ROUND</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">-</span> sleeps<span class="token operator">/</span>gets<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span> ratio
<span class="token keyword">FROM</span>
  v$latch_children
<span class="token keyword">WHERE</span>
  name <span class="token operator">=</span> <span class="token string">&#39;cache buffers lru chain&#39;</span>
<span class="token operator">/</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="log-switch-history-bytes-daily" tabindex="-1"><a class="header-anchor" href="#log-switch-history-bytes-daily"><span>log switch history bytes daily</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- +----------------------------------------------------------------------------+</span>
<span class="token comment">-- |                          Jeffrey M. Hunter                                 |</span>
<span class="token comment">-- |                      jhunter@idevelopment.info                             |</span>
<span class="token comment">-- |                         www.idevelopment.info                              |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- |      Copyright (c) 1998-2015 Jeffrey M. Hunter. All rights reserved.       |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- | DATABASE : Oracle                                                          |</span>
<span class="token comment">-- | FILE     : perf_log_switch_history_bytes_daily_all.sql                     |</span>
<span class="token comment">-- | CLASS    : Tuning                                                          |</span>
<span class="token comment">-- | PURPOSE  : Reports the amount of redo activity (in MB) each hour using     |</span>
<span class="token comment">-- |            the archived redo log size per switch. It will query all active |</span>
<span class="token comment">-- |            archived records from v$archived_log. This script can be used   |</span>
<span class="token comment">-- |            with Oracle 8 database or higher.                               |</span>
<span class="token comment">-- | NOTE     : As with any code, ensure to test this script in a development   |</span>
<span class="token comment">-- |            environment before attempting to run it in production.          |</span>
<span class="token comment">-- +----------------------------------------------------------------------------+</span>
<span class="token keyword">SET</span> LINESIZE <span class="token number">250</span>
<span class="token keyword">SET</span> PAGESIZE <span class="token number">9999</span>
<span class="token keyword">SET</span> TRIMSPOOL <span class="token keyword">ON</span>
<span class="token keyword">SET</span> VERIFY   <span class="token keyword">off</span>
<span class="token keyword">COLUMN</span> H00   FORMAT <span class="token number">99</span><span class="token punctuation">,</span><span class="token number">999</span>     HEADING <span class="token string">&#39;00&#39;</span>
<span class="token keyword">COLUMN</span> H01   FORMAT <span class="token number">99</span><span class="token punctuation">,</span><span class="token number">999</span>     HEADING <span class="token string">&#39;01&#39;</span>
<span class="token keyword">COLUMN</span> H02   FORMAT <span class="token number">99</span><span class="token punctuation">,</span><span class="token number">999</span>     HEADING <span class="token string">&#39;02&#39;</span>
<span class="token keyword">COLUMN</span> H03   FORMAT <span class="token number">99</span><span class="token punctuation">,</span><span class="token number">999</span>     HEADING <span class="token string">&#39;03&#39;</span>
<span class="token keyword">COLUMN</span> H04   FORMAT <span class="token number">99</span><span class="token punctuation">,</span><span class="token number">999</span>     HEADING <span class="token string">&#39;04&#39;</span>
<span class="token keyword">COLUMN</span> H05   FORMAT <span class="token number">99</span><span class="token punctuation">,</span><span class="token number">999</span>     HEADING <span class="token string">&#39;05&#39;</span>
<span class="token keyword">COLUMN</span> H06   FORMAT <span class="token number">99</span><span class="token punctuation">,</span><span class="token number">999</span>     HEADING <span class="token string">&#39;06&#39;</span>
<span class="token keyword">COLUMN</span> H07   FORMAT <span class="token number">99</span><span class="token punctuation">,</span><span class="token number">999</span>     HEADING <span class="token string">&#39;07&#39;</span>
<span class="token keyword">COLUMN</span> H08   FORMAT <span class="token number">99</span><span class="token punctuation">,</span><span class="token number">999</span>     HEADING <span class="token string">&#39;08&#39;</span>
<span class="token keyword">COLUMN</span> H09   FORMAT <span class="token number">99</span><span class="token punctuation">,</span><span class="token number">999</span>     HEADING <span class="token string">&#39;09&#39;</span>
<span class="token keyword">COLUMN</span> H10   FORMAT <span class="token number">99</span><span class="token punctuation">,</span><span class="token number">999</span>     HEADING <span class="token string">&#39;10&#39;</span>
<span class="token keyword">COLUMN</span> H11   FORMAT <span class="token number">99</span><span class="token punctuation">,</span><span class="token number">999</span>     HEADING <span class="token string">&#39;11&#39;</span>
<span class="token keyword">COLUMN</span> H12   FORMAT <span class="token number">99</span><span class="token punctuation">,</span><span class="token number">999</span>     HEADING <span class="token string">&#39;12&#39;</span>
<span class="token keyword">COLUMN</span> H13   FORMAT <span class="token number">99</span><span class="token punctuation">,</span><span class="token number">999</span>     HEADING <span class="token string">&#39;13&#39;</span>
<span class="token keyword">COLUMN</span> H14   FORMAT <span class="token number">99</span><span class="token punctuation">,</span><span class="token number">999</span>     HEADING <span class="token string">&#39;14&#39;</span>
<span class="token keyword">COLUMN</span> H15   FORMAT <span class="token number">99</span><span class="token punctuation">,</span><span class="token number">999</span>     HEADING <span class="token string">&#39;15&#39;</span>
<span class="token keyword">COLUMN</span> H16   FORMAT <span class="token number">99</span><span class="token punctuation">,</span><span class="token number">999</span>     HEADING <span class="token string">&#39;16&#39;</span>
<span class="token keyword">COLUMN</span> H17   FORMAT <span class="token number">99</span><span class="token punctuation">,</span><span class="token number">999</span>     HEADING <span class="token string">&#39;17&#39;</span>
<span class="token keyword">COLUMN</span> H18   FORMAT <span class="token number">99</span><span class="token punctuation">,</span><span class="token number">999</span>     HEADING <span class="token string">&#39;18&#39;</span>
<span class="token keyword">COLUMN</span> H19   FORMAT <span class="token number">99</span><span class="token punctuation">,</span><span class="token number">999</span>     HEADING <span class="token string">&#39;19&#39;</span>
<span class="token keyword">COLUMN</span> H20   FORMAT <span class="token number">99</span><span class="token punctuation">,</span><span class="token number">999</span>     HEADING <span class="token string">&#39;20&#39;</span>
<span class="token keyword">COLUMN</span> H21   FORMAT <span class="token number">99</span><span class="token punctuation">,</span><span class="token number">999</span>     HEADING <span class="token string">&#39;21&#39;</span>
<span class="token keyword">COLUMN</span> H22   FORMAT <span class="token number">99</span><span class="token punctuation">,</span><span class="token number">999</span>     HEADING <span class="token string">&#39;22&#39;</span>
<span class="token keyword">COLUMN</span> H23   FORMAT <span class="token number">99</span><span class="token punctuation">,</span><span class="token number">999</span>     HEADING <span class="token string">&#39;23&#39;</span>
<span class="token keyword">COLUMN</span> TOTAL FORMAT <span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>    HEADING <span class="token string">&#39;Total&#39;</span>
<span class="token keyword">SELECT</span>
    SUBSTR<span class="token punctuation">(</span>TO_CHAR<span class="token punctuation">(</span>first_time<span class="token punctuation">,</span> <span class="token string">&#39;MM/DD/RR HH:MI:SS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span>                                                               <span class="token keyword">DAY</span>
  <span class="token punctuation">,</span> <span class="token function">SUM</span><span class="token punctuation">(</span>DECODE<span class="token punctuation">(</span>SUBSTR<span class="token punctuation">(</span>TO_CHAR<span class="token punctuation">(</span>first_time<span class="token punctuation">,</span> <span class="token string">&#39;MM/DD/RR HH24:MI:SS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;00&#39;</span><span class="token punctuation">,</span><span class="token function">ROUND</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span>blocks<span class="token operator">*</span>block_size<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">1024</span><span class="token operator">/</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> H00
  <span class="token punctuation">,</span> <span class="token function">SUM</span><span class="token punctuation">(</span>DECODE<span class="token punctuation">(</span>SUBSTR<span class="token punctuation">(</span>TO_CHAR<span class="token punctuation">(</span>first_time<span class="token punctuation">,</span> <span class="token string">&#39;MM/DD/RR HH24:MI:SS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;01&#39;</span><span class="token punctuation">,</span><span class="token function">ROUND</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span>blocks<span class="token operator">*</span>block_size<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">1024</span><span class="token operator">/</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> H01
  <span class="token punctuation">,</span> <span class="token function">SUM</span><span class="token punctuation">(</span>DECODE<span class="token punctuation">(</span>SUBSTR<span class="token punctuation">(</span>TO_CHAR<span class="token punctuation">(</span>first_time<span class="token punctuation">,</span> <span class="token string">&#39;MM/DD/RR HH24:MI:SS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;02&#39;</span><span class="token punctuation">,</span><span class="token function">ROUND</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span>blocks<span class="token operator">*</span>block_size<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">1024</span><span class="token operator">/</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> H02
  <span class="token punctuation">,</span> <span class="token function">SUM</span><span class="token punctuation">(</span>DECODE<span class="token punctuation">(</span>SUBSTR<span class="token punctuation">(</span>TO_CHAR<span class="token punctuation">(</span>first_time<span class="token punctuation">,</span> <span class="token string">&#39;MM/DD/RR HH24:MI:SS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;03&#39;</span><span class="token punctuation">,</span><span class="token function">ROUND</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span>blocks<span class="token operator">*</span>block_size<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">1024</span><span class="token operator">/</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> H03
  <span class="token punctuation">,</span> <span class="token function">SUM</span><span class="token punctuation">(</span>DECODE<span class="token punctuation">(</span>SUBSTR<span class="token punctuation">(</span>TO_CHAR<span class="token punctuation">(</span>first_time<span class="token punctuation">,</span> <span class="token string">&#39;MM/DD/RR HH24:MI:SS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;04&#39;</span><span class="token punctuation">,</span><span class="token function">ROUND</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span>blocks<span class="token operator">*</span>block_size<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">1024</span><span class="token operator">/</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> H04
  <span class="token punctuation">,</span> <span class="token function">SUM</span><span class="token punctuation">(</span>DECODE<span class="token punctuation">(</span>SUBSTR<span class="token punctuation">(</span>TO_CHAR<span class="token punctuation">(</span>first_time<span class="token punctuation">,</span> <span class="token string">&#39;MM/DD/RR HH24:MI:SS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;05&#39;</span><span class="token punctuation">,</span><span class="token function">ROUND</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span>blocks<span class="token operator">*</span>block_size<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">1024</span><span class="token operator">/</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> H05
  <span class="token punctuation">,</span> <span class="token function">SUM</span><span class="token punctuation">(</span>DECODE<span class="token punctuation">(</span>SUBSTR<span class="token punctuation">(</span>TO_CHAR<span class="token punctuation">(</span>first_time<span class="token punctuation">,</span> <span class="token string">&#39;MM/DD/RR HH24:MI:SS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;06&#39;</span><span class="token punctuation">,</span><span class="token function">ROUND</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span>blocks<span class="token operator">*</span>block_size<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">1024</span><span class="token operator">/</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> H06
  <span class="token punctuation">,</span> <span class="token function">SUM</span><span class="token punctuation">(</span>DECODE<span class="token punctuation">(</span>SUBSTR<span class="token punctuation">(</span>TO_CHAR<span class="token punctuation">(</span>first_time<span class="token punctuation">,</span> <span class="token string">&#39;MM/DD/RR HH24:MI:SS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;07&#39;</span><span class="token punctuation">,</span><span class="token function">ROUND</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span>blocks<span class="token operator">*</span>block_size<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">1024</span><span class="token operator">/</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> H07
  <span class="token punctuation">,</span> <span class="token function">SUM</span><span class="token punctuation">(</span>DECODE<span class="token punctuation">(</span>SUBSTR<span class="token punctuation">(</span>TO_CHAR<span class="token punctuation">(</span>first_time<span class="token punctuation">,</span> <span class="token string">&#39;MM/DD/RR HH24:MI:SS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;08&#39;</span><span class="token punctuation">,</span><span class="token function">ROUND</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span>blocks<span class="token operator">*</span>block_size<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">1024</span><span class="token operator">/</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> H08
  <span class="token punctuation">,</span> <span class="token function">SUM</span><span class="token punctuation">(</span>DECODE<span class="token punctuation">(</span>SUBSTR<span class="token punctuation">(</span>TO_CHAR<span class="token punctuation">(</span>first_time<span class="token punctuation">,</span> <span class="token string">&#39;MM/DD/RR HH24:MI:SS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;09&#39;</span><span class="token punctuation">,</span><span class="token function">ROUND</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span>blocks<span class="token operator">*</span>block_size<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">1024</span><span class="token operator">/</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> H09
  <span class="token punctuation">,</span> <span class="token function">SUM</span><span class="token punctuation">(</span>DECODE<span class="token punctuation">(</span>SUBSTR<span class="token punctuation">(</span>TO_CHAR<span class="token punctuation">(</span>first_time<span class="token punctuation">,</span> <span class="token string">&#39;MM/DD/RR HH24:MI:SS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;10&#39;</span><span class="token punctuation">,</span><span class="token function">ROUND</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span>blocks<span class="token operator">*</span>block_size<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">1024</span><span class="token operator">/</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> H10
  <span class="token punctuation">,</span> <span class="token function">SUM</span><span class="token punctuation">(</span>DECODE<span class="token punctuation">(</span>SUBSTR<span class="token punctuation">(</span>TO_CHAR<span class="token punctuation">(</span>first_time<span class="token punctuation">,</span> <span class="token string">&#39;MM/DD/RR HH24:MI:SS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;11&#39;</span><span class="token punctuation">,</span><span class="token function">ROUND</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span>blocks<span class="token operator">*</span>block_size<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">1024</span><span class="token operator">/</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> H11
  <span class="token punctuation">,</span> <span class="token function">SUM</span><span class="token punctuation">(</span>DECODE<span class="token punctuation">(</span>SUBSTR<span class="token punctuation">(</span>TO_CHAR<span class="token punctuation">(</span>first_time<span class="token punctuation">,</span> <span class="token string">&#39;MM/DD/RR HH24:MI:SS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;12&#39;</span><span class="token punctuation">,</span><span class="token function">ROUND</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span>blocks<span class="token operator">*</span>block_size<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">1024</span><span class="token operator">/</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> H12
  <span class="token punctuation">,</span> <span class="token function">SUM</span><span class="token punctuation">(</span>DECODE<span class="token punctuation">(</span>SUBSTR<span class="token punctuation">(</span>TO_CHAR<span class="token punctuation">(</span>first_time<span class="token punctuation">,</span> <span class="token string">&#39;MM/DD/RR HH24:MI:SS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;13&#39;</span><span class="token punctuation">,</span><span class="token function">ROUND</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span>blocks<span class="token operator">*</span>block_size<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">1024</span><span class="token operator">/</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> H13
  <span class="token punctuation">,</span> <span class="token function">SUM</span><span class="token punctuation">(</span>DECODE<span class="token punctuation">(</span>SUBSTR<span class="token punctuation">(</span>TO_CHAR<span class="token punctuation">(</span>first_time<span class="token punctuation">,</span> <span class="token string">&#39;MM/DD/RR HH24:MI:SS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;14&#39;</span><span class="token punctuation">,</span><span class="token function">ROUND</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span>blocks<span class="token operator">*</span>block_size<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">1024</span><span class="token operator">/</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> H14
  <span class="token punctuation">,</span> <span class="token function">SUM</span><span class="token punctuation">(</span>DECODE<span class="token punctuation">(</span>SUBSTR<span class="token punctuation">(</span>TO_CHAR<span class="token punctuation">(</span>first_time<span class="token punctuation">,</span> <span class="token string">&#39;MM/DD/RR HH24:MI:SS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;15&#39;</span><span class="token punctuation">,</span><span class="token function">ROUND</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span>blocks<span class="token operator">*</span>block_size<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">1024</span><span class="token operator">/</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> H15
  <span class="token punctuation">,</span> <span class="token function">SUM</span><span class="token punctuation">(</span>DECODE<span class="token punctuation">(</span>SUBSTR<span class="token punctuation">(</span>TO_CHAR<span class="token punctuation">(</span>first_time<span class="token punctuation">,</span> <span class="token string">&#39;MM/DD/RR HH24:MI:SS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;16&#39;</span><span class="token punctuation">,</span><span class="token function">ROUND</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span>blocks<span class="token operator">*</span>block_size<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">1024</span><span class="token operator">/</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> H16
  <span class="token punctuation">,</span> <span class="token function">SUM</span><span class="token punctuation">(</span>DECODE<span class="token punctuation">(</span>SUBSTR<span class="token punctuation">(</span>TO_CHAR<span class="token punctuation">(</span>first_time<span class="token punctuation">,</span> <span class="token string">&#39;MM/DD/RR HH24:MI:SS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;17&#39;</span><span class="token punctuation">,</span><span class="token function">ROUND</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span>blocks<span class="token operator">*</span>block_size<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">1024</span><span class="token operator">/</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> H17
  <span class="token punctuation">,</span> <span class="token function">SUM</span><span class="token punctuation">(</span>DECODE<span class="token punctuation">(</span>SUBSTR<span class="token punctuation">(</span>TO_CHAR<span class="token punctuation">(</span>first_time<span class="token punctuation">,</span> <span class="token string">&#39;MM/DD/RR HH24:MI:SS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;18&#39;</span><span class="token punctuation">,</span><span class="token function">ROUND</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span>blocks<span class="token operator">*</span>block_size<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">1024</span><span class="token operator">/</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> H18
  <span class="token punctuation">,</span> <span class="token function">SUM</span><span class="token punctuation">(</span>DECODE<span class="token punctuation">(</span>SUBSTR<span class="token punctuation">(</span>TO_CHAR<span class="token punctuation">(</span>first_time<span class="token punctuation">,</span> <span class="token string">&#39;MM/DD/RR HH24:MI:SS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;19&#39;</span><span class="token punctuation">,</span><span class="token function">ROUND</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span>blocks<span class="token operator">*</span>block_size<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">1024</span><span class="token operator">/</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> H19
  <span class="token punctuation">,</span> <span class="token function">SUM</span><span class="token punctuation">(</span>DECODE<span class="token punctuation">(</span>SUBSTR<span class="token punctuation">(</span>TO_CHAR<span class="token punctuation">(</span>first_time<span class="token punctuation">,</span> <span class="token string">&#39;MM/DD/RR HH24:MI:SS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;20&#39;</span><span class="token punctuation">,</span><span class="token function">ROUND</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span>blocks<span class="token operator">*</span>block_size<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">1024</span><span class="token operator">/</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> H20
  <span class="token punctuation">,</span> <span class="token function">SUM</span><span class="token punctuation">(</span>DECODE<span class="token punctuation">(</span>SUBSTR<span class="token punctuation">(</span>TO_CHAR<span class="token punctuation">(</span>first_time<span class="token punctuation">,</span> <span class="token string">&#39;MM/DD/RR HH24:MI:SS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;21&#39;</span><span class="token punctuation">,</span><span class="token function">ROUND</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span>blocks<span class="token operator">*</span>block_size<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">1024</span><span class="token operator">/</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> H21
  <span class="token punctuation">,</span> <span class="token function">SUM</span><span class="token punctuation">(</span>DECODE<span class="token punctuation">(</span>SUBSTR<span class="token punctuation">(</span>TO_CHAR<span class="token punctuation">(</span>first_time<span class="token punctuation">,</span> <span class="token string">&#39;MM/DD/RR HH24:MI:SS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;22&#39;</span><span class="token punctuation">,</span><span class="token function">ROUND</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span>blocks<span class="token operator">*</span>block_size<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">1024</span><span class="token operator">/</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> H22
  <span class="token punctuation">,</span> <span class="token function">SUM</span><span class="token punctuation">(</span>DECODE<span class="token punctuation">(</span>SUBSTR<span class="token punctuation">(</span>TO_CHAR<span class="token punctuation">(</span>first_time<span class="token punctuation">,</span> <span class="token string">&#39;MM/DD/RR HH24:MI:SS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;23&#39;</span><span class="token punctuation">,</span><span class="token function">ROUND</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span>blocks<span class="token operator">*</span>block_size<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">1024</span><span class="token operator">/</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> H23
  <span class="token punctuation">,</span> <span class="token function">ROUND</span><span class="token punctuation">(</span><span class="token function">SUM</span><span class="token punctuation">(</span><span class="token punctuation">(</span>blocks<span class="token operator">*</span>block_size<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">1024</span><span class="token operator">/</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">)</span>                                                                                                           TOTAL
<span class="token keyword">FROM</span>
  v$archived_log  a
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> SUBSTR<span class="token punctuation">(</span>TO_CHAR<span class="token punctuation">(</span>first_time<span class="token punctuation">,</span> <span class="token string">&#39;MM/DD/RR HH:MI:SS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> SUBSTR<span class="token punctuation">(</span>TO_CHAR<span class="token punctuation">(</span>first_time<span class="token punctuation">,</span> <span class="token string">&#39;MM/DD/RR HH:MI:SS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span>
<span class="token operator">/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="log-switch-history-count-daily" tabindex="-1"><a class="header-anchor" href="#log-switch-history-count-daily"><span>log switch history count daily</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- +----------------------------------------------------------------------------+</span>
<span class="token comment">-- |                          Jeffrey M. Hunter                                 |</span>
<span class="token comment">-- |                      jhunter@idevelopment.info                             |</span>
<span class="token comment">-- |                         www.idevelopment.info                              |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- |      Copyright (c) 1998-2015 Jeffrey M. Hunter. All rights reserved.       |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- | DATABASE : Oracle                                                          |</span>
<span class="token comment">-- | FILE     : perf_log_switch_history_count_daily_all.sql                     |</span>
<span class="token comment">-- | CLASS    : Tuning                                                          |</span>
<span class="token comment">-- | PURPOSE  : Reports on how often log switches occur in your database on a   |</span>
<span class="token comment">-- |            daily basis. It will query all records contained in             |</span>
<span class="token comment">-- |            v$log_history. This script is to be used with an Oracle 8       |</span>
<span class="token comment">-- |            database or higher.                                             |</span>
<span class="token comment">-- | NOTE     : As with any code, ensure to test this script in a development   |</span>
<span class="token comment">-- |            environment before attempting to run it in production.          |</span>
<span class="token comment">-- +----------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> LINESIZE <span class="token number">145</span>
<span class="token keyword">SET</span> PAGESIZE <span class="token number">9999</span>
<span class="token keyword">SET</span> VERIFY   <span class="token keyword">off</span>

<span class="token keyword">COLUMN</span> H00   FORMAT <span class="token number">999</span>     HEADING <span class="token string">&#39;00&#39;</span>
<span class="token keyword">COLUMN</span> H01   FORMAT <span class="token number">999</span>     HEADING <span class="token string">&#39;01&#39;</span>
<span class="token keyword">COLUMN</span> H02   FORMAT <span class="token number">999</span>     HEADING <span class="token string">&#39;02&#39;</span>
<span class="token keyword">COLUMN</span> H03   FORMAT <span class="token number">999</span>     HEADING <span class="token string">&#39;03&#39;</span>
<span class="token keyword">COLUMN</span> H04   FORMAT <span class="token number">999</span>     HEADING <span class="token string">&#39;04&#39;</span>
<span class="token keyword">COLUMN</span> H05   FORMAT <span class="token number">999</span>     HEADING <span class="token string">&#39;05&#39;</span>
<span class="token keyword">COLUMN</span> H06   FORMAT <span class="token number">999</span>     HEADING <span class="token string">&#39;06&#39;</span>
<span class="token keyword">COLUMN</span> H07   FORMAT <span class="token number">999</span>     HEADING <span class="token string">&#39;07&#39;</span>
<span class="token keyword">COLUMN</span> H08   FORMAT <span class="token number">999</span>     HEADING <span class="token string">&#39;08&#39;</span>
<span class="token keyword">COLUMN</span> H09   FORMAT <span class="token number">999</span>     HEADING <span class="token string">&#39;09&#39;</span>
<span class="token keyword">COLUMN</span> H10   FORMAT <span class="token number">999</span>     HEADING <span class="token string">&#39;10&#39;</span>
<span class="token keyword">COLUMN</span> H11   FORMAT <span class="token number">999</span>     HEADING <span class="token string">&#39;11&#39;</span>
<span class="token keyword">COLUMN</span> H12   FORMAT <span class="token number">999</span>     HEADING <span class="token string">&#39;12&#39;</span>
<span class="token keyword">COLUMN</span> H13   FORMAT <span class="token number">999</span>     HEADING <span class="token string">&#39;13&#39;</span>
<span class="token keyword">COLUMN</span> H14   FORMAT <span class="token number">999</span>     HEADING <span class="token string">&#39;14&#39;</span>
<span class="token keyword">COLUMN</span> H15   FORMAT <span class="token number">999</span>     HEADING <span class="token string">&#39;15&#39;</span>
<span class="token keyword">COLUMN</span> H16   FORMAT <span class="token number">999</span>     HEADING <span class="token string">&#39;16&#39;</span>
<span class="token keyword">COLUMN</span> H17   FORMAT <span class="token number">999</span>     HEADING <span class="token string">&#39;17&#39;</span>
<span class="token keyword">COLUMN</span> H18   FORMAT <span class="token number">999</span>     HEADING <span class="token string">&#39;18&#39;</span>
<span class="token keyword">COLUMN</span> H19   FORMAT <span class="token number">999</span>     HEADING <span class="token string">&#39;19&#39;</span>
<span class="token keyword">COLUMN</span> H20   FORMAT <span class="token number">999</span>     HEADING <span class="token string">&#39;20&#39;</span>
<span class="token keyword">COLUMN</span> H21   FORMAT <span class="token number">999</span>     HEADING <span class="token string">&#39;21&#39;</span>
<span class="token keyword">COLUMN</span> H22   FORMAT <span class="token number">999</span>     HEADING <span class="token string">&#39;22&#39;</span>
<span class="token keyword">COLUMN</span> H23   FORMAT <span class="token number">999</span>     HEADING <span class="token string">&#39;23&#39;</span>
<span class="token keyword">COLUMN</span> TOTAL FORMAT <span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span> HEADING <span class="token string">&#39;Total&#39;</span>


<span class="token keyword">SELECT</span>
    SUBSTR<span class="token punctuation">(</span>TO_CHAR<span class="token punctuation">(</span>first_time<span class="token punctuation">,</span> <span class="token string">&#39;MM/DD/RR HH:MI:SS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span>                          <span class="token keyword">DAY</span>
  <span class="token punctuation">,</span> <span class="token function">SUM</span><span class="token punctuation">(</span>DECODE<span class="token punctuation">(</span>SUBSTR<span class="token punctuation">(</span>TO_CHAR<span class="token punctuation">(</span>first_time<span class="token punctuation">,</span> <span class="token string">&#39;MM/DD/RR HH24:MI:SS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;00&#39;</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> H00
  <span class="token punctuation">,</span> <span class="token function">SUM</span><span class="token punctuation">(</span>DECODE<span class="token punctuation">(</span>SUBSTR<span class="token punctuation">(</span>TO_CHAR<span class="token punctuation">(</span>first_time<span class="token punctuation">,</span> <span class="token string">&#39;MM/DD/RR HH24:MI:SS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;01&#39;</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> H01
  <span class="token punctuation">,</span> <span class="token function">SUM</span><span class="token punctuation">(</span>DECODE<span class="token punctuation">(</span>SUBSTR<span class="token punctuation">(</span>TO_CHAR<span class="token punctuation">(</span>first_time<span class="token punctuation">,</span> <span class="token string">&#39;MM/DD/RR HH24:MI:SS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;02&#39;</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> H02
  <span class="token punctuation">,</span> <span class="token function">SUM</span><span class="token punctuation">(</span>DECODE<span class="token punctuation">(</span>SUBSTR<span class="token punctuation">(</span>TO_CHAR<span class="token punctuation">(</span>first_time<span class="token punctuation">,</span> <span class="token string">&#39;MM/DD/RR HH24:MI:SS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;03&#39;</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> H03
  <span class="token punctuation">,</span> <span class="token function">SUM</span><span class="token punctuation">(</span>DECODE<span class="token punctuation">(</span>SUBSTR<span class="token punctuation">(</span>TO_CHAR<span class="token punctuation">(</span>first_time<span class="token punctuation">,</span> <span class="token string">&#39;MM/DD/RR HH24:MI:SS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;04&#39;</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> H04
  <span class="token punctuation">,</span> <span class="token function">SUM</span><span class="token punctuation">(</span>DECODE<span class="token punctuation">(</span>SUBSTR<span class="token punctuation">(</span>TO_CHAR<span class="token punctuation">(</span>first_time<span class="token punctuation">,</span> <span class="token string">&#39;MM/DD/RR HH24:MI:SS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;05&#39;</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> H05
  <span class="token punctuation">,</span> <span class="token function">SUM</span><span class="token punctuation">(</span>DECODE<span class="token punctuation">(</span>SUBSTR<span class="token punctuation">(</span>TO_CHAR<span class="token punctuation">(</span>first_time<span class="token punctuation">,</span> <span class="token string">&#39;MM/DD/RR HH24:MI:SS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;06&#39;</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> H06
  <span class="token punctuation">,</span> <span class="token function">SUM</span><span class="token punctuation">(</span>DECODE<span class="token punctuation">(</span>SUBSTR<span class="token punctuation">(</span>TO_CHAR<span class="token punctuation">(</span>first_time<span class="token punctuation">,</span> <span class="token string">&#39;MM/DD/RR HH24:MI:SS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;07&#39;</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> H07
  <span class="token punctuation">,</span> <span class="token function">SUM</span><span class="token punctuation">(</span>DECODE<span class="token punctuation">(</span>SUBSTR<span class="token punctuation">(</span>TO_CHAR<span class="token punctuation">(</span>first_time<span class="token punctuation">,</span> <span class="token string">&#39;MM/DD/RR HH24:MI:SS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;08&#39;</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> H08
  <span class="token punctuation">,</span> <span class="token function">SUM</span><span class="token punctuation">(</span>DECODE<span class="token punctuation">(</span>SUBSTR<span class="token punctuation">(</span>TO_CHAR<span class="token punctuation">(</span>first_time<span class="token punctuation">,</span> <span class="token string">&#39;MM/DD/RR HH24:MI:SS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;09&#39;</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> H09
  <span class="token punctuation">,</span> <span class="token function">SUM</span><span class="token punctuation">(</span>DECODE<span class="token punctuation">(</span>SUBSTR<span class="token punctuation">(</span>TO_CHAR<span class="token punctuation">(</span>first_time<span class="token punctuation">,</span> <span class="token string">&#39;MM/DD/RR HH24:MI:SS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;10&#39;</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> H10
  <span class="token punctuation">,</span> <span class="token function">SUM</span><span class="token punctuation">(</span>DECODE<span class="token punctuation">(</span>SUBSTR<span class="token punctuation">(</span>TO_CHAR<span class="token punctuation">(</span>first_time<span class="token punctuation">,</span> <span class="token string">&#39;MM/DD/RR HH24:MI:SS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;11&#39;</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> H11
  <span class="token punctuation">,</span> <span class="token function">SUM</span><span class="token punctuation">(</span>DECODE<span class="token punctuation">(</span>SUBSTR<span class="token punctuation">(</span>TO_CHAR<span class="token punctuation">(</span>first_time<span class="token punctuation">,</span> <span class="token string">&#39;MM/DD/RR HH24:MI:SS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;12&#39;</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> H12
  <span class="token punctuation">,</span> <span class="token function">SUM</span><span class="token punctuation">(</span>DECODE<span class="token punctuation">(</span>SUBSTR<span class="token punctuation">(</span>TO_CHAR<span class="token punctuation">(</span>first_time<span class="token punctuation">,</span> <span class="token string">&#39;MM/DD/RR HH24:MI:SS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;13&#39;</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> H13
  <span class="token punctuation">,</span> <span class="token function">SUM</span><span class="token punctuation">(</span>DECODE<span class="token punctuation">(</span>SUBSTR<span class="token punctuation">(</span>TO_CHAR<span class="token punctuation">(</span>first_time<span class="token punctuation">,</span> <span class="token string">&#39;MM/DD/RR HH24:MI:SS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;14&#39;</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> H14
  <span class="token punctuation">,</span> <span class="token function">SUM</span><span class="token punctuation">(</span>DECODE<span class="token punctuation">(</span>SUBSTR<span class="token punctuation">(</span>TO_CHAR<span class="token punctuation">(</span>first_time<span class="token punctuation">,</span> <span class="token string">&#39;MM/DD/RR HH24:MI:SS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;15&#39;</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> H15
  <span class="token punctuation">,</span> <span class="token function">SUM</span><span class="token punctuation">(</span>DECODE<span class="token punctuation">(</span>SUBSTR<span class="token punctuation">(</span>TO_CHAR<span class="token punctuation">(</span>first_time<span class="token punctuation">,</span> <span class="token string">&#39;MM/DD/RR HH24:MI:SS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;16&#39;</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> H16
  <span class="token punctuation">,</span> <span class="token function">SUM</span><span class="token punctuation">(</span>DECODE<span class="token punctuation">(</span>SUBSTR<span class="token punctuation">(</span>TO_CHAR<span class="token punctuation">(</span>first_time<span class="token punctuation">,</span> <span class="token string">&#39;MM/DD/RR HH24:MI:SS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;17&#39;</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> H17
  <span class="token punctuation">,</span> <span class="token function">SUM</span><span class="token punctuation">(</span>DECODE<span class="token punctuation">(</span>SUBSTR<span class="token punctuation">(</span>TO_CHAR<span class="token punctuation">(</span>first_time<span class="token punctuation">,</span> <span class="token string">&#39;MM/DD/RR HH24:MI:SS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;18&#39;</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> H18
  <span class="token punctuation">,</span> <span class="token function">SUM</span><span class="token punctuation">(</span>DECODE<span class="token punctuation">(</span>SUBSTR<span class="token punctuation">(</span>TO_CHAR<span class="token punctuation">(</span>first_time<span class="token punctuation">,</span> <span class="token string">&#39;MM/DD/RR HH24:MI:SS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;19&#39;</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> H19
  <span class="token punctuation">,</span> <span class="token function">SUM</span><span class="token punctuation">(</span>DECODE<span class="token punctuation">(</span>SUBSTR<span class="token punctuation">(</span>TO_CHAR<span class="token punctuation">(</span>first_time<span class="token punctuation">,</span> <span class="token string">&#39;MM/DD/RR HH24:MI:SS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;20&#39;</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> H20
  <span class="token punctuation">,</span> <span class="token function">SUM</span><span class="token punctuation">(</span>DECODE<span class="token punctuation">(</span>SUBSTR<span class="token punctuation">(</span>TO_CHAR<span class="token punctuation">(</span>first_time<span class="token punctuation">,</span> <span class="token string">&#39;MM/DD/RR HH24:MI:SS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;21&#39;</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> H21
  <span class="token punctuation">,</span> <span class="token function">SUM</span><span class="token punctuation">(</span>DECODE<span class="token punctuation">(</span>SUBSTR<span class="token punctuation">(</span>TO_CHAR<span class="token punctuation">(</span>first_time<span class="token punctuation">,</span> <span class="token string">&#39;MM/DD/RR HH24:MI:SS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;22&#39;</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> H22
  <span class="token punctuation">,</span> <span class="token function">SUM</span><span class="token punctuation">(</span>DECODE<span class="token punctuation">(</span>SUBSTR<span class="token punctuation">(</span>TO_CHAR<span class="token punctuation">(</span>first_time<span class="token punctuation">,</span> <span class="token string">&#39;MM/DD/RR HH24:MI:SS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;23&#39;</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> H23
  <span class="token punctuation">,</span> <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span>                                                                      TOTAL
<span class="token keyword">FROM</span>
  v$log_history  a
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> SUBSTR<span class="token punctuation">(</span>TO_CHAR<span class="token punctuation">(</span>first_time<span class="token punctuation">,</span> <span class="token string">&#39;MM/DD/RR HH:MI:SS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> SUBSTR<span class="token punctuation">(</span>TO_CHAR<span class="token punctuation">(</span>first_time<span class="token punctuation">,</span> <span class="token string">&#39;MM/DD/RR HH:MI:SS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span>
<span class="token operator">/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hit-ratio-system" tabindex="-1"><a class="header-anchor" href="#hit-ratio-system"><span>hit ratio system</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- +----------------------------------------------------------------------------+</span>
<span class="token comment">-- |                          Jeffrey M. Hunter                                 |</span>
<span class="token comment">-- |                      jhunter@idevelopment.info                             |</span>
<span class="token comment">-- |                         www.idevelopment.info                              |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- |      Copyright (c) 1998-2015 Jeffrey M. Hunter. All rights reserved.       |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- | DATABASE : Oracle                                                          |</span>
<span class="token comment">-- | FILE     : perf_hit_ratio_system.sql                                       |</span>
<span class="token comment">-- | CLASS    : Tuning                                                          |</span>
<span class="token comment">-- | PURPOSE  : Reports buffer cache hit ratio.                                 |</span>
<span class="token comment">-- | NOTE     : As with any code, ensure to test this script in a development   |</span>
<span class="token comment">-- |            environment before attempting to run it in production.          |</span>
<span class="token comment">-- +----------------------------------------------------------------------------+</span>

<span class="token keyword">SELECT</span>
    to_char<span class="token punctuation">(</span>
        <span class="token function">SUM</span><span class="token punctuation">(</span>decode<span class="token punctuation">(</span>
            name<span class="token punctuation">,</span> <span class="token string">&#39;consistent gets&#39;</span><span class="token punctuation">,</span> <span class="token keyword">value</span><span class="token punctuation">,</span> <span class="token number">0</span>
        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;999,999,999,999,999,999&#39;</span>
    <span class="token punctuation">)</span> con<span class="token punctuation">,</span>
    to_char<span class="token punctuation">(</span>
        <span class="token function">SUM</span><span class="token punctuation">(</span>decode<span class="token punctuation">(</span>
            name<span class="token punctuation">,</span> <span class="token string">&#39;db block gets&#39;</span><span class="token punctuation">,</span> <span class="token keyword">value</span><span class="token punctuation">,</span> <span class="token number">0</span>
        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;999,999,999,999,999,999&#39;</span>
    <span class="token punctuation">)</span> dbblockgets<span class="token punctuation">,</span>
    to_char<span class="token punctuation">(</span>
        <span class="token function">SUM</span><span class="token punctuation">(</span>decode<span class="token punctuation">(</span>
            name<span class="token punctuation">,</span> <span class="token string">&#39;physical reads&#39;</span><span class="token punctuation">,</span> <span class="token keyword">value</span><span class="token punctuation">,</span> <span class="token number">0</span>
        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;999,999,999,999,999,999&#39;</span>
    <span class="token punctuation">)</span> physrds<span class="token punctuation">,</span>
    <span class="token function">round</span><span class="token punctuation">(</span>
        <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token function">SUM</span><span class="token punctuation">(</span>decode<span class="token punctuation">(</span>
            name<span class="token punctuation">,</span> <span class="token string">&#39;consistent gets&#39;</span><span class="token punctuation">,</span> <span class="token keyword">value</span><span class="token punctuation">,</span> <span class="token number">0</span>
        <span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">SUM</span><span class="token punctuation">(</span>decode<span class="token punctuation">(</span>
            name<span class="token punctuation">,</span> <span class="token string">&#39;db block gets&#39;</span><span class="token punctuation">,</span> <span class="token keyword">value</span><span class="token punctuation">,</span> <span class="token number">0</span>
        <span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token function">SUM</span><span class="token punctuation">(</span>decode<span class="token punctuation">(</span>
            name<span class="token punctuation">,</span> <span class="token string">&#39;physical reads&#39;</span><span class="token punctuation">,</span> <span class="token keyword">value</span><span class="token punctuation">,</span> <span class="token number">0</span>
        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">/</span><span class="token punctuation">(</span><span class="token function">SUM</span><span class="token punctuation">(</span>decode<span class="token punctuation">(</span>
            name<span class="token punctuation">,</span> <span class="token string">&#39;consistent gets&#39;</span><span class="token punctuation">,</span> <span class="token keyword">value</span><span class="token punctuation">,</span> <span class="token number">0</span>
        <span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">SUM</span><span class="token punctuation">(</span>decode<span class="token punctuation">(</span>
            name<span class="token punctuation">,</span> <span class="token string">&#39;db block gets&#39;</span><span class="token punctuation">,</span> <span class="token keyword">value</span><span class="token punctuation">,</span> <span class="token number">0</span>
        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">2</span>
    <span class="token punctuation">)</span> hitratio
<span class="token keyword">FROM</span>
    v$sysstat
<span class="token operator">/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hit-ratio-session" tabindex="-1"><a class="header-anchor" href="#hit-ratio-session"><span>hit ratio session</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- +----------------------------------------------------------------------------+</span>
<span class="token comment">-- |                          Jeffrey M. Hunter                                 |</span>
<span class="token comment">-- |                      jhunter@idevelopment.info                             |</span>
<span class="token comment">-- |                         www.idevelopment.info                              |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- |      Copyright (c) 1998-2015 Jeffrey M. Hunter. All rights reserved.       |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- | DATABASE : Oracle                                                          |</span>
<span class="token comment">-- | FILE     : perf_hit_ratio_by_session.sql                                   |</span>
<span class="token comment">-- | CLASS    : Tuning                                                          |</span>
<span class="token comment">-- | PURPOSE  : Reports on all sessions along with their individual hit ratio.  |</span>
<span class="token comment">-- | NOTE     : As with any code, ensure to test this script in a development   |</span>
<span class="token comment">-- |            environment before attempting to run it in production.          |</span>
<span class="token comment">-- +----------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> LINESIZE <span class="token number">180</span>
<span class="token keyword">SET</span> PAGESIZE <span class="token number">9999</span>

<span class="token keyword">COLUMN</span> unix_id          FORMAT a10                  HEAD Username
<span class="token keyword">COLUMN</span> oracle_id        FORMAT a10                  HEAD OracleID
<span class="token keyword">COLUMN</span> os_user          FORMAT a20                  HEAD OS_User
<span class="token keyword">COLUMN</span> sid              FORMAT <span class="token number">99999</span>                HEAD SID
<span class="token keyword">COLUMN</span> serial_id        FORMAT <span class="token number">999999</span>               HEAD <span class="token keyword">Serial</span><span class="token comment">#</span>
<span class="token keyword">COLUMN</span> unix_pid         FORMAT a9                   HEAD UNIX_Pid
<span class="token keyword">COLUMN</span> consistent_gets  FORMAT <span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>  HEAD Cons_Gets
<span class="token keyword">COLUMN</span> block_gets       FORMAT <span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>  HEAD Block_Gets
<span class="token keyword">COLUMN</span> physical_reads   FORMAT <span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>  HEAD Phys_Reads
<span class="token keyword">COLUMN</span> hit_ratio        FORMAT <span class="token number">999.00</span>               HEAD Hit_Ratio

<span class="token keyword">SELECT</span>
    p<span class="token punctuation">.</span>username            unix_id
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span>username            oracle_id
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span>osuser              os_user
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span>sid                 sid
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span><span class="token keyword">serial</span><span class="token comment">#             serial_id</span>
  <span class="token punctuation">,</span> LPAD<span class="token punctuation">(</span>p<span class="token punctuation">.</span>spid<span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">)</span>        unix_pid
  <span class="token punctuation">,</span> sio<span class="token punctuation">.</span>consistent_gets   consistent_gets
  <span class="token punctuation">,</span> sio<span class="token punctuation">.</span>block_gets        block_gets
  <span class="token punctuation">,</span> sio<span class="token punctuation">.</span>physical_reads    physical_reads
  <span class="token punctuation">,</span> <span class="token function">ROUND</span><span class="token punctuation">(</span><span class="token punctuation">(</span>consistent_gets<span class="token operator">+</span>Block_gets<span class="token operator">-</span>Physical_reads<span class="token punctuation">)</span> <span class="token operator">/</span>
          <span class="token punctuation">(</span>Consistent_gets<span class="token operator">+</span>Block_gets<span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>             hit_ratio
<span class="token keyword">FROM</span>
    v$process p
  <span class="token punctuation">,</span> v$<span class="token keyword">session</span> s
  <span class="token punctuation">,</span> v$sess_io sio
<span class="token keyword">WHERE</span>
      p<span class="token punctuation">.</span>addr <span class="token punctuation">(</span><span class="token operator">+</span><span class="token punctuation">)</span> <span class="token operator">=</span> s<span class="token punctuation">.</span>paddr
  <span class="token operator">AND</span> s<span class="token punctuation">.</span>sid      <span class="token operator">=</span> sio<span class="token punctuation">.</span>sid
  <span class="token operator">AND</span> <span class="token punctuation">(</span>sio<span class="token punctuation">.</span>consistent_gets <span class="token operator">+</span> sio<span class="token punctuation">.</span>block_gets<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span>
  <span class="token operator">AND</span> s<span class="token punctuation">.</span>username <span class="token operator">is</span> <span class="token operator">not</span> <span class="token boolean">null</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> hit_ratio
<span class="token operator">/</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="file-waits" tabindex="-1"><a class="header-anchor" href="#file-waits"><span>file waits</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- +----------------------------------------------------------------------------+</span>
<span class="token comment">-- |                          Jeffrey M. Hunter                                 |</span>
<span class="token comment">-- |                      jhunter@idevelopment.info                             |</span>
<span class="token comment">-- |                         www.idevelopment.info                              |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- |      Copyright (c) 1998-2015 Jeffrey M. Hunter. All rights reserved.       |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- | DATABASE : Oracle                                                          |</span>
<span class="token comment">-- | FILE     : perf_file_waits.sql                                             |</span>
<span class="token comment">-- | CLASS    : Tuning                                                          |</span>
<span class="token comment">-- | PURPOSE  : Reports on Busy Buffer Waits per file.                          |</span>
<span class="token comment">-- | NOTE     : As with any code, ensure to test this script in a development   |</span>
<span class="token comment">-- |            environment before attempting to run it in production.          |</span>
<span class="token comment">-- +----------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> LINESIZE <span class="token number">145</span>
<span class="token keyword">SET</span> PAGESIZE <span class="token number">9999</span>

<span class="token keyword">COLUMN</span> filename  FORMAT a58           HEAD <span class="token string">&quot;File Name&quot;</span>
<span class="token keyword">COLUMN</span> <span class="token keyword">file</span><span class="token comment">#     FORMAT 999           HEAD &quot;File #&quot;</span>
<span class="token keyword">COLUMN</span> ct        FORMAT <span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>   HEAD <span class="token string">&quot;Waits (count)&quot;</span>
<span class="token keyword">COLUMN</span> <span class="token keyword">time</span>      FORMAT <span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>   HEAD <span class="token string">&quot;Time (cs)&quot;</span>
<span class="token keyword">COLUMN</span> avg       FORMAT <span class="token number">999.999</span>       HEAD <span class="token string">&quot;Avg Time&quot;</span>


<span class="token keyword">SELECT</span>
    a<span class="token punctuation">.</span>indx <span class="token operator">+</span> <span class="token number">1</span>  <span class="token keyword">file</span><span class="token comment">#</span>
  <span class="token punctuation">,</span> b<span class="token punctuation">.</span>name      filename
  <span class="token punctuation">,</span> a<span class="token punctuation">.</span>count     ct
  <span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token keyword">time</span>      <span class="token keyword">time</span>
  <span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token keyword">time</span><span class="token operator">/</span><span class="token punctuation">(</span>DECODE<span class="token punctuation">(</span>a<span class="token punctuation">.</span>count<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span>a<span class="token punctuation">.</span>count<span class="token punctuation">)</span><span class="token punctuation">)</span> avg
<span class="token keyword">FROM</span>
    x$kcbfwait   a
  <span class="token punctuation">,</span> v$datafile   b
<span class="token keyword">WHERE</span>
      indx <span class="token operator">&lt;</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> v$datafile<span class="token punctuation">)</span>
  <span class="token operator">AND</span> a<span class="token punctuation">.</span>indx<span class="token operator">+</span><span class="token number">1</span> <span class="token operator">=</span> b<span class="token punctuation">.</span><span class="token keyword">file</span><span class="token comment">#</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> a<span class="token punctuation">.</span><span class="token keyword">time</span>
<span class="token operator">/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="file-io" tabindex="-1"><a class="header-anchor" href="#file-io"><span>file io</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- +----------------------------------------------------------------------------+</span>
<span class="token comment">-- |                          Jeffrey M. Hunter                                 |</span>
<span class="token comment">-- |                      jhunter@idevelopment.info                             |</span>
<span class="token comment">-- |                         www.idevelopment.info                              |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- |      Copyright (c) 1998-2015 Jeffrey M. Hunter. All rights reserved.       |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- | DATABASE : Oracle                                                          |</span>
<span class="token comment">-- | FILE     : perf_file_io.sql                                                |</span>
<span class="token comment">-- | CLASS    : Tuning                                                          |</span>
<span class="token comment">-- | PURPOSE  : Reports on Read/Write datafile activity. This script was        |</span>
<span class="token comment">-- |            designed to work with Oracle8i or higher. It will include all   |</span>
<span class="token comment">-- |            tablespaces using any type of extent management as well as true |</span>
<span class="token comment">-- |            TEMPORARY tablespaces. (i.e. use of &quot;tempfiles&quot;)                |</span>
<span class="token comment">-- | NOTE     : As with any code, ensure to test this script in a development   |</span>
<span class="token comment">-- |            environment before attempting to run it in production.          |</span>
<span class="token comment">-- +----------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> LINESIZE <span class="token number">145</span>
<span class="token keyword">SET</span> PAGESIZE <span class="token number">9999</span>
<span class="token keyword">SET</span> VERIFY   <span class="token keyword">off</span>

<span class="token keyword">COLUMN</span> ts_name    FORMAT a15          HEAD <span class="token string">&#39;Tablespace&#39;</span>
<span class="token keyword">COLUMN</span> fname      FORMAT a45          HEAD <span class="token string">&#39;File Name&#39;</span>
<span class="token keyword">COLUMN</span> phyrds     FORMAT <span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>  HEAD <span class="token string">&#39;Physical Reads&#39;</span>
<span class="token keyword">COLUMN</span> phywrts    FORMAT <span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>  HEAD <span class="token string">&#39;Physical Writes&#39;</span>
<span class="token keyword">COLUMN</span> read_pct   FORMAT <span class="token number">999.99</span>       HEAD <span class="token string">&#39;Read Pct.&#39;</span>
<span class="token keyword">COLUMN</span> write_pct  FORMAT <span class="token number">999.99</span>       HEAD <span class="token string">&#39;Write Pct.&#39;</span>

<span class="token keyword">BREAK</span> <span class="token keyword">ON</span> report
<span class="token keyword">COMPUTE</span> SUM <span class="token keyword">OF</span> phyrds     <span class="token keyword">ON</span> report
<span class="token keyword">COMPUTE</span> SUM <span class="token keyword">OF</span> phywrts    <span class="token keyword">ON</span> report
<span class="token keyword">COMPUTE</span> AVG <span class="token keyword">OF</span> read_pct   <span class="token keyword">ON</span> report
<span class="token keyword">COMPUTE</span> AVG <span class="token keyword">OF</span> write_pct  <span class="token keyword">ON</span> report

<span class="token keyword">SELECT</span>
    df<span class="token punctuation">.</span>tablespace_name                       ts_name
  <span class="token punctuation">,</span> df<span class="token punctuation">.</span>file_name                             fname
  <span class="token punctuation">,</span> fs<span class="token punctuation">.</span>phyrds                                phyrds
  <span class="token punctuation">,</span> <span class="token punctuation">(</span>fs<span class="token punctuation">.</span>phyrds <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token punctuation">(</span>fst<span class="token punctuation">.</span>pr <span class="token operator">+</span> tst<span class="token punctuation">.</span>pr<span class="token punctuation">)</span>    read_pct
  <span class="token punctuation">,</span> fs<span class="token punctuation">.</span>phywrts                               phywrts
  <span class="token punctuation">,</span> <span class="token punctuation">(</span>fs<span class="token punctuation">.</span>phywrts <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token punctuation">(</span>fst<span class="token punctuation">.</span>pw <span class="token operator">+</span> tst<span class="token punctuation">.</span>pw<span class="token punctuation">)</span>   write_pct
<span class="token keyword">FROM</span>
    sys<span class="token punctuation">.</span>dba_data_files df
  <span class="token punctuation">,</span> v$filestat         fs
  <span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token function">sum</span><span class="token punctuation">(</span>f<span class="token punctuation">.</span>phyrds<span class="token punctuation">)</span> pr<span class="token punctuation">,</span> <span class="token function">sum</span><span class="token punctuation">(</span>f<span class="token punctuation">.</span>phywrts<span class="token punctuation">)</span> pw <span class="token keyword">from</span> v$filestat f<span class="token punctuation">)</span> fst
  <span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token function">sum</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span>phyrds<span class="token punctuation">)</span> pr<span class="token punctuation">,</span> <span class="token function">sum</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span>phywrts<span class="token punctuation">)</span> pw <span class="token keyword">from</span> v$tempstat t<span class="token punctuation">)</span> tst
<span class="token keyword">WHERE</span>
    df<span class="token punctuation">.</span>file_id <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token keyword">file</span><span class="token comment">#</span>
<span class="token keyword">UNION</span>
<span class="token keyword">SELECT</span>
    tf<span class="token punctuation">.</span>tablespace_name                     ts_name
  <span class="token punctuation">,</span> tf<span class="token punctuation">.</span>file_name                           fname
  <span class="token punctuation">,</span> ts<span class="token punctuation">.</span>phyrds                              phyrds
  <span class="token punctuation">,</span> <span class="token punctuation">(</span>ts<span class="token punctuation">.</span>phyrds <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token punctuation">(</span>fst<span class="token punctuation">.</span>pr <span class="token operator">+</span> tst<span class="token punctuation">.</span>pr<span class="token punctuation">)</span>  read_pct
  <span class="token punctuation">,</span> ts<span class="token punctuation">.</span>phywrts                             phywrts
  <span class="token punctuation">,</span> <span class="token punctuation">(</span>ts<span class="token punctuation">.</span>phywrts <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token punctuation">(</span>fst<span class="token punctuation">.</span>pw <span class="token operator">+</span> tst<span class="token punctuation">.</span>pw<span class="token punctuation">)</span> write_pct
<span class="token keyword">FROM</span>
    sys<span class="token punctuation">.</span>dba_temp_files  tf
  <span class="token punctuation">,</span> v$tempstat          ts
  <span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token function">sum</span><span class="token punctuation">(</span>f<span class="token punctuation">.</span>phyrds<span class="token punctuation">)</span> pr<span class="token punctuation">,</span> <span class="token function">sum</span><span class="token punctuation">(</span>f<span class="token punctuation">.</span>phywrts<span class="token punctuation">)</span> pw <span class="token keyword">from</span> v$filestat f<span class="token punctuation">)</span> fst
  <span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token function">sum</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span>phyrds<span class="token punctuation">)</span> pr<span class="token punctuation">,</span> <span class="token function">sum</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span>phywrts<span class="token punctuation">)</span> pw <span class="token keyword">from</span> v$tempstat t<span class="token punctuation">)</span> tst
<span class="token keyword">WHERE</span>
    tf<span class="token punctuation">.</span>file_id <span class="token operator">=</span> ts<span class="token punctuation">.</span><span class="token keyword">file</span><span class="token comment">#</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> phyrds <span class="token keyword">DESC</span>
<span class="token operator">/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="data-pump-jobs" tabindex="-1"><a class="header-anchor" href="#data-pump-jobs"><span>data pump jobs</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- +----------------------------------------------------------------------------+</span>
<span class="token comment">-- |                          Jeffrey M. Hunter                                 |</span>
<span class="token comment">-- |                      jhunter@idevelopment.info                             |</span>
<span class="token comment">-- |                         www.idevelopment.info                              |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- |      Copyright (c) 1998-2015 Jeffrey M. Hunter. All rights reserved.       |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- | DATABASE : Oracle                                                          |</span>
<span class="token comment">-- | FILE     : dpump_jobs.sql                                                  |</span>
<span class="token comment">-- | CLASS    : Data Pump                                                       |</span>
<span class="token comment">-- | PURPOSE  : Query all Data Pump jobs.                                       |</span>
<span class="token comment">-- | NOTE     : As with any code, ensure to test this script in a development   |</span>
<span class="token comment">-- |            environment before attempting to run it in production.          |</span>
<span class="token comment">-- +----------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> TERMOUT <span class="token keyword">OFF</span><span class="token punctuation">;</span>
<span class="token keyword">COLUMN</span> current_instance NEW_VALUE current_instance NOPRINT<span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> rpad<span class="token punctuation">(</span>instance_name<span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">)</span> current_instance <span class="token keyword">FROM</span> v$instance<span class="token punctuation">;</span>
<span class="token keyword">SET</span> TERMOUT <span class="token keyword">ON</span><span class="token punctuation">;</span>

PROMPT 
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>
PROMPT <span class="token operator">|</span> Report   : <span class="token keyword">Data</span> Pump Jobs                                              <span class="token operator">|</span>
PROMPT <span class="token operator">|</span> Instance : <span class="token operator">&amp;</span>current_instance                                           <span class="token operator">|</span>
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> ECHO        <span class="token keyword">OFF</span>
<span class="token keyword">SET</span> FEEDBACK    <span class="token number">6</span>
<span class="token keyword">SET</span> HEADING     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> LINESIZE    <span class="token number">180</span>
<span class="token keyword">SET</span> PAGESIZE    <span class="token number">50000</span>
<span class="token keyword">SET</span> TERMOUT     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> TIMING      <span class="token keyword">OFF</span>
<span class="token keyword">SET</span> TRIMOUT     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> TRIMSPOOL   <span class="token keyword">ON</span>
<span class="token keyword">SET</span> VERIFY      <span class="token keyword">OFF</span>

CLEAR <span class="token keyword">COLUMNS</span>
CLEAR BREAKS
CLEAR COMPUTES

<span class="token keyword">COLUMN</span> owner_name         FORMAT a15            HEADING <span class="token string">&#39;Owner Name&#39;</span>
<span class="token keyword">COLUMN</span> job_name           FORMAT a20            HEADING <span class="token string">&#39;Job Name&#39;</span>
<span class="token keyword">COLUMN</span> operation          FORMAT a10            HEADING <span class="token string">&#39;Operation&#39;</span>
<span class="token keyword">COLUMN</span> job_mode           FORMAT a10            HEADING <span class="token string">&#39;Job Mode&#39;</span>
<span class="token keyword">COLUMN</span> state              FORMAT a10            HEADING <span class="token string">&#39;State&#39;</span>
<span class="token keyword">COLUMN</span> degree             FORMAT <span class="token number">999999</span>         HEADING <span class="token string">&#39;Degree&#39;</span>
<span class="token keyword">COLUMN</span> attached_sessions  FORMAT <span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>        HEADING <span class="token string">&#39;Attached Sessions&#39;</span>

<span class="token keyword">SELECT</span>
    dpj<span class="token punctuation">.</span>owner_name           owner_name
  <span class="token punctuation">,</span> dpj<span class="token punctuation">.</span>job_name             job_name
  <span class="token punctuation">,</span> dpj<span class="token punctuation">.</span>operation            operation
  <span class="token punctuation">,</span> dpj<span class="token punctuation">.</span>job_mode             job_mode
  <span class="token punctuation">,</span> dpj<span class="token punctuation">.</span>state                state
  <span class="token punctuation">,</span> dpj<span class="token punctuation">.</span>degree               degree
  <span class="token punctuation">,</span> dpj<span class="token punctuation">.</span>attached_sessions    attached_sessions
<span class="token keyword">FROM</span>
    dba_datapump_jobs      dpj
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
    dpj<span class="token punctuation">.</span>owner_name
  <span class="token punctuation">,</span> dpj<span class="token punctuation">.</span>job_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="data-pump-progress" tabindex="-1"><a class="header-anchor" href="#data-pump-progress"><span>data pump progress</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- +----------------------------------------------------------------------------+</span>
<span class="token comment">-- |                          Jeffrey M. Hunter                                 |</span>
<span class="token comment">-- |                      jhunter@idevelopment.info                             |</span>
<span class="token comment">-- |                         www.idevelopment.info                              |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- |      Copyright (c) 1998-2015 Jeffrey M. Hunter. All rights reserved.       |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- | DATABASE : Oracle                                                          |</span>
<span class="token comment">-- | FILE     : dpump_progress.sql                                              |</span>
<span class="token comment">-- | CLASS    : Data Pump                                                       |</span>
<span class="token comment">-- | PURPOSE  : Display the progress of Data Pump job.                          |</span>
<span class="token comment">-- | NOTE     : As with any code, ensure to test this script in a development   |</span>
<span class="token comment">-- |            environment before attempting to run it in production.          |</span>
<span class="token comment">-- +----------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> TERMOUT <span class="token keyword">OFF</span><span class="token punctuation">;</span>
<span class="token keyword">COLUMN</span> current_instance NEW_VALUE current_instance NOPRINT<span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> rpad<span class="token punctuation">(</span>instance_name<span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">)</span> current_instance <span class="token keyword">FROM</span> v$instance<span class="token punctuation">;</span>
<span class="token keyword">SET</span> TERMOUT <span class="token keyword">ON</span><span class="token punctuation">;</span>

PROMPT 
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>
PROMPT <span class="token operator">|</span> Report   : <span class="token keyword">Data</span> Pump Job Progress                                      <span class="token operator">|</span>
PROMPT <span class="token operator">|</span> Instance : <span class="token operator">&amp;</span>current_instance                                           <span class="token operator">|</span>
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> ECHO        <span class="token keyword">OFF</span>
<span class="token keyword">SET</span> FEEDBACK    <span class="token number">6</span>
<span class="token keyword">SET</span> HEADING     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> LINESIZE    <span class="token number">180</span>
<span class="token keyword">SET</span> PAGESIZE    <span class="token number">50000</span>
<span class="token keyword">SET</span> TERMOUT     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> TIMING      <span class="token keyword">OFF</span>
<span class="token keyword">SET</span> TRIMOUT     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> TRIMSPOOL   <span class="token keyword">ON</span>
<span class="token keyword">SET</span> VERIFY      <span class="token keyword">OFF</span>

CLEAR <span class="token keyword">COLUMNS</span>
CLEAR BREAKS
CLEAR COMPUTES

<span class="token keyword">COLUMN</span> instance_name     FORMAT a9                  HEADING <span class="token string">&#39;Instance|Name&#39;</span>
<span class="token keyword">COLUMN</span> owner_name        FORMAT a15                 HEADING <span class="token string">&#39;Owner|Name&#39;</span>
<span class="token keyword">COLUMN</span> job_name          FORMAT a20                 HEADING <span class="token string">&#39;Job|Name&#39;</span>
<span class="token keyword">COLUMN</span> session_type      FORMAT a8                  HEADING <span class="token string">&#39;Session|Type&#39;</span>
<span class="token keyword">COLUMN</span> start_time        FORMAT a19                 HEADING <span class="token string">&#39;Start|Time&#39;</span>
<span class="token keyword">COLUMN</span> time_remaining    FORMAT <span class="token number">9</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>       HEADING <span class="token string">&#39;Time|Remaining (min.)&#39;</span>
<span class="token keyword">COLUMN</span> sofar             FORMAT <span class="token number">9</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>   HEADING <span class="token string">&#39;Bytes Completed|So Far&#39;</span>
<span class="token keyword">COLUMN</span> totalwork         FORMAT <span class="token number">9</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>   HEADING <span class="token string">&#39;Total Bytes|for Job&#39;</span>
<span class="token keyword">COLUMN</span> pct_completed     FORMAT a10                 HEADING <span class="token string">&#39;Percent|Completed&#39;</span>

<span class="token keyword">BREAK</span> <span class="token keyword">ON</span> report <span class="token keyword">ON</span> instance_name_print <span class="token keyword">ON</span> owner_name <span class="token keyword">ON</span> job_name

<span class="token keyword">SELECT</span>
    i<span class="token punctuation">.</span>instance_name                                        instance_name
  <span class="token punctuation">,</span> dj<span class="token punctuation">.</span>owner_name                                          owner_name 
  <span class="token punctuation">,</span> dj<span class="token punctuation">.</span>job_name                                            job_name
  <span class="token punctuation">,</span> ds<span class="token punctuation">.</span><span class="token keyword">type</span>                                                session_type
  <span class="token punctuation">,</span> TO_CHAR<span class="token punctuation">(</span>sl<span class="token punctuation">.</span>start_time<span class="token punctuation">,</span><span class="token string">&#39;mm/dd/yyyy HH24:MI:SS&#39;</span><span class="token punctuation">)</span>         start_time
  <span class="token punctuation">,</span> <span class="token function">ROUND</span><span class="token punctuation">(</span>sl<span class="token punctuation">.</span>time_remaining<span class="token operator">/</span><span class="token number">60</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span>                          time_remaining
  <span class="token punctuation">,</span> sl<span class="token punctuation">.</span>sofar                                               sofar
  <span class="token punctuation">,</span> sl<span class="token punctuation">.</span>totalwork                                           totalwork
  <span class="token punctuation">,</span> TRUNC<span class="token punctuation">(</span><span class="token function">ROUND</span><span class="token punctuation">(</span><span class="token punctuation">(</span>sl<span class="token punctuation">.</span>sofar<span class="token operator">/</span>sl<span class="token punctuation">.</span>totalwork<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">&#39;%&#39;</span>  pct_completed
<span class="token keyword">FROM</span>
    gv$datapump_job         dj
  <span class="token punctuation">,</span> gv$datapump_session     ds
  <span class="token punctuation">,</span> gv$<span class="token keyword">session</span>              s
  <span class="token punctuation">,</span> gv$instance             i
  <span class="token punctuation">,</span> gv$session_longops      sl
<span class="token keyword">WHERE</span>
      s<span class="token punctuation">.</span>inst_id  <span class="token operator">=</span> i<span class="token punctuation">.</span>inst_id
  <span class="token operator">AND</span> ds<span class="token punctuation">.</span>inst_id <span class="token operator">=</span> i<span class="token punctuation">.</span>inst_id
  <span class="token operator">AND</span> dj<span class="token punctuation">.</span>inst_id <span class="token operator">=</span> i<span class="token punctuation">.</span>inst_id
  <span class="token operator">AND</span> sl<span class="token punctuation">.</span>inst_id <span class="token operator">=</span> i<span class="token punctuation">.</span>inst_id
  <span class="token operator">AND</span> s<span class="token punctuation">.</span>saddr    <span class="token operator">=</span> ds<span class="token punctuation">.</span>saddr
  <span class="token operator">AND</span> dj<span class="token punctuation">.</span>job_id  <span class="token operator">=</span> ds<span class="token punctuation">.</span>job_id
  <span class="token operator">AND</span> sl<span class="token punctuation">.</span>sid     <span class="token operator">=</span> s<span class="token punctuation">.</span>sid
  <span class="token operator">AND</span> sl<span class="token punctuation">.</span><span class="token keyword">serial</span><span class="token comment"># = s.serial#</span>
  <span class="token operator">AND</span> ds<span class="token punctuation">.</span><span class="token keyword">type</span>    <span class="token operator">=</span> <span class="token string">&#39;MASTER&#39;</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
    i<span class="token punctuation">.</span>instance_name
  <span class="token punctuation">,</span> dj<span class="token punctuation">.</span>owner_name
  <span class="token punctuation">,</span> dj<span class="token punctuation">.</span>job_name
  <span class="token punctuation">,</span> ds<span class="token punctuation">.</span><span class="token keyword">type</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="data-pump-session" tabindex="-1"><a class="header-anchor" href="#data-pump-session"><span>data pump session</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- +----------------------------------------------------------------------------+</span>
<span class="token comment">-- |                          Jeffrey M. Hunter                                 |</span>
<span class="token comment">-- |                      jhunter@idevelopment.info                             |</span>
<span class="token comment">-- |                         www.idevelopment.info                              |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- |      Copyright (c) 1998-2015 Jeffrey M. Hunter. All rights reserved.       |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- | DATABASE : Oracle                                                          |</span>
<span class="token comment">-- | FILE     : dpump_sessions.sql                                              |</span>
<span class="token comment">-- | CLASS    : Data Pump                                                       |</span>
<span class="token comment">-- | PURPOSE  : Query all Data Pump jobs and session information.               |</span>
<span class="token comment">-- | NOTE     : As with any code, ensure to test this script in a development   |</span>
<span class="token comment">-- |            environment before attempting to run it in production.          |</span>
<span class="token comment">-- +----------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> TERMOUT <span class="token keyword">OFF</span><span class="token punctuation">;</span>
<span class="token keyword">COLUMN</span> current_instance NEW_VALUE current_instance NOPRINT<span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> rpad<span class="token punctuation">(</span>instance_name<span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">)</span> current_instance <span class="token keyword">FROM</span> v$instance<span class="token punctuation">;</span>
<span class="token keyword">SET</span> TERMOUT <span class="token keyword">ON</span><span class="token punctuation">;</span>

PROMPT 
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>
PROMPT <span class="token operator">|</span> Report   : <span class="token keyword">Data</span> Pump Sessions                                          <span class="token operator">|</span>
PROMPT <span class="token operator">|</span> Instance : <span class="token operator">&amp;</span>current_instance                                           <span class="token operator">|</span>
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> ECHO        <span class="token keyword">OFF</span>
<span class="token keyword">SET</span> FEEDBACK    <span class="token number">6</span>
<span class="token keyword">SET</span> HEADING     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> LINESIZE    <span class="token number">180</span>
<span class="token keyword">SET</span> PAGESIZE    <span class="token number">50000</span>
<span class="token keyword">SET</span> TERMOUT     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> TIMING      <span class="token keyword">OFF</span>
<span class="token keyword">SET</span> TRIMOUT     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> TRIMSPOOL   <span class="token keyword">ON</span>
<span class="token keyword">SET</span> VERIFY      <span class="token keyword">OFF</span>

CLEAR <span class="token keyword">COLUMNS</span>
CLEAR BREAKS
CLEAR COMPUTES

<span class="token keyword">COLUMN</span> instance_name     FORMAT a9         HEADING <span class="token string">&#39;Instance&#39;</span>
<span class="token keyword">COLUMN</span> owner_name        FORMAT a15        HEADING <span class="token string">&#39;Owner Name&#39;</span>
<span class="token keyword">COLUMN</span> job_name          FORMAT a20        HEADING <span class="token string">&#39;Job Name&#39;</span>
<span class="token keyword">COLUMN</span> session_type      FORMAT a15        HEADING <span class="token string">&#39;Session Type&#39;</span>
<span class="token keyword">COLUMN</span> sid               FORMAT <span class="token number">999999</span>     HEADING <span class="token string">&#39;SID&#39;</span>
<span class="token keyword">COLUMN</span> serial_id         FORMAT <span class="token number">99999999</span>   HEADING <span class="token string">&#39;Serial ID&#39;</span>
<span class="token keyword">COLUMN</span> oracle_username   FORMAT a18        HEADING <span class="token string">&#39;Oracle User&#39;</span>
<span class="token keyword">COLUMN</span> os_username       FORMAT a18        HEADING <span class="token string">&#39;O/S User&#39;</span>
<span class="token keyword">COLUMN</span> os_pid            FORMAT a8         HEADING <span class="token string">&#39;O/S PID&#39;</span>

<span class="token keyword">BREAK</span> <span class="token keyword">ON</span> report <span class="token keyword">ON</span> instance_name_print <span class="token keyword">ON</span> owner_name <span class="token keyword">ON</span> job_name

<span class="token keyword">SELECT</span>
    i<span class="token punctuation">.</span>instance_name    instance_name
  <span class="token punctuation">,</span> dj<span class="token punctuation">.</span>owner_name      owner_name 
  <span class="token punctuation">,</span> dj<span class="token punctuation">.</span>job_name        job_name
  <span class="token punctuation">,</span> ds<span class="token punctuation">.</span><span class="token keyword">type</span>            session_type
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span>sid              sid
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span><span class="token keyword">serial</span><span class="token comment">#          serial_id</span>
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span>username         oracle_username
  <span class="token punctuation">,</span> s<span class="token punctuation">.</span>osuser           os_username
  <span class="token punctuation">,</span> p<span class="token punctuation">.</span>spid             os_pid
<span class="token keyword">FROM</span>
    gv$datapump_job         dj
  <span class="token punctuation">,</span> gv$datapump_session     ds
  <span class="token punctuation">,</span> gv$<span class="token keyword">session</span>              s
  <span class="token punctuation">,</span> gv$instance             i
  <span class="token punctuation">,</span> gv$process              p
<span class="token keyword">WHERE</span>
      s<span class="token punctuation">.</span>inst_id  <span class="token operator">=</span> i<span class="token punctuation">.</span>inst_id
  <span class="token operator">AND</span> s<span class="token punctuation">.</span>inst_id  <span class="token operator">=</span> p<span class="token punctuation">.</span>inst_id
  <span class="token operator">AND</span> ds<span class="token punctuation">.</span>inst_id <span class="token operator">=</span> i<span class="token punctuation">.</span>inst_id
  <span class="token operator">AND</span> dj<span class="token punctuation">.</span>inst_id <span class="token operator">=</span> i<span class="token punctuation">.</span>inst_id
  <span class="token operator">AND</span> s<span class="token punctuation">.</span>saddr    <span class="token operator">=</span> ds<span class="token punctuation">.</span>saddr
  <span class="token operator">AND</span> s<span class="token punctuation">.</span>paddr    <span class="token operator">=</span> p<span class="token punctuation">.</span>addr <span class="token punctuation">(</span><span class="token operator">+</span><span class="token punctuation">)</span>
  <span class="token operator">AND</span> dj<span class="token punctuation">.</span>job_id  <span class="token operator">=</span> ds<span class="token punctuation">.</span>job_id
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
    i<span class="token punctuation">.</span>instance_name
  <span class="token punctuation">,</span> dj<span class="token punctuation">.</span>owner_name
  <span class="token punctuation">,</span> dj<span class="token punctuation">.</span>job_name
  <span class="token punctuation">,</span> ds<span class="token punctuation">.</span><span class="token keyword">type</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="asm-disk-perf" tabindex="-1"><a class="header-anchor" href="#asm-disk-perf"><span>asm disk perf</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- +----------------------------------------------------------------------------+</span>
<span class="token comment">-- |                          Jeffrey M. Hunter                                 |</span>
<span class="token comment">-- |                      jhunter@idevelopment.info                             |</span>
<span class="token comment">-- |                         www.idevelopment.info                              |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- |      Copyright (c) 1998-2015 Jeffrey M. Hunter. All rights reserved.       |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- | DATABASE : Oracle                                                          |</span>
<span class="token comment">-- | FILE     : asm_disks_perf.sql                                              |</span>
<span class="token comment">-- | CLASS    : Automatic Storage Management                                    |</span>
<span class="token comment">-- | PURPOSE  : Provide a summary report of all disks contained within all ASM  |</span>
<span class="token comment">-- |            disk groups along with their performance metrics.               |</span>
<span class="token comment">-- | NOTE     : As with any code, ensure to test this script in a development   |</span>
<span class="token comment">-- |            environment before attempting to run it in production.          |</span>
<span class="token comment">-- +----------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> TERMOUT <span class="token keyword">OFF</span><span class="token punctuation">;</span>
<span class="token keyword">COLUMN</span> current_instance NEW_VALUE current_instance NOPRINT<span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> rpad<span class="token punctuation">(</span>sys_context<span class="token punctuation">(</span><span class="token string">&#39;USERENV&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;INSTANCE_NAME&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">)</span> current_instance <span class="token keyword">FROM</span> dual<span class="token punctuation">;</span>
<span class="token keyword">SET</span> TERMOUT <span class="token keyword">ON</span><span class="token punctuation">;</span>

PROMPT 
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>
PROMPT <span class="token operator">|</span> Report   : ASM <span class="token keyword">Disk</span> Performance                                        <span class="token operator">|</span>
PROMPT <span class="token operator">|</span> Instance : <span class="token operator">&amp;</span>current_instance                                           <span class="token operator">|</span>
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> ECHO        <span class="token keyword">OFF</span>
<span class="token keyword">SET</span> FEEDBACK    <span class="token number">6</span>
<span class="token keyword">SET</span> HEADING     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> LINESIZE    <span class="token number">256</span>
<span class="token keyword">SET</span> PAGESIZE    <span class="token number">50000</span>
<span class="token keyword">SET</span> TERMOUT     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> TIMING      <span class="token keyword">OFF</span>
<span class="token keyword">SET</span> TRIMOUT     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> TRIMSPOOL   <span class="token keyword">ON</span>
<span class="token keyword">SET</span> VERIFY      <span class="token keyword">OFF</span>

CLEAR <span class="token keyword">COLUMNS</span>
CLEAR BREAKS
CLEAR COMPUTES

<span class="token keyword">COLUMN</span> disk_group_name    FORMAT a20                    HEAD <span class="token string">&#39;Disk Group Name&#39;</span>
<span class="token keyword">COLUMN</span> disk_path          FORMAT a20                    HEAD <span class="token string">&#39;Disk Path&#39;</span>
<span class="token keyword">COLUMN</span> <span class="token keyword">reads</span>              FORMAT <span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>        HEAD <span class="token string">&#39;Reads&#39;</span>
<span class="token keyword">COLUMN</span> writes             FORMAT <span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>        HEAD <span class="token string">&#39;Writes&#39;</span>
<span class="token keyword">COLUMN</span> read_errs          FORMAT <span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>            HEAD <span class="token string">&#39;Read|Errors&#39;</span>
<span class="token keyword">COLUMN</span> write_errs         FORMAT <span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>            HEAD <span class="token string">&#39;Write|Errors&#39;</span>
<span class="token keyword">COLUMN</span> read_time          FORMAT <span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>        HEAD <span class="token string">&#39;Read|Time&#39;</span>
<span class="token keyword">COLUMN</span> write_time         FORMAT <span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>        HEAD <span class="token string">&#39;Write|Time&#39;</span>
<span class="token keyword">COLUMN</span> bytes_read         FORMAT <span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>    HEAD <span class="token string">&#39;Bytes|Read&#39;</span>
<span class="token keyword">COLUMN</span> bytes_written      FORMAT <span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>    HEAD <span class="token string">&#39;Bytes|Written&#39;</span>

<span class="token keyword">BREAK</span> <span class="token keyword">ON</span> report <span class="token keyword">ON</span> disk_group_name SKIP <span class="token number">2</span>

<span class="token keyword">COMPUTE</span> sum LABEL <span class="token string">&quot;&quot;</span>              <span class="token keyword">OF</span> <span class="token keyword">reads</span> writes read_errs write_errs read_time write_time bytes_read bytes_written <span class="token keyword">ON</span> disk_group_name
<span class="token keyword">COMPUTE</span> sum LABEL <span class="token string">&quot;Grand Total: &quot;</span> <span class="token keyword">OF</span> <span class="token keyword">reads</span> writes read_errs write_errs read_time write_time bytes_read bytes_written <span class="token keyword">ON</span> report

<span class="token keyword">SELECT</span>
    a<span class="token punctuation">.</span>name                disk_group_name
  <span class="token punctuation">,</span> b<span class="token punctuation">.</span>path                disk_path
  <span class="token punctuation">,</span> b<span class="token punctuation">.</span><span class="token keyword">reads</span>               <span class="token keyword">reads</span>
  <span class="token punctuation">,</span> b<span class="token punctuation">.</span>writes              writes
  <span class="token punctuation">,</span> b<span class="token punctuation">.</span>read_errs           read_errs 
  <span class="token punctuation">,</span> b<span class="token punctuation">.</span>write_errs          write_errs
  <span class="token punctuation">,</span> b<span class="token punctuation">.</span>read_time           read_time
  <span class="token punctuation">,</span> b<span class="token punctuation">.</span>write_time          write_time
  <span class="token punctuation">,</span> b<span class="token punctuation">.</span>bytes_read          bytes_read
  <span class="token punctuation">,</span> b<span class="token punctuation">.</span>bytes_written       bytes_written
<span class="token keyword">FROM</span>
    v$asm_diskgroup a <span class="token keyword">JOIN</span> v$asm_disk b <span class="token keyword">USING</span> <span class="token punctuation">(</span>group_number<span class="token punctuation">)</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
    a<span class="token punctuation">.</span>name
<span class="token operator">/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="asm-disks" tabindex="-1"><a class="header-anchor" href="#asm-disks"><span>asm disks</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- +----------------------------------------------------------------------------+</span>
<span class="token comment">-- |                          Jeffrey M. Hunter                                 |</span>
<span class="token comment">-- |                      jhunter@idevelopment.info                             |</span>
<span class="token comment">-- |                         www.idevelopment.info                              |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- |      Copyright (c) 1998-2015 Jeffrey M. Hunter. All rights reserved.       |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- | DATABASE : Oracle                                                          |</span>
<span class="token comment">-- | FILE     : asm_disks.sql                                                   |</span>
<span class="token comment">-- | CLASS    : Automatic Storage Management                                    |</span>
<span class="token comment">-- | PURPOSE  : Provide a summary report of all disks contained within all disk |</span>
<span class="token comment">-- |            groups. This script is also responsible for queriing all        |</span>
<span class="token comment">-- |            candidate disks - those that are not assigned to any disk       |</span>
<span class="token comment">-- |            group.                                                          |</span>
<span class="token comment">-- | NOTE     : As with any code, ensure to test this script in a development   |</span>
<span class="token comment">-- |            environment before attempting to run it in production.          |</span>
<span class="token comment">-- +----------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> TERMOUT <span class="token keyword">OFF</span><span class="token punctuation">;</span>
<span class="token keyword">COLUMN</span> current_instance NEW_VALUE current_instance NOPRINT<span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> rpad<span class="token punctuation">(</span>sys_context<span class="token punctuation">(</span><span class="token string">&#39;USERENV&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;INSTANCE_NAME&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">)</span> current_instance <span class="token keyword">FROM</span> dual<span class="token punctuation">;</span>
<span class="token keyword">SET</span> TERMOUT <span class="token keyword">ON</span><span class="token punctuation">;</span>

PROMPT 
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>
PROMPT <span class="token operator">|</span> Report   : ASM Disks                                                   <span class="token operator">|</span>
PROMPT <span class="token operator">|</span> Instance : <span class="token operator">&amp;</span>current_instance                                           <span class="token operator">|</span>
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> ECHO        <span class="token keyword">OFF</span>
<span class="token keyword">SET</span> FEEDBACK    <span class="token number">6</span>
<span class="token keyword">SET</span> HEADING     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> LINESIZE    <span class="token number">180</span>
<span class="token keyword">SET</span> PAGESIZE    <span class="token number">50000</span>
<span class="token keyword">SET</span> TERMOUT     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> TIMING      <span class="token keyword">OFF</span>
<span class="token keyword">SET</span> TRIMOUT     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> TRIMSPOOL   <span class="token keyword">ON</span>
<span class="token keyword">SET</span> VERIFY      <span class="token keyword">OFF</span>

CLEAR <span class="token keyword">COLUMNS</span>
CLEAR BREAKS
CLEAR COMPUTES

<span class="token keyword">COLUMN</span> disk_group_name        FORMAT a25           HEAD <span class="token string">&#39;Disk Group Name&#39;</span>
<span class="token keyword">COLUMN</span> disk_file_path         FORMAT a20           HEAD <span class="token string">&#39;Path&#39;</span>
<span class="token keyword">COLUMN</span> disk_file_name         FORMAT a20           HEAD <span class="token string">&#39;File Name&#39;</span>
<span class="token keyword">COLUMN</span> disk_file_fail_group   FORMAT a20           HEAD <span class="token string">&#39;Fail Group&#39;</span>
<span class="token keyword">COLUMN</span> total_mb               FORMAT <span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>   HEAD <span class="token string">&#39;File Size (MB)&#39;</span>
<span class="token keyword">COLUMN</span> used_mb                FORMAT <span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>   HEAD <span class="token string">&#39;Used Size (MB)&#39;</span>
<span class="token keyword">COLUMN</span> pct_used               FORMAT <span class="token number">999.99</span>        HEAD <span class="token string">&#39;Pct. Used&#39;</span>

<span class="token keyword">BREAK</span> <span class="token keyword">ON</span> report <span class="token keyword">ON</span> disk_group_name SKIP <span class="token number">1</span>

<span class="token keyword">COMPUTE</span> sum LABEL <span class="token string">&quot;&quot;</span>              <span class="token keyword">OF</span> total_mb used_mb <span class="token keyword">ON</span> disk_group_name
<span class="token keyword">COMPUTE</span> sum LABEL <span class="token string">&quot;Grand Total: &quot;</span> <span class="token keyword">OF</span> total_mb used_mb <span class="token keyword">ON</span> report

<span class="token keyword">SELECT</span>
    NVL<span class="token punctuation">(</span>a<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token string">&#39;[CANDIDATE]&#39;</span><span class="token punctuation">)</span>                       disk_group_name
  <span class="token punctuation">,</span> b<span class="token punctuation">.</span>path                                           disk_file_path
  <span class="token punctuation">,</span> b<span class="token punctuation">.</span>name                                           disk_file_name
  <span class="token punctuation">,</span> b<span class="token punctuation">.</span>failgroup                                      disk_file_fail_group
  <span class="token punctuation">,</span> b<span class="token punctuation">.</span>total_mb                                       total_mb
  <span class="token punctuation">,</span> <span class="token punctuation">(</span>b<span class="token punctuation">.</span>total_mb <span class="token operator">-</span> b<span class="token punctuation">.</span>free_mb<span class="token punctuation">)</span>                         used_mb
  <span class="token punctuation">,</span> <span class="token function">ROUND</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">-</span> <span class="token punctuation">(</span>b<span class="token punctuation">.</span>free_mb <span class="token operator">/</span> b<span class="token punctuation">.</span>total_mb<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>      pct_used
<span class="token keyword">FROM</span>
    v$asm_diskgroup a <span class="token keyword">RIGHT</span> <span class="token keyword">OUTER</span> <span class="token keyword">JOIN</span> v$asm_disk b <span class="token keyword">USING</span> <span class="token punctuation">(</span>group_number<span class="token punctuation">)</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
    a<span class="token punctuation">.</span>name
<span class="token operator">/</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="asm-disk-group" tabindex="-1"><a class="header-anchor" href="#asm-disk-group"><span>asm disk group</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- +----------------------------------------------------------------------------+</span>
<span class="token comment">-- |                          Jeffrey M. Hunter                                 |</span>
<span class="token comment">-- |                      jhunter@idevelopment.info                             |</span>
<span class="token comment">-- |                         www.idevelopment.info                              |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- |      Copyright (c) 1998-2015 Jeffrey M. Hunter. All rights reserved.       |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- | DATABASE : Oracle                                                          |</span>
<span class="token comment">-- | FILE     : asm_diskgroups.sql                                              |</span>
<span class="token comment">-- | CLASS    : Automatic Storage Management                                    |</span>
<span class="token comment">-- | PURPOSE  : Provide a summary report of all disk groups.                    |</span>
<span class="token comment">-- | NOTE     : As with any code, ensure to test this script in a development   |</span>
<span class="token comment">-- |            environment before attempting to run it in production.          |</span>
<span class="token comment">-- +----------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> TERMOUT <span class="token keyword">OFF</span><span class="token punctuation">;</span>
<span class="token keyword">COLUMN</span> current_instance NEW_VALUE current_instance NOPRINT<span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> rpad<span class="token punctuation">(</span>sys_context<span class="token punctuation">(</span><span class="token string">&#39;USERENV&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;INSTANCE_NAME&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">)</span> current_instance <span class="token keyword">FROM</span> dual<span class="token punctuation">;</span>
<span class="token keyword">SET</span> TERMOUT <span class="token keyword">ON</span><span class="token punctuation">;</span>

PROMPT 
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>
PROMPT <span class="token operator">|</span> Report   : ASM <span class="token keyword">Disk</span> Groups                                             <span class="token operator">|</span>
PROMPT <span class="token operator">|</span> Instance : <span class="token operator">&amp;</span>current_instance                                           <span class="token operator">|</span>
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> ECHO        <span class="token keyword">OFF</span>
<span class="token keyword">SET</span> FEEDBACK    <span class="token number">6</span>
<span class="token keyword">SET</span> HEADING     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> LINESIZE    <span class="token number">180</span>
<span class="token keyword">SET</span> PAGESIZE    <span class="token number">50000</span>
<span class="token keyword">SET</span> TERMOUT     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> TIMING      <span class="token keyword">OFF</span>
<span class="token keyword">SET</span> TRIMOUT     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> TRIMSPOOL   <span class="token keyword">ON</span>
<span class="token keyword">SET</span> VERIFY      <span class="token keyword">OFF</span>

CLEAR <span class="token keyword">COLUMNS</span>
CLEAR BREAKS
CLEAR COMPUTES

<span class="token keyword">COLUMN</span> group_name             FORMAT a25           HEAD <span class="token string">&#39;Disk Group|Name&#39;</span>
<span class="token keyword">COLUMN</span> sector_size            FORMAT <span class="token number">99</span><span class="token punctuation">,</span><span class="token number">999</span>        HEAD <span class="token string">&#39;Sector|Size&#39;</span>
<span class="token keyword">COLUMN</span> block_size             FORMAT <span class="token number">99</span><span class="token punctuation">,</span><span class="token number">999</span>        HEAD <span class="token string">&#39;Block|Size&#39;</span>
<span class="token keyword">COLUMN</span> allocation_unit_size   FORMAT <span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>   HEAD <span class="token string">&#39;Allocation|Unit Size&#39;</span>
<span class="token keyword">COLUMN</span> state                  FORMAT a11           HEAD <span class="token string">&#39;State&#39;</span>
<span class="token keyword">COLUMN</span> <span class="token keyword">type</span>                   FORMAT a6            HEAD <span class="token string">&#39;Type&#39;</span>
<span class="token keyword">COLUMN</span> total_mb               FORMAT <span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>   HEAD <span class="token string">&#39;Total Size (MB)&#39;</span>
<span class="token keyword">COLUMN</span> used_mb                FORMAT <span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>   HEAD <span class="token string">&#39;Used Size (MB)&#39;</span>
<span class="token keyword">COLUMN</span> pct_used               FORMAT <span class="token number">999.99</span>        HEAD <span class="token string">&#39;Pct. Used&#39;</span>

<span class="token keyword">BREAK</span> <span class="token keyword">ON</span> report <span class="token keyword">ON</span> disk_group_name SKIP <span class="token number">1</span>

<span class="token keyword">COMPUTE</span> sum LABEL <span class="token string">&quot;Grand Total: &quot;</span> <span class="token keyword">OF</span> total_mb used_mb <span class="token keyword">ON</span> report

<span class="token keyword">SELECT</span>
    name                                     group_name
  <span class="token punctuation">,</span> sector_size                              sector_size
  <span class="token punctuation">,</span> block_size                               block_size
  <span class="token punctuation">,</span> allocation_unit_size                     allocation_unit_size
  <span class="token punctuation">,</span> state                                    state
  <span class="token punctuation">,</span> <span class="token keyword">type</span>                                     <span class="token keyword">type</span>
  <span class="token punctuation">,</span> total_mb                                 total_mb
  <span class="token punctuation">,</span> <span class="token punctuation">(</span>total_mb <span class="token operator">-</span> free_mb<span class="token punctuation">)</span>                     used_mb
  <span class="token punctuation">,</span> <span class="token function">ROUND</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">-</span> <span class="token punctuation">(</span>free_mb <span class="token operator">/</span> total_mb<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>  pct_used
<span class="token keyword">FROM</span>
    v$asm_diskgroup
<span class="token keyword">WHERE</span>
    total_mb <span class="token operator">!=</span> <span class="token number">0</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
    name
<span class="token operator">/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="asm-alias" tabindex="-1"><a class="header-anchor" href="#asm-alias"><span>asm alias</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- +----------------------------------------------------------------------------+</span>
<span class="token comment">-- |                          Jeffrey M. Hunter                                 |</span>
<span class="token comment">-- |                      jhunter@idevelopment.info                             |</span>
<span class="token comment">-- |                         www.idevelopment.info                              |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- |      Copyright (c) 1998-2015 Jeffrey M. Hunter. All rights reserved.       |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- | DATABASE : Oracle                                                          |</span>
<span class="token comment">-- | FILE     : asm_alias.sql                                                   |</span>
<span class="token comment">-- | CLASS    : Automatic Storage Management                                    |</span>
<span class="token comment">-- | PURPOSE  : Provide a summary report of all alias definitions contained     |</span>
<span class="token comment">-- |            within all ASM disk groups.                                     |</span>
<span class="token comment">-- | NOTE     : As with any code, ensure to test this script in a development   |</span>
<span class="token comment">-- |            environment before attempting to run it in production.          |</span>
<span class="token comment">-- +----------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> TERMOUT <span class="token keyword">OFF</span><span class="token punctuation">;</span>
<span class="token keyword">COLUMN</span> current_instance NEW_VALUE current_instance NOPRINT<span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> rpad<span class="token punctuation">(</span>sys_context<span class="token punctuation">(</span><span class="token string">&#39;USERENV&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;INSTANCE_NAME&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">)</span> current_instance <span class="token keyword">FROM</span> dual<span class="token punctuation">;</span>
<span class="token keyword">SET</span> TERMOUT <span class="token keyword">ON</span><span class="token punctuation">;</span>

PROMPT 
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>
PROMPT <span class="token operator">|</span> Report   : ASM Aliases                                                 <span class="token operator">|</span>
PROMPT <span class="token operator">|</span> Instance : <span class="token operator">&amp;</span>current_instance                                           <span class="token operator">|</span>
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> ECHO        <span class="token keyword">OFF</span>
<span class="token keyword">SET</span> FEEDBACK    <span class="token number">6</span>
<span class="token keyword">SET</span> HEADING     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> LINESIZE    <span class="token number">180</span>
<span class="token keyword">SET</span> PAGESIZE    <span class="token number">50000</span>
<span class="token keyword">SET</span> TERMOUT     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> TIMING      <span class="token keyword">OFF</span>
<span class="token keyword">SET</span> TRIMOUT     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> TRIMSPOOL   <span class="token keyword">ON</span>
<span class="token keyword">SET</span> VERIFY      <span class="token keyword">OFF</span>

CLEAR <span class="token keyword">COLUMNS</span>
CLEAR BREAKS
CLEAR COMPUTES

<span class="token keyword">COLUMN</span> disk_group_name        FORMAT a25         HEAD <span class="token string">&#39;Disk Group Name&#39;</span>
<span class="token keyword">COLUMN</span> alias_name             FORMAT a50         HEAD <span class="token string">&#39;Alias Name&#39;</span>
<span class="token keyword">COLUMN</span> file_number                               HEAD <span class="token string">&#39;File|Number&#39;</span>
<span class="token keyword">COLUMN</span> file_incarnation                          HEAD <span class="token string">&#39;File|Incarnation&#39;</span>
<span class="token keyword">COLUMN</span> alias_index                               HEAD <span class="token string">&#39;Alias|Index&#39;</span>
<span class="token keyword">COLUMN</span> alias_incarnation                         HEAD <span class="token string">&#39;Alias|Incarnation&#39;</span>
<span class="token keyword">COLUMN</span> parent_index                              HEAD <span class="token string">&#39;Parent|Index&#39;</span>
<span class="token keyword">COLUMN</span> reference_index                           HEAD <span class="token string">&#39;Reference|Index&#39;</span>
<span class="token keyword">COLUMN</span> alias_directory        FORMAT a10         HEAD <span class="token string">&#39;Alias|Directory?&#39;</span>
<span class="token keyword">COLUMN</span> system_created         FORMAT a8          HEAD <span class="token string">&#39;System|Created?&#39;</span>

<span class="token keyword">BREAK</span> <span class="token keyword">ON</span> report <span class="token keyword">ON</span> disk_group_name SKIP <span class="token number">1</span>

<span class="token keyword">SELECT</span>
    g<span class="token punctuation">.</span>name               disk_group_name
  <span class="token punctuation">,</span> a<span class="token punctuation">.</span>name               alias_name
  <span class="token punctuation">,</span> a<span class="token punctuation">.</span>file_number        file_number
  <span class="token punctuation">,</span> a<span class="token punctuation">.</span>file_incarnation   file_incarnation
  <span class="token punctuation">,</span> a<span class="token punctuation">.</span>alias_index        alias_index
  <span class="token punctuation">,</span> a<span class="token punctuation">.</span>alias_incarnation  alias_incarnation
  <span class="token punctuation">,</span> a<span class="token punctuation">.</span>parent_index       parent_index
  <span class="token punctuation">,</span> a<span class="token punctuation">.</span>reference_index    reference_index
  <span class="token punctuation">,</span> a<span class="token punctuation">.</span>alias_directory    alias_directory
  <span class="token punctuation">,</span> a<span class="token punctuation">.</span>system_created     system_created
<span class="token keyword">FROM</span>
    v$asm_alias a <span class="token keyword">JOIN</span> v$asm_diskgroup g <span class="token keyword">USING</span> <span class="token punctuation">(</span>group_number<span class="token punctuation">)</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
    g<span class="token punctuation">.</span>name
  <span class="token punctuation">,</span> a<span class="token punctuation">.</span>file_number
<span class="token operator">/</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="asm-client" tabindex="-1"><a class="header-anchor" href="#asm-client"><span>asm client</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- +----------------------------------------------------------------------------+</span>
<span class="token comment">-- |                          Jeffrey M. Hunter                                 |</span>
<span class="token comment">-- |                      jhunter@idevelopment.info                             |</span>
<span class="token comment">-- |                         www.idevelopment.info                              |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- |      Copyright (c) 1998-2015 Jeffrey M. Hunter. All rights reserved.       |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- | DATABASE : Oracle                                                          |</span>
<span class="token comment">-- | FILE     : asm_clients.sql                                                 |</span>
<span class="token comment">-- | CLASS    : Automatic Storage Management                                    |</span>
<span class="token comment">-- | PURPOSE  : Provide a summary report of all clients making use of this ASM  |</span>
<span class="token comment">-- |            instance.                                                       |</span>
<span class="token comment">-- | NOTE     : As with any code, ensure to test this script in a development   |</span>
<span class="token comment">-- |            environment before attempting to run it in production.          |</span>
<span class="token comment">-- +----------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> TERMOUT <span class="token keyword">OFF</span><span class="token punctuation">;</span>
<span class="token keyword">COLUMN</span> current_instance NEW_VALUE current_instance NOPRINT<span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> rpad<span class="token punctuation">(</span>sys_context<span class="token punctuation">(</span><span class="token string">&#39;USERENV&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;INSTANCE_NAME&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">)</span> current_instance <span class="token keyword">FROM</span> dual<span class="token punctuation">;</span>
<span class="token keyword">SET</span> TERMOUT <span class="token keyword">ON</span><span class="token punctuation">;</span>

PROMPT 
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>
PROMPT <span class="token operator">|</span> Report   : ASM Clients                                                 <span class="token operator">|</span>
PROMPT <span class="token operator">|</span> Instance : <span class="token operator">&amp;</span>current_instance                                           <span class="token operator">|</span>
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> ECHO        <span class="token keyword">OFF</span>
<span class="token keyword">SET</span> FEEDBACK    <span class="token number">6</span>
<span class="token keyword">SET</span> HEADING     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> LINESIZE    <span class="token number">180</span>
<span class="token keyword">SET</span> PAGESIZE    <span class="token number">50000</span>
<span class="token keyword">SET</span> TERMOUT     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> TIMING      <span class="token keyword">OFF</span>
<span class="token keyword">SET</span> TRIMOUT     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> TRIMSPOOL   <span class="token keyword">ON</span>
<span class="token keyword">SET</span> VERIFY      <span class="token keyword">OFF</span>

CLEAR <span class="token keyword">COLUMNS</span>
CLEAR BREAKS
CLEAR COMPUTES

<span class="token keyword">COLUMN</span> disk_group_name        FORMAT a25           HEAD <span class="token string">&#39;Disk Group Name&#39;</span>
<span class="token keyword">COLUMN</span> instance_name          FORMAT a20           HEAD <span class="token string">&#39;Instance Name&#39;</span>
<span class="token keyword">COLUMN</span> db_name                FORMAT a9            HEAD <span class="token string">&#39;Database Name&#39;</span>
<span class="token keyword">COLUMN</span> <span class="token keyword">status</span>                 FORMAT a12           HEAD <span class="token string">&#39;Status&#39;</span>

<span class="token keyword">SELECT</span>
    a<span class="token punctuation">.</span>name              disk_group_name
  <span class="token punctuation">,</span> c<span class="token punctuation">.</span>instance_name     instance_name
  <span class="token punctuation">,</span> c<span class="token punctuation">.</span>db_name           db_name
  <span class="token punctuation">,</span> c<span class="token punctuation">.</span><span class="token keyword">status</span>            <span class="token keyword">status</span>
<span class="token keyword">FROM</span>
    v$asm_diskgroup a <span class="token keyword">JOIN</span> v$asm_client c <span class="token keyword">USING</span> <span class="token punctuation">(</span>group_number<span class="token punctuation">)</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
    a<span class="token punctuation">.</span>name
<span class="token operator">/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="asm-drop-files" tabindex="-1"><a class="header-anchor" href="#asm-drop-files"><span>asm drop files</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- +----------------------------------------------------------------------------+</span>
<span class="token comment">-- |                          Jeffrey M. Hunter                                 |</span>
<span class="token comment">-- |                      jhunter@idevelopment.info                             |</span>
<span class="token comment">-- |                         www.idevelopment.info                              |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- |      Copyright (c) 1998-2015 Jeffrey M. Hunter. All rights reserved.       |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- | DATABASE : Oracle                                                          |</span>
<span class="token comment">-- | FILE     : asm_drop_files.sql                                              |</span>
<span class="token comment">-- | CLASS    : Automatic Storage Management                                    |</span>
<span class="token comment">-- | PURPOSE  : Used to create a SQL script that removes all ASM files          |</span>
<span class="token comment">-- |            contained within all diskgroups.                                |</span>
<span class="token comment">-- | NOTE     : As with any code, ensure to test this script in a development   |</span>
<span class="token comment">-- |            environment before attempting to run it in production.          |</span>
<span class="token comment">-- +----------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> ECHO        <span class="token keyword">OFF</span>
<span class="token keyword">SET</span> FEEDBACK    <span class="token keyword">OFF</span>
<span class="token keyword">SET</span> HEADING     <span class="token keyword">OFF</span>
<span class="token keyword">SET</span> LINESIZE    <span class="token number">256</span>
<span class="token keyword">SET</span> PAGESIZE    <span class="token number">50000</span>
<span class="token keyword">SET</span> TERMOUT     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> TIMING      <span class="token keyword">OFF</span>
<span class="token keyword">SET</span> TRIMOUT     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> TRIMSPOOL   <span class="token keyword">ON</span>
<span class="token keyword">SET</span> VERIFY      <span class="token keyword">OFF</span>

CLEAR <span class="token keyword">COLUMNS</span>
CLEAR BREAKS
CLEAR COMPUTES

<span class="token keyword">COLUMN</span> full_alias_path    FORMAT a255       HEAD <span class="token string">&#39;File Name&#39;</span>
<span class="token keyword">COLUMN</span> disk_group_name    NOPRINT

<span class="token keyword">SELECT</span>
    <span class="token string">&#39;ALTER DISKGROUP &#39;</span>  <span class="token operator">||</span>
        disk_group_name <span class="token operator">||</span>
        <span class="token string">&#39; DROP FILE &#39;&#39;&#39;</span> <span class="token operator">||</span> CONCAT<span class="token punctuation">(</span><span class="token string">&#39;+&#39;</span> <span class="token operator">||</span> disk_group_name<span class="token punctuation">,</span> SYS_CONNECT_BY_PATH<span class="token punctuation">(</span>alias_name<span class="token punctuation">,</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">&#39;&#39;&#39;;&#39;</span> full_alias_path
<span class="token keyword">FROM</span>
    <span class="token punctuation">(</span> <span class="token keyword">SELECT</span>
          g<span class="token punctuation">.</span>name               disk_group_name
        <span class="token punctuation">,</span> a<span class="token punctuation">.</span>parent_index       pindex
        <span class="token punctuation">,</span> a<span class="token punctuation">.</span>name               alias_name
        <span class="token punctuation">,</span> a<span class="token punctuation">.</span>reference_index    rindex
        <span class="token punctuation">,</span> f<span class="token punctuation">.</span><span class="token keyword">type</span>               <span class="token keyword">type</span>
      <span class="token keyword">FROM</span>
          v$asm_file f <span class="token keyword">RIGHT</span> <span class="token keyword">OUTER</span> <span class="token keyword">JOIN</span> v$asm_alias     a <span class="token keyword">USING</span> <span class="token punctuation">(</span>group_number<span class="token punctuation">,</span> file_number<span class="token punctuation">)</span>
                                   <span class="token keyword">JOIN</span> v$asm_diskgroup g <span class="token keyword">USING</span> <span class="token punctuation">(</span>group_number<span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
<span class="token keyword">WHERE</span> <span class="token keyword">type</span> <span class="token operator">IS</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span>
<span class="token keyword">START</span> <span class="token keyword">WITH</span> <span class="token punctuation">(</span><span class="token function">MOD</span><span class="token punctuation">(</span>pindex<span class="token punctuation">,</span> POWER<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">24</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">CONNECT</span> <span class="token keyword">BY</span> PRIOR rindex <span class="token operator">=</span> pindex
<span class="token operator">/</span>

<span class="token keyword">SET</span> FEEDBACK    <span class="token number">6</span>
<span class="token keyword">SET</span> HEAD        <span class="token keyword">ON</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="asm-files" tabindex="-1"><a class="header-anchor" href="#asm-files"><span>asm files</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- +----------------------------------------------------------------------------+</span>
<span class="token comment">-- |                          Jeffrey M. Hunter                                 |</span>
<span class="token comment">-- |                      jhunter@idevelopment.info                             |</span>
<span class="token comment">-- |                         www.idevelopment.info                              |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- |      Copyright (c) 1998-2015 Jeffrey M. Hunter. All rights reserved.       |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- | DATABASE : Oracle                                                          |</span>
<span class="token comment">-- | FILE     : asm_files.sql                                                   |</span>
<span class="token comment">-- | CLASS    : Automatic Storage Management                                    |</span>
<span class="token comment">-- | PURPOSE  : Provide a summary report of all files, file metadata, and       |</span>
<span class="token comment">-- |            volume information for all ASM disk groups customized for       |</span>
<span class="token comment">-- |            Oracle 11g and higher.                                          |</span>
<span class="token comment">-- | NOTE     : As with any code, ensure to test this script in a development   |</span>
<span class="token comment">-- |            environment before attempting to run it in production.          |</span>
<span class="token comment">-- +----------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> TERMOUT <span class="token keyword">OFF</span><span class="token punctuation">;</span>
<span class="token keyword">COLUMN</span> current_instance NEW_VALUE current_instance NOPRINT<span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> rpad<span class="token punctuation">(</span>sys_context<span class="token punctuation">(</span><span class="token string">&#39;USERENV&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;INSTANCE_NAME&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">)</span> current_instance <span class="token keyword">FROM</span> dual<span class="token punctuation">;</span>
<span class="token keyword">SET</span> TERMOUT <span class="token keyword">ON</span><span class="token punctuation">;</span>

PROMPT 
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>
PROMPT <span class="token operator">|</span> Report   : ASM Files                                                   <span class="token operator">|</span>
PROMPT <span class="token operator">|</span> Instance : <span class="token operator">&amp;</span>current_instance                                           <span class="token operator">|</span>
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> ECHO        <span class="token keyword">OFF</span>
<span class="token keyword">SET</span> FEEDBACK    <span class="token number">6</span>
<span class="token keyword">SET</span> HEADING     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> LINESIZE    <span class="token number">180</span>
<span class="token keyword">SET</span> PAGESIZE    <span class="token number">50000</span>
<span class="token keyword">SET</span> TERMOUT     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> TIMING      <span class="token keyword">OFF</span>
<span class="token keyword">SET</span> TRIMOUT     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> TRIMSPOOL   <span class="token keyword">ON</span>
<span class="token keyword">SET</span> VERIFY      <span class="token keyword">OFF</span>

CLEAR <span class="token keyword">COLUMNS</span>
CLEAR BREAKS
CLEAR COMPUTES

<span class="token keyword">COLUMN</span> full_path              FORMAT a75                  HEAD <span class="token string">&#39;ASM File Name / Volume Name / Device Name&#39;</span>
<span class="token keyword">COLUMN</span> system_created         FORMAT a8                   HEAD <span class="token string">&#39;System|Created?&#39;</span>
<span class="token keyword">COLUMN</span> bytes                  FORMAT <span class="token number">9</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>    HEAD <span class="token string">&#39;Bytes&#39;</span>
<span class="token keyword">COLUMN</span> space                  FORMAT <span class="token number">9</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>    HEAD <span class="token string">&#39;Space&#39;</span>
<span class="token keyword">COLUMN</span> <span class="token keyword">type</span>                   FORMAT a18                  HEAD <span class="token string">&#39;File Type&#39;</span>
<span class="token keyword">COLUMN</span> redundancy             FORMAT a12                  HEAD <span class="token string">&#39;Redundancy&#39;</span>
<span class="token keyword">COLUMN</span> <span class="token keyword">striped</span>                FORMAT a8                   HEAD <span class="token string">&#39;Striped&#39;</span>
<span class="token keyword">COLUMN</span> creation_date          FORMAT a20                  HEAD <span class="token string">&#39;Creation Date&#39;</span>
<span class="token keyword">COLUMN</span> disk_group_name        noprint

<span class="token keyword">BREAK</span> <span class="token keyword">ON</span> report <span class="token keyword">ON</span> disk_group_name SKIP <span class="token number">1</span>

<span class="token keyword">COMPUTE</span> sum LABEL <span class="token string">&quot;&quot;</span>              <span class="token keyword">OF</span> bytes space <span class="token keyword">ON</span> disk_group_name
<span class="token keyword">COMPUTE</span> sum LABEL <span class="token string">&quot;Grand Total: &quot;</span> <span class="token keyword">OF</span> bytes space <span class="token keyword">ON</span> report

<span class="token keyword">SELECT</span>
    CONCAT<span class="token punctuation">(</span><span class="token string">&#39;+&#39;</span> <span class="token operator">||</span> db_files<span class="token punctuation">.</span>disk_group_name<span class="token punctuation">,</span> SYS_CONNECT_BY_PATH<span class="token punctuation">(</span>db_files<span class="token punctuation">.</span>alias_name<span class="token punctuation">,</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> full_path
  <span class="token punctuation">,</span> db_files<span class="token punctuation">.</span>bytes
  <span class="token punctuation">,</span> db_files<span class="token punctuation">.</span>space
  <span class="token punctuation">,</span> NVL<span class="token punctuation">(</span>LPAD<span class="token punctuation">(</span>db_files<span class="token punctuation">.</span><span class="token keyword">type</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;&lt;DIRECTORY&gt;&#39;</span><span class="token punctuation">)</span>  <span class="token keyword">type</span>
  <span class="token punctuation">,</span> db_files<span class="token punctuation">.</span>creation_date
  <span class="token punctuation">,</span> db_files<span class="token punctuation">.</span>disk_group_name
  <span class="token punctuation">,</span> LPAD<span class="token punctuation">(</span>db_files<span class="token punctuation">.</span>system_created<span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span> system_created
<span class="token keyword">FROM</span>
    <span class="token punctuation">(</span> <span class="token keyword">SELECT</span>
          g<span class="token punctuation">.</span>name               disk_group_name
        <span class="token punctuation">,</span> a<span class="token punctuation">.</span>parent_index       pindex
        <span class="token punctuation">,</span> a<span class="token punctuation">.</span>name               alias_name
        <span class="token punctuation">,</span> a<span class="token punctuation">.</span>reference_index    rindex
        <span class="token punctuation">,</span> a<span class="token punctuation">.</span>system_created     system_created
        <span class="token punctuation">,</span> f<span class="token punctuation">.</span>bytes              bytes
        <span class="token punctuation">,</span> f<span class="token punctuation">.</span>space              space
        <span class="token punctuation">,</span> f<span class="token punctuation">.</span><span class="token keyword">type</span>               <span class="token keyword">type</span>
        <span class="token punctuation">,</span> TO_CHAR<span class="token punctuation">(</span>f<span class="token punctuation">.</span>creation_date<span class="token punctuation">,</span> <span class="token string">&#39;DD-MON-YYYY HH24:MI:SS&#39;</span><span class="token punctuation">)</span>  creation_date
      <span class="token keyword">FROM</span>
          v$asm_file f <span class="token keyword">RIGHT</span> <span class="token keyword">OUTER</span> <span class="token keyword">JOIN</span> v$asm_alias     a <span class="token keyword">USING</span> <span class="token punctuation">(</span>group_number<span class="token punctuation">,</span> file_number<span class="token punctuation">)</span>
                                   <span class="token keyword">JOIN</span> v$asm_diskgroup g <span class="token keyword">USING</span> <span class="token punctuation">(</span>group_number<span class="token punctuation">)</span>
    <span class="token punctuation">)</span> db_files
<span class="token keyword">WHERE</span> db_files<span class="token punctuation">.</span><span class="token keyword">type</span> <span class="token operator">IS</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span>
<span class="token keyword">START</span> <span class="token keyword">WITH</span> <span class="token punctuation">(</span><span class="token function">MOD</span><span class="token punctuation">(</span>db_files<span class="token punctuation">.</span>pindex<span class="token punctuation">,</span> POWER<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">24</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">CONNECT</span> <span class="token keyword">BY</span> PRIOR db_files<span class="token punctuation">.</span>rindex <span class="token operator">=</span> db_files<span class="token punctuation">.</span>pindex
<span class="token keyword">UNION</span>
<span class="token keyword">SELECT</span>
    <span class="token string">&#39;+&#39;</span> <span class="token operator">||</span> volume_files<span class="token punctuation">.</span>disk_group_name <span class="token operator">||</span>  <span class="token string">&#39; [&#39;</span> <span class="token operator">||</span> volume_files<span class="token punctuation">.</span>volume_name <span class="token operator">||</span> <span class="token string">&#39;] &#39;</span> <span class="token operator">||</span>  volume_files<span class="token punctuation">.</span>volume_device full_path
  <span class="token punctuation">,</span> volume_files<span class="token punctuation">.</span>bytes
  <span class="token punctuation">,</span> volume_files<span class="token punctuation">.</span>space
  <span class="token punctuation">,</span> NVL<span class="token punctuation">(</span>LPAD<span class="token punctuation">(</span>volume_files<span class="token punctuation">.</span><span class="token keyword">type</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;&lt;DIRECTORY&gt;&#39;</span><span class="token punctuation">)</span>  <span class="token keyword">type</span>
  <span class="token punctuation">,</span> volume_files<span class="token punctuation">.</span>creation_date
  <span class="token punctuation">,</span> volume_files<span class="token punctuation">.</span>disk_group_name
  <span class="token punctuation">,</span> <span class="token boolean">null</span>
<span class="token keyword">FROM</span>
    <span class="token punctuation">(</span> <span class="token keyword">SELECT</span>
          g<span class="token punctuation">.</span>name               disk_group_name
        <span class="token punctuation">,</span> v<span class="token punctuation">.</span>volume_name        volume_name
        <span class="token punctuation">,</span> v<span class="token punctuation">.</span>volume_device       volume_device
        <span class="token punctuation">,</span> f<span class="token punctuation">.</span>bytes              bytes
        <span class="token punctuation">,</span> f<span class="token punctuation">.</span>space              space
        <span class="token punctuation">,</span> f<span class="token punctuation">.</span><span class="token keyword">type</span>               <span class="token keyword">type</span>
        <span class="token punctuation">,</span> TO_CHAR<span class="token punctuation">(</span>f<span class="token punctuation">.</span>creation_date<span class="token punctuation">,</span> <span class="token string">&#39;DD-MON-YYYY HH24:MI:SS&#39;</span><span class="token punctuation">)</span>  creation_date
      <span class="token keyword">FROM</span>
          v$asm_file f <span class="token keyword">RIGHT</span> <span class="token keyword">OUTER</span> <span class="token keyword">JOIN</span> v$asm_volume    v <span class="token keyword">USING</span> <span class="token punctuation">(</span>group_number<span class="token punctuation">,</span> file_number<span class="token punctuation">)</span>
                                   <span class="token keyword">JOIN</span> v$asm_diskgroup g <span class="token keyword">USING</span> <span class="token punctuation">(</span>group_number<span class="token punctuation">)</span>
    <span class="token punctuation">)</span> volume_files
<span class="token keyword">WHERE</span> volume_files<span class="token punctuation">.</span><span class="token keyword">type</span> <span class="token operator">IS</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span>
<span class="token operator">/</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="asmm-components" tabindex="-1"><a class="header-anchor" href="#asmm-components"><span>asmm components</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- +----------------------------------------------------------------------------+</span>
<span class="token comment">-- |                          Jeffrey M. Hunter                                 |</span>
<span class="token comment">-- |                      jhunter@idevelopment.info                             |</span>
<span class="token comment">-- |                         www.idevelopment.info                              |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- |      Copyright (c) 1998-2015 Jeffrey M. Hunter. All rights reserved.       |</span>
<span class="token comment">-- |----------------------------------------------------------------------------|</span>
<span class="token comment">-- | DATABASE : Oracle                                                          |</span>
<span class="token comment">-- | FILE     : asmm_components.sql                                             |</span>
<span class="token comment">-- | CLASS    : Automatic Shared Memory Management                              |</span>
<span class="token comment">-- | PURPOSE  : Provide a summary report of all dynamic components as part of   |</span>
<span class="token comment">-- |            Oracle&#39;s ASMM configuration.                                    |</span>
<span class="token comment">-- | NOTE     : As with any code, ensure to test this script in a development   |</span>
<span class="token comment">-- |            environment before attempting to run it in production.          |</span>
<span class="token comment">-- +----------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> TERMOUT <span class="token keyword">OFF</span><span class="token punctuation">;</span>
<span class="token keyword">COLUMN</span> current_instance NEW_VALUE current_instance NOPRINT<span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> rpad<span class="token punctuation">(</span>instance_name<span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">)</span> current_instance <span class="token keyword">FROM</span> v$instance<span class="token punctuation">;</span>
<span class="token keyword">SET</span> TERMOUT <span class="token keyword">ON</span><span class="token punctuation">;</span>

PROMPT 
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>
PROMPT <span class="token operator">|</span> Report   : ASMM Components                                             <span class="token operator">|</span>
PROMPT <span class="token operator">|</span> Instance : <span class="token operator">&amp;</span>current_instance                                           <span class="token operator">|</span>
PROMPT <span class="token operator">+</span><span class="token comment">------------------------------------------------------------------------+</span>

<span class="token keyword">SET</span> ECHO        <span class="token keyword">OFF</span>
<span class="token keyword">SET</span> FEEDBACK    <span class="token number">6</span>
<span class="token keyword">SET</span> HEADING     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> LINESIZE    <span class="token number">180</span>
<span class="token keyword">SET</span> PAGESIZE    <span class="token number">50000</span>
<span class="token keyword">SET</span> TERMOUT     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> TIMING      <span class="token keyword">OFF</span>
<span class="token keyword">SET</span> TRIMOUT     <span class="token keyword">ON</span>
<span class="token keyword">SET</span> TRIMSPOOL   <span class="token keyword">ON</span>
<span class="token keyword">SET</span> VERIFY      <span class="token keyword">OFF</span>

CLEAR <span class="token keyword">COLUMNS</span>
CLEAR BREAKS
CLEAR COMPUTES

<span class="token keyword">COLUMN</span> component             FORMAT a25              HEAD <span class="token string">&#39;Component Name&#39;</span>
<span class="token keyword">COLUMN</span> current_size          FORMAT <span class="token number">9</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>    HEAD <span class="token string">&#39;Current Size&#39;</span>
<span class="token keyword">COLUMN</span> min_size              FORMAT <span class="token number">9</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>    HEAD <span class="token string">&#39;Min Size&#39;</span>
<span class="token keyword">COLUMN</span> max_size              FORMAT <span class="token number">9</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>    HEAD <span class="token string">&#39;Max Size&#39;</span>
<span class="token keyword">COLUMN</span> user_specified_size   FORMAT <span class="token number">9</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>    HEAD <span class="token string">&#39;User Specified|Size&#39;</span>
<span class="token keyword">COLUMN</span> oper_count            FORMAT <span class="token number">9</span><span class="token punctuation">,</span><span class="token number">999</span>            HEAD <span class="token string">&#39;Oper.|Count&#39;</span>
<span class="token keyword">COLUMN</span> last_oper_type        FORMAT a10              HEAD <span class="token string">&#39;Last Oper.|Type&#39;</span>
<span class="token keyword">COLUMN</span> last_oper_mode        FORMAT a10              HEAD <span class="token string">&#39;Last Oper.|Mode&#39;</span>
<span class="token keyword">COLUMN</span> last_oper_time        FORMAT a20              HEAD <span class="token string">&#39;Last Oper.|Time&#39;</span>
<span class="token keyword">COLUMN</span> granule_size          FORMAT <span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span><span class="token punctuation">,</span><span class="token number">999</span>      HEAD <span class="token string">&#39;Granule Size&#39;</span>

<span class="token keyword">SELECT</span>
    component
  <span class="token punctuation">,</span> current_size
  <span class="token punctuation">,</span> min_size
  <span class="token punctuation">,</span> max_size
  <span class="token punctuation">,</span> user_specified_size
  <span class="token punctuation">,</span> oper_count
  <span class="token punctuation">,</span> last_oper_type
  <span class="token punctuation">,</span> last_oper_mode
  <span class="token punctuation">,</span> TO_CHAR<span class="token punctuation">(</span>last_oper_time<span class="token punctuation">,</span> <span class="token string">&#39;DD-MON-YYYY HH24:MI:SS&#39;</span><span class="token punctuation">)</span> last_oper_time
  <span class="token punctuation">,</span> granule_size
<span class="token keyword">FROM</span>
    v$sga_dynamic_components
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
    component <span class="token keyword">DESC</span>
<span class="token operator">/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="死锁" tabindex="-1"><a class="header-anchor" href="#死锁"><span>死锁</span></a></h2><h3 id="死锁查询" tabindex="-1"><a class="header-anchor" href="#死锁查询"><span>死锁查询</span></a></h3><ul><li>查询发生死锁的会话和对象</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> sess<span class="token punctuation">.</span>sid<span class="token punctuation">,</span> 
   sess<span class="token punctuation">.</span><span class="token keyword">serial</span><span class="token comment">#, </span>
   lo<span class="token punctuation">.</span>oracle_username<span class="token punctuation">,</span> 
   lo<span class="token punctuation">.</span>os_user_name<span class="token punctuation">,</span> 
   ao<span class="token punctuation">.</span>object_name<span class="token punctuation">,</span> 
   lo<span class="token punctuation">.</span>locked_mode 
   <span class="token keyword">from</span> v$locked_object lo<span class="token punctuation">,</span> 
   dba_objects ao<span class="token punctuation">,</span> 
   v$<span class="token keyword">session</span> sess 
<span class="token keyword">where</span> ao<span class="token punctuation">.</span>object_id <span class="token operator">=</span> lo<span class="token punctuation">.</span>object_id <span class="token operator">and</span> lo<span class="token punctuation">.</span>session_id <span class="token operator">=</span> sess<span class="token punctuation">.</span>sid<span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>查询造成死锁的sql</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> sql_text <span class="token keyword">from</span> v$<span class="token keyword">sql</span> <span class="token keyword">where</span> hash_value <span class="token operator">in</span>
<span class="token punctuation">(</span><span class="token keyword">select</span> sql_hash_value <span class="token keyword">from</span> v$<span class="token keyword">session</span> <span class="token keyword">where</span> sid <span class="token operator">in</span>
<span class="token punctuation">(</span><span class="token keyword">select</span> session_id <span class="token keyword">from</span> v$locked_object<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>查询死锁（带操作系统进程）</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> sess<span class="token punctuation">.</span>sid<span class="token punctuation">,</span> 
   sess<span class="token punctuation">.</span><span class="token keyword">serial</span><span class="token comment">#, </span>
   lo<span class="token punctuation">.</span>oracle_username<span class="token punctuation">,</span> 
   lo<span class="token punctuation">.</span>os_user_name<span class="token punctuation">,</span> 
   ao<span class="token punctuation">.</span>object_name<span class="token punctuation">,</span> 
   lo<span class="token punctuation">.</span>locked_mode<span class="token punctuation">,</span>
   p<span class="token punctuation">.</span>spid
   <span class="token keyword">from</span> v$locked_object lo<span class="token punctuation">,</span> 
   dba_objects ao<span class="token punctuation">,</span> 
   v$<span class="token keyword">session</span> sess<span class="token punctuation">,</span>
   v$process p
<span class="token keyword">where</span> ao<span class="token punctuation">.</span>object_id <span class="token operator">=</span> lo<span class="token punctuation">.</span>object_id <span class="token operator">and</span> lo<span class="token punctuation">.</span>session_id <span class="token operator">=</span> sess<span class="token punctuation">.</span>sid
<span class="token operator">and</span>  sess<span class="token punctuation">.</span>paddr<span class="token operator">=</span>p<span class="token punctuation">.</span>addr<span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="释放死锁" tabindex="-1"><a class="header-anchor" href="#释放死锁"><span>释放死锁</span></a></h3><ul><li>使用SQL终极会话</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">alter</span> system <span class="token keyword">kill</span> <span class="token keyword">session</span> <span class="token string">&#39;sid,serial#&#39;</span> immediate<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>通过操作系统终结进程</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">ps</span> -ef<span class="token operator">|</span><span class="token function">grep</span> spid
<span class="token function">kill</span> <span class="token parameter variable">-9</span> spid
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,165),o=[t];function c(i,l){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","perfomancesql.html.vue"]]),d=JSON.parse('{"path":"/guide/database/oracle/performance/perfomancesql.html","title":"性能优化脚本","lang":"zh-CN","frontmatter":{"title":"性能优化脚本","description":"TOP SQL 活动事务 会话使用内存 事件 会话事件 等待会话 会话IO 会话PGA 会话Rollback 主机会话 会话统计信息 会话undo Top会话 表大小增长情况 TOP Latch 热块 缓存命中率 缓存建议 命中率 LRU Latch Hist Ratio 长事务会话 日志及日志文件 库缓存统计信息 当前latch 当前latch持有者...","head":[["meta",{"property":"og:url","content":"https://github.com/abelit/abelit-datapeacock.git/guide/database/oracle/performance/perfomancesql.html"}],["meta",{"property":"og:site_name","content":"数之雀"}],["meta",{"property":"og:title","content":"性能优化脚本"}],["meta",{"property":"og:description","content":"TOP SQL 活动事务 会话使用内存 事件 会话事件 等待会话 会话IO 会话PGA 会话Rollback 主机会话 会话统计信息 会话undo Top会话 表大小增长情况 TOP Latch 热块 缓存命中率 缓存建议 命中率 LRU Latch Hist Ratio 长事务会话 日志及日志文件 库缓存统计信息 当前latch 当前latch持有者..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-11T14:06:18.000Z"}],["meta",{"property":"article:author","content":"Abelit"}],["meta",{"property":"article:modified_time","content":"2024-05-11T14:06:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"性能优化脚本\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-11T14:06:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Abelit\\",\\"url\\":\\"https://github.com/abelit\\"}]}"]]},"headers":[{"level":2,"title":"TOP SQL","slug":"top-sql","link":"#top-sql","children":[]},{"level":2,"title":"活动事务","slug":"活动事务","link":"#活动事务","children":[]},{"level":2,"title":"会话使用内存","slug":"会话使用内存","link":"#会话使用内存","children":[]},{"level":2,"title":"事件","slug":"事件","link":"#事件","children":[]},{"level":2,"title":"会话事件","slug":"会话事件","link":"#会话事件","children":[]},{"level":2,"title":"等待会话","slug":"等待会话","link":"#等待会话","children":[]},{"level":2,"title":"会话IO","slug":"会话io","link":"#会话io","children":[]},{"level":2,"title":"会话PGA","slug":"会话pga","link":"#会话pga","children":[]},{"level":2,"title":"会话Rollback","slug":"会话rollback","link":"#会话rollback","children":[]},{"level":2,"title":"主机会话","slug":"主机会话","link":"#主机会话","children":[]},{"level":2,"title":"会话统计信息","slug":"会话统计信息","link":"#会话统计信息","children":[]},{"level":2,"title":"会话undo","slug":"会话undo","link":"#会话undo","children":[]},{"level":2,"title":"Top会话","slug":"top会话","link":"#top会话","children":[]},{"level":2,"title":"表大小增长情况","slug":"表大小增长情况","link":"#表大小增长情况","children":[]},{"level":2,"title":"TOP Latch","slug":"top-latch","link":"#top-latch","children":[]},{"level":2,"title":"热块","slug":"热块","link":"#热块","children":[]},{"level":2,"title":"缓存命中率","slug":"缓存命中率","link":"#缓存命中率","children":[]},{"level":2,"title":"缓存建议","slug":"缓存建议","link":"#缓存建议","children":[]},{"level":2,"title":"命中率","slug":"命中率","link":"#命中率","children":[]},{"level":2,"title":"LRU Latch Hist Ratio","slug":"lru-latch-hist-ratio","link":"#lru-latch-hist-ratio","children":[]},{"level":2,"title":"长事务会话","slug":"长事务会话","link":"#长事务会话","children":[]},{"level":2,"title":"日志及日志文件","slug":"日志及日志文件","link":"#日志及日志文件","children":[]},{"level":2,"title":"库缓存统计信息","slug":"库缓存统计信息","link":"#库缓存统计信息","children":[]},{"level":2,"title":"当前latch","slug":"当前latch","link":"#当前latch","children":[]},{"level":2,"title":"当前latch持有者","slug":"当前latch持有者","link":"#当前latch持有者","children":[]},{"level":2,"title":"当前latch命中率","slug":"当前latch命中率","link":"#当前latch命中率","children":[]},{"level":2,"title":"隐藏参数","slug":"隐藏参数","link":"#隐藏参数","children":[]},{"level":2,"title":"高水位线","slug":"高水位线","link":"#高水位线","children":[{"level":3,"title":"高水位线HWM","slug":"高水位线hwm","link":"#高水位线hwm","children":[]}]},{"level":2,"title":"lock and blocks","slug":"lock-and-blocks","link":"#lock-and-blocks","children":[]},{"level":2,"title":"disk file operations","slug":"disk-file-operations","link":"#disk-file-operations","children":[]},{"level":2,"title":"scn health","slug":"scn-health","link":"#scn-health","children":[]},{"level":2,"title":"locks dml lock time","slug":"locks-dml-lock-time","link":"#locks-dml-lock-time","children":[]},{"level":2,"title":"lock dml ddl","slug":"lock-dml-ddl","link":"#lock-dml-ddl","children":[]},{"level":2,"title":"lock blocking","slug":"lock-blocking","link":"#lock-blocking","children":[]},{"level":2,"title":"lock blocking","slug":"lock-blocking-1","link":"#lock-blocking-1","children":[]},{"level":2,"title":"rman backup piece","slug":"rman-backup-piece","link":"#rman-backup-piece","children":[]},{"level":2,"title":"rman backup sets","slug":"rman-backup-sets","link":"#rman-backup-sets","children":[]},{"level":2,"title":"rman controfiles","slug":"rman-controfiles","link":"#rman-controfiles","children":[]},{"level":2,"title":"rman progress","slug":"rman-progress","link":"#rman-progress","children":[]},{"level":2,"title":"rman spfiles","slug":"rman-spfiles","link":"#rman-spfiles","children":[]},{"level":2,"title":"rollback segments","slug":"rollback-segments","link":"#rollback-segments","children":[]},{"level":2,"title":"session current user transaction","slug":"session-current-user-transaction","link":"#session-current-user-transaction","children":[]},{"level":2,"title":"session uncommited transaction","slug":"session-uncommited-transaction","link":"#session-uncommited-transaction","children":[]},{"level":2,"title":"session user stats","slug":"session-user-stats","link":"#session-user-stats","children":[]},{"level":2,"title":"user trace file","slug":"user-trace-file","link":"#user-trace-file","children":[]},{"level":2,"title":"user active session","slug":"user-active-session","link":"#user-active-session","children":[]},{"level":2,"title":"session by cpu","slug":"session-by-cpu","link":"#session-by-cpu","children":[]},{"level":2,"title":"session by cursor","slug":"session-by-cursor","link":"#session-by-cursor","children":[]},{"level":2,"title":"session by io","slug":"session-by-io","link":"#session-by-io","children":[]},{"level":2,"title":"session by memory","slug":"session-by-memory","link":"#session-by-memory","children":[]},{"level":2,"title":"session by transaction","slug":"session-by-transaction","link":"#session-by-transaction","children":[]},{"level":2,"title":"session waiting","slug":"session-waiting","link":"#session-waiting","children":[]},{"level":2,"title":"undo contention","slug":"undo-contention","link":"#undo-contention","children":[]},{"level":2,"title":"top sql by disk read","slug":"top-sql-by-disk-read","link":"#top-sql-by-disk-read","children":[]},{"level":2,"title":"top sql by buffer gets","slug":"top-sql-by-buffer-gets","link":"#top-sql-by-buffer-gets","children":[]},{"level":2,"title":"top procedure","slug":"top-procedure","link":"#top-procedure","children":[]},{"level":2,"title":"redo contention","slug":"redo-contention","link":"#redo-contention","children":[]},{"level":2,"title":"lru latch contention","slug":"lru-latch-contention","link":"#lru-latch-contention","children":[]},{"level":2,"title":"log switch history bytes daily","slug":"log-switch-history-bytes-daily","link":"#log-switch-history-bytes-daily","children":[]},{"level":2,"title":"log switch history count daily","slug":"log-switch-history-count-daily","link":"#log-switch-history-count-daily","children":[]},{"level":2,"title":"hit ratio system","slug":"hit-ratio-system","link":"#hit-ratio-system","children":[]},{"level":2,"title":"hit ratio session","slug":"hit-ratio-session","link":"#hit-ratio-session","children":[]},{"level":2,"title":"file waits","slug":"file-waits","link":"#file-waits","children":[]},{"level":2,"title":"file io","slug":"file-io","link":"#file-io","children":[]},{"level":2,"title":"data pump jobs","slug":"data-pump-jobs","link":"#data-pump-jobs","children":[]},{"level":2,"title":"data pump progress","slug":"data-pump-progress","link":"#data-pump-progress","children":[]},{"level":2,"title":"data pump session","slug":"data-pump-session","link":"#data-pump-session","children":[]},{"level":2,"title":"asm disk perf","slug":"asm-disk-perf","link":"#asm-disk-perf","children":[]},{"level":2,"title":"asm disks","slug":"asm-disks","link":"#asm-disks","children":[]},{"level":2,"title":"asm disk group","slug":"asm-disk-group","link":"#asm-disk-group","children":[]},{"level":2,"title":"asm alias","slug":"asm-alias","link":"#asm-alias","children":[]},{"level":2,"title":"asm client","slug":"asm-client","link":"#asm-client","children":[]},{"level":2,"title":"asm drop files","slug":"asm-drop-files","link":"#asm-drop-files","children":[]},{"level":2,"title":"asm files","slug":"asm-files","link":"#asm-files","children":[]},{"level":2,"title":"asmm components","slug":"asmm-components","link":"#asmm-components","children":[]},{"level":2,"title":"死锁","slug":"死锁","link":"#死锁","children":[{"level":3,"title":"死锁查询","slug":"死锁查询","link":"#死锁查询","children":[]},{"level":3,"title":"释放死锁","slug":"释放死锁","link":"#释放死锁","children":[]}]}],"git":{"createdTime":1715436378000,"updatedTime":1715436378000,"contributors":[{"name":"ableit","email":"ychenid@live.com","commits":1}]},"readingTime":{"minutes":56.85,"words":17054},"filePathRelative":"guide/database/oracle/performance/perfomancesql.md","localizedDate":"2024年5月11日","autoDesc":true,"excerpt":"<h2>TOP SQL</h2>\\n<div class=\\"language-sql\\" data-ext=\\"sql\\" data-title=\\"sql\\"><pre class=\\"language-sql\\"><code><span class=\\"token comment\\">-- -----------------------------------------------------------------------------------</span>\\n<span class=\\"token comment\\">-- File Name    : https://oracle-base.com/dba/monitoring/top_sql.sql</span>\\n<span class=\\"token comment\\">-- Author       : Tim Hall</span>\\n<span class=\\"token comment\\">-- Description  : Displays a list of SQL statements that are using the most resources.</span>\\n<span class=\\"token comment\\">-- Comments     : The address column can be use as a parameter with SQL_Text.sql to display the full statement.</span>\\n<span class=\\"token comment\\">-- Requirements : Access to the V$ views.</span>\\n<span class=\\"token comment\\">-- Call Syntax  : @top_sql (number)</span>\\n<span class=\\"token comment\\">-- Last Modified: 15/07/2000</span>\\n<span class=\\"token comment\\">-- -----------------------------------------------------------------------------------</span>\\n<span class=\\"token keyword\\">SET</span> LINESIZE <span class=\\"token number\\">500</span>\\n<span class=\\"token keyword\\">SET</span> PAGESIZE <span class=\\"token number\\">1000</span>\\n<span class=\\"token keyword\\">SET</span> VERIFY <span class=\\"token keyword\\">OFF</span>\\n\\n<span class=\\"token keyword\\">SELECT</span> <span class=\\"token operator\\">*</span>\\n<span class=\\"token keyword\\">FROM</span>   <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">SELECT</span> sql_id<span class=\\"token punctuation\\">,</span>\\n               Substr<span class=\\"token punctuation\\">(</span>a<span class=\\"token punctuation\\">.</span>sql_text<span class=\\"token punctuation\\">,</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">50</span><span class=\\"token punctuation\\">)</span> sql_text<span class=\\"token punctuation\\">,</span>\\n               parsing_schema_name<span class=\\"token punctuation\\">,</span>\\n               Trunc<span class=\\"token punctuation\\">(</span>a<span class=\\"token punctuation\\">.</span>disk_reads<span class=\\"token operator\\">/</span>Decode<span class=\\"token punctuation\\">(</span>a<span class=\\"token punctuation\\">.</span>executions<span class=\\"token punctuation\\">,</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span>a<span class=\\"token punctuation\\">.</span>executions<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> reads_per_execution<span class=\\"token punctuation\\">,</span> \\n               a<span class=\\"token punctuation\\">.</span>buffer_gets<span class=\\"token punctuation\\">,</span> \\n               a<span class=\\"token punctuation\\">.</span>disk_reads<span class=\\"token punctuation\\">,</span> \\n               a<span class=\\"token punctuation\\">.</span>executions<span class=\\"token punctuation\\">,</span> \\n               a<span class=\\"token punctuation\\">.</span>sorts<span class=\\"token punctuation\\">,</span>\\n               a<span class=\\"token punctuation\\">.</span>address\\n        <span class=\\"token keyword\\">FROM</span>   v$sqlarea a\\n        <span class=\\"token keyword\\">ORDER</span> <span class=\\"token keyword\\">BY</span> reads_per_execution <span class=\\"token keyword\\">DESC</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">WHERE</span>  rownum <span class=\\"token operator\\">&lt;=</span> <span class=\\"token operator\\">&amp;&amp;</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">;</span>\\n</code></pre></div>"}');export{k as comp,d as data};
