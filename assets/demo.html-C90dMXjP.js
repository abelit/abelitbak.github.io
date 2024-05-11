import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as d,o,c as p,b as t,w as s,a as e,f as r,d as n}from"./app-DR5J2daJ.js";const m={},b=e("h2",{id:"部署nginx和tomcat应用",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#部署nginx和tomcat应用"},[e("span",null,"部署Nginx和Tomcat应用")])],-1),v=e("h3",{id:"创建namespace-deployment-service",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#创建namespace-deployment-service"},[e("span",null,"创建Namespace,Deployment,Service")])],-1),u=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"cat"),n(),e("span",{class:"token operator"},">"),n(" abelitdev-nginx.yaml "),e("span",{class:"token operator"},"<<"),e("span",{class:"token string"},`EOF
apiVersion: v1
kind: Namespace
metadata:
  labels:
    app.kubernetes.io/instance: abelitdev
    app.kubernetes.io/name: abelitdev
  name: abelitdev
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: abelitdev-nginx-deploy
  namespace: abelitdev
spec:
  replicas: 3
  selector:
    matchLabels:
      app: abelitdev-nginx-pod
  template:
    metadata:
      labels:
        app: abelitdev-nginx-pod
    spec:
      containers:
      - name: nginx
        image: nginx:latest
        ports:
        - containerPort: 80
---
apiVersion: v1
kind: Service
metadata:
  name: abelitdev-nginx-service
  namespace: abelitdev
spec:
  selector:
    app: abelitdev-nginx-pod
  type: ClusterIP
  ports:
  - name: http
    port: 80
    targetPort: 80
    protocol: TCP
EOF`),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),g=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"cat"),n(),e("span",{class:"token operator"},">"),n(" abelitdev-tomcat.yaml "),e("span",{class:"token operator"},"<<"),e("span",{class:"token string"},`EOF
apiVersion: v1
kind: Namespace
metadata:
  labels:
    app.kubernetes.io/instance: abelitdev
    app.kubernetes.io/name: abelitdev
  name: abelitdev
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: abelitdev-tomcat-deploy
  namespace: abelitdev
spec:
  replicas: 3
  selector:
    matchLabels:
      app: abelitdev-tomcat-pod
  template:
    metadata:
      labels:
        app: abelitdev-tomcat-pod
    spec:
      containers:
      - name: tomcat
        image: tomcat:latest
        ports:
        - containerPort: 8080
---
apiVersion: v1
kind: Service
metadata:
  name: abelitdev-tomcat-service
  namespace: abelitdev
spec:
  selector:
    app: abelitdev-tomcat-pod
  type: ClusterIP
  ports:
  - name: http
    port: 8080
    targetPort: 8080
    protocol: TCP
EOF`),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),h=r(`<h2 id="配置服务" tabindex="-1"><a class="header-anchor" href="#配置服务"><span>配置服务</span></a></h2><h3 id="nodeport" tabindex="-1"><a class="header-anchor" href="#nodeport"><span>NodePort</span></a></h3><ul><li>命令行方式创建Delployment</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubectl create namespace abelitdev
kubectl create deployment nginx <span class="token parameter variable">--image</span><span class="token operator">=</span>nginx:latest <span class="token parameter variable">-n</span> abelitdev
kubectl expose deployment nginx <span class="token parameter variable">--port</span><span class="token operator">=</span><span class="token number">80</span> <span class="token parameter variable">--type</span><span class="token operator">=</span>NodePort <span class="token parameter variable">-n</span> abelitdev

kubectl get pods,service <span class="token parameter variable">-n</span> abelitdev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ingress" tabindex="-1"><a class="header-anchor" href="#ingress"><span>Ingress</span></a></h3><ul><li>配置TLS</li></ul><p>如果使用https协议，需配置TLS证书，这里配置自签名的证书。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 生成自定义签名证书和私钥</span>
<span class="token assign-left variable">HOST</span><span class="token operator">=</span><span class="token string">&quot;abelitk8s.com&quot;</span>
<span class="token assign-left variable">KEY_FILE</span><span class="token operator">=</span><span class="token string">&quot;abelitk8s.key&quot;</span>
<span class="token assign-left variable">CERT_FILE</span><span class="token operator">=</span><span class="token string">&quot;abelitk8s.crt&quot;</span>
<span class="token assign-left variable">CERT_NAME</span><span class="token operator">=</span><span class="token string">&quot;abelitk8s-tls&quot;</span>
<span class="token assign-left variable">NAMESPACE</span><span class="token operator">=</span><span class="token string">&quot;abelitdev&quot;</span>
openssl req <span class="token parameter variable">-x509</span> <span class="token parameter variable">-nodes</span> <span class="token parameter variable">-days</span> <span class="token number">365</span> <span class="token parameter variable">-newkey</span> rsa:2048 <span class="token parameter variable">-keyout</span> <span class="token variable">\${KEY_FILE}</span> <span class="token parameter variable">-out</span> <span class="token variable">\${CERT_FILE}</span> <span class="token parameter variable">-subj</span> <span class="token string">&quot;/CN=<span class="token variable">\${HOST}</span>/O=<span class="token variable">\${HOST}</span>&quot;</span>

<span class="token comment"># 创建Kubernetes集群秘钥</span>
kubectl create secret tls <span class="token variable">\${CERT_NAME}</span> <span class="token parameter variable">--key</span> <span class="token variable">\${KEY_FILE}</span> <span class="token parameter variable">--cert</span> <span class="token variable">\${CERT_FILE}</span> <span class="token parameter variable">-n</span> <span class="token variable">\${NAMESPACE}</span>

<span class="token comment"># 查看Kubernetes集群秘钥</span>
kubectl get secret <span class="token parameter variable">-n</span> <span class="token variable">\${NAMESPACE}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>配置Nginx和Tomcat的Ingress资源</li></ul>`,9),k=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"cat"),n(),e("span",{class:"token operator"},">"),n(" abelitdev-http-ingress.yaml "),e("span",{class:"token operator"},"<<"),e("span",{class:"token string"},`EOF
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: abelitdev-http-ingress
  namespace: abelitdev
  annotations:
    kubernetes.io/ingress.class: "nginx"
spec:
  rules:
    - host: tomcat.abelitk8s.com
      http:
        paths:
          - path: "/"
            pathType: Prefix
            backend:
              service:
                name: abelitdev-tomcat-service
                port:
                  number: 8080
    - host: nginx.abelitk8s.com
      http:
        paths:
          - path: "/"
            pathType: Prefix
            backend:
              service:
                name: abelitdev-nginx-service
                port:
                  number: 80
EOF`),n(`

kubectl apply `),e("span",{class:"token parameter variable"},"-f"),n(` abelitdev-http-ingress.yaml
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),x=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"cat"),n(),e("span",{class:"token operator"},">"),n(" abelitdev-https-ingress.yaml "),e("span",{class:"token operator"},"<<"),e("span",{class:"token string"},`EOF
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: abelitdev-https-ingress
  namespace: abelitdev
  annotations:
    #nginx.ingress.kubernetes.io/ssl-redirect: "false"
    #nginx.ingress.kubernetes.io/backend-protocol: https
    kubernetes.io/ingress.class: nginx
spec:
  tls:
    - hosts:
        - tomcat.abelitk8s.com
        - nginx.abelitk8s.com
      secretName: abelitk8s-tls
  rules:
    - host: tomcat.abelitk8s.com
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: abelitdev-tomcat-service
                port:
                  number: 8080
    - host: nginx.abelitk8s.com
      http:
        paths:
          - path: / 
            pathType: Prefix
            backend:
              service:
                name: abelitdev-nginx-service
                port:
                  number: 80
EOF`),n(`

kubectl apply `),e("span",{class:"token parameter variable"},"-f"),n(` abelitdev-https-ingress.yaml
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),y=r(`<div class="hint-container warning"><p class="hint-container-title">温馨提示：</p><p>集群需要提前配置Ingress Controller，本文主要介绍Ingress Nginx方式。</p></div><ul><li>配置访问</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;10.10.12.212 nginx.abelitk8s.com&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/hosts
<span class="token builtin class-name">echo</span> <span class="token string">&quot;10.10.12.212 tomcat.abelitk8s.com&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/hosts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function _(N,T){const l=d("CodeTabs");return o(),p("div",null,[b,v,t(l,{id:"6",data:[{id:"Nginx"},{id:"Tomcat"}],active:0},{title0:s(({value:a,isActive:i})=>[n("Nginx")]),title1:s(({value:a,isActive:i})=>[n("Tomcat")]),tab0:s(({value:a,isActive:i})=>[u]),tab1:s(({value:a,isActive:i})=>[g]),_:1}),h,t(l,{id:"49",data:[{id:"http"},{id:"https"}],active:0},{title0:s(({value:a,isActive:i})=>[n("http")]),title1:s(({value:a,isActive:i})=>[n("https")]),tab0:s(({value:a,isActive:i})=>[k]),tab1:s(({value:a,isActive:i})=>[x]),_:1}),y])}const P=c(m,[["render",_],["__file","demo.html.vue"]]),C=JSON.parse('{"path":"/guide/cloudnative/kubernetes/demo.html","title":"部署应用示例","lang":"zh-CN","frontmatter":{"title":"部署应用示例","description":"部署Nginx和Tomcat应用 创建Namespace,Deployment,Service 配置服务 NodePort 命令行方式创建Delployment Ingress 配置TLS 如果使用https协议，需配置TLS证书，这里配置自签名的证书。 配置Nginx和Tomcat的Ingress资源 温馨提示： 集群需要提前配置Ingress Co...","head":[["meta",{"property":"og:url","content":"https://github.com/abelit/abelit-datapeacock.git/guide/cloudnative/kubernetes/demo.html"}],["meta",{"property":"og:site_name","content":"数之雀"}],["meta",{"property":"og:title","content":"部署应用示例"}],["meta",{"property":"og:description","content":"部署Nginx和Tomcat应用 创建Namespace,Deployment,Service 配置服务 NodePort 命令行方式创建Delployment Ingress 配置TLS 如果使用https协议，需配置TLS证书，这里配置自签名的证书。 配置Nginx和Tomcat的Ingress资源 温馨提示： 集群需要提前配置Ingress Co..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-11T14:06:18.000Z"}],["meta",{"property":"article:author","content":"Abelit"}],["meta",{"property":"article:modified_time","content":"2024-05-11T14:06:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"部署应用示例\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-11T14:06:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Abelit\\",\\"url\\":\\"https://github.com/abelit\\"}]}"]]},"headers":[{"level":2,"title":"部署Nginx和Tomcat应用","slug":"部署nginx和tomcat应用","link":"#部署nginx和tomcat应用","children":[{"level":3,"title":"创建Namespace,Deployment,Service","slug":"创建namespace-deployment-service","link":"#创建namespace-deployment-service","children":[]}]},{"level":2,"title":"配置服务","slug":"配置服务","link":"#配置服务","children":[{"level":3,"title":"NodePort","slug":"nodeport","link":"#nodeport","children":[]},{"level":3,"title":"Ingress","slug":"ingress","link":"#ingress","children":[]}]}],"git":{"createdTime":1715436378000,"updatedTime":1715436378000,"contributors":[{"name":"ableit","email":"ychenid@live.com","commits":1}]},"readingTime":{"minutes":1.76,"words":527},"filePathRelative":"guide/cloudnative/kubernetes/demo.md","localizedDate":"2024年5月11日","autoDesc":true,"excerpt":"<h2>部署Nginx和Tomcat应用</h2>\\n<h3>创建Namespace,Deployment,Service</h3>\\n\\n<h2>配置服务</h2>\\n<h3>NodePort</h3>\\n<ul>\\n<li>命令行方式创建Delployment</li>\\n</ul>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code>kubectl create namespace abelitdev\\nkubectl create deployment nginx <span class=\\"token parameter variable\\">--image</span><span class=\\"token operator\\">=</span>nginx:latest <span class=\\"token parameter variable\\">-n</span> abelitdev\\nkubectl expose deployment nginx <span class=\\"token parameter variable\\">--port</span><span class=\\"token operator\\">=</span><span class=\\"token number\\">80</span> <span class=\\"token parameter variable\\">--type</span><span class=\\"token operator\\">=</span>NodePort <span class=\\"token parameter variable\\">-n</span> abelitdev\\n\\nkubectl get pods,service <span class=\\"token parameter variable\\">-n</span> abelitdev\\n</code></pre></div>"}');export{P as comp,C as data};
