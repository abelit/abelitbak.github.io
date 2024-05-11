import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as d,c,a as n,d as e,b as s,w as a,f as i}from"./app-DR5J2daJ.js";const r={},p=n("h1",{id:"通过拓扑-label-进行副本调度",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#通过拓扑-label-进行副本调度"},[n("span",null,"通过拓扑 label 进行副本调度")])],-1),u=n("p",null,[n("strong",null,"注意：")],-1),v=n("p",null,"为了提升 TiDB 集群的高可用性和数据容灾能力，我们推荐让 TiKV 节点尽可能在物理层面上分散，例如让 TiKV 节点分布在不同的机架甚至不同的机房。PD 调度器根据 TiKV 的拓扑信息，会自动在后台通过调度使得 Region 的各个副本尽可能隔离，从而使得数据容灾能力最大化。",-1),b=i(`<h2 id="根据集群拓扑配置-labels" tabindex="-1"><a class="header-anchor" href="#根据集群拓扑配置-labels"><span>根据集群拓扑配置 labels</span></a></h2><h3 id="设置-tikv-和-tiflash-的-labels" tabindex="-1"><a class="header-anchor" href="#设置-tikv-和-tiflash-的-labels"><span>设置 TiKV 和 TiFlash 的 <code>labels</code></span></a></h3><p>TiKV 和 TiFlash 支持在命令行参数或者配置文件中以键值对的形式绑定一些属性，我们把这些属性叫做标签 (label)。TiKV 和 TiFlash 在启动后，会将自身的标签上报给 PD，因此可以使用标签来标识 TiKV 和 TiFlash 节点的地理位置。</p><p>比如集群的拓扑结构分成四层：机房 (zone) -&gt; 数据中心 (dc) -&gt; 机架 (rack) -&gt; 主机 (host)，就可以使用这 4 个标签来设置 TiKV 和 TiFlash 的位置。</p><p>使用命令行参数的方式启动一个 TiKV 实例：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>tikv-server --labels zone=&lt;zone&gt;,dc=&lt;dc&gt;,rack=&lt;rack&gt;,host=&lt;host&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用配置文件的方式：</p><div class="language-toml line-numbers-mode" data-ext="toml" data-title="toml"><pre class="language-toml"><code><span class="token punctuation">[</span><span class="token table class-name">server</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token table class-name">server.labels</span><span class="token punctuation">]</span>
<span class="token key property">zone</span> <span class="token punctuation">=</span> <span class="token string">&quot;&lt;zone&gt;&quot;</span>
<span class="token key property">dc</span> <span class="token punctuation">=</span> <span class="token string">&quot;&lt;dc&gt;&quot;</span>
<span class="token key property">rack</span> <span class="token punctuation">=</span> <span class="token string">&quot;&lt;rack&gt;&quot;</span>
<span class="token key property">host</span> <span class="token punctuation">=</span> <span class="token string">&quot;&lt;host&gt;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>TiFlash 支持通过 tiflash-learner.toml （tiflash-proxy 的配置文件）的方式设置 labels：</p><div class="language-toml line-numbers-mode" data-ext="toml" data-title="toml"><pre class="language-toml"><code><span class="token punctuation">[</span><span class="token table class-name">server</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token table class-name">server.labels</span><span class="token punctuation">]</span>
<span class="token key property">zone</span> <span class="token punctuation">=</span> <span class="token string">&quot;&lt;zone&gt;&quot;</span>
<span class="token key property">dc</span> <span class="token punctuation">=</span> <span class="token string">&quot;&lt;dc&gt;&quot;</span>
<span class="token key property">rack</span> <span class="token punctuation">=</span> <span class="token string">&quot;&lt;rack&gt;&quot;</span>
<span class="token key property">host</span> <span class="token punctuation">=</span> <span class="token string">&quot;&lt;host&gt;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置-tidb-的-labels-可选" tabindex="-1"><a class="header-anchor" href="#设置-tidb-的-labels-可选"><span>设置 TiDB 的 <code>labels</code>（可选）</span></a></h3>`,11),m=n("code",null,"labels",-1),h=i(`<p>TiDB 支持使用配置文件的方式设置 <code>labels</code>：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>[labels]
zone = &quot;&lt;zone&gt;&quot;
dc = &quot;&lt;dc&gt;&quot;
rack = &quot;&lt;rack&gt;&quot;
host = &quot;&lt;host&gt;&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>注意：</strong></p><p>目前，TiDB 依赖 <code>zone</code> 标签匹配选择同一区域的副本。如果需要使用此功能，需要在 PD <a href="#%E8%AE%BE%E7%BD%AE-pd-%E7%9A%84-isolation-level-%E9%85%8D%E7%BD%AE"><code>location-labels</code> 配置</a>中包含 <code>zone</code>，并在 TiDB、TiKV 和 TiFlash 设置的 <code>labels</code> 中包含 <code>zone</code>。关于如何设置 TiKV 和 TiFlash 的 <code>labels</code>，可参考<a href="#%E8%AE%BE%E7%BD%AE-tikv-%E5%92%8C-tiflash-%E7%9A%84-labels">设置 TiKV 和 TiFlash 的 <code>labels</code></a>。</p></blockquote><h3 id="设置-pd-的-location-labels-配置" tabindex="-1"><a class="header-anchor" href="#设置-pd-的-location-labels-配置"><span>设置 PD 的 <code>location-labels</code> 配置</span></a></h3><p>根据前面的描述，标签可以是用来描述 TiKV 属性的任意键值对，但 PD 无从得知哪些标签是用来标识地理位置的，而且也无从得知这些标签的层次关系。因此，PD 也需要一些配置来使得 PD 理解 TiKV 节点拓扑。</p><p>PD 上的配置叫做 <code>location-labels</code>，是一个字符串数组。该配置的每一项与 TiKV <code>labels</code> 的 key 是对应的，而且其中每个 key 的顺序代表不同标签的级别关系（从左到右，隔离级别依次递减）。</p><p><code>location-labels</code> 没有默认值，你可以根据具体需求来设置该值，包括 <code>zone</code>、<code>rack</code>、<code>host</code> 等等。同时，<code>location-labels</code> 对标签级别的数量也<strong>没有</strong>限制（即不限定于 3 个），只要其级别与 TiKV 服务器的标签匹配，则可以配置成功。</p><blockquote><p><strong>注意：</strong></p><ul><li>必须同时配置 PD 的 <code>location-labels</code> 和 TiKV 的 <code>labels</code> 参数，否则 PD 不会根据拓扑结构进行调度。</li><li>如果你使用 Placement Rules in SQL，只需要配置 TiKV 的 <code>labels</code> 即可。Placement Rules in SQL 目前不兼容 PD <code>location-labels</code> 设置，会忽略该设置。不建议 <code>location-labels</code> 与 Placement Rules in SQL 混用，否则可能产生非预期的结果。</li></ul></blockquote><p>你可以根据集群状态来选择不同的配置方式：</p><ul><li><p>在集群初始化之前，可以通过 PD 的配置文件进行配置：</p><div class="language-toml line-numbers-mode" data-ext="toml" data-title="toml"><pre class="language-toml"><code><span class="token punctuation">[</span><span class="token table class-name">replication</span><span class="token punctuation">]</span>
<span class="token key property">location-labels</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">&quot;zone&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;rack&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;host&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>如果需要在 PD 集群初始化完成后进行配置，则需要使用 pd-ctl 工具进行在线更改：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>pd-ctl config <span class="token builtin class-name">set</span> location-labels zone,rack,host
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h3 id="设置-pd-的-isolation-level-配置" tabindex="-1"><a class="header-anchor" href="#设置-pd-的-isolation-level-配置"><span>设置 PD 的 <code>isolation-level</code> 配置</span></a></h3><p>在配置了 <code>location-labels</code> 的前提下，用户可以还通过 <code>isolation-level</code> 配置来进一步加强对 TiKV 集群的拓扑隔离要求。假设按照上面的说明通过 <code>location-labels</code> 将集群的拓扑结构分成三层：机房 (zone) -&gt; 机架 (rack) -&gt; 主机 (host)，并对 <code>isolation-level</code> 作如下配置：</p><div class="language-toml line-numbers-mode" data-ext="toml" data-title="toml"><pre class="language-toml"><code><span class="token punctuation">[</span><span class="token table class-name">replication</span><span class="token punctuation">]</span>
<span class="token key property">isolation-level</span> <span class="token punctuation">=</span> <span class="token string">&quot;zone&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>当 PD 集群初始化完成后，需要使用 pd-ctl 工具进行在线更改：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>pd-ctl config <span class="token builtin class-name">set</span> isolation-level zone
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中，<code>isolation-level</code> 配置是一个字符串，需要与 <code>location-labels</code> 的其中一个 key 对应。该参数限制 TiKV 拓扑集群的最小且强制隔离级别要求。</p><blockquote><p><strong>注意：</strong></p><p><code>isolation-level</code> 默认情况下为空，即不进行强制隔离级别限制，若要对其进行设置，必须先配置 PD 的 <code>location-labels</code> 参数，同时保证 <code>isolation-level</code> 的值一定为 <code>location-labels</code> 中的一个。</p></blockquote><h3 id="使用-tiup-进行配置-推荐" tabindex="-1"><a class="header-anchor" href="#使用-tiup-进行配置-推荐"><span>使用 TiUP 进行配置（推荐）</span></a></h3>`,18),g=i(`<p>下面的例子定义了 <code>zone</code> 和 <code>host</code> 两层拓扑结构。集群的 TiKV 和 TiFlash 分布在三个 zone，z1、z2 和 z3。每个 zone 内有四台主机，z1 两台主机分别部署两个 TiKV 实例，另外两台分别部署一个 TiFlash 实例，z2 和 z3 其中两台主机分别部署一个 TiKV 实例，另外两台分别部署一个 TiFlash 实例。以下例子中 <code>tikv-n</code> 代表第 n 个 TiKV 节点的 IP 地址，<code>tiflash-n</code> 代表第 n 个 TiFlash 节点的 IP 地址。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>server_configs:
  pd:
    replication.location-labels: [&quot;zone&quot;, &quot;host&quot;]

tikv_servers:
# z1
  - host: tikv-1
    port：20160
    config:
      server.labels:
        zone: z1
        host: h1
   - host: tikv-1
     port：20161
    config:
      server.labels:
        zone: z1
        host: h1
  - host: tikv-2
    port：20160
    config:
      server.labels:
        zone: z1
        host: h2
  - host: tikv-2
    port：20161
    config:
      server.labels:
        zone: z1
        host: h2
# z2
  - host: tikv-5
    config:
      server.labels:
        zone: z2
        host: h1
   - host: tikv-6
    config:
      server.labels:
        zone: z2
        host: h2
# z3
  - host: tikv-7
    config:
      server.labels:
        zone: z3
        host: h1
  - host: tikv-8
    config:
      server.labels:
        zone: z3
        host: h2

tiflash_servers:
# z1
  - host: tiflash-1
    learner_config:
      server.labels:
        zone: z1
        host: h3
   - host: tiflash-2
    learner_config:
      server.labels:
        zone: z1
        host: h4
# z2
  - host: tiflash-3
    learner_config:
      server.labels:
        zone: z2
        host: h3
   - host: tiflash-4
    learner_config:
      server.labels:
        zone: z2
        host: h4
# z3
  - host: tiflash-5
    learner_config:
      server.labels:
        zone: z3
        host: h3
  - host: tiflash-6
    learner_config:
      server.labels:
        zone: z3
        host: h4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),k=i('<blockquote><p><strong>注意：</strong></p><p>如果你未在配置文件中配置 <code>replication.location-labels</code> 项，使用该拓扑配置文件部署集群时可能会报错。建议在部署集群前，确认 <code>replication.location-labels</code> 已配置。</p></blockquote><h2 id="基于拓扑-label-的-pd-调度策略" tabindex="-1"><a class="header-anchor" href="#基于拓扑-label-的-pd-调度策略"><span>基于拓扑 label 的 PD 调度策略</span></a></h2><p>PD 在副本调度时，会按照 label 层级，保证同一份数据的不同副本尽可能分散。</p><p>下面以上一节的拓扑结构为例分析。</p><p>假设集群副本数设置为 3 (<code>max-replicas=3</code>)，因为总共有 3 个 zone，PD 会保证每个 Region 的 3 个副本分别放置在 z1/z2/z3，这样当任何一个数据中心发生故障时，TiDB 集群依然是可用的。</p><p>假如集群副本数设置为 5 (<code>max-replicas=5</code>)，因为总共只有 3 个 zone，在这一层级 PD 无法保证各个副本的隔离，此时 PD 调度器会退而求其次，保证在 host 这一层的隔离。也就是说，会出现一个 Region 的多个副本分布在同一个 zone 的情况，但是不会出现多个副本分布在同一台主机。</p><p>在 5 副本配置的前提下，如果 z3 出现了整体故障或隔离，并且 z3 在一段时间后仍然不能恢复（由 <code>max-store-down-time</code> 控制），PD 会通过调度补齐 5 副本，此时可用的主机只有 4 个了，故而无法保证 host 级别的隔离，于是可能出现多个副本被调度到同一台主机的情况。</p>',7),z=n("code",null,"isolation-level",-1),T=n("code",null,"zone",-1),_=n("code",null,"max-replicas",-1),f=n("code",null,"max-store-down-time",-1),D=n("code",null,"isolation-level",-1),y=n("code",null,"zone",-1),P=n("code",null,"isolation-level",-1),q=n("p",null,[e("类似地，"),n("code",null,"isolation-level"),e(" 为 "),n("code",null,"rack"),e(" 时，最小隔离级别便为同一机房的不同 rack。在此设置下，如果能在 zone 级别保证隔离，会首先保证 zone 级别的隔离。只有在 zone 级别隔离无法完成时，才会考虑避免出现在同一 zone 同一 rack 的调度，并以此类推。")],-1),x=n("p",null,[e("总的来说，PD 能够根据当前的拓扑结构使得集群容灾能力最大化。所以如果用户希望达到某个级别的容灾能力，就需要根据拓扑结构在对应级别提供多于副本数 ("),n("code",null,"max-replicas"),e(") 的机器。同时 TiDB 也提供了诸如 "),n("code",null,"isolation-level"),e(" 这样的强制隔离级别设置，以便更灵活地根据场景来控制对数据的拓扑隔离级别。")],-1);function V(K,B){const l=o("RouteLink");return d(),c("div",null,[p,n("blockquote",null,[u,n("p",null,[e("TiDB 在 v5.3.0 中引入了 "),s(l,{to:"/placement-rules-in-sql.html"},{default:a(()=>[e("Placement Rules in SQL")]),_:1}),e("。使用该功能，你可以更方便地配置表和分区的位置。在未来版本中，Placement Rules in SQL 可能取代通过 PD 配置放置规则的功能。")])]),v,n("p",null,[e("要让这个机制生效，需要在部署时进行合理配置，把集群的拓扑信息（特别是 TiKV 的位置）上报给 PD。阅读本章前，请先确保阅读 "),s(l,{to:"/production-deployment-using-tiup.html"},{default:a(()=>[e("TiUP 部署方案")]),_:1}),e("。")]),b,n("p",null,[e("如果需要使用 "),s(l,{to:"/follower-read.html"},{default:a(()=>[e("Follower Read")]),_:1}),e(" 的优先读同一区域副本的功能，需要为 TiDB 节点配置相关的 "),m,e("。")]),h,n("p",null,[e("如果使用 TiUP 部署集群，可以在"),s(l,{to:"/production-deployment-using-tiup.html#%E7%AC%AC-3-%E6%AD%A5%E5%88%9D%E5%A7%8B%E5%8C%96%E9%9B%86%E7%BE%A4%E6%8B%93%E6%89%91%E6%96%87%E4%BB%B6"},{default:a(()=>[e("初始化配置文件")]),_:1}),e("中统一进行 location 相关配置。TiUP 会负责在部署时生成对应的 TiKV、PD 和 TiFlash 配置文件。")]),g,n("p",null,[e("详情参阅 "),s(l,{to:"/geo-distributed-deployment-topology.html"},{default:a(()=>[e("TiUP 跨数据中心部署拓扑")]),_:1}),e("。")]),k,n("p",null,[e("但假如 "),z,e(" 设置不为空，值为 "),T,e("，这样就规定了 Region 副本在物理层面上的最低隔离要求，也就是说 PD 一定会保证同一 Region 的副本分散于不同的 zone 之上。即便遵循此隔离限制会无法满足 "),_,e(" 的多副本要求，PD 也不会进行相应的调度。例如，当前存在 TiKV 集群的三个机房 z1/z2/z3，在三副本的设置下，PD 会将同一 Region 的三个副本分别分散调度至这三个机房。若此时 z1 整个机房发生了停电事故并在一段时间后（由 "),s(l,{to:"/pd-configuration-file.html#max-store-down-time"},{default:a(()=>[f]),_:1}),e(" 控制，默认为 30 分钟）仍然不能恢复，PD 会认为 z1 上的 Region 副本不再可用。但由于 "),D,e(" 设置为了 "),y,e("，PD 需要严格保证不同的 Region 副本不会落到同一 zone 上。此时的 z2 和 z3 均已存在副本，则 PD 在 "),P,e(" 的最小强制隔离级别限制下便不会进行任何调度，即使此时仅存在两个副本。")]),q,x])}const A=t(r,[["render",V],["__file","schedule-replicas-by-topology-labels.html.vue"]]),F=JSON.parse('{"path":"/guide/database/tidb/deployments/topology/schedule-replicas-by-topology-labels.html","title":"通过拓扑 label 进行副本调度","lang":"zh-CN","frontmatter":{"title":"通过拓扑 label 进行副本调度","description":"通过拓扑 label 进行副本调度 注意： TiDB 在 v5.3.0 中引入了 。使用该功能，你可以更方便地配置表和分区的位置。在未来版本中，Placement Rules in SQL 可能取代通过 PD 配置放置规则的功能。 为了提升 TiDB 集群的高可用性和数据容灾能力，我们推荐让 TiKV 节点尽可能在物理层面上分散，例如让 TiKV 节点...","head":[["meta",{"property":"og:url","content":"https://github.com/abelit/abelit-datapeacock.git/guide/database/tidb/deployments/topology/schedule-replicas-by-topology-labels.html"}],["meta",{"property":"og:site_name","content":"数之雀"}],["meta",{"property":"og:title","content":"通过拓扑 label 进行副本调度"}],["meta",{"property":"og:description","content":"通过拓扑 label 进行副本调度 注意： TiDB 在 v5.3.0 中引入了 。使用该功能，你可以更方便地配置表和分区的位置。在未来版本中，Placement Rules in SQL 可能取代通过 PD 配置放置规则的功能。 为了提升 TiDB 集群的高可用性和数据容灾能力，我们推荐让 TiKV 节点尽可能在物理层面上分散，例如让 TiKV 节点..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-11T14:06:18.000Z"}],["meta",{"property":"article:author","content":"Abelit"}],["meta",{"property":"article:modified_time","content":"2024-05-11T14:06:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"通过拓扑 label 进行副本调度\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-11T14:06:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Abelit\\",\\"url\\":\\"https://github.com/abelit\\"}]}"]]},"headers":[{"level":2,"title":"根据集群拓扑配置 labels","slug":"根据集群拓扑配置-labels","link":"#根据集群拓扑配置-labels","children":[{"level":3,"title":"设置 TiKV 和 TiFlash 的 labels","slug":"设置-tikv-和-tiflash-的-labels","link":"#设置-tikv-和-tiflash-的-labels","children":[]},{"level":3,"title":"设置 TiDB 的 labels（可选）","slug":"设置-tidb-的-labels-可选","link":"#设置-tidb-的-labels-可选","children":[]},{"level":3,"title":"设置 PD 的 location-labels 配置","slug":"设置-pd-的-location-labels-配置","link":"#设置-pd-的-location-labels-配置","children":[]},{"level":3,"title":"设置 PD 的 isolation-level 配置","slug":"设置-pd-的-isolation-level-配置","link":"#设置-pd-的-isolation-level-配置","children":[]},{"level":3,"title":"使用 TiUP 进行配置（推荐）","slug":"使用-tiup-进行配置-推荐","link":"#使用-tiup-进行配置-推荐","children":[]}]},{"level":2,"title":"基于拓扑 label 的 PD 调度策略","slug":"基于拓扑-label-的-pd-调度策略","link":"#基于拓扑-label-的-pd-调度策略","children":[]}],"git":{"createdTime":1715436378000,"updatedTime":1715436378000,"contributors":[{"name":"ableit","email":"ychenid@live.com","commits":1}]},"readingTime":{"minutes":8.4,"words":2521},"filePathRelative":"guide/database/tidb/deployments/topology/schedule-replicas-by-topology-labels.md","localizedDate":"2024年5月11日","autoDesc":true,"excerpt":"\\n<blockquote>\\n<p><strong>注意：</strong></p>\\n<p>TiDB 在 v5.3.0 中引入了 <a href=\\"/placement-rules-in-sql.html\\" target=\\"_blank\\">Placement Rules in SQL</a>。使用该功能，你可以更方便地配置表和分区的位置。在未来版本中，Placement Rules in SQL 可能取代通过 PD 配置放置规则的功能。</p>\\n</blockquote>\\n<p>为了提升 TiDB 集群的高可用性和数据容灾能力，我们推荐让 TiKV 节点尽可能在物理层面上分散，例如让 TiKV 节点分布在不同的机架甚至不同的机房。PD 调度器根据 TiKV 的拓扑信息，会自动在后台通过调度使得 Region 的各个副本尽可能隔离，从而使得数据容灾能力最大化。</p>"}');export{A as comp,F as data};
