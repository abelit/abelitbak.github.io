import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as n,o as r,c,a as t,d as e,b as l,w as a,f as s}from"./app-DR5J2daJ.js";const p={},g=t("h1",{id:"ticdc-部署拓扑",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#ticdc-部署拓扑"},[t("span",null,"TiCDC 部署拓扑")])],-1),y=t("blockquote",null,[t("p",null,[t("strong",null,"注意：")]),t("p",null,"TiCDC 从 v4.0.6 起成为正式功能，可用于生产环境。")],-1),h=s('<h2 id="拓扑信息" tabindex="-1"><a class="header-anchor" href="#拓扑信息"><span>拓扑信息</span></a></h2><table><thead><tr><th style="text-align:left;">实例</th><th style="text-align:left;">个数</th><th style="text-align:left;">物理机配置</th><th style="text-align:left;">IP</th><th style="text-align:left;">配置</th></tr></thead><tbody><tr><td style="text-align:left;">TiDB</td><td style="text-align:left;">3</td><td style="text-align:left;">16 VCore 32GB * 1</td><td style="text-align:left;">10.0.1.1 <br> 10.0.1.2 <br> 10.0.1.3</td><td style="text-align:left;">默认端口 <br> 全局目录配置</td></tr><tr><td style="text-align:left;">PD</td><td style="text-align:left;">3</td><td style="text-align:left;">4 VCore 8GB * 1</td><td style="text-align:left;">10.0.1.4 <br> 10.0.1.5 <br> 10.0.1.6</td><td style="text-align:left;">默认端口 <br> 全局目录配置</td></tr><tr><td style="text-align:left;">TiKV</td><td style="text-align:left;">3</td><td style="text-align:left;">16 VCore 32GB 2TB (nvme ssd) * 1</td><td style="text-align:left;">10.0.1.7 <br> 10.0.1.8 <br> 10.0.1.9</td><td style="text-align:left;">默认端口 <br> 全局目录配置</td></tr><tr><td style="text-align:left;">CDC</td><td style="text-align:left;">3</td><td style="text-align:left;">8 VCore 16GB * 1</td><td style="text-align:left;">10.0.1.11 <br> 10.0.1.12 <br> 10.0.1.13</td><td style="text-align:left;">默认端口 <br> 全局目录配置</td></tr><tr><td style="text-align:left;">Monitoring &amp; Grafana</td><td style="text-align:left;">1</td><td style="text-align:left;">4 VCore 8GB * 1 500GB (ssd)</td><td style="text-align:left;">10.0.1.11</td><td style="text-align:left;">默认端口 <br> 全局目录配置</td></tr></tbody></table><h3 id="拓扑模版" tabindex="-1"><a class="header-anchor" href="#拓扑模版"><span>拓扑模版</span></a></h3>',3),m={href:"https://github.com/pingcap/docs-cn/blob/master/config-templates/simple-cdc.yaml",target:"_blank",rel:"noopener noreferrer"},C={href:"https://github.com/pingcap/docs-cn/blob/master/config-templates/complex-cdc.yaml",target:"_blank",rel:"noopener noreferrer"},f=t("blockquote",null,[t("p",null,[t("strong",null,"注意：")]),t("ul",null,[t("li",null,[e("无需手动创建配置文件中的 "),t("code",null,"tidb"),e(" 用户，TiUP cluster 组件会在目标主机上自动创建该用户。可以自定义用户，也可以和中控机的用户保持一致。")]),t("li",null,"如果部署目录配置为相对路径，会部署在用户的 Home 目录下。")])],-1);function T(u,b){const i=n("RouteLink"),o=n("ExternalLinkIcon");return r(),c("div",null,[g,y,t("p",null,[e("本文介绍 "),l(i,{to:"/ticdc/ticdc-overview.html"},{default:a(()=>[e("TiCDC")]),_:1}),e(" 部署的拓扑，以及如何在最小拓扑的基础上同时部署 TiCDC。TiCDC 是 4.0 版本开始支持的 TiDB 增量数据同步工具，支持多种下游 (TiDB/MySQL/MQ)。相比于 TiDB Binlog，TiCDC 有延迟更低、天然高可用等优点。")]),h,t("p",null,[t("a",m,[e("简单 TiCDC 配置模板"),l(o)])]),t("p",null,[t("a",C,[e("详细 TiCDC 配置模板"),l(o)])]),t("p",null,[e("以上 TiDB 集群拓扑文件中，详细的配置项说明见"),l(i,{to:"/tiup/tiup-cluster-topology-reference.html#cdc_servers"},{default:a(()=>[e("通过 TiUP 部署 TiDB 集群的拓扑文件配置")]),_:1}),e("。")]),f])}const _=d(p,[["render",T],["__file","ticdc-deployment-topology.html.vue"]]),B=JSON.parse('{"path":"/guide/database/tidb/deployments/topology/ticdc-deployment-topology.html","title":"TiCDC 部署拓扑","lang":"zh-CN","frontmatter":{"title":"TiCDC 部署拓扑","description":"TiCDC 部署拓扑 注意： TiCDC 从 v4.0.6 起成为正式功能，可用于生产环境。 本文介绍 部署的拓扑，以及如何在最小拓扑的基础上同时部署 TiCDC。TiCDC 是 4.0 版本开始支持的 TiDB 增量数据同步工具，支持多种下游 (TiDB/MySQL/MQ)。相比于 TiDB Binlog，TiCDC 有延迟更低、天然高可用等优点。 ...","head":[["meta",{"property":"og:url","content":"https://github.com/abelit/abelit-datapeacock.git/guide/database/tidb/deployments/topology/ticdc-deployment-topology.html"}],["meta",{"property":"og:site_name","content":"数之雀"}],["meta",{"property":"og:title","content":"TiCDC 部署拓扑"}],["meta",{"property":"og:description","content":"TiCDC 部署拓扑 注意： TiCDC 从 v4.0.6 起成为正式功能，可用于生产环境。 本文介绍 部署的拓扑，以及如何在最小拓扑的基础上同时部署 TiCDC。TiCDC 是 4.0 版本开始支持的 TiDB 增量数据同步工具，支持多种下游 (TiDB/MySQL/MQ)。相比于 TiDB Binlog，TiCDC 有延迟更低、天然高可用等优点。 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-11T14:06:18.000Z"}],["meta",{"property":"article:author","content":"Abelit"}],["meta",{"property":"article:modified_time","content":"2024-05-11T14:06:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"TiCDC 部署拓扑\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-11T14:06:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Abelit\\",\\"url\\":\\"https://github.com/abelit\\"}]}"]]},"headers":[{"level":2,"title":"拓扑信息","slug":"拓扑信息","link":"#拓扑信息","children":[{"level":3,"title":"拓扑模版","slug":"拓扑模版","link":"#拓扑模版","children":[]}]}],"git":{"createdTime":1715436378000,"updatedTime":1715436378000,"contributors":[{"name":"ableit","email":"ychenid@live.com","commits":1}]},"readingTime":{"minutes":1.27,"words":380},"filePathRelative":"guide/database/tidb/deployments/topology/ticdc-deployment-topology.md","localizedDate":"2024年5月11日","autoDesc":true,"excerpt":"\\n<blockquote>\\n<p><strong>注意：</strong></p>\\n<p>TiCDC 从 v4.0.6 起成为正式功能，可用于生产环境。</p>\\n</blockquote>\\n<p>本文介绍 <a href=\\"/ticdc/ticdc-overview.html\\" target=\\"_blank\\">TiCDC</a> 部署的拓扑，以及如何在最小拓扑的基础上同时部署 TiCDC。TiCDC 是 4.0 版本开始支持的 TiDB 增量数据同步工具，支持多种下游 (TiDB/MySQL/MQ)。相比于 TiDB Binlog，TiCDC 有延迟更低、天然高可用等优点。</p>\\n<h2>拓扑信息</h2>"}');export{_ as comp,B as data};