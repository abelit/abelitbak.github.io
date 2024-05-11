import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as c,o as u,c as r,b as p,w as a,f as i,d as s,a as n}from"./app-DR5J2daJ.js";const d={},v=i(`<h2 id="vscode-插件" tabindex="-1"><a class="header-anchor" href="#vscode-插件"><span>VSCode 插件</span></a></h2><p>常用插件</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Ansible
Beautify
Docker
flask-snippets
Kubernetes
Python
Vetur
vscode-icons
vuetify-vscode
YAML
Debugger for Chrome
Indent-Rainbow
Prettier
Bracket Pair Colorizer
CSS Peek
Python Preview
Live Share
Color Picker
Vue i18n Ally
Go
JavaScript and TypeScript Nightly
Latest TypeScript and Javascript Grammar
Oracle Developer Tools for VS 
Debugger for Firefox 
Git History
SQLTools - Database tools
Debugger for Microsoft Edge
C/C++
C#
Remote - SSH
Remote - Containers
Node Debug
Remote Development
Maven for Java
Prettier - Code formatter
TSLint
markdownlint
docs-markdown
markdown pdf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vscode-snnipets" tabindex="-1"><a class="header-anchor" href="#vscode-snnipets"><span>VSCode Snnipets</span></a></h2><h3 id="python-snnipets" tabindex="-1"><a class="header-anchor" href="#python-snnipets"><span>Python Snnipets</span></a></h3><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token comment">//python.json</span>
<span class="token punctuation">{</span>
    <span class="token comment">// Place your snippets for python here. Each snippet is defined under a snippet name and has a prefix, body and </span>
    <span class="token comment">// description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:</span>
    <span class="token comment">// $1, $2 for tab stops, $0 for the final cursor position, and \${1:label}, \${2:another} for placeholders. Placeholders with the </span>
    <span class="token comment">// same ids are connected.</span>
    <span class="token comment">// Example:</span>
    <span class="token comment">// &quot;Print to console&quot;: {</span>
    <span class="token comment">//  &quot;prefix&quot;: &quot;log&quot;,</span>
    <span class="token comment">//  &quot;body&quot;: [</span>
    <span class="token comment">//      &quot;console.log(&#39;$1&#39;);&quot;,</span>
    <span class="token comment">//      &quot;$2&quot;</span>
    <span class="token comment">//  ],</span>
    <span class="token comment">//  &quot;description&quot;: &quot;Log output to console&quot;</span>
    <span class="token comment">// }</span>

    <span class="token property">&quot;HEADER&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;header&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;# -*- encoding: utf-8 -*-&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&#39;&#39;&#39;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;@File    :   $TM_FILENAME&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;@Time    :   $CURRENT_YEAR/$CURRENT_MONTH/$CURRENT_DATE $CURRENT_HOUR:$CURRENT_MINUTE:$CURRENT_SECOND&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;@Author  :   Abelit &quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;@Version :   1.0&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;@Contact :   ychenid@live.com&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;@Copyright :   (C)Copyright 2020, dataforum.org&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;@Licence :   BSD-3-Clause&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;@Desc    :   None&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&#39;&#39;&#39;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;$0&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="javascript-typescript-snnipets" tabindex="-1"><a class="header-anchor" href="#javascript-typescript-snnipets"><span>Javascript/TypeScript Snnipets</span></a></h3><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token comment">// vue.json</span>
<span class="token punctuation">{</span>
    <span class="token comment">// Place your snippets for vue here. Each snippet is defined under a snippet name and has a prefix, body and </span>
    <span class="token comment">// description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:</span>
    <span class="token comment">// $1, $2 for tab stops, $0 for the final cursor position, and \${1:label}, \${2:another} for placeholders. Placeholders with the </span>
    <span class="token comment">// same ids are connected.</span>
    <span class="token comment">// Example:</span>
    <span class="token comment">// &quot;Print to console&quot;: {</span>
    <span class="token comment">//  &quot;prefix&quot;: &quot;log&quot;,</span>
    <span class="token comment">//  &quot;body&quot;: [</span>
    <span class="token comment">//      &quot;console.log(&#39;$1&#39;);&quot;,</span>
    <span class="token comment">//      &quot;$2&quot;</span>
    <span class="token comment">//  ],</span>
    <span class="token comment">//  &quot;description&quot;: &quot;Log output to console&quot;</span>
    <span class="token comment">// }</span>
    <span class="token property">&quot;Print to console&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;&lt;template&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;    &lt;div&gt;\\n&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;    &lt;/div&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;/template&gt;\\n&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;script&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;export default {&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;    name: &#39;$1&#39;,&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;    props: {\\n&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;    },&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;    components: {\\n&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;    },&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;    data() {&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;        return {\\n&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;        };&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;    },&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;    computed: {\\n&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;    },&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;    created() {\\n&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;    },&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;    mounted() {\\n&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;    },&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;    watch: {\\n&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;    },&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;    methods: {\\n&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;    },&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;};&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;/script&gt;\\n&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;style scoped lang=\\&quot;\${1:scss}\\&quot;&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;    /* @import url(); 引入css类 */\\n&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;/style&gt;\\n&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Create vue template&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;Vue Component&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuets&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Vue component snippet&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;&lt;template&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;    &lt;div&gt;\\n&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;    &lt;/div&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;/template&gt;\\n&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;script lang=\\&quot;ts\\&quot;&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;import { Component, Prop, Vue } from &#39;vue-property-decorator&#39;;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;@Component&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;export default class \${1:ComponentName} extends Vue {&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;\\t@Prop() private msg!: string;\\n&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;}&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;/script&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;style scoped lang=\\&quot;\${1:scss}\\&quot;&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;    /* @import url(); 引入css类 */\\n&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;/style&gt;\\n&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;Vue standard API (SFC)&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vbase&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;&lt;template&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;\\t&lt;div&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;\\t&lt;/div&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;/template&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;script lang=\\&quot;ts\\&quot;&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;\\timport Vue from \\&quot;vue\\&quot;;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;\\texport default Vue.extend({&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;\\t\\t\${0}&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;\\t});&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;/script&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;style scoped&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;/style&gt;&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Base for Vue.js File with TypeScript&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;VueConstructor standard API (SFC)&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vcbase&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;&lt;template&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;\\t&lt;div&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;\\t&lt;/div&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;/template&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;script lang=\\&quot;ts\\&quot;&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;\\timport Vue, { VueConstructor } from \\&quot;vue\\&quot;;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;\\texport default (Vue as VueConstructor&lt;Vue&gt;).extend({&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;\\t\\t\${0}&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;\\t});&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;/script&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;style scoped&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;/style&gt;&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Base with VueConstructor for Vue.js File with TypeScript&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;VueConstructor standard API extending interface (SFC)&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vcibase&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;&lt;template&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;\\t&lt;div&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;\\t&lt;/div&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;/template&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;script lang=\\&quot;ts\\&quot;&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;\\timport Vue, { VueConstructor } from \\&quot;vue\\&quot;;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;\\timport \${1:NameComponent} from \\&quot;@/components/\${1:NameComponent}.vue\\&quot;;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;\\tinterface Refs {&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;\\t\\t\\\\$refs: {&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;\\t\\t\\t\${2:aliasComponent}: InstanceType&lt;typeof \${1:NameComponent}&gt;,&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;\\t\\t}&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;\\t}&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;\\texport default (Vue as VueConstructor&lt;Vue &amp; Refs&gt;).extend({&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;\\t\\t\${0}&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;\\t});&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;/script&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;style scoped&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;/style&gt;&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Base with VueConstructor extending interface for Vue.js File with TypeScript&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;Class-style API Vue (SFC)&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vcsbase&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;&lt;template&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;\\t&lt;div&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;\\t&lt;/div&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;/template&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;script lang=\\&quot;ts\\&quot;&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;\\timport Vue from \\&quot;vue\\&quot;;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;\\timport Component from \\&quot;vue-class-component\\&quot;;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;\\t@Component({})&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;\\texport default class \${1:App} extends Vue {&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;\\t\\t\${0}&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;\\t};&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;/script&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;style scoped&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;/style&gt;&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Base class-style API for Vue.js File with TypeScript&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;Class-style API Vue extending Props (SFC)&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vcsibase&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;&lt;template&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;\\t&lt;div&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;\\t&lt;/div&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;/template&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;script lang=\\&quot;ts\\&quot;&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;\\timport Vue from \\&quot;vue\\&quot;;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;\\timport Component from \\&quot;vue-class-component\\&quot;;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;\\tconst \${1:App}Props = Vue.extend({&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;\\t\\tprops: {&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;\\t\\t\\t\${2:nameProp}: \${3:type}&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;\\t\\t}&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;\\t})&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;\\t@Component({})&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;\\texport default class \${1:App} extends \${1:App}Props {&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;\\t\\t\${0}&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;\\t};&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;/script&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;style scoped&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;/style&gt;&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Base class-style API extending Props for Vue.js File with TypeScript&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;Vue Composition API using Vue 2&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vcompbase&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;&lt;template&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;/template&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;script lang=\\&quot;ts\\&quot;&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;\\timport Vue from \\&quot;vue\\&quot;;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;\\timport { defineComponent } from \\&quot;@vue/composition-api\\&quot;;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;\\texport default defineComponent({&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;\\t\\t\${0}&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;\\t});&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;/script&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;style scoped&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;/style&gt;&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Base for Vue.js File with TypeScript using the Composition API plugin for Vue 2&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="golang-snnipets" tabindex="-1"><a class="header-anchor" href="#golang-snnipets"><span>Golang Snnipets</span></a></h3><h2 id="vscode-设置" tabindex="-1"><a class="header-anchor" href="#vscode-设置"><span>VSCode 设置</span></a></h2><h3 id="latex-texworkshop" tabindex="-1"><a class="header-anchor" href="#latex-texworkshop"><span>Latex/TexWorkshop</span></a></h3><p>settings.json</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token comment">// Latex workshop</span>
    <span class="token property">&quot;latex-workshop.latex.tools&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;latexmk&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;latexmk&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;-synctex=1&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;-interaction=nonstopmode&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;-file-line-error&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;-pdf&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;%DOC%&quot;</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xelatex&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xelatex&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;-synctex=1&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;-interaction=nonstopmode&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;-file-line-error&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;%DOC%&quot;</span>
              <span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>          
          <span class="token punctuation">{</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pdflatex&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pdflatex&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;-synctex=1&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;-interaction=nonstopmode&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;-file-line-error&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;%DOC%&quot;</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bibtex&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bibtex&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;%DOCFILE%&quot;</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;latex-workshop.latex.recipes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xelatex&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;tools&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;xelatex&quot;</span>
                        <span class="token punctuation">]</span>
                  <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;latexmk&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;tools&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;latexmk&quot;</span>
                        <span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>

          <span class="token punctuation">{</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pdflatex -&gt; bibtex -&gt; pdflatex*2&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;tools&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;pdflatex&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;bibtex&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;pdflatex&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;pdflatex&quot;</span>
                        <span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;latex-workshop.view.pdf.viewer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tab&quot;</span><span class="token punctuation">,</span>  
    <span class="token property">&quot;latex-workshop.latex.clean.fileTypes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;*.aux&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;*.bbl&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;*.blg&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;*.idx&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;*.ind&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;*.lof&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;*.lot&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;*.out&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;*.toc&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;*.acn&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;*.acr&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;*.alg&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;*.glg&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;*.glo&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;*.gls&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;*.ist&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;*.fls&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;*.log&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;*.fdb_latexmk&quot;</span>
      <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="typescript-settings" tabindex="-1"><a class="header-anchor" href="#typescript-settings"><span>Typescript Settings</span></a></h3><h3 id="tslint-json" tabindex="-1"><a class="header-anchor" href="#tslint-json"><span>tslint.json</span></a></h3><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token comment">// tslint.json</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;defaultSeverity&quot;</span><span class="token operator">:</span> <span class="token string">&quot;warning&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;tslint:recommended&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;linterOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;exclude&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;node_modules/**&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;indent&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token string">&quot;spaces&quot;</span><span class="token punctuation">,</span>
      <span class="token number">2</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;interface-name&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;no-consecutive-blank-lines&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;object-literal-sort-keys&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ordered-imports&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;arrow-parens&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token string">&quot;as-needed&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;quotemark&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token string">&quot;single&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;semicolon&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token string">&quot;always&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;ignore-interfaces&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;trailing-comma&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;singleline&quot;</span><span class="token operator">:</span> <span class="token string">&quot;never&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;multiline&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;objects&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ignore&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;arrays&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ignore&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;functions&quot;</span><span class="token operator">:</span> <span class="token string">&quot;never&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;typeLiterals&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ignore&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;no-console&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;prefer-const&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>/home/abelit/Downloads/crmcount
    <span class="token property">&quot;object-literal-key-quotes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token string">&quot;consistent-as-needed&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="tsconfig-json" tabindex="-1"><a class="header-anchor" href="#tsconfig-json"><span>tsconfig.json</span></a></h4><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token comment">// tsconfig.json</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esnext&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esnext&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;strict&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;jsx&quot;</span><span class="token operator">:</span> <span class="token string">&quot;preserve&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;importHelpers&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;moduleResolution&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;experimentalDecorators&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;esModuleInterop&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;allowSyntheticDefaultImports&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;sourceMap&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;baseUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;types&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;webpack-env&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;jest&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;paths&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;@/*&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;src/*&quot;</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lib&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;esnext&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;dom&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;dom.iterable&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;scripthost&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;src/**/*.ts&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;src/**/*.tsx&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;src/**/*.vue&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;tests/**/*.ts&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;tests/**/*.tsx&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;exclude&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;node_modules&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// support comment in json file</span>
  <span class="token property">&quot;files.associations&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;tslint.json&quot;</span><span class="token operator">:</span> <span class="token string">&quot;jsonc&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="font-settings" tabindex="-1"><a class="header-anchor" href="#font-settings"><span>Font Settings</span></a></h3><h4 id="operator-mono" tabindex="-1"><a class="header-anchor" href="#operator-mono"><span>Operator Mono</span></a></h4><ul><li>安装 <code>Operator Mono</code> 字体</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cp</span> ./fonts/OperatorMono/* /usr/share/fonts/truetype/operator-mono/
mkfontscale
fc-cache <span class="token parameter variable">-fv</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>配置vscode使用字体</li></ul><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;git.autofetch&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;[vue]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;go.useLanguageServer&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;window.zoomLevel&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;latex-workshop.view.pdf.viewer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;browser&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;explorer.confirmDelete&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;editor.suggestSelection&quot;</span><span class="token operator">:</span> <span class="token string">&quot;first&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;vsintellicode.modify.editor.suggestSelection&quot;</span><span class="token operator">:</span> <span class="token string">&quot;automaticallyOverrodeDefaultValue&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;python.languageServer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Microsoft&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;[typescriptreact]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vscode.typescript-language-features&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;typescript.updateImportsOnFileMove.enabled&quot;</span><span class="token operator">:</span> <span class="token string">&quot;always&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;editor.quickSuggestions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;strings&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;[typescript]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vscode.typescript-language-features&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;beautify.config&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;editor.fontFamily&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Operator Mono&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;editor.fontSize&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
    <span class="token property">&quot;editor.fontLigatures&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 这个控制是否启用字体连字，true启用，false不启用，这里选择启用</span>
    <span class="token property">&quot;editor.tokenColorCustomizations&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;textMateRules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;italic font&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;scope&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token string">&quot;comment&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;storage&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;keyword.control.import&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;keyword.control.default&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;keyword.control.from&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;keyword.operator.new&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;keyword.control.export&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;keyword.control.flow&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;storage.type.class&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;storage.type.function&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;storage.type&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;storage.type.class&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;variable.language&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;variable.language.super&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;variable.language.this&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;meta.class&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;meta.var.expr&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;constant.language.null&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;support.type.primitive&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;entity.name.method.js&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;entity.other.attribute-name&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;punctuation.definition.comment&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;text.html.basic entity.other.attribute-name.html&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;text.html.basic entity.other.attribute-name&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;tag.decorator.js entity.name.tag.js&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;tag.decorator.js punctuation.definition.tag.js&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;source.js constant.other.object.key.js string.unquoted.label.js&quot;</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;fontStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;italic&quot;</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="go-开发环境" tabindex="-1"><a class="header-anchor" href="#go-开发环境"><span>Go 开发环境</span></a></h2><h3 id="go-代理" tabindex="-1"><a class="header-anchor" href="#go-代理"><span>Go 代理</span></a></h3><h4 id="git-go-get-使用-shadowsocks-代理" tabindex="-1"><a class="header-anchor" href="#git-go-get-使用-shadowsocks-代理"><span>Git&amp;go get 使用 Shadowsocks 代理</span></a></h4>`,27),k=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token builtin class-name"},"export"),s(),n("span",{class:"token assign-left variable"},"http_proxy"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"http://127.0.0.1:1080"'),s(`
