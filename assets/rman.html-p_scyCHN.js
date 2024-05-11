import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as p,c as d,b as u,w as a,f as l,d as s,a as n}from"./app-DR5J2daJ.js";const r={},k=l(`<h2 id="rman信息查询" tabindex="-1"><a class="header-anchor" href="#rman信息查询"><span>RMAN信息查询</span></a></h2><h3 id="评估oracle-数据库rman-增量备份的大小" tabindex="-1"><a class="header-anchor" href="#评估oracle-数据库rman-增量备份的大小"><span>评估oracle 数据库rman 增量备份的大小：</span></a></h3><ul><li>评估rman 增量备份大小前提是开启了块跟踪(block change tracking)</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
    <span class="token keyword">file</span><span class="token comment">#,</span>
    blocks_changed<span class="token punctuation">,</span>
    block_size<span class="token punctuation">,</span>
    blocks_changed <span class="token operator">*</span> block_size bytes_changed<span class="token punctuation">,</span>
    <span class="token function">round</span><span class="token punctuation">(</span>
        blocks_changed <span class="token operator">/</span> blocks <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">2</span>
    <span class="token punctuation">)</span>                           percent_changed
<span class="token keyword">FROM</span>
    v$datafile
    <span class="token keyword">JOIN</span> <span class="token punctuation">(</span>
        <span class="token keyword">SELECT</span>
            fno      <span class="token keyword">file</span><span class="token comment">#,</span>
            <span class="token function">SUM</span><span class="token punctuation">(</span>bct<span class="token punctuation">)</span> blocks_changed
        <span class="token keyword">FROM</span>
            <span class="token punctuation">(</span>
                <span class="token keyword">SELECT</span> <span class="token keyword">DISTINCT</span>
                    fno<span class="token punctuation">,</span>
                    bno<span class="token punctuation">,</span>
                    bct
                <span class="token keyword">FROM</span>
                    x$krcbit
                <span class="token keyword">WHERE</span>
                    vertime <span class="token operator">&gt;=</span> <span class="token punctuation">(</span>
                        <span class="token keyword">SELECT</span>
                            curr_vertime
                        <span class="token keyword">FROM</span>
                            x$krcfde
                        <span class="token keyword">WHERE</span>
                            csno <span class="token operator">=</span> x$krcbit<span class="token punctuation">.</span>csno
                            <span class="token operator">AND</span> fno <span class="token operator">=</span> x$krcbit<span class="token punctuation">.</span>fno
                    <span class="token punctuation">)</span>
            <span class="token punctuation">)</span>
        <span class="token keyword">GROUP</span> <span class="token keyword">BY</span>
            fno
        <span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
            <span class="token number">1</span>
    <span class="token punctuation">)</span> <span class="token keyword">USING</span> <span class="token punctuation">(</span> <span class="token keyword">file</span><span class="token comment"># );</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>查看块追踪是否开启</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token keyword">status</span> <span class="token keyword">from</span> v$block_change_tracking<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="rman备份信息查询" tabindex="-1"><a class="header-anchor" href="#rman备份信息查询"><span>RMAN备份信息查询</span></a></h3><ul><li>查看RMAN配置信息</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> NAME<span class="token punctuation">,</span><span class="token keyword">VALUE</span> <span class="token keyword">FROM</span> V$RMAN_CONFIGURATION<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>查看所有备份集</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">SESSION</span> <span class="token keyword">SET</span> nls_date_format <span class="token operator">=</span> <span class="token string">&quot;yyyy-mm-dd hh24:mi:ss&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">SELECT</span>
    a<span class="token punctuation">.</span>recid                      <span class="token string">&quot;BACKUPSET&quot;</span><span class="token punctuation">,</span>
    a<span class="token punctuation">.</span>set_stamp<span class="token punctuation">,</span>
    decode<span class="token punctuation">(</span>
        b<span class="token punctuation">.</span>incremental_level<span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> decode<span class="token punctuation">(</span>
            backup_type<span class="token punctuation">,</span> <span class="token string">&#39;L&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Archivelog&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Full&#39;</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;Incr-1&#39;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&#39;Incr-0&#39;</span><span class="token punctuation">,</span> b<span class="token punctuation">.</span>incremental_level
    <span class="token punctuation">)</span>                            <span class="token string">&quot;TypeLV&quot;</span><span class="token punctuation">,</span>
    b<span class="token punctuation">.</span>controlfile_included       <span class="token string">&quot;WithCTL&quot;</span><span class="token punctuation">,</span>
    decode<span class="token punctuation">(</span>
        a<span class="token punctuation">.</span><span class="token keyword">status</span><span class="token punctuation">,</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;AVAILABLE&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;D&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;DELETED&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;X&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;EXPIRED&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ERROR&#39;</span>
    <span class="token punctuation">)</span>                            <span class="token string">&quot;STATUS&quot;</span><span class="token punctuation">,</span>
    a<span class="token punctuation">.</span>device_type                <span class="token string">&quot;DeviceType&quot;</span><span class="token punctuation">,</span>
    a<span class="token punctuation">.</span>start_time                 <span class="token string">&quot;StartTime&quot;</span><span class="token punctuation">,</span>
    a<span class="token punctuation">.</span>completion_time            <span class="token string">&quot;CompletionTime&quot;</span><span class="token punctuation">,</span>
    a<span class="token punctuation">.</span>elapsed_seconds            <span class="token string">&quot;ElapsedSeconds&quot;</span><span class="token punctuation">,</span>
    a<span class="token punctuation">.</span>bytes <span class="token operator">/</span> <span class="token number">1024</span> <span class="token operator">/</span> <span class="token number">1024</span> <span class="token operator">/</span> <span class="token number">1024</span> <span class="token string">&quot;SizeGB&quot;</span><span class="token punctuation">,</span>
    a<span class="token punctuation">.</span>compressed<span class="token punctuation">,</span>
    a<span class="token punctuation">.</span>tag                        <span class="token string">&quot;Tag&quot;</span><span class="token punctuation">,</span>
    a<span class="token punctuation">.</span>handle                     <span class="token string">&quot;Path&quot;</span>
<span class="token keyword">FROM</span>
    gv$backup_piece a<span class="token punctuation">,</span>
    gv$backup_set   b
<span class="token keyword">WHERE</span>
    a<span class="token punctuation">.</span>set_stamp <span class="token operator">=</span> b<span class="token punctuation">.</span>set_stamp
    <span class="token operator">AND</span> a<span class="token punctuation">.</span>deleted <span class="token operator">=</span> <span class="token string">&#39;NO&#39;</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
    a<span class="token punctuation">.</span>completion_time <span class="token keyword">DESC</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>查找某个备份集中包含数据文件</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token keyword">DISTINCT</span>
    c<span class="token punctuation">.</span><span class="token keyword">file</span><span class="token comment">#,</span>
    a<span class="token punctuation">.</span>set_stamp<span class="token punctuation">,</span>
    d<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
    c<span class="token punctuation">.</span>checkpoint_change<span class="token comment">#,</span>
    c<span class="token punctuation">.</span>checkpoint_time
<span class="token keyword">FROM</span>
    v$backup_datafile c<span class="token punctuation">,</span>
    v$backup_piece    a<span class="token punctuation">,</span>
    v$datafile        d
<span class="token keyword">WHERE</span>
    a<span class="token punctuation">.</span>set_stamp <span class="token operator">=</span> c<span class="token punctuation">.</span>set_stamp
    <span class="token operator">AND</span> d<span class="token punctuation">.</span><span class="token keyword">file</span><span class="token comment"># = c.file#</span>
    <span class="token operator">AND</span> a<span class="token punctuation">.</span>deleted <span class="token operator">=</span> <span class="token string">&#39;NO&#39;</span>
    <span class="token operator">AND</span> c<span class="token punctuation">.</span>set_stamp <span class="token operator">=</span> <span class="token operator">&amp;</span>set_stamp
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
    c<span class="token punctuation">.</span><span class="token keyword">file</span><span class="token comment">#;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>查询某个备份集中控制文件</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token keyword">DISTINCT</span>
    a<span class="token punctuation">.</span>set_stamp<span class="token punctuation">,</span>
    d<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
    c<span class="token punctuation">.</span>checkpoint_change<span class="token comment">#,</span>
    c<span class="token punctuation">.</span>checkpoint_time
<span class="token keyword">FROM</span>
    v$backup_datafile c<span class="token punctuation">,</span>
    v$backup_piece    a<span class="token punctuation">,</span>
    v$controlfile     d
<span class="token keyword">WHERE</span>
    a<span class="token punctuation">.</span>set_stamp <span class="token operator">=</span> c<span class="token punctuation">.</span>set_stamp
    <span class="token operator">AND</span> c<span class="token punctuation">.</span><span class="token keyword">file</span><span class="token comment"># = 0</span>
    <span class="token operator">AND</span> a<span class="token punctuation">.</span>deleted <span class="token operator">=</span> <span class="token string">&#39;NO&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>查看某个备份集中归档日志</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token keyword">DISTINCT</span>
    b<span class="token punctuation">.</span>set_stamp<span class="token punctuation">,</span>
    b<span class="token punctuation">.</span>thread<span class="token comment">#,</span>
    b<span class="token punctuation">.</span>sequence<span class="token comment">#,</span>
    b<span class="token punctuation">.</span>first_time<span class="token punctuation">,</span>
    b<span class="token punctuation">.</span>first_change<span class="token comment">#,</span>
    b<span class="token punctuation">.</span>next_time<span class="token punctuation">,</span>
    b<span class="token punctuation">.</span>next_change<span class="token comment">#</span>
<span class="token keyword">FROM</span>
    v$backup_redolog b<span class="token punctuation">,</span>
    v$backup_piece   a
<span class="token keyword">WHERE</span>
    a<span class="token punctuation">.</span>set_stamp <span class="token operator">=</span> b<span class="token punctuation">.</span>set_stamp
    <span class="token operator">AND</span> a<span class="token punctuation">.</span>deleted <span class="token operator">=</span> <span class="token string">&#39;NO&#39;</span>
<span class="token comment">--    AND b.set_stamp = &amp;set_stamp</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
    thread<span class="token comment">#,</span>
    sequence<span class="token comment">#;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>查看某个备份集SPFILE</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token keyword">DISTINCT</span>
    a<span class="token punctuation">.</span>set_stamp<span class="token punctuation">,</span>
    b<span class="token punctuation">.</span>completion_time<span class="token punctuation">,</span>
    handle
<span class="token keyword">FROM</span>
    v$backup_spfile b<span class="token punctuation">,</span>
    v$backup_piece  a
<span class="token keyword">WHERE</span>
    a<span class="token punctuation">.</span>set_stamp <span class="token operator">=</span> b<span class="token punctuation">.</span>set_stamp
    <span class="token operator">AND</span> a<span class="token punctuation">.</span>deleted <span class="token operator">=</span> <span class="token string">&#39;NO&#39;</span>
<span class="token comment">--    AND b.set_stamp = &amp;set_stamp</span>
<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>RMAN备份进度</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
    t1<span class="token punctuation">.</span>sid<span class="token punctuation">,</span>
    t1<span class="token punctuation">.</span><span class="token keyword">serial</span><span class="token comment">#,</span>
    t2<span class="token punctuation">.</span>spid<span class="token punctuation">,</span>
    t1<span class="token punctuation">.</span><span class="token keyword">status</span><span class="token punctuation">,</span>
    to_char<span class="token punctuation">(</span>
        t1<span class="token punctuation">.</span>logon_time<span class="token punctuation">,</span> <span class="token string">&#39;YYYY MM DD HH24:MI:SS&#39;</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    t1<span class="token punctuation">.</span>program<span class="token punctuation">,</span>
    t1<span class="token punctuation">.</span>event<span class="token punctuation">,</span>
    t1<span class="token punctuation">.</span>wait_class
<span class="token keyword">FROM</span>
    v$<span class="token keyword">session</span> t1
    <span class="token keyword">JOIN</span> v$process t2 <span class="token keyword">ON</span> t1<span class="token punctuation">.</span>paddr <span class="token operator">=</span> t2<span class="token punctuation">.</span>addr
<span class="token keyword">WHERE</span>
    t1<span class="token punctuation">.</span>program <span class="token operator">LIKE</span> <span class="token string">&#39;%rman%&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>RMAN备份任务查询</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
    session_key<span class="token punctuation">,</span>
    optimized<span class="token punctuation">,</span>
    compression_ratio<span class="token punctuation">,</span>
    input_type<span class="token punctuation">,</span>
    input_bytes_per_sec_display  in_sec<span class="token punctuation">,</span>
    output_bytes_per_sec_display out_sec<span class="token punctuation">,</span>
    input_bytes_display  in_size<span class="token punctuation">,</span>
    output_bytes_display out_size<span class="token punctuation">,</span>
    time_taken_display
<span class="token keyword">FROM</span>
    v$rman_backup_job_details
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
    session_key<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rman备份" tabindex="-1"><a class="header-anchor" href="#rman备份"><span>RMAN备份</span></a></h2><ul><li>指定备份路径</li></ul>`,25),v=n("div",{class:"language-sql line-numbers-mode","data-ext":"sql","data-title":"sql"},[n("pre",{class:"language-sql"},[n("code",null,[s(`run {
    allocate channel c1 `),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token keyword"},"disk"),s(" format "),n("span",{class:"token string"},"'/ysnasbackup/backup/oracle/newysls/rman/%U'"),n("span",{class:"token punctuation"},";"),s(`
    allocate channel c2 `),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token keyword"},"disk"),s(" format "),n("span",{class:"token string"},"'/ysnasbackup/backup/oracle/newysls/rman/%U'"),n("span",{class:"token punctuation"},";"),s(`
    allocate channel c3 `),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token keyword"},"disk"),s(" format "),n("span",{class:"token string"},"'/ysnasbackup/backup/oracle/newysls/rman/%U'"),n("span",{class:"token punctuation"},";"),s(`
    allocate channel c4 `),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token keyword"},"disk"),s(" format "),n("span",{class:"token string"},"'/ysnasbackup/backup/oracle/newysls/rman/%U'"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"backup"),s(" incremental "),n("span",{class:"token keyword"},"level"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token keyword"},"database"),s(" plus archivelog"),n("span",{class:"token punctuation"},";"),s(`
}
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),m=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token assign-left variable"},"DBA_LOGPATH"),n("span",{class:"token operator"},"="),s(`/home/oracle/dba/logs
`),n("span",{class:"token variable"},"$ORACLE_HOME"),s("/bin/rman "),n("span",{class:"token assign-left variable"},"log"),n("span",{class:"token operator"},"="),n("span",{class:"token variable"},"$DBA_LOGPATH"),s("/ora_delete_archive.log "),n("span",{class:"token operator"},"<<"),n("span",{class:"token string"},`EOF
connect target /
run {
    allocate channel c1 type disk format '/ysnasbackup/backup/oracle/newysls/rman/%U';
    allocate channel c2 type disk format '/ysnasbackup/backup/oracle/newysls/rman/%U';
    allocate channel c3 type disk format '/ysnasbackup/backup/oracle/newysls/rman/%U';
    allocate channel c4 type disk format '/ysnasbackup/backup/oracle/newysls/rman/%U';
    backup incremental level 0 database plus archivelog;
}
exit;
EOF`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=l(`<h2 id="rman恢复" tabindex="-1"><a class="header-anchor" href="#rman恢复"><span>RMAN恢复</span></a></h2><h2 id="rman相关命令" tabindex="-1"><a class="header-anchor" href="#rman相关命令"><span>RMAN相关命令</span></a></h2><h3 id="list命令" tabindex="-1"><a class="header-anchor" href="#list命令"><span>list命令</span></a></h3><ul><li>备份集列表统计信息</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>list backup summary<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>存放在磁盘中的备份集</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>list backup device <span class="token builtin class-name">type</span> disk<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>查看标记的备份集</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>list backup <span class="token assign-left variable">tag</span><span class="token operator">=</span>testtag<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>查看备份（归档日志文件、数据文件、spfile、control file）</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>list backup<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>查看备份集（归档日志文件、数据文件、spfile、control file）</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>list backupset<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>查看备份片段</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>list backuppice tag <span class="token string">&#39;&lt;tag&gt;&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>查看备份的spfile</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>list backup of spfile<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>查看备份的控制文件</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>list backup of controlfile<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>查看备份（数据文件）</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>list backup of database<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>查看备份的表空间</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>list backup of tablespace <span class="token string">&#39;SYSTEM&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>查看备份的数据文件</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>list backup of datafile <span class="token number">1,2</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>查看备份的归档文件</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>list backup of archivelog all<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>查看备份的文件</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>list backup by <span class="token function">file</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>查看备份的归档日志文件</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># To list an individual backup, any of the three alternatives bellow would be valid query using rman</span>
list backup of archivelog logseq <span class="token number">286</span><span class="token punctuation">;</span>
list backup of archivelog sequence <span class="token number">286</span><span class="token punctuation">;</span>
<span class="token comment"># To view backups of archivelog between two sequences</span>
list backup of archivelog sequence between <span class="token number">288</span> and <span class="token number">290</span><span class="token punctuation">;</span>
list backup of archivelog from logseq <span class="token number">288</span> <span class="token keyword">until</span> logseq <span class="token number">290</span><span class="token punctuation">;</span>
<span class="token comment"># Use the SUMMARY directive to view only the backupsets affected</span>
list backup of archivelog from logseq <span class="token number">288</span> <span class="token keyword">until</span> logseq <span class="token number">290</span> summary<span class="token punctuation">;</span>
list backup of archivelog sequence between <span class="token number">288</span> and <span class="token number">290</span> summary<span class="token punctuation">;</span>
<span class="token comment"># To limit the list backup of archivelogs to the ones taken on a specific date</span>
list backup of archivelog <span class="token function">time</span> between <span class="token string">&#39;sysdate-2&#39;</span> and <span class="token string">&#39;sysdate&#39;</span><span class="token punctuation">;</span>
list backup of archivelog from <span class="token function">time</span> <span class="token string">&#39;sysdate-2&#39;</span> <span class="token keyword">until</span> <span class="token function">time</span> <span class="token string">&#39;sysdate&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>时间段内的备份集列表（归档日志文件、数据文件、spfile、control file）</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>list backup completed after <span class="token string">&#39;sysdate-2&#39;</span><span class="token punctuation">;</span>
list backup completed before <span class="token string">&#39;sysdate-2&#39;</span><span class="token punctuation">;</span>
list backup completed between <span class="token string">&#39;sysdate-2&#39;</span> and <span class="token string">&#39;sysdate&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>查询数据文件、归档日志、控制文件的副本</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>list copy<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>查询数据库化身</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>list incarnation<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>当您执行打开重置日志操作时，会创建一个新的数据库实例。对此类数据库执行恢复操作时，您可能需要检查数据库化身。</p></blockquote><ul><li>查询过期的备份</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>list expired backup<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>查询过期的归档</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>list expired archivelog all<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>查询可用的备份和副本</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code> list recoverable backup<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="show命令" tabindex="-1"><a class="header-anchor" href="#show命令"><span>show命令</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 1) Shows all parameters.</span>
show all<span class="token punctuation">;</span>
<span class="token comment"># 2) Shows the archivelog deletion policy.</span>
show archivelog deletion policy<span class="token punctuation">;</span>
<span class="token comment"># 3) Shows the number of archivelog backup copies</span>
show archivelog backup copies<span class="token punctuation">;</span>
<span class="token comment"># 4) Shows the auxiliary database information.</span>
show auxname<span class="token punctuation">;</span>
<span class="token comment"># 5) Shows whether optimization is on or off.</span>
show backup optimization<span class="token punctuation">;</span>
<span class="token comment">#  6) Shows how the normal channel and auxiliary channel are configured.</span>
show <span class="token punctuation">[</span>auxiliary<span class="token punctuation">]</span> channel<span class="token punctuation">;</span>
<span class="token comment">#  7) Shows the characteristics of the channel</span>
show channel <span class="token keyword">for</span> device <span class="token builtin class-name">type</span> <span class="token punctuation">[</span>disk <span class="token operator">|</span> <span class="token operator">&lt;</span>media device<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token comment"># 8) Shows whether control file autobackup is on or off.</span>
show controlfile autobackup<span class="token punctuation">;</span>
<span class="token comment"># 9) Shows the format of the autobackup control file</span>
show controlfile autobackup <span class="token function">format</span><span class="token punctuation">;</span>
<span class="token comment"># 10) Shows the number of datafile backup copies being kept.</span>
show datafile backup copies<span class="token punctuation">;</span>
<span class="token comment"># 11) Shows the default type (disk or tape)</span>
show default device <span class="token builtin class-name">type</span><span class="token punctuation">;</span>
<span class="token comment"># 12) Shows policy for datafile and control file backups and copies that RMAN marks as obsolete.</span>
show retention policy<span class="token punctuation">;</span>
<span class="token comment"># 13) Shows the encryption algorithm currently in use.</span>
show encryption algorithm<span class="token punctuation">;</span>
<span class="token comment"># 14) Shows the encryption for the database and every tablespace.</span>
show encryption <span class="token keyword">for</span> <span class="token punctuation">[</span>database <span class="token operator">|</span> tablespace<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment"># 15) Shows the tablespaces excluded from the backup.</span>
show exclude<span class="token punctuation">;</span>
<span class="token comment"># 16) Shows the maximum size for backup sets. The default is unlimited.</span>
show maxsetsize<span class="token punctuation">;</span>
<span class="token comment"># 17) Shows the policy for datafile and control file backups and copies that RMAN marks as obsolete.</span>
show retention policy<span class="token punctuation">;</span>
<span class="token comment"># 18) Shows the snapshot control filename.</span>
show snapshot controlfile name<span class="token punctuation">;</span>
<span class="token comment"># 19) Shows the compression algorithm in force. The default is the ZLIB algorithm.</span>
show compression algorithm<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="report命令" tabindex="-1"><a class="header-anchor" href="#report命令"><span>report命令</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 1) To find out which backups you need to make in order to conform to the retention policy you put in place,The output of the report need backup command tells you that you must back up which all database files to comply with your retention policy.</span>
report need backup<span class="token punctuation">;</span>

<span class="token comment"># 2) To get a report about all the datafiles in a database</span>
report schema<span class="token punctuation">;</span>
report schema at <span class="token function">time</span> <span class="token string">&#39;sysdate-1&#39;</span><span class="token punctuation">;</span>
report schema at scn  <span class="token number">8599843</span><span class="token punctuation">;</span>
report schema at sequence <span class="token number">280</span><span class="token punctuation">;</span>
<span class="token comment"># 3) To reports on any obsolete backups,Always run the crosscheck command first in order to update the status of the backups in the RMAN repository to that on disk and tape.</span>
crosscheck backup<span class="token punctuation">;</span>
report obsolete<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="crosscheck命令" tabindex="-1"><a class="header-anchor" href="#crosscheck命令"><span>crosscheck命令</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 1) Cross-checking just backup sets</span>
crosscheck backupset<span class="token punctuation">;</span>
<span class="token comment"># 2) Cross-checking a copy of a database</span>
crosscheck copy of database<span class="token punctuation">;</span>
<span class="token comment"># 3) Cross-checking specific backupsets</span>
crosscheck backupset <span class="token number">10,11</span><span class="token punctuation">;</span>
<span class="token comment"># 4) Cross-checking using a backup tag</span>
crosscheck backuppiece tag <span class="token operator">=</span> <span class="token string">&#39;TAG20230117T141640&#39;</span><span class="token punctuation">;</span>
<span class="token comment"># 5) Cross-checking a control file copy;</span>
crosscheck controlfilecopy <span class="token string">&#39;/backups/control01.ctl&#39;</span><span class="token punctuation">;</span>
<span class="token comment"># 6) Cross-checking backups completed after a specific time</span>
crosscheck backup of datafile <span class="token number">1</span> completed after <span class="token string">&#39;sysdate-7&#39;</span><span class="token punctuation">;</span>
<span class="token comment"># 7)  Cross-checking of all archivelogs and the spfile</span>
crosscheck backup of archivelog all spfile<span class="token punctuation">;</span>
<span class="token comment"># 8) Cross-checking all backups on disk and tape,The crosscheck command checks whether the backups still exist. The command checks backup sets, proxy copies, and image copies.</span>
crosscheck backup<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="validate命令" tabindex="-1"><a class="header-anchor" href="#validate命令"><span>validate命令</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 1) To check all the datafiles and the archived redo logs for physical corruption  without actually performing the backup</span>
RMAN<span class="token operator">&gt;</span> backup validate database archivelog all<span class="token punctuation">;</span>
<span class="token comment"># 2) To check for logical corruption  without actually performing the backup,The check logical clause means that RMAN will check for logical corruption only.</span>
RMAN<span class="token operator">&gt;</span> backup validate check logical database archivelog all<span class="token punctuation">;</span>
<span class="token comment"># 3) To validate a single backup set</span>
RMAN<span class="token operator">&gt;</span> validate backupset <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token comment"># 4) To validate all datafiles at once</span>
<span class="token comment"># Note that the validate command can check at a much more granular level than the backup … validate command. You can use the validate command with individual datafiles, backup sets, and even data blocks.</span>
<span class="token comment"># The validate command always skips all the data blocks that were never used, in each of the datafile it validates.</span>
RMAN<span class="token operator">&gt;</span> validate database<span class="token punctuation">;</span>
<span class="token comment"># 5) To validate recovery area</span>
RMAN<span class="token operator">&gt;</span> validate recovery area<span class="token punctuation">;</span>
<span class="token comment"># 6) To validate all the recovery related files</span>
RMAN<span class="token operator">&gt;</span> validate recovery files<span class="token punctuation">;</span>
<span class="token comment"># 7) To validate the spfile</span>
RMAN<span class="token operator">&gt;</span> validate spfile<span class="token punctuation">;</span>
<span class="token comment"># 8) To validate specific tablespace</span>
RMAN<span class="token operator">&gt;</span> validate tablespace system<span class="token punctuation">;</span>
<span class="token comment"># 9) To validate specific control file copy</span>
RMAN<span class="token operator">&gt;</span> validate controlfilecopy <span class="token operator">&lt;</span>filename<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token comment"># 10) To validate specific backupset</span>
RMAN<span class="token operator">&gt;</span> validate backupset <span class="token operator">&lt;</span>primary_key<span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="backup命令" tabindex="-1"><a class="header-anchor" href="#backup命令"><span>backup命令</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 1) To perform a manual backup of the current control file</span>
RMAN<span class="token operator">&gt;</span> backup current controlfile<span class="token punctuation">;</span>
<span class="token comment"># 2) To back up the control file as part of a tablespace backup operation</span>
RMAN<span class="token operator">&gt;</span> backup tablespace <span class="token function">users</span> include current controlfile<span class="token punctuation">;</span>
<span class="token comment"># 3) To back up the server parameter file</span>
RMAN<span class="token operator">&gt;</span> backup spfile<span class="token punctuation">;</span>
<span class="token comment"># 4) To restart an RMAN backup that failed midway through a nightly backup.</span>
RMAN<span class="token operator">&gt;</span> backup not backed up since <span class="token function">time</span> <span class="token string">&#39;sysdate-1&#39;</span> database plus archivelog<span class="token punctuation">;</span>
<span class="token comment"># 5) To force RMAN to back up a file regardless of whether it’s identical to a previously backed up file by specifying the force option,By using the force option, you make RMAN back up all the specified files, even if the backup optimization feature is turned on.</span>
RMAN<span class="token operator">&gt;</span> backup database force<span class="token punctuation">;</span>
<span class="token comment"># 6) To backup complete database</span>
RMAN<span class="token operator">&gt;</span> backup database<span class="token punctuation">;</span>
<span class="token comment"># 7) To backup database plus archivelogs</span>
RMAN<span class="token operator">&gt;</span> backup database plus archivelogs<span class="token punctuation">;</span>
<span class="token comment"># 8) To backup all archive logs</span>
RMAN<span class="token operator">&gt;</span> backup archivelog all<span class="token punctuation">;</span>
<span class="token comment"># 9) To backup specific data file,A tag was also added to easily locate this datafile’s backup.</span>
RMAN<span class="token operator">&gt;</span> backup datafile <span class="token number">1</span> tag dbfile_5_bkp<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="delete命令" tabindex="-1"><a class="header-anchor" href="#delete命令"><span>delete命令</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 1) To remove both archived redo logs and RMAN backups</span>
<span class="token comment"># RMAN always prompts you for confirmation before going ahead and deleting the backup files. You can issue the delete noprompt command to suppress the confirmation prompt. This will also remove the physical file from the backup media</span>
<span class="token comment"># To make sure the repository and the physical media are synchronized, run “RMAN&gt; crosscheck backup;” before running above command</span>
RMAN<span class="token operator">&gt;</span> delete backup<span class="token punctuation">;</span>
<span class="token comment"># 2) To remove all image copies,To make sure the repository and the physical media are synchronized, run “RMAN&gt; crosscheck copy;” before running above command</span>
RMAN<span class="token operator">&gt;</span> delete copy<span class="token punctuation">;</span>
<span class="token comment"># 3) To delete specfic backuppiece</span>
RMAN<span class="token operator">&gt;</span> delete backuppiece <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token comment"># 4) To delete copy of controlfile under /backups</span>
RMAN<span class="token operator">&gt;</span> delete copy of controlfile like ‘/backups/%’<span class="token punctuation">;</span>
<span class="token comment"># 5) To delete backups with specific tag</span>
RMAN<span class="token operator">&gt;</span> delete backup <span class="token assign-left variable">tag</span><span class="token operator">=</span>’double_bkp_prod’<span class="token punctuation">;</span>
<span class="token comment"># 6) To delete bakups of specific tablespace</span>
<span class="token comment"># ******************</span>
<span class="token comment"># You can also use force, expired, obsolete keyword with delete commad:</span>
 
<span class="token comment"># delete force ..: Deletes the specified files whether they actually exist on media or not and removes their records from the RMAN repository as well</span>
 
<span class="token comment"># delete expired ..: Deletes only those files marked as expired  as per crosscheck command.</span>
 
<span class="token comment"># delete obsolete ..: Deletes datafile backups and copies and the archived redo logs and log backups that are recorded as obsolete in the RMAN repository</span>
<span class="token comment"># The delete obsolete command relies only on the backup retention policy in force.</span>
<span class="token comment"># ******************</span>
RMAN<span class="token operator">&gt;</span> delete backup of tablespace sysaux device <span class="token builtin class-name">type</span> sbt<span class="token punctuation">;</span>

<span class="token comment"># 7) To delete all archived redo logs</span>
RMAN<span class="token operator">&gt;</span> delete archivelog all<span class="token punctuation">;</span>
<span class="token comment"># 8) To delete already backed up archived redo logs</span>
RMAN<span class="token operator">&gt;</span> delete archivelog all backed up <span class="token number">2</span> <span class="token builtin class-name">times</span> to sbt<span class="token punctuation">;</span>
<span class="token comment"># 9) To delete specific archived redo logs</span>
RMAN<span class="token operator">&gt;</span> delete archivelog <span class="token keyword">until</span> sequence <span class="token operator">=</span> <span class="token number">1234</span><span class="token punctuation">;</span>
<span class="token comment"># 10) Delete archive logs after taking backup</span>
RMAN<span class="token operator">&gt;</span> backup device <span class="token builtin class-name">type</span> sbt archivelog all delete all input<span class="token punctuation">;</span>
<span class="token comment"># 11) Delete stored script</span>
RMAN<span class="token operator">&gt;</span> delete script full_disk_db<span class="token punctuation">;</span>
<span class="token comment"># If you have two scripts—one local and one global—in the same name, then the delete script command drops the local one, not the global one. If you want to drop the global script, you must use the keyword global in the command, as shown here:</span>
RMAN<span class="token operator">&gt;</span> delete global script full_disk_db<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,56);function h(g,y){const i=o("CodeTabs");return p(),d("div",null,[k,u(i,{id:"99",data:[{id:"交互命令"},{id:"非交互命令"}],active:0},{title0:a(({value:e,isActive:t})=>[s("交互命令")]),title1:a(({value:e,isActive:t})=>[s("非交互命令")]),tab0:a(({value:e,isActive:t})=>[v]),tab1:a(({value:e,isActive:t})=>[m]),_:1}),b])}const _=c(r,[["render",h],["__file","rman.html.vue"]]),R=JSON.parse('{"path":"/guide/database/oracle/backuprecovery/rman.html","title":"RMAN备份与恢复","lang":"zh-CN","frontmatter":{"title":"RMAN备份与恢复","description":"RMAN信息查询 评估oracle 数据库rman 增量备份的大小： 评估rman 增量备份大小前提是开启了块跟踪(block change tracking) 查看块追踪是否开启 RMAN备份信息查询 查看RMAN配置信息 查看所有备份集 查找某个备份集中包含数据文件 查询某个备份集中控制文件 查看某个备份集中归档日志 查看某个备份集SPFILE R...","head":[["meta",{"property":"og:url","content":"https://github.com/abelit/abelit-datapeacock.git/guide/database/oracle/backuprecovery/rman.html"}],["meta",{"property":"og:site_name","content":"数之雀"}],["meta",{"property":"og:title","content":"RMAN备份与恢复"}],["meta",{"property":"og:description","content":"RMAN信息查询 评估oracle 数据库rman 增量备份的大小： 评估rman 增量备份大小前提是开启了块跟踪(block change tracking) 查看块追踪是否开启 RMAN备份信息查询 查看RMAN配置信息 查看所有备份集 查找某个备份集中包含数据文件 查询某个备份集中控制文件 查看某个备份集中归档日志 查看某个备份集SPFILE R..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-11T14:06:18.000Z"}],["meta",{"property":"article:author","content":"Abelit"}],["meta",{"property":"article:modified_time","content":"2024-05-11T14:06:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"RMAN备份与恢复\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-11T14:06:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Abelit\\",\\"url\\":\\"https://github.com/abelit\\"}]}"]]},"headers":[{"level":2,"title":"RMAN信息查询","slug":"rman信息查询","link":"#rman信息查询","children":[{"level":3,"title":"评估oracle 数据库rman 增量备份的大小：","slug":"评估oracle-数据库rman-增量备份的大小","link":"#评估oracle-数据库rman-增量备份的大小","children":[]},{"level":3,"title":"RMAN备份信息查询","slug":"rman备份信息查询","link":"#rman备份信息查询","children":[]}]},{"level":2,"title":"RMAN备份","slug":"rman备份","link":"#rman备份","children":[]},{"level":2,"title":"RMAN恢复","slug":"rman恢复","link":"#rman恢复","children":[]},{"level":2,"title":"RMAN相关命令","slug":"rman相关命令","link":"#rman相关命令","children":[{"level":3,"title":"list命令","slug":"list命令","link":"#list命令","children":[]},{"level":3,"title":"show命令","slug":"show命令","link":"#show命令","children":[]},{"level":3,"title":"report命令","slug":"report命令","link":"#report命令","children":[]},{"level":3,"title":"crosscheck命令","slug":"crosscheck命令","link":"#crosscheck命令","children":[]},{"level":3,"title":"validate命令","slug":"validate命令","link":"#validate命令","children":[]},{"level":3,"title":"backup命令","slug":"backup命令","link":"#backup命令","children":[]},{"level":3,"title":"delete命令","slug":"delete命令","link":"#delete命令","children":[]}]}],"git":{"createdTime":1715436378000,"updatedTime":1715436378000,"contributors":[{"name":"ableit","email":"ychenid@live.com","commits":1}]},"readingTime":{"minutes":7.6,"words":2281},"filePathRelative":"guide/database/oracle/backuprecovery/rman.md","localizedDate":"2024年5月11日","autoDesc":true,"excerpt":"<h2>RMAN信息查询</h2>\\n<h3>评估oracle 数据库rman 增量备份的大小：</h3>\\n<ul>\\n<li>评估rman 增量备份大小前提是开启了块跟踪(block change tracking)</li>\\n</ul>\\n<div class=\\"language-sql\\" data-ext=\\"sql\\" data-title=\\"sql\\"><pre class=\\"language-sql\\"><code><span class=\\"token keyword\\">SELECT</span>\\n    <span class=\\"token keyword\\">file</span><span class=\\"token comment\\">#,</span>\\n    blocks_changed<span class=\\"token punctuation\\">,</span>\\n    block_size<span class=\\"token punctuation\\">,</span>\\n    blocks_changed <span class=\\"token operator\\">*</span> block_size bytes_changed<span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token function\\">round</span><span class=\\"token punctuation\\">(</span>\\n        blocks_changed <span class=\\"token operator\\">/</span> blocks <span class=\\"token operator\\">*</span> <span class=\\"token number\\">100</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">2</span>\\n    <span class=\\"token punctuation\\">)</span>                           percent_changed\\n<span class=\\"token keyword\\">FROM</span>\\n    v$datafile\\n    <span class=\\"token keyword\\">JOIN</span> <span class=\\"token punctuation\\">(</span>\\n        <span class=\\"token keyword\\">SELECT</span>\\n            fno      <span class=\\"token keyword\\">file</span><span class=\\"token comment\\">#,</span>\\n            <span class=\\"token function\\">SUM</span><span class=\\"token punctuation\\">(</span>bct<span class=\\"token punctuation\\">)</span> blocks_changed\\n        <span class=\\"token keyword\\">FROM</span>\\n            <span class=\\"token punctuation\\">(</span>\\n                <span class=\\"token keyword\\">SELECT</span> <span class=\\"token keyword\\">DISTINCT</span>\\n                    fno<span class=\\"token punctuation\\">,</span>\\n                    bno<span class=\\"token punctuation\\">,</span>\\n                    bct\\n                <span class=\\"token keyword\\">FROM</span>\\n                    x$krcbit\\n                <span class=\\"token keyword\\">WHERE</span>\\n                    vertime <span class=\\"token operator\\">&gt;=</span> <span class=\\"token punctuation\\">(</span>\\n                        <span class=\\"token keyword\\">SELECT</span>\\n                            curr_vertime\\n                        <span class=\\"token keyword\\">FROM</span>\\n                            x$krcfde\\n                        <span class=\\"token keyword\\">WHERE</span>\\n                            csno <span class=\\"token operator\\">=</span> x$krcbit<span class=\\"token punctuation\\">.</span>csno\\n                            <span class=\\"token operator\\">AND</span> fno <span class=\\"token operator\\">=</span> x$krcbit<span class=\\"token punctuation\\">.</span>fno\\n                    <span class=\\"token punctuation\\">)</span>\\n            <span class=\\"token punctuation\\">)</span>\\n        <span class=\\"token keyword\\">GROUP</span> <span class=\\"token keyword\\">BY</span>\\n            fno\\n        <span class=\\"token keyword\\">ORDER</span> <span class=\\"token keyword\\">BY</span>\\n            <span class=\\"token number\\">1</span>\\n    <span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">USING</span> <span class=\\"token punctuation\\">(</span> <span class=\\"token keyword\\">file</span><span class=\\"token comment\\"># );</span>\\n</code></pre></div>"}');export{_ as comp,R as data};
