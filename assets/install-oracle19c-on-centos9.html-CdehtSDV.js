import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as c,o,c as r,b as p,w as a,a as s,d as n}from"./app-DR5J2daJ.js";const b={},u=s("h2",{id:"安装脚本",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#安装脚本"},[s("span",null,"安装脚本")])],-1),k=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token shebang important"},"#!/bin/bash"),n(`
`),s("span",{class:"token comment"},"############ Author begin ##################################################"),n(`
`),s("span",{class:"token comment"},"## Author: Ableit"),n(`
`),s("span",{class:"token comment"},"## Date: 2022-07-20"),n(`
`),s("span",{class:"token comment"},"## Desc: Install Oracle Database"),n(`
`),s("span",{class:"token comment"},"## Env: RHEL/CentOS 9.x, Oracle Database 19c"),n(`
`),s("span",{class:"token comment"},"############ Author end ####################################################"),n(`
`),s("span",{class:"token comment"},"# mkswap /dev/vg-oradata/lv-swap"),n(`
`),s("span",{class:"token comment"},"# swapon /dev/vg-oradata/lv-swap"),n(`

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
`),s("span",{class:"token assign-left variable"},"OS_HOSTNAME"),s("span",{class:"token operator"},"="),n(`yslsdb
`),s("span",{class:"token assign-left variable"},"OS_IPADDR"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"ip"),n(),s("span",{class:"token parameter variable"},"-4"),n(" addr show dev eth0 "),s("span",{class:"token operator"},"|"),n(),s("span",{class:"token function"},"grep"),n(),s("span",{class:"token parameter variable"},"-oP"),n(),s("span",{class:"token string"},"'(?<=inet\\s)\\d+(\\.\\d+){3}'"),s("span",{class:"token variable"},")")]),n(`
`),s("span",{class:"token assign-left variable"},"OS_ORACLE_USER"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"oracle"'),n(`
`),s("span",{class:"token assign-left variable"},"OS_ORACLE_USER_PASSWORD"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"xmE3FahHPFFJ3Y"'),n(`

`),s("span",{class:"token assign-left variable"},"ORACLE_UNQNAME"),s("span",{class:"token operator"},"="),n(`yslsdb
`),s("span",{class:"token assign-left variable"},"ORACLE_SID"),s("span",{class:"token operator"},"="),n(`yslsdb
`),s("span",{class:"token assign-left variable"},"ORACLE_PDB_NAME"),s("span",{class:"token operator"},"="),n(`yslspdb
`),s("span",{class:"token assign-left variable"},"ORACLE_CHARSET"),s("span",{class:"token operator"},"="),n(`AL32UTF8
`),s("span",{class:"token assign-left variable"},"ORACLE_SYS_PASSWORD"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"Qs7JG9NxQctn52"'),n(`
`),s("span",{class:"token assign-left variable"},"ORACLE_SYSTEM_PASSWORD"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"Qs7JG9NxQctn52"'),n(`
`),s("span",{class:"token assign-left variable"},"ORACLE_PDB_ADMIN_PASSWORD"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"Qs7JG9NxQctn52"'),n(`
`),s("span",{class:"token assign-left variable"},"ORACLE_BASE_APP_DIR"),s("span",{class:"token operator"},"="),n(`/u01
`),s("span",{class:"token assign-left variable"},"ORACLE_BASE_DATA_DIR"),s("span",{class:"token operator"},"="),n(`/data
`),s("span",{class:"token assign-left variable"},"ORACLE_BASE_RECOVERY_AREA_DIR"),s("span",{class:"token operator"},"="),n(`/data
`),s("span",{class:"token assign-left variable"},"ORACLE_DATABASE_VERSION"),s("span",{class:"token operator"},"="),s("span",{class:"token number"},"19.3"),n(`.0.0
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
    `),s("span",{class:"token comment"},"# yum install -y \\"),n(`
    `),s("span",{class:"token comment"},"#     bc binutils compat-libcap1 compat-libcap1-1.10-3.el7.x86_64 compat-libstdc++-33 \\"),n(`
    `),s("span",{class:"token comment"},"#     compat-libstdc++-33.i686 dtrace-utils elfutils-libelf elfutils-libelf-devel \\"),n(`
    `),s("span",{class:"token comment"},"#     elfutils-libelf-devel.i686 elfutils-libelf.i686 fontconfig-devel gcc gcc-c++ \\"),n(`
    `),s("span",{class:"token comment"},"#     glibc glibc-2.17-36.el7.i686 glibc-2.17-36.el7.x86_64 glibc-devel glibc-devel.i686 \\"),n(`
    `),s("span",{class:"token comment"},"#     glibc.i686 ksh libaio libaio-devel libaio-devel.i686 libaio.i686 libcap \\"),n(`
    `),s("span",{class:"token comment"},"#     libdtrace-ctf-devel libgcc libgcc.i686 librdmacm-devel libstdc++ libstdc++-devel \\"),n(`
    `),s("span",{class:"token comment"},"#     libstdc++-devel.i686 libstdc++.i686 libX11 libX11.i686 libXau libXau.i686 libxcb \\"),n(`
    `),s("span",{class:"token comment"},"#     libxcb.i686 libXext libXext.i686 libXi libXi.i686 libXrender libXrender-devel libXtst \\"),n(`
    `),s("span",{class:"token comment"},"#     libXtst.i686 make net-tools nfs-utils policycoreutils policycoreutils-python python \\"),n(`
    `),s("span",{class:"token comment"},"#     python-configshell python-rtslib python-six smartmontools sysstat targetcli unixODBC \\"),n(`
    `),s("span",{class:"token comment"},"#     unixODBC-devel unzip zlib-devel"),n(`
    dnf `),s("span",{class:"token function"},"install"),n(),s("span",{class:"token parameter variable"},"-y"),n(),s("span",{class:"token function"},"bc"),n(`
    dnf `),s("span",{class:"token function"},"install"),n(),s("span",{class:"token parameter variable"},"-y"),n(` binutils
    dnf `),s("span",{class:"token function"},"install"),n(),s("span",{class:"token parameter variable"},"-y"),n(` compat-openssl11
    dnf `),s("span",{class:"token function"},"install"),n(),s("span",{class:"token parameter variable"},"-y"),n(` elfutils-libelf
    dnf `),s("span",{class:"token function"},"install"),n(),s("span",{class:"token parameter variable"},"-y"),n(` fontconfig
    dnf `),s("span",{class:"token function"},"install"),n(),s("span",{class:"token parameter variable"},"-y"),n(` glibc
    dnf `),s("span",{class:"token function"},"install"),n(),s("span",{class:"token parameter variable"},"-y"),n(` glibc-devel
    dnf `),s("span",{class:"token function"},"install"),n(),s("span",{class:"token parameter variable"},"-y"),n(` ksh
    dnf `),s("span",{class:"token function"},"install"),n(),s("span",{class:"token parameter variable"},"-y"),n(` libaio
    dnf `),s("span",{class:"token function"},"install"),n(),s("span",{class:"token parameter variable"},"-y"),n(` libasan
    dnf `),s("span",{class:"token function"},"install"),n(),s("span",{class:"token parameter variable"},"-y"),n(` liblsan
    dnf `),s("span",{class:"token function"},"install"),n(),s("span",{class:"token parameter variable"},"-y"),n(` libX11
    dnf `),s("span",{class:"token function"},"install"),n(),s("span",{class:"token parameter variable"},"-y"),n(` libXau
    dnf `),s("span",{class:"token function"},"install"),n(),s("span",{class:"token parameter variable"},"-y"),n(` libXi
    dnf `),s("span",{class:"token function"},"install"),n(),s("span",{class:"token parameter variable"},"-y"),n(` libXrender
    dnf `),s("span",{class:"token function"},"install"),n(),s("span",{class:"token parameter variable"},"-y"),n(` libXtst
    dnf `),s("span",{class:"token function"},"install"),n(),s("span",{class:"token parameter variable"},"-y"),n(` libxcrypt-compat
    dnf `),s("span",{class:"token function"},"install"),n(),s("span",{class:"token parameter variable"},"-y"),n(` libgcc
    dnf `),s("span",{class:"token function"},"install"),n(),s("span",{class:"token parameter variable"},"-y"),n(` libibverbs
    dnf `),s("span",{class:"token function"},"install"),n(),s("span",{class:"token parameter variable"},"-y"),n(` libnsl
    dnf `),s("span",{class:"token function"},"install"),n(),s("span",{class:"token parameter variable"},"-y"),n(` librdmacm
    dnf `),s("span",{class:"token function"},"install"),n(),s("span",{class:"token parameter variable"},"-y"),n(` libstdc++
    dnf `),s("span",{class:"token function"},"install"),n(),s("span",{class:"token parameter variable"},"-y"),n(` libxcb
    dnf `),s("span",{class:"token function"},"install"),n(),s("span",{class:"token parameter variable"},"-y"),n(` libvirt-libs
    dnf `),s("span",{class:"token function"},"install"),n(),s("span",{class:"token parameter variable"},"-y"),n(),s("span",{class:"token function"},"make"),n(`
    dnf `),s("span",{class:"token function"},"install"),n(),s("span",{class:"token parameter variable"},"-y"),n(` policycoreutils
    dnf `),s("span",{class:"token function"},"install"),n(),s("span",{class:"token parameter variable"},"-y"),n(` policycoreutils-python-utils
    dnf `),s("span",{class:"token function"},"install"),n(),s("span",{class:"token parameter variable"},"-y"),n(` smartmontools
    dnf `),s("span",{class:"token function"},"install"),n(),s("span",{class:"token parameter variable"},"-y"),n(` sysstat
    dnf `),s("span",{class:"token function"},"install"),n(),s("span",{class:"token parameter variable"},"-y"),n(` glibc-headers
    dnf `),s("span",{class:"token function"},"install"),n(),s("span",{class:"token parameter variable"},"-y"),n(` ipmiutil
    dnf `),s("span",{class:"token function"},"install"),n(),s("span",{class:"token parameter variable"},"-y"),n(` libnsl2
    dnf `),s("span",{class:"token function"},"install"),n(),s("span",{class:"token parameter variable"},"-y"),n(` libnsl2-devel
    dnf `),s("span",{class:"token function"},"install"),n(),s("span",{class:"token parameter variable"},"-y"),n(` net-tools
    dnf `),s("span",{class:"token function"},"install"),n(),s("span",{class:"token parameter variable"},"-y"),n(` nfs-utils 

    `),s("span",{class:"token comment"},"# Added by me."),n(`
    dnf `),s("span",{class:"token function"},"install"),n(),s("span",{class:"token parameter variable"},"-y"),n(` unixODBC

    dnf `),s("span",{class:"token function"},"install"),n(),s("span",{class:"token parameter variable"},"-y"),n(),s("span",{class:"token function"},"unzip"),n(`
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
export PATH=\\`),s("span",{class:"token variable"},"$ORACLE_HOME"),n("/bin:\\"),s("span",{class:"token variable"},"$ORACLE_HOME"),n("/OPatch:\\"),s("span",{class:"token environment constant"},"$PATH"),n(`

### End Oracle Env ###
EOF`)]),n(`
    `),s("span",{class:"token function"},"sleep"),n(),s("span",{class:"token number"},"1"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(),s("span",{class:"token function-name function"},"InstallSoftware"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"10.unzip oracle database package ..."'),n(`
    `),s("span",{class:"token comment"},"# unzip -oq -d $ORACLE_SOFTWARE_UNPACK_DIR $OS_PACKAGE_DIR/LINUX.X64_193000_db_home.zip"),n(`

    `),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},'"change directory permission ..."'),n(`
    `),s("span",{class:"token function"},"chown"),n(),s("span",{class:"token parameter variable"},"-R"),n(),s("span",{class:"token variable"},"$OS_ORACLE_USER"),n(":oinstall "),s("span",{class:"token variable"},"$OS_PACKAGE_DIR"),n(`
    `),s("span",{class:"token function"},"chmod"),n(),s("span",{class:"token parameter variable"},"-R"),n(),s("span",{class:"token number"},"775"),n(),s("span",{class:"token variable"},"$OS_PACKAGE_DIR"),n(`

    `),s("span",{class:"token assign-left variable"},"OPATCH_FILE"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"p6880880_190000_Linux-x86-64.zip"'),n(`
    `),s("span",{class:"token assign-left variable"},"PATCH_FILE"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"p35742413_190000_Linux-x86-64.zip"'),n(`
    `),s("span",{class:"token assign-left variable"},"PATCH_TOP"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"${OS_PACKAGE_DIR}"),n(`/35742413
    `),s("span",{class:"token assign-left variable"},"PATCH_PATH1"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"${PATCH_TOP}"),n(`/35643107
    `),s("span",{class:"token assign-left variable"},"PATCH_PATH2"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"${PATCH_TOP}"),n(`/35648110
    `),s("span",{class:"token function"},"su"),n(" - "),s("span",{class:"token variable"},"$OS_ORACLE_USER"),n(),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOF
cd `),s("span",{class:"token variable"},"$ORACLE_HOME"),n(`
unzip -oq `),s("span",{class:"token variable"},"$OS_PACKAGE_DIR"),n(`/LINUX.X64_193000_db_home.zip
unzip -oq `),s("span",{class:"token variable"},"${OS_PACKAGE_DIR}"),n("/"),s("span",{class:"token variable"},"${OPATCH_FILE}"),n(`

cd `),s("span",{class:"token variable"},"${OS_PACKAGE_DIR}"),n(`
unzip -oq `),s("span",{class:"token variable"},"${OS_PACKAGE_DIR}"),n("/"),s("span",{class:"token variable"},"${PATCH_FILE}"),n(`

echo "11.install database software ..."
cd `),s("span",{class:"token variable"},"$ORACLE_HOME"),n(`
export CV_ASSUME_DISTID=OEL8
./runInstaller -ignorePrereq -waitforcompletion -silent                        \\
    -applyRU `),s("span",{class:"token variable"},"${PATCH_PATH1}"),n(`                                                    \\
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

    `),s("span",{class:"token assign-left variable"},[s("span",{class:"token environment constant"},"PATH")]),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"${ORACLE_HOME}"),n("/OPatch:"),s("span",{class:"token variable"},[n("${"),s("span",{class:"token environment constant"},"PATH"),n("}")]),n(`
    `),s("span",{class:"token assign-left variable"},"OPATCH_FILE"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"p6880880_190000_Linux-x86-64.zip"'),n(`
    `),s("span",{class:"token assign-left variable"},"PATCH_FILE"),s("span",{class:"token operator"},"="),s("span",{class:"token string"},'"p35742413_190000_Linux-x86-64.zip"'),n(`
    `),s("span",{class:"token assign-left variable"},"PATCH_TOP"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"${OS_PACKAGE_DIR}"),n(`/35742413
    `),s("span",{class:"token assign-left variable"},"PATCH_PATH1"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"${PATCH_TOP}"),n(`/35643107
    `),s("span",{class:"token assign-left variable"},"PATCH_PATH2"),s("span",{class:"token operator"},"="),s("span",{class:"token variable"},"${PATCH_TOP}"),n(`/35648110

    `),s("span",{class:"token function"},"su"),n(" - "),s("span",{class:"token variable"},"$OS_ORACLE_USER"),n(),s("span",{class:"token operator"},"<<"),s("span",{class:"token string"},[n(`EOF
cd `),s("span",{class:"token variable"},"${PATCH_PATH2}"),n(`
opatch prereq CheckConflictAgainstOHWithDetail -ph ./
opatch apply -silent
EOF`)]),n(`
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
    `),s("span",{class:"token function"},"rm"),n(),s("span",{class:"token parameter variable"},"-rf"),n(),s("span",{class:"token variable"},"$ORACLE_BASE"),n(`
    `),s("span",{class:"token function"},"rm"),n(),s("span",{class:"token parameter variable"},"-rf"),n(),s("span",{class:"token variable"},"$ORACLE_HOME"),n(`
    `),s("span",{class:"token function"},"rm"),n(),s("span",{class:"token parameter variable"},"-rf"),n(),s("span",{class:"token variable"},"$ORACLE_DATA_DIR"),n(`
    `),s("span",{class:"token function"},"rm"),n(),s("span",{class:"token parameter variable"},"-rf"),n(),s("span",{class:"token variable"},"$ORACLE_ORA_INVENTORY"),n(`
    `),s("span",{class:"token function"},"rm"),n(),s("span",{class:"token parameter variable"},"-rf"),n(),s("span",{class:"token variable"},"$ORACLE_RECOVERY_AREA_DIR"),n(`


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
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1);function v(m,d){const e=c("CodeTabs");return o(),r("div",null,[u,p(e,{id:"3",data:[{id:"19c"}],active:0},{title0:a(({value:l,isActive:t})=>[n("19c")]),tab0:a(({value:l,isActive:t})=>[k]),_:1})])}const A=i(b,[["render",v],["__file","install-oracle19c-on-centos9.html.vue"]]),O=JSON.parse('{"path":"/guide/database/oracle/installation/install-oracle19c-on-centos9.html","title":"在CentOS/RHEL 9.x上安装Oracle","lang":"zh-CN","frontmatter":{"title":"在CentOS/RHEL 9.x上安装Oracle","description":"安装脚本","head":[["meta",{"property":"og:url","content":"https://github.com/abelit/abelit-datapeacock.git/guide/database/oracle/installation/install-oracle19c-on-centos9.html"}],["meta",{"property":"og:site_name","content":"数之雀"}],["meta",{"property":"og:title","content":"在CentOS/RHEL 9.x上安装Oracle"}],["meta",{"property":"og:description","content":"安装脚本"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-11T14:06:18.000Z"}],["meta",{"property":"article:author","content":"Abelit"}],["meta",{"property":"article:modified_time","content":"2024-05-11T14:06:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"在CentOS/RHEL 9.x上安装Oracle\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-11T14:06:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Abelit\\",\\"url\\":\\"https://github.com/abelit\\"}]}"]]},"headers":[{"level":2,"title":"安装脚本","slug":"安装脚本","link":"#安装脚本","children":[]}],"git":{"createdTime":1715436378000,"updatedTime":1715436378000,"contributors":[{"name":"ableit","email":"ychenid@live.com","commits":1}]},"readingTime":{"minutes":6.68,"words":2005},"filePathRelative":"guide/database/oracle/installation/install-oracle19c-on-centos9.md","localizedDate":"2024年5月11日","autoDesc":true,"excerpt":"<h2>安装脚本</h2>\\n\\n"}');export{A as comp,O as data};