`),n("span",{class:"token builtin class-name"},"export"),s(),n("span",{class:"token assign-left variable"},"https_proxy"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"http://127.0.0.1:1080"'),s(`

`),n("span",{class:"token comment"},"# Socks5"),s(`
`),n("span",{class:"token builtin class-name"},"export"),s(),n("span",{class:"token assign-left variable"},"http_proxy"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"socks5://127.0.0.1:1080"'),s(`
`),n("span",{class:"token builtin class-name"},"export"),s(),n("span",{class:"token assign-left variable"},"https_proxy"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"socks5://127.0.0.1:1080"'),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),m=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"set"),s(" http_proxy="),n("span",{class:"token string"},'"http://127.0.0.1:1080"'),s(`
`),n("span",{class:"token function"},"set"),s(" https_proxy="),n("span",{class:"token string"},'"http://127.0.0.1:1080"'),s(`

`),n("span",{class:"token comment"},"# Socks5"),s(`
`),n("span",{class:"token function"},"set"),s(" http_proxy="),n("span",{class:"token string"},'"socks5://127.0.0.1:1080"'),s(`
`),n("span",{class:"token function"},"set"),s(" https_proxy="),n("span",{class:"token string"},'"socks5://127.0.0.1:1080"'),s(`

`),n("span",{class:"token comment"},"# 或"),s(`
`),n("span",{class:"token variable"},"$env"),s(":http_proxy="),n("span",{class:"token string"},'"http://127.0.0.1:1080"'),s(`
`),n("span",{class:"token variable"},"$env"),s(":https_proxy="),n("span",{class:"token string"},'"http://127.0.0.1:1080"'),s(`

