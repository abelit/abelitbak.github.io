import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o,c as r,b as p,w as a,a as n,d as s}from"./app-DR5J2daJ.js";const u={},k=n("h2",{id:"归档清理脚本",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#归档清理脚本"},[n("span",null,"归档清理脚本")])],-1),b=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token shebang important"},"#!/bin/bash"),s(`
`),n("span",{class:"token comment"},"# Function: Backup database by rman"),s(`
`),n("span",{class:"token comment"},"# Usage: crontab on linux/Unix, ie."),s(`
`),n("span",{class:"token comment"},'# root, crontab: 0 0 * * * su - oracle -c  "/opt/dba/scripts/ora_delete_archivelog.sh -i testdb -d 7" > /dev/null 2>&1'),s(`
`),n("span",{class:"token comment"},"# oracle, crontab: 0 0 * * * /home/oracle/dba/scripts/ora_delete_archivelog.sh delarch -i ystwo -d 7 >> /home/oracle/dba/log/scripts.log 2>&1"),s(`
`),n("span",{class:"token comment"},"# Last modfiy: 2023-04-07"),s(`
`),n("span",{class:"token comment"},"# Author: abelit"),s(`


`),n("span",{class:"token comment"},"##################### start user conf #############"),s(`
`),n("span",{class:"token comment"},"# Set oracle environment"),s(`
`),n("span",{class:"token builtin class-name"},"source"),s(` /home/oracle/.bash_profile
`),n("span",{class:"token assign-left variable"},"ORACLE_HOME"),n("span",{class:"token operator"},"="),n("span",{class:"token variable"},"$ORACLE_HOME"),s(`
`),n("span",{class:"token assign-left variable"},"DBA_LOGPATH"),n("span",{class:"token operator"},"="),s(`/home/oracle/dba/logs
`),n("span",{class:"token assign-left variable"},"DBA_SCRIPTPATH"),n("span",{class:"token operator"},"="),s(`/home/oracle/dba/scripts

`),n("span",{class:"token assign-left variable"},"ARCHIVE_SAVE_DAYS"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"7"),s(`
`),n("span",{class:"token comment"},"#################### end user conf ################"),s(`


`),n("span",{class:"token comment"},"##################### start auto preparing ##############"),s(`
`),n("span",{class:"token comment"},"# TODAY"),s(`
`),n("span",{class:"token assign-left variable"},"RUNNING_TIME"),n("span",{class:"token operator"},"="),n("span",{class:"token variable"},[n("span",{class:"token variable"},"`"),n("span",{class:"token function"},"date"),s(),n("span",{class:"token string"},'"+%Y%m%d%H"'),n("span",{class:"token variable"},"`")]),s(`
`),n("span",{class:"token assign-left variable"},"ORACLE_SID"),n("span",{class:"token operator"},"="),s(`testdb

`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token operator"},"!"),s(),n("span",{class:"token parameter variable"},"-d"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$DBA_LOGPATH"),s('"')]),s(),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
	`),n("span",{class:"token function"},"mkdir"),s(),n("span",{class:"token parameter variable"},"-p"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$DBA_LOGPATH"),s('"')]),s(`
`),n("span",{class:"token keyword"},"fi"),s(`

`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token operator"},"!"),s(),n("span",{class:"token parameter variable"},"-d"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$DBA_SCRIPTPATH"),s('"')]),s(),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
	`),n("span",{class:"token function"},"mkdir"),s(),n("span",{class:"token parameter variable"},"-p"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$DBA_SCRIPTPATH"),s('"')]),s(`
`),n("span",{class:"token keyword"},"fi"),s(`

`),n("span",{class:"token comment"},`# ( printf -- '0 4 8-14 * *  test $(date +\\%u) -eq 7 && echo "2nd Sunday"' ) | crontab`),s(`
`),n("span",{class:"token assign-left variable"},"DELETEARCH_CRONTAB_ENTRY"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},[s(`"0 0 * * * sh -c '`),n("span",{class:"token variable"},[n("span",{class:"token variable"},"`"),n("span",{class:"token builtin class-name"},"pwd"),n("span",{class:"token variable"},"`")]),s("/"),n("span",{class:"token variable"},[n("span",{class:"token variable"},"`"),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$0"),s('"')]),s(),n("span",{class:"token operator"},"|"),n("span",{class:"token function"},"sed"),s(),n("span",{class:"token string"},"'s#./##g'"),n("span",{class:"token variable"},"`")]),s(" delarch -i "),n("span",{class:"token variable"},"$ORACLE_SID"),s(" -d "),n("span",{class:"token variable"},"$ARCHIVE_SAVE_DAYS"),s("' >> "),n("span",{class:"token variable"},"$DBA_LOGPATH"),s('/scripts.log 2>&1"')]),s(`
`),n("span",{class:"token comment"},"##################### end auto preparing ##############"),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function-name function"},"delete_options_usage"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"cat"),s(),n("span",{class:"token operator"},"<<"),n("span",{class:"token string"},[s(`EOF
Usage: `),n("span",{class:"token variable"},"$0"),s(` -h|--helpUsage, help message.
       `),n("span",{class:"token variable"},"$0"),s(` -d|--days, archvielog saving policy.
       `),n("span",{class:"token variable"},"$0"),s(` -i|--instance, oracle database instance.
EOF`)]),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function-name function"},"delete_options"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token variable"},[s("${"),n("span",{class:"token operator"},"#"),s("}")]),s(),n("span",{class:"token parameter variable"},"-gt"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"do"),s(`
        `),n("span",{class:"token assign-left variable"},"error_message"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},[s(`"Error: a value is needed for '`),n("span",{class:"token variable"},"$1"),s(`'"`)]),s(`
        `),n("span",{class:"token keyword"},"case"),s(),n("span",{class:"token variable"},"$1"),s(),n("span",{class:"token keyword"},"in"),s(`
        `),n("span",{class:"token parameter variable"},"-d"),s(),n("span",{class:"token operator"},"|"),s(" --days"),n("span",{class:"token punctuation"},")"),s(`
            `),n("span",{class:"token assign-left variable"},"ARCHIVE_SAVE_DAYS"),n("span",{class:"token operator"},"="),n("span",{class:"token variable"},[s("${2"),n("span",{class:"token operator"},":?"),s("$error_message}")]),s(`
            `),n("span",{class:"token builtin class-name"},"shift"),s(),n("span",{class:"token number"},"2"),s(`
            `),n("span",{class:"token punctuation"},";"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token parameter variable"},"-i"),s(),n("span",{class:"token operator"},"|"),s(" --instance"),n("span",{class:"token punctuation"},")"),s(`
            `),n("span",{class:"token assign-left variable"},"ORACLE_SID"),n("span",{class:"token operator"},"="),n("span",{class:"token variable"},[s("${2"),n("span",{class:"token operator"},":?"),s("$error_message}")]),s(`
            `),n("span",{class:"token builtin class-name"},"shift"),s(),n("span",{class:"token number"},"2"),s(`
            `),n("span",{class:"token punctuation"},";"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token parameter variable"},"-h"),s(),n("span",{class:"token operator"},"|"),s(" --help"),n("span",{class:"token punctuation"},")"),s(`
            delete_options_usage
            `),n("span",{class:"token builtin class-name"},"shift"),s(),n("span",{class:"token number"},"2"),s(`
            `),n("span",{class:"token builtin class-name"},"break"),s(`
            `),n("span",{class:"token punctuation"},";"),n("span",{class:"token punctuation"},";"),s(`
        *`),n("span",{class:"token punctuation"},")"),s(`
            `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},[s('"unknown option '),n("span",{class:"token variable"},"$1"),s('"')]),s(`
            `),n("span",{class:"token builtin class-name"},"break"),s(`
            `),n("span",{class:"token punctuation"},";"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"esac"),s(`
    `),n("span",{class:"token keyword"},"done"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function-name function"},"delete_archivelog"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
delete_options `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$@"),s('"')]),s(`

`),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token parameter variable"},"-e"),s(" This will delete archivelog completed before "),n("span",{class:"token string"},[s('"'),n("span",{class:"token entity",title:"\\033"},"\\033"),s("[31m "),n("span",{class:"token variable"},"$ARCHIVE_SAVE_DAYS"),s(),n("span",{class:"token entity",title:"\\033"},"\\033"),s('[0m"')]),s(" days of oracle instance "),n("span",{class:"token string"},[s('"'),n("span",{class:"token entity",title:"\\033"},"\\033"),s("[31m "),n("span",{class:"token variable"},"$ORACLE_SID"),s(),n("span",{class:"token entity",title:"\\033"},"\\033"),s('[0m"')]),s(),n("span",{class:"token punctuation"},".."),s(`.

`),n("span",{class:"token variable"},"$ORACLE_HOME"),s("/bin/rman "),n("span",{class:"token assign-left variable"},"log"),n("span",{class:"token operator"},"="),n("span",{class:"token variable"},"$DBA_LOGPATH"),s("/ora_delete_archive.log "),n("span",{class:"token operator"},"<<"),n("span",{class:"token string"},[s(`EOF
connect target /
run {
    delete noprompt archivelog all completed before 'sysdate-`),n("span",{class:"token variable"},"$ARCHIVE_SAVE_DAYS"),s(`';
    crosscheck archivelog all;
    delete noprompt expired archivelog all;
}
exit;
EOF`)]),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function-name function"},"add_crontab"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token assign-left variable"},"cron_entry"),n("span",{class:"token operator"},"="),n("span",{class:"token variable"},[n("span",{class:"token variable"},"$("),n("span",{class:"token function"},"crontab"),s(),n("span",{class:"token parameter variable"},"-l"),n("span",{class:"token variable"},")")]),s(`
    `),n("span",{class:"token assign-left variable"},"is_in_cron"),n("span",{class:"token operator"},"="),n("span",{class:"token variable"},[n("span",{class:"token variable"},"`"),n("span",{class:"token builtin class-name"},"pwd"),n("span",{class:"token variable"},"`")]),s("/"),n("span",{class:"token variable"},[n("span",{class:"token variable"},"`"),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$0"),s('"')]),s(),n("span",{class:"token operator"},"|"),n("span",{class:"token function"},"sed"),s(),n("span",{class:"token string"},"'s#./##g'"),n("span",{class:"token variable"},"`")]),s(`

    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token variable"},"$cron_entry"),s(),n("span",{class:"token operator"},"!="),s(" *"),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$is_in_cron"),s('"')]),s("* "),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token variable"},"$cron_entry"),s(),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token string"},'""'),s(),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
            `),n("span",{class:"token builtin class-name"},"printf"),s(),n("span",{class:"token string"},"'%s\\n'"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$cron_entry"),s('"')]),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$DELETEARCH_CRONTAB_ENTRY"),s('"')]),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token function"},"crontab"),s(` -
        `),n("span",{class:"token keyword"},"else"),s(`
            `),n("span",{class:"token builtin class-name"},"printf"),s(),n("span",{class:"token string"},"'%s\\n'"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$DELETEARCH_CRONTAB_ENTRY"),s('"')]),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token function"},"crontab"),s(` -
        `),n("span",{class:"token keyword"},"fi"),s(`
    `),n("span",{class:"token keyword"},"fi"),s(`

    `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token parameter variable"},"-e"),s(" Adding "),n("span",{class:"token string"},[s('"'),n("span",{class:"token entity",title:"\\033"},"\\033"),s("[31m "),n("span",{class:"token variable"},"$DELETEARCH_CRONTAB_ENTRY"),s(),n("span",{class:"token entity",title:"\\033"},"\\033"),s('[0m"')]),s(" to "),n("span",{class:"token function"},"crontab"),s(" successfully"),n("span",{class:"token operator"},"!"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`


`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function-name function"},"Usage"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"cat"),s(),n("span",{class:"token operator"},"<<"),n("span",{class:"token string"},[s(`EOF
Usage: `),n("span",{class:"token variable"},"$0"),s(` <subcommand> [option]
    subcommand:
       help, help message.
       delarch, delete archive log
       addcron, add it to crontab
EOF`)]),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function-name function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token variable"},[n("span",{class:"token punctuation"},"(("),s("${#} "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"))")]),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
        Usage `),n("span",{class:"token number"},"0"),s(`
        `),n("span",{class:"token builtin class-name"},"exit"),s(),n("span",{class:"token number"},"1"),s(`
    `),n("span",{class:"token keyword"},"fi"),s(`

    `),n("span",{class:"token keyword"},"case"),s(),n("span",{class:"token variable"},"${1}"),s(),n("span",{class:"token keyword"},"in"),s(`
    `),n("span",{class:"token builtin class-name"},"help"),n("span",{class:"token punctuation"},")"),s(`
        Usage
        `),n("span",{class:"token punctuation"},";"),n("span",{class:"token punctuation"},";"),s(`
    delarch`),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},'"staring deleting archivelog ..."'),s(),n("span",{class:"token operator"},">>"),s(),n("span",{class:"token variable"},"$DBA_LOGPATH"),s(`/ora_delete_archive.log
        `),n("span",{class:"token assign-left variable"},"STARTTIME"),n("span",{class:"token operator"},"="),n("span",{class:"token variable"},[n("span",{class:"token variable"},"$("),n("span",{class:"token function"},"date"),s(" +%s"),n("span",{class:"token variable"},")")]),s(`
        delete_archivelog `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},[s("${@"),n("span",{class:"token operator"},":"),s("2}")]),s('"')]),s(`
        `),n("span",{class:"token assign-left variable"},"ENDTIME"),n("span",{class:"token operator"},"="),n("span",{class:"token variable"},[n("span",{class:"token variable"},"$("),n("span",{class:"token function"},"date"),s(" +%s"),n("span",{class:"token variable"},")")]),s(`
        `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},[s('"end deleting archivelog: $[ '),n("span",{class:"token variable"},"$ENDTIME"),s(" - "),n("span",{class:"token variable"},"$STARTTIME"),s(' ] s"')]),s(),n("span",{class:"token operator"},">>"),s(),n("span",{class:"token variable"},"$DBA_LOGPATH"),s(`/ora_delete_archive.log
        `),n("span",{class:"token punctuation"},";"),n("span",{class:"token punctuation"},";"),s(`
    addcron`),n("span",{class:"token punctuation"},")"),s(`
        add_crontab
        `),n("span",{class:"token punctuation"},";"),n("span",{class:"token punctuation"},";"),s(`
    *`),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},[s('"unknown command: '),n("span",{class:"token variable"},"$1"),s('"')]),s(`
        Usage
        `),n("span",{class:"token builtin class-name"},"exit"),s(),n("span",{class:"token number"},"1"),s(`
        `),n("span",{class:"token punctuation"},";"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"esac"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`


main `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$@"),s('"')]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),d=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token shebang important"},"#!/bin/bash"),s(`
`),n("span",{class:"token comment"},"# Description: Backup database by rman"),s(`
`),n("span",{class:"token comment"},"# Usage: crontab on linux/Unix, ie."),s(`
`),n("span",{class:"token comment"},'# 0 0 * * * su - oracle -c  "/opt/dba/scripts/ora_delete_archivelog.sh -i orcl -d 30" > /dev/null 2>&1'),s(`
`),n("span",{class:"token comment"},"# 0 0 * * * /opt/dba/scripts/ora_delete_archivelog.sh -i orcl -d 30 > /dev/null 2>&1"),s(`
`),n("span",{class:"token comment"},"# Last modfiy: 2023-04-07"),s(`
`),n("span",{class:"token comment"},"# Author: abelit"),s(`


`),n("span",{class:"token comment"},"##################### start user conf #############"),s(`
`),n("span",{class:"token comment"},"# Set oracle environment"),s(`
`),n("span",{class:"token comment"},"# source /home/oracle/.bash_profile"),s(`
`),n("span",{class:"token assign-left variable"},"ORACLE_HOME"),n("span",{class:"token operator"},"="),n("span",{class:"token variable"},"$ORACLE_HOME"),s(`
`),n("span",{class:"token assign-left variable"},"DBA_LOGPATH"),n("span",{class:"token operator"},"="),s(`/opt/dba/logs
`),n("span",{class:"token assign-left variable"},"DBA_SCRIPTPATH"),n("span",{class:"token operator"},"="),s(`/opt/dba/scripts
`),n("span",{class:"token comment"},"#################### end user conf ################"),s(`


`),n("span",{class:"token comment"},"##################### start auto preparing ##############"),s(`
`),n("span",{class:"token comment"},"# TODAY"),s(`
`),n("span",{class:"token assign-left variable"},"RUNNING_TIME"),n("span",{class:"token operator"},"="),n("span",{class:"token variable"},[n("span",{class:"token variable"},"`"),n("span",{class:"token function"},"date"),s(),n("span",{class:"token string"},'"+%Y%m%d%H"'),n("span",{class:"token variable"},"`")]),s(`
`),n("span",{class:"token assign-left variable"},"ORACLE_SID"),n("span",{class:"token operator"},"="),s(`testdb
`),n("span",{class:"token assign-left variable"},"ARCHIVE_SAVE_DAYS"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"7"),s(`

`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token operator"},"!"),s(),n("span",{class:"token parameter variable"},"-d"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$DBA_LOGPATH"),s('"')]),s(),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
	`),n("span",{class:"token function"},"mkdir"),s(),n("span",{class:"token parameter variable"},"-p"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$DBA_LOGPATH"),s('"')]),s(`
`),n("span",{class:"token keyword"},"fi"),s(`

`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token operator"},"!"),s(),n("span",{class:"token parameter variable"},"-d"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$DBA_SCRIPTPATH"),s('"')]),s(),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"then"),s(`
	`),n("span",{class:"token function"},"mkdir"),s(),n("span",{class:"token parameter variable"},"-p"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$DBA_SCRIPTPATH"),s('"')]),s(`
`),n("span",{class:"token keyword"},"fi"),s(`
`),n("span",{class:"token comment"},"##################### end auto preparing ##############"),s(`


`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function-name function"},"delete_options_usage"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"cat"),s(),n("span",{class:"token operator"},"<<"),n("span",{class:"token string"},[s(`EOF
Usage: `),n("span",{class:"token variable"},"$0"),s(` -h|--helpUsage, help message.
       `),n("span",{class:"token variable"},"$0"),s(` -d|--days, archvielog saving policy.
       `),n("span",{class:"token variable"},"$0"),s(` -i|--instance, oracle database instance.
EOF`)]),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function-name function"},"delete_options"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token variable"},[s("${"),n("span",{class:"token operator"},"#"),s("}")]),s(),n("span",{class:"token parameter variable"},"-gt"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"do"),s(`
        `),n("span",{class:"token assign-left variable"},"error_message"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},[s(`"Error: a value is needed for '`),n("span",{class:"token variable"},"$1"),s(`'"`)]),s(`
        `),n("span",{class:"token keyword"},"case"),s(),n("span",{class:"token variable"},"$1"),s(),n("span",{class:"token keyword"},"in"),s(`
        `),n("span",{class:"token parameter variable"},"-d"),s(),n("span",{class:"token operator"},"|"),s(" --days"),n("span",{class:"token punctuation"},")"),s(`
            `),n("span",{class:"token assign-left variable"},"ARCHIVE_SAVE_DAYS"),n("span",{class:"token operator"},"="),n("span",{class:"token variable"},[s("${2"),n("span",{class:"token operator"},":?"),s("$error_message}")]),s(`
            `),n("span",{class:"token builtin class-name"},"shift"),s(),n("span",{class:"token number"},"2"),s(`
            `),n("span",{class:"token punctuation"},";"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token parameter variable"},"-i"),s(),n("span",{class:"token operator"},"|"),s(" --instance"),n("span",{class:"token punctuation"},")"),s(`
            `),n("span",{class:"token assign-left variable"},"ORACLE_SID"),n("span",{class:"token operator"},"="),n("span",{class:"token variable"},[s("${2"),n("span",{class:"token operator"},":?"),s("$error_message}")]),s(`
            `),n("span",{class:"token builtin class-name"},"shift"),s(),n("span",{class:"token number"},"2"),s(`
            `),n("span",{class:"token punctuation"},";"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token parameter variable"},"-h"),s(),n("span",{class:"token operator"},"|"),s(" --help"),n("span",{class:"token punctuation"},")"),s(`
            delete_options_usage
            `),n("span",{class:"token builtin class-name"},"shift"),s(),n("span",{class:"token number"},"2"),s(`
            `),n("span",{class:"token builtin class-name"},"break"),s(`
            `),n("span",{class:"token punctuation"},";"),n("span",{class:"token punctuation"},";"),s(`
        *`),n("span",{class:"token punctuation"},")"),s(`
            `),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},[s('"unknown option '),n("span",{class:"token variable"},"$1"),s('"')]),s(`
            `),n("span",{class:"token builtin class-name"},"break"),s(`
            `),n("span",{class:"token punctuation"},";"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"esac"),s(`
    `),n("span",{class:"token keyword"},"done"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function-name function"},"delete_archivelog"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
delete_options `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$@"),s('"')]),s(`

`),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token parameter variable"},"-e"),s(" This will delete archivelog completed before "),n("span",{class:"token string"},[s('"'),n("span",{class:"token entity",title:"\\033"},"\\033"),s("[31m "),n("span",{class:"token variable"},"$ARCHIVE_SAVE_DAYS"),s(),n("span",{class:"token entity",title:"\\033"},"\\033"),s('[0m"')]),s(" days of oracle instance "),n("span",{class:"token string"},[s('"'),n("span",{class:"token entity",title:"\\033"},"\\033"),s("[31m "),n("span",{class:"token variable"},"$ORACLE_SID"),s(),n("span",{class:"token entity",title:"\\033"},"\\033"),s('[0m"')]),s(),n("span",{class:"token punctuation"},".."),s(`.

`),n("span",{class:"token variable"},"$ORACLE_HOME"),s("/bin/rman "),n("span",{class:"token assign-left variable"},"log"),n("span",{class:"token operator"},"="),n("span",{class:"token variable"},"$DBA_LOGPATH"),s("/ora_delete_archive.log "),n("span",{class:"token operator"},"<<"),n("span",{class:"token string"},[s(`EOF
connect target /
run {
    delete noprompt archivelog all completed before 'sysdate-`),n("span",{class:"token variable"},"$ARCHIVE_SAVE_DAYS"),s(`';
    crosscheck archivelog all;
    delete noprompt expired archivelog all;
}
exit;
EOF`)]),s(`
`),n("span",{class:"token punctuation"},"}"),s(`


`),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},[n("span",{class:"token variable"},"`"),n("span",{class:"token function"},"date"),s(" +%Y%m%d"),n("span",{class:"token variable"},"`")]),s(' staring deleting archivelog ..."')]),s(),n("span",{class:"token operator"},">>"),s(),n("span",{class:"token variable"},"$DBA_LOGPATH"),s(`/ora_delete_archive.log
`),n("span",{class:"token assign-left variable"},"STARTTIME"),n("span",{class:"token operator"},"="),n("span",{class:"token variable"},[n("span",{class:"token variable"},"$("),n("span",{class:"token function"},"date"),s(" +%s"),n("span",{class:"token variable"},")")]),s(`
delete_archivelog `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},[s("${@"),n("span",{class:"token operator"},":"),s("1}")]),s('"')]),s(`
`),n("span",{class:"token assign-left variable"},"ENDTIME"),n("span",{class:"token operator"},"="),n("span",{class:"token variable"},[n("span",{class:"token variable"},"$("),n("span",{class:"token function"},"date"),s(" +%s"),n("span",{class:"token variable"},")")]),s(`
`),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},[n("span",{class:"token variable"},"`"),n("span",{class:"token function"},"date"),s(" +%Y%m%d"),n("span",{class:"token variable"},"`")]),s(" end deleting archivelog: $[ "),n("span",{class:"token variable"},"$ENDTIME"),s(" - "),n("span",{class:"token variable"},"$STARTTIME"),s(' ] s"')]),s(),n("span",{class:"token operator"},">>"),s(),n("span",{class:"token variable"},"$DBA_LOGPATH"),s(`/ora_delete_archive.log
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function m(v,g){const t=i("CodeTabs");return o(),r("div",null,[k,p(t,{id:"3",data:[{id:"带crontab版本"},{id:"简化版"}],active:0},{title0:a(({value:e,isActive:l})=>[s("带crontab版本")]),title1:a(({value:e,isActive:l})=>[s("简化版")]),tab0:a(({value:e,isActive:l})=>[b]),tab1:a(({value:e,isActive:l})=>[d]),_:1})])}const f=c(u,[["render",m],["__file","archivelog.html.vue"]]),A=JSON.parse('{"path":"/guide/database/oracle/archivelog.html","title":"归档日志","lang":"zh-CN","frontmatter":{"title":"归档日志","description":"归档清理脚本","head":[["meta",{"property":"og:url","content":"https://github.com/abelit/abelit-datapeacock.git/guide/database/oracle/archivelog.html"}],["meta",{"property":"og:site_name","content":"数之雀"}],["meta",{"property":"og:title","content":"归档日志"}],["meta",{"property":"og:description","content":"归档清理脚本"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-11T14:06:18.000Z"}],["meta",{"property":"article:author","content":"Abelit"}],["meta",{"property":"article:modified_time","content":"2024-05-11T14:06:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"归档日志\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-11T14:06:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Abelit\\",\\"url\\":\\"https://github.com/abelit\\"}]}"]]},"headers":[{"level":2,"title":"归档清理脚本","slug":"归档清理脚本","link":"#归档清理脚本","children":[]}],"git":{"createdTime":1715436378000,"updatedTime":1715436378000,"contributors":[{"name":"ableit","email":"ychenid@live.com","commits":1}]},"readingTime":{"minutes":2.12,"words":637},"filePathRelative":"guide/database/oracle/archivelog.md","localizedDate":"2024年5月11日","autoDesc":true,"excerpt":"<h2>归档清理脚本</h2>\\n\\n"}');export{f as comp,A as data};
