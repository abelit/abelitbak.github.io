import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o,c as d,a as n,d as s,b as l,w as a,f as u}from"./app-DR5J2daJ.js";const v={},b=n("h2",{id:"负载均衡器-kube-vip",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#负载均衡器-kube-vip"},[n("span",null,"负载均衡器(kube-vip)")])],-1),k={href:"https://github.com/kubernetes/kubeadm/blob/main/docs/ha-considerations.md#options-for-software-load-balancing",target:"_blank",rel:"noopener noreferrer"},m=n("p",null,"keepalived作为和的更“传统”方法的替代方案haproxy，kube-vip在一个服务中实现了虚拟 IP 的管理和负载均衡。它可以在第 2 层（使用 ARP 和leaderElection）或利用 BGP 对等互连的第 3 层中实现。与上面的选项 2 类似，kube-vip将作为静态 Pod 在控制平面节点上运行。",-1),h=n("p",null,"与 一样keepalived，协商虚拟 IP 的主机需要位于同一 IP 子网中。类似地，与 一样haproxy，基于流的负载平衡允许由其背后的 API 服务器实例处理 TLS 终止。",-1),g=n("p",null,"此配置将创建一个清单，该清单将开始kube-vip提供控制平面和服务管理。与 ARP不同，BGP 配置中的所有节点都会通告虚拟 IP 地址。",-1),_=n("h3",{id:"arp模式",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#arp模式"},[n("span",null,"ARP模式")])],-1),f=n("ul",null,[n("li",null,"获取kube-vip最新版本")],-1),y=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token builtin class-name"},"export"),s(),n("span",{class:"token assign-left variable"},"KVVERSION"),n("span",{class:"token operator"},"="),s(`v0.6.3
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),x=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token assign-left variable"},"KVVERSION"),n("span",{class:"token operator"},"="),n("span",{class:"token variable"},[n("span",{class:"token variable"},"$("),n("span",{class:"token function"},"curl"),s(),n("span",{class:"token parameter variable"},"-sL"),s(" https://api.github.com/repos/kube-vip/kube-vip/releases "),n("span",{class:"token operator"},"|"),s(" jq "),n("span",{class:"token parameter variable"},"-r"),s(),n("span",{class:"token string"},'".[0].name"'),n("span",{class:"token variable"},")")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),E=n("ul",null,[n("li",null,"拉取镜像")],-1),P=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token builtin class-name"},"export"),s(),n("span",{class:"token assign-left variable"},"CONTAINER_RUNTIME_ENDPOINT"),n("span",{class:"token operator"},"="),s(`unix:///run/containerd/containerd.sock

ctr `),n("span",{class:"token parameter variable"},"-n"),s(" k8s.io images pull ghcr.m.daocloud.io/kube-vip/kube-vip:"),n("span",{class:"token variable"},"$KVVERSION"),s(`

ctr `),n("span",{class:"token parameter variable"},"-n"),s(" k8s.io images tag ghcr.m.daocloud.io/kube-vip/kube-vip:"),n("span",{class:"token variable"},"$KVVERSION"),s(" ghcr.io/kube-vip/kube-vip:"),n("span",{class:"token variable"},"$KVVERSION"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),R=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token builtin class-name"},"export"),s(),n("span",{class:"token assign-left variable"},"CONTAINER_RUNTIME_ENDPOINT"),n("span",{class:"token operator"},"="),s(`unix:///run/containerd/containerd.sock

`),n("span",{class:"token function"},"docker"),s(" pull ghcr.m.daocloud.io/kube-vip/kube-vip:"),n("span",{class:"token variable"},"$KVVERSION"),s(`

`),n("span",{class:"token function"},"docker"),s(" tag ghcr.m.daocloud.io/kube-vip/kube-vip:"),n("span",{class:"token variable"},"$KVVERSION"),s(" ghcr.io/kube-vip/kube-vip:"),n("span",{class:"token variable"},"$KVVERSION"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),I=n("ul",null,[n("li",null,"生成清单")],-1),A=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token builtin class-name"},"export"),s(),n("span",{class:"token assign-left variable"},"VIP"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"10.10"),s(`.13.200
`),n("span",{class:"token builtin class-name"},"export"),s(),n("span",{class:"token assign-left variable"},"INTERFACE"),n("span",{class:"token operator"},"="),s(`eth0

`),n("span",{class:"token comment"},'# alias kube-vip="ctr run --rm --net-host ghcr.io/kube-vip/kube-vip:$KVVERSION vip /kube-vip"'),s(`
`),n("span",{class:"token builtin class-name"},"alias"),s(" kube-vip"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},[s('"ctr -n k8s.io run --rm --net-host ghcr.io/kube-vip/kube-vip:'),n("span",{class:"token variable"},"$KVVERSION"),s(' vip /kube-vip"')]),s(`

kube-vip manifest pod `),n("span",{class:"token punctuation"},"\\"),s(`
    `),n("span",{class:"token parameter variable"},"--interface"),s(),n("span",{class:"token variable"},"$INTERFACE"),s(),n("span",{class:"token punctuation"},"\\"),s(`
    `),n("span",{class:"token parameter variable"},"--vip"),s(),n("span",{class:"token variable"},"$VIP"),s(),n("span",{class:"token punctuation"},"\\"),s(`
    `),n("span",{class:"token parameter variable"},"--controlplane"),s(),n("span",{class:"token punctuation"},"\\"),s(`
    `),n("span",{class:"token parameter variable"},"--arp"),s(),n("span",{class:"token punctuation"},"\\"),s(`
    `),n("span",{class:"token parameter variable"},"--leaderElection"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token function"},"tee"),s(` /etc/kubernetes/manifests/kube-vip.yaml
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),S=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token builtin class-name"},"export"),s(),n("span",{class:"token assign-left variable"},"VIP"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"10.10"),s(`.13.200
`),n("span",{class:"token builtin class-name"},"export"),s(),n("span",{class:"token assign-left variable"},"INTERFACE"),n("span",{class:"token operator"},"="),s(`eth0

`),n("span",{class:"token comment"},'# alias kube-vip="docker run --network host --rm ghcr.io/kube-vip/kube-vip:$KVVERSION"'),s(`
`),n("span",{class:"token builtin class-name"},"alias"),s(" kube-vip"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},[s('"docker run --network host --rm ghcr.io/kube-vip/kube-vip:'),n("span",{class:"token variable"},"$KVVERSION"),s('"')]),s(`

kube-vip manifest pod `),n("span",{class:"token punctuation"},"\\"),s(`
    `),n("span",{class:"token parameter variable"},"--interface"),s(),n("span",{class:"token variable"},"$INTERFACE"),s(),n("span",{class:"token punctuation"},"\\"),s(`
    `),n("span",{class:"token parameter variable"},"--vip"),s(),n("span",{class:"token variable"},"$VIP"),s(),n("span",{class:"token punctuation"},"\\"),s(`
    `),n("span",{class:"token parameter variable"},"--controlplane"),s(),n("span",{class:"token punctuation"},"\\"),s(`
    `),n("span",{class:"token parameter variable"},"--arp"),s(),n("span",{class:"token punctuation"},"\\"),s(`
    `),n("span",{class:"token parameter variable"},"--leaderElection"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token function"},"tee"),s(` /etc/kubernetes/manifests/kube-vip.yaml
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),V=n("h3",{id:"bgp模式",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#bgp模式"},[n("span",null,"BGP模式")])],-1),T=n("ul",null,[n("li",null,"获取kube-vip最新版本")],-1),$=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token builtin class-name"},"export"),s(),n("span",{class:"token assign-left variable"},"KVVERSION"),n("span",{class:"token operator"},"="),s(`v0.6.3
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),N=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token assign-left variable"},"KVVERSION"),n("span",{class:"token operator"},"="),n("span",{class:"token variable"},[n("span",{class:"token variable"},"$("),n("span",{class:"token function"},"curl"),s(),n("span",{class:"token parameter variable"},"-sL"),s(" https://api.github.com/repos/kube-vip/kube-vip/releases "),n("span",{class:"token operator"},"|"),s(" jq "),n("span",{class:"token parameter variable"},"-r"),s(),n("span",{class:"token string"},'".[0].name"'),n("span",{class:"token variable"},")")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),q=n("ul",null,[n("li",null,"生成清单")],-1),O=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token builtin class-name"},"export"),s(),n("span",{class:"token assign-left variable"},"VIP"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"10.10"),s(`.13.200
`),n("span",{class:"token builtin class-name"},"export"),s(),n("span",{class:"token assign-left variable"},"INTERFACE"),n("span",{class:"token operator"},"="),s(`lo

`),n("span",{class:"token builtin class-name"},"alias"),s(" kube-vip"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},[s('"ctr run --rm --net-host ghcr.io/kube-vip/kube-vip:'),n("span",{class:"token variable"},"$KVVERSION"),s(' vip /kube-vip"')]),s(`

kube-vip manifest pod `),n("span",{class:"token punctuation"},"\\"),s(`
    `),n("span",{class:"token parameter variable"},"--interface"),s(),n("span",{class:"token variable"},"$INTERFACE"),s(),n("span",{class:"token punctuation"},"\\"),s(`
    `),n("span",{class:"token parameter variable"},"--vip"),s(),n("span",{class:"token variable"},"$VIP"),s(),n("span",{class:"token punctuation"},"\\"),s(`
    `),n("span",{class:"token parameter variable"},"--controlplane"),s(),n("span",{class:"token punctuation"},"\\"),s(`
    `),n("span",{class:"token parameter variable"},"--bgp"),s(),n("span",{class:"token punctuation"},"\\"),s(`
    `),n("span",{class:"token parameter variable"},"--localAS"),s(),n("span",{class:"token number"},"65000"),s(),n("span",{class:"token punctuation"},"\\"),s(`
    `),n("span",{class:"token parameter variable"},"--bgpRouterID"),s(),n("span",{class:"token number"},"192.168"),s(".0.2 "),n("span",{class:"token punctuation"},"\\"),s(`
    `),n("span",{class:"token parameter variable"},"--bgppeers"),s(),n("span",{class:"token number"},"192.168"),s(".0.10:65000::false,192.168.0.11:65000::false "),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token function"},"tee"),s(` /etc/kubernetes/manifests/kube-vip.yaml
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token builtin class-name"},"export"),s(),n("span",{class:"token assign-left variable"},"VIP"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"10.10"),s(`.13.200
`),n("span",{class:"token builtin class-name"},"export"),s(),n("span",{class:"token assign-left variable"},"INTERFACE"),n("span",{class:"token operator"},"="),s(`lo

`),n("span",{class:"token builtin class-name"},"alias"),s(" kube-vip"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},[s('"docker run --network host --rm ghcr.io/kube-vip/kube-vip:'),n("span",{class:"token variable"},"$KVVERSION"),s('"')]),s(`

kube-vip manifest pod `),n("span",{class:"token punctuation"},"\\"),s(`
    `),n("span",{class:"token parameter variable"},"--interface"),s(),n("span",{class:"token variable"},"$INTERFACE"),s(),n("span",{class:"token punctuation"},"\\"),s(`
    `),n("span",{class:"token parameter variable"},"--vip"),s(),n("span",{class:"token variable"},"$VIP"),s(),n("span",{class:"token punctuation"},"\\"),s(`
    `),n("span",{class:"token parameter variable"},"--controlplane"),s(),n("span",{class:"token punctuation"},"\\"),s(`
    `),n("span",{class:"token parameter variable"},"--bgp"),s(),n("span",{class:"token punctuation"},"\\"),s(`
    `),n("span",{class:"token parameter variable"},"--localAS"),s(),n("span",{class:"token number"},"65000"),s(),n("span",{class:"token punctuation"},"\\"),s(`
    `),n("span",{class:"token parameter variable"},"--bgpRouterID"),s(),n("span",{class:"token number"},"192.168"),s(".0.2 "),n("span",{class:"token punctuation"},"\\"),s(`
    `),n("span",{class:"token parameter variable"},"--bgppeers"),s(),n("span",{class:"token number"},"192.168"),s(".0.10:65000::false,192.168.0.11:65000::false "),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token function"},"tee"),s(` /etc/kubernetes/manifests/kube-vip.yaml
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("h2",{id:"负载均衡器-keepalived-haproxy",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#负载均衡器-keepalived-haproxy"},[n("span",null,"负载均衡器(keepalived+haproxy)")])],-1),D={href:"https://github.com/kubernetes/kubeadm/blob/main/docs/ha-considerations.md#options-for-software-load-balancing",target:"_blank",rel:"noopener noreferrer"},K=u(`<h3 id="安装与配置keepalived" tabindex="-1"><a class="header-anchor" href="#安装与配置keepalived"><span>安装与配置keepalived</span></a></h3><h4 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h4><blockquote><p>所有master节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> conntrack-tools libseccomp libtool-ltdl
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> keepalived
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h4><ul><li>模板</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token operator">!</span> /etc/keepalived/keepalived.conf
<span class="token operator">!</span> Configuration File <span class="token keyword">for</span> keepalived
global_defs <span class="token punctuation">{</span>
    router_id LVS_DEVEL
<span class="token punctuation">}</span>
vrrp_script check_apiserver <span class="token punctuation">{</span>
  script <span class="token string">&quot;/etc/keepalived/check_apiserver.sh&quot;</span>
  interval <span class="token number">3</span>
  weight <span class="token parameter variable">-2</span>
  fall <span class="token number">10</span>
  rise <span class="token number">2</span>
<span class="token punctuation">}</span>

vrrp_instance VI_1 <span class="token punctuation">{</span>
    state <span class="token variable">\${STATE}</span>
    interface <span class="token variable">\${INTERFACE}</span>
    virtual_router_id <span class="token variable">\${ROUTER_ID}</span>
    priority <span class="token variable">\${PRIORITY}</span>
    authentication <span class="token punctuation">{</span>
        auth_type PASS
        auth_pass <span class="token variable">\${AUTH_PASS}</span>
    <span class="token punctuation">}</span>
    virtual_ipaddress <span class="token punctuation">{</span>
        <span class="token variable">\${APISERVER_VIP}</span>
    <span class="token punctuation">}</span>
    track_script <span class="token punctuation">{</span>
        check_apiserver
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">参数说明</p><ul><li>\${STATE}适用MASTER于一台主机和BACKUP所有其他主机，因此虚拟 IP 最初将分配给MASTER.</li><li>\${INTERFACE}是参与虚拟IP协商的网络接口，例如eth0。</li><li>\${ROUTER_ID}对于所有集群主机应该是相同的，keepalived而对于同一子网中的所有集群来说应该是唯一的。许多发行版将其值预先配置为51.</li><li>\${PRIORITY}控制平面节点上的值应高于备份节点上的值。因此101和100分别就足够了。</li><li>\${AUTH_PASS}所有集群主机应该相同keepalived，例如42</li><li>\${APISERVER_VIP}是集群主机之间协商的虚拟IP地址keepalived。</li></ul></div><ul><li>master节点1 k8s-master01 编辑<code>/etc/keepalived/keepalived.conf</code>,添加如下内容：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token operator">!</span> /etc/keepalived/keepalived.conf
<span class="token operator">!</span> Configuration File <span class="token keyword">for</span> keepalived
global_defs <span class="token punctuation">{</span>
    router_id LVS_DEVEL
<span class="token punctuation">}</span>
vrrp_script check_apiserver <span class="token punctuation">{</span>
    <span class="token operator">!</span> script <span class="token string">&quot;killall -0 haproxy&quot;</span>
    <span class="token operator">!</span> interval <span class="token number">3</span>
    <span class="token operator">!</span> weight <span class="token parameter variable">-2</span>
    <span class="token operator">!</span> fall <span class="token number">10</span>
    <span class="token operator">!</span> rise <span class="token number">2</span>
    script <span class="token string">&quot;/etc/keepalived/check_apiserver.sh&quot;</span>
    interval <span class="token number">3</span>
    weight <span class="token parameter variable">-2</span>
    fall <span class="token number">10</span>
    rise <span class="token number">2</span>
<span class="token punctuation">}</span>

vrrp_instance VI_1 <span class="token punctuation">{</span>
    state MASTER
    interface eth0
    virtual_router_id <span class="token number">51</span>
    priority <span class="token number">100</span>
    authentication <span class="token punctuation">{</span>
        auth_type PASS
        auth_pass G6PNemZz3yAaYE
    <span class="token punctuation">}</span>
    virtual_ipaddress <span class="token punctuation">{</span>
        <span class="token number">10.10</span>.13.200
    <span class="token punctuation">}</span>
    track_script <span class="token punctuation">{</span>
        check_apiserver
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>master节点2 k8s-master02 编辑<code>/etc/keepalived/keepalived.conf</code>,添加如下内容：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token operator">!</span> /etc/keepalived/keepalived.conf
<span class="token operator">!</span> Configuration File <span class="token keyword">for</span> keepalived
global_defs <span class="token punctuation">{</span>
    router_id LVS_DEVEL
<span class="token punctuation">}</span>
vrrp_script check_apiserver <span class="token punctuation">{</span>
    <span class="token operator">!</span> script <span class="token string">&quot;killall -0 haproxy&quot;</span>
    <span class="token operator">!</span> interval <span class="token number">3</span>
    <span class="token operator">!</span> weight <span class="token parameter variable">-2</span>
    <span class="token operator">!</span> fall <span class="token number">10</span>
    <span class="token operator">!</span> rise <span class="token number">2</span>
    script <span class="token string">&quot;/etc/keepalived/check_apiserver.sh&quot;</span>
    interval <span class="token number">3</span>
    weight <span class="token parameter variable">-2</span>
    fall <span class="token number">10</span>
    rise <span class="token number">2</span>
<span class="token punctuation">}</span>

vrrp_instance VI_1 <span class="token punctuation">{</span>
    state BACKUP
    interface eth0
    virtual_router_id <span class="token number">51</span>
    priority <span class="token number">60</span>
    authentication <span class="token punctuation">{</span>
        auth_type PASS
        auth_pass G6PNemZz3yAaYE
    <span class="token punctuation">}</span>
    virtual_ipaddress <span class="token punctuation">{</span>
        <span class="token number">10.10</span>.13.200
    <span class="token punctuation">}</span>
    track_script <span class="token punctuation">{</span>
        check_apiserver
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>master节点3 k8s-master03 编辑<code>/etc/keepalived/keepalived.conf</code>,添加如下内容：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token operator">!</span> /etc/keepalived/keepalived.conf
<span class="token operator">!</span> Configuration File <span class="token keyword">for</span> keepalived
global_defs <span class="token punctuation">{</span>
    router_id LVS_DEVEL
<span class="token punctuation">}</span>
vrrp_script check_apiserver <span class="token punctuation">{</span>
    <span class="token operator">!</span> script <span class="token string">&quot;killall -0 haproxy&quot;</span>
    <span class="token operator">!</span> interval <span class="token number">3</span>
    <span class="token operator">!</span> weight <span class="token parameter variable">-2</span>
    <span class="token operator">!</span> fall <span class="token number">10</span>
    <span class="token operator">!</span> rise <span class="token number">2</span>
    script <span class="token string">&quot;/etc/keepalived/check_apiserver.sh&quot;</span>
    interval <span class="token number">3</span>
    weight <span class="token parameter variable">-2</span>
    fall <span class="token number">10</span>
    rise <span class="token number">2</span>
<span class="token punctuation">}</span>

vrrp_instance VI_1 <span class="token punctuation">{</span>
    state BACKUP
    interface eth0
    virtual_router_id <span class="token number">51</span>
    priority <span class="token number">50</span>
    authentication <span class="token punctuation">{</span>
        auth_type PASS
        auth_pass G6PNemZz3yAaYE
    <span class="token punctuation">}</span>
    virtual_ipaddress <span class="token punctuation">{</span>
        <span class="token number">10.10</span>.13.200
    <span class="token punctuation">}</span>
    track_script <span class="token punctuation">{</span>
        check_apiserver
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>健康检查脚本</li></ul><blockquote><p>所有master节点 编辑<code>/etc/keepalived/check_apiserver.sh</code>,添加如下内容：</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/sh</span>

<span class="token assign-left variable">APISERVER_VIP</span><span class="token operator">=</span><span class="token number">10.10</span>.13.200
<span class="token assign-left variable">APISERVER_DEST_PORT</span><span class="token operator">=</span><span class="token number">16443</span>

<span class="token function-name function">errorExit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;*** <span class="token variable">$*</span>&quot;</span> <span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span><span class="token file-descriptor important">&amp;2</span>
    <span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token punctuation">}</span>

<span class="token function">curl</span> <span class="token parameter variable">--silent</span> --max-time <span class="token number">2</span> <span class="token parameter variable">--insecure</span> https://localhost:<span class="token variable">\${APISERVER_DEST_PORT}</span>/ <span class="token parameter variable">-o</span> /dev/null <span class="token operator">||</span> errorExit <span class="token string">&quot;Error GET https://localhost:<span class="token variable">\${APISERVER_DEST_PORT}</span>/&quot;</span>
<span class="token keyword">if</span> <span class="token function">ip</span> addr <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-q</span> <span class="token variable">\${APISERVER_VIP}</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token function">curl</span> <span class="token parameter variable">--silent</span> --max-time <span class="token number">2</span> <span class="token parameter variable">--insecure</span> https://<span class="token variable">\${APISERVER_VIP}</span><span class="token builtin class-name">:</span><span class="token variable">\${APISERVER_DEST_PORT}</span>/ <span class="token parameter variable">-o</span> /dev/null <span class="token operator">||</span> errorExit <span class="token string">&quot;Error GET https://<span class="token variable">\${APISERVER_VIP}</span>:<span class="token variable">\${APISERVER_DEST_PORT}</span>/&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><ul><li>\${APISERVER_VIP}是集群主机之间协商的虚拟IP地址keepalived。</li><li>\${APISERVER_DEST_PORT}Kubernetes 将通过其与 API 服务器通信的端口。</li></ul></div><h4 id="启动" tabindex="-1"><a class="header-anchor" href="#启动"><span>启动</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl start keepalived.service
systemctl <span class="token builtin class-name">enable</span> keepalived.service
systemctl status keepalived.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装与配置haproxy" tabindex="-1"><a class="header-anchor" href="#安装与配置haproxy"><span>安装与配置haproxy</span></a></h3><h4 id="安装-1" tabindex="-1"><a class="header-anchor" href="#安装-1"><span>安装</span></a></h4><blockquote><p>所有master节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> haproxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="配置-1" tabindex="-1"><a class="header-anchor" href="#配置-1"><span>配置</span></a></h4><ul><li>模板</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># /etc/haproxy/haproxy.cfg</span>
<span class="token comment">#---------------------------------------------------------------------</span>
<span class="token comment"># Global settings</span>
<span class="token comment">#---------------------------------------------------------------------</span>
global
    log /dev/log local0
    log /dev/log local1 notice
    daemon

<span class="token comment">#---------------------------------------------------------------------</span>
<span class="token comment"># common defaults that all the &#39;listen&#39; and &#39;backend&#39; sections will</span>
<span class="token comment"># use if not designated in their block</span>
<span class="token comment">#---------------------------------------------------------------------</span>
defaults
    mode                    http
    log                     global
    option                  httplog
    option                  dontlognull
    option http-server-close
    option forwardfor       except <span class="token number">127.0</span>.0.0/8
    option                  redispatch
    retries                 <span class="token number">1</span>
    <span class="token function">timeout</span> http-request    10s
    <span class="token function">timeout</span> queue           20s
    <span class="token function">timeout</span> connect         5s
    <span class="token function">timeout</span> client          20s
    <span class="token function">timeout</span> server          20s
    <span class="token function">timeout</span> http-keep-alive 10s
    <span class="token function">timeout</span> check           10s

<span class="token comment">#---------------------------------------------------------------------</span>
<span class="token comment"># apiserver frontend which proxys to the control plane nodes</span>
<span class="token comment">#---------------------------------------------------------------------</span>
frontend apiserver
    <span class="token builtin class-name">bind</span> *:<span class="token variable">\${APISERVER_DEST_PORT}</span>
    mode tcp
    option tcplog
    default_backend apiserver

<span class="token comment">#---------------------------------------------------------------------</span>
<span class="token comment"># round robin balancing for apiserver</span>
<span class="token comment">#---------------------------------------------------------------------</span>
backend apiserver
    option httpchk GET /healthz
    http-check <span class="token function">expect</span> status <span class="token number">200</span>
    mode tcp
    option ssl-hello-chk
    balance     roundrobin
        server <span class="token variable">\${HOST1_ID}</span> <span class="token variable">\${HOST1_ADDRESS}</span><span class="token builtin class-name">:</span><span class="token variable">\${APISERVER_SRC_PORT}</span> check
        <span class="token comment"># [...]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">参数说明</p><ul><li>\${APISERVER_DEST_PORT}Kubernetes 将通过其与 API 服务器通信的端口。</li><li>\${APISERVER_SRC_PORT}API Server 实例使用的端口</li><li>\${HOST1_ID}第一个负载平衡 API Server 主机的符号名称</li><li>\${HOST1_ADDRESS}第一个负载平衡 API 服务器主机的可解析地址（DNS 名称、IP 地址）</li><li>附加server行，每个负载平衡 API 服务器主机各一行</li></ul></div><ul><li>所有master节点使用相同配置 编辑<code>/etc/haproxy/haproxy.cfg</code>,添加如下内容：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># /etc/haproxy/haproxy.cfg</span>
<span class="token comment">#---------------------------------------------------------------------</span>
<span class="token comment"># Global settings</span>
<span class="token comment">#---------------------------------------------------------------------</span>
global
    log /dev/log local0
    log /dev/log local1 notice
    daemon

<span class="token comment">#---------------------------------------------------------------------</span>
<span class="token comment"># common defaults that all the &#39;listen&#39; and &#39;backend&#39; sections will</span>
<span class="token comment"># use if not designated in their block</span>
<span class="token comment">#---------------------------------------------------------------------</span>
defaults
    mode                    http
    log                     global
    option                  httplog
    option                  dontlognull
    option http-server-close
    option forwardfor       except <span class="token number">127.0</span>.0.0/8
    option                  redispatch
    retries                 <span class="token number">1</span>
    <span class="token function">timeout</span> http-request    10s
    <span class="token function">timeout</span> queue           20s
    <span class="token function">timeout</span> connect         5s
    <span class="token function">timeout</span> client          20s
    <span class="token function">timeout</span> server          20s
    <span class="token function">timeout</span> http-keep-alive 10s
    <span class="token function">timeout</span> check           10s

<span class="token comment">#---------------------------------------------------------------------</span>
<span class="token comment"># apiserver frontend which proxys to the control plane nodes</span>
<span class="token comment">#---------------------------------------------------------------------</span>
frontend apiserver
    <span class="token builtin class-name">bind</span> *:16443
    mode tcp
    option tcplog
    default_backend apiserver

<span class="token comment">#---------------------------------------------------------------------</span>
<span class="token comment"># round robin balancing for apiserver</span>
<span class="token comment">#---------------------------------------------------------------------</span>
backend apiserver
    option httpchk GET /healthz
    http-check <span class="token function">expect</span> status <span class="token number">200</span>
    mode tcp
    option ssl-hello-chk
    balance     roundrobin
        server k8s-master01 <span class="token number">10.10</span>.13.100:6443 check
        server k8s-master02 <span class="token number">10.10</span>.13.101:6443 check
        server k8s-master03 <span class="token number">10.10</span>.13.102:6443 check
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="启动-1" tabindex="-1"><a class="header-anchor" href="#启动-1"><span>启动</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl start haproxy
systemctl <span class="token builtin class-name">enable</span> haproxy
systemctl status haproxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="静态pod服务" tabindex="-1"><a class="header-anchor" href="#静态pod服务"><span>静态Pod服务</span></a></h3><blockquote><p>所有master节点</p></blockquote><p>如果keepalived并且haproxy将在控制平面节点上运行，则可以将它们配置为作为静态 Pod 运行。这里所需要做的就是<code>/etc/kubernetes/manifests</code>在引导集群之前将相应的清单文件放入目录中。在引导过程中，kubelet将启动进程，以便集群在启动时可以使用它们。这是一个优雅的解决方案，特别是使用堆叠控制平面和 etcd 节点下描述的设置。</p><ul><li>配置keepalived静态Pod 编辑<code>/etc/kubernetes/manifests/keepalived.yaml</code></li></ul><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">creationTimestamp</span><span class="token punctuation">:</span> <span class="token null important">null</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> keepalived
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>system
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">image</span><span class="token punctuation">:</span> osixia/keepalived<span class="token punctuation">:</span>2.0.17
    <span class="token key atrule">name</span><span class="token punctuation">:</span> keepalived
    <span class="token key atrule">resources</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token key atrule">securityContext</span><span class="token punctuation">:</span>
      <span class="token key atrule">capabilities</span><span class="token punctuation">:</span>
        <span class="token key atrule">add</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> NET_ADMIN
        <span class="token punctuation">-</span> NET_BROADCAST
        <span class="token punctuation">-</span> NET_RAW
    <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /usr/local/etc/keepalived/keepalived.conf
      <span class="token key atrule">name</span><span class="token punctuation">:</span> config
    <span class="token punctuation">-</span> <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /etc/keepalived/check_apiserver.sh
      <span class="token key atrule">name</span><span class="token punctuation">:</span> check
  <span class="token key atrule">hostNetwork</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">hostPath</span><span class="token punctuation">:</span>
      <span class="token key atrule">path</span><span class="token punctuation">:</span> /etc/keepalived/keepalived.conf
    <span class="token key atrule">name</span><span class="token punctuation">:</span> config
  <span class="token punctuation">-</span> <span class="token key atrule">hostPath</span><span class="token punctuation">:</span>
      <span class="token key atrule">path</span><span class="token punctuation">:</span> /etc/keepalived/check_apiserver.sh
    <span class="token key atrule">name</span><span class="token punctuation">:</span> check
<span class="token key atrule">status</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>配置haproxy静态Pod 编辑<code>/etc/kubernetes/manifests/haproxy.yaml</code></li></ul><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> haproxy
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>system
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">image</span><span class="token punctuation">:</span> haproxy<span class="token punctuation">:</span>2.1.4
    <span class="token key atrule">name</span><span class="token punctuation">:</span> haproxy
    <span class="token key atrule">livenessProbe</span><span class="token punctuation">:</span>
      <span class="token key atrule">failureThreshold</span><span class="token punctuation">:</span> <span class="token number">8</span>
      <span class="token key atrule">httpGet</span><span class="token punctuation">:</span>
        <span class="token key atrule">host</span><span class="token punctuation">:</span> localhost
        <span class="token key atrule">path</span><span class="token punctuation">:</span> /healthz
        <span class="token comment"># \${APISERVER_DEST_PORT}</span>
        <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">16443</span> 
        <span class="token key atrule">scheme</span><span class="token punctuation">:</span> HTTPS
    <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /usr/local/etc/haproxy/haproxy.cfg
      <span class="token key atrule">name</span><span class="token punctuation">:</span> haproxyconf
      <span class="token key atrule">readOnly</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">hostNetwork</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">hostPath</span><span class="token punctuation">:</span>
      <span class="token key atrule">path</span><span class="token punctuation">:</span> /etc/haproxy/haproxy.cfg
      <span class="token key atrule">type</span><span class="token punctuation">:</span> FileOrCreate
    <span class="token key atrule">name</span><span class="token punctuation">:</span> haproxyconf
<span class="token key atrule">status</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>请注意，这里再次需要填写占位符：\${APISERVER_DEST_PORT}需要保持与/etc/haproxy/haproxy.cfg（见上文）中相同的值。</p><p>该组合已成功地与示例中使用的版本一起使用。其他版本可能也可以工作，或者可能需要更改配置文件。</p><p>服务启动后，现在可以使用 Kubernetes 集群进行引导kubeadm init（见下文）。</p></div><h2 id="负载均衡器-keepalived-nginx" tabindex="-1"><a class="header-anchor" href="#负载均衡器-keepalived-nginx"><span>负载均衡器(keepalived+nginx)</span></a></h2><h3 id="安装与配置keepalived-1" tabindex="-1"><a class="header-anchor" href="#安装与配置keepalived-1"><span>安装与配置keepalived</span></a></h3><h4 id="安装-2" tabindex="-1"><a class="header-anchor" href="#安装-2"><span>安装</span></a></h4><blockquote><p>所有master节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> conntrack-tools libseccomp libtool-ltdl
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> keepalived
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="配置-2" tabindex="-1"><a class="header-anchor" href="#配置-2"><span>配置</span></a></h4><ul><li>master节点1 k8s-master01 编辑<code>/etc/keepalived/keepalived.conf</code>,添加如下内容：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token operator">!</span> /etc/keepalived/keepalived.conf
<span class="token operator">!</span> Configuration File <span class="token keyword">for</span> keepalived
global_defs <span class="token punctuation">{</span>
    router_id LVS_DEVEL
<span class="token punctuation">}</span>
vrrp_script check_apiserver <span class="token punctuation">{</span>
    <span class="token operator">!</span> interval <span class="token number">3</span>
    <span class="token operator">!</span> weight <span class="token parameter variable">-2</span>
    <span class="token operator">!</span> fall <span class="token number">10</span>
    <span class="token operator">!</span> rise <span class="token number">2</span>
    script <span class="token string">&quot;/etc/keepalived/check_apiserver.sh&quot;</span>
    interval <span class="token number">3</span>
    weight <span class="token parameter variable">-2</span>
    fall <span class="token number">10</span>
    rise <span class="token number">2</span>
<span class="token punctuation">}</span>

vrrp_instance VI_1 <span class="token punctuation">{</span>
    state MASTER
    interface eth0
    virtual_router_id <span class="token number">51</span>
    priority <span class="token number">100</span>
    authentication <span class="token punctuation">{</span>
        auth_type PASS
        auth_pass G6PNemZz3yAaYE
    <span class="token punctuation">}</span>
    virtual_ipaddress <span class="token punctuation">{</span>
        <span class="token number">10.10</span>.13.200
    <span class="token punctuation">}</span>
    track_script <span class="token punctuation">{</span>
        check_apiserver
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>master节点2 k8s-master02 编辑<code>/etc/keepalived/keepalived.conf</code>,添加如下内容：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token operator">!</span> /etc/keepalived/keepalived.conf
<span class="token operator">!</span> Configuration File <span class="token keyword">for</span> keepalived
global_defs <span class="token punctuation">{</span>
    router_id LVS_DEVEL
<span class="token punctuation">}</span>
vrrp_script check_apiserver <span class="token punctuation">{</span>
    <span class="token operator">!</span> interval <span class="token number">3</span>
    <span class="token operator">!</span> weight <span class="token parameter variable">-2</span>
    <span class="token operator">!</span> fall <span class="token number">10</span>
    <span class="token operator">!</span> rise <span class="token number">2</span>
    script <span class="token string">&quot;/etc/keepalived/check_apiserver.sh&quot;</span>
    interval <span class="token number">3</span>
    weight <span class="token parameter variable">-2</span>
    fall <span class="token number">10</span>
    rise <span class="token number">2</span>
<span class="token punctuation">}</span>

vrrp_instance VI_1 <span class="token punctuation">{</span>
    state BACKUP
    interface eth0
    virtual_router_id <span class="token number">51</span>
    priority <span class="token number">60</span>
    authentication <span class="token punctuation">{</span>
        auth_type PASS
        auth_pass G6PNemZz3yAaYE
    <span class="token punctuation">}</span>
    virtual_ipaddress <span class="token punctuation">{</span>
        <span class="token number">10.10</span>.13.200
    <span class="token punctuation">}</span>
    track_script <span class="token punctuation">{</span>
        check_apiserver
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>master节点3 k8s-master03 编辑<code>/etc/keepalived/keepalived.conf</code>,添加如下内容：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token operator">!</span> /etc/keepalived/keepalived.conf
<span class="token operator">!</span> Configuration File <span class="token keyword">for</span> keepalived
global_defs <span class="token punctuation">{</span>
    router_id LVS_DEVEL
<span class="token punctuation">}</span>
vrrp_script check_apiserver <span class="token punctuation">{</span>
    <span class="token operator">!</span> interval <span class="token number">3</span>
    <span class="token operator">!</span> weight <span class="token parameter variable">-2</span>
    <span class="token operator">!</span> fall <span class="token number">10</span>
    <span class="token operator">!</span> rise <span class="token number">2</span>
    script <span class="token string">&quot;/etc/keepalived/check_apiserver.sh&quot;</span>
    interval <span class="token number">3</span>
    weight <span class="token parameter variable">-2</span>
    fall <span class="token number">10</span>
    rise <span class="token number">2</span>
<span class="token punctuation">}</span>

vrrp_instance VI_1 <span class="token punctuation">{</span>
    state BACKUP
    interface eth0
    virtual_router_id <span class="token number">51</span>
    priority <span class="token number">50</span>
    authentication <span class="token punctuation">{</span>
        auth_type PASS
        auth_pass G6PNemZz3yAaYE
    <span class="token punctuation">}</span>
    virtual_ipaddress <span class="token punctuation">{</span>
        <span class="token number">10.10</span>.13.200
    <span class="token punctuation">}</span>
    track_script <span class="token punctuation">{</span>
        check_apiserver
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>健康检查脚本</li></ul><blockquote><p>所有master节点 编辑<code>/etc/keepalived/check_apiserver.sh</code>,添加如下内容：</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/sh</span>

<span class="token comment"># CHK_PORT=$1</span>
<span class="token assign-left variable">CHK_PORT</span><span class="token operator">=</span><span class="token number">16443</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$CHK_PORT</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    <span class="token assign-left variable">PORT_PROCESS</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span>ss -lnt<span class="token operator">|</span><span class="token function">grep</span> $CHK_PORT<span class="token operator">|</span><span class="token function">wc</span> <span class="token parameter variable">-l</span><span class="token variable">\`</span></span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$PORT_PROCESS</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
            <span class="token builtin class-name">echo</span> <span class="token string">&quot;Port <span class="token variable">$CHK_PORT</span> Is Not Used,End.&quot;</span>
            <span class="token builtin class-name">exit</span> <span class="token number">1</span>
    <span class="token keyword">fi</span>
<span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Check Port Cant Be Empty!&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>脚本授权</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">chmod</span> +x /etc/keepalived/check_apiserver.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="启动-2" tabindex="-1"><a class="header-anchor" href="#启动-2"><span>启动</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl daemon-reload
systemctl start keepalived.service
systemctl <span class="token builtin class-name">enable</span> keepalived.service
systemctl status keepalived.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装与配置nginx" tabindex="-1"><a class="header-anchor" href="#安装与配置nginx"><span>安装与配置nginx</span></a></h3><h4 id="安装-3" tabindex="-1"><a class="header-anchor" href="#安装-3"><span>安装</span></a></h4><blockquote><p>所有master节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> nginx nginx-mod-stream
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="配置-3" tabindex="-1"><a class="header-anchor" href="#配置-3"><span>配置</span></a></h4><ul><li>所有master节点使用相同配置 编辑<code>/etc/nginx/nginx.conf</code>,添加如下内容：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>stream <span class="token punctuation">{</span>
    upstream kube-apiserver <span class="token punctuation">{</span>
        server <span class="token number">10.10</span>.13.100:6443     <span class="token assign-left variable">max_fails</span><span class="token operator">=</span><span class="token number">3</span> <span class="token assign-left variable">fail_timeout</span><span class="token operator">=</span>30s<span class="token punctuation">;</span>
        server <span class="token number">10.10</span>.13.101:6443     <span class="token assign-left variable">max_fails</span><span class="token operator">=</span><span class="token number">3</span> <span class="token assign-left variable">fail_timeout</span><span class="token operator">=</span>30s<span class="token punctuation">;</span>
        server <span class="token number">10.10</span>.13.102:6443     <span class="token assign-left variable">max_fails</span><span class="token operator">=</span><span class="token number">3</span> <span class="token assign-left variable">fail_timeout</span><span class="token operator">=</span>30s<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    server <span class="token punctuation">{</span>
        listen <span class="token number">16443</span><span class="token punctuation">;</span>
        proxy_connect_timeout 2s<span class="token punctuation">;</span>
        proxy_timeout 900s<span class="token punctuation">;</span>
        proxy_pass kube-apiserver<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="启动-3" tabindex="-1"><a class="header-anchor" href="#启动-3"><span>启动</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl daemon-reload
systemctl start nginx
systemctl <span class="token builtin class-name">enable</span> nginx
systemctl status nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,68);function G(L,F){const c=p("ExternalLinkIcon"),t=p("CodeTabs");return o(),d("div",null,[b,n("p",null,[s("为 kube-apiserver 创建负载均衡器, 更多参考"),n("a",k,[s("官方文档"),l(c)]),s("。")]),m,h,g,_,f,l(t,{id:"25",data:[{id:"手动"},{id:"API"}],active:0},{title0:a(({value:e,isActive:i})=>[s("手动")]),title1:a(({value:e,isActive:i})=>[s("API")]),tab0:a(({value:e,isActive:i})=>[y]),tab1:a(({value:e,isActive:i})=>[x]),_:1}),E,l(t,{id:"40",data:[{id:"ctr"},{id:"docker"}],active:0},{title0:a(({value:e,isActive:i})=>[s("ctr")]),title1:a(({value:e,isActive:i})=>[s("docker")]),tab0:a(({value:e,isActive:i})=>[P]),tab1:a(({value:e,isActive:i})=>[R]),_:1}),I,l(t,{id:"55",data:[{id:"containerd"},{id:"docker"}],active:0},{title0:a(({value:e,isActive:i})=>[s("containerd")]),title1:a(({value:e,isActive:i})=>[s("docker")]),tab0:a(({value:e,isActive:i})=>[A]),tab1:a(({value:e,isActive:i})=>[S]),_:1}),V,T,l(t,{id:"73",data:[{id:"手动"},{id:"API"}],active:0},{title0:a(({value:e,isActive:i})=>[s("手动")]),title1:a(({value:e,isActive:i})=>[s("API")]),tab0:a(({value:e,isActive:i})=>[$]),tab1:a(({value:e,isActive:i})=>[N]),_:1}),q,l(t,{id:"88",data:[{id:"containerd"},{id:"docker"}],active:0},{title0:a(({value:e,isActive:i})=>[s("containerd")]),title1:a(({value:e,isActive:i})=>[s("docker")]),tab0:a(({value:e,isActive:i})=>[O]),tab1:a(({value:e,isActive:i})=>[w]),_:1}),C,n("p",null,[s("为 kube-apiserver 创建负载均衡器, 更多参考"),n("a",D,[s("官方文档"),l(c)]),s("。")]),K])}const H=r(v,[["render",G],["__file","ha-loadbanlance.html.vue"]]),U=JSON.parse('{"path":"/guide/cloudnative/kubernetes/ha-loadbanlance.html","title":"Kubernetes负载均衡","lang":"zh-CN","frontmatter":{"title":"Kubernetes负载均衡","description":"负载均衡器(kube-vip) 为 kube-apiserver 创建负载均衡器, 更多参考官方文档。 keepalived作为和的更“传统”方法的替代方案haproxy，kube-vip在一个服务中实现了虚拟 IP 的管理和负载均衡。它可以在第 2 层（使用 ARP 和leaderElection）或利用 BGP 对等互连的第 3 层中实现。与上面的...","head":[["meta",{"property":"og:url","content":"https://github.com/abelit/abelit-datapeacock.git/guide/cloudnative/kubernetes/ha-loadbanlance.html"}],["meta",{"property":"og:site_name","content":"数之雀"}],["meta",{"property":"og:title","content":"Kubernetes负载均衡"}],["meta",{"property":"og:description","content":"负载均衡器(kube-vip) 为 kube-apiserver 创建负载均衡器, 更多参考官方文档。 keepalived作为和的更“传统”方法的替代方案haproxy，kube-vip在一个服务中实现了虚拟 IP 的管理和负载均衡。它可以在第 2 层（使用 ARP 和leaderElection）或利用 BGP 对等互连的第 3 层中实现。与上面的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-11T14:06:18.000Z"}],["meta",{"property":"article:author","content":"Abelit"}],["meta",{"property":"article:modified_time","content":"2024-05-11T14:06:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Kubernetes负载均衡\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-11T14:06:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Abelit\\",\\"url\\":\\"https://github.com/abelit\\"}]}"]]},"headers":[{"level":2,"title":"负载均衡器(kube-vip)","slug":"负载均衡器-kube-vip","link":"#负载均衡器-kube-vip","children":[{"level":3,"title":"ARP模式","slug":"arp模式","link":"#arp模式","children":[]},{"level":3,"title":"BGP模式","slug":"bgp模式","link":"#bgp模式","children":[]}]},{"level":2,"title":"负载均衡器(keepalived+haproxy)","slug":"负载均衡器-keepalived-haproxy","link":"#负载均衡器-keepalived-haproxy","children":[{"level":3,"title":"安装与配置keepalived","slug":"安装与配置keepalived","link":"#安装与配置keepalived","children":[]},{"level":3,"title":"安装与配置haproxy","slug":"安装与配置haproxy","link":"#安装与配置haproxy","children":[]},{"level":3,"title":"静态Pod服务","slug":"静态pod服务","link":"#静态pod服务","children":[]}]},{"level":2,"title":"负载均衡器(keepalived+nginx)","slug":"负载均衡器-keepalived-nginx","link":"#负载均衡器-keepalived-nginx","children":[{"level":3,"title":"安装与配置keepalived","slug":"安装与配置keepalived-1","link":"#安装与配置keepalived-1","children":[]},{"level":3,"title":"安装与配置nginx","slug":"安装与配置nginx","link":"#安装与配置nginx","children":[]}]}],"git":{"createdTime":1715436378000,"updatedTime":1715436378000,"contributors":[{"name":"ableit","email":"ychenid@live.com","commits":1}]},"readingTime":{"minutes":7.75,"words":2324},"filePathRelative":"guide/cloudnative/kubernetes/ha-loadbanlance.md","localizedDate":"2024年5月11日","autoDesc":true,"excerpt":"<h2>负载均衡器(kube-vip)</h2>\\n<p>为 kube-apiserver 创建负载均衡器, 更多参考<a href=\\"https://github.com/kubernetes/kubeadm/blob/main/docs/ha-considerations.md#options-for-software-load-balancing\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">官方文档</a>。</p>\\n<p>keepalived作为和的更“传统”方法的替代方案haproxy，kube-vip在一个服务中实现了虚拟 IP 的管理和负载均衡。它可以在第 2 层（使用 ARP 和leaderElection）或利用 BGP 对等互连的第 3 层中实现。与上面的选项 2 类似，kube-vip将作为静态 Pod 在控制平面节点上运行。</p>"}');export{H as comp,U as data};
