import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as r,c,b as p,w as a,a as e,d as t}from"./app-DR5J2daJ.js";const d={},m=e("h2",{id:"postgresql安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#postgresql安装"},[e("span",null,"PostgreSQL安装")])],-1),u=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"# Install the repository RPM:"),t(`
yum `),e("span",{class:"token function"},"install"),t(),e("span",{class:"token parameter variable"},"-y"),t(` https://download.postgresql.org/pub/repos/yum/reporpms/EL-7-x86_64/pgdg-redhat-repo-latest.noarch.rpm

`),e("span",{class:"token comment"},"# Install PostgreSQL:"),t(`
yum `),e("span",{class:"token function"},"install"),t(),e("span",{class:"token parameter variable"},"-y"),t(` postgresql15-server

`),e("span",{class:"token comment"},"# Optionally initialize the database and enable automatic start:"),t(`
/usr/pgsql-15/bin/postgresql-15-setup initdb
systemctl `),e("span",{class:"token builtin class-name"},"enable"),t(` postgresql-15
systemctl start postgresql-15
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1);function g(h,b){const s=i("CodeTabs");return r(),c("div",null,[m,p(s,{id:"3",data:[{id:"PG15"}],active:0},{title0:a(({value:n,isActive:l})=>[t("PG15")]),tab0:a(({value:n,isActive:l})=>[u]),_:1})])}const _=o(d,[["render",g],["__file","installation.html.vue"]]),f=JSON.parse('{"path":"/guide/database/postgresql/installation.html","title":"安装","lang":"zh-CN","frontmatter":{"title":"安装","description":"PostgreSQL安装","head":[["meta",{"property":"og:url","content":"https://github.com/abelit/abelit-datapeacock.git/guide/database/postgresql/installation.html"}],["meta",{"property":"og:site_name","content":"数之雀"}],["meta",{"property":"og:title","content":"安装"}],["meta",{"property":"og:description","content":"PostgreSQL安装"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-11T14:06:18.000Z"}],["meta",{"property":"article:author","content":"Abelit"}],["meta",{"property":"article:modified_time","content":"2024-05-11T14:06:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"安装\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-11T14:06:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Abelit\\",\\"url\\":\\"https://github.com/abelit\\"}]}"]]},"headers":[{"level":2,"title":"PostgreSQL安装","slug":"postgresql安装","link":"#postgresql安装","children":[]}],"git":{"createdTime":1715436378000,"updatedTime":1715436378000,"contributors":[{"name":"ableit","email":"ychenid@live.com","commits":1}]},"readingTime":{"minutes":0.18,"words":54},"filePathRelative":"guide/database/postgresql/installation.md","localizedDate":"2024年5月11日","autoDesc":true,"excerpt":"<h2>PostgreSQL安装</h2>\\n\\n"}');export{_ as comp,f as data};
