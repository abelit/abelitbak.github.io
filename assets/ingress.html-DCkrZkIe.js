import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,f as e}from"./app-DR5J2daJ.js";const t={},p=e(`<h2 id="配置ingress-controller" tabindex="-1"><a class="header-anchor" href="#配置ingress-controller"><span>配置Ingress Controller</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">wget</span> <span class="token parameter variable">-O</span> ingress-nginx-controller.yaml https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.6.4/deploy/static/provider/cloud/deploy.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">温馨提示：</p><p>若出现镜像拉取问题，可更改镜像地址：</p><pre><code>- 原镜像： image: registry.k8s.io/ingress-nginx/controller:v1.6.4@sha256:15be4666c53052484dd2992efacf2f50ea77a78ae8aa21ccd91af6baaa7ea22f
- 新镜像： image: yakexi007/ingress-nginx-controller:v1.6.4

- 原镜像： image: registry.k8s.io/ingress-nginx/kube-webhook-certgen:v20220916-gd32f8c343@sha256:39c5b2e3310dc4264d638ad28d9d1d96c4cbb2b2dcfb52368fe4e3c63f61e10f
- 新镜像： image: yakexi007/kube-webhook-certgen:v20220916-gd32f8c343
</code></pre></div><h3 id="deployment-nodeport-模式" tabindex="-1"><a class="header-anchor" href="#deployment-nodeport-模式"><span>Deployment + Nodeport 模式</span></a></h3><h4 id="复制文件" tabindex="-1"><a class="header-anchor" href="#复制文件"><span>复制文件</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cp</span> ingress-nginx-controller.yaml ingress-nginx-controller-nodeport.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="更改文件" tabindex="-1"><a class="header-anchor" href="#更改文件"><span>更改文件</span></a></h4><ul><li>源文件</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app.kubernetes.io/component</span><span class="token punctuation">:</span> controller
    <span class="token key atrule">app.kubernetes.io/instance</span><span class="token punctuation">:</span> ingress<span class="token punctuation">-</span>nginx
    <span class="token key atrule">app.kubernetes.io/name</span><span class="token punctuation">:</span> ingress<span class="token punctuation">-</span>nginx
    <span class="token key atrule">app.kubernetes.io/part-of</span><span class="token punctuation">:</span> ingress<span class="token punctuation">-</span>nginx
    <span class="token key atrule">app.kubernetes.io/version</span><span class="token punctuation">:</span> 1.6.4
  <span class="token key atrule">name</span><span class="token punctuation">:</span> ingress<span class="token punctuation">-</span>nginx<span class="token punctuation">-</span>controller
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> ingress<span class="token punctuation">-</span>nginx
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">externalTrafficPolicy</span><span class="token punctuation">:</span> Local
  <span class="token key atrule">ipFamilies</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> IPv4
  <span class="token key atrule">ipFamilyPolicy</span><span class="token punctuation">:</span> SingleStack
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">appProtocol</span><span class="token punctuation">:</span> http
    <span class="token key atrule">name</span><span class="token punctuation">:</span> http
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">80</span>
    <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
    <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> http
  <span class="token punctuation">-</span> <span class="token key atrule">appProtocol</span><span class="token punctuation">:</span> https
    <span class="token key atrule">name</span><span class="token punctuation">:</span> https
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">443</span>
    <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
    <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> https
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">app.kubernetes.io/component</span><span class="token punctuation">:</span> controller
    <span class="token key atrule">app.kubernetes.io/instance</span><span class="token punctuation">:</span> ingress<span class="token punctuation">-</span>nginx
    <span class="token key atrule">app.kubernetes.io/name</span><span class="token punctuation">:</span> ingress<span class="token punctuation">-</span>nginx
  <span class="token key atrule">type</span><span class="token punctuation">:</span> LoadBalancer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>新文件</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app.kubernetes.io/component</span><span class="token punctuation">:</span> controller
    <span class="token key atrule">app.kubernetes.io/instance</span><span class="token punctuation">:</span> ingress<span class="token punctuation">-</span>nginx
    <span class="token key atrule">app.kubernetes.io/name</span><span class="token punctuation">:</span> ingress<span class="token punctuation">-</span>nginx
    <span class="token key atrule">app.kubernetes.io/part-of</span><span class="token punctuation">:</span> ingress<span class="token punctuation">-</span>nginx
    <span class="token key atrule">app.kubernetes.io/version</span><span class="token punctuation">:</span> 1.6.4
  <span class="token key atrule">name</span><span class="token punctuation">:</span> ingress<span class="token punctuation">-</span>nginx<span class="token punctuation">-</span>controller
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> ingress<span class="token punctuation">-</span>nginx
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">externalTrafficPolicy</span><span class="token punctuation">:</span> Local
  <span class="token key atrule">ipFamilies</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> IPv4
  <span class="token key atrule">ipFamilyPolicy</span><span class="token punctuation">:</span> SingleStack
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">appProtocol</span><span class="token punctuation">:</span> http
    <span class="token key atrule">name</span><span class="token punctuation">:</span> http
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">80</span>
    <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
    <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> http
    <span class="token key atrule">nodePort</span><span class="token punctuation">:</span> <span class="token number">32080</span> <span class="token comment"># abelit 新增</span>
  <span class="token punctuation">-</span> <span class="token key atrule">appProtocol</span><span class="token punctuation">:</span> https
    <span class="token key atrule">name</span><span class="token punctuation">:</span> https
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">443</span>
    <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
    <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> https
    <span class="token key atrule">nodePort</span><span class="token punctuation">:</span> <span class="token number">32443</span> <span class="token comment"># abelit 新增</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">app.kubernetes.io/component</span><span class="token punctuation">:</span> controller
    <span class="token key atrule">app.kubernetes.io/instance</span><span class="token punctuation">:</span> ingress<span class="token punctuation">-</span>nginx
    <span class="token key atrule">app.kubernetes.io/name</span><span class="token punctuation">:</span> ingress<span class="token punctuation">-</span>nginx
  <span class="token key atrule">type</span><span class="token punctuation">:</span> NodePort <span class="token comment"># abelit 修改</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="部署" tabindex="-1"><a class="header-anchor" href="#部署"><span>部署</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubectl apply <span class="token parameter variable">-f</span> ingress-nginx-controller-nodeport.yaml

kubectl <span class="token parameter variable">-n</span> ingress-nginx scale deployment ingress-nginx-controller <span class="token parameter variable">--replicas</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="daemonset-hostnetwork-模式" tabindex="-1"><a class="header-anchor" href="#daemonset-hostnetwork-模式"><span>Daemonset + HostNetwork 模式</span></a></h3><h4 id="复制文件-1" tabindex="-1"><a class="header-anchor" href="#复制文件-1"><span>复制文件</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cp</span> ingress-nginx-controller.yaml ingress-nginx-controller-hostnetwork.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="更改文件-1" tabindex="-1"><a class="header-anchor" href="#更改文件-1"><span>更改文件</span></a></h4><ul><li>源文件</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token punctuation">...</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app.kubernetes.io/component</span><span class="token punctuation">:</span> controller
    <span class="token key atrule">app.kubernetes.io/instance</span><span class="token punctuation">:</span> ingress<span class="token punctuation">-</span>nginx
    <span class="token key atrule">app.kubernetes.io/name</span><span class="token punctuation">:</span> ingress<span class="token punctuation">-</span>nginx
    <span class="token key atrule">app.kubernetes.io/part-of</span><span class="token punctuation">:</span> ingress<span class="token punctuation">-</span>nginx
    <span class="token key atrule">app.kubernetes.io/version</span><span class="token punctuation">:</span> 1.6.4
  <span class="token key atrule">name</span><span class="token punctuation">:</span> ingress<span class="token punctuation">-</span>nginx<span class="token punctuation">-</span>controller
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> ingress<span class="token punctuation">-</span>nginx
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">minReadySeconds</span><span class="token punctuation">:</span> <span class="token number">0</span>
  <span class="token key atrule">revisionHistoryLimit</span><span class="token punctuation">:</span> <span class="token number">10</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app.kubernetes.io/component</span><span class="token punctuation">:</span> controller
      <span class="token key atrule">app.kubernetes.io/instance</span><span class="token punctuation">:</span> ingress<span class="token punctuation">-</span>nginx
      <span class="token key atrule">app.kubernetes.io/name</span><span class="token punctuation">:</span> ingress<span class="token punctuation">-</span>nginx
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app.kubernetes.io/component</span><span class="token punctuation">:</span> controller
        <span class="token key atrule">app.kubernetes.io/instance</span><span class="token punctuation">:</span> ingress<span class="token punctuation">-</span>nginx
        <span class="token key atrule">app.kubernetes.io/name</span><span class="token punctuation">:</span> ingress<span class="token punctuation">-</span>nginx
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> /nginx<span class="token punctuation">-</span>ingress<span class="token punctuation">-</span>controller
        <span class="token punctuation">-</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>publish<span class="token punctuation">-</span>service=$(POD_NAMESPACE)/ingress<span class="token punctuation">-</span>nginx<span class="token punctuation">-</span>controller
        <span class="token punctuation">-</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>election<span class="token punctuation">-</span>id=ingress<span class="token punctuation">-</span>nginx<span class="token punctuation">-</span>leader
        <span class="token punctuation">-</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>controller<span class="token punctuation">-</span>class=k8s.io/ingress<span class="token punctuation">-</span>nginx
        <span class="token punctuation">-</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>ingress<span class="token punctuation">-</span>class=nginx
        <span class="token punctuation">-</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>configmap=$(POD_NAMESPACE)/ingress<span class="token punctuation">-</span>nginx<span class="token punctuation">-</span>controller
        <span class="token punctuation">-</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>validating<span class="token punctuation">-</span>webhook=<span class="token punctuation">:</span><span class="token number">8443</span>
        <span class="token punctuation">-</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>validating<span class="token punctuation">-</span>webhook<span class="token punctuation">-</span>certificate=/usr/local/certificates/cert
        <span class="token punctuation">-</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>validating<span class="token punctuation">-</span>webhook<span class="token punctuation">-</span>key=/usr/local/certificates/key
<span class="token punctuation">...</span>
<span class="token key atrule">dnsPolicy</span><span class="token punctuation">:</span> ClusterFirst
<span class="token punctuation">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>新文件</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token punctuation">...</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> DaemonSet <span class="token comment"># abelit 修改</span>
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app.kubernetes.io/component</span><span class="token punctuation">:</span> controller
    <span class="token key atrule">app.kubernetes.io/instance</span><span class="token punctuation">:</span> ingress<span class="token punctuation">-</span>nginx
    <span class="token key atrule">app.kubernetes.io/name</span><span class="token punctuation">:</span> ingress<span class="token punctuation">-</span>nginx
    <span class="token key atrule">app.kubernetes.io/part-of</span><span class="token punctuation">:</span> ingress<span class="token punctuation">-</span>nginx
    <span class="token key atrule">app.kubernetes.io/version</span><span class="token punctuation">:</span> 1.6.4
  <span class="token key atrule">name</span><span class="token punctuation">:</span> ingress<span class="token punctuation">-</span>nginx<span class="token punctuation">-</span>controller
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> ingress<span class="token punctuation">-</span>nginx
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">minReadySeconds</span><span class="token punctuation">:</span> <span class="token number">0</span>
  <span class="token key atrule">revisionHistoryLimit</span><span class="token punctuation">:</span> <span class="token number">10</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app.kubernetes.io/component</span><span class="token punctuation">:</span> controller
      <span class="token key atrule">app.kubernetes.io/instance</span><span class="token punctuation">:</span> ingress<span class="token punctuation">-</span>nginx
      <span class="token key atrule">app.kubernetes.io/name</span><span class="token punctuation">:</span> ingress<span class="token punctuation">-</span>nginx
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app.kubernetes.io/component</span><span class="token punctuation">:</span> controller
        <span class="token key atrule">app.kubernetes.io/instance</span><span class="token punctuation">:</span> ingress<span class="token punctuation">-</span>nginx
        <span class="token key atrule">app.kubernetes.io/name</span><span class="token punctuation">:</span> ingress<span class="token punctuation">-</span>nginx
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">hostNetwork</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># abelit 新增</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">args</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> /nginx<span class="token punctuation">-</span>ingress<span class="token punctuation">-</span>controller
        <span class="token punctuation">-</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>publish<span class="token punctuation">-</span>service=$(POD_NAMESPACE)/ingress<span class="token punctuation">-</span>nginx<span class="token punctuation">-</span>controller
        <span class="token punctuation">-</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>election<span class="token punctuation">-</span>id=ingress<span class="token punctuation">-</span>nginx<span class="token punctuation">-</span>leader
        <span class="token punctuation">-</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>controller<span class="token punctuation">-</span>class=k8s.io/ingress<span class="token punctuation">-</span>nginx
        <span class="token punctuation">-</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>ingress<span class="token punctuation">-</span>class=nginx
        <span class="token punctuation">-</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>configmap=$(POD_NAMESPACE)/ingress<span class="token punctuation">-</span>nginx<span class="token punctuation">-</span>controller
        <span class="token punctuation">-</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>validating<span class="token punctuation">-</span>webhook=<span class="token punctuation">:</span><span class="token number">8443</span>
        <span class="token punctuation">-</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>validating<span class="token punctuation">-</span>webhook<span class="token punctuation">-</span>certificate=/usr/local/certificates/cert
        <span class="token punctuation">-</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>validating<span class="token punctuation">-</span>webhook<span class="token punctuation">-</span>key=/usr/local/certificates/key
<span class="token punctuation">...</span>
<span class="token key atrule">dnsPolicy</span><span class="token punctuation">:</span> ClusterFirstWithHostNet <span class="token comment"># abelit 修改</span>
<span class="token punctuation">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="部署-1" tabindex="-1"><a class="header-anchor" href="#部署-1"><span>部署</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubectl apply <span class="token parameter variable">-f</span> ingress-nginx-controller-hostnetwork.yaml

kubectl <span class="token parameter variable">-n</span> ingress-nginx scale deployment ingress-nginx-controller <span class="token parameter variable">--replicas</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23),l=[p];function i(c,o){return s(),a("div",null,l)}const k=n(t,[["render",i],["__file","ingress.html.vue"]]),d=JSON.parse('{"path":"/guide/cloudnative/kubernetes/ingress.html","title":"Ingress","lang":"zh-CN","frontmatter":{"title":"Ingress","description":"配置Ingress Controller 温馨提示： 若出现镜像拉取问题，可更改镜像地址： Deployment + Nodeport 模式 复制文件 更改文件 源文件 新文件 部署 Daemonset + HostNetwork 模式 复制文件 更改文件 源文件 新文件 部署","head":[["meta",{"property":"og:url","content":"https://github.com/abelit/abelit-datapeacock.git/guide/cloudnative/kubernetes/ingress.html"}],["meta",{"property":"og:site_name","content":"数之雀"}],["meta",{"property":"og:title","content":"Ingress"}],["meta",{"property":"og:description","content":"配置Ingress Controller 温馨提示： 若出现镜像拉取问题，可更改镜像地址： Deployment + Nodeport 模式 复制文件 更改文件 源文件 新文件 部署 Daemonset + HostNetwork 模式 复制文件 更改文件 源文件 新文件 部署"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-11T14:06:18.000Z"}],["meta",{"property":"article:author","content":"Abelit"}],["meta",{"property":"article:modified_time","content":"2024-05-11T14:06:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Ingress\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-11T14:06:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Abelit\\",\\"url\\":\\"https://github.com/abelit\\"}]}"]]},"headers":[{"level":2,"title":"配置Ingress Controller","slug":"配置ingress-controller","link":"#配置ingress-controller","children":[{"level":3,"title":"Deployment + Nodeport 模式","slug":"deployment-nodeport-模式","link":"#deployment-nodeport-模式","children":[]},{"level":3,"title":"Daemonset + HostNetwork 模式","slug":"daemonset-hostnetwork-模式","link":"#daemonset-hostnetwork-模式","children":[]}]}],"git":{"createdTime":1715436378000,"updatedTime":1715436378000,"contributors":[{"name":"ableit","email":"ychenid@live.com","commits":1}]},"readingTime":{"minutes":1.75,"words":525},"filePathRelative":"guide/cloudnative/kubernetes/ingress.md","localizedDate":"2024年5月11日","autoDesc":true,"excerpt":"<h2>配置Ingress Controller</h2>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token function\\">wget</span> <span class=\\"token parameter variable\\">-O</span> ingress-nginx-controller.yaml https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.6.4/deploy/static/provider/cloud/deploy.yaml\\n</code></pre></div>"}');export{k as comp,d as data};