`),n("span",{class:"token comment"},"# Socks5"),s(`
`),n("span",{class:"token variable"},"$env"),s(":http_proxy="),n("span",{class:"token string"},'"socks5://127.0.0.1:1080"'),s(`
`),n("span",{class:"token variable"},"$env"),s(":https_proxy="),n("span",{class:"token string"},'"socks5://127.0.0.1:1080"'),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=i(`<h4 id="go-get-代理-goproxy" tabindex="-1"><a class="header-anchor" href="#go-get-代理-goproxy"><span>go get 代理 goproxy</span></a></h4><ul><li>Go 1.13 及以上（推荐）</li></ul><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>$ <span class="token keyword">go</span> env <span class="token operator">-</span>w GO111MODULE<span class="token operator">=</span>on
$ <span class="token keyword">go</span> env <span class="token operator">-</span>w GOPROXY<span class="token operator">=</span>https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>goproxy<span class="token punctuation">.</span>cn<span class="token punctuation">,</span>direct
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Go 1.12 及以下（推荐）</li></ul>`,4),q=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("$ "),n("span",{class:"token builtin class-name"},"export"),s(),n("span",{class:"token assign-left variable"},"GO111MODULE"),n("span",{class:"token operator"},"="),s(`on
$ `),n("span",{class:"token builtin class-name"},"export"),s(),n("span",{class:"token assign-left variable"},"GOPROXY"),n("span",{class:"token operator"},"="),s(`https://goproxy.cn

