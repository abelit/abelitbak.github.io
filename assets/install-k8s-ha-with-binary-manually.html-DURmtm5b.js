import{_ as d}from"./kubeadm-ha-topology-stacked-etcd-gm1W9Ku6.js";import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as u,c as v,b as l,w as n,a as e,f as t,d as s}from"./app-DR5J2daJ.js";const b={},k=t('<h2 id="kubernetes高可用架构" tabindex="-1"><a class="header-anchor" href="#kubernetes高可用架构"><span>Kubernetes高可用架构</span></a></h2><ul><li>堆叠（Stacked）etcd拓扑 <img src="'+d+`" alt="堆叠（Stacked）etcd 拓扑" loading="lazy"></li></ul><h2 id="kubernetes-节点规划" tabindex="-1"><a class="header-anchor" href="#kubernetes-节点规划"><span>Kubernetes 节点规划</span></a></h2><table><thead><tr><th>主机名称</th><th>IP 地址</th><th>用途</th><th>组件</th><th>版本</th></tr></thead><tbody><tr><td>k8s-master01</td><td>10.10.12.210,10.10.12.235(vip)</td><td>master 节点</td><td>kube-apiserver,kube-scheduler,etcd,kube-controller-manager,kubectl,kubelet,kubeadm,keepalive,nginx</td><td>v1.28.2</td></tr><tr><td>k8s-master02</td><td>10.10.12.211,10.10.12.235(vip)</td><td>master 节点</td><td>kube-apiserver,kube-scheduler,etcd,kube-controller-manager,kubectl,kubelet,kubeadm,keepalive,nginx</td><td>v1.28.2</td></tr><tr><td>k8s-master03</td><td>10.10.12.212,10.10.12.235(vip)</td><td>master 节点</td><td>kube-apiserver,kube-scheduler,etcd,kube-controller-manager,kubectl,kubelet,kubeadm,keepalive,nginx</td><td>v1.28.2</td></tr><tr><td>k8s-worker01</td><td>10.10.12.213</td><td>worker 节点</td><td>kube-proxy,kubelet,kubeadm</td><td>v1.28.2</td></tr><tr><td>k8s-worker02</td><td>10.10.12.214</td><td>worker 节点</td><td>kube-proxy,kubelet,kubeadm</td><td>v1.28.2</td></tr></tbody></table><h2 id="环境准备" tabindex="-1"><a class="header-anchor" href="#环境准备"><span>环境准备</span></a></h2><h3 id="配置主机名称" tabindex="-1"><a class="header-anchor" href="#配置主机名称"><span>配置主机名称</span></a></h3><blockquote><p>master 节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>hostnamectl set-hostname k8s-master01

hostnamectl set-hostname k8s-master02

hostnamectl set-hostname k8s-master03
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>worker 节点: k8s-worker01</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>hostnamectl set-hostname k8s-worker01
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>worker 节点: k8s-worker02</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>hostnamectl set-hostname k8s-worker02
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="配置-hosts" tabindex="-1"><a class="header-anchor" href="#配置-hosts"><span>配置 hosts</span></a></h3><blockquote><p>master 节点+worker 节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /root/k8s-workspace

<span class="token function">cat</span> <span class="token operator">&gt;&gt;</span> /etc/hosts <span class="token operator">&lt;&lt;</span><span class="token string">EOF
10.10.12.235 lb-k8s-master
10.10.12.210 k8s-master01
10.10.12.211 k8s-master02
10.10.12.212 k8s-master03
10.10.12.213 k8s-worker01
10.10.12.214 k8s-worker02
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="关闭-selinux-和防火墙" tabindex="-1"><a class="header-anchor" href="#关闭-selinux-和防火墙"><span>关闭 selinux 和防火墙</span></a></h3><blockquote><p>master 节点+worker 节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/^SELINUX=enforcing/SELINUX=disabled/g&#39;</span> /etc/selinux/config
setenforce <span class="token number">0</span>
sestatus

systemctl stop firewalld.service
systemctl disable firewalld.service
firewall-cmd <span class="token parameter variable">--state</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="关闭-swap" tabindex="-1"><a class="header-anchor" href="#关闭-swap"><span>关闭 swap</span></a></h3><blockquote><p>master 节点+worker 节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/.*swap.*/#&amp;/&#39;</span> /etc/fstab
swapoff <span class="token parameter variable">-a</span>
<span class="token function">free</span> <span class="token parameter variable">-m</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="节点间免密登录-可选" tabindex="-1"><a class="header-anchor" href="#节点间免密登录-可选"><span>节点间免密登录（可选）</span></a></h3><blockquote><p>master 节点+worker 节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-N</span> <span class="token string">&#39;&#39;</span> <span class="token parameter variable">-f</span> ~/.ssh/id_rsa <span class="token operator">&lt;&lt;&lt;</span> y
sshpass <span class="token parameter variable">-p</span> <span class="token string">&quot;root@123&quot;</span> ssh-copy-id <span class="token parameter variable">-o</span> <span class="token assign-left variable">StrictHostKeyChecking</span><span class="token operator">=</span>no root@k8s-master01
sshpass <span class="token parameter variable">-p</span> <span class="token string">&quot;root@123&quot;</span> ssh-copy-id <span class="token parameter variable">-o</span> <span class="token assign-left variable">StrictHostKeyChecking</span><span class="token operator">=</span>no root@k8s-master02
sshpass <span class="token parameter variable">-p</span> <span class="token string">&quot;root@123&quot;</span> ssh-copy-id <span class="token parameter variable">-o</span> <span class="token assign-left variable">StrictHostKeyChecking</span><span class="token operator">=</span>no root@k8s-master03
sshpass <span class="token parameter variable">-p</span> <span class="token string">&quot;root@123&quot;</span> ssh-copy-id <span class="token parameter variable">-o</span> <span class="token assign-left variable">StrictHostKeyChecking</span><span class="token operator">=</span>no root@k8s-worker01
sshpass <span class="token parameter variable">-p</span> <span class="token string">&quot;root@123&quot;</span> ssh-copy-id <span class="token parameter variable">-o</span> <span class="token assign-left variable">StrictHostKeyChecking</span><span class="token operator">=</span>no root@k8s-worker02
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="内核升级-可选" tabindex="-1"><a class="header-anchor" href="#内核升级-可选"><span>内核升级（可选）</span></a></h3>`,25),m=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"# Ubuntu忽略，CentOS执行"),s(`
 
`),e("span",{class:"token comment"},"# 安装最新的内核"),s(`
`),e("span",{class:"token comment"},"# 我这里选择的是稳定版kernel-ml   如需更新长期维护版本kernel-lt  "),s(`
yum `),e("span",{class:"token parameter variable"},"-y"),s(),e("span",{class:"token parameter variable"},"--enablerepo"),e("span",{class:"token operator"},"="),s("elrepo-kernel  "),e("span",{class:"token function"},"install"),s(`  kernel-ml
 
`),e("span",{class:"token comment"},"# 查看已安装那些内核"),s(`
`),e("span",{class:"token function"},"rpm"),s(),e("span",{class:"token parameter variable"},"-qa"),s(),e("span",{class:"token operator"},"|"),s(),e("span",{class:"token function"},"grep"),s(` kernel
 
`),e("span",{class:"token comment"},"# 查看默认内核"),s(`
grubby --default-kernel
 
`),e("span",{class:"token comment"},"# 若不是最新的使用命令设置"),s(`
grubby --set-default `),e("span",{class:"token variable"},[e("span",{class:"token variable"},"$("),e("span",{class:"token function"},"ls"),s(" /boot/vmlinuz-* "),e("span",{class:"token operator"},"|"),s(),e("span",{class:"token function"},"grep"),s(" elrepo"),e("span",{class:"token variable"},")")]),s(`
 
`),e("span",{class:"token comment"},"# 重启生效"),s(`
`),e("span",{class:"token function"},"reboot"),s(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),h=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"# 离线版本 "),s(`
yum `),e("span",{class:"token function"},"install"),s(),e("span",{class:"token parameter variable"},"-y"),s(` /root/cby/kernel-lt-*-1.el7.elrepo.x86_64.rpm 
grubby --set-default `),e("span",{class:"token variable"},[e("span",{class:"token variable"},"$("),e("span",{class:"token function"},"ls"),s(" /boot/vmlinuz-* "),e("span",{class:"token operator"},"|"),s(),e("span",{class:"token function"},"grep"),s(" elrepo"),e("span",{class:"token variable"},")")]),s(` 
grubby --default-kernel 
`),e("span",{class:"token function"},"reboot"),s(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),g=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"# v7 整合命令为："),s(`
yum `),e("span",{class:"token function"},"install"),s(" https://www.elrepo.org/elrepo-release-7.el7.elrepo.noarch.rpm "),e("span",{class:"token parameter variable"},"-y"),s(` 
`),e("span",{class:"token function"},"sed"),s(),e("span",{class:"token parameter variable"},"-i"),s(),e("span",{class:"token string"},'"s@mirrorlist@#mirrorlist@g"'),s(` /etc/yum.repos.d/elrepo.repo 
`),e("span",{class:"token function"},"sed"),s(),e("span",{class:"token parameter variable"},"-i"),s(),e("span",{class:"token string"},'"s@elrepo.org/linux@mirrors.tuna.tsinghua.edu.cn/elrepo@g"'),s(` /etc/yum.repos.d/elrepo.repo 
yum  `),e("span",{class:"token parameter variable"},"--disablerepo"),e("span",{class:"token operator"},"="),e("span",{class:"token string"},'"*"'),s("  "),e("span",{class:"token parameter variable"},"--enablerepo"),e("span",{class:"token operator"},"="),e("span",{class:"token string"},'"elrepo-kernel"'),s("  list  available "),e("span",{class:"token parameter variable"},"-y"),s(` 
yum  `),e("span",{class:"token parameter variable"},"--enablerepo"),e("span",{class:"token operator"},"="),s("elrepo-kernel  "),e("span",{class:"token function"},"install"),s("  kernel-lt "),e("span",{class:"token parameter variable"},"-y"),s(` 
grubby --set-default `),e("span",{class:"token variable"},[e("span",{class:"token variable"},"$("),e("span",{class:"token function"},"ls"),s(" /boot/vmlinuz-* "),e("span",{class:"token operator"},"|"),s(),e("span",{class:"token function"},"grep"),s(" elrepo"),e("span",{class:"token variable"},")")]),s(` 
grubby --default-kernel 
`),e("span",{class:"token function"},"reboot"),s(` 
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),f=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"# v8 整合命令为："),s(`
yum `),e("span",{class:"token function"},"install"),s(" https://www.elrepo.org/elrepo-release-8.el8.elrepo.noarch.rpm "),e("span",{class:"token parameter variable"},"-y"),s(` 
`),e("span",{class:"token function"},"sed"),s(),e("span",{class:"token parameter variable"},"-i"),s(),e("span",{class:"token string"},'"s@mirrorlist@#mirrorlist@g"'),s(` /etc/yum.repos.d/elrepo.repo
`),e("span",{class:"token function"},"sed"),s(),e("span",{class:"token parameter variable"},"-i"),s(),e("span",{class:"token string"},'"s@elrepo.org/linux@mirrors.tuna.tsinghua.edu.cn/elrepo@g"'),s(` /etc/yum.repos.d/elrepo.repo
yum  `),e("span",{class:"token parameter variable"},"--disablerepo"),e("span",{class:"token operator"},"="),e("span",{class:"token string"},'"*"'),s("  "),e("span",{class:"token parameter variable"},"--enablerepo"),e("span",{class:"token operator"},"="),e("span",{class:"token string"},'"elrepo-kernel"'),s("  list  available "),e("span",{class:"token parameter variable"},"-y"),s(`
yum  `),e("span",{class:"token parameter variable"},"--enablerepo"),e("span",{class:"token operator"},"="),s("elrepo-kernel  "),e("span",{class:"token function"},"install"),s(" kernel-lt "),e("span",{class:"token parameter variable"},"-y"),s(` 
grubby --default-kernel
`),e("span",{class:"token function"},"reboot"),s(` 
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),q=t(`<h3 id="内核参数设置" tabindex="-1"><a class="header-anchor" href="#内核参数设置"><span>内核参数设置</span></a></h3><blockquote><p>master 节点+worker 节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">|</span> <span class="token function">tee</span> /etc/sysctl.d/kubernetes.conf</span>
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
net.ipv4.ip_forward = 1
user.max_user_namespaces=28633
vm.swappiness=0
EOF</span>

<span class="token function">sysctl</span> <span class="token parameter variable">-p</span> /etc/sysctl.d/kubernetes.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="网桥配置" tabindex="-1"><a class="header-anchor" href="#网桥配置"><span>网桥配置</span></a></h3><p>转发 IPv4 并让 iptables 看到桥接流量</p><blockquote><p>master 节点+worker 节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&lt;&lt;</span> <span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">|</span> <span class="token function">tee</span> /etc/modules-load.d/containerd.conf</span>
overlay
br_netfilter
EOF</span>

modprobe overlay
modprobe br_netfilter

lsmod <span class="token operator">|</span> <span class="token function">grep</span> overlay
lsmod <span class="token operator">|</span> <span class="token function">grep</span> br_netfilter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置-ipset-与-ipvsaddm" tabindex="-1"><a class="header-anchor" href="#配置-ipset-与-ipvsaddm"><span>配置 ipset 与 ipvsaddm</span></a></h3><blockquote><p>master 节点+worker 节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 安装依赖</span>
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> ipset ipvsadm

<span class="token comment">#配置ipvsadm模块加载方式.添加需要加载的模块</span>
<span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">|</span> <span class="token function">tee</span> /etc/sysconfig/modules/ipvs.module</span>
modprobe -- ip_vs
modprobe -- ip_vs_sh
modprobe -- ip_vs_rr
modprobe -- ip_vs_wrr
modprobe -- nf_conntrack
EOF</span>

<span class="token comment"># 授权、运行、检查是否加载</span>
<span class="token function">chmod</span> <span class="token number">755</span> /etc/sysconfig/modules/ipvs.module
/etc/sysconfig/modules/ipvs.module
lsmod <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-e</span> ip_vs <span class="token parameter variable">-e</span> nf_conntrack
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="时钟同步" tabindex="-1"><a class="header-anchor" href="#时钟同步"><span>时钟同步</span></a></h3><ul><li>服务端</li></ul><blockquote><p>在时间服务器上10.10.12.100</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># apt install chrony -y</span>
yum <span class="token function">install</span> chrony <span class="token parameter variable">-y</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/chrony.conf <span class="token operator">&lt;&lt;</span> <span class="token string">EOF 
pool ntp.aliyun.com iburst
driftfile /var/lib/chrony/drift
makestep 1.0 3
rtcsync
allow 10.10.12.0/24
local stratum 10
keyfile /etc/chrony.keys
leapsectz right/UTC
logdir /var/log/chrony
EOF</span>
 
systemctl restart chronyd
systemctl <span class="token builtin class-name">enable</span> chronyd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>客户端</li></ul><blockquote><p>master+worker节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 客户端</span>
<span class="token comment"># apt install chrony -y</span>
yum <span class="token function">install</span> chrony <span class="token parameter variable">-y</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/chrony.conf <span class="token operator">&lt;&lt;</span> <span class="token string">EOF 
pool 10.10.12.100 iburst
driftfile /var/lib/chrony/drift
makestep 1.0 3
rtcsync
keyfile /etc/chrony.keys
leapsectz right/UTC
logdir /var/log/chrony
EOF</span>
 
systemctl restart chronyd
systemctl <span class="token builtin class-name">enable</span> chronyd
 
<span class="token comment">#使用客户端进行验证</span>
chronyc sources <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">参数说明</p><p># pool ntp.aliyun.com iburst # 指定使用ntp.aliyun.com作为时间服务器池，iburst选项表示在初始同步时会发送多个请求以加快同步速度。 #  # driftfile /var/lib/chrony/drift # 指定用于保存时钟漂移信息的文件路径。 #  # makestep 1.0 3 # 设置当系统时间与服务器时间偏差大于1秒时，会以1秒的步长进行调整。如果偏差超过3秒，则立即进行时间调整。 #  # rtcsync # 启用硬件时钟同步功能，可以提高时钟的准确性。 #  # allow 192.168.0.0/24 # 允许192.168.0.0/24网段范围内的主机与chrony进行时间同步。 #  # local stratum 10 # 将本地时钟设为stratum 10，stratum值表示时钟的准确度，值越小表示准确度越高。 #  # keyfile /etc/chrony.keys # 指定使用的密钥文件路径，用于对时间同步进行身份验证。 #  # leapsectz right/UTC # 指定时区为UTC。 #  # logdir /var/log/chrony # 指定日志文件存放目录。</p></div><h2 id="容器运行时" tabindex="-1"><a class="header-anchor" href="#容器运行时"><span>容器运行时</span></a></h2><h3 id="cgoup-驱动" tabindex="-1"><a class="header-anchor" href="#cgoup-驱动"><span>cgoup 驱动</span></a></h3><p>为了实现 docker 使用的 cgroupdriver 与 kubelet 使用的 cgroup 的一致性，建议修改如下文件内容。</p><blockquote><p>master 节点+worker 节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;</span> /etc/sysconfig/kubelet</span>
KUBELET_EXTRA_ARGS=&quot;--cgroup-driver=systemd&quot;
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker-engine" tabindex="-1"><a class="header-anchor" href="#docker-engine"><span>Docker Engine</span></a></h3><blockquote><p>master 节点+worker 节点</p></blockquote><h4 id="安装-docker-engine" tabindex="-1"><a class="header-anchor" href="#安装-docker-engine"><span>安装 Docker Engine</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils device-mapper-persistent-data lvm2 <span class="token function">wget</span>
<span class="token function">wget</span>  <span class="token parameter variable">-O</span> /etc/yum.repos.d/docker-ce.repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
<span class="token comment"># yum list docker-ce --showduplicates | sort -r</span>
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> docker-ce

<span class="token comment"># 容器镜像加速</span>
<span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">|</span> <span class="token function">tee</span> /etc/docker/daemon.json</span>
{
    &quot;registry-mirrors&quot;: [
      &quot;https://uwtwp6l0.mirror.aliyuncs.com&quot;,
      &quot;https://registry.cn-hangzhou.aliyuncs.com&quot;,
      &quot;https://docker.mirrors.ustc.edu.cn&quot;,
      &quot;http://hub-mirror.c.163.com&quot;
    ],
    &quot;exec-opts&quot;: [&quot;native.cgroupdriver=systemd&quot;]
}
EOF</span>

<span class="token comment"># 启动</span>
systemctl <span class="token builtin class-name">enable</span> <span class="token parameter variable">--now</span> docker.service
systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="安装-cri-dockerd" tabindex="-1"><a class="header-anchor" href="#安装-cri-dockerd"><span>安装 cri-dockerd</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">wget</span> <span class="token parameter variable">-O</span> cri-dockerd-0.3.1.amd64.tgz <span class="token string">&quot;https://github.com/Mirantis/cri-dockerd/releases/download/v0.3.1/cri-dockerd-0.3.1.amd64.tgz&quot;</span>

<span class="token function">tar</span> <span class="token parameter variable">-xf</span> cri-dockerd-0.3.1.amd64.tgz
<span class="token function">cp</span> cri-dockerd/cri-dockerd /usr/bin/
<span class="token function">chmod</span> +x /usr/bin/cri-dockerd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="配置-cri-dockerd-启动文件" tabindex="-1"><a class="header-anchor" href="#配置-cri-dockerd-启动文件"><span>配置 cri-dockerd 启动文件</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;</span> /usr/lib/systemd/system/cri-docker.service</span>
[Unit]
Description=CRI Interface for Docker Application Container Engine
Documentation=https://docs.mirantis.com
After=network-online.target firewalld.service docker.service
Wants=network-online.target
Requires=cri-docker.socket

[Service]
Type=notify

ExecStart=/usr/bin/cri-dockerd --network-plugin=cni --pod-infra-container-image=registry.aliyuncs.com/google_containers/pause:3.9

ExecReload=/bin/kill -s HUP <span class="token variable">$MAINPID</span>
TimeoutSec=0
RestartSec=2
Restart=always

StartLimitBurst=3

StartLimitInterval=60s

LimitNOFILE=infinity
LimitNPROC=infinity
LimitCORE=infinity

TasksMax=infinity
Delegate=yes
KillMode=process

[Install]
WantedBy=multi-user.target
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="生成-cri-dockerd-的-socket-文件" tabindex="-1"><a class="header-anchor" href="#生成-cri-dockerd-的-socket-文件"><span>生成 cri-dockerd 的 socket 文件</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;</span> /usr/lib/systemd/system/cri-docker.socket</span>
[Unit]
Description=CRI Docker Socket for the API
PartOf=cri-docker.service

[Socket]
ListenStream=%t/cri-dockerd.sock
SocketMode=0660
SocketUser=root
SocketGroup=docker

[Install]
WantedBy=sockets.target
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="启动-cri-docker-并设置开机自动启动" tabindex="-1"><a class="header-anchor" href="#启动-cri-docker-并设置开机自动启动"><span>启动 cri-docker 并设置开机自动启动</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl daemon-reload
systemctl <span class="token builtin class-name">enable</span> cri-docker <span class="token parameter variable">--now</span>
systemctl is-active cri-docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cotainerd" tabindex="-1"><a class="header-anchor" href="#cotainerd"><span>Cotainerd</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils device-mapper-persistent-data lvm2 <span class="token function">wget</span>
<span class="token function">wget</span>  <span class="token parameter variable">-O</span> /etc/yum.repos.d/docker-ce.repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo

yum <span class="token function">install</span> <span class="token parameter variable">-y</span> containerd.io

<span class="token function">sudo</span> <span class="token function">mv</span> /etc/containerd/config.toml /etc/containerd/config.toml.bak
containerd config default <span class="token operator">&gt;</span> /etc/containerd/config.toml
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/SystemdCgroup = false/SystemdCgroup = true/g&#39;</span> /etc/containerd/config.toml
<span class="token function">grep</span> SystemdCgroup /etc/containerd/config.toml
<span class="token function">sudo</span> systemctl restart containerd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">更改沙箱镜像</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s#sandbox_image = &quot;registry.k8s.io/pause:3.9&quot;#sandbox_image = &quot;registry.aliyuncs.com/google_containers/pause:3.9&quot;#g&#39;</span> /etc/containerd/config.toml
<span class="token function">grep</span> <span class="token string">&#39;sandbox_image&#39;</span> /etc/containerd/config.toml

systemctl daemon-reload
systemctl <span class="token builtin class-name">enable</span> containerd
systemctl restart containerd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="cri-o" tabindex="-1"><a class="header-anchor" href="#cri-o"><span>CRI-O</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">OS</span><span class="token operator">=</span>CentOS_7
<span class="token builtin class-name">export</span> <span class="token assign-left variable">VERSION</span><span class="token operator">=</span><span class="token number">1.24</span>.4
<span class="token function">curl</span> <span class="token parameter variable">-L</span> <span class="token parameter variable">-o</span> /etc/yum.repos.d/devel:kubic:libcontainers:stable.repo https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable/<span class="token variable">$OS</span>/devel:kubic:libcontainers:stable.repo
<span class="token comment"># curl -L -o /etc/yum.repos.d/devel:kubic:libcontainers:stable:cri-o:$VERSION.repo https://download.opensuse.org/repositories/devel:kubic:libcontainers:stable:cri-o:$VERSION/$OS/devel:kubic:libcontainers:stable:cri-o:$VERSION.repo</span>

<span class="token function">curl</span> <span class="token parameter variable">-L</span> <span class="token parameter variable">-o</span> /etc/yum.repos.d/devel:kubic:libcontainers:stable:cri-o:1.24.4.repo https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable:/cri-o:/1.24:/1.24.4/CentOS_7/devel:kubic:libcontainers:stable:cri-o:1.24:1.24.4.repo

yum <span class="token function">install</span> <span class="token parameter variable">-y</span> cri-o

systemctl <span class="token builtin class-name">enable</span> crio.service
systemctl start crio.service

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">更改沙箱镜像</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/# pause_image = &quot;registry.k8s.io\\/pause:3.9&quot;/pause_image = &quot;registry.aliyuncs.com\\/google_containers\\/pause:3.9&quot;/g&#39;</span> /etc/crio/crio.conf
<span class="token function">grep</span> pause_image /etc/crio/crio.conf

systemctl daemon-reload
systemctl restart crio.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h2 id="下载软件包-可选" tabindex="-1"><a class="header-anchor" href="#下载软件包-可选"><span>下载软件包（可选）</span></a></h2><ul><li><code>download_packages.sh</code></li></ul><blockquote><p>在管理主机上下载，在分别根据需要上传到master或worker节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment"># 查看版本地址：</span>
<span class="token comment"># </span>
<span class="token comment"># https://github.com/containernetworking/plugins/releases/</span>
<span class="token comment"># https://github.com/containerd/containerd/releases/</span>
<span class="token comment"># https://github.com/kubernetes-sigs/cri-tools/releases/</span>
<span class="token comment"># https://github.com/Mirantis/cri-dockerd/releases/</span>
<span class="token comment"># https://github.com/etcd-io/etcd/releases/</span>
<span class="token comment"># https://github.com/cloudflare/cfssl/releases/</span>
<span class="token comment"># https://github.com/kubernetes/kubernetes/tree/master/CHANGELOG</span>
<span class="token comment"># https://download.docker.com/linux/static/stable/x86_64/</span>
<span class="token comment"># https://github.com/opencontainers/runc/releases/</span>
<span class="token comment"># https://mirrors.tuna.tsinghua.edu.cn/elrepo/kernel/el7/x86_64/RPMS/</span>
<span class="token comment"># https://github.com/helm/helm/tags</span>
<span class="token comment"># http://nginx.org/download/</span>

<span class="token comment"># Version numbers</span>
<span class="token assign-left variable">cni_plugins_version</span><span class="token operator">=</span><span class="token string">&#39;v1.3.0&#39;</span>
<span class="token assign-left variable">cri_containerd_cni_version</span><span class="token operator">=</span><span class="token string">&#39;1.7.3&#39;</span>
<span class="token assign-left variable">crictl_version</span><span class="token operator">=</span><span class="token string">&#39;v1.28.0&#39;</span>
<span class="token assign-left variable">cri_dockerd_version</span><span class="token operator">=</span><span class="token string">&#39;0.3.4&#39;</span>
<span class="token assign-left variable">etcd_version</span><span class="token operator">=</span><span class="token string">&#39;v3.5.9&#39;</span>
<span class="token assign-left variable">cfssl_version</span><span class="token operator">=</span><span class="token string">&#39;1.6.4&#39;</span>
<span class="token assign-left variable">kubernetes_server_version</span><span class="token operator">=</span><span class="token string">&#39;1.28.0&#39;</span>
<span class="token assign-left variable">docker_version</span><span class="token operator">=</span><span class="token string">&#39;24.0.5&#39;</span>
<span class="token assign-left variable">runc_version</span><span class="token operator">=</span><span class="token string">&#39;1.1.9&#39;</span>
<span class="token assign-left variable">kernel_version</span><span class="token operator">=</span><span class="token string">&#39;5.4.254&#39;</span>
<span class="token assign-left variable">helm_version</span><span class="token operator">=</span><span class="token string">&#39;3.12.3&#39;</span>
<span class="token assign-left variable">nginx_version</span><span class="token operator">=</span><span class="token string">&#39;1.25.2&#39;</span>

<span class="token comment"># URLs </span>
<span class="token assign-left variable">base_url</span><span class="token operator">=</span><span class="token string">&#39;https://ghproxy.com/https://github.com&#39;</span>
<span class="token assign-left variable">kernel_url</span><span class="token operator">=</span><span class="token string">&quot;http://mirrors.tuna.tsinghua.edu.cn/elrepo/kernel/el7/x86_64/RPMS/kernel-lt-<span class="token variable">\${kernel_version}</span>-1.el7.elrepo.x86_64.rpm&quot;</span>
<span class="token assign-left variable">runc_url</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${base_url}</span>/opencontainers/runc/releases/download/v<span class="token variable">\${runc_version}</span>/runc.amd64&quot;</span>
<span class="token assign-left variable">docker_url</span><span class="token operator">=</span><span class="token string">&quot;https://download.docker.com/linux/static/stable/x86_64/docker-<span class="token variable">\${docker_version}</span>.tgz&quot;</span>
<span class="token assign-left variable">cni_plugins_url</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${base_url}</span>/containernetworking/plugins/releases/download/<span class="token variable">\${cni_plugins_version}</span>/cni-plugins-linux-amd64-<span class="token variable">\${cni_plugins_version}</span>.tgz&quot;</span>
<span class="token assign-left variable">cri_containerd_cni_url</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${base_url}</span>/containerd/containerd/releases/download/v<span class="token variable">\${cri_containerd_cni_version}</span>/cri-containerd-cni-<span class="token variable">\${cri_containerd_cni_version}</span>-linux-amd64.tar.gz&quot;</span>
<span class="token assign-left variable">crictl_url</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${base_url}</span>/kubernetes-sigs/cri-tools/releases/download/<span class="token variable">\${crictl_version}</span>/crictl-<span class="token variable">\${crictl_version}</span>-linux-amd64.tar.gz&quot;</span>
<span class="token assign-left variable">cri_dockerd_url</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${base_url}</span>/Mirantis/cri-dockerd/releases/download/v<span class="token variable">\${cri_dockerd_version}</span>/cri-dockerd-<span class="token variable">\${cri_dockerd_version}</span>.amd64.tgz&quot;</span>
<span class="token assign-left variable">etcd_url</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${base_url}</span>/etcd-io/etcd/releases/download/<span class="token variable">\${etcd_version}</span>/etcd-<span class="token variable">\${etcd_version}</span>-linux-amd64.tar.gz&quot;</span>
<span class="token assign-left variable">cfssl_url</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${base_url}</span>/cloudflare/cfssl/releases/download/v<span class="token variable">\${cfssl_version}</span>/cfssl_<span class="token variable">\${cfssl_version}</span>_linux_amd64&quot;</span>
<span class="token assign-left variable">cfssljson_url</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${base_url}</span>/cloudflare/cfssl/releases/download/v<span class="token variable">\${cfssl_version}</span>/cfssljson_<span class="token variable">\${cfssl_version}</span>_linux_amd64&quot;</span>
<span class="token assign-left variable">cfsslcertinfo_url</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${base_url}</span>/cloudflare/cfssl/releases/download/v<span class="token variable">\${cfssl_version}</span>/cfssl-certinfo_<span class="token variable">\${cfssl_version}</span>_linux_amd64&quot;</span>
<span class="token assign-left variable">helm_url</span><span class="token operator">=</span><span class="token string">&quot;https://mirrors.huaweicloud.com/helm/v<span class="token variable">\${helm_version}</span>/helm-v<span class="token variable">\${helm_version}</span>-linux-amd64.tar.gz&quot;</span>
<span class="token assign-left variable">kubernetes_server_url</span><span class="token operator">=</span><span class="token string">&quot;https://storage.googleapis.com/kubernetes-release/release/v<span class="token variable">\${kubernetes_server_version}</span>/kubernetes-server-linux-amd64.tar.gz&quot;</span>
<span class="token assign-left variable">nginx_url</span><span class="token operator">=</span><span class="token string">&quot;http://nginx.org/download/nginx-<span class="token variable">\${nginx_version}</span>.tar.gz&quot;</span>

<span class="token comment"># Download packages</span>
<span class="token assign-left variable">packages</span><span class="token operator">=</span><span class="token punctuation">(</span>
  <span class="token variable">$kernel_url</span>
  <span class="token variable">$runc_url</span>
  <span class="token variable">$docker_url</span>
  <span class="token variable">$cni_plugins_url</span>
  <span class="token variable">$cri_containerd_cni_url</span>
  <span class="token variable">$crictl_url</span>
  <span class="token variable">$cri_dockerd_url</span>
  <span class="token variable">$etcd_url</span>
  <span class="token variable">$cfssl_url</span>
  <span class="token variable">$cfssljson_url</span>
  <span class="token variable">$helm_url</span>
  <span class="token variable">$kubernetes_server_url</span>
  <span class="token variable">$nginx_url</span>
<span class="token punctuation">)</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">package_url</span> <span class="token keyword">in</span> <span class="token string">&quot;<span class="token variable">\${packages<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>&quot;</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
  <span class="token assign-left variable">filename</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">basename</span> <span class="token string">&quot;<span class="token variable">$package_url</span>&quot;</span><span class="token variable">)</span></span>
  <span class="token keyword">if</span> <span class="token function">curl</span> <span class="token parameter variable">--parallel</span> --parallel-immediate <span class="token parameter variable">-k</span> <span class="token parameter variable">-L</span> <span class="token parameter variable">-C</span> - <span class="token parameter variable">-o</span> <span class="token string">&quot;<span class="token variable">$filename</span>&quot;</span> <span class="token string">&quot;<span class="token variable">$package_url</span>&quot;</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Downloaded <span class="token variable">$filename</span>&quot;</span>
  <span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Failed to download <span class="token variable">$filename</span>&quot;</span>
    <span class="token builtin class-name">exit</span> <span class="token number">1</span>
  <span class="token keyword">fi</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装自签证书" tabindex="-1"><a class="header-anchor" href="#安装自签证书"><span>安装自签证书</span></a></h2><blockquote><p>在k8s-master01节点上</p></blockquote><h3 id="安装cfssl" tabindex="-1"><a class="header-anchor" href="#安装cfssl"><span>安装cfssl</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /root/k8s-workspace

<span class="token function">wget</span> https://github.com/cloudflare/cfssl/releases/download/v1.6.4/cfssl_1.6.4_linux_amd64 
<span class="token function">wget</span> https://github.com/cloudflare/cfssl/releases/download/v1.6.4/cfssljson_1.6.4_linux_amd64  
<span class="token function">wget</span> https://github.com/cloudflare/cfssl/releases/download/v1.6.4/cfssl-certinfo_1.6.4_linux_amd64  

<span class="token function">cp</span> <span class="token parameter variable">-p</span> cfssl_1.6.4_linux_amd64 /usr/local/bin/cfssl
<span class="token function">cp</span> <span class="token parameter variable">-p</span> cfssljson_1.6.4_linux_amd64  /usr/local/bin/cfssljson 
<span class="token function">cp</span> <span class="token parameter variable">-p</span> cfssl-certinfo_1.6.4_linux_amd64  /usr/local/bin/cfssl-certinfo

<span class="token function">chmod</span> +x /usr/local/bin/cfssl*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="根证书配置文件" tabindex="-1"><a class="header-anchor" href="#根证书配置文件"><span>根证书配置文件</span></a></h3><blockquote><p>在k8s-master01节点上</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /root/k8s-workspace

<span class="token function">cat</span> <span class="token operator">&gt;</span> ca-config.json <span class="token operator">&lt;&lt;</span> <span class="token string">&#39;EOF&#39;
{
  &quot;signing&quot;: {
    &quot;default&quot;: {
      &quot;expiry&quot;: &quot;876000h&quot;
    },
    &quot;profiles&quot;: {
      &quot;kubernetes&quot;: {
        &quot;usages&quot;: [
          &quot;signing&quot;, 
          &quot;key encipherment&quot;, 
          &quot;server auth&quot;, 
          &quot;client auth&quot;
        ],
        &quot;expiry&quot;: &quot;876000h&quot;
      }
    }
  }
}
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">参数说明</p><p>这段配置文件是用于配置加密和认证签名的一些参数。</p><p>在这里，有两个部分：<code>signing</code>和<code>profiles</code>。</p><p><code>signing</code>包含了默认签名配置和配置文件。 默认签名配置<code>default</code>指定了证书的过期时间为<code>876000h</code>。<code>876000h</code>表示证书有效期为100年。</p><p><code>profiles</code>部分定义了不同的证书配置文件。 在这里，只有一个配置文件<code>kubernetes</code>。它包含了以下<code>usages</code>和过期时间<code>expiry</code>：</p><ol><li><code>signing</code>：用于对其他证书进行签名</li><li><code>key encipherment</code>：用于加密和解密传输数据</li><li><code>server auth</code>：用于服务器身份验证</li><li><code>client auth</code>：用于客户端身份验证</li></ol><p>对于<code>kubernetes</code>配置文件，证书的过期时间也是<code>876000h</code>，即100年。</p></div><h2 id="负载均衡器" tabindex="-1"><a class="header-anchor" href="#负载均衡器"><span>负载均衡器</span></a></h2>`,54),y=t(`<h2 id="搭建etcd集群" tabindex="-1"><a class="header-anchor" href="#搭建etcd集群"><span>搭建etcd集群</span></a></h2><h3 id="安装etcd软件" tabindex="-1"><a class="header-anchor" href="#安装etcd软件"><span>安装etcd软件</span></a></h3><blockquote><p>在所有master节点上</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /root/k8s-workspace

<span class="token function">wget</span> https://github.com/etcd-io/etcd/releases/download/v3.5.9/etcd-v3.5.9-linux-amd64.tar.gz

<span class="token function">tar</span> <span class="token parameter variable">-xf</span> etcd-v3.5.9-linux-amd64.tar.gz 

<span class="token function">mv</span> etcd-v3.5.9-linux-amd64/etcd /usr/local/bin/etcd
<span class="token function">mv</span> etcd-v3.5.9-linux-amd64/etcdctl /usr/local/bin/etcdctl
<span class="token function">mv</span> etcd-v3.5.9-linux-amd64/etcdutl /usr/local/bin/etcdutl

<span class="token function">useradd</span> <span class="token parameter variable">-s</span> /sbin/nologin  <span class="token parameter variable">-M</span> etcd

<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/etcd/ssl /var/lib/etcd /var/lib/etcd/default.etcd
<span class="token function">chown</span> <span class="token parameter variable">-R</span> etcd.etcd /etc/etcd /var/lib/etcd
<span class="token function">chmod</span> <span class="token parameter variable">-R</span> <span class="token number">755</span> /etc/etcd /var/lib/etcd

etcdctl version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="生成etcd证书" tabindex="-1"><a class="header-anchor" href="#生成etcd证书"><span>生成etcd证书</span></a></h3><ul><li>生成etcd ca证书</li></ul><blockquote><p>在k8s-master01节点上</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 生成etcd ca证书签名请求</span>
<span class="token builtin class-name">cd</span> /root/k8s-workspace

<span class="token function">cat</span> <span class="token operator">&gt;</span> etcd-ca-csr.json  <span class="token operator">&lt;&lt;</span> <span class="token string">EOF 
{
  &quot;CN&quot;: &quot;etcd&quot;,
  &quot;key&quot;: {
    &quot;algo&quot;: &quot;rsa&quot;,
    &quot;size&quot;: 2048
  },
  &quot;names&quot;: [
    {
      &quot;C&quot;: &quot;CN&quot;,
      &quot;ST&quot;: &quot;Guizhou&quot;,
      &quot;L&quot;: &quot;Guiyang&quot;,
      &quot;O&quot;: &quot;etcd&quot;,
      &quot;OU&quot;: &quot;Etcd Security&quot;
    }
  ],
  &quot;ca&quot;: {
    &quot;expiry&quot;: &quot;876000h&quot;
  }
}
EOF</span>

<span class="token comment"># 生成etcd ca证书</span>
cfssl gencert <span class="token parameter variable">-initca</span> etcd-ca-csr.json <span class="token operator">|</span> cfssljson <span class="token parameter variable">-bare</span> /etc/etcd/ssl/ca
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>生成etcd证书</li></ul><blockquote><p>在k8s-master01节点上</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /root/k8s-workspace

<span class="token comment"># 生成etcd证书请求</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> etcd-csr.json <span class="token operator">&lt;&lt;</span> <span class="token string">&#39;EOF&#39;
{
  &quot;CN&quot;: &quot;etcd&quot;,
  &quot;hosts&quot;: [
    &quot;127.0.0.1&quot;, 
    &quot;10.10.12.210&quot;, 
    &quot;10.10.12.211&quot;, 
    &quot;10.10.12.212&quot;, 
    &quot;10.10.12.235&quot;, 
    &quot;k8s-master01&quot;, 
    &quot;k8s-master02&quot;, 
    &quot;k8s-master03&quot;,
    &quot;lb-k8s-master&quot;
  ],
  &quot;key&quot;: {
    &quot;algo&quot;: &quot;rsa&quot;,
    &quot;size&quot;: 2048
  },
  &quot;names&quot;: [
    {
      &quot;C&quot;: &quot;CN&quot;,
      &quot;ST&quot;: &quot;Guizhou&quot;,
      &quot;L&quot;: &quot;Guiyang&quot;,
      &quot;O&quot;: &quot;etcd&quot;,
      &quot;OU&quot;: &quot;Etcd Security&quot;
    }
  ]
}
EOF</span>

<span class="token comment">#上述文件hosts字段中IP为所有etcd节点的集群内部通信IP，可以预留几个，做扩容用。</span>
<span class="token comment"># -profiles是指定特定的使用场景，比如ca-config.json中的kubernetes区域</span>

<span class="token comment"># 生成etcd证书</span>
cfssl gencert <span class="token punctuation">\\</span>
   <span class="token parameter variable">-ca</span><span class="token operator">=</span>/etc/etcd/ssl/ca.pem <span class="token punctuation">\\</span>
   -ca-key<span class="token operator">=</span>/etc/etcd/ssl/ca-key.pem <span class="token punctuation">\\</span>
   <span class="token parameter variable">-config</span><span class="token operator">=</span>ca-config.json <span class="token punctuation">\\</span>
   <span class="token parameter variable">-profile</span><span class="token operator">=</span>kubernetes <span class="token punctuation">\\</span>
    etcd-csr.json <span class="token operator">|</span> cfssljson <span class="token parameter variable">-bare</span> /etc/etcd/ssl/etcd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">参数说明</p><ul><li>-ca=/etc/etcd/ssl/ca.pem：指定用于签名etcd证书的CA文件的路径。</li><li>-ca-key=/etc/etcd/ssl/ca-key.pem：指定用于签名etcd证书的CA私钥文件的路径。</li><li>-config=ca-config.json：指定CA配置文件的路径，该文件定义了证书的有效期、加密算法等设置。</li><li>-hostname=xxxx：指定要为etcd生成证书的主机名和IP地址列表。如：<code>-hostname=127.0.0.1,k8s-master01,k8s-master02,k8s-master03,192.168.0.31,192.168.0.32,192.168.0.33,fc00:43f4:1eea:1::10,fc00:43f4:1eea:1::20,fc00:43f4:1eea:1::30,::1</code></li><li>-profile=kubernetes：指定使用的证书配置文件，该文件定义了证书的用途和扩展属性。</li><li>etcd-csr.json：指定etcd证书请求的JSON文件的路径，该文件包含了证书请求的详细信息。</li><li>| cfssljson -bare /etc/etcd/ssl/etcd：通过管道将cfssl命令的输出传递给cfssljson命令，并使用-bare参数指定输出文件的前缀路径，这里将生成etcd证书的.pem和-key.pem文件。</li><li>这条命令的作用是使用指定的CA证书和私钥，根据证书请求的JSON文件和配置文件生成etcd的证书文件。</li></ul></div><h4 id="复制证书" tabindex="-1"><a class="header-anchor" href="#复制证书"><span>复制证书</span></a></h4><ul><li>复制证书</li></ul><blockquote><p>在k8s-master01节点上</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">host</span> <span class="token keyword">in</span> k8s-master02 k8s-master03<span class="token punctuation">;</span> <span class="token keyword">do</span> sshpass <span class="token parameter variable">-p</span> <span class="token string">&#39;root@123&#39;</span> <span class="token function">scp</span> <span class="token parameter variable">-o</span> <span class="token assign-left variable">StrictHostKeyChecking</span><span class="token operator">=</span>no /etc/etcd/ssl/* root@<span class="token variable">\${host}</span>:/etc/etcd/ssl/ <span class="token punctuation">;</span> <span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="部署etcd集群" tabindex="-1"><a class="header-anchor" href="#部署etcd集群"><span>部署etcd集群</span></a></h3><ul><li>创建配置文件<code>/etc/etcd/etcd.conf</code></li></ul><p>k8s-master01节点:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/etcd/etcd.conf <span class="token operator">&lt;&lt;</span> <span class="token string">&#39;EOF&#39;
#[Member]
ETCD_NAME=&quot;etcd1&quot;
ETCD_DATA_DIR=&quot;/var/lib/etcd/default.etcd&quot;
ETCD_LISTEN_PEER_URLS=&quot;https://10.10.12.210:2380&quot;
ETCD_LISTEN_CLIENT_URLS=&quot;https://10.10.12.210:2379,http://127.0.0.1:2379&quot;

#[Clustering]
ETCD_INITIAL_ADVERTISE_PEER_URLS=&quot;https://10.10.12.210:2380&quot;
ETCD_ADVERTISE_CLIENT_URLS=&quot;https://10.10.12.210:2379&quot;
ETCD_INITIAL_CLUSTER=&quot;etcd1=https://10.10.12.210:2380,etcd2=https://10.10.12.211:2380,etcd3=https://10.10.12.212:2380&quot;
ETCD_INITIAL_CLUSTER_TOKEN=&quot;etcd-cluster&quot;
ETCD_INITIAL_CLUSTER_STATE=&quot;new&quot;
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>k8s-master02节点:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/etcd/etcd.conf <span class="token operator">&lt;&lt;</span> <span class="token string">&#39;EOF&#39;
#[Member]
ETCD_NAME=&quot;etcd2&quot;
ETCD_DATA_DIR=&quot;/var/lib/etcd/default.etcd&quot;
ETCD_LISTEN_PEER_URLS=&quot;https://10.10.12.211:2380&quot;
ETCD_LISTEN_CLIENT_URLS=&quot;https://10.10.12.211:2379,http://127.0.0.1:2379&quot;

#[Clustering]
ETCD_INITIAL_ADVERTISE_PEER_URLS=&quot;https://10.10.12.211:2380&quot;
ETCD_ADVERTISE_CLIENT_URLS=&quot;https://10.10.12.211:2379&quot;
ETCD_INITIAL_CLUSTER=&quot;etcd1=https://10.10.12.210:2380,etcd2=https://10.10.12.211:2380,etcd3=https://10.10.12.212:2380&quot;
ETCD_INITIAL_CLUSTER_TOKEN=&quot;etcd-cluster&quot;
ETCD_INITIAL_CLUSTER_STATE=&quot;new&quot;
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>k8s-master03节点:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/etcd/etcd.conf <span class="token operator">&lt;&lt;</span> <span class="token string">&#39;EOF&#39;
#[Member]
ETCD_NAME=&quot;etcd3&quot;
ETCD_DATA_DIR=&quot;/var/lib/etcd/default.etcd&quot;
ETCD_LISTEN_PEER_URLS=&quot;https://10.10.12.212:2380&quot;
ETCD_LISTEN_CLIENT_URLS=&quot;https://10.10.12.212:2379,http://127.0.0.1:2379&quot;

#[Clustering]
ETCD_INITIAL_ADVERTISE_PEER_URLS=&quot;https://10.10.12.212:2380&quot;
ETCD_ADVERTISE_CLIENT_URLS=&quot;https://10.10.12.212:2379&quot;
ETCD_INITIAL_CLUSTER=&quot;etcd1=https://10.10.12.210:2380,etcd2=https://10.10.12.211:2380,etcd3=https://10.10.12.212:2380&quot;
ETCD_INITIAL_CLUSTER_TOKEN=&quot;etcd-cluster&quot;
ETCD_INITIAL_CLUSTER_STATE=&quot;new&quot;
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">参数说明</p><ul><li>ETCD_NAME：节点名称，集群中唯一</li><li>ETCD_DATA_DIR：数据目录</li><li>ETCD_LISTEN_PEER_URLS：集群通信监听地址</li><li>ETCD_LISTEN_CLIENT_URLS：客户端访问监听地址</li><li>ETCD_INITIAL_ADVERTISE_PEER_URLS：集群通告地址</li><li>ETCD_ADVERTISE_CLIENT_URLS：客户端通告地址</li><li>ETCD_INITIAL_CLUSTER：集群节点地址</li><li>ETCD_INITIAL_CLUSTER_TOKEN：集群Token</li><li>ETCD_INITIAL_CLUSTER_STATE：加入集群的当前状态，new是新集群，existing表示加入已有集群</li></ul></div><ul><li>创建服务启动文件</li></ul><blockquote><p>在所有master节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> /usr/lib/systemd/system/etcd.service <span class="token operator">&lt;&lt;</span> <span class="token string">&#39;EOF&#39;
[Unit]
Description=Etcd Server
After=network.target
After=network-online.target
Wants=network-online.target

[Service]
Type=notify
User=etcd
Group=etcd
EnvironmentFile=-/etc/etcd/etcd.conf
WorkingDirectory=/var/lib/etcd/
ExecStart=/usr/local/bin/etcd \\
  --cert-file=/etc/etcd/ssl/etcd.pem \\
  --key-file=/etc/etcd/ssl/etcd-key.pem \\
  --trusted-ca-file=/etc/etcd/ssl/ca.pem \\
  --peer-cert-file=/etc/etcd/ssl/etcd.pem \\
  --peer-key-file=/etc/etcd/ssl/etcd-key.pem \\
  --peer-trusted-ca-file=/etc/etcd/ssl/ca.pem \\
  --peer-client-cert-auth \\
  --client-cert-auth
Restart=on-failure
RestartSec=5
LimitNOFILE=65536

[Install]
WantedBy=multi-user.target
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>文件权限</li></ul><blockquote><p>在所有master节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">chmod</span> <span class="token parameter variable">-R</span> <span class="token number">755</span> /etc/etcd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>启动集群</li></ul><blockquote><p>在所有master节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl daemon-reload
systemctl <span class="token builtin class-name">enable</span> <span class="token parameter variable">--now</span> etcd.service
<span class="token comment"># systemctl restart etcd.service</span>
systemctl status etcd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>集群检查</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token assign-left variable">ETCDCTL_API</span><span class="token operator">=</span><span class="token number">3</span>

etcdctl member list

etcdctl --write-out<span class="token operator">=</span>table <span class="token parameter variable">--cacert</span><span class="token operator">=</span>/etc/etcd/ssl/ca.pem <span class="token parameter variable">--cert</span><span class="token operator">=</span>/etc/etcd/ssl/etcd.pem <span class="token parameter variable">--key</span><span class="token operator">=</span>/etc/etcd/ssl/etcd-key.pem <span class="token parameter variable">--endpoints</span><span class="token operator">=</span>https://10.10.12.210:2379,https://10.10.12.211:2379,https://10.10.12.212:2379  endpoint health

etcdctl --write-out<span class="token operator">=</span>table <span class="token parameter variable">--cacert</span><span class="token operator">=</span>/etc/etcd/ssl/ca.pem <span class="token parameter variable">--cert</span><span class="token operator">=</span>/etc/etcd/ssl/etcd.pem <span class="token parameter variable">--key</span><span class="token operator">=</span>/etc/etcd/ssl/etcd-key.pem <span class="token parameter variable">--endpoints</span><span class="token operator">=</span>https://10.10.12.210:2379,https://10.10.12.211:2379,https://10.10.12.212:2379  endpoint status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装控制节点" tabindex="-1"><a class="header-anchor" href="#安装控制节点"><span>安装控制节点</span></a></h2><h3 id="安装软件" tabindex="-1"><a class="header-anchor" href="#安装软件"><span>安装软件</span></a></h3><ul><li>下载软件</li></ul><blockquote><p>在所有master节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /root/k8s-workspace

<span class="token comment"># curl -LO https://dl.k8s.io/release/v1.28.2/bin/linux/amd64/kubectl</span>
<span class="token comment"># curl -LO https://dl.k8s.io/release/v1.28.2/bin/linux/amd64/kubelet</span>
<span class="token comment"># curl -LO https://dl.k8s.io/release/v1.28.2/bin/linux/amd64/kube-scheduler</span>
<span class="token comment"># curl -LO https://dl.k8s.io/release/v1.28.2/bin/linux/amd64/kube-apiserver</span>
<span class="token comment"># curl -LO https://dl.k8s.io/release/v1.28.2/bin/linux/amd64/kube-controller-manager</span>
<span class="token comment"># curl -LO https://dl.k8s.io/release/v1.28.2/bin/linux/amd64/kube-proxy</span>

<span class="token function">wget</span> https://dl.k8s.io/v1.28.2/kubernetes-server-linux-amd64.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>安装软件</li></ul><blockquote><p>在所有master节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /root/k8s-workspace

<span class="token comment"># sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl</span>
<span class="token comment"># sudo install -o root -g root -m 0755 kubelet /usr/local/bin/kubelet</span>
<span class="token comment"># sudo install -o root -g root -m 0755 kube-scheduler /usr/local/bin/kube-scheduler</span>
<span class="token comment"># sudo install -o root -g root -m 0755 kube-apiserver /usr/local/bin/kube-apiserver</span>
<span class="token comment"># sudo install -o root -g root -m 0755 kube-controller-manager /usr/local/bin/kube-controller-manager</span>
<span class="token comment"># sudo install -o root -g root -m 0755 kube-proxy /usr/local/bin/kube-proxy</span>

<span class="token comment"># tar -xf kubernetes-server-linux-amd64.tar.gz  --strip-components=3 -C /usr/local/bin kubernetes/server/bin/kube{let,ctl,-apiserver,-controller-manager,-scheduler,-proxy}</span>

<span class="token function">tar</span> <span class="token parameter variable">-xf</span> kubernetes-server-linux-amd64.tar.gz

<span class="token function">cp</span> <span class="token parameter variable">-p</span> kubernetes/server/bin/<span class="token punctuation">{</span>kubectl,kubelet,kube-scheduler,kube-apiserver,kube-controller-manager,kube-proxy<span class="token punctuation">}</span> /usr/local/bin/

<span class="token comment"># kubernetes目录</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/kubernetes/pki /etc/kubernetes/manifests/ /etc/systemd/system/kubelet.service.d /var/lib/kubelet /var/log/kubernetes/<span class="token punctuation">{</span>kube-apiserver,kube-controller-manager,kube-scheduler<span class="token punctuation">}</span>

kubectl version <span class="token parameter variable">--client</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="部署kube-apiserver组件" tabindex="-1"><a class="header-anchor" href="#部署kube-apiserver组件"><span>部署kube-apiserver组件</span></a></h3><h4 id="生成kube-apiserver证书" tabindex="-1"><a class="header-anchor" href="#生成kube-apiserver证书"><span>生成kube-apiserver证书</span></a></h4><ul><li>生成kubernetes根证书</li></ul><blockquote><p>在k8s-master01节点上</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 根证书请求文件</span>
<span class="token builtin class-name">cd</span> /root/k8s-workspace

<span class="token function">cat</span> <span class="token operator">&gt;</span> kube-ca-csr.json   <span class="token operator">&lt;&lt;</span> <span class="token string">EOF 
{
  &quot;CN&quot;: &quot;kubernetes&quot;,
  &quot;key&quot;: {
    &quot;algo&quot;: &quot;rsa&quot;,
    &quot;size&quot;: 2048
  },
  &quot;names&quot;: [
    {
      &quot;C&quot;: &quot;CN&quot;,
      &quot;ST&quot;: &quot;Guizhou&quot;,
      &quot;L&quot;: &quot;Guiyang&quot;,
      &quot;O&quot;: &quot;Kubernetes&quot;,
      &quot;OU&quot;: &quot;system&quot;
    }
  ],
  &quot;ca&quot;: {
    &quot;expiry&quot;: &quot;876000h&quot;
  }
}
EOF</span>

<span class="token comment"># 生成根证书</span>
cfssl gencert <span class="token parameter variable">-initca</span> kube-ca-csr.json <span class="token operator">|</span> cfssljson <span class="token parameter variable">-bare</span> /etc/kubernetes/pki/ca
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">参数说明</p><ul><li><ul><li>CN：CommonName，即用于标识证书的通用名称。在此配置中，CN 设置为 &quot;kubernetes&quot;，表示该证书是用于 Kubernetes。</li></ul></li><li><ul><li>key：用于生成证书的算法和大小。在此配置中，使用的算法是 RSA，大小是 2048 位。</li></ul></li><li><ul><li>names：用于证书中的名称字段的详细信息。在此配置中，有以下字段信息：</li></ul></li><li><ul><li>C：Country，即国家。在此配置中，设置为 &quot;CN&quot;。</li></ul></li><li><ul><li>ST：State，即省/州。在此配置中，设置为 &quot;Beijing&quot;。</li></ul></li><li><ul><li>L：Locality，即城市。在此配置中，设置为 &quot;Beijing&quot;。</li></ul></li><li><ul><li>O：Organization，即组织。在此配置中，设置为 &quot;Kubernetes&quot;。</li></ul></li><li><ul><li>OU：Organization Unit，即组织单位。在此配置中，设置为 &quot;system&quot;。</li></ul></li><li><ul><li>ca：用于证书签名的证书颁发机构（CA）的配置信息。在此配置中，设置了证书的有效期为 876000 小时。</li></ul></li><li><p>这个配置文件可以用于生成 Kubernetes 相关的证书，以确保集群中的通信安全性。</p></li></ul></div><ul><li>生成kubenetes apiserver证书</li></ul><blockquote><p>在k8s-master01节点上</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /root/k8s-workspace

<span class="token comment"># apiserver证书请求文件</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> kube-apiserver-csr.json  <span class="token operator">&lt;&lt;</span> <span class="token string">EOF 
{
  &quot;CN&quot;: &quot;kube-apiserver&quot;,
  &quot;hosts&quot;: [
    &quot;127.0.0.1&quot;,
    &quot;10.10.12.210&quot;,
    &quot;10.10.12.211&quot;,
    &quot;10.10.12.212&quot;,
    &quot;10.10.12.235&quot;,
    &quot;10.96.0.1&quot;,
    &quot;10.255.0.1&quot;,
    &quot;k8s-master01&quot;, 
    &quot;k8s-master02&quot;, 
    &quot;k8s-master03&quot;,
    &quot;lb-k8s-master&quot;,
    &quot;kubernetes&quot;,
    &quot;kubernetes.default&quot;,
    &quot;kubernetes.default.svc&quot;,
    &quot;kubernetes.default.svc.cluster&quot;,
    &quot;kubernetes.default.svc.cluster.local&quot;
  ],
  &quot;key&quot;: {
    &quot;algo&quot;: &quot;rsa&quot;,
    &quot;size&quot;: 2048
  },
  &quot;names&quot;: [
    {
      &quot;C&quot;: &quot;CN&quot;,
      &quot;ST&quot;: &quot;Guizhou&quot;,
      &quot;L&quot;: &quot;Guiyang&quot;,
      &quot;O&quot;: &quot;system:masters&quot;,
      &quot;OU&quot;: &quot;system&quot;
    }
  ]
}
EOF</span>

<span class="token comment"># 生成apiserver证书</span>
cfssl gencert   <span class="token punctuation">\\</span>
<span class="token parameter variable">-ca</span><span class="token operator">=</span>/etc/kubernetes/pki/ca.pem   <span class="token punctuation">\\</span>
-ca-key<span class="token operator">=</span>/etc/kubernetes/pki/ca-key.pem   <span class="token punctuation">\\</span>
<span class="token parameter variable">-config</span><span class="token operator">=</span>ca-config.json   <span class="token punctuation">\\</span>
<span class="token parameter variable">-profile</span><span class="token operator">=</span>kubernetes  kube-apiserver-csr.json <span class="token operator">|</span> cfssljson <span class="token parameter variable">-bare</span> /etc/kubernetes/pki/kube-apiserver
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">参数说明</p><ul><li><p>这个命令是使用cfssl工具生成Kubernetes API Server的证书。</p></li><li></li><li><p>命令的参数解释如下：</p></li><li><ul><li><code>-ca=/etc/kubernetes/pki/ca.pem</code>：指定证书的颁发机构（CA）文件路径。</li></ul></li><li><ul><li><code>-ca-key=/etc/kubernetes/pki/ca-key.pem</code>：指定证书的颁发机构（CA）私钥文件路径。</li></ul></li><li><ul><li><code>-config=ca-config.json</code>：指定证书生成的配置文件路径，配置文件中包含了证书的有效期、加密算法等信息。</li></ul></li><li><ul><li><code>-hostname=10.96.0.1,192.168.0.36,127.0.0.1,fc00:43f4:1eea:1::10</code>：指定证书的主机名或IP地址列表。如： <code>10.96.0.1,192.168.0.36,127.0.0.1,kubernetes,kubernetes.default,kubernetes.default.svc,kubernetes.default.svc.cluster,kubernetes.default.svc.cluster.local,x.oiox.cn,k.oiox.cn,l.oiox.cn,o.oiox.cn,192.168.0.31,192.168.0.32,192.168.0.33,192.168.0.34,192.168.0.35,192.168.0.36,192.168.0.37,192.168.0.38,192.168.0.39,192.168.1.70,fc00:43f4:1eea:1::10,fc00:43f4:1eea:1::20,fc00:43f4:1eea:1::30,fc00:43f4:1eea:1::40,fc00:43f4:1eea:1::50,fc00:43f4:1eea:1::60,fc00:43f4:1eea:1::70,fc00:43f4:1eea:1::80,fc00:43f4:1eea:1::90,fc00:43f4:1eea:1::100,::1 </code></li></ul></li><li><ul><li><code>-profile=kubernetes</code>：指定证书生成的配置文件中的配置文件名。</li></ul></li><li><ul><li><code>apiserver-csr.json</code>：API Server的证书签名请求配置文件路径。</li></ul></li><li><ul><li><code>| cfssljson -bare /etc/kubernetes/pki/apiserver</code>：通过管道将生成的证书输出到cfssljson工具，将其转换为PEM编码格式，并保存到 <code>/etc/kubernetes/pki/apiserver.pem</code> 和 <code>/etc/kubernetes/pki/apiserver-key.pem</code> 文件中。</li></ul></li><li><p>最终，这个命令将会生成API Server的证书和私钥，并保存到指定的文件中。</p></li></ul></div><h4 id="生成kube-apiserver聚合证书-可选" tabindex="-1"><a class="header-anchor" href="#生成kube-apiserver聚合证书-可选"><span>生成kube-apiserver聚合证书（可选）</span></a></h4><ul><li>生成kube-front-proxy ca证书</li></ul><blockquote><p>在k8s-master01节点上</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /root/k8s-workspace

<span class="token function">cat</span> <span class="token operator">&gt;</span> kube-front-proxy-ca-csr.json  <span class="token operator">&lt;&lt;</span> <span class="token string">EOF 
{
  &quot;CN&quot;: &quot;kubernetes&quot;,
  &quot;key&quot;: {
    &quot;algo&quot;: &quot;rsa&quot;,
    &quot;size&quot;: 2048
  },
  &quot;ca&quot;: {
    &quot;expiry&quot;: &quot;876000h&quot;
  }
}
EOF</span>


cfssl gencert <span class="token parameter variable">-initca</span> kube-front-proxy-ca-csr.json <span class="token operator">|</span> cfssljson <span class="token parameter variable">-bare</span> /etc/kubernetes/pki/kube-front-proxy-ca 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>生成kube-front-proxy client证书</li></ul><blockquote><p>在k8s-master01节点上</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /root/k8s-workspace

<span class="token function">cat</span> <span class="token operator">&gt;</span> kube-front-proxy-client-csr.json  <span class="token operator">&lt;&lt;</span> <span class="token string">EOF 
{
  &quot;CN&quot;: &quot;kube-front-proxy-client&quot;,
  &quot;key&quot;: {
    &quot;algo&quot;: &quot;rsa&quot;,
    &quot;size&quot;: 2048
  }
}
EOF</span>


cfssl gencert  <span class="token punctuation">\\</span>
  <span class="token parameter variable">-ca</span><span class="token operator">=</span>/etc/kubernetes/pki/kube-front-proxy-ca.pem   <span class="token punctuation">\\</span>
  -ca-key<span class="token operator">=</span>/etc/kubernetes/pki/kube-front-proxy-ca-key.pem   <span class="token punctuation">\\</span>
  <span class="token parameter variable">-config</span><span class="token operator">=</span>ca-config.json   <span class="token punctuation">\\</span>
  <span class="token parameter variable">-profile</span><span class="token operator">=</span>kubernetes  kube-front-proxy-client-csr.json <span class="token operator">|</span> cfssljson <span class="token parameter variable">-bare</span> /etc/kubernetes/pki/kube-front-proxy-client
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="创建token-csv文件" tabindex="-1"><a class="header-anchor" href="#创建token-csv文件"><span>创建token.csv文件</span></a></h4><blockquote><p>k8s-master01节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># token.csv格式：token，用户名，UID，用户组</span>

<span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/kubernetes/token.csv <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
<span class="token variable"><span class="token variable">$(</span><span class="token function">head</span> <span class="token parameter variable">-c</span> <span class="token number">16</span> /dev/urandom <span class="token operator">|</span> od <span class="token parameter variable">-An</span> <span class="token parameter variable">-t</span> x <span class="token operator">|</span> <span class="token function">tr</span> <span class="token parameter variable">-d</span> <span class="token string">&#39; &#39;</span><span class="token variable">)</span></span>,kubelet-bootstrap,10001,&quot;system:kubelet-bootstrap&quot;
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="创建service-account-key和secret" tabindex="-1"><a class="header-anchor" href="#创建service-account-key和secret"><span>创建Service Account Key和Secret</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>openssl genrsa <span class="token parameter variable">-out</span> /etc/kubernetes/pki/sa.key <span class="token number">2048</span>
openssl rsa <span class="token parameter variable">-in</span> /etc/kubernetes/pki/sa.key <span class="token parameter variable">-pubout</span> <span class="token parameter variable">-out</span> /etc/kubernetes/pki/sa.pub
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">参数说明</p><ul><li>这两个命令是使用OpenSSL工具生成RSA密钥对。</li><li></li><li>命令1：openssl genrsa -out /etc/kubernetes/pki/sa.key 2048</li><li>该命令用于生成私钥文件。具体解释如下：</li><li><ul><li>openssl：openssl命令行工具。</li></ul></li><li><ul><li>genrsa：生成RSA密钥对。</li></ul></li><li><ul><li>-out /etc/kubernetes/pki/sa.key：指定输出私钥文件的路径和文件名。</li></ul></li><li><ul><li>2048：指定密钥长度为2048位。</li></ul></li><li></li><li>命令2：openssl rsa -in /etc/kubernetes/pki/sa.key -pubout -out /etc/kubernetes/pki/sa.pub</li><li>该命令用于从私钥中导出公钥。具体解释如下：</li><li><ul><li>openssl：openssl命令行工具。</li></ul></li><li><ul><li>rsa：与私钥相关的RSA操作。</li></ul></li><li><ul><li>-in /etc/kubernetes/pki/sa.key：指定输入私钥文件的路径和文件名。</li></ul></li><li><ul><li>-pubout：指定输出公钥。</li></ul></li><li><ul><li>-out /etc/kubernetes/pki/sa.pub：指定输出公钥文件的路径和文件名。</li></ul></li><li></li><li>总结：通过以上两个命令，我们可以使用OpenSSL工具生成一个RSA密钥对，并将私钥保存在/etc/kubernetes/pki/sa.key文件中，将公钥保存在/etc/kubernetes/pki/sa.pub文件中。</li></ul></div><h4 id="复制证书和文件" tabindex="-1"><a class="header-anchor" href="#复制证书和文件"><span>复制证书和文件</span></a></h4><ul><li>复制证书</li></ul><blockquote><p>在k8s-master01节点上</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">host</span> <span class="token keyword">in</span> k8s-master02 k8s-master03<span class="token punctuation">;</span> <span class="token keyword">do</span> sshpass <span class="token parameter variable">-p</span> <span class="token string">&#39;root@123&#39;</span> <span class="token function">scp</span> <span class="token parameter variable">-o</span> <span class="token assign-left variable">StrictHostKeyChecking</span><span class="token operator">=</span>no /etc/kubernetes/pki/ca*.pem root@<span class="token variable">\${host}</span>:/etc/kubernetes/pki/<span class="token punctuation">;</span> <span class="token keyword">done</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">host</span> <span class="token keyword">in</span> k8s-master02 k8s-master03<span class="token punctuation">;</span> <span class="token keyword">do</span> sshpass <span class="token parameter variable">-p</span> <span class="token string">&#39;root@123&#39;</span> <span class="token function">scp</span> <span class="token parameter variable">-o</span> <span class="token assign-left variable">StrictHostKeyChecking</span><span class="token operator">=</span>no /etc/kubernetes/pki/kube-apiserver*.pem root@<span class="token variable">\${host}</span>:/etc/kubernetes/pki/<span class="token punctuation">;</span> <span class="token keyword">done</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">host</span> <span class="token keyword">in</span> k8s-master02 k8s-master03<span class="token punctuation">;</span> <span class="token keyword">do</span> sshpass <span class="token parameter variable">-p</span> <span class="token string">&#39;root@123&#39;</span> <span class="token function">scp</span> <span class="token parameter variable">-o</span> <span class="token assign-left variable">StrictHostKeyChecking</span><span class="token operator">=</span>no /etc/kubernetes/pki/kube-front-proxy*.pem root@<span class="token variable">\${host}</span>:/etc/kubernetes/pki/<span class="token punctuation">;</span> <span class="token keyword">done</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">host</span> <span class="token keyword">in</span> k8s-master02 k8s-master03<span class="token punctuation">;</span> <span class="token keyword">do</span> sshpass <span class="token parameter variable">-p</span> <span class="token string">&#39;root@123&#39;</span> <span class="token function">scp</span> <span class="token parameter variable">-o</span> <span class="token assign-left variable">StrictHostKeyChecking</span><span class="token operator">=</span>no /etc/kubernetes/pki/sa* root@<span class="token variable">\${host}</span>:/etc/kubernetes/pki/<span class="token punctuation">;</span> <span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>复制token.csv文件</li></ul><blockquote><p>在k8s-master01节点上</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">host</span> <span class="token keyword">in</span> k8s-master02 k8s-master03<span class="token punctuation">;</span> <span class="token keyword">do</span> sshpass <span class="token parameter variable">-p</span> <span class="token string">&#39;root@123&#39;</span> <span class="token function">scp</span> <span class="token parameter variable">-o</span> <span class="token assign-left variable">StrictHostKeyChecking</span><span class="token operator">=</span>no /etc/kubernetes/token.csv root@<span class="token variable">\${host}</span>:/etc/kubernetes/<span class="token punctuation">;</span> <span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="创建kube-apiserver配置文件" tabindex="-1"><a class="header-anchor" href="#创建kube-apiserver配置文件"><span>创建kube-apiserver配置文件</span></a></h4><p>k8s-master01节点:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/kubernetes/kube-apiserver.conf <span class="token operator">&lt;&lt;</span> <span class="token string">&#39;EOF&#39;
KUBE_APISERVER_OPTS=&quot;--enable-admission-plugins=NamespaceLifecycle,NodeRestriction,LimitRanger,ServiceAccount,DefaultStorageClass,ResourceQuota \\
  --anonymous-auth=false \\
  --bind-address=0.0.0.0 \\
  --secure-port=6443 \\
  --advertise-address=10.10.12.210 \\
  --authorization-mode=Node,RBAC \\
  --runtime-config=api/all=true \\
  --enable-bootstrap-token-auth=true \\
  --service-cluster-ip-range=10.96.0.0/16 \\
  --token-auth-file=/etc/kubernetes/token.csv \\
  --service-node-port-range=30000-50000 \\
  --tls-cert-file=/etc/kubernetes/pki/kube-apiserver.pem  \\
  --tls-private-key-file=/etc/kubernetes/pki/kube-apiserver-key.pem \\
  --client-ca-file=/etc/kubernetes/pki/ca.pem \\
  --kubelet-client-certificate=/etc/kubernetes/pki/kube-apiserver.pem \\
  --kubelet-client-key=/etc/kubernetes/pki/kube-apiserver-key.pem \\
  --service-account-key-file=/etc/kubernetes/pki/sa.pub  \\
  --service-account-signing-key-file=/etc/kubernetes/pki/sa.key  \\
  --service-account-issuer=https://kubernetes.default.svc.cluster.local \\
  --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname  \\
  --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,NodeRestriction,ResourceQuota  \\
  --etcd-cafile=/etc/etcd/ssl/ca.pem \\
  --etcd-certfile=/etc/etcd/ssl/etcd.pem \\
  --etcd-keyfile=/etc/etcd/ssl/etcd-key.pem \\
  --etcd-servers=https://10.10.12.210:2379,https://10.10.12.211:2379,https://10.10.12.212:2379 \\
  --enable-aggregator-routing=true \\
  --allow-privileged=true \\
  --apiserver-count=3 \\
  --audit-log-maxage=30 \\
  --audit-log-maxbackup=3 \\
  --audit-log-maxsize=100 \\
  --audit-log-path=/var/log/kubernetes/kube-apiserver-audit.log \\
  --event-ttl=1h \\
  --v=2 \\
  --requestheader-client-ca-file=/etc/kubernetes/pki/kube-front-proxy-ca.pem \\
  --proxy-client-cert-file=/etc/kubernetes/pki/kube-front-proxy-client.pem \\
  --proxy-client-key-file=/etc/kubernetes/pki/kube-front-proxy-client-key.pem \\
  --requestheader-allowed-names=aggregator \\
  --requestheader-group-headers=X-Remote-Group \\
  --requestheader-extra-headers-prefix=X-Remote-Extra- \\
  --requestheader-username-headers=X-Remote-User&quot;
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>k8s-master02节点:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/kubernetes/kube-apiserver.conf <span class="token operator">&lt;&lt;</span> <span class="token string">&#39;EOF&#39;
KUBE_APISERVER_OPTS=&quot;--enable-admission-plugins=NamespaceLifecycle,NodeRestriction,LimitRanger,ServiceAccount,DefaultStorageClass,ResourceQuota \\
  --anonymous-auth=false \\
  --bind-address=0.0.0.0 \\
  --secure-port=6443 \\
  --advertise-address=10.10.12.211 \\
  --authorization-mode=Node,RBAC \\
  --runtime-config=api/all=true \\
  --enable-bootstrap-token-auth=true \\
  --service-cluster-ip-range=10.96.0.0/16 \\
  --token-auth-file=/etc/kubernetes/token.csv \\
  --service-node-port-range=30000-50000 \\
  --tls-cert-file=/etc/kubernetes/pki/kube-apiserver.pem  \\
  --tls-private-key-file=/etc/kubernetes/pki/kube-apiserver-key.pem \\
  --client-ca-file=/etc/kubernetes/pki/ca.pem \\
  --kubelet-client-certificate=/etc/kubernetes/pki/kube-apiserver.pem \\
  --kubelet-client-key=/etc/kubernetes/pki/kube-apiserver-key.pem \\
  --service-account-key-file=/etc/kubernetes/pki/sa.pub  \\
  --service-account-signing-key-file=/etc/kubernetes/pki/sa.key  \\
  --service-account-issuer=https://kubernetes.default.svc.cluster.local \\
  --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname  \\
  --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,NodeRestriction,ResourceQuota  \\
  --etcd-cafile=/etc/etcd/ssl/ca.pem \\
  --etcd-certfile=/etc/etcd/ssl/etcd.pem \\
  --etcd-keyfile=/etc/etcd/ssl/etcd-key.pem \\
  --etcd-servers=https://10.10.12.210:2379,https://10.10.12.211:2379,https://10.10.12.212:2379 \\
  --enable-aggregator-routing=true \\
  --allow-privileged=true \\
  --apiserver-count=3 \\
  --audit-log-maxage=30 \\
  --audit-log-maxbackup=3 \\
  --audit-log-maxsize=100 \\
  --audit-log-path=/var/log/kubernetes/kube-apiserver-audit.log \\
  --event-ttl=1h \\
  --v=2 \\
  --requestheader-client-ca-file=/etc/kubernetes/pki/kube-front-proxy-ca.pem \\
  --proxy-client-cert-file=/etc/kubernetes/pki/kube-front-proxy-client.pem \\
  --proxy-client-key-file=/etc/kubernetes/pki/kube-front-proxy-client-key.pem \\
  --requestheader-allowed-names=aggregator \\
  --requestheader-group-headers=X-Remote-Group \\
  --requestheader-extra-headers-prefix=X-Remote-Extra- \\
  --requestheader-username-headers=X-Remote-User&quot;
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>k8s-master03节点:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/kubernetes/kube-apiserver.conf <span class="token operator">&lt;&lt;</span> <span class="token string">&#39;EOF&#39;
KUBE_APISERVER_OPTS=&quot;--enable-admission-plugins=NamespaceLifecycle,NodeRestriction,LimitRanger,ServiceAccount,DefaultStorageClass,ResourceQuota \\
  --anonymous-auth=false \\
  --bind-address=0.0.0.0 \\
  --secure-port=6443 \\
  --advertise-address=10.10.12.212 \\
  --authorization-mode=Node,RBAC \\
  --runtime-config=api/all=true \\
  --enable-bootstrap-token-auth=true \\
  --service-cluster-ip-range=10.96.0.0/16 \\
  --token-auth-file=/etc/kubernetes/token.csv \\
  --service-node-port-range=30000-50000 \\
  --tls-cert-file=/etc/kubernetes/pki/kube-apiserver.pem  \\
  --tls-private-key-file=/etc/kubernetes/pki/kube-apiserver-key.pem \\
  --client-ca-file=/etc/kubernetes/pki/ca.pem \\
  --kubelet-client-certificate=/etc/kubernetes/pki/kube-apiserver.pem \\
  --kubelet-client-key=/etc/kubernetes/pki/kube-apiserver-key.pem \\
  --service-account-key-file=/etc/kubernetes/pki/sa.pub  \\
  --service-account-signing-key-file=/etc/kubernetes/pki/sa.key  \\
  --service-account-issuer=https://kubernetes.default.svc.cluster.local \\
  --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname  \\
  --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,NodeRestriction,ResourceQuota  \\
  --etcd-cafile=/etc/etcd/ssl/ca.pem \\
  --etcd-certfile=/etc/etcd/ssl/etcd.pem \\
  --etcd-keyfile=/etc/etcd/ssl/etcd-key.pem \\
  --etcd-servers=https://10.10.12.210:2379,https://10.10.12.211:2379,https://10.10.12.212:2379 \\
  --enable-aggregator-routing=true \\
  --allow-privileged=true \\
  --apiserver-count=3 \\
  --audit-log-maxage=30 \\
  --audit-log-maxbackup=3 \\
  --audit-log-maxsize=100 \\
  --audit-log-path=/var/log/kubernetes/kube-apiserver-audit.log \\
  --event-ttl=1h \\
  --v=2 \\
  --requestheader-client-ca-file=/etc/kubernetes/pki/kube-front-proxy-ca.pem \\
  --proxy-client-cert-file=/etc/kubernetes/pki/kube-front-proxy-client.pem \\
  --proxy-client-key-file=/etc/kubernetes/pki/kube-front-proxy-client-key.pem \\
  --requestheader-allowed-names=aggregator \\
  --requestheader-group-headers=X-Remote-Group \\
  --requestheader-extra-headers-prefix=X-Remote-Extra- \\
  --requestheader-username-headers=X-Remote-User&quot;
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">参数说明</p><p>--logtostderr：启用日志 --v：日志等级 --log-dir：日志目录 --etcd-servers：etcd集群地址 --bind-address：监听地址 --secure-port：https安全端口 --advertise-address：集群通告地址 --allow-privileged：启用授权 --service-cluster-ip-range：Service虚拟IP地址段 --enable-admission-plugins：准入控制模块 --authorization-mode：认证授权，启用RBAC授权和节点自管理 --enable-bootstrap-token-auth：启用TLS bootstrap机制 --token-auth-file：bootstrap token文件 --service-node-port-range：Service nodeport类型默认分配端口范围 --kubelet-client-xxx：apiserver访问kubelet客户端证书 --tls-xxx-file：apiserver https证书 --etcd-xxxfile：连接Etcd集群证书 – --audit-log-xxx：审计日志</p></div><h4 id="创建kube-apiserver启动服务" tabindex="-1"><a class="header-anchor" href="#创建kube-apiserver启动服务"><span>创建kube-apiserver启动服务</span></a></h4><blockquote><p>所有master节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> /usr/lib/systemd/system/kube-apiserver.service <span class="token operator">&lt;&lt;</span> <span class="token string">&#39;EOF&#39;
[Unit]
Description=Kubernetes API Server
Documentation=https://github.com/kubernetes/kubernetes
After=etcd.service
Wants=etcd.service

[Service]
EnvironmentFile=-/etc/kubernetes/kube-apiserver.conf
ExecStart=/usr/local/bin/kube-apiserver $KUBE_APISERVER_OPTS
Restart=on-failure
RestartSec=5
Type=notify
LimitNOFILE=65536

[Install]
WantedBy=multi-user.target
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="启动kube-apiserver服务" tabindex="-1"><a class="header-anchor" href="#启动kube-apiserver服务"><span>启动kube-apiserver服务</span></a></h4><blockquote><p>所有master节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl daemon-reload
systemctl <span class="token builtin class-name">enable</span> <span class="token parameter variable">--now</span> kube-apiserver
systemctl status kube-apiserver
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="部署kubectl" tabindex="-1"><a class="header-anchor" href="#部署kubectl"><span>部署kubectl</span></a></h3><h4 id="生成kubelet证书" tabindex="-1"><a class="header-anchor" href="#生成kubelet证书"><span>生成kubelet证书</span></a></h4><blockquote><p>在k8s-master01节点上</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /root/k8s-workspace

<span class="token comment"># kubectl 证书请求文件</span>
<span class="token comment"># 用于创建和配置一个名为&quot;admin&quot;的Kubernetes凭证。</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> admin-csr.json <span class="token operator">&lt;&lt;</span> <span class="token string">EOF 
{
  &quot;CN&quot;: &quot;admin&quot;,
  &quot;key&quot;: {
    &quot;algo&quot;: &quot;rsa&quot;,
    &quot;size&quot;: 2048
  },
  &quot;names&quot;: [
    {
      &quot;C&quot;: &quot;CN&quot;,
      &quot;ST&quot;: &quot;Guizhou&quot;,
      &quot;L&quot;: &quot;Guiyang&quot;,
      &quot;O&quot;: &quot;system:masters&quot;,
      &quot;OU&quot;: &quot;system&quot;
    }
  ]
}
EOF</span>

<span class="token comment"># 生成kubectl证书</span>
cfssl gencert <span class="token punctuation">\\</span>
   <span class="token parameter variable">-ca</span><span class="token operator">=</span>/etc/kubernetes/pki/ca.pem <span class="token punctuation">\\</span>
   -ca-key<span class="token operator">=</span>/etc/kubernetes/pki/ca-key.pem <span class="token punctuation">\\</span>
   <span class="token parameter variable">-config</span><span class="token operator">=</span>ca-config.json <span class="token punctuation">\\</span>
   <span class="token parameter variable">-profile</span><span class="token operator">=</span>kubernetes <span class="token punctuation">\\</span>
   admin-csr.json <span class="token operator">|</span> cfssljson <span class="token parameter variable">-bare</span> /etc/kubernetes/pki/admin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="配置安全上下文" tabindex="-1"><a class="header-anchor" href="#配置安全上下文"><span>配置安全上下文</span></a></h4><blockquote><p>在k8s-master01节点上</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 该命令用于配置一个名为&quot;kubernetes&quot;的集群，并将其应用到/etc/kubernetes/scheduler.kubeconfig文件中。</span>
kubectl config set-cluster kubernetes  <span class="token punctuation">\\</span>
  --certificate-authority<span class="token operator">=</span>/etc/kubernetes/pki/ca.pem <span class="token punctuation">\\</span>
  --embed-certs<span class="token operator">=</span>true <span class="token punctuation">\\</span>
  <span class="token parameter variable">--server</span><span class="token operator">=</span>https://10.10.12.235:16443  <span class="token punctuation">\\</span>
  <span class="token parameter variable">--kubeconfig</span><span class="token operator">=</span>/etc/kubernetes/admin.kubeconfig

<span class="token comment"># 这段命令是用于设置 kubernetes-admin 组件的身份验证凭据，并生成相应的 kubeconfig 文件。</span>
kubectl config set-credentials kubernetes-admin <span class="token punctuation">\\</span>
  --client-certificate<span class="token operator">=</span>/etc/kubernetes/pki/admin.pem  <span class="token punctuation">\\</span>
  --client-key<span class="token operator">=</span>/etc/kubernetes/pki/admin-key.pem <span class="token punctuation">\\</span>
  --embed-certs<span class="token operator">=</span>true <span class="token punctuation">\\</span>
  <span class="token parameter variable">--kubeconfig</span><span class="token operator">=</span>/etc/kubernetes/admin.kubeconfig

<span class="token comment"># 该命令用于设置一个名为&quot;kubernetes-admin@kubernetes&quot;的上下文</span>
kubectl config set-context kubernetes-admin@kubernetes  <span class="token punctuation">\\</span>
  <span class="token parameter variable">--cluster</span><span class="token operator">=</span>kubernetes <span class="token punctuation">\\</span>
  <span class="token parameter variable">--user</span><span class="token operator">=</span>kubernetes-admin <span class="token punctuation">\\</span>
  <span class="token parameter variable">--kubeconfig</span><span class="token operator">=</span>/etc/kubernetes/admin.kubeconfig

<span class="token comment"># 上述命令是使用\`kubectl\`命令来配置Kubernetes集群中的调度器组件。</span>
kubectl config use-context kubernetes-admin@kubernetes  <span class="token parameter variable">--kubeconfig</span><span class="token operator">=</span>/etc/kubernetes/admin.kubeconfig

<span class="token comment"># 设置当前上下文</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> ~/.kube
<span class="token function">cp</span> /etc/kubernetes/admin.kubeconfig ~/.kube/config


<span class="token comment"># 授权kubernetes证书访问kubelet api权限</span>
kubectl create clusterrolebinding kube-apiserver:kubelet-apis <span class="token parameter variable">--clusterrole</span><span class="token operator">=</span>system:kubelet-api-admin <span class="token parameter variable">--user</span> kubernetes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">该命令的解释如下：</p><ul><li><code>kubectl config set-cluster kubernetes</code>: 设置一个集群并命名为&quot;kubernetes&quot;。</li><li><code>--certificate-authority=/etc/kubernetes/pki/ca.pem</code>: 指定集群使用的证书授权机构的路径。</li><li><code>--embed-certs=true</code>: 该标志指示将证书嵌入到生成的kubeconfig文件中。</li><li><code>--server=https://127.0.0.1:16443</code>: 指定集群的 API server 位置， 如果已经配置了负载均衡器，这里填写负载均衡的地址和端口。</li><li><code>--kubeconfig=/etc/kubernetes/admin.kubeconfig</code>: 指定要保存 kubeconfig 文件的路径和名称。</li></ul></div><h4 id="复制证书和文件-1" tabindex="-1"><a class="header-anchor" href="#复制证书和文件-1"><span>复制证书和文件</span></a></h4><ul><li>复制证书</li></ul><blockquote><p>在k8s-master01节点上</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">host</span> <span class="token keyword">in</span> k8s-master02 k8s-master03<span class="token punctuation">;</span> <span class="token keyword">do</span> sshpass <span class="token parameter variable">-p</span> <span class="token string">&#39;root@123&#39;</span> <span class="token function">scp</span> <span class="token parameter variable">-o</span> <span class="token assign-left variable">StrictHostKeyChecking</span><span class="token operator">=</span>no /etc/kubernetes/pki/admin*.pem root@<span class="token variable">\${host}</span>:/etc/kubernetes/pki/<span class="token punctuation">;</span> <span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>复制文件</li></ul><blockquote><p>在k8s-master01节点上</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">host</span> <span class="token keyword">in</span> k8s-master02 k8s-master03<span class="token punctuation">;</span> <span class="token keyword">do</span> sshpass <span class="token parameter variable">-p</span> <span class="token string">&#39;root@123&#39;</span> <span class="token function">scp</span> <span class="token parameter variable">-o</span> <span class="token assign-left variable">StrictHostKeyChecking</span><span class="token operator">=</span>no /etc/kubernetes/admin.kubeconfig root@<span class="token variable">\${host}</span>:/etc/kubernetes/<span class="token punctuation">;</span> <span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="查看集群状态" tabindex="-1"><a class="header-anchor" href="#查看集群状态"><span>查看集群状态</span></a></h4><blockquote><p>所有master节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubectl cluster-info
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="命令补全" tabindex="-1"><a class="header-anchor" href="#命令补全"><span>命令补全</span></a></h4><blockquote><p>所有master节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> bash-completion
<span class="token builtin class-name">source</span> /usr/share/bash-completion/bash_completion
<span class="token builtin class-name">source</span> <span class="token operator">&lt;</span><span class="token punctuation">(</span>kubectl completion <span class="token function">bash</span><span class="token punctuation">)</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;source &lt;(kubectl completion bash)&quot;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="部署kube-controller-manager组件" tabindex="-1"><a class="header-anchor" href="#部署kube-controller-manager组件"><span>部署kube-controller-manager组件</span></a></h3><h4 id="生成kube-controller-manager证书" tabindex="-1"><a class="header-anchor" href="#生成kube-controller-manager证书"><span>生成kube-controller-manager证书</span></a></h4><blockquote><p>在k8s-master01节点上</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /root/k8s-workspace

<span class="token function">cat</span> <span class="token operator">&gt;</span> kube-controller-manager-csr.json   <span class="token operator">&lt;&lt;</span> <span class="token string">&#39;EOF&#39;
{
    &quot;CN&quot;: &quot;system:kube-controller-manager&quot;,
    &quot;key&quot;: {
        &quot;algo&quot;: &quot;rsa&quot;,
        &quot;size&quot;: 2048
    },
    &quot;hosts&quot;: [
      &quot;127.0.0.1&quot;, 
      &quot;10.10.12.210&quot;, 
      &quot;10.10.12.211&quot;, 
      &quot;10.10.12.212&quot;, 
      &quot;10.10.12.235&quot;, 
      &quot;k8s-master01&quot;, 
      &quot;k8s-master02&quot;, 
      &quot;k8s-master03&quot;,
      &quot;lb-k8s-master&quot;
    ],
    &quot;names&quot;: [
      {
        &quot;C&quot;: &quot;CN&quot;,
        &quot;ST&quot;: &quot;Guizhou&quot;,
        &quot;L&quot;: &quot;Guiyang&quot;,
        &quot;O&quot;: &quot;system:kube-controller-manager&quot;,
        &quot;OU&quot;: &quot;system&quot;
      }
    ]
}
EOF</span>


cfssl gencert <span class="token punctuation">\\</span>
   <span class="token parameter variable">-ca</span><span class="token operator">=</span>/etc/kubernetes/pki/ca.pem <span class="token punctuation">\\</span>
   -ca-key<span class="token operator">=</span>/etc/kubernetes/pki/ca-key.pem <span class="token punctuation">\\</span>
   <span class="token parameter variable">-config</span><span class="token operator">=</span>ca-config.json <span class="token punctuation">\\</span>
   <span class="token parameter variable">-profile</span><span class="token operator">=</span>kubernetes <span class="token punctuation">\\</span>
  kube-controller-manager-csr.json <span class="token operator">|</span> cfssljson <span class="token parameter variable">-bare</span> /etc/kubernetes/pki/kube-controller-manager
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="配置安全上下文-1" tabindex="-1"><a class="header-anchor" href="#配置安全上下文-1"><span>配置安全上下文</span></a></h4><blockquote><p>在k8s-master01节点上</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># kubectl config set-cluster命令用于配置集群信息</span>
kubectl config set-cluster kubernetes <span class="token punctuation">\\</span>
     --certificate-authority<span class="token operator">=</span>/etc/kubernetes/pki/ca.pem <span class="token punctuation">\\</span>
     --embed-certs<span class="token operator">=</span>true <span class="token punctuation">\\</span>
     <span class="token parameter variable">--server</span><span class="token operator">=</span>https://10.10.12.235:16443 <span class="token punctuation">\\</span>
     <span class="token parameter variable">--kubeconfig</span><span class="token operator">=</span>/etc/kubernetes/kube-controller-manager.kubeconfig

<span class="token comment"># 这个命令用于配置 Kubernetes 控制器管理器的上下文信息</span>
kubectl config set-context system:kube-controller-manager@kubernetes <span class="token punctuation">\\</span>
    <span class="token parameter variable">--cluster</span><span class="token operator">=</span>kubernetes <span class="token punctuation">\\</span>
    <span class="token parameter variable">--user</span><span class="token operator">=</span>system:kube-controller-manager <span class="token punctuation">\\</span>
    <span class="token parameter variable">--kubeconfig</span><span class="token operator">=</span>/etc/kubernetes/kube-controller-manager.kubeconfig

<span class="token comment"># 上述命令是用于设置 Kubernetes 的 controller-manager 组件的客户端凭据</span>
kubectl config set-credentials system:kube-controller-manager <span class="token punctuation">\\</span>
     --client-certificate<span class="token operator">=</span>/etc/kubernetes/pki/kube-controller-manager.pem <span class="token punctuation">\\</span>
     --client-key<span class="token operator">=</span>/etc/kubernetes/pki/kube-controller-manager-key.pem <span class="token punctuation">\\</span>
     --embed-certs<span class="token operator">=</span>true <span class="token punctuation">\\</span>
     <span class="token parameter variable">--kubeconfig</span><span class="token operator">=</span>/etc/kubernetes/kube-controller-manager.kubeconfig

<span class="token comment"># 这个命令是用来指定kubectl使用指定的上下文环境来执行操作</span>
kubectl config use-context system:kube-controller-manager@kubernetes <span class="token punctuation">\\</span>
     <span class="token parameter variable">--kubeconfig</span><span class="token operator">=</span>/etc/kubernetes/kube-controller-manager.kubeconfig
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="复制证书和文件-2" tabindex="-1"><a class="header-anchor" href="#复制证书和文件-2"><span>复制证书和文件</span></a></h4><ul><li>复制证书</li></ul><blockquote><p>在k8s-master01节点上</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">host</span> <span class="token keyword">in</span> k8s-master02 k8s-master03<span class="token punctuation">;</span> <span class="token keyword">do</span> sshpass <span class="token parameter variable">-p</span> <span class="token string">&#39;root@123&#39;</span> <span class="token function">scp</span> <span class="token parameter variable">-o</span> <span class="token assign-left variable">StrictHostKeyChecking</span><span class="token operator">=</span>no /etc/kubernetes/pki/kube-controller-manager*.pem root@<span class="token variable">\${host}</span>:/etc/kubernetes/pki/<span class="token punctuation">;</span> <span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>复制文件</li></ul><blockquote><p>在k8s-master01节点上</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">host</span> <span class="token keyword">in</span> k8s-master02 k8s-master03<span class="token punctuation">;</span> <span class="token keyword">do</span> sshpass <span class="token parameter variable">-p</span> <span class="token string">&#39;root@123&#39;</span> <span class="token function">scp</span> <span class="token parameter variable">-o</span> <span class="token assign-left variable">StrictHostKeyChecking</span><span class="token operator">=</span>no /etc/kubernetes/kube-controller-manager.kubeconfig root@<span class="token variable">\${host}</span>:/etc/kubernetes/<span class="token punctuation">;</span> <span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="创建配置文件kube-controller-manager-conf" tabindex="-1"><a class="header-anchor" href="#创建配置文件kube-controller-manager-conf"><span>创建配置文件kube-controller-manager.conf</span></a></h4><blockquote><p>所有master节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/kubernetes/kube-controller-manager.conf  <span class="token operator">&lt;&lt;</span> <span class="token string">&#39;EOF&#39;
KUBE_CONTROLLER_MANAGER_OPTS=&quot;--cluster-name=kubernetes \\
  --secure-port=10257 \\
  --bind-address=0.0.0.0 \\
  --service-cluster-ip-range=10.96.0.0/16 \\
  --allocate-node-cidrs=true \\
  --cluster-cidr=10.244.0.0/16 \\
  --leader-elect=true \\
  --controllers=*,bootstrapsigner,tokencleaner \\
  --kubeconfig=/etc/kubernetes/kube-controller-manager.kubeconfig \\
  --tls-cert-file=/etc/kubernetes/pki/kube-controller-manager.pem \\
  --tls-private-key-file=/etc/kubernetes/pki/kube-controller-manager-key.pem \\
  --cluster-signing-cert-file=/etc/kubernetes/pki/ca.pem \\
  --cluster-signing-key-file=/etc/kubernetes/pki/ca-key.pem \\
  --cluster-signing-duration=175200h0m0s \\
  --use-service-account-credentials=true \\
  --root-ca-file=/etc/kubernetes/pki/ca.pem \\
  --service-account-private-key-file=/etc/kubernetes/pki/ca-key.pem \\
  --requestheader-client-ca-file=/etc/kubernetes/pki/kube-front-proxy-ca.pem \\
  --feature-gates=RotateKubeletServerCertificate=true \\
  --v=2&quot;
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="创建启动文件" tabindex="-1"><a class="header-anchor" href="#创建启动文件"><span>创建启动文件</span></a></h4><blockquote><p>所有master节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> /usr/lib/systemd/system/kube-controller-manager.service <span class="token operator">&lt;&lt;</span> <span class="token string">&#39;EOF&#39;
[Unit]
Description=Kubernetes Controller Manager
Documentation=https://github.com/kubernetes/kubernetes
[Service]
EnvironmentFile=-/etc/kubernetes/kube-controller-manager.conf
ExecStart=/usr/local/bin/kube-controller-manager $KUBE_CONTROLLER_MANAGER_OPTS
Restart=on-failure
RestartSec=5
[Install]
WantedBy=multi-user.target
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="启动服务" tabindex="-1"><a class="header-anchor" href="#启动服务"><span>启动服务</span></a></h4><blockquote><p>所有master节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl daemon-reload 
systemctl <span class="token builtin class-name">enable</span> <span class="token parameter variable">--now</span> kube-controller-manager
systemctl status kube-controller-manager
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="部署kube-scheduler组件" tabindex="-1"><a class="header-anchor" href="#部署kube-scheduler组件"><span>部署kube-scheduler组件</span></a></h3><h4 id="生成kube-scheduler证书" tabindex="-1"><a class="header-anchor" href="#生成kube-scheduler证书"><span>生成kube-scheduler证书</span></a></h4><blockquote><p>在k8s-master01节点上</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /root/k8s-workspace

<span class="token function">cat</span> <span class="token operator">&gt;</span> kube-scheduler-csr.json <span class="token operator">&lt;&lt;</span> <span class="token string">EOF 
{
  &quot;CN&quot;: &quot;system:kube-scheduler&quot;,
  &quot;key&quot;: {
    &quot;algo&quot;: &quot;rsa&quot;,
    &quot;size&quot;: 2048
  },
  &quot;names&quot;: [
    {
      &quot;C&quot;: &quot;CN&quot;,
      &quot;ST&quot;: &quot;Guizhou&quot;,
      &quot;L&quot;: &quot;Guiyang&quot;,
      &quot;O&quot;: &quot;system:kube-scheduler&quot;,
      &quot;OU&quot;: &quot;system&quot;
    }
  ]
}
EOF</span>

cfssl gencert <span class="token punctuation">\\</span>
   <span class="token parameter variable">-ca</span><span class="token operator">=</span>/etc/kubernetes/pki/ca.pem <span class="token punctuation">\\</span>
   -ca-key<span class="token operator">=</span>/etc/kubernetes/pki/ca-key.pem <span class="token punctuation">\\</span>
   <span class="token parameter variable">-config</span><span class="token operator">=</span>ca-config.json <span class="token punctuation">\\</span>
   <span class="token parameter variable">-profile</span><span class="token operator">=</span>kubernetes <span class="token punctuation">\\</span>
   kube-scheduler-csr.json <span class="token operator">|</span> cfssljson <span class="token parameter variable">-bare</span> /etc/kubernetes/pki/kube-scheduler
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="配置安全上下文-2" tabindex="-1"><a class="header-anchor" href="#配置安全上下文-2"><span>配置安全上下文</span></a></h4><blockquote><p>在k8s-master01节点上</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /root/k8s-workspace

<span class="token comment"># 该命令用于配置一个名为&quot;kubernetes&quot;的集群，并将其应用到/etc/kubernetes/scheduler.kubeconfig文件中</span>
kubectl config set-cluster kubernetes <span class="token punctuation">\\</span>
     --certificate-authority<span class="token operator">=</span>/etc/kubernetes/pki/ca.pem <span class="token punctuation">\\</span>
     --embed-certs<span class="token operator">=</span>true <span class="token punctuation">\\</span>
     <span class="token parameter variable">--server</span><span class="token operator">=</span>https://10.10.12.235:16443 <span class="token punctuation">\\</span>
     <span class="token parameter variable">--kubeconfig</span><span class="token operator">=</span>/etc/kubernetes/kube-scheduler.kubeconfig

<span class="token comment"># 这段命令是用于设置 kube-scheduler 组件的身份验证凭据，并生成相应的 kubeconfig 文件</span>
kubectl config set-credentials system:kube-scheduler <span class="token punctuation">\\</span>
     --client-certificate<span class="token operator">=</span>/etc/kubernetes/pki/kube-scheduler.pem <span class="token punctuation">\\</span>
     --client-key<span class="token operator">=</span>/etc/kubernetes/pki/kube-scheduler-key.pem <span class="token punctuation">\\</span>
     --embed-certs<span class="token operator">=</span>true <span class="token punctuation">\\</span>
     <span class="token parameter variable">--kubeconfig</span><span class="token operator">=</span>/etc/kubernetes/kube-scheduler.kubeconfig

<span class="token comment"># 该命令用于设置一个名为&quot;system:kube-scheduler@kubernetes&quot;的上下文</span>
kubectl config set-context system:kube-scheduler@kubernetes <span class="token punctuation">\\</span>
     <span class="token parameter variable">--cluster</span><span class="token operator">=</span>kubernetes <span class="token punctuation">\\</span>
     <span class="token parameter variable">--user</span><span class="token operator">=</span>system:kube-scheduler <span class="token punctuation">\\</span>
     <span class="token parameter variable">--kubeconfig</span><span class="token operator">=</span>/etc/kubernetes/kube-scheduler.kubeconfig

<span class="token comment"># 上述命令是使用\`kubectl\`命令来配置Kubernetes集群中的调度器组件。</span>
kubectl config use-context system:kube-scheduler@kubernetes <span class="token punctuation">\\</span>
     <span class="token parameter variable">--kubeconfig</span><span class="token operator">=</span>/etc/kubernetes/kube-scheduler.kubeconfig
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="复制证书和文件-3" tabindex="-1"><a class="header-anchor" href="#复制证书和文件-3"><span>复制证书和文件</span></a></h4><ul><li>复制证书</li></ul><blockquote><p>在k8s-master01节点上</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">host</span> <span class="token keyword">in</span> k8s-master02 k8s-master03<span class="token punctuation">;</span> <span class="token keyword">do</span> sshpass <span class="token parameter variable">-p</span> <span class="token string">&#39;root@123&#39;</span> <span class="token function">scp</span> <span class="token parameter variable">-o</span> <span class="token assign-left variable">StrictHostKeyChecking</span><span class="token operator">=</span>no /etc/kubernetes/pki/kube-scheduler*.pem root@<span class="token variable">\${host}</span>:/etc/kubernetes/pki/<span class="token punctuation">;</span> <span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>复制文件</li></ul><blockquote><p>在k8s-master01节点上</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">host</span> <span class="token keyword">in</span> k8s-master02 k8s-master03<span class="token punctuation">;</span> <span class="token keyword">do</span> sshpass <span class="token parameter variable">-p</span> <span class="token string">&#39;root@123&#39;</span> <span class="token function">scp</span> <span class="token parameter variable">-o</span> <span class="token assign-left variable">StrictHostKeyChecking</span><span class="token operator">=</span>no /etc/kubernetes/kube-scheduler.kubeconfig root@<span class="token variable">\${host}</span>:/etc/kubernetes/<span class="token punctuation">;</span> <span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="创建配置文件kube-scheduler-conf" tabindex="-1"><a class="header-anchor" href="#创建配置文件kube-scheduler-conf"><span>创建配置文件kube-scheduler.conf</span></a></h4><blockquote><p>所有master节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /root/k8s-workspace

<span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/kubernetes/kube-scheduler.conf <span class="token operator">&lt;&lt;</span> <span class="token string">&#39;EOF&#39;
KUBE_SCHEDULER_OPTS=&quot;--bind-address=0.0.0.0 \\
--kubeconfig=/etc/kubernetes/kube-scheduler.kubeconfig \\
--leader-elect=true \\
--v=2&quot;
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="创建启动文件-1" tabindex="-1"><a class="header-anchor" href="#创建启动文件-1"><span>创建启动文件</span></a></h4><blockquote><p>所有master节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> /usr/lib/systemd/system/kube-scheduler.service <span class="token operator">&lt;&lt;</span> <span class="token string">&#39;EOF&#39;
[Unit]
Description=Kubernetes Scheduler
Documentation=https://github.com/kubernetes/kubernetes

[Service]
EnvironmentFile=-/etc/kubernetes/kube-scheduler.conf
ExecStart=/usr/local/bin/kube-scheduler $KUBE_SCHEDULER_OPTS
Restart=on-failure
RestartSec=5

[Install]
WantedBy=multi-user.target
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="启动服务-1" tabindex="-1"><a class="header-anchor" href="#启动服务-1"><span>启动服务</span></a></h4><blockquote><p>所有master节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl daemon-reload 
systemctl <span class="token builtin class-name">enable</span> <span class="token parameter variable">--now</span> kube-scheduler
systemctl status kube-scheduler
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tls-bootstrap配置" tabindex="-1"><a class="header-anchor" href="#tls-bootstrap配置"><span>TLS Bootstrap配置</span></a></h2><h3 id="创建kubelet-bootstrap-kubeconfig" tabindex="-1"><a class="header-anchor" href="#创建kubelet-bootstrap-kubeconfig"><span>创建kubelet-bootstrap.kubeconfig</span></a></h3><blockquote><p>在k8s-master01</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token assign-left variable">BOOTSTRAP_TOKEN</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&quot;,&quot;</span> <span class="token string">&#39;{print $1}&#39;</span> /etc/kubernetes/token.csv<span class="token variable">)</span></span>

<span class="token comment"># 这是一个使用 kubectl 命令设置 Kubernetes 集群配置的命令</span>
kubectl config set-cluster kubernetes     <span class="token punctuation">\\</span>
--certificate-authority<span class="token operator">=</span>/etc/kubernetes/pki/ca.pem     <span class="token punctuation">\\</span>
--embed-certs<span class="token operator">=</span>true     <span class="token parameter variable">--server</span><span class="token operator">=</span>https://10.10.12.235:16443     <span class="token punctuation">\\</span>
<span class="token parameter variable">--kubeconfig</span><span class="token operator">=</span>/etc/kubernetes/kubelet-bootstrap.kubeconfig

<span class="token comment"># 这是一个使用 kubectl 命令设置凭证信息的命令</span>
kubectl config set-credentials kubelet-bootstrap     <span class="token punctuation">\\</span>
<span class="token parameter variable">--token</span><span class="token operator">=</span><span class="token variable">\${BOOTSTRAP_TOKEN}</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">--kubeconfig</span><span class="token operator">=</span>/etc/kubernetes/kubelet-bootstrap.kubeconfig

<span class="token comment"># 这是一个使用 kubectl 命令设置上下文信息的命令</span>
kubectl config set-context default     <span class="token punctuation">\\</span>
<span class="token parameter variable">--cluster</span><span class="token operator">=</span>kubernetes     <span class="token punctuation">\\</span>
<span class="token parameter variable">--user</span><span class="token operator">=</span>kubelet-bootstrap     <span class="token punctuation">\\</span>
<span class="token parameter variable">--kubeconfig</span><span class="token operator">=</span>/etc/kubernetes/kubelet-bootstrap.kubeconfig

<span class="token comment"># 这是一个使用 kubectl 命令设置当前上下文的命令示</span>
kubectl config use-context default     <span class="token punctuation">\\</span>
<span class="token parameter variable">--kubeconfig</span><span class="token operator">=</span>/etc/kubernetes/kubelet-bootstrap.kubeconfig


kubectl create clusterrolebinding cluster-system-anonymous <span class="token parameter variable">--clusterrole</span><span class="token operator">=</span>cluster-admin <span class="token parameter variable">--user</span><span class="token operator">=</span>kubelet-bootstrap
kubectl create clusterrolebinding kubelet-bootstrap <span class="token parameter variable">--clusterrole</span><span class="token operator">=</span>system:node-bootstrapper <span class="token parameter variable">--user</span><span class="token operator">=</span>kubelet-bootstrap
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="部署bootstrap-secret-yaml" tabindex="-1"><a class="header-anchor" href="#部署bootstrap-secret-yaml"><span>部署<code>bootstrap-secret.yaml</code></span></a></h3><ul><li>文件</li></ul><blockquote><p>k8s-master01</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /root/k8s-workspace

<span class="token function">cat</span> <span class="token operator">&gt;</span> bootstrap-secret.yaml <span class="token operator">&lt;&lt;</span> <span class="token string">&#39;EOF&#39;
apiVersion: v1
kind: Secret
metadata:
  name: bootstrap-token-c8ad9c
  namespace: kube-system
type: bootstrap.kubernetes.io/token
stringData:
  description: &quot;The default bootstrap token generated by &#39;kubelet &#39;.&quot;
  token-id: c8ad9c
  token-secret: 2e4d610cf3e7426e
  usage-bootstrap-authentication: &quot;true&quot;
  usage-bootstrap-signing: &quot;true&quot;
  auth-extra-groups:  system:bootstrappers:default-node-token,system:bootstrappers:worker,system:bootstrappers:ingress
 
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: kubelet-bootstrap
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: system:node-bootstrapper
subjects:
- apiGroup: rbac.authorization.k8s.io
  kind: Group
  name: system:bootstrappers:default-node-token
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: node-autoapprove-bootstrap
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: system:certificates.k8s.io:certificatesigningrequests:nodeclient
subjects:
- apiGroup: rbac.authorization.k8s.io
  kind: Group
  name: system:bootstrappers:default-node-token
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: node-autoapprove-certificate-rotation
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: system:certificates.k8s.io:certificatesigningrequests:selfnodeclient
subjects:
- apiGroup: rbac.authorization.k8s.io
  kind: Group
  name: system:nodes
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  annotations:
    rbac.authorization.kubernetes.io/autoupdate: &quot;true&quot;
  labels:
    kubernetes.io/bootstrapping: rbac-defaults
  name: system:kube-apiserver-to-kubelet
rules:
  - apiGroups:
      - &quot;&quot;
    resources:
      - nodes/proxy
      - nodes/stats
      - nodes/log
      - nodes/spec
      - nodes/metrics
    verbs:
      - &quot;*&quot;
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: system:kube-apiserver
  namespace: &quot;&quot;
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: system:kube-apiserver-to-kubelet
subjects:
  - apiGroup: rbac.authorization.k8s.io
    kind: User
    name: kube-apiserver
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>部署</li></ul><blockquote><p>k8s-master01</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubectl create <span class="token parameter variable">-f</span> bootstrap.secret.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="复制证书和文件-4" tabindex="-1"><a class="header-anchor" href="#复制证书和文件-4"><span>复制证书和文件</span></a></h3><ul><li>复制文件</li></ul><blockquote><p>在k8s-master01</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">host</span> <span class="token keyword">in</span> k8s-master02 k8s-master03 k8s-worker01 k8s-worker02<span class="token punctuation">;</span> <span class="token keyword">do</span> sshpass <span class="token parameter variable">-p</span> <span class="token string">&#39;root@123&#39;</span> <span class="token function">scp</span> <span class="token parameter variable">-o</span> <span class="token assign-left variable">StrictHostKeyChecking</span><span class="token operator">=</span>no /etc/kubernetes/kubelet-bootstrap.kubeconfig root@<span class="token variable">\${host}</span>:/etc/kubernetes/<span class="token punctuation">;</span> <span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="安装工作节点组件" tabindex="-1"><a class="header-anchor" href="#安装工作节点组件"><span>安装工作节点组件</span></a></h2><p>若需要在master节点运行pod，也按照以下步骤操作即可，但需要注意配置完成后打上污点，避免master节点上运行太多pod。</p><h3 id="安装软件-1" tabindex="-1"><a class="header-anchor" href="#安装软件-1"><span>安装软件</span></a></h3><blockquote><p>所有worker节点</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>wget https://dl.k8s.io/v1.28.2/kubernetes-server-linux-amd64.tar.gz

tar -xf kubernetes-server-linux-amd64.tar.gz

cp -p kubernetes/server/bin/{kubelet,kube-proxy} /usr/local/bin/

mkdir -p /etc/kubernetes/pki /etc/kubernetes/manifests/ /etc/systemd/system/kubelet.service.d /var/lib/kubelet /var/log/kubernetes/kubelet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="部署kubelet组件" tabindex="-1"><a class="header-anchor" href="#部署kubelet组件"><span>部署kubelet组件</span></a></h3><h4 id="复制证书和文件-5" tabindex="-1"><a class="header-anchor" href="#复制证书和文件-5"><span>复制证书和文件</span></a></h4><ul><li>复制证书</li></ul><blockquote><p>在k8s-master01</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">host</span> <span class="token keyword">in</span> k8s-master02 k8s-master03 k8s-worker01 k8s-worker02<span class="token punctuation">;</span> <span class="token keyword">do</span> sshpass <span class="token parameter variable">-p</span> <span class="token string">&#39;root@123&#39;</span> <span class="token function">scp</span> <span class="token parameter variable">-o</span> <span class="token assign-left variable">StrictHostKeyChecking</span><span class="token operator">=</span>no /etc/kubernetes/pki/ca*.pem root@<span class="token variable">\${host}</span>:/etc/kubernetes/pki/<span class="token punctuation">;</span> <span class="token keyword">done</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">host</span> <span class="token keyword">in</span> k8s-master02 k8s-master03 k8s-worker01 k8s-worker02<span class="token punctuation">;</span> <span class="token keyword">do</span> sshpass <span class="token parameter variable">-p</span> <span class="token string">&#39;root@123&#39;</span> <span class="token function">scp</span> <span class="token parameter variable">-o</span> <span class="token assign-left variable">StrictHostKeyChecking</span><span class="token operator">=</span>no /etc/kubernetes/pki/kube-front-proxy*.pem root@<span class="token variable">\${host}</span>:/etc/kubernetes/pki/<span class="token punctuation">;</span> <span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="创建配置文件kubelet-conf" tabindex="-1"><a class="header-anchor" href="#创建配置文件kubelet-conf"><span>创建配置文件kubelet.conf</span></a></h4><blockquote><p>所有worker节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/kubernetes/kubelet.conf  <span class="token operator">&lt;&lt;</span><span class="token string">&#39;EOF&#39;
kind: KubeletConfiguration
apiVersion: kubelet.config.k8s.io/v1beta1
address: 0.0.0.0
port: 10250
readOnlyPort: 0
authentication:
  anonymous:
    enabled: false
  webhook:
    cacheTTL: 2m0s
    enabled: true
  x509:
    clientCAFile: /etc/kubernetes/pki/ca.pem
authorization:
  mode: Webhook
  webhook:
    cacheAuthorizedTTL: 5m0s
    cacheUnauthorizedTTL: 30s
cgroupDriver: systemd
clusterDNS:
- 10.96.0.10
clusterDomain: cluster.local
healthzBindAddress: 127.0.0.1
healthzPort: 10248
rotateCertificates: true
evictionHard:
  imagefs.available: 15%
  memory.available: 100Mi
  nodefs.available: 10%
  nodefs.inodesFree: 5%
maxOpenFiles: 1000000
maxPods: 110
staticPodPath: /etc/kubernetes/manifests
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">参数说明</p><p>这是一个Kubelet的配置文件，用于配置Kubelet的各项参数。</p><ul><li>apiVersion: kubelet.config.k8s.io/v1beta1：指定了配置文件的API版本为kubelet.config.k8s.io/v1beta1。</li><li>kind: KubeletConfiguration：指定了配置类别为KubeletConfiguration。</li><li>address: 0.0.0.0：指定了Kubelet监听的地址为0.0.0.0。</li><li>port: 10250：指定了Kubelet监听的端口为10250。</li><li>readOnlyPort: 10255：指定了只读端口为10255，用于提供只读的状态信息。</li><li>authentication：指定了认证相关的配置信息。 <ul><li>anonymous.enabled: false：禁用了匿名认证。</li><li>webhook.enabled: true：启用了Webhook认证。</li><li>x509.clientCAFile: /etc/kubernetes/pki/ca.pem：指定了X509证书的客户端CA文件路径。</li></ul></li><li>authorization：指定了授权相关的配置信息。 <ul><li>mode: Webhook：指定了授权模式为Webhook。</li><li>webhook.cacheAuthorizedTTL: 5m0s：指定了授权缓存时间段为5分钟。</li><li>webhook.cacheUnauthorizedTTL: 30s：指定了未授权缓存时间段为30秒。</li></ul></li><li>cgroupDriver: systemd：指定了Cgroup驱动为systemd。</li><li>cgroupsPerQOS: true：启用了每个QoS类别一个Cgroup的设置。</li><li>clusterDNS: 指定了集群的DNS服务器地址列表。 <ul><li>10.96.0.10：指定了DNS服务器地址为10.96.0.10。</li></ul></li><li>clusterDomain: cluster.local：指定了集群的域名后缀为cluster.local。</li><li>containerLogMaxFiles: 5：指定了容器日志文件保留的最大数量为5个。</li><li>containerLogMaxSize: 10Mi：指定了容器日志文件的最大大小为10Mi。</li><li>contentType: application/vnd.kubernetes.protobuf：指定了内容类型为protobuf。</li><li>cpuCFSQuota: true：启用了CPU CFS Quota。</li><li>cpuManagerPolicy: none：禁用了CPU Manager。</li><li>cpuManagerReconcilePeriod: 10s：指定了CPU管理器的调整周期为10秒。</li><li>enableControllerAttachDetach: true：启用了控制器的挂载和拆卸。</li><li>enableDebuggingHandlers: true：启用了调试处理程序。</li><li>enforceNodeAllocatable: 指定了强制节点可分配资源的列表。 <ul><li>pods：强制节点可分配pods资源。</li></ul></li><li>eventBurst: 10：指定了事件突发的最大数量为10。</li><li>eventRecordQPS: 5：指定了事件记录的最大请求量为5。</li><li>evictionHard: 指定了驱逐硬性限制参数的配置信息。 <ul><li>imagefs.available: 15%：指定了镜像文件系统可用空间的限制为15%。</li><li>memory.available: 100Mi：指定了可用内存的限制为100Mi。</li><li>nodefs.available: 10%：指定了节点文件系统可用空间的限制为10%。</li><li>nodefs.inodesFree: 5%：指定了节点文件系统可用inode的限制为5%。</li></ul></li><li>evictionPressureTransitionPeriod: 5m0s：指定了驱逐压力转换的时间段为5分钟。</li><li>failSwapOn: true：指定了在发生OOM时禁用交换分区。</li><li>fileCheckFrequency: 20s：指定了文件检查频率为20秒。</li><li>hairpinMode: promiscuous-bridge：设置了Hairpin Mode为&quot;promiscuous-bridge&quot;。</li><li>healthzBindAddress: 127.0.0.1：指定了健康检查的绑定地址为127.0.0.1。</li><li>healthzPort: 10248：指定了健康检查的端口为10248。</li><li>httpCheckFrequency: 20s：指定了HTTP检查的频率为20秒。</li><li>imageGCHighThresholdPercent: 85：指定了镜像垃圾回收的上阈值为85%。</li><li>imageGCLowThresholdPercent: 80：指定了镜像垃圾回收的下阈值为80%。</li><li>imageMinimumGCAge: 2m0s：指定了镜像垃圾回收的最小时间为2分钟。</li><li>iptablesDropBit: 15：指定了iptables的Drop Bit为15。</li><li>iptablesMasqueradeBit: 14：指定了iptables的Masquerade Bit为14。</li><li>kubeAPIBurst: 10：指定了KubeAPI的突发请求数量为10个。</li><li>kubeAPIQPS: 5：指定了KubeAPI的每秒请求频率为5个。</li><li>makeIPTablesUtilChains: true：指定了是否使用iptables工具链。</li><li>maxOpenFiles: 1000000：指定了最大打开文件数为1000000。</li><li>maxPods: 110：指定了最大的Pod数量为110。</li><li>nodeStatusUpdateFrequency: 10s：指定了节点状态更新的频率为10秒。</li><li>oomScoreAdj: -999：指定了OOM Score Adjustment为-999。</li><li>podPidsLimit: -1：指定了Pod的PID限制为-1，表示无限制。</li><li>registryBurst: 10：指定了Registry的突发请求数量为10个。</li><li>registryPullQPS: 5：指定了Registry的每秒拉取请求数量为5个。</li><li>resolvConf: /etc/resolv.conf：指定了resolv.conf的文件路径。</li><li>rotateCertificates: true：指定了是否轮转证书。</li><li>runtimeRequestTimeout: 2m0s：指定了运行时请求的超时时间为2分钟。</li><li>serializeImagePulls: true：指定了是否序列化镜像拉取。</li><li>staticPodPath: /etc/kubernetes/manifests：指定了静态Pod的路径。</li><li>streamingConnectionIdleTimeout: 4h0m0s：指定了流式连接的空闲超时时间为4小时。</li><li>syncFrequency: 1m0s：指定了同步频率为1分钟。</li><li>volumeStatsAggPeriod: 1m0s：指定了卷统计聚合周期为1分钟。</li></ul></div><h4 id="服务配置" tabindex="-1"><a class="header-anchor" href="#服务配置"><span>服务配置</span></a></h4><blockquote><p>所有worker节点</p></blockquote>`,186),x=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"cat"),s(),e("span",{class:"token operator"},">"),s(" /usr/lib/systemd/system/kubelet.service "),e("span",{class:"token operator"},"<<"),s(),e("span",{class:"token string"},`'EOF'
[Unit]
Description=Kubernetes Kubelet
Documentation=https://github.com/kubernetes/kubernetes
After=containerd.service
Requires=containerd.service

[Service]
ExecStart=/usr/local/bin/kubelet \\
  --bootstrap-kubeconfig=/etc/kubernetes/kubelet-bootstrap.kubeconfig \\
  --cert-dir=/etc/kubernetes/pki \\
  --kubeconfig=/etc/kubernetes/kubelet.kubeconfig \\
  --config=/etc/kubernetes/kubelet.conf \\
  --container-runtime-endpoint=unix:///run/containerd/containerd.sock  \\
  --node-labels=node.kubernetes.io/node= \\
  --rotate-certificates \\
  --pod-infra-container-image=registry.cn-hangzhou.aliyuncs.com/google_containers/pause:3.9 \\
  --v=2
Restart=on-failure
RestartSec=5

[Install]
WantedBy=multi-user.target
EOF`),s(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),_=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"cat"),s(),e("span",{class:"token operator"},">"),s(" /usr/lib/systemd/system/kubelet.service "),e("span",{class:"token operator"},"<<"),s(),e("span",{class:"token string"},`'EOF'
[Unit]
Description=Kubernetes Kubelet
Documentation=https://github.com/kubernetes/kubernetes
After=docker.service
Requires=docker.service
[Service]
ExecStart=/usr/local/bin/kubelet \\
  --bootstrap-kubeconfig=/etc/kubernetes/kubelet-bootstrap.kubeconfig \\
  --cert-dir=/etc/kubernetes/pki \\
  --kubeconfig=/etc/kubernetes/kubelet.kubeconfig \\
  --config=/etc/kubernetes/kubelet.conf \\
  --container-runtime-endpoint=unix:///run/cri-dockerd.sock \\
  --node-labels=node.kubernetes.io/node= \\
  --network-plugin=cni \\
  --rotate-certificates \\
  --pod-infra-container-image=registry.cn-hangzhou.aliyuncs.com/google_containers/pause:3.9 \\
  --log-dir=/var/log/kubernetes/kubelet \\
  --v=2
Restart=on-failure
RestartSec=5

[Install]
WantedBy=multi-user.target
EOF`),s(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),E=t(`<h4 id="启动服务-2" tabindex="-1"><a class="header-anchor" href="#启动服务-2"><span>启动服务</span></a></h4><blockquote><p>所有worker节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl daemon-reload
systemctl <span class="token builtin class-name">enable</span> <span class="token parameter variable">--now</span> kubelet.service
systemctl status kubelet.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="集群信息查询" tabindex="-1"><a class="header-anchor" href="#集群信息查询"><span>集群信息查询</span></a></h4><ul><li>查看集群</li></ul><blockquote><p>master节点</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>kubectl get node
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>查看容器运行时</li></ul><blockquote><p>master节点</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>kubectl describe node | grep Runtime
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="部署kube-proxy组件" tabindex="-1"><a class="header-anchor" href="#部署kube-proxy组件"><span>部署kube-proxy组件</span></a></h3><h4 id="生成kube-proxy证书" tabindex="-1"><a class="header-anchor" href="#生成kube-proxy证书"><span>生成kube-proxy证书</span></a></h4><blockquote><p>在k8s-master01</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> k8s-workspace

<span class="token comment"># 生成kube-proxy证书请求文件</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> kube-proxy-csr.json  <span class="token operator">&lt;&lt;</span> <span class="token string">EOF 
{
  &quot;CN&quot;: &quot;system:kube-proxy&quot;,
  &quot;key&quot;: {
    &quot;algo&quot;: &quot;rsa&quot;,
    &quot;size&quot;: 2048
  },
  &quot;names&quot;: [
    {
      &quot;C&quot;: &quot;CN&quot;,
      &quot;ST&quot;: &quot;Beijing&quot;,
      &quot;L&quot;: &quot;Beijing&quot;,
      &quot;O&quot;: &quot;system:kube-proxy&quot;,
      &quot;OU&quot;: &quot;Kubernetes-manual&quot;
    }
  ]
}
EOF</span>

<span class="token comment"># 生成证书</span>
cfssl gencert <span class="token punctuation">\\</span>
   <span class="token parameter variable">-ca</span><span class="token operator">=</span>/etc/kubernetes/pki/ca.pem <span class="token punctuation">\\</span>
   -ca-key<span class="token operator">=</span>/etc/kubernetes/pki/ca-key.pem <span class="token punctuation">\\</span>
   <span class="token parameter variable">-config</span><span class="token operator">=</span>ca-config.json <span class="token punctuation">\\</span>
   <span class="token parameter variable">-profile</span><span class="token operator">=</span>kubernetes <span class="token punctuation">\\</span>
   kube-proxy-csr.json <span class="token operator">|</span> cfssljson <span class="token parameter variable">-bare</span> /etc/kubernetes/pki/kube-proxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="配置上下文" tabindex="-1"><a class="header-anchor" href="#配置上下文"><span>配置上下文</span></a></h4><blockquote><p>k8s-master01</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 该命令用于配置一个名为&quot;kubernetes&quot;的集群，并将其应用到/etc/kubernetes/kube-proxy.kubeconfig文件中</span>
kubectl config set-cluster kubernetes     <span class="token punctuation">\\</span>
  --certificate-authority<span class="token operator">=</span>/etc/kubernetes/pki/ca.pem     <span class="token punctuation">\\</span>
  --embed-certs<span class="token operator">=</span>true     <span class="token punctuation">\\</span>
  <span class="token parameter variable">--server</span><span class="token operator">=</span>https://10.10.12.235:16443     <span class="token punctuation">\\</span>
  <span class="token parameter variable">--kubeconfig</span><span class="token operator">=</span>/etc/kubernetes/kube-proxy.kubeconfig

<span class="token comment"># 这段命令是用于设置 kube-proxy 组件的身份验证凭据，并生成相应的 kubeconfig 文件</span>
kubectl config set-credentials kube-proxy  <span class="token punctuation">\\</span>
  --client-certificate<span class="token operator">=</span>/etc/kubernetes/pki/kube-proxy.pem     <span class="token punctuation">\\</span>
  --client-key<span class="token operator">=</span>/etc/kubernetes/pki/kube-proxy-key.pem     <span class="token punctuation">\\</span>
  --embed-certs<span class="token operator">=</span>true     <span class="token punctuation">\\</span>
  <span class="token parameter variable">--kubeconfig</span><span class="token operator">=</span>/etc/kubernetes/kube-proxy.kubeconfig

<span class="token comment"># 该命令用于设置一个名为&quot;default&quot;的上下文</span>
kubectl config set-context default    <span class="token punctuation">\\</span>
  <span class="token parameter variable">--cluster</span><span class="token operator">=</span>kubernetes     <span class="token punctuation">\\</span>
  <span class="token parameter variable">--user</span><span class="token operator">=</span>kube-proxy     <span class="token punctuation">\\</span>
  <span class="token parameter variable">--kubeconfig</span><span class="token operator">=</span>/etc/kubernetes/kube-proxy.kubeconfig

<span class="token comment"># 上述命令是使用\`kubectl\`命令来配置Kubernetes集群中的调度器组件</span>
kubectl config use-context default  <span class="token parameter variable">--kubeconfig</span><span class="token operator">=</span>/etc/kubernetes/kube-proxy.kubeconfig
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="复制证书和文件-6" tabindex="-1"><a class="header-anchor" href="#复制证书和文件-6"><span>复制证书和文件</span></a></h4><ul><li>复制证书</li></ul><blockquote><p>k8s-master01</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">host</span> <span class="token keyword">in</span> k8s-master02 k8s-master03 k8s-worker01 k8s-worker02<span class="token punctuation">;</span> <span class="token keyword">do</span> sshpass <span class="token parameter variable">-p</span> <span class="token string">&#39;root@123&#39;</span> <span class="token function">scp</span> <span class="token parameter variable">-o</span> <span class="token assign-left variable">StrictHostKeyChecking</span><span class="token operator">=</span>no /etc/kubernetes/pki/kube-proxy*.pem root@<span class="token variable">\${host}</span>:/etc/kubernetes/pki/<span class="token punctuation">;</span> <span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>复制文件</li></ul><blockquote><p>k8s-master01</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">host</span> <span class="token keyword">in</span> k8s-master02 k8s-master03 k8s-worker01 k8s-worker02<span class="token punctuation">;</span> <span class="token keyword">do</span> sshpass <span class="token parameter variable">-p</span> <span class="token string">&#39;root@123&#39;</span> <span class="token function">scp</span> <span class="token parameter variable">-o</span> <span class="token assign-left variable">StrictHostKeyChecking</span><span class="token operator">=</span>no /etc/kubernetes/kube-proxy.kubeconfig root@<span class="token variable">\${host}</span>:/etc/kubernetes/<span class="token punctuation">;</span> <span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="创建配置文件kube-proxy-conf" tabindex="-1"><a class="header-anchor" href="#创建配置文件kube-proxy-conf"><span>创建配置文件kube-proxy.conf</span></a></h4><blockquote><p>所有worker节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/kubernetes/kube-proxy.conf <span class="token operator">&lt;&lt;</span> <span class="token string">&#39;EOF&#39;
kind: KubeProxyConfiguration
apiVersion: kubeproxy.config.k8s.io/v1alpha1
bindAddress: 0.0.0.0
clientConnection:
  kubeconfig: /etc/kubernetes/kube-proxy.kubeconfig
clusterCIDR: 10.244.0.0/16
healthzBindAddress: 0.0.0.0:10256
metricsBindAddress: 0.0.0.0:10249
mode: &quot;ipvs&quot;
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="配置服务" tabindex="-1"><a class="header-anchor" href="#配置服务"><span>配置服务</span></a></h4><blockquote><p>所有worker节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> /usr/lib/systemd/system/kube-proxy.service <span class="token operator">&lt;&lt;</span> <span class="token string">&#39;EOF&#39;
[Unit]
Description=Kubernetes Kube-Proxy Server
Documentation=https://github.com/kubernetes/kubernetes
After=network.target

[Service]
WorkingDirectory=/etc/kubernetes
ExecStart=/usr/local/bin/kube-proxy \\
  --config=/etc/kubernetes/kube-proxy.conf \\
  --v=2
Restart=on-failure
RestartSec=5
LimitNOFILE=65536

[Install]
WantedBy=multi-user.target
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="启动服务-3" tabindex="-1"><a class="header-anchor" href="#启动服务-3"><span>启动服务</span></a></h4><blockquote><p>所有worker节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl daemon-reload
systemctl <span class="token builtin class-name">enable</span> <span class="token parameter variable">--now</span> kube-proxy.service
systemctl status kube-proxy.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="网络插件" tabindex="-1"><a class="header-anchor" href="#网络插件"><span>网络插件</span></a></h2><h3 id="calico" tabindex="-1"><a class="header-anchor" href="#calico"><span>Calico</span></a></h3><blockquote><p>k8s-master01</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /root/k8s-workspace

<span class="token function">wget</span> https://github.com/projectcalico/calico/blob/master/manifests/calico-typha.yaml

<span class="token comment"># ipv4</span>
<span class="token function">cp</span> calico-typha.yaml calico.yaml
<span class="token comment"># sed -i &quot;s#docker.io/calico/#m.daocloud.io/docker.io/calico/#g&quot; calico.yaml </span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/# - name: CALICO_IPV4POOL_CIDR/- name: CALICO_IPV4POOL_CIDR/g&#39;</span> calico.yaml
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/#   value: &quot;192.168.0.0\\/16&quot;/  value: &quot;10.244.0.0\\/16&quot;/g&#39;</span> calico.yaml

kubectl apply <span class="token parameter variable">-f</span> calico.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="部署coredns" tabindex="-1"><a class="header-anchor" href="#部署coredns"><span>部署CoreDNS</span></a></h2><h3 id="部署" tabindex="-1"><a class="header-anchor" href="#部署"><span>部署</span></a></h3><blockquote><p>k8s-master01</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /root/k8s-workspace

<span class="token function">curl</span> https://raw.githubusercontent.com/coredns/deployment/master/kubernetes/coredns.yaml.sed <span class="token operator">&gt;</span> coredns.yaml

<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/CLUSTER_DNS_IP/10.96.0.10/g&#39;</span> coredns.yaml
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/CLUSTER_DOMAIN/cluster.local/g&#39;</span> coredns.yaml
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/REVERSE_CIDRS/in-addr.arpa ip6.arpa/g&#39;</span> coredns.yaml
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/UPSTREAMNAMESERVER/\\/etc\\/resolv.conf/g&#39;</span> coredns.yaml
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/STUBDOMAINS//g&#39;</span> coredns.yaml

kubectl apply <span class="token parameter variable">-f</span> coredns.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="验证" tabindex="-1"><a class="header-anchor" href="#验证"><span>验证</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># kubectl run busybox --image busybox:1.28 --restart=Never --rm -it busybox -- sh</span>
<span class="token comment"># ping -c 3 baidu.com</span>
<span class="token comment"># nslookup kubernetes.default.svc.cluster.local</span>
<span class="token comment"># exit</span>
kubectl run busybox <span class="token parameter variable">--image</span> busybox:1.28 <span class="token parameter variable">--restart</span><span class="token operator">=</span>Never <span class="token parameter variable">--rm</span> <span class="token parameter variable">-it</span> busybox -- <span class="token function">sh</span> <span class="token parameter variable">-c</span> <span class="token string">&quot;ping -c 3 www.baidu.com;nslookup kubernetes.default.svc.cluster.local&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="集群验证" tabindex="-1"><a class="header-anchor" href="#集群验证"><span>集群验证</span></a></h2><h3 id="部署pod资源" tabindex="-1"><a class="header-anchor" href="#部署pod资源"><span>部署pod资源</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>cat<span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">|</span> kubectl apply <span class="token parameter variable">-f</span> -</span>
apiVersion: v1
kind: Pod
metadata:
  name: busybox
  namespace: default
spec:
  containers:
  - name: busybox
    image: docker.io/library/busybox:1.28
    command:
      - sleep
      - &quot;3600&quot;
    imagePullPolicy: IfNotPresent
  restartPolicy: Always
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="用pod解析默认命名空间中的kubernetes" tabindex="-1"><a class="header-anchor" href="#用pod解析默认命名空间中的kubernetes"><span>用pod解析默认命名空间中的kubernetes</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get svc</span>
NAME            TYPE        CLUSTER-IP     EXTERNAL-IP   PORT<span class="token punctuation">(</span>S<span class="token punctuation">)</span>        AGE
kubernetes      ClusterIP   <span class="token number">10.96</span>.0.1      <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">443</span>/TCP        39h
nginx-service   NodePort    <span class="token number">10.96</span>.189.83   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">80</span>:30380/TCP   22h

<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl exec  busybox -n default -- nslookup kubernetes</span>
Server:    <span class="token number">10.96</span>.0.10
Address <span class="token number">1</span>: <span class="token number">10.96</span>.0.10 kube-dns.kube-system.svc.cluster.local

Name:      kubernetes
Address <span class="token number">1</span>: <span class="token number">10.96</span>.0.1 kubernetes.default.svc.cluster.local


<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl exec  busybox -n default -- nslookup nginx-service</span>
Server:    <span class="token number">10.96</span>.0.10
Address <span class="token number">1</span>: <span class="token number">10.96</span>.0.10 kube-dns.kube-system.svc.cluster.local

Name:      nginx-service
Address <span class="token number">1</span>: <span class="token number">10.96</span>.189.83 nginx-service.default.svc.cluster.local
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试跨命名空间是否可以解析" tabindex="-1"><a class="header-anchor" href="#测试跨命名空间是否可以解析"><span>测试跨命名空间是否可以解析</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get svc -A</span>
NAMESPACE          NAME                              TYPE        CLUSTER-IP      EXTERNAL-IP   PORT<span class="token punctuation">(</span>S<span class="token punctuation">)</span>                  AGE
calico-apiserver   calico-api                        ClusterIP   <span class="token number">10.96</span>.149.141   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">443</span>/TCP                  23h
calico-system      calico-kube-controllers-metrics   ClusterIP   None            <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">9094</span>/TCP                 23h
calico-system      calico-typha                      ClusterIP   <span class="token number">10.96</span>.175.255   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">5473</span>/TCP                 23h
default            kubernetes                        ClusterIP   <span class="token number">10.96</span>.0.1       <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">443</span>/TCP                  39h
default            nginx-service                     NodePort    <span class="token number">10.96</span>.189.83    <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">80</span>:30380/TCP             22h
kube-system        kube-dns                          ClusterIP   <span class="token number">10.96</span>.0.10      <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">53</span>/UDP,53/TCP,9153/TCP   23h
kube-system        metrics-server                    ClusterIP   <span class="token number">10.96</span>.198.31    <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">443</span>/TCP                  93m

<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl exec  busybox -n default -- nslookup metrics-server.kube-system</span>
Server:    <span class="token number">10.96</span>.0.10
Address <span class="token number">1</span>: <span class="token number">10.96</span>.0.10 kube-dns.kube-system.svc.cluster.local

Name:      metrics-server.kube-system
Address <span class="token number">1</span>: <span class="token number">10.96</span>.198.31 metrics-server.kube-system.svc.cluster.local
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试kubernetes-svc和coredns" tabindex="-1"><a class="header-anchor" href="#测试kubernetes-svc和coredns"><span>测试kubernetes svc和coredns</span></a></h3><p>确保所有开k8s节点能够访问kubernetes svc和coredns服务。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get svc -A</span>
<span class="token punctuation">\\</span>NAMESPACE          NAME                              TYPE        CLUSTER-IP      EXTERNAL-IP   PORT<span class="token punctuation">(</span>S<span class="token punctuation">)</span>                  AGE
calico-apiserver   calico-api                        ClusterIP   <span class="token number">10.96</span>.149.141   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">443</span>/TCP                  23h
calico-system      calico-kube-controllers-metrics   ClusterIP   None            <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">9094</span>/TCP                 23h
calico-system      calico-typha                      ClusterIP   <span class="token number">10.96</span>.175.255   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">5473</span>/TCP                 23h
default            kubernetes                        ClusterIP   <span class="token number">10.96</span>.0.1       <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">443</span>/TCP                  39h
default            nginx-service                     NodePort    <span class="token number">10.96</span>.189.83    <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">80</span>:30380/TCP             22h
kube-system        kube-dns                          ClusterIP   <span class="token number">10.96</span>.0.10      <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">53</span>/UDP,53/TCP,9153/TCP   23h
kube-system        metrics-server                    ClusterIP   <span class="token number">10.96</span>.198.31    <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">443</span>/TCP                  102m


<span class="token comment"># telnet 10.96.0.1 443</span>
<span class="token comment"># telnet 10.96.0.10 53</span>
<span class="token function">curl</span> <span class="token number">10.96</span>.0.10:53
<span class="token function">curl</span> <span class="token number">10.96</span>.0.1:443

<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># curl 10.96.0.10:53</span>
curl: <span class="token punctuation">(</span><span class="token number">52</span><span class="token punctuation">)</span> Empty reply from server


<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># curl 10.96.0.1:443</span>
Client sent an HTTP request to an HTTPS server.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pod之间连通性测试" tabindex="-1"><a class="header-anchor" href="#pod之间连通性测试"><span>Pod之间连通性测试</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pods -A -o wide</span>
NAMESPACE          NAME                                       READY   STATUS    RESTARTS       AGE    IP               NODE           NOMINATED NODE   READINESS GATES
calico-apiserver   calico-apiserver-7bb8bb96b4-n87lp          <span class="token number">1</span>/1     Running   <span class="token number">0</span>              23h    <span class="token number">10.244</span>.79.66     k8s-worker01   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
calico-apiserver   calico-apiserver-7bb8bb96b4-whr8s          <span class="token number">1</span>/1     Running   <span class="token number">0</span>              23h    <span class="token number">10.244</span>.69.195    k8s-worker02   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
calico-system      calico-kube-controllers-685f7c9b88-k84zt   <span class="token number">1</span>/1     Running   <span class="token number">0</span>              23h    <span class="token number">10.244</span>.69.194    k8s-worker02   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
calico-system      calico-node-6q2bq                          <span class="token number">1</span>/1     Running   <span class="token number">0</span>              98m    <span class="token number">10.10</span>.12.212     k8s-master03   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
calico-system      calico-node-jrpsc                          <span class="token number">1</span>/1     Running   <span class="token number">0</span>              98m    <span class="token number">10.10</span>.12.211     k8s-master02   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
calico-system      calico-node-jw7hr                          <span class="token number">1</span>/1     Running   <span class="token number">0</span>              23h    <span class="token number">10.10</span>.12.214     k8s-worker02   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
calico-system      calico-node-sxwp5                          <span class="token number">0</span>/1     Running   <span class="token number">2</span> <span class="token punctuation">(</span>9m1s ago<span class="token punctuation">)</span>   98m    <span class="token number">10.10</span>.12.210     k8s-master01   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
calico-system      calico-node-wmsv2                          <span class="token number">1</span>/1     Running   <span class="token number">0</span>              23h    <span class="token number">10.10</span>.12.213     k8s-worker01   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
calico-system      calico-typha-7cd49cc95b-7cfks              <span class="token number">0</span>/1     Running   <span class="token number">6</span> <span class="token punctuation">(</span>9m1s ago<span class="token punctuation">)</span>   98m    <span class="token number">10.10</span>.12.210     k8s-master01   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
calico-system      calico-typha-7cd49cc95b-bzszd              <span class="token number">1</span>/1     Running   <span class="token number">4</span> <span class="token punctuation">(</span>96m ago<span class="token punctuation">)</span>    98m    <span class="token number">10.10</span>.12.212     k8s-master03   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
calico-system      calico-typha-7cd49cc95b-kj79p              <span class="token number">1</span>/1     Running   <span class="token number">0</span>              23h    <span class="token number">10.10</span>.12.213     k8s-worker01   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
calico-system      csi-node-driver-2nbnv                      <span class="token number">2</span>/2     Running   <span class="token number">0</span>              95m    <span class="token number">10.244</span>.195.1     k8s-master03   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
calico-system      csi-node-driver-5fkx9                      <span class="token number">2</span>/2     Running   <span class="token number">0</span>              95m    <span class="token number">10.244</span>.122.129   k8s-master02   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
calico-system      csi-node-driver-l6szs                      <span class="token number">2</span>/2     Running   <span class="token number">0</span>              23h    <span class="token number">10.244</span>.69.193    k8s-worker02   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
calico-system      csi-node-driver-rvjvs                      <span class="token number">2</span>/2     Running   <span class="token number">0</span>              23h    <span class="token number">10.244</span>.79.65     k8s-worker01   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
calico-system      csi-node-driver-spgf8                      <span class="token number">2</span>/2     Running   <span class="token number">4</span> <span class="token punctuation">(</span>9m1s ago<span class="token punctuation">)</span>   96m    <span class="token number">10.244</span>.32.131    k8s-master01   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
default            busybox                                    <span class="token number">1</span>/1     Running   <span class="token number">22</span> <span class="token punctuation">(</span>29m ago<span class="token punctuation">)</span>   22h    <span class="token number">10.244</span>.79.72     k8s-worker01   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
default            nginx-test-5cddb9b559-9sds4                <span class="token number">1</span>/1     Running   <span class="token number">0</span>              22h    <span class="token number">10.244</span>.69.207    k8s-worker02   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
default            nginx-test-5cddb9b559-ffpv5                <span class="token number">1</span>/1     Running   <span class="token number">0</span>              22h    <span class="token number">10.244</span>.79.73     k8s-worker01   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
kube-system        coredns-5f77c4474d-87cdg                   <span class="token number">1</span>/1     Running   <span class="token number">0</span>              23h    <span class="token number">10.244</span>.79.68     k8s-worker01   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
kube-system        metrics-server-576bd7bbd4-66pcw            <span class="token number">1</span>/1     Running   <span class="token number">0</span>              108m   <span class="token number">10.244</span>.79.75     k8s-worker01   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
tigera-operator    tigera-operator-8547bd6cc6-sbb7n           <span class="token number">1</span>/1     Running   <span class="token number">0</span>              34h    <span class="token number">10.10</span>.12.214     k8s-worker02   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>


<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl -n default exec -ti busybox -- sh -c &quot;ping -c 3 10.244.79.68&quot;</span>
PING <span class="token number">10.244</span>.79.68 <span class="token punctuation">(</span><span class="token number">10.244</span>.79.68<span class="token punctuation">)</span>: <span class="token number">56</span> data bytes
<span class="token number">64</span> bytes from <span class="token number">10.244</span>.79.68: <span class="token assign-left variable">seq</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">63</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.105</span> ms
<span class="token number">64</span> bytes from <span class="token number">10.244</span>.79.68: <span class="token assign-left variable">seq</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">63</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.073</span> ms
<span class="token number">64</span> bytes from <span class="token number">10.244</span>.79.68: <span class="token assign-left variable">seq</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">63</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.070</span> ms

--- <span class="token number">10.244</span>.79.68 <span class="token function">ping</span> statistics ---
<span class="token number">3</span> packets transmitted, <span class="token number">3</span> packets received, <span class="token number">0</span>% packet loss
round-trip min/avg/max <span class="token operator">=</span> <span class="token number">0.070</span>/0.082/0.105 ms
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">测试结果</p><p>default命名空间到kube-system命名空间中pod能够ping通。</p></div>`,56);function w(C,S){const c=o("CodeTabs"),r=o("RouteLink");return u(),v("div",null,[k,l(c,{id:"184",data:[{id:"通用"},{id:"离线"},{id:"CentOS 7.x"},{id:"CentOS 8.x"}],active:0},{title0:n(({value:a,isActive:i})=>[s("通用")]),title1:n(({value:a,isActive:i})=>[s("离线")]),title2:n(({value:a,isActive:i})=>[s("CentOS 7.x")]),title3:n(({value:a,isActive:i})=>[s("CentOS 8.x")]),tab0:n(({value:a,isActive:i})=>[m]),tab1:n(({value:a,isActive:i})=>[h]),tab2:n(({value:a,isActive:i})=>[g]),tab3:n(({value:a,isActive:i})=>[f]),_:1}),q,e("ul",null,[e("li",null,[l(r,{to:"/guide/cloudnative/kubernetes/ha-loadbanlance.html#%E5%AE%89%E8%A3%85%E4%B8%8E%E9%85%8D%E7%BD%AEhaproxy"},{default:n(()=>[s("Keepalived+Haproxy")]),_:1})]),e("li",null,[l(r,{to:"/guide/cloudnative/kubernetes/ha-loadbanlance.html#%E5%AE%89%E8%A3%85%E4%B8%8E%E9%85%8D%E7%BD%AEnginx"},{default:n(()=>[s("Keepalived+nginx")]),_:1})]),e("li",null,[l(r,{to:"/guide/cloudnative/kubernetes/ha-loadbanlance.html#%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1%E5%99%A8kube-vip"},{default:n(()=>[s("kube-vip")]),_:1})])]),y,l(c,{id:"1803",data:[{id:"containerd"},{id:"docker"}],active:0},{title0:n(({value:a,isActive:i})=>[s("containerd")]),title1:n(({value:a,isActive:i})=>[s("docker")]),tab0:n(({value:a,isActive:i})=>[x]),tab1:n(({value:a,isActive:i})=>[_]),_:1}),E])}const A=p(b,[["render",w],["__file","install-k8s-ha-with-binary-manually.html.vue"]]),I=JSON.parse('{"path":"/guide/cloudnative/kubernetes/installation/install-k8s-ha-with-binary-manually.html","title":"二进制方式安装Kubernetes高可用集群","lang":"zh-CN","frontmatter":{"title":"二进制方式安装Kubernetes高可用集群","description":"Kubernetes高可用架构 堆叠（Stacked）etcd拓扑 堆叠（Stacked）etcd 拓扑 Kubernetes 节点规划 环境准备 配置主机名称 master 节点 worker 节点: k8s-worker01 worker 节点: k8s-worker02 配置 hosts master 节点+worker 节点 关闭 selinu...","head":[["meta",{"property":"og:url","content":"https://github.com/abelit/abelit-datapeacock.git/guide/cloudnative/kubernetes/installation/install-k8s-ha-with-binary-manually.html"}],["meta",{"property":"og:site_name","content":"数之雀"}],["meta",{"property":"og:title","content":"二进制方式安装Kubernetes高可用集群"}],["meta",{"property":"og:description","content":"Kubernetes高可用架构 堆叠（Stacked）etcd拓扑 堆叠（Stacked）etcd 拓扑 Kubernetes 节点规划 环境准备 配置主机名称 master 节点 worker 节点: k8s-worker01 worker 节点: k8s-worker02 配置 hosts master 节点+worker 节点 关闭 selinu..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-11T14:06:18.000Z"}],["meta",{"property":"article:author","content":"Abelit"}],["meta",{"property":"article:modified_time","content":"2024-05-11T14:06:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"二进制方式安装Kubernetes高可用集群\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-11T14:06:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Abelit\\",\\"url\\":\\"https://github.com/abelit\\"}]}"]]},"headers":[{"level":2,"title":"Kubernetes高可用架构","slug":"kubernetes高可用架构","link":"#kubernetes高可用架构","children":[]},{"level":2,"title":"Kubernetes 节点规划","slug":"kubernetes-节点规划","link":"#kubernetes-节点规划","children":[]},{"level":2,"title":"环境准备","slug":"环境准备","link":"#环境准备","children":[{"level":3,"title":"配置主机名称","slug":"配置主机名称","link":"#配置主机名称","children":[]},{"level":3,"title":"配置 hosts","slug":"配置-hosts","link":"#配置-hosts","children":[]},{"level":3,"title":"关闭 selinux 和防火墙","slug":"关闭-selinux-和防火墙","link":"#关闭-selinux-和防火墙","children":[]},{"level":3,"title":"关闭 swap","slug":"关闭-swap","link":"#关闭-swap","children":[]},{"level":3,"title":"节点间免密登录（可选）","slug":"节点间免密登录-可选","link":"#节点间免密登录-可选","children":[]},{"level":3,"title":"内核升级（可选）","slug":"内核升级-可选","link":"#内核升级-可选","children":[]},{"level":3,"title":"内核参数设置","slug":"内核参数设置","link":"#内核参数设置","children":[]},{"level":3,"title":"网桥配置","slug":"网桥配置","link":"#网桥配置","children":[]},{"level":3,"title":"配置 ipset 与 ipvsaddm","slug":"配置-ipset-与-ipvsaddm","link":"#配置-ipset-与-ipvsaddm","children":[]},{"level":3,"title":"时钟同步","slug":"时钟同步","link":"#时钟同步","children":[]}]},{"level":2,"title":"容器运行时","slug":"容器运行时","link":"#容器运行时","children":[{"level":3,"title":"cgoup 驱动","slug":"cgoup-驱动","link":"#cgoup-驱动","children":[]},{"level":3,"title":"Docker Engine","slug":"docker-engine","link":"#docker-engine","children":[]},{"level":3,"title":"Cotainerd","slug":"cotainerd","link":"#cotainerd","children":[]},{"level":3,"title":"CRI-O","slug":"cri-o","link":"#cri-o","children":[]}]},{"level":2,"title":"下载软件包（可选）","slug":"下载软件包-可选","link":"#下载软件包-可选","children":[]},{"level":2,"title":"安装自签证书","slug":"安装自签证书","link":"#安装自签证书","children":[{"level":3,"title":"安装cfssl","slug":"安装cfssl","link":"#安装cfssl","children":[]},{"level":3,"title":"根证书配置文件","slug":"根证书配置文件","link":"#根证书配置文件","children":[]}]},{"level":2,"title":"负载均衡器","slug":"负载均衡器","link":"#负载均衡器","children":[]},{"level":2,"title":"搭建etcd集群","slug":"搭建etcd集群","link":"#搭建etcd集群","children":[{"level":3,"title":"安装etcd软件","slug":"安装etcd软件","link":"#安装etcd软件","children":[]},{"level":3,"title":"生成etcd证书","slug":"生成etcd证书","link":"#生成etcd证书","children":[]},{"level":3,"title":"部署etcd集群","slug":"部署etcd集群","link":"#部署etcd集群","children":[]}]},{"level":2,"title":"安装控制节点","slug":"安装控制节点","link":"#安装控制节点","children":[{"level":3,"title":"安装软件","slug":"安装软件","link":"#安装软件","children":[]},{"level":3,"title":"部署kube-apiserver组件","slug":"部署kube-apiserver组件","link":"#部署kube-apiserver组件","children":[]},{"level":3,"title":"部署kubectl","slug":"部署kubectl","link":"#部署kubectl","children":[]},{"level":3,"title":"部署kube-controller-manager组件","slug":"部署kube-controller-manager组件","link":"#部署kube-controller-manager组件","children":[]},{"level":3,"title":"部署kube-scheduler组件","slug":"部署kube-scheduler组件","link":"#部署kube-scheduler组件","children":[]}]},{"level":2,"title":"TLS Bootstrap配置","slug":"tls-bootstrap配置","link":"#tls-bootstrap配置","children":[{"level":3,"title":"创建kubelet-bootstrap.kubeconfig","slug":"创建kubelet-bootstrap-kubeconfig","link":"#创建kubelet-bootstrap-kubeconfig","children":[]},{"level":3,"title":"部署bootstrap-secret.yaml","slug":"部署bootstrap-secret-yaml","link":"#部署bootstrap-secret-yaml","children":[]},{"level":3,"title":"复制证书和文件","slug":"复制证书和文件-4","link":"#复制证书和文件-4","children":[]}]},{"level":2,"title":"安装工作节点组件","slug":"安装工作节点组件","link":"#安装工作节点组件","children":[{"level":3,"title":"安装软件","slug":"安装软件-1","link":"#安装软件-1","children":[]},{"level":3,"title":"部署kubelet组件","slug":"部署kubelet组件","link":"#部署kubelet组件","children":[]},{"level":3,"title":"部署kube-proxy组件","slug":"部署kube-proxy组件","link":"#部署kube-proxy组件","children":[]}]},{"level":2,"title":"网络插件","slug":"网络插件","link":"#网络插件","children":[{"level":3,"title":"Calico","slug":"calico","link":"#calico","children":[]}]},{"level":2,"title":"部署CoreDNS","slug":"部署coredns","link":"#部署coredns","children":[{"level":3,"title":"部署","slug":"部署","link":"#部署","children":[]},{"level":3,"title":"验证","slug":"验证","link":"#验证","children":[]}]},{"level":2,"title":"集群验证","slug":"集群验证","link":"#集群验证","children":[{"level":3,"title":"部署pod资源","slug":"部署pod资源","link":"#部署pod资源","children":[]},{"level":3,"title":"用pod解析默认命名空间中的kubernetes","slug":"用pod解析默认命名空间中的kubernetes","link":"#用pod解析默认命名空间中的kubernetes","children":[]},{"level":3,"title":"测试跨命名空间是否可以解析","slug":"测试跨命名空间是否可以解析","link":"#测试跨命名空间是否可以解析","children":[]},{"level":3,"title":"测试kubernetes svc和coredns","slug":"测试kubernetes-svc和coredns","link":"#测试kubernetes-svc和coredns","children":[]},{"level":3,"title":"Pod之间连通性测试","slug":"pod之间连通性测试","link":"#pod之间连通性测试","children":[]}]}],"git":{"createdTime":1715436378000,"updatedTime":1715436378000,"contributors":[{"name":"ableit","email":"ychenid@live.com","commits":1}]},"readingTime":{"minutes":34.23,"words":10270},"filePathRelative":"guide/cloudnative/kubernetes/installation/install-k8s-ha-with-binary-manually.md","localizedDate":"2024年5月11日","autoDesc":true,"excerpt":"<h2>Kubernetes高可用架构</h2>\\n<ul>\\n<li>堆叠（Stacked）etcd拓扑\\n</li>\\n</ul>\\n<h2>Kubernetes 节点规划</h2>\\n<table>\\n<thead>\\n<tr>\\n<th>主机名称</th>\\n<th>IP 地址</th>\\n<th>用途</th>\\n<th>组件</th>\\n<th>版本</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>k8s-master01</td>\\n<td>10.10.12.210,10.10.12.235(vip)</td>\\n<td>master 节点</td>\\n<td>kube-apiserver,kube-scheduler,etcd,kube-controller-manager,kubectl,kubelet,kubeadm,keepalive,nginx</td>\\n<td>v1.28.2</td>\\n</tr>\\n<tr>\\n<td>k8s-master02</td>\\n<td>10.10.12.211,10.10.12.235(vip)</td>\\n<td>master 节点</td>\\n<td>kube-apiserver,kube-scheduler,etcd,kube-controller-manager,kubectl,kubelet,kubeadm,keepalive,nginx</td>\\n<td>v1.28.2</td>\\n</tr>\\n<tr>\\n<td>k8s-master03</td>\\n<td>10.10.12.212,10.10.12.235(vip)</td>\\n<td>master 节点</td>\\n<td>kube-apiserver,kube-scheduler,etcd,kube-controller-manager,kubectl,kubelet,kubeadm,keepalive,nginx</td>\\n<td>v1.28.2</td>\\n</tr>\\n<tr>\\n<td>k8s-worker01</td>\\n<td>10.10.12.213</td>\\n<td>worker 节点</td>\\n<td>kube-proxy,kubelet,kubeadm</td>\\n<td>v1.28.2</td>\\n</tr>\\n<tr>\\n<td>k8s-worker02</td>\\n<td>10.10.12.214</td>\\n<td>worker 节点</td>\\n<td>kube-proxy,kubelet,kubeadm</td>\\n<td>v1.28.2</td>\\n</tr>\\n</tbody>\\n</table>"}');export{A as comp,I as data};
