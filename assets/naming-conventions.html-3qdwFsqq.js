import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as e,f as n}from"./app-DR5J2daJ.js";const a={},s=n(`<h2 id="资产命名规范" tabindex="-1"><a class="header-anchor" href="#资产命名规范"><span>资产命名规范</span></a></h2><h3 id="命名约定" tabindex="-1"><a class="header-anchor" href="#命名约定"><span>命名约定</span></a></h3><p>为规范和简化JumpServer资产管理工作，建议遵循如下几个规则对JumpServer资产进行命名：</p><ol><li>资产类型区分：</li></ol><ul><li><p>主机，主类别名称使用”server“作为标记，子类别：</p><ul><li>数据库服务器，子类别名称使用”db“作为标记；</li><li>应用服务器，子类别名称使用”app“作为标记；</li><li>其他根据实际情况讨论决定。</li></ul></li><li><p>网络设备，主类别名称使用”net“作为标记，子类别：</p><ul><li>交换机，子类别名称使用”switch“作为标记；</li><li>路由器，子类别名称使用”router“作为标记；</li><li>防火墙，子类别名称使用”fw“作为标记；</li><li>其他根据实际情况讨论决定。</li></ul></li><li><p>数据库，主类别名称使用”db“作为标记，子类别：</p><ul><li>Oracle数据库，子类别名称使用”oracle“作为标记；</li><li>MySQL/MariaDB/Pecona MySQL数据库，子类别名称使用”mysql“作为标记；</li><li>PostgreSQL数据库，子类别名称使用”postgresql“作为标记；</li><li>SQLServer数据库，子类别名称使用”sqlserver“作为标记；</li><li>MongoDB数据库，子类别名称使用”mongo“作为标记；</li><li>ClickHouse数据库，子类别名称使用”clickhouse“作为标记；</li><li>Redis数据库，子类别名称使用”redis“作为标记；</li><li>TiDB数据库，子类别名称使用”tidb“作为标记；</li><li>OceanBase数据库，子类别名称使用”ocean“作为标记；</li><li>DB2数据库，子类别名称使用”db2“作为标记；</li><li>其他根据实际情况讨论决定。</li></ul></li><li><p>Web应用，主类别名称使用”web“作为标记，子类别使用“svc”作为标记；</p></li><li><p>云服务，主类别名称使用”cloud“作为标记，子类别：</p><ul><li>阿里云，子类别名称使用”aliyun“作为标记；</li><li>华为云，子类别名称使用”huawei“作为标记；</li><li>腾讯云，子类别名称使用”tencent“作为标记；</li><li>微软云，子类别名称使用”azure“作为标记；</li><li>亚马孙云，子类别名称使用”amazon“作为标记；</li><li>谷歌云，子类别名称使用”google“作为标记；</li><li>其他根据实际情况讨论决定。</li></ul></li></ul><ol start="2"><li>环境类型区分：</li></ol><ul><li>生产环境，名称使用”p“作为标记；</li><li>预发环境，名称使用“b”作为标记；</li><li>测试环境，名称使用”t“作为标记；</li><li>开发环境，名称使用”d“作为标记；</li></ul><ol start="3"><li>区域类型区分：</li></ol><ul><li>IDC，名称使用”cgzairidc“作为标记；</li><li>阿里云，名称使用”aliyun“作为标记；</li><li>华为云，名称使用”huawei“作为标记；</li><li>腾讯云，名称使用”tencent“作为标记；</li><li>微软云，名称使用”azure“作为标记；</li><li>亚马孙云，名称使用”amazon“作为标记；</li><li>谷歌云，名称使用”google“作为标记；</li><li>其他根据实际情况讨论决定。</li></ul><ol start="4"><li>业务/使用范围区分，资产命名中应说明资产的用途，语言简短明了，同一业务包含多个服务组成的在名称后面加入顺序编号（新资产录入的业务名称经科室讨论最终决定）；</li><li>区分标志之间使用“-”进行连接；</li><li>命名涉及英文字符一律使用小写。</li></ol><h3 id="资产命名模型" tabindex="-1"><a class="header-anchor" href="#资产命名模型"><span>资产命名模型</span></a></h3><p>名称模型： “环境类型-区域类型-资产类型-资产子类型-业务名称”。</p><h3 id="命名示例" tabindex="-1"><a class="header-anchor" href="#命名示例"><span>命名示例</span></a></h3><h4 id="主机资产" tabindex="-1"><a class="header-anchor" href="#主机资产"><span>主机资产</span></a></h4><ul><li>示例：如<code>p-cgzairidc-server-db-画像系统数据库服务器</code>。</li><li>示例：如<code>p-cgzairidc-server-app-画像系统应用服务器</code>。</li></ul><h4 id="数据库资产" tabindex="-1"><a class="header-anchor" href="#数据库资产"><span>数据库资产</span></a></h4><ul><li>示例：如<code>p-cgzairidc-db-mysql-画像系统数据库</code>。</li></ul><h4 id="网络资产" tabindex="-1"><a class="header-anchor" href="#网络资产"><span>网络资产</span></a></h4><ul><li>示例：如<code>p-cgzairidc-net-switch-多彩航空大厦核心交换机</code>。</li></ul><h4 id="web资产" tabindex="-1"><a class="header-anchor" href="#web资产"><span>Web资产</span></a></h4><ul><li>示例：如<code>p-cgzairidc-web-svc-多彩航空IDC堡垒机</code>。</li><li>示例：如<code>p-cgzairidc-web-svc-人力资源系统</code>。</li></ul><h4 id="云服务" tabindex="-1"><a class="header-anchor" href="#云服务"><span>云服务</span></a></h4><ul><li>示例：如<code>p-aliyun-cloud-aliyun-阿里云服务</code>。</li><li>示例：如<code>p-azure-cloud-azure-微软云服务</code>。</li></ul><h2 id="用户命名规范" tabindex="-1"><a class="header-anchor" href="#用户命名规范"><span>用户命名规范</span></a></h2><h3 id="命名约定-1" tabindex="-1"><a class="header-anchor" href="#命名约定-1"><span>命名约定</span></a></h3><ul><li><p>用户名</p><ul><li>公司用户，使用员工工号；</li><li>外部用户，使用使用“ex+5位数字编号”按新建顺序命名，如“ex00001”、“ex00002”；</li></ul></li><li><p>名称</p><ul><li>公司用户，使用员工姓名；</li><li>外部用户，使用“ex-企业/单位名称简称-姓名”命名，如“ex-恒赢智航-张三“；</li></ul></li></ul><h2 id="用户组命名规范" tabindex="-1"><a class="header-anchor" href="#用户组命名规范"><span>用户组命名规范</span></a></h2><h3 id="命名约定-2" tabindex="-1"><a class="header-anchor" href="#命名约定-2"><span>命名约定</span></a></h3><ul><li>用户组 <ul><li>公司，使用“cgzair-科室名称简写-项目/系统名称简写”命名，如“cgzair-安全运维室-服务器组”、“cgzair-数据中心-FOC”；</li><li>外部，使用“exo-企业/单位名称简称-项目/系统名称简写”命名，如“exo-恒赢智航-FOC”</li></ul></li></ul><h2 id="资产授权名称" tabindex="-1"><a class="header-anchor" href="#资产授权名称"><span>资产授权名称</span></a></h2><p>建议同用户名或用户组命名规范保持一致。</p><h2 id="资产树命名" tabindex="-1"><a class="header-anchor" href="#资产树命名"><span>资产树命名</span></a></h2><h3 id="一级目录-环境类型-业务类型" tabindex="-1"><a class="header-anchor" href="#一级目录-环境类型-业务类型"><span>一级目录（环境类型+业务类型）</span></a></h3><p>使用“环境类型+业务类型”命名。</p><ul><li><p>环境类型</p><ul><li>生产</li><li>测试</li><li>开发</li><li>预发</li></ul></li><li><p>业务类型</p><ul><li>数据库服务器</li><li>应用服务器</li><li>Web应用</li><li>数据库</li></ul></li></ul><h3 id="二级目录-重要程度" tabindex="-1"><a class="header-anchor" href="#二级目录-重要程度"><span>二级目录（重要程度）</span></a></h3><ul><li>一般业务</li><li>关键业务</li></ul><h3 id="三级目录-业务-项目名称" tabindex="-1"><a class="header-anchor" href="#三级目录-业务-项目名称"><span>三级目录（业务/项目名称）</span></a></h3><h3 id="资产树命名示例" tabindex="-1"><a class="header-anchor" href="#资产树命名示例"><span>资产树命名示例</span></a></h3><p>模型：“一级目录/二级目录/三级目录”。 示例：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>├── 生产应用服务器
│   ├── 一般业务
│   │   └── NC
│   └── 关键业务
│       ├── FOC
│       └── EFB
└── 测试应用服务器
│   ├── 一般业务
│   │   └── NC
│   └── 关键业务
│       ├── FOC
│       └── EFB
├── 生产数据库服务器
│   ├── 一般业务
│   │   └── NC
│   └── 关键业务
│       ├── FOC
│       └── EFB
├── 生产数据库
│   ├── 一般业务
│   │   └── NC
│   └── 关键业务
│       ├── FOC
│       └── EFB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="资产模版账号名称命名规范" tabindex="-1"><a class="header-anchor" href="#资产模版账号名称命名规范"><span>资产模版账号名称命名规范</span></a></h2><h3 id="命名模型" tabindex="-1"><a class="header-anchor" href="#命名模型"><span>命名模型</span></a></h3><p>使用“环境类型-区域类型-资产主类型-用途类型-账号”进行命名。</p><ul><li>环境类型：同资产命名规范一致</li><li>区域类型：同资产命名规范一致</li><li>资产主类型：同资产命名规范一致</li><li>用途类型： <ul><li>ops：表示开发、运维等人员使用账号；</li><li>app：表示应用系统使用账号。</li></ul></li></ul><h3 id="命名示范" tabindex="-1"><a class="header-anchor" href="#命名示范"><span>命名示范</span></a></h3><ul><li>示例：如“p-cgzairidc-server-app-administrator”表示idc生产环境服务器账号administrator。</li><li>示例：如“p-cgzairidc-db-ops-root”表示idc生产环境数据库账号root。</li><li>示例：如“p-cgzairidc-server-ops-root”表示idc生产环境服务器账号root。</li></ul>`,47),r=[s];function d(c,h){return i(),e("div",null,r)}const u=l(a,[["render",d],["__file","naming-conventions.html.vue"]]),p=JSON.parse('{"path":"/workspace/cgzair/jumpserver/naming-conventions.html","title":"命名规范","lang":"zh-CN","frontmatter":{"title":"命名规范","feed":false,"seo":false,"head":[]},"headers":[{"level":2,"title":"资产命名规范","slug":"资产命名规范","link":"#资产命名规范","children":[{"level":3,"title":"命名约定","slug":"命名约定","link":"#命名约定","children":[]},{"level":3,"title":"资产命名模型","slug":"资产命名模型","link":"#资产命名模型","children":[]},{"level":3,"title":"命名示例","slug":"命名示例","link":"#命名示例","children":[]}]},{"level":2,"title":"用户命名规范","slug":"用户命名规范","link":"#用户命名规范","children":[{"level":3,"title":"命名约定","slug":"命名约定-1","link":"#命名约定-1","children":[]}]},{"level":2,"title":"用户组命名规范","slug":"用户组命名规范","link":"#用户组命名规范","children":[{"level":3,"title":"命名约定","slug":"命名约定-2","link":"#命名约定-2","children":[]}]},{"level":2,"title":"资产授权名称","slug":"资产授权名称","link":"#资产授权名称","children":[]},{"level":2,"title":"资产树命名","slug":"资产树命名","link":"#资产树命名","children":[{"level":3,"title":"一级目录（环境类型+业务类型）","slug":"一级目录-环境类型-业务类型","link":"#一级目录-环境类型-业务类型","children":[]},{"level":3,"title":"二级目录（重要程度）","slug":"二级目录-重要程度","link":"#二级目录-重要程度","children":[]},{"level":3,"title":"三级目录（业务/项目名称）","slug":"三级目录-业务-项目名称","link":"#三级目录-业务-项目名称","children":[]},{"level":3,"title":"资产树命名示例","slug":"资产树命名示例","link":"#资产树命名示例","children":[]}]},{"level":2,"title":"资产模版账号名称命名规范","slug":"资产模版账号名称命名规范","link":"#资产模版账号名称命名规范","children":[{"level":3,"title":"命名模型","slug":"命名模型","link":"#命名模型","children":[]},{"level":3,"title":"命名示范","slug":"命名示范","link":"#命名示范","children":[]}]}],"git":{"createdTime":1715436378000,"updatedTime":1715436378000,"contributors":[{"name":"ableit","email":"ychenid@live.com","commits":1}]},"readingTime":{"minutes":5.07,"words":1522},"filePathRelative":"workspace/cgzair/jumpserver/naming-conventions.md","localizedDate":"2024年5月11日","excerpt":"<h2>资产命名规范</h2>\\n<h3>命名约定</h3>\\n<p>为规范和简化JumpServer资产管理工作，建议遵循如下几个规则对JumpServer资产进行命名：</p>\\n<ol>\\n<li>资产类型区分：</li>\\n</ol>\\n<ul>\\n<li>\\n<p>主机，主类别名称使用”server“作为标记，子类别：</p>\\n<ul>\\n<li>数据库服务器，子类别名称使用”db“作为标记；</li>\\n<li>应用服务器，子类别名称使用”app“作为标记；</li>\\n<li>其他根据实际情况讨论决定。</li>\\n</ul>\\n</li>\\n<li>\\n<p>网络设备，主类别名称使用”net“作为标记，子类别：</p>\\n<ul>\\n<li>交换机，子类别名称使用”switch“作为标记；</li>\\n<li>路由器，子类别名称使用”router“作为标记；</li>\\n<li>防火墙，子类别名称使用”fw“作为标记；</li>\\n<li>其他根据实际情况讨论决定。</li>\\n</ul>\\n</li>\\n<li>\\n<p>数据库，主类别名称使用”db“作为标记，子类别：</p>\\n<ul>\\n<li>Oracle数据库，子类别名称使用”oracle“作为标记；</li>\\n<li>MySQL/MariaDB/Pecona MySQL数据库，子类别名称使用”mysql“作为标记；</li>\\n<li>PostgreSQL数据库，子类别名称使用”postgresql“作为标记；</li>\\n<li>SQLServer数据库，子类别名称使用”sqlserver“作为标记；</li>\\n<li>MongoDB数据库，子类别名称使用”mongo“作为标记；</li>\\n<li>ClickHouse数据库，子类别名称使用”clickhouse“作为标记；</li>\\n<li>Redis数据库，子类别名称使用”redis“作为标记；</li>\\n<li>TiDB数据库，子类别名称使用”tidb“作为标记；</li>\\n<li>OceanBase数据库，子类别名称使用”ocean“作为标记；</li>\\n<li>DB2数据库，子类别名称使用”db2“作为标记；</li>\\n<li>其他根据实际情况讨论决定。</li>\\n</ul>\\n</li>\\n<li>\\n<p>Web应用，主类别名称使用”web“作为标记，子类别使用“svc”作为标记；</p>\\n</li>\\n<li>\\n<p>云服务，主类别名称使用”cloud“作为标记，子类别：</p>\\n<ul>\\n<li>阿里云，子类别名称使用”aliyun“作为标记；</li>\\n<li>华为云，子类别名称使用”huawei“作为标记；</li>\\n<li>腾讯云，子类别名称使用”tencent“作为标记；</li>\\n<li>微软云，子类别名称使用”azure“作为标记；</li>\\n<li>亚马孙云，子类别名称使用”amazon“作为标记；</li>\\n<li>谷歌云，子类别名称使用”google“作为标记；</li>\\n<li>其他根据实际情况讨论决定。</li>\\n</ul>\\n</li>\\n</ul>"}');export{u as comp,p as data};
