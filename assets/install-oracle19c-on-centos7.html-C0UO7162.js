import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r,o as p,c as b,b as i,w as a,a as s,f as c,d as n}from"./app-DR5J2daJ.js";const u={},k=s("h2",{id:"自动安装脚本",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#自动安装脚本"},[s("span",null,"自动安装脚本")])],-1),d=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token shebang important"},"#!/bin/bash"),n(`
`),s("span",{class:"token comment"},"############ Author begin ##################################################"),n(`
`),s("span",{class:"token comment"},"## Author: Ableit"),n(`
`),s("span",{class:"token comment"},"## Date: 2022-07-20"),n(`
`),s("span",{class:"token comment"},"## Desc: Install Oracle Database"),n(`
`),s("span",{class:"token comment"},"## Env: RHEL/CentOS 7.x, Oracle Database RAC 11g +"),n(`
`),s("span",{class:"token comment"},"############ Author end ####################################################"),n(`

`),s("span",{class:"token comment"},"############ Env & Virables begin ##########################################"),n(`
`),s("span",{class:"token comment"},"####### begin custom settings #######"),n(`
`),s("span",{class:"token comment"},"# package -------------"),n(`
`),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_DIR"),s("span",{class:"token operator"},"="),n(`/opt/package
`),s("span",{class:"token assign-left variable"},"V_RAC_OS_DBA_DIR"),s("span",{class:"token operator"},"="),n(`/opt/dba

`),s("span",{class:"token comment"},"# os ---------------"),n(`
`),s("span",{class:"token assign-left variable"},"V_RAC_OS_ORACLE_USER_PASSWORD"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"TestPwd2023Com"'),n(`
`),s("span",{class:"token assign-left variable"},"V_RAC_OS_GRID_USER_PASSWORD"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"TestPwd2023Com"'),n(`
`),s("span",{class:"token assign-left variable"},"V_RAC_OS_HOSTNAME"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"testdb1 testdb2"'),n(`
`),s("span",{class:"token assign-left variable"},"V_RAC_OS_ROOT_PASSWORD"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"root@123 root@123"'),n(`
`),s("span",{class:"token assign-left variable"},"V_RAC_OS_PUBLIC_NETWORKINTERFACE"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"eth0 eth0"'),n(`
`),s("span",{class:"token assign-left variable"},"V_RAC_OS_PRIVATE_NETWORKINTERFACE"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"eth1 eth1"'),n(`
`),s("span",{class:"token assign-left variable"},"V_RAC_OS_PUBLIC_SUBNET"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"10.10.12.0"'),n(`
`),s("span",{class:"token assign-left variable"},"V_RAC_OS_PRIVATE_SUBNET"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"10.10.100.0"'),n(`
`),s("span",{class:"token assign-left variable"},"V_RAC_OS_PUBLIC_IP"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"10.10.12.212 10.10.12.213"'),n(`
`),s("span",{class:"token assign-left variable"},"V_RAC_OS_PUBLIC_VIP"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"10.10.12.222 10.10.12.223"'),n(`
`),s("span",{class:"token assign-left variable"},"V_RAC_OS_PRIVATE_IP"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"10.10.100.212 10.10.100.213"'),n(`
`),s("span",{class:"token assign-left variable"},"V_RAC_OS_SCAN_IP"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"10.10.12.200"'),n(`

`),s("span",{class:"token comment"},"# oracle ------------"),n(`
`),s("span",{class:"token assign-left variable"},"V_RAC_ORACLE_DATABASE_VERSION"),s("span",{class:"token operator"},"="),s("span",{class:"token number"},"21.3"),n(`.0.0
`),s("span",{class:"token assign-left variable"},"V_RAC_ORACLE_UNQNAME"),s("span",{class:"token operator"},"="),n(`testdb
`),s("span",{class:"token assign-left variable"},"V_RAC_ORACLE_PDB_NAME"),s("span",{class:"token operator"},"="),n(`abelitpdb
`),s("span",{class:"token assign-left variable"},"V_RAC_ORACLE_CHARSET"),s("span",{class:"token operator"},"="),n(`AL32UTF8
`),s("span",{class:"token assign-left variable"},"V_RAC_ORACLE_SYS_PASSWORD"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"TestPwd2023Com"'),n(`
`),s("span",{class:"token assign-left variable"},"V_RAC_ORACLE_SYSTEM_PASSWORD"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"TestPwd2023Com"'),n(`
`),s("span",{class:"token assign-left variable"},"V_RAC_ORACLE_PDB_ADMIN_PASSWORD"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"TestPwd2023Com"'),n(`
`),s("span",{class:"token assign-left variable"},"V_RAC_ORACLE_APP_ROOTDIR"),s("span",{class:"token operator"},"="),n(`/u01

`),s("span",{class:"token comment"},"# grid --------------"),n(`
`),s("span",{class:"token assign-left variable"},"V_RAC_GRID_ORACLE_DATABASE_VERSION"),s("span",{class:"token operator"},"="),s("span",{class:"token number"},"21.3"),n(`.0.0
`),s("span",{class:"token assign-left variable"},"V_RAC_GRID_APP_ROOTDIR"),s("span",{class:"token operator"},"="),n(`/u01

`),s("span",{class:"token comment"},"# cluster --------------"),n(`
`),s("span",{class:"token assign-left variable"},"V_RAC_INSTANCE_ORACLE_SID"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"testdb1 testdb2"'),n(`
`),s("span",{class:"token assign-left variable"},"V_RAC_INSTANCE_GRID_ORACLE_SID"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"+ASM1 +ASM2"'),n(`
`),s("span",{class:"token assign-left variable"},"V_RAC_ASM_SYSASM_PASSWORD"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"TestPwd2023Com"'),n(`
`),s("span",{class:"token assign-left variable"},"V_RAC_ASM_MONITOR_PASSWORD"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"TestPwd2023Com"'),n(`
`),s("span",{class:"token assign-left variable"},"V_RAC_ORACLE_MONITOR_PASSWORD"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"TestPwd2023Com"'),n(`
`),s("span",{class:"token assign-left variable"},"V_RAC_ASM_DATA_DISKS"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"/dev/sdd"'),n(`
`),s("span",{class:"token assign-left variable"},"V_RAC_ASM_FRA_DISKS"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"/dev/sde"'),n(`
`),s("span",{class:"token assign-left variable"},"V_RAC_ASM_OCR_DISKS"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"/dev/sdc /dev/sdf /dev/sdg"'),n(`
`),s("span",{class:"token comment"},"####### end custom settings #######"),n(`

`),s("span",{class:"token comment"},"####### begin auto & advanced settings #######"),n(`
`),s("span",{class:"token comment"},"# os ------------"),n(`
`),s("span",{class:"token assign-left variable"},"V_RAC_OS_MEMORY"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"free"),n(),s("span",{class:"token parameter variable"},"-b"),n(),s("span",{class:"token operator"},"|"),n(),s("span",{class:"token function"},"grep"),n(" Mem: "),s("span",{class:"token operator"},"|"),n(),s("span",{class:"token function"},"awk"),n(" -F"),s("span",{class:"token string"},"' '"),n(),s("span",{class:"token string"},"'{print $2}'"),s("span",{class:"token variable"},")")]),n(`
`),s("span",{class:"token assign-left variable"},"V_RAC_OS_SHMMAX"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$(("),n("$V_RAC_OS_MEMORY "),s("span",{class:"token operator"},"*"),n(),s("span",{class:"token number"},"2"),n(),s("span",{class:"token operator"},"/"),n(),s("span",{class:"token number"},"3"),s("span",{class:"token variable"},"))")]),n(`
`),s("span",{class:"token assign-left variable"},"V_RAC_OS_SHMALL"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$(("),n("$V_RAC_OS_SHMMAX "),s("span",{class:"token operator"},"/"),n(),s("span",{class:"token number"},"1024"),s("span",{class:"token variable"},"))")]),n(`
`),s("span",{class:"token assign-left variable"},"V_RAC_OS_VERSION_ID"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"cat"),n(" /etc/os-release "),s("span",{class:"token operator"},"|"),n(),s("span",{class:"token function"},"grep"),n(),s("span",{class:"token string"},"'^VERSION_ID='"),n(),s("span",{class:"token operator"},"|"),n(),s("span",{class:"token function"},"awk"),n(" -F"),s("span",{class:"token string"},"'='"),n(),s("span",{class:"token string"},"'{print $2}'"),s("span",{class:"token variable"},")")]),n(`

`),s("span",{class:"token assign-left variable"},"V_RAC_OS_ORACLE_USER"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"oracle"'),n(`
`),s("span",{class:"token assign-left variable"},"V_RAC_OS_GRID_USER"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"grid"'),n(`

`),s("span",{class:"token comment"},"# oracle ---------------"),n(`
`),s("span",{class:"token assign-left variable"},"V_RAC_TMP"),s("span",{class:"token operator"},"="),n(`/tmp
`),s("span",{class:"token assign-left variable"},"V_RAC_ORACLE_BASE"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$V_RAC_ORACLE_APP_ROOTDIR"),n(`/app/oracle
`),s("span",{class:"token assign-left variable"},"V_RAC_ORACLE_HOME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$V_RAC_ORACLE_BASE"),n("/product/"),s("span",{class:"token variable"},"$V_RAC_ORACLE_DATABASE_VERSION"),n(`/db_1
`),s("span",{class:"token assign-left variable"},"V_RAC_ORACLE_ORA_INVENTORY"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$V_RAC_ORACLE_APP_ROOTDIR"),n(`/app/oraInventory
`),s("span",{class:"token assign-left variable"},"V_RAC_ORACLE_PRIMARY_VERSION"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token builtin class-name"},"echo"),n(" $V_RAC_ORACLE_DATABASE_VERSION "),s("span",{class:"token operator"},"|"),n(),s("span",{class:"token function"},"awk"),n(" -F"),s("span",{class:"token string"},"'.'"),n(),s("span",{class:"token string"},"'{print $1}'"),s("span",{class:"token variable"},")")]),n(`
`),s("span",{class:"token assign-left variable"},"V_RAC_ORACLE_TOTAL_MEMORY"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$(("),n("$V_RAC_OS_SHMMAX "),s("span",{class:"token operator"},"/"),n(),s("span",{class:"token number"},"1024"),n(),s("span",{class:"token operator"},"/"),n(),s("span",{class:"token number"},"1024"),s("span",{class:"token variable"},"))")]),n(`
`),s("span",{class:"token assign-left variable"},"V_RAC_ORACLE_DATA_DIR"),s("span",{class:"token operator"},"="),n(`DATA
`),s("span",{class:"token assign-left variable"},"V_RAC_ORACLE_RECOVERY_AREA_DIR"),s("span",{class:"token operator"},"="),n(`FRA
`),s("span",{class:"token assign-left variable"},"V_RAC_ORACLE_ARCH_DIR"),s("span",{class:"token operator"},"="),n(`ARCH
`),s("span",{class:"token comment"},"# 64M"),n(`
`),s("span",{class:"token assign-left variable"},"V_RAC_ORACLE_REDOLOG_SIZE"),s("span",{class:"token operator"},"="),s("span",{class:"token number"},"64"),n(`
`),s("span",{class:"token comment"},"# 64M*1024=64G"),n(`
`),s("span",{class:"token assign-left variable"},"V_RAC_ORACLE_RECOVERY_AREA_SIZE"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$(("),s("span",{class:"token number"},"64"),n(),s("span",{class:"token operator"},"*"),n(),s("span",{class:"token number"},"1024"),s("span",{class:"token variable"},"))")]),n(`

`),s("span",{class:"token comment"},"# grid --------------"),n(`
`),s("span",{class:"token assign-left variable"},"V_RAC_GRID_ORACLE_BASE"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$V_RAC_GRID_APP_ROOTDIR"),n(`/app/grid
`),s("span",{class:"token assign-left variable"},"V_RAC_GRID_ORACLE_HOME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$V_RAC_GRID_APP_ROOTDIR"),n("/app/"),s("span",{class:"token variable"},"$V_RAC_GRID_ORACLE_DATABASE_VERSION"),n(`/grid
`),s("span",{class:"token assign-left variable"},"V_RAC_GRID_ORACLE_PRIMARY_VERSION"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token builtin class-name"},"echo"),n(" $V_RAC_GRID_ORACLE_DATABASE_VERSION "),s("span",{class:"token operator"},"|"),n(),s("span",{class:"token function"},"awk"),n(" -F"),s("span",{class:"token string"},"'.'"),n(),s("span",{class:"token string"},"'{print $1}'"),s("span",{class:"token variable"},")")]),n(`

`),s("span",{class:"token comment"},"# cluster -----------"),n(`
`),s("span",{class:"token assign-left variable"},"V_RAC_CRS_SCANPORT"),s("span",{class:"token operator"},"="),s("span",{class:"token number"},"1521"),n(`
`),s("span",{class:"token assign-left variable"},"V_RAC_CRS_OCRVOTING_REDUNDANCY"),s("span",{class:"token operator"},"="),n(`NORMAL
`),s("span",{class:"token assign-left variable"},"V_RAC_CRS_CLUSTER_NAME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"${V_RAC_ORACLE_UNQNAME}"),n(`-cluster
`),s("span",{class:"token assign-left variable"},"V_RAC_CRS_SCANNAME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"${V_RAC_ORACLE_UNQNAME}"),n(`-scan
`),s("span",{class:"token assign-left variable"},"V_RAC_ASM_DATA_DISKGROUP_NAME"),s("span",{class:"token operator"},"="),n(`DATA
`),s("span",{class:"token assign-left variable"},"V_RAC_ASM_DATA_REDUNDANCY"),s("span",{class:"token operator"},"="),n(`EXTERNAL
`),s("span",{class:"token assign-left variable"},"V_RAC_ASM_DATA_ASMDISK_PREFFIX"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"ASM_DISK_DATA"'),n(`
`),s("span",{class:"token assign-left variable"},"V_RAC_ASM_FRA_DISKGROUP_NAME"),s("span",{class:"token operator"},"="),n(`FRA
`),s("span",{class:"token assign-left variable"},"V_RAC_ASM_FRA_REDUNDANCY"),s("span",{class:"token operator"},"="),n(`EXTERNAL
`),s("span",{class:"token assign-left variable"},"V_RAC_ASM_FRA_ASMDISK_PREFFIX"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"ASM_DISK_FRA"'),n(`
`),s("span",{class:"token assign-left variable"},"V_RAC_ASM_DISKGROUP_NAME"),s("span",{class:"token operator"},"="),n(`OCR
`),s("span",{class:"token assign-left variable"},"V_RAC_ASM_DISKGROUP_REDUNDANCY"),s("span",{class:"token operator"},"="),n(`NORMAL
`),s("span",{class:"token assign-left variable"},"V_RAC_ASM_OCR_ASMDISK_PREFFIX"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"ASM_DISK_OCR"'),n(`

`),s("span",{class:"token comment"},"# V_RAC_CRS_CLUSTERNODES=testdb1:testdb1-vip,testdb2:testdb2-vip"),n(`
`),s("span",{class:"token comment"},"# eg. testdb1:testdb1-vip,testdb2:testdb2-vip"),n(`
`),s("span",{class:"token assign-left variable"},"V_RAC_CRS_CLUSTERNODES"),s("span",{class:"token operator"},"="),n(`

`),s("span",{class:"token keyword"},"if"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},"$V_RAC_ORACLE_PRIMARY_VERSION"),n(),s("span",{class:"token parameter variable"},"-eq"),n(),s("span",{class:"token number"},"11"),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"then"),n(`
    `),s("span",{class:"token keyword"},"for"),n(),s("span",{class:"token for-or-select variable"},"item"),n(),s("span",{class:"token keyword"},"in"),n(),s("span",{class:"token variable"},"$V_RAC_OS_HOSTNAME"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"do"),n(`
        `),s("span",{class:"token keyword"},"if"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$V_RAC_CRS_CLUSTERNODES"),n('"')]),n(),s("span",{class:"token operator"},"!="),n(),s("span",{class:"token string"},'""'),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"then"),n(`
            `),s("span",{class:"token assign-left variable"},"V_RAC_CRS_CLUSTERNODES"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$V_RAC_CRS_CLUSTERNODES"),n(","),s("span",{class:"token variable"},"$item"),n(":"),s("span",{class:"token variable"},"$item"),n('-vip"')]),n(`
        `),s("span",{class:"token keyword"},"else"),n(`
            `),s("span",{class:"token assign-left variable"},"V_RAC_CRS_CLUSTERNODES"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$item"),n(":"),s("span",{class:"token variable"},"$item"),n('-vip"')]),n(`
        `),s("span",{class:"token keyword"},"fi"),n(`
    `),s("span",{class:"token keyword"},"done"),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_OS_PUBLIC_NETWORKINTERFACE_ARR"),s("span",{class:"token operator"},"="),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$V_RAC_OS_PUBLIC_NETWORKINTERFACE"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_OS_PRIVATE_NETWORKINTERFACE_ARR"),s("span",{class:"token operator"},"="),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$V_RAC_OS_PRIVATE_NETWORKINTERFACE"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token comment"},"# V_RAC_CRS_NETWORKINTERFACES=eth0:10.10.12.0:1,eth1:10.10.100.0:2"),n(`
    `),s("span",{class:"token comment"},"# eg. eth0:10.10.12.0:1,eth1:10.10.100.0:2"),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_CRS_NETWORKINTERFACES"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},[n("${V_RAC_OS_PUBLIC_NETWORKINTERFACE_ARR"),s("span",{class:"token punctuation"},"["),n("0"),s("span",{class:"token punctuation"},"]"),n("}")]),n(":"),s("span",{class:"token variable"},"$V_RAC_OS_PUBLIC_SUBNET"),n(":1,"),s("span",{class:"token variable"},[n("${V_RAC_OS_PRIVATE_NETWORKINTERFACE_ARR"),s("span",{class:"token punctuation"},"["),n("0"),s("span",{class:"token punctuation"},"]"),n("}")]),n(":"),s("span",{class:"token variable"},"$V_RAC_OS_PRIVATE_SUBNET"),n(':2"')]),n(`
    `),s("span",{class:"token comment"},"# V_RAC_INSTANCE_CLUSTER_NODES=testdb1,testdb2"),n(`
    `),s("span",{class:"token comment"},"# eg. testdb1,testdb2"),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_INSTANCE_CLUSTER_NODES"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[n("${V_RAC_INSTANCE_ORACLE_SID"),s("span",{class:"token operator"},"/"),s("span",{class:"token operator"},"/"),n(),s("span",{class:"token operator"},"/"),s("span",{class:"token operator"},","),n("}")]),n(`

`),s("span",{class:"token keyword"},"elif"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},"$V_RAC_ORACLE_PRIMARY_VERSION"),n(),s("span",{class:"token parameter variable"},"-eq"),n(),s("span",{class:"token number"},"12"),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"then"),n(`
    `),s("span",{class:"token keyword"},"for"),n(),s("span",{class:"token for-or-select variable"},"item"),n(),s("span",{class:"token keyword"},"in"),n(),s("span",{class:"token variable"},"$V_RAC_OS_HOSTNAME"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"do"),n(`
        `),s("span",{class:"token keyword"},"if"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$V_RAC_CRS_CLUSTERNODES"),n('"')]),n(),s("span",{class:"token operator"},"!="),n(),s("span",{class:"token string"},'""'),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"then"),n(`
            `),s("span",{class:"token assign-left variable"},"V_RAC_CRS_CLUSTERNODES"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$V_RAC_CRS_CLUSTERNODES"),n(","),s("span",{class:"token variable"},"$item"),n(":"),s("span",{class:"token variable"},"$item"),n('-vip:HUB"')]),n(`
        `),s("span",{class:"token keyword"},"else"),n(`
            `),s("span",{class:"token assign-left variable"},"V_RAC_CRS_CLUSTERNODES"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$item"),n(":"),s("span",{class:"token variable"},"$item"),n('-vip:HUB"')]),n(`
        `),s("span",{class:"token keyword"},"fi"),n(`
    `),s("span",{class:"token keyword"},"done"),n(`

    `),s("span",{class:"token assign-left variable"},"V_RAC_OS_PUBLIC_NETWORKINTERFACE_ARR"),s("span",{class:"token operator"},"="),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$V_RAC_OS_PUBLIC_NETWORKINTERFACE"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_OS_PRIVATE_NETWORKINTERFACE_ARR"),s("span",{class:"token operator"},"="),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$V_RAC_OS_PRIVATE_NETWORKINTERFACE"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token comment"},"# V_RAC_CRS_NETWORKINTERFACES=eth0:10.10.12.0:1,eth1:10.10.100.0:2"),n(`
    `),s("span",{class:"token comment"},"# eg. eth0:10.10.12.0:1,eth1:10.10.100.0:2"),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_CRS_NETWORKINTERFACES"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},[n("${V_RAC_OS_PUBLIC_NETWORKINTERFACE_ARR"),s("span",{class:"token punctuation"},"["),n("0"),s("span",{class:"token punctuation"},"]"),n("}")]),n(":"),s("span",{class:"token variable"},"$V_RAC_OS_PUBLIC_SUBNET"),n(":1,"),s("span",{class:"token variable"},[n("${V_RAC_OS_PRIVATE_NETWORKINTERFACE_ARR"),s("span",{class:"token punctuation"},"["),n("0"),s("span",{class:"token punctuation"},"]"),n("}")]),n(":"),s("span",{class:"token variable"},"$V_RAC_OS_PRIVATE_SUBNET"),n(':5"')]),n(`
    `),s("span",{class:"token comment"},"# V_RAC_INSTANCE_CLUSTER_NODES=testdb1,testdb2"),n(`
    `),s("span",{class:"token comment"},"# eg. testdb1,testdb2"),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_INSTANCE_CLUSTER_NODES"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[n("${V_RAC_INSTANCE_ORACLE_SID"),s("span",{class:"token operator"},"/"),s("span",{class:"token operator"},"/"),n(),s("span",{class:"token operator"},"/"),s("span",{class:"token operator"},","),n("}")]),n(`

`),s("span",{class:"token keyword"},"elif"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},"$V_RAC_ORACLE_PRIMARY_VERSION"),n(),s("span",{class:"token parameter variable"},"-eq"),n(),s("span",{class:"token number"},"18"),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"then"),n(`
    `),s("span",{class:"token keyword"},"for"),n(),s("span",{class:"token for-or-select variable"},"item"),n(),s("span",{class:"token keyword"},"in"),n(),s("span",{class:"token variable"},"$V_RAC_OS_HOSTNAME"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"do"),n(`
        `),s("span",{class:"token keyword"},"if"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$V_RAC_CRS_CLUSTERNODES"),n('"')]),n(),s("span",{class:"token operator"},"!="),n(),s("span",{class:"token string"},'""'),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"then"),n(`
            `),s("span",{class:"token assign-left variable"},"V_RAC_CRS_CLUSTERNODES"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$V_RAC_CRS_CLUSTERNODES"),n(","),s("span",{class:"token variable"},"$item"),n(":"),s("span",{class:"token variable"},"$item"),n('-vip:HUB"')]),n(`
        `),s("span",{class:"token keyword"},"else"),n(`
            `),s("span",{class:"token assign-left variable"},"V_RAC_CRS_CLUSTERNODES"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$item"),n(":"),s("span",{class:"token variable"},"$item"),n('-vip:HUB"')]),n(`
        `),s("span",{class:"token keyword"},"fi"),n(`
    `),s("span",{class:"token keyword"},"done"),n(`

    `),s("span",{class:"token assign-left variable"},"V_RAC_OS_PUBLIC_NETWORKINTERFACE_ARR"),s("span",{class:"token operator"},"="),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$V_RAC_OS_PUBLIC_NETWORKINTERFACE"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_OS_PRIVATE_NETWORKINTERFACE_ARR"),s("span",{class:"token operator"},"="),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$V_RAC_OS_PRIVATE_NETWORKINTERFACE"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token comment"},"# V_RAC_CRS_NETWORKINTERFACES=eth0:10.10.12.0:1,eth1:10.10.100.0:2"),n(`
    `),s("span",{class:"token comment"},"# eg. eth0:10.10.12.0:1,eth1:10.10.100.0:2"),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_CRS_NETWORKINTERFACES"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},[n("${V_RAC_OS_PUBLIC_NETWORKINTERFACE_ARR"),s("span",{class:"token punctuation"},"["),n("0"),s("span",{class:"token punctuation"},"]"),n("}")]),n(":"),s("span",{class:"token variable"},"$V_RAC_OS_PUBLIC_SUBNET"),n(":1,"),s("span",{class:"token variable"},[n("${V_RAC_OS_PRIVATE_NETWORKINTERFACE_ARR"),s("span",{class:"token punctuation"},"["),n("0"),s("span",{class:"token punctuation"},"]"),n("}")]),n(":"),s("span",{class:"token variable"},"$V_RAC_OS_PRIVATE_SUBNET"),n(':5"')]),n(`
    `),s("span",{class:"token comment"},"# V_RAC_INSTANCE_CLUSTER_NODES=testdb1,testdb2"),n(`
    `),s("span",{class:"token comment"},"# eg. testdb1,testdb2"),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_INSTANCE_CLUSTER_NODES"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[n("${V_RAC_INSTANCE_ORACLE_SID"),s("span",{class:"token operator"},"/"),s("span",{class:"token operator"},"/"),n(),s("span",{class:"token operator"},"/"),s("span",{class:"token operator"},","),n("}")]),n(`

`),s("span",{class:"token keyword"},"elif"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},"$V_RAC_ORACLE_PRIMARY_VERSION"),n(),s("span",{class:"token parameter variable"},"-eq"),n(),s("span",{class:"token number"},"19"),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"then"),n(`
    `),s("span",{class:"token keyword"},"for"),n(),s("span",{class:"token for-or-select variable"},"item"),n(),s("span",{class:"token keyword"},"in"),n(),s("span",{class:"token variable"},"$V_RAC_OS_HOSTNAME"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"do"),n(`
        `),s("span",{class:"token keyword"},"if"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$V_RAC_CRS_CLUSTERNODES"),n('"')]),n(),s("span",{class:"token operator"},"!="),n(),s("span",{class:"token string"},'""'),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"then"),n(`
            `),s("span",{class:"token assign-left variable"},"V_RAC_CRS_CLUSTERNODES"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$V_RAC_CRS_CLUSTERNODES"),n(","),s("span",{class:"token variable"},"$item"),n(":"),s("span",{class:"token variable"},"$item"),n('-vip:HUB"')]),n(`
        `),s("span",{class:"token keyword"},"else"),n(`
            `),s("span",{class:"token assign-left variable"},"V_RAC_CRS_CLUSTERNODES"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$item"),n(":"),s("span",{class:"token variable"},"$item"),n('-vip:HUB"')]),n(`
        `),s("span",{class:"token keyword"},"fi"),n(`
    `),s("span",{class:"token keyword"},"done"),n(`

    `),s("span",{class:"token assign-left variable"},"V_RAC_OS_PUBLIC_NETWORKINTERFACE_ARR"),s("span",{class:"token operator"},"="),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$V_RAC_OS_PUBLIC_NETWORKINTERFACE"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_OS_PRIVATE_NETWORKINTERFACE_ARR"),s("span",{class:"token operator"},"="),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$V_RAC_OS_PRIVATE_NETWORKINTERFACE"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token comment"},"# V_RAC_CRS_NETWORKINTERFACES=eth0:10.10.12.0:1,eth1:10.10.100.0:2"),n(`
    `),s("span",{class:"token comment"},"# eg. eth0:10.10.12.0:1,eth1:10.10.100.0:2"),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_CRS_NETWORKINTERFACES"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},[n("${V_RAC_OS_PUBLIC_NETWORKINTERFACE_ARR"),s("span",{class:"token punctuation"},"["),n("0"),s("span",{class:"token punctuation"},"]"),n("}")]),n(":"),s("span",{class:"token variable"},"$V_RAC_OS_PUBLIC_SUBNET"),n(":1,"),s("span",{class:"token variable"},[n("${V_RAC_OS_PRIVATE_NETWORKINTERFACE_ARR"),s("span",{class:"token punctuation"},"["),n("0"),s("span",{class:"token punctuation"},"]"),n("}")]),n(":"),s("span",{class:"token variable"},"$V_RAC_OS_PRIVATE_SUBNET"),n(':5"')]),n(`
    `),s("span",{class:"token comment"},"# V_RAC_INSTANCE_CLUSTER_NODES=testdb1,testdb2"),n(`
    `),s("span",{class:"token comment"},"# eg. testdb1,testdb2"),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_INSTANCE_CLUSTER_NODES"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[n("${V_RAC_INSTANCE_ORACLE_SID"),s("span",{class:"token operator"},"/"),s("span",{class:"token operator"},"/"),n(),s("span",{class:"token operator"},"/"),s("span",{class:"token operator"},","),n("}")]),n(`

`),s("span",{class:"token keyword"},"elif"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},"$V_RAC_ORACLE_PRIMARY_VERSION"),n(),s("span",{class:"token parameter variable"},"-eq"),n(),s("span",{class:"token number"},"21"),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"then"),n(`
    `),s("span",{class:"token keyword"},"for"),n(),s("span",{class:"token for-or-select variable"},"item"),n(),s("span",{class:"token keyword"},"in"),n(),s("span",{class:"token variable"},"$V_RAC_OS_HOSTNAME"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"do"),n(`
        `),s("span",{class:"token keyword"},"if"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$V_RAC_CRS_CLUSTERNODES"),n('"')]),n(),s("span",{class:"token operator"},"!="),n(),s("span",{class:"token string"},'""'),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"then"),n(`
            `),s("span",{class:"token assign-left variable"},"V_RAC_CRS_CLUSTERNODES"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$V_RAC_CRS_CLUSTERNODES"),n(","),s("span",{class:"token variable"},"$item"),n(":"),s("span",{class:"token variable"},"$item"),n('-vip:HUB"')]),n(`
        `),s("span",{class:"token keyword"},"else"),n(`
            `),s("span",{class:"token assign-left variable"},"V_RAC_CRS_CLUSTERNODES"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$item"),n(":"),s("span",{class:"token variable"},"$item"),n('-vip:HUB"')]),n(`
        `),s("span",{class:"token keyword"},"fi"),n(`
    `),s("span",{class:"token keyword"},"done"),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_OS_PUBLIC_NETWORKINTERFACE_ARR"),s("span",{class:"token operator"},"="),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$V_RAC_OS_PUBLIC_NETWORKINTERFACE"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_OS_PRIVATE_NETWORKINTERFACE_ARR"),s("span",{class:"token operator"},"="),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$V_RAC_OS_PRIVATE_NETWORKINTERFACE"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token comment"},"# V_RAC_CRS_NETWORKINTERFACES=eth0:10.10.12.0:1,eth1:10.10.100.0:2"),n(`
    `),s("span",{class:"token comment"},"# eg. eth0:10.10.12.0:1,eth1:10.10.100.0:2"),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_CRS_NETWORKINTERFACES"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},[n("${V_RAC_OS_PUBLIC_NETWORKINTERFACE_ARR"),s("span",{class:"token punctuation"},"["),n("0"),s("span",{class:"token punctuation"},"]"),n("}")]),n(":"),s("span",{class:"token variable"},"$V_RAC_OS_PUBLIC_SUBNET"),n(":1,"),s("span",{class:"token variable"},[n("${V_RAC_OS_PRIVATE_NETWORKINTERFACE_ARR"),s("span",{class:"token punctuation"},"["),n("0"),s("span",{class:"token punctuation"},"]"),n("}")]),n(":"),s("span",{class:"token variable"},"$V_RAC_OS_PRIVATE_SUBNET"),n(':5"')]),n(`
    `),s("span",{class:"token comment"},"# V_RAC_INSTANCE_CLUSTER_NODES=testdb1,testdb2"),n(`
    `),s("span",{class:"token comment"},"# eg. testdb1,testdb2"),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_INSTANCE_CLUSTER_NODES"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[n("${V_RAC_INSTANCE_ORACLE_SID"),s("span",{class:"token operator"},"/"),s("span",{class:"token operator"},"/"),n(),s("span",{class:"token operator"},"/"),s("span",{class:"token operator"},","),n("}")]),n(`

`),s("span",{class:"token keyword"},"else"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"not supported version!"'),n(`
    `),s("span",{class:"token builtin class-name"},"exit"),n(),s("span",{class:"token number"},"1"),n(`
`),s("span",{class:"token keyword"},"fi"),n(`

`),s("span",{class:"token comment"},"# V_RAC_ABELIT_ASM_TYPE=asmlib"),n(`
`),s("span",{class:"token comment"},"# options: asmlib,asmmultipath,asmudev,asmnfs"),n(`
`),s("span",{class:"token assign-left variable"},"V_RAC_ABELIT_ASM_TYPE"),s("span",{class:"token operator"},"="),n(`
`),s("span",{class:"token comment"},"# V_RAC_ASM_DISKGROUP_DISKS=/dev/oracleasm/disks/ASM_DISK_OCR1,/dev/oracleasm/disks/ASM_DISK_OCR2,/dev/oracleasm/disks/ASM_DISK_OCR3"),n(`
`),s("span",{class:"token comment"},"# asmlib: /dev/oracleasm/disks/ASM_DISK_OCR1,/dev/oracleasm/disks/ASM_DISK_OCR2,/dev/oracleasm/disks/ASM_DISK_OCR3"),n(`
`),s("span",{class:"token comment"},"# asmmultipath: /dev/mapper/ASM_DISK_OCR1,/dev/mapper/ASM_DISK_OCR2,/dev/mapper/ASM_DISK_OCR3"),n(`
`),s("span",{class:"token comment"},"# asmudev: /dev/ASM_DISK_OCR1,/dev/ASM_DISK_OCR2,/dev/ASM_DISK_OCR3"),n(`
`),s("span",{class:"token comment"},"# asmnfs: /data/oracleasm/ASM_DISK_OCR1,/data/oracleasm/ASM_DISK_OCR2,/data/oracleasm/ASM_DISK_OCR3"),n(`
`),s("span",{class:"token assign-left variable"},"V_RAC_ASM_DISKGROUP_DISKS"),s("span",{class:"token operator"},"="),n(`
`),s("span",{class:"token comment"},"# V_RAC_ASM_DISKGROUP_DISKDISCOVERY=/dev/oracleasm/disks/ASM_DISK_*"),n(`
`),s("span",{class:"token comment"},"# asmlib: /dev/oracleasm/disks/ASM_DISK_*"),n(`
`),s("span",{class:"token comment"},"# asmmultipath: /dev/mapper/ASM_DISK_*"),n(`
`),s("span",{class:"token comment"},"# asmudev: /dev/ASM_DISK_*"),n(`
`),s("span",{class:"token comment"},"# asmnfs: /data/oracleasm/ASM_DISK_*"),n(`
`),s("span",{class:"token assign-left variable"},"V_RAC_ASM_DISKGROUP_DISKDISCOVERY"),s("span",{class:"token operator"},"="),n(`
`),s("span",{class:"token assign-left variable"},"V_RAC_ASM_DATA_ASMDISKS"),s("span",{class:"token operator"},"="),n(`
`),s("span",{class:"token assign-left variable"},"V_RAC_ASM_FRA_ASMDISKS"),s("span",{class:"token operator"},"="),n(`
`),s("span",{class:"token assign-left variable"},"V_RAC_ASM_OCR_ASMDISKS"),s("span",{class:"token operator"},"="),n(`

`),s("span",{class:"token comment"},"# package --------------"),n(`
`),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_ORACLE_ALL_SOURCE"),s("span",{class:"token operator"},"="),n(`
`),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_DATABASE_FILES"),s("span",{class:"token operator"},"="),n(`
`),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_DATABASE_INSTALLER"),s("span",{class:"token operator"},"="),n(`
`),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_DATABASE_TARGET"),s("span",{class:"token operator"},"="),n(`
`),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_DATABASE_RESPONSE_FILE"),s("span",{class:"token operator"},"="),n(`
`),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_GRID_FILES"),s("span",{class:"token operator"},"="),n(`
`),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_GRID_INSTALLER"),s("span",{class:"token operator"},"="),n(`
`),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_GRID_TARGET"),s("span",{class:"token operator"},"="),n(`
`),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_GRID_RESPONSE_FILE"),s("span",{class:"token operator"},"="),n(`
`),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_DBCA_RESPONSE_FILE"),s("span",{class:"token operator"},"="),n(`
`),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_NETCA_RESPONSE_FILE"),s("span",{class:"token operator"},"="),n(`
`),s("span",{class:"token comment"},"####### end auto&advanced settings #######"),n(`
`),s("span",{class:"token comment"},"############ Env & Virables end ############################################"),n(`
`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"ASMOptionsHelp"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token function"},"cat"),n(),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOF
Usage: `),s("span",{class:"token variable"},"$0"),n(` [option]
    options:
       -h | --help, help message.
       --asmtype [asmlib|asmudev|asmmultipath|asmnfs], specify asm storage type, description:
            asmlib: oracle asmlib.
            asmmultipath: multipath.
            asmnfs: nfs.
            asmudev: udev
EOF`)]),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"ASMOptions"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token keyword"},"while"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},[n("${"),s("span",{class:"token operator"},"#"),n("}")]),n(),s("span",{class:"token parameter variable"},"-gt"),n(),s("span",{class:"token number"},"0"),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"do"),n(`
        `),s("span",{class:"token assign-left variable"},"error_message"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},[n(`"Error: a value is needed for '`),s("span",{class:"token variable"},"$1"),n(`'"`)]),n(`
        `),s("span",{class:"token keyword"},"case"),n(),s("span",{class:"token variable"},"$1"),n(),s("span",{class:"token keyword"},"in"),n(`
        --asmtype`),s("span",{class:"token punctuation"},")"),n(`
            `),s("span",{class:"token assign-left variable"},"V_RAC_ABELIT_ASM_TYPE"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[n("${2"),s("span",{class:"token operator"},":?"),n("$error_message}")]),n(`
            `),s("span",{class:"token builtin class-name"},"shift"),n(),s("span",{class:"token number"},"2"),n(`
            `),s("span",{class:"token builtin class-name"},"break"),n(`
            `),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
        `),s("span",{class:"token parameter variable"},"-h"),n(),s("span",{class:"token operator"},"|"),n(" --help"),s("span",{class:"token punctuation"},")"),n(`
            ASMOptionsHelp
            `),s("span",{class:"token builtin class-name"},"shift"),n(),s("span",{class:"token number"},"2"),n(`
            `),s("span",{class:"token builtin class-name"},"break"),n(`
            `),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
        *`),s("span",{class:"token punctuation"},")"),n(`
            `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"unknown option '),s("span",{class:"token variable"},"$1"),n('"')]),n(`
            `),s("span",{class:"token builtin class-name"},"break"),n(`
            `),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
        `),s("span",{class:"token keyword"},"esac"),n(`
    `),s("span",{class:"token keyword"},"done"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"PreConfigurePackage"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token comment"},"# package"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Preparing configuring database related packages ..."'),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_ORACLE_ALL_SOURCE"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$V_RAC_PACKAGE_DIR"),n(`

    `),s("span",{class:"token keyword"},"if"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},"$V_RAC_ORACLE_PRIMARY_VERSION"),n(),s("span",{class:"token parameter variable"},"-eq"),n(),s("span",{class:"token number"},"11"),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"then"),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_DATABASE_FILES"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"p13390677_112040_Linux-x86-64_1of7.zip p13390677_112040_Linux-x86-64_2of7.zip"'),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_GRID_FILES"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"p13390677_112040_Linux-x86-64_3of7.zip"'),n(`

        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_GRID_INSTALLER"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"${V_RAC_PACKAGE_DIR}"),n(`/grid
        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_GRID_TARGET"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"${V_RAC_PACKAGE_DIR}"),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_GRID_INSTALLER_EXE"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$V_RAC_PACKAGE_GRID_INSTALLER"),n('/runInstaller -silent -showProgress -ignorePrereq -waitforcompletion"')]),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_GRID_RESPONSE_FILE"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$V_RAC_PACKAGE_GRID_INSTALLER"),n(`/response/grid_install.rsp
        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_GRID_INSTALLER_CONFIG"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$V_RAC_GRID_ORACLE_HOME"),n("/cfgtoollogs/configToolAllCommands RESPONSE_FILE="),s("span",{class:"token variable"},"$V_RAC_OS_DBA_DIR"),n("/grid_install-"),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +"),s("span",{class:"token string"},"'%Y%m%d'"),s("span",{class:"token variable"},")")]),n('.rsp"')]),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_GRID_INSTALLER_RPM"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$V_RAC_PACKAGE_GRID_INSTALLER"),n(`/rpm

        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_DATABASE_INSTALLER"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"${V_RAC_PACKAGE_DIR}"),n(`/database
        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_DATABASE_TARGET"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"${V_RAC_PACKAGE_DIR}"),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_DATABASE_INSTALLER_EXE"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$V_RAC_PACKAGE_DATABASE_INSTALLER"),n('/runInstaller  -silent -showProgress -ignorePrereq -waitforcompletion"')]),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_DATABASE_RESPONSE_FILE"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$V_RAC_PACKAGE_DATABASE_INSTALLER"),n(`/response/db_install.rsp

        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_DBCA_RESPONSE_FILE"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$V_RAC_PACKAGE_DATABASE_INSTALLER"),n(`/response/dbca.rsp
        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_NETCA_RESPONSE_FILE"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$V_RAC_PACKAGE_DATABASE_INSTALLER"),n(`/response/netca.rsp
    `),s("span",{class:"token keyword"},"elif"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},"$V_RAC_ORACLE_PRIMARY_VERSION"),n(),s("span",{class:"token parameter variable"},"-eq"),n(),s("span",{class:"token number"},"12"),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"then"),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_DATABASE_FILES"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"linuxx64_12201_database.zip"'),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_GRID_FILES"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"linuxx64_12201_grid_home.zip"'),n(`

        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_GRID_INSTALLER"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"${V_RAC_GRID_ORACLE_HOME}"),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_GRID_TARGET"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"${V_RAC_GRID_ORACLE_HOME}"),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_GRID_INSTALLER_EXE"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$V_RAC_PACKAGE_GRID_INSTALLER"),n('/gridSetup.sh -silent -ignorePrereqFailure -waitforcompletion"')]),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_GRID_RESPONSE_FILE"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$V_RAC_PACKAGE_GRID_INSTALLER"),n(`/install/response/gridsetup.rsp
        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_GRID_INSTALLER_CONFIG"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$V_RAC_GRID_ORACLE_HOME"),n("/gridSetup.sh -silent -executeConfigTools -responseFile "),s("span",{class:"token variable"},"$V_RAC_OS_DBA_DIR"),n("/grid_install-"),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +"),s("span",{class:"token string"},"'%Y%m%d'"),s("span",{class:"token variable"},")")]),n('.rsp"')]),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_GRID_INSTALLER_RPM"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$V_RAC_PACKAGE_GRID_INSTALLER"),n(`/cv/rpm

        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_DATABASE_INSTALLER"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"${V_RAC_PACKAGE_DIR}"),n(`/database
        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_DATABASE_TARGET"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"${V_RAC_PACKAGE_DIR}"),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_DATABASE_INSTALLER_EXE"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$V_RAC_PACKAGE_DATABASE_INSTALLER"),n('/runInstaller  -silent -showProgress -ignorePrereq -waitforcompletion"')]),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_DATABASE_RESPONSE_FILE"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$V_RAC_PACKAGE_DATABASE_INSTALLER"),n(`/response/db_install.rsp

        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_DBCA_RESPONSE_FILE"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$V_RAC_PACKAGE_DATABASE_INSTALLER"),n(`/response/dbca.rsp
        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_NETCA_RESPONSE_FILE"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$V_RAC_PACKAGE_DATABASE_INSTALLER"),n(`/response/netca.rsp

    `),s("span",{class:"token keyword"},"elif"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},"$V_RAC_ORACLE_PRIMARY_VERSION"),n(),s("span",{class:"token parameter variable"},"-eq"),n(),s("span",{class:"token number"},"18"),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"then"),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_DATABASE_FILES"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"LINUX.X64_180000_db_home.zip"'),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_GRID_FILES"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"LINUX.X64_180000_grid_home.zip"'),n(`

        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_GRID_INSTALLER"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"${V_RAC_GRID_ORACLE_HOME}"),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_GRID_TARGET"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"${V_RAC_GRID_ORACLE_HOME}"),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_GRID_INSTALLER_EXE"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$V_RAC_PACKAGE_GRID_INSTALLER"),n('/gridSetup.sh -silent -ignorePrereqFailure -waitforcompletion"')]),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_GRID_RESPONSE_FILE"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$V_RAC_PACKAGE_GRID_INSTALLER"),n(`/install/response/gridsetup.rsp
        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_GRID_INSTALLER_CONFIG"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$V_RAC_GRID_ORACLE_HOME"),n("/gridSetup.sh -silent -executeConfigTools -responseFile "),s("span",{class:"token variable"},"$V_RAC_OS_DBA_DIR"),n("/grid_install-"),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +"),s("span",{class:"token string"},"'%Y%m%d'"),s("span",{class:"token variable"},")")]),n('.rsp"')]),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_GRID_INSTALLER_RPM"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$V_RAC_PACKAGE_GRID_INSTALLER"),n(`/cv/rpm

        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_DATABASE_INSTALLER"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"${V_RAC_ORACLE_HOME}"),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_DATABASE_TARGET"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"${V_RAC_ORACLE_HOME}"),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_DATABASE_INSTALLER_EXE"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$V_RAC_PACKAGE_DATABASE_INSTALLER"),n('/runInstaller  -silent -ignorePrereq -waitforcompletion"')]),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_DATABASE_RESPONSE_FILE"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$V_RAC_PACKAGE_DATABASE_INSTALLER"),n(`/response/db_install.rsp

        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_DBCA_RESPONSE_FILE"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$V_RAC_PACKAGE_DATABASE_INSTALLER"),n(`/assistants/dbca/dbca.rsp
        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_NETCA_RESPONSE_FILE"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$V_RAC_PACKAGE_DATABASE_INSTALLER"),n(`/assistants/netca/netca.rsp

    `),s("span",{class:"token keyword"},"elif"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},"$V_RAC_ORACLE_PRIMARY_VERSION"),n(),s("span",{class:"token parameter variable"},"-eq"),n(),s("span",{class:"token number"},"19"),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"then"),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_DATABASE_FILES"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"LINUX.X64_193000_db_home.zip"'),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_GRID_FILES"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"LINUX.X64_193000_grid_home.zip"'),n(`

        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_GRID_INSTALLER"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"${V_RAC_GRID_ORACLE_HOME}"),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_GRID_TARGET"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"${V_RAC_GRID_ORACLE_HOME}"),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_GRID_INSTALLER_EXE"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$V_RAC_PACKAGE_GRID_INSTALLER"),n('/gridSetup.sh -silent -ignorePrereqFailure -waitforcompletion"')]),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_GRID_RESPONSE_FILE"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$V_RAC_PACKAGE_GRID_INSTALLER"),n(`/install/response/gridsetup.rsp
        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_GRID_INSTALLER_CONFIG"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$V_RAC_GRID_ORACLE_HOME"),n("/gridSetup.sh -silent -executeConfigTools -responseFile "),s("span",{class:"token variable"},"$V_RAC_OS_DBA_DIR"),n("/grid_install-"),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +"),s("span",{class:"token string"},"'%Y%m%d'"),s("span",{class:"token variable"},")")]),n('.rsp"')]),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_GRID_INSTALLER_RPM"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$V_RAC_PACKAGE_GRID_INSTALLER"),n(`/cv/rpm

        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_DATABASE_INSTALLER"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"${V_RAC_ORACLE_HOME}"),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_DATABASE_TARGET"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"${V_RAC_ORACLE_HOME}"),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_DATABASE_INSTALLER_EXE"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$V_RAC_PACKAGE_DATABASE_INSTALLER"),n('/runInstaller  -silent -ignorePrereq -waitforcompletion"')]),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_DATABASE_RESPONSE_FILE"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$V_RAC_PACKAGE_DATABASE_INSTALLER"),n(`/response/db_install.rsp

        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_DBCA_RESPONSE_FILE"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$V_RAC_PACKAGE_DATABASE_INSTALLER"),n(`/assistants/dbca/dbca.rsp
        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_NETCA_RESPONSE_FILE"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$V_RAC_PACKAGE_DATABASE_INSTALLER"),n(`/assistants/netca/netca.rsp
    `),s("span",{class:"token keyword"},"elif"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},"$V_RAC_ORACLE_PRIMARY_VERSION"),n(),s("span",{class:"token parameter variable"},"-eq"),n(),s("span",{class:"token number"},"21"),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"then"),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_DATABASE_FILES"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"LINUX.X64_213000_db_home.zip"'),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_GRID_FILES"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"LINUX.X64_213000_grid_home.zip"'),n(`

        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_GRID_INSTALLER"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"${V_RAC_GRID_ORACLE_HOME}"),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_GRID_TARGET"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"${V_RAC_GRID_ORACLE_HOME}"),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_GRID_INSTALLER_EXE"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$V_RAC_PACKAGE_GRID_INSTALLER"),n('/gridSetup.sh -silent -ignorePrereqFailure -waitforcompletion"')]),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_GRID_RESPONSE_FILE"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$V_RAC_PACKAGE_GRID_INSTALLER"),n(`/install/response/gridsetup.rsp
        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_GRID_INSTALLER_RPM"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$V_RAC_PACKAGE_GRID_INSTALLER"),n(`/cv/rpm

        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_DATABASE_INSTALLER"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"${V_RAC_ORACLE_HOME}"),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_DATABASE_TARGET"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"${V_RAC_ORACLE_HOME}"),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_DATABASE_INSTALLER_EXE"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$V_RAC_PACKAGE_DATABASE_INSTALLER"),n('/runInstaller  -silent -ignorePrereq -waitforcompletion"')]),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_DATABASE_RESPONSE_FILE"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$V_RAC_PACKAGE_DATABASE_INSTALLER"),n(`/response/db_install.rsp

        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_DBCA_RESPONSE_FILE"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$V_RAC_PACKAGE_DATABASE_INSTALLER"),n(`/assistants/dbca/dbca.rsp
        `),s("span",{class:"token assign-left variable"},"V_RAC_PACKAGE_NETCA_RESPONSE_FILE"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$V_RAC_PACKAGE_DATABASE_INSTALLER"),n(`/assistants/netca/netca.rsp
    `),s("span",{class:"token keyword"},"else"),n(`
        `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"The oracle version does not exists,contact dba to support!"'),n(`
        `),s("span",{class:"token builtin class-name"},"exit"),n(`
    `),s("span",{class:"token keyword"},"fi"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"PreConfigureDatabase"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Preparing configuring database intallation ..."'),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Preparing configuring ASM disks ..."'),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_OS_CURRENT_HOSTNAME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"hostname"),s("span",{class:"token variable"},")")]),n(`

    ASMOptions `),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$@"),n('"')]),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_ASM_ASMDISKS_PATH"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'""'),n(`
    `),s("span",{class:"token keyword"},"if"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$V_RAC_ABELIT_ASM_TYPE"),n('"')]),n(),s("span",{class:"token operator"},"="),n(),s("span",{class:"token string"},'"asmlib"'),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"then"),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_ASM_ASMDISKS_PATH"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"/dev/oracleasm/disks"'),n(`
    `),s("span",{class:"token keyword"},"elif"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$V_RAC_ABELIT_ASM_TYPE"),n('"')]),n(),s("span",{class:"token operator"},"="),n(),s("span",{class:"token string"},'"asmmultipath"'),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"then"),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_ASM_ASMDISKS_PATH"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"/dev/mapper"'),n(`
    `),s("span",{class:"token keyword"},"elif"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$V_RAC_ABELIT_ASM_TYPE"),n('"')]),n(),s("span",{class:"token operator"},"="),n(),s("span",{class:"token string"},'"asmudev"'),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"then"),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_ASM_ASMDISKS_PATH"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"/dev"'),n(`
    `),s("span",{class:"token keyword"},"elif"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$V_RAC_ABELIT_ASM_TYPE"),n('"')]),n(),s("span",{class:"token operator"},"="),n(),s("span",{class:"token string"},'"asmnfs"'),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"then"),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_ASM_ASMDISKS_PATH"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"/data/oracleasm"'),n(`
    `),s("span",{class:"token keyword"},"else"),n(`
        `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"The specified asm storage type does not exist."'),n(`
        `),s("span",{class:"token builtin class-name"},"exit"),n(),s("span",{class:"token number"},"1"),n(`
    `),s("span",{class:"token keyword"},"fi"),n(`

    `),s("span",{class:"token assign-left variable"},"counter"),s("span",{class:"token operator"},"="),s("span",{class:"token number"},"1"),n(`
    `),s("span",{class:"token keyword"},"for"),n(),s("span",{class:"token for-or-select variable"},"disk_item"),n(),s("span",{class:"token keyword"},"in"),n(),s("span",{class:"token variable"},"$V_RAC_ASM_OCR_DISKS"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"do"),n(`
        `),s("span",{class:"token keyword"},"if"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$V_RAC_ASM_DISKGROUP_DISKS"),n('"')]),n(),s("span",{class:"token operator"},"!="),n(),s("span",{class:"token string"},'""'),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"then"),n(`
            `),s("span",{class:"token assign-left variable"},"V_RAC_ASM_DISKGROUP_DISKS"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$V_RAC_ASM_DISKGROUP_DISKS"),n(","),s("span",{class:"token variable"},"$V_RAC_ASM_ASMDISKS_PATH"),n("/"),s("span",{class:"token variable"},"${V_RAC_ASM_OCR_ASMDISK_PREFFIX}"),s("span",{class:"token variable"},"${counter}"),n('"')]),n(`
        `),s("span",{class:"token keyword"},"else"),n(`
            `),s("span",{class:"token assign-left variable"},"V_RAC_ASM_DISKGROUP_DISKS"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$V_RAC_ASM_ASMDISKS_PATH"),n("/"),s("span",{class:"token variable"},"${V_RAC_ASM_OCR_ASMDISK_PREFFIX}"),s("span",{class:"token variable"},"${counter}"),n('"')]),n(`
        `),s("span",{class:"token keyword"},"fi"),n(`
        `),s("span",{class:"token assign-left variable"},"counter"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$(("),n("$counter "),s("span",{class:"token operator"},"+"),n(),s("span",{class:"token number"},"1"),s("span",{class:"token variable"},"))")]),n(`
    `),s("span",{class:"token keyword"},"done"),n(`

    `),s("span",{class:"token assign-left variable"},"counter"),s("span",{class:"token operator"},"="),s("span",{class:"token number"},"1"),n(`
    `),s("span",{class:"token keyword"},"for"),n(),s("span",{class:"token for-or-select variable"},"disk_item"),n(),s("span",{class:"token keyword"},"in"),n(),s("span",{class:"token variable"},"$V_RAC_ASM_DATA_DISKS"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"do"),n(`
        `),s("span",{class:"token keyword"},"if"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$V_RAC_ASM_DATA_ASMDISKS"),n('"')]),n(),s("span",{class:"token operator"},"!="),n(),s("span",{class:"token string"},'""'),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"then"),n(`
            `),s("span",{class:"token assign-left variable"},"V_RAC_ASM_DATA_ASMDISKS"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$V_RAC_ASM_DATA_ASMDISKS"),n(","),s("span",{class:"token variable"},"$V_RAC_ASM_ASMDISKS_PATH"),n("/"),s("span",{class:"token variable"},"${V_RAC_ASM_DATA_ASMDISK_PREFFIX}"),s("span",{class:"token variable"},"${counter}"),n('"')]),n(`
        `),s("span",{class:"token keyword"},"else"),n(`
            `),s("span",{class:"token assign-left variable"},"V_RAC_ASM_DATA_ASMDISKS"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$V_RAC_ASM_ASMDISKS_PATH"),n("/"),s("span",{class:"token variable"},"${V_RAC_ASM_DATA_ASMDISK_PREFFIX}"),s("span",{class:"token variable"},"${counter}"),n('"')]),n(`
        `),s("span",{class:"token keyword"},"fi"),n(`
        `),s("span",{class:"token assign-left variable"},"counter"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$(("),n("$counter "),s("span",{class:"token operator"},"+"),n(),s("span",{class:"token number"},"1"),s("span",{class:"token variable"},"))")]),n(`
    `),s("span",{class:"token keyword"},"done"),n(`

    `),s("span",{class:"token assign-left variable"},"counter"),s("span",{class:"token operator"},"="),s("span",{class:"token number"},"1"),n(`
    `),s("span",{class:"token keyword"},"for"),n(),s("span",{class:"token for-or-select variable"},"disk_item"),n(),s("span",{class:"token keyword"},"in"),n(),s("span",{class:"token variable"},"$V_RAC_ASM_FRA_DISKS"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"do"),n(`
        `),s("span",{class:"token keyword"},"if"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$V_RAC_ASM_FRA_ASMDISKS"),n('"')]),n(),s("span",{class:"token operator"},"!="),n(),s("span",{class:"token string"},'""'),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"then"),n(`
            `),s("span",{class:"token assign-left variable"},"V_RAC_ASM_FRA_ASMDISKS"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$V_RAC_ASM_FRA_ASMDISKS"),n(","),s("span",{class:"token variable"},"$V_RAC_ASM_ASMDISKS_PATH"),n("/"),s("span",{class:"token variable"},"${V_RAC_ASM_FRA_ASMDISK_PREFFIX}"),s("span",{class:"token variable"},"${counter}"),n('"')]),n(`
        `),s("span",{class:"token keyword"},"else"),n(`
            `),s("span",{class:"token assign-left variable"},"V_RAC_ASM_FRA_ASMDISKS"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$V_RAC_ASM_ASMDISKS_PATH"),n("/"),s("span",{class:"token variable"},"${V_RAC_ASM_FRA_ASMDISK_PREFFIX}"),s("span",{class:"token variable"},"${counter}"),n('"')]),n(`
        `),s("span",{class:"token keyword"},"fi"),n(`
        `),s("span",{class:"token assign-left variable"},"counter"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$(("),n("$counter "),s("span",{class:"token operator"},"+"),n(),s("span",{class:"token number"},"1"),s("span",{class:"token variable"},"))")]),n(`
    `),s("span",{class:"token keyword"},"done"),n(`

    `),s("span",{class:"token assign-left variable"},"V_RAC_ASM_OCR_ASMDISKS"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$V_RAC_ASM_DISKGROUP_DISKS"),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_ASM_DISKGROUP_DISKDISCOVERY"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$V_RAC_ASM_ASMDISKS_PATH"),n(`/ASM_DISK_*

    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Preparing configuring installation options ... "'),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_ORACLE_DBCA_RESPONSE_FILE"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$V_RAC_OS_DBA_DIR"),n("/dbca_"),s("span",{class:"token variable"},"$V_RAC_ORACLE_DATABASE_VERSION"),n(`.rsp

    `),s("span",{class:"token keyword"},"if"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},"$V_RAC_ORACLE_PRIMARY_VERSION"),n(),s("span",{class:"token parameter variable"},"-eq"),n(),s("span",{class:"token number"},"11"),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"then"),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_ASM_DISKGROUP_ASM_COMPATIBLE"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"11.2"'),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_ASM_DISKGROUP_RDBMMS_COMPATIBLE"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"11.2"'),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_GRID_INSTALL_OPTION"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},[n(`"\\
        oracle.install.responseFileVersion=/oracle/install/rspfmt_crsinstall_response_schema_v11_2_0 \\
        ORACLE_HOSTNAME=`),s("span",{class:"token variable"},"$V_RAC_OS_CURRENT_HOSTNAME"),n(` \\
        INVENTORY_LOCATION=`),s("span",{class:"token variable"},"$V_RAC_ORACLE_ORA_INVENTORY"),n(` \\
        SELECTED_LANGUAGES=en \\
        oracle.install.option=CRS_CONFIG \\
        ORACLE_BASE=`),s("span",{class:"token variable"},"$V_RAC_GRID_ORACLE_BASE"),n(` \\
        ORACLE_HOME=`),s("span",{class:"token variable"},"$V_RAC_GRID_ORACLE_HOME"),n(` \\
        oracle.install.asm.OSDBA=asmdba \\
        oracle.install.asm.OSOPER=asmoper \\
        oracle.install.asm.OSASM=asmadmin \\
        oracle.install.crs.config.gpnp.scanName=`),s("span",{class:"token variable"},"$V_RAC_CRS_SCANNAME"),n(` \\
        oracle.install.crs.config.gpnp.scanPort=`),s("span",{class:"token variable"},"$V_RAC_CRS_SCANPORT"),n(` \\
        oracle.install.crs.config.clusterName=`),s("span",{class:"token variable"},"$V_RAC_CRS_CLUSTER_NAME"),n(` \\
        oracle.install.crs.config.gpnp.configureGNS=false \\
        oracle.install.crs.config.gpnp.gnsSubDomain= \\
        oracle.install.crs.config.gpnp.gnsVIPAddress= \\
        oracle.install.crs.config.autoConfigureClusterNodeVIP=false \\
        oracle.install.crs.config.clusterNodes=`),s("span",{class:"token variable"},"$V_RAC_CRS_CLUSTERNODES"),n(` \\
        oracle.install.crs.config.networkInterfaceList=`),s("span",{class:"token variable"},"$V_RAC_CRS_NETWORKINTERFACES"),n(` \\
        oracle.install.crs.config.storageOption=ASM_STORAGE \\
        oracle.install.crs.config.sharedFileSystemStorage.diskDriveMapping= \\
        oracle.install.crs.config.sharedFileSystemStorage.votingDiskLocations= \\
        oracle.install.crs.config.sharedFileSystemStorage.votingDiskRedundancy=`),s("span",{class:"token variable"},"$V_RAC_CRS_OCRVOTING_REDUNDANCY"),n(` \\
        oracle.install.crs.config.sharedFileSystemStorage.ocrLocations= \\
        oracle.install.crs.config.sharedFileSystemStorage.ocrRedundancy=`),s("span",{class:"token variable"},"$V_RAC_CRS_OCRVOTING_REDUNDANCY"),n(` \\
        oracle.install.crs.config.useIPMI=false \\
        oracle.install.crs.config.ipmi.bmcUsername= \\
        oracle.install.crs.config.ipmi.bmcPassword= \\
        oracle.install.asm.SYSASMPassword=`),s("span",{class:"token variable"},"$V_RAC_ASM_SYSASM_PASSWORD"),n(` \\
        oracle.install.asm.diskGroup.name=`),s("span",{class:"token variable"},"$V_RAC_ASM_DISKGROUP_NAME"),n(` \\
        oracle.install.asm.diskGroup.redundancy=`),s("span",{class:"token variable"},"$V_RAC_ASM_DISKGROUP_REDUNDANCY"),n(` \\
        oracle.install.asm.diskGroup.AUSize=1 \\
        oracle.install.asm.diskGroup.disks=`),s("span",{class:"token variable"},"$V_RAC_ASM_DISKGROUP_DISKS"),n(` \\
        oracle.install.asm.diskGroup.diskDiscoveryString=`),s("span",{class:"token variable"},"$V_RAC_ASM_DISKGROUP_DISKDISCOVERY"),n(` \\
        oracle.install.asm.monitorPassword=`),s("span",{class:"token variable"},"$V_RAC_ASM_MONITOR_PASSWORD"),n(` \\
        oracle.install.crs.upgrade.clusterNodes= \\
        oracle.install.asm.upgradeASM=false \\
        oracle.installer.autoupdates.option=SKIP_UPDATES \\
        "`)]),n(`

        `),s("span",{class:"token assign-left variable"},"V_RAC_ORACLE_INSTALL_OPTION"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},[n(`"\\
        oracle.install.responseFileVersion=/oracle/install/rspfmt_dbinstall_response_schema_v11_2_0 \\
        oracle.install.option=INSTALL_DB_SWONLY \\
        ORACLE_HOSTNAME=`),s("span",{class:"token variable"},"$V_RAC_OS_CURRENT_HOSTNAME"),n(` \\
        UNIX_GROUP_NAME=oinstall \\
        INVENTORY_LOCATION=`),s("span",{class:"token variable"},"$V_RAC_ORACLE_ORA_INVENTORY"),n(` \\
        SELECTED_LANGUAGES=en \\
        ORACLE_HOME=`),s("span",{class:"token variable"},"$V_RAC_ORACLE_HOME"),n(` \\
        ORACLE_BASE=`),s("span",{class:"token variable"},"$V_RAC_ORACLE_BASE"),n(` \\
        oracle.install.db.InstallEdition=EE \\
        oracle.install.db.EEOptionsSelection=false \\
        oracle.install.db.DBA_GROUP=dba \\
        oracle.install.db.OPER_GROUP=oper \\
        oracle.install.db.OSBACKUPDBA_GROUP=backupdba \\
        oracle.install.db.OSDGDBA_GROUP=dgdba \\
        oracle.install.db.OSKMDBA_GROUP=kmdba \\
        oracle.install.db.OSRACDBA_GROUP=racdba \\
        oracle.install.db.CLUSTER_NODES=`),s("span",{class:"token variable"},"$V_RAC_INSTANCE_CLUSTER_NODES"),n(` \\
        oracle.install.db.isRACOneInstall=false \\
        oracle.install.db.racOneServiceName= \\
        oracle.install.db.config.starterdb.type= \\
        oracle.install.db.config.starterdb.globalDBName= \\
        oracle.install.db.config.starterdb.SID= \\
        oracle.install.db.config.starterdb.characterSet= \\
        oracle.install.db.config.starterdb.memoryOption=true \\
        oracle.install.db.config.starterdb.memoryLimit= \\
        oracle.install.db.config.starterdb.installExampleSchemas=false \\
        oracle.install.db.config.starterdb.enableSecuritySettings=true \\
        oracle.install.db.config.starterdb.password.ALL= \\
        oracle.install.db.config.starterdb.password.SYS= \\
        oracle.install.db.config.starterdb.password.SYSTEM= \\
        oracle.install.db.config.starterdb.password.SYSMAN= \\
        oracle.install.db.config.starterdb.password.DBSNMP= \\
        oracle.install.db.config.starterdb.control=DB_CONTROL \\
        oracle.install.db.config.starterdb.gridcontrol.gridControlServiceURL= \\
        oracle.install.db.config.starterdb.automatedBackup.enable=false \\
        oracle.install.db.config.starterdb.automatedBackup.osuid= \\
        oracle.install.db.config.starterdb.automatedBackup.ospwd= \\
        oracle.install.db.config.starterdb.storageType= \\
        oracle.install.db.config.starterdb.fileSystemStorage.dataLocation= \\
        oracle.install.db.config.starterdb.fileSystemStorage.recoveryLocation= \\
        oracle.install.db.config.asm.diskGroup= \\
        oracle.install.db.config.asm.ASMSNMPPassword= \\
        MYORACLESUPPORT_USERNAME= \\
        MYORACLESUPPORT_PASSWORD= \\
        SECURITY_UPDATES_VIA_MYORACLESUPPORT= \\
        DECLINE_SECURITY_UPDATES=true \\
        PROXY_HOST= \\
        PROXY_PORT= \\
        PROXY_USER= \\
        PROXY_PWD= \\
        PROXY_REALM= \\
        COLLECTOR_SUPPORTHUB_URL= \\
        oracle.installer.autoupdates.option= \\
        oracle.installer.autoupdates.downloadUpdatesLoc= \\
        AUTOUPDATES_MYORACLESUPPORT_USERNAME= \\
        AUTOUPDATES_MYORACLESUPPORT_PASSWORD= \\
        "`)]),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_ORACLE_DBCA_OPTION"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},[n(`"\\
        -nodelist `),s("span",{class:"token variable"},"$V_RAC_INSTANCE_CLUSTER_NODES"),n(` \\
        -gdbName `),s("span",{class:"token variable"},"$V_RAC_ORACLE_UNQNAME"),n(` \\
        -sid `),s("span",{class:"token variable"},"$V_RAC_ORACLE_UNQNAME"),n(` \\
        -characterSet `),s("span",{class:"token variable"},"$V_RAC_ORACLE_CHARSET"),n(` \\
        -sysPassword `),s("span",{class:"token variable"},"$V_RAC_ORACLE_SYS_PASSWORD"),n(` \\
        -systemPassword `),s("span",{class:"token variable"},"$V_RAC_ORACLE_SYSTEM_PASSWORD"),n(` \\
        -databaseType MULTIPURPOSE \\
        -memoryPercentage 66 \\
        -totalMemory `),s("span",{class:"token variable"},"$V_RAC_ORACLE_TOTAL_MEMORY"),n(` \\
        -storageType ASM \\
        -diskGroupName `),s("span",{class:"token variable"},"$V_RAC_ORACLE_DATA_DIR"),n(` \\
        -recoveryGroupName `),s("span",{class:"token variable"},"$V_RAC_ORACLE_RECOVERY_AREA_DIR"),n(` \\
        -datafileDestination `),s("span",{class:"token variable"},"$V_RAC_ORACLE_DATA_DIR"),n(` \\
        -recoveryAreaDestination `),s("span",{class:"token variable"},"$V_RAC_ORACLE_RECOVERY_AREA_DIR"),n(` \\
        -redoLogFileSize `),s("span",{class:"token variable"},"$V_RAC_ORACLE_REDOLOG_SIZE"),n(` \\
        -emConfiguration NONE \\
        "`)]),n(`

    `),s("span",{class:"token keyword"},"elif"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},"$V_RAC_ORACLE_PRIMARY_VERSION"),n(),s("span",{class:"token parameter variable"},"-eq"),n(),s("span",{class:"token number"},"12"),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"then"),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_ASM_DISKGROUP_ASM_COMPATIBLE"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"12.2"'),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_ASM_DISKGROUP_RDBMMS_COMPATIBLE"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"12.2"'),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_GRID_INSTALL_OPTION"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},[n(`"\\
        oracle.install.responseFileVersion=/oracle/install/rspfmt_crsinstall_response_schema_v12.2.0 \\
        INVENTORY_LOCATION=`),s("span",{class:"token variable"},"$V_RAC_ORACLE_ORA_INVENTORY"),n(` \\
        oracle.install.option=CRS_CONFIG \\
        ORACLE_BASE=`),s("span",{class:"token variable"},"$V_RAC_GRID_ORACLE_BASE"),n(` \\
        ORACLE_HOME=`),s("span",{class:"token variable"},"$V_RAC_GRID_ORACLE_HOME"),n(` \\
        oracle.install.asm.OSDBA=asmdba \\
        oracle.install.asm.OSOPER=asmoper \\
        oracle.install.asm.OSASM=asmadmin \\
        oracle.install.crs.config.gpnp.scanName=`),s("span",{class:"token variable"},"$V_RAC_CRS_SCANNAME"),n(` \\
        oracle.install.crs.config.gpnp.scanPort=`),s("span",{class:"token variable"},"$V_RAC_CRS_SCANPORT"),n(` \\
        oracle.install.crs.config.ClusterConfiguration=STANDALONE \\
        oracle.install.crs.config.configureAsExtendedCluster= \\
        oracle.install.crs.config.memberClusterManifestFile= \\
        oracle.install.crs.config.clusterName=`),s("span",{class:"token variable"},"$V_RAC_CRS_CLUSTER_NAME"),n(` \\
        oracle.install.crs.config.gpnp.configureGNS=false \\
        oracle.install.crs.config.autoConfigureClusterNodeVIP=false \\
        oracle.install.crs.config.gpnp.gnsOption= \\
        oracle.install.crs.config.gpnp.gnsClientDataFile= \\
        oracle.install.crs.config.gpnp.gnsSubDomain= \\
        oracle.install.crs.config.gpnp.gnsVIPAddress= \\
        oracle.install.crs.config.sites= \\
        oracle.install.crs.config.clusterNodes=`),s("span",{class:"token variable"},"$V_RAC_CRS_CLUSTERNODES"),n(` \\
        oracle.install.crs.config.networkInterfaceList=`),s("span",{class:"token variable"},"$V_RAC_CRS_NETWORKINTERFACES"),n(` \\
        oracle.install.asm.configureGIMRDataDG= \\
        oracle.install.crs.config.storageOption= \\
        oracle.install.crs.config.useIPMI=false \\
        oracle.install.crs.config.ipmi.bmcUsername= \\
        oracle.install.crs.config.ipmi.bmcPassword= \\
        oracle.install.asm.storageOption=ASM \\
        oracle.install.asmOnNAS.ocrLocation= \\
        oracle.install.asmOnNAS.configureGIMRDataDG= \\
        oracle.install.asmOnNAS.gimrLocation= \\
        oracle.install.asm.SYSASMPassword=`),s("span",{class:"token variable"},"$V_RAC_ASM_SYSASM_PASSWORD"),n(` \\
        oracle.install.asm.diskGroup.name=`),s("span",{class:"token variable"},"$V_RAC_ASM_DISKGROUP_NAME"),n(` \\
        oracle.install.asm.diskGroup.redundancy=`),s("span",{class:"token variable"},"$V_RAC_ASM_DISKGROUP_REDUNDANCY"),n(` \\
        oracle.install.asm.diskGroup.AUSize=1 \\
        oracle.install.asm.diskGroup.FailureGroups= \\
        oracle.install.asm.diskGroup.disksWithFailureGroupNames= \\
        oracle.install.asm.diskGroup.disks=`),s("span",{class:"token variable"},"$V_RAC_ASM_DISKGROUP_DISKS"),n(` \\
        oracle.install.asm.diskGroup.quorumFailureGroupNames= \\
        oracle.install.asm.diskGroup.diskDiscoveryString=`),s("span",{class:"token variable"},"$V_RAC_ASM_DISKGROUP_DISKDISCOVERY"),n(` \\
        oracle.install.asm.monitorPassword=`),s("span",{class:"token variable"},"$V_RAC_ASM_MONITOR_PASSWORD"),n(` \\
        oracle.install.asm.gimrDG.name= \\
        oracle.install.asm.gimrDG.redundancy= \\
        oracle.install.asm.gimrDG.AUSize= \\
        oracle.install.asm.gimrDG.FailureGroups= \\
        oracle.install.asm.gimrDG.disksWithFailureGroupNames= \\
        oracle.install.asm.gimrDG.disks= \\
        oracle.install.asm.gimrDG.quorumFailureGroupNames= \\
        oracle.install.asm.configureAFD= \\
        oracle.install.crs.configureRHPS= \\
        oracle.install.crs.config.ignoreDownNodes= \\
        oracle.install.config.managementOption= \\
        oracle.install.config.omsHost= \\
        oracle.install.config.omsPort= \\
        oracle.install.config.emAdminUser= \\
        oracle.install.config.emAdminPassword= \\
        oracle.install.crs.rootconfig.executeRootScript= \\
        oracle.install.crs.rootconfig.configMethod= \\
        oracle.install.crs.rootconfig.sudoPath= \\
        oracle.install.crs.rootconfig.sudoUserName= \\
        oracle.install.crs.config.batchinfo= \\
        oracle.install.crs.app.applicationAddress= \\
        "`)]),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_ORACLE_INSTALL_OPTION"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},[n(`"\\
        oracle.install.responseFileVersion=/oracle/install/rspfmt_dbinstall_response_schema_v12.2.0 \\
        oracle.install.option=INSTALL_DB_SWONLY \\
        UNIX_GROUP_NAME=oinstall \\
        INVENTORY_LOCATION=`),s("span",{class:"token variable"},"$V_RAC_ORACLE_ORA_INVENTORY"),n(` \\
        ORACLE_HOME=`),s("span",{class:"token variable"},"$V_RAC_ORACLE_HOME"),n(` \\
        ORACLE_BASE=`),s("span",{class:"token variable"},"$V_RAC_ORACLE_BASE"),n(` \\
        oracle.install.db.InstallEdition=EE \\
        oracle.install.db.OSDBA_GROUP=dba \\
        oracle.install.db.OSOPER_GROUP=oper \\
        oracle.install.db.OSBACKUPDBA_GROUP=backupdba \\
        oracle.install.db.OSDGDBA_GROUP=dgdba \\
        oracle.install.db.OSKMDBA_GROUP=kmdba \\
        oracle.install.db.OSRACDBA_GROUP=racdba \\
        oracle.install.db.rac.configurationType= \\
        oracle.install.db.CLUSTER_NODES=`),s("span",{class:"token variable"},"$V_RAC_INSTANCE_CLUSTER_NODES"),n(` \\
        oracle.install.db.isRACOneInstall=false \\
        oracle.install.db.racOneServiceName= \\
        oracle.install.db.rac.serverpoolName= \\
        oracle.install.db.rac.serverpoolCardinality= \\
        oracle.install.db.config.starterdb.type= \\
        oracle.install.db.config.starterdb.globalDBName= \\
        oracle.install.db.config.starterdb.SID= \\
        oracle.install.db.ConfigureAsContainerDB= \\
        oracle.install.db.config.PDBName= \\
        oracle.install.db.config.starterdb.characterSet= \\
        oracle.install.db.config.starterdb.memoryOption= \\
        oracle.install.db.config.starterdb.memoryLimit= \\
        oracle.install.db.config.starterdb.installExampleSchemas= \\
        oracle.install.db.config.starterdb.password.ALL= \\
        oracle.install.db.config.starterdb.password.SYS= \\
        oracle.install.db.config.starterdb.password.SYSTEM= \\
        oracle.install.db.config.starterdb.password.DBSNMP= \\
        oracle.install.db.config.starterdb.password.PDBADMIN= \\
        oracle.install.db.config.starterdb.managementOption= \\
        oracle.install.db.config.starterdb.omsHost= \\
        oracle.install.db.config.starterdb.omsPort= \\
        oracle.install.db.config.starterdb.emAdminUser= \\
        oracle.install.db.config.starterdb.emAdminPassword= \\
        oracle.install.db.config.starterdb.enableRecovery= \\
        oracle.install.db.config.starterdb.storageType= \\
        oracle.install.db.config.starterdb.fileSystemStorage.dataLocation= \\
        oracle.install.db.config.starterdb.fileSystemStorage.recoveryLocation= \\
        oracle.install.db.config.asm.diskGroup= \\
        oracle.install.db.config.asm.ASMSNMPPassword= \\
        MYORACLESUPPORT_USERNAME= \\
        MYORACLESUPPORT_PASSWORD= \\
        SECURITY_UPDATES_VIA_MYORACLESUPPORT= \\
        DECLINE_SECURITY_UPDATES=true \\
        PROXY_HOST= \\
        PROXY_PORT= \\
        PROXY_USER= \\
        PROXY_PWD= \\
        COLLECTOR_SUPPORTHUB_URL= \\
        "`)]),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_ORACLE_DBCA_OPTION"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},[n(`"\\
        -nodelist `),s("span",{class:"token variable"},"$V_RAC_INSTANCE_CLUSTER_NODES"),n(` \\
        -gdbName `),s("span",{class:"token variable"},"$V_RAC_ORACLE_UNQNAME"),n(` \\
        -sid `),s("span",{class:"token variable"},"$V_RAC_ORACLE_UNQNAME"),n(` \\
        -characterSet `),s("span",{class:"token variable"},"$V_RAC_ORACLE_CHARSET"),n(` \\
        -sysPassword `),s("span",{class:"token variable"},"$V_RAC_ORACLE_SYS_PASSWORD"),n(` \\
        -systemPassword `),s("span",{class:"token variable"},"$V_RAC_ORACLE_SYSTEM_PASSWORD"),n(` \\
        -asmsnmpPassword `),s("span",{class:"token variable"},"$V_RAC_ORACLE_MONITOR_PASSWORD"),n(` \\
        -createAsContainerDatabase true \\
        -numberOfPDBs 1 \\
        -pdbName `),s("span",{class:"token variable"},"$V_RAC_ORACLE_PDB_NAME"),n(` \\
        -pdbAdminPassword `),s("span",{class:"token variable"},"$V_RAC_ORACLE_PDB_ADMIN_PASSWORD"),n(` \\
        -databaseType MULTIPURPOSE \\
        -memoryMgmtType AUTO_SGA \\
        -totalMemory `),s("span",{class:"token variable"},"$V_RAC_ORACLE_TOTAL_MEMORY"),n(` \\
        -storageType ASM \\
        -diskGroupName `),s("span",{class:"token variable"},"$V_RAC_ORACLE_DATA_DIR"),n(` \\
        -recoveryGroupName `),s("span",{class:"token variable"},"$V_RAC_ORACLE_RECOVERY_AREA_DIR"),n(` \\
        -datafileDestination `),s("span",{class:"token variable"},"$V_RAC_ORACLE_DATA_DIR"),n(` \\
        -recoveryAreaDestination +`),s("span",{class:"token variable"},"$V_RAC_ORACLE_RECOVERY_AREA_DIR"),n(` \\
        -redoLogFileSize `),s("span",{class:"token variable"},"$V_RAC_ORACLE_REDOLOG_SIZE"),n(` \\
        -useLocalUndoForPDBs true \\
        -databaseConfigType RAC \\
        -emConfiguration NONE \\
        -ignorePreReqs \\
        "`)]),n(`

        `),s("span",{class:"token function"},"cat"),n(),s("span",{class:"token operator"},">"),s("span",{class:"token variable"},"$V_RAC_ORACLE_DBCA_RESPONSE_FILE"),n(),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOF
        responseFileVersion=/oracle/assistants/rspfmt_dbca_response_schema_v12.2.0
        gdbName=`),s("span",{class:"token variable"},"$V_RAC_ORACLE_UNQNAME"),n(`
        sid=`),s("span",{class:"token variable"},"$V_RAC_ORACLE_UNQNAME"),n(`
        databaseConfigType=RAC
        RACOneNodeServiceName=
        policyManaged=false
        createServerPool=false
        serverPoolName=
        cardinality=
        force=
        pqPoolName=
        pqCardinality=
        createAsContainerDatabase=true
        numberOfPDBs=1
        pdbName=`),s("span",{class:"token variable"},"$V_RAC_ORACLE_PDB_NAME"),n(`
        useLocalUndoForPDBs=true
        pdbAdminPassword=`),s("span",{class:"token variable"},"$V_RAC_ORACLE_PDB_ADMIN_PASSWORD"),n(`
        nodelist=`),s("span",{class:"token variable"},"$V_RAC_INSTANCE_CLUSTER_NODES"),n(`
        templateName=
        sysPassword=`),s("span",{class:"token variable"},"$V_RAC_ORACLE_SYS_PASSWORD"),n(`
        systemPassword=`),s("span",{class:"token variable"},"$V_RAC_ORACLE_SYSTEM_PASSWORD"),n(`
        oracleHomeUserPassword=
        emConfiguration=
        emExpressPort=
        runCVUChecks=
        dbsnmpPassword=`),s("span",{class:"token variable"},"$V_RAC_ASM_MONITOR_PASSWORD"),n(`
        omsHost=
        omsPort=
        emUser=
        emPassword=
        dvConfiguration=
        dvUserName=
        dvUserPassword=
        dvAccountManagerName=
        dvAccountManagerPassword=
        olsConfiguration=
        datafileJarLocation=
        datafileDestination=`),s("span",{class:"token variable"},"$V_RAC_ORACLE_DATA_DIR"),n(`
        recoveryAreaDestination=`),s("span",{class:"token variable"},"$V_RAC_ORACLE_RECOVERY_AREA_DIR"),n(`
        storageType=ASM
        diskGroupName=`),s("span",{class:"token variable"},"$V_RAC_ORACLE_DATA_DIR"),n(`
        asmsnmpPassword=
        recoveryGroupName=`),s("span",{class:"token variable"},"$V_RAC_ORACLE_RECOVERY_AREA_DIR"),n(`
        characterSet=`),s("span",{class:"token variable"},"$V_RAC_ORACLE_CHARSET"),n(`
        nationalCharacterSet=
        registerWithDirService=
        dirServiceUserName=
        dirServicePassword=
        walletPassword=
        listeners=
        variablesFile=
        variables=
        initParams=
        sampleSchema=
        memoryPercentage=66
        databaseType=MULTIPURPOSE
        automaticMemoryManagement=
        totalMemory=`),s("span",{class:"token variable"},"$V_RAC_ORACLE_TOTAL_MEMORY"),n(`
EOF`)]),n(`
    `),s("span",{class:"token keyword"},"elif"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},"$V_RAC_ORACLE_PRIMARY_VERSION"),n(),s("span",{class:"token parameter variable"},"-eq"),n(),s("span",{class:"token number"},"18"),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"then"),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_ASM_DISKGROUP_ASM_COMPATIBLE"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"18.0"'),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_ASM_DISKGROUP_RDBMMS_COMPATIBLE"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"18.0"'),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_GRID_INSTALL_OPTION"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},[n(`"\\
        oracle.install.responseFileVersion=/oracle/install/rspfmt_crsinstall_response_schema_v18.0.0 \\
        INVENTORY_LOCATION=`),s("span",{class:"token variable"},"$V_RAC_ORACLE_ORA_INVENTORY"),n(` \\
        oracle.install.option=CRS_CONFIG \\
        ORACLE_BASE=`),s("span",{class:"token variable"},"$V_RAC_GRID_ORACLE_BASE"),n(` \\
        ORACLE_HOME=`),s("span",{class:"token variable"},"$V_RAC_GRID_ORACLE_HOME"),n(` \\
        oracle.install.asm.OSDBA=asmdba \\
        oracle.install.asm.OSOPER=asmoper \\
        oracle.install.asm.OSASM=asmadmin \\
        oracle.install.crs.config.scanType= \\
        oracle.install.crs.config.SCANClientDataFile= \\
        oracle.install.crs.config.gpnp.scanName=`),s("span",{class:"token variable"},"$V_RAC_CRS_SCANNAME"),n(` \\
        oracle.install.crs.config.gpnp.scanPort=`),s("span",{class:"token variable"},"$V_RAC_CRS_SCANPORT"),n(` \\
        oracle.install.crs.config.ClusterConfiguration=STANDALONE \\
        oracle.install.crs.config.configureAsExtendedCluster= \\
        oracle.install.crs.config.memberClusterManifestFile= \\
        oracle.install.crs.config.clusterName=`),s("span",{class:"token variable"},"$V_RAC_CRS_CLUSTER_NAME"),n(` \\
        oracle.install.crs.config.gpnp.configureGNS= \\
        oracle.install.crs.config.autoConfigureClusterNodeVIP=false \\
        oracle.install.crs.config.gpnp.gnsOption= \\
        oracle.install.crs.config.gpnp.gnsClientDataFile= \\
        oracle.install.crs.config.gpnp.gnsSubDomain= \\
        oracle.install.crs.config.gpnp.gnsVIPAddress= \\
        oracle.install.crs.config.sites= \\
        oracle.install.crs.config.clusterNodes=`),s("span",{class:"token variable"},"$V_RAC_CRS_CLUSTERNODES"),n(` \\
        oracle.install.crs.config.networkInterfaceList=`),s("span",{class:"token variable"},"$V_RAC_CRS_NETWORKINTERFACES"),n(` \\
        oracle.install.asm.configureGIMRDataDG= \\
        oracle.install.crs.config.storageOption= \\
        oracle.install.crs.config.useIPMI= \\
        oracle.install.crs.config.ipmi.bmcUsername= \\
        oracle.install.crs.config.ipmi.bmcPassword= \\
        oracle.install.asm.storageOption=ASM \\
        oracle.install.asmOnNAS.ocrLocation= \\
        oracle.install.asmOnNAS.configureGIMRDataDG= \\
        oracle.install.asmOnNAS.gimrLocation= \\
        oracle.install.asm.SYSASMPassword=`),s("span",{class:"token variable"},"$V_RAC_ASM_SYSASM_PASSWORD"),n(` \\
        oracle.install.asm.diskGroup.name=`),s("span",{class:"token variable"},"$V_RAC_ASM_DISKGROUP_NAME"),n(` \\
        oracle.install.asm.diskGroup.redundancy=`),s("span",{class:"token variable"},"$V_RAC_ASM_DISKGROUP_REDUNDANCY"),n(` \\
        oracle.install.asm.diskGroup.AUSize=1 \\
        oracle.install.asm.diskGroup.FailureGroups= \\
        oracle.install.asm.diskGroup.disksWithFailureGroupNames= \\
        oracle.install.asm.diskGroup.disks=`),s("span",{class:"token variable"},"$V_RAC_ASM_DISKGROUP_DISKS"),n(` \\
        oracle.install.asm.diskGroup.quorumFailureGroupNames= \\
        oracle.install.asm.diskGroup.diskDiscoveryString=`),s("span",{class:"token variable"},"$V_RAC_ASM_DISKGROUP_DISKDISCOVERY"),n(` \\
        oracle.install.asm.monitorPassword=`),s("span",{class:"token variable"},"$V_RAC_ASM_MONITOR_PASSWORD"),n(` \\
        oracle.install.asm.gimrDG.name= \\
        oracle.install.asm.gimrDG.redundancy= \\
        oracle.install.asm.gimrDG.AUSize= \\
        oracle.install.asm.gimrDG.FailureGroups= \\
        oracle.install.asm.gimrDG.disksWithFailureGroupNames= \\
        oracle.install.asm.gimrDG.disks= \\
        oracle.install.asm.gimrDG.quorumFailureGroupNames= \\
        oracle.install.asm.configureAFD= \\
        oracle.install.crs.configureRHPS= \\
        oracle.install.crs.config.ignoreDownNodes= \\
        oracle.install.config.managementOption= \\
        oracle.install.config.omsHost= \\
        oracle.install.config.omsPort= \\
        oracle.install.config.emAdminUser= \\
        oracle.install.config.emAdminPassword= \\
        oracle.install.crs.rootconfig.executeRootScript= \\
        oracle.install.crs.rootconfig.configMethod= \\
        oracle.install.crs.rootconfig.sudoPath= \\
        oracle.install.crs.rootconfig.sudoUserName= \\
        oracle.install.crs.config.batchinfo= \\
        oracle.install.crs.app.applicationAddress= \\
        oracle.install.crs.deleteNode.nodes= \\
        "`)]),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_ORACLE_INSTALL_OPTION"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},[n(`"\\
        oracle.install.responseFileVersion=/oracle/install/rspfmt_dbinstall_response_schema_v18.0.0 \\
        oracle.install.option=INSTALL_DB_SWONLY \\
        UNIX_GROUP_NAME=oinstall \\
        INVENTORY_LOCATION=`),s("span",{class:"token variable"},"$V_RAC_ORACLE_ORA_INVENTORY"),n(` \\
        ORACLE_HOME=`),s("span",{class:"token variable"},"$V_RAC_ORACLE_HOME"),n(` \\
        ORACLE_BASE=`),s("span",{class:"token variable"},"$V_RAC_ORACLE_BASE"),n(` \\
        oracle.install.db.InstallEdition=EE \\
        oracle.install.db.OSDBA_GROUP=dba \\
        oracle.install.db.OSOPER_GROUP=oper \\
        oracle.install.db.OSBACKUPDBA_GROUP=backupdba \\
        oracle.install.db.OSDGDBA_GROUP=dgdba \\
        oracle.install.db.OSKMDBA_GROUP=kmdba \\
        oracle.install.db.OSRACDBA_GROUP=racdba \\
        oracle.install.db.CLUSTER_NODES=`),s("span",{class:"token variable"},"$V_RAC_INSTANCE_CLUSTER_NODES"),n(` \\
        oracle.install.db.config.starterdb.type= \\
        oracle.install.db.config.starterdb.globalDBName= \\
        oracle.install.db.config.starterdb.SID= \\
        oracle.install.db.ConfigureAsContainerDB= \\
        oracle.install.db.config.PDBName= \\
        oracle.install.db.config.starterdb.characterSet= \\
        oracle.install.db.config.starterdb.memoryOption= \\
        oracle.install.db.config.starterdb.memoryLimit= \\
        oracle.install.db.config.starterdb.installExampleSchemas= \\
        oracle.install.db.config.starterdb.password.ALL= \\
        oracle.install.db.config.starterdb.password.SYS= \\
        oracle.install.db.config.starterdb.password.SYSTEM= \\
        oracle.install.db.config.starterdb.password.DBSNMP= \\
        oracle.install.db.config.starterdb.password.PDBADMIN= \\
        oracle.install.db.config.starterdb.managementOption= \\
        oracle.install.db.config.starterdb.omsHost= \\
        oracle.install.db.config.starterdb.omsPort= \\
        oracle.install.db.config.starterdb.emAdminUser= \\
        oracle.install.db.config.starterdb.emAdminPassword= \\
        oracle.install.db.config.starterdb.enableRecovery= \\
        oracle.install.db.config.starterdb.storageType= \\
        oracle.install.db.config.starterdb.fileSystemStorage.dataLocation= \\
        oracle.install.db.config.starterdb.fileSystemStorage.recoveryLocation= \\
        oracle.install.db.config.asm.diskGroup= \\
        oracle.install.db.config.asm.ASMSNMPPassword= \\
        "`)]),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_ORACLE_DBCA_OPTION"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},[n(`"\\
        -nodelist `),s("span",{class:"token variable"},"$V_RAC_INSTANCE_CLUSTER_NODES"),n(` \\
        -gdbName `),s("span",{class:"token variable"},"$V_RAC_ORACLE_UNQNAME"),n(` \\
        -sid `),s("span",{class:"token variable"},"$V_RAC_ORACLE_UNQNAME"),n(` \\
        -characterSet `),s("span",{class:"token variable"},"$V_RAC_ORACLE_CHARSET"),n(` \\
        -sysPassword `),s("span",{class:"token variable"},"$V_RAC_ORACLE_SYS_PASSWORD"),n(` \\
        -systemPassword `),s("span",{class:"token variable"},"$V_RAC_ORACLE_SYSTEM_PASSWORD"),n(` \\
        -asmsnmpPassword `),s("span",{class:"token variable"},"$V_RAC_ORACLE_MONITOR_PASSWORD"),n(` \\
        -createAsContainerDatabase true \\
        -numberOfPDBs 1 \\
        -pdbName `),s("span",{class:"token variable"},"$V_RAC_ORACLE_PDB_NAME"),n(` \\
        -pdbAdminPassword `),s("span",{class:"token variable"},"$V_RAC_ORACLE_PDB_ADMIN_PASSWORD"),n(` \\
        -databaseType MULTIPURPOSE \\
        -memoryMgmtType AUTO_SGA \\
        -totalMemory `),s("span",{class:"token variable"},"$V_RAC_ORACLE_TOTAL_MEMORY"),n(` \\
        -storageType ASM \\
        -diskGroupName `),s("span",{class:"token variable"},"$V_RAC_ORACLE_DATA_DIR"),n(` \\
        -recoveryGroupName `),s("span",{class:"token variable"},"$V_RAC_ORACLE_RECOVERY_AREA_DIR"),n(` \\
        -datafileDestination `),s("span",{class:"token variable"},"$V_RAC_ORACLE_DATA_DIR"),n(` \\
        -recoveryAreaDestination +`),s("span",{class:"token variable"},"$V_RAC_ORACLE_RECOVERY_AREA_DIR"),n(` \\
        -redoLogFileSize `),s("span",{class:"token variable"},"$V_RAC_ORACLE_REDOLOG_SIZE"),n(` \\
        -useLocalUndoForPDBs true \\
        -databaseConfigType RAC \\
        -emConfiguration NONE \\
        -ignorePreReqs \\
        "`)]),n(`
        `),s("span",{class:"token function"},"cat"),n(),s("span",{class:"token operator"},">"),s("span",{class:"token variable"},"$V_RAC_ORACLE_DBCA_RESPONSE_FILE"),n(),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOF
        responseFileVersion=/oracle/assistants/rspfmt_dbca_response_schema_v12.2.0
        gdbName=`),s("span",{class:"token variable"},"$V_RAC_ORACLE_UNQNAME"),n(`
        sid=`),s("span",{class:"token variable"},"$V_RAC_ORACLE_UNQNAME"),n(`
        databaseConfigType=RAC
        RACOneNodeServiceName=
        policyManaged=false
        createServerPool=false
        serverPoolName=
        cardinality=
        force=
        pqPoolName=
        pqCardinality=
        createAsContainerDatabase=true
        numberOfPDBs=1
        pdbName=`),s("span",{class:"token variable"},"$V_RAC_ORACLE_PDB_NAME"),n(`
        useLocalUndoForPDBs=true
        pdbAdminPassword=`),s("span",{class:"token variable"},"$V_RAC_ORACLE_PDB_ADMIN_PASSWORD"),n(`
        nodelist=`),s("span",{class:"token variable"},"$V_RAC_INSTANCE_CLUSTER_NODES"),n(`
        templateName=
        sysPassword=`),s("span",{class:"token variable"},"$V_RAC_ORACLE_SYS_PASSWORD"),n(`
        systemPassword= `),s("span",{class:"token variable"},"$V_RAC_ORACLE_SYSTEM_PASSWORD"),n(`
        oracleHomeUserPassword=
        emConfiguration=
        emExpressPort=5500
        runCVUChecks=
        dbsnmpPassword=`),s("span",{class:"token variable"},"$V_RAC_ASM_MONITOR_PASSWORD"),n(`
        omsHost=
        omsPort=
        emUser=
        emPassword=
        dvConfiguration=
        dvUserName=
        dvUserPassword=
        dvAccountManagerName=
        dvAccountManagerPassword=
        olsConfiguration=
        datafileJarLocation=
        datafileDestination=`),s("span",{class:"token variable"},"$V_RAC_ORACLE_DATA_DIR"),n(`
        recoveryAreaDestination=`),s("span",{class:"token variable"},"$V_RAC_ORACLE_RECOVERY_AREA_DIR"),n(`
        storageType=ASM
        diskGroupName=`),s("span",{class:"token variable"},"$V_RAC_ORACLE_DATA_DIR"),n(`
        asmsnmpPassword=
        recoveryGroupName=`),s("span",{class:"token variable"},"$V_RAC_ORACLE_RECOVERY_AREA_DIR"),n(`
        characterSet=`),s("span",{class:"token variable"},"$V_RAC_ORACLE_CHARSET"),n(`
        nationalCharacterSet=
        registerWithDirService=
        dirServiceUserName=
        dirServicePassword=
        walletPassword=
        listeners=
        variablesFile=
        variables=
        initParams=
        sampleSchema=
        memoryPercentage=
        databaseType=
        automaticMemoryManagement=
        totalMemory=`),s("span",{class:"token variable"},"$V_RAC_ORACLE_TOTAL_MEMORY"),n(`
EOF`)]),n(`
    `),s("span",{class:"token keyword"},"elif"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},"$V_RAC_ORACLE_PRIMARY_VERSION"),n(),s("span",{class:"token parameter variable"},"-eq"),n(),s("span",{class:"token number"},"19"),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"then"),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_ASM_DISKGROUP_ASM_COMPATIBLE"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"19.0"'),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_ASM_DISKGROUP_RDBMMS_COMPATIBLE"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"19.0"'),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_GRID_INSTALL_OPTION"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},[n(`"\\
        oracle.install.responseFileVersion=/oracle/install/rspfmt_crsinstall_response_schema_v19.0.0 \\
        INVENTORY_LOCATION=`),s("span",{class:"token variable"},"$V_RAC_ORACLE_ORA_INVENTORY"),n(` \\
        oracle.install.option=CRS_CONFIG \\
        ORACLE_BASE=`),s("span",{class:"token variable"},"$V_RAC_GRID_ORACLE_BASE"),n(` \\
        ORACLE_HOME=`),s("span",{class:"token variable"},"$V_RAC_GRID_ORACLE_HOME"),n(` \\
        oracle.install.asm.OSDBA=asmdba \\
        oracle.install.asm.OSOPER=asmoper \\
        oracle.install.asm.OSASM=asmadmin \\
        oracle.install.crs.config.scanType= \\
        oracle.install.crs.config.SCANClientDataFile= \\
        oracle.install.crs.config.gpnp.scanName=`),s("span",{class:"token variable"},"$V_RAC_CRS_SCANNAME"),n(` \\
        oracle.install.crs.config.gpnp.scanPort=`),s("span",{class:"token variable"},"$V_RAC_CRS_SCANPORT"),n(` \\
        oracle.install.crs.config.ClusterConfiguration=STANDALONE \\
        oracle.install.crs.config.configureAsExtendedCluster= \\
        oracle.install.crs.config.memberClusterManifestFile= \\
        oracle.install.crs.config.clusterName=`),s("span",{class:"token variable"},"$V_RAC_CRS_CLUSTER_NAME"),n(` \\
        oracle.install.crs.config.gpnp.configureGNS= \\
        oracle.install.crs.config.autoConfigureClusterNodeVIP=false \\
        oracle.install.crs.config.gpnp.gnsOption= \\
        oracle.install.crs.config.gpnp.gnsClientDataFile= \\
        oracle.install.crs.config.gpnp.gnsSubDomain= \\
        oracle.install.crs.config.gpnp.gnsVIPAddress= \\
        oracle.install.crs.config.sites= \\
        oracle.install.crs.config.clusterNodes=`),s("span",{class:"token variable"},"$V_RAC_CRS_CLUSTERNODES"),n(` \\
        oracle.install.crs.config.networkInterfaceList=`),s("span",{class:"token variable"},"$V_RAC_CRS_NETWORKINTERFACES"),n(` \\
        oracle.install.crs.configureGIMR= \\
        oracle.install.asm.configureGIMRDataDG= \\
        oracle.install.crs.config.storageOption= \\
        oracle.install.crs.config.sharedFileSystemStorage.votingDiskLocations= \\
        oracle.install.crs.config.sharedFileSystemStorage.ocrLocations= \\
        oracle.install.crs.config.useIPMI= \\
        oracle.install.crs.config.ipmi.bmcUsername= \\
        oracle.install.crs.config.ipmi.bmcPassword= \\
        oracle.install.asm.SYSASMPassword=`),s("span",{class:"token variable"},"$V_RAC_ASM_SYSASM_PASSWORD"),n(` \\
        oracle.install.asm.diskGroup.name=`),s("span",{class:"token variable"},"$V_RAC_ASM_DISKGROUP_NAME"),n(` \\
        oracle.install.asm.diskGroup.redundancy=`),s("span",{class:"token variable"},"$V_RAC_ASM_DISKGROUP_REDUNDANCY"),n(` \\
        oracle.install.asm.diskGroup.AUSize=1 \\
        oracle.install.asm.diskGroup.FailureGroups= \\
        oracle.install.asm.diskGroup.disksWithFailureGroupNames= \\
        oracle.install.asm.diskGroup.disks=`),s("span",{class:"token variable"},"$V_RAC_ASM_DISKGROUP_DISKS"),n(` \\
        oracle.install.asm.diskGroup.quorumFailureGroupNames= \\
        oracle.install.asm.diskGroup.diskDiscoveryString=`),s("span",{class:"token variable"},"$V_RAC_ASM_DISKGROUP_DISKDISCOVERY"),n(` \\
        oracle.install.asm.monitorPassword=`),s("span",{class:"token variable"},"$V_RAC_ASM_MONITOR_PASSWORD"),n(` \\
        oracle.install.asm.gimrDG.name= \\
        oracle.install.asm.gimrDG.redundancy= \\
        oracle.install.asm.gimrDG.AUSize= \\
        oracle.install.asm.gimrDG.FailureGroups= \\
        oracle.install.asm.gimrDG.disksWithFailureGroupNames= \\
        oracle.install.asm.gimrDG.disks= \\
        oracle.install.asm.gimrDG.quorumFailureGroupNames= \\
        oracle.install.asm.configureAFD= \\
        oracle.install.crs.configureRHPS= \\
        oracle.install.crs.config.ignoreDownNodes= \\
        oracle.install.config.managementOption= \\
        oracle.install.config.omsHost= \\
        oracle.install.config.omsPort= \\
        oracle.install.config.emAdminUser= \\
        oracle.install.config.emAdminPassword= \\
        oracle.install.crs.rootconfig.executeRootScript= \\
        oracle.install.crs.rootconfig.configMethod= \\
        oracle.install.crs.rootconfig.sudoPath= \\
        oracle.install.crs.rootconfig.sudoUserName= \\
        oracle.install.crs.config.batchinfo= \\
        oracle.install.crs.app.applicationAddress= \\
        oracle.install.crs.deleteNode.nodes= \\
        "`)]),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_ORACLE_INSTALL_OPTION"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},[n(`"\\
        oracle.install.responseFileVersion=/oracle/install/rspfmt_dbinstall_response_schema_v19.0.0 \\
        oracle.install.option=INSTALL_DB_SWONLY \\
        UNIX_GROUP_NAME=oinstall \\
        INVENTORY_LOCATION=`),s("span",{class:"token variable"},"$V_RAC_ORACLE_ORA_INVENTORY"),n(` \\
        ORACLE_HOME=`),s("span",{class:"token variable"},"$V_RAC_ORACLE_HOME"),n(` \\
        ORACLE_BASE=`),s("span",{class:"token variable"},"$V_RAC_ORACLE_BASE"),n(` \\
        oracle.install.db.InstallEdition=EE \\
        oracle.install.db.OSDBA_GROUP=dba \\
        oracle.install.db.OSOPER_GROUP=oper \\
        oracle.install.db.OSBACKUPDBA_GROUP=backupdba \\
        oracle.install.db.OSDGDBA_GROUP=dgdba \\
        oracle.install.db.OSKMDBA_GROUP=kmdba \\
        oracle.install.db.OSRACDBA_GROUP=racdba \\
        oracle.install.db.rootconfig.executeRootScript= \\
        oracle.install.db.rootconfig.configMethod= \\
        oracle.install.db.rootconfig.sudoPath= \\
        oracle.install.db.rootconfig.sudoUserName= \\
        oracle.install.db.CLUSTER_NODES=`),s("span",{class:"token variable"},"$V_RAC_INSTANCE_CLUSTER_NODES"),n(` \\
        oracle.install.db.config.starterdb.type= \\
        oracle.install.db.config.starterdb.globalDBName= \\
        oracle.install.db.config.starterdb.SID= \\
        oracle.install.db.ConfigureAsContainerDB= \\
        oracle.install.db.config.PDBName= \\
        oracle.install.db.config.starterdb.characterSet= \\
        oracle.install.db.config.starterdb.memoryOption= \\
        oracle.install.db.config.starterdb.memoryLimit= \\
        oracle.install.db.config.starterdb.installExampleSchemas= \\
        oracle.install.db.config.starterdb.password.ALL= \\
        oracle.install.db.config.starterdb.password.SYS= \\
        oracle.install.db.config.starterdb.password.SYSTEM= \\
        oracle.install.db.config.starterdb.password.DBSNMP= \\
        oracle.install.db.config.starterdb.password.PDBADMIN= \\
        oracle.install.db.config.starterdb.managementOption= \\
        oracle.install.db.config.starterdb.omsHost= \\
        oracle.install.db.config.starterdb.omsPort= \\
        oracle.install.db.config.starterdb.emAdminUser= \\
        oracle.install.db.config.starterdb.emAdminPassword= \\
        oracle.install.db.config.starterdb.enableRecovery= \\
        oracle.install.db.config.starterdb.storageType= \\
        oracle.install.db.config.starterdb.fileSystemStorage.dataLocation= \\
        oracle.install.db.config.starterdb.fileSystemStorage.recoveryLocation= \\
        oracle.install.db.config.asm.diskGroup= \\
        oracle.install.db.config.asm.ASMSNMPPassword= \\
        "`)]),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_ORACLE_DBCA_OPTION"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},[n(`"\\
        -nodelist `),s("span",{class:"token variable"},"$V_RAC_INSTANCE_CLUSTER_NODES"),n(` \\
        -gdbName `),s("span",{class:"token variable"},"$V_RAC_ORACLE_UNQNAME"),n(` \\
        -sid `),s("span",{class:"token variable"},"$V_RAC_ORACLE_UNQNAME"),n(` \\
        -characterSet `),s("span",{class:"token variable"},"$V_RAC_ORACLE_CHARSET"),n(` \\
        -sysPassword `),s("span",{class:"token variable"},"$V_RAC_ORACLE_SYS_PASSWORD"),n(` \\
        -systemPassword `),s("span",{class:"token variable"},"$V_RAC_ORACLE_SYSTEM_PASSWORD"),n(` \\
        -asmsnmpPassword `),s("span",{class:"token variable"},"$V_RAC_ORACLE_MONITOR_PASSWORD"),n(` \\
        -createAsContainerDatabase true \\
        -numberOfPDBs 1 \\
        -pdbName `),s("span",{class:"token variable"},"$V_RAC_ORACLE_PDB_NAME"),n(` \\
        -pdbAdminPassword `),s("span",{class:"token variable"},"$V_RAC_ORACLE_PDB_ADMIN_PASSWORD"),n(` \\
        -databaseType MULTIPURPOSE \\
        -memoryMgmtType AUTO_SGA \\
        -totalMemory `),s("span",{class:"token variable"},"$V_RAC_ORACLE_TOTAL_MEMORY"),n(` \\
        -storageType ASM \\
        -diskGroupName +`),s("span",{class:"token variable"},"$V_RAC_ORACLE_DATA_DIR"),n(` \\
        -recoveryGroupName +`),s("span",{class:"token variable"},"$V_RAC_ORACLE_RECOVERY_AREA_DIR"),n(` \\
        -datafileDestination +`),s("span",{class:"token variable"},"$V_RAC_ORACLE_DATA_DIR"),n(` \\
        -recoveryAreaDestination +`),s("span",{class:"token variable"},"$V_RAC_ORACLE_RECOVERY_AREA_DIR"),n(` \\
        -redoLogFileSize `),s("span",{class:"token variable"},"$V_RAC_ORACLE_REDOLOG_SIZE"),n(` \\
        -useLocalUndoForPDBs true \\
        -databaseConfigType RAC \\
        -emConfiguration NONE \\
        -ignorePreReqs \\
        "`)]),n(`

        `),s("span",{class:"token function"},"cat"),n(),s("span",{class:"token operator"},">"),s("span",{class:"token variable"},"$V_RAC_ORACLE_DBCA_RESPONSE_FILE"),n(),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},`EOF
        responseFileVersion=/oracle/assistants/rspfmt_dbca_response_schema_v19.0.0
        gdbName=
        sid=
        databaseConfigType=
        RACOneNodeServiceName=
        policyManaged=
        createServerPool=
        serverPoolName=
        cardinality=
        force=
        pqPoolName=
        pqCardinality=
        createAsContainerDatabase=
        numberOfPDBs=
        pdbName=
        useLocalUndoForPDBs=
        pdbAdminPassword=
        nodelist=
        templateName=
        sysPassword=
        systemPassword= 
        oracleHomeUserPassword=
        emConfiguration=
        emExpressPort=5500
        runCVUChecks=
        dbsnmpPassword=
        omsHost=
        omsPort=
        emUser=
        emPassword=
        dvConfiguration=
        dvUserName=
        dvUserPassword=
        dvAccountManagerName=
        dvAccountManagerPassword=
        olsConfiguration=
        datafileJarLocation=
        datafileDestination=
        recoveryAreaDestination=
        storageType=
        diskGroupName=
        asmsnmpPassword=
        recoveryGroupName=
        characterSet=
        nationalCharacterSet=
        registerWithDirService=
        dirServiceUserName=
        dirServicePassword=
        walletPassword=
        listeners=
        variablesFile=
        variables=
        initParams=
        sampleSchema=
        memoryPercentage=
        databaseType=
        automaticMemoryManagement=
        totalMemory=
EOF`),n(`

    `),s("span",{class:"token keyword"},"elif"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},"$V_RAC_ORACLE_PRIMARY_VERSION"),n(),s("span",{class:"token parameter variable"},"-eq"),n(),s("span",{class:"token number"},"21"),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"then"),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_ASM_DISKGROUP_ASM_COMPATIBLE"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"21.0"'),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_ASM_DISKGROUP_RDBMMS_COMPATIBLE"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"21.0"'),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_GRID_INSTALL_OPTION"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},[n(`"\\
        oracle.install.responseFileVersion=/oracle/install/rspfmt_crsinstall_response_schema_v21.0.0 \\
        INVENTORY_LOCATION=`),s("span",{class:"token variable"},"$V_RAC_ORACLE_ORA_INVENTORY"),n(` \\
        oracle.install.option=CRS_CONFIG \\
        ORACLE_BASE=`),s("span",{class:"token variable"},"$V_RAC_GRID_ORACLE_BASE"),n(` \\
        ORACLE_HOME=`),s("span",{class:"token variable"},"$V_RAC_GRID_ORACLE_HOME"),n(` \\
        oracle.install.asm.OSDBA=asmdba \\
        oracle.install.asm.OSOPER=asmoper \\
        oracle.install.asm.OSASM=asmadmin \\
        oracle.install.crs.config.scanType= \\
        oracle.install.crs.config.SCANClientDataFile= \\
        oracle.install.crs.config.gpnp.scanName=`),s("span",{class:"token variable"},"$V_RAC_CRS_SCANNAME"),n(` \\
        oracle.install.crs.config.gpnp.scanPort=`),s("span",{class:"token variable"},"$V_RAC_CRS_SCANPORT"),n(` \\
        oracle.install.crs.config.ClusterConfiguration=STANDALONE \\
        oracle.install.crs.config.configureAsExtendedCluster= \\
        oracle.install.crs.config.clusterName=`),s("span",{class:"token variable"},"$V_RAC_CRS_CLUSTER_NAME"),n(` \\
        oracle.install.crs.config.gpnp.configureGNS= \\
        oracle.install.crs.config.autoConfigureClusterNodeVIP=false \\
        oracle.install.crs.config.gpnp.gnsOption= \\
        oracle.install.crs.config.gpnp.gnsClientDataFile= \\
        oracle.install.crs.config.gpnp.gnsSubDomain= \\
        oracle.install.crs.config.gpnp.gnsVIPAddress= \\
        oracle.install.crs.config.sites= \\
        oracle.install.crs.config.clusterNodes=`),s("span",{class:"token variable"},"$V_RAC_CRS_CLUSTERNODES"),n(` \\
        oracle.install.crs.config.networkInterfaceList=`),s("span",{class:"token variable"},"$V_RAC_CRS_NETWORKINTERFACES"),n(` \\
        oracle.install.crs.config.storageOption= \\
        oracle.install.crs.exascale.vault.name= \\
        oracle.install.crs.config.sharedFileSystemStorage.votingDiskLocations= \\
        oracle.install.crs.config.sharedFileSystemStorage.ocrLocations= \\
        oracle.install.asm.ClientDataFile= \\
        oracle.install.crs.config.useIPMI= \\
        oracle.install.crs.config.ipmi.bmcBinpath= \\
        oracle.install.crs.config.ipmi.bmcUsername= \\
        oracle.install.crs.config.ipmi.bmcPassword= \\
        oracle.install.asm.SYSASMPassword=`),s("span",{class:"token variable"},"$V_RAC_ASM_SYSASM_PASSWORD"),n(` \\
        oracle.install.asm.diskGroup.name=`),s("span",{class:"token variable"},"$V_RAC_ASM_DISKGROUP_NAME"),n(` \\
        oracle.install.asm.diskGroup.redundancy=`),s("span",{class:"token variable"},"$V_RAC_ASM_DISKGROUP_REDUNDANCY"),n(` \\
        oracle.install.asm.diskGroup.AUSize=1 \\
        oracle.install.asm.diskGroup.FailureGroups= \\
        oracle.install.asm.diskGroup.disksWithFailureGroupNames= \\
        oracle.install.asm.diskGroup.disks=`),s("span",{class:"token variable"},"$V_RAC_ASM_DISKGROUP_DISKS"),n(` \\
        oracle.install.asm.diskGroup.quorumFailureGroupNames= \\
        oracle.install.asm.diskGroup.diskDiscoveryString=`),s("span",{class:"token variable"},"$V_RAC_ASM_DISKGROUP_DISKDISCOVERY"),n(` \\
        oracle.install.asm.monitorPassword=`),s("span",{class:"token variable"},"$V_RAC_ASM_MONITOR_PASSWORD"),n(` \\
        oracle.install.asm.configureAFD= \\
        oracle.install.crs.configureRHPS= \\
        oracle.install.crs.config.ignoreDownNodes= \\
        oracle.install.crs.configureGIMR= \\
        oracle.install.crs.configureRemoteGIMR= \\
        oracle.install.crs.RemoteGIMRCredFile= \\
        oracle.install.asm.configureGIMRDataDG= \\
        oracle.install.asm.gimrDG.name= \\
        oracle.install.asm.gimrDG.redundancy= \\
        oracle.install.asm.gimrDG.AUSize= \\
        oracle.install.asm.gimrDG.FailureGroups= \\
        oracle.install.asm.gimrDG.disksWithFailureGroupNames= \\
        oracle.install.asm.gimrDG.disks= \\
        oracle.install.asm.gimrDG.quorumFailureGroupNames= \\
        oracle.install.config.managementOption= \\
        oracle.install.config.omsHost= \\
        oracle.install.config.omsPort= \\
        oracle.install.config.emAdminUser= \\
        oracle.install.config.emAdminPassword= \\
        oracle.install.crs.rootconfig.executeRootScript= \\
        oracle.install.crs.rootconfig.configMethod= \\
        oracle.install.crs.rootconfig.sudoPath= \\
        oracle.install.crs.rootconfig.sudoUserName= \\
        oracle.install.crs.config.batchinfo= \\
        oracle.install.crs.deleteNode.nodes= \\
        "`)]),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_ORACLE_INSTALL_OPTION"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},[n(`"\\
        oracle.install.responseFileVersion=/oracle/install/rspfmt_dbinstall_response_schema_v21.0.0 \\
        oracle.install.option=INSTALL_DB_SWONLY \\
        UNIX_GROUP_NAME=oinstall \\
        INVENTORY_LOCATION=`),s("span",{class:"token variable"},"$V_RAC_ORACLE_ORA_INVENTORY"),n(` \\
        ORACLE_HOME=`),s("span",{class:"token variable"},"$V_RAC_ORACLE_HOME"),n(` \\
        ORACLE_BASE=`),s("span",{class:"token variable"},"$V_RAC_ORACLE_BASE"),n(` \\
        oracle.install.db.InstallEdition=EE \\
        oracle.install.db.OSDBA_GROUP=dba \\
        oracle.install.db.OSOPER_GROUP=oper \\
        oracle.install.db.OSBACKUPDBA_GROUP=backupdba \\
        oracle.install.db.OSDGDBA_GROUP=dgdba \\
        oracle.install.db.OSKMDBA_GROUP=kmdba \\
        oracle.install.db.OSRACDBA_GROUP=racdba \\
        oracle.install.db.rootconfig.executeRootScript= \\
        oracle.install.db.rootconfig.configMethod= \\
        oracle.install.db.rootconfig.sudoPath= \\
        oracle.install.db.rootconfig.sudoUserName= \\
        oracle.install.db.CLUSTER_NODES=`),s("span",{class:"token variable"},"$V_RAC_INSTANCE_CLUSTER_NODES"),n(` \\
        oracle.install.db.config.starterdb.type= \\
        oracle.install.db.config.starterdb.globalDBName= \\
        oracle.install.db.config.starterdb.SID= \\
        oracle.install.db.config.PDBName= \\
        oracle.install.db.config.starterdb.characterSet= \\
        oracle.install.db.config.starterdb.memoryOption= \\
        oracle.install.db.config.starterdb.memoryLimit= \\
        oracle.install.db.config.starterdb.password.ALL= \\
        oracle.install.db.config.starterdb.password.SYS= \\
        oracle.install.db.config.starterdb.password.SYSTEM= \\
        oracle.install.db.config.starterdb.password.DBSNMP= \\
        oracle.install.db.config.starterdb.password.PDBADMIN= \\
        oracle.install.db.config.starterdb.managementOption= \\
        oracle.install.db.config.starterdb.omsHost= \\
        oracle.install.db.config.starterdb.omsPort= \\
        oracle.install.db.config.starterdb.emAdminUser= \\
        oracle.install.db.config.starterdb.emAdminPassword= \\
        oracle.install.db.config.starterdb.enableRecovery= \\
        oracle.install.db.config.starterdb.storageType= \\
        oracle.install.db.config.starterdb.fileSystemStorage.dataLocation= \\
        oracle.install.db.config.starterdb.fileSystemStorage.recoveryLocation= \\
        oracle.install.db.config.asm.diskGroup= \\
        oracle.install.db.config.asm.ASMSNMPPassword= \\
        "`)]),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_ORACLE_DBCA_OPTION"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},[n(`"\\
        -nodelist `),s("span",{class:"token variable"},"$V_RAC_INSTANCE_CLUSTER_NODES"),n(` \\
        -gdbName `),s("span",{class:"token variable"},"$V_RAC_ORACLE_UNQNAME"),n(` \\
        -sid `),s("span",{class:"token variable"},"$V_RAC_ORACLE_UNQNAME"),n(` \\
        -characterSet `),s("span",{class:"token variable"},"$V_RAC_ORACLE_CHARSET"),n(` \\
        -sysPassword `),s("span",{class:"token variable"},"$V_RAC_ORACLE_SYS_PASSWORD"),n(` \\
        -systemPassword `),s("span",{class:"token variable"},"$V_RAC_ORACLE_SYSTEM_PASSWORD"),n(` \\
        -asmsnmpPassword `),s("span",{class:"token variable"},"$V_RAC_ORACLE_MONITOR_PASSWORD"),n(` \\
        -createAsContainerDatabase true \\
        -numberOfPDBs 1 \\
        -pdbName `),s("span",{class:"token variable"},"$V_RAC_ORACLE_PDB_NAME"),n(` \\
        -pdbAdminPassword `),s("span",{class:"token variable"},"$V_RAC_ORACLE_PDB_ADMIN_PASSWORD"),n(` \\
        -databaseType MULTIPURPOSE \\
        -memoryMgmtType AUTO_SGA \\
        -totalMemory `),s("span",{class:"token variable"},"$V_RAC_ORACLE_TOTAL_MEMORY"),n(` \\
        -storageType ASM \\
        -diskGroupName `),s("span",{class:"token variable"},"$V_RAC_ORACLE_DATA_DIR"),n(` \\
        -recoveryGroupName `),s("span",{class:"token variable"},"$V_RAC_ORACLE_RECOVERY_AREA_DIR"),n(` \\
        -datafileDestination `),s("span",{class:"token variable"},"$V_RAC_ORACLE_DATA_DIR"),n(` \\
        -recoveryAreaDestination +`),s("span",{class:"token variable"},"$V_RAC_ORACLE_RECOVERY_AREA_DIR"),n(` \\
        -redoLogFileSize `),s("span",{class:"token variable"},"$V_RAC_ORACLE_REDOLOG_SIZE"),n(` \\
        -useLocalUndoForPDBs true \\
        -databaseConfigType RAC \\
        -emConfiguration NONE \\
        -ignorePreReqs \\
        "`)]),n(`

        `),s("span",{class:"token function"},"cat"),n(),s("span",{class:"token operator"},">"),s("span",{class:"token variable"},"$V_RAC_ORACLE_DBCA_RESPONSE_FILE"),n(),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},`EOF
        responseFileVersion=/oracle/assistants/rspfmt_dbca_response_schema_v21.0.0
        gdbName=
        sid=
        databaseConfigType=
        RACOneNodeServiceName=
        policyManaged=
        managementPolicy=
        createServerPool=
        serverPoolName=
        cardinality=
        force=
        pqPoolName=
        pqCardinality=
        createAsContainerDatabase=
        numberOfPDBs=
        pdbName=
        useLocalUndoForPDBs=
        pdbAdminPassword=
        nodelist=
        templateName=
        sysPassword=
        systemPassword= 
        oracleHomeUserPassword=
        emConfiguration=
        emExpressPort=5500
        runCVUChecks=
        dbsnmpPassword=
        omsHost=
        omsPort=
        emUser=
        emPassword=
        dvConfiguration=
        dvUserName=
        dvUserPassword=
        dvAccountManagerName=
        dvAccountManagerPassword=
        olsConfiguration=
        datafileJarLocation=
        datafileDestination=
        recoveryAreaDestination=
        storageType=
        diskGroupName=
        asmsnmpPassword=
        recoveryGroupName=
        characterSet=
        nationalCharacterSet=
        registerWithDirService=
        dirServiceUserName=
        dirServicePassword=
        walletPassword=
        listeners=
        variablesFile=
        variables=
        initParams=
        sampleSchema=
        memoryPercentage=
        databaseType=
        automaticMemoryManagement=
        totalMemory=
EOF`),n(`
    `),s("span",{class:"token keyword"},"else"),n(`
        `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Not supported version!"'),n(`
        `),s("span",{class:"token builtin class-name"},"exit"),n(),s("span",{class:"token number"},"1"),n(`
    `),s("span",{class:"token keyword"},"fi"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"DownloadOraclePackage"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token comment"},"# wget detecting"),n(`
    `),s("span",{class:"token assign-left variable"},"has_wget"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"rpm"),n(),s("span",{class:"token parameter variable"},"-qa"),n(),s("span",{class:"token operator"},"|"),n(),s("span",{class:"token function"},"grep"),n(),s("span",{class:"token function"},"wget"),s("span",{class:"token variable"},")")]),n(`
    `),s("span",{class:"token keyword"},"if"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$has_wget"),n('"')]),n(),s("span",{class:"token operator"},"="),n(),s("span",{class:"token string"},'""'),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"then"),n(`
        yum `),s("span",{class:"token function"},"install"),n(),s("span",{class:"token parameter variable"},"-y"),n(),s("span",{class:"token function"},"wget"),n(`
    `),s("span",{class:"token keyword"},"fi"),n(`

    `),s("span",{class:"token keyword"},"if"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token operator"},"!"),n(),s("span",{class:"token parameter variable"},"-d"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$V_RAC_PACKAGE_ORACLE_ALL_SOURCE"),n('"')]),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"then"),n(`
        `),s("span",{class:"token function"},"mkdir"),n(),s("span",{class:"token parameter variable"},"-p"),n(),s("span",{class:"token variable"},"$V_RAC_PACKAGE_ORACLE_ALL_SOURCE"),n(`
    `),s("span",{class:"token keyword"},"fi"),n(`

    `),s("span",{class:"token comment"},"# package download url setting, multiple urls separated by space"),n(`
    `),s("span",{class:"token keyword"},"if"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},"$V_RAC_ORACLE_PRIMARY_VERSION"),n(),s("span",{class:"token parameter variable"},"-eq"),n(),s("span",{class:"token number"},"11"),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"then"),n(`
        `),s("span",{class:"token assign-left variable"},"package_urls"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},`"ftp://10.10.12.158/pub/oracle/p13390677_112040_Linux-x86-64_1of7.zip 
        ftp://10.10.12.158/pub/oracle/p13390677_112040_Linux-x86-64_2of7.zip 
        ftp://10.10.12.158/pub/oracle/p13390677_112040_Linux-x86-64_3of7.zip
        ftp://10.10.12.158/pub/oracle/p18370031_112040_Linux-x86-64.zip"`),n(`
    `),s("span",{class:"token keyword"},"elif"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},"$V_RAC_ORACLE_PRIMARY_VERSION"),n(),s("span",{class:"token parameter variable"},"-eq"),n(),s("span",{class:"token number"},"12"),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"then"),n(`
        `),s("span",{class:"token assign-left variable"},"package_urls"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"ftp://10.10.12.158/pub/oracle/linuxx64_12201_database.zip ftp://10.10.12.158/pub/oracle/linuxx64_12201_grid_home.zip"'),n(`
    `),s("span",{class:"token keyword"},"elif"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},"$V_RAC_ORACLE_PRIMARY_VERSION"),n(),s("span",{class:"token parameter variable"},"-eq"),n(),s("span",{class:"token number"},"18"),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"then"),n(`
        `),s("span",{class:"token assign-left variable"},"package_urls"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"ftp://10.10.12.158/pub/oracle/LINUX.X64_180000_db_home.zip ftp://10.10.12.158/pub/oracle/LINUX.X64_180000_grid_home.zip"'),n(`
    `),s("span",{class:"token keyword"},"elif"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},"$V_RAC_ORACLE_PRIMARY_VERSION"),n(),s("span",{class:"token parameter variable"},"-eq"),n(),s("span",{class:"token number"},"19"),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"then"),n(`
        `),s("span",{class:"token assign-left variable"},"package_urls"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"ftp://10.10.12.158/pub/oracle/LINUX.X64_193000_db_home.zip ftp://10.10.12.158/pub/oracle/LINUX.X64_193000_grid_home.zip"'),n(`
    `),s("span",{class:"token keyword"},"elif"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},"$V_RAC_ORACLE_PRIMARY_VERSION"),n(),s("span",{class:"token parameter variable"},"-eq"),n(),s("span",{class:"token number"},"21"),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"then"),n(`
        `),s("span",{class:"token assign-left variable"},"package_urls"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"ftp://10.10.12.158/pub/oracle/LINUX.X64_213000_db_home.zip ftp://10.10.12.158/pub/oracle/LINUX.X64_213000_grid_home.zip"'),n(`
    `),s("span",{class:"token keyword"},"else"),n(`
        `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"The oracle version does not exists,contact dba to support!"'),n(`
        `),s("span",{class:"token comment"},"# exit"),n(`
    `),s("span",{class:"token keyword"},"fi"),n(`

    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Downloading oracle package ..."'),n(`
    `),s("span",{class:"token function"},"wget"),n(),s("span",{class:"token parameter variable"},"-nc"),n(),s("span",{class:"token parameter variable"},"-P"),n(),s("span",{class:"token variable"},"$V_RAC_PACKAGE_ORACLE_ALL_SOURCE"),n(),s("span",{class:"token variable"},"$package_urls"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"DownloadOracleASMLibPackage"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token comment"},"# wget detecting"),n(`
    `),s("span",{class:"token assign-left variable"},"has_wget"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"rpm"),n(),s("span",{class:"token parameter variable"},"-qa"),n(),s("span",{class:"token operator"},"|"),n(),s("span",{class:"token function"},"grep"),n(),s("span",{class:"token function"},"wget"),s("span",{class:"token variable"},")")]),n(`
    `),s("span",{class:"token keyword"},"if"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$has_wget"),n('"')]),n(),s("span",{class:"token operator"},"="),n(),s("span",{class:"token string"},'""'),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"then"),n(`
        yum `),s("span",{class:"token function"},"install"),n(),s("span",{class:"token parameter variable"},"-y"),n(),s("span",{class:"token function"},"wget"),n(`
    `),s("span",{class:"token keyword"},"fi"),n(`

    `),s("span",{class:"token keyword"},"if"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token operator"},"!"),n(),s("span",{class:"token parameter variable"},"-d"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$V_RAC_PACKAGE_ORACLE_ALL_SOURCE"),n('"')]),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"then"),n(`
        `),s("span",{class:"token function"},"mkdir"),n(),s("span",{class:"token parameter variable"},"-p"),n(),s("span",{class:"token variable"},"$V_RAC_PACKAGE_ORACLE_ALL_SOURCE"),n(`
    `),s("span",{class:"token keyword"},"fi"),n(`

    `),s("span",{class:"token comment"},"# asmlib for el7"),n(`
    `),s("span",{class:"token assign-left variable"},"package_urls"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"ftp://10.10.12.158/pub/oracle/oracleasm-support-2.1.11-2.el7.x86_64.rpm ftp://10.10.12.158/pub/oracle/oracleasmlib-2.0.12-1.el7.x86_64.rpm"'),n(`

    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Downloading asmlib package ..."'),n(`
    `),s("span",{class:"token function"},"wget"),n(),s("span",{class:"token parameter variable"},"-P"),n(),s("span",{class:"token variable"},"$V_RAC_PACKAGE_ORACLE_ALL_SOURCE"),n(),s("span",{class:"token variable"},"$package_urls"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"InstallDependency"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token operator"},"="),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$V_RAC_OS_PUBLIC_IP"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_OS_PUBLIC_VIP_ARR"),s("span",{class:"token operator"},"="),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$V_RAC_OS_PUBLIC_VIP"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_OS_PRIVATE_IP_ARR"),s("span",{class:"token operator"},"="),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$V_RAC_OS_PRIVATE_IP"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_OS_SCAN_IP_ARR"),s("span",{class:"token operator"},"="),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$V_RAC_OS_SCAN_IP"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_INSTANCE_ORACLE_SID_ARR"),s("span",{class:"token operator"},"="),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$V_RAC_INSTANCE_ORACLE_SID"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_INSTANCE_GRID_ORACLE_SID_ARR"),s("span",{class:"token operator"},"="),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$V_RAC_INSTANCE_GRID_ORACLE_SID"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_OS_HOSTNAME_ARR"),s("span",{class:"token operator"},"="),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$V_RAC_OS_HOSTNAME"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_OS_ROOT_PASSWORD_ARR"),s("span",{class:"token operator"},"="),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$V_RAC_OS_ROOT_PASSWORD"),s("span",{class:"token punctuation"},")"),n(`

    `),s("span",{class:"token keyword"},"for"),n(),s("span",{class:"token for-or-select variable"},"hostip"),n(),s("span",{class:"token keyword"},"in"),n(),s("span",{class:"token variable"},[n("${"),s("span",{class:"token operator"},"!"),n("V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token punctuation"},"["),n("@"),s("span",{class:"token punctuation"},"]"),n("}")]),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"do"),n(`
        sshpass `),s("span",{class:"token parameter variable"},"-p"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},[n("${V_RAC_OS_ROOT_PASSWORD_ARR"),s("span",{class:"token punctuation"},"["),n("$hostip"),s("span",{class:"token punctuation"},"]"),n("}")]),n('"')]),n(),s("span",{class:"token function"},"ssh"),n(),s("span",{class:"token parameter variable"},"-o"),n(),s("span",{class:"token assign-left variable"},"StrictHostKeyChecking"),s("span",{class:"token operator"},"="),n("no root@"),s("span",{class:"token variable"},[n("${V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token punctuation"},"["),n("$hostip"),s("span",{class:"token punctuation"},"]"),n("}")]),n(),s("span",{class:"token function"},"bash"),n(),s("span",{class:"token operator"},"<"),n(),s("span",{class:"token operator"},"<"),s("span",{class:"token punctuation"},"("),n(`
            `),s("span",{class:"token builtin class-name"},"declare"),n(),s("span",{class:"token parameter variable"},"-p"),n(` V_RAC_OS_PUBLIC_IP_ARR V_RAC_OS_PUBLIC_VIP_ARR V_RAC_OS_PRIVATE_IP_ARR V_RAC_OS_SCAN_IP_ARR V_RAC_OS_HOSTNAME_ARR V_RAC_ORACLE_UNQNAME
            `),s("span",{class:"token function"},"cat"),n(),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},`'SSHEOF'
    echo "3.Set hosts ..."
    if [ ! -f "/etc/hosts.orabak" ];then
        cp /etc/hosts /etc/hosts.orabak
    fi
    echo "# public ip" >>/etc/hosts
    for item in \${!V_RAC_OS_PUBLIC_IP_ARR[@]}; do
        echo \${V_RAC_OS_PUBLIC_IP_ARR[item]}   \${V_RAC_OS_HOSTNAME_ARR[item]} >>/etc/hosts
    done

    echo "# public vip" >>/etc/hosts
    for item in \${!V_RAC_OS_PUBLIC_VIP_ARR[@]}; do
        echo \${V_RAC_OS_PUBLIC_VIP_ARR[item]}   \${V_RAC_OS_HOSTNAME_ARR[item]}-vip >>/etc/hosts
    done

    echo "# private ip" >>/etc/hosts
    for item in \${!V_RAC_OS_PRIVATE_IP_ARR[@]}; do
        echo \${V_RAC_OS_PRIVATE_IP_ARR[item]}   \${V_RAC_OS_HOSTNAME_ARR[item]}-priv >>/etc/hosts
    done

    echo "# scan ip" >>/etc/hosts
    for item in \${!V_RAC_OS_SCAN_IP_ARR[@]}; do
        echo \${V_RAC_OS_SCAN_IP_ARR[item]}   \${V_RAC_ORACLE_UNQNAME}-scan >>/etc/hosts
    done
SSHEOF`),n(`
        `),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token keyword"},"done"),n(`

    `),s("span",{class:"token keyword"},"for"),n(),s("span",{class:"token for-or-select variable"},"hostip"),n(),s("span",{class:"token keyword"},"in"),n(),s("span",{class:"token variable"},[n("${"),s("span",{class:"token operator"},"!"),n("V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token punctuation"},"["),n("@"),s("span",{class:"token punctuation"},"]"),n("}")]),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"do"),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_ORACLE_SID"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[n("${V_RAC_INSTANCE_ORACLE_SID_ARR"),s("span",{class:"token punctuation"},"["),n("$hostip"),s("span",{class:"token punctuation"},"]"),n("}")]),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_GRID_ORACLE_SID"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[n("${V_RAC_INSTANCE_GRID_ORACLE_SID_ARR"),s("span",{class:"token punctuation"},"["),n("$hostip"),s("span",{class:"token punctuation"},"]"),n("}")]),n(`
        sshpass `),s("span",{class:"token parameter variable"},"-p"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},[n("${V_RAC_OS_ROOT_PASSWORD_ARR"),s("span",{class:"token punctuation"},"["),n("$hostip"),s("span",{class:"token punctuation"},"]"),n("}")]),n('"')]),n(),s("span",{class:"token function"},"ssh"),n(),s("span",{class:"token parameter variable"},"-o"),n(),s("span",{class:"token assign-left variable"},"StrictHostKeyChecking"),s("span",{class:"token operator"},"="),n("no root@"),s("span",{class:"token variable"},[n("${V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token punctuation"},"["),n("$hostip"),s("span",{class:"token punctuation"},"]"),n("}")]),n(),s("span",{class:"token function"},"bash"),n(),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`SSHEOF
    echo "0.Set locale ..."
    echo LANG="en_US.UTF-8" >/etc/locale.conf
    localectl set-locale LANG="en_US.UTF-8"
    export LANG="en_US.UTF-8"

    echo "1.Disable selinux and stop firewalld ..."
    if [ ! -f "/etc/selinux/config.orabak" ];then
        cp /etc/selinux/config /etc/selinux/config.orabak
    fi
    sed -i 's/^SELINUX=enforcing/SELINUX=disabled/g' /etc/selinux/config
    setenforce 0
    systemctl stop firewalld
    systemctl disable firewalld

    echo "2.Set hostname ..."
    echo `),s("span",{class:"token variable"},[n("${V_RAC_OS_HOSTNAME_ARR"),s("span",{class:"token punctuation"},"["),n("$hostip"),s("span",{class:"token punctuation"},"]"),n("}")]),n(` >/etc/hostname
    hostnamectl set-hostname `),s("span",{class:"token variable"},[n("${V_RAC_OS_HOSTNAME_ARR"),s("span",{class:"token punctuation"},"["),n("$hostip"),s("span",{class:"token punctuation"},"]"),n("}")]),n(`


    echo "4.Set sysctl.conf ... "
    if [ ! -f "/etc/sysctl.conf.orabak" ];then
        cp /etc/sysctl.conf /etc/sysctl.conf.orabak
    fi
    cat > /etc/sysctl.d/97-oracle-database-sysctl.conf <<EOF
fs.file-max = 6815744
kernel.sem = 250 32000 100 128
kernel.shmmni = 4096
kernel.shmall = `),s("span",{class:"token variable"},"$V_RAC_OS_SHMALL"),n(` 
kernel.shmmax = `),s("span",{class:"token variable"},"$V_RAC_OS_SHMMAX"),n(`
kernel.panic_on_oops = 1
net.core.rmem_default = 262144
net.core.rmem_max = 4194304
net.core.wmem_default = 262144
net.core.wmem_max = 1048576
net.ipv4.conf.all.rp_filter = 2
net.ipv4.conf.default.rp_filter = 2
fs.aio-max-nr = 1048576
net.ipv4.ip_local_port_range = 9000 65500
EOF
    sysctl -p

    echo "5.Set resource usage limitation ..."
    if [ ! -f "/etc/security/limits.conf.orabak" ];then
        cp /etc/security/limits.conf /etc/security/limits.conf.orabak
    fi
    cat >> /etc/security/limits.conf <<EOF
`),s("span",{class:"token variable"},"$V_RAC_OS_ORACLE_USER"),n(`   soft   nofile    1024
`),s("span",{class:"token variable"},"$V_RAC_OS_ORACLE_USER"),n(`   hard   nofile    65536
`),s("span",{class:"token variable"},"$V_RAC_OS_ORACLE_USER"),n(`   soft   nproc    16384
`),s("span",{class:"token variable"},"$V_RAC_OS_ORACLE_USER"),n(`   hard   nproc    16384
`),s("span",{class:"token variable"},"$V_RAC_OS_ORACLE_USER"),n(`   soft   stack    10240
`),s("span",{class:"token variable"},"$V_RAC_OS_ORACLE_USER"),n(`   hard   stack    32768
`),s("span",{class:"token variable"},"$V_RAC_OS_ORACLE_USER"),n(`   hard   memlock    134217728
`),s("span",{class:"token variable"},"$V_RAC_OS_ORACLE_USER"),n(`   soft   memlock    134217728
`),s("span",{class:"token variable"},"$V_RAC_OS_GRID_USER"),n(`   soft   nofile    1024
`),s("span",{class:"token variable"},"$V_RAC_OS_GRID_USER"),n(`   hard   nofile    65536
`),s("span",{class:"token variable"},"$V_RAC_OS_GRID_USER"),n(`   soft   nproc    16384
`),s("span",{class:"token variable"},"$V_RAC_OS_GRID_USER"),n(`   hard   nproc    16384
`),s("span",{class:"token variable"},"$V_RAC_OS_GRID_USER"),n(`   soft   stack    10240
`),s("span",{class:"token variable"},"$V_RAC_OS_GRID_USER"),n(`   hard   stack    32768
`),s("span",{class:"token variable"},"$V_RAC_OS_GRID_USER"),n(`   hard   memlock    134217728
`),s("span",{class:"token variable"},"$V_RAC_OS_GRID_USER"),n(`   soft   memlock    134217728
EOF
    if [ ! -f "/etc/pam.d/login.orabak" ];then
        cp /etc/pam.d/login /etc/pam.d/login.orabak
    fi
    echo "session   required    pam_limits.so" >>/etc/pam.d/login

    echo "6.Install dependencies ..."
    yum install -y \\
        bc binutils compat-libcap1 compat-libcap1-1.10-3.el7.x86_64 compat-libstdc++-33 \\
        compat-libstdc++-33.i686 dtrace-utils elfutils-libelf elfutils-libelf-devel \\
        elfutils-libelf-devel.i686 elfutils-libelf.i686 fontconfig-devel gcc gcc-c++ \\
        glibc glibc-2.17-36.el7.i686 glibc-2.17-36.el7.x86_64 glibc-devel glibc-devel.i686 \\
        glibc.i686 ksh libaio libaio-devel libaio-devel.i686 libaio.i686 libcap \\
        libdtrace-ctf-devel libgcc libgcc.i686 librdmacm-devel libstdc++ libstdc++-devel \\
        libstdc++-devel.i686 libstdc++.i686 libX11 libX11.i686 libXau libXau.i686 libxcb \\
        libxcb.i686 libXext libXext.i686 libXi libXi.i686 libXrender libXrender-devel libXtst \\
        libXtst.i686 make net-tools nfs-utils policycoreutils policycoreutils-python python \\
        python-configshell python-rtslib python-six smartmontools sysstat targetcli unixODBC \\
        unixODBC-devel unzip zlib-devel wget

    echo "7.Add oracle groups and users ..."
    groupadd -g 54321 oinstall
    groupadd -g 54322 dba
    groupadd -g 54323 oper
    groupadd -g 54324 backupdba
    groupadd -g 54325 dgdba
    groupadd -g 54326 kmdba
    groupadd -g 54327 asmdba
    groupadd -g 54328 asmoper
    groupadd -g 54329 asmadmin
    groupadd -g 54330 racdba
    useradd -m -u 54321 -g oinstall -G dba,oper,backupdba,dgdba,kmdba,asmdba,racdba `),s("span",{class:"token variable"},"$V_RAC_OS_ORACLE_USER"),n(`
    useradd -m -u 54322 -g oinstall -G asmadmin,asmdba,asmoper,dba,racdba,oper `),s("span",{class:"token variable"},"$V_RAC_OS_GRID_USER"),n(`
    echo `),s("span",{class:"token variable"},"$V_RAC_OS_ORACLE_USER_PASSWORD"),n(" | passwd --stdin "),s("span",{class:"token variable"},"$V_RAC_OS_ORACLE_USER"),n(`
    echo `),s("span",{class:"token variable"},"$V_RAC_OS_GRID_USER_PASSWORD"),n(" | passwd --stdin "),s("span",{class:"token variable"},"$V_RAC_OS_GRID_USER"),n(`

    echo "8.Create directories ..."
    mkdir -p `),s("span",{class:"token variable"},"$V_RAC_PACKAGE_DIR"),n(),s("span",{class:"token variable"},"$V_RAC_OS_DBA_DIR"),n(`
    mkdir -p `),s("span",{class:"token variable"},"$V_RAC_GRID_ORACLE_BASE"),n(),s("span",{class:"token variable"},"$V_RAC_GRID_ORACLE_HOME"),n(),s("span",{class:"token variable"},"$V_RAC_ORACLE_ORA_INVENTORY"),n(`
    mkdir -p `),s("span",{class:"token variable"},"$V_RAC_ORACLE_HOME"),n(`

    chown -R `),s("span",{class:"token variable"},"$V_RAC_OS_ORACLE_USER"),n(":oinstall "),s("span",{class:"token variable"},"$V_RAC_PACKAGE_DIR"),n(),s("span",{class:"token variable"},"$V_RAC_OS_DBA_DIR"),n(`
    chown -R `),s("span",{class:"token variable"},"$V_RAC_OS_GRID_USER"),n(":oinstall "),s("span",{class:"token variable"},"$V_RAC_GRID_APP_ROOTDIR"),n(),s("span",{class:"token variable"},"$V_RAC_ORACLE_APP_ROOTDIR"),n(),s("span",{class:"token variable"},"$V_RAC_GRID_ORACLE_BASE"),n(),s("span",{class:"token variable"},"$V_RAC_GRID_ORACLE_HOME"),n(),s("span",{class:"token variable"},"$V_RAC_ORACLE_ORA_INVENTORY"),n(`
    chown -R `),s("span",{class:"token variable"},"$V_RAC_OS_ORACLE_USER"),n(":oinstall "),s("span",{class:"token variable"},"$V_RAC_ORACLE_BASE"),n(),s("span",{class:"token variable"},"$V_RAC_ORACLE_HOME"),n(`

    chmod -R 775 `),s("span",{class:"token variable"},"$V_RAC_PACKAGE_DIR"),n(),s("span",{class:"token variable"},"$V_RAC_OS_DBA_DIR"),n(),s("span",{class:"token variable"},"$V_RAC_GRID_APP_ROOTDIR"),n(),s("span",{class:"token variable"},"$V_RAC_ORACLE_APP_ROOTDIR"),n(),s("span",{class:"token variable"},"$V_RAC_ORACLE_ORA_INVENTORY"),n(`

    echo "9.Set oracle env ..."
    if [ ! -f "/home/`),s("span",{class:"token variable"},"$V_RAC_OS_ORACLE_USER"),n(`/.bash_profile.orabak" ];then
        cp /home/`),s("span",{class:"token variable"},"$V_RAC_OS_ORACLE_USER"),n("/.bash_profile /home/"),s("span",{class:"token variable"},"$V_RAC_OS_ORACLE_USER"),n(`/.bash_profile.orabak
    fi
    cat >>/home/`),s("span",{class:"token variable"},"$V_RAC_OS_ORACLE_USER"),n(`/.bash_profile <<EOF
### Begin Oracle ENV ###
export TMP=`),s("span",{class:"token variable"},"$V_RAC_TMP"),n(`
export TMPDIR=`),s("span",{class:"token variable"},"$V_RAC_TMP"),n(`
export ORACLE_HOSTNAME=`),s("span",{class:"token variable"},[n("${V_RAC_OS_HOSTNAME_ARR"),s("span",{class:"token punctuation"},"["),n("$hostip"),s("span",{class:"token punctuation"},"]"),n("}")]),n(`
export ORACLE_UNQNAME=`),s("span",{class:"token variable"},"$V_RAC_ORACLE_UNQNAME"),n(`
export ORACLE_SID=`),s("span",{class:"token variable"},"$V_RAC_ORACLE_SID"),n(`
export ORACLE_BASE=`),s("span",{class:"token variable"},"$V_RAC_ORACLE_BASE"),n(`
export ORACLE_HOME=`),s("span",{class:"token variable"},"$V_RAC_ORACLE_HOME"),n(`
export ORA_INVENTORY=`),s("span",{class:"token variable"},"$V_RAC_ORACLE_ORA_INVENTORY"),n(`
export LD_LIBRARY_PATH=\\`),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"$"'),s("span",{class:"token variable"},")")]),n(`ORACLE_HOME/lib:/lib:/usr/lib
export CLASSPATH=\\`),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"$"'),s("span",{class:"token variable"},")")]),n("ORACLE_HOME/JRE:\\"),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"$"'),s("span",{class:"token variable"},")")]),n("ORACLE_HOME/jlib:\\"),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"$"'),s("span",{class:"token variable"},")")]),n(`ORACLE_HOME/rdbms/jlib
export PATH=\\`),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"$"'),s("span",{class:"token variable"},")")]),n("ORACLE_HOME/bin:\\"),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"$"'),s("span",{class:"token variable"},")")]),n(`PATH
### End Oracle Env ###
EOF
    if [ ! -f "/home/`),s("span",{class:"token variable"},"$V_RAC_OS_GRID_USER"),n(`/.bash_profile.orabak" ];then
        cp /home/`),s("span",{class:"token variable"},"$V_RAC_OS_GRID_USER"),n("/.bash_profile /home/"),s("span",{class:"token variable"},"$V_RAC_OS_GRID_USER"),n(`/.bash_profile.orabak
    fi
    cat >>/home/`),s("span",{class:"token variable"},"$V_RAC_OS_GRID_USER"),n(`/.bash_profile <<EOF
### Begin Oracle Grid ENV ###
export TMP=`),s("span",{class:"token variable"},"$V_RAC_TMP"),n(`
export TMPDIR=`),s("span",{class:"token variable"},"$V_RAC_TMP"),n(`
export ORACLE_SID=`),s("span",{class:"token variable"},"$V_RAC_GRID_ORACLE_SID"),n(`
export ORACLE_BASE=`),s("span",{class:"token variable"},"$V_RAC_GRID_ORACLE_BASE"),n(`
export ORACLE_HOME=`),s("span",{class:"token variable"},"$V_RAC_GRID_ORACLE_HOME"),n(`
export ORA_INVENTORY=`),s("span",{class:"token variable"},"$V_RAC_ORACLE_ORA_INVENTORY"),n(`
export LD_LIBRARY_PATH=\\`),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"$"'),s("span",{class:"token variable"},")")]),n(`ORACLE_HOME/lib:/lib:/usr/lib
export CLASSPATH=\\`),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"$"'),s("span",{class:"token variable"},")")]),n("ORACLE_HOME/JRE:\\"),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"$"'),s("span",{class:"token variable"},")")]),n("ORACLE_HOME/jlib:\\"),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"$"'),s("span",{class:"token variable"},")")]),n(`ORACLE_HOME/rdbms/jlib
export PATH=\\`),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"$"'),s("span",{class:"token variable"},")")]),n("ORACLE_HOME/bin:\\"),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"$"'),s("span",{class:"token variable"},")")]),n(`PATH
### End Oracle Grid Env ###
EOF

        su - `),s("span",{class:"token variable"},"$V_RAC_OS_ORACLE_USER"),n(` <<ORACLEEOF
ssh-keygen -t rsa -N '' -f ~/.ssh/id_rsa <<< y
ORACLEEOF

su - `),s("span",{class:"token variable"},"$V_RAC_OS_GRID_USER"),n(` <<GRIDEOF
ssh-keygen -t rsa -N '' -f ~/.ssh/id_rsa <<< y
GRIDEOF
SSHEOF`)]),n(`
    `),s("span",{class:"token keyword"},"done"),n(`

    `),s("span",{class:"token keyword"},"for"),n(),s("span",{class:"token for-or-select variable"},"hostip"),n(),s("span",{class:"token keyword"},"in"),n(),s("span",{class:"token variable"},[n("${"),s("span",{class:"token operator"},"!"),n("V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token punctuation"},"["),n("@"),s("span",{class:"token punctuation"},"]"),n("}")]),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"do"),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_ORACLE_SID"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[n("${V_RAC_INSTANCE_ORACLE_SID_ARR"),s("span",{class:"token punctuation"},"["),n("$hostip"),s("span",{class:"token punctuation"},"]"),n("}")]),n(`
        `),s("span",{class:"token assign-left variable"},"V_RAC_GRID_ORACLE_SID"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[n("${V_RAC_INSTANCE_GRID_ORACLE_SID_ARR"),s("span",{class:"token punctuation"},"["),n("$hostip"),s("span",{class:"token punctuation"},"]"),n("}")]),n(`
        `),s("span",{class:"token variable"},[n("${V_RAC_OS_HOSTNAME_ARR"),s("span",{class:"token punctuation"},"["),n("$hostip"),s("span",{class:"token punctuation"},"]"),n("}")]),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[n("${V_RAC_OS_HOSTNAME_ARR"),s("span",{class:"token punctuation"},"["),n("$hostip"),s("span",{class:"token punctuation"},"]"),n("}")]),n(`

        sshpass `),s("span",{class:"token parameter variable"},"-p"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$V_RAC_OS_ORACLE_USER_PASSWORD"),n('"')]),n(),s("span",{class:"token function"},"ssh"),n(),s("span",{class:"token parameter variable"},"-o"),n(),s("span",{class:"token assign-left variable"},"StrictHostKeyChecking"),s("span",{class:"token operator"},"="),n("no "),s("span",{class:"token variable"},"$V_RAC_OS_ORACLE_USER"),n("@"),s("span",{class:"token variable"},[n("${V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token punctuation"},"["),n("$hostip"),s("span",{class:"token punctuation"},"]"),n("}")]),n(),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`SSHEOF
            for otherhostip in `),s("span",{class:"token variable"},"$V_RAC_OS_PUBLIC_IP"),n(`; do
                sshpass -p "`),s("span",{class:"token variable"},"$V_RAC_OS_ORACLE_USER_PASSWORD"),n('" ssh-copy-id -o StrictHostKeyChecking=no -i /home/'),s("span",{class:"token variable"},"$V_RAC_OS_ORACLE_USER"),n("/.ssh/id_rsa.pub "),s("span",{class:"token variable"},"$V_RAC_OS_ORACLE_USER"),n("@\\"),s("span",{class:"token variable"},"$otherhostip"),n(`
            done

            for otherhostname in `),s("span",{class:"token variable"},"$V_RAC_OS_HOSTNAME"),n(`; do
                ssh -o StrictHostKeyChecking=no `),s("span",{class:"token variable"},"$V_RAC_OS_ORACLE_USER"),n("@\\"),s("span",{class:"token variable"},"$otherhostname"),n(`
            done
SSHEOF`)]),n(`
        sshpass `),s("span",{class:"token parameter variable"},"-p"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$V_RAC_OS_GRID_USER_PASSWORD"),n('"')]),n(),s("span",{class:"token function"},"ssh"),n(),s("span",{class:"token parameter variable"},"-o"),n(),s("span",{class:"token assign-left variable"},"StrictHostKeyChecking"),s("span",{class:"token operator"},"="),n("no "),s("span",{class:"token variable"},"$V_RAC_OS_GRID_USER"),n("@"),s("span",{class:"token variable"},[n("${V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token punctuation"},"["),n("$hostip"),s("span",{class:"token punctuation"},"]"),n("}")]),n(),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`SSHEOF
            for otherhostip in `),s("span",{class:"token variable"},"$V_RAC_OS_PUBLIC_IP"),n(`; do
                sshpass -p "`),s("span",{class:"token variable"},"$V_RAC_OS_GRID_USER_PASSWORD"),n('" ssh-copy-id -o StrictHostKeyChecking=no -i /home/'),s("span",{class:"token variable"},"$V_RAC_OS_GRID_USER"),n("/.ssh/id_rsa.pub "),s("span",{class:"token variable"},"$V_RAC_OS_GRID_USER"),n("@\\"),s("span",{class:"token variable"},"$otherhostip"),n(`
            done

            for otherhostname in `),s("span",{class:"token variable"},"$V_RAC_OS_HOSTNAME"),n(`; do
                ssh -o StrictHostKeyChecking=no `),s("span",{class:"token variable"},"$V_RAC_OS_GRID_USER"),n("@\\"),s("span",{class:"token variable"},"$otherhostname"),n(`
            done
SSHEOF`)]),n(`
    `),s("span",{class:"token keyword"},"done"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"ConfigureASMOracleASMLib"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Configuring asm by ASMLib ..."'),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token operator"},"="),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$V_RAC_OS_PUBLIC_IP"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_OS_ROOT_PASSWORD_ARR"),s("span",{class:"token operator"},"="),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$V_RAC_OS_ROOT_PASSWORD"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token keyword"},"for"),n(),s("span",{class:"token for-or-select variable"},"hostip"),n(),s("span",{class:"token keyword"},"in"),n(),s("span",{class:"token variable"},[n("${"),s("span",{class:"token operator"},"!"),n("V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token punctuation"},"["),n("@"),s("span",{class:"token punctuation"},"]"),n("}")]),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"do"),n(`
        sshpass `),s("span",{class:"token parameter variable"},"-p"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},[n("${V_RAC_OS_ROOT_PASSWORD_ARR"),s("span",{class:"token punctuation"},"["),n("$hostip"),s("span",{class:"token punctuation"},"]"),n("}")]),n('"')]),n(),s("span",{class:"token function"},"scp"),n(),s("span",{class:"token parameter variable"},"-o"),n(),s("span",{class:"token assign-left variable"},"StrictHostKeyChecking"),s("span",{class:"token operator"},"="),n("no "),s("span",{class:"token variable"},"$V_RAC_PACKAGE_ORACLE_ALL_SOURCE"),n("/oracleasm*.rpm root@"),s("span",{class:"token variable"},[n("${V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token punctuation"},"["),n("$hostip"),s("span",{class:"token punctuation"},"]"),n("}")]),s("span",{class:"token builtin class-name"},":"),s("span",{class:"token variable"},"$V_RAC_PACKAGE_ORACLE_ALL_SOURCE"),n(`/
        sshpass `),s("span",{class:"token parameter variable"},"-p"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},[n("${V_RAC_OS_ROOT_PASSWORD_ARR"),s("span",{class:"token punctuation"},"["),n("$hostip"),s("span",{class:"token punctuation"},"]"),n("}")]),n('"')]),n(),s("span",{class:"token function"},"ssh"),n(),s("span",{class:"token parameter variable"},"-o"),n(),s("span",{class:"token assign-left variable"},"StrictHostKeyChecking"),s("span",{class:"token operator"},"="),n("no root@"),s("span",{class:"token variable"},[n("${V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token punctuation"},"["),n("$hostip"),s("span",{class:"token punctuation"},"]"),n("}")]),n(),s("span",{class:"token function"},"bash"),n(),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`SSHEOF
    has_oracleasmsupport=`),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"rpm"),n(),s("span",{class:"token parameter variable"},"-qa"),n(),s("span",{class:"token operator"},"|"),n(),s("span",{class:"token function"},"grep"),n(" oracleasm-support"),s("span",{class:"token variable"},")")]),n(`
    has_oracleasmlib=`),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"rpm"),n(),s("span",{class:"token parameter variable"},"-qa"),n(),s("span",{class:"token operator"},"|"),n(),s("span",{class:"token function"},"grep"),n(" oracleasmlib"),s("span",{class:"token variable"},")")]),n(`

    if [ "`),s("span",{class:"token variable"},"$has_oracleasmsupport"),n('" = "" ] || [ "'),s("span",{class:"token variable"},"$has_oracleasmlib"),n(`" = "" ]; then
        yum install -y `),s("span",{class:"token variable"},"$V_RAC_PACKAGE_ORACLE_ALL_SOURCE"),n(`/oracleasm*.rpm
    fi
SSHEOF`)]),n(`
    `),s("span",{class:"token keyword"},"done"),n(`
    `),s("span",{class:"token comment"},"# fdisk"),n(`
    `),s("span",{class:"token keyword"},"for"),n(),s("span",{class:"token for-or-select variable"},"disk_item"),n(),s("span",{class:"token keyword"},"in"),n(),s("span",{class:"token variable"},"$V_RAC_ASM_OCR_DISKS"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"do"),n(`
        `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token parameter variable"},"-e"),n(),s("span",{class:"token string"},[n('"n'),s("span",{class:"token entity",title:"\\n"},"\\n"),n("p"),s("span",{class:"token entity",title:"\\n"},"\\n"),n("1"),s("span",{class:"token entity",title:"\\n"},"\\n"),s("span",{class:"token entity",title:"\\n"},"\\n"),s("span",{class:"token entity",title:"\\n"},"\\n"),n('w"')]),n(),s("span",{class:"token operator"},"|"),n(),s("span",{class:"token function"},"fdisk"),n(),s("span",{class:"token variable"},"$disk_item"),n(`
    `),s("span",{class:"token keyword"},"done"),n(`

    `),s("span",{class:"token keyword"},"for"),n(),s("span",{class:"token for-or-select variable"},"disk_item"),n(),s("span",{class:"token keyword"},"in"),n(),s("span",{class:"token variable"},"$V_RAC_ASM_DATA_DISKS"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"do"),n(`
        `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token parameter variable"},"-e"),n(),s("span",{class:"token string"},[n('"n'),s("span",{class:"token entity",title:"\\n"},"\\n"),n("p"),s("span",{class:"token entity",title:"\\n"},"\\n"),n("1"),s("span",{class:"token entity",title:"\\n"},"\\n"),s("span",{class:"token entity",title:"\\n"},"\\n"),s("span",{class:"token entity",title:"\\n"},"\\n"),n('w"')]),n(),s("span",{class:"token operator"},"|"),n(),s("span",{class:"token function"},"fdisk"),n(),s("span",{class:"token variable"},"$disk_item"),n(`
    `),s("span",{class:"token keyword"},"done"),n(`

    `),s("span",{class:"token keyword"},"for"),n(),s("span",{class:"token for-or-select variable"},"disk_item"),n(),s("span",{class:"token keyword"},"in"),n(),s("span",{class:"token variable"},"$V_RAC_ASM_FRA_DISKS"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"do"),n(`
        `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token parameter variable"},"-e"),n(),s("span",{class:"token string"},[n('"n'),s("span",{class:"token entity",title:"\\n"},"\\n"),n("p"),s("span",{class:"token entity",title:"\\n"},"\\n"),n("1"),s("span",{class:"token entity",title:"\\n"},"\\n"),s("span",{class:"token entity",title:"\\n"},"\\n"),s("span",{class:"token entity",title:"\\n"},"\\n"),n('w"')]),n(),s("span",{class:"token operator"},"|"),n(),s("span",{class:"token function"},"fdisk"),n(),s("span",{class:"token variable"},"$disk_item"),n(`
    `),s("span",{class:"token keyword"},"done"),n(`

    `),s("span",{class:"token keyword"},"for"),n(),s("span",{class:"token for-or-select variable"},"hostip"),n(),s("span",{class:"token keyword"},"in"),n(),s("span",{class:"token variable"},[n("${"),s("span",{class:"token operator"},"!"),n("V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token punctuation"},"["),n("@"),s("span",{class:"token punctuation"},"]"),n("}")]),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"do"),n(`
        sshpass `),s("span",{class:"token parameter variable"},"-p"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},[n("${V_RAC_OS_ROOT_PASSWORD_ARR"),s("span",{class:"token punctuation"},"["),n("$hostip"),s("span",{class:"token punctuation"},"]"),n("}")]),n('"')]),n(),s("span",{class:"token function"},"ssh"),n(),s("span",{class:"token parameter variable"},"-o"),n(),s("span",{class:"token assign-left variable"},"StrictHostKeyChecking"),s("span",{class:"token operator"},"="),n("no root@"),s("span",{class:"token variable"},[n("${V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token punctuation"},"["),n("$hostip"),s("span",{class:"token punctuation"},"]"),n("}")]),n(),s("span",{class:"token function"},"bash"),n(),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`SSHEOF
    oracleasm configure -u `),s("span",{class:"token variable"},"$V_RAC_OS_GRID_USER"),n(` -g asmadmin -e -s y
    oracleasm init
SSHEOF`)]),n(`
    `),s("span",{class:"token keyword"},"done"),n(`
    `),s("span",{class:"token assign-left variable"},"counter"),s("span",{class:"token operator"},"="),s("span",{class:"token number"},"1"),n(`
    `),s("span",{class:"token keyword"},"for"),n(),s("span",{class:"token for-or-select variable"},"disk_item"),n(),s("span",{class:"token keyword"},"in"),n(),s("span",{class:"token variable"},"$V_RAC_ASM_OCR_DISKS"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"do"),n(`
        oracleasm createdisk `),s("span",{class:"token variable"},"${V_RAC_ASM_OCR_ASMDISK_PREFFIX}"),s("span",{class:"token variable"},"${counter}"),n(),s("span",{class:"token variable"},"${disk_item}"),s("span",{class:"token number"},"1"),n(`
        `),s("span",{class:"token assign-left variable"},"counter"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$(("),n("$counter "),s("span",{class:"token operator"},"+"),n(),s("span",{class:"token number"},"1"),s("span",{class:"token variable"},"))")]),n(`
    `),s("span",{class:"token keyword"},"done"),n(`

    `),s("span",{class:"token assign-left variable"},"counter"),s("span",{class:"token operator"},"="),s("span",{class:"token number"},"1"),n(`
    `),s("span",{class:"token keyword"},"for"),n(),s("span",{class:"token for-or-select variable"},"disk_item"),n(),s("span",{class:"token keyword"},"in"),n(),s("span",{class:"token variable"},"$V_RAC_ASM_DATA_DISKS"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"do"),n(`
        oracleasm createdisk `),s("span",{class:"token variable"},"${V_RAC_ASM_DATA_ASMDISK_PREFFIX}"),s("span",{class:"token variable"},"${counter}"),n(),s("span",{class:"token variable"},"${disk_item}"),s("span",{class:"token number"},"1"),n(`
        `),s("span",{class:"token assign-left variable"},"counter"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$(("),n("$counter "),s("span",{class:"token operator"},"+"),n(),s("span",{class:"token number"},"1"),s("span",{class:"token variable"},"))")]),n(`
    `),s("span",{class:"token keyword"},"done"),n(`

    `),s("span",{class:"token assign-left variable"},"counter"),s("span",{class:"token operator"},"="),s("span",{class:"token number"},"1"),n(`
    `),s("span",{class:"token keyword"},"for"),n(),s("span",{class:"token for-or-select variable"},"disk_item"),n(),s("span",{class:"token keyword"},"in"),n(),s("span",{class:"token variable"},"$V_RAC_ASM_FRA_DISKS"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"do"),n(`
        oracleasm createdisk `),s("span",{class:"token variable"},"${V_RAC_ASM_FRA_ASMDISK_PREFFIX}"),s("span",{class:"token variable"},"${counter}"),n(),s("span",{class:"token variable"},"${disk_item}"),s("span",{class:"token number"},"1"),n(`
        `),s("span",{class:"token assign-left variable"},"counter"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$(("),n("$counter "),s("span",{class:"token operator"},"+"),n(),s("span",{class:"token number"},"1"),s("span",{class:"token variable"},"))")]),n(`
    `),s("span",{class:"token keyword"},"done"),n(`

    `),s("span",{class:"token keyword"},"for"),n(),s("span",{class:"token for-or-select variable"},"hostip"),n(),s("span",{class:"token keyword"},"in"),n(),s("span",{class:"token variable"},[n("${"),s("span",{class:"token operator"},"!"),n("V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token punctuation"},"["),n("@"),s("span",{class:"token punctuation"},"]"),n("}")]),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"do"),n(`
        sshpass `),s("span",{class:"token parameter variable"},"-p"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},[n("${V_RAC_OS_ROOT_PASSWORD_ARR"),s("span",{class:"token punctuation"},"["),n("$hostip"),s("span",{class:"token punctuation"},"]"),n("}")]),n('"')]),n(),s("span",{class:"token function"},"ssh"),n(),s("span",{class:"token parameter variable"},"-o"),n(),s("span",{class:"token assign-left variable"},"StrictHostKeyChecking"),s("span",{class:"token operator"},"="),n("no root@"),s("span",{class:"token variable"},[n("${V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token punctuation"},"["),n("$hostip"),s("span",{class:"token punctuation"},"]"),n("}")]),n(),s("span",{class:"token function"},"bash"),n(),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},`SSHEOF
    oracleasm scandisks
    oracleasm listdisks
SSHEOF`),n(`
    `),s("span",{class:"token keyword"},"done"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"DeconfigureASMOracleASMLib"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Deconfiguring asm by ASMLib ..."'),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token operator"},"="),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$V_RAC_OS_PUBLIC_IP"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_OS_ROOT_PASSWORD_ARR"),s("span",{class:"token operator"},"="),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$V_RAC_OS_ROOT_PASSWORD"),s("span",{class:"token punctuation"},")"),n(`

    `),s("span",{class:"token assign-left variable"},"counter"),s("span",{class:"token operator"},"="),s("span",{class:"token number"},"1"),n(`
    `),s("span",{class:"token keyword"},"for"),n(),s("span",{class:"token for-or-select variable"},"disk_item"),n(),s("span",{class:"token keyword"},"in"),n(),s("span",{class:"token variable"},"$V_RAC_ASM_OCR_DISKS"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"do"),n(`
        oracleasm deletedisk `),s("span",{class:"token variable"},"${V_RAC_ASM_OCR_ASMDISK_PREFFIX}"),s("span",{class:"token variable"},"${counter}"),n(`
        `),s("span",{class:"token assign-left variable"},"counter"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$(("),n("$counter "),s("span",{class:"token operator"},"+"),n(),s("span",{class:"token number"},"1"),s("span",{class:"token variable"},"))")]),n(`
    `),s("span",{class:"token keyword"},"done"),n(`

    `),s("span",{class:"token assign-left variable"},"counter"),s("span",{class:"token operator"},"="),s("span",{class:"token number"},"1"),n(`
    `),s("span",{class:"token keyword"},"for"),n(),s("span",{class:"token for-or-select variable"},"disk_item"),n(),s("span",{class:"token keyword"},"in"),n(),s("span",{class:"token variable"},"$V_RAC_ASM_DATA_DISKS"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"do"),n(`
        oracleasm deletedisk `),s("span",{class:"token variable"},"${V_RAC_ASM_DATA_ASMDISK_PREFFIX}"),s("span",{class:"token variable"},"${counter}"),n(`
        `),s("span",{class:"token assign-left variable"},"counter"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$(("),n("$counter "),s("span",{class:"token operator"},"+"),n(),s("span",{class:"token number"},"1"),s("span",{class:"token variable"},"))")]),n(`
    `),s("span",{class:"token keyword"},"done"),n(`

    `),s("span",{class:"token assign-left variable"},"counter"),s("span",{class:"token operator"},"="),s("span",{class:"token number"},"1"),n(`
    `),s("span",{class:"token keyword"},"for"),n(),s("span",{class:"token for-or-select variable"},"disk_item"),n(),s("span",{class:"token keyword"},"in"),n(),s("span",{class:"token variable"},"$V_RAC_ASM_FRA_DISKS"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"do"),n(`
        oracleasm deletedisk `),s("span",{class:"token variable"},"${V_RAC_ASM_FRA_ASMDISK_PREFFIX}"),s("span",{class:"token variable"},"${counter}"),n(`
        `),s("span",{class:"token assign-left variable"},"counter"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$(("),n("$counter "),s("span",{class:"token operator"},"+"),n(),s("span",{class:"token number"},"1"),s("span",{class:"token variable"},"))")]),n(`
    `),s("span",{class:"token keyword"},"done"),n(`

    `),s("span",{class:"token keyword"},"for"),n(),s("span",{class:"token for-or-select variable"},"hostip"),n(),s("span",{class:"token keyword"},"in"),n(),s("span",{class:"token variable"},[n("${"),s("span",{class:"token operator"},"!"),n("V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token punctuation"},"["),n("@"),s("span",{class:"token punctuation"},"]"),n("}")]),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"do"),n(`
        sshpass `),s("span",{class:"token parameter variable"},"-p"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},[n("${V_RAC_OS_ROOT_PASSWORD_ARR"),s("span",{class:"token punctuation"},"["),n("$hostip"),s("span",{class:"token punctuation"},"]"),n("}")]),n('"')]),n(),s("span",{class:"token function"},"ssh"),n(),s("span",{class:"token parameter variable"},"-o"),n(),s("span",{class:"token assign-left variable"},"StrictHostKeyChecking"),s("span",{class:"token operator"},"="),n("no root@"),s("span",{class:"token variable"},[n("${V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token punctuation"},"["),n("$hostip"),s("span",{class:"token punctuation"},"]"),n("}")]),n(),s("span",{class:"token function"},"bash"),n(),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},`SSHEOF
    oracleasm scandisks
    oracleasm listdisks
SSHEOF`),n(`
    `),s("span",{class:"token keyword"},"done"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"ConfigureASMMultipath"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Configuring ASM by multipath ..."'),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token operator"},"="),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$V_RAC_OS_PUBLIC_IP"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_OS_ROOT_PASSWORD_ARR"),s("span",{class:"token operator"},"="),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$V_RAC_OS_ROOT_PASSWORD"),s("span",{class:"token punctuation"},")"),n(`

    `),s("span",{class:"token keyword"},"for"),n(),s("span",{class:"token for-or-select variable"},"hostip"),n(),s("span",{class:"token keyword"},"in"),n(),s("span",{class:"token variable"},[n("${"),s("span",{class:"token operator"},"!"),n("V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token punctuation"},"["),n("@"),s("span",{class:"token punctuation"},"]"),n("}")]),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"do"),n(`
        sshpass `),s("span",{class:"token parameter variable"},"-p"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},[n("${V_RAC_OS_ROOT_PASSWORD_ARR"),s("span",{class:"token punctuation"},"["),n("$hostip"),s("span",{class:"token punctuation"},"]"),n("}")]),n('"')]),n(),s("span",{class:"token function"},"ssh"),n(),s("span",{class:"token parameter variable"},"-o"),n(),s("span",{class:"token assign-left variable"},"StrictHostKeyChecking"),s("span",{class:"token operator"},"="),n("no root@"),s("span",{class:"token variable"},[n("${V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token punctuation"},"["),n("$hostip"),s("span",{class:"token punctuation"},"]"),n("}")]),n(),s("span",{class:"token function"},"bash"),n(),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},`SSHEOF
        yum install -y device-mapper-multipath

        echo "Adding multipath to kernel ..."
        modprobe dm-multipath
        modprobe dm-round-robin

        /sbin/mpathconf  --enable
SSHEOF`),n(`
    `),s("span",{class:"token keyword"},"done"),n(`

    `),s("span",{class:"token assign-left variable"},"multipath_details"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'""'),n(`
    `),s("span",{class:"token assign-left variable"},"counter"),s("span",{class:"token operator"},"="),s("span",{class:"token number"},"1"),n(`
    `),s("span",{class:"token keyword"},"for"),n(),s("span",{class:"token for-or-select variable"},"disk_item"),n(),s("span",{class:"token keyword"},"in"),n(),s("span",{class:"token variable"},"$V_RAC_ASM_OCR_DISKS"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"do"),n(`
        `),s("span",{class:"token assign-left variable"},"multipath_details"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$multipath_details"),n(),s("span",{class:"token entity",title:"\\n"},"\\n"),n("multipath {"),s("span",{class:"token entity",title:"\\n"},"\\n"),n("   wwid    "),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),n("/usr/lib/udev/scsi_id "),s("span",{class:"token parameter variable"},"-g"),n(),s("span",{class:"token parameter variable"},"-u"),n(),s("span",{class:"token parameter variable"},"-d"),n(" $disk_item"),s("span",{class:"token variable"},")")]),s("span",{class:"token entity",title:"\\n"},"\\n"),n("   alias   "),s("span",{class:"token variable"},"${V_RAC_ASM_OCR_ASMDISK_PREFFIX}"),s("span",{class:"token variable"},"$counter"),s("span",{class:"token entity",title:"\\n"},"\\n"),n("   path_grouping_policy    multibus"),s("span",{class:"token entity",title:"\\n"},"\\n"),n("   path_selector           "),s("span",{class:"token entity",title:'\\"'},'\\"'),n("round-robin 0"),s("span",{class:"token entity",title:'\\"'},'\\"'),s("span",{class:"token entity",title:"\\n"},"\\n"),n('}"')]),n(`
        `),s("span",{class:"token assign-left variable"},"counter"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$(("),n("$counter "),s("span",{class:"token operator"},"+"),n(),s("span",{class:"token number"},"1"),s("span",{class:"token variable"},"))")]),n(`
    `),s("span",{class:"token keyword"},"done"),n(`

    `),s("span",{class:"token assign-left variable"},"counter"),s("span",{class:"token operator"},"="),s("span",{class:"token number"},"1"),n(`
    `),s("span",{class:"token keyword"},"for"),n(),s("span",{class:"token for-or-select variable"},"disk_item"),n(),s("span",{class:"token keyword"},"in"),n(),s("span",{class:"token variable"},"$V_RAC_ASM_DATA_DISKS"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"do"),n(`
        `),s("span",{class:"token assign-left variable"},"multipath_details"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$multipath_details"),n(),s("span",{class:"token entity",title:"\\n"},"\\n"),n("multipath {"),s("span",{class:"token entity",title:"\\n"},"\\n"),n("   wwid    "),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),n("/usr/lib/udev/scsi_id "),s("span",{class:"token parameter variable"},"-g"),n(),s("span",{class:"token parameter variable"},"-u"),n(),s("span",{class:"token parameter variable"},"-d"),n(" $disk_item"),s("span",{class:"token variable"},")")]),s("span",{class:"token entity",title:"\\n"},"\\n"),n("   alias   "),s("span",{class:"token variable"},"${V_RAC_ASM_DATA_ASMDISK_PREFFIX}"),s("span",{class:"token variable"},"$counter"),s("span",{class:"token entity",title:"\\n"},"\\n"),n("   path_grouping_policy    multibus"),s("span",{class:"token entity",title:"\\n"},"\\n"),n("   path_selector           "),s("span",{class:"token entity",title:'\\"'},'\\"'),n("round-robin 0"),s("span",{class:"token entity",title:'\\"'},'\\"'),s("span",{class:"token entity",title:"\\n"},"\\n"),n('}"')]),n(`
        `),s("span",{class:"token assign-left variable"},"counter"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$(("),n("$counter "),s("span",{class:"token operator"},"+"),n(),s("span",{class:"token number"},"1"),s("span",{class:"token variable"},"))")]),n(`
    `),s("span",{class:"token keyword"},"done"),n(`

    `),s("span",{class:"token assign-left variable"},"counter"),s("span",{class:"token operator"},"="),s("span",{class:"token number"},"1"),n(`
    `),s("span",{class:"token keyword"},"for"),n(),s("span",{class:"token for-or-select variable"},"disk_item"),n(),s("span",{class:"token keyword"},"in"),n(),s("span",{class:"token variable"},"$V_RAC_ASM_FRA_DISKS"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"do"),n(`
        `),s("span",{class:"token assign-left variable"},"multipath_details"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$multipath_details"),n(),s("span",{class:"token entity",title:"\\n"},"\\n"),n("multipath {"),s("span",{class:"token entity",title:"\\n"},"\\n"),n("   wwid    "),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),n("/usr/lib/udev/scsi_id "),s("span",{class:"token parameter variable"},"-g"),n(),s("span",{class:"token parameter variable"},"-u"),n(),s("span",{class:"token parameter variable"},"-d"),n(" $disk_item"),s("span",{class:"token variable"},")")]),s("span",{class:"token entity",title:"\\n"},"\\n"),n("   alias   "),s("span",{class:"token variable"},"${V_RAC_ASM_FRA_ASMDISK_PREFFIX}"),s("span",{class:"token variable"},"$counter"),s("span",{class:"token entity",title:"\\n"},"\\n"),n("   path_grouping_policy    multibus"),s("span",{class:"token entity",title:"\\n"},"\\n"),n("   path_selector           "),s("span",{class:"token entity",title:'\\"'},'\\"'),n("round-robin 0"),s("span",{class:"token entity",title:'\\"'},'\\"'),s("span",{class:"token entity",title:"\\n"},"\\n"),n('}"')]),n(`
        `),s("span",{class:"token assign-left variable"},"counter"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$(("),n("$counter "),s("span",{class:"token operator"},"+"),n(),s("span",{class:"token number"},"1"),s("span",{class:"token variable"},"))")]),n(`
    `),s("span",{class:"token keyword"},"done"),n(`

    `),s("span",{class:"token function"},"cat"),n(),s("span",{class:"token operator"},">"),n("/etc/multipath.conf "),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`CONFEOF
# multipath.
#
# For a complete list of the default configuration values, run either
# multipath -t
# or
# multipathd show config

defaults {
    user_friendly_names yes
    find_multipaths yes
}

blacklist {
    devnode "^sd[a-b]"
}
multipaths {
    `),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token parameter variable"},"-e"),n(" $multipath_details"),s("span",{class:"token variable"},")")]),n(`
}
CONFEOF`)]),n(`

    `),s("span",{class:"token keyword"},"for"),n(),s("span",{class:"token for-or-select variable"},"hostip"),n(),s("span",{class:"token keyword"},"in"),n(),s("span",{class:"token variable"},[n("${"),s("span",{class:"token operator"},"!"),n("V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token punctuation"},"["),n("@"),s("span",{class:"token punctuation"},"]"),n("}")]),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"do"),n(`
        sshpass `),s("span",{class:"token parameter variable"},"-p"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},[n("${V_RAC_OS_ROOT_PASSWORD_ARR"),s("span",{class:"token punctuation"},"["),n("$hostip"),s("span",{class:"token punctuation"},"]"),n("}")]),n('"')]),n(),s("span",{class:"token function"},"scp"),n(),s("span",{class:"token parameter variable"},"-o"),n(),s("span",{class:"token assign-left variable"},"StrictHostKeyChecking"),s("span",{class:"token operator"},"="),n("no /etc/multipath.conf root@"),s("span",{class:"token variable"},[n("${V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token punctuation"},"["),n("$hostip"),s("span",{class:"token punctuation"},"]"),n("}")]),n(`:/etc/multipath.conf
    `),s("span",{class:"token keyword"},"done"),n(`

    `),s("span",{class:"token keyword"},"for"),n(),s("span",{class:"token for-or-select variable"},"hostip"),n(),s("span",{class:"token keyword"},"in"),n(),s("span",{class:"token variable"},[n("${"),s("span",{class:"token operator"},"!"),n("V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token punctuation"},"["),n("@"),s("span",{class:"token punctuation"},"]"),n("}")]),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"do"),n(`
        sshpass `),s("span",{class:"token parameter variable"},"-p"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},[n("${V_RAC_OS_ROOT_PASSWORD_ARR"),s("span",{class:"token punctuation"},"["),n("$hostip"),s("span",{class:"token punctuation"},"]"),n("}")]),n('"')]),n(),s("span",{class:"token function"},"ssh"),n(),s("span",{class:"token parameter variable"},"-o"),n(),s("span",{class:"token assign-left variable"},"StrictHostKeyChecking"),s("span",{class:"token operator"},"="),n("no root@"),s("span",{class:"token variable"},[n("${V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token punctuation"},"["),n("$hostip"),s("span",{class:"token punctuation"},"]"),n("}")]),n(),s("span",{class:"token function"},"bash"),n(),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`SSHEOF
        echo "Enabling multipath ..."
        for item in `),s("span",{class:"token variable"},"$V_RAC_ASM_OCR_DISKS"),n(),s("span",{class:"token variable"},"$V_RAC_ASM_DATA_DISKS"),n(),s("span",{class:"token variable"},"$V_RAC_ASM_FRA_DISKS"),n(`; do
            echo \\`),s("span",{class:"token variable"},"$item"),n(`
            multipath -a \\`),s("span",{class:"token variable"},"$item"),n(`
        done 
        multipath -F
        multipath -v2
        multipath -ll
        systemctl enable multipathd.service
        systemctl restart multipathd.service
SSHEOF`)]),n(`
    `),s("span",{class:"token keyword"},"done"),n(`

    `),s("span",{class:"token function"},"cat"),n(),s("span",{class:"token operator"},">"),n("/etc/udev/rules.d/99-oracle-asmdevices.rules "),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},`EOF
KERNEL=="dm-[4-9]",OWNER="grid",GROUP="asmadmin",MODE="660"
EOF`),n(`

    `),s("span",{class:"token keyword"},"for"),n(),s("span",{class:"token for-or-select variable"},"hostip"),n(),s("span",{class:"token keyword"},"in"),n(),s("span",{class:"token variable"},[n("${"),s("span",{class:"token operator"},"!"),n("V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token punctuation"},"["),n("@"),s("span",{class:"token punctuation"},"]"),n("}")]),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"do"),n(`
        sshpass `),s("span",{class:"token parameter variable"},"-p"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},[n("${V_RAC_OS_ROOT_PASSWORD_ARR"),s("span",{class:"token punctuation"},"["),n("$hostip"),s("span",{class:"token punctuation"},"]"),n("}")]),n('"')]),n(),s("span",{class:"token function"},"scp"),n(),s("span",{class:"token parameter variable"},"-o"),n(),s("span",{class:"token assign-left variable"},"StrictHostKeyChecking"),s("span",{class:"token operator"},"="),n("no /etc/udev/rules.d/99-oracle-asmdevices.rules root@"),s("span",{class:"token variable"},[n("${V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token punctuation"},"["),n("$hostip"),s("span",{class:"token punctuation"},"]"),n("}")]),n(`:/etc/udev/rules.d/99-oracle-asmdevices.rules
    `),s("span",{class:"token keyword"},"done"),n(`

    `),s("span",{class:"token keyword"},"for"),n(),s("span",{class:"token for-or-select variable"},"hostip"),n(),s("span",{class:"token keyword"},"in"),n(),s("span",{class:"token variable"},[n("${"),s("span",{class:"token operator"},"!"),n("V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token punctuation"},"["),n("@"),s("span",{class:"token punctuation"},"]"),n("}")]),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"do"),n(`
        sshpass `),s("span",{class:"token parameter variable"},"-p"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},[n("${V_RAC_OS_ROOT_PASSWORD_ARR"),s("span",{class:"token punctuation"},"["),n("$hostip"),s("span",{class:"token punctuation"},"]"),n("}")]),n('"')]),n(),s("span",{class:"token function"},"ssh"),n(),s("span",{class:"token parameter variable"},"-o"),n(),s("span",{class:"token assign-left variable"},"StrictHostKeyChecking"),s("span",{class:"token operator"},"="),n("no root@"),s("span",{class:"token variable"},[n("${V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token punctuation"},"["),n("$hostip"),s("span",{class:"token punctuation"},"]"),n("}")]),n(),s("span",{class:"token function"},"bash"),n(),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},`SSHEOF
        udevadm control --reload
        udevadm trigger
SSHEOF`),n(`
    `),s("span",{class:"token keyword"},"done"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"DeconfigureASMMultipath"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Deconfiguring ASM by multipath ..."'),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token operator"},"="),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$V_RAC_OS_PUBLIC_IP"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_OS_ROOT_PASSWORD_ARR"),s("span",{class:"token operator"},"="),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$V_RAC_OS_ROOT_PASSWORD"),s("span",{class:"token punctuation"},")"),n(`

    `),s("span",{class:"token keyword"},"for"),n(),s("span",{class:"token for-or-select variable"},"hostip"),n(),s("span",{class:"token keyword"},"in"),n(),s("span",{class:"token variable"},[n("${"),s("span",{class:"token operator"},"!"),n("V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token punctuation"},"["),n("@"),s("span",{class:"token punctuation"},"]"),n("}")]),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"do"),n(`
        sshpass `),s("span",{class:"token parameter variable"},"-p"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},[n("${V_RAC_OS_ROOT_PASSWORD_ARR"),s("span",{class:"token punctuation"},"["),n("$hostip"),s("span",{class:"token punctuation"},"]"),n("}")]),n('"')]),n(),s("span",{class:"token function"},"ssh"),n(),s("span",{class:"token parameter variable"},"-o"),n(),s("span",{class:"token assign-left variable"},"StrictHostKeyChecking"),s("span",{class:"token operator"},"="),n("no root@"),s("span",{class:"token variable"},[n("${V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token punctuation"},"["),n("$hostip"),s("span",{class:"token punctuation"},"]"),n("}")]),n(),s("span",{class:"token function"},"bash"),n(),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`SSHEOF
        echo "Disabling multipath ..."
        for item in `),s("span",{class:"token variable"},"$V_RAC_ASM_OCR_DISKS"),n(),s("span",{class:"token variable"},"$V_RAC_ASM_DATA_DISKS"),n(),s("span",{class:"token variable"},"$V_RAC_ASM_FRA_DISKS"),n(`; do
            multipath -w \\`),s("span",{class:"token variable"},"$item"),n(`
        done 
        rm -f /etc/multipath.conf
        multipath -F
        multipath -v2
        multipath -ll
        systemctl diable multipathd.service
        systemctl stop multipathd.service
SSHEOF`)]),n(`
    `),s("span",{class:"token keyword"},"done"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"ConfigureASMUDEV"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Configuring ASM by UDEV ..."'),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token operator"},"="),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$V_RAC_OS_PUBLIC_IP"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_OS_ROOT_PASSWORD_ARR"),s("span",{class:"token operator"},"="),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$V_RAC_OS_ROOT_PASSWORD"),s("span",{class:"token punctuation"},")"),n(`

    `),s("span",{class:"token assign-left variable"},"counter"),s("span",{class:"token operator"},"="),s("span",{class:"token number"},"1"),n(`
    `),s("span",{class:"token keyword"},"for"),n(),s("span",{class:"token for-or-select variable"},"item"),n(),s("span",{class:"token keyword"},"in"),n(),s("span",{class:"token variable"},"$V_RAC_ASM_OCR_DISKS"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"do"),n(`
        `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"KERNEL=='),s("span",{class:"token entity",title:'\\"'},'\\"'),n("sd*"),s("span",{class:"token entity",title:'\\"'},'\\"'),n(",SUBSYSTEM=="),s("span",{class:"token entity",title:'\\"'},'\\"'),n("block"),s("span",{class:"token entity",title:'\\"'},'\\"'),n(",PROGRAM=="),s("span",{class:"token entity",title:'\\"'},'\\"'),n("/usr/lib/udev/scsi_id -g -u -d /dev/\\"),s("span",{class:"token variable"},"$name"),s("span",{class:"token entity",title:'\\"'},'\\"'),n(",RESULT=="),s("span",{class:"token entity",title:'\\"'},'\\"'),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),n("/usr/lib/udev/scsi_id "),s("span",{class:"token parameter variable"},"-g"),n(),s("span",{class:"token parameter variable"},"-u"),n(),s("span",{class:"token parameter variable"},"-d"),n(" $item"),s("span",{class:"token variable"},")")]),s("span",{class:"token entity",title:'\\"'},'\\"'),n(",SYMLINK+="),s("span",{class:"token entity",title:'\\"'},'\\"'),s("span",{class:"token variable"},"${V_RAC_ASM_OCR_ASMDISK_PREFFIX}"),s("span",{class:"token variable"},"$counter"),s("span",{class:"token entity",title:'\\"'},'\\"'),n(",OWNER="),s("span",{class:"token entity",title:'\\"'},'\\"'),n("grid"),s("span",{class:"token entity",title:'\\"'},'\\"'),n(",GROUP="),s("span",{class:"token entity",title:'\\"'},'\\"'),n("asmadmin"),s("span",{class:"token entity",title:'\\"'},'\\"'),n(",MODE="),s("span",{class:"token entity",title:'\\"'},'\\"'),n("0660"),s("span",{class:"token entity",title:'\\"'},'\\"'),n('"')]),n(),s("span",{class:"token operator"},">>"),n(`/etc/udev/rules.d/99-oracle-asmdevices.rules
        `),s("span",{class:"token assign-left variable"},"counter"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$(("),n("$counter "),s("span",{class:"token operator"},"+"),n(),s("span",{class:"token number"},"1"),s("span",{class:"token variable"},"))")]),n(`
    `),s("span",{class:"token keyword"},"done"),n(`

    `),s("span",{class:"token assign-left variable"},"counter"),s("span",{class:"token operator"},"="),s("span",{class:"token number"},"1"),n(`
    `),s("span",{class:"token keyword"},"for"),n(),s("span",{class:"token for-or-select variable"},"item"),n(),s("span",{class:"token keyword"},"in"),n(),s("span",{class:"token variable"},"$V_RAC_ASM_DATA_DISKS"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"do"),n(`
        `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"KERNEL=='),s("span",{class:"token entity",title:'\\"'},'\\"'),n("sd*"),s("span",{class:"token entity",title:'\\"'},'\\"'),n(",SUBSYSTEM=="),s("span",{class:"token entity",title:'\\"'},'\\"'),n("block"),s("span",{class:"token entity",title:'\\"'},'\\"'),n(",PROGRAM=="),s("span",{class:"token entity",title:'\\"'},'\\"'),n("/usr/lib/udev/scsi_id -g -u -d /dev/\\"),s("span",{class:"token variable"},"$name"),s("span",{class:"token entity",title:'\\"'},'\\"'),n(",RESULT=="),s("span",{class:"token entity",title:'\\"'},'\\"'),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),n("/usr/lib/udev/scsi_id "),s("span",{class:"token parameter variable"},"-g"),n(),s("span",{class:"token parameter variable"},"-u"),n(),s("span",{class:"token parameter variable"},"-d"),n(" $item"),s("span",{class:"token variable"},")")]),s("span",{class:"token entity",title:'\\"'},'\\"'),n(",SYMLINK+="),s("span",{class:"token entity",title:'\\"'},'\\"'),s("span",{class:"token variable"},"${V_RAC_ASM_DATA_ASMDISK_PREFFIX}"),s("span",{class:"token variable"},"$counter"),s("span",{class:"token entity",title:'\\"'},'\\"'),n(",OWNER="),s("span",{class:"token entity",title:'\\"'},'\\"'),n("grid"),s("span",{class:"token entity",title:'\\"'},'\\"'),n(",GROUP="),s("span",{class:"token entity",title:'\\"'},'\\"'),n("asmadmin"),s("span",{class:"token entity",title:'\\"'},'\\"'),n(",MODE="),s("span",{class:"token entity",title:'\\"'},'\\"'),n("0660"),s("span",{class:"token entity",title:'\\"'},'\\"'),n('"')]),n(),s("span",{class:"token operator"},">>"),n(`/etc/udev/rules.d/99-oracle-asmdevices.rules
        `),s("span",{class:"token assign-left variable"},"counter"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$(("),n("$counter "),s("span",{class:"token operator"},"+"),n(),s("span",{class:"token number"},"1"),s("span",{class:"token variable"},"))")]),n(`
    `),s("span",{class:"token keyword"},"done"),n(`

    `),s("span",{class:"token assign-left variable"},"counter"),s("span",{class:"token operator"},"="),s("span",{class:"token number"},"1"),n(`
    `),s("span",{class:"token keyword"},"for"),n(),s("span",{class:"token for-or-select variable"},"item"),n(),s("span",{class:"token keyword"},"in"),n(),s("span",{class:"token variable"},"$V_RAC_ASM_FRA_DISKS"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"do"),n(`
        `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"KERNEL=='),s("span",{class:"token entity",title:'\\"'},'\\"'),n("sd*"),s("span",{class:"token entity",title:'\\"'},'\\"'),n(",SUBSYSTEM=="),s("span",{class:"token entity",title:'\\"'},'\\"'),n("block"),s("span",{class:"token entity",title:'\\"'},'\\"'),n(",PROGRAM=="),s("span",{class:"token entity",title:'\\"'},'\\"'),n("/usr/lib/udev/scsi_id -g -u -d /dev/\\"),s("span",{class:"token variable"},"$name"),s("span",{class:"token entity",title:'\\"'},'\\"'),n(",RESULT=="),s("span",{class:"token entity",title:'\\"'},'\\"'),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),n("/usr/lib/udev/scsi_id "),s("span",{class:"token parameter variable"},"-g"),n(),s("span",{class:"token parameter variable"},"-u"),n(),s("span",{class:"token parameter variable"},"-d"),n(" $item"),s("span",{class:"token variable"},")")]),s("span",{class:"token entity",title:'\\"'},'\\"'),n(",SYMLINK+="),s("span",{class:"token entity",title:'\\"'},'\\"'),s("span",{class:"token variable"},"${V_RAC_ASM_FRA_ASMDISK_PREFFIX}"),s("span",{class:"token variable"},"$counter"),s("span",{class:"token entity",title:'\\"'},'\\"'),n(",OWNER="),s("span",{class:"token entity",title:'\\"'},'\\"'),n("grid"),s("span",{class:"token entity",title:'\\"'},'\\"'),n(",GROUP="),s("span",{class:"token entity",title:'\\"'},'\\"'),n("asmadmin"),s("span",{class:"token entity",title:'\\"'},'\\"'),n(",MODE="),s("span",{class:"token entity",title:'\\"'},'\\"'),n("0660"),s("span",{class:"token entity",title:'\\"'},'\\"'),n('"')]),n(),s("span",{class:"token operator"},">>"),n(`/etc/udev/rules.d/99-oracle-asmdevices.rules
        `),s("span",{class:"token assign-left variable"},"counter"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$(("),n("$counter "),s("span",{class:"token operator"},"+"),n(),s("span",{class:"token number"},"1"),s("span",{class:"token variable"},"))")]),n(`
    `),s("span",{class:"token keyword"},"done"),n(`

    `),s("span",{class:"token keyword"},"for"),n(),s("span",{class:"token for-or-select variable"},"hostip"),n(),s("span",{class:"token keyword"},"in"),n(),s("span",{class:"token variable"},[n("${"),s("span",{class:"token operator"},"!"),n("V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token punctuation"},"["),n("@"),s("span",{class:"token punctuation"},"]"),n("}")]),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"do"),n(`
        sshpass `),s("span",{class:"token parameter variable"},"-p"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},[n("${V_RAC_OS_ROOT_PASSWORD_ARR"),s("span",{class:"token punctuation"},"["),n("$hostip"),s("span",{class:"token punctuation"},"]"),n("}")]),n('"')]),n(),s("span",{class:"token function"},"scp"),n(),s("span",{class:"token parameter variable"},"-o"),n(),s("span",{class:"token assign-left variable"},"StrictHostKeyChecking"),s("span",{class:"token operator"},"="),n("no /etc/udev/rules.d/99-oracle-asmdevices.rules root@"),s("span",{class:"token variable"},[n("${V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token punctuation"},"["),n("$hostip"),s("span",{class:"token punctuation"},"]"),n("}")]),n(`:/etc/udev/rules.d/99-oracle-asmdevices.rules
    `),s("span",{class:"token keyword"},"done"),n(`

    `),s("span",{class:"token keyword"},"for"),n(),s("span",{class:"token for-or-select variable"},"hostip"),n(),s("span",{class:"token keyword"},"in"),n(),s("span",{class:"token variable"},[n("${"),s("span",{class:"token operator"},"!"),n("V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token punctuation"},"["),n("@"),s("span",{class:"token punctuation"},"]"),n("}")]),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"do"),n(`
        sshpass `),s("span",{class:"token parameter variable"},"-p"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},[n("${V_RAC_OS_ROOT_PASSWORD_ARR"),s("span",{class:"token punctuation"},"["),n("$hostip"),s("span",{class:"token punctuation"},"]"),n("}")]),n('"')]),n(),s("span",{class:"token function"},"ssh"),n(),s("span",{class:"token parameter variable"},"-o"),n(),s("span",{class:"token assign-left variable"},"StrictHostKeyChecking"),s("span",{class:"token operator"},"="),n("no root@"),s("span",{class:"token variable"},[n("${V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token punctuation"},"["),n("$hostip"),s("span",{class:"token punctuation"},"]"),n("}")]),n(),s("span",{class:"token function"},"bash"),n(),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},`SSHEOF
        udevadm control --reload
        udevadm trigger
SSHEOF`),n(`
    `),s("span",{class:"token keyword"},"done"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"DeconfigureASMUDEV"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"deconfiguring ASM by UDEV ..."'),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token operator"},"="),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$V_RAC_OS_PUBLIC_IP"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_OS_ROOT_PASSWORD_ARR"),s("span",{class:"token operator"},"="),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$V_RAC_OS_ROOT_PASSWORD"),s("span",{class:"token punctuation"},")"),n(`

    `),s("span",{class:"token keyword"},"for"),n(),s("span",{class:"token for-or-select variable"},"hostip"),n(),s("span",{class:"token keyword"},"in"),n(),s("span",{class:"token variable"},[n("${"),s("span",{class:"token operator"},"!"),n("V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token punctuation"},"["),n("@"),s("span",{class:"token punctuation"},"]"),n("}")]),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"do"),n(`
        sshpass `),s("span",{class:"token parameter variable"},"-p"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},[n("${V_RAC_OS_ROOT_PASSWORD_ARR"),s("span",{class:"token punctuation"},"["),n("$hostip"),s("span",{class:"token punctuation"},"]"),n("}")]),n('"')]),n(),s("span",{class:"token function"},"ssh"),n(),s("span",{class:"token parameter variable"},"-o"),n(),s("span",{class:"token assign-left variable"},"StrictHostKeyChecking"),s("span",{class:"token operator"},"="),n("no root@"),s("span",{class:"token variable"},[n("${V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token punctuation"},"["),n("$hostip"),s("span",{class:"token punctuation"},"]"),n("}")]),n(),s("span",{class:"token function"},"bash"),n(),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},`SSHEOF
        rm -f /etc/udev/rules.d/99-oracle-asmdevices.rules
        udevadm control --reload
        udevadm trigger
SSHEOF`),n(`
    `),s("span",{class:"token keyword"},"done"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"ConfigureASMNFS"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Configuring ASM by NFS ..."'),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Configuring NFS Server ..."'),n(`

    `),s("span",{class:"token assign-left variable"},"V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token operator"},"="),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$V_RAC_OS_PUBLIC_IP"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_OS_ROOT_PASSWORD_ARR"),s("span",{class:"token operator"},"="),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$V_RAC_OS_ROOT_PASSWORD"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_OS_NFS_SERVER_IP"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"10.10.12.214"'),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_OS_NFS_SERVER_OS_USER"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"root"'),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_OS_NFS_SERVER_OS_PASSWORD"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"root@123"'),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_OS_NFS_SERVER_MOUNT"),s("span",{class:"token operator"},"="),n(`/data/oracleasm
    `),s("span",{class:"token assign-left variable"},"V_RAC_OS_NFS_CLIENT_MOUNT"),s("span",{class:"token operator"},"="),n(`/data/oracleasm

    sshpass `),s("span",{class:"token parameter variable"},"-p"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$V_RAC_OS_NFS_SERVER_OS_PASSWORD"),n('"')]),n(),s("span",{class:"token function"},"ssh"),n(),s("span",{class:"token parameter variable"},"-o"),n(),s("span",{class:"token assign-left variable"},"StrictHostKeyChecking"),s("span",{class:"token operator"},"="),n("no root@"),s("span",{class:"token variable"},"$V_RAC_OS_NFS_SERVER_IP"),n(),s("span",{class:"token function"},"bash"),n(),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`SSHEOF
        yum install -y nfs-utils rpcbind

        mkdir -p `),s("span",{class:"token variable"},"$V_RAC_OS_NFS_SERVER_MOUNT"),n(`

        cat > /etc/exports <<NFSEOF
`),s("span",{class:"token variable"},"$V_RAC_OS_NFS_SERVER_MOUNT"),n(` *(rw,sync,no_wdelay,insecure,no_root_squash)
NFSEOF

systemctl enable nfs
systemctl restart nfs

showmount -e `),s("span",{class:"token variable"},"$V_RAC_OS_NFS_SERVER_IP"),n(`

SSHEOF`)]),n(`

    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Cofiguring NFS Client on every RAC nodes ..."'),n(`
    `),s("span",{class:"token keyword"},"for"),n(),s("span",{class:"token for-or-select variable"},"hostip"),n(),s("span",{class:"token keyword"},"in"),n(),s("span",{class:"token variable"},[n("${"),s("span",{class:"token operator"},"!"),n("V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token punctuation"},"["),n("@"),s("span",{class:"token punctuation"},"]"),n("}")]),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"do"),n(`
        sshpass `),s("span",{class:"token parameter variable"},"-p"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},[n("${V_RAC_OS_ROOT_PASSWORD_ARR"),s("span",{class:"token punctuation"},"["),n("$hostip"),s("span",{class:"token punctuation"},"]"),n("}")]),n('"')]),n(),s("span",{class:"token function"},"ssh"),n(),s("span",{class:"token parameter variable"},"-o"),n(),s("span",{class:"token assign-left variable"},"StrictHostKeyChecking"),s("span",{class:"token operator"},"="),n("no root@"),s("span",{class:"token variable"},[n("${V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token punctuation"},"["),n("$hostip"),s("span",{class:"token punctuation"},"]"),n("}")]),n(),s("span",{class:"token function"},"bash"),n(),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`SSHEOF
        yum install -y nfs-utils rpcbind
        mkdir -p `),s("span",{class:"token variable"},"$V_RAC_OS_NFS_CLIENT_MOUNT"),n(`
        cp /etc/fstab /etc/fstab.orabak
        cat >> /etc/fstab <<NFSEOF
`),s("span",{class:"token variable"},"$V_RAC_OS_NFS_SERVER_IP"),n(":"),s("span",{class:"token variable"},"$V_RAC_OS_NFS_SERVER_MOUNT"),n("   "),s("span",{class:"token variable"},"$V_RAC_OS_NFS_CLIENT_MOUNT"),n(`  nfs  rw,bg,hard,nointr,tcp,vers=3,timeo=600,rsize=32768,wsize=32768,actimeo=0  0 0
NFSEOF
        mount `),s("span",{class:"token variable"},"$V_RAC_OS_NFS_CLIENT_MOUNT"),n(`
SSHEOF`)]),n(`
    `),s("span",{class:"token keyword"},"done"),n(`

    `),s("span",{class:"token assign-left variable"},"counter"),s("span",{class:"token operator"},"="),s("span",{class:"token number"},"1"),n(`
    `),s("span",{class:"token keyword"},"for"),n(),s("span",{class:"token for-or-select variable"},"item"),n(),s("span",{class:"token keyword"},"in"),n(),s("span",{class:"token variable"},"$V_RAC_ASM_OCR_DISKS"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"do"),n(`
        `),s("span",{class:"token function"},"dd"),n(),s("span",{class:"token assign-left variable"},"if"),s("span",{class:"token operator"},"="),n("/dev/zero "),s("span",{class:"token assign-left variable"},"of"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$V_RAC_OS_NFS_CLIENT_MOUNT"),n("/"),s("span",{class:"token variable"},"${V_RAC_ASM_OCR_ASMDISK_PREFFIX}"),s("span",{class:"token variable"},"$counter"),n(),s("span",{class:"token assign-left variable"},"bs"),s("span",{class:"token operator"},"="),n("1k "),s("span",{class:"token assign-left variable"},"count"),s("span",{class:"token operator"},"="),s("span",{class:"token number"},"10000000"),n(`
        `),s("span",{class:"token assign-left variable"},"counter"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$(("),n("$counter "),s("span",{class:"token operator"},"+"),n(),s("span",{class:"token number"},"1"),s("span",{class:"token variable"},"))")]),n(`
    `),s("span",{class:"token keyword"},"done"),n(`

    `),s("span",{class:"token assign-left variable"},"counter"),s("span",{class:"token operator"},"="),s("span",{class:"token number"},"1"),n(`
    `),s("span",{class:"token keyword"},"for"),n(),s("span",{class:"token for-or-select variable"},"item"),n(),s("span",{class:"token keyword"},"in"),n(),s("span",{class:"token variable"},"$V_RAC_ASM_DATA_DISKS"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"do"),n(`
        `),s("span",{class:"token function"},"dd"),n(),s("span",{class:"token assign-left variable"},"if"),s("span",{class:"token operator"},"="),n("/dev/zero "),s("span",{class:"token assign-left variable"},"of"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$V_RAC_OS_NFS_CLIENT_MOUNT"),n("/"),s("span",{class:"token variable"},"${V_RAC_ASM_DATA_ASMDISK_PREFFIX}"),s("span",{class:"token variable"},"$counter"),n(),s("span",{class:"token assign-left variable"},"bs"),s("span",{class:"token operator"},"="),n("1k "),s("span",{class:"token assign-left variable"},"count"),s("span",{class:"token operator"},"="),s("span",{class:"token number"},"20000000"),n(`
        `),s("span",{class:"token assign-left variable"},"counter"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$(("),n("$counter "),s("span",{class:"token operator"},"+"),n(),s("span",{class:"token number"},"1"),s("span",{class:"token variable"},"))")]),n(`
    `),s("span",{class:"token keyword"},"done"),n(`

    `),s("span",{class:"token assign-left variable"},"counter"),s("span",{class:"token operator"},"="),s("span",{class:"token number"},"1"),n(`
    `),s("span",{class:"token keyword"},"for"),n(),s("span",{class:"token for-or-select variable"},"item"),n(),s("span",{class:"token keyword"},"in"),n(),s("span",{class:"token variable"},"$V_RAC_ASM_FRA_DISKS"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"do"),n(`
        `),s("span",{class:"token function"},"dd"),n(),s("span",{class:"token assign-left variable"},"if"),s("span",{class:"token operator"},"="),n("/dev/zero "),s("span",{class:"token assign-left variable"},"of"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$V_RAC_OS_NFS_CLIENT_MOUNT"),n("/"),s("span",{class:"token variable"},"${V_RAC_ASM_FRA_ASMDISK_PREFFIX}"),s("span",{class:"token variable"},"$counter"),n(),s("span",{class:"token assign-left variable"},"bs"),s("span",{class:"token operator"},"="),n("1k "),s("span",{class:"token assign-left variable"},"count"),s("span",{class:"token operator"},"="),s("span",{class:"token number"},"20000000"),n(`
        `),s("span",{class:"token assign-left variable"},"counter"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$(("),n("$counter "),s("span",{class:"token operator"},"+"),n(),s("span",{class:"token number"},"1"),s("span",{class:"token variable"},"))")]),n(`
    `),s("span",{class:"token keyword"},"done"),n(`

    `),s("span",{class:"token function"},"chown"),n(),s("span",{class:"token parameter variable"},"-R"),n(" grid:asmadmin "),s("span",{class:"token variable"},"$V_RAC_OS_NFS_CLIENT_MOUNT"),n("/"),s("span",{class:"token variable"},"${V_RAC_ASM_OCR_ASMDISK_PREFFIX}"),n(`*
    `),s("span",{class:"token function"},"chown"),n(),s("span",{class:"token parameter variable"},"-R"),n(" grid:asmadmin "),s("span",{class:"token variable"},"$V_RAC_OS_NFS_CLIENT_MOUNT"),n("/"),s("span",{class:"token variable"},"${V_RAC_ASM_DATA_ASMDISK_PREFFIX}"),n(`*
    `),s("span",{class:"token function"},"chown"),n(),s("span",{class:"token parameter variable"},"-R"),n(" grid:asmadmin "),s("span",{class:"token variable"},"$V_RAC_OS_NFS_CLIENT_MOUNT"),n("/"),s("span",{class:"token variable"},"${V_RAC_ASM_FRA_ASMDISK_PREFFIX}"),n(`*
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"DeconfigureASMNFS"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Deconfiguring ASM by NFS ..."'),n(`
    `),s("span",{class:"token assign-left variable"},"counter"),s("span",{class:"token operator"},"="),s("span",{class:"token number"},"1"),n(`
    `),s("span",{class:"token keyword"},"for"),n(),s("span",{class:"token for-or-select variable"},"item"),n(),s("span",{class:"token keyword"},"in"),n(),s("span",{class:"token variable"},"$V_RAC_ASM_OCR_DISKS"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"do"),n(`
        `),s("span",{class:"token function"},"rm"),n(),s("span",{class:"token parameter variable"},"-f"),n(),s("span",{class:"token variable"},"$V_RAC_OS_NFS_CLIENT_MOUNT"),n("/"),s("span",{class:"token variable"},"${V_RAC_ASM_OCR_ASMDISK_PREFFIX}"),s("span",{class:"token variable"},"$counter"),n(`
        `),s("span",{class:"token assign-left variable"},"counter"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$(("),n("$counter "),s("span",{class:"token operator"},"+"),n(),s("span",{class:"token number"},"1"),s("span",{class:"token variable"},"))")]),n(`
    `),s("span",{class:"token keyword"},"done"),n(`

    `),s("span",{class:"token assign-left variable"},"counter"),s("span",{class:"token operator"},"="),s("span",{class:"token number"},"1"),n(`
    `),s("span",{class:"token keyword"},"for"),n(),s("span",{class:"token for-or-select variable"},"item"),n(),s("span",{class:"token keyword"},"in"),n(),s("span",{class:"token variable"},"$V_RAC_ASM_DATA_DISKS"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"do"),n(`
        `),s("span",{class:"token function"},"rm"),n(),s("span",{class:"token parameter variable"},"-f"),n(),s("span",{class:"token variable"},"$V_RAC_OS_NFS_CLIENT_MOUNT"),n("/"),s("span",{class:"token variable"},"${V_RAC_ASM_DATA_ASMDISK_PREFFIX}"),s("span",{class:"token variable"},"$counter"),n(`
        `),s("span",{class:"token assign-left variable"},"counter"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$(("),n("$counter "),s("span",{class:"token operator"},"+"),n(),s("span",{class:"token number"},"1"),s("span",{class:"token variable"},"))")]),n(`
    `),s("span",{class:"token keyword"},"done"),n(`

    `),s("span",{class:"token assign-left variable"},"counter"),s("span",{class:"token operator"},"="),s("span",{class:"token number"},"1"),n(`
    `),s("span",{class:"token keyword"},"for"),n(),s("span",{class:"token for-or-select variable"},"item"),n(),s("span",{class:"token keyword"},"in"),n(),s("span",{class:"token variable"},"$V_RAC_ASM_FRA_DISKS"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"do"),n(`
        `),s("span",{class:"token function"},"rm"),n(),s("span",{class:"token parameter variable"},"-f"),n(),s("span",{class:"token variable"},"$V_RAC_OS_NFS_CLIENT_MOUNT"),n("/"),s("span",{class:"token variable"},"${V_RAC_ASM_FRA_ASMDISK_PREFFIX}"),s("span",{class:"token variable"},"$counter"),n(`
        `),s("span",{class:"token assign-left variable"},"counter"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$(("),n("$counter "),s("span",{class:"token operator"},"+"),n(),s("span",{class:"token number"},"1"),s("span",{class:"token variable"},"))")]),n(`
    `),s("span",{class:"token keyword"},"done"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"ConfigureASMISCSI"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Configuring ASM by ISCSI ..."'),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Configuring ISCSI Server ..."'),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token operator"},"="),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$V_RAC_OS_PUBLIC_IP"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_OS_ROOT_PASSWORD_ARR"),s("span",{class:"token operator"},"="),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$V_RAC_OS_ROOT_PASSWORD"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_OS_ISCSI_SERVER_IP"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"10.10.12.214"'),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_OS_ISCSI_SERVER_ALLOW_IPNET"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"10.10.12.0"'),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_OS_ISCSI_SERVER_ALLOW_NETMASK"),s("span",{class:"token operator"},"="),s("span",{class:"token number"},"24"),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_OS_ISCSI_SERVER_OS_USER"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"root"'),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_OS_ISCSI_SERVER_OS_PASSWORD"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"root@123"'),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_OS_ISCSI_SERVER_DISKS"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"/dev/sdc /dev/sdd /dev/sde /dev/sdf /dev/sdg"'),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_OS_ISCSI_SERVER_MOUNT"),s("span",{class:"token operator"},"="),n(`/data/oracleasm
    `),s("span",{class:"token assign-left variable"},"V_RAC_OS_ISCSI_CLIENT_MOUNT"),s("span",{class:"token operator"},"="),n(`/data/oracleasm
    `),s("span",{class:"token assign-left variable"},"V_RAC_OS_ISCSI_SERVER_MOUNT_IQN"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"iqn.abelit.com.oracle:rac"'),n(`

    `),s("span",{class:"token assign-left variable"},"target_disks"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'""'),n(`
    `),s("span",{class:"token keyword"},"for"),n(),s("span",{class:"token for-or-select variable"},"item"),n(),s("span",{class:"token keyword"},"in"),n(),s("span",{class:"token variable"},"$V_RAC_OS_ISCSI_SERVER_DISKS"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"do"),n(`
        `),s("span",{class:"token assign-left variable"},"target_disks"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$target_disks"),n(),s("span",{class:"token entity",title:"\\n"},"\\n"),n("backing-store   "),s("span",{class:"token variable"},"$item"),s("span",{class:"token entity",title:"\\n"},"\\n"),n('"')]),n(`
    `),s("span",{class:"token keyword"},"done"),n(`

    sshpass `),s("span",{class:"token parameter variable"},"-p"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$V_RAC_OS_ISCSI_SERVER_OS_PASSWORD"),n('"')]),n(),s("span",{class:"token function"},"ssh"),n(),s("span",{class:"token parameter variable"},"-o"),n(),s("span",{class:"token assign-left variable"},"StrictHostKeyChecking"),s("span",{class:"token operator"},"="),n("no root@"),s("span",{class:"token variable"},"$V_RAC_OS_ISCSI_SERVER_IP"),n(),s("span",{class:"token function"},"bash"),n(),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`SSHEOF
        yum install -y epel-release
        yum install -y targetcli scsi-target-utils libxslt
        systemctl enable target.service
        systemctl enable tgtd.service

        cat >> /etc/tgt/targets.conf <<EOF
<target `),s("span",{class:"token variable"},"$V_RAC_OS_ISCSI_SERVER_MOUNT_IQN"),n(`>
    `),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token parameter variable"},"-e"),n(" $target_disks"),s("span",{class:"token variable"},")")]),n(` 
    initiator-address `),s("span",{class:"token variable"},"$V_RAC_OS_ISCSI_SERVER_ALLOW_IPNET"),n("/"),s("span",{class:"token variable"},"$V_RAC_OS_ISCSI_SERVER_ALLOW_NETMASK"),n(`
    write-cache off
</target>
EOF

    tgtadm --lld iscsi --mode target --op show
    systemctl restart target.service
    systemctl restart tgtd.service
SSHEOF`)]),n(`

    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Configuring iscsi client ..."'),n(`
    `),s("span",{class:"token keyword"},"for"),n(),s("span",{class:"token for-or-select variable"},"hostip"),n(),s("span",{class:"token keyword"},"in"),n(),s("span",{class:"token variable"},[n("${"),s("span",{class:"token operator"},"!"),n("V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token punctuation"},"["),n("@"),s("span",{class:"token punctuation"},"]"),n("}")]),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"do"),n(`
        sshpass `),s("span",{class:"token parameter variable"},"-p"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},[n("${V_RAC_OS_ROOT_PASSWORD_ARR"),s("span",{class:"token punctuation"},"["),n("$hostip"),s("span",{class:"token punctuation"},"]"),n("}")]),n('"')]),n(),s("span",{class:"token function"},"ssh"),n(),s("span",{class:"token parameter variable"},"-o"),n(),s("span",{class:"token assign-left variable"},"StrictHostKeyChecking"),s("span",{class:"token operator"},"="),n("no root@"),s("span",{class:"token variable"},[n("${V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token punctuation"},"["),n("$hostip"),s("span",{class:"token punctuation"},"]"),n("}")]),n(),s("span",{class:"token function"},"bash"),n(),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`SSHEOF
        yum install -y iscsi-initiator-utils
        systemctl restart iscsid.service

        echo "InitiatorName=`),s("span",{class:"token variable"},"$V_RAC_OS_ISCSI_SERVER_MOUNT_IQN"),n(`" >> /etc/iscsi/initiatorname.iscsi

        systemctl enable iscsi.service
        systemctl restart iscsi.service

        iscsiadm -m discovery -tsendtargets -p `),s("span",{class:"token variable"},"$V_RAC_OS_ISCSI_SERVER_IP"),n(`:3260
        iscsiadm -m node -T discovery -T `),s("span",{class:"token variable"},"$V_RAC_OS_ISCSI_SERVER_MOUNT_IQN"),n(" -p "),s("span",{class:"token variable"},"$V_RAC_OS_ISCSI_SERVER_IP"),n(`:3260

        iscsiadm -m node -T `),s("span",{class:"token variable"},"$V_RAC_OS_ISCSI_SERVER_MOUNT_IQN"),n(" -p "),s("span",{class:"token variable"},"$V_RAC_OS_ISCSI_SERVER_IP"),n(`:3260 -l
        partprobe
        fdisk -l
SSHEOF`)]),n(`
    `),s("span",{class:"token keyword"},"done"),n(`

`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"ConfigASMDisks"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token keyword"},"if"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$V_RAC_ABELIT_ASM_TYPE"),n('"')]),n(),s("span",{class:"token operator"},"="),n(),s("span",{class:"token string"},'"asmlib"'),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"then"),n(`
        DownloadOracleASMLibPackage
        ConfigureASMOracleASMLib
    `),s("span",{class:"token keyword"},"elif"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$V_RAC_ABELIT_ASM_TYPE"),n('"')]),n(),s("span",{class:"token operator"},"="),n(),s("span",{class:"token string"},'"asmmultipath"'),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"then"),n(`
        ConfigureASMMultipath
    `),s("span",{class:"token keyword"},"elif"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$V_RAC_ABELIT_ASM_TYPE"),n('"')]),n(),s("span",{class:"token operator"},"="),n(),s("span",{class:"token string"},'"asmudev"'),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"then"),n(`
        ConfigureASMUDEV
    `),s("span",{class:"token keyword"},"elif"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$V_RAC_ABELIT_ASM_TYPE"),n('"')]),n(),s("span",{class:"token operator"},"="),n(),s("span",{class:"token string"},'"asmnfs"'),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"then"),n(`
        ConfigureASMNFS
    `),s("span",{class:"token keyword"},"else"),n(`
        `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"The specified asm storage type does not exist."'),n(`
        `),s("span",{class:"token builtin class-name"},"exit"),n(),s("span",{class:"token number"},"1"),n(`
    `),s("span",{class:"token keyword"},"fi"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"DeconfigASMDisks"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token keyword"},"if"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$V_RAC_ABELIT_ASM_TYPE"),n('"')]),n(),s("span",{class:"token operator"},"="),n(),s("span",{class:"token string"},'"asmlib"'),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"then"),n(`
        DeconfigureASMOracleASMLib
    `),s("span",{class:"token keyword"},"elif"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$V_RAC_ABELIT_ASM_TYPE"),n('"')]),n(),s("span",{class:"token operator"},"="),n(),s("span",{class:"token string"},'"asmmultipath"'),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"then"),n(`
        DeconfigureASMMultipath
    `),s("span",{class:"token keyword"},"elif"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$V_RAC_ABELIT_ASM_TYPE"),n('"')]),n(),s("span",{class:"token operator"},"="),n(),s("span",{class:"token string"},'"asmudev"'),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"then"),n(`
        DeconfigureASMUDEV
    `),s("span",{class:"token keyword"},"elif"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$V_RAC_ABELIT_ASM_TYPE"),n('"')]),n(),s("span",{class:"token operator"},"="),n(),s("span",{class:"token string"},'"asmnfs"'),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"then"),n(`
        DeconfigureASMNFS
    `),s("span",{class:"token keyword"},"else"),n(`
        `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"The specified asm storage type does not exist."'),n(`
        `),s("span",{class:"token builtin class-name"},"exit"),n(),s("span",{class:"token number"},"1"),n(`
    `),s("span",{class:"token keyword"},"fi"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"CheckNode"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token function"},"su"),n(" - "),s("span",{class:"token variable"},"$V_RAC_OS_GRID_USER"),n(),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOF
    `),s("span",{class:"token variable"},"$V_RAC_PACKAGE_GRID_INSTALLER"),n("/runcluvfy.sh stage -pre crsinst -n "),s("span",{class:"token variable"},"$V_RAC_INSTANCE_CLUSTER_NODES"),n(` -verbose
EOF`)]),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"ExtractPackage"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Unzipping grid software (on one node) ..."'),n(`
    `),s("span",{class:"token function"},"su"),n(" - "),s("span",{class:"token variable"},"$V_RAC_OS_GRID_USER"),n(),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOF
    for zipfile in `),s("span",{class:"token variable"},"$V_RAC_PACKAGE_GRID_FILES"),n(`; do
        unzip -oqn -d `),s("span",{class:"token variable"},"$V_RAC_PACKAGE_GRID_TARGET"),n(),s("span",{class:"token variable"},"$V_RAC_PACKAGE_ORACLE_ALL_SOURCE"),n("/\\"),s("span",{class:"token variable"},"$zipfile"),n(`
    done
EOF`)]),n(`
    `),s("span",{class:"token function"},"su"),n(" - "),s("span",{class:"token variable"},"$V_RAC_OS_ORACLE_USER"),n(),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOF
    for zipfile in `),s("span",{class:"token variable"},"$V_RAC_PACKAGE_DATABASE_FILES"),n(`; do
        unzip -oqn -d `),s("span",{class:"token variable"},"$V_RAC_PACKAGE_DATABASE_TARGET"),n(),s("span",{class:"token variable"},"$V_RAC_PACKAGE_ORACLE_ALL_SOURCE"),n("/\\"),s("span",{class:"token variable"},"$zipfile"),n(`
    done
EOF`)]),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"InstallBasePackage"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token operator"},"="),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$V_RAC_OS_PUBLIC_IP"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_OS_ROOT_PASSWORD_ARR"),s("span",{class:"token operator"},"="),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$V_RAC_OS_ROOT_PASSWORD"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Installing cvuqdisk ..."'),n(`
    `),s("span",{class:"token keyword"},"for"),n(),s("span",{class:"token for-or-select variable"},"hostip"),n(),s("span",{class:"token keyword"},"in"),n(),s("span",{class:"token variable"},[n("${"),s("span",{class:"token operator"},"!"),n("V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token punctuation"},"["),n("@"),s("span",{class:"token punctuation"},"]"),n("}")]),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"do"),n(`
        sshpass `),s("span",{class:"token parameter variable"},"-p"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},[n("${V_RAC_OS_ROOT_PASSWORD_ARR"),s("span",{class:"token punctuation"},"["),n("$hostip"),s("span",{class:"token punctuation"},"]"),n("}")]),n('"')]),n(),s("span",{class:"token function"},"scp"),n(),s("span",{class:"token parameter variable"},"-o"),n(),s("span",{class:"token assign-left variable"},"StrictHostKeyChecking"),s("span",{class:"token operator"},"="),n("no "),s("span",{class:"token variable"},"$V_RAC_PACKAGE_GRID_INSTALLER_RPM"),n("/cvuqdisk*.rpm root@"),s("span",{class:"token variable"},[n("${V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token punctuation"},"["),n("$hostip"),s("span",{class:"token punctuation"},"]"),n("}")]),s("span",{class:"token builtin class-name"},":"),s("span",{class:"token variable"},"$V_RAC_PACKAGE_ORACLE_ALL_SOURCE"),n(`/
        sshpass `),s("span",{class:"token parameter variable"},"-p"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},[n("${V_RAC_OS_ROOT_PASSWORD_ARR"),s("span",{class:"token punctuation"},"["),n("$hostip"),s("span",{class:"token punctuation"},"]"),n("}")]),n('"')]),n(),s("span",{class:"token function"},"ssh"),n(),s("span",{class:"token parameter variable"},"-o"),n(),s("span",{class:"token assign-left variable"},"StrictHostKeyChecking"),s("span",{class:"token operator"},"="),n("no root@"),s("span",{class:"token variable"},[n("${V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token punctuation"},"["),n("$hostip"),s("span",{class:"token punctuation"},"]"),n("}")]),n(),s("span",{class:"token function"},"bash"),n(),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`SSHEOF
            yum install -y `),s("span",{class:"token variable"},"$V_RAC_PACKAGE_ORACLE_ALL_SOURCE"),n(`/cvuqdisk*.rpm
SSHEOF`)]),n(`
    `),s("span",{class:"token keyword"},"done"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"InstallGridSoftware"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token operator"},"="),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$V_RAC_OS_PUBLIC_IP"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_OS_ROOT_PASSWORD_ARR"),s("span",{class:"token operator"},"="),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$V_RAC_OS_ROOT_PASSWORD"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_OS_HOSTNAME_ARR"),s("span",{class:"token operator"},"="),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$V_RAC_OS_HOSTNAME"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_OS_CURRENT_HOSTNAME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"hostname"),s("span",{class:"token variable"},")")]),n(`

    `),s("span",{class:"token comment"},'#     echo "Installing cvuqisk package to discovery shared disks for cluster  (on all node) ..."'),n(`
    `),s("span",{class:"token comment"},"#     for hostip in ${!V_RAC_OS_PUBLIC_IP_ARR[@]}; do"),n(`
    `),s("span",{class:"token comment"},'#         sshpass -p "${V_RAC_OS_ROOT_PASSWORD_ARR[$hostip]}" scp -o StrictHostKeyChecking=no $V_RAC_PACKAGE_GRID_INSTALLER/rpm/cvuqdisk*.rpm root@${V_RAC_OS_PUBLIC_IP_ARR[$hostip]}:$V_RAC_PACKAGE_ORACLE_ALL_SOURCE/'),n(`
    `),s("span",{class:"token comment"},'#         sshpass -p "${V_RAC_OS_ROOT_PASSWORD_ARR[$hostip]}" ssh -o StrictHostKeyChecking=no root@${V_RAC_OS_PUBLIC_IP_ARR[$hostip]} bash <<SSHEOF'),n(`
    `),s("span",{class:"token comment"},"#         yum install -y $V_RAC_PACKAGE_ORACLE_ALL_SOURCE/cvuqdisk*.rpm"),n(`
    `),s("span",{class:"token comment"},"# SSHEOF"),n(`
    `),s("span",{class:"token comment"},"#     done"),n(`

    `),s("span",{class:"token function"},"su"),n(" - "),s("span",{class:"token variable"},"$V_RAC_OS_GRID_USER"),n(),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOF
    echo "Saving grid installation response file to `),s("span",{class:"token variable"},"$V_RAC_OS_DBA_DIR"),n("/grid_install-"),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +"),s("span",{class:"token string"},"'%Y%m%d'"),s("span",{class:"token variable"},")")]),n(`.rsp (on one node) ..."
    echo "`),s("span",{class:"token variable"},"$V_RAC_GRID_INSTALL_OPTION"),n('" > '),s("span",{class:"token variable"},"$V_RAC_OS_DBA_DIR"),n("/grid_install-"),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +"),s("span",{class:"token string"},"'%Y%m%d'"),s("span",{class:"token variable"},")")]),n(`.rsp
    echo "Installing grid software (on one node) ..."
    `),s("span",{class:"token variable"},"$V_RAC_PACKAGE_GRID_INSTALLER_EXE"),n(),s("span",{class:"token variable"},"$V_RAC_GRID_INSTALL_OPTION"),n(`
EOF`)]),n(`
    `),s("span",{class:"token comment"},"# apply clusterware patch in rac 11g installation in RHEL 7.x+"),n(`
    `),s("span",{class:"token keyword"},"if"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},"$V_RAC_ORACLE_PRIMARY_VERSION"),n(),s("span",{class:"token parameter variable"},"-eq"),n(),s("span",{class:"token number"},"11"),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"then"),n(`
        `),s("span",{class:"token keyword"},"for"),n(),s("span",{class:"token for-or-select variable"},"hostip"),n(),s("span",{class:"token keyword"},"in"),n(),s("span",{class:"token variable"},[n("${"),s("span",{class:"token operator"},"!"),n("V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token punctuation"},"["),n("@"),s("span",{class:"token punctuation"},"]"),n("}")]),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"do"),n(`
            sshpass `),s("span",{class:"token parameter variable"},"-p"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},[n("${V_RAC_OS_ROOT_PASSWORD_ARR"),s("span",{class:"token punctuation"},"["),n("$hostip"),s("span",{class:"token punctuation"},"]"),n("}")]),n('"')]),n(),s("span",{class:"token function"},"scp"),n(),s("span",{class:"token parameter variable"},"-o"),n(),s("span",{class:"token assign-left variable"},"StrictHostKeyChecking"),s("span",{class:"token operator"},"="),n("no "),s("span",{class:"token variable"},"$V_RAC_PACKAGE_ORACLE_ALL_SOURCE"),n("/p18370031_112040_Linux-x86-64.zip root@"),s("span",{class:"token variable"},[n("${V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token punctuation"},"["),n("$hostip"),s("span",{class:"token punctuation"},"]"),n("}")]),s("span",{class:"token builtin class-name"},":"),s("span",{class:"token variable"},"$V_RAC_PACKAGE_ORACLE_ALL_SOURCE"),n(`/
            sshpass `),s("span",{class:"token parameter variable"},"-p"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},[n("${V_RAC_OS_ROOT_PASSWORD_ARR"),s("span",{class:"token punctuation"},"["),n("$hostip"),s("span",{class:"token punctuation"},"]"),n("}")]),n('"')]),n(),s("span",{class:"token function"},"ssh"),n(),s("span",{class:"token parameter variable"},"-o"),n(),s("span",{class:"token assign-left variable"},"StrictHostKeyChecking"),s("span",{class:"token operator"},"="),n("no root@"),s("span",{class:"token variable"},[n("${V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token punctuation"},"["),n("$hostip"),s("span",{class:"token punctuation"},"]"),n("}")]),n(),s("span",{class:"token function"},"bash"),n(),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`SSHEOF
        unzip -oqn -d `),s("span",{class:"token variable"},"$V_RAC_PACKAGE_ORACLE_ALL_SOURCE"),n(),s("span",{class:"token variable"},"$V_RAC_PACKAGE_ORACLE_ALL_SOURCE"),n(`/p18370031_112040_Linux-x86-64.zip
        chown -R `),s("span",{class:"token variable"},"$V_RAC_OS_GRID_USER"),n(":oinstall "),s("span",{class:"token variable"},"$V_RAC_PACKAGE_ORACLE_ALL_SOURCE"),n(`/18370031
        su - `),s("span",{class:"token variable"},"$V_RAC_OS_GRID_USER"),n(` <<EOF 
        `),s("span",{class:"token variable"},"$V_RAC_GRID_ORACLE_HOME"),n("/OPatch/opatch napply -oh "),s("span",{class:"token variable"},"$V_RAC_GRID_ORACLE_HOME"),n(" -local "),s("span",{class:"token variable"},"$V_RAC_PACKAGE_ORACLE_ALL_SOURCE"),n(`/18370031 -silent
EOF
SSHEOF`)]),n(`
        `),s("span",{class:"token keyword"},"done"),n(`
    `),s("span",{class:"token keyword"},"fi"),n(`

    `),s("span",{class:"token keyword"},"for"),n(),s("span",{class:"token for-or-select variable"},"hostip"),n(),s("span",{class:"token keyword"},"in"),n(),s("span",{class:"token variable"},[n("${"),s("span",{class:"token operator"},"!"),n("V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token punctuation"},"["),n("@"),s("span",{class:"token punctuation"},"]"),n("}")]),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"do"),n(`
        sshpass `),s("span",{class:"token parameter variable"},"-p"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},[n("${V_RAC_OS_ROOT_PASSWORD_ARR"),s("span",{class:"token punctuation"},"["),n("$hostip"),s("span",{class:"token punctuation"},"]"),n("}")]),n('"')]),n(),s("span",{class:"token function"},"ssh"),n(),s("span",{class:"token parameter variable"},"-o"),n(),s("span",{class:"token assign-left variable"},"StrictHostKeyChecking"),s("span",{class:"token operator"},"="),n("no root@"),s("span",{class:"token variable"},[n("${V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token punctuation"},"["),n("$hostip"),s("span",{class:"token punctuation"},"]"),n("}")]),n(),s("span",{class:"token function"},"bash"),n(),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`SSHEOF
            echo "Executing '`),s("span",{class:"token variable"},"${V_RAC_ORACLE_ORA_INVENTORY}"),n("/orainstRoot.sh' and '"),s("span",{class:"token variable"},"${V_RAC_GRID_ORACLE_HOME}"),n(`/root.sh' as root  (on all node by order) ..."
            `),s("span",{class:"token variable"},"${V_RAC_ORACLE_ORA_INVENTORY}"),n(`/orainstRoot.sh
            `),s("span",{class:"token variable"},"${V_RAC_GRID_ORACLE_HOME}"),n(`/root.sh
SSHEOF`)]),n(`
    `),s("span",{class:"token keyword"},"done"),n(`
    `),s("span",{class:"token function"},"su"),n(" - "),s("span",{class:"token variable"},"$V_RAC_OS_GRID_USER"),n(),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOF
    `),s("span",{class:"token variable"},"$V_RAC_PACKAGE_GRID_INSTALLER_CONFIG"),n(`
EOF`)]),n(`

    `),s("span",{class:"token function"},"su"),n(" - "),s("span",{class:"token variable"},"$V_RAC_OS_GRID_USER"),n(),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},`'EOF'
    echo "Query asm disk group ...."
    sqlplus / as sysasm <<'SQLEOF'
    set linesize 200
    col path format a30
    select inst_id,group_number,name,total_mb from gv$asm_diskgroup;
    select a.path,a.name,a.mode_status,b.name diskgroupname,b.type from v$asm_disk a,v$asm_diskgroup b where a.group_number=b.group_number;
    select inst_id,group_number,name,path from gv$asm_disk;
SQLEOF
EOF`),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"GetRACInformation"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token function"},"su"),n(" - "),s("span",{class:"token variable"},"$V_RAC_OS_GRID_USER"),n(),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},`'EOF'
    echo "Getting RAC Information ..."
    crsctl check cluster -all
    crsctl status resource -t 

    echo "Getting asm disk group ...."
    sqlplus / as sysasm <<'SQLEOF'
    set linesize 200
    col path format a30
    select inst_id,group_number,name,total_mb from gv$asm_diskgroup;
    select a.path,a.name,a.mode_status,b.name diskgroupname,b.type from v$asm_disk a,v$asm_diskgroup b where a.group_number=b.group_number;
    select inst_id,group_number,name,path from gv$asm_disk;
SQLEOF
EOF`),n(`

    `),s("span",{class:"token function"},"su"),n(" - "),s("span",{class:"token variable"},"$V_RAC_OS_ORACLE_USER"),n(),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},`'EOF'
    echo "Getting Database and Instance ...."
    sqlplus / as sysdba <<'SQLEOF'
    set linesize 200;
    select INST_ID,NAME,LOG_MODE,FORCE_LOGGING,OPEN_MODE,CURRENT_SCN,CREATED from gv$database;
    col host_name format 30;
    select INST_ID,INSTANCE_NAME,HOST_NAME,STARTUP_TIME,STATUS,THREAD#,DATABASE_STATUS from gv$instance;
    col file_name format a100;
    select FILE_NAME,TABLESPACE_NAME,BYTES,STATUS from dba_data_files;
    col member format a100;
    select t1.INST_ID,t1.GROUP#,t1.THREAD#,t1.SEQUENCE#,t1.MEMBERS,t2.member from gv$log t1 join gv$logfile t2 on t1.INST_ID=t2.INST_ID and t1.GROUP#=t2.GROUP#;
    col name format a100;
    select inst_id,name,status from gv$controlfile;
SQLEOF
EOF`),n(`

    `),s("span",{class:"token keyword"},"if"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},"$V_RAC_ORACLE_PRIMARY_VERSION"),n(),s("span",{class:"token parameter variable"},"-ge"),n(),s("span",{class:"token number"},"12"),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"then"),n(`
        `),s("span",{class:"token function"},"su"),n(" - "),s("span",{class:"token variable"},"$V_RAC_OS_ORACLE_USER"),n(),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},`'EOF'
    echo "Getting PDB information ...."
    sqlplus / as sysdba <<'SQLEOF'
    show pdbs;
SQLEOF
EOF`),n(`
    `),s("span",{class:"token keyword"},"fi"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"ModifyDiskgroupAttribute"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
    ALTER DISKGROUP DATA SET ATTRIBUTE `),s("span",{class:"token string"},"'compatible.asm'"),n(),s("span",{class:"token operator"},"="),n(),s("span",{class:"token string"},"'12.2'"),n(`
    ALTER DISKGROUP DATA SET ATTRIBUTE `),s("span",{class:"token string"},"'compatible.rdbms'"),n(),s("span",{class:"token operator"},"="),n(),s("span",{class:"token string"},"'12.2'"),n(`
    ALTER DISKGROUP DATA SET ATTRIBUTE `),s("span",{class:"token string"},"'compatible.advm'"),n(),s("span",{class:"token operator"},"="),n(),s("span",{class:"token string"},"'12.2'"),n(`

    ALTER DISKGROUP FRA SET ATTRIBUTE `),s("span",{class:"token string"},"'compatible.asm'"),n(),s("span",{class:"token operator"},"="),n(),s("span",{class:"token string"},"'12.2'"),n(`
    ALTER DISKGROUP FRA SET ATTRIBUTE `),s("span",{class:"token string"},"'compatible.rdbms'"),n(),s("span",{class:"token operator"},"="),n(),s("span",{class:"token string"},"'12.2'"),n(`
    ALTER DISKGROUP FRA SET ATTRIBUTE `),s("span",{class:"token string"},"'compatible.advm'"),n(),s("span",{class:"token operator"},"="),n(),s("span",{class:"token string"},"'12.2'"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"CreateASMDiskGroup"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Creating ASM disk group (on one node) ..."'),n(`
    `),s("span",{class:"token assign-left variable"},"data_asmdisks"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[n("${V_RAC_ASM_DATA_ASMDISKS"),s("span",{class:"token operator"},"/"),s("span",{class:"token operator"},"/"),n(),s("span",{class:"token operator"},"/"),s("span",{class:"token operator"},","),n("}")]),n(`
    `),s("span",{class:"token assign-left variable"},"fra_asmdisks"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[n("${V_RAC_ASM_FRA_ASMDISKS"),s("span",{class:"token operator"},"/"),s("span",{class:"token operator"},"/"),n(),s("span",{class:"token operator"},"/"),s("span",{class:"token operator"},","),n("}")]),n(`

    `),s("span",{class:"token function"},"su"),n(" - "),s("span",{class:"token variable"},"$V_RAC_OS_GRID_USER"),n(),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOF
    asmca -silent -createDiskGroup \\
    -diskGroupName `),s("span",{class:"token variable"},"$V_RAC_ASM_DATA_DISKGROUP_NAME"),n(` \\
       -diskList "`),s("span",{class:"token variable"},"$data_asmdisks"),n(`" \\
    -redundancy `),s("span",{class:"token variable"},"$V_RAC_ASM_DATA_REDUNDANCY"),n(` \\
    -au_size 64 \\
    -compatible.asm '`),s("span",{class:"token variable"},"$V_RAC_ASM_DISKGROUP_ASM_COMPATIBLE"),n(`' \\
    -compatible.rdbms '`),s("span",{class:"token variable"},"$V_RAC_ASM_DISKGROUP_RDBMMS_COMPATIBLE"),n(`' 
    
    asmca -silent -createDiskGroup \\
    -diskGroupName `),s("span",{class:"token variable"},"$V_RAC_ASM_FRA_DISKGROUP_NAME"),n(` \\
       -diskList "`),s("span",{class:"token variable"},"$fra_asmdisks"),n(`" \\
    -redundancy `),s("span",{class:"token variable"},"$V_RAC_ASM_FRA_REDUNDANCY"),n(` \\
    -au_size 64 \\
    -compatible.asm '`),s("span",{class:"token variable"},"$V_RAC_ASM_DISKGROUP_ASM_COMPATIBLE"),n(`' \\
    -compatible.rdbms '`),s("span",{class:"token variable"},"$V_RAC_ASM_DISKGROUP_RDBMMS_COMPATIBLE"),n(`' 
EOF`)]),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"InstallDatabaseSoftware"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token operator"},"="),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$V_RAC_OS_PUBLIC_IP"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_OS_ROOT_PASSWORD_ARR"),s("span",{class:"token operator"},"="),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$V_RAC_OS_ROOT_PASSWORD"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_OS_HOSTNAME_ARR"),s("span",{class:"token operator"},"="),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$V_RAC_OS_HOSTNAME"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_OS_CURRENT_HOSTNAME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"hostname"),s("span",{class:"token variable"},")")]),n(`

    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Unzipping database software (on one node) ..."'),n(`
    `),s("span",{class:"token function"},"su"),n(" - "),s("span",{class:"token variable"},"$V_RAC_OS_ORACLE_USER"),n(),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOF
    echo "Installing database software (on one node) ..."
    echo "`),s("span",{class:"token variable"},"$V_RAC_ORACLE_INSTALL_OPTION"),n('" > '),s("span",{class:"token variable"},"$V_RAC_OS_DBA_DIR"),n("/db_install-"),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +"),s("span",{class:"token string"},"'%Y%m%d'"),s("span",{class:"token variable"},")")]),n(`.rsp
    `),s("span",{class:"token variable"},"$V_RAC_PACKAGE_DATABASE_INSTALLER_EXE"),n(),s("span",{class:"token variable"},"$V_RAC_ORACLE_INSTALL_OPTION"),n(`
EOF`)]),n(`

    `),s("span",{class:"token keyword"},"for"),n(),s("span",{class:"token for-or-select variable"},"hostip"),n(),s("span",{class:"token keyword"},"in"),n(),s("span",{class:"token variable"},[n("${"),s("span",{class:"token operator"},"!"),n("V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token punctuation"},"["),n("@"),s("span",{class:"token punctuation"},"]"),n("}")]),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"do"),n(`
        sshpass `),s("span",{class:"token parameter variable"},"-p"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},[n("${V_RAC_OS_ROOT_PASSWORD_ARR"),s("span",{class:"token punctuation"},"["),n("$hostip"),s("span",{class:"token punctuation"},"]"),n("}")]),n('"')]),n(),s("span",{class:"token function"},"ssh"),n(),s("span",{class:"token parameter variable"},"-o"),n(),s("span",{class:"token assign-left variable"},"StrictHostKeyChecking"),s("span",{class:"token operator"},"="),n("no root@"),s("span",{class:"token variable"},[n("${V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token punctuation"},"["),n("$hostip"),s("span",{class:"token punctuation"},"]"),n("}")]),n(),s("span",{class:"token function"},"bash"),n(),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`SSHEOF
        echo "Executing '`),s("span",{class:"token variable"},"${V_RAC_ORACLE_ORA_INVENTORY}"),n("/orainstRoot.sh' and '"),s("span",{class:"token variable"},"${V_RAC_ORACLE_HOME}"),n(`/root.sh' as root (on all nodes by order) ..."
        `),s("span",{class:"token variable"},"$V_RAC_ORACLE_ORA_INVENTORY"),n(`/orainstRoot.sh
        `),s("span",{class:"token variable"},"$V_RAC_ORACLE_HOME"),n(`/root.sh
SSHEOF`)]),n(`
    `),s("span",{class:"token keyword"},"done"),n(`

    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"Installed database software '),s("span",{class:"token variable"},"$V_RAC_ORACLE_DATABASE_VERSION"),n(' successfully!"')]),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"CreateNetca"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Creating netca ..."'),n(`
    `),s("span",{class:"token function"},"su"),n(" - "),s("span",{class:"token variable"},"$V_RAC_OS_ORACLE_USER"),n(),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOF
echo "12.Create the listener ..."
netca -silent -responsefile `),s("span",{class:"token variable"},"${V_RAC_ORACLE_HOME}"),n("/assistants/netca/netca.rsp -lisport "),s("span",{class:"token variable"},"$V_RAC_CRS_SCANPORT"),n(`
echo "12.Start the listener ..."
lsnrctl start
EOF`)]),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"CreateDatabase"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Creating database (on one node) ..."'),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_ORACLE_SID_CURRENT"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"hostname"),s("span",{class:"token variable"},")")]),n(`
    `),s("span",{class:"token function"},"su"),n(" - "),s("span",{class:"token variable"},"$V_RAC_OS_ORACLE_USER"),n(),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOF
echo "Starting the listener ..."
lsnrctl start

echo "Saving database installation response to `),s("span",{class:"token variable"},"$V_RAC_OS_DBA_DIR"),n("/dbca-"),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +"),s("span",{class:"token string"},"'%Y%m%d'"),s("span",{class:"token variable"},")")]),n(`.rsp (on one node) ..."
echo `),s("span",{class:"token variable"},"$V_RAC_ORACLE_DBCA_OPTION"),n(" >  "),s("span",{class:"token variable"},"$V_RAC_OS_DBA_DIR"),n("/dbca-"),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +"),s("span",{class:"token string"},"'%Y%m%d'"),s("span",{class:"token variable"},")")]),n(`.rsp
dbca -silent -createDatabase -templateName General_Purpose.dbc `),s("span",{class:"token variable"},"$V_RAC_ORACLE_DBCA_OPTION"),n(`
   
echo "Created rac database `),s("span",{class:"token variable"},"$V_RAC_ORACLE_DATABASE_VERSION"),n(` successfully!"
EOF`)]),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"SetFirewall"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token comment"},"# add allow port to firewalld"),n(`
    systemctl start firewalld
    firewall-cmd --add-port`),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$V_RAC_CRS_SCANPORT"),n(),s("span",{class:"token parameter variable"},"--zone"),s("span",{class:"token operator"},"="),n("public "),s("span",{class:"token parameter variable"},"--permanent"),n(`
    firewall-cmd `),s("span",{class:"token parameter variable"},"--reload"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"RemoveAll"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token operator"},"="),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$V_RAC_OS_PUBLIC_IP"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token assign-left variable"},"V_RAC_OS_ROOT_PASSWORD_ARR"),s("span",{class:"token operator"},"="),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$V_RAC_OS_ROOT_PASSWORD"),s("span",{class:"token punctuation"},")"),n(`

    `),s("span",{class:"token function"},"su"),n(" - "),s("span",{class:"token variable"},"$V_RAC_OS_ORACLE_USER"),n(),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOF
    echo "Uninstall database ..."
    dbca -silent -deleteDatabase -sourceDB `),s("span",{class:"token variable"},"$V_RAC_ORACLE_UNQNAME"),n(" -sysDBAPassword "),s("span",{class:"token variable"},"$V_RAC_ORACLE_SYS_PASSWORD"),n(`
EOF`)]),n(`

    `),s("span",{class:"token variable"},"$V_RAC_GRID_ORACLE_HOME"),n("/bin/crsctl stop cluster "),s("span",{class:"token parameter variable"},"-all"),n(`
     `),s("span",{class:"token keyword"},"for"),n(),s("span",{class:"token for-or-select variable"},"hostip"),n(),s("span",{class:"token keyword"},"in"),n(),s("span",{class:"token variable"},[n("${"),s("span",{class:"token operator"},"!"),n("V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token punctuation"},"["),n("@"),s("span",{class:"token punctuation"},"]"),n("}")]),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"do"),n(`
        sshpass `),s("span",{class:"token parameter variable"},"-p"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},[n("${V_RAC_OS_ROOT_PASSWORD_ARR"),s("span",{class:"token punctuation"},"["),n("$hostip"),s("span",{class:"token punctuation"},"]"),n("}")]),n('"')]),n(),s("span",{class:"token function"},"ssh"),n(),s("span",{class:"token parameter variable"},"-o"),n(),s("span",{class:"token assign-left variable"},"StrictHostKeyChecking"),s("span",{class:"token operator"},"="),n("no root@"),s("span",{class:"token variable"},[n("${V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token punctuation"},"["),n("$hostip"),s("span",{class:"token punctuation"},"]"),n("}")]),n(),s("span",{class:"token function"},"bash"),n(),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`SSHEOF
    echo "Stopping crs ..."
    `),s("span",{class:"token variable"},"$V_RAC_GRID_ORACLE_HOME"),n(`/bin/crsctl stop crs
SSHEOF`)]),n(`
    `),s("span",{class:"token keyword"},"done"),n(`

    `),s("span",{class:"token keyword"},"for"),n(),s("span",{class:"token for-or-select variable"},"hostip"),n(),s("span",{class:"token keyword"},"in"),n(),s("span",{class:"token variable"},[n("${"),s("span",{class:"token operator"},"!"),n("V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token punctuation"},"["),n("@"),s("span",{class:"token punctuation"},"]"),n("}")]),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"do"),n(`
        sshpass `),s("span",{class:"token parameter variable"},"-p"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},[n("${V_RAC_OS_ROOT_PASSWORD_ARR"),s("span",{class:"token punctuation"},"["),n("$hostip"),s("span",{class:"token punctuation"},"]"),n("}")]),n('"')]),n(),s("span",{class:"token function"},"ssh"),n(),s("span",{class:"token parameter variable"},"-o"),n(),s("span",{class:"token assign-left variable"},"StrictHostKeyChecking"),s("span",{class:"token operator"},"="),n("no root@"),s("span",{class:"token variable"},[n("${V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token punctuation"},"["),n("$hostip"),s("span",{class:"token punctuation"},"]"),n("}")]),n(),s("span",{class:"token function"},"bash"),n(),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},`'SSHEOF'
    echo "Shutdown database and stop listener ..."
    $V_RAC_GRID_ORACLE_HOME/bin/crsctl stop crs
    while true; do
        oracle_processes=$(ps -ef | grep -E "oracle|grid" | grep -v "grep" | awk -F ' ' '{print $2}')
        oracle_processes_count=$(ps -ef | grep -E "oracle|grid" | grep -v "grep" | awk -F ' ' '{print $2}'|wc -l)
        if [ $oracle_processes_count -gt 0 ]; then
            echo "There existing some oracle processes and killing all of theme ..." $oracle_processes
            kill -9 $oracle_processes
        else 
            echo "All of oracle processes have been killed"
            break
        fi
    done
SSHEOF`),n(`
    `),s("span",{class:"token keyword"},"done"),n(`

    `),s("span",{class:"token keyword"},"for"),n(),s("span",{class:"token for-or-select variable"},"hostip"),n(),s("span",{class:"token keyword"},"in"),n(),s("span",{class:"token variable"},[n("${"),s("span",{class:"token operator"},"!"),n("V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token punctuation"},"["),n("@"),s("span",{class:"token punctuation"},"]"),n("}")]),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"do"),n(`
        sshpass `),s("span",{class:"token parameter variable"},"-p"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},[n("${V_RAC_OS_ROOT_PASSWORD_ARR"),s("span",{class:"token punctuation"},"["),n("$hostip"),s("span",{class:"token punctuation"},"]"),n("}")]),n('"')]),n(),s("span",{class:"token function"},"ssh"),n(),s("span",{class:"token parameter variable"},"-o"),n(),s("span",{class:"token assign-left variable"},"StrictHostKeyChecking"),s("span",{class:"token operator"},"="),n("no root@"),s("span",{class:"token variable"},[n("${V_RAC_OS_PUBLIC_IP_ARR"),s("span",{class:"token punctuation"},"["),n("$hostip"),s("span",{class:"token punctuation"},"]"),n("}")]),n(),s("span",{class:"token function"},"bash"),n(),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`SSHEOF
    echo "Shutdown database and stop listener ..."
    su - `),s("span",{class:"token variable"},"$V_RAC_OS_ORACLE_USER"),n(` <<OUT
sqlplus / as sysdba <<SQL
shutdown immediate;
SQL
lsnrctl stop
OUT

    echo "Removing oraInst.loc and oratab file ..."
    rm -f /etc/oraInst.loc
    rm -f /etc/oratab

    rm -rf /etc/oracle

    rm -rf /var/tmp/.oracle*
    rm -rf /tmp/.oracle*

    rm -rf /var/tmp/*
    rm -rf /tmp/*

    rm -rf  /etc/init.d/init.tfa
    rm -rf /etc/init.d/init.ohasd

    echo "Removing database file and database software ..."
    rm -rf `),s("span",{class:"token variable"},"$V_RAC_GRID_ORACLE_BASE"),n(),s("span",{class:"token variable"},"$V_RAC_GRID_ORACLE_HOME"),n(),s("span",{class:"token variable"},"$V_RAC_ORACLE_ORA_INVENTORY"),n(`
    rm -rf `),s("span",{class:"token variable"},"$V_RAC_ORACLE_HOME"),n(`
    rm -rf `),s("span",{class:"token variable"},"$V_RAC_GRID_APP_ROOTDIR"),n(`
    rm -rf `),s("span",{class:"token variable"},"$V_RAC_ORACLE_APP_ROOTDIR"),n(`

    echo "Removing Oracle Group and User ..."
    userdel `),s("span",{class:"token variable"},"$V_RAC_OS_ORACLE_USER"),n(`
    rm -rf /home/`),s("span",{class:"token variable"},"$V_RAC_OS_ORACLE_USER"),n(`

    userdel `),s("span",{class:"token variable"},"$V_RAC_OS_GRID_USER"),n(`
    rm -rf /home/`),s("span",{class:"token variable"},"$V_RAC_OS_GRID_USER"),n(`

    groupdel oinstall
    groupdel dba
    groupdel oper
    groupdel backupdba
    groupdel dgdba
    groupdel kmdba
    groupdel asmdba
    groupdel asmoper
    groupdel asmadmin
    groupdel racdba

    echo "Reset Resource Usage Limit ..."
    cp -f /etc/pam.d/login.orabak /etc/pam.d/login
    cp -f /etc/security/limits.conf.orabak /etc/security/limits.conf

    echo "Reset sysctl.conf ..."
    cp -f /etc/sysctl.conf.orabak /etc/sysctl.conf

    echo "Reset hosts ..."
    cp /etc/hosts.orabak /etc/hosts
SSHEOF`)]),n(`
    `),s("span",{class:"token keyword"},"done"),n(`

    `),s("span",{class:"token keyword"},"for"),n(),s("span",{class:"token for-or-select variable"},"item"),n(),s("span",{class:"token keyword"},"in"),n(),s("span",{class:"token variable"},"$V_RAC_ASM_OCR_DISKS"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"do"),n(`
        `),s("span",{class:"token function"},"dd"),n(),s("span",{class:"token assign-left variable"},"if"),s("span",{class:"token operator"},"="),n("/dev/zero "),s("span",{class:"token assign-left variable"},"of"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$item"),n(),s("span",{class:"token assign-left variable"},"bs"),s("span",{class:"token operator"},"="),n("1M "),s("span",{class:"token assign-left variable"},"count"),s("span",{class:"token operator"},"="),s("span",{class:"token number"},"30000"),n(`
    `),s("span",{class:"token keyword"},"done"),n(`
    `),s("span",{class:"token keyword"},"for"),n(),s("span",{class:"token for-or-select variable"},"item"),n(),s("span",{class:"token keyword"},"in"),n(),s("span",{class:"token variable"},"$V_RAC_ASM_DATA_DISKS"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"do"),n(`
        `),s("span",{class:"token function"},"dd"),n(),s("span",{class:"token assign-left variable"},"if"),s("span",{class:"token operator"},"="),n("/dev/zero "),s("span",{class:"token assign-left variable"},"of"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$item"),n(),s("span",{class:"token assign-left variable"},"bs"),s("span",{class:"token operator"},"="),n("1M "),s("span",{class:"token assign-left variable"},"count"),s("span",{class:"token operator"},"="),s("span",{class:"token number"},"30000"),n(`
    `),s("span",{class:"token keyword"},"done"),n(`
    `),s("span",{class:"token keyword"},"for"),n(),s("span",{class:"token for-or-select variable"},"item"),n(),s("span",{class:"token keyword"},"in"),n(),s("span",{class:"token variable"},"$V_RAC_ASM_FRA_DISKS"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"do"),n(`
        `),s("span",{class:"token function"},"dd"),n(),s("span",{class:"token assign-left variable"},"if"),s("span",{class:"token operator"},"="),n("/dev/zero "),s("span",{class:"token assign-left variable"},"of"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$item"),n(),s("span",{class:"token assign-left variable"},"bs"),s("span",{class:"token operator"},"="),n("1M "),s("span",{class:"token assign-left variable"},"count"),s("span",{class:"token operator"},"="),s("span",{class:"token number"},"30000"),n(`
    `),s("span",{class:"token keyword"},"done"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"ConfigureNetwork"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
    nmcli con `),s("span",{class:"token function"},"add"),n(),s("span",{class:"token builtin class-name"},"type"),n(" ethernet con-name eth1 ifname eth1 ip4 "),s("span",{class:"token number"},"10.10"),n(".100.212/24 gw4 "),s("span",{class:"token string"},'""'),n(` ipv4.method manual
    nmcli con up eth1 ifname eth1
    nmcli con mod eth1 ipv4.method manual

    nmcli con `),s("span",{class:"token function"},"add"),n(),s("span",{class:"token builtin class-name"},"type"),n(" ethernet con-name eth1 ifname eth1 ip4 "),s("span",{class:"token number"},"10.10"),n(".100.213/24 gw4 "),s("span",{class:"token string"},'""'),n(` ipv4.method manual
    nmcli con up eth1 ifname eth1

    nmcli con delete `),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),n("nmcli con show "),s("span",{class:"token operator"},"|"),n(),s("span",{class:"token function"},"grep"),n(),s("span",{class:"token string"},"'Wire'"),n(),s("span",{class:"token operator"},"|"),n(),s("span",{class:"token function"},"awk"),n(" -F"),s("span",{class:"token string"},"' '"),n(),s("span",{class:"token string"},"'{print $4}'"),s("span",{class:"token variable"},")")]),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"Step"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$0"),n(" ipkg --> "),s("span",{class:"token variable"},"$0"),n(" download --> "),s("span",{class:"token variable"},"$0"),n(" extract --> "),s("span",{class:"token variable"},"$0"),n(" ibp --> "),s("span",{class:"token variable"},"$0"),n(" <asmudev/asmmultipath/asmlib/asmnfs> --> "),s("span",{class:"token variable"},"$0"),n(" igrid --> "),s("span",{class:"token variable"},"$0"),n(" asmdg --> "),s("span",{class:"token variable"},"$0"),n(" idb --> "),s("span",{class:"token variable"},"$0"),n(' createdb"')]),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"test"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"This is test ..."'),n(`
    `),s("span",{class:"token comment"},'# FOO="none foo"'),n(`
    `),s("span",{class:"token comment"},'# BAR="none bar"'),n(`
    `),s("span",{class:"token comment"},"# echo $FOO --- $BAR --- previous"),n(`
    `),s("span",{class:"token comment"},'# test_options "$@"'),n(`
    `),s("span",{class:"token comment"},"# echo $FOO --- $BAR --- after"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token variable"},"$V_RAC_ASM_DATA_ASMDISKS"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token variable"},"$V_RAC_ASM_FRA_ASMDISKS"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token variable"},"$V_RAC_ASM_OCR_ASMDISKS"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token variable"},"$V_RAC_ASM_DISKGROUP_DISKDISCOVERY"),n(`

`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"test_options"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token keyword"},"while"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},[n("${"),s("span",{class:"token operator"},"#"),n("}")]),n(),s("span",{class:"token parameter variable"},"-gt"),n(),s("span",{class:"token number"},"0"),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"do"),n(`
        `),s("span",{class:"token assign-left variable"},"error_message"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},[n(`"Error: a value is needed for '`),s("span",{class:"token variable"},"$1"),n(`'"`)]),n(`
        `),s("span",{class:"token keyword"},"case"),n(),s("span",{class:"token variable"},"$1"),n(),s("span",{class:"token keyword"},"in"),n(`
        `),s("span",{class:"token parameter variable"},"-f"),n(),s("span",{class:"token operator"},"|"),n(" --foo"),s("span",{class:"token punctuation"},")"),n(`
            `),s("span",{class:"token assign-left variable"},"FOO"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[n("${2"),s("span",{class:"token operator"},":?"),n("$error_message}")]),n(`
            `),s("span",{class:"token builtin class-name"},"shift"),n(),s("span",{class:"token number"},"2"),n(`
            `),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
        `),s("span",{class:"token parameter variable"},"-b"),n(),s("span",{class:"token operator"},"|"),n(" --bar"),s("span",{class:"token punctuation"},")"),n(`
            `),s("span",{class:"token assign-left variable"},"BAR"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[n("${2"),s("span",{class:"token operator"},":?"),n("$error_message}")]),n(`
            `),s("span",{class:"token builtin class-name"},"shift"),n(),s("span",{class:"token number"},"2"),n(`
            `),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
        *`),s("span",{class:"token punctuation"},")"),n(`
            `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"unknown option '),s("span",{class:"token variable"},"$1"),n('"')]),n(`
            `),s("span",{class:"token builtin class-name"},"break"),n(`
            `),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
        `),s("span",{class:"token keyword"},"esac"),n(`
    `),s("span",{class:"token keyword"},"done"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"Usage"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token function"},"cat"),n(),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOF
Usage: `),s("span",{class:"token variable"},"$0"),n(` <subcommand> [option]
    subcommand:
       help, help message.
       asm, configure asm disks
       asmdg, create asm disk group by asmca.
       asmiscsi, configure asm by iscsi.
       check, check node requirements.
       createdb, create database.
       download, download database package.
       enable, enable database auto startup after system boot/reboot.
       extract, extract packages.
       firewall, set firewall.
       get, get rac information.
       iall, install dependency,grid software,database software,create database.
       ibp, install base packages, eg. cvuqdisk.*    
       idb, install database software.
       igrid, install grid software.
       ipkg, install oracle dependency.  
       rasm, deconfigure or remove asm disks.
       rasmiscsi, deconfigure asm by iscsi.
       remove, uninstall database.
       step, show Oracle RAC installation steps.
EOF`)]),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"if"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$1"),n('"')]),n(),s("span",{class:"token operator"},"!="),n(),s("span",{class:"token string"},'"help"'),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"then"),n(`
    PreConfigurePackage
`),s("span",{class:"token keyword"},"fi"),n(`

`),s("span",{class:"token keyword"},"case"),n(),s("span",{class:"token variable"},"$1"),n(),s("span",{class:"token keyword"},"in"),n(`
igrid `),s("span",{class:"token operator"},"|"),n(" iall "),s("span",{class:"token operator"},"|"),n(" idb "),s("span",{class:"token operator"},"|"),n(" createdb "),s("span",{class:"token operator"},"|"),n(" asmdg "),s("span",{class:"token operator"},"|"),n(" asm "),s("span",{class:"token operator"},"|"),n(" rasm"),s("span",{class:"token punctuation"},")"),n(`
    PreConfigureDatabase `),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},[n("${@"),s("span",{class:"token operator"},":"),n("2}")]),n('"')]),n(`
    `),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
*`),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token keyword"},"esac"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"main"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token keyword"},"if"),n(),s("span",{class:"token variable"},[s("span",{class:"token punctuation"},"(("),n("${#} "),s("span",{class:"token operator"},"=="),n(),s("span",{class:"token number"},"0"),s("span",{class:"token punctuation"},"))")]),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"then"),n(`
        Usage `),s("span",{class:"token number"},"0"),n(`
        `),s("span",{class:"token builtin class-name"},"exit"),n(),s("span",{class:"token number"},"1"),n(`
    `),s("span",{class:"token keyword"},"fi"),n(`

    `),s("span",{class:"token keyword"},"case"),n(),s("span",{class:"token variable"},"${1}"),n(),s("span",{class:"token keyword"},"in"),n(`
    `),s("span",{class:"token builtin class-name"},"help"),s("span",{class:"token punctuation"},")"),n(`
        Usage
        `),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    asm`),s("span",{class:"token punctuation"},")"),n(`
        ConfigASMDisks
        `),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    asmdg`),s("span",{class:"token punctuation"},")"),n(`
        CreateASMDiskGroup
        `),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    asmiscsi`),s("span",{class:"token punctuation"},")"),n(`
        ConfigureASMISCSI
        `),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    check`),s("span",{class:"token punctuation"},")"),n(`
        CheckNode
        `),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    createdb`),s("span",{class:"token punctuation"},")"),n(`
        CreateDatabase
        `),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    download`),s("span",{class:"token punctuation"},")"),n(`
        DownloadOraclePackage
        `),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    `),s("span",{class:"token builtin class-name"},"enable"),s("span",{class:"token punctuation"},")"),n(`
        EnableAutoStartup
        `),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    extract`),s("span",{class:"token punctuation"},")"),n(`
        ExtractPackage
        `),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    firewall`),s("span",{class:"token punctuation"},")"),n(`
        SetFirewall
        `),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    get`),s("span",{class:"token punctuation"},")"),n(`
        GetRACInformation
        `),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    iall`),s("span",{class:"token punctuation"},")"),n(`
        `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Installing Oracle RAC in one step ..."'),n(`
        InstallDependency
        DownloadOraclePackage
        ExtractPackage
        InstallBasePackage
        ConfigASMDisks
        InstallGridSoftware
        CreateASMDiskGroup
        InstallDatabaseSoftware
        CreateDatabase
        `),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    ibp`),s("span",{class:"token punctuation"},")"),n(`
        InstallBasePackage
        `),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    idb`),s("span",{class:"token punctuation"},")"),n(`
        InstallDatabaseSoftware
        `),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    igrid`),s("span",{class:"token punctuation"},")"),n(`
        InstallGridSoftware
        `),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    ipkg`),s("span",{class:"token punctuation"},")"),n(`
        InstallDependency
        `),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    remove`),s("span",{class:"token punctuation"},")"),n(`
        RemoveAll
        `),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    rasm`),s("span",{class:"token punctuation"},")"),n(`
        DeconfigASMDisks
        `),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    step`),s("span",{class:"token punctuation"},")"),n(`
        Step
        `),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    `),s("span",{class:"token builtin class-name"},"test"),s("span",{class:"token punctuation"},")"),n(`
        `),s("span",{class:"token builtin class-name"},"test"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},[n("${@"),s("span",{class:"token operator"},":"),n("2}")]),n('"')]),n(`
        `),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    *`),s("span",{class:"token punctuation"},")"),n(`
        `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"unknown command: '),s("span",{class:"token variable"},"$1"),n('"')]),n(`
        Usage
        `),s("span",{class:"token builtin class-name"},"exit"),n(),s("span",{class:"token number"},"1"),n(`
        `),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    `),s("span",{class:"token keyword"},"esac"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token assign-left variable"},"STARTTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
main `),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$@"),n('"')]),n(`
`),s("span",{class:"token assign-left variable"},"ENDTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"Completed and elapsed time: '),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$(("),n("$ENDTIME "),s("span",{class:"token operator"},"-"),n(" $STARTTIME"),s("span",{class:"token variable"},"))")]),n(' s"')]),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),v=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token shebang important"},"#!/bin/bash"),n(`
`),s("span",{class:"token comment"},"############ Author begin ##################################################"),n(`
`),s("span",{class:"token comment"},"## Author: Ableit"),n(`
`),s("span",{class:"token comment"},"## Date: 2022-07-20"),n(`
`),s("span",{class:"token comment"},"## Desc: Install Oracle Database"),n(`
`),s("span",{class:"token comment"},"## Env: RHEL/CentOS 7.x, Oracle Database 18c"),n(`
`),s("span",{class:"token comment"},"############ Author end ####################################################"),n(`

`),s("span",{class:"token comment"},"############ Env & Virables begin ##########################################"),n(`
`),s("span",{class:"token comment"},"####### begin custom settings #######"),n(`
`),s("span",{class:"token assign-left variable"},"PACKAGE_URLS_11"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"ftp://10.10.12.158/pub/oracle/p13390677_112040_Linux-x86-64_1of7.zip ftp://10.10.12.158/pub/oracle/p13390677_112040_Linux-x86-64_2of7.zip"'),n(`
`),s("span",{class:"token assign-left variable"},"PACKAGE_URLS_12"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"ftp://10.10.12.158/pub/oracle/linuxx64_12201_database.zip"'),n(`
`),s("span",{class:"token assign-left variable"},"PACKAGE_URLS_18"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"ftp://10.10.12.158/pub/oracle/LINUX.X64_180000_db_home.zip"'),n(),s("span",{class:"token comment"},"# multiple urls separated by space"),n(`
`),s("span",{class:"token assign-left variable"},"PACKAGE_URLS_19"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"ftp://10.10.12.158/pub/oracle/LINUX.X64_193000_db_home.zip"'),n(`
`),s("span",{class:"token assign-left variable"},"PACKAGE_URLS_21"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"ftp://10.10.12.158/pub/oracle/LINUX.X64_213000_db_home.zip"'),n(`

`),s("span",{class:"token comment"},"# PACKAGE_URLS=$PACKAGE_URLS_11"),n(`

`),s("span",{class:"token assign-left variable"},"OS_DBA_HOME"),s("span",{class:"token operator"},"="),n(`/opt/database/dba
`),s("span",{class:"token assign-left variable"},"OS_PACKAGE_DIR"),s("span",{class:"token operator"},"="),n(`/opt/package
`),s("span",{class:"token assign-left variable"},"OS_HOSTNAME"),s("span",{class:"token operator"},"="),n(`testdb-node01
`),s("span",{class:"token assign-left variable"},"OS_IPADDR"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"ip"),n(),s("span",{class:"token parameter variable"},"-4"),n(" addr show dev eth0 "),s("span",{class:"token operator"},"|"),n(),s("span",{class:"token function"},"grep"),n(),s("span",{class:"token parameter variable"},"-oP"),n(),s("span",{class:"token string"},"'(?<=inet\\s)\\d+(\\.\\d+){3}'"),s("span",{class:"token variable"},")")]),n(`
`),s("span",{class:"token assign-left variable"},"OS_ORACLE_USER"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"oracle"'),n(`
`),s("span",{class:"token assign-left variable"},"OS_ORACLE_USER_PASSWORD"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"YsDB_GreatMen2022"'),n(`

`),s("span",{class:"token assign-left variable"},"ORACLE_UNQNAME"),s("span",{class:"token operator"},"="),n(`testdb
`),s("span",{class:"token assign-left variable"},"ORACLE_SID"),s("span",{class:"token operator"},"="),n(`testdb
`),s("span",{class:"token assign-left variable"},"ORACLE_PDB_NAME"),s("span",{class:"token operator"},"="),n(`testpdb
`),s("span",{class:"token assign-left variable"},"ORACLE_CHARSET"),s("span",{class:"token operator"},"="),n(`AL32UTF8
`),s("span",{class:"token assign-left variable"},"ORACLE_SYS_PASSWORD"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"YsDB_GreatMen2022"'),n(`
`),s("span",{class:"token assign-left variable"},"ORACLE_SYSTEM_PASSWORD"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"YsDB_GreatMen2022"'),n(`
`),s("span",{class:"token assign-left variable"},"ORACLE_PDB_ADMIN_PASSWORD"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"YsDB_GreatMen2022"'),n(`
`),s("span",{class:"token assign-left variable"},"ORACLE_BASE_APP_DIR"),s("span",{class:"token operator"},"="),n(`/u01
`),s("span",{class:"token assign-left variable"},"ORACLE_BASE_DATA_DIR"),s("span",{class:"token operator"},"="),n(`/data
`),s("span",{class:"token assign-left variable"},"ORACLE_BASE_RECOVERY_AREA_DIR"),s("span",{class:"token operator"},"="),n(`/data
`),s("span",{class:"token assign-left variable"},"ORACLE_DATABASE_VERSION"),s("span",{class:"token operator"},"="),s("span",{class:"token number"},"18.0"),n(`.0.0
`),s("span",{class:"token assign-left variable"},"ORACLE_LISTENER_PORT"),s("span",{class:"token operator"},"="),s("span",{class:"token number"},"1521"),n(`
`),s("span",{class:"token assign-left variable"},"ORACLE_REDOLOG_SIZE"),s("span",{class:"token operator"},"="),s("span",{class:"token number"},"64"),n("                   "),s("span",{class:"token comment"},"# 64M"),n(`
`),s("span",{class:"token assign-left variable"},"ORACLE_RECOVERY_AREA_SIZE"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$(("),s("span",{class:"token number"},"64"),n(),s("span",{class:"token operator"},"*"),n(),s("span",{class:"token number"},"1024"),s("span",{class:"token variable"},"))")]),n(),s("span",{class:"token comment"},"# 64M*1024=64G"),n(`
`),s("span",{class:"token assign-left variable"},"ORACLE_ARCHIVE"),s("span",{class:"token operator"},"="),n(`true
`),s("span",{class:"token comment"},"####### end custom settings #######"),n(`

`),s("span",{class:"token comment"},"####### begin auto settings #######"),n(`
`),s("span",{class:"token comment"},"# Oracle Auto Settings"),n(`
`),s("span",{class:"token assign-left variable"},"TMP"),s("span",{class:"token operator"},"="),n(`/tmp
`),s("span",{class:"token assign-left variable"},"ORACLE_HOSTNAME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$OS_HOSTNAME"),n(`
`),s("span",{class:"token assign-left variable"},"ORACLE_BASE"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$ORACLE_BASE_APP_DIR"),n(`/app/oracle
`),s("span",{class:"token assign-left variable"},"ORACLE_HOME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$ORACLE_BASE"),n("/product/"),s("span",{class:"token variable"},"$ORACLE_DATABASE_VERSION"),n(`/db_1
`),s("span",{class:"token assign-left variable"},"ORACLE_DATA_DIR"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$ORACLE_BASE_DATA_DIR"),n(`/oracle/oradata
`),s("span",{class:"token assign-left variable"},"ORACLE_ORA_INVENTORY"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$ORACLE_BASE_APP_DIR"),n(`/app/oraInventory
`),s("span",{class:"token assign-left variable"},"ORACLE_RECOVERY_AREA_DIR"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$ORACLE_BASE_RECOVERY_AREA_DIR"),n(`/oracle/fast_recovery_area

`),s("span",{class:"token comment"},"# os auto settings"),n(`
`),s("span",{class:"token assign-left variable"},"OS_MEMORY"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"free"),n(),s("span",{class:"token parameter variable"},"-b"),n(),s("span",{class:"token operator"},"|"),n(),s("span",{class:"token function"},"grep"),n(" Mem: "),s("span",{class:"token operator"},"|"),n(),s("span",{class:"token function"},"awk"),n(" -F"),s("span",{class:"token string"},"' '"),n(),s("span",{class:"token string"},"'{print $2}'"),s("span",{class:"token variable"},")")]),n(`
`),s("span",{class:"token assign-left variable"},"OS_SHMMAX"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$(("),n("$OS_MEMORY "),s("span",{class:"token operator"},"*"),n(),s("span",{class:"token number"},"2"),n(),s("span",{class:"token operator"},"/"),n(),s("span",{class:"token number"},"3"),s("span",{class:"token variable"},"))")]),n(`
`),s("span",{class:"token assign-left variable"},"OS_SHMALL"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$(("),n("$OS_SHMMAX "),s("span",{class:"token operator"},"/"),n(),s("span",{class:"token number"},"1024"),s("span",{class:"token variable"},"))")]),n(`
`),s("span",{class:"token assign-left variable"},"OS_VERSION_ID"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"cat"),n(" /etc/os-release "),s("span",{class:"token operator"},"|"),n(),s("span",{class:"token function"},"grep"),n(),s("span",{class:"token string"},"'^VERSION_ID='"),n(),s("span",{class:"token operator"},"|"),n(),s("span",{class:"token function"},"awk"),n(" -F"),s("span",{class:"token string"},"'='"),n(),s("span",{class:"token string"},"'{print $2}'"),s("span",{class:"token variable"},")")]),n(`
hostnamectl set-hostname `),s("span",{class:"token variable"},"$OS_HOSTNAME"),n(`
`),s("span",{class:"token assign-left variable"},"ORACLE_TOTAL_MEMORY"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$(("),n("$OS_SHMMAX "),s("span",{class:"token operator"},"/"),n(),s("span",{class:"token number"},"1024"),n(),s("span",{class:"token operator"},"/"),n(),s("span",{class:"token number"},"1024"),s("span",{class:"token variable"},"))")]),n(`
`),s("span",{class:"token assign-left variable"},"ORACLE_PRIMARY_VERSION"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token builtin class-name"},"echo"),n(" $ORACLE_DATABASE_VERSION "),s("span",{class:"token operator"},"|"),n(),s("span",{class:"token function"},"awk"),n(" -F"),s("span",{class:"token string"},"'.'"),n(),s("span",{class:"token string"},"'{print $1}'"),s("span",{class:"token variable"},")")]),n(`
`),s("span",{class:"token assign-left variable"},"OS_PACKAGE_ORACLE_DATABASE"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$OS_PACKAGE_DIR"),n("/oracle/"),s("span",{class:"token variable"},"$ORACLE_DATABASE_VERSION"),n(`

`),s("span",{class:"token comment"},"####### end auto settings #######"),n(`
`),s("span",{class:"token comment"},"############ Env & Virables end ############################################"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"PackageVersionCongiguration"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token keyword"},"if"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},"$ORACLE_PRIMARY_VERSION"),n(),s("span",{class:"token parameter variable"},"-eq"),n(),s("span",{class:"token number"},"11"),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"then"),n(`
        `),s("span",{class:"token assign-left variable"},"PACKAGE_URLS"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$PACKAGE_URLS_11"),n(`
    `),s("span",{class:"token keyword"},"elif"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},"$ORACLE_PRIMARY_VERSION"),n(),s("span",{class:"token parameter variable"},"-eq"),n(),s("span",{class:"token number"},"12"),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"then"),n(`
        `),s("span",{class:"token assign-left variable"},"PACKAGE_URLS"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$PACKAGE_URLS_12"),n(`
    `),s("span",{class:"token keyword"},"elif"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},"$ORACLE_PRIMARY_VERSION"),n(),s("span",{class:"token parameter variable"},"-eq"),n(),s("span",{class:"token number"},"18"),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"then"),n(`
        `),s("span",{class:"token assign-left variable"},"PACKAGE_URLS"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$PACKAGE_URLS_18"),n(`
    `),s("span",{class:"token keyword"},"elif"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},"$ORACLE_PRIMARY_VERSION"),n(),s("span",{class:"token parameter variable"},"-eq"),n(),s("span",{class:"token number"},"19"),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"then"),n(`
        `),s("span",{class:"token assign-left variable"},"PACKAGE_URLS"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$PACKAGE_URLS_19"),n(`
    `),s("span",{class:"token keyword"},"elif"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},"$ORACLE_PRIMARY_VERSION"),n(),s("span",{class:"token parameter variable"},"-eq"),n(),s("span",{class:"token number"},"21"),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"then"),n(`
        `),s("span",{class:"token assign-left variable"},"PACKAGE_URLS"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$PACKAGE_URLS_21"),n(`
    `),s("span",{class:"token keyword"},"fi"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"DatabaseVersionConfiguration"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token comment"},"# install auto settings"),n(`
    `),s("span",{class:"token keyword"},"if"),n(),s("span",{class:"token punctuation"},"["),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},"$ORACLE_PRIMARY_VERSION"),n(),s("span",{class:"token parameter variable"},"-le"),n(),s("span",{class:"token number"},"11"),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"then"),n(`
        `),s("span",{class:"token assign-left variable"},"OS_ORACLE_PROFILE"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'""'),n(`
        `),s("span",{class:"token assign-left variable"},"ORACLE_RESPONSE_FILE"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"${OS_PACKAGE_DIR}"),n(`/database/response/db_install.rsp
        `),s("span",{class:"token assign-left variable"},"ORACLE_SOFTWARE_PREPARE_DIR"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"${OS_PACKAGE_DIR}"),n(`/database
        `),s("span",{class:"token assign-left variable"},"ORACLE_SOFTWARE_UNPACK_DIR"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"${OS_PACKAGE_DIR}"),n(`
        `),s("span",{class:"token assign-left variable"},"ORACLE_INSTALLER_SPECIAL_OPTIONS"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"oracle.install.db.DBA_GROUP=dba oracle.install.db.OPER_GROUP=oper"'),n(`
        `),s("span",{class:"token assign-left variable"},"ORACLE_DBCA_SPECIAL_OPTIONS"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"-memoryPercentage 66"'),n(`

    `),s("span",{class:"token keyword"},"elif"),n(),s("span",{class:"token punctuation"},"["),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},"$ORACLE_PRIMARY_VERSION"),n(),s("span",{class:"token parameter variable"},"-eq"),n(),s("span",{class:"token number"},"12"),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"then"),n(`
        `),s("span",{class:"token assign-left variable"},"OS_ORACLE_PROFILE"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},[n('"export PDB_NAME='),s("span",{class:"token variable"},"$ORACLE_PDB_NAME"),n('"')]),n(`
        `),s("span",{class:"token assign-left variable"},"ORACLE_RESPONSE_FILE"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"${OS_PACKAGE_DIR}"),n(`/database/response/db_install.rsp
        `),s("span",{class:"token assign-left variable"},"ORACLE_SOFTWARE_PREPARE_DIR"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"${OS_PACKAGE_DIR}"),n(`/database
        `),s("span",{class:"token assign-left variable"},"ORACLE_SOFTWARE_UNPACK_DIR"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"${OS_PACKAGE_DIR}"),n(`
        `),s("span",{class:"token assign-left variable"},"ORACLE_INSTALLER_SPECIAL_OPTIONS"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"oracle.install.db.OSDBA_GROUP=dba oracle.install.db.OSOPER_GROUP=oper"'),n(`
        `),s("span",{class:"token assign-left variable"},"ORACLE_DBCA_SPECIAL_OPTIONS"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},[n('"-createAsContainerDatabase true -numberOfPDBs 1 -pdbName '),s("span",{class:"token variable"},"${ORACLE_PDB_NAME}"),n(" -pdbAdminPassword "),s("span",{class:"token variable"},"$ORACLE_PDB_ADMIN_PASSWORD"),n(" -enableArchive "),s("span",{class:"token variable"},"${ORACLE_ARCHIVE}"),n(" -recoveryAreaSize "),s("span",{class:"token variable"},"${ORACLE_RECOVERY_AREA_SIZE}"),n(' -memoryMgmtType auto_sga -ignorePreReqs"')]),n(`

    `),s("span",{class:"token keyword"},"elif"),n(),s("span",{class:"token punctuation"},"["),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},"$ORACLE_PRIMARY_VERSION"),n(),s("span",{class:"token parameter variable"},"-gt"),n(),s("span",{class:"token number"},"12"),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},"]"),n(),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token punctuation"},"["),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},"$ORACLE_PRIMARY_VERSION"),n(),s("span",{class:"token parameter variable"},"-le"),n(),s("span",{class:"token number"},"21"),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"then"),n(`
        `),s("span",{class:"token assign-left variable"},"OS_ORACLE_PROFILE"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},[n('"export PDB_NAME='),s("span",{class:"token variable"},"$ORACLE_PDB_NAME"),n('"')]),n(`
        `),s("span",{class:"token assign-left variable"},"ORACLE_RESPONSE_FILE"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"${ORACLE_HOME}"),n(`/install/response/db_install.rsp
        `),s("span",{class:"token assign-left variable"},"ORACLE_SOFTWARE_PREPARE_DIR"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"${ORACLE_HOME}"),n(`
        `),s("span",{class:"token assign-left variable"},"ORACLE_SOFTWARE_UNPACK_DIR"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"${ORACLE_HOME}"),n(`
        `),s("span",{class:"token assign-left variable"},"ORACLE_INSTALLER_SPECIAL_OPTIONS"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"oracle.install.db.OSDBA_GROUP=dba oracle.install.db.OSOPER_GROUP=oper"'),n(`
        `),s("span",{class:"token assign-left variable"},"ORACLE_DBCA_SPECIAL_OPTIONS"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},[n('"-createAsContainerDatabase true -numberOfPDBs 1 -pdbName '),s("span",{class:"token variable"},"${ORACLE_PDB_NAME}"),n(" -pdbAdminPassword "),s("span",{class:"token variable"},"$ORACLE_PDB_ADMIN_PASSWORD"),n(" -enableArchive "),s("span",{class:"token variable"},"${ORACLE_ARCHIVE}"),n(" -recoveryAreaSize "),s("span",{class:"token variable"},"${ORACLE_RECOVERY_AREA_SIZE}"),n(' -memoryMgmtType auto_sga -ignorePreReqs"')]),n(`
    `),s("span",{class:"token keyword"},"else"),n(`
        `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"The oracle version is not supported."'),n(`
        `),s("span",{class:"token builtin class-name"},"exit"),n(`
    `),s("span",{class:"token keyword"},"fi"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"DownloadPackage"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Download package ..."'),n(`
    `),s("span",{class:"token function"},"mkdir"),n(),s("span",{class:"token parameter variable"},"-p"),n(),s("span",{class:"token variable"},"$OS_PACKAGE_DIR"),n(),s("span",{class:"token variable"},"$OS_PACKAGE_ORACLE_DATABASE"),n(`
    yum `),s("span",{class:"token function"},"install"),n(),s("span",{class:"token parameter variable"},"-y"),n(),s("span",{class:"token function"},"wget"),n(`
    `),s("span",{class:"token assign-left variable"},"counter"),s("span",{class:"token operator"},"="),s("span",{class:"token number"},"1"),n(`
    `),s("span",{class:"token keyword"},"for"),n(),s("span",{class:"token for-or-select variable"},"download_url"),n(),s("span",{class:"token keyword"},"in"),n(),s("span",{class:"token variable"},"$PACKAGE_URLS"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"do"),n(`
        `),s("span",{class:"token function"},"wget"),n(),s("span",{class:"token parameter variable"},"-O"),n(),s("span",{class:"token variable"},"$OS_PACKAGE_ORACLE_DATABASE"),n("/database-"),s("span",{class:"token variable"},"${ORACLE_DATABASE_VERSION}"),n("-"),s("span",{class:"token variable"},"${counter}"),n(".zip "),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$download_url"),n('"')]),n(`
        `),s("span",{class:"token assign-left variable"},"counter"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$(("),n("$counter "),s("span",{class:"token operator"},"+"),n(),s("span",{class:"token number"},"1"),s("span",{class:"token variable"},"))")]),n(`
    `),s("span",{class:"token keyword"},"done"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"InstallDependency"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"0.Set locale ..."'),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token assign-left variable"},[s("span",{class:"token environment constant"},"LANG")]),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"en_US.UTF-8"'),n(),s("span",{class:"token operator"},">"),n(`/etc/locale.conf
    localectl set-locale `),s("span",{class:"token assign-left variable"},[s("span",{class:"token environment constant"},"LANG")]),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"en_US.UTF-8"'),n(`
    `),s("span",{class:"token builtin class-name"},"export"),n(),s("span",{class:"token assign-left variable"},[s("span",{class:"token environment constant"},"LANG")]),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"en_US.UTF-8"'),n(`

    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"1.Disable selinux and stop firewalld ..."'),n(`
    `),s("span",{class:"token function"},"cp"),n(` /etc/selinux/config /etc/selinux/config.orabak
    `),s("span",{class:"token function"},"sed"),n(),s("span",{class:"token parameter variable"},"-i"),n(),s("span",{class:"token string"},"'s/^SELINUX=enforcing/SELINUX=disabled/g'"),n(` /etc/selinux/config
    setenforce `),s("span",{class:"token number"},"0"),n(`
    systemctl stop firewalld
    systemctl disable firewalld
    `),s("span",{class:"token function"},"sleep"),n(),s("span",{class:"token number"},"1"),n(`

    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"2.Set hostname ..."'),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token variable"},"$OS_HOSTNAME"),n(),s("span",{class:"token operator"},">"),n(`/etc/hostname
    `),s("span",{class:"token function"},"sleep"),n(),s("span",{class:"token number"},"1"),n(`

    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"3.Set hosts ..."'),n(`
    `),s("span",{class:"token function"},"cp"),n(` /etc/hosts /etc/hosts.orabak
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token variable"},"$OS_IPADDR"),s("span",{class:"token string"},"'   '"),s("span",{class:"token variable"},"$OS_HOSTNAME"),n(),s("span",{class:"token operator"},">>"),n(`/etc/hosts
    `),s("span",{class:"token function"},"sleep"),n(),s("span",{class:"token number"},"1"),n(`

    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"4.Set sysctl.conf ... "'),n(`
    `),s("span",{class:"token function"},"cp"),n(` /etc/sysctl.conf /etc/sysctl.conf.orabak
    `),s("span",{class:"token function"},"cat"),n(),s("span",{class:"token operator"},">>"),n("/etc/sysctl.conf "),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOF
fs.file-max = 6815744
kernel.sem = 250 32000 100 128
kernel.shmmni = 4096
kernel.shmall = `),s("span",{class:"token variable"},"$OS_SHMALL"),n(` 
kernel.shmmax = `),s("span",{class:"token variable"},"$OS_SHMMAX"),n(`
kernel.panic_on_oops = 1
net.core.rmem_default = 262144
net.core.rmem_max = 4194304
net.core.wmem_default = 262144
net.core.wmem_max = 1048576
net.ipv4.conf.all.rp_filter = 2
net.ipv4.conf.default.rp_filter = 2
fs.aio-max-nr = 1048576
net.ipv4.ip_local_port_range = 9000 65500
EOF`)]),n(`
    `),s("span",{class:"token function"},"sysctl"),n(),s("span",{class:"token parameter variable"},"-p"),n(`
    `),s("span",{class:"token function"},"sleep"),n(),s("span",{class:"token number"},"1"),n(`

    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"5.Set resource usage limitation ..."'),n(`
    `),s("span",{class:"token function"},"cp"),n(` /etc/security/limits.conf /etc/security/limits.conf.orabak
    `),s("span",{class:"token function"},"cat"),n(),s("span",{class:"token operator"},">>"),n("/etc/security/limits.conf "),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOF
`),s("span",{class:"token variable"},"$OS_ORACLE_USER"),n(`   soft   nofile    1024
`),s("span",{class:"token variable"},"$OS_ORACLE_USER"),n(`   hard   nofile    65536
`),s("span",{class:"token variable"},"$OS_ORACLE_USER"),n(`   soft   nproc    16384
`),s("span",{class:"token variable"},"$OS_ORACLE_USER"),n(`   hard   nproc    16384
`),s("span",{class:"token variable"},"$OS_ORACLE_USER"),n(`   soft   stack    10240
`),s("span",{class:"token variable"},"$OS_ORACLE_USER"),n(`   hard   stack    32768
`),s("span",{class:"token variable"},"$OS_ORACLE_USER"),n(`   hard   memlock    134217728
`),s("span",{class:"token variable"},"$OS_ORACLE_USER"),n(`   soft   memlock    134217728
EOF`)]),n(`

    `),s("span",{class:"token function"},"cp"),n(` /etc/pam.d/login /etc/pam.d/login.orabak
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"session   required    pam_limits.so"'),n(),s("span",{class:"token operator"},">>"),n(`/etc/pam.d/login
    `),s("span",{class:"token function"},"sleep"),n(),s("span",{class:"token number"},"1"),n(`

    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"6.Install dependencies ..."'),n(`
    yum `),s("span",{class:"token function"},"install"),n(),s("span",{class:"token parameter variable"},"-y"),n(),s("span",{class:"token punctuation"},"\\"),n(`
        `),s("span",{class:"token function"},"bc"),n(" binutils compat-libcap1 compat-libcap1-1.10-3.el7.x86_64 compat-libstdc++-33 "),s("span",{class:"token punctuation"},"\\"),n(`
        compat-libstdc++-33.i686 dtrace-utils elfutils-libelf elfutils-libelf-devel `),s("span",{class:"token punctuation"},"\\"),n(`
        elfutils-libelf-devel.i686 elfutils-libelf.i686 fontconfig-devel gcc gcc-c++ `),s("span",{class:"token punctuation"},"\\"),n(`
        glibc glibc-2.17-36.el7.i686 glibc-2.17-36.el7.x86_64 glibc-devel glibc-devel.i686 `),s("span",{class:"token punctuation"},"\\"),n(`
        glibc.i686 ksh libaio libaio-devel libaio-devel.i686 libaio.i686 libcap `),s("span",{class:"token punctuation"},"\\"),n(`
        libdtrace-ctf-devel libgcc libgcc.i686 librdmacm-devel libstdc++ libstdc++-devel `),s("span",{class:"token punctuation"},"\\"),n(`
        libstdc++-devel.i686 libstdc++.i686 libX11 libX11.i686 libXau libXau.i686 libxcb `),s("span",{class:"token punctuation"},"\\"),n(`
        libxcb.i686 libXext libXext.i686 libXi libXi.i686 libXrender libXrender-devel libXtst `),s("span",{class:"token punctuation"},"\\"),n(`
        libXtst.i686 `),s("span",{class:"token function"},"make"),n(" net-tools nfs-utils policycoreutils policycoreutils-python python "),s("span",{class:"token punctuation"},"\\"),n(`
        python-configshell python-rtslib python-six smartmontools sysstat targetcli unixODBC `),s("span",{class:"token punctuation"},"\\"),n(`
        unixODBC-devel `),s("span",{class:"token function"},"unzip"),n(` zlib-devel
    `),s("span",{class:"token function"},"sleep"),n(),s("span",{class:"token number"},"1"),n(`

    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"7.Add oracle groups and users ..."'),n(`
    `),s("span",{class:"token function"},"groupadd"),n(),s("span",{class:"token parameter variable"},"-g"),n(),s("span",{class:"token number"},"54321"),n(` oinstall
    `),s("span",{class:"token function"},"groupadd"),n(),s("span",{class:"token parameter variable"},"-g"),n(),s("span",{class:"token number"},"54322"),n(` dba
    `),s("span",{class:"token function"},"groupadd"),n(),s("span",{class:"token parameter variable"},"-g"),n(),s("span",{class:"token number"},"54323"),n(` oper
    `),s("span",{class:"token function"},"useradd"),n(),s("span",{class:"token parameter variable"},"-u"),n(),s("span",{class:"token number"},"54321"),n(),s("span",{class:"token parameter variable"},"-g"),n(" oinstall "),s("span",{class:"token parameter variable"},"-G"),n(" dba,oper "),s("span",{class:"token variable"},"$OS_ORACLE_USER"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token variable"},"$OS_ORACLE_USER_PASSWORD"),n(),s("span",{class:"token operator"},"|"),n(),s("span",{class:"token function"},"passwd"),n(),s("span",{class:"token parameter variable"},"--stdin"),n(),s("span",{class:"token variable"},"$OS_ORACLE_USER"),n(`
    `),s("span",{class:"token function"},"sleep"),n(),s("span",{class:"token number"},"1"),n(`

    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"8.Create directories ..."'),n(`
    `),s("span",{class:"token function"},"mkdir"),n(),s("span",{class:"token parameter variable"},"-p"),n(),s("span",{class:"token variable"},"$ORACLE_HOME"),n(),s("span",{class:"token variable"},"$ORACLE_DATA_DIR"),n(),s("span",{class:"token variable"},"$ORACLE_ORA_INVENTORY"),n(),s("span",{class:"token variable"},"$ORACLE_RECOVERY_AREA_DIR"),n(),s("span",{class:"token variable"},"$OS_PACKAGE_DIR"),n(`
    `),s("span",{class:"token function"},"chown"),n(),s("span",{class:"token parameter variable"},"-R"),n(),s("span",{class:"token variable"},"$OS_ORACLE_USER"),n(":oinstall "),s("span",{class:"token variable"},"$ORACLE_BASE_APP_DIR"),n(),s("span",{class:"token variable"},"$ORACLE_BASE_DATA_DIR"),n(),s("span",{class:"token variable"},"$ORACLE_BASE_RECOVERY_AREA_DIR"),n(),s("span",{class:"token variable"},"$OS_PACKAGE_DIR"),n(`
    `),s("span",{class:"token function"},"chmod"),n(),s("span",{class:"token parameter variable"},"-R"),n(),s("span",{class:"token number"},"775"),n(),s("span",{class:"token variable"},"$ORACLE_BASE_APP_DIR"),n(),s("span",{class:"token variable"},"$ORACLE_BASE_DATA_DIR"),n(),s("span",{class:"token variable"},"$ORACLE_BASE_RECOVERY_AREA_DIR"),n(),s("span",{class:"token variable"},"$OS_PACKAGE_DIR"),n(`
    `),s("span",{class:"token function"},"sleep"),n(),s("span",{class:"token number"},"1"),n(`

    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"9.Set oracle env ..."'),n(`
    `),s("span",{class:"token function"},"cp"),n(" /home/"),s("span",{class:"token variable"},"$OS_ORACLE_USER"),n("/.bash_profile /home/"),s("span",{class:"token variable"},"$OS_ORACLE_USER"),n(`/.bash_profile.orabak
    `),s("span",{class:"token function"},"cat"),n(),s("span",{class:"token operator"},">>"),n("/home/"),s("span",{class:"token variable"},"$OS_ORACLE_USER"),n("/.bash_profile "),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOF
### Begin Oracle ENV ###
export TMP=`),s("span",{class:"token variable"},"$TMP"),n(`
export TMPDIR=`),s("span",{class:"token variable"},"$TMP"),n(`
export ORACLE_HOSTNAME=`),s("span",{class:"token variable"},"$ORACLE_HOSTNAME"),n(`
export ORACLE_UNQNAME=`),s("span",{class:"token variable"},"$ORACLE_UNQNAME"),n(`
export ORACLE_SID=`),s("span",{class:"token variable"},"$ORACLE_SID"),n(`
`),s("span",{class:"token variable"},"$OS_ORACLE_PROFILE"),n(`
export ORACLE_BASE=`),s("span",{class:"token variable"},"$ORACLE_BASE"),n(`
export ORACLE_HOME=`),s("span",{class:"token variable"},"$ORACLE_HOME"),n(`
export ORA_INVENTORY=`),s("span",{class:"token variable"},"$ORACLE_ORA_INVENTORY"),n(`
export DATA_DIR=`),s("span",{class:"token variable"},"$ORACLE_DATA_DIR"),n(`
export ORACLE_HOME_LISTNER=\\`),s("span",{class:"token variable"},"$ORACLE_HOME"),n(`
export LD_LIBRARY_PATH=\\`),s("span",{class:"token variable"},"$ORACLE_HOME"),n(`/lib:/lib:/usr/lib
export CLASSPATH=\\`),s("span",{class:"token variable"},"$ORACLE_HOME"),n("/jlib:\\"),s("span",{class:"token variable"},"$ORACLE_HOME"),n(`/rdbms/jlib
export PATH=\\`),s("span",{class:"token variable"},"$ORACLE_HOME"),n("/bin:\\"),s("span",{class:"token environment constant"},"$PATH"),n(`
### End Oracle Env ###
EOF`)]),n(`
    `),s("span",{class:"token function"},"sleep"),n(),s("span",{class:"token number"},"1"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"InstallSoftware"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"10.unzip oracle database package ..."'),n(`
    `),s("span",{class:"token keyword"},"for"),n(),s("span",{class:"token for-or-select variable"},"dbfile"),n(),s("span",{class:"token keyword"},"in"),n(),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"ls"),n(" $OS_PACKAGE_ORACLE_DATABASE"),s("span",{class:"token variable"},")")]),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"do"),n(`
        `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"Extract '),s("span",{class:"token variable"},"$dbfile"),n(" to "),s("span",{class:"token variable"},"$ORACLE_SOFTWARE_UNPACK_DIR"),n('"')]),n(`
        `),s("span",{class:"token function"},"unzip"),n(),s("span",{class:"token parameter variable"},"-oq"),n(),s("span",{class:"token parameter variable"},"-d"),n(),s("span",{class:"token variable"},"$ORACLE_SOFTWARE_UNPACK_DIR"),n(),s("span",{class:"token variable"},"$OS_PACKAGE_ORACLE_DATABASE"),n("/"),s("span",{class:"token variable"},"$dbfile"),n(`
    `),s("span",{class:"token keyword"},"done"),n(`

    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"change directory permission ..."'),n(`
    `),s("span",{class:"token function"},"chown"),n(),s("span",{class:"token parameter variable"},"-R"),n(),s("span",{class:"token variable"},"$OS_ORACLE_USER"),n(":oinstall "),s("span",{class:"token variable"},"$ORACLE_SOFTWARE_UNPACK_DIR"),n(`
    `),s("span",{class:"token function"},"chmod"),n(),s("span",{class:"token parameter variable"},"-R"),n(),s("span",{class:"token number"},"775"),n(),s("span",{class:"token variable"},"$ORACLE_SOFTWARE_UNPACK_DIR"),n(`

    `),s("span",{class:"token function"},"su"),n(" - "),s("span",{class:"token variable"},"$OS_ORACLE_USER"),n(),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOF
cd `),s("span",{class:"token variable"},"$ORACLE_SOFTWARE_PREPARE_DIR"),n(`

echo "11.install database software ..."
./runInstaller -ignorePrereq -waitforcompletion -silent                        \\
    -responseFile `),s("span",{class:"token variable"},"$ORACLE_RESPONSE_FILE"),n(`                                        \\
    oracle.install.option=INSTALL_DB_SWONLY                                    \\
    ORACLE_HOSTNAME=`),s("span",{class:"token variable"},"${ORACLE_HOSTNAME}"),n(`                                         \\
    UNIX_GROUP_NAME=oinstall                                                   \\
    INVENTORY_LOCATION=`),s("span",{class:"token variable"},"${ORACLE_ORA_INVENTORY}"),n(`                                 \\
    SELECTED_LANGUAGES=en                                                      \\
    ORACLE_HOME=`),s("span",{class:"token variable"},"${ORACLE_HOME}"),n(`                                                 \\
    ORACLE_BASE=`),s("span",{class:"token variable"},"${ORACLE_BASE}"),n(`                                                 \\
    oracle.install.db.InstallEdition=EE                                        \\
    oracle.install.db.OSBACKUPDBA_GROUP=dba                                    \\
    oracle.install.db.OSDGDBA_GROUP=dba                                        \\
    oracle.install.db.OSKMDBA_GROUP=dba                                        \\
    oracle.install.db.OSRACDBA_GROUP=dba                                       \\
    `),s("span",{class:"token variable"},"$ORACLE_INSTALLER_SPECIAL_OPTIONS"),n(`                                          \\
    SECURITY_UPDATES_VIA_MYORACLESUPPORT=false                                 \\
    DECLINE_SECURITY_UPDATES=true                                              \\
    oracle.installer.autoupdates.option=SKIP_UPDATES
EOF`)]),n(`

    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n(`"Run '`),s("span",{class:"token variable"},"${ORACLE_ORA_INVENTORY}"),n(`/orainstRoot.sh' as root ..."`)]),n(`
    `),s("span",{class:"token variable"},"${ORACLE_ORA_INVENTORY}"),n(`/orainstRoot.sh
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n(`"Run '`),s("span",{class:"token variable"},"${ORACLE_HOME}"),n(`/root.sh' as root ..."`)]),n(`
    `),s("span",{class:"token variable"},"${ORACLE_HOME}"),n(`/root.sh
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"CreateNetca"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"12.Create Netca ..."'),n(`
    `),s("span",{class:"token function"},"su"),n(" - "),s("span",{class:"token variable"},"$OS_ORACLE_USER"),n(),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOF
echo "12.Create the listener ..."
netca -silent -responsefile `),s("span",{class:"token variable"},"${ORACLE_HOME}"),n("/assistants/netca/netca.rsp -lisport "),s("span",{class:"token variable"},"$ORACLE_LISTENER_PORT"),n(`
echo "12.Start the listener ..."
lsnrctl start
EOF`)]),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"CreateDatabase"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"13.Create Database ..."'),n(`
    `),s("span",{class:"token function"},"su"),n(" - "),s("span",{class:"token variable"},"$OS_ORACLE_USER"),n(),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOF
echo "12.Start the listener ..."
lsnrctl start

dbca -silent -createDatabase                                                   \\
     -initParams db_unique_name=`),s("span",{class:"token variable"},"${ORACLE_UNQNAME}"),n(`                              \\
     -responseFile NO_VALUE                                                    \\
     -templateName General_Purpose.dbc                                         \\
     -gdbname `),s("span",{class:"token variable"},"${ORACLE_SID}"),n(`                                                    \\
     -sid `),s("span",{class:"token variable"},"${ORACLE_SID}"),n(`                                                        \\
     -characterSet `),s("span",{class:"token variable"},"$ORACLE_CHARSET"),n(`                                             \\
     -sysPassword `),s("span",{class:"token variable"},"$ORACLE_SYS_PASSWORD"),n(`                                         \\
     -systemPassword `),s("span",{class:"token variable"},"$ORACLE_SYSTEM_PASSWORD"),n(`                                   \\
     `),s("span",{class:"token variable"},"$ORACLE_DBCA_SPECIAL_OPTIONS"),n(`                                              \\
     -databaseType MULTIPURPOSE                                                \\
     -totalMemory `),s("span",{class:"token variable"},"$ORACLE_TOTAL_MEMORY"),n(`                                         \\
     -storageType FS                                                           \\
     -datafileDestination "`),s("span",{class:"token variable"},"${ORACLE_DATA_DIR}"),n(`"                                 \\
     -recoveryAreaDestination "`),s("span",{class:"token variable"},"${ORACLE_RECOVERY_AREA_DIR}"),n(`"                    \\
     -redoLogFileSize `),s("span",{class:"token variable"},"${ORACLE_REDOLOG_SIZE}"),n(`                                   \\
     -emConfiguration NONE                                                                                                             

echo "Install Oracle Database `),s("span",{class:"token variable"},"$ORACLE_DATABASE_VERSION"),n(` successfully!"
EOF`)]),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"EnableAutoStartup"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Edit /etc/oratab ..."'),n(`
    `),s("span",{class:"token function"},"cp"),n(` /etc/oratab /etc/oratab.orabak
    `),s("span",{class:"token function"},"sed"),n(),s("span",{class:"token parameter variable"},"-i"),n(),s("span",{class:"token string"},[n('"s#'),s("span",{class:"token variable"},"${ORACLE_SID}"),n(":"),s("span",{class:"token variable"},"${ORACLE_HOME}"),n(":N#"),s("span",{class:"token variable"},"${ORACLE_SID}"),n(":"),s("span",{class:"token variable"},"${ORACLE_HOME}"),n(':Y#g"')]),n(` /etc/oratab
    `),s("span",{class:"token function"},"su"),n(" - "),s("span",{class:"token variable"},"$OS_ORACLE_USER"),n(),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOFOUT
sqlplus / as sysdba <<EOF
alter system set db_create_file_dest='`),s("span",{class:"token variable"},"${ORACLE_DATA_DIR}"),n(`';
alter pluggable database `),s("span",{class:"token variable"},"${ORACLE_PDB_NAME}"),n(` open;
alter pluggable database `),s("span",{class:"token variable"},"${ORACLE_PDB_NAME}"),n(` save state;
exit;
EOF
EOFOUT`)]),n(`

    `),s("span",{class:"token function"},"mkdir"),n(),s("span",{class:"token parameter variable"},"-p"),n(),s("span",{class:"token variable"},"${OS_DBA_HOME}"),n(`/scripts
    `),s("span",{class:"token function"},"chown"),n(),s("span",{class:"token variable"},"$OS_ORACLE_USER"),n(":root "),s("span",{class:"token parameter variable"},"-R"),n(),s("span",{class:"token variable"},"${OS_DBA_HOME}"),n(`

    `),s("span",{class:"token function"},"su"),n(" - "),s("span",{class:"token variable"},"$OS_ORACLE_USER"),n(),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOF
touch `),s("span",{class:"token variable"},"${OS_DBA_HOME}"),n(`/scripts/startup_db.sh
chmod a+x `),s("span",{class:"token variable"},"${OS_DBA_HOME}"),n(`/scripts/startup_db.sh

cat > `),s("span",{class:"token variable"},"${OS_DBA_HOME}"),n(`/scripts/startup_db.sh <<"EOFINNER"
#! /bin/sh
# description: Oracle auto start-stop script.
#
# Set ORA_HOME to be equivalent to the \\`),s("span",{class:"token variable"},"$ORACLE_HOME"),n(`
# from which you wish to execute dbstart and dbshut;
#
# Set ORA_OWNER to the user id of the owner of the
# Oracle database in ORACLE_HOME.

ORA_HOME=`),s("span",{class:"token variable"},"$ORACLE_HOME"),n(`
ORA_OWNER=`),s("span",{class:"token variable"},"$OS_ORACLE_USER"),n(`
CURRENT_USER=\\`),s("span",{class:"token variable"},[s("span",{class:"token variable"},"`"),n("whoami"),s("span",{class:"token punctuation"},"\\"),s("span",{class:"token variable"},"`")]),n(`

case "\\`),s("span",{class:"token variable"},"$1"),n(`" in
'start') 
    # Start the Oracle databases:
    # The following command assumes that the oracle login
    # will not prompt the user for any values
    # Remove "&" if you don't want startup as a background process.
    if [ "\\`),s("span",{class:"token variable"},"$ORA_OWNER"),n('" = "\\'),s("span",{class:"token variable"},"$CURRENT_USER"),n(`" ]; then
    \\`),s("span",{class:"token variable"},"$ORA_HOME"),n("/bin/dbstart \\"),s("span",{class:"token variable"},"$ORA_HOME"),n(`
    else
    su - \\`),s("span",{class:"token variable"},"$ORA_OWNER"),n(' -c "\\'),s("span",{class:"token variable"},"$ORA_HOME"),n("/bin/dbstart \\"),s("span",{class:"token variable"},"$ORA_HOME"),n(`" 
    fi
    touch /var/lock/subsys/dbora
    break
    ;;

'stop')
    # Stop the Oracle databases:
    # The following command assumes that the oracle login
    # will not prompt the user for any values
    if [ "\\`),s("span",{class:"token variable"},"$ORA_OWNER"),n('" = "\\'),s("span",{class:"token variable"},"$CURRENT_USER"),n(`" ]; then
    \\`),s("span",{class:"token variable"},"$ORA_HOME"),n("/bin/dbshut \\"),s("span",{class:"token variable"},"$ORA_HOME"),n(`
    else
    su - \\`),s("span",{class:"token variable"},"$ORA_OWNER"),n(' -c "\\'),s("span",{class:"token variable"},"$ORA_HOME"),n("/bin/dbshut \\"),s("span",{class:"token variable"},"$ORA_HOME"),n(`" &
    fi
    rm -f /var/lock/subsys/dbora
    break
    ;;
   *)
    echo "usage: `),s("span",{class:"token variable"},"$0"),n(` {start|stop}"
    exit
    ;;
esac
EOF`)]),n(`INNER
EOF

    `),s("span",{class:"token function"},"cat"),n(),s("span",{class:"token operator"},">"),n("/lib/systemd/system/dbora.service "),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOF
[Unit]
Description=The Oracle Database Service
After=syslog.target network.target

[Service]
# systemd ignores PAM limits, so set any necessary limits in the service.
# Not really a bug, but a feature.
# https://bugzilla.redhat.com/show_bug.cgi?id=754285
LimitMEMLOCK=infinity
LimitNOFILE=65535

#Type=simple
# idle: similar to simple, the actual execution of the service binary is delayed
#       until all jobs are finished, which avoids mixing the status output with shell output of services.
RemainAfterExit=yes
User=oracle
Group=oinstall
Restart=no
ExecStart=/bin/bash -c '`),s("span",{class:"token variable"},"${OS_DBA_HOME}"),n(`/scripts/startup_db.sh start'
ExecStop=/bin/bash -c '`),s("span",{class:"token variable"},"${OS_DBA_HOME}"),n(`/scripts/startup_db.sh stop'

[Install]
WantedBy=multi-user.target
EOF`)]),n(`

    `),s("span",{class:"token comment"},"# autostart after os reboot"),n(`
    systemctl `),s("span",{class:"token builtin class-name"},"enable"),n(` dbora.service
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"SetFirewall"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token comment"},"# add allow port to firewalld"),n(`
    systemctl start firewalld
    firewall-cmd --add-port`),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$ORACLE_LISTENER_PORT"),n(),s("span",{class:"token parameter variable"},"--zone"),s("span",{class:"token operator"},"="),n("public "),s("span",{class:"token parameter variable"},"--permanent"),n(`
    firewall-cmd `),s("span",{class:"token parameter variable"},"--reload"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"UninstallDatabase"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Uninstall database ..."'),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Shutdown database and stop listener ..."'),n(`
    `),s("span",{class:"token function"},"su"),n(" - "),s("span",{class:"token variable"},"$OS_ORACLE_USER"),n(),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},`OUT
sqlplus / as sysdba <<SQL
shutdown immediate;
SQL
lsnrctl stop
OUT`),n(`

    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Removing oraInst.loc and oratab file ..."'),n(`
    `),s("span",{class:"token function"},"rm"),n(),s("span",{class:"token parameter variable"},"-f"),n(` /etc/oraInst.loc
    `),s("span",{class:"token function"},"rm"),n(),s("span",{class:"token parameter variable"},"-f"),n(` /etc/oratab

    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Removing database file and database software ..."'),n(`
    `),s("span",{class:"token function"},"rm"),n(),s("span",{class:"token parameter variable"},"-rf"),n(),s("span",{class:"token variable"},"$ORACLE_BASE_APP_DIR"),n(`/*
    `),s("span",{class:"token function"},"rm"),n(),s("span",{class:"token parameter variable"},"-rf"),n(),s("span",{class:"token variable"},"$ORACLE_BASE_DATA_DIR"),n(`/*
    `),s("span",{class:"token function"},"rm"),n(),s("span",{class:"token parameter variable"},"-rf"),n(),s("span",{class:"token variable"},"$ORACLE_BASE_RECOVERY_AREA_DIR"),n(`/*

    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Removing Oracle Group and User ..."'),n(`
    `),s("span",{class:"token function"},"userdel"),n(),s("span",{class:"token variable"},"$OS_ORACLE_USER"),n(`
    `),s("span",{class:"token function"},"rm"),n(),s("span",{class:"token parameter variable"},"-rf"),n(" /home/"),s("span",{class:"token variable"},"$OS_ORACLE_USER"),n(`

    `),s("span",{class:"token function"},"groupdel"),n(` oinstall
    `),s("span",{class:"token function"},"groupdel"),n(` dba
    `),s("span",{class:"token function"},"groupdel"),n(` oper

    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Reset Resource Usage Limit ..."'),n(`
    `),s("span",{class:"token function"},"cp"),n(),s("span",{class:"token parameter variable"},"-f"),n(` /etc/pam.d/login.orabak /etc/pam.d/login
    `),s("span",{class:"token function"},"cp"),n(),s("span",{class:"token parameter variable"},"-f"),n(` /etc/security/limits.conf.orabak /etc/security/limits.conf

    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Reset sysctl.conf ..."'),n(`
    `),s("span",{class:"token function"},"cp"),n(),s("span",{class:"token parameter variable"},"-f"),n(` /etc/sysctl.conf.orabak /etc/sysctl.conf

    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Reset hosts ..."'),n(`
    `),s("span",{class:"token function"},"cp"),n(` /etc/hosts.orabak /etc/hosts
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"Usage"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token function"},"cat"),n(),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOF
Usage: `),s("span",{class:"token variable"},"$0"),n(` -h|--helpUsage, help message.
       `),s("span",{class:"token variable"},"$0"),n(` -d|--installDependency, install oracle dependency.
       `),s("span",{class:"token variable"},"$0"),n(` -a|--installAll, install dependency,database software,create netca,create database.     
       `),s("span",{class:"token variable"},"$0"),n(` -s|--installSoftware, install database software. 
       `),s("span",{class:"token variable"},"$0"),n(` -c|--createDatabase, create database.
       `),s("span",{class:"token variable"},"$0"),n(` -e|--enable, enable database auto startup after system boot/reboot.
       `),s("span",{class:"token variable"},"$0"),n(` -p|--package, download database package.
       `),s("span",{class:"token variable"},"$0"),n(` -r|--remove, uninstall database.
       `),s("span",{class:"token variable"},"$0"),n(` -f|--firewall, set firewall.
EOF`)]),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token comment"},"# configuration before installation"),n(`
PackageVersionCongiguration
DatabaseVersionConfiguration

`),s("span",{class:"token assign-left variable"},"ARGS"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),n("getopt "),s("span",{class:"token parameter variable"},"-o"),n(" hdasnceprf "),s("span",{class:"token parameter variable"},"--long"),n(" help,installDependency,installAll,installSoftware,createNetca,createDatabase,enable,package,remove,firewall "),s("span",{class:"token parameter variable"},"-n"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$0"),n('"')]),n(" -- "),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$@"),n('"')]),s("span",{class:"token variable"},")")]),n(`
`),s("span",{class:"token builtin class-name"},"eval"),n(),s("span",{class:"token builtin class-name"},"set"),n(" -- "),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$ARGS"),n('"')]),n(`
`),s("span",{class:"token keyword"},"while"),n(),s("span",{class:"token boolean"},"true"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"do"),n(`
    `),s("span",{class:"token keyword"},"case"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$1"),n('"')]),n(),s("span",{class:"token keyword"},"in"),n(`
    `),s("span",{class:"token parameter variable"},"-h"),n(),s("span",{class:"token operator"},"|"),n(" --help"),s("span",{class:"token punctuation"},")"),n(`
        Usage
        `),s("span",{class:"token builtin class-name"},"shift"),n(),s("span",{class:"token number"},"2"),n(`
        `),s("span",{class:"token builtin class-name"},"break"),n(`
        `),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    `),s("span",{class:"token parameter variable"},"-d"),n(),s("span",{class:"token operator"},"|"),n(" --installDependency"),s("span",{class:"token punctuation"},")"),n(`
        `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"InstallDependency ..."'),n(`
        `),s("span",{class:"token assign-left variable"},"STARTTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
        InstallDependency
        `),s("span",{class:"token assign-left variable"},"ENDTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
        `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"Installation Elapsed: '),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$(("),n("$ENDTIME "),s("span",{class:"token operator"},"-"),n(" $STARTTIME"),s("span",{class:"token variable"},"))")]),n(' s"')]),n(`
        `),s("span",{class:"token builtin class-name"},"shift"),n(),s("span",{class:"token number"},"2"),n(`
        `),s("span",{class:"token builtin class-name"},"break"),n(`
        `),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    `),s("span",{class:"token parameter variable"},"-a"),n(),s("span",{class:"token operator"},"|"),n(" --installAll"),s("span",{class:"token punctuation"},")"),n(`
        `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"InstallAll ..."'),n(`
        `),s("span",{class:"token assign-left variable"},"STARTTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
        InstallDependency
        InstallSoftware
        `),s("span",{class:"token comment"},"# CreateNetca"),n(`
        CreateDatabase
        `),s("span",{class:"token assign-left variable"},"ENDTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
        `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"Installation Elapsed: '),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$(("),n("$ENDTIME "),s("span",{class:"token operator"},"-"),n(" $STARTTIME"),s("span",{class:"token variable"},"))")]),n(' s"')]),n(`
        `),s("span",{class:"token builtin class-name"},"shift"),n(),s("span",{class:"token number"},"2"),n(`
        `),s("span",{class:"token builtin class-name"},"break"),n(`
        `),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    `),s("span",{class:"token parameter variable"},"-s"),n(),s("span",{class:"token operator"},"|"),n(" --installSoftware"),s("span",{class:"token punctuation"},")"),n(`
        `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"InstallSoftware ..."'),n(`
        `),s("span",{class:"token assign-left variable"},"STARTTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
        InstallDependency
        InstallSoftware
        `),s("span",{class:"token assign-left variable"},"ENDTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
        `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"Installation Elapsed: '),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$(("),n("$ENDTIME "),s("span",{class:"token operator"},"-"),n(" $STARTTIME"),s("span",{class:"token variable"},"))")]),n(' s"')]),n(`
        `),s("span",{class:"token builtin class-name"},"shift"),n(),s("span",{class:"token number"},"2"),n(`
        `),s("span",{class:"token builtin class-name"},"break"),n(`
        `),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    `),s("span",{class:"token parameter variable"},"-n"),n(),s("span",{class:"token operator"},"|"),n(" --createNetca"),s("span",{class:"token punctuation"},")"),n(`
        `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Create Netca ..."'),n(`
        `),s("span",{class:"token assign-left variable"},"STARTTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
        CreateNetca
        `),s("span",{class:"token assign-left variable"},"ENDTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
        `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"Create Netca Elapsed: '),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$(("),n("$ENDTIME "),s("span",{class:"token operator"},"-"),n(" $STARTTIME"),s("span",{class:"token variable"},"))")]),n(' s"')]),n(`
        `),s("span",{class:"token builtin class-name"},"shift"),n(),s("span",{class:"token number"},"2"),n(`
        `),s("span",{class:"token builtin class-name"},"break"),n(`
        `),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    `),s("span",{class:"token parameter variable"},"-c"),n(),s("span",{class:"token operator"},"|"),n(" --createDatabase"),s("span",{class:"token punctuation"},")"),n(`
        `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"CreateDatabase ..."'),n(`
        `),s("span",{class:"token assign-left variable"},"STARTTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
        CreateDatabase
        `),s("span",{class:"token assign-left variable"},"ENDTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
        `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"Installation Elapsed: '),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$(("),n("$ENDTIME "),s("span",{class:"token operator"},"-"),n(" $STARTTIME"),s("span",{class:"token variable"},"))")]),n(' s"')]),n(`
        `),s("span",{class:"token builtin class-name"},"shift"),n(),s("span",{class:"token number"},"2"),n(`
        `),s("span",{class:"token builtin class-name"},"break"),n(`
        `),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    `),s("span",{class:"token parameter variable"},"-e"),n(),s("span",{class:"token operator"},"|"),n(" --enable"),s("span",{class:"token punctuation"},")"),n(`
        `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Enable Auto Startup ..."'),n(`
        `),s("span",{class:"token assign-left variable"},"STARTTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
        EnableAutoStartup
        `),s("span",{class:"token assign-left variable"},"ENDTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
        `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"Enable Auto Startup Elapsed: '),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$(("),n("$ENDTIME "),s("span",{class:"token operator"},"-"),n(" $STARTTIME"),s("span",{class:"token variable"},"))")]),n(' s"')]),n(`
        `),s("span",{class:"token builtin class-name"},"shift"),n(),s("span",{class:"token number"},"2"),n(`
        `),s("span",{class:"token builtin class-name"},"break"),n(`
        `),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    `),s("span",{class:"token parameter variable"},"-p"),n(),s("span",{class:"token operator"},"|"),n(" --package"),s("span",{class:"token punctuation"},")"),n(`
        `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Downloading Package ..."'),n(`
        `),s("span",{class:"token assign-left variable"},"STARTTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
        DownloadPackage
        `),s("span",{class:"token assign-left variable"},"ENDTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
        `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"Downloading Package Elapsed: '),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$(("),n("$ENDTIME "),s("span",{class:"token operator"},"-"),n(" $STARTTIME"),s("span",{class:"token variable"},"))")]),n(' s"')]),n(`
        `),s("span",{class:"token builtin class-name"},"shift"),n(),s("span",{class:"token number"},"2"),n(`
        `),s("span",{class:"token builtin class-name"},"break"),n(`
        `),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    `),s("span",{class:"token parameter variable"},"-r"),n(),s("span",{class:"token operator"},"|"),n(" --remove"),s("span",{class:"token punctuation"},")"),n(`
        `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Unintalling Database ..."'),n(`
        `),s("span",{class:"token assign-left variable"},"STARTTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
        UninstallDatabase
        `),s("span",{class:"token assign-left variable"},"ENDTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
        `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"Unintalling Database Elapsed: '),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$(("),n("$ENDTIME "),s("span",{class:"token operator"},"-"),n(" $STARTTIME"),s("span",{class:"token variable"},"))")]),n(' s"')]),n(`
        `),s("span",{class:"token builtin class-name"},"shift"),n(),s("span",{class:"token number"},"2"),n(`
        `),s("span",{class:"token builtin class-name"},"break"),n(`
        `),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    `),s("span",{class:"token parameter variable"},"-f"),n(),s("span",{class:"token operator"},"|"),n(" --firewall"),s("span",{class:"token punctuation"},")"),n(`
        `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Set Firewalld ..."'),n(`
        `),s("span",{class:"token assign-left variable"},"STARTTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
        SetFirewall
        `),s("span",{class:"token assign-left variable"},"ENDTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
        `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"Set Firewalld Elapsed: '),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$(("),n("$ENDTIME "),s("span",{class:"token operator"},"-"),n(" $STARTTIME"),s("span",{class:"token variable"},"))")]),n(' s"')]),n(`
        `),s("span",{class:"token builtin class-name"},"shift"),n(),s("span",{class:"token number"},"2"),n(`
        `),s("span",{class:"token builtin class-name"},"break"),n(`
        `),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    *`),s("span",{class:"token punctuation"},")"),n(`
        Usage
        `),s("span",{class:"token builtin class-name"},"exit"),n(),s("span",{class:"token number"},"1"),n(`
        `),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    `),s("span",{class:"token keyword"},"esac"),n(`
`),s("span",{class:"token keyword"},"done"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),m=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token comment"},"#/bin/bash"),n(`
`),s("span",{class:"token function-name function"},"step1_check_os"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},"{"),n(`

    `),s("span",{class:"token comment"},"#1.1. check hostname "),n(`
	`),s("span",{class:"token assign-left variable"},"os_name"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"`"),s("span",{class:"token function"},"hostname"),s("span",{class:"token variable"},"`")]),n(`
	`),s("span",{class:"token keyword"},"if"),n(),s("span",{class:"token punctuation"},"["),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$os_name"),n('"')]),n(),s("span",{class:"token operator"},"=~"),n(" ^localhost "),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),s("span",{class:"token keyword"},"then"),n(`
		`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"ERROR: hostname: '),s("span",{class:"token variable"},"$os_name"),n(' is invalid,pls check"')]),n(`
		`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"command set new hostname: hostnamectl set-hostname newhostname"'),n(`
		`),s("span",{class:"token builtin class-name"},"exit"),n(),s("span",{class:"token parameter variable"},"-1"),n(`
	`),s("span",{class:"token keyword"},"else"),n(`
		`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"1.1. hostname check passed"'),n(`
	`),s("span",{class:"token keyword"},"fi"),n(`
	
	`),s("span",{class:"token comment"},"#1.2 ip check"),n(`
	`),s("span",{class:"token keyword"},"if"),n(),s("span",{class:"token punctuation"},"["),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},[s("span",{class:"token variable"},"`"),s("span",{class:"token function"},"ip"),n(" addr"),s("span",{class:"token operator"},"|"),s("span",{class:"token function"},"egrep"),n(),s("span",{class:"token string"},"'inet '"),s("span",{class:"token operator"},"|"),s("span",{class:"token function"},"grep"),n(),s("span",{class:"token parameter variable"},"-v"),n(),s("span",{class:"token string"},"'127.0.0.1'"),s("span",{class:"token operator"},"|"),s("span",{class:"token function"},"wc"),n(),s("span",{class:"token parameter variable"},"-l"),s("span",{class:"token variable"},"`")]),n(),s("span",{class:"token operator"},"=="),n(),s("span",{class:"token number"},"0"),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),s("span",{class:"token keyword"},"then"),n(`
		`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"ERROR: ip addr check is invalid,pls check"'),n(`
	`),s("span",{class:"token keyword"},"else"),n(`
		`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"1.2. ip check passed"'),n(`
	`),s("span",{class:"token keyword"},"fi"),n(`
	

    `),s("span",{class:"token comment"},"#1.3 check db software"),n(`
`),s("span",{class:"token keyword"},"if"),n(),s("span",{class:"token punctuation"},"["),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$ora_version"),n('"')]),n(),s("span",{class:"token operator"},"=="),n(),s("span",{class:"token string"},'"11G"'),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),s("span",{class:"token keyword"},"then"),n(`
	`),s("span",{class:"token keyword"},"if"),n(),s("span",{class:"token punctuation"},"["),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token parameter variable"},"-f"),n(" /soft/p13390677_112040_Linux-x86-64_1of7.zip "),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token parameter variable"},"-f"),n(" /soft/p13390677_112040_Linux-x86-64_2of7.zip "),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),s("span",{class:"token keyword"},"then"),n(`
	    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"1.3 software check passed"'),n(`
	`),s("span",{class:"token keyword"},"else"),n(`
	    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"ERROR: software check failed,pls upload p13390677_112040_Linux-x86-64_1of7.zip and p13390677_112040_Linux-x86-64_2of7.zip to directory /soft/"'),n(`
	    `),s("span",{class:"token builtin class-name"},"exit"),n(),s("span",{class:"token parameter variable"},"-1"),n(`
	`),s("span",{class:"token keyword"},"fi"),n(`
`),s("span",{class:"token keyword"},"elif"),n(),s("span",{class:"token punctuation"},"["),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$ora_version"),n('"')]),n(),s("span",{class:"token operator"},"=="),n(),s("span",{class:"token string"},'"19C"'),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),s("span",{class:"token keyword"},"then"),n(`
	`),s("span",{class:"token keyword"},"if"),n(),s("span",{class:"token punctuation"},"["),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token parameter variable"},"-f"),n(" /soft/LINUX.X64_193000_db_home.zip "),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),s("span",{class:"token keyword"},"then"),n(`
	    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"1.3 software check passed"'),n(`
	`),s("span",{class:"token keyword"},"else"),n(`
	    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"ERROR: software check failed,pls upload 19db.zip to directory /soft/"'),n(`
	    `),s("span",{class:"token builtin class-name"},"exit"),n(),s("span",{class:"token parameter variable"},"-1"),n(`
	`),s("span",{class:"token keyword"},"fi"),n(`	
`),s("span",{class:"token keyword"},"elif"),n(),s("span",{class:"token punctuation"},"["),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$ora_version"),n('"')]),n(),s("span",{class:"token operator"},"=="),n(),s("span",{class:"token string"},'"21C"'),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),s("span",{class:"token keyword"},"then"),n(`
	`),s("span",{class:"token keyword"},"if"),n(),s("span",{class:"token punctuation"},"["),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token parameter variable"},"-f"),n(" /soft/LINUX.X64_213000_db_home.zip "),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),s("span",{class:"token keyword"},"then"),n(`
	    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"1.3 software check passed"'),n(`
	`),s("span",{class:"token keyword"},"else"),n(`
			`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"ERROR: software check failed,pls upload 21db.zip to directory /soft/"'),n(`
			`),s("span",{class:"token builtin class-name"},"exit"),n(),s("span",{class:"token parameter variable"},"-1"),n(`
	`),s("span",{class:"token keyword"},"fi"),n(`	
`),s("span",{class:"token keyword"},"fi"),n(` 
	

	`),s("span",{class:"token comment"},"#2.check os release"),n(`
	`),s("span",{class:"token assign-left variable"},"os_release"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"`"),s("span",{class:"token function"},"cat"),n(" /etc/redhat-release"),s("span",{class:"token operator"},"|"),s("span",{class:"token function"},"sed"),n(),s("span",{class:"token parameter variable"},"-r"),n(),s("span",{class:"token string"},"'s/[ a-zA-Z()]//g'"),s("span",{class:"token operator"},"|"),s("span",{class:"token function"},"awk"),n(" -F"),s("span",{class:"token string"},'"."'),n(),s("span",{class:"token string"},"'{print $1}'"),s("span",{class:"token variable"},"`")]),n(`
	`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"****'),s("span",{class:"token variable"},"$os_release"),n('**"')]),n(`
	`),s("span",{class:"token keyword"},"if"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},"$os_release"),n(),s("span",{class:"token operator"},"!="),n(),s("span",{class:"token number"},"7"),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),s("span",{class:"token keyword"},"then"),n(`
	    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"ERROR: os release not RedHat 7.X"'),n(`
	    `),s("span",{class:"token builtin class-name"},"exit"),n(),s("span",{class:"token parameter variable"},"-1"),n(`
	`),s("span",{class:"token keyword"},"else"),n(`
	    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"2. os release check passed"'),n(`
	`),s("span",{class:"token keyword"},"fi"),n(`

	`),s("span",{class:"token comment"},"#3.check oracle user"),n(`
	`),s("span",{class:"token function"},"id"),n(" oracle "),s("span",{class:"token operator"},"&>"),n(` /dev/null
	`),s("span",{class:"token keyword"},"if"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},"$?"),n(),s("span",{class:"token operator"},"=="),n(),s("span",{class:"token number"},"0"),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),s("span",{class:"token keyword"},"then"),n(`
	    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"ERROR: oracle user created,pls check"'),n(`
	    `),s("span",{class:"token builtin class-name"},"exit"),n(),s("span",{class:"token parameter variable"},"-1"),n(`
	`),s("span",{class:"token keyword"},"else"),n(`
	    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"3. oracle user check passed"'),n(`
	`),s("span",{class:"token keyword"},"fi"),n(`

	`),s("span",{class:"token comment"},"#4.check /u01/app/oracle directory"),n(`
	`),s("span",{class:"token function"},"ls"),n(" /u01/app/oracle  "),s("span",{class:"token operator"},"&>"),n(` /dev/null
	`),s("span",{class:"token keyword"},"if"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},"$?"),n(),s("span",{class:"token operator"},"=="),n(),s("span",{class:"token number"},"0"),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),s("span",{class:"token keyword"},"then"),n(`
	    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"ERROR: /u01/app/oracle directory created,pls check"'),n(`
	    `),s("span",{class:"token builtin class-name"},"exit"),n(),s("span",{class:"token parameter variable"},"-1"),n(`
	`),s("span",{class:"token keyword"},"else"),n(`
	    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"4. oracle user check passed"'),n(`
	`),s("span",{class:"token keyword"},"fi"),n(`

	`),s("span",{class:"token comment"},"#5.check mount /dev/cdrom /mnt directory"),n(`
	`),s("span",{class:"token function"},"mount"),n(" /dev/cdrom /mnt  "),s("span",{class:"token operator"},"&>"),n(` /dev/null
	`),s("span",{class:"token keyword"},"if"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},"$?"),n(),s("span",{class:"token operator"},"!="),n(),s("span",{class:"token number"},"0"),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),s("span",{class:"token keyword"},"then"),n(`
	    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"ERROR: mount /dev/cdrom /mnt failed,pls check"'),n(`
	    `),s("span",{class:"token builtin class-name"},"exit"),n(),s("span",{class:"token parameter variable"},"-1"),n(`
	`),s("span",{class:"token keyword"},"else"),n(`
	    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"5. mount cdrom check passed"'),n(`
	    `),s("span",{class:"token function"},"umount"),n(` /mnt
	`),s("span",{class:"token keyword"},"fi"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token function-name function"},"step2_set_dbname_and_charset"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token comment"},"#6. input dbname/CHARACTERSET/NATIONALCHARACTERSET"),n(`

`),s("span",{class:"token comment"},"### dbname"),n(`
`),s("span",{class:"token keyword"},"while"),n(),s("span",{class:"token boolean"},"true"),n(`
`),s("span",{class:"token keyword"},"do"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},`"*********************************   
    NOTE: 
    DB_NAME start with alphabetical up to 8 characters of 
    alphanumeric characters, 
    underscore (_), 
    number sign (#), 
    and dollar sign ($).
    *********************************"`),n(`

    `),s("span",{class:"token builtin class-name"},"read"),n(),s("span",{class:"token parameter variable"},"-p"),n(),s("span",{class:"token string"},'"pls,input dbname(default: orcl): "'),n(` dbname

    `),s("span",{class:"token keyword"},"if"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},[n("${"),s("span",{class:"token operator"},"#"),n("dbname}")]),n(),s("span",{class:"token operator"},"=="),n(),s("span",{class:"token number"},"0"),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),s("span",{class:"token keyword"},"then"),n(`
        `),s("span",{class:"token assign-left variable"},"dbname"),s("span",{class:"token operator"},"="),n(`orcl
    `),s("span",{class:"token keyword"},"fi"),n(`

    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"***********"'),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"dbname: '),s("span",{class:"token variable"},"$dbname"),n('"')]),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"***********"'),n(`

    `),s("span",{class:"token keyword"},"if"),n(),s("span",{class:"token punctuation"},"["),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},[n("${"),s("span",{class:"token operator"},"#"),n("dbname}")]),s("span",{class:"token operator"},">"),s("span",{class:"token number"},"0"),n(),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token variable"},[n("${"),s("span",{class:"token operator"},"#"),n("dbname}")]),s("span",{class:"token operator"},"<"),s("span",{class:"token number"},"9"),n(),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$dbname"),n('"')]),n(),s("span",{class:"token operator"},"=~"),n(),s("span",{class:"token punctuation"},"["),n("a-Z"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},"["),n("a-Z0-9_"),s("span",{class:"token comment"},"#$]* ]];then"),n(`
        `),s("span",{class:"token builtin class-name"},"break"),n(`
    `),s("span",{class:"token keyword"},"else"),n(`
        `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token parameter variable"},"-e"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token entity",title:"\\n"},"\\n"),s("span",{class:"token entity",title:"\\n"},"\\n"),n(" ERROR: dbname: "),s("span",{class:"token variable"},"$dbname"),n(" is invalid,pls input again "),s("span",{class:"token entity",title:"\\n"},"\\n"),s("span",{class:"token entity",title:"\\n"},"\\n"),n('"')]),n(`
    `),s("span",{class:"token keyword"},"fi"),n(`
        
`),s("span",{class:"token keyword"},"done"),n(`


`),s("span",{class:"token comment"},"### ContainerDatabase"),n(`

	`),s("span",{class:"token comment"},"# if install 19C or 21C,choose whether use ContainerDatabase"),n(`
    `),s("span",{class:"token assign-left variable"},"cdb_flag"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'""'),n(`
    `),s("span",{class:"token assign-left variable"},"s_numberOfPDBs"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'""'),n(`
    `),s("span",{class:"token assign-left variable"},"s_pdbName"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'""'),n(`
    `),s("span",{class:"token keyword"},"if"),n(),s("span",{class:"token punctuation"},"["),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$ora_version"),n('"')]),n(),s("span",{class:"token operator"},"=="),n(),s("span",{class:"token string"},'"19C"'),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),s("span",{class:"token keyword"},"then"),n(`
    	`),s("span",{class:"token keyword"},"while"),n(),s("span",{class:"token punctuation"},"["),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$cdb_flag"),n('"')]),n(),s("span",{class:"token operator"},"!="),n(),s("span",{class:"token string"},'"TRUE"'),n(),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$cdb_flag"),n('"')]),n(),s("span",{class:"token operator"},"!="),n(),s("span",{class:"token string"},'"FALSE"'),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},"]"),n(`
    	`),s("span",{class:"token keyword"},"do"),n(`
  			`),s("span",{class:"token builtin class-name"},"read"),n(),s("span",{class:"token parameter variable"},"-p"),n(),s("span",{class:"token string"},'"use ContainerDatabase TRUE/FALSE(default FALSE):"'),n(` cdb_flag
  			`),s("span",{class:"token keyword"},"if"),n(),s("span",{class:"token punctuation"},"["),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$cdb_flag"),n('"')]),n(),s("span",{class:"token operator"},"=="),n(),s("span",{class:"token string"},'""'),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),s("span",{class:"token keyword"},"then"),n(`
  				`),s("span",{class:"token assign-left variable"},"cdb_flag"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"FALSE"'),n(`
  			`),s("span",{class:"token keyword"},"fi"),n(`
  		`),s("span",{class:"token keyword"},"done"),n(`	
  	`),s("span",{class:"token keyword"},"fi"),n(`
    
    `),s("span",{class:"token keyword"},"if"),n(),s("span",{class:"token punctuation"},"["),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$ora_version"),n('"')]),n(),s("span",{class:"token operator"},"=="),n(),s("span",{class:"token string"},'"21C"'),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),s("span",{class:"token keyword"},"then"),n(`
  		`),s("span",{class:"token assign-left variable"},"cdb_flag"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"TRUE"'),n(`  		
  	`),s("span",{class:"token keyword"},"fi"),n(`


`),s("span",{class:"token keyword"},"while"),n(),s("span",{class:"token punctuation"},"["),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$cdb_flag"),n('"')]),n(),s("span",{class:"token operator"},"=="),n(),s("span",{class:"token string"},'"TRUE"'),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},"]"),n(`
`),s("span",{class:"token keyword"},"do"),n(`    		  			
  		`),s("span",{class:"token keyword"},"if"),n(),s("span",{class:"token punctuation"},"["),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$s_pdbName"),n('"')]),n(),s("span",{class:"token operator"},"=="),n(),s("span",{class:"token string"},'""'),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),s("span",{class:"token keyword"},"then"),n(`
  			`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"*****'),s("span",{class:"token variable"},"$s_pdbName"),n('****"')]),n(`
  			`),s("span",{class:"token builtin class-name"},"read"),n(),s("span",{class:"token parameter variable"},"-p"),n(),s("span",{class:"token string"},'"pls input pdbName: "'),n(` s_pdbName
  		`),s("span",{class:"token keyword"},"elif"),n(),s("span",{class:"token punctuation"},"["),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},[n("${"),s("span",{class:"token operator"},"#"),n("s_pdbName}")]),s("span",{class:"token operator"},">"),s("span",{class:"token number"},"0"),n(),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token variable"},[n("${"),s("span",{class:"token operator"},"#"),n("s_pdbName}")]),s("span",{class:"token operator"},"<"),s("span",{class:"token number"},"9"),n(),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$s_pdbName"),n('"')]),n(),s("span",{class:"token operator"},"=~"),n(),s("span",{class:"token punctuation"},"["),n("a-Z"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},"["),n("a-Z0-9_"),s("span",{class:"token comment"},"#$]* ]];then"),n(`
  			`),s("span",{class:"token builtin class-name"},"break"),n(`
  		`),s("span",{class:"token keyword"},"else"),n(`			
  			`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token parameter variable"},"-e"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token entity",title:"\\n"},"\\n"),s("span",{class:"token entity",title:"\\n"},"\\n"),n(" ERROR: pdbName: "),s("span",{class:"token variable"},"$pdbName"),n(" is invalid,pls input again "),s("span",{class:"token entity",title:"\\n"},"\\n"),s("span",{class:"token entity",title:"\\n"},"\\n"),n('"')]),n(`
  			`),s("span",{class:"token builtin class-name"},"read"),n(),s("span",{class:"token parameter variable"},"-p"),n(),s("span",{class:"token string"},'"pls input pdbName: "'),n(` s_pdbName
  		`),s("span",{class:"token keyword"},"fi"),n(`  		
`),s("span",{class:"token keyword"},"done"),n(`


`),s("span",{class:"token comment"},"### charset"),n(`
`),s("span",{class:"token keyword"},"while"),n(),s("span",{class:"token boolean"},"true"),n(`
`),s("span",{class:"token keyword"},"do"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n("  "),s("span",{class:"token string"},`"*****************************
    1) ZHS16GBK
    2) AL32UTF8"`),n(`
    
    `),s("span",{class:"token builtin class-name"},"read"),n(),s("span",{class:"token parameter variable"},"-p"),n(),s("span",{class:"token string"},'"pls,input db CHARACTERSET(default value: ZHS16GBK):"'),n(` db_CHARACTERSET

    `),s("span",{class:"token keyword"},"if"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},[n("${"),s("span",{class:"token operator"},"#"),n("db_CHARACTERSET}")]),n(),s("span",{class:"token operator"},"=="),n(),s("span",{class:"token number"},"0"),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),s("span",{class:"token keyword"},"then"),n(`
        `),s("span",{class:"token assign-left variable"},"db_CHARACTERSET"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"ZHS16GBK"'),n(`
    `),s("span",{class:"token keyword"},"fi"),n(`

    `),s("span",{class:"token builtin class-name"},"echo"),n("  "),s("span",{class:"token string"},`"*****************************
    1) AL16UTF16
    2) UTF8"`),n(`
    
    `),s("span",{class:"token builtin class-name"},"read"),n(),s("span",{class:"token parameter variable"},"-p"),n(),s("span",{class:"token string"},'"pls,input db NATIONAL CHARACTERSET(default value: AL16UTF16):"'),n(` db_NCHARACTERSET


    `),s("span",{class:"token keyword"},"if"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},[n("${"),s("span",{class:"token operator"},"#"),n("db_NCHARACTERSET}")]),n(),s("span",{class:"token operator"},"=="),n(),s("span",{class:"token number"},"0"),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),s("span",{class:"token keyword"},"then"),n(`
        `),s("span",{class:"token assign-left variable"},"db_NCHARACTERSET"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"AL16UTF16"'),n(`
    `),s("span",{class:"token keyword"},"fi"),n(`

    `),s("span",{class:"token keyword"},"if"),n(),s("span",{class:"token punctuation"},"["),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$db_CHARACTERSET"),n('"')]),n(),s("span",{class:"token operator"},"!="),n(),s("span",{class:"token string"},'"ZHS16GBK"'),n(),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$db_CHARACTERSET"),n('"')]),n(),s("span",{class:"token operator"},"!="),n(),s("span",{class:"token string"},'"AL32UTF8"'),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),s("span",{class:"token keyword"},"then"),n(`
        `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token parameter variable"},"-e"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token entity",title:"\\n"},"\\n"),s("span",{class:"token entity",title:"\\n"},"\\n"),n(" ERROR: input db CHARACTERSET: "),s("span",{class:"token variable"},"$db_CHARACTERSET"),n(" invalid,pls check "),s("span",{class:"token entity",title:"\\n"},"\\n"),s("span",{class:"token entity",title:"\\n"},"\\n"),n('"')]),n(`
    `),s("span",{class:"token keyword"},"elif"),n(),s("span",{class:"token punctuation"},"["),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$db_NCHARACTERSET"),n('"')]),n(),s("span",{class:"token operator"},"!="),n(),s("span",{class:"token string"},'"AL16UTF16"'),n(),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$db_NCHARACTERSET"),n('"')]),n(),s("span",{class:"token operator"},"!="),n(),s("span",{class:"token string"},'"UTF8"'),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),s("span",{class:"token keyword"},"then"),n(`
        `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token parameter variable"},"-e"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token entity",title:"\\n"},"\\n"),s("span",{class:"token entity",title:"\\n"},"\\n"),n(" ERROR: input db NATIONAL CHARACTERSET: "),s("span",{class:"token variable"},"$db_NCHARACTERSET"),n(" invalid,pls check "),s("span",{class:"token entity",title:"\\n"},"\\n"),s("span",{class:"token entity",title:"\\n"},"\\n"),n('"')]),n(`
    `),s("span",{class:"token keyword"},"else"),n(`
        `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"*****************"'),n(`
        `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"db_CHARACTERSET: '),s("span",{class:"token variable"},"$db_CHARACTERSET"),n('"')]),n(`
        `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"db_NCHARACTERSET: '),s("span",{class:"token variable"},"$db_NCHARACTERSET"),n('"')]),n(`
        `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"*****************"'),n(`
        `),s("span",{class:"token builtin class-name"},"break"),n(`
    `),s("span",{class:"token keyword"},"fi"),n(`
`),s("span",{class:"token keyword"},"done"),n(`

`),s("span",{class:"token assign-left variable"},"starttime"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"`"),s("span",{class:"token function"},"date"),n(" +"),s("span",{class:"token string"},"'%Y-%m-%d %H:%M:%S'"),s("span",{class:"token variable"},"`")]),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token function-name function"},"step3_set_os"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token comment"},"#7. add hostname to /etc/hosts"),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token parameter variable"},"-e"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},[s("span",{class:"token variable"},"`"),s("span",{class:"token function"},"hostname"),s("span",{class:"token variable"},"`")]),s("span",{class:"token entity",title:"\\t"},"\\t"),s("span",{class:"token variable"},[s("span",{class:"token variable"},"`"),s("span",{class:"token function"},"ip"),n(" addr"),s("span",{class:"token operator"},"|"),s("span",{class:"token function"},"egrep"),n(),s("span",{class:"token string"},"'inet '"),s("span",{class:"token operator"},"|"),s("span",{class:"token function"},"grep"),n(),s("span",{class:"token parameter variable"},"-v"),n(),s("span",{class:"token string"},"'127.0.0.1'"),s("span",{class:"token operator"},"|"),s("span",{class:"token function"},"awk"),n(),s("span",{class:"token string"},"'{print $2}'"),s("span",{class:"token operator"},"|"),s("span",{class:"token function"},"sed"),n(),s("span",{class:"token parameter variable"},"-r"),n(),s("span",{class:"token string"},"'s#/24##'"),s("span",{class:"token operator"},"|"),s("span",{class:"token function"},"head"),n(),s("span",{class:"token parameter variable"},"-1"),s("span",{class:"token variable"},"`")]),n('"')]),s("span",{class:"token operator"},">>"),n(` /etc/hosts
`),s("span",{class:"token function"},"cat"),n(` /etc/hosts

`),s("span",{class:"token comment"},"#8. yum config"),n(`
`),s("span",{class:"token function"},"mount"),n(` /dev/cdrom /mnt
`),s("span",{class:"token keyword"},"if"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},"$?"),n(),s("span",{class:"token operator"},"!="),n(),s("span",{class:"token number"},"0"),n("  "),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),s("span",{class:"token keyword"},"then"),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token parameter variable"},"-e"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token entity",title:"\\n"},"\\n"),s("span",{class:"token entity",title:"\\n"},"\\n"),n("ERROR: cant not mount cdrom"),s("span",{class:"token entity",title:"\\n"},"\\n"),s("span",{class:"token entity",title:"\\n"},"\\n"),n('"')]),n(`
`),s("span",{class:"token builtin class-name"},"exit"),n(),s("span",{class:"token parameter variable"},"-1"),n(`
`),s("span",{class:"token keyword"},"else"),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"8.1 cdrom have mounted"'),n(`
`),s("span",{class:"token keyword"},"fi"),n(`

`),s("span",{class:"token function"},"mkdir"),n(),s("span",{class:"token parameter variable"},"-p"),n(` /etc/yum.repos.d/bak
`),s("span",{class:"token function"},"mv"),n(` /etc/yum.repos.d/*.repo /etc/yum.repos.d/bak/
`),s("span",{class:"token function"},"cat"),n(),s("span",{class:"token operator"},">>"),n(" /etc/yum.repos.d/rhel-source.repo "),s("span",{class:"token operator"},"<<-"),s("span",{class:"token string"},`EOF
[rhel-oracle-lib]
name=oracle
baseurl=file:///mnt
enabled=1
gpgcheck=0
EOF`),n(`

yum list `),s("span",{class:"token operator"},"&>"),n(` /dev/null
`),s("span",{class:"token keyword"},"if"),n(),s("span",{class:"token punctuation"},"["),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},"$?"),n(),s("span",{class:"token operator"},"!="),n(),s("span",{class:"token number"},"0"),n("  "),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),s("span",{class:"token keyword"},"then"),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token parameter variable"},"-e"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token entity",title:"\\n"},"\\n"),s("span",{class:"token entity",title:"\\n"},"\\n"),n("ERROR: yum list check failed "),s("span",{class:"token entity",title:"\\n"},"\\n"),s("span",{class:"token entity",title:"\\n"},"\\n"),n('"')]),n(`
`),s("span",{class:"token builtin class-name"},"exit"),n(),s("span",{class:"token parameter variable"},"-1"),n(`
`),s("span",{class:"token keyword"},"else"),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"8.2 yum config completed"'),n(`
`),s("span",{class:"token keyword"},"fi"),n(`

yum `),s("span",{class:"token function"},"install"),n(),s("span",{class:"token parameter variable"},"-y"),n("  gcc compat-gcc-34 elfutils-libelf-devel compat-libstdc++-33 elfutils-libelf gcc-c++ glibc-headers libaio libaio-devel libgcc libstdc++ libstdc++-devel "),s("span",{class:"token function"},"make"),n(" ksh sysstat unixODBC compat-libcap1 libXp device-mapper-multipath libXi.x86_64 libXtst.x86_64 xorg-x11-utils  "),s("span",{class:"token function"},"unzip"),n(),s("span",{class:"token function"},"zip"),n(" smartmontools net-tools lrzsz "),s("span",{class:"token function"},"vim"),n(" sysstat dstat  libnsl policycoreutils-python "),s("span",{class:"token function"},"bc"),n(`



`),s("span",{class:"token comment"},"#9. stop os service"),n(`
systemctl status firewalld
systemctl stop firewalld
systemctl disable firewalld
systemctl is-enabled firewalld
/bin/sed `),s("span",{class:"token parameter variable"},"-i"),n(" s/SELINUX"),s("span",{class:"token operator"},"="),n("enforcing/SELINUX"),s("span",{class:"token operator"},"="),n(`disabled/ /etc/selinux/config
`),s("span",{class:"token function"},"cat"),n(" /etc/selinux/config"),s("span",{class:"token operator"},"|"),s("span",{class:"token function"},"grep"),n(),s("span",{class:"token assign-left variable"},"SELINUX"),s("span",{class:"token operator"},"="),n(`
systemctl stop tuned.service 
systemctl stop ktune.service
systemctl stop firewalld.service
systemctl stop postfix.service
systemctl stop avahi-daemon.socket
systemctl stop avahi-daemon.service
systemctl stop atd.service
systemctl stop bluetooth.service
systemctl stop wpa_supplicant.service
systemctl stop accounts-daemon.service
systemctl stop atd.service cups.service
systemctl stop ModemManager.service
systemctl stop debug-shell.service
systemctl stop rtkit-daemon.service
systemctl stop rpcbind.service
systemctl stop rngd.service
systemctl stop upower.service
systemctl stop rhsmcertd.service
systemctl stop mcelog.service
systemctl stop colord.service
systemctl stop gdm.service
systemctl stop libstoragemgmt.service
systemctl stop ksmtuned.service
systemctl stop brltty.service
systemctl stop avahi-dnsconfd.service
systemctl stop iptables
systemctl stop ip6tables
systemctl stop Bluetooth
systemctl stop cups
systemctl stop cpuspeed
systemctl stop NetworkManager
systemctl stop vsftpd
systemctl stop dhcpd
systemctl stop nfs
systemctl stop nfslock
systemctl stop ypbind
systemctl disable tuned.service 
systemctl disable ktune.service
systemctl disable firewalld.service
systemctl disable postfix.service
systemctl disable avahi-daemon.socket
systemctl disable avahi-daemon.service
systemctl disable atd.service
systemctl disable bluetooth.service
systemctl disable wpa_supplicant.service
systemctl disable accounts-daemon.service
systemctl disable atd.service cups.service
systemctl disable ModemManager.service
systemctl disable debug-shell.service
systemctl disable rtkit-daemon.service
systemctl disable rpcbind.service
systemctl disable rngd.service
systemctl disable upower.service
systemctl disable rhsmcertd.service
systemctl disable mcelog.service
systemctl disable colord.service
systemctl disable gdm.service
systemctl disable libstoragemgmt.service
systemctl disable ksmtuned.service
systemctl disable brltty.service
systemctl disable avahi-dnsconfd.service
systemctl disable iptables
systemctl disable ip6tables
systemctl disable Bluetooth
systemctl disable cups
systemctl disable cpuspeed
systemctl disable NetworkManager
systemctl disable vsftpd
systemctl disable dhcpd
systemctl disable nfs
systemctl disable nfslock
systemctl disable ypbind


`),s("span",{class:"token comment"},"#10. os parameter config"),n(`
`),s("span",{class:"token assign-left variable"},"mem_total"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"`"),s("span",{class:"token function"},"free"),s("span",{class:"token operator"},"|"),s("span",{class:"token function"},"egrep"),n(),s("span",{class:"token string"},"'Mem:'"),s("span",{class:"token operator"},"|"),s("span",{class:"token function"},"awk"),n(),s("span",{class:"token string"},"'{print $2}'"),s("span",{class:"token variable"},"`")]),n(`
`),s("span",{class:"token assign-left variable"},"huge_mem"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"`"),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token number"},"2"),n("+$mem_total*0.525/2048"),s("span",{class:"token operator"},"|"),s("span",{class:"token function"},"bc"),s("span",{class:"token operator"},"|"),s("span",{class:"token function"},"awk"),n(" -F"),s("span",{class:"token string"},'"."'),n(),s("span",{class:"token string"},"'{print $1}'"),s("span",{class:"token variable"},"`")]),n(`

`),s("span",{class:"token function"},"cat"),n(),s("span",{class:"token operator"},">>"),n(" /etc/sysctl.conf "),s("span",{class:"token operator"},"<<-"),s("span",{class:"token string"},[n(`EOF
#for oracle
kernel.shmall = `),s("span",{class:"token variable"},"$mem_total"),n(`
kernel.shmmax = `),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$(("),n("$mem_total"),s("span",{class:"token operator"},"*"),s("span",{class:"token number"},"1024"),s("span",{class:"token variable"},"))")]),n(`
kernel.shmmni = 4096
kernel.sem = 250 32000 100 128
fs.file-max = 6815744
net.ipv4.ip_local_port_range = 9000 65500
net.core.rmem_default = 262144
net.core.rmem_max = 4194304
net.core.wmem_default = 262144
net.core.wmem_max = 1048576
net.ipv4.ipfrag_high_thresh = 4194304
net.ipv4.ipfrag_low_thresh = 3145728
fs.aio-max-nr = 1048576 
vm.min_free_kbytes = 512000
vm.vfs_cache_pressure = 200
vm.swappiness = 20
vm.nr_hugepages=`),s("span",{class:"token variable"},"$huge_mem"),n(`
EOF`)]),n(`
`),s("span",{class:"token function"},"sysctl"),n(),s("span",{class:"token parameter variable"},"-p"),n(`


`),s("span",{class:"token function"},"cat"),n(),s("span",{class:"token operator"},">>"),n(" /etc/security/limits.conf "),s("span",{class:"token operator"},"<<-"),s("span",{class:"token string"},`EOF
#for oracle
oracle  soft  nproc 16384
oracle  hard  nproc 16384
oracle  soft  nofile 10240
oracle  hard  nofile 65536
oracle  soft  stack 10240
oracle  hard  stack 32768
oracle  soft  memlock unlimited
oracle  hard  memlock unlimited
oracle  soft  core unlimited
oracle  hard  core unlimited
EOF`),n(`

`),s("span",{class:"token function"},"cat"),n(),s("span",{class:"token operator"},">>"),n(" /etc/pam.d/login "),s("span",{class:"token operator"},"<<-"),s("span",{class:"token string"},`EOF
#for oracle
session    required     pam_limits.so
EOF`),n(`



`),s("span",{class:"token comment"},"#11. creater user"),n(`
lsattr /etc/passwd
lsattr /etc/group
lsattr /etc/gshadow

chattr `),s("span",{class:"token parameter variable"},"-i"),n(` /etc/passwd
chattr `),s("span",{class:"token parameter variable"},"-i"),n(` /etc/group
chattr `),s("span",{class:"token parameter variable"},"-i"),n(` /etc/gshadow

/usr/sbin/groupadd `),s("span",{class:"token parameter variable"},"-g"),n(),s("span",{class:"token number"},"1001"),n(` oinstall                                     
/usr/sbin/groupadd `),s("span",{class:"token parameter variable"},"-g"),n(),s("span",{class:"token number"},"1002"),n(` dba                                           
                                    
/usr/sbin/useradd `),s("span",{class:"token parameter variable"},"-u"),n(),s("span",{class:"token number"},"1002"),n(),s("span",{class:"token parameter variable"},"-g"),n(" oinstall "),s("span",{class:"token parameter variable"},"-G"),n(` dba oracle               
/bin/echo `),s("span",{class:"token string"},'"Enmo_1234"'),n(),s("span",{class:"token operator"},"|"),n("/usr/bin/passwd "),s("span",{class:"token parameter variable"},"--stdin"),n(` oracle

`),s("span",{class:"token comment"},"#12. disable Transparent HugePages"),n(`
`),s("span",{class:"token function"},"chmod"),n(` +x /etc/rc.d/rc.local
`),s("span",{class:"token function"},"ls"),n(" /sys/kernel/mm/transparent_hugepage/enabled "),s("span",{class:"token operator"},"&>"),n(` /dev/null
`),s("span",{class:"token keyword"},"if"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},"$?"),n(),s("span",{class:"token operator"},"=="),n(),s("span",{class:"token number"},"0"),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),s("span",{class:"token keyword"},"then"),n(`
	`),s("span",{class:"token keyword"},"if"),n(),s("span",{class:"token builtin class-name"},"test"),n(),s("span",{class:"token parameter variable"},"-f"),n(" /sys/kernel/mm/transparent_hugepage/enabled"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token keyword"},"then"),n(`
        `),s("span",{class:"token builtin class-name"},"echo"),n(" never "),s("span",{class:"token operator"},">"),n(` /sys/kernel/mm/transparent_hugepage/enabled
        `),s("span",{class:"token function"},"cat"),n(` /sys/kernel/mm/transparent_hugepage/enabled
	`),s("span",{class:"token keyword"},"fi"),n(`
	
	`),s("span",{class:"token function"},"cat"),n(),s("span",{class:"token operator"},">>"),n(" /etc/rc.local "),s("span",{class:"token operator"},"<<-"),s("span",{class:"token string"},[n(`EOF
		if test -f /sys/kernel/mm/transparent_hugepage/enabled; then
   		    echo never > /sys/kernel/mm/transparent_hugepage/enabled
		fi
	EOF
    cat /etc/rc.local
    cat /sys/kernel/mm/transparent_hugepage/enabled

fi
 

ls /sys/kernel/mm/redhat_transparent_hugepage/enabled &> /dev/null
if [ `),s("span",{class:"token variable"},"$?"),n(` == 0 ];then
    echo "************************"
	if test -f /sys/kernel/mm/redhat_transparent_hugepage/enabled; then
        echo never > /sys/kernel/mm/redhat_transparent_hugepage/enabled
        cat /sys/kernel/mm/redhat_transparent_hugepage/enabled
	fi
	
	cat >> /etc/rc.d/rc.local <<-EOF
		if test -f /sys/kernel/mm/redhat_transparent_hugepage/enabled; then
   		    echo never > /sys/kernel/mm/redhat_transparent_hugepage/enabled
		fi
	EOF

    cat /etc/rc.local
    cat /sys/kernel/mm/redhat_transparent_hugepage/enabled
fi

#13. create directory
/bin/mkdir -p /u01/app/oracle
/bin/chown -R oracle:oinstall /u01
/bin/chmod -R 775 /u01

/bin/mkdir -p /oradata
/bin/chown -R oracle:oinstall /oradata
/bin/chmod -R 775 /oradata

/bin/mkdir -p /soft
/bin/chown -R oracle:oinstall /soft
/bin/chmod -R 775 /soft

#14. set oracle bash_profile


if [[ "`),s("span",{class:"token variable"},"$ora_version"),n(`" == "11G" ]];then
	
unzip /soft/p13390677_112040_Linux-x86-64_1of7.zip -d /soft/
unzip /soft/p13390677_112040_Linux-x86-64_2of7.zip -d /soft/
elif [[ "`),s("span",{class:"token variable"},"$ora_version"),n(`" == "19C" ]];then
	su - oracle -c "mkdir -p /u01/app/oracle/product/`),s("span",{class:"token variable"},"$ora_number"),n(`/dbhome_1/"
	su - oracle -c "unzip /soft/LINUX.X64_193000_db_home.zip -d /u01/app/oracle/product/`),s("span",{class:"token variable"},"$ora_number"),n(`/dbhome_1/"
elif [[ "`),s("span",{class:"token variable"},"$ora_version"),n(`" == "21C" ]];then
	su - oracle -c "mkdir -p /u01/app/oracle/product/`),s("span",{class:"token variable"},"$ora_number"),n(`/dbhome_1/"
	su - oracle -c "unzip /soft/LINUX.X64_213000_db_home.zip -d /u01/app/oracle/product/`),s("span",{class:"token variable"},"$ora_number"),n(`/dbhome_1/"
fi




cat >> /home/oracle/.bash_profile <<EOF
export  TMP=/tmp
export  TMPDIR=\\`),s("span",{class:"token variable"},"$TMP"),n(`
export  ORACLE_SID=`),s("span",{class:"token variable"},"$dbname"),n(`
export  ORACLE_BASE=/u01/app/oracle
export  ORACLE_HOME=\\`),s("span",{class:"token variable"},"$ORACLE_BASE"),n("/product/"),s("span",{class:"token variable"},"$ora_number"),n(`/dbhome_1
export  ORACLE_TERM=xterm
export  PATH=/usr/sbin:\\`),s("span",{class:"token environment constant"},"$PATH"),n(`
export  PATH=\\`),s("span",{class:"token variable"},"$ORACLE_HOME"),n("/bin:\\"),s("span",{class:"token environment constant"},"$PATH"),n(`
export  LD_LIBRARY_PATH=\\`),s("span",{class:"token variable"},"$ORACLE_HOME"),n(`/lib:/lib:/usr/lib
export  CLASSPATH=\\`),s("span",{class:"token variable"},"$ORACLE_HOME"),n("/JRE:\\"),s("span",{class:"token variable"},"$ORACLE_HOME"),n("/jlib:\\"),s("span",{class:"token variable"},"$ORACLE_HOME"),n(`/rdbms/jlib
umask 022
EOF`)]),n(`

`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token function-name function"},"step4_create_response_file_11g"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},"{"),n(`

`),s("span",{class:"token comment"},"#15. create response file"),n(`
`),s("span",{class:"token function"},"cat"),n(),s("span",{class:"token operator"},">>"),n(" /etc/oraInst.loc "),s("span",{class:"token operator"},"<<-"),s("span",{class:"token string"},`EOF
inventory_loc=/u01/app/oraInventory
inst_group=oinstall 
EOF`),n(`

`),s("span",{class:"token function"},"chown"),n(` oracle:oinstall /etc/oraInst.loc
`),s("span",{class:"token function"},"chmod"),n(),s("span",{class:"token number"},"664"),n(` /etc/oraInst.loc

`),s("span",{class:"token function"},"rm"),n(),s("span",{class:"token parameter variable"},"-f"),n(` /soft/*.rsp

`),s("span",{class:"token function"},"cat"),n(),s("span",{class:"token operator"},">>"),n(" /soft/db_install.rsp "),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOF
oracle.install.responseFileVersion=/oracle/install/rspfmt_dbinstall_response_schema_v11_2_0
oracle.install.option=INSTALL_DB_SWONLY
ORACLE_HOSTNAME=`),s("span",{class:"token variable"},[s("span",{class:"token variable"},"`"),s("span",{class:"token function"},"hostname"),s("span",{class:"token variable"},"`")]),n(`
UNIX_GROUP_NAME=oinstall
INVENTORY_LOCATION=/u01/app/oraInventory
SELECTED_LANGUAGES=en,zh_CN
ORACLE_HOME=/u01/app/oracle/product/11.2.0/dbhome_1
ORACLE_BASE=/u01/app/oracle
oracle.install.db.InstallEdition=EE
oracle.install.db.EEOptionsSelection=false
oracle.install.db.DBA_GROUP=dba
oracle.install.db.OPER_GROUP=dba
oracle.install.db.isRACOneInstall=false
SECURITY_UPDATES_VIA_MYORACLESUPPORT=false
DECLINE_SECURITY_UPDATES=true
oracle.installer.autoupdates.option=SKIP_UPDATES
EOF`)]),n(`

`),s("span",{class:"token function"},"cat"),n(),s("span",{class:"token operator"},">>"),n(" /soft/netca.rsp "),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},`EOF
[GENERAL]
RESPONSEFILE_VERSION="11.2"
CREATE_TYPE="CUSTOM"
[oracle.net.ca]
INSTALLED_COMPONENTS={"server","net8","javavm"}
INSTALL_TYPE=""typical""
LISTENER_NUMBER=1
LISTENER_NAMES={"LISTENER"}
LISTENER_PROTOCOLS={"TCP;1521"}
LISTENER_START=""LISTENER""
NAMING_METHODS={"TNSNAMES","ONAMES","HOSTNAME"}
NSN_NUMBER=1
NSN_NAMES={"EXTPROC_CONNECTION_DATA"}
NSN_SERVICE={"PLSExtProc"}
NSN_PROTOCOLS={"TCP;HOSTNAME;1521"}
EOF`),n(`

`),s("span",{class:"token function"},"cat"),n(),s("span",{class:"token operator"},">>"),n(" /soft/dbca.rsp "),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOF
[GENERAL]
RESPONSEFILE_VERSION = "11.2.0"
OPERATION_TYPE = "createDatabase"
[CREATEDATABASE]
GDBNAME = "`),s("span",{class:"token variable"},"$dbname"),n(`"
SID = "`),s("span",{class:"token variable"},"$dbname"),n(`"
TEMPLATENAME = "General_Purpose.dbc"
SYSPASSWORD = "Enmo_1234"
SYSTEMPASSWORD = "Enmo_1234"
SYSMANPASSWORD = "Enmo_1234"
DBSNMPPASSWORD = "Enmo_1234"
DATAFILEDESTINATION =/oradata
RECOVERYAREADESTINATION=/oradata/flash_recovery_area
CHARACTERSET = "`),s("span",{class:"token variable"},"$db_CHARACTERSET"),n(`"
NATIONALCHARACTERSET= "`),s("span",{class:"token variable"},"$db_NCHARACTERSET"),n(`"
MEMORYPERCENTAGE = "70"
AUTOMATICMEMORYMANAGEMENT = "FALSE"
EOF`)]),n(`

/bin/mkdir `),s("span",{class:"token parameter variable"},"-p"),n(` /soft
/bin/chown `),s("span",{class:"token parameter variable"},"-R"),n(` oracle:oinstall /soft
/bin/chmod `),s("span",{class:"token parameter variable"},"-R"),n(),s("span",{class:"token number"},"775"),n(` /soft
`),s("span",{class:"token punctuation"},"}"),n(`


`),s("span",{class:"token function-name function"},"step5_install_db_11g"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},"{"),n(`
`),s("span",{class:"token comment"},"#16. start install db software"),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token parameter variable"},"-e"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token entity",title:"\\n"},"\\n"),s("span",{class:"token entity",title:"\\n"},"\\n"),n("****** start install db software ******"),s("span",{class:"token entity",title:"\\n"},"\\n"),s("span",{class:"token entity",title:"\\n"},"\\n"),n('"')]),n(`
`),s("span",{class:"token function"},"su"),n(" - oracle "),s("span",{class:"token parameter variable"},"-c"),n(),s("span",{class:"token string"},'"/soft/database/runInstaller -silent -ignoreSysPrereqs -ignorePrereq -showProgress -responseFile /soft/db_install.rsp"'),n(` 

`),s("span",{class:"token keyword"},"while"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},[s("span",{class:"token variable"},"`"),s("span",{class:"token function"},"ps"),n(),s("span",{class:"token parameter variable"},"-fu"),n(" oracle"),s("span",{class:"token operator"},"|"),s("span",{class:"token function"},"egrep"),n(),s("span",{class:"token parameter variable"},"-v"),n(),s("span",{class:"token string"},'"UID|pts"'),s("span",{class:"token operator"},"|"),s("span",{class:"token function"},"wc"),n(),s("span",{class:"token parameter variable"},"-l"),s("span",{class:"token variable"},"`")]),n(),s("span",{class:"token operator"},"!="),n(),s("span",{class:"token number"},"0"),n(),s("span",{class:"token punctuation"},"]"),n(`
`),s("span",{class:"token keyword"},"do"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"db is installing wait 10 secends...."'),n(`
    `),s("span",{class:"token function"},"sleep"),n(),s("span",{class:"token number"},"10"),n(`
`),s("span",{class:"token keyword"},"done"),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token parameter variable"},"-e"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token entity",title:"\\n"},"\\n"),s("span",{class:"token entity",title:"\\n"},"\\n"),n("****** db software install complete ******"),s("span",{class:"token entity",title:"\\n"},"\\n"),s("span",{class:"token entity",title:"\\n"},"\\n"),n('"')]),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token parameter variable"},"-e"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token entity",title:"\\n"},"\\n"),s("span",{class:"token entity",title:"\\n"},"\\n"),n("****** start run root.sh ******"),s("span",{class:"token entity",title:"\\n"},"\\n"),s("span",{class:"token entity",title:"\\n"},"\\n"),n('"')]),n(`
/u01/app/oracle/product/11.2.0/dbhome_1/root.sh
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token parameter variable"},"-e"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token entity",title:"\\n"},"\\n"),s("span",{class:"token entity",title:"\\n"},"\\n"),n("******  run root.sh completed******"),s("span",{class:"token entity",title:"\\n"},"\\n"),s("span",{class:"token entity",title:"\\n"},"\\n"),n('"')]),n(`

`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token function-name function"},"step6_config_listener_11g"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},"{"),n(`
`),s("span",{class:"token comment"},"#17. start config listener"),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token parameter variable"},"-e"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token entity",title:"\\n"},"\\n"),s("span",{class:"token entity",title:"\\n"},"\\n"),n("****** start listener config  ******"),s("span",{class:"token entity",title:"\\n"},"\\n"),s("span",{class:"token entity",title:"\\n"},"\\n"),n('"')]),n(` 
`),s("span",{class:"token function"},"su"),n(" - oracle "),s("span",{class:"token parameter variable"},"-c"),n(),s("span",{class:"token string"},'"/u01/app/oracle/product/11.2.0/dbhome_1/bin/netca -silent -responsefile /soft/netca.rsp"'),n(`

`),s("span",{class:"token keyword"},"while"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},[s("span",{class:"token variable"},"`"),s("span",{class:"token function"},"ps"),n(),s("span",{class:"token parameter variable"},"-fu"),n(" oracle"),s("span",{class:"token operator"},"|"),s("span",{class:"token function"},"egrep"),n(),s("span",{class:"token parameter variable"},"-v"),n(),s("span",{class:"token string"},'"tns|UID|pts"'),s("span",{class:"token operator"},"|"),s("span",{class:"token function"},"wc"),n(),s("span",{class:"token parameter variable"},"-l"),s("span",{class:"token variable"},"`")]),n(),s("span",{class:"token operator"},"!="),n(),s("span",{class:"token number"},"0"),n(),s("span",{class:"token punctuation"},"]"),n(`
`),s("span",{class:"token keyword"},"do"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"config listener is in process,plswait 10 secends...."'),n(`
    `),s("span",{class:"token function"},"sleep"),n(),s("span",{class:"token number"},"10"),n(`
`),s("span",{class:"token keyword"},"done"),n(`


`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token parameter variable"},"-e"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token entity",title:"\\n"},"\\n"),s("span",{class:"token entity",title:"\\n"},"\\n"),n("****** check listern status ******"),s("span",{class:"token entity",title:"\\n"},"\\n"),s("span",{class:"token entity",title:"\\n"},"\\n"),n('"')]),n(`
`),s("span",{class:"token function"},"su"),n(" - oracle "),s("span",{class:"token parameter variable"},"-c"),n(),s("span",{class:"token string"},'"lsnrctl status"'),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token parameter variable"},"-e"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token entity",title:"\\n"},"\\n"),s("span",{class:"token entity",title:"\\n"},"\\n"),n('"')]),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token parameter variable"},"-e"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token entity",title:"\\n"},"\\n"),s("span",{class:"token entity",title:"\\n"},"\\n"),n("****** listener config completed ******"),s("span",{class:"token entity",title:"\\n"},"\\n"),s("span",{class:"token entity",title:"\\n"},"\\n"),n('"')]),n(`

`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token function-name function"},"step7_create_inst_11g"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},"{"),n(`
`),s("span",{class:"token comment"},"#18.  start db instance create"),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token parameter variable"},"-e"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token entity",title:"\\n"},"\\n"),s("span",{class:"token entity",title:"\\n"},"\\n"),n("****** start db instance create ******"),s("span",{class:"token entity",title:"\\n"},"\\n"),s("span",{class:"token entity",title:"\\n"},"\\n"),n('"')]),n(` 
`),s("span",{class:"token function"},"su"),n(" - oracle "),s("span",{class:"token parameter variable"},"-c"),n(),s("span",{class:"token string"},'"/u01/app/oracle/product/11.2.0/dbhome_1/bin/dbca -silent -responsefile /soft/dbca.rsp"'),n(`


`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token parameter variable"},"-e"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token entity",title:"\\n"},"\\n"),s("span",{class:"token entity",title:"\\n"},"\\n"),n("****** db instance create complete ******"),s("span",{class:"token entity",title:"\\n"},"\\n"),s("span",{class:"token entity",title:"\\n"},"\\n"),n('"')]),n(`

`),s("span",{class:"token punctuation"},"}"),n(`


`),s("span",{class:"token function-name function"},"step8_check_db"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},"{"),n(`
`),s("span",{class:"token comment"},"#19. db check"),n(`
`),s("span",{class:"token comment"},"##19.1 db status check"),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"******* 19.db check ********"'),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"******* 19.1 check db instance"'),n(`
`),s("span",{class:"token function"},"su"),n(" - oracle "),s("span",{class:"token parameter variable"},"-c"),n(),s("span",{class:"token string"},`'
sqlplus "/ as sysdba" <<-EOF 
select INSTANCE_NAME,status from v\\$instance;
show pdbs;
!lsnrctl status
exit
EOF
'`),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"******* 19.2 check HugePage info"'),n(`
`),s("span",{class:"token function"},"grep"),n(` Huge /proc/meminfo

`),s("span",{class:"token assign-left variable"},"endtime"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"`"),s("span",{class:"token function"},"date"),n(" +"),s("span",{class:"token string"},"'%Y-%m-%d %H:%M:%S'"),s("span",{class:"token variable"},"`")]),n(`
`),s("span",{class:"token assign-left variable"},"start_seconds"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(),s("span",{class:"token parameter variable"},"--date"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$starttime"),n('"')]),n(" +%s"),s("span",{class:"token variable"},")")]),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token assign-left variable"},"end_seconds"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(),s("span",{class:"token parameter variable"},"--date"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$endtime"),n('"')]),n(" +%s"),s("span",{class:"token variable"},")")]),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"db install used: "'),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$(("),n("end_seconds"),s("span",{class:"token operator"},"-"),n("start_seconds"),s("span",{class:"token variable"},"))")]),n(` seconds

`),s("span",{class:"token punctuation"},"}"),n(`


`),s("span",{class:"token function-name function"},"step4_create_response_file_19c"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},"{"),n(`

`),s("span",{class:"token comment"},"#15. create response file"),n(`

`),s("span",{class:"token function"},"rm"),n(),s("span",{class:"token parameter variable"},"-f"),n(` /soft/*.rsp

`),s("span",{class:"token function"},"cat"),n(),s("span",{class:"token operator"},">>"),n(" /soft/db_install.rsp "),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOF
oracle.install.responseFileVersion=/oracle/install/rspfmt_dbinstall_response_schema_v`),s("span",{class:"token variable"},"$ora_number"),n(`
oracle.install.option=INSTALL_DB_SWONLY
UNIX_GROUP_NAME=oinstall
INVENTORY_LOCATION=/u01/app/oraInventory
ORACLE_BASE=/u01/app/oracle
oracle.install.db.InstallEdition=EE
oracle.install.db.OSDBA_GROUP=dba
oracle.install.db.OSOPER_GROUP=dba
oracle.install.db.OSBACKUPDBA_GROUP=dba
oracle.install.db.OSDGDBA_GROUP=dba
oracle.install.db.OSKMDBA_GROUP=dba
oracle.install.db.OSRACDBA_GROUP=dba
oracle.install.db.rootconfig.executeRootScript=false
EOF`)]),n(`

`),s("span",{class:"token function"},"cat"),n(),s("span",{class:"token operator"},">>"),n(" /soft/netca.rsp "),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOF
[GENERAL]
RESPONSEFILE_VERSION="`),s("span",{class:"token variable"},"$ora_number"),n(`"
CREATE_TYPE="CUSTOM"
[oracle.net.ca]
INSTALLED_COMPONENTS={"server","net8","javavm"}
INSTALL_TYPE=""typical""
LISTENER_NUMBER=1
LISTENER_NAMES={"LISTENER"}
LISTENER_PROTOCOLS={"TCP;1521"}
LISTENER_START=""LISTENER""
NAMING_METHODS={"TNSNAMES","ONAMES","HOSTNAME"}
NSN_NUMBER=1
NSN_NAMES={"EXTPROC_CONNECTION_DATA"}
NSN_SERVICE={"PLSExtProc"}
NSN_PROTOCOLS={"TCP;HOSTNAME;1521"}
EOF`)]),n(`

`),s("span",{class:"token function"},"cat"),n(),s("span",{class:"token operator"},">>"),n(" /soft/dbca.rsp "),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOF
responseFileVersion=/oracle/assistants/rspfmt_dbca_response_schema_v`),s("span",{class:"token variable"},"$ora_number"),n(`
gdbName=`),s("span",{class:"token variable"},"$dbname"),n(`
sid=`),s("span",{class:"token variable"},"$dbname"),n(`
templateName=General_Purpose.dbc
createAsContainerDatabase=`),s("span",{class:"token variable"},"$cdb_flag"),n(`
numberOfPDBs=1
pdbName=`),s("span",{class:"token variable"},"$s_pdbName"),n(`
pdbAdminPassword=Enmo_1234
sysPassword=Enmo_1234
systemPassword=Enmo_1234
dbsnmpPassword=Enmo_1234
datafileDestination=/oradata
characterSet=ZHS16GBK
nationalCharacterSet=AL16UTF16
memoryPercentage=70
automaticMemoryManagement=FALSE
EOF`)]),n(`

/bin/mkdir `),s("span",{class:"token parameter variable"},"-p"),n(` /soft
/bin/chown `),s("span",{class:"token parameter variable"},"-R"),n(` oracle:oinstall /soft
/bin/chmod `),s("span",{class:"token parameter variable"},"-R"),n(),s("span",{class:"token number"},"775"),n(` /soft
`),s("span",{class:"token punctuation"},"}"),n(`


`),s("span",{class:"token function-name function"},"step5_install_db_19c"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},"{"),n(`
`),s("span",{class:"token comment"},"#16. start install db software"),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token parameter variable"},"-e"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token entity",title:"\\n"},"\\n"),s("span",{class:"token entity",title:"\\n"},"\\n"),n("****** start install db software ******"),s("span",{class:"token entity",title:"\\n"},"\\n"),s("span",{class:"token entity",title:"\\n"},"\\n"),n('"')]),n(`
`),s("span",{class:"token function"},"su"),n(" - oracle "),s("span",{class:"token parameter variable"},"-c"),n(),s("span",{class:"token string"},[n('"/u01/app/oracle/product/'),s("span",{class:"token variable"},"$ora_number"),n('/dbhome_1/runInstaller -silent -responseFile /soft/db_install.rsp"')]),n(` 

`),s("span",{class:"token keyword"},"while"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},[s("span",{class:"token variable"},"`"),s("span",{class:"token function"},"ps"),n(),s("span",{class:"token parameter variable"},"-fu"),n(" oracle"),s("span",{class:"token operator"},"|"),s("span",{class:"token function"},"egrep"),n(),s("span",{class:"token parameter variable"},"-v"),n(),s("span",{class:"token string"},'"UID|pts"'),s("span",{class:"token operator"},"|"),s("span",{class:"token function"},"wc"),n(),s("span",{class:"token parameter variable"},"-l"),s("span",{class:"token variable"},"`")]),n(),s("span",{class:"token operator"},"!="),n(),s("span",{class:"token number"},"0"),n(),s("span",{class:"token punctuation"},"]"),n(`
`),s("span",{class:"token keyword"},"do"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"db is installing wait 10 secends...."'),n(`
    `),s("span",{class:"token function"},"sleep"),n(),s("span",{class:"token number"},"10"),n(`
`),s("span",{class:"token keyword"},"done"),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token parameter variable"},"-e"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token entity",title:"\\n"},"\\n"),s("span",{class:"token entity",title:"\\n"},"\\n"),n("****** db software install complete ******"),s("span",{class:"token entity",title:"\\n"},"\\n"),s("span",{class:"token entity",title:"\\n"},"\\n"),n('"')]),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token parameter variable"},"-e"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token entity",title:"\\n"},"\\n"),s("span",{class:"token entity",title:"\\n"},"\\n"),n("****** start run root.sh ******"),s("span",{class:"token entity",title:"\\n"},"\\n"),s("span",{class:"token entity",title:"\\n"},"\\n"),n('"')]),n(`
/u01/app/oraInventory/orainstRoot.sh
/u01/app/oracle/product/`),s("span",{class:"token variable"},"$ora_number"),n(`/dbhome_1/root.sh
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token parameter variable"},"-e"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token entity",title:"\\n"},"\\n"),s("span",{class:"token entity",title:"\\n"},"\\n"),n("******  run root.sh completed******"),s("span",{class:"token entity",title:"\\n"},"\\n"),s("span",{class:"token entity",title:"\\n"},"\\n"),n('"')]),n(`

`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token function-name function"},"step6_config_listener_19c"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},"{"),n(`
`),s("span",{class:"token comment"},"#17. start config listener"),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token parameter variable"},"-e"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token entity",title:"\\n"},"\\n"),s("span",{class:"token entity",title:"\\n"},"\\n"),n("****** start listener config  ******"),s("span",{class:"token entity",title:"\\n"},"\\n"),s("span",{class:"token entity",title:"\\n"},"\\n"),n('"')]),n(` 
`),s("span",{class:"token function"},"su"),n(" - oracle "),s("span",{class:"token parameter variable"},"-c"),n(),s("span",{class:"token string"},[n('"/u01/app/oracle/product/'),s("span",{class:"token variable"},"$ora_number"),n('/dbhome_1/bin/netca -silent -responsefile /soft/netca.rsp"')]),n(`

`),s("span",{class:"token keyword"},"while"),n(),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},[s("span",{class:"token variable"},"`"),s("span",{class:"token function"},"ps"),n(),s("span",{class:"token parameter variable"},"-fu"),n(" oracle"),s("span",{class:"token operator"},"|"),s("span",{class:"token function"},"egrep"),n(),s("span",{class:"token parameter variable"},"-v"),n(),s("span",{class:"token string"},'"tns|UID|pts"'),s("span",{class:"token operator"},"|"),s("span",{class:"token function"},"wc"),n(),s("span",{class:"token parameter variable"},"-l"),s("span",{class:"token variable"},"`")]),n(),s("span",{class:"token operator"},"!="),n(),s("span",{class:"token number"},"0"),n(),s("span",{class:"token punctuation"},"]"),n(`
`),s("span",{class:"token keyword"},"do"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"config listener is in process,plswait 10 secends...."'),n(`
    `),s("span",{class:"token function"},"sleep"),n(),s("span",{class:"token number"},"10"),n(`
`),s("span",{class:"token keyword"},"done"),n(`


`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token parameter variable"},"-e"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token entity",title:"\\n"},"\\n"),s("span",{class:"token entity",title:"\\n"},"\\n"),n("****** check listern status ******"),s("span",{class:"token entity",title:"\\n"},"\\n"),s("span",{class:"token entity",title:"\\n"},"\\n"),n('"')]),n(`
`),s("span",{class:"token function"},"su"),n(" - oracle "),s("span",{class:"token parameter variable"},"-c"),n(),s("span",{class:"token string"},'"lsnrctl status"'),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token parameter variable"},"-e"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token entity",title:"\\n"},"\\n"),s("span",{class:"token entity",title:"\\n"},"\\n"),n('"')]),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token parameter variable"},"-e"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token entity",title:"\\n"},"\\n"),s("span",{class:"token entity",title:"\\n"},"\\n"),n("****** listener config completed ******"),s("span",{class:"token entity",title:"\\n"},"\\n"),s("span",{class:"token entity",title:"\\n"},"\\n"),n('"')]),n(`

`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token function-name function"},"step7_create_inst_19c"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},"{"),n(`
`),s("span",{class:"token comment"},"#18.  start db instance create"),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token parameter variable"},"-e"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token entity",title:"\\n"},"\\n"),s("span",{class:"token entity",title:"\\n"},"\\n"),n("****** start db instance create ******"),s("span",{class:"token entity",title:"\\n"},"\\n"),s("span",{class:"token entity",title:"\\n"},"\\n"),n('"')]),n(` 
`),s("span",{class:"token function"},"su"),n(" - oracle "),s("span",{class:"token parameter variable"},"-c"),n(),s("span",{class:"token string"},[n('"/u01/app/oracle/product/'),s("span",{class:"token variable"},"$ora_number"),n('/dbhome_1/bin/dbca -silent -createDatabase -responseFile /soft/dbca.rsp"')]),n(`


`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token parameter variable"},"-e"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token entity",title:"\\n"},"\\n"),s("span",{class:"token entity",title:"\\n"},"\\n"),n("****** db instance create complete ******"),s("span",{class:"token entity",title:"\\n"},"\\n"),s("span",{class:"token entity",title:"\\n"},"\\n"),n('"')]),n(`

`),s("span",{class:"token punctuation"},"}"),n(`



`),s("span",{class:"token function-name function"},"hello_start"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},"{"),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},`"
#########################################################################
#	Author/Wechat			: xidoublestar                                      #                          
#	Version           : 0.2                                               #
#	Function          : Oracle 11g/19c/21c(Single) install on Linux 7     #
#########################################################################
NOTE: we can use this tool to install Oracle DataBase 11G/19C/21C onekey
1) create software location: mkdir -p /soft
2) when install 11G: upload two file to /soft directory: 
	/soft/p13390677_112040_Linux-x86-64_1of7.zip
	/soft/p13390677_112040_Linux-x86-64_2of7.zip
3) when install 19C: upload db file to /soft driectory: 
  /soft/LINUX.X64_193000_db_home.zip.zip
4) when install 21C: upload db file to /soft directory:
	/soft/LINUX.X64_213000_db_home.zip
5) the hostname is "`),n("localhost"),s("span",{class:"token string"},`" is invalid,pls check
************* if you need any support,contact my wechat: xidoublestar **************"`),n(`

`),s("span",{class:"token assign-left variable"},"ora_version"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'""'),n(`
`),s("span",{class:"token assign-left variable"},"ora_number"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"11.2.0"'),n(`
`),s("span",{class:"token keyword"},"while"),n(),s("span",{class:"token boolean"},"true"),n(`
`),s("span",{class:"token keyword"},"do"),n(`
	`),s("span",{class:"token keyword"},"if"),n(),s("span",{class:"token punctuation"},"["),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$ora_version"),n('"')]),n(),s("span",{class:"token operator"},"!="),n(),s("span",{class:"token string"},'"11G"'),n(),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$ora_version"),n('"')]),n(),s("span",{class:"token operator"},"!="),n(),s("span",{class:"token string"},'"19C"'),n(),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$ora_version"),n('"')]),n(),s("span",{class:"token operator"},"!="),n(),s("span",{class:"token string"},'"21C"'),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),s("span",{class:"token keyword"},"then"),n(`
		`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},`"
		Oracle version list:
		1) 11G
		2) 19C
		3) 21C"`),n(`
		`),s("span",{class:"token builtin class-name"},"read"),n(),s("span",{class:"token parameter variable"},"-p"),n(),s("span",{class:"token string"},'"pls,input Oracle version to install: "'),n(` ora_version	
	`),s("span",{class:"token keyword"},"else"),n(`
		`),s("span",{class:"token builtin class-name"},"break"),n(`
	`),s("span",{class:"token keyword"},"fi"),n(`

	`),s("span",{class:"token keyword"},"if"),n(),s("span",{class:"token punctuation"},"["),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$ora_version"),n('"')]),n(),s("span",{class:"token operator"},"=="),n(),s("span",{class:"token string"},'"19C"'),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),s("span",{class:"token keyword"},"then"),n(`
		`),s("span",{class:"token assign-left variable"},"ora_number"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"19.3.0"'),n(`
	`),s("span",{class:"token keyword"},"elif"),n(),s("span",{class:"token punctuation"},"["),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$ora_version"),n('"')]),n(),s("span",{class:"token operator"},"=="),n(),s("span",{class:"token string"},'"21C"'),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),s("span",{class:"token keyword"},"then"),n(`
		`),s("span",{class:"token assign-left variable"},"ora_number"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"21.3.0"'),n(`
	`),s("span",{class:"token keyword"},"fi"),n(`
	
`),s("span",{class:"token keyword"},"done"),n(`

`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token function-name function"},"hello_end"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},"{"),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n(`"
************** complete install Oracle db `),s("span",{class:"token variable"},"$ora_number"),n(` on Linux 7.x *********************
************** if you need any support,contact my wechat: xidoublestar *************"`)]),n(`	
`),s("span",{class:"token punctuation"},"}"),n(`

hello_start
step1_check_os
step2_set_dbname_and_charset
step3_set_os
`),s("span",{class:"token keyword"},"if"),n(),s("span",{class:"token punctuation"},"["),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$ora_version"),n('"')]),n(),s("span",{class:"token operator"},"=="),n(),s("span",{class:"token string"},'"11G"'),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),s("span",{class:"token keyword"},"then"),n(`
	step4_create_response_file_11g
	step5_install_db_11g
	step6_config_listener_11g
	step7_create_inst_11g
`),s("span",{class:"token keyword"},"elif"),n(),s("span",{class:"token punctuation"},"["),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$ora_version"),n('"')]),n(),s("span",{class:"token operator"},"=="),n(),s("span",{class:"token string"},'"19C"'),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),s("span",{class:"token keyword"},"then"),n(`
	step4_create_response_file_19c
	step5_install_db_19c
	step6_config_listener_19c
	step7_create_inst_19c
`),s("span",{class:"token keyword"},"elif"),n(),s("span",{class:"token punctuation"},"["),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$ora_version"),n('"')]),n(),s("span",{class:"token operator"},"=="),n(),s("span",{class:"token string"},'"21C"'),n(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},";"),s("span",{class:"token keyword"},"then"),n(`
	step4_create_response_file_19c
	step5_install_db_19c
	step6_config_listener_19c
	step7_create_inst_19c
`),s("span",{class:"token keyword"},"fi"),n(`
step8_check_db
hello_end
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),_=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token shebang important"},"#!/bin/bash"),n(`
`),s("span",{class:"token comment"},"############ Author begin ###############"),n(`
`),s("span",{class:"token comment"},"## Author: Ableit"),n(`
`),s("span",{class:"token comment"},"## Date: 2022-07-20"),n(`
`),s("span",{class:"token comment"},"############ Author end ###############"),n(`

`),s("span",{class:"token comment"},"############ Env & Virables begin ###############"),n(`
`),s("span",{class:"token comment"},"# custom settings"),n(`
`),s("span",{class:"token assign-left variable"},"DBA_HOME"),s("span",{class:"token operator"},"="),n(`/opt/database/dba
`),s("span",{class:"token assign-left variable"},"SOFTWARE_DIR"),s("span",{class:"token operator"},"="),n(`/opt/package

`),s("span",{class:"token assign-left variable"},[s("span",{class:"token environment constant"},"HOSTNAME")]),s("span",{class:"token operator"},"="),n(`testdb-node01
`),s("span",{class:"token assign-left variable"},"IPADDR"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"`"),s("span",{class:"token function"},"ip"),n(),s("span",{class:"token parameter variable"},"-4"),n(" addr show dev eth0 "),s("span",{class:"token operator"},"|"),n(),s("span",{class:"token function"},"grep"),n(),s("span",{class:"token parameter variable"},"-oP"),n(),s("span",{class:"token string"},"'(?<=inet\\s)\\d+(\\.\\d+){3}'"),s("span",{class:"token variable"},"`")]),n(`
`),s("span",{class:"token assign-left variable"},"OS_ORACLE_PASSWORD"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"YsDB_GreatMen2022"'),n(`

`),s("span",{class:"token assign-left variable"},"ORACLE_UNQNAME"),s("span",{class:"token operator"},"="),n(`testdb
`),s("span",{class:"token assign-left variable"},"ORACLE_SID"),s("span",{class:"token operator"},"="),n(`testdb
`),s("span",{class:"token assign-left variable"},"ORACLE_CHARSET"),s("span",{class:"token operator"},"="),n(`AL32UTF8
`),s("span",{class:"token assign-left variable"},"ORACLE_SYS_PASSWORD"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"YsDB_GreatMen2022"'),n(`
`),s("span",{class:"token assign-left variable"},"ORACLE_SYSTEM_PASSWORD"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"YsDB_GreatMen2022"'),n(`

`),s("span",{class:"token assign-left variable"},"ORACLE_BASE_APP_DIR"),s("span",{class:"token operator"},"="),n(`/u01
`),s("span",{class:"token assign-left variable"},"ORACLE_BASE_DATA_DIR"),s("span",{class:"token operator"},"="),n(`/data
`),s("span",{class:"token assign-left variable"},"ORACLE_DATABASE_VERSION"),s("span",{class:"token operator"},"="),s("span",{class:"token number"},"11.2"),n(`.0.4
`),s("span",{class:"token comment"},"# 64G"),n(`
`),s("span",{class:"token assign-left variable"},"ORACLE_RECOVERY_AREA_SIZE"),s("span",{class:"token operator"},"="),n("$"),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token number"},"64"),n("*1024 "),s("span",{class:"token punctuation"},"]"),n(`
`),s("span",{class:"token assign-left variable"},"ORACLE_ARCHIVE"),s("span",{class:"token operator"},"="),n(`true

`),s("span",{class:"token comment"},"# Oracle auto Settings"),n(`
`),s("span",{class:"token assign-left variable"},"TMP"),s("span",{class:"token operator"},"="),n(`/tmp
`),s("span",{class:"token assign-left variable"},"ORACLE_HOSTNAME"),s("span",{class:"token operator"},"="),s("span",{class:"token environment constant"},"$HOSTNAME"),n(`
`),s("span",{class:"token assign-left variable"},"ORACLE_BASE"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$ORACLE_BASE_APP_DIR"),n(`/app/oracle
`),s("span",{class:"token assign-left variable"},"ORACLE_HOME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$ORACLE_BASE"),n("/product/"),s("span",{class:"token variable"},"$ORACLE_DATABASE_VERSION"),n(`/db_1
`),s("span",{class:"token assign-left variable"},"ORACLE_DATA_DIR"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$ORACLE_BASE_DATA_DIR"),n(`/app/oracle/oradata
`),s("span",{class:"token assign-left variable"},"ORACLE_ORA_INVENTORY"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$ORACLE_BASE_APP_DIR"),n(`/app/oraInventory
`),s("span",{class:"token assign-left variable"},"ORACLE_RECOVERY_AREA_DIR"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$ORACLE_BASE_DATA_DIR"),n(`/app/oracle/fast_recovery_area

`),s("span",{class:"token comment"},"# os auto settings"),n(`
`),s("span",{class:"token assign-left variable"},"OS_MEMORY"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"`"),s("span",{class:"token function"},"free"),n(" -b"),s("span",{class:"token operator"},"|"),s("span",{class:"token function"},"grep"),n(" Mem:"),s("span",{class:"token operator"},"|"),s("span",{class:"token function"},"awk"),n(" -F"),s("span",{class:"token string"},"' '"),n(),s("span",{class:"token string"},"'{print $2}'"),s("span",{class:"token variable"},"`")]),n(`
`),s("span",{class:"token assign-left variable"},"OS_SHMMAX"),s("span",{class:"token operator"},"="),n("$"),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},"$OS_MEMORY"),n(" * "),s("span",{class:"token number"},"2"),n(" / "),s("span",{class:"token number"},"3"),n(),s("span",{class:"token punctuation"},"]"),n(`
`),s("span",{class:"token assign-left variable"},"OS_SHMALL"),s("span",{class:"token operator"},"="),n("$"),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},"$OS_SHMMAX"),n(" / "),s("span",{class:"token number"},"1024"),n(),s("span",{class:"token punctuation"},"]"),n(`
`),s("span",{class:"token assign-left variable"},"ORACLE_TOTAL_MEMORY"),s("span",{class:"token operator"},"="),n("$"),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},"$OS_SHMMAX"),n(" / "),s("span",{class:"token number"},"1024"),n(" / "),s("span",{class:"token number"},"1024"),n(),s("span",{class:"token punctuation"},"]"),n(`
`),s("span",{class:"token function"},"hostname"),n(),s("span",{class:"token environment constant"},"$HOSTNAME"),n(`
`),s("span",{class:"token assign-left variable"},"OS_VERSION_ID"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"`"),s("span",{class:"token function"},"cat"),n(" /etc/os-release "),s("span",{class:"token operator"},"|"),s("span",{class:"token function"},"grep"),n(),s("span",{class:"token string"},"'^VERSION_ID='"),s("span",{class:"token operator"},"|"),s("span",{class:"token function"},"awk"),n(" -F"),s("span",{class:"token string"},"'='"),n(),s("span",{class:"token string"},"'{print $2}'"),s("span",{class:"token variable"},"`")]),n(`
`),s("span",{class:"token comment"},"############ Env & Virables end ###############"),n(`


`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"DownloadPackages"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Downloading package ..."'),n(`
    `),s("span",{class:"token function"},"mkdir"),n(),s("span",{class:"token parameter variable"},"-p"),n(),s("span",{class:"token variable"},"$SOFTWARE_DIR"),n(`
    yum `),s("span",{class:"token function"},"install"),n(),s("span",{class:"token parameter variable"},"-y"),n(),s("span",{class:"token function"},"wget"),n(`
    `),s("span",{class:"token function"},"wget"),n(),s("span",{class:"token parameter variable"},"-O"),n(),s("span",{class:"token variable"},"$SOFTWARE_DIR"),n(`/p13390677_112040_Linux-x86-64_1of7.zip ftp://10.10.12.158/pub/oracle/p13390677_112040_Linux-x86-64_1of7.zip
    `),s("span",{class:"token function"},"wget"),n(),s("span",{class:"token parameter variable"},"-O"),n(),s("span",{class:"token variable"},"$SOFTWARE_DIR"),n(`/p13390677_112040_Linux-x86-64_2of7.zip ftp://10.10.12.158/pub/oracle/p13390677_112040_Linux-x86-64_2of7.zip
`),s("span",{class:"token punctuation"},"}"),n(`


`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"InstallDependency"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"0.Set Locale ..."'),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token assign-left variable"},[s("span",{class:"token environment constant"},"LANG")]),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"en_US.UTF-8"'),n(),s("span",{class:"token operator"},">"),n(` /etc/locale.conf
localectl set-locale `),s("span",{class:"token assign-left variable"},[s("span",{class:"token environment constant"},"LANG")]),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"en_US.UTF-8"'),n(`
`),s("span",{class:"token builtin class-name"},"export"),n(),s("span",{class:"token assign-left variable"},[s("span",{class:"token environment constant"},"LANG")]),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"en_US.UTF-8"'),n(`

`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"1.Disable selinux and stop firewalld ..."'),n(`
`),s("span",{class:"token function"},"cp"),n(` /etc/selinux/config /etc/selinux/config.orabak
`),s("span",{class:"token function"},"sed"),n(),s("span",{class:"token parameter variable"},"-i"),n(),s("span",{class:"token string"},"'s/^SELINUX=enforcing/SELINUX=disabled/g'"),n(` /etc/selinux/config 
setenforce `),s("span",{class:"token number"},"0"),n(`
systemctl stop firewalld
systemctl disable firewalld
`),s("span",{class:"token function"},"sleep"),n(),s("span",{class:"token number"},"1"),n(`

`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"2.Config hostname ..."'),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token environment constant"},"$HOSTNAME"),n(),s("span",{class:"token operator"},">"),n(` /etc/hostname
`),s("span",{class:"token function"},"sleep"),n(),s("span",{class:"token number"},"1"),n(`

`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"3.Config hosts ..."'),n(`
`),s("span",{class:"token function"},"cp"),n(` /etc/hosts /etc/hosts.orabak
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token variable"},"$IPADDR"),s("span",{class:"token string"},"'   '"),s("span",{class:"token environment constant"},"$HOSTNAME"),n(),s("span",{class:"token operator"},">>"),n(` /etc/hosts
`),s("span",{class:"token function"},"sleep"),n(),s("span",{class:"token number"},"1"),n(`

`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"4.Config sysctl.conf ... "'),n(`
`),s("span",{class:"token function"},"cp"),n(` /etc/sysctl.conf /etc/sysctl.conf.orabak
`),s("span",{class:"token function"},"cat"),n(),s("span",{class:"token operator"},">>"),n(" /etc/sysctl.conf "),s("span",{class:"token operator"},"<<"),n(),s("span",{class:"token string"},[n(`EOF
fs.file-max = 6815744
kernel.sem = 250 32000 100 128
kernel.shmmni = 4096
kernel.shmall = `),s("span",{class:"token variable"},"$OS_SHMALL"),n(` 
kernel.shmmax = `),s("span",{class:"token variable"},"$OS_SHMMAX"),n(`
kernel.panic_on_oops = 1
net.core.rmem_default = 262144
net.core.rmem_max = 4194304
net.core.wmem_default = 262144
net.core.wmem_max = 1048576
net.ipv4.conf.all.rp_filter = 2
net.ipv4.conf.default.rp_filter = 2
fs.aio-max-nr = 1048576
net.ipv4.ip_local_port_range = 9000 65500
EOF`)]),n(`
`),s("span",{class:"token function"},"sysctl"),n(),s("span",{class:"token parameter variable"},"-p"),n(`
`),s("span",{class:"token function"},"sleep"),n(),s("span",{class:"token number"},"1"),n(`

`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"5.Set Resource Usage Limit ..."'),n(`
`),s("span",{class:"token function"},"cp"),n(` /etc/security/limits.conf /etc/security/limits.conf.orabak
`),s("span",{class:"token function"},"cat"),n(),s("span",{class:"token operator"},">>"),n(" /etc/security/limits.conf "),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},`EOF
oracle   soft   nofile    1024
oracle   hard   nofile    65536
oracle   soft   nproc    16384
oracle   hard   nproc    16384
oracle   soft   stack    10240
oracle   hard   stack    32768
oracle   hard   memlock    134217728
oracle   soft   memlock    134217728
EOF`),n(`

`),s("span",{class:"token function"},"cp"),n(` /etc/pam.d/login /etc/pam.d/login.orabak
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"session   required    pam_limits.so"'),n(),s("span",{class:"token operator"},">>"),n(` /etc/pam.d/login
`),s("span",{class:"token function"},"sleep"),n(),s("span",{class:"token number"},"1"),n(`

`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"6.Install Dependency Packages ..."'),n(`
yum `),s("span",{class:"token function"},"install"),n(),s("span",{class:"token parameter variable"},"-y"),n(" binutils compat-libcap1-1.10-3.el7.x86_64 compat-libstdc++-33 compat-libstdc++-33.i686 elfutils-libelf-devel "),s("span",{class:"token punctuation"},"\\"),n(`
gcc gcc-c++ glibc-2.17-36.el7.i686  glibc-2.17-36.el7.x86_64 glibc-devel glibc-devel.i686 glibc.i686 ksh libaio libaio-devel `),s("span",{class:"token punctuation"},"\\"),n(`
libaio-devel.i686 libaio.i686 libcap libgcc libgcc.i686 libstdc++ libstdc++-devel libstdc++-devel.i686 libstdc++.i686 libX11 `),s("span",{class:"token punctuation"},"\\"),n(`
libX11.i686 libXau libXau.i686 libxcb libxcb.i686 libXext libXext.i686 libXi libXi.i686 libXtst libXtst.i686 `),s("span",{class:"token function"},"make"),n(" sysstat "),s("span",{class:"token punctuation"},"\\"),n(`
unixODBC unixODBC-devel zlib-devel `),s("span",{class:"token function"},"unzip"),n(`
`),s("span",{class:"token function"},"sleep"),n(),s("span",{class:"token number"},"1"),n(`

`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"7.Add Oracle Group and User ..."'),n(`
`),s("span",{class:"token function"},"groupadd"),n(),s("span",{class:"token parameter variable"},"-g"),n(),s("span",{class:"token number"},"54321"),n(` oinstall
`),s("span",{class:"token function"},"groupadd"),n(),s("span",{class:"token parameter variable"},"-g"),n(),s("span",{class:"token number"},"54322"),n(` dba
`),s("span",{class:"token function"},"groupadd"),n(),s("span",{class:"token parameter variable"},"-g"),n(),s("span",{class:"token number"},"54323"),n(` oper
`),s("span",{class:"token function"},"useradd"),n(),s("span",{class:"token parameter variable"},"-u"),n(),s("span",{class:"token number"},"54321"),n(),s("span",{class:"token parameter variable"},"-g"),n(" oinstall "),s("span",{class:"token parameter variable"},"-G"),n(` dba,oper oracle
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token variable"},"$OS_ORACLE_PASSWORD"),n(),s("span",{class:"token operator"},"|"),n(),s("span",{class:"token function"},"passwd"),n(),s("span",{class:"token parameter variable"},"--stdin"),n(` oracle
`),s("span",{class:"token function"},"sleep"),n(),s("span",{class:"token number"},"1"),n(`

`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"8.Create Directory ..."'),n(`
`),s("span",{class:"token function"},"mkdir"),n(),s("span",{class:"token parameter variable"},"-p"),n(),s("span",{class:"token variable"},"$ORACLE_HOME"),n(),s("span",{class:"token variable"},"$ORACLE_DATA_DIR"),n(),s("span",{class:"token variable"},"$ORACLE_ORA_INVENTORY"),n(),s("span",{class:"token variable"},"$ORACLE_RECOVERY_AREA_DIR"),n(`
`),s("span",{class:"token function"},"chown"),n(),s("span",{class:"token parameter variable"},"-R"),n(" oracle:oinstall "),s("span",{class:"token variable"},"$ORACLE_BASE_APP_DIR"),n(),s("span",{class:"token variable"},"$ORACLE_BASE_DATA_DIR"),n(),s("span",{class:"token variable"},"$ORACLE_RECOVERY_AREA_DIR"),n(`
`),s("span",{class:"token function"},"chmod"),n(),s("span",{class:"token parameter variable"},"-R"),n(),s("span",{class:"token number"},"775"),n(),s("span",{class:"token variable"},"$ORACLE_BASE_APP_DIR"),n(),s("span",{class:"token variable"},"$ORACLE_BASE_DATA_DIR"),n(),s("span",{class:"token variable"},"$ORACLE_RECOVERY_AREA_DIR"),n(`
`),s("span",{class:"token function"},"sleep"),n(),s("span",{class:"token number"},"1"),n(`

`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"9.Set Env ..."'),n(`
`),s("span",{class:"token function"},"cp"),n(` /home/oracle/.bash_profile /home/oracle/.bash_profile.orabak
`),s("span",{class:"token function"},"cat"),n(),s("span",{class:"token operator"},">>"),n(" /home/oracle/.bash_profile "),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOF
# Oracle ENV
export TMP=`),s("span",{class:"token variable"},"$TMP"),n(`
export TMPDIR=`),s("span",{class:"token variable"},"$TMP"),n(`

export ORACLE_HOSTNAME=`),s("span",{class:"token variable"},"$ORACLE_HOSTNAME"),n(`
export ORACLE_UNQNAME=`),s("span",{class:"token variable"},"$ORACLE_UNQNAME"),n(`
export ORACLE_SID=`),s("span",{class:"token variable"},"$ORACLE_SID"),n(`
export ORACLE_BASE=`),s("span",{class:"token variable"},"$ORACLE_BASE"),n(`
export ORACLE_HOME=`),s("span",{class:"token variable"},"$ORACLE_HOME"),n(`
export ORA_INVENTORY=`),s("span",{class:"token variable"},"$ORACLE_ORA_INVENTORY"),n(`
export DATA_DIR=`),s("span",{class:"token variable"},"$ORACLE_DATA_DIR"),n(`
export ORACLE_HOME_LISTNER=\\`),s("span",{class:"token variable"},"$ORACLE_HOME"),n(`

export LD_LIBRARY_PATH=\\`),s("span",{class:"token variable"},"$ORACLE_HOME"),n(`/lib:/lib:/usr/lib
export CLASSPATH=\\`),s("span",{class:"token variable"},"$ORACLE_HOME"),n("/jlib:\\"),s("span",{class:"token variable"},"$ORACLE_HOME"),n(`/rdbms/jlib

export PATH=\\`),s("span",{class:"token variable"},"$ORACLE_HOME"),n("/bin:\\"),s("span",{class:"token environment constant"},"$PATH"),n(`
EOF`)]),n(`
`),s("span",{class:"token function"},"sleep"),n(),s("span",{class:"token number"},"1"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"InstallSoftware"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"10.unzip oracle database package ..."'),n(`
`),s("span",{class:"token function"},"chown"),n(" oracle:oinstall "),s("span",{class:"token parameter variable"},"-R"),n(` /opt/package
`),s("span",{class:"token function"},"su"),n(" - oracle "),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOF
cd `),s("span",{class:"token variable"},"${SOFTWARE_DIR}"),n(`
unzip -oq p13390677_112040_Linux-x86-64_1of7.zip
unzip -oq p13390677_112040_Linux-x86-64_2of7.zip
cd `),s("span",{class:"token variable"},"${SOFTWARE_DIR}"),n(`/database

echo "11.install database software ..."
./runInstaller -ignorePrereq -waitforcompletion -silent                        \\
    -responseFile `),s("span",{class:"token variable"},"${SOFTWARE_DIR}"),n(`/database/response/db_install.rsp               \\
    oracle.install.option=INSTALL_DB_SWONLY                                    \\
    ORACLE_HOSTNAME=`),s("span",{class:"token variable"},"${ORACLE_HOSTNAME}"),n(`                                         \\
    UNIX_GROUP_NAME=oinstall                                                   \\
    INVENTORY_LOCATION=`),s("span",{class:"token variable"},"${ORACLE_ORA_INVENTORY}"),n(`                                        \\
    SELECTED_LANGUAGES=en                                                      \\
    ORACLE_HOME=`),s("span",{class:"token variable"},"${ORACLE_HOME}"),n(`                                                 \\
    ORACLE_BASE=`),s("span",{class:"token variable"},"${ORACLE_BASE}"),n(`                                                 \\
    oracle.install.db.InstallEdition=EE                                        \\
    oracle.install.db.DBA_GROUP=dba                                          \\
    oracle.install.db.OPER_GROUP=oper                                          \\
    oracle.install.db.OSBACKUPDBA_GROUP=dba                                    \\
    oracle.install.db.OSDGDBA_GROUP=dba                                        \\
    oracle.install.db.OSKMDBA_GROUP=dba                                        \\
    oracle.install.db.OSRACDBA_GROUP=dba                                       \\
    SECURITY_UPDATES_VIA_MYORACLESUPPORT=false                                 \\
    DECLINE_SECURITY_UPDATES=true                                              \\
    oracle.installer.autoupdates.option=SKIP_UPDATES
EOF`)]),n(`
`),s("span",{class:"token comment"},"# "),n(`
`),s("span",{class:"token comment"},"# cp $ORACLE_HOME/sysman/lib/ins_emagent.mk $ORACLE_HOME/sysman/lib/ins_emagent.mk.orabak"),n(`
`),s("span",{class:"token comment"},"# sed -i 's#$(MK_EMAGENT_NMECTL)#$(MK_EMAGENT_NMECTL) -lnnz11#g' $ORACLE_HOME/sysman/lib/ins_emagent.mk"),n(`

`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n(`"Run '`),s("span",{class:"token variable"},"${ORACLE_ORA_INVENTORY}"),n(`/orainstRoot.sh' as root ..."`)]),n(`
`),s("span",{class:"token variable"},"${ORACLE_ORA_INVENTORY}"),n(`/orainstRoot.sh
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n(`"Run '`),s("span",{class:"token variable"},"${ORACLE_HOME}"),n(`/root.sh' as root ..."`)]),n(`
`),s("span",{class:"token variable"},"${ORACLE_HOME}"),n(`/root.sh

`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"CreateNetca"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"12.Create Netca ..."'),n(`
`),s("span",{class:"token function"},"su"),n(" - oracle "),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOF
echo "12.Create the listener ..."
netca -silent -responsefile `),s("span",{class:"token variable"},"${ORACLE_HOME}"),n(`/assistants/netca/netca.rsp
echo "12.Start the listener ..."
lsnrctl start
EOF`)]),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"CreateDatabase"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"13.Create Database ..."'),n(`
`),s("span",{class:"token function"},"su"),n(" - oracle "),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOF
dbca -silent -createDatabase                                                   \\
     -templateName General_Purpose.dbc                                         \\
     -gdbName `),s("span",{class:"token variable"},"${ORACLE_SID}"),n(" -sid  "),s("span",{class:"token variable"},"${ORACLE_SID}"),n(` -responseFile NO_VALUE         \\
     -characterSet `),s("span",{class:"token variable"},"$ORACLE_CHARSET"),n(`                                             \\
     -sysPassword `),s("span",{class:"token variable"},"$ORACLE_SYS_PASSWORD"),n(`                                                     \\
     -systemPassword `),s("span",{class:"token variable"},"$ORACLE_SYSTEM_PASSWORD"),n(`                                               \\
     -databaseType MULTIPURPOSE                                                \\
     -memoryPercentage 66                                                      \\
     -totalMemory `),s("span",{class:"token variable"},"${ORACLE_TOTAL_MEMORY}"),n(`                                        \\
     -storageType FS                                                           \\
     -datafileDestination "`),s("span",{class:"token variable"},"${ORACLE_DATA_DIR}"),n(`"                                        \\
     -enableArchive  `),s("span",{class:"token variable"},"${ORACLE_ARCHIVE}"),n(`                                                 \\
     -recoveryAreaSize  `),s("span",{class:"token variable"},"${ORACLE_RECOVERY_AREA_SIZE}"),n(`                           \\
     -recoveryAreaDestination  "`),s("span",{class:"token variable"},"${ORACLE_RECOVERY_AREA_DIR}"),n(`"                   \\
     -redoLogFileSize 50                                                       \\
     -emConfiguration NONE                                                     
echo "Successfully Insall Oracle `),s("span",{class:"token variable"},"$ORACLE_DATABASE_VERSION"),n(` !"
EOF`)]),n(`
`),s("span",{class:"token punctuation"},"}"),n(`


`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"EnableStartup"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Edit /etc/oratab ..."'),n(`
`),s("span",{class:"token function"},"cp"),n(` /etc/oratab /etc/oratab.orabak
`),s("span",{class:"token function"},"sed"),n(),s("span",{class:"token parameter variable"},"-i"),n(),s("span",{class:"token string"},[n('"s#'),s("span",{class:"token variable"},"${ORACLE_SID}"),n(":"),s("span",{class:"token variable"},"${ORACLE_HOME}"),n(":N#"),s("span",{class:"token variable"},"${ORACLE_SID}"),n(":"),s("span",{class:"token variable"},"${ORACLE_HOME}"),n(':Y#g"')]),n(` /etc/oratab

`),s("span",{class:"token function"},"mkdir"),n(),s("span",{class:"token parameter variable"},"-p"),n(),s("span",{class:"token variable"},"${DBA_HOME}"),n(`/scripts
`),s("span",{class:"token function"},"chown"),n(" oracle:root "),s("span",{class:"token parameter variable"},"-R"),n(),s("span",{class:"token variable"},"${DBA_HOME}"),n(`

`),s("span",{class:"token function"},"su"),n(" - oracle "),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOF
touch `),s("span",{class:"token variable"},"${DBA_HOME}"),n(`/scripts/startup_db.sh
chmod a+x `),s("span",{class:"token variable"},"${DBA_HOME}"),n(`/scripts/startup_db.sh

cat > `),s("span",{class:"token variable"},"${DBA_HOME}"),n(`/scripts/startup_db.sh <<"EOFINNER"
#! /bin/sh
# description: Oracle auto start-stop script.
#
# Set ORA_HOME to be equivalent to the \\`),s("span",{class:"token variable"},"$ORACLE_HOME"),n(`
# from which you wish to execute dbstart and dbshut;
#
# Set ORA_OWNER to the user id of the owner of the
# Oracle database in ORACLE_HOME.

ORA_HOME=`),s("span",{class:"token variable"},"$ORACLE_HOME"),n(`
ORA_OWNER=oracle
CURRENT_USER=\\`),s("span",{class:"token variable"},[s("span",{class:"token variable"},"`"),n("whoami"),s("span",{class:"token punctuation"},"\\"),s("span",{class:"token variable"},"`")]),n(`

case "\\`),s("span",{class:"token variable"},"$1"),n(`" in
'start') 
    # Start the Oracle databases:
    # The following command assumes that the oracle login
    # will not prompt the user for any values
    # Remove "&" if you don't want startup as a background process.
    if [ "\\`),s("span",{class:"token variable"},"$ORA_OWNER"),n('" = "\\'),s("span",{class:"token variable"},"$CURRENT_USER"),n(`" ]; then
    #\\`),s("span",{class:"token variable"},"$ORA_HOME"),n(`/bin/lsnrctl start &
    \\`),s("span",{class:"token variable"},"$ORA_HOME"),n("/bin/dbstart \\"),s("span",{class:"token variable"},"$ORA_HOME"),n(`
    else
    #su - \\`),s("span",{class:"token variable"},"$ORA_OWNER"),n(' -c "\\'),s("span",{class:"token variable"},"$ORA_HOME"),n(`/bin/lsnrctl start" &
    su - \\`),s("span",{class:"token variable"},"$ORA_OWNER"),n(' -c "\\'),s("span",{class:"token variable"},"$ORA_HOME"),n("/bin/dbstart \\"),s("span",{class:"token variable"},"$ORA_HOME"),n(`" 
    fi
    touch /var/lock/subsys/dbora
    break
    ;;

'stop')
    # Stop the Oracle databases:
    # The following command assumes that the oracle login
    # will not prompt the user for any values
    if [ "\\`),s("span",{class:"token variable"},"$ORA_OWNER"),n('" = "\\'),s("span",{class:"token variable"},"$CURRENT_USER"),n(`" ]; then
    \\`),s("span",{class:"token variable"},"$ORA_HOME"),n("/bin/dbshut \\"),s("span",{class:"token variable"},"$ORA_HOME"),n(`
    #\\`),s("span",{class:"token variable"},"$ORA_HOME"),n(`/bin/lsnrctl stop &
    else
    su - \\`),s("span",{class:"token variable"},"$ORA_OWNER"),n(' -c "\\'),s("span",{class:"token variable"},"$ORA_HOME"),n("/bin/dbshut \\"),s("span",{class:"token variable"},"$ORA_HOME"),n(`" 
    #su - \\`),s("span",{class:"token variable"},"$ORA_OWNER"),n(' -c "\\'),s("span",{class:"token variable"},"$ORA_HOME"),n(`/bin/lsnrctl stop" &
    fi
    rm -f /var/lock/subsys/dbora
    break
    ;;
   *)
    echo "usage: \\`),s("span",{class:"token variable"},"$0"),n(` {start|stop}"
    exit
    ;;
esac
EOF`)]),n(`INNER
EOF

`),s("span",{class:"token function"},"cat"),n(),s("span",{class:"token operator"},">"),n(" /lib/systemd/system/dbora.service "),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOF
[Unit]
Description=The Oracle Database Service
After=syslog.target network.target

[Service]
# systemd ignores PAM limits, so set any necessary limits in the service.
# Not really a bug, but a feature.
# https://bugzilla.redhat.com/show_bug.cgi?id=754285
LimitMEMLOCK=infinity
LimitNOFILE=65535

#Type=simple
# idle: similar to simple, the actual execution of the service binary is delayed
#       until all jobs are finished, which avoids mixing the status output with shell output of services.
RemainAfterExit=yes
User=oracle
Group=oinstall
Restart=no
ExecStart=/bin/bash -c '`),s("span",{class:"token variable"},"${DBA_HOME}"),n(`/scripts/startup_db.sh start'
ExecStop=/bin/bash -c '`),s("span",{class:"token variable"},"${DBA_HOME}"),n(`/scripts/startup_db.sh stop'

[Install]
WantedBy=multi-user.target
EOF`)]),n(`

`),s("span",{class:"token comment"},"# autostart after os reboot"),n(`
systemctl `),s("span",{class:"token builtin class-name"},"enable"),n(` dbora.service
`),s("span",{class:"token comment"},"# add allow port to firewalld"),n(`
firewall-cmd --add-port`),s("span",{class:"token operator"},"="),s("span",{class:"token number"},"1521"),n(),s("span",{class:"token parameter variable"},"--zone"),s("span",{class:"token operator"},"="),n("public "),s("span",{class:"token parameter variable"},"--permanent"),n(`
firewall-cmd `),s("span",{class:"token parameter variable"},"--reload"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"Usage"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
`),s("span",{class:"token function"},"cat"),n(),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOF
Usage: `),s("span",{class:"token variable"},"$0"),n(` -h|--helpUsage, help message.
       `),s("span",{class:"token variable"},"$0"),n(` -d|--installDependency, install oracle dependency.
       `),s("span",{class:"token variable"},"$0"),n(` -a|--installAll, install dependency,database software,create netca,create database.     
       `),s("span",{class:"token variable"},"$0"),n(` -s|--installSoftware, install database software. 
       `),s("span",{class:"token variable"},"$0"),n(` -c|--createDatabase, create database.
       `),s("span",{class:"token variable"},"$0"),n(` -e|--enable, enable database auto startup after system boot/reboot.
       `),s("span",{class:"token variable"},"$0"),n(` -p|--package, download database package.
EOF`)]),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token assign-left variable"},"ARGS"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"`"),n("getopt "),s("span",{class:"token parameter variable"},"-o"),n(" hdasncep "),s("span",{class:"token parameter variable"},"--long"),n(" help,installDependency,installAll,installSoftware,createNetca,createDatabase,enable,package "),s("span",{class:"token parameter variable"},"-n"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$0"),n('"')]),n("  -- "),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$@"),n('"')]),s("span",{class:"token variable"},"`")]),n(`
`),s("span",{class:"token builtin class-name"},"eval"),n(),s("span",{class:"token builtin class-name"},"set"),n(" --  "),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$ARGS"),n('"')]),n(`
`),s("span",{class:"token keyword"},"while"),n(),s("span",{class:"token boolean"},"true"),n(`
`),s("span",{class:"token keyword"},"do"),n(`
`),s("span",{class:"token keyword"},"case"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$1"),n('"')]),n(),s("span",{class:"token keyword"},"in"),n(`
    -h`),s("span",{class:"token operator"},"|"),n("--help"),s("span",{class:"token punctuation"},")"),n(`
    Usage
    `),s("span",{class:"token builtin class-name"},"shift"),n(),s("span",{class:"token number"},"2"),n(`
    `),s("span",{class:"token builtin class-name"},"break"),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    -d`),s("span",{class:"token operator"},"|"),n("--installDependency"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"InstallDependency ..."'),n(`
    `),s("span",{class:"token assign-left variable"},"STARTTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    InstallDependency
    `),s("span",{class:"token assign-left variable"},"ENDTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"Installation Elapsed: $[ '),s("span",{class:"token variable"},"$ENDTIME"),n(" - "),s("span",{class:"token variable"},"$STARTTIME"),n(' ] s"')]),n(`
    `),s("span",{class:"token builtin class-name"},"shift"),n(),s("span",{class:"token number"},"2"),n(`
    `),s("span",{class:"token builtin class-name"},"break"),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    -a`),s("span",{class:"token operator"},"|"),n("--installAll"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"InstallAll ..."'),n(`
    `),s("span",{class:"token assign-left variable"},"STARTTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    InstallDependency
    InstallSoftware
    CreateNetca
    CreateDatabase
    `),s("span",{class:"token assign-left variable"},"ENDTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"Installation Elapsed: $[ '),s("span",{class:"token variable"},"$ENDTIME"),n(" - "),s("span",{class:"token variable"},"$STARTTIME"),n(' ] s"')]),n(`
    `),s("span",{class:"token builtin class-name"},"shift"),n(),s("span",{class:"token number"},"2"),n(`
    `),s("span",{class:"token builtin class-name"},"break"),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    -s`),s("span",{class:"token operator"},"|"),n("--installSoftware"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"InstallSoftware ..."'),n(`
    `),s("span",{class:"token assign-left variable"},"STARTTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    InstallDependency
    InstallSoftware
    `),s("span",{class:"token assign-left variable"},"ENDTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"Installation Elapsed: $[ '),s("span",{class:"token variable"},"$ENDTIME"),n(" - "),s("span",{class:"token variable"},"$STARTTIME"),n(' ] s"')]),n(`
    `),s("span",{class:"token builtin class-name"},"shift"),n(),s("span",{class:"token number"},"2"),n(`
    `),s("span",{class:"token builtin class-name"},"break"),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    -n`),s("span",{class:"token operator"},"|"),n("--createNetca"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Create Netca ..."'),n(`
    `),s("span",{class:"token assign-left variable"},"STARTTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    CreateNetca
    `),s("span",{class:"token assign-left variable"},"ENDTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"Create Netca Elapsed: $[ '),s("span",{class:"token variable"},"$ENDTIME"),n(" - "),s("span",{class:"token variable"},"$STARTTIME"),n(' ] s"')]),n(`
    `),s("span",{class:"token builtin class-name"},"shift"),n(),s("span",{class:"token number"},"2"),n(`
    `),s("span",{class:"token builtin class-name"},"break"),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    -c`),s("span",{class:"token operator"},"|"),n("--createDatabase"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"CreateDatabase ..."'),n(`
    `),s("span",{class:"token assign-left variable"},"STARTTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    CreateDatabase
    `),s("span",{class:"token assign-left variable"},"ENDTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"Installation Elapsed: $[ '),s("span",{class:"token variable"},"$ENDTIME"),n(" - "),s("span",{class:"token variable"},"$STARTTIME"),n(' ] s"')]),n(`
    `),s("span",{class:"token builtin class-name"},"shift"),n(),s("span",{class:"token number"},"2"),n(`
    `),s("span",{class:"token builtin class-name"},"break"),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    -e`),s("span",{class:"token operator"},"|"),n("--enable"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"EnableStartup ..."'),n(`
    `),s("span",{class:"token assign-left variable"},"STARTTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    EnableStartup
    `),s("span",{class:"token assign-left variable"},"ENDTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"EnableStartup Elapsed: $[ '),s("span",{class:"token variable"},"$ENDTIME"),n(" - "),s("span",{class:"token variable"},"$STARTTIME"),n(' ] s"')]),n(`
    `),s("span",{class:"token builtin class-name"},"shift"),n(),s("span",{class:"token number"},"2"),n(`
    `),s("span",{class:"token builtin class-name"},"break"),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    -p`),s("span",{class:"token operator"},"|"),n("--package"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Downloading Package ..."'),n(`
    `),s("span",{class:"token assign-left variable"},"STARTTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    DownloadPackages
    `),s("span",{class:"token assign-left variable"},"ENDTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"Downloading Package Elapsed: $[ '),s("span",{class:"token variable"},"$ENDTIME"),n(" - "),s("span",{class:"token variable"},"$STARTTIME"),n(' ] s"')]),n(`
    `),s("span",{class:"token builtin class-name"},"shift"),n(),s("span",{class:"token number"},"2"),n(`
    `),s("span",{class:"token builtin class-name"},"break"),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    *`),s("span",{class:"token punctuation"},")"),n(`
    Usage
    `),s("span",{class:"token builtin class-name"},"exit"),n(),s("span",{class:"token number"},"1"),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token keyword"},"esac"),n(`
`),s("span",{class:"token keyword"},"done"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),A=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token shebang important"},"#!/bin/bash"),n(`
`),s("span",{class:"token comment"},"############ Author begin ###############"),n(`
`),s("span",{class:"token comment"},"## Author: Ableit"),n(`
`),s("span",{class:"token comment"},"## Date: 2022-07-20"),n(`
`),s("span",{class:"token comment"},"############ Author end ###############"),n(`

`),s("span",{class:"token comment"},"############ Env & Virables begin ###############"),n(`
`),s("span",{class:"token comment"},"# custom settings"),n(`
`),s("span",{class:"token assign-left variable"},"DBA_HOME"),s("span",{class:"token operator"},"="),n(`/opt/database/dba
`),s("span",{class:"token assign-left variable"},"SOFTWARE_DIR"),s("span",{class:"token operator"},"="),n(`/opt/package

`),s("span",{class:"token assign-left variable"},[s("span",{class:"token environment constant"},"HOSTNAME")]),s("span",{class:"token operator"},"="),n(`testdb-node01
`),s("span",{class:"token assign-left variable"},"IPADDR"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"`"),s("span",{class:"token function"},"ip"),n(),s("span",{class:"token parameter variable"},"-4"),n(" addr show dev eth0 "),s("span",{class:"token operator"},"|"),n(),s("span",{class:"token function"},"grep"),n(),s("span",{class:"token parameter variable"},"-oP"),n(),s("span",{class:"token string"},"'(?<=inet\\s)\\d+(\\.\\d+){3}'"),s("span",{class:"token variable"},"`")]),n(`
`),s("span",{class:"token assign-left variable"},"ORACLE_OS_PASSWORD"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"YsDB_GreatMen2022"'),n(`

`),s("span",{class:"token assign-left variable"},"ORACLE_UNQNAME"),s("span",{class:"token operator"},"="),n(`testdb
`),s("span",{class:"token assign-left variable"},"ORACLE_SID"),s("span",{class:"token operator"},"="),n(`testdb
`),s("span",{class:"token assign-left variable"},"ORACLE_PDB_NAME"),s("span",{class:"token operator"},"="),n(`testpdb
`),s("span",{class:"token assign-left variable"},"ORACLE_CHARSET"),s("span",{class:"token operator"},"="),n(`AL32UTF8
`),s("span",{class:"token assign-left variable"},"ORACLE_SYS_PASSWORD"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"YsDB_GreatMen2022"'),n(`
`),s("span",{class:"token assign-left variable"},"ORACLE_SYSTEM_PASSWORD"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"YsDB_GreatMen2022"'),n(`
`),s("span",{class:"token assign-left variable"},"ORACLE_PDB_ADMIN_PASSWORD"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"YsDB_GreatMen2022"'),n(`

`),s("span",{class:"token assign-left variable"},"ORACLE_BASE_APP_DIR"),s("span",{class:"token operator"},"="),n(`/u01
`),s("span",{class:"token assign-left variable"},"ORACLE_BASE_DATA_DIR"),s("span",{class:"token operator"},"="),n(`/data
`),s("span",{class:"token assign-left variable"},"ORACLE_DATABASE_VERSION"),s("span",{class:"token operator"},"="),s("span",{class:"token number"},"12.2"),n(`.0.1
`),s("span",{class:"token comment"},"# 64G"),n(`
`),s("span",{class:"token assign-left variable"},"ORACLE_RECOVERY_AREA_SIZE"),s("span",{class:"token operator"},"="),n("$"),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token number"},"64"),n("*1024 "),s("span",{class:"token punctuation"},"]"),n(`
`),s("span",{class:"token assign-left variable"},"ORACLE_ARCHIVE"),s("span",{class:"token operator"},"="),n(`true

`),s("span",{class:"token comment"},"# Oracle Auto Settings"),n(`
`),s("span",{class:"token assign-left variable"},"TMP"),s("span",{class:"token operator"},"="),n(`/tmp
`),s("span",{class:"token assign-left variable"},"ORACLE_HOSTNAME"),s("span",{class:"token operator"},"="),s("span",{class:"token environment constant"},"$HOSTNAME"),n(`
`),s("span",{class:"token assign-left variable"},"ORACLE_BASE"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$ORACLE_BASE_APP_DIR"),n(`/app/oracle
`),s("span",{class:"token assign-left variable"},"ORACLE_HOME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$ORACLE_BASE"),n("/product/"),s("span",{class:"token variable"},"$ORACLE_DATABASE_VERSION"),n(`/db_1
`),s("span",{class:"token assign-left variable"},"ORACLE_DATA_DIR"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$ORACLE_BASE_DATA_DIR"),n(`/app/oracle/oradata
`),s("span",{class:"token assign-left variable"},"ORACLE_ORA_INVENTORY"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$ORACLE_BASE_APP_DIR"),n(`/app/oraInventory
`),s("span",{class:"token assign-left variable"},"ORACLE_RECOVERY_AREA_DIR"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$ORACLE_BASE_DATA_DIR"),n(`/app/oracle/fast_recovery_area

`),s("span",{class:"token comment"},"# os auto settings"),n(`
`),s("span",{class:"token assign-left variable"},"OS_MEMORY"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"`"),s("span",{class:"token function"},"free"),n(" -b"),s("span",{class:"token operator"},"|"),s("span",{class:"token function"},"grep"),n(" Mem:"),s("span",{class:"token operator"},"|"),s("span",{class:"token function"},"awk"),n(" -F"),s("span",{class:"token string"},"' '"),n(),s("span",{class:"token string"},"'{print $2}'"),s("span",{class:"token variable"},"`")]),n(`
`),s("span",{class:"token assign-left variable"},"OS_SHMMAX"),s("span",{class:"token operator"},"="),n("$"),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},"$OS_MEMORY"),n(" * "),s("span",{class:"token number"},"2"),n(" / "),s("span",{class:"token number"},"3"),n(),s("span",{class:"token punctuation"},"]"),n(`
`),s("span",{class:"token assign-left variable"},"OS_SHMALL"),s("span",{class:"token operator"},"="),n("$"),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},"$OS_SHMMAX"),n(" / "),s("span",{class:"token number"},"1024"),n(),s("span",{class:"token punctuation"},"]"),n(`
`),s("span",{class:"token assign-left variable"},"ORACLE_TOTAL_MEMORY"),s("span",{class:"token operator"},"="),n("$"),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},"$OS_SHMMAX"),n(" / "),s("span",{class:"token number"},"1024"),n(" / "),s("span",{class:"token number"},"1024"),n(),s("span",{class:"token punctuation"},"]"),n(`
`),s("span",{class:"token function"},"hostname"),n(),s("span",{class:"token environment constant"},"$HOSTNAME"),n(`
`),s("span",{class:"token assign-left variable"},"OS_VERSION_ID"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"`"),s("span",{class:"token function"},"cat"),n(" /etc/os-release "),s("span",{class:"token operator"},"|"),s("span",{class:"token function"},"grep"),n(),s("span",{class:"token string"},"'^VERSION_ID='"),s("span",{class:"token operator"},"|"),s("span",{class:"token function"},"awk"),n(" -F"),s("span",{class:"token string"},"'='"),n(),s("span",{class:"token string"},"'{print $2}'"),s("span",{class:"token variable"},"`")]),n(`
`),s("span",{class:"token comment"},"############ Env & Virables end ###############"),n(`


`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"DownloadPackages"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Downloading package ..."'),n(`
    `),s("span",{class:"token function"},"mkdir"),n(),s("span",{class:"token parameter variable"},"-p"),n(),s("span",{class:"token variable"},"$SOFTWARE_DIR"),n(`
    yum `),s("span",{class:"token function"},"install"),n(),s("span",{class:"token parameter variable"},"-y"),n(),s("span",{class:"token function"},"wget"),n(`
    `),s("span",{class:"token function"},"wget"),n(),s("span",{class:"token parameter variable"},"-O"),n(),s("span",{class:"token variable"},"$SOFTWARE_DIR"),n(`/linuxx64_12201_database.zip ftp://10.10.12.158/pub/oracle/linuxx64_12201_database.zip
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"InstallDependency"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"0.Set Locale ..."'),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token assign-left variable"},[s("span",{class:"token environment constant"},"LANG")]),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"en_US.UTF-8"'),n(),s("span",{class:"token operator"},">"),n(` /etc/locale.conf
localectl set-locale `),s("span",{class:"token assign-left variable"},[s("span",{class:"token environment constant"},"LANG")]),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"en_US.UTF-8"'),n(`
`),s("span",{class:"token builtin class-name"},"export"),n(),s("span",{class:"token assign-left variable"},[s("span",{class:"token environment constant"},"LANG")]),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"en_US.UTF-8"'),n(`

`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"1.Disable selinux and stop firewalld ..."'),n(`
`),s("span",{class:"token function"},"cp"),n(` /etc/selinux/config /etc/selinux/config.orabak
`),s("span",{class:"token function"},"sed"),n(),s("span",{class:"token parameter variable"},"-i"),n(),s("span",{class:"token string"},"'s/^SELINUX=enforcing/SELINUX=disabled/g'"),n(` /etc/selinux/config 
setenforce `),s("span",{class:"token number"},"0"),n(`
systemctl stop firewalld
systemctl disable firewalld
`),s("span",{class:"token function"},"sleep"),n(),s("span",{class:"token number"},"1"),n(`

`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"2.Config hostname ..."'),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token environment constant"},"$HOSTNAME"),n(),s("span",{class:"token operator"},">"),n(` /etc/hostname
`),s("span",{class:"token function"},"sleep"),n(),s("span",{class:"token number"},"1"),n(`

`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"3.Config hosts ..."'),n(`
`),s("span",{class:"token function"},"cp"),n(` /etc/hosts /etc/hosts.orabak
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token variable"},"$IPADDR"),s("span",{class:"token string"},"'   '"),s("span",{class:"token environment constant"},"$HOSTNAME"),n(),s("span",{class:"token operator"},">>"),n(` /etc/hosts
`),s("span",{class:"token function"},"sleep"),n(),s("span",{class:"token number"},"1"),n(`

`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"4.Config sysctl.conf ... "'),n(`
`),s("span",{class:"token function"},"cp"),n(` /etc/sysctl.conf /etc/sysctl.conf.orabak

`),s("span",{class:"token function"},"cat"),n(),s("span",{class:"token operator"},">>"),n(" /etc/sysctl.conf "),s("span",{class:"token operator"},"<<"),n(),s("span",{class:"token string"},[n(`EOF
fs.file-max = 6815744
kernel.sem = 250 32000 100 128
kernel.shmmni = 4096
kernel.shmall = `),s("span",{class:"token variable"},"$OS_SHMALL"),n(` 
kernel.shmmax = `),s("span",{class:"token variable"},"$OS_SHMMAX"),n(`
kernel.panic_on_oops = 1
net.core.rmem_default = 262144
net.core.rmem_max = 4194304
net.core.wmem_default = 262144
net.core.wmem_max = 1048576
net.ipv4.conf.all.rp_filter = 2
net.ipv4.conf.default.rp_filter = 2
fs.aio-max-nr = 1048576
net.ipv4.ip_local_port_range = 9000 65500
EOF`)]),n(`
`),s("span",{class:"token function"},"sysctl"),n(),s("span",{class:"token parameter variable"},"-p"),n(`
`),s("span",{class:"token function"},"sleep"),n(),s("span",{class:"token number"},"1"),n(`

`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"5.Set Resource Usage Limit ..."'),n(`
`),s("span",{class:"token function"},"cp"),n(` /etc/security/limits.conf /etc/security/limits.conf.orabak
`),s("span",{class:"token function"},"cat"),n(),s("span",{class:"token operator"},">>"),n(" /etc/security/limits.conf "),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},`EOF
oracle   soft   nofile    1024
oracle   hard   nofile    65536
oracle   soft   nproc    16384
oracle   hard   nproc    16384
oracle   soft   stack    10240
oracle   hard   stack    32768
oracle   hard   memlock    134217728
oracle   soft   memlock    134217728
EOF`),n(`

`),s("span",{class:"token function"},"cp"),n(` /etc/pam.d/login /etc/pam.d/login.orabak
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"session   required    pam_limits.so"'),n(),s("span",{class:"token operator"},">>"),n(` /etc/pam.d/login
`),s("span",{class:"token function"},"sleep"),n(),s("span",{class:"token number"},"1"),n(`

`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"6.Install Dependency Packages ..."'),n(`
yum `),s("span",{class:"token function"},"install"),n(),s("span",{class:"token parameter variable"},"-y"),n(" binutils compat-libcap1 compat-libstdc++-33 compat-libstdc++-33.i686 glibc "),s("span",{class:"token punctuation"},"\\"),n(`
glibc.i686 glibc-devel glibc-devel.i686 ksh libaio libaio.i686 libaio-devel libaio-devel.i686 `),s("span",{class:"token punctuation"},"\\"),n(`
libX11 libX11.i686 libXau libXau.i686 libXi libXi.i686 libXtst libXtst.i686 libgcc libgcc.i686 `),s("span",{class:"token punctuation"},"\\"),n(`
libstdc++ libstdc++.i686 libstdc++-devel libstdc++-devel.i686 libxcb libxcb.i686 `),s("span",{class:"token function"},"make"),n(" nfs-utils "),s("span",{class:"token punctuation"},"\\"),n(`
net-tools smartmontools sysstat unixODBC unixODBC-devel `),s("span",{class:"token function"},"unzip"),n(`
`),s("span",{class:"token function"},"sleep"),n(),s("span",{class:"token number"},"1"),n(`

`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"7.Add Oracle Group and User ..."'),n(`
`),s("span",{class:"token function"},"groupadd"),n(),s("span",{class:"token parameter variable"},"-g"),n(),s("span",{class:"token number"},"54321"),n(` oinstall
`),s("span",{class:"token function"},"groupadd"),n(),s("span",{class:"token parameter variable"},"-g"),n(),s("span",{class:"token number"},"54322"),n(` dba
`),s("span",{class:"token function"},"groupadd"),n(),s("span",{class:"token parameter variable"},"-g"),n(),s("span",{class:"token number"},"54323"),n(` oper
`),s("span",{class:"token function"},"useradd"),n(),s("span",{class:"token parameter variable"},"-u"),n(),s("span",{class:"token number"},"54321"),n(),s("span",{class:"token parameter variable"},"-g"),n(" oinstall "),s("span",{class:"token parameter variable"},"-G"),n(` dba,oper oracle
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token variable"},"$ORACLE_OS_PASSWORD"),n(),s("span",{class:"token operator"},"|"),n(),s("span",{class:"token function"},"passwd"),n(),s("span",{class:"token parameter variable"},"--stdin"),n(` oracle
`),s("span",{class:"token function"},"sleep"),n(),s("span",{class:"token number"},"1"),n(`

`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"8.Create Directory ..."'),n(`
`),s("span",{class:"token function"},"mkdir"),n(),s("span",{class:"token parameter variable"},"-p"),n(),s("span",{class:"token variable"},"$ORACLE_HOME"),n(),s("span",{class:"token variable"},"$ORACLE_DATA_DIR"),n(),s("span",{class:"token variable"},"$ORACLE_ORA_INVENTORY"),n(),s("span",{class:"token variable"},"$ORACLE_RECOVERY_AREA_DIR"),n(`
`),s("span",{class:"token function"},"chown"),n(),s("span",{class:"token parameter variable"},"-R"),n(" oracle:oinstall "),s("span",{class:"token variable"},"$ORACLE_BASE_APP_DIR"),n(),s("span",{class:"token variable"},"$ORACLE_BASE_DATA_DIR"),n(),s("span",{class:"token variable"},"$ORACLE_RECOVERY_AREA_DIR"),n(`
`),s("span",{class:"token function"},"chmod"),n(),s("span",{class:"token parameter variable"},"-R"),n(),s("span",{class:"token number"},"775"),n(),s("span",{class:"token variable"},"$ORACLE_BASE_APP_DIR"),n(),s("span",{class:"token variable"},"$ORACLE_BASE_DATA_DIR"),n(),s("span",{class:"token variable"},"$ORACLE_RECOVERY_AREA_DIR"),n(`
`),s("span",{class:"token function"},"sleep"),n(),s("span",{class:"token number"},"1"),n(`

`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"9.Set Env ..."'),n(`
`),s("span",{class:"token function"},"cp"),n(` /home/oracle/.bash_profile /home/oracle/.bash_profile.orabak
`),s("span",{class:"token function"},"cat"),n(),s("span",{class:"token operator"},">>"),n(" /home/oracle/.bash_profile "),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOF
# Oracle ENV
export TMP=`),s("span",{class:"token variable"},"$TMP"),n(`
export TMPDIR=`),s("span",{class:"token variable"},"$TMP"),n(`

export ORACLE_HOSTNAME=`),s("span",{class:"token variable"},"$ORACLE_HOSTNAME"),n(`
export ORACLE_UNQNAME=`),s("span",{class:"token variable"},"$ORACLE_UNQNAME"),n(`
export ORACLE_SID=`),s("span",{class:"token variable"},"$ORACLE_SID"),n(`
export PDB_NAME=`),s("span",{class:"token variable"},"$ORACLE_PDB_NAME"),n(`
export ORACLE_BASE=`),s("span",{class:"token variable"},"$ORACLE_BASE"),n(`
export ORACLE_HOME=`),s("span",{class:"token variable"},"$ORACLE_HOME"),n(`
export ORA_INVENTORY=`),s("span",{class:"token variable"},"$ORACLE_ORA_INVENTORY"),n(`
export DATA_DIR=`),s("span",{class:"token variable"},"$ORACLE_DATA_DIR"),n(`
export ORACLE_HOME_LISTNER=\\`),s("span",{class:"token variable"},"$ORACLE_HOME"),n(`

export LD_LIBRARY_PATH=\\`),s("span",{class:"token variable"},"$ORACLE_HOME"),n(`/lib:/lib:/usr/lib
export CLASSPATH=\\`),s("span",{class:"token variable"},"$ORACLE_HOME"),n("/jlib:\\"),s("span",{class:"token variable"},"$ORACLE_HOME"),n(`/rdbms/jlib

export PATH=\\`),s("span",{class:"token variable"},"$ORACLE_HOME"),n("/bin:\\"),s("span",{class:"token environment constant"},"$PATH"),n(`
EOF`)]),n(`
`),s("span",{class:"token function"},"sleep"),n(),s("span",{class:"token number"},"1"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"InstallSoftware"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"10.unzip oracle database package ..."'),n(`
`),s("span",{class:"token function"},"chown"),n(" oracle:oinstall "),s("span",{class:"token parameter variable"},"-R"),n(` /opt/package
`),s("span",{class:"token function"},"su"),n(" - oracle "),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOF
cd `),s("span",{class:"token variable"},"${SOFTWARE_DIR}"),n(`
unzip -oq linuxx64_12201_database.zip
cd `),s("span",{class:"token variable"},"${SOFTWARE_DIR}"),n(`/database

echo "11.install database software ..."
./runInstaller -ignorePrereq -waitforcompletion -silent                        \\
    -responseFile `),s("span",{class:"token variable"},"${SOFTWARE_DIR}"),n(`/database/response/db_install.rsp               \\
    oracle.install.option=INSTALL_DB_SWONLY                                    \\
    ORACLE_HOSTNAME=`),s("span",{class:"token variable"},"${ORACLE_HOSTNAME}"),n(`                                         \\
    UNIX_GROUP_NAME=oinstall                                                   \\
    INVENTORY_LOCATION=`),s("span",{class:"token variable"},"${ORACLE_ORA_INVENTORY}"),n(`                                 \\
    SELECTED_LANGUAGES=en                                                      \\
    ORACLE_HOME=`),s("span",{class:"token variable"},"${ORACLE_HOME}"),n(`                                                 \\
    ORACLE_BASE=`),s("span",{class:"token variable"},"${ORACLE_BASE}"),n(`                                                 \\
    oracle.install.db.InstallEdition=EE                                        \\
    oracle.install.db.OSDBA_GROUP=dba                                          \\
    oracle.install.db.OSOPER_GROUP=oper                                         \\
    oracle.install.db.OSBACKUPDBA_GROUP=dba                                    \\
    oracle.install.db.OSDGDBA_GROUP=dba                                        \\
    oracle.install.db.OSKMDBA_GROUP=dba                                        \\
    oracle.install.db.OSRACDBA_GROUP=dba                                       \\
    SECURITY_UPDATES_VIA_MYORACLESUPPORT=false                                 \\
    DECLINE_SECURITY_UPDATES=true
EOF`)]),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n(`"Run '`),s("span",{class:"token variable"},"${ORACLE_ORA_INVENTORY}"),n(`/orainstRoot.sh' as root ..."`)]),n(`
`),s("span",{class:"token variable"},"${ORACLE_ORA_INVENTORY}"),n(`/orainstRoot.sh
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n(`"Run '`),s("span",{class:"token variable"},"${ORACLE_HOME}"),n(`/root.sh' as root ..."`)]),n(`
`),s("span",{class:"token variable"},"${ORACLE_HOME}"),n(`/root.sh
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"CreateNetca"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"12.Create Netca ..."'),n(`
`),s("span",{class:"token function"},"su"),n(" - oracle "),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOF
echo "12.Create the listener ..."
netca -silent -responsefile `),s("span",{class:"token variable"},"${ORACLE_HOME}"),n(`/assistants/netca/netca.rsp
echo "12.Start the listener ..."
lsnrctl start
EOF`)]),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"CreateDatabase"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"13.Create Database ..."'),n(`
`),s("span",{class:"token function"},"su"),n(" - oracle "),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOF
echo "12.Start the listener ..."
lsnrctl start

dbca -silent -createDatabase                                                   \\
     -templateName General_Purpose.dbc                                         \\
     -gdbname `),s("span",{class:"token variable"},"${ORACLE_SID}"),n(" -sid  "),s("span",{class:"token variable"},"${ORACLE_SID}"),n(` -responseFile NO_VALUE         \\
     -characterSet `),s("span",{class:"token variable"},"$ORACLE_CHARSET"),n(`                                                  \\
     -sysPassword `),s("span",{class:"token variable"},"$ORACLE_SYS_PASSWORD"),n(`                                                     \\
     -systemPassword `),s("span",{class:"token variable"},"$ORACLE_SYSTEM_PASSWORD"),n(`                                               \\
     -createAsContainerDatabase true                                           \\
     -numberOfPDBs 1                                                           \\
     -pdbName `),s("span",{class:"token variable"},"${ORACLE_PDB_NAME}"),n(`                                                      \\
     -pdbAdminPassword `),s("span",{class:"token variable"},"$ORACLE_PDB_ADMIN_PASSWORD"),n(`                                           \\
     -databaseType MULTIPURPOSE                                                \\
     -memoryMgmtType auto_sga                                                  \\
     -totalMemory `),s("span",{class:"token variable"},"$ORACLE_TOTAL_MEMORY"),n(`                                         \\
     -storageType FS                                                           \\
     -datafileDestination "`),s("span",{class:"token variable"},"${ORACLE_DATA_DIR}"),n(`"                                        \\
     -enableArchive  `),s("span",{class:"token variable"},"${ORACLE_ARCHIVE}"),n(`                                                 \\
     -recoveryAreaSize  `),s("span",{class:"token variable"},"${ORACLE_RECOVERY_AREA_SIZE}"),n(`                           \\
     -recoveryAreaDestination  "`),s("span",{class:"token variable"},"${ORACLE_RECOVERY_AREA_DIR}"),n(`"                   \\
     -redoLogFileSize 50                                                       \\
     -emConfiguration NONE                                                     \\
     -ignorePreReqs

echo "Successfully Insall Oracle `),s("span",{class:"token variable"},"$ORACLE_DATABASE_VERSION"),n(` !"
EOF`)]),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"EnableStartup"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Edit /etc/oratab ..."'),n(`
`),s("span",{class:"token function"},"cp"),n(` /etc/oratab /etc/oratab.orabak
`),s("span",{class:"token function"},"sed"),n(),s("span",{class:"token parameter variable"},"-i"),n(),s("span",{class:"token string"},[n('"s#'),s("span",{class:"token variable"},"${ORACLE_SID}"),n(":"),s("span",{class:"token variable"},"${ORACLE_HOME}"),n(":N#"),s("span",{class:"token variable"},"${ORACLE_SID}"),n(":"),s("span",{class:"token variable"},"${ORACLE_HOME}"),n(':Y#g"')]),n(` /etc/oratab
`),s("span",{class:"token function"},"su"),n(" - oracle "),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOFOUT
sqlplus / as sysdba <<EOF
alter system set db_create_file_dest='`),s("span",{class:"token variable"},"${ORACLE_DATA_DIR}"),n(`';
alter pluggable database `),s("span",{class:"token variable"},"${ORACLE_PDB_NAME}"),n(` save state;
exit;
EOF
EOFOUT`)]),n(`

`),s("span",{class:"token function"},"mkdir"),n(),s("span",{class:"token parameter variable"},"-p"),n(),s("span",{class:"token variable"},"${DBA_HOME}"),n(`/scripts
`),s("span",{class:"token function"},"chown"),n(" oracle:root "),s("span",{class:"token parameter variable"},"-R"),n(),s("span",{class:"token variable"},"${DBA_HOME}"),n(`

`),s("span",{class:"token function"},"su"),n(" - oracle "),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOF
touch `),s("span",{class:"token variable"},"${DBA_HOME}"),n(`/scripts/startup_db.sh
chmod a+x `),s("span",{class:"token variable"},"${DBA_HOME}"),n(`/scripts/startup_db.sh

cat > `),s("span",{class:"token variable"},"${DBA_HOME}"),n(`/scripts/startup_db.sh <<"EOFINNER"
#! /bin/sh
# description: Oracle auto start-stop script.
#
# Set ORA_HOME to be equivalent to the \\`),s("span",{class:"token variable"},"$ORACLE_HOME"),n(`
# from which you wish to execute dbstart and dbshut;
#
# Set ORA_OWNER to the user id of the owner of the
# Oracle database in ORACLE_HOME.

ORA_HOME=`),s("span",{class:"token variable"},"$ORACLE_HOME"),n(`
ORA_OWNER=oracle
CURRENT_USER=\\`),s("span",{class:"token variable"},[s("span",{class:"token variable"},"`"),n("whoami"),s("span",{class:"token punctuation"},"\\"),s("span",{class:"token variable"},"`")]),n(`

case "\\`),s("span",{class:"token variable"},"$1"),n(`" in
'start') 
    # Start the Oracle databases:
    # The following command assumes that the oracle login
    # will not prompt the user for any values
    # Remove "&" if you don't want startup as a background process.
    if [ "\\`),s("span",{class:"token variable"},"$ORA_OWNER"),n('" = "\\'),s("span",{class:"token variable"},"$CURRENT_USER"),n(`" ]; then
    \\`),s("span",{class:"token variable"},"$ORA_HOME"),n("/bin/dbstart \\"),s("span",{class:"token variable"},"$ORA_HOME"),n(`
    else
    su - \\`),s("span",{class:"token variable"},"$ORA_OWNER"),n(' -c "\\'),s("span",{class:"token variable"},"$ORA_HOME"),n("/bin/dbstart \\"),s("span",{class:"token variable"},"$ORA_HOME"),n(`" 
    fi
    touch /var/lock/subsys/dbora
    break
    ;;

'stop')
    # Stop the Oracle databases:
    # The following command assumes that the oracle login
    # will not prompt the user for any values
    if [ "\\`),s("span",{class:"token variable"},"$ORA_OWNER"),n('" = "\\'),s("span",{class:"token variable"},"$CURRENT_USER"),n(`" ]; then
    \\`),s("span",{class:"token variable"},"$ORA_HOME"),n("/bin/dbshut \\"),s("span",{class:"token variable"},"$ORA_HOME"),n(`
    else
    su - \\`),s("span",{class:"token variable"},"$ORA_OWNER"),n(' -c "\\'),s("span",{class:"token variable"},"$ORA_HOME"),n("/bin/dbshut \\"),s("span",{class:"token variable"},"$ORA_HOME"),n(`" &
    fi
    rm -f /var/lock/subsys/dbora
    break
    ;;
   *)
    echo "usage: `),s("span",{class:"token variable"},"$0"),n(` {start|stop}"
    exit
    ;;
esac
EOF`)]),n(`INNER
EOF

`),s("span",{class:"token function"},"cat"),n(),s("span",{class:"token operator"},">"),n(" /lib/systemd/system/dbora.service "),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOF
[Unit]
Description=The Oracle Database Service
After=syslog.target network.target

[Service]
# systemd ignores PAM limits, so set any necessary limits in the service.
# Not really a bug, but a feature.
# https://bugzilla.redhat.com/show_bug.cgi?id=754285
LimitMEMLOCK=infinity
LimitNOFILE=65535

#Type=simple
# idle: similar to simple, the actual execution of the service binary is delayed
#       until all jobs are finished, which avoids mixing the status output with shell output of services.
RemainAfterExit=yes
User=oracle
Group=oinstall
Restart=no
ExecStart=/bin/bash -c '`),s("span",{class:"token variable"},"${DBA_HOME}"),n(`/scripts/startup_db.sh start'
ExecStop=/bin/bash -c '`),s("span",{class:"token variable"},"${DBA_HOME}"),n(`/scripts/startup_db.sh stop'

[Install]
WantedBy=multi-user.target
EOF`)]),n(`

`),s("span",{class:"token comment"},"# autostart after os reboot"),n(`
systemctl `),s("span",{class:"token builtin class-name"},"enable"),n(` dbora.service
`),s("span",{class:"token comment"},"# add allow port to firewalld"),n(`
firewall-cmd --add-port`),s("span",{class:"token operator"},"="),s("span",{class:"token number"},"1521"),n(),s("span",{class:"token parameter variable"},"--zone"),s("span",{class:"token operator"},"="),n("public "),s("span",{class:"token parameter variable"},"--permanent"),n(`
firewall-cmd `),s("span",{class:"token parameter variable"},"--reload"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"Usage"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
`),s("span",{class:"token function"},"cat"),n(),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOF
Usage: `),s("span",{class:"token variable"},"$0"),n(` -h|--helpUsage, help message.
       `),s("span",{class:"token variable"},"$0"),n(` -d|--installDependency, install oracle dependency.
       `),s("span",{class:"token variable"},"$0"),n(` -a|--installAll, install dependency,database software,create netca,create database.     
       `),s("span",{class:"token variable"},"$0"),n(` -s|--installSoftware, install database software. 
       `),s("span",{class:"token variable"},"$0"),n(` -c|--createDatabase, create database.
       `),s("span",{class:"token variable"},"$0"),n(` -e|--enable, enable database auto startup after system boot/reboot.
       `),s("span",{class:"token variable"},"$0"),n(` -p|--package, download database package.
EOF`)]),n(`
`),s("span",{class:"token punctuation"},"}"),n(`


`),s("span",{class:"token assign-left variable"},"ARGS"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"`"),n("getopt "),s("span",{class:"token parameter variable"},"-o"),n(" hdasncep "),s("span",{class:"token parameter variable"},"--long"),n(" help,installDependency,installAll,installSoftware,createNetca,createDatabase,enable,package "),s("span",{class:"token parameter variable"},"-n"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$0"),n('"')]),n("  -- "),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$@"),n('"')]),s("span",{class:"token variable"},"`")]),n(`
`),s("span",{class:"token builtin class-name"},"eval"),n(),s("span",{class:"token builtin class-name"},"set"),n(" --  "),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$ARGS"),n('"')]),n(`
`),s("span",{class:"token keyword"},"while"),n(),s("span",{class:"token boolean"},"true"),n(`
`),s("span",{class:"token keyword"},"do"),n(`
`),s("span",{class:"token keyword"},"case"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$1"),n('"')]),n(),s("span",{class:"token keyword"},"in"),n(`
    -h`),s("span",{class:"token operator"},"|"),n("--help"),s("span",{class:"token punctuation"},")"),n(`
    Usage
    `),s("span",{class:"token builtin class-name"},"shift"),n(),s("span",{class:"token number"},"2"),n(`
    `),s("span",{class:"token builtin class-name"},"break"),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    -d`),s("span",{class:"token operator"},"|"),n("--installDependency"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"InstallDependency ..."'),n(`
    `),s("span",{class:"token assign-left variable"},"STARTTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    InstallDependency
    `),s("span",{class:"token assign-left variable"},"ENDTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"Installation Elapsed: $[ '),s("span",{class:"token variable"},"$ENDTIME"),n(" - "),s("span",{class:"token variable"},"$STARTTIME"),n(' ] s"')]),n(`
    `),s("span",{class:"token builtin class-name"},"shift"),n(),s("span",{class:"token number"},"2"),n(`
    `),s("span",{class:"token builtin class-name"},"break"),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    -a`),s("span",{class:"token operator"},"|"),n("--installAll"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"InstallAll ..."'),n(`
    `),s("span",{class:"token assign-left variable"},"STARTTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    InstallDependency
    InstallSoftware
    `),s("span",{class:"token comment"},"# CreateNetca"),n(`
    CreateDatabase
    `),s("span",{class:"token assign-left variable"},"ENDTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"Installation Elapsed: $[ '),s("span",{class:"token variable"},"$ENDTIME"),n(" - "),s("span",{class:"token variable"},"$STARTTIME"),n(' ] s"')]),n(`
    `),s("span",{class:"token builtin class-name"},"shift"),n(),s("span",{class:"token number"},"2"),n(`
    `),s("span",{class:"token builtin class-name"},"break"),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    -s`),s("span",{class:"token operator"},"|"),n("--installSoftware"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"InstallSoftware ..."'),n(`
    `),s("span",{class:"token assign-left variable"},"STARTTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    InstallDependency
    InstallSoftware
    `),s("span",{class:"token assign-left variable"},"ENDTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"Installation Elapsed: $[ '),s("span",{class:"token variable"},"$ENDTIME"),n(" - "),s("span",{class:"token variable"},"$STARTTIME"),n(' ] s"')]),n(`
    `),s("span",{class:"token builtin class-name"},"shift"),n(),s("span",{class:"token number"},"2"),n(`
    `),s("span",{class:"token builtin class-name"},"break"),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    -n`),s("span",{class:"token operator"},"|"),n("--createNetca"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Create Netca ..."'),n(`
    `),s("span",{class:"token assign-left variable"},"STARTTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    CreateNetca
    `),s("span",{class:"token assign-left variable"},"ENDTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"Create Netca Elapsed: $[ '),s("span",{class:"token variable"},"$ENDTIME"),n(" - "),s("span",{class:"token variable"},"$STARTTIME"),n(' ] s"')]),n(`
    `),s("span",{class:"token builtin class-name"},"shift"),n(),s("span",{class:"token number"},"2"),n(`
    `),s("span",{class:"token builtin class-name"},"break"),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    -c`),s("span",{class:"token operator"},"|"),n("--createDatabase"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"CreateDatabase ..."'),n(`
    `),s("span",{class:"token assign-left variable"},"STARTTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    CreateDatabase
    `),s("span",{class:"token assign-left variable"},"ENDTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"Installation Elapsed: $[ '),s("span",{class:"token variable"},"$ENDTIME"),n(" - "),s("span",{class:"token variable"},"$STARTTIME"),n(' ] s"')]),n(`
    `),s("span",{class:"token builtin class-name"},"shift"),n(),s("span",{class:"token number"},"2"),n(`
    `),s("span",{class:"token builtin class-name"},"break"),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    -e`),s("span",{class:"token operator"},"|"),n("--enable"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"EnableStartup ..."'),n(`
    `),s("span",{class:"token assign-left variable"},"STARTTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    EnableStartup
    `),s("span",{class:"token assign-left variable"},"ENDTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"EnableStartup Elapsed: $[ '),s("span",{class:"token variable"},"$ENDTIME"),n(" - "),s("span",{class:"token variable"},"$STARTTIME"),n(' ] s"')]),n(`
    `),s("span",{class:"token builtin class-name"},"shift"),n(),s("span",{class:"token number"},"2"),n(`
    `),s("span",{class:"token builtin class-name"},"break"),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    -p`),s("span",{class:"token operator"},"|"),n("--package"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Downloading Package ..."'),n(`
    `),s("span",{class:"token assign-left variable"},"STARTTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    DownloadPackages
    `),s("span",{class:"token assign-left variable"},"ENDTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"Downloading Package Elapsed: $[ '),s("span",{class:"token variable"},"$ENDTIME"),n(" - "),s("span",{class:"token variable"},"$STARTTIME"),n(' ] s"')]),n(`
    `),s("span",{class:"token builtin class-name"},"shift"),n(),s("span",{class:"token number"},"2"),n(`
    `),s("span",{class:"token builtin class-name"},"break"),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    *`),s("span",{class:"token punctuation"},")"),n(`
    Usage
    `),s("span",{class:"token builtin class-name"},"exit"),n(),s("span",{class:"token number"},"1"),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token keyword"},"esac"),n(`
`),s("span",{class:"token keyword"},"done"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),R=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token shebang important"},"#!/bin/bash"),n(`
`),s("span",{class:"token comment"},"############ Author begin ###############"),n(`
`),s("span",{class:"token comment"},"## Author: Ableit"),n(`
`),s("span",{class:"token comment"},"## Date: 2022-07-20"),n(`
`),s("span",{class:"token comment"},"############ Author end ###############"),n(`

`),s("span",{class:"token comment"},"############ Env & Virables begin ###############"),n(`
`),s("span",{class:"token comment"},"# custom settings"),n(`
`),s("span",{class:"token assign-left variable"},"DBA_HOME"),s("span",{class:"token operator"},"="),n(`/opt/database/dba
`),s("span",{class:"token assign-left variable"},"SOFTWARE_DIR"),s("span",{class:"token operator"},"="),n(`/opt/package

`),s("span",{class:"token assign-left variable"},[s("span",{class:"token environment constant"},"HOSTNAME")]),s("span",{class:"token operator"},"="),n(`testdb-node01
`),s("span",{class:"token assign-left variable"},"IPADDR"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"`"),s("span",{class:"token function"},"ip"),n(),s("span",{class:"token parameter variable"},"-4"),n(" addr show dev eth0 "),s("span",{class:"token operator"},"|"),n(),s("span",{class:"token function"},"grep"),n(),s("span",{class:"token parameter variable"},"-oP"),n(),s("span",{class:"token string"},"'(?<=inet\\s)\\d+(\\.\\d+){3}'"),s("span",{class:"token variable"},"`")]),n(`
`),s("span",{class:"token assign-left variable"},"ORACLE_OS_PASSWORD"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"YsDB_GreatMen2022"'),n(`

`),s("span",{class:"token assign-left variable"},"ORACLE_UNQNAME"),s("span",{class:"token operator"},"="),n(`testdb
`),s("span",{class:"token assign-left variable"},"ORACLE_SID"),s("span",{class:"token operator"},"="),n(`testdb
`),s("span",{class:"token assign-left variable"},"ORACLE_PDB_NAME"),s("span",{class:"token operator"},"="),n(`testpdb
`),s("span",{class:"token assign-left variable"},"ORACLE_CHARSET"),s("span",{class:"token operator"},"="),n(`AL32UTF8
`),s("span",{class:"token assign-left variable"},"ORACLE_SYS_PASSWORD"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"YsDB_GreatMen2022"'),n(`
`),s("span",{class:"token assign-left variable"},"ORACLE_SYSTEM_PASSWORD"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"YsDB_GreatMen2022"'),n(`
`),s("span",{class:"token assign-left variable"},"ORACLE_PDB_ADMIN_PASSWORD"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"YsDB_GreatMen2022"'),n(`

`),s("span",{class:"token assign-left variable"},"ORACLE_BASE_APP_DIR"),s("span",{class:"token operator"},"="),n(`/u01
`),s("span",{class:"token assign-left variable"},"ORACLE_BASE_DATA_DIR"),s("span",{class:"token operator"},"="),n(`/data
`),s("span",{class:"token assign-left variable"},"ORACLE_DATABASE_VERSION"),s("span",{class:"token operator"},"="),s("span",{class:"token number"},"18.0"),n(`.0.0
`),s("span",{class:"token comment"},"# 64G"),n(`
`),s("span",{class:"token assign-left variable"},"ORACLE_RECOVERY_AREA_SIZE"),s("span",{class:"token operator"},"="),n("$"),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token number"},"64"),n("*1024 "),s("span",{class:"token punctuation"},"]"),n(`
`),s("span",{class:"token assign-left variable"},"ORACLE_ARCHIVE"),s("span",{class:"token operator"},"="),n(`true


`),s("span",{class:"token comment"},"# Oracle Auto Settings"),n(`
`),s("span",{class:"token assign-left variable"},"TMP"),s("span",{class:"token operator"},"="),n(`/tmp
`),s("span",{class:"token assign-left variable"},"ORACLE_HOSTNAME"),s("span",{class:"token operator"},"="),s("span",{class:"token environment constant"},"$HOSTNAME"),n(`
`),s("span",{class:"token assign-left variable"},"ORACLE_BASE"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$ORACLE_BASE_APP_DIR"),n(`/app/oracle
`),s("span",{class:"token assign-left variable"},"ORACLE_HOME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$ORACLE_BASE"),n("/product/"),s("span",{class:"token variable"},"$ORACLE_DATABASE_VERSION"),n(`/db_1
`),s("span",{class:"token assign-left variable"},"ORACLE_DATA_DIR"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$ORACLE_BASE_DATA_DIR"),n(`/app/oracle/oradata
`),s("span",{class:"token assign-left variable"},"ORACLE_ORA_INVENTORY"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$ORACLE_BASE_APP_DIR"),n(`/app/oraInventory
`),s("span",{class:"token assign-left variable"},"ORACLE_RECOVERY_AREA_DIR"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$ORACLE_BASE_DATA_DIR"),n(`/app/oracle/fast_recovery_area

`),s("span",{class:"token comment"},"# os auto settings"),n(`
`),s("span",{class:"token assign-left variable"},"OS_MEMORY"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"`"),s("span",{class:"token function"},"free"),n(" -b"),s("span",{class:"token operator"},"|"),s("span",{class:"token function"},"grep"),n(" Mem:"),s("span",{class:"token operator"},"|"),s("span",{class:"token function"},"awk"),n(" -F"),s("span",{class:"token string"},"' '"),n(),s("span",{class:"token string"},"'{print $2}'"),s("span",{class:"token variable"},"`")]),n(`
`),s("span",{class:"token assign-left variable"},"OS_SHMMAX"),s("span",{class:"token operator"},"="),n("$"),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},"$OS_MEMORY"),n(" * "),s("span",{class:"token number"},"2"),n(" / "),s("span",{class:"token number"},"3"),n(),s("span",{class:"token punctuation"},"]"),n(`
`),s("span",{class:"token assign-left variable"},"OS_SHMALL"),s("span",{class:"token operator"},"="),n("$"),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},"$OS_SHMMAX"),n(" / "),s("span",{class:"token number"},"1024"),n(),s("span",{class:"token punctuation"},"]"),n(`
`),s("span",{class:"token assign-left variable"},"ORACLE_TOTAL_MEMORY"),s("span",{class:"token operator"},"="),n("$"),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},"$OS_SHMMAX"),n(" / "),s("span",{class:"token number"},"1024"),n(" / "),s("span",{class:"token number"},"1024"),n(),s("span",{class:"token punctuation"},"]"),n(`
`),s("span",{class:"token function"},"hostname"),n(),s("span",{class:"token environment constant"},"$HOSTNAME"),n(`
`),s("span",{class:"token assign-left variable"},"OS_VERSION_ID"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"`"),s("span",{class:"token function"},"cat"),n(" /etc/os-release "),s("span",{class:"token operator"},"|"),s("span",{class:"token function"},"grep"),n(),s("span",{class:"token string"},"'^VERSION_ID='"),s("span",{class:"token operator"},"|"),s("span",{class:"token function"},"awk"),n(" -F"),s("span",{class:"token string"},"'='"),n(),s("span",{class:"token string"},"'{print $2}'"),s("span",{class:"token variable"},"`")]),n(`
`),s("span",{class:"token comment"},"############ Env & Virables end ###############"),n(`


`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"DownloadPackages"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Downloading package ..."'),n(`
    `),s("span",{class:"token function"},"mkdir"),n(),s("span",{class:"token parameter variable"},"-p"),n(),s("span",{class:"token variable"},"$SOFTWARE_DIR"),n(`
    yum `),s("span",{class:"token function"},"install"),n(),s("span",{class:"token parameter variable"},"-y"),n(),s("span",{class:"token function"},"wget"),n(`
    `),s("span",{class:"token function"},"wget"),n(),s("span",{class:"token parameter variable"},"-O"),n(),s("span",{class:"token variable"},"$SOFTWARE_DIR"),n(`/LINUX.X64_180000_db_home.zip ftp://10.10.12.158/pub/oracle/LINUX.X64_180000_db_home.zip
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"InstallDependency"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"0.Set Locale ..."'),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token assign-left variable"},[s("span",{class:"token environment constant"},"LANG")]),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"en_US.UTF-8"'),n(),s("span",{class:"token operator"},">"),n(` /etc/locale.conf
localectl set-locale `),s("span",{class:"token assign-left variable"},[s("span",{class:"token environment constant"},"LANG")]),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"en_US.UTF-8"'),n(`
`),s("span",{class:"token builtin class-name"},"export"),n(),s("span",{class:"token assign-left variable"},[s("span",{class:"token environment constant"},"LANG")]),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"en_US.UTF-8"'),n(`

`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"1.Disable selinux and stop firewalld ..."'),n(`
`),s("span",{class:"token function"},"cp"),n(` /etc/selinux/config /etc/selinux/config.orabak
`),s("span",{class:"token function"},"sed"),n(),s("span",{class:"token parameter variable"},"-i"),n(),s("span",{class:"token string"},"'s/^SELINUX=enforcing/SELINUX=disabled/g'"),n(` /etc/selinux/config 
setenforce `),s("span",{class:"token number"},"0"),n(`
systemctl stop firewalld
systemctl disable firewalld
`),s("span",{class:"token function"},"sleep"),n(),s("span",{class:"token number"},"1"),n(`

`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"2.Config hostname ..."'),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token environment constant"},"$HOSTNAME"),n(),s("span",{class:"token operator"},">"),n(` /etc/hostname
`),s("span",{class:"token function"},"sleep"),n(),s("span",{class:"token number"},"1"),n(`

`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"3.Config hosts ..."'),n(`
`),s("span",{class:"token function"},"cp"),n(` /etc/hosts /etc/hosts.orabak
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token variable"},"$IPADDR"),s("span",{class:"token string"},"'   '"),s("span",{class:"token environment constant"},"$HOSTNAME"),n(),s("span",{class:"token operator"},">>"),n(` /etc/hosts
`),s("span",{class:"token function"},"sleep"),n(),s("span",{class:"token number"},"1"),n(`

`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"4.Config sysctl.conf ... "'),n(`
`),s("span",{class:"token function"},"cp"),n(` /etc/sysctl.conf /etc/sysctl.conf.orabak

`),s("span",{class:"token function"},"cat"),n(),s("span",{class:"token operator"},">>"),n(" /etc/sysctl.conf "),s("span",{class:"token operator"},"<<"),n(),s("span",{class:"token string"},[n(`EOF
fs.file-max = 6815744
kernel.sem = 250 32000 100 128
kernel.shmmni = 4096
kernel.shmall = `),s("span",{class:"token variable"},"$OS_SHMALL"),n(` 
kernel.shmmax = `),s("span",{class:"token variable"},"$OS_SHMMAX"),n(`
kernel.panic_on_oops = 1
net.core.rmem_default = 262144
net.core.rmem_max = 4194304
net.core.wmem_default = 262144
net.core.wmem_max = 1048576
net.ipv4.conf.all.rp_filter = 2
net.ipv4.conf.default.rp_filter = 2
fs.aio-max-nr = 1048576
net.ipv4.ip_local_port_range = 9000 65500
EOF`)]),n(`
`),s("span",{class:"token function"},"sysctl"),n(),s("span",{class:"token parameter variable"},"-p"),n(`
`),s("span",{class:"token function"},"sleep"),n(),s("span",{class:"token number"},"1"),n(`

`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"5.Set Resource Usage Limit ..."'),n(`
`),s("span",{class:"token function"},"cp"),n(` /etc/security/limits.conf /etc/security/limits.conf.orabak
`),s("span",{class:"token function"},"cat"),n(),s("span",{class:"token operator"},">>"),n(" /etc/security/limits.conf "),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},`EOF
oracle   soft   nofile    1024
oracle   hard   nofile    65536
oracle   soft   nproc    16384
oracle   hard   nproc    16384
oracle   soft   stack    10240
oracle   hard   stack    32768
oracle   hard   memlock    134217728
oracle   soft   memlock    134217728
EOF`),n(`

`),s("span",{class:"token function"},"cp"),n(` /etc/pam.d/login /etc/pam.d/login.orabak
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"session   required    pam_limits.so"'),n(),s("span",{class:"token operator"},">>"),n(` /etc/pam.d/login
`),s("span",{class:"token function"},"sleep"),n(),s("span",{class:"token number"},"1"),n(`
`),s("span",{class:"token function"},"sleep"),n(),s("span",{class:"token number"},"1"),n(`

`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"6.Install Dependency Packages ..."'),n(`
yum `),s("span",{class:"token function"},"install"),n(),s("span",{class:"token parameter variable"},"-y"),n(),s("span",{class:"token function"},"bc"),n(" binutils compat-libcap1 compat-libstdc++-33 compat-libstdc++-33.i686 elfutils-libelf.i686 "),s("span",{class:"token punctuation"},"\\"),n(`
elfutils-libelf elfutils-libelf-devel.i686 elfutils-libelf-devel fontconfig-devel glibc.i686 glibc `),s("span",{class:"token punctuation"},"\\"),n(`
glibc-devel.i686 glibc-devel ksh libaio.i686 libaio libaio-devel.i686 libaio-devel libX11.i686 libX11 `),s("span",{class:"token punctuation"},"\\"),n(`
libXau.i686 libXau libXi.i686 libXi libXtst.i686 libXtst libgcc.i686 libgcc librdmacm-devel libstdc++.i686 `),s("span",{class:"token punctuation"},"\\"),n(`
libstdc++ libstdc++-devel.i686 libstdc++-devel libxcb.i686 libxcb `),s("span",{class:"token function"},"make"),n(" nfs-utils net-tools python "),s("span",{class:"token punctuation"},"\\"),n(`
python-configshell python-rtslib python-six smartmontools sysstat targetcli unixODBC `),s("span",{class:"token function"},"unzip"),n(`
`),s("span",{class:"token function"},"sleep"),n(),s("span",{class:"token number"},"1"),n(`

`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"7.Add Oracle Group and User ..."'),n(`
`),s("span",{class:"token function"},"groupadd"),n(),s("span",{class:"token parameter variable"},"-g"),n(),s("span",{class:"token number"},"54321"),n(` oinstall
`),s("span",{class:"token function"},"groupadd"),n(),s("span",{class:"token parameter variable"},"-g"),n(),s("span",{class:"token number"},"54322"),n(` dba
`),s("span",{class:"token function"},"groupadd"),n(),s("span",{class:"token parameter variable"},"-g"),n(),s("span",{class:"token number"},"54323"),n(` oper
`),s("span",{class:"token function"},"useradd"),n(),s("span",{class:"token parameter variable"},"-u"),n(),s("span",{class:"token number"},"54321"),n(),s("span",{class:"token parameter variable"},"-g"),n(" oinstall "),s("span",{class:"token parameter variable"},"-G"),n(` dba,oper oracle
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token variable"},"$ORACLE_OS_PASSWORD"),n(),s("span",{class:"token operator"},"|"),n(),s("span",{class:"token function"},"passwd"),n(),s("span",{class:"token parameter variable"},"--stdin"),n(` oracle
`),s("span",{class:"token function"},"sleep"),n(),s("span",{class:"token number"},"1"),n(`

`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"8.Create Directory ..."'),n(`
`),s("span",{class:"token function"},"mkdir"),n(),s("span",{class:"token parameter variable"},"-p"),n(),s("span",{class:"token variable"},"$ORACLE_HOME"),n(),s("span",{class:"token variable"},"$ORACLE_DATA_DIR"),n(),s("span",{class:"token variable"},"$ORACLE_ORA_INVENTORY"),n(),s("span",{class:"token variable"},"$ORACLE_RECOVERY_AREA_DIR"),n(`
`),s("span",{class:"token function"},"chown"),n(),s("span",{class:"token parameter variable"},"-R"),n(" oracle:oinstall "),s("span",{class:"token variable"},"$ORACLE_BASE_APP_DIR"),n(),s("span",{class:"token variable"},"$ORACLE_BASE_DATA_DIR"),n(),s("span",{class:"token variable"},"$ORACLE_RECOVERY_AREA_DIR"),n(`
`),s("span",{class:"token function"},"chmod"),n(),s("span",{class:"token parameter variable"},"-R"),n(),s("span",{class:"token number"},"775"),n(),s("span",{class:"token variable"},"$ORACLE_BASE_APP_DIR"),n(),s("span",{class:"token variable"},"$ORACLE_BASE_DATA_DIR"),n(),s("span",{class:"token variable"},"$ORACLE_RECOVERY_AREA_DIR"),n(`
`),s("span",{class:"token function"},"sleep"),n(),s("span",{class:"token number"},"1"),n(`

`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"9.Set Env ..."'),n(`
`),s("span",{class:"token function"},"cp"),n(` /home/oracle/.bash_profile /home/oracle/.bash_profile.orabak
`),s("span",{class:"token function"},"cat"),n(),s("span",{class:"token operator"},">>"),n(" /home/oracle/.bash_profile "),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOF
# Oracle ENV
export TMP=`),s("span",{class:"token variable"},"$TMP"),n(`
export TMPDIR=`),s("span",{class:"token variable"},"$TMP"),n(`

export ORACLE_HOSTNAME=`),s("span",{class:"token variable"},"$ORACLE_HOSTNAME"),n(`
export ORACLE_UNQNAME=`),s("span",{class:"token variable"},"$ORACLE_UNQNAME"),n(`
export ORACLE_SID=`),s("span",{class:"token variable"},"$ORACLE_SID"),n(`
export PDB_NAME=`),s("span",{class:"token variable"},"$ORACLE_PDB_NAME"),n(`
export ORACLE_BASE=`),s("span",{class:"token variable"},"$ORACLE_BASE"),n(`
export ORACLE_HOME=`),s("span",{class:"token variable"},"$ORACLE_HOME"),n(`
export ORA_INVENTORY=`),s("span",{class:"token variable"},"$ORACLE_ORA_INVENTORY"),n(`
export DATA_DIR=`),s("span",{class:"token variable"},"$ORACLE_DATA_DIR"),n(`
export ORACLE_HOME_LISTNER=\\`),s("span",{class:"token variable"},"$ORACLE_HOME"),n(`

export LD_LIBRARY_PATH=\\`),s("span",{class:"token variable"},"$ORACLE_HOME"),n(`/lib:/lib:/usr/lib
export CLASSPATH=\\`),s("span",{class:"token variable"},"$ORACLE_HOME"),n("/jlib:\\"),s("span",{class:"token variable"},"$ORACLE_HOME"),n(`/rdbms/jlib

export PATH=\\`),s("span",{class:"token variable"},"$ORACLE_HOME"),n("/bin:\\"),s("span",{class:"token environment constant"},"$PATH"),n(`
EOF`)]),n(`
`),s("span",{class:"token function"},"sleep"),n(),s("span",{class:"token number"},"1"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"InstallSoftware"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"10.unzip oracle database package ..."'),n(`
`),s("span",{class:"token function"},"su"),n(" - oracle "),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOF
cd `),s("span",{class:"token variable"},"$ORACLE_HOME"),n(`
unzip -oq `),s("span",{class:"token variable"},"$SOFTWARE_DIR"),n(`/LINUX.X64_180000_db_home.zip

echo "11.install database software ..."
./runInstaller -ignorePrereq -waitforcompletion -silent                        \\
    -responseFile `),s("span",{class:"token variable"},"${ORACLE_HOME}"),n(`/install/response/db_install.rsp               \\
    oracle.install.option=INSTALL_DB_SWONLY                                    \\
    ORACLE_HOSTNAME=`),s("span",{class:"token variable"},"${ORACLE_HOSTNAME}"),n(`                                         \\
    UNIX_GROUP_NAME=oinstall                                                   \\
    INVENTORY_LOCATION=`),s("span",{class:"token variable"},"${ORACLE_ORA_INVENTORY}"),n(`                                 \\
    SELECTED_LANGUAGES=en                                                      \\
    ORACLE_HOME=`),s("span",{class:"token variable"},"${ORACLE_HOME}"),n(`                                                 \\
    ORACLE_BASE=`),s("span",{class:"token variable"},"${ORACLE_BASE}"),n(`                                                 \\
    oracle.install.db.InstallEdition=EE                                        \\
    oracle.install.db.OSDBA_GROUP=dba                                          \\
    oracle.install.db.OSOPER_GROUP=oper                                         \\
    oracle.install.db.OSBACKUPDBA_GROUP=dba                                    \\
    oracle.install.db.OSDGDBA_GROUP=dba                                        \\
    oracle.install.db.OSKMDBA_GROUP=dba                                        \\
    oracle.install.db.OSRACDBA_GROUP=dba                                       \\
    SECURITY_UPDATES_VIA_MYORACLESUPPORT=false                                 \\
    DECLINE_SECURITY_UPDATES=true
EOF`)]),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n(`"Run '`),s("span",{class:"token variable"},"${ORACLE_ORA_INVENTORY}"),n(`/orainstRoot.sh' as root ..."`)]),n(`
`),s("span",{class:"token variable"},"${ORACLE_ORA_INVENTORY}"),n(`/orainstRoot.sh
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n(`"Run '`),s("span",{class:"token variable"},"${ORACLE_HOME}"),n(`/root.sh' as root ..."`)]),n(`
`),s("span",{class:"token variable"},"${ORACLE_HOME}"),n(`/root.sh
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"CreateNetca"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"12.Create Netca ..."'),n(`
`),s("span",{class:"token function"},"su"),n(" - oracle "),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOF
echo "12.Create the listener ..."
netca -silent -responsefile `),s("span",{class:"token variable"},"${ORACLE_HOME}"),n(`/assistants/netca/netca.rsp
echo "12.Start the listener ..."
lsnrctl start
EOF`)]),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"CreateDatabase"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"13.Create Database ..."'),n(`
`),s("span",{class:"token function"},"su"),n(" - oracle "),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOF
echo "12.Start the listener ..."
lsnrctl start

dbca -silent -createDatabase                                                   \\
     -templateName General_Purpose.dbc                                         \\
     -gdbname `),s("span",{class:"token variable"},"${ORACLE_SID}"),n(" -sid  "),s("span",{class:"token variable"},"${ORACLE_SID}"),n(` -responseFile NO_VALUE         \\
     -characterSet `),s("span",{class:"token variable"},"$ORACLE_CHARSET"),n(`                                                  \\
     -sysPassword `),s("span",{class:"token variable"},"$ORACLE_SYS_PASSWORD"),n(`                                                     \\
     -systemPassword `),s("span",{class:"token variable"},"$ORACLE_SYSTEM_PASSWORD"),n(`                                               \\
     -createAsContainerDatabase true                                           \\
     -numberOfPDBs 1                                                           \\
     -pdbName `),s("span",{class:"token variable"},"${ORACLE_PDB_NAME}"),n(`                                                      \\
     -pdbAdminPassword `),s("span",{class:"token variable"},"$ORACLE_PDB_ADMIN_PASSWORD"),n(`                                           \\
     -databaseType MULTIPURPOSE                                                \\
     -memoryMgmtType auto_sga                                                  \\
     -totalMemory `),s("span",{class:"token variable"},"$ORACLE_TOTAL_MEMORY"),n(`                                         \\
     -storageType FS                                                           \\
     -datafileDestination "`),s("span",{class:"token variable"},"${ORACLE_DATA_DIR}"),n(`"                                        \\
     -enableArchive  `),s("span",{class:"token variable"},"${ORACLE_ARCHIVE}"),n(`                                                 \\
     -recoveryAreaSize  `),s("span",{class:"token variable"},"${ORACLE_RECOVERY_AREA_SIZE}"),n(`                           \\
     -recoveryAreaDestination  "`),s("span",{class:"token variable"},"${ORACLE_RECOVERY_AREA_DIR}"),n(`"                   \\
     -redoLogFileSize 50                                                       \\
     -emConfiguration NONE                                                     \\
     -ignorePreReqs

echo "Successfully Insall Oracle `),s("span",{class:"token variable"},"$ORACLE_DATABASE_VERSION"),n(` !"
EOF`)]),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"EnableStartup"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Edit /etc/oratab ..."'),n(`
`),s("span",{class:"token function"},"cp"),n(` /etc/oratab /etc/oratab.orabak
`),s("span",{class:"token function"},"sed"),n(),s("span",{class:"token parameter variable"},"-i"),n(),s("span",{class:"token string"},[n('"s#'),s("span",{class:"token variable"},"${ORACLE_SID}"),n(":"),s("span",{class:"token variable"},"${ORACLE_HOME}"),n(":N#"),s("span",{class:"token variable"},"${ORACLE_SID}"),n(":"),s("span",{class:"token variable"},"${ORACLE_HOME}"),n(':Y#g"')]),n(` /etc/oratab
`),s("span",{class:"token function"},"su"),n(" - oracle "),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOFOUT
sqlplus / as sysdba <<EOF
alter system set db_create_file_dest='`),s("span",{class:"token variable"},"${ORACLE_DATA_DIR}"),n(`';
alter pluggable database `),s("span",{class:"token variable"},"${ORACLE_PDB_NAME}"),n(` save state;
exit;
EOF
EOFOUT`)]),n(`

`),s("span",{class:"token function"},"mkdir"),n(),s("span",{class:"token parameter variable"},"-p"),n(),s("span",{class:"token variable"},"${DBA_HOME}"),n(`/scripts
`),s("span",{class:"token function"},"chown"),n(" oracle:root "),s("span",{class:"token parameter variable"},"-R"),n(),s("span",{class:"token variable"},"${DBA_HOME}"),n(`

`),s("span",{class:"token function"},"su"),n(" - oracle "),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOF
touch `),s("span",{class:"token variable"},"${DBA_HOME}"),n(`/scripts/startup_db.sh
chmod a+x `),s("span",{class:"token variable"},"${DBA_HOME}"),n(`/scripts/startup_db.sh

cat > `),s("span",{class:"token variable"},"${DBA_HOME}"),n(`/scripts/startup_db.sh <<"EOFINNER"
#! /bin/sh
# description: Oracle auto start-stop script.
#
# Set ORA_HOME to be equivalent to the \\`),s("span",{class:"token variable"},"$ORACLE_HOME"),n(`
# from which you wish to execute dbstart and dbshut;
#
# Set ORA_OWNER to the user id of the owner of the
# Oracle database in ORACLE_HOME.

ORA_HOME=`),s("span",{class:"token variable"},"$ORACLE_HOME"),n(`
ORA_OWNER=oracle
CURRENT_USER=\\`),s("span",{class:"token variable"},[s("span",{class:"token variable"},"`"),n("whoami"),s("span",{class:"token punctuation"},"\\"),s("span",{class:"token variable"},"`")]),n(`

case "\\`),s("span",{class:"token variable"},"$1"),n(`" in
'start') 
    # Start the Oracle databases:
    # The following command assumes that the oracle login
    # will not prompt the user for any values
    # Remove "&" if you don't want startup as a background process.
    if [ "\\`),s("span",{class:"token variable"},"$ORA_OWNER"),n('" = "\\'),s("span",{class:"token variable"},"$CURRENT_USER"),n(`" ]; then
    \\`),s("span",{class:"token variable"},"$ORA_HOME"),n("/bin/dbstart \\"),s("span",{class:"token variable"},"$ORA_HOME"),n(`
    else
    su - \\`),s("span",{class:"token variable"},"$ORA_OWNER"),n(' -c "\\'),s("span",{class:"token variable"},"$ORA_HOME"),n("/bin/dbstart \\"),s("span",{class:"token variable"},"$ORA_HOME"),n(`" 
    fi
    touch /var/lock/subsys/dbora
    break
    ;;

'stop')
    # Stop the Oracle databases:
    # The following command assumes that the oracle login
    # will not prompt the user for any values
    if [ "\\`),s("span",{class:"token variable"},"$ORA_OWNER"),n('" = "\\'),s("span",{class:"token variable"},"$CURRENT_USER"),n(`" ]; then
    \\`),s("span",{class:"token variable"},"$ORA_HOME"),n("/bin/dbshut \\"),s("span",{class:"token variable"},"$ORA_HOME"),n(`
    else
    su - \\`),s("span",{class:"token variable"},"$ORA_OWNER"),n(' -c "\\'),s("span",{class:"token variable"},"$ORA_HOME"),n("/bin/dbshut \\"),s("span",{class:"token variable"},"$ORA_HOME"),n(`" &
    fi
    rm -f /var/lock/subsys/dbora
    break
    ;;
   *)
    echo "usage: `),s("span",{class:"token variable"},"$0"),n(` {start|stop}"
    exit
    ;;
esac
EOF`)]),n(`INNER
EOF

`),s("span",{class:"token function"},"cat"),n(),s("span",{class:"token operator"},">"),n(" /lib/systemd/system/dbora.service "),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOF
[Unit]
Description=The Oracle Database Service
After=syslog.target network.target

[Service]
# systemd ignores PAM limits, so set any necessary limits in the service.
# Not really a bug, but a feature.
# https://bugzilla.redhat.com/show_bug.cgi?id=754285
LimitMEMLOCK=infinity
LimitNOFILE=65535

#Type=simple
# idle: similar to simple, the actual execution of the service binary is delayed
#       until all jobs are finished, which avoids mixing the status output with shell output of services.
RemainAfterExit=yes
User=oracle
Group=oinstall
Restart=no
ExecStart=/bin/bash -c '`),s("span",{class:"token variable"},"${DBA_HOME}"),n(`/scripts/startup_db.sh start'
ExecStop=/bin/bash -c '`),s("span",{class:"token variable"},"${DBA_HOME}"),n(`/scripts/startup_db.sh stop'

[Install]
WantedBy=multi-user.target
EOF`)]),n(`

`),s("span",{class:"token comment"},"# autostart after os reboot"),n(`
systemctl `),s("span",{class:"token builtin class-name"},"enable"),n(` dbora.service

`),s("span",{class:"token comment"},"# add allow port to firewalld"),n(`
firewall-cmd --add-port`),s("span",{class:"token operator"},"="),s("span",{class:"token number"},"1521"),n(),s("span",{class:"token parameter variable"},"--zone"),s("span",{class:"token operator"},"="),n("public "),s("span",{class:"token parameter variable"},"--permanent"),n(`
firewall-cmd `),s("span",{class:"token parameter variable"},"--reload"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"Usage"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
`),s("span",{class:"token function"},"cat"),n(),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOF
Usage: `),s("span",{class:"token variable"},"$0"),n(` -h|--helpUsage, help message.
       `),s("span",{class:"token variable"},"$0"),n(` -d|--installDependency, install oracle dependency.
       `),s("span",{class:"token variable"},"$0"),n(` -a|--installAll, install dependency,database software,create netca,create database.     
       `),s("span",{class:"token variable"},"$0"),n(` -s|--installSoftware, install database software. 
       `),s("span",{class:"token variable"},"$0"),n(` -c|--createDatabase, create database.
       `),s("span",{class:"token variable"},"$0"),n(` -e|--enable, enable database auto startup after system boot/reboot.
       `),s("span",{class:"token variable"},"$0"),n(` -p|--package, download database package.
EOF`)]),n(`
`),s("span",{class:"token punctuation"},"}"),n(`


`),s("span",{class:"token assign-left variable"},"ARGS"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"`"),n("getopt "),s("span",{class:"token parameter variable"},"-o"),n(" hdasncep "),s("span",{class:"token parameter variable"},"--long"),n(" help,installDependency,installAll,installSoftware,createNetca,createDatabase,enable,package "),s("span",{class:"token parameter variable"},"-n"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$0"),n('"')]),n("  -- "),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$@"),n('"')]),s("span",{class:"token variable"},"`")]),n(`
`),s("span",{class:"token builtin class-name"},"eval"),n(),s("span",{class:"token builtin class-name"},"set"),n(" --  "),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$ARGS"),n('"')]),n(`
`),s("span",{class:"token keyword"},"while"),n(),s("span",{class:"token boolean"},"true"),n(`
`),s("span",{class:"token keyword"},"do"),n(`
`),s("span",{class:"token keyword"},"case"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$1"),n('"')]),n(),s("span",{class:"token keyword"},"in"),n(`
    -h`),s("span",{class:"token operator"},"|"),n("--help"),s("span",{class:"token punctuation"},")"),n(`
    Usage
    `),s("span",{class:"token builtin class-name"},"shift"),n(),s("span",{class:"token number"},"2"),n(`
    `),s("span",{class:"token builtin class-name"},"break"),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    -d`),s("span",{class:"token operator"},"|"),n("--installDependency"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"InstallDependency ..."'),n(`
    `),s("span",{class:"token assign-left variable"},"STARTTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    InstallDependency
    `),s("span",{class:"token assign-left variable"},"ENDTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"Installation Elapsed: $[ '),s("span",{class:"token variable"},"$ENDTIME"),n(" - "),s("span",{class:"token variable"},"$STARTTIME"),n(' ] s"')]),n(`
    `),s("span",{class:"token builtin class-name"},"shift"),n(),s("span",{class:"token number"},"2"),n(`
    `),s("span",{class:"token builtin class-name"},"break"),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    -a`),s("span",{class:"token operator"},"|"),n("--installAll"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"InstallAll ..."'),n(`
    `),s("span",{class:"token assign-left variable"},"STARTTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    InstallDependency
    InstallSoftware
    `),s("span",{class:"token comment"},"# CreateNetca"),n(`
    CreateDatabase
    `),s("span",{class:"token assign-left variable"},"ENDTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"Installation Elapsed: $[ '),s("span",{class:"token variable"},"$ENDTIME"),n(" - "),s("span",{class:"token variable"},"$STARTTIME"),n(' ] s"')]),n(`
    `),s("span",{class:"token builtin class-name"},"shift"),n(),s("span",{class:"token number"},"2"),n(`
    `),s("span",{class:"token builtin class-name"},"break"),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    -s`),s("span",{class:"token operator"},"|"),n("--installSoftware"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"InstallSoftware ..."'),n(`
    `),s("span",{class:"token assign-left variable"},"STARTTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    InstallDependency
    InstallSoftware
    `),s("span",{class:"token assign-left variable"},"ENDTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"Installation Elapsed: $[ '),s("span",{class:"token variable"},"$ENDTIME"),n(" - "),s("span",{class:"token variable"},"$STARTTIME"),n(' ] s"')]),n(`
    `),s("span",{class:"token builtin class-name"},"shift"),n(),s("span",{class:"token number"},"2"),n(`
    `),s("span",{class:"token builtin class-name"},"break"),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    -n`),s("span",{class:"token operator"},"|"),n("--createNetca"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Create Netca ..."'),n(`
    `),s("span",{class:"token assign-left variable"},"STARTTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    CreateNetca
    `),s("span",{class:"token assign-left variable"},"ENDTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"Create Netca Elapsed: $[ '),s("span",{class:"token variable"},"$ENDTIME"),n(" - "),s("span",{class:"token variable"},"$STARTTIME"),n(' ] s"')]),n(`
    `),s("span",{class:"token builtin class-name"},"shift"),n(),s("span",{class:"token number"},"2"),n(`
    `),s("span",{class:"token builtin class-name"},"break"),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    -c`),s("span",{class:"token operator"},"|"),n("--createDatabase"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"CreateDatabase ..."'),n(`
    `),s("span",{class:"token assign-left variable"},"STARTTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    CreateDatabase
    `),s("span",{class:"token assign-left variable"},"ENDTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"Installation Elapsed: $[ '),s("span",{class:"token variable"},"$ENDTIME"),n(" - "),s("span",{class:"token variable"},"$STARTTIME"),n(' ] s"')]),n(`
    `),s("span",{class:"token builtin class-name"},"shift"),n(),s("span",{class:"token number"},"2"),n(`
    `),s("span",{class:"token builtin class-name"},"break"),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    -e`),s("span",{class:"token operator"},"|"),n("--enable"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"EnableStartup ..."'),n(`
    `),s("span",{class:"token assign-left variable"},"STARTTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    EnableStartup
    `),s("span",{class:"token assign-left variable"},"ENDTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"EnableStartup Elapsed: $[ '),s("span",{class:"token variable"},"$ENDTIME"),n(" - "),s("span",{class:"token variable"},"$STARTTIME"),n(' ] s"')]),n(`
    `),s("span",{class:"token builtin class-name"},"shift"),n(),s("span",{class:"token number"},"2"),n(`
    `),s("span",{class:"token builtin class-name"},"break"),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    -p`),s("span",{class:"token operator"},"|"),n("--package"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Downloading Package ..."'),n(`
    `),s("span",{class:"token assign-left variable"},"STARTTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    DownloadPackages
    `),s("span",{class:"token assign-left variable"},"ENDTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"Downloading Package Elapsed: $[ '),s("span",{class:"token variable"},"$ENDTIME"),n(" - "),s("span",{class:"token variable"},"$STARTTIME"),n(' ] s"')]),n(`
    `),s("span",{class:"token builtin class-name"},"shift"),n(),s("span",{class:"token number"},"2"),n(`
    `),s("span",{class:"token builtin class-name"},"break"),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    *`),s("span",{class:"token punctuation"},")"),n(`
    Usage
    `),s("span",{class:"token builtin class-name"},"exit"),n(),s("span",{class:"token number"},"1"),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token keyword"},"esac"),n(`
`),s("span",{class:"token keyword"},"done"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),E=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token shebang important"},"#!/bin/bash"),n(`
`),s("span",{class:"token comment"},"############ Author begin ###############"),n(`
`),s("span",{class:"token comment"},"## Author: Ableit"),n(`
`),s("span",{class:"token comment"},"## Date: 2022-07-20"),n(`
`),s("span",{class:"token comment"},"############ Author end ###############"),n(`

`),s("span",{class:"token comment"},"############ Env & Virables begin ###############"),n(`
`),s("span",{class:"token comment"},"# custom settings"),n(`
`),s("span",{class:"token assign-left variable"},"DBA_HOME"),s("span",{class:"token operator"},"="),n(`/opt/database/dba
`),s("span",{class:"token assign-left variable"},"SOFTWARE_DIR"),s("span",{class:"token operator"},"="),n(`/opt/package

`),s("span",{class:"token assign-left variable"},[s("span",{class:"token environment constant"},"HOSTNAME")]),s("span",{class:"token operator"},"="),n(`testdb-node01
`),s("span",{class:"token assign-left variable"},"IPADDR"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"`"),s("span",{class:"token function"},"ip"),n(),s("span",{class:"token parameter variable"},"-4"),n(" addr show dev eth0 "),s("span",{class:"token operator"},"|"),n(),s("span",{class:"token function"},"grep"),n(),s("span",{class:"token parameter variable"},"-oP"),n(),s("span",{class:"token string"},"'(?<=inet\\s)\\d+(\\.\\d+){3}'"),s("span",{class:"token variable"},"`")]),n(`
`),s("span",{class:"token assign-left variable"},"ORACLE_OS_PASSWORD"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"YsDB_GreatMen2022"'),n(`

`),s("span",{class:"token assign-left variable"},"ORACLE_UNQNAME"),s("span",{class:"token operator"},"="),n(`testdb
`),s("span",{class:"token assign-left variable"},"ORACLE_SID"),s("span",{class:"token operator"},"="),n(`testdb
`),s("span",{class:"token assign-left variable"},"ORACLE_PDB_NAME"),s("span",{class:"token operator"},"="),n(`testpdb
`),s("span",{class:"token assign-left variable"},"ORACLE_CHARSET"),s("span",{class:"token operator"},"="),n(`AL32UTF8
`),s("span",{class:"token assign-left variable"},"ORACLE_SYS_PASSWORD"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"YsDB_GreatMen2022"'),n(`
`),s("span",{class:"token assign-left variable"},"ORACLE_SYSTEM_PASSWORD"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"YsDB_GreatMen2022"'),n(`
`),s("span",{class:"token assign-left variable"},"ORACLE_PDB_ADMIN_PASSWORD"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"YsDB_GreatMen2022"'),n(`

`),s("span",{class:"token assign-left variable"},"ORACLE_BASE_APP_DIR"),s("span",{class:"token operator"},"="),n(`/u01
`),s("span",{class:"token assign-left variable"},"ORACLE_BASE_DATA_DIR"),s("span",{class:"token operator"},"="),n(`/data
`),s("span",{class:"token assign-left variable"},"ORACLE_DATABASE_VERSION"),s("span",{class:"token operator"},"="),s("span",{class:"token number"},"19.3"),n(`.0.0
`),s("span",{class:"token comment"},"# 64G"),n(`
`),s("span",{class:"token assign-left variable"},"ORACLE_RECOVERY_AREA_SIZE"),s("span",{class:"token operator"},"="),n("$"),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token number"},"64"),n("*1024 "),s("span",{class:"token punctuation"},"]"),n(`
`),s("span",{class:"token assign-left variable"},"ORACLE_ARCHIVE"),s("span",{class:"token operator"},"="),n(`true

`),s("span",{class:"token comment"},"# Oracle Auto Settings"),n(`
`),s("span",{class:"token assign-left variable"},"TMP"),s("span",{class:"token operator"},"="),n(`/tmp
`),s("span",{class:"token assign-left variable"},"ORACLE_HOSTNAME"),s("span",{class:"token operator"},"="),s("span",{class:"token environment constant"},"$HOSTNAME"),n(`
`),s("span",{class:"token assign-left variable"},"ORACLE_BASE"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$ORACLE_BASE_APP_DIR"),n(`/app/oracle
`),s("span",{class:"token assign-left variable"},"ORACLE_HOME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$ORACLE_BASE"),n("/product/"),s("span",{class:"token variable"},"$ORACLE_DATABASE_VERSION"),n(`/db_1
`),s("span",{class:"token assign-left variable"},"ORACLE_DATA_DIR"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$ORACLE_BASE_DATA_DIR"),n(`/app/oracle/oradata
`),s("span",{class:"token assign-left variable"},"ORACLE_ORA_INVENTORY"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$ORACLE_BASE_APP_DIR"),n(`/app/oraInventory
`),s("span",{class:"token assign-left variable"},"ORACLE_RECOVERY_AREA_DIR"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$ORACLE_BASE_DATA_DIR"),n(`/app/oracle/fast_recovery_area

`),s("span",{class:"token comment"},"# os auto settings"),n(`
`),s("span",{class:"token assign-left variable"},"OS_MEMORY"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"`"),s("span",{class:"token function"},"free"),n(" -b"),s("span",{class:"token operator"},"|"),s("span",{class:"token function"},"grep"),n(" Mem:"),s("span",{class:"token operator"},"|"),s("span",{class:"token function"},"awk"),n(" -F"),s("span",{class:"token string"},"' '"),n(),s("span",{class:"token string"},"'{print $2}'"),s("span",{class:"token variable"},"`")]),n(`
`),s("span",{class:"token assign-left variable"},"OS_SHMMAX"),s("span",{class:"token operator"},"="),n("$"),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},"$OS_MEMORY"),n(" * "),s("span",{class:"token number"},"2"),n(" / "),s("span",{class:"token number"},"3"),n(),s("span",{class:"token punctuation"},"]"),n(`
`),s("span",{class:"token assign-left variable"},"OS_SHMALL"),s("span",{class:"token operator"},"="),n("$"),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},"$OS_SHMMAX"),n(" / "),s("span",{class:"token number"},"1024"),n(),s("span",{class:"token punctuation"},"]"),n(`
`),s("span",{class:"token assign-left variable"},"ORACLE_TOTAL_MEMORY"),s("span",{class:"token operator"},"="),n("$"),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},"$OS_SHMMAX"),n(" / "),s("span",{class:"token number"},"1024"),n(" / "),s("span",{class:"token number"},"1024"),n(),s("span",{class:"token punctuation"},"]"),n(`
`),s("span",{class:"token function"},"hostname"),n(),s("span",{class:"token environment constant"},"$HOSTNAME"),n(`
`),s("span",{class:"token assign-left variable"},"OS_VERSION_ID"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"`"),s("span",{class:"token function"},"cat"),n(" /etc/os-release "),s("span",{class:"token operator"},"|"),s("span",{class:"token function"},"grep"),n(),s("span",{class:"token string"},"'^VERSION_ID='"),s("span",{class:"token operator"},"|"),s("span",{class:"token function"},"awk"),n(" -F"),s("span",{class:"token string"},"'='"),n(),s("span",{class:"token string"},"'{print $2}'"),s("span",{class:"token variable"},"`")]),n(`
`),s("span",{class:"token comment"},"############ Env & Virables end ###############"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"DownloadPackages"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Downloading package ..."'),n(`
    `),s("span",{class:"token function"},"mkdir"),n(),s("span",{class:"token parameter variable"},"-p"),n(),s("span",{class:"token variable"},"$SOFTWARE_DIR"),n(`
    yum `),s("span",{class:"token function"},"install"),n(),s("span",{class:"token parameter variable"},"-y"),n(),s("span",{class:"token function"},"wget"),n(`
    `),s("span",{class:"token function"},"wget"),n(),s("span",{class:"token parameter variable"},"-O"),n(),s("span",{class:"token variable"},"$SOFTWARE_DIR"),n(`/LINUX.X64_193000_db_home.zip ftp://10.10.12.158/pub/oracle/LINUX.X64_193000_db_home.zip
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"InstallDependency"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"0.Set Locale ..."'),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token assign-left variable"},[s("span",{class:"token environment constant"},"LANG")]),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"en_US.UTF-8"'),n(),s("span",{class:"token operator"},">"),n(` /etc/locale.conf
localectl set-locale `),s("span",{class:"token assign-left variable"},[s("span",{class:"token environment constant"},"LANG")]),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"en_US.UTF-8"'),n(`
`),s("span",{class:"token builtin class-name"},"export"),n(),s("span",{class:"token assign-left variable"},[s("span",{class:"token environment constant"},"LANG")]),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"en_US.UTF-8"'),n(`

`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"1.Disable selinux and stop firewalld ..."'),n(`
`),s("span",{class:"token function"},"cp"),n(` /etc/selinux/config /etc/selinux/config.orabak
`),s("span",{class:"token function"},"sed"),n(),s("span",{class:"token parameter variable"},"-i"),n(),s("span",{class:"token string"},"'s/^SELINUX=enforcing/SELINUX=disabled/g'"),n(` /etc/selinux/config 
setenforce `),s("span",{class:"token number"},"0"),n(`
systemctl stop firewalld
systemctl disable firewalld
`),s("span",{class:"token function"},"sleep"),n(),s("span",{class:"token number"},"1"),n(`

`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"2.Config hostname ..."'),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token environment constant"},"$HOSTNAME"),n(),s("span",{class:"token operator"},">"),n(` /etc/hostname
`),s("span",{class:"token function"},"sleep"),n(),s("span",{class:"token number"},"1"),n(`

`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"3.Config hosts ..."'),n(`
`),s("span",{class:"token function"},"cp"),n(` /etc/hosts /etc/hosts.orabak
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token variable"},"$IPADDR"),s("span",{class:"token string"},"'   '"),s("span",{class:"token environment constant"},"$HOSTNAME"),n(),s("span",{class:"token operator"},">>"),n(` /etc/hosts
`),s("span",{class:"token function"},"sleep"),n(),s("span",{class:"token number"},"1"),n(`

`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"4.Config sysctl.conf ... "'),n(`
`),s("span",{class:"token function"},"cp"),n(` /etc/sysctl.conf /etc/sysctl.conf.orabak

`),s("span",{class:"token function"},"cat"),n(),s("span",{class:"token operator"},">>"),n(" /etc/sysctl.conf "),s("span",{class:"token operator"},"<<"),n(),s("span",{class:"token string"},[n(`EOF
fs.file-max = 6815744
kernel.sem = 250 32000 100 128
kernel.shmmni = 4096
kernel.shmall = `),s("span",{class:"token variable"},"$OS_SHMALL"),n(` 
kernel.shmmax = `),s("span",{class:"token variable"},"$OS_SHMMAX"),n(`
kernel.panic_on_oops = 1
net.core.rmem_default = 262144
net.core.rmem_max = 4194304
net.core.wmem_default = 262144
net.core.wmem_max = 1048576
net.ipv4.conf.all.rp_filter = 2
net.ipv4.conf.default.rp_filter = 2
fs.aio-max-nr = 1048576
net.ipv4.ip_local_port_range = 9000 65500
EOF`)]),n(`
`),s("span",{class:"token function"},"sysctl"),n(),s("span",{class:"token parameter variable"},"-p"),n(`
`),s("span",{class:"token function"},"sleep"),n(),s("span",{class:"token number"},"1"),n(`

`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"5.Set Resource Usage Limit ..."'),n(`
`),s("span",{class:"token function"},"cp"),n(` /etc/security/limits.conf /etc/security/limits.conf.orabak
`),s("span",{class:"token function"},"cat"),n(),s("span",{class:"token operator"},">>"),n(" /etc/security/limits.conf "),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},`EOF
oracle   soft   nofile    1024
oracle   hard   nofile    65536
oracle   soft   nproc    16384
oracle   hard   nproc    16384
oracle   soft   stack    10240
oracle   hard   stack    32768
oracle   hard   memlock    134217728
oracle   soft   memlock    134217728
EOF`),n(`

`),s("span",{class:"token function"},"cp"),n(` /etc/pam.d/login /etc/pam.d/login.orabak
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"session   required    pam_limits.so"'),n(),s("span",{class:"token operator"},">>"),n(` /etc/pam.d/login
`),s("span",{class:"token function"},"sleep"),n(),s("span",{class:"token number"},"1"),n(`
`),s("span",{class:"token function"},"sleep"),n(),s("span",{class:"token number"},"1"),n(`

`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"6.Install Dependency Packages ..."'),n(`
yum `),s("span",{class:"token function"},"install"),n(),s("span",{class:"token parameter variable"},"-y"),n("  "),s("span",{class:"token function"},"bc"),n(" binutils compat-libcap1 compat-libstdc++-33 "),s("span",{class:"token punctuation"},"\\"),n(`
dtrace-utils elfutils-libelf elfutils-libelf-devel fontconfig-devel `),s("span",{class:"token punctuation"},"\\"),n(`
glibc glibc-devel ksh libaio libaio-devel libdtrace-ctf-devel libgcc `),s("span",{class:"token punctuation"},"\\"),n(`
librdmacm-devel libstdc++ libstdc++-devel libX11 libXau libxcb libXi `),s("span",{class:"token punctuation"},"\\"),n(`
libXrender libXrender-devel libXtst `),s("span",{class:"token function"},"make"),n(" net-tools nfs-utils "),s("span",{class:"token punctuation"},"\\"),n(`
policycoreutils policycoreutils-python python python-configshell `),s("span",{class:"token punctuation"},"\\"),n(`
python-rtslib python-six smartmontools sysstat targetcli unixODBC `),s("span",{class:"token function"},"unzip"),n(`
`),s("span",{class:"token function"},"sleep"),n(),s("span",{class:"token number"},"1"),n(`

`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"7.Add Oracle Group and User ..."'),n(`
`),s("span",{class:"token function"},"groupadd"),n(),s("span",{class:"token parameter variable"},"-g"),n(),s("span",{class:"token number"},"54321"),n(` oinstall
`),s("span",{class:"token function"},"groupadd"),n(),s("span",{class:"token parameter variable"},"-g"),n(),s("span",{class:"token number"},"54322"),n(` dba
`),s("span",{class:"token function"},"groupadd"),n(),s("span",{class:"token parameter variable"},"-g"),n(),s("span",{class:"token number"},"54323"),n(` oper
`),s("span",{class:"token function"},"useradd"),n(),s("span",{class:"token parameter variable"},"-u"),n(),s("span",{class:"token number"},"54321"),n(),s("span",{class:"token parameter variable"},"-g"),n(" oinstall "),s("span",{class:"token parameter variable"},"-G"),n(` dba,oper oracle
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token variable"},"$ORACLE_OS_PASSWORD"),n(),s("span",{class:"token operator"},"|"),n(),s("span",{class:"token function"},"passwd"),n(),s("span",{class:"token parameter variable"},"--stdin"),n(` oracle
`),s("span",{class:"token function"},"sleep"),n(),s("span",{class:"token number"},"1"),n(`

`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"8.Create Directory ..."'),n(`
`),s("span",{class:"token function"},"mkdir"),n(),s("span",{class:"token parameter variable"},"-p"),n(),s("span",{class:"token variable"},"$ORACLE_HOME"),n(),s("span",{class:"token variable"},"$ORACLE_DATA_DIR"),n(),s("span",{class:"token variable"},"$ORACLE_ORA_INVENTORY"),n(),s("span",{class:"token variable"},"$ORACLE_RECOVERY_AREA_DIR"),n(`
`),s("span",{class:"token function"},"chown"),n(),s("span",{class:"token parameter variable"},"-R"),n(" oracle:oinstall "),s("span",{class:"token variable"},"$ORACLE_BASE_APP_DIR"),n(),s("span",{class:"token variable"},"$ORACLE_BASE_DATA_DIR"),n(),s("span",{class:"token variable"},"$ORACLE_RECOVERY_AREA_DIR"),n(`
`),s("span",{class:"token function"},"chmod"),n(),s("span",{class:"token parameter variable"},"-R"),n(),s("span",{class:"token number"},"775"),n(),s("span",{class:"token variable"},"$ORACLE_BASE_APP_DIR"),n(),s("span",{class:"token variable"},"$ORACLE_BASE_DATA_DIR"),n(),s("span",{class:"token variable"},"$ORACLE_RECOVERY_AREA_DIR"),n(`
`),s("span",{class:"token function"},"sleep"),n(),s("span",{class:"token number"},"1"),n(`

`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"9.Set Env ..."'),n(`
`),s("span",{class:"token function"},"cp"),n(` /home/oracle/.bash_profile /home/oracle/.bash_profile.orabak
`),s("span",{class:"token function"},"cat"),n(),s("span",{class:"token operator"},">>"),n(" /home/oracle/.bash_profile "),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOF
# Oracle ENV
export TMP=`),s("span",{class:"token variable"},"$TMP"),n(`
export TMPDIR=`),s("span",{class:"token variable"},"$TMP"),n(`

export ORACLE_HOSTNAME=`),s("span",{class:"token variable"},"$ORACLE_HOSTNAME"),n(`
export ORACLE_UNQNAME=`),s("span",{class:"token variable"},"$ORACLE_UNQNAME"),n(`
export ORACLE_SID=`),s("span",{class:"token variable"},"$ORACLE_SID"),n(`
export PDB_NAME=`),s("span",{class:"token variable"},"$ORACLE_PDB_NAME"),n(`
export ORACLE_BASE=`),s("span",{class:"token variable"},"$ORACLE_BASE"),n(`
export ORACLE_HOME=`),s("span",{class:"token variable"},"$ORACLE_HOME"),n(`
export ORA_INVENTORY=`),s("span",{class:"token variable"},"$ORACLE_ORA_INVENTORY"),n(`
export DATA_DIR=`),s("span",{class:"token variable"},"$ORACLE_DATA_DIR"),n(`
export ORACLE_HOME_LISTNER=\\`),s("span",{class:"token variable"},"$ORACLE_HOME"),n(`

export LD_LIBRARY_PATH=\\`),s("span",{class:"token variable"},"$ORACLE_HOME"),n(`/lib:/lib:/usr/lib
export CLASSPATH=\\`),s("span",{class:"token variable"},"$ORACLE_HOME"),n("/jlib:\\"),s("span",{class:"token variable"},"$ORACLE_HOME"),n(`/rdbms/jlib

export PATH=\\`),s("span",{class:"token variable"},"$ORACLE_HOME"),n("/bin:\\"),s("span",{class:"token environment constant"},"$PATH"),n(`
EOF`)]),n(`
`),s("span",{class:"token function"},"sleep"),n(),s("span",{class:"token number"},"1"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"InstallSoftware"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"10.unzip oracle database package ..."'),n(`
`),s("span",{class:"token function"},"su"),n(" - oracle "),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOF
cd `),s("span",{class:"token variable"},"$ORACLE_HOME"),n(`
unzip -oq `),s("span",{class:"token variable"},"$SOFTWARE_DIR"),n(`/LINUX.X64_193000_db_home.zip

echo "11.install database software ..."
./runInstaller -ignorePrereq -waitforcompletion -silent                        \\
    -responseFile `),s("span",{class:"token variable"},"${ORACLE_HOME}"),n(`/install/response/db_install.rsp               \\
    oracle.install.option=INSTALL_DB_SWONLY                                    \\
    ORACLE_HOSTNAME=`),s("span",{class:"token variable"},"${ORACLE_HOSTNAME}"),n(`                                         \\
    UNIX_GROUP_NAME=oinstall                                                   \\
    INVENTORY_LOCATION=`),s("span",{class:"token variable"},"${ORACLE_ORA_INVENTORY}"),n(`                                 \\
    SELECTED_LANGUAGES=en                                                      \\
    ORACLE_HOME=`),s("span",{class:"token variable"},"${ORACLE_HOME}"),n(`                                                 \\
    ORACLE_BASE=`),s("span",{class:"token variable"},"${ORACLE_BASE}"),n(`                                                 \\
    oracle.install.db.InstallEdition=EE                                        \\
    oracle.install.db.OSDBA_GROUP=dba                                          \\
    oracle.install.db.OSOPER_GROUP=oper                                         \\
    oracle.install.db.OSBACKUPDBA_GROUP=dba                                    \\
    oracle.install.db.OSDGDBA_GROUP=dba                                        \\
    oracle.install.db.OSKMDBA_GROUP=dba                                        \\
    oracle.install.db.OSRACDBA_GROUP=dba                                       \\
    SECURITY_UPDATES_VIA_MYORACLESUPPORT=false                                 \\
    DECLINE_SECURITY_UPDATES=true
EOF`)]),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n(`"Run '`),s("span",{class:"token variable"},"${ORACLE_ORA_INVENTORY}"),n(`/orainstRoot.sh' as root ..."`)]),n(`
`),s("span",{class:"token variable"},"${ORACLE_ORA_INVENTORY}"),n(`/orainstRoot.sh
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n(`"Run '`),s("span",{class:"token variable"},"${ORACLE_HOME}"),n(`/root.sh' as root ..."`)]),n(`
`),s("span",{class:"token variable"},"${ORACLE_HOME}"),n(`/root.sh
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"CreateNetca"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"12.Create Netca ..."'),n(`
`),s("span",{class:"token function"},"su"),n(" - oracle "),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOF
echo "12.Create the listener ..."
netca -silent -responsefile `),s("span",{class:"token variable"},"${ORACLE_HOME}"),n(`/assistants/netca/netca.rsp
echo "12.Start the listener ..."
lsnrctl start
EOF`)]),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"CreateDatabase"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"13.Create Database ..."'),n(`
`),s("span",{class:"token function"},"su"),n(" - oracle "),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOF
echo "12.Start the listener ..."
lsnrctl start

dbca -silent -createDatabase                                                   \\
     -templateName General_Purpose.dbc                                         \\
     -gdbname `),s("span",{class:"token variable"},"${ORACLE_SID}"),n(" -sid  "),s("span",{class:"token variable"},"${ORACLE_SID}"),n(` -responseFile NO_VALUE         \\
     -characterSet `),s("span",{class:"token variable"},"$ORACLE_CHARSET"),n(`                                                  \\
     -sysPassword `),s("span",{class:"token variable"},"$ORACLE_SYS_PASSWORD"),n(`                                                     \\
     -systemPassword `),s("span",{class:"token variable"},"$ORACLE_SYSTEM_PASSWORD"),n(`                                               \\
     -createAsContainerDatabase true                                           \\
     -numberOfPDBs 1                                                           \\
     -pdbName `),s("span",{class:"token variable"},"${ORACLE_PDB_NAME}"),n(`                                                      \\
     -pdbAdminPassword `),s("span",{class:"token variable"},"$ORACLE_PDB_ADMIN_PASSWORD"),n(`                                           \\
     -databaseType MULTIPURPOSE                                                \\
     -memoryMgmtType auto_sga                                                  \\
     -totalMemory `),s("span",{class:"token variable"},"$ORACLE_TOTAL_MEMORY"),n(`                                         \\
     -storageType FS                                                           \\
     -datafileDestination "`),s("span",{class:"token variable"},"${ORACLE_DATA_DIR}"),n(`"                                        \\
     -enableArchive  `),s("span",{class:"token variable"},"${ORACLE_ARCHIVE}"),n(`                                                 \\
     -recoveryAreaSize  `),s("span",{class:"token variable"},"${ORACLE_RECOVERY_AREA_SIZE}"),n(`                           \\
     -recoveryAreaDestination  "`),s("span",{class:"token variable"},"${ORACLE_RECOVERY_AREA_DIR}"),n(`"                   \\
     -redoLogFileSize 50                                                       \\
     -emConfiguration NONE                                                     \\
     -ignorePreReqs

echo "Successfully Insall Oracle `),s("span",{class:"token variable"},"$ORACLE_DATABASE_VERSION"),n(` !"
EOF`)]),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"EnableStartup"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Edit /etc/oratab ..."'),n(`
`),s("span",{class:"token function"},"cp"),n(` /etc/oratab /etc/oratab.orabak
`),s("span",{class:"token function"},"sed"),n(),s("span",{class:"token parameter variable"},"-i"),n(),s("span",{class:"token string"},[n('"s#'),s("span",{class:"token variable"},"${ORACLE_SID}"),n(":"),s("span",{class:"token variable"},"${ORACLE_HOME}"),n(":N#"),s("span",{class:"token variable"},"${ORACLE_SID}"),n(":"),s("span",{class:"token variable"},"${ORACLE_HOME}"),n(':Y#g"')]),n(` /etc/oratab
`),s("span",{class:"token function"},"su"),n(" - oracle "),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOFOUT
sqlplus / as sysdba <<EOF
alter system set db_create_file_dest='`),s("span",{class:"token variable"},"${ORACLE_DATA_DIR}"),n(`';
alter pluggable database `),s("span",{class:"token variable"},"${ORACLE_PDB_NAME}"),n(` save state;
exit;
EOF
EOFOUT`)]),n(`

`),s("span",{class:"token function"},"mkdir"),n(),s("span",{class:"token parameter variable"},"-p"),n(),s("span",{class:"token variable"},"${DBA_HOME}"),n(`/scripts
`),s("span",{class:"token function"},"chown"),n(" oracle:root "),s("span",{class:"token parameter variable"},"-R"),n(),s("span",{class:"token variable"},"${DBA_HOME}"),n(`

`),s("span",{class:"token function"},"su"),n(" - oracle "),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOF
touch `),s("span",{class:"token variable"},"${DBA_HOME}"),n(`/scripts/startup_db.sh
chmod a+x `),s("span",{class:"token variable"},"${DBA_HOME}"),n(`/scripts/startup_db.sh

cat > `),s("span",{class:"token variable"},"${DBA_HOME}"),n(`/scripts/startup_db.sh <<"EOFINNER"
#! /bin/sh
# description: Oracle auto start-stop script.
#
# Set ORA_HOME to be equivalent to the \\`),s("span",{class:"token variable"},"$ORACLE_HOME"),n(`
# from which you wish to execute dbstart and dbshut;
#
# Set ORA_OWNER to the user id of the owner of the
# Oracle database in ORACLE_HOME.

ORA_HOME=`),s("span",{class:"token variable"},"$ORACLE_HOME"),n(`
ORA_OWNER=oracle
CURRENT_USER=\\`),s("span",{class:"token variable"},[s("span",{class:"token variable"},"`"),n("whoami"),s("span",{class:"token punctuation"},"\\"),s("span",{class:"token variable"},"`")]),n(`

case "\\`),s("span",{class:"token variable"},"$1"),n(`" in
'start') 
    # Start the Oracle databases:
    # The following command assumes that the oracle login
    # will not prompt the user for any values
    # Remove "&" if you don't want startup as a background process.
    if [ "\\`),s("span",{class:"token variable"},"$ORA_OWNER"),n('" = "\\'),s("span",{class:"token variable"},"$CURRENT_USER"),n(`" ]; then
    \\`),s("span",{class:"token variable"},"$ORA_HOME"),n("/bin/dbstart \\"),s("span",{class:"token variable"},"$ORA_HOME"),n(`
    else
    su - \\`),s("span",{class:"token variable"},"$ORA_OWNER"),n(' -c "\\'),s("span",{class:"token variable"},"$ORA_HOME"),n("/bin/dbstart \\"),s("span",{class:"token variable"},"$ORA_HOME"),n(`" 
    fi
    touch /var/lock/subsys/dbora
    break
    ;;

'stop')
    # Stop the Oracle databases:
    # The following command assumes that the oracle login
    # will not prompt the user for any values
    if [ "\\`),s("span",{class:"token variable"},"$ORA_OWNER"),n('" = "\\'),s("span",{class:"token variable"},"$CURRENT_USER"),n(`" ]; then
    \\`),s("span",{class:"token variable"},"$ORA_HOME"),n("/bin/dbshut \\"),s("span",{class:"token variable"},"$ORA_HOME"),n(`
    else
    su - \\`),s("span",{class:"token variable"},"$ORA_OWNER"),n(' -c "\\'),s("span",{class:"token variable"},"$ORA_HOME"),n("/bin/dbshut \\"),s("span",{class:"token variable"},"$ORA_HOME"),n(`" &
    fi
    rm -f /var/lock/subsys/dbora
    break
    ;;
   *)
    echo "usage: `),s("span",{class:"token variable"},"$0"),n(` {start|stop}"
    exit
    ;;
esac
EOF`)]),n(`INNER
EOF

`),s("span",{class:"token function"},"cat"),n(),s("span",{class:"token operator"},">"),n(" /lib/systemd/system/dbora.service "),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOF
[Unit]
Description=The Oracle Database Service
After=syslog.target network.target

[Service]
# systemd ignores PAM limits, so set any necessary limits in the service.
# Not really a bug, but a feature.
# https://bugzilla.redhat.com/show_bug.cgi?id=754285
LimitMEMLOCK=infinity
LimitNOFILE=65535

#Type=simple
# idle: similar to simple, the actual execution of the service binary is delayed
#       until all jobs are finished, which avoids mixing the status output with shell output of services.
RemainAfterExit=yes
User=oracle
Group=oinstall
Restart=no
ExecStart=/bin/bash -c '`),s("span",{class:"token variable"},"${DBA_HOME}"),n(`/scripts/startup_db.sh start'
ExecStop=/bin/bash -c '`),s("span",{class:"token variable"},"${DBA_HOME}"),n(`/scripts/startup_db.sh stop'

[Install]
WantedBy=multi-user.target
EOF`)]),n(`

`),s("span",{class:"token comment"},"# autostart after os reboot"),n(`
systemctl `),s("span",{class:"token builtin class-name"},"enable"),n(` dbora.service
`),s("span",{class:"token comment"},"# add allow port to firewalld"),n(`
firewall-cmd --add-port`),s("span",{class:"token operator"},"="),s("span",{class:"token number"},"1521"),n(),s("span",{class:"token parameter variable"},"--zone"),s("span",{class:"token operator"},"="),n("public "),s("span",{class:"token parameter variable"},"--permanent"),n(`
firewall-cmd `),s("span",{class:"token parameter variable"},"--reload"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"Usage"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
`),s("span",{class:"token function"},"cat"),n(),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOF
Usage: `),s("span",{class:"token variable"},"$0"),n(` -h|--helpUsage, help message.
       `),s("span",{class:"token variable"},"$0"),n(` -d|--installDependency, install oracle dependency.
       `),s("span",{class:"token variable"},"$0"),n(` -a|--installAll, install dependency,database software,create netca,create database.     
       `),s("span",{class:"token variable"},"$0"),n(` -s|--installSoftware, install database software. 
       `),s("span",{class:"token variable"},"$0"),n(` -c|--createDatabase, create database.
       `),s("span",{class:"token variable"},"$0"),n(` -e|--enable, enable database auto startup after system boot/reboot.
       `),s("span",{class:"token variable"},"$0"),n(` -p|--package, download database package.
EOF`)]),n(`
`),s("span",{class:"token punctuation"},"}"),n(`


`),s("span",{class:"token assign-left variable"},"ARGS"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"`"),n("getopt "),s("span",{class:"token parameter variable"},"-o"),n(" hdasncep "),s("span",{class:"token parameter variable"},"--long"),n(" help,installDependency,installAll,installSoftware,createNetca,createDatabase,enable,package "),s("span",{class:"token parameter variable"},"-n"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$0"),n('"')]),n("  -- "),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$@"),n('"')]),s("span",{class:"token variable"},"`")]),n(`
`),s("span",{class:"token builtin class-name"},"eval"),n(),s("span",{class:"token builtin class-name"},"set"),n(" --  "),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$ARGS"),n('"')]),n(`
`),s("span",{class:"token keyword"},"while"),n(),s("span",{class:"token boolean"},"true"),n(`
`),s("span",{class:"token keyword"},"do"),n(`
`),s("span",{class:"token keyword"},"case"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$1"),n('"')]),n(),s("span",{class:"token keyword"},"in"),n(`
    -h`),s("span",{class:"token operator"},"|"),n("--help"),s("span",{class:"token punctuation"},")"),n(`
    Usage
    `),s("span",{class:"token builtin class-name"},"shift"),n(),s("span",{class:"token number"},"2"),n(`
    `),s("span",{class:"token builtin class-name"},"break"),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    -d`),s("span",{class:"token operator"},"|"),n("--installDependency"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"InstallDependency ..."'),n(`
    `),s("span",{class:"token assign-left variable"},"STARTTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    InstallDependency
    `),s("span",{class:"token assign-left variable"},"ENDTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"Installation Elapsed: $[ '),s("span",{class:"token variable"},"$ENDTIME"),n(" - "),s("span",{class:"token variable"},"$STARTTIME"),n(' ] s"')]),n(`
    `),s("span",{class:"token builtin class-name"},"shift"),n(),s("span",{class:"token number"},"2"),n(`
    `),s("span",{class:"token builtin class-name"},"break"),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    -a`),s("span",{class:"token operator"},"|"),n("--installAll"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"InstallAll ..."'),n(`
    `),s("span",{class:"token assign-left variable"},"STARTTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    InstallDependency
    InstallSoftware
    `),s("span",{class:"token comment"},"# CreateNetca"),n(`
    CreateDatabase
    `),s("span",{class:"token assign-left variable"},"ENDTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"Installation Elapsed: $[ '),s("span",{class:"token variable"},"$ENDTIME"),n(" - "),s("span",{class:"token variable"},"$STARTTIME"),n(' ] s"')]),n(`
    `),s("span",{class:"token builtin class-name"},"shift"),n(),s("span",{class:"token number"},"2"),n(`
    `),s("span",{class:"token builtin class-name"},"break"),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    -s`),s("span",{class:"token operator"},"|"),n("--installSoftware"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"InstallSoftware ..."'),n(`
    `),s("span",{class:"token assign-left variable"},"STARTTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    InstallDependency
    InstallSoftware
    `),s("span",{class:"token assign-left variable"},"ENDTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"Installation Elapsed: $[ '),s("span",{class:"token variable"},"$ENDTIME"),n(" - "),s("span",{class:"token variable"},"$STARTTIME"),n(' ] s"')]),n(`
    `),s("span",{class:"token builtin class-name"},"shift"),n(),s("span",{class:"token number"},"2"),n(`
    `),s("span",{class:"token builtin class-name"},"break"),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    -n`),s("span",{class:"token operator"},"|"),n("--createNetca"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Create Netca ..."'),n(`
    `),s("span",{class:"token assign-left variable"},"STARTTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    CreateNetca
    `),s("span",{class:"token assign-left variable"},"ENDTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"Create Netca Elapsed: $[ '),s("span",{class:"token variable"},"$ENDTIME"),n(" - "),s("span",{class:"token variable"},"$STARTTIME"),n(' ] s"')]),n(`
    `),s("span",{class:"token builtin class-name"},"shift"),n(),s("span",{class:"token number"},"2"),n(`
    `),s("span",{class:"token builtin class-name"},"break"),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    -c`),s("span",{class:"token operator"},"|"),n("--createDatabase"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"CreateDatabase ..."'),n(`
    `),s("span",{class:"token assign-left variable"},"STARTTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    CreateDatabase
    `),s("span",{class:"token assign-left variable"},"ENDTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"Installation Elapsed: $[ '),s("span",{class:"token variable"},"$ENDTIME"),n(" - "),s("span",{class:"token variable"},"$STARTTIME"),n(' ] s"')]),n(`
    `),s("span",{class:"token builtin class-name"},"shift"),n(),s("span",{class:"token number"},"2"),n(`
    `),s("span",{class:"token builtin class-name"},"break"),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    -e`),s("span",{class:"token operator"},"|"),n("--enable"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"EnableStartup ..."'),n(`
    `),s("span",{class:"token assign-left variable"},"STARTTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    EnableStartup
    `),s("span",{class:"token assign-left variable"},"ENDTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"EnableStartup Elapsed: $[ '),s("span",{class:"token variable"},"$ENDTIME"),n(" - "),s("span",{class:"token variable"},"$STARTTIME"),n(' ] s"')]),n(`
    `),s("span",{class:"token builtin class-name"},"shift"),n(),s("span",{class:"token number"},"2"),n(`
    `),s("span",{class:"token builtin class-name"},"break"),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    -p`),s("span",{class:"token operator"},"|"),n("--package"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Downloading Package ..."'),n(`
    `),s("span",{class:"token assign-left variable"},"STARTTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    DownloadPackages
    `),s("span",{class:"token assign-left variable"},"ENDTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"Downloading Package Elapsed: $[ '),s("span",{class:"token variable"},"$ENDTIME"),n(" - "),s("span",{class:"token variable"},"$STARTTIME"),n(' ] s"')]),n(`
    `),s("span",{class:"token builtin class-name"},"shift"),n(),s("span",{class:"token number"},"2"),n(`
    `),s("span",{class:"token builtin class-name"},"break"),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    *`),s("span",{class:"token punctuation"},")"),n(`
    Usage
    `),s("span",{class:"token builtin class-name"},"exit"),n(),s("span",{class:"token number"},"1"),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token keyword"},"esac"),n(`
`),s("span",{class:"token keyword"},"done"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),O=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token shebang important"},"#!/bin/bash"),n(`
`),s("span",{class:"token comment"},"############ Author begin ###############"),n(`
`),s("span",{class:"token comment"},"## Author: Ableit"),n(`
`),s("span",{class:"token comment"},"## Date: 2022-07-20"),n(`
`),s("span",{class:"token comment"},"############ Author end ###############"),n(`

`),s("span",{class:"token comment"},"############ Env & Virables begin ###############"),n(`
`),s("span",{class:"token comment"},"# custom settings"),n(`
`),s("span",{class:"token assign-left variable"},"DBA_HOME"),s("span",{class:"token operator"},"="),n(`/opt/database/dba
`),s("span",{class:"token assign-left variable"},"SOFTWARE_DIR"),s("span",{class:"token operator"},"="),n(`/opt/package

`),s("span",{class:"token assign-left variable"},[s("span",{class:"token environment constant"},"HOSTNAME")]),s("span",{class:"token operator"},"="),n(`testdb-node01
`),s("span",{class:"token assign-left variable"},"IPADDR"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"`"),s("span",{class:"token function"},"ip"),n(),s("span",{class:"token parameter variable"},"-4"),n(" addr show dev eth0 "),s("span",{class:"token operator"},"|"),n(),s("span",{class:"token function"},"grep"),n(),s("span",{class:"token parameter variable"},"-oP"),n(),s("span",{class:"token string"},"'(?<=inet\\s)\\d+(\\.\\d+){3}'"),s("span",{class:"token variable"},"`")]),n(`
`),s("span",{class:"token assign-left variable"},"ORACLE_OS_PASSWORD"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"YsDB_GreatMen2022"'),n(`

`),s("span",{class:"token assign-left variable"},"ORACLE_UNQNAME"),s("span",{class:"token operator"},"="),n(`testdb
`),s("span",{class:"token assign-left variable"},"ORACLE_SID"),s("span",{class:"token operator"},"="),n(`testdb
`),s("span",{class:"token assign-left variable"},"ORACLE_PDB_NAME"),s("span",{class:"token operator"},"="),n(`testpdb
`),s("span",{class:"token assign-left variable"},"ORACLE_CHARSET"),s("span",{class:"token operator"},"="),n(`AL32UTF8
`),s("span",{class:"token assign-left variable"},"ORACLE_SYS_PASSWORD"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"YsDB_GreatMen2022"'),n(`
`),s("span",{class:"token assign-left variable"},"ORACLE_SYSTEM_PASSWORD"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"YsDB_GreatMen2022"'),n(`
`),s("span",{class:"token assign-left variable"},"ORACLE_PDB_ADMIN_PASSWORD"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"YsDB_GreatMen2022"'),n(`

`),s("span",{class:"token assign-left variable"},"ORACLE_BASE_APP_DIR"),s("span",{class:"token operator"},"="),n(`/u01
`),s("span",{class:"token assign-left variable"},"ORACLE_BASE_DATA_DIR"),s("span",{class:"token operator"},"="),n(`/data
`),s("span",{class:"token assign-left variable"},"ORACLE_DATABASE_VERSION"),s("span",{class:"token operator"},"="),s("span",{class:"token number"},"21.3"),n(`.0.0
`),s("span",{class:"token comment"},"# 64G"),n(`
`),s("span",{class:"token assign-left variable"},"ORACLE_RECOVERY_AREA_SIZE"),s("span",{class:"token operator"},"="),n("$"),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token number"},"64"),n("*1024 "),s("span",{class:"token punctuation"},"]"),n(`
`),s("span",{class:"token assign-left variable"},"ORACLE_ARCHIVE"),s("span",{class:"token operator"},"="),n(`true

`),s("span",{class:"token comment"},"# Oracle Auto Settings"),n(`
`),s("span",{class:"token assign-left variable"},"TMP"),s("span",{class:"token operator"},"="),n(`/tmp
`),s("span",{class:"token assign-left variable"},"ORACLE_HOSTNAME"),s("span",{class:"token operator"},"="),s("span",{class:"token environment constant"},"$HOSTNAME"),n(`
`),s("span",{class:"token assign-left variable"},"ORACLE_BASE"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$ORACLE_BASE_APP_DIR"),n(`/app/oracle
`),s("span",{class:"token assign-left variable"},"ORACLE_HOME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$ORACLE_BASE"),n("/product/"),s("span",{class:"token variable"},"$ORACLE_DATABASE_VERSION"),n(`/db_1
`),s("span",{class:"token assign-left variable"},"ORACLE_DATA_DIR"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$ORACLE_BASE_DATA_DIR"),n(`/app/oracle/oradata
`),s("span",{class:"token assign-left variable"},"ORACLE_ORA_INVENTORY"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$ORACLE_BASE_APP_DIR"),n(`/app/oraInventory
`),s("span",{class:"token assign-left variable"},"ORACLE_RECOVERY_AREA_DIR"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"$ORACLE_BASE_DATA_DIR"),n(`/app/oracle/fast_recovery_area

`),s("span",{class:"token comment"},"# os auto settings"),n(`
`),s("span",{class:"token assign-left variable"},"OS_MEMORY"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"`"),s("span",{class:"token function"},"free"),n(" -b"),s("span",{class:"token operator"},"|"),s("span",{class:"token function"},"grep"),n(" Mem:"),s("span",{class:"token operator"},"|"),s("span",{class:"token function"},"awk"),n(" -F"),s("span",{class:"token string"},"' '"),n(),s("span",{class:"token string"},"'{print $2}'"),s("span",{class:"token variable"},"`")]),n(`
`),s("span",{class:"token assign-left variable"},"OS_SHMMAX"),s("span",{class:"token operator"},"="),n("$"),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},"$OS_MEMORY"),n(" * "),s("span",{class:"token number"},"2"),n(" / "),s("span",{class:"token number"},"3"),n(),s("span",{class:"token punctuation"},"]"),n(`
`),s("span",{class:"token assign-left variable"},"OS_SHMALL"),s("span",{class:"token operator"},"="),n("$"),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},"$OS_SHMMAX"),n(" / "),s("span",{class:"token number"},"1024"),n(),s("span",{class:"token punctuation"},"]"),n(`
`),s("span",{class:"token assign-left variable"},"ORACLE_TOTAL_MEMORY"),s("span",{class:"token operator"},"="),n("$"),s("span",{class:"token punctuation"},"["),n(),s("span",{class:"token variable"},"$OS_SHMMAX"),n(" / "),s("span",{class:"token number"},"1024"),n(" / "),s("span",{class:"token number"},"1024"),n(),s("span",{class:"token punctuation"},"]"),n(`
`),s("span",{class:"token function"},"hostname"),n(),s("span",{class:"token environment constant"},"$HOSTNAME"),n(`
`),s("span",{class:"token assign-left variable"},"OS_VERSION_ID"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"`"),s("span",{class:"token function"},"cat"),n(" /etc/os-release "),s("span",{class:"token operator"},"|"),s("span",{class:"token function"},"grep"),n(),s("span",{class:"token string"},"'^VERSION_ID='"),s("span",{class:"token operator"},"|"),s("span",{class:"token function"},"awk"),n(" -F"),s("span",{class:"token string"},"'='"),n(),s("span",{class:"token string"},"'{print $2}'"),s("span",{class:"token variable"},"`")]),n(`
`),s("span",{class:"token comment"},"############ Env & Virables end ###############"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"DownloadPackages"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Downloading package ..."'),n(`
    `),s("span",{class:"token function"},"mkdir"),n(),s("span",{class:"token parameter variable"},"-p"),n(),s("span",{class:"token variable"},"$SOFTWARE_DIR"),n(`
    yum `),s("span",{class:"token function"},"install"),n(),s("span",{class:"token parameter variable"},"-y"),n(),s("span",{class:"token function"},"wget"),n(`
    `),s("span",{class:"token function"},"wget"),n(),s("span",{class:"token parameter variable"},"-O"),n(),s("span",{class:"token variable"},"$SOFTWARE_DIR"),n(`/LINUX.X64_213000_db_home.zip ftp://10.10.12.158/pub/oracle/LINUX.X64_213000_db_home.zip
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"InstallDependency"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"0.Set Locale ..."'),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token assign-left variable"},[s("span",{class:"token environment constant"},"LANG")]),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"en_US.UTF-8"'),n(),s("span",{class:"token operator"},">"),n(` /etc/locale.conf
localectl set-locale `),s("span",{class:"token assign-left variable"},[s("span",{class:"token environment constant"},"LANG")]),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"en_US.UTF-8"'),n(`
`),s("span",{class:"token builtin class-name"},"export"),n(),s("span",{class:"token assign-left variable"},[s("span",{class:"token environment constant"},"LANG")]),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"en_US.UTF-8"'),n(`

`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"1.Disable selinux and stop firewalld ..."'),n(`
`),s("span",{class:"token function"},"cp"),n(` /etc/selinux/config /etc/selinux/config.orabak
`),s("span",{class:"token function"},"sed"),n(),s("span",{class:"token parameter variable"},"-i"),n(),s("span",{class:"token string"},"'s/^SELINUX=enforcing/SELINUX=disabled/g'"),n(` /etc/selinux/config 
setenforce `),s("span",{class:"token number"},"0"),n(`
systemctl stop firewalld
systemctl disable firewalld
`),s("span",{class:"token function"},"sleep"),n(),s("span",{class:"token number"},"1"),n(`

`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"2.Config hostname ..."'),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token environment constant"},"$HOSTNAME"),n(),s("span",{class:"token operator"},">"),n(` /etc/hostname
`),s("span",{class:"token function"},"sleep"),n(),s("span",{class:"token number"},"1"),n(`

`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"3.Config hosts ..."'),n(`
`),s("span",{class:"token function"},"cp"),n(` /etc/hosts /etc/hosts.orabak
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token variable"},"$IPADDR"),s("span",{class:"token string"},"'   '"),s("span",{class:"token environment constant"},"$HOSTNAME"),n(),s("span",{class:"token operator"},">>"),n(` /etc/hosts
`),s("span",{class:"token function"},"sleep"),n(),s("span",{class:"token number"},"1"),n(`

`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"4.Config sysctl.conf ... "'),n(`
`),s("span",{class:"token function"},"cp"),n(` /etc/sysctl.conf /etc/sysctl.conf.orabak

`),s("span",{class:"token function"},"cat"),n(),s("span",{class:"token operator"},">>"),n(" /etc/sysctl.conf "),s("span",{class:"token operator"},"<<"),n(),s("span",{class:"token string"},[n(`EOF
fs.file-max = 6815744
kernel.sem = 250 32000 100 128
kernel.shmmni = 4096
kernel.shmall = `),s("span",{class:"token variable"},"$OS_SHMALL"),n(` 
kernel.shmmax = `),s("span",{class:"token variable"},"$OS_SHMMAX"),n(`
kernel.panic_on_oops = 1
net.core.rmem_default = 262144
net.core.rmem_max = 4194304
net.core.wmem_default = 262144
net.core.wmem_max = 1048576
net.ipv4.conf.all.rp_filter = 2
net.ipv4.conf.default.rp_filter = 2
fs.aio-max-nr = 1048576
net.ipv4.ip_local_port_range = 9000 65500
EOF`)]),n(`
`),s("span",{class:"token function"},"sysctl"),n(),s("span",{class:"token parameter variable"},"-p"),n(`
`),s("span",{class:"token function"},"sleep"),n(),s("span",{class:"token number"},"1"),n(`

`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"5.Set Resource Usage Limit ..."'),n(`
`),s("span",{class:"token function"},"cp"),n(` /etc/security/limits.conf /etc/security/limits.conf.orabak
`),s("span",{class:"token function"},"cat"),n(),s("span",{class:"token operator"},">>"),n(" /etc/security/limits.conf "),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},`EOF
oracle   soft   nofile    1024
oracle   hard   nofile    65536
oracle   soft   nproc    16384
oracle   hard   nproc    16384
oracle   soft   stack    10240
oracle   hard   stack    32768
oracle   hard   memlock    134217728
oracle   soft   memlock    134217728
EOF`),n(`

`),s("span",{class:"token function"},"cp"),n(` /etc/pam.d/login /etc/pam.d/login.orabak
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"session   required    pam_limits.so"'),n(),s("span",{class:"token operator"},">>"),n(` /etc/pam.d/login
`),s("span",{class:"token function"},"sleep"),n(),s("span",{class:"token number"},"1"),n(`
`),s("span",{class:"token function"},"sleep"),n(),s("span",{class:"token number"},"1"),n(`

`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"6.Install Dependency Packages ..."'),n(`
yum `),s("span",{class:"token function"},"install"),n(),s("span",{class:"token parameter variable"},"-y"),n("  "),s("span",{class:"token function"},"bc"),n(" binutils compat-libcap1 compat-libstdc++-33 "),s("span",{class:"token punctuation"},"\\"),n(`
dtrace-utils elfutils-libelf elfutils-libelf-devel fontconfig-devel `),s("span",{class:"token punctuation"},"\\"),n(`
glibc glibc-devel ksh libaio libaio-devel libdtrace-ctf-devel libgcc `),s("span",{class:"token punctuation"},"\\"),n(`
librdmacm-devel libstdc++ libstdc++-devel libX11 libXau libxcb libXi `),s("span",{class:"token punctuation"},"\\"),n(`
libXrender libXrender-devel libXtst `),s("span",{class:"token function"},"make"),n(" net-tools nfs-utils "),s("span",{class:"token punctuation"},"\\"),n(`
policycoreutils policycoreutils-python python python-configshell `),s("span",{class:"token punctuation"},"\\"),n(`
python-rtslib python-six smartmontools sysstat targetcli unixODBC `),s("span",{class:"token function"},"unzip"),n(`
`),s("span",{class:"token function"},"sleep"),n(),s("span",{class:"token number"},"1"),n(`

`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"7.Add Oracle Group and User ..."'),n(`
`),s("span",{class:"token function"},"groupadd"),n(),s("span",{class:"token parameter variable"},"-g"),n(),s("span",{class:"token number"},"54321"),n(` oinstall
`),s("span",{class:"token function"},"groupadd"),n(),s("span",{class:"token parameter variable"},"-g"),n(),s("span",{class:"token number"},"54322"),n(` dba
`),s("span",{class:"token function"},"groupadd"),n(),s("span",{class:"token parameter variable"},"-g"),n(),s("span",{class:"token number"},"54323"),n(` oper
`),s("span",{class:"token function"},"useradd"),n(),s("span",{class:"token parameter variable"},"-u"),n(),s("span",{class:"token number"},"54321"),n(),s("span",{class:"token parameter variable"},"-g"),n(" oinstall "),s("span",{class:"token parameter variable"},"-G"),n(` dba,oper oracle
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token variable"},"$ORACLE_OS_PASSWORD"),n(),s("span",{class:"token operator"},"|"),n(),s("span",{class:"token function"},"passwd"),n(),s("span",{class:"token parameter variable"},"--stdin"),n(` oracle
`),s("span",{class:"token function"},"sleep"),n(),s("span",{class:"token number"},"1"),n(`

`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"8.Create Directory ..."'),n(`
`),s("span",{class:"token function"},"mkdir"),n(),s("span",{class:"token parameter variable"},"-p"),n(),s("span",{class:"token variable"},"$ORACLE_HOME"),n(),s("span",{class:"token variable"},"$ORACLE_DATA_DIR"),n(),s("span",{class:"token variable"},"$ORACLE_ORA_INVENTORY"),n(),s("span",{class:"token variable"},"$ORACLE_RECOVERY_AREA_DIR"),n(`
`),s("span",{class:"token function"},"chown"),n(),s("span",{class:"token parameter variable"},"-R"),n(" oracle:oinstall "),s("span",{class:"token variable"},"$ORACLE_BASE_APP_DIR"),n(),s("span",{class:"token variable"},"$ORACLE_BASE_DATA_DIR"),n(),s("span",{class:"token variable"},"$ORACLE_RECOVERY_AREA_DIR"),n(`
`),s("span",{class:"token function"},"chmod"),n(),s("span",{class:"token parameter variable"},"-R"),n(),s("span",{class:"token number"},"775"),n(),s("span",{class:"token variable"},"$ORACLE_BASE_APP_DIR"),n(),s("span",{class:"token variable"},"$ORACLE_BASE_DATA_DIR"),n(),s("span",{class:"token variable"},"$ORACLE_RECOVERY_AREA_DIR"),n(`
`),s("span",{class:"token function"},"sleep"),n(),s("span",{class:"token number"},"1"),n(`

`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"9.Set Env ..."'),n(`
`),s("span",{class:"token function"},"cp"),n(` /home/oracle/.bash_profile /home/oracle/.bash_profile.orabak
`),s("span",{class:"token function"},"cat"),n(),s("span",{class:"token operator"},">>"),n(" /home/oracle/.bash_profile "),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOF
# Oracle ENV
export TMP=`),s("span",{class:"token variable"},"$TMP"),n(`
export TMPDIR=`),s("span",{class:"token variable"},"$TMP"),n(`

export ORACLE_HOSTNAME=`),s("span",{class:"token variable"},"$ORACLE_HOSTNAME"),n(`
export ORACLE_UNQNAME=`),s("span",{class:"token variable"},"$ORACLE_UNQNAME"),n(`
export ORACLE_SID=`),s("span",{class:"token variable"},"$ORACLE_SID"),n(`
export PDB_NAME=`),s("span",{class:"token variable"},"$ORACLE_PDB_NAME"),n(`
export ORACLE_BASE=`),s("span",{class:"token variable"},"$ORACLE_BASE"),n(`
export ORACLE_HOME=`),s("span",{class:"token variable"},"$ORACLE_HOME"),n(`
export ORA_INVENTORY=`),s("span",{class:"token variable"},"$ORACLE_ORA_INVENTORY"),n(`
export DATA_DIR=`),s("span",{class:"token variable"},"$ORACLE_DATA_DIR"),n(`
export ORACLE_HOME_LISTNER=\\`),s("span",{class:"token variable"},"$ORACLE_HOME"),n(`

export LD_LIBRARY_PATH=\\`),s("span",{class:"token variable"},"$ORACLE_HOME"),n(`/lib:/lib:/usr/lib
export CLASSPATH=\\`),s("span",{class:"token variable"},"$ORACLE_HOME"),n("/jlib:\\"),s("span",{class:"token variable"},"$ORACLE_HOME"),n(`/rdbms/jlib

export PATH=\\`),s("span",{class:"token variable"},"$ORACLE_HOME"),n("/bin:\\"),s("span",{class:"token environment constant"},"$PATH"),n(`
EOF`)]),n(`
`),s("span",{class:"token function"},"sleep"),n(),s("span",{class:"token number"},"1"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"InstallSoftware"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"10.unzip oracle database package ..."'),n(`
`),s("span",{class:"token function"},"su"),n(" - oracle "),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOF
cd `),s("span",{class:"token variable"},"$ORACLE_HOME"),n(`
unzip -oq `),s("span",{class:"token variable"},"$SOFTWARE_DIR"),n(`/LINUX.X64_213000_db_home.zip

echo "11.install database software ..."
./runInstaller -ignorePrereq -waitforcompletion -silent                        \\
    -responseFile `),s("span",{class:"token variable"},"${ORACLE_HOME}"),n(`/install/response/db_install.rsp               \\
    oracle.install.option=INSTALL_DB_SWONLY                                    \\
    ORACLE_HOSTNAME=`),s("span",{class:"token variable"},"${ORACLE_HOSTNAME}"),n(`                                         \\
    UNIX_GROUP_NAME=oinstall                                                   \\
    INVENTORY_LOCATION=`),s("span",{class:"token variable"},"${ORACLE_ORA_INVENTORY}"),n(`                                 \\
    SELECTED_LANGUAGES=en                                                      \\
    ORACLE_HOME=`),s("span",{class:"token variable"},"${ORACLE_HOME}"),n(`                                                 \\
    ORACLE_BASE=`),s("span",{class:"token variable"},"${ORACLE_BASE}"),n(`                                                 \\
    oracle.install.db.InstallEdition=EE                                        \\
    oracle.install.db.OSDBA_GROUP=dba                                          \\
    oracle.install.db.OSOPER_GROUP=oper                                         \\
    oracle.install.db.OSBACKUPDBA_GROUP=dba                                    \\
    oracle.install.db.OSDGDBA_GROUP=dba                                        \\
    oracle.install.db.OSKMDBA_GROUP=dba                                        \\
    oracle.install.db.OSRACDBA_GROUP=dba                                       \\
    SECURITY_UPDATES_VIA_MYORACLESUPPORT=false                                 \\
    DECLINE_SECURITY_UPDATES=true
EOF`)]),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n(`"Run '`),s("span",{class:"token variable"},"${ORACLE_ORA_INVENTORY}"),n(`/orainstRoot.sh' as root ..."`)]),n(`
`),s("span",{class:"token variable"},"${ORACLE_ORA_INVENTORY}"),n(`/orainstRoot.sh
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n(`"Run '`),s("span",{class:"token variable"},"${ORACLE_HOME}"),n(`/root.sh' as root ..."`)]),n(`
`),s("span",{class:"token variable"},"${ORACLE_HOME}"),n(`/root.sh
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"CreateNetca"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"12.Create Netca ..."'),n(`
`),s("span",{class:"token function"},"su"),n(" - oracle "),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOF
echo "12.Create the listener ..."
netca -silent -responsefile `),s("span",{class:"token variable"},"${ORACLE_HOME}"),n(`/assistants/netca/netca.rsp
echo "12.Start the listener ..."
lsnrctl start
EOF`)]),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"CreateDatabase"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"13.Create Database ..."'),n(`
`),s("span",{class:"token function"},"su"),n(" - oracle "),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOF
echo "12.Start the listener ..."
lsnrctl start

dbca -silent -createDatabase                                                   \\
     -templateName General_Purpose.dbc                                         \\
     -gdbname `),s("span",{class:"token variable"},"${ORACLE_SID}"),n(" -sid  "),s("span",{class:"token variable"},"${ORACLE_SID}"),n(` -responseFile NO_VALUE         \\
     -characterSet `),s("span",{class:"token variable"},"$ORACLE_CHARSET"),n(`                                                  \\
     -sysPassword `),s("span",{class:"token variable"},"$ORACLE_SYS_PASSWORD"),n(`                                                     \\
     -systemPassword `),s("span",{class:"token variable"},"$ORACLE_SYSTEM_PASSWORD"),n(`                                               \\
     -createAsContainerDatabase true                                           \\
     -numberOfPDBs 1                                                           \\
     -pdbName `),s("span",{class:"token variable"},"${ORACLE_PDB_NAME}"),n(`                                                      \\
     -pdbAdminPassword `),s("span",{class:"token variable"},"$ORACLE_PDB_ADMIN_PASSWORD"),n(`                                           \\
     -databaseType MULTIPURPOSE                                                \\
     -memoryMgmtType auto_sga                                                  \\
     -totalMemory `),s("span",{class:"token variable"},"$ORACLE_TOTAL_MEMORY"),n(`                                         \\
     -storageType FS                                                           \\
     -datafileDestination "`),s("span",{class:"token variable"},"${ORACLE_DATA_DIR}"),n(`"                                        \\
     -enableArchive  `),s("span",{class:"token variable"},"${ORACLE_ARCHIVE}"),n(`                                                 \\
     -recoveryAreaSize  `),s("span",{class:"token variable"},"${ORACLE_RECOVERY_AREA_SIZE}"),n(`                           \\
     -recoveryAreaDestination  "`),s("span",{class:"token variable"},"${ORACLE_RECOVERY_AREA_DIR}"),n(`"                   \\
     -redoLogFileSize 50                                                       \\
     -emConfiguration NONE                                                     \\
     -ignorePreReqs

echo "Successfully Insall Oracle `),s("span",{class:"token variable"},"$ORACLE_DATABASE_VERSION"),n(` !"
EOF`)]),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"EnableStartup"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Edit /etc/oratab ..."'),n(`
`),s("span",{class:"token function"},"cp"),n(` /etc/oratab /etc/oratab.orabak
`),s("span",{class:"token function"},"sed"),n(),s("span",{class:"token parameter variable"},"-i"),n(),s("span",{class:"token string"},[n('"s#'),s("span",{class:"token variable"},"${ORACLE_SID}"),n(":"),s("span",{class:"token variable"},"${ORACLE_HOME}"),n(":N#"),s("span",{class:"token variable"},"${ORACLE_SID}"),n(":"),s("span",{class:"token variable"},"${ORACLE_HOME}"),n(':Y#g"')]),n(` /etc/oratab
`),s("span",{class:"token function"},"su"),n(" - oracle "),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOFOUT
sqlplus / as sysdba <<EOF
alter system set db_create_file_dest='`),s("span",{class:"token variable"},"${ORACLE_DATA_DIR}"),n(`';
alter pluggable database `),s("span",{class:"token variable"},"${ORACLE_PDB_NAME}"),n(` save state;
exit;
EOF
EOFOUT`)]),n(`

`),s("span",{class:"token function"},"mkdir"),n(),s("span",{class:"token parameter variable"},"-p"),n(),s("span",{class:"token variable"},"${DBA_HOME}"),n(`/scripts
`),s("span",{class:"token function"},"chown"),n(" oracle:root "),s("span",{class:"token parameter variable"},"-R"),n(),s("span",{class:"token variable"},"${DBA_HOME}"),n(`

`),s("span",{class:"token function"},"su"),n(" - oracle "),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOF
touch `),s("span",{class:"token variable"},"${DBA_HOME}"),n(`/scripts/startup_db.sh
chmod a+x `),s("span",{class:"token variable"},"${DBA_HOME}"),n(`/scripts/startup_db.sh

cat > `),s("span",{class:"token variable"},"${DBA_HOME}"),n(`/scripts/startup_db.sh <<"EOFINNER"
#! /bin/sh
# description: Oracle auto start-stop script.
#
# Set ORA_HOME to be equivalent to the \\`),s("span",{class:"token variable"},"$ORACLE_HOME"),n(`
# from which you wish to execute dbstart and dbshut;
#
# Set ORA_OWNER to the user id of the owner of the
# Oracle database in ORACLE_HOME.

ORA_HOME=`),s("span",{class:"token variable"},"$ORACLE_HOME"),n(`
ORA_OWNER=oracle
CURRENT_USER=\\`),s("span",{class:"token variable"},[s("span",{class:"token variable"},"`"),n("whoami"),s("span",{class:"token punctuation"},"\\"),s("span",{class:"token variable"},"`")]),n(`

case "\\`),s("span",{class:"token variable"},"$1"),n(`" in
'start') 
    # Start the Oracle databases:
    # The following command assumes that the oracle login
    # will not prompt the user for any values
    # Remove "&" if you don't want startup as a background process.
    if [ "\\`),s("span",{class:"token variable"},"$ORA_OWNER"),n('" = "\\'),s("span",{class:"token variable"},"$CURRENT_USER"),n(`" ]; then
    \\`),s("span",{class:"token variable"},"$ORA_HOME"),n("/bin/dbstart \\"),s("span",{class:"token variable"},"$ORA_HOME"),n(`
    else
    su - \\`),s("span",{class:"token variable"},"$ORA_OWNER"),n(' -c "\\'),s("span",{class:"token variable"},"$ORA_HOME"),n("/bin/dbstart \\"),s("span",{class:"token variable"},"$ORA_HOME"),n(`" 
    fi
    touch /var/lock/subsys/dbora
    break
    ;;

'stop')
    # Stop the Oracle databases:
    # The following command assumes that the oracle login
    # will not prompt the user for any values
    if [ "\\`),s("span",{class:"token variable"},"$ORA_OWNER"),n('" = "\\'),s("span",{class:"token variable"},"$CURRENT_USER"),n(`" ]; then
    \\`),s("span",{class:"token variable"},"$ORA_HOME"),n("/bin/dbshut \\"),s("span",{class:"token variable"},"$ORA_HOME"),n(`
    else
    su - \\`),s("span",{class:"token variable"},"$ORA_OWNER"),n(' -c "\\'),s("span",{class:"token variable"},"$ORA_HOME"),n("/bin/dbshut \\"),s("span",{class:"token variable"},"$ORA_HOME"),n(`" &
    fi
    rm -f /var/lock/subsys/dbora
    break
    ;;
   *)
    echo "usage: `),s("span",{class:"token variable"},"$0"),n(` {start|stop}"
    exit
    ;;
esac
EOF`)]),n(`INNER
EOF

`),s("span",{class:"token function"},"cat"),n(),s("span",{class:"token operator"},">"),n(" /lib/systemd/system/dbora.service "),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOF
[Unit]
Description=The Oracle Database Service
After=syslog.target network.target

[Service]
# systemd ignores PAM limits, so set any necessary limits in the service.
# Not really a bug, but a feature.
# https://bugzilla.redhat.com/show_bug.cgi?id=754285
LimitMEMLOCK=infinity
LimitNOFILE=65535

#Type=simple
# idle: similar to simple, the actual execution of the service binary is delayed
#       until all jobs are finished, which avoids mixing the status output with shell output of services.
RemainAfterExit=yes
User=oracle
Group=oinstall
Restart=no
ExecStart=/bin/bash -c '`),s("span",{class:"token variable"},"${DBA_HOME}"),n(`/scripts/startup_db.sh start'
ExecStop=/bin/bash -c '`),s("span",{class:"token variable"},"${DBA_HOME}"),n(`/scripts/startup_db.sh stop'

[Install]
WantedBy=multi-user.target
EOF`)]),n(`

`),s("span",{class:"token comment"},"# autostart after os reboot"),n(`
systemctl `),s("span",{class:"token builtin class-name"},"enable"),n(` dbora.service
`),s("span",{class:"token comment"},"# add allow port to firewalld"),n(`
firewall-cmd --add-port`),s("span",{class:"token operator"},"="),s("span",{class:"token number"},"1521"),n(),s("span",{class:"token parameter variable"},"--zone"),s("span",{class:"token operator"},"="),n("public "),s("span",{class:"token parameter variable"},"--permanent"),n(`
firewall-cmd `),s("span",{class:"token parameter variable"},"--reload"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"Usage"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
`),s("span",{class:"token function"},"cat"),n(),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOF
Usage: `),s("span",{class:"token variable"},"$0"),n(` -h|--helpUsage, help message.
       `),s("span",{class:"token variable"},"$0"),n(` -d|--installDependency, install oracle dependency.
       `),s("span",{class:"token variable"},"$0"),n(` -a|--installAll, install dependency,database software,create netca,create database.     
       `),s("span",{class:"token variable"},"$0"),n(` -s|--installSoftware, install database software. 
       `),s("span",{class:"token variable"},"$0"),n(` -c|--createDatabase, create database.
       `),s("span",{class:"token variable"},"$0"),n(` -e|--enable, enable database auto startup after system boot/reboot.
       `),s("span",{class:"token variable"},"$0"),n(` -p|--package, download database package.
EOF`)]),n(`
`),s("span",{class:"token punctuation"},"}"),n(`


`),s("span",{class:"token assign-left variable"},"ARGS"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"`"),n("getopt "),s("span",{class:"token parameter variable"},"-o"),n(" hdasncep "),s("span",{class:"token parameter variable"},"--long"),n(" help,installDependency,installAll,installSoftware,createNetca,createDatabase,enable,package "),s("span",{class:"token parameter variable"},"-n"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$0"),n('"')]),n("  -- "),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$@"),n('"')]),s("span",{class:"token variable"},"`")]),n(`
`),s("span",{class:"token builtin class-name"},"eval"),n(),s("span",{class:"token builtin class-name"},"set"),n(" --  "),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$ARGS"),n('"')]),n(`
`),s("span",{class:"token keyword"},"while"),n(),s("span",{class:"token boolean"},"true"),n(`
`),s("span",{class:"token keyword"},"do"),n(`
`),s("span",{class:"token keyword"},"case"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$1"),n('"')]),n(),s("span",{class:"token keyword"},"in"),n(`
    -h`),s("span",{class:"token operator"},"|"),n("--help"),s("span",{class:"token punctuation"},")"),n(`
    Usage
    `),s("span",{class:"token builtin class-name"},"shift"),n(),s("span",{class:"token number"},"2"),n(`
    `),s("span",{class:"token builtin class-name"},"break"),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    -d`),s("span",{class:"token operator"},"|"),n("--installDependency"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"InstallDependency ..."'),n(`
    `),s("span",{class:"token assign-left variable"},"STARTTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    InstallDependency
    `),s("span",{class:"token assign-left variable"},"ENDTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"Installation Elapsed: $[ '),s("span",{class:"token variable"},"$ENDTIME"),n(" - "),s("span",{class:"token variable"},"$STARTTIME"),n(' ] s"')]),n(`
    `),s("span",{class:"token builtin class-name"},"shift"),n(),s("span",{class:"token number"},"2"),n(`
    `),s("span",{class:"token builtin class-name"},"break"),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    -a`),s("span",{class:"token operator"},"|"),n("--installAll"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"InstallAll ..."'),n(`
    `),s("span",{class:"token assign-left variable"},"STARTTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    InstallDependency
    InstallSoftware
    `),s("span",{class:"token comment"},"# CreateNetca"),n(`
    CreateDatabase
    `),s("span",{class:"token assign-left variable"},"ENDTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"Installation Elapsed: $[ '),s("span",{class:"token variable"},"$ENDTIME"),n(" - "),s("span",{class:"token variable"},"$STARTTIME"),n(' ] s"')]),n(`
    `),s("span",{class:"token builtin class-name"},"shift"),n(),s("span",{class:"token number"},"2"),n(`
    `),s("span",{class:"token builtin class-name"},"break"),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    -s`),s("span",{class:"token operator"},"|"),n("--installSoftware"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"InstallSoftware ..."'),n(`
    `),s("span",{class:"token assign-left variable"},"STARTTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    InstallSoftware
    `),s("span",{class:"token assign-left variable"},"ENDTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"Installation Elapsed: $[ '),s("span",{class:"token variable"},"$ENDTIME"),n(" - "),s("span",{class:"token variable"},"$STARTTIME"),n(' ] s"')]),n(`
    `),s("span",{class:"token builtin class-name"},"shift"),n(),s("span",{class:"token number"},"2"),n(`
    `),s("span",{class:"token builtin class-name"},"break"),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    -n`),s("span",{class:"token operator"},"|"),n("--createNetca"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Create Netca ..."'),n(`
    `),s("span",{class:"token assign-left variable"},"STARTTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    CreateNetca
    `),s("span",{class:"token assign-left variable"},"ENDTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"Create Netca Elapsed: $[ '),s("span",{class:"token variable"},"$ENDTIME"),n(" - "),s("span",{class:"token variable"},"$STARTTIME"),n(' ] s"')]),n(`
    `),s("span",{class:"token builtin class-name"},"shift"),n(),s("span",{class:"token number"},"2"),n(`
    `),s("span",{class:"token builtin class-name"},"break"),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    -c`),s("span",{class:"token operator"},"|"),n("--createDatabase"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"CreateDatabase ..."'),n(`
    `),s("span",{class:"token assign-left variable"},"STARTTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    CreateDatabase
    `),s("span",{class:"token assign-left variable"},"ENDTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"Installation Elapsed: $[ '),s("span",{class:"token variable"},"$ENDTIME"),n(" - "),s("span",{class:"token variable"},"$STARTTIME"),n(' ] s"')]),n(`
    `),s("span",{class:"token builtin class-name"},"shift"),n(),s("span",{class:"token number"},"2"),n(`
    `),s("span",{class:"token builtin class-name"},"break"),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    -e`),s("span",{class:"token operator"},"|"),n("--enable"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"EnableStartup ..."'),n(`
    `),s("span",{class:"token assign-left variable"},"STARTTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    EnableStartup
    `),s("span",{class:"token assign-left variable"},"ENDTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"EnableStartup Elapsed: $[ '),s("span",{class:"token variable"},"$ENDTIME"),n(" - "),s("span",{class:"token variable"},"$STARTTIME"),n(' ] s"')]),n(`
    `),s("span",{class:"token builtin class-name"},"shift"),n(),s("span",{class:"token number"},"2"),n(`
    `),s("span",{class:"token builtin class-name"},"break"),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    -p`),s("span",{class:"token operator"},"|"),n("--package"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"Downloading Package ..."'),n(`
    `),s("span",{class:"token assign-left variable"},"STARTTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    DownloadPackages
    `),s("span",{class:"token assign-left variable"},"ENDTIME"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"date"),n(" +%s"),s("span",{class:"token variable"},")")]),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"Downloading Package Elapsed: $[ '),s("span",{class:"token variable"},"$ENDTIME"),n(" - "),s("span",{class:"token variable"},"$STARTTIME"),n(' ] s"')]),n(`
    `),s("span",{class:"token builtin class-name"},"shift"),n(),s("span",{class:"token number"},"2"),n(`
    `),s("span",{class:"token builtin class-name"},"break"),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    *`),s("span",{class:"token punctuation"},")"),n(`
    Usage
    `),s("span",{class:"token builtin class-name"},"exit"),n(),s("span",{class:"token number"},"1"),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token keyword"},"esac"),n(`
`),s("span",{class:"token keyword"},"done"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),S=c(`<h2 id="自启动" tabindex="-1"><a class="header-anchor" href="#自启动"><span>自启动</span></a></h2><h3 id="设置-etc-oratab" tabindex="-1"><a class="header-anchor" href="#设置-etc-oratab"><span>设置/etc/oratab</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token variable">$ORACLE_SID</span><span class="token builtin class-name">:</span><span class="token variable">$ORACLE_HOME</span>:<span class="token operator">&lt;</span>N<span class="token operator">|</span>Y<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>使用dbstart和dbshut脚本需设置为<code>$ORACLE_SID:$ORACLE_HOME:Y</code></p></blockquote><h3 id="开机启动脚本" tabindex="-1"><a class="header-anchor" href="#开机启动脚本"><span>开机启动脚本</span></a></h3>`,5),g=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token shebang important"},"#! /bin/sh "),n(`
`),s("span",{class:"token comment"},"# description: Oracle auto start-stop script."),n(`
`),s("span",{class:"token comment"},"#"),n(`
`),s("span",{class:"token comment"},"# Set ORACLE_HOME to be equivalent to the $ORACLE_HOME"),n(`
`),s("span",{class:"token comment"},"# from which you wish to execute dbstart and dbshut;"),n(`
`),s("span",{class:"token comment"},"#"),n(`
`),s("span",{class:"token comment"},"# Set ORA_OWNER to the user id of the owner of the"),n(`
`),s("span",{class:"token comment"},"# Oracle database in ORACLE_HOME."),n(`

`),s("span",{class:"token assign-left variable"},"ORA_HOME"),s("span",{class:"token operator"},"="),s("span",{class:"token operator"},"<"),n("Type your ORACLE_HOME "),s("span",{class:"token keyword"},"in"),n(" full path here"),s("span",{class:"token operator"},">"),n(`
`),s("span",{class:"token assign-left variable"},"ORA_OWNER"),s("span",{class:"token operator"},"="),s("span",{class:"token operator"},"<"),n("Type your Oracle account name here"),s("span",{class:"token operator"},">"),n(`

`),s("span",{class:"token keyword"},"case"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$1"),n('"')]),n(),s("span",{class:"token keyword"},"in"),n(`
`),s("span",{class:"token string"},"'start'"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token comment"},"# Start the Oracle databases:"),n(`
    `),s("span",{class:"token comment"},"# The following command assumes that the oracle login"),n(`
    `),s("span",{class:"token comment"},"# will not prompt the user for any values"),n(`
    `),s("span",{class:"token comment"},`# Remove "&" if you don't want startup as a background process.`),n(`
    `),s("span",{class:"token function"},"su"),n(" - "),s("span",{class:"token variable"},"$ORA_OWNER"),n(),s("span",{class:"token parameter variable"},"-c"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$ORA_HOME"),n("/bin/dbstart "),s("span",{class:"token variable"},"$ORA_HOME"),n('"')]),n(),s("span",{class:"token operator"},"&"),n(`
    `),s("span",{class:"token function"},"touch"),n(` /var/lock/subsys/dbora
    `),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`

`),s("span",{class:"token string"},"'stop'"),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token comment"},"# Stop the Oracle databases:"),n(`
    `),s("span",{class:"token comment"},"# The following command assumes that the oracle login"),n(`
    `),s("span",{class:"token comment"},"# will not prompt the user for any values"),n(`
    `),s("span",{class:"token function"},"su"),n(" - "),s("span",{class:"token variable"},"$ORA_OWNER"),n(),s("span",{class:"token parameter variable"},"-c"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$ORA_HOME"),n("/bin/dbshut "),s("span",{class:"token variable"},"$ORA_HOME"),n('"')]),n(),s("span",{class:"token operator"},"&"),n(`
    `),s("span",{class:"token function"},"rm"),n(),s("span",{class:"token parameter variable"},"-f"),n(` /var/lock/subsys/dbora
    `),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token keyword"},"esac"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),f=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token shebang important"},"#!/bin/bash "),n(`
`),s("span",{class:"token comment"},"#desciption:Oracle auto start-stop script."),n(`
`),s("span",{class:"token comment"},"#chkconfig:345 66 66"),n(`
`),s("span",{class:"token comment"},"#"),n(`
`),s("span",{class:"token comment"},"#Set ORA_HOME TO to be equivalent to the $ORACLE_HOME"),n(`
`),s("span",{class:"token comment"},"#from which you wish to execute dbstart and dbshut;"),n(`
`),s("span",{class:"token comment"},"#Set ORA_OWNER to the user id of the owner of the"),n(`
`),s("span",{class:"token comment"},"#Oracle database in ORA_HOME."),n(`

`),s("span",{class:"token comment"},"# vim /etc/init.d/oracle"),n(`
`),s("span",{class:"token builtin class-name"},"export"),n(),s("span",{class:"token assign-left variable"},"ORA_BASE"),s("span",{class:"token operator"},"="),n(`/u01/oracle
`),s("span",{class:"token builtin class-name"},"export"),n(),s("span",{class:"token assign-left variable"},"ORA_HOME"),s("span",{class:"token operator"},"="),n("/u01/oracle/product/11.2.0/db_1"),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token builtin class-name"},"export"),n(),s("span",{class:"token assign-left variable"},"ORACLE_USER"),s("span",{class:"token operator"},"="),n(`oracle


`),s("span",{class:"token keyword"},"case"),n(),s("span",{class:"token variable"},"$1"),n(),s("span",{class:"token keyword"},"in"),n(`
    start`),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token function"},"su"),n(" - "),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$ORACLE_USER"),n('"')]),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},`EOO
    lsnrctl start
    sqlplus /nolog<<EOS
    connect / as sysdba
    startup
EOS
    emctl start dbconsole
EOO`),n(`
`),s("span",{class:"token function"},"touch"),n(" /var/lock/subsys/"),s("span",{class:"token variable"},"$scriptname"),n(`
    `),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    stop`),s("span",{class:"token punctuation"},")"),n(`
`),s("span",{class:"token function"},"su"),n(" - "),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$ORACLE_USER"),n('"')]),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},`EOO
    lsnrctl stop
    sqlplus /nolog<<EOS
    connect / as sysdba
    shutdown immediate
EOS
    emctl stop dbconsole
EOO`),n(`
`),s("span",{class:"token function"},"rm"),n(),s("span",{class:"token parameter variable"},"-f"),n(` /var/lock/subsys/scriptname
    `),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
    *`),s("span",{class:"token punctuation"},")"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},[n('"Usage: '),s("span",{class:"token variable"},"$0"),n(' {start|stop}"')]),n(`
    `),s("span",{class:"token punctuation"},";"),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token keyword"},"esac"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),C=c(`<blockquote><p>如果监听名称不是默认“LISTENER”，需要在脚本中添加<code>$ORACLE_HOME/bin/lsnrctl {start|stop} listener_name</code></p></blockquote><h3 id="配置run-level实现自启动" tabindex="-1"><a class="header-anchor" href="#配置run-level实现自启动"><span>配置run-level实现自启动</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">chgrp</span> dba dbora
<span class="token function">chmod</span> <span class="token number">750</span> dbora
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /etc/init.d/dbora /etc/rc.d/rc0.d/K01dbora
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /etc/init.d/dbora /etc/rc.d/rc3.d/S99dbora
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /etc/init.d/dbora /etc/rc.d/rc5.d/S99dbora
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="字符集" tabindex="-1"><a class="header-anchor" href="#字符集"><span>字符集</span></a></h2><h3 id="更改数据库字符集" tabindex="-1"><a class="header-anchor" href="#更改数据库字符集"><span>更改数据库字符集</span></a></h3><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">shutdown</span> immediate<span class="token punctuation">;</span>
startup mount<span class="token punctuation">;</span>
<span class="token keyword">alter</span> system <span class="token keyword">enable</span> restricted <span class="token keyword">session</span><span class="token punctuation">;</span>
<span class="token keyword">alter</span> system <span class="token keyword">set</span> job_queue_processes<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">alter</span> system <span class="token keyword">set</span> aq_tm_processes<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">alter</span> <span class="token keyword">database</span> <span class="token keyword">open</span><span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">DATABASE</span> <span class="token keyword">character</span> <span class="token keyword">set</span> INTERNAL_USE AL32UTF8<span class="token punctuation">;</span>
<span class="token keyword">shutdown</span> immediate<span class="token punctuation">;</span>
startup<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rac-安装常见问题" tabindex="-1"><a class="header-anchor" href="#rac-安装常见问题"><span>RAC 安装常见问题</span></a></h2><ul><li>错误代码：INS-35354</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>The system on which you are attempting to install Oracle RAC is not part of a valid cluster.
   CAUSE: Before you can install Oracle RAC, you must install Oracle Grid Infrastructure on all servers (Oracle Clusterware and Oracle ASM) to create a cluster.
   ACTION: Oracle Grid Infrastructure is not installed. Install it either from the separate installation media included in your media pack, or install it by downloading it from Electronic Product Delivery (EPD) or the Oracle Technology Network (OTN). Oracle Grid Infrastructure normally is installed by a different operating system user than the one used for Oracle Database. It may need to be installed by your system administrator. See the installation guide for more details.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>原因： 由于在静默安装grid软件时，没有执行最后一步的脚本,导致 /u01/app/oraInventory/ContentsXML/inventory.xml 文件中缺失了：<code>CRS=&quot;true&quot;</code>。</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Execute Root Scripts successful.
As install user, execute the following script to complete the configuration.
	1. /u01/app/11.2.0.4/grid/cfgtoollogs/configToolAllCommands RESPONSE_FILE=
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code>[root@testdb1 ~]# cat /u01/app/oraInventory/ContentsXML/inventory.xml 
<span class="token prolog">&lt;?xml version=&quot;1.0&quot; standalone=&quot;yes&quot; ?&gt;</span>
<span class="token comment">&lt;!-- Copyright (c) 1999, 2013, Oracle and/or its affiliates.
All rights reserved. --&gt;</span>
<span class="token comment">&lt;!-- Do not modify the contents of this file by hand. --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>INVENTORY</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>VERSION_INFO</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SAVED_WITH</span><span class="token punctuation">&gt;</span></span>11.2.0.4.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SAVED_WITH</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MINIMUM_VER</span><span class="token punctuation">&gt;</span></span>2.1.0.6.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>MINIMUM_VER</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>VERSION_INFO</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HOME_LIST</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HOME</span> <span class="token attr-name">NAME</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Ora11g_gridinfrahome1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">LOC</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/u01/app/11.2.0.4/grid<span class="token punctuation">&quot;</span></span> <span class="token attr-name">TYPE</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>O<span class="token punctuation">&quot;</span></span> <span class="token attr-name">IDX</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NODE_LIST</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NODE</span> <span class="token attr-name">NAME</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>testdb1<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NODE</span> <span class="token attr-name">NAME</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>testdb2<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NODE_LIST</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HOME</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HOME_LIST</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>COMPOSITEHOME_LIST</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>COMPOSITEHOME_LIST</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>INVENTORY</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>解决方案</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>grid@testdb1 ~<span class="token punctuation">]</span>$ /u01/app/11.2.0.4/grid/cfgtoollogs/configToolAllCommands
Setting the invPtrLoc to /u01/app/11.2.0.4/grid/oraInst.loc

perform - mode is starting <span class="token keyword">for</span> action: configure


perform - mode finished <span class="token keyword">for</span> action: configure

You can see the log file: /u01/app/11.2.0.4/grid/cfgtoollogs/oui/configActions2023-03-02_09-18-05-AM.log
<span class="token punctuation">[</span>grid@testdb1 ~<span class="token punctuation">]</span>$ crsctl status res -t^C
<span class="token punctuation">[</span>grid@testdb1 ~<span class="token punctuation">]</span>$ <span class="token builtin class-name">exit</span>
<span class="token builtin class-name">logout</span>
<span class="token punctuation">[</span>root@testdb1 ~<span class="token punctuation">]</span><span class="token comment"># cat /u01/app/oraInventory/ContentsXML/inventory.xml </span>
<span class="token operator">&lt;</span>?xml <span class="token assign-left variable">version</span><span class="token operator">=</span><span class="token string">&quot;1.0&quot;</span> <span class="token assign-left variable">standalone</span><span class="token operator">=</span><span class="token string">&quot;yes&quot;</span> ?<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">!</span>-- Copyright <span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token number">1999</span>, <span class="token number">2013</span>, Oracle and/or its affiliates.
All rights reserved. --<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">!</span>-- Do not modify the contents of this <span class="token function">file</span> by hand. --<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>INVENTORY<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>VERSION_INFO<span class="token operator">&gt;</span>
   <span class="token operator">&lt;</span>SAVED_WITH<span class="token operator">&gt;</span><span class="token number">11.2</span>.0.4.<span class="token operator"><span class="token file-descriptor important">0</span>&lt;</span>/SAVED_WITH<span class="token operator">&gt;</span>
   <span class="token operator">&lt;</span>MINIMUM_VER<span class="token operator">&gt;</span><span class="token number">2.1</span>.0.6.<span class="token operator"><span class="token file-descriptor important">0</span>&lt;</span>/MINIMUM_VER<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/VERSION_INFO<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>HOME_LIST<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token environment constant">HOME</span> <span class="token assign-left variable">NAME</span><span class="token operator">=</span><span class="token string">&quot;Ora11g_gridinfrahome1&quot;</span> <span class="token assign-left variable">LOC</span><span class="token operator">=</span><span class="token string">&quot;/u01/app/11.2.0.4/grid&quot;</span> <span class="token assign-left variable">TYPE</span><span class="token operator">=</span><span class="token string">&quot;O&quot;</span> <span class="token assign-left variable">IDX</span><span class="token operator">=</span><span class="token string">&quot;1&quot;</span> <span class="token assign-left variable">CRS</span><span class="token operator">=</span><span class="token string">&quot;true&quot;</span><span class="token operator">&gt;</span>
   <span class="token operator">&lt;</span>NODE_LIST<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>NODE <span class="token assign-left variable">NAME</span><span class="token operator">=</span><span class="token string">&quot;testdb1&quot;</span>/<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>NODE <span class="token assign-left variable">NAME</span><span class="token operator">=</span><span class="token string">&quot;testdb2&quot;</span>/<span class="token operator">&gt;</span>
   <span class="token operator">&lt;</span>/NODE_LIST<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/<span class="token environment constant">HOME</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/HOME_LIST<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>COMPOSITEHOME_LIST<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/COMPOSITEHOME_LIST<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/INVENTORY<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>错误代码：INS-35423</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>FATAL] [INS-35423] The installer has detected that Oracle Clusterware is not running on local node.
   CAUSE: You have chosen to install Oracle RAC when Oracle Clusterware stack is not running on the local node.
   ACTION: Start the Oracle Clusterware stack by running the following command as the root user from the Oracle Clusterware home (Grid home) : /bin/crsctl start crs. When the Oracle Clusterware stack is running, restart the installer and continue with the Oracle RAC installation.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>原因：ORACLE_HOSTNAME 169.xxx.xxx.94 &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; Runinstaller picking wrong HOST name/IP</p></li><li><p>解决方案： 指定安装Oracle Database软件时选项ORACLE_HOSTNAME的值为当前节点hostname。</p></li></ul>`,17);function I(h,$){const t=r("CodeTabs");return p(),b("div",null,[k,i(t,{id:"3",data:[{id:"RAC"},{id:"common"},{id:"modb onkey"},{id:"11g"},{id:"12c"},{id:"18c"},{id:"19c"},{id:"21c"}],active:3},{title0:a(({value:e,isActive:l})=>[n("RAC")]),title1:a(({value:e,isActive:l})=>[n("common")]),title2:a(({value:e,isActive:l})=>[n("modb onkey")]),title3:a(({value:e,isActive:l})=>[n("11g")]),title4:a(({value:e,isActive:l})=>[n("12c")]),title5:a(({value:e,isActive:l})=>[n("18c")]),title6:a(({value:e,isActive:l})=>[n("19c")]),title7:a(({value:e,isActive:l})=>[n("21c")]),tab0:a(({value:e,isActive:l})=>[d]),tab1:a(({value:e,isActive:l})=>[v]),tab2:a(({value:e,isActive:l})=>[m]),tab3:a(({value:e,isActive:l})=>[_]),tab4:a(({value:e,isActive:l})=>[A]),tab5:a(({value:e,isActive:l})=>[R]),tab6:a(({value:e,isActive:l})=>[E]),tab7:a(({value:e,isActive:l})=>[O]),_:1}),S,i(t,{id:"47",data:[{id:"脚本1"},{id:"脚本2"}],active:0},{title0:a(({value:e,isActive:l})=>[n("脚本1")]),title1:a(({value:e,isActive:l})=>[n("脚本2")]),tab0:a(({value:e,isActive:l})=>[g]),tab1:a(({value:e,isActive:l})=>[f]),_:1}),C])}const T=o(u,[["render",I],["__file","install-oracle19c-on-centos7.html.vue"]]),N=JSON.parse('{"path":"/guide/database/oracle/installation/install-oracle19c-on-centos7.html","title":"在CentOS/RHEL 7.x上安装Oracle","lang":"zh-CN","frontmatter":{"title":"在CentOS/RHEL 7.x上安装Oracle","description":"自动安装脚本 自启动 设置/etc/oratab 使用dbstart和dbshut脚本需设置为$ORACLE_SID:$ORACLE_HOME:Y 开机启动脚本 如果监听名称不是默认“LISTENER”，需要在脚本中添加$ORACLE_HOME/bin/lsnrctl {start|stop} listener_name 配置run-level实现自启...","head":[["meta",{"property":"og:url","content":"https://github.com/abelit/abelit-datapeacock.git/guide/database/oracle/installation/install-oracle19c-on-centos7.html"}],["meta",{"property":"og:site_name","content":"数之雀"}],["meta",{"property":"og:title","content":"在CentOS/RHEL 7.x上安装Oracle"}],["meta",{"property":"og:description","content":"自动安装脚本 自启动 设置/etc/oratab 使用dbstart和dbshut脚本需设置为$ORACLE_SID:$ORACLE_HOME:Y 开机启动脚本 如果监听名称不是默认“LISTENER”，需要在脚本中添加$ORACLE_HOME/bin/lsnrctl {start|stop} listener_name 配置run-level实现自启..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-11T14:06:18.000Z"}],["meta",{"property":"article:author","content":"Abelit"}],["meta",{"property":"article:modified_time","content":"2024-05-11T14:06:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"在CentOS/RHEL 7.x上安装Oracle\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-11T14:06:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Abelit\\",\\"url\\":\\"https://github.com/abelit\\"}]}"]]},"headers":[{"level":2,"title":"自动安装脚本","slug":"自动安装脚本","link":"#自动安装脚本","children":[]},{"level":2,"title":"自启动","slug":"自启动","link":"#自启动","children":[{"level":3,"title":"设置/etc/oratab","slug":"设置-etc-oratab","link":"#设置-etc-oratab","children":[]},{"level":3,"title":"开机启动脚本","slug":"开机启动脚本","link":"#开机启动脚本","children":[]},{"level":3,"title":"配置run-level实现自启动","slug":"配置run-level实现自启动","link":"#配置run-level实现自启动","children":[]}]},{"level":2,"title":"字符集","slug":"字符集","link":"#字符集","children":[{"level":3,"title":"更改数据库字符集","slug":"更改数据库字符集","link":"#更改数据库字符集","children":[]}]},{"level":2,"title":"RAC 安装常见问题","slug":"rac-安装常见问题","link":"#rac-安装常见问题","children":[]}],"git":{"createdTime":1715436378000,"updatedTime":1715436378000,"contributors":[{"name":"ableit","email":"ychenid@live.com","commits":1}]},"readingTime":{"minutes":59.26,"words":17777},"filePathRelative":"guide/database/oracle/installation/install-oracle19c-on-centos7.md","localizedDate":"2024年5月11日","autoDesc":true,"excerpt":"<h2>自动安装脚本</h2>\\n\\n<h2>自启动</h2>\\n<h3>设置/etc/oratab</h3>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token variable\\">$ORACLE_SID</span><span class=\\"token builtin class-name\\">:</span><span class=\\"token variable\\">$ORACLE_HOME</span>:<span class=\\"token operator\\">&lt;</span>N<span class=\\"token operator\\">|</span>Y<span class=\\"token operator\\">&gt;</span>\\n</code></pre></div>"}');export{T as comp,N as data};
