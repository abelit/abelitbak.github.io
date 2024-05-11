import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as u,c as k,b as l,w as a,a as n,f as o,d as s}from"./app-DR5J2daJ.js";const d={},m=n("h2",{id:"主机准备",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#主机准备"},[n("span",null,"主机准备")])],-1),b=n("h3",{id:"配置主机名称",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置主机名称"},[n("span",null,"配置主机名称")])],-1),v=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# 对应的节点进行设置"),s(`
hostnamectl set-hostname node1
hostnamectl set-hostname node2
hostnamectl set-hostname node3
hostnamectl set-hostname node4
hostnamectl set-hostname node5

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# 在管理节点上执行即可"),s(`
`),n("span",{class:"token assign-left variable"},"hosts"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"10.10.12.210 10.10.12.211 10.10.12.212 10.10.12.213 10.10.12.214"'),s(`
`),n("span",{class:"token assign-left variable"},"num"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"1"),s(`
`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token for-or-select variable"},"host"),s(),n("span",{class:"token keyword"},"in"),s(),n("span",{class:"token variable"},"$hosts"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"do"),s(" sshpass "),n("span",{class:"token parameter variable"},"-p"),s(),n("span",{class:"token string"},"'root@123'"),s(),n("span",{class:"token function"},"ssh"),s(),n("span",{class:"token parameter variable"},"-o"),s(),n("span",{class:"token assign-left variable"},"StrictHostKeyChecking"),n("span",{class:"token operator"},"="),s("no root@"),n("span",{class:"token variable"},"${host}"),s(" hostnamectl set-hostname "),n("span",{class:"token function"},"node"),n("span",{class:"token variable"},"$num"),s(),n("span",{class:"token punctuation"},";"),n("span",{class:"token assign-left variable"},"num"),n("span",{class:"token operator"},"="),n("span",{class:"token variable"},[n("span",{class:"token variable"},"$(("),s("$num"),n("span",{class:"token operator"},"+"),n("span",{class:"token number"},"1"),n("span",{class:"token variable"},"))")]),n("span",{class:"token punctuation"},";"),n("span",{class:"token keyword"},"done"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=o(`<h3 id="配置-hosts" tabindex="-1"><a class="header-anchor" href="#配置-hosts"><span>配置 hosts</span></a></h3><blockquote><p>master 节点+worker 节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;&gt;</span> /etc/hosts <span class="token operator">&lt;&lt;</span><span class="token string">EOF
10.10.12.210 node1
10.10.12.211 node2
10.10.12.212 node3
10.10.12.213 node4
10.10.12.214 node5
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="关闭-selinux-和防火墙" tabindex="-1"><a class="header-anchor" href="#关闭-selinux-和防火墙"><span>关闭 selinux 和防火墙</span></a></h3><blockquote><p>master 节点+worker 节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/^SELINUX=enforcing/SELINUX=disabled/g&#39;</span> /etc/selinux/config
setenforce <span class="token number">0</span>
sestatus

systemctl stop firewalld.service
systemctl disable firewalld.service
firewall-cmd <span class="token parameter variable">--state</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="关闭-swap" tabindex="-1"><a class="header-anchor" href="#关闭-swap"><span>关闭 swap</span></a></h3><blockquote><p>master 节点+worker 节点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/.*swap.*/#&amp;/&#39;</span> /etc/fstab
swapoff <span class="token parameter variable">-a</span>
<span class="token function">free</span> <span class="token parameter variable">-m</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装依赖" tabindex="-1"><a class="header-anchor" href="#安装依赖"><span>安装依赖</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> conntrack socat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="时钟同步" tabindex="-1"><a class="header-anchor" href="#时钟同步"><span>时钟同步</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> ntpdate
ntpdate ntp1.aliyun.com

<span class="token builtin class-name">echo</span> <span class="token string">&quot;* */1 * * * ntpdate ntp1.aliyun.com&quot;</span> <span class="token operator">&gt;</span> /tmp/crontab.txt

<span class="token function">crontab</span> /tmp/crontab.txt

<span class="token function">crontab</span> <span class="token parameter variable">-l</span>

<span class="token function">rm</span> <span class="token parameter variable">-f</span> /tmp/crontab.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="内核升级-可选" tabindex="-1"><a class="header-anchor" href="#内核升级-可选"><span>内核升级（可选）</span></a></h3>`,14),g=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# Ubuntu忽略，CentOS执行"),s(`
 
`),n("span",{class:"token comment"},"# 安装最新的内核"),s(`
`),n("span",{class:"token comment"},"# 我这里选择的是稳定版kernel-ml   如需更新长期维护版本kernel-lt  "),s(`
yum `),n("span",{class:"token parameter variable"},"-y"),s(),n("span",{class:"token parameter variable"},"--enablerepo"),n("span",{class:"token operator"},"="),s("elrepo-kernel  "),n("span",{class:"token function"},"install"),s(`  kernel-ml
 
`),n("span",{class:"token comment"},"# 查看已安装那些内核"),s(`
`),n("span",{class:"token function"},"rpm"),s(),n("span",{class:"token parameter variable"},"-qa"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token function"},"grep"),s(` kernel
 
`),n("span",{class:"token comment"},"# 查看默认内核"),s(`
grubby --default-kernel
 
`),n("span",{class:"token comment"},"# 若不是最新的使用命令设置"),s(`
grubby --set-default `),n("span",{class:"token variable"},[n("span",{class:"token variable"},"$("),n("span",{class:"token function"},"ls"),s(" /boot/vmlinuz-* "),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token function"},"grep"),s(" elrepo"),n("span",{class:"token variable"},")")]),s(`
 
`),n("span",{class:"token comment"},"# 重启生效"),s(`
`),n("span",{class:"token function"},"reboot"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# 离线版本 "),s(`
yum `),n("span",{class:"token function"},"install"),s(),n("span",{class:"token parameter variable"},"-y"),s(` /root/cby/kernel-lt-*-1.el7.elrepo.x86_64.rpm 
grubby --set-default `),n("span",{class:"token variable"},[n("span",{class:"token variable"},"$("),n("span",{class:"token function"},"ls"),s(" /boot/vmlinuz-* "),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token function"},"grep"),s(" elrepo"),n("span",{class:"token variable"},")")]),s(` 
grubby --default-kernel 
`),n("span",{class:"token function"},"reboot"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# v7 整合命令为："),s(`
yum `),n("span",{class:"token function"},"install"),s(" https://www.elrepo.org/elrepo-release-7.el7.elrepo.noarch.rpm "),n("span",{class:"token parameter variable"},"-y"),s(` 
`),n("span",{class:"token function"},"sed"),s(),n("span",{class:"token parameter variable"},"-i"),s(),n("span",{class:"token string"},'"s@mirrorlist@#mirrorlist@g"'),s(` /etc/yum.repos.d/elrepo.repo 
`),n("span",{class:"token function"},"sed"),s(),n("span",{class:"token parameter variable"},"-i"),s(),n("span",{class:"token string"},'"s@elrepo.org/linux@mirrors.tuna.tsinghua.edu.cn/elrepo@g"'),s(` /etc/yum.repos.d/elrepo.repo 
yum  `),n("span",{class:"token parameter variable"},"--disablerepo"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"*"'),s("  "),n("span",{class:"token parameter variable"},"--enablerepo"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"elrepo-kernel"'),s("  list  available "),n("span",{class:"token parameter variable"},"-y"),s(` 
yum  `),n("span",{class:"token parameter variable"},"--enablerepo"),n("span",{class:"token operator"},"="),s("elrepo-kernel  "),n("span",{class:"token function"},"install"),s("  kernel-lt "),n("span",{class:"token parameter variable"},"-y"),s(` 
grubby --set-default `),n("span",{class:"token variable"},[n("span",{class:"token variable"},"$("),n("span",{class:"token function"},"ls"),s(" /boot/vmlinuz-* "),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token function"},"grep"),s(" elrepo"),n("span",{class:"token variable"},")")]),s(` 
grubby --default-kernel 
`),n("span",{class:"token function"},"reboot"),s(` 
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# v8 整合命令为："),s(`
yum `),n("span",{class:"token function"},"install"),s(" https://www.elrepo.org/elrepo-release-8.el8.elrepo.noarch.rpm "),n("span",{class:"token parameter variable"},"-y"),s(` 
`),n("span",{class:"token function"},"sed"),s(),n("span",{class:"token parameter variable"},"-i"),s(),n("span",{class:"token string"},'"s@mirrorlist@#mirrorlist@g"'),s(` /etc/yum.repos.d/elrepo.repo
`),n("span",{class:"token function"},"sed"),s(),n("span",{class:"token parameter variable"},"-i"),s(),n("span",{class:"token string"},'"s@elrepo.org/linux@mirrors.tuna.tsinghua.edu.cn/elrepo@g"'),s(` /etc/yum.repos.d/elrepo.repo
yum  `),n("span",{class:"token parameter variable"},"--disablerepo"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"*"'),s("  "),n("span",{class:"token parameter variable"},"--enablerepo"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"elrepo-kernel"'),s("  list  available "),n("span",{class:"token parameter variable"},"-y"),s(`
yum  `),n("span",{class:"token parameter variable"},"--enablerepo"),n("span",{class:"token operator"},"="),s("elrepo-kernel  "),n("span",{class:"token function"},"install"),s(" kernel-lt "),n("span",{class:"token parameter variable"},"-y"),s(` 
grubby --default-kernel
`),n("span",{class:"token function"},"reboot"),s(` 
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),P=o(`<h2 id="安装sealos" tabindex="-1"><a class="header-anchor" href="#安装sealos"><span>安装sealos</span></a></h2><p>在管理节点上安装sealos（非k8s集群节点）</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">wget</span> https://github.com/labring/sealos/releases/download/v4.3.7/sealos_4.3.7_linux_amd64.tar.gz

<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> sealos_4.3.7_linux_amd64.tar.gz sealos 
<span class="token function">chmod</span> +x sealos
<span class="token function">mv</span> sealos /usr/bin/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="离线镜像准备-可选" tabindex="-1"><a class="header-anchor" href="#离线镜像准备-可选"><span>离线镜像准备（可选）</span></a></h2><h3 id="安装sealos-1" tabindex="-1"><a class="header-anchor" href="#安装sealos-1"><span>安装sealos</span></a></h3><p>在集群节点上安装sealos二进制包</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">host</span> <span class="token keyword">in</span> <span class="token number">10.10</span>.12.210 <span class="token number">10.10</span>.12.211 <span class="token number">10.10</span>.12.212 <span class="token number">10.10</span>.12.213 <span class="token number">10.10</span>.12.214<span class="token punctuation">;</span> <span class="token keyword">do</span> sshpass <span class="token parameter variable">-p</span> <span class="token string">&#39;root@123&#39;</span> <span class="token function">ssh</span> <span class="token parameter variable">-o</span> <span class="token assign-left variable">StrictHostKeyChecking</span><span class="token operator">=</span>no root@<span class="token variable">\${host}</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /root/sealos-workspace<span class="token punctuation">;</span> <span class="token keyword">done</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">host</span> <span class="token keyword">in</span> <span class="token number">10.10</span>.12.210 <span class="token number">10.10</span>.12.211 <span class="token number">10.10</span>.12.212 <span class="token number">10.10</span>.12.213 <span class="token number">10.10</span>.12.214<span class="token punctuation">;</span> <span class="token keyword">do</span> sshpass <span class="token parameter variable">-p</span> <span class="token string">&#39;root@123&#39;</span> <span class="token function">ssh</span> <span class="token parameter variable">-o</span> <span class="token assign-left variable">StrictHostKeyChecking</span><span class="token operator">=</span>no root@<span class="token variable">\${host}</span> <span class="token function">mkdir</span> /root/sealos-workspace<span class="token punctuation">;</span> <span class="token keyword">done</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">host</span> <span class="token keyword">in</span> <span class="token number">10.10</span>.12.210 <span class="token number">10.10</span>.12.211 <span class="token number">10.10</span>.12.212 <span class="token number">10.10</span>.12.213 <span class="token number">10.10</span>.12.214<span class="token punctuation">;</span> <span class="token keyword">do</span> sshpass <span class="token parameter variable">-p</span> <span class="token string">&#39;root@123&#39;</span> <span class="token function">scp</span> <span class="token parameter variable">-o</span> <span class="token assign-left variable">StrictHostKeyChecking</span><span class="token operator">=</span>no /root/sealos-workspace/sealos_4.3.7_linux_amd64.tar.gz root@<span class="token variable">\${host}</span>:/root/sealos-workspace/<span class="token punctuation">;</span> <span class="token keyword">done</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">host</span> <span class="token keyword">in</span> <span class="token number">10.10</span>.12.210 <span class="token number">10.10</span>.12.211 <span class="token number">10.10</span>.12.212 <span class="token number">10.10</span>.12.213 <span class="token number">10.10</span>.12.214<span class="token punctuation">;</span> <span class="token keyword">do</span> sshpass <span class="token parameter variable">-p</span> <span class="token string">&#39;root@123&#39;</span> <span class="token function">ssh</span> <span class="token parameter variable">-o</span> <span class="token assign-left variable">StrictHostKeyChecking</span><span class="token operator">=</span>no root@<span class="token variable">\${host}</span> <span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> /root/sealos-workspace/sealos_4.3.7_linux_amd64.tar.gz sealos<span class="token punctuation">;</span> <span class="token keyword">done</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">host</span> <span class="token keyword">in</span> <span class="token number">10.10</span>.12.210 <span class="token number">10.10</span>.12.211 <span class="token number">10.10</span>.12.212 <span class="token number">10.10</span>.12.213 <span class="token number">10.10</span>.12.214<span class="token punctuation">;</span> <span class="token keyword">do</span> sshpass <span class="token parameter variable">-p</span> <span class="token string">&#39;root@123&#39;</span> <span class="token function">ssh</span> <span class="token parameter variable">-o</span> <span class="token assign-left variable">StrictHostKeyChecking</span><span class="token operator">=</span>no root@<span class="token variable">\${host}</span> <span class="token function">chmod</span> +x sealos<span class="token punctuation">;</span> <span class="token keyword">done</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">host</span> <span class="token keyword">in</span> <span class="token number">10.10</span>.12.210 <span class="token number">10.10</span>.12.211 <span class="token number">10.10</span>.12.212 <span class="token number">10.10</span>.12.213 <span class="token number">10.10</span>.12.214<span class="token punctuation">;</span> <span class="token keyword">do</span> sshpass <span class="token parameter variable">-p</span> <span class="token string">&#39;root@123&#39;</span> <span class="token function">ssh</span> <span class="token parameter variable">-o</span> <span class="token assign-left variable">StrictHostKeyChecking</span><span class="token operator">=</span>no root@<span class="token variable">\${host}</span> <span class="token function">cp</span> <span class="token parameter variable">-fp</span> sealos /usr/bin/<span class="token punctuation">;</span> <span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="准备kuberntes镜像" tabindex="-1"><a class="header-anchor" href="#准备kuberntes镜像"><span>准备kuberntes镜像</span></a></h3><p>在管理节点上下载镜像（非k8s集群节点）</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>sealos pull labring/kubernetes:v1.27.7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在管理节点打包镜像（非k8s集群节点）</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>sealos save <span class="token parameter variable">-o</span> /root/sealos-workspace/kubernetes.tar labring/kubernetes:v1.27.7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上传打包的镜像到其他节点</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">host</span> <span class="token keyword">in</span> <span class="token number">10.10</span>.12.210 <span class="token number">10.10</span>.12.211 <span class="token number">10.10</span>.12.212 <span class="token number">10.10</span>.12.213 <span class="token number">10.10</span>.12.214<span class="token punctuation">;</span> <span class="token keyword">do</span> sshpass <span class="token parameter variable">-p</span> <span class="token string">&#39;root@123&#39;</span> <span class="token function">scp</span> <span class="token parameter variable">-o</span> <span class="token assign-left variable">StrictHostKeyChecking</span><span class="token operator">=</span>no /root/sealos-workspace/kubernetes.tar root@<span class="token variable">\${host}</span>:/root/sealos-workspace/<span class="token punctuation">;</span> <span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在k8s节点导入镜像</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">host</span> <span class="token keyword">in</span> <span class="token number">10.10</span>.12.210 <span class="token number">10.10</span>.12.211 <span class="token number">10.10</span>.12.212 <span class="token number">10.10</span>.12.213 <span class="token number">10.10</span>.12.214<span class="token punctuation">;</span> <span class="token keyword">do</span> sshpass <span class="token parameter variable">-p</span> <span class="token string">&#39;root@123&#39;</span> <span class="token function">ssh</span> <span class="token parameter variable">-o</span> <span class="token assign-left variable">StrictHostKeyChecking</span><span class="token operator">=</span>no root@<span class="token variable">\${host}</span> sealos load <span class="token parameter variable">-i</span> /root/sealos-workspace/kubernetes.tar<span class="token punctuation">;</span><span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看镜像导入情况</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">host</span> <span class="token keyword">in</span> <span class="token number">10.10</span>.12.210 <span class="token number">10.10</span>.12.211 <span class="token number">10.10</span>.12.212 <span class="token number">10.10</span>.12.213 <span class="token number">10.10</span>.12.214<span class="token punctuation">;</span> <span class="token keyword">do</span> sshpass <span class="token parameter variable">-p</span> <span class="token string">&#39;root@123&#39;</span> <span class="token function">ssh</span> <span class="token parameter variable">-o</span> <span class="token assign-left variable">StrictHostKeyChecking</span><span class="token operator">=</span>no root@<span class="token variable">\${host}</span> sealos images<span class="token punctuation">;</span><span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="部署k8s集群" tabindex="-1"><a class="header-anchor" href="#部署k8s集群"><span>部署k8s集群</span></a></h2><h3 id="单机部署" tabindex="-1"><a class="header-anchor" href="#单机部署"><span>单机部署</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 其中--env criData为指定cri的存储目</span>
sealos run labring/kubernetes:v1.27.7 labring/helm:v3.12.3 labring/flannel:v0.22.1 <span class="token parameter variable">--env</span> <span class="token assign-left variable">criData</span><span class="token operator">=</span>/home/containerd-data <span class="token parameter variable">--single</span>

<span class="token comment">#删除污点</span>
kubectl taint <span class="token function">node</span> <span class="token parameter variable">--all</span> node-role.kubernetes.io/control-plane-
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="集群部署" tabindex="-1"><a class="header-anchor" href="#集群部署"><span>集群部署</span></a></h3>`,22),C=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# 其中-p [your-ssh-passwd]为节点的密码，如果各节点密码不一样的话  可以在sealos所在的节点生成密钥，然后对其他节点做免密登录配置"),s(`
sealos run labring/kubernetes:v1.27.7 labring/helm:v3.12.3 labring/calico:v3.24.6 `),n("span",{class:"token punctuation"},"\\"),s(`
     `),n("span",{class:"token parameter variable"},"--masters"),s(),n("span",{class:"token number"},"10.10"),s(".12.210,10.10.12.211,10.10.12.212 "),n("span",{class:"token punctuation"},"\\"),s(`
     `),n("span",{class:"token parameter variable"},"--nodes"),s(),n("span",{class:"token number"},"10.10"),s(".12.213 "),n("span",{class:"token parameter variable"},"--port"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"22"),s(),n("span",{class:"token parameter variable"},"-p"),s(` root@123
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("sealos run registry.cn-shanghai.aliyuncs.com/labring/kubernetes:v1.27.7 registry.cn-shanghai.aliyuncs.com/labring/helm:v3.12.3 registry.cn-shanghai.aliyuncs.com/labring/calico:v3.24.6 "),n("span",{class:"token punctuation"},"\\"),s(`
     `),n("span",{class:"token parameter variable"},"--masters"),s(),n("span",{class:"token number"},"10.10"),s(".12.210,10.10.12.211,10.10.12.212 "),n("span",{class:"token punctuation"},"\\"),s(`
     `),n("span",{class:"token parameter variable"},"--nodes"),s(),n("span",{class:"token number"},"10.10"),s(".12.213 "),n("span",{class:"token parameter variable"},"--port"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"22"),s(),n("span",{class:"token parameter variable"},"-p"),s(` root@123
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),S=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("sealos run labring/kubernetes:v1.27.7 labring/helm:v3.9.4 labring/cilium:v1.13.4 "),n("span",{class:"token punctuation"},"\\"),s(`
     `),n("span",{class:"token parameter variable"},"--masters"),s(),n("span",{class:"token number"},"10.10"),s(".12.210,10.10.12.211,10.10.12.212 "),n("span",{class:"token punctuation"},"\\"),s(`
     `),n("span",{class:"token parameter variable"},"--nodes"),s(),n("span",{class:"token number"},"10.10"),s(".12.213 "),n("span",{class:"token parameter variable"},"--port"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"22"),s(),n("span",{class:"token parameter variable"},"-p"),s(` root@123
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),A=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("sealos run registry.cn-shanghai.aliyuncs.com/labring/kubernetes:v1.27.7 registry.cn-shanghai.aliyuncs.com/labring/helm:v3.9.4 registry.cn-shanghai.aliyuncs.com/labring/cilium:v1.13.4 "),n("span",{class:"token punctuation"},"\\"),s(`
     `),n("span",{class:"token parameter variable"},"--masters"),s(),n("span",{class:"token number"},"10.10"),s(".12.210,10.10.12.211,10.10.12.212 "),n("span",{class:"token punctuation"},"\\"),s(`
     `),n("span",{class:"token parameter variable"},"--nodes"),s(),n("span",{class:"token number"},"10.10"),s(".12.213 "),n("span",{class:"token parameter variable"},"--port"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"22"),s(),n("span",{class:"token parameter variable"},"-p"),s(` root@123
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),T=n("p",null,"运行 sealos gen 生成一个 Clusterfile",-1),N=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("sealos gen labring/kubernetes:v1.27.7 labring/helm:v3.12.3 labring/calico:v3.24.6 "),n("span",{class:"token punctuation"},"\\"),s(`
   `),n("span",{class:"token parameter variable"},"--masters"),s(),n("span",{class:"token number"},"10.10"),s(".12.210,10.10.12.211,10.10.12.212 "),n("span",{class:"token punctuation"},"\\"),s(`
   `),n("span",{class:"token parameter variable"},"--nodes"),s(),n("span",{class:"token number"},"10.10"),s(".12.213,10.10.12.214 "),n("span",{class:"token parameter variable"},"--port"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"22"),s(),n("span",{class:"token parameter variable"},"--passwd"),s(" root@123 "),n("span",{class:"token operator"},">"),s(` Clusterfile
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),I=n("p",null,[n("code",null,"Clusterfile"),s("文件内容")],-1),F=n("div",{class:"language-yaml line-numbers-mode","data-ext":"yml","data-title":"yml"},[n("pre",{class:"language-yaml"},[n("code",null,[n("span",{class:"token key atrule"},"apiVersion"),n("span",{class:"token punctuation"},":"),s(` apps.sealos.io/v1beta1
`),n("span",{class:"token key atrule"},"kind"),n("span",{class:"token punctuation"},":"),s(` Cluster
`),n("span",{class:"token key atrule"},"metadata"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"creationTimestamp"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token null important"},"null"),s(`
  `),n("span",{class:"token key atrule"},"name"),n("span",{class:"token punctuation"},":"),s(` default
`),n("span",{class:"token key atrule"},"spec"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"hosts"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token key atrule"},"ips"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token punctuation"},"-"),s(" 10.10.12.210"),n("span",{class:"token punctuation"},":"),n("span",{class:"token number"},"22"),s(`
    `),n("span",{class:"token punctuation"},"-"),s(" 10.10.12.211"),n("span",{class:"token punctuation"},":"),n("span",{class:"token number"},"22"),s(`
    `),n("span",{class:"token punctuation"},"-"),s(" 10.10.12.212"),n("span",{class:"token punctuation"},":"),n("span",{class:"token number"},"22"),s(`
    `),n("span",{class:"token key atrule"},"roles"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token punctuation"},"-"),s(` master
    `),n("span",{class:"token punctuation"},"-"),s(` amd64
  `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token key atrule"},"ips"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token punctuation"},"-"),s(" 10.10.12.213"),n("span",{class:"token punctuation"},":"),n("span",{class:"token number"},"22"),s(`
    `),n("span",{class:"token punctuation"},"-"),s(" 10.10.12.214"),n("span",{class:"token punctuation"},":"),n("span",{class:"token number"},"22"),s(`
    `),n("span",{class:"token key atrule"},"roles"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token punctuation"},"-"),s(` node
    `),n("span",{class:"token punctuation"},"-"),s(` amd64
  `),n("span",{class:"token key atrule"},"image"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token punctuation"},"-"),s(" labring/kubernetes"),n("span",{class:"token punctuation"},":"),s(`v1.27.7
  `),n("span",{class:"token punctuation"},"-"),s(" labring/helm"),n("span",{class:"token punctuation"},":"),s(`v3.12.3
  `),n("span",{class:"token punctuation"},"-"),s(" labring/calico"),n("span",{class:"token punctuation"},":"),s(`v3.24.6
  `),n("span",{class:"token key atrule"},"ssh"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token key atrule"},"passwd"),n("span",{class:"token punctuation"},":"),s(` root@123
`),n("span",{class:"token key atrule"},"status"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token punctuation"},"---"),s(`
`),n("span",{class:"token key atrule"},"BootstrapTokens"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token null important"},"null"),s(`
`),n("span",{class:"token key atrule"},"CertificateKey"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'""'),s(`
`),n("span",{class:"token key atrule"},"LocalAPIEndpoint"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"AdvertiseAddress"),n("span",{class:"token punctuation"},":"),s(` 10.10.12.210
  `),n("span",{class:"token key atrule"},"BindPort"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"6443"),s(`
`),n("span",{class:"token key atrule"},"NodeRegistration"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"CRISocket"),n("span",{class:"token punctuation"},":"),s(` /run/containerd/containerd.sock
  `),n("span",{class:"token key atrule"},"IgnorePreflightErrors"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token null important"},"null"),s(`
  `),n("span",{class:"token key atrule"},"KubeletExtraArgs"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token null important"},"null"),s(`
  `),n("span",{class:"token key atrule"},"Name"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'""'),s(`
  `),n("span",{class:"token key atrule"},"Taints"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token null important"},"null"),s(`
`),n("span",{class:"token key atrule"},"Patches"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token null important"},"null"),s(`
`),n("span",{class:"token key atrule"},"SkipPhases"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token null important"},"null"),s(`
`),n("span",{class:"token key atrule"},"apiVersion"),n("span",{class:"token punctuation"},":"),s(` kubeadm.k8s.io/v1beta3
`),n("span",{class:"token key atrule"},"kind"),n("span",{class:"token punctuation"},":"),s(` InitConfiguration

`),n("span",{class:"token punctuation"},"---"),s(`
`),n("span",{class:"token key atrule"},"APIServer"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"CertSANs"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token punctuation"},"-"),s(` 127.0.0.1
  `),n("span",{class:"token punctuation"},"-"),s(` apiserver.cluster.local
  `),n("span",{class:"token punctuation"},"-"),s(` 10.103.97.2
  `),n("span",{class:"token punctuation"},"-"),s(` 10.10.12.210
  `),n("span",{class:"token punctuation"},"-"),s(` 10.10.12.211
  `),n("span",{class:"token punctuation"},"-"),s(` 10.10.12.212
  `),n("span",{class:"token key atrule"},"ExtraArgs"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token key atrule"},"audit-log-format"),n("span",{class:"token punctuation"},":"),s(` json
    `),n("span",{class:"token key atrule"},"audit-log-maxage"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'"7"'),s(`
    `),n("span",{class:"token key atrule"},"audit-log-maxbackup"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'"10"'),s(`
    `),n("span",{class:"token key atrule"},"audit-log-maxsize"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'"100"'),s(`
    `),n("span",{class:"token key atrule"},"audit-log-path"),n("span",{class:"token punctuation"},":"),s(` /var/log/kubernetes/audit.log
    `),n("span",{class:"token key atrule"},"audit-policy-file"),n("span",{class:"token punctuation"},":"),s(" /etc/kubernetes/audit"),n("span",{class:"token punctuation"},"-"),s(`policy.yml
    `),n("span",{class:"token key atrule"},"enable-aggregator-routing"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'"true"'),s(`
    `),n("span",{class:"token key atrule"},"feature-gates"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'""'),s(`
  `),n("span",{class:"token key atrule"},"ExtraVolumes"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token key atrule"},"HostPath"),n("span",{class:"token punctuation"},":"),s(` /etc/kubernetes
    `),n("span",{class:"token key atrule"},"MountPath"),n("span",{class:"token punctuation"},":"),s(` /etc/kubernetes
    `),n("span",{class:"token key atrule"},"Name"),n("span",{class:"token punctuation"},":"),s(` audit
    `),n("span",{class:"token key atrule"},"PathType"),n("span",{class:"token punctuation"},":"),s(` DirectoryOrCreate
    `),n("span",{class:"token key atrule"},"ReadOnly"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token boolean important"},"false"),s(`
  `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token key atrule"},"HostPath"),n("span",{class:"token punctuation"},":"),s(` /var/log/kubernetes
    `),n("span",{class:"token key atrule"},"MountPath"),n("span",{class:"token punctuation"},":"),s(` /var/log/kubernetes
    `),n("span",{class:"token key atrule"},"Name"),n("span",{class:"token punctuation"},":"),s(" audit"),n("span",{class:"token punctuation"},"-"),s(`log
    `),n("span",{class:"token key atrule"},"PathType"),n("span",{class:"token punctuation"},":"),s(` DirectoryOrCreate
    `),n("span",{class:"token key atrule"},"ReadOnly"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token boolean important"},"false"),s(`
  `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token key atrule"},"HostPath"),n("span",{class:"token punctuation"},":"),s(` /etc/localtime
    `),n("span",{class:"token key atrule"},"MountPath"),n("span",{class:"token punctuation"},":"),s(` /etc/localtime
    `),n("span",{class:"token key atrule"},"Name"),n("span",{class:"token punctuation"},":"),s(` localtime
    `),n("span",{class:"token key atrule"},"PathType"),n("span",{class:"token punctuation"},":"),s(` File
    `),n("span",{class:"token key atrule"},"ReadOnly"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token boolean important"},"true"),s(`
  `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token key atrule"},"HostPath"),n("span",{class:"token punctuation"},":"),s(` /etc/kubernetes
    `),n("span",{class:"token key atrule"},"MountPath"),n("span",{class:"token punctuation"},":"),s(` /etc/kubernetes
    `),n("span",{class:"token key atrule"},"Name"),n("span",{class:"token punctuation"},":"),s(` audit
    `),n("span",{class:"token key atrule"},"PathType"),n("span",{class:"token punctuation"},":"),s(` DirectoryOrCreate
    `),n("span",{class:"token key atrule"},"ReadOnly"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token boolean important"},"false"),s(`
  `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token key atrule"},"HostPath"),n("span",{class:"token punctuation"},":"),s(` /var/log/kubernetes
    `),n("span",{class:"token key atrule"},"MountPath"),n("span",{class:"token punctuation"},":"),s(` /var/log/kubernetes
    `),n("span",{class:"token key atrule"},"Name"),n("span",{class:"token punctuation"},":"),s(" audit"),n("span",{class:"token punctuation"},"-"),s(`log
    `),n("span",{class:"token key atrule"},"PathType"),n("span",{class:"token punctuation"},":"),s(` DirectoryOrCreate
    `),n("span",{class:"token key atrule"},"ReadOnly"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token boolean important"},"false"),s(`
  `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token key atrule"},"HostPath"),n("span",{class:"token punctuation"},":"),s(` /etc/localtime
    `),n("span",{class:"token key atrule"},"MountPath"),n("span",{class:"token punctuation"},":"),s(` /etc/localtime
    `),n("span",{class:"token key atrule"},"Name"),n("span",{class:"token punctuation"},":"),s(` localtime
    `),n("span",{class:"token key atrule"},"PathType"),n("span",{class:"token punctuation"},":"),s(` File
    `),n("span",{class:"token key atrule"},"ReadOnly"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token boolean important"},"true"),s(`
  `),n("span",{class:"token key atrule"},"TimeoutForControlPlane"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token null important"},"null"),s(`
`),n("span",{class:"token key atrule"},"CIImageRepository"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'""'),s(`
`),n("span",{class:"token key atrule"},"CIKubernetesVersion"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'""'),s(`
`),n("span",{class:"token key atrule"},"CertificatesDir"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'""'),s(`
`),n("span",{class:"token key atrule"},"ClusterName"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'""'),s(`
`),n("span",{class:"token key atrule"},"ComponentConfigs"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token null important"},"null"),s(`
`),n("span",{class:"token key atrule"},"ControlPlaneEndpoint"),n("span",{class:"token punctuation"},":"),s(" apiserver.cluster.local"),n("span",{class:"token punctuation"},":"),n("span",{class:"token number"},"6443"),s(`
`),n("span",{class:"token key atrule"},"ControllerManager"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"ExtraArgs"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token key atrule"},"bind-address"),n("span",{class:"token punctuation"},":"),s(` 0.0.0.0
    `),n("span",{class:"token key atrule"},"cluster-signing-duration"),n("span",{class:"token punctuation"},":"),s(` 876000h
    `),n("span",{class:"token key atrule"},"feature-gates"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'""'),s(`
  `),n("span",{class:"token key atrule"},"ExtraVolumes"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token key atrule"},"HostPath"),n("span",{class:"token punctuation"},":"),s(` /etc/localtime
    `),n("span",{class:"token key atrule"},"MountPath"),n("span",{class:"token punctuation"},":"),s(` /etc/localtime
    `),n("span",{class:"token key atrule"},"Name"),n("span",{class:"token punctuation"},":"),s(` localtime
    `),n("span",{class:"token key atrule"},"PathType"),n("span",{class:"token punctuation"},":"),s(` File
    `),n("span",{class:"token key atrule"},"ReadOnly"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token boolean important"},"true"),s(`
  `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token key atrule"},"HostPath"),n("span",{class:"token punctuation"},":"),s(` /etc/localtime
    `),n("span",{class:"token key atrule"},"MountPath"),n("span",{class:"token punctuation"},":"),s(` /etc/localtime
    `),n("span",{class:"token key atrule"},"Name"),n("span",{class:"token punctuation"},":"),s(` localtime
    `),n("span",{class:"token key atrule"},"PathType"),n("span",{class:"token punctuation"},":"),s(` File
    `),n("span",{class:"token key atrule"},"ReadOnly"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token boolean important"},"true"),s(`
`),n("span",{class:"token key atrule"},"DNS"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"ImageRepository"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'""'),s(`
  `),n("span",{class:"token key atrule"},"ImageTag"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'""'),s(`
  `),n("span",{class:"token key atrule"},"Type"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'""'),s(`
`),n("span",{class:"token key atrule"},"Etcd"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"External"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token null important"},"null"),s(`
  `),n("span",{class:"token key atrule"},"Local"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token key atrule"},"DataDir"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'""'),s(`
    `),n("span",{class:"token key atrule"},"ExtraArgs"),n("span",{class:"token punctuation"},":"),s(`
      `),n("span",{class:"token key atrule"},"listen-metrics-urls"),n("span",{class:"token punctuation"},":"),s(" http"),n("span",{class:"token punctuation"},":"),s("//0.0.0.0"),n("span",{class:"token punctuation"},":"),n("span",{class:"token number"},"2381"),s(`
    `),n("span",{class:"token key atrule"},"ImageRepository"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'""'),s(`
    `),n("span",{class:"token key atrule"},"ImageTag"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'""'),s(`
    `),n("span",{class:"token key atrule"},"PeerCertSANs"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token null important"},"null"),s(`
    `),n("span",{class:"token key atrule"},"ServerCertSANs"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token null important"},"null"),s(`
`),n("span",{class:"token key atrule"},"FeatureGates"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token null important"},"null"),s(`
`),n("span",{class:"token key atrule"},"ImageRepository"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'""'),s(`
`),n("span",{class:"token key atrule"},"KubernetesVersion"),n("span",{class:"token punctuation"},":"),s(` v1.27.7
`),n("span",{class:"token key atrule"},"Networking"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"DNSDomain"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'""'),s(`
  `),n("span",{class:"token key atrule"},"PodSubnet"),n("span",{class:"token punctuation"},":"),s(` 100.64.0.0/10
  `),n("span",{class:"token key atrule"},"ServiceSubnet"),n("span",{class:"token punctuation"},":"),s(` 10.96.0.0/22
`),n("span",{class:"token key atrule"},"Scheduler"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"ExtraArgs"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token key atrule"},"bind-address"),n("span",{class:"token punctuation"},":"),s(` 0.0.0.0
    `),n("span",{class:"token key atrule"},"feature-gates"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'""'),s(`
  `),n("span",{class:"token key atrule"},"ExtraVolumes"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token key atrule"},"HostPath"),n("span",{class:"token punctuation"},":"),s(` /etc/localtime
    `),n("span",{class:"token key atrule"},"MountPath"),n("span",{class:"token punctuation"},":"),s(` /etc/localtime
    `),n("span",{class:"token key atrule"},"Name"),n("span",{class:"token punctuation"},":"),s(` localtime
    `),n("span",{class:"token key atrule"},"PathType"),n("span",{class:"token punctuation"},":"),s(` File
    `),n("span",{class:"token key atrule"},"ReadOnly"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token boolean important"},"true"),s(`
  `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token key atrule"},"HostPath"),n("span",{class:"token punctuation"},":"),s(` /etc/localtime
    `),n("span",{class:"token key atrule"},"MountPath"),n("span",{class:"token punctuation"},":"),s(` /etc/localtime
    `),n("span",{class:"token key atrule"},"Name"),n("span",{class:"token punctuation"},":"),s(` localtime
    `),n("span",{class:"token key atrule"},"PathType"),n("span",{class:"token punctuation"},":"),s(` File
    `),n("span",{class:"token key atrule"},"ReadOnly"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token boolean important"},"true"),s(`
`),n("span",{class:"token key atrule"},"apiVersion"),n("span",{class:"token punctuation"},":"),s(` kubeadm.k8s.io/v1beta3
`),n("span",{class:"token key atrule"},"kind"),n("span",{class:"token punctuation"},":"),s(` ClusterConfiguration

`),n("span",{class:"token punctuation"},"---"),s(`
`),n("span",{class:"token key atrule"},"CACertPath"),n("span",{class:"token punctuation"},":"),s(` /etc/kubernetes/pki/ca.crt
`),n("span",{class:"token key atrule"},"ControlPlane"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"CertificateKey"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'""'),s(`
  `),n("span",{class:"token key atrule"},"LocalAPIEndpoint"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token key atrule"},"AdvertiseAddress"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'""'),s(`
    `),n("span",{class:"token key atrule"},"BindPort"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"6443"),s(`
`),n("span",{class:"token key atrule"},"Discovery"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"BootstrapToken"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token null important"},"null"),s(`
  `),n("span",{class:"token key atrule"},"File"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token null important"},"null"),s(`
  `),n("span",{class:"token key atrule"},"TLSBootstrapToken"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'""'),s(`
  `),n("span",{class:"token key atrule"},"Timeout"),n("span",{class:"token punctuation"},":"),s(` 5m0s
`),n("span",{class:"token key atrule"},"NodeRegistration"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"CRISocket"),n("span",{class:"token punctuation"},":"),s(` /run/containerd/containerd.sock
  `),n("span",{class:"token key atrule"},"IgnorePreflightErrors"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token null important"},"null"),s(`
  `),n("span",{class:"token key atrule"},"KubeletExtraArgs"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token null important"},"null"),s(`
  `),n("span",{class:"token key atrule"},"Name"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'""'),s(`
  `),n("span",{class:"token key atrule"},"Taints"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token null important"},"null"),s(`
`),n("span",{class:"token key atrule"},"Patches"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token null important"},"null"),s(`
`),n("span",{class:"token key atrule"},"SkipPhases"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token null important"},"null"),s(`
`),n("span",{class:"token key atrule"},"apiVersion"),n("span",{class:"token punctuation"},":"),s(` kubeadm.k8s.io/v1beta3
`),n("span",{class:"token key atrule"},"kind"),n("span",{class:"token punctuation"},":"),s(` JoinConfiguration

`),n("span",{class:"token punctuation"},"---"),s(`
`),n("span",{class:"token key atrule"},"apiVersion"),n("span",{class:"token punctuation"},":"),s(` kubeproxy.config.k8s.io/v1alpha1
`),n("span",{class:"token key atrule"},"bindAddress"),n("span",{class:"token punctuation"},":"),s(` 0.0.0.0
`),n("span",{class:"token key atrule"},"bindAddressHardFail"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token boolean important"},"false"),s(`
`),n("span",{class:"token key atrule"},"clientConnection"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"acceptContentTypes"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'""'),s(`
  `),n("span",{class:"token key atrule"},"burst"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"10"),s(`
  `),n("span",{class:"token key atrule"},"contentType"),n("span",{class:"token punctuation"},":"),s(` application/vnd.kubernetes.protobuf
  `),n("span",{class:"token key atrule"},"kubeconfig"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'""'),s(`
  `),n("span",{class:"token key atrule"},"qps"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"5"),s(`
`),n("span",{class:"token key atrule"},"clusterCIDR"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'""'),s(`
`),n("span",{class:"token key atrule"},"configSyncPeriod"),n("span",{class:"token punctuation"},":"),s(` 15m0s
`),n("span",{class:"token key atrule"},"conntrack"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"maxPerCore"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"32768"),s(`
  `),n("span",{class:"token key atrule"},"min"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"131072"),s(`
  `),n("span",{class:"token key atrule"},"tcpCloseWaitTimeout"),n("span",{class:"token punctuation"},":"),s(` 1h0m0s
  `),n("span",{class:"token key atrule"},"tcpEstablishedTimeout"),n("span",{class:"token punctuation"},":"),s(` 24h0m0s
`),n("span",{class:"token key atrule"},"detectLocal"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"bridgeInterface"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'""'),s(`
  `),n("span",{class:"token key atrule"},"interfaceNamePrefix"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'""'),s(`
`),n("span",{class:"token key atrule"},"detectLocalMode"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'""'),s(`
`),n("span",{class:"token key atrule"},"enableProfiling"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token boolean important"},"false"),s(`
`),n("span",{class:"token key atrule"},"healthzBindAddress"),n("span",{class:"token punctuation"},":"),s(" 0.0.0.0"),n("span",{class:"token punctuation"},":"),n("span",{class:"token number"},"10256"),s(`
`),n("span",{class:"token key atrule"},"hostnameOverride"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'""'),s(`
`),n("span",{class:"token key atrule"},"iptables"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"masqueradeAll"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token boolean important"},"false"),s(`
  `),n("span",{class:"token key atrule"},"masqueradeBit"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"14"),s(`
  `),n("span",{class:"token key atrule"},"minSyncPeriod"),n("span",{class:"token punctuation"},":"),s(` 1s
  `),n("span",{class:"token key atrule"},"syncPeriod"),n("span",{class:"token punctuation"},":"),s(` 30s
`),n("span",{class:"token key atrule"},"ipvs"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"excludeCIDRs"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token punctuation"},"-"),s(` 10.103.97.2/32
  `),n("span",{class:"token key atrule"},"minSyncPeriod"),n("span",{class:"token punctuation"},":"),s(` 0s
  `),n("span",{class:"token key atrule"},"scheduler"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'""'),s(`
  `),n("span",{class:"token key atrule"},"strictARP"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token boolean important"},"false"),s(`
  `),n("span",{class:"token key atrule"},"syncPeriod"),n("span",{class:"token punctuation"},":"),s(` 30s
  `),n("span",{class:"token key atrule"},"tcpFinTimeout"),n("span",{class:"token punctuation"},":"),s(` 0s
  `),n("span",{class:"token key atrule"},"tcpTimeout"),n("span",{class:"token punctuation"},":"),s(` 0s
  `),n("span",{class:"token key atrule"},"udpTimeout"),n("span",{class:"token punctuation"},":"),s(` 0s
`),n("span",{class:"token key atrule"},"kind"),n("span",{class:"token punctuation"},":"),s(` KubeProxyConfiguration
`),n("span",{class:"token key atrule"},"metricsBindAddress"),n("span",{class:"token punctuation"},":"),s(" 0.0.0.0"),n("span",{class:"token punctuation"},":"),n("span",{class:"token number"},"10249"),s(`
`),n("span",{class:"token key atrule"},"mode"),n("span",{class:"token punctuation"},":"),s(` ipvs
`),n("span",{class:"token key atrule"},"nodePortAddresses"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token null important"},"null"),s(`
`),n("span",{class:"token key atrule"},"oomScoreAdj"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"-999"),s(`
`),n("span",{class:"token key atrule"},"portRange"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'""'),s(`
`),n("span",{class:"token key atrule"},"showHiddenMetricsForVersion"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'""'),s(`
`),n("span",{class:"token key atrule"},"udpIdleTimeout"),n("span",{class:"token punctuation"},":"),s(` 250ms
`),n("span",{class:"token key atrule"},"winkernel"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"enableDSR"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token boolean important"},"false"),s(`
  `),n("span",{class:"token key atrule"},"forwardHealthCheckVip"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token boolean important"},"false"),s(`
  `),n("span",{class:"token key atrule"},"networkName"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'""'),s(`
  `),n("span",{class:"token key atrule"},"rootHnsEndpointName"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'""'),s(`
  `),n("span",{class:"token key atrule"},"sourceVip"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'""'),s(`

`),n("span",{class:"token punctuation"},"---"),s(`
`),n("span",{class:"token key atrule"},"address"),n("span",{class:"token punctuation"},":"),s(` 0.0.0.0
`),n("span",{class:"token key atrule"},"apiVersion"),n("span",{class:"token punctuation"},":"),s(` kubelet.config.k8s.io/v1beta1
`),n("span",{class:"token key atrule"},"authentication"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"anonymous"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token key atrule"},"enabled"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token boolean important"},"false"),s(`
  `),n("span",{class:"token key atrule"},"webhook"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token key atrule"},"cacheTTL"),n("span",{class:"token punctuation"},":"),s(` 2m0s
    `),n("span",{class:"token key atrule"},"enabled"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token boolean important"},"true"),s(`
  `),n("span",{class:"token key atrule"},"x509"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token key atrule"},"clientCAFile"),n("span",{class:"token punctuation"},":"),s(` /etc/kubernetes/pki/ca.crt
`),n("span",{class:"token key atrule"},"authorization"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"mode"),n("span",{class:"token punctuation"},":"),s(` Webhook
  `),n("span",{class:"token key atrule"},"webhook"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token key atrule"},"cacheAuthorizedTTL"),n("span",{class:"token punctuation"},":"),s(` 5m0s
    `),n("span",{class:"token key atrule"},"cacheUnauthorizedTTL"),n("span",{class:"token punctuation"},":"),s(` 30s
`),n("span",{class:"token key atrule"},"cgroupDriver"),n("span",{class:"token punctuation"},":"),s(` cgroupfs
`),n("span",{class:"token key atrule"},"cgroupsPerQOS"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token boolean important"},"true"),s(`
`),n("span",{class:"token key atrule"},"configMapAndSecretChangeDetectionStrategy"),n("span",{class:"token punctuation"},":"),s(` Watch
`),n("span",{class:"token key atrule"},"containerLogMaxFiles"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"5"),s(`
`),n("span",{class:"token key atrule"},"containerLogMaxSize"),n("span",{class:"token punctuation"},":"),s(` 10Mi
`),n("span",{class:"token key atrule"},"contentType"),n("span",{class:"token punctuation"},":"),s(` application/vnd.kubernetes.protobuf
`),n("span",{class:"token key atrule"},"cpuCFSQuota"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token boolean important"},"true"),s(`
`),n("span",{class:"token key atrule"},"cpuCFSQuotaPeriod"),n("span",{class:"token punctuation"},":"),s(` 100ms
`),n("span",{class:"token key atrule"},"cpuManagerPolicy"),n("span",{class:"token punctuation"},":"),s(` none
`),n("span",{class:"token key atrule"},"cpuManagerReconcilePeriod"),n("span",{class:"token punctuation"},":"),s(` 10s
`),n("span",{class:"token key atrule"},"enableControllerAttachDetach"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token boolean important"},"true"),s(`
`),n("span",{class:"token key atrule"},"enableDebugFlagsHandler"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token boolean important"},"true"),s(`
`),n("span",{class:"token key atrule"},"enableDebuggingHandlers"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token boolean important"},"true"),s(`
`),n("span",{class:"token key atrule"},"enableProfilingHandler"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token boolean important"},"true"),s(`
`),n("span",{class:"token key atrule"},"enableServer"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token boolean important"},"true"),s(`
`),n("span",{class:"token key atrule"},"enableSystemLogHandler"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token boolean important"},"true"),s(`
`),n("span",{class:"token key atrule"},"enforceNodeAllocatable"),n("span",{class:"token punctuation"},":"),s(`
`),n("span",{class:"token punctuation"},"-"),s(` pods
`),n("span",{class:"token punctuation"},"-"),s(` pods
`),n("span",{class:"token key atrule"},"eventBurst"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"10"),s(`
`),n("span",{class:"token key atrule"},"eventRecordQPS"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"5"),s(`
`),n("span",{class:"token key atrule"},"evictionHard"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"imagefs.available"),n("span",{class:"token punctuation"},":"),s(` 15%
  `),n("span",{class:"token key atrule"},"memory.available"),n("span",{class:"token punctuation"},":"),s(` 100Mi
  `),n("span",{class:"token key atrule"},"nodefs.available"),n("span",{class:"token punctuation"},":"),s(` 10%
  `),n("span",{class:"token key atrule"},"nodefs.inodesFree"),n("span",{class:"token punctuation"},":"),s(` 5%
`),n("span",{class:"token key atrule"},"evictionPressureTransitionPeriod"),n("span",{class:"token punctuation"},":"),s(` 5m0s
`),n("span",{class:"token key atrule"},"failSwapOn"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token boolean important"},"true"),s(`
`),n("span",{class:"token key atrule"},"fileCheckFrequency"),n("span",{class:"token punctuation"},":"),s(` 20s
`),n("span",{class:"token key atrule"},"hairpinMode"),n("span",{class:"token punctuation"},":"),s(" promiscuous"),n("span",{class:"token punctuation"},"-"),s(`bridge
`),n("span",{class:"token key atrule"},"healthzBindAddress"),n("span",{class:"token punctuation"},":"),s(` 0.0.0.0
`),n("span",{class:"token key atrule"},"healthzPort"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"10248"),s(`
`),n("span",{class:"token key atrule"},"httpCheckFrequency"),n("span",{class:"token punctuation"},":"),s(` 20s
`),n("span",{class:"token key atrule"},"imageGCHighThresholdPercent"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"85"),s(`
`),n("span",{class:"token key atrule"},"imageGCLowThresholdPercent"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"80"),s(`
`),n("span",{class:"token key atrule"},"imageMinimumGCAge"),n("span",{class:"token punctuation"},":"),s(` 2m0s
`),n("span",{class:"token key atrule"},"iptablesDropBit"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"15"),s(`
`),n("span",{class:"token key atrule"},"iptablesMasqueradeBit"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"14"),s(`
`),n("span",{class:"token key atrule"},"kind"),n("span",{class:"token punctuation"},":"),s(` KubeletConfiguration
`),n("span",{class:"token key atrule"},"kubeAPIBurst"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"10"),s(`
`),n("span",{class:"token key atrule"},"kubeAPIQPS"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"5"),s(`
`),n("span",{class:"token key atrule"},"localStorageCapacityIsolation"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token boolean important"},"true"),s(`
`),n("span",{class:"token key atrule"},"logging"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"flushFrequency"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"5000000000"),s(`
  `),n("span",{class:"token key atrule"},"format"),n("span",{class:"token punctuation"},":"),s(` text
  `),n("span",{class:"token key atrule"},"options"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token key atrule"},"json"),n("span",{class:"token punctuation"},":"),s(`
      `),n("span",{class:"token key atrule"},"infoBufferSize"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'"0"'),s(`
  `),n("span",{class:"token key atrule"},"verbosity"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"0"),s(`
`),n("span",{class:"token key atrule"},"makeIPTablesUtilChains"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token boolean important"},"true"),s(`
`),n("span",{class:"token key atrule"},"maxOpenFiles"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"1000000"),s(`
`),n("span",{class:"token key atrule"},"maxPods"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"110"),s(`
`),n("span",{class:"token key atrule"},"memoryManagerPolicy"),n("span",{class:"token punctuation"},":"),s(` None
`),n("span",{class:"token key atrule"},"memorySwap"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token key atrule"},"memoryThrottlingFactor"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"0.8"),s(`
`),n("span",{class:"token key atrule"},"nodeLeaseDurationSeconds"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"40"),s(`
`),n("span",{class:"token key atrule"},"nodeStatusMaxImages"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"50"),s(`
`),n("span",{class:"token key atrule"},"nodeStatusReportFrequency"),n("span",{class:"token punctuation"},":"),s(` 10s
`),n("span",{class:"token key atrule"},"nodeStatusUpdateFrequency"),n("span",{class:"token punctuation"},":"),s(` 10s
`),n("span",{class:"token key atrule"},"oomScoreAdj"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"-999"),s(`
`),n("span",{class:"token key atrule"},"podPidsLimit"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"-1"),s(`
`),n("span",{class:"token key atrule"},"port"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"10250"),s(`
`),n("span",{class:"token key atrule"},"registerNode"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token boolean important"},"true"),s(`
`),n("span",{class:"token key atrule"},"registryBurst"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"10"),s(`
`),n("span",{class:"token key atrule"},"registryPullQPS"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"5"),s(`
`),n("span",{class:"token key atrule"},"rotateCertificates"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token boolean important"},"true"),s(`
`),n("span",{class:"token key atrule"},"runtimeRequestTimeout"),n("span",{class:"token punctuation"},":"),s(` 2m0s
`),n("span",{class:"token key atrule"},"seccompDefault"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token boolean important"},"false"),s(`
`),n("span",{class:"token key atrule"},"serializeImagePulls"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token boolean important"},"true"),s(`
`),n("span",{class:"token key atrule"},"shutdownGracePeriod"),n("span",{class:"token punctuation"},":"),s(` 0s
`),n("span",{class:"token key atrule"},"shutdownGracePeriodCriticalPods"),n("span",{class:"token punctuation"},":"),s(` 0s
`),n("span",{class:"token key atrule"},"staticPodPath"),n("span",{class:"token punctuation"},":"),s(` /etc/kubernetes/manifests
`),n("span",{class:"token key atrule"},"streamingConnectionIdleTimeout"),n("span",{class:"token punctuation"},":"),s(` 4h0m0s
`),n("span",{class:"token key atrule"},"syncFrequency"),n("span",{class:"token punctuation"},":"),s(` 1m0s
`),n("span",{class:"token key atrule"},"topologyManagerPolicy"),n("span",{class:"token punctuation"},":"),s(` none
`),n("span",{class:"token key atrule"},"topologyManagerScope"),n("span",{class:"token punctuation"},":"),s(` container
`),n("span",{class:"token key atrule"},"volumePluginDir"),n("span",{class:"token punctuation"},":"),s(" /usr/libexec/kubernetes/kubelet"),n("span",{class:"token punctuation"},"-"),s(`plugins/volume/exec/
`),n("span",{class:"token key atrule"},"volumeStatsAggPeriod"),n("span",{class:"token punctuation"},":"),s(` 1m0s
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),H=n("p",null,"Calico 内容",-1),M=n("div",{class:"language-yaml line-numbers-mode","data-ext":"yml","data-title":"yml"},[n("pre",{class:"language-yaml"},[n("code",null,[n("span",{class:"token punctuation"},"---"),s(`
`),n("span",{class:"token key atrule"},"apiVersion"),n("span",{class:"token punctuation"},":"),s(` kubeadm.k8s.io/v1beta2
`),n("span",{class:"token key atrule"},"kind"),n("span",{class:"token punctuation"},":"),s(` ClusterConfiguration
`),n("span",{class:"token key atrule"},"networking"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"podSubnet"),n("span",{class:"token punctuation"},":"),s(` 10.160.0.0/12
`),n("span",{class:"token punctuation"},"---"),s(`
`),n("span",{class:"token key atrule"},"apiVersion"),n("span",{class:"token punctuation"},":"),s(` apps.sealos.io/v1beta1
`),n("span",{class:"token key atrule"},"kind"),n("span",{class:"token punctuation"},":"),s(` Config
`),n("span",{class:"token key atrule"},"metadata"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"name"),n("span",{class:"token punctuation"},":"),s(` calico
`),n("span",{class:"token key atrule"},"spec"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"path"),n("span",{class:"token punctuation"},":"),s(` manifests/calico.yaml
  `),n("span",{class:"token key atrule"},"data"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token punctuation"},"|"),s(`
    apiVersion`),n("span",{class:"token punctuation"},":"),s(` operator.tigera.io/v1
    kind`),n("span",{class:"token punctuation"},":"),s(` Installation
    metadata`),n("span",{class:"token punctuation"},":"),s(`
      name`),n("span",{class:"token punctuation"},":"),s(` default
    spec`),n("span",{class:"token punctuation"},":"),s(`
      `),n("span",{class:"token comment"},"# Configures Calico networking."),s(`
      calicoNetwork`),n("span",{class:"token punctuation"},":"),s(`
        `),n("span",{class:"token comment"},"# Note: The ipPools section cannot be modified post-install."),s(`
        ipPools`),n("span",{class:"token punctuation"},":"),s(`
        `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token key atrule"},"blockSize"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"26"),s(`
          `),n("span",{class:"token comment"},"# Note: Must be the same as podCIDR"),s(`
          cidr`),n("span",{class:"token punctuation"},":"),s(` 10.160.0.0/12
          encapsulation`),n("span",{class:"token punctuation"},":"),s(` IPIP
          natOutgoing`),n("span",{class:"token punctuation"},":"),s(` Enabled
          nodeSelector`),n("span",{class:"token punctuation"},":"),s(` all()
        nodeAddressAutodetectionV4`),n("span",{class:"token punctuation"},":"),s(`
          interface`),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'"eth.*|en.*"'),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),O=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"提示"),n("p",null,[s("将calico的内容追加到"),n("code",null,"Clusterfile"),s("文件的末尾。")])],-1),R=n("p",null,"启动集群安装",-1),D=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("sealos apply "),n("span",{class:"token parameter variable"},"-f"),s(` Clusterfile
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),E=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"提示"),n("p",null,[s("集群运行成功后会把 Clusterfile 保存到 "),n("code",null,".sealos/default/Clusterfile"),s(" 文件中，可以修改其中字段来重新 apply 对集群进行变更。")])],-1),q=o(`<h2 id="配置管理" tabindex="-1"><a class="header-anchor" href="#配置管理"><span>配置管理</span></a></h2><h3 id="安装应用" tabindex="-1"><a class="header-anchor" href="#安装应用"><span>安装应用</span></a></h3><p>安装 helm</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>sealos run labring/helm:v3.9.4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装 openebs</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>sealos run labring/openebs:v1.9.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装 oneliner</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>sealos run labring/minio-operator:v4.4.16 labring/ingress-nginx:4.1.0 <span class="token punctuation">\\</span>
   labring/mysql-operator:8.0.23-14.1 labring/redis-operator:3.1.4 <span class="token comment"># oneliner</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="增加节点" tabindex="-1"><a class="header-anchor" href="#增加节点"><span>增加节点</span></a></h3><p>增加node节点</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#增加node节点</span>
sealos <span class="token function">add</span> <span class="token parameter variable">--nodes</span> <span class="token number">10.10</span>.12.214
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>增加master节点</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#增加master节点</span>
sealos <span class="token function">add</span> <span class="token parameter variable">--masters</span> <span class="token number">10.10</span>.12.212
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除节点" tabindex="-1"><a class="header-anchor" href="#删除节点"><span>删除节点</span></a></h3><p>删除node节点</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#删除node节点</span>
sealos delete <span class="token parameter variable">--nodes</span> <span class="token number">10.10</span>.12.214
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>删除master节点</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#删除master节点</span>
sealos delete <span class="token parameter variable">--masters</span> <span class="token number">10.10</span>.12.212
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="清理集群" tabindex="-1"><a class="header-anchor" href="#清理集群"><span>清理集群</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>sealos reset <span class="token parameter variable">--force</span><span class="token operator">=</span>true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,20);function z(V,K){const c=i("CodeTabs"),p=i("Tabs");return u(),k("div",null,[m,b,l(c,{id:"6",data:[{id:"手动设置"},{id:"脚本设置"}],active:0},{title0:a(({value:e,isActive:t})=>[s("手动设置")]),title1:a(({value:e,isActive:t})=>[s("脚本设置")]),tab0:a(({value:e,isActive:t})=>[v]),tab1:a(({value:e,isActive:t})=>[h]),_:1}),y,l(c,{id:"52",data:[{id:"通用"},{id:"离线"},{id:"CentOS 7.x"},{id:"CentOS 8.x"}],active:0},{title0:a(({value:e,isActive:t})=>[s("通用")]),title1:a(({value:e,isActive:t})=>[s("离线")]),title2:a(({value:e,isActive:t})=>[s("CentOS 7.x")]),title3:a(({value:e,isActive:t})=>[s("CentOS 8.x")]),tab0:a(({value:e,isActive:t})=>[g]),tab1:a(({value:e,isActive:t})=>[f]),tab2:a(({value:e,isActive:t})=>[x]),tab3:a(({value:e,isActive:t})=>[w]),_:1}),P,l(p,{id:"116",data:[{id:"calico"},{id:"calico+国内镜像"},{id:"cilium"},{id:"cilium+国内镜像"},{id:"Clusterfile自定义安装"}],active:0},{title0:a(({value:e,isActive:t})=>[s("calico")]),title1:a(({value:e,isActive:t})=>[s("calico+国内镜像")]),title2:a(({value:e,isActive:t})=>[s("cilium")]),title3:a(({value:e,isActive:t})=>[s("cilium+国内镜像")]),title4:a(({value:e,isActive:t})=>[s("Clusterfile自定义安装")]),tab0:a(({value:e,isActive:t})=>[C]),tab1:a(({value:e,isActive:t})=>[_]),tab2:a(({value:e,isActive:t})=>[S]),tab3:a(({value:e,isActive:t})=>[A]),tab4:a(({value:e,isActive:t})=>[T,N,I,F,H,M,O,R,D,E]),_:1}),q])}const $=r(d,[["render",z],["__file","install-k8s-with-sealos.html.vue"]]),G=JSON.parse('{"path":"/guide/cloudnative/sealos/installtion/install-k8s-with-sealos.html","title":"使用sealos安装k8s集群","lang":"zh-CN","frontmatter":{"title":"使用sealos安装k8s集群","description":"主机准备 配置主机名称 配置 hosts master 节点+worker 节点 关闭 selinux 和防火墙 master 节点+worker 节点 关闭 swap master 节点+worker 节点 安装依赖 时钟同步 内核升级（可选） 安装sealos 在管理节点上安装sealos（非k8s集群节点） 离线镜像准备（可选） 安装sealos...","head":[["meta",{"property":"og:url","content":"https://github.com/abelit/abelit-datapeacock.git/guide/cloudnative/sealos/installtion/install-k8s-with-sealos.html"}],["meta",{"property":"og:site_name","content":"数之雀"}],["meta",{"property":"og:title","content":"使用sealos安装k8s集群"}],["meta",{"property":"og:description","content":"主机准备 配置主机名称 配置 hosts master 节点+worker 节点 关闭 selinux 和防火墙 master 节点+worker 节点 关闭 swap master 节点+worker 节点 安装依赖 时钟同步 内核升级（可选） 安装sealos 在管理节点上安装sealos（非k8s集群节点） 离线镜像准备（可选） 安装sealos..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-11T14:06:18.000Z"}],["meta",{"property":"article:author","content":"Abelit"}],["meta",{"property":"article:modified_time","content":"2024-05-11T14:06:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"使用sealos安装k8s集群\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-11T14:06:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Abelit\\",\\"url\\":\\"https://github.com/abelit\\"}]}"]]},"headers":[{"level":2,"title":"主机准备","slug":"主机准备","link":"#主机准备","children":[{"level":3,"title":"配置主机名称","slug":"配置主机名称","link":"#配置主机名称","children":[]},{"level":3,"title":"配置 hosts","slug":"配置-hosts","link":"#配置-hosts","children":[]},{"level":3,"title":"关闭 selinux 和防火墙","slug":"关闭-selinux-和防火墙","link":"#关闭-selinux-和防火墙","children":[]},{"level":3,"title":"关闭 swap","slug":"关闭-swap","link":"#关闭-swap","children":[]},{"level":3,"title":"安装依赖","slug":"安装依赖","link":"#安装依赖","children":[]},{"level":3,"title":"时钟同步","slug":"时钟同步","link":"#时钟同步","children":[]},{"level":3,"title":"内核升级（可选）","slug":"内核升级-可选","link":"#内核升级-可选","children":[]}]},{"level":2,"title":"安装sealos","slug":"安装sealos","link":"#安装sealos","children":[]},{"level":2,"title":"离线镜像准备（可选）","slug":"离线镜像准备-可选","link":"#离线镜像准备-可选","children":[{"level":3,"title":"安装sealos","slug":"安装sealos-1","link":"#安装sealos-1","children":[]},{"level":3,"title":"准备kuberntes镜像","slug":"准备kuberntes镜像","link":"#准备kuberntes镜像","children":[]}]},{"level":2,"title":"部署k8s集群","slug":"部署k8s集群","link":"#部署k8s集群","children":[{"level":3,"title":"单机部署","slug":"单机部署","link":"#单机部署","children":[]},{"level":3,"title":"集群部署","slug":"集群部署","link":"#集群部署","children":[]}]},{"level":2,"title":"配置管理","slug":"配置管理","link":"#配置管理","children":[{"level":3,"title":"安装应用","slug":"安装应用","link":"#安装应用","children":[]},{"level":3,"title":"增加节点","slug":"增加节点","link":"#增加节点","children":[]},{"level":3,"title":"删除节点","slug":"删除节点","link":"#删除节点","children":[]},{"level":3,"title":"清理集群","slug":"清理集群","link":"#清理集群","children":[]}]}],"git":{"createdTime":1715436378000,"updatedTime":1715436378000,"contributors":[{"name":"ableit","email":"ychenid@live.com","commits":1}]},"readingTime":{"minutes":6.16,"words":1848},"filePathRelative":"guide/cloudnative/sealos/installtion/install-k8s-with-sealos.md","localizedDate":"2024年5月11日","autoDesc":true,"excerpt":"<h2>主机准备</h2>\\n<h3>配置主机名称</h3>\\n\\n<h3>配置 hosts</h3>\\n<blockquote>\\n<p>master 节点+worker 节点</p>\\n</blockquote>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token function\\">cat</span> <span class=\\"token operator\\">&gt;&gt;</span> /etc/hosts <span class=\\"token operator\\">&lt;&lt;</span><span class=\\"token string\\">EOF\\n10.10.12.210 node1\\n10.10.12.211 node2\\n10.10.12.212 node3\\n10.10.12.213 node4\\n10.10.12.214 node5\\nEOF</span>\\n</code></pre></div>"}');export{$ as comp,G as data};
