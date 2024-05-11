import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as a,f as s}from"./app-DR5J2daJ.js";const i={},t=s(`<h2 id="_1-set-hostname-at-relative-node" tabindex="-1"><a class="header-anchor" href="#_1-set-hostname-at-relative-node"><span>1.Set hostname , at relative node</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>vim /etc/hostname

master

vim /etc/hostname

node01

vim /etc/hostname

node02

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-set-hosts-at-all-nodes" tabindex="-1"><a class="header-anchor" href="#_2-set-hosts-at-all-nodes"><span>2. Set hosts, at all nodes</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>cat &lt;&lt;EOF &gt;&gt;/etc/hosts
10.10.10.160 master
10.10.10.102 node01
10.10.10.103 node02
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-close-firewalld-selinux-swap-at-all-nodes" tabindex="-1"><a class="header-anchor" href="#_3-close-firewalld-selinux-swap-at-all-nodes"><span>3. Close firewalld, selinux, swap, at all nodes</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>systemctl stop firewalld
systemctl disable firewalld
setenforce 0
sed -i &quot;s/^SELINUX=enforcing/SELINUX=disabled/g&quot; /etc/selinux/config
swapoff -a
# &amp; 保存查找串以便在替换串中引用;   s/my/**&amp;**/  符号&amp;代表查找串。my将被替换为**my**
sed -i &#39;s/.*swap.*/#&amp;/&#39; /etc/fstab
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-配置内核参数-将桥接的ipv4流量传递到iptables的链-at-all-nodes" tabindex="-1"><a class="header-anchor" href="#_4-配置内核参数-将桥接的ipv4流量传递到iptables的链-at-all-nodes"><span>4.配置内核参数，将桥接的IPv4流量传递到iptables的链, at all nodes</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>cat &gt; /etc/sysctl.d/k8s.conf &lt;&lt;EOF
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
EOF

sysctl --system
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-配置国内yum源-at-all-nodes" tabindex="-1"><a class="header-anchor" href="#_5-配置国内yum源-at-all-nodes"><span>5.配置国内yum源, at all nodes</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>yum install -y wget

mkdir /etc/yum.repos.d/bak &amp;&amp; mv /etc/yum.repos.d/*.repo /etc/yum.repos.d/bak

wget -O /etc/yum.repos.d/centos7_base.repo http://mirrors.cloud.tencent.com/repo/centos7_base.repo

wget -O /etc/yum.repos.d/epel-7.repo http://mirrors.cloud.tencent.com/repo/epel-7.repo

yum clean all &amp;&amp; yum makecache
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-配置国内kubernetes源-at-all-nodes" tabindex="-1"><a class="header-anchor" href="#_6-配置国内kubernetes源-at-all-nodes"><span>6.配置国内Kubernetes源, at all nodes</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>cat &lt;&lt;EOF &gt; /etc/yum.repos.d/kubernetes.repo
[kubernetes]
name=Kubernetes
baseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64/
enabled=1
gpgcheck=1
repo_gpgcheck=1
gpgkey=https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg https://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-配置docker源-at-all-nodes" tabindex="-1"><a class="header-anchor" href="#_7-配置docker源-at-all-nodes"><span>7. 配置docker源,at all nodes</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>wget https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo -O /etc/yum.repos.d/docker-ce.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_8-安装docker-at-all-nodes" tabindex="-1"><a class="header-anchor" href="#_8-安装docker-at-all-nodes"><span>8. 安装docker,at all nodes</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>yum install -y docker-ce-18.06.1.ce-3.el7

systemctl enable docker &amp;&amp; systemctl start docker

docker --version
# 输出 Docker version 18.06.1-ce, build e68fc7a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-安装kubeadmin-kubelet-kubectl-at-all-nodes" tabindex="-1"><a class="header-anchor" href="#_9-安装kubeadmin-kubelet-kubectl-at-all-nodes"><span>9. 安装kubeadmin,kubelet,kubectl, at all nodes</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>yum install -y kubelet kubeadm kubectl

systemctl enable kubelet

#Kubelet负责与其他节点通信，并进行本节点Pod和容器生命周期的管理。Kubeadm是Kubernetes的自动化部署工具，降低部署难度，提高效率。Kubectl是Kubernetes集群管理工具。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-部署master节点" tabindex="-1"><a class="header-anchor" href="#_10-部署master节点"><span>10. 部署master节点</span></a></h2><h3 id="_10-1-在master进行kubernetes集群初始化-at-master" tabindex="-1"><a class="header-anchor" href="#_10-1-在master进行kubernetes集群初始化-at-master"><span>10.1 在master进行Kubernetes集群初始化,at master</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>kubeadm init --kubernetes-version=1.15.1 \\
--apiserver-advertise-address=10.10.10.160 \\
--image-repository registry.aliyuncs.com/google_containers \\
--service-cidr=10.1.0.0/16 \\
--pod-network-cidr=10.244.0.0/16
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Your Kubernetes control-plane has initialized successfully!

To start using your cluster, you need to run the following as a regular user:

  mkdir -p $HOME/.kube
  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
  sudo chown $(id -u):$(id -g) $HOME/.kube/config

You should now deploy a pod network to the cluster.
Run &quot;kubectl apply -f [podnetwork].yaml&quot; with one of the options listed at:
  https://kubernetes.io/docs/concepts/cluster-administration/addons/

Then you can join any number of worker nodes by running the following on each as root:

kubeadm join 10.10.10.160:6443 --token epbwsx.fhf41i92jd3a3uwr \\
    --discovery-token-ca-cert-hash sha256:0520370b16b98b9b769e2cc65f663737fdfb3e729641e158cf9dbdcd798ca9fc 
[root@master ~]# 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-2-配置kubectl工具-at-master" tabindex="-1"><a class="header-anchor" href="#_10-2-配置kubectl工具-at-master"><span>10.2 配置kubectl工具, at master</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code> mkdir -p $HOME/.kube
  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
  sudo chown $(id -u):$(id -g) $HOME/.kube/config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-3-部署flannel网络-at-master" tabindex="-1"><a class="header-anchor" href="#_10-3-部署flannel网络-at-master"><span>10.3 部署flannel网络, at master</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>kubectl apply -f https://raw.githubusercontent.com/coreos/flannel/a70459be0084506e4ec919aa1c114638878db11b/Documentation/kube-flannel.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_11-部署node节点" tabindex="-1"><a class="header-anchor" href="#_11-部署node节点"><span>11. 部署node节点</span></a></h2><h3 id="_11-1-执行如下命令-使所有node节点加入kubernetes集群-at-node01-node02" tabindex="-1"><a class="header-anchor" href="#_11-1-执行如下命令-使所有node节点加入kubernetes集群-at-node01-node02"><span>11.1 执行如下命令，使所有node节点加入Kubernetes集群, at node01,node02</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>#此命令为集群初始化时（kubeadm init）返回结果中的内容。
kubeadm join 10.10.10.160:6443 --token epbwsx.fhf41i92jd3a3uwr \\
    --discovery-token-ca-cert-hash sha256:0520370b16b98b9b769e2cc65f663737fdfb3e729641e158cf9dbdcd798ca9fc 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_12-集群状态检查" tabindex="-1"><a class="header-anchor" href="#_12-集群状态检查"><span>12. 集群状态检查</span></a></h2><h3 id="_12-1-在master节点输入命令检查集群状态-返回如下结果则集群状态正常-at-master" tabindex="-1"><a class="header-anchor" href="#_12-1-在master节点输入命令检查集群状态-返回如下结果则集群状态正常-at-master"><span>12.1 在master节点输入命令检查集群状态，返回如下结果则集群状态正常, at master</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>kubectl get nodes

# 重点查看STATUS内容为Ready时，则说明集群状态正常
[root@master ~]# kubectl get nodes
NAME     STATUS   ROLES    AGE     VERSION
master   Ready    master   7m49s   v1.15.3
node01   Ready    &lt;none&gt;   106s    v1.15.3
node02   Ready    &lt;none&gt;   103s    v1.15.3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_12-2-创建pod以验证集群是否正常-at-master" tabindex="-1"><a class="header-anchor" href="#_12-2-创建pod以验证集群是否正常-at-master"><span>12.2 创建Pod以验证集群是否正常, at master</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>kubectl create deployment nginx --image=nginx:alpine
kubectl expose deployment nginx --port=80 --type=NodePort
kubectl get pod,svc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_13-部署dashboard" tabindex="-1"><a class="header-anchor" href="#_13-部署dashboard"><span>13. 部署Dashboard</span></a></h2><h3 id="_13-1-创建dashboard的yaml文件-at-master" tabindex="-1"><a class="header-anchor" href="#_13-1-创建dashboard的yaml文件-at-master"><span>13.1 创建Dashboard的yaml文件， at master</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>wget https://raw.githubusercontent.com/kubernetes/dashboard/v1.10.1/src/deploy/recommended/kubernetes-dashboard.yaml

sed -i &#39;s/k8s.gcr.io/loveone/g&#39; kubernetes-dashboard.yaml

sed -i &#39;/targetPort:/a\\ \\ \\ \\ \\ \\ nodePort: 30001\\n\\ \\ type: NodePort&#39; kubernetes-dashboard.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_13-2-部署dashboard-at-master" tabindex="-1"><a class="header-anchor" href="#_13-2-部署dashboard-at-master"><span>13.2 部署Dashboard， at master</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>kubectl create -f kubernetes-dashboard.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_13-3-检查服务状态" tabindex="-1"><a class="header-anchor" href="#_13-3-检查服务状态"><span>13.3 检查服务状态</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>kubectl get deployment kubernetes-dashboard -n kube-system

kubectl get pods -n kube-system -o wide

kubectl get services -n kube-system
# 若无 netstat ，运行 yum install -y net-tools 即可安装
netstat -ntlp|grep 30001
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_13-4-在firefox浏览器输入dashboard访问地址-https-10-10-10-160-30001-我们就来看看如何通过谷歌浏览器打开自己部署的kubernetes-ui界面" tabindex="-1"><a class="header-anchor" href="#_13-4-在firefox浏览器输入dashboard访问地址-https-10-10-10-160-30001-我们就来看看如何通过谷歌浏览器打开自己部署的kubernetes-ui界面"><span>13.4 在Firefox浏览器输入Dashboard访问地址：https://10.10.10.160:30001 , 我们就来看看如何通过谷歌浏览器打开自己部署的kubernetes UI界面</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>mkdir key &amp;&amp; cd key
#生成证书
openssl genrsa -out dashboard.key 2048 
openssl req -new -out dashboard.csr -key dashboard.key -subj &#39;/CN=192.168.246.200&#39;
openssl x509 -req -in dashboard.csr -signkey dashboard.key -out dashboard.crt 
#删除原有的证书secret
kubectl delete secret kubernetes-dashboard-certs -n kube-system
#创建新的证书secret
kubectl create secret generic kubernetes-dashboard-certs --from-file=dashboard.key --from-file=dashboard.crt -n kube-system
#查看pod
kubectl get pod -n kube-system
#重启pod
kubectl delete pod &lt;pod name&gt; -n kube-system
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_13-5-查看访问dashboard的认证令牌" tabindex="-1"><a class="header-anchor" href="#_13-5-查看访问dashboard的认证令牌"><span>13.5 查看访问Dashboard的认证令牌</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>kubectl create serviceaccount  dashboard-admin -n kube-system
kubectl create clusterrolebinding  dashboard-admin --clusterrole=cluster-admin --serviceaccount=kube-system:dashboard-admin
kubectl describe secrets -n kube-system $(kubectl -n kube-system get secret | awk &#39;/dashboard-admin/{print $1}&#39;)



[root@master ~]# kubectl describe secrets -n kube-system $(kubectl -n kube-system get secret | awk &#39;/dashboard-admin/{print $1}&#39;)
Name:         dashboard-admin-token-m7s9b
Namespace:    kube-system
Labels:       &lt;none&gt;
Annotations:  kubernetes.io/service-account.name: dashboard-admin
              kubernetes.io/service-account.uid: 6fbcc64e-8648-46d5-82e8-b09c8eba61d1

Type:  kubernetes.io/service-account-token

Data
====
ca.crt:     1025 bytes
namespace:  11 bytes
token:      eyJhbGciOiJSUzI1NiIsImtpZCI6IiJ9.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJrdWJlLXN5c3RlbSIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VjcmV0Lm5hbWUiOiJkYXNoYm9hcmQtYWRtaW4tdG9rZW4tbTdzOWIiLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC5uYW1lIjoiZGFzaGJvYXJkLWFkbWluIiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZXJ2aWNlLWFjY291bnQudWlkIjoiNmZiY2M2NGUtODY0OC00NmQ1LTgyZTgtYjA5YzhlYmE2MWQxIiwic3ViIjoic3lzdGVtOnNlcnZpY2VhY2NvdW50Omt1YmUtc3lzdGVtOmRhc2hib2FyZC1hZG1pbiJ9.PeiW0LhX12Sm6FFeVBrgo-__mdqtOj5toUZnlffeoj4s8-aSHMCH0--pn0Mv_z1_6KTYreWI_mVG65iCRw4tR6P2WwA62NB96GdkiCd4TzKDbX1pTBKAssLPd5h_m6owVOk92DPuKVbDloUJOzw-X0afU2UYGUrOSHXKXCrVj8oZYxwRBztScekP8nmZjB0vxijEpl9PzGTx9-7yPozr8MhE2T0THJl215ANJUv63ykFduvRKTuZyYPugvFcCIfUAxJg8JdAIsp5PYQFNbrE4vRDDnPe4nEBZ1EHwT7BXprhrqTHkY2T_NiL-ZQxV5ZNbCt6rlcBNLKKaNUlVUijSg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_13-6-使用输出的令牌-token-登录dashboard" tabindex="-1"><a class="header-anchor" href="#_13-6-使用输出的令牌-token-登录dashboard"><span>13.6 使用输出的令牌（token）登录Dashboard</span></a></h3><h2 id="_14-参考部署地址" tabindex="-1"><a class="header-anchor" href="#_14-参考部署地址"><span>14. 参考部署地址</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>https://www.cnblogs.com/chenjo/p/11258889.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_15-usage" tabindex="-1"><a class="header-anchor" href="#_15-usage"><span>15. Usage</span></a></h2><h3 id="_15-1-创建多个容器副本" tabindex="-1"><a class="header-anchor" href="#_15-1-创建多个容器副本"><span>15.1 创建多个容器副本</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>kubectl scale deployment nginx --replicas=3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_16-account-info" tabindex="-1"><a class="header-anchor" href="#_16-account-info"><span>16. Account Info</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IP: 10.10.10.160/102/103/104 
User: root
Password: Passw0rd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_16-q-a" tabindex="-1"><a class="header-anchor" href="#_16-q-a"><span>16. Q&amp;A</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>k8s集群slave节点使用kubectl命令时The connection to the server localhost:8080 was refused - did you specify the right host or port?

mkdir -p /root/.kube
 
cp -i /etc/kubernetes/admin.kubeconfig /root/.kube/config
 
kubectl get nodes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_17-demo" tabindex="-1"><a class="header-anchor" href="#_17-demo"><span>17. Demo</span></a></h2><div class="language-dotnetcli line-numbers-mode" data-ext="dotnetcli" data-title="dotnetcli"><pre class="language-dotnetcli"><code>[root@master ~]# kubeadm init --kubernetes-version=1.15.1 --apiserver-advertise-address=10.10.10.160 --image-repository registry.aliyuncs.com/google_containers --service-cidr=10.1.0.0/16 --pod-network-cidr=10.244.0.0/16
[init] Using Kubernetes version: v1.15.1
[preflight] Running pre-flight checks
[preflight] Pulling images required for setting up a Kubernetes cluster
[preflight] This might take a minute or two, depending on the speed of your internet connection
[preflight] You can also perform this action in beforehand using &#39;kubeadm config images pull&#39;
[kubelet-start] Writing kubelet environment file with flags to file &quot;/var/lib/kubelet/kubeadm-flags.env&quot;
[kubelet-start] Writing kubelet configuration to file &quot;/var/lib/kubelet/config.yaml&quot;
[kubelet-start] Activating the kubelet service
[certs] Using certificateDir folder &quot;/etc/kubernetes/pki&quot;
[certs] Generating &quot;ca&quot; certificate and key
[certs] Generating &quot;apiserver&quot; certificate and key
[certs] apiserver serving cert is signed for DNS names [master kubernetes kubernetes.default kubernetes.default.svc kubernetes.default.svc.cluster.local] and IPs [10.1.0.1 10.10.10.160]
[certs] Generating &quot;apiserver-kubelet-client&quot; certificate and key
[certs] Generating &quot;front-proxy-ca&quot; certificate and key
[certs] Generating &quot;front-proxy-client&quot; certificate and key
[certs] Generating &quot;etcd/ca&quot; certificate and key
[certs] Generating &quot;apiserver-etcd-client&quot; certificate and key
[certs] Generating &quot;etcd/server&quot; certificate and key
[certs] etcd/server serving cert is signed for DNS names [master localhost] and IPs [10.10.10.160 127.0.0.1 ::1]
[certs] Generating &quot;etcd/peer&quot; certificate and key
[certs] etcd/peer serving cert is signed for DNS names [master localhost] and IPs [10.10.10.160 127.0.0.1 ::1]
[certs] Generating &quot;etcd/healthcheck-client&quot; certificate and key
[certs] Generating &quot;sa&quot; key and public key
[kubeconfig] Using kubeconfig folder &quot;/etc/kubernetes&quot;
[kubeconfig] Writing &quot;admin.conf&quot; kubeconfig file
[kubeconfig] Writing &quot;kubelet.conf&quot; kubeconfig file
[kubeconfig] Writing &quot;controller-manager.conf&quot; kubeconfig file
[kubeconfig] Writing &quot;scheduler.conf&quot; kubeconfig file
[control-plane] Using manifest folder &quot;/etc/kubernetes/manifests&quot;
[control-plane] Creating static Pod manifest for &quot;kube-apiserver&quot;
[control-plane] Creating static Pod manifest for &quot;kube-controller-manager&quot;
[control-plane] Creating static Pod manifest for &quot;kube-scheduler&quot;
[etcd] Creating static Pod manifest for local etcd in &quot;/etc/kubernetes/manifests&quot;
[wait-control-plane] Waiting for the kubelet to boot up the control plane as static Pods from directory &quot;/etc/kubernetes/manifests&quot;. This can take up to 4m0s
[kubelet-check] Initial timeout of 40s passed.
[apiclient] All control plane components are healthy after 41.003103 seconds
[upload-config] Storing the configuration used in ConfigMap &quot;kubeadm-config&quot; in the &quot;kube-system&quot; Namespace
[kubelet] Creating a ConfigMap &quot;kubelet-config-1.15&quot; in namespace kube-system with the configuration for the kubelets in the cluster
[upload-certs] Skipping phase. Please see --upload-certs
[mark-control-plane] Marking the node master as control-plane by adding the label &quot;node-role.kubernetes.io/master=&#39;&#39;&quot;
[mark-control-plane] Marking the node master as control-plane by adding the taints [node-role.kubernetes.io/master:NoSchedule]
[bootstrap-token] Using token: tziy0e.lkhr7y3coxqc7fli
[bootstrap-token] Configuring bootstrap tokens, cluster-info ConfigMap, RBAC Roles
[bootstrap-token] configured RBAC rules to allow Node Bootstrap tokens to post CSRs in order for nodes to get long term certificate credentials
[bootstrap-token] configured RBAC rules to allow the csrapprover controller automatically approve CSRs from a Node Bootstrap Token
[bootstrap-token] configured RBAC rules to allow certificate rotation for all node client certificates in the cluster
[bootstrap-token] Creating the &quot;cluster-info&quot; ConfigMap in the &quot;kube-public&quot; namespace
[addons] Applied essential addon: CoreDNS
[addons] Applied essential addon: kube-proxy

Your Kubernetes control-plane has initialized successfully!

To start using your cluster, you need to run the following as a regular user:

  mkdir -p $HOME/.kube
  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
  sudo chown $(id -u):$(id -g) $HOME/.kube/config

You should now deploy a pod network to the cluster.
Run &quot;kubectl apply -f [podnetwork].yaml&quot; with one of the options listed at:
  https://kubernetes.io/docs/concepts/cluster-administration/addons/

Then you can join any number of worker nodes by running the following on each as root:

kubeadm join 10.10.10.160:6443 --token tziy0e.lkhr7y3coxqc7fli \\
    --discovery-token-ca-cert-hash sha256:f83d3ed1e3c6d9a8f87adf3e696426a46618f6561a50defdc78c790010ed3a94 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_18-kubernetes-port" tabindex="-1"><a class="header-anchor" href="#_18-kubernetes-port"><span>18. Kubernetes Port</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master k8s<span class="token punctuation">]</span><span class="token comment"># cat nginx.yml </span>
apiVersion: v1
kind: Service
metadata:
  name: nginxnew
spec:
  selector:
    app: nginx
  ports:
    - protocol: TCP
      port: <span class="token number">80</span>
      targetPort: <span class="token number">80</span>
      nodePort: <span class="token number">30001</span>
  type: NodePort
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,59),l=[t];function d(r,c){return n(),a("div",null,l)}const v=e(i,[["render",d],["__file","install-k8s-v1.15.html.vue"]]),b=JSON.parse('{"path":"/guide/cloudnative/kubernetes/installation/version/install-k8s-v1.15.html","title":"安装k8s-v1.15","lang":"zh-CN","frontmatter":{"title":"安装k8s-v1.15","description":"1.Set hostname , at relative node 2. Set hosts, at all nodes 3. Close firewalld, selinux, swap, at all nodes 4.配置内核参数，将桥接的IPv4流量传递到iptables的链, at all nodes 5.配置国内yum源, at all no...","head":[["meta",{"property":"og:url","content":"https://github.com/abelit/abelit-datapeacock.git/guide/cloudnative/kubernetes/installation/version/install-k8s-v1.15.html"}],["meta",{"property":"og:site_name","content":"数之雀"}],["meta",{"property":"og:title","content":"安装k8s-v1.15"}],["meta",{"property":"og:description","content":"1.Set hostname , at relative node 2. Set hosts, at all nodes 3. Close firewalld, selinux, swap, at all nodes 4.配置内核参数，将桥接的IPv4流量传递到iptables的链, at all nodes 5.配置国内yum源, at all no..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-11T14:06:18.000Z"}],["meta",{"property":"article:author","content":"Abelit"}],["meta",{"property":"article:modified_time","content":"2024-05-11T14:06:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"安装k8s-v1.15\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-11T14:06:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Abelit\\",\\"url\\":\\"https://github.com/abelit\\"}]}"]]},"headers":[{"level":2,"title":"1.Set hostname , at relative node","slug":"_1-set-hostname-at-relative-node","link":"#_1-set-hostname-at-relative-node","children":[]},{"level":2,"title":"2. Set hosts, at all nodes","slug":"_2-set-hosts-at-all-nodes","link":"#_2-set-hosts-at-all-nodes","children":[]},{"level":2,"title":"3. Close firewalld, selinux, swap, at all nodes","slug":"_3-close-firewalld-selinux-swap-at-all-nodes","link":"#_3-close-firewalld-selinux-swap-at-all-nodes","children":[]},{"level":2,"title":"4.配置内核参数，将桥接的IPv4流量传递到iptables的链, at all nodes","slug":"_4-配置内核参数-将桥接的ipv4流量传递到iptables的链-at-all-nodes","link":"#_4-配置内核参数-将桥接的ipv4流量传递到iptables的链-at-all-nodes","children":[]},{"level":2,"title":"5.配置国内yum源, at all nodes","slug":"_5-配置国内yum源-at-all-nodes","link":"#_5-配置国内yum源-at-all-nodes","children":[]},{"level":2,"title":"6.配置国内Kubernetes源, at all nodes","slug":"_6-配置国内kubernetes源-at-all-nodes","link":"#_6-配置国内kubernetes源-at-all-nodes","children":[]},{"level":2,"title":"7. 配置docker源,at all nodes","slug":"_7-配置docker源-at-all-nodes","link":"#_7-配置docker源-at-all-nodes","children":[]},{"level":2,"title":"8. 安装docker,at all nodes","slug":"_8-安装docker-at-all-nodes","link":"#_8-安装docker-at-all-nodes","children":[]},{"level":2,"title":"9. 安装kubeadmin,kubelet,kubectl, at all nodes","slug":"_9-安装kubeadmin-kubelet-kubectl-at-all-nodes","link":"#_9-安装kubeadmin-kubelet-kubectl-at-all-nodes","children":[]},{"level":2,"title":"10. 部署master节点","slug":"_10-部署master节点","link":"#_10-部署master节点","children":[{"level":3,"title":"10.1 在master进行Kubernetes集群初始化,at master","slug":"_10-1-在master进行kubernetes集群初始化-at-master","link":"#_10-1-在master进行kubernetes集群初始化-at-master","children":[]},{"level":3,"title":"10.2 配置kubectl工具, at master","slug":"_10-2-配置kubectl工具-at-master","link":"#_10-2-配置kubectl工具-at-master","children":[]},{"level":3,"title":"10.3 部署flannel网络, at master","slug":"_10-3-部署flannel网络-at-master","link":"#_10-3-部署flannel网络-at-master","children":[]}]},{"level":2,"title":"11. 部署node节点","slug":"_11-部署node节点","link":"#_11-部署node节点","children":[{"level":3,"title":"11.1 执行如下命令，使所有node节点加入Kubernetes集群, at node01,node02","slug":"_11-1-执行如下命令-使所有node节点加入kubernetes集群-at-node01-node02","link":"#_11-1-执行如下命令-使所有node节点加入kubernetes集群-at-node01-node02","children":[]}]},{"level":2,"title":"12. 集群状态检查","slug":"_12-集群状态检查","link":"#_12-集群状态检查","children":[{"level":3,"title":"12.1 在master节点输入命令检查集群状态，返回如下结果则集群状态正常, at master","slug":"_12-1-在master节点输入命令检查集群状态-返回如下结果则集群状态正常-at-master","link":"#_12-1-在master节点输入命令检查集群状态-返回如下结果则集群状态正常-at-master","children":[]},{"level":3,"title":"12.2 创建Pod以验证集群是否正常, at master","slug":"_12-2-创建pod以验证集群是否正常-at-master","link":"#_12-2-创建pod以验证集群是否正常-at-master","children":[]}]},{"level":2,"title":"13. 部署Dashboard","slug":"_13-部署dashboard","link":"#_13-部署dashboard","children":[{"level":3,"title":"13.1 创建Dashboard的yaml文件， at master","slug":"_13-1-创建dashboard的yaml文件-at-master","link":"#_13-1-创建dashboard的yaml文件-at-master","children":[]},{"level":3,"title":"13.2 部署Dashboard， at master","slug":"_13-2-部署dashboard-at-master","link":"#_13-2-部署dashboard-at-master","children":[]},{"level":3,"title":"13.3 检查服务状态","slug":"_13-3-检查服务状态","link":"#_13-3-检查服务状态","children":[]},{"level":3,"title":"13.4 在Firefox浏览器输入Dashboard访问地址：https://10.10.10.160:30001 , 我们就来看看如何通过谷歌浏览器打开自己部署的kubernetes UI界面","slug":"_13-4-在firefox浏览器输入dashboard访问地址-https-10-10-10-160-30001-我们就来看看如何通过谷歌浏览器打开自己部署的kubernetes-ui界面","link":"#_13-4-在firefox浏览器输入dashboard访问地址-https-10-10-10-160-30001-我们就来看看如何通过谷歌浏览器打开自己部署的kubernetes-ui界面","children":[]},{"level":3,"title":"13.5 查看访问Dashboard的认证令牌","slug":"_13-5-查看访问dashboard的认证令牌","link":"#_13-5-查看访问dashboard的认证令牌","children":[]},{"level":3,"title":"13.6 使用输出的令牌（token）登录Dashboard","slug":"_13-6-使用输出的令牌-token-登录dashboard","link":"#_13-6-使用输出的令牌-token-登录dashboard","children":[]}]},{"level":2,"title":"14. 参考部署地址","slug":"_14-参考部署地址","link":"#_14-参考部署地址","children":[]},{"level":2,"title":"15. Usage","slug":"_15-usage","link":"#_15-usage","children":[{"level":3,"title":"15.1 创建多个容器副本","slug":"_15-1-创建多个容器副本","link":"#_15-1-创建多个容器副本","children":[]}]},{"level":2,"title":"16. Account Info","slug":"_16-account-info","link":"#_16-account-info","children":[]},{"level":2,"title":"16. Q&A","slug":"_16-q-a","link":"#_16-q-a","children":[]},{"level":2,"title":"17. Demo","slug":"_17-demo","link":"#_17-demo","children":[]},{"level":2,"title":"18. Kubernetes Port","slug":"_18-kubernetes-port","link":"#_18-kubernetes-port","children":[]}],"git":{"createdTime":1715436378000,"updatedTime":1715436378000,"contributors":[{"name":"ableit","email":"ychenid@live.com","commits":1}]},"readingTime":{"minutes":5.79,"words":1737},"filePathRelative":"guide/cloudnative/kubernetes/installation/version/install-k8s-v1.15.md","localizedDate":"2024年5月11日","autoDesc":true,"excerpt":"<h2>1.Set hostname , at relative node</h2>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>vim /etc/hostname\\n\\nmaster\\n\\nvim /etc/hostname\\n\\nnode01\\n\\nvim /etc/hostname\\n\\nnode02\\n\\n</code></pre></div><h2>2. Set hosts, at all nodes</h2>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>cat &lt;&lt;EOF &gt;&gt;/etc/hosts\\n10.10.10.160 master\\n10.10.10.102 node01\\n10.10.10.103 node02\\nEOF\\n</code></pre></div>"}');export{v as comp,b as data};
