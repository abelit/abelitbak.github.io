import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as n,f as s}from"./app-DR5J2daJ.js";const r={},t=s(`<h2 id="使用-helm-来安装-rancher" tabindex="-1"><a class="header-anchor" href="#使用-helm-来安装-rancher"><span>使用 Helm 来安装 Rancher</span></a></h2><h3 id="添加-helm-仓库" tabindex="-1"><a class="header-anchor" href="#添加-helm-仓库"><span>添加 Helm 仓库</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>helm repo <span class="token function">add</span> rancher-latest https://releases.rancher.com/server-charts/latest
helm repo <span class="token function">add</span> jetstack https://charts.jetstack.io

helm repo update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建命名空间" tabindex="-1"><a class="header-anchor" href="#创建命名空间"><span>创建命名空间</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubectl create namespace cattle-system
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="安装-cert-manager" tabindex="-1"><a class="header-anchor" href="#安装-cert-manager"><span>安装 cert-manager</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">wget</span> <span class="token parameter variable">-O</span> cert-manager.crds.yaml https://github.com/cert-manager/cert-manager/releases/download/v1.7.1/cert-manager.crds.yaml
kubectl apply <span class="token parameter variable">-f</span> cert-manager.crds.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>如果你手动安装了 CRD，而不是在 Helm 安装命令中添加了 <code>--set installCRDs=true</code> 选项，你应该在升级 Helm Chart 之前升级 CRD 资源。</p></div><h3 id="安装-cert-manager-helm-chart" tabindex="-1"><a class="header-anchor" href="#安装-cert-manager-helm-chart"><span>安装 cert-manager Helm Chart</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>helm <span class="token function">install</span> cert-manager jetstack/cert-manager <span class="token punctuation">\\</span>
  <span class="token parameter variable">--namespace</span> cert-manager <span class="token punctuation">\\</span>
  --create-namespace <span class="token punctuation">\\</span>
  <span class="token parameter variable">--version</span> v1.7.1

kubectl get pods <span class="token parameter variable">--namespace</span> cert-manager
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装-rancher" tabindex="-1"><a class="header-anchor" href="#安装-rancher"><span>安装 Rancher</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>helm pull rancher-latest/rancher
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> rancher-2.7.1.tgz

<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/kubeVersion: &lt; 1.25.0-0/kubeVersion: &lt; 1.27.0-0/g&#39;</span> rancher/Chart.yaml
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/ingressClassName: &quot;&quot;/ingressClassName: &quot;nginx&quot;/g&#39;</span> rancher/values.yaml

helm <span class="token function">install</span> rancher rancher <span class="token punctuation">\\</span>
<span class="token parameter variable">--namespace</span> cattle-system <span class="token punctuation">\\</span>
<span class="token parameter variable">--set</span> <span class="token assign-left variable">hostname</span><span class="token operator">=</span>rancher.abelitk8s.com <span class="token punctuation">\\</span>
<span class="token parameter variable">--set</span> <span class="token assign-left variable">bootstrapPassword</span><span class="token operator">=</span>admin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>获取登录密码:</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> https://rancher.abelitk8s.com/dashboard/?setup<span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>kubectl get secret <span class="token parameter variable">--namespace</span> cattle-system bootstrap-secret <span class="token parameter variable">-o</span> go-template<span class="token operator">=</span><span class="token string">&#39;{{.data.bootstrapPassword|base64decode}}&#39;</span><span class="token variable">)</span></span>

kubectl get secret <span class="token parameter variable">--namespace</span> cattle-system bootstrap-secret <span class="token parameter variable">-o</span> go-template<span class="token operator">=</span><span class="token string">&#39;{{.data.bootstrapPassword|base64decode}}{{ &quot;\\n&quot; }}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置-rancher-访问入口" tabindex="-1"><a class="header-anchor" href="#配置-rancher-访问入口"><span>配置 Rancher 访问入口</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&lt;&lt;-</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">|</span> <span class="token function">tee</span> rancher-ingress.yaml</span>
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: rancher-ingress
  namespace: cattle-system
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /<span class="token variable">$1</span>
spec:
  rules:
    - host: rancher.abelitk8s.com
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: rancher
                port: 80
EOF</span>

kubectl apply <span class="token parameter variable">-f</span> rancher-ingress.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>使用helm安装Rancher已经配置了Ingress资源访问入口。</p></div><h2 id="安装脚本" tabindex="-1"><a class="header-anchor" href="#安装脚本"><span>安装脚本</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>helm repo <span class="token function">add</span> rancher-latest https://releases.rancher.com/server-charts/latest

kubectl create namespace cattle-system

kubectl apply <span class="token parameter variable">-f</span> https://github.com/cert-manager/cert-manager/releases/download/v1.7.1/cert-manager.crds.yaml

helm repo <span class="token function">add</span> jetstack https://charts.jetstack.io

helm repo update

helm <span class="token function">install</span> cert-manager jetstack/cert-manager <span class="token punctuation">\\</span>
  <span class="token parameter variable">--namespace</span> cert-manager <span class="token punctuation">\\</span>
  --create-namespace <span class="token punctuation">\\</span>
  <span class="token parameter variable">--version</span> v1.7.1

helm <span class="token function">install</span> rancher rancher-latest/rancher <span class="token punctuation">\\</span>
  <span class="token parameter variable">--namespace</span> cattle-system <span class="token punctuation">\\</span>
  <span class="token parameter variable">--set</span> <span class="token assign-left variable">hostname</span><span class="token operator">=</span>rancher.abelitk8s.com <span class="token punctuation">\\</span>
  <span class="token parameter variable">--set</span> <span class="token assign-left variable">replicas</span><span class="token operator">=</span><span class="token number">1</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">--set</span> <span class="token assign-left variable">bootstrapPassword</span><span class="token operator">=</span>Myrancheradminpassword
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="删除kubernetes上的rancher" tabindex="-1"><a class="header-anchor" href="#删除kubernetes上的rancher"><span>删除Kubernetes上的Rancher</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token comment"># cleanup rancher in k8s</span>
<span class="token function">git</span> clone https://github.com/rancher/rancher-cleanup.git
<span class="token builtin class-name">cd</span> rancher-cleanup
kubectl create <span class="token parameter variable">-f</span> deploy/rancher-cleanup.yaml 
kubectl  <span class="token parameter variable">-n</span> kube-system logs <span class="token parameter variable">-l</span> job-name<span class="token operator">=</span>verify-job  <span class="token parameter variable">-f</span>
kubectl  <span class="token parameter variable">-n</span> kube-system logs <span class="token parameter variable">-l</span> job-name<span class="token operator">=</span>cleanup-job  <span class="token parameter variable">-f</span>



helm <span class="token function">ls</span> --all-namespaces
helm <span class="token parameter variable">--namespace</span> cert-manager delete cert-manager
kubectl delete namespace cert-manager
kubectl create namespace cattle-system
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker中安装rancher" tabindex="-1"><a class="header-anchor" href="#docker中安装rancher"><span>Docker中安装Rancher</span></a></h2><h3 id="运行rancher容器" tabindex="-1"><a class="header-anchor" href="#运行rancher容器"><span>运行Rancher容器</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--restart</span><span class="token operator">=</span>unless-stopped <span class="token punctuation">\\</span>
  <span class="token parameter variable">-p</span> <span class="token number">80</span>:80 <span class="token parameter variable">-p</span> <span class="token number">443</span>:443 <span class="token punctuation">\\</span>
  <span class="token parameter variable">--privileged</span> <span class="token punctuation">\\</span>
  rancher/rancher:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>获取初始登录密码： docker logs 087b4aa5e3a5 2&gt;&amp;1 | grep &quot;Bootstrap Password:&quot;</p></blockquote>`,25),l=[t];function i(c,p){return a(),n("div",null,l)}const m=e(r,[["render",i],["__file","install-upgrade-on-a-kubernetes-cluster.html.vue"]]),u=JSON.parse('{"path":"/guide/cloudnative/rancher/installation/install-upgrade-on-a-kubernetes-cluster.html","title":"在Kubernetes集群上安装Rancher","lang":"zh-CN","frontmatter":{"title":"在Kubernetes集群上安装Rancher","description":"使用 Helm 来安装 Rancher 添加 Helm 仓库 创建命名空间 安装 cert-manager 注意 如果你手动安装了 CRD，而不是在 Helm 安装命令中添加了 --set installCRDs=true 选项，你应该在升级 Helm Chart 之前升级 CRD 资源。 安装 cert-manager Helm Chart 安装 R...","head":[["meta",{"property":"og:url","content":"https://github.com/abelit/abelit-datapeacock.git/guide/cloudnative/rancher/installation/install-upgrade-on-a-kubernetes-cluster.html"}],["meta",{"property":"og:site_name","content":"数之雀"}],["meta",{"property":"og:title","content":"在Kubernetes集群上安装Rancher"}],["meta",{"property":"og:description","content":"使用 Helm 来安装 Rancher 添加 Helm 仓库 创建命名空间 安装 cert-manager 注意 如果你手动安装了 CRD，而不是在 Helm 安装命令中添加了 --set installCRDs=true 选项，你应该在升级 Helm Chart 之前升级 CRD 资源。 安装 cert-manager Helm Chart 安装 R..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-11T14:06:18.000Z"}],["meta",{"property":"article:author","content":"Abelit"}],["meta",{"property":"article:modified_time","content":"2024-05-11T14:06:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"在Kubernetes集群上安装Rancher\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-11T14:06:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Abelit\\",\\"url\\":\\"https://github.com/abelit\\"}]}"]]},"headers":[{"level":2,"title":"使用 Helm 来安装 Rancher","slug":"使用-helm-来安装-rancher","link":"#使用-helm-来安装-rancher","children":[{"level":3,"title":"添加 Helm 仓库","slug":"添加-helm-仓库","link":"#添加-helm-仓库","children":[]},{"level":3,"title":"创建命名空间","slug":"创建命名空间","link":"#创建命名空间","children":[]},{"level":3,"title":"安装 cert-manager","slug":"安装-cert-manager","link":"#安装-cert-manager","children":[]},{"level":3,"title":"安装 cert-manager Helm Chart","slug":"安装-cert-manager-helm-chart","link":"#安装-cert-manager-helm-chart","children":[]},{"level":3,"title":"安装 Rancher","slug":"安装-rancher","link":"#安装-rancher","children":[]},{"level":3,"title":"配置 Rancher 访问入口","slug":"配置-rancher-访问入口","link":"#配置-rancher-访问入口","children":[]}]},{"level":2,"title":"安装脚本","slug":"安装脚本","link":"#安装脚本","children":[]},{"level":2,"title":"删除Kubernetes上的Rancher","slug":"删除kubernetes上的rancher","link":"#删除kubernetes上的rancher","children":[]},{"level":2,"title":"Docker中安装Rancher","slug":"docker中安装rancher","link":"#docker中安装rancher","children":[{"level":3,"title":"运行Rancher容器","slug":"运行rancher容器","link":"#运行rancher容器","children":[]}]}],"git":{"createdTime":1715436378000,"updatedTime":1715436378000,"contributors":[{"name":"ableit","email":"ychenid@live.com","commits":1}]},"readingTime":{"minutes":1.54,"words":461},"filePathRelative":"guide/cloudnative/rancher/installation/install-upgrade-on-a-kubernetes-cluster.md","localizedDate":"2024年5月11日","autoDesc":true,"excerpt":"<h2>使用 Helm 来安装 Rancher</h2>\\n<h3>添加 Helm 仓库</h3>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code>helm repo <span class=\\"token function\\">add</span> rancher-latest https://releases.rancher.com/server-charts/latest\\nhelm repo <span class=\\"token function\\">add</span> jetstack https://charts.jetstack.io\\n\\nhelm repo update\\n</code></pre></div>"}');export{m as comp,u as data};
