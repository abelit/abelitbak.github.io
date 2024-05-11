import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as d,c as r,a as t,d as e,b as l,w as s,f as p}from"./app-DR5J2daJ.js";const g={},c=p('<h1 id="最小拓扑架构" tabindex="-1"><a class="header-anchor" href="#最小拓扑架构"><span>最小拓扑架构</span></a></h1><p>本文档介绍 TiDB 集群最小部署的拓扑架构。</p><h2 id="拓扑信息" tabindex="-1"><a class="header-anchor" href="#拓扑信息"><span>拓扑信息</span></a></h2><table><thead><tr><th style="text-align:left;">实例</th><th style="text-align:left;">个数</th><th style="text-align:left;">物理机配置</th><th style="text-align:left;">IP</th><th style="text-align:left;">配置</th></tr></thead><tbody><tr><td style="text-align:left;">TiDB</td><td style="text-align:left;">2</td><td style="text-align:left;">16 VCore 32 GiB <br> 100 GiB 用于存储</td><td style="text-align:left;">10.0.1.1 <br> 10.0.1.2</td><td style="text-align:left;">默认端口 <br> 全局目录配置</td></tr><tr><td style="text-align:left;">PD</td><td style="text-align:left;">3</td><td style="text-align:left;">4 VCore 8 GiB <br> 100 GiB 用于存储</td><td style="text-align:left;">10.0.1.4 <br> 10.0.1.5 <br> 10.0.1.6</td><td style="text-align:left;">默认端口 <br> 全局目录配置</td></tr><tr><td style="text-align:left;">TiKV</td><td style="text-align:left;">3</td><td style="text-align:left;">16 VCore 32 GiB <br> 2 TiB (NVMe SSD) 用于存储</td><td style="text-align:left;">10.0.1.7 <br> 10.0.1.8 <br> 10.0.1.9</td><td style="text-align:left;">默认端口 <br> 全局目录配置</td></tr><tr><td style="text-align:left;">Monitoring &amp; Grafana</td><td style="text-align:left;">1</td><td style="text-align:left;">4 VCore 8 GiB <br> 500 GiB (SSD) 用于存储</td><td style="text-align:left;">10.0.1.10</td><td style="text-align:left;">默认端口 <br> 全局目录配置</td></tr></tbody></table><h3 id="拓扑模版" tabindex="-1"><a class="header-anchor" href="#拓扑模版"><span>拓扑模版</span></a></h3>',5),y={href:"https://github.com/pingcap/docs-cn/blob/master/config-templates/simple-mini.yaml",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/pingcap/docs-cn/blob/master/config-templates/complex-mini.yaml",target:"_blank",rel:"noopener noreferrer"},h=t("blockquote",null,[t("p",null,[t("strong",null,"注意：")]),t("ul",null,[t("li",null,[e("无需手动创建配置文件中的 "),t("code",null,"tidb"),e(" 用户，TiUP cluster 组件会在目标主机上自动创建该用户。可以自定义用户，也可以和中控机的用户保持一致。")]),t("li",null,"如果部署目录配置为相对路径，会部署在用户的 Home 目录下。")])],-1);function f(b,x){const n=i("ExternalLinkIcon"),a=i("RouteLink");return d(),r("div",null,[c,t("p",null,[t("a",y,[e("简单最小配置模板"),l(n)])]),t("p",null,[t("a",m,[e("详细最小配置模板"),l(n)])]),t("p",null,[e("以上 TiDB 集群拓扑文件中，详细的配置项说明见"),l(a,{to:"/tiup/tiup-cluster-topology-reference.html"},{default:s(()=>[e("通过 TiUP 部署 TiDB 集群的拓扑文件配置")]),_:1}),e("。")]),h])}const B=o(g,[["render",f],["__file","minimal-deployment-topology.html.vue"]]),T=JSON.parse('{"path":"/guide/database/tidb/deployments/topology/minimal-deployment-topology.html","title":"最小拓扑架构","lang":"zh-CN","frontmatter":{"title":"最小拓扑架构","description":"最小拓扑架构 本文档介绍 TiDB 集群最小部署的拓扑架构。 拓扑信息 拓扑模版 简单最小配置模板 详细最小配置模板 以上 TiDB 集群拓扑文件中，详细的配置项说明见。 注意： 无需手动创建配置文件中的 tidb 用户，TiUP cluster 组件会在目标主机上自动创建该用户。可以自定义用户，也可以和中控机的用户保持一致。 如果部署目录配置为相对路...","head":[["meta",{"property":"og:url","content":"https://github.com/abelit/abelit-datapeacock.git/guide/database/tidb/deployments/topology/minimal-deployment-topology.html"}],["meta",{"property":"og:site_name","content":"数之雀"}],["meta",{"property":"og:title","content":"最小拓扑架构"}],["meta",{"property":"og:description","content":"最小拓扑架构 本文档介绍 TiDB 集群最小部署的拓扑架构。 拓扑信息 拓扑模版 简单最小配置模板 详细最小配置模板 以上 TiDB 集群拓扑文件中，详细的配置项说明见。 注意： 无需手动创建配置文件中的 tidb 用户，TiUP cluster 组件会在目标主机上自动创建该用户。可以自定义用户，也可以和中控机的用户保持一致。 如果部署目录配置为相对路..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-11T14:06:18.000Z"}],["meta",{"property":"article:author","content":"Abelit"}],["meta",{"property":"article:modified_time","content":"2024-05-11T14:06:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"最小拓扑架构\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-11T14:06:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Abelit\\",\\"url\\":\\"https://github.com/abelit\\"}]}"]]},"headers":[{"level":2,"title":"拓扑信息","slug":"拓扑信息","link":"#拓扑信息","children":[{"level":3,"title":"拓扑模版","slug":"拓扑模版","link":"#拓扑模版","children":[]}]}],"git":{"createdTime":1715436378000,"updatedTime":1715436378000,"contributors":[{"name":"ableit","email":"ychenid@live.com","commits":1}]},"readingTime":{"minutes":1.03,"words":308},"filePathRelative":"guide/database/tidb/deployments/topology/minimal-deployment-topology.md","localizedDate":"2024年5月11日","autoDesc":true,"excerpt":"\\n<p>本文档介绍 TiDB 集群最小部署的拓扑架构。</p>\\n<h2>拓扑信息</h2>\\n<table>\\n<thead>\\n<tr>\\n<th style=\\"text-align:left\\">实例</th>\\n<th style=\\"text-align:left\\">个数</th>\\n<th style=\\"text-align:left\\">物理机配置</th>\\n<th style=\\"text-align:left\\">IP</th>\\n<th style=\\"text-align:left\\">配置</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td style=\\"text-align:left\\">TiDB</td>\\n<td style=\\"text-align:left\\">2</td>\\n<td style=\\"text-align:left\\">16 VCore 32 GiB <br> 100 GiB 用于存储</td>\\n<td style=\\"text-align:left\\">10.0.1.1 <br> 10.0.1.2</td>\\n<td style=\\"text-align:left\\">默认端口 <br>  全局目录配置</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">PD</td>\\n<td style=\\"text-align:left\\">3</td>\\n<td style=\\"text-align:left\\">4 VCore 8 GiB <br> 100 GiB 用于存储</td>\\n<td style=\\"text-align:left\\">10.0.1.4 <br> 10.0.1.5 <br> 10.0.1.6</td>\\n<td style=\\"text-align:left\\">默认端口 <br> 全局目录配置</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">TiKV</td>\\n<td style=\\"text-align:left\\">3</td>\\n<td style=\\"text-align:left\\">16 VCore 32 GiB <br> 2 TiB (NVMe SSD) 用于存储</td>\\n<td style=\\"text-align:left\\">10.0.1.7 <br> 10.0.1.8 <br> 10.0.1.9</td>\\n<td style=\\"text-align:left\\">默认端口 <br> 全局目录配置</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">Monitoring &amp; Grafana</td>\\n<td style=\\"text-align:left\\">1</td>\\n<td style=\\"text-align:left\\">4 VCore 8 GiB <br> 500 GiB (SSD) 用于存储</td>\\n<td style=\\"text-align:left\\">10.0.1.10</td>\\n<td style=\\"text-align:left\\">默认端口 <br> 全局目录配置</td>\\n</tr>\\n</tbody>\\n</table>"}');export{B as comp,T as data};