或

$ `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'"export GO111MODULE=on"'),s(),n("span",{class:"token operator"},">>"),s(` ~/.profile
$ `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'"export GOPROXY=https://goproxy.cn"'),s(),n("span",{class:"token operator"},">>"),s(` ~/.profile
$ `),n("span",{class:"token builtin class-name"},"source"),s(` ~/.profile
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[s("C:\\> "),n("span",{class:"token variable"},"$env"),s(":GO111MODULE = "),n("span",{class:"token string"},'"on"'),s(`
C:\\> `),n("span",{class:"token variable"},"$env"),s(":GOPROXY = "),n("span",{class:"token string"},'"https://goproxy.cn"'),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=i(`<h4 id="自托管-go-模块代理" tabindex="-1"><a class="header-anchor" href="#自托管-go-模块代理"><span>自托管 Go 模块代理</span></a></h4><p>你的代码永远只属于你自己，因此我们向你提供目前世界上最炫酷的自托管 Go 模块代理搭建方案。通过使用 Goproxy 这个极简主义项目，你可以在现有的任意 Web 服务中轻松地加入 Go 模块代理支持，要知道 goproxy.cn 就是基于它搭建的。</p><p>创建一个名为 goproxy.go 的文件</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;net/http&quot;</span>
    <span class="token string">&quot;os&quot;</span>

    <span class="token string">&quot;github.com/goproxy/goproxy&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    g <span class="token operator">:=</span> goproxy<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    g<span class="token punctuation">.</span>GoBinEnv <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>
        os<span class="token punctuation">.</span><span class="token function">Environ</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token string">&quot;GOPROXY=https://goproxy.cn,direct&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 使用 goproxy.cn 作为上游代理</span>
        <span class="token string">&quot;GOPRIVATE=git.example.com&quot;</span><span class="token punctuation">,</span>         <span class="token comment">// 解决私有模块的拉取问题（比如可以配置成公司内部的代码源）</span>
    <span class="token punctuation">)</span>
    http<span class="token punctuation">.</span><span class="token function">ListenAndServe</span><span class="token punctuation">(</span><span class="token string">&quot;localhost:8080&quot;</span><span class="token punctuation">,</span> g<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>并且运行它</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ go run goproxy.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后通过把 GOPROXY 设置为 http://localhost:8080 来试用它。另外，我们也建议你把 GO111MODULE 设置为 on。</p><p>就这么简单，一个功能完备的 Go 模块代理就搭建成功了。事实上，你可以将 Goproxy 结合着你钟爱的 Web 框架一起使用，比如 Gin 和 Echo，你所需要做的只是多添加一条路由而已。更高级的用法请查看文档。</p><h4 id="常用-goproxy" tabindex="-1"><a class="header-anchor" href="#常用-goproxy"><span>常用 GOPROXY</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>https://goproxy.baidu.com
https://goproxy.cn
https://goproxy.io
https://mirrors.aliyun.com/goproxy/
https://gonexus.dev
https://athens.azurefd.net
https://gocenter.io
https://proxy.golang.org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="go-模块" tabindex="-1"><a class="header-anchor" href="#go-模块"><span>Go 模块</span></a></h3><ul><li>Linux/Mac</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">GO111MODULE</span><span class="token operator">=</span>on
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Windows</li></ul><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token function">set</span> GO111MODULE=on
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="go-开发依赖包" tabindex="-1"><a class="header-anchor" href="#go-开发依赖包"><span>Go 开发依赖包</span></a></h3>`,16),y=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("go get "),n("span",{class:"token parameter variable"},"-u"),s(),n("span",{class:"token parameter variable"},"-v"),s(` github.com/bytbox/golint
go get `),n("span",{class:"token parameter variable"},"-u"),s(),n("span",{class:"token parameter variable"},"-v"),s(` github.com/golang/tools
go get `),n("span",{class:"token parameter variable"},"-u"),s(),n("span",{class:"token parameter variable"},"-v"),s(` github.com/lukehoban/go-outline
go get `),n("span",{class:"token parameter variable"},"-u"),s(),n("span",{class:"token parameter variable"},"-v"),s(` github.com/newhook/go-symbols
go get `),n("span",{class:"token parameter variable"},"-u"),s(),n("span",{class:"token parameter variable"},"-v"),s(` github.com/mdempsky/gocode
go get `),n("span",{class:"token parameter variable"},"-u"),s(),n("span",{class:"token parameter variable"},"-v"),s(` github.com/uudashr/gopkgs/v2/cmd/gopkgs
go get `),n("span",{class:"token parameter variable"},"-u"),s(),n("span",{class:"token parameter variable"},"-v"),s(` github.com/ramya-rao-a/go-outline
go get `),n("span",{class:"token parameter variable"},"-u"),s(),n("span",{class:"token parameter variable"},"-v"),s(` github.com/acroca/go-symbols
go get `),n("span",{class:"token parameter variable"},"-u"),s(),n("span",{class:"token parameter variable"},"-v"),s(` golang.org/x/tools/cmd/guru
go get `),n("span",{class:"token parameter variable"},"-u"),s(),n("span",{class:"token parameter variable"},"-v"),s(` golang.org/x/tools/cmd/gorename
go get `),n("span",{class:"token parameter variable"},"-u"),s(),n("span",{class:"token parameter variable"},"-v"),s(` github.com/cweill/gotests
go get `),n("span",{class:"token parameter variable"},"-u"),s(),n("span",{class:"token parameter variable"},"-v"),s(` github.com/fatih/gomodifytags
go get `),n("span",{class:"token parameter variable"},"-u"),s(),n("span",{class:"token parameter variable"},"-v"),s(` github.com/josharian/impl
go get `),n("span",{class:"token parameter variable"},"-u"),s(),n("span",{class:"token parameter variable"},"-v"),s(` github.com/davidrjenni/reftools/cmd/fillstruct
go get `),n("span",{class:"token parameter variable"},"-u"),s(),n("span",{class:"token parameter variable"},"-v"),s(` github.com/haya14busa/goplay/cmd/goplay
go get `),n("span",{class:"token parameter variable"},"-u"),s(),n("span",{class:"token parameter variable"},"-v"),s(` github.com/godoctor/godoctor
go get `),n("span",{class:"token parameter variable"},"-u"),s(),n("span",{class:"token parameter variable"},"-v"),s(` github.com/go-delve/delve/cmd/dlv
go get `),n("span",{class:"token parameter variable"},"-u"),s(),n("span",{class:"token parameter variable"},"-v"),s(` github.com/stamblerre/gocode
go get `),n("span",{class:"token parameter variable"},"-u"),s(),n("span",{class:"token parameter variable"},"-v"),s(` github.com/rogpeppe/godef
go get `),n("span",{class:"token parameter variable"},"-u"),s(),n("span",{class:"token parameter variable"},"-v"),s(` github.com/sqs/goreturns
go get `),n("span",{class:"token parameter variable"},"-u"),s(),n("span",{class:"token parameter variable"},"-v"),s(` golang.org/x/lint/golint
go get `),n("span",{class:"token parameter variable"},"-u"),s(),n("span",{class:"token parameter variable"},"-v"),s(` github.com/gin-gonic/gin
go get `),n("span",{class:"token parameter variable"},"-u"),s(),n("span",{class:"token parameter variable"},"-v"),s(` golang.org/x/tools/gopls
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("go "),n("span",{class:"token function"},"install"),s(` github.com/bytbox/golint
go `),n("span",{class:"token function"},"install"),s(` github.com/golang/tools
go `),n("span",{class:"token function"},"install"),s(` github.com/lukehoban/go-outline
go `),n("span",{class:"token function"},"install"),s(` github.com/newhook/go-symbols
go `),n("span",{class:"token function"},"install"),s(` github.com/mdempsky/gocode
go `),n("span",{class:"token function"},"install"),s(` github.com/uudashr/gopkgs/v2/cmd/gopkgs
go `),n("span",{class:"token function"},"install"),s(` github.com/ramya-rao-a/go-outline
go `),n("span",{class:"token function"},"install"),s(` github.com/acroca/go-symbols
go `),n("span",{class:"token function"},"install"),s(` golang.org/x/tools/cmd/guru
go `),n("span",{class:"token function"},"install"),s(` golang.org/x/tools/cmd/gorename
go `),n("span",{class:"token function"},"install"),s(` github.com/cweill/gotests
go `),n("span",{class:"token function"},"install"),s(` github.com/fatih/gomodifytags
go `),n("span",{class:"token function"},"install"),s(` github.com/josharian/impl
go `),n("span",{class:"token function"},"install"),s(` github.com/davidrjenni/reftools/cmd/fillstruct
go `),n("span",{class:"token function"},"install"),s(` github.com/haya14busa/goplay/cmd/goplay
go `),n("span",{class:"token function"},"install"),s(` github.com/godoctor/godoctor
go `),n("span",{class:"token function"},"install"),s(` github.com/go-delve/delve/cmd/dlv
go `),n("span",{class:"token function"},"install"),s(` github.com/stamblerre/gocode
go `),n("span",{class:"token function"},"install"),s(` github.com/rogpeppe/godef
go `),n("span",{class:"token function"},"install"),s(` github.com/sqs/goreturns
go `),n("span",{class:"token function"},"install"),s(` golang.org/x/lint/golint
go `),n("span",{class:"token function"},"install"),s(` github.com/gin-gonic/gin
go `),n("span",{class:"token function"},"install"),s(` golang.org/x/tools/gopls
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function x(w,S){const o=c("CodeTabs");return u(),r("div",null,[v,p(o,{id:"73",data:[{id:"Linux/Mac"},{id:"Windows"}],active:0},{title0:a(({value:t,isActive:e})=>[s("Linux/Mac")]),title1:a(({value:t,isActive:e})=>[s("Windows")]),tab0:a(({value:t,isActive:e})=>[k]),tab1:a(({value:t,isActive:e})=>[m]),_:1}),b,p(o,{id:"99",data:[{id:"Linux/Mac"},{id:"Windows"}],active:0},{title0:a(({value:t,isActive:e})=>[s("Linux/Mac")]),title1:a(({value:t,isActive:e})=>[s("Windows")]),tab0:a(({value:t,isActive:e})=>[q]),tab1:a(({value:t,isActive:e})=>[g]),_:1}),h,p(o,{id:"153",data:[{id:"go get"},{id:"go install"}],active:0},{title0:a(({value:t,isActive:e})=>[s("go get")]),title1:a(({value:t,isActive:e})=>[s("go install")]),tab0:a(({value:t,isActive:e})=>[y]),tab1:a(({value:t,isActive:e})=>[f]),_:1})])}const V=l(d,[["render",x],["__file","vscode.html.vue"]]),_=JSON.parse('{"path":"/guide/tool/vscode.html","title":"vscode","lang":"zh-CN","frontmatter":{"title":"vscode","icon":"vscode","description":"VSCode 插件 常用插件 VSCode Snnipets Python Snnipets Javascript/TypeScript Snnipets Golang Snnipets VSCode 设置 Latex/TexWorkshop settings.json Typescript Settings tslint.json tsconfig....","head":[["meta",{"property":"og:url","content":"https://github.com/abelit/abelit-datapeacock.git/guide/tool/vscode.html"}],["meta",{"property":"og:site_name","content":"数之雀"}],["meta",{"property":"og:title","content":"vscode"}],["meta",{"property":"og:description","content":"VSCode 插件 常用插件 VSCode Snnipets Python Snnipets Javascript/TypeScript Snnipets Golang Snnipets VSCode 设置 Latex/TexWorkshop settings.json Typescript Settings tslint.json tsconfig...."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-11T14:06:18.000Z"}],["meta",{"property":"article:author","content":"Abelit"}],["meta",{"property":"article:modified_time","content":"2024-05-11T14:06:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"vscode\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-11T14:06:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Abelit\\",\\"url\\":\\"https://github.com/abelit\\"}]}"]]},"headers":[{"level":2,"title":"VSCode 插件","slug":"vscode-插件","link":"#vscode-插件","children":[]},{"level":2,"title":"VSCode Snnipets","slug":"vscode-snnipets","link":"#vscode-snnipets","children":[{"level":3,"title":"Python Snnipets","slug":"python-snnipets","link":"#python-snnipets","children":[]},{"level":3,"title":"Javascript/TypeScript Snnipets","slug":"javascript-typescript-snnipets","link":"#javascript-typescript-snnipets","children":[]},{"level":3,"title":"Golang Snnipets","slug":"golang-snnipets","link":"#golang-snnipets","children":[]}]},{"level":2,"title":"VSCode 设置","slug":"vscode-设置","link":"#vscode-设置","children":[{"level":3,"title":"Latex/TexWorkshop","slug":"latex-texworkshop","link":"#latex-texworkshop","children":[]},{"level":3,"title":"Typescript Settings","slug":"typescript-settings","link":"#typescript-settings","children":[]},{"level":3,"title":"tslint.json","slug":"tslint-json","link":"#tslint-json","children":[]},{"level":3,"title":"Font Settings","slug":"font-settings","link":"#font-settings","children":[]}]},{"level":2,"title":"Go 开发环境","slug":"go-开发环境","link":"#go-开发环境","children":[{"level":3,"title":"Go 代理","slug":"go-代理","link":"#go-代理","children":[]},{"level":3,"title":"Go 模块","slug":"go-模块","link":"#go-模块","children":[]},{"level":3,"title":"Go 开发依赖包","slug":"go-开发依赖包","link":"#go-开发依赖包","children":[]}]}],"git":{"createdTime":1715436378000,"updatedTime":1715436378000,"contributors":[{"name":"ableit","email":"ychenid@live.com","commits":1}]},"readingTime":{"minutes":6.2,"words":1860},"filePathRelative":"guide/tool/vscode.md","localizedDate":"2024年5月11日","autoDesc":true,"excerpt":"<h2>VSCode 插件</h2>\\n<p>常用插件</p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>Ansible\\nBeautify\\nDocker\\nflask-snippets\\nKubernetes\\nPython\\nVetur\\nvscode-icons\\nvuetify-vscode\\nYAML\\nDebugger for Chrome\\nIndent-Rainbow\\nPrettier\\nBracket Pair Colorizer\\nCSS Peek\\nPython Preview\\nLive Share\\nColor Picker\\nVue i18n Ally\\nGo\\nJavaScript and TypeScript Nightly\\nLatest TypeScript and Javascript Grammar\\nOracle Developer Tools for VS \\nDebugger for Firefox \\nGit History\\nSQLTools - Database tools\\nDebugger for Microsoft Edge\\nC/C++\\nC#\\nRemote - SSH\\nRemote - Containers\\nNode Debug\\nRemote Development\\nMaven for Java\\nPrettier - Code formatter\\nTSLint\\nmarkdownlint\\ndocs-markdown\\nmarkdown pdf\\n</code></pre></div>"}');export{V as comp,_ as data};
