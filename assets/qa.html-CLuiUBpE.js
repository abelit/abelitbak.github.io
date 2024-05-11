import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as a,f as s}from"./app-DR5J2daJ.js";const t={},l=s(`<h2 id="主从问题" tabindex="-1"><a class="header-anchor" href="#主从问题"><span>主从问题</span></a></h2><h3 id="主从延迟问题及解决办法" tabindex="-1"><a class="header-anchor" href="#主从延迟问题及解决办法"><span>主从延迟问题及解决办法</span></a></h3><p>MySQL主从延迟是指从库在复制主库的数据时出现的时间差，导致从库的数据不及时更新，影响数据的一致性和可用性。MySQL主从延迟的原因和解决办法有以下几种：</p><ul><li><p>主库的写入压力过大，导致从库无法及时获取和执行binlog。这种情况下，可以考虑优化主库的写入性能，比如使用批量插入、减少索引、使用分区表等。也可以考虑增加从库的数量，分散读取压力，或者使用半同步复制模式，让主库在写入时等待从库的确认，保证数据的强一致性12。</p></li><li><p>从库的执行效率低于主库，导致积压了大量的relay log。这种情况下，可以考虑优化从库的执行性能，比如使用更高配置的硬件、调整缓存和参数、使用并行复制等。也可以考虑减少从库执行的开销，比如过滤掉不需要复制的数据库或表、使用row格式的binlog等12。</p></li><li><p>网络环境不稳定，导致从库无法持续地从主库获取binlog。这种情况下，可以考虑优化网络环境，比如使用更快速和稳定的网络连接、减少网络延迟和丢包等。也可以考虑使用压缩传输或增量传输等技术，减少网络传输的数据量12。</p></li></ul><h3 id="检查mysql主从同步状态" tabindex="-1"><a class="header-anchor" href="#检查mysql主从同步状态"><span>检查MySQL主从同步状态</span></a></h3><p>检查MySQL主从同步状态的方法有以下几种：</p><ul><li>使用<code>SHOW SLAVE STATUS</code>命令，查看从库的同步状态信息，主要关注以下几个字段 ： <ul><li><code>Slave_IO_Running</code>：表示从库是否能够连接到主库，获取binlog。如果为<code>Yes</code>，表示正常；如果为<code>No</code>，表示异常，需要检查网络和配置等原因。</li><li><code>Slave_SQL_Running</code>：表示从库是否能够执行relay log中的事件。如果为<code>Yes</code>，表示正常；如果为<code>No</code>，表示异常，需要检查错误信息和修复方法。</li><li><code>Seconds_Behind_Master</code>：表示从库复制主库数据的延迟时间，单位为秒。如果为<code>0</code>，表示没有延迟；如果为非零值，表示有延迟，需要检查延迟原因和解决办法；如果为<code>NULL</code>，表示无法获取延迟时间，可能是因为从库无法连接到主库或者执行relay log中的事件。</li><li><code>Last_IO_Error</code>和<code>Last_SQL_Error</code>：分别表示从库在获取或者执行binlog时出现的最后一个错误信息。如果为空，表示没有错误；如果不为空，表示有错误，需要根据错误信息进行修复。</li></ul></li><li>使用<code>SHOW MASTER STATUS</code>命令，查看主库的同步状态信息，主要关注以下几个字段 ： <ul><li><code>File</code>：表示主库当前正在写入的binlog文件名。</li><li><code>Position</code>：表示主库当前正在写入的binlog文件的位置。</li><li><code>Binlog_Do_DB</code>和<code>Binlog_Ignore_DB</code>：分别表示主库需要复制或者不需要复制的数据库列表。</li></ul></li><li>使用第三方工具或者脚本，比如[pt-heartbeat]、[pt-table-checksum]、[pt-table-sync]等，可以更方便地监控和检测MySQL主从同步状态 。</li></ul><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h2><p>Q1: 问题描述: 通过<code>show slave status\\G</code>,若出现如下错误：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Last_IO_Errno: <span class="token number">2061</span>
Last_IO_Error: Error connecting to <span class="token builtin class-name">source</span> <span class="token string">&#39;repl@10.10.13.100:3306&#39;</span><span class="token builtin class-name">.</span> This was attempt <span class="token number">1</span>/86400, with a delay of <span class="token number">10</span> seconds between attempts. Message: Authentication plugin <span class="token string">&#39;caching_sha2_password&#39;</span> reported error: Authentication requires secure connection.
Last_SQL_Errno: <span class="token number">0</span>
Last_SQL_Error: 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>问题原因： mysql 8.0之后默认的认证方式变为caching_sha2_password</p><p>解决方法：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> stop slave<span class="token punctuation">;</span>
Query OK<span class="token punctuation">,</span> <span class="token number">0</span> <span class="token keyword">rows</span> affected<span class="token punctuation">,</span> <span class="token number">1</span> warning <span class="token punctuation">(</span><span class="token number">0.01</span> sec<span class="token punctuation">)</span>

mysql<span class="token operator">&gt;</span> CHANGE MASTER <span class="token keyword">TO</span> GET_MASTER_PUBLIC_KEY<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
Query OK<span class="token punctuation">,</span> <span class="token number">0</span> <span class="token keyword">rows</span> affected<span class="token punctuation">,</span> <span class="token number">2</span> <span class="token keyword">warnings</span> <span class="token punctuation">(</span><span class="token number">0.01</span> sec<span class="token punctuation">)</span>


mysql<span class="token operator">&gt;</span> <span class="token keyword">start</span> slave<span class="token punctuation">;</span>
Query OK<span class="token punctuation">,</span> <span class="token number">0</span> <span class="token keyword">rows</span> affected<span class="token punctuation">,</span> <span class="token number">1</span> warning <span class="token punctuation">(</span><span class="token number">0.01</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),o=[l];function i(c,p){return e(),a("div",null,o)}const u=n(t,[["render",i],["__file","qa.html.vue"]]),m=JSON.parse('{"path":"/guide/database/mysql/ha/qa.html","title":"高可用常见问题","lang":"zh-CN","frontmatter":{"title":"高可用常见问题","description":"主从问题 主从延迟问题及解决办法 MySQL主从延迟是指从库在复制主库的数据时出现的时间差，导致从库的数据不及时更新，影响数据的一致性和可用性。MySQL主从延迟的原因和解决办法有以下几种： 主库的写入压力过大，导致从库无法及时获取和执行binlog。这种情况下，可以考虑优化主库的写入性能，比如使用批量插入、减少索引、使用分区表等。也可以考虑增加从库的...","head":[["meta",{"property":"og:url","content":"https://github.com/abelit/abelit-datapeacock.git/guide/database/mysql/ha/qa.html"}],["meta",{"property":"og:site_name","content":"数之雀"}],["meta",{"property":"og:title","content":"高可用常见问题"}],["meta",{"property":"og:description","content":"主从问题 主从延迟问题及解决办法 MySQL主从延迟是指从库在复制主库的数据时出现的时间差，导致从库的数据不及时更新，影响数据的一致性和可用性。MySQL主从延迟的原因和解决办法有以下几种： 主库的写入压力过大，导致从库无法及时获取和执行binlog。这种情况下，可以考虑优化主库的写入性能，比如使用批量插入、减少索引、使用分区表等。也可以考虑增加从库的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-11T14:06:18.000Z"}],["meta",{"property":"article:author","content":"Abelit"}],["meta",{"property":"article:modified_time","content":"2024-05-11T14:06:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"高可用常见问题\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-11T14:06:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Abelit\\",\\"url\\":\\"https://github.com/abelit\\"}]}"]]},"headers":[{"level":2,"title":"主从问题","slug":"主从问题","link":"#主从问题","children":[{"level":3,"title":"主从延迟问题及解决办法","slug":"主从延迟问题及解决办法","link":"#主从延迟问题及解决办法","children":[]},{"level":3,"title":"检查MySQL主从同步状态","slug":"检查mysql主从同步状态","link":"#检查mysql主从同步状态","children":[]}]},{"level":2,"title":"常见问题","slug":"常见问题","link":"#常见问题","children":[]}],"git":{"createdTime":1715436378000,"updatedTime":1715436378000,"contributors":[{"name":"ableit","email":"ychenid@live.com","commits":1}]},"readingTime":{"minutes":3.14,"words":942},"filePathRelative":"guide/database/mysql/ha/qa.md","localizedDate":"2024年5月11日","autoDesc":true,"excerpt":"<h2>主从问题</h2>\\n<h3>主从延迟问题及解决办法</h3>\\n<p>MySQL主从延迟是指从库在复制主库的数据时出现的时间差，导致从库的数据不及时更新，影响数据的一致性和可用性。MySQL主从延迟的原因和解决办法有以下几种：</p>\\n<ul>\\n<li>\\n<p>主库的写入压力过大，导致从库无法及时获取和执行binlog。这种情况下，可以考虑优化主库的写入性能，比如使用批量插入、减少索引、使用分区表等。也可以考虑增加从库的数量，分散读取压力，或者使用半同步复制模式，让主库在写入时等待从库的确认，保证数据的强一致性12。</p>\\n</li>\\n<li>\\n<p>从库的执行效率低于主库，导致积压了大量的relay log。这种情况下，可以考虑优化从库的执行性能，比如使用更高配置的硬件、调整缓存和参数、使用并行复制等。也可以考虑减少从库执行的开销，比如过滤掉不需要复制的数据库或表、使用row格式的binlog等12。</p>\\n</li>\\n<li>\\n<p>网络环境不稳定，导致从库无法持续地从主库获取binlog。这种情况下，可以考虑优化网络环境，比如使用更快速和稳定的网络连接、减少网络延迟和丢包等。也可以考虑使用压缩传输或增量传输等技术，减少网络传输的数据量12。</p>\\n</li>\\n</ul>"}');export{u as comp,m as data};
