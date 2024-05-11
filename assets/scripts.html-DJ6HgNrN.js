import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as i,f as s}from"./app-DR5J2daJ.js";const l={},d=s(`<h2 id="归档" tabindex="-1"><a class="header-anchor" href="#归档"><span>归档</span></a></h2><h3 id="归档清理" tabindex="-1"><a class="header-anchor" href="#归档清理"><span>归档清理</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>#!/bin/sh
# Function: Backup database by rman
# Usage: crontab on linux/Unix, ie.
# 0 0 * * * su - oracle -c  &quot;/opt/dba/scripts/ora_delete_archivelog.sh -i testdb -d 7&quot; &gt; /dev/null 2&gt;&amp;1
# 0 0 * * * sh -c  &quot;/opt/dba/scripts/ora_delete_archivelog.sh -i testdb -d 7&quot; &gt; /dev/null 2&gt;&amp;1
# 0 0 * * * /opt/dba/scripts/ora_delete_archivelog.sh -i testdb -d 7 &gt; /dev/null 2&gt;&amp;1
# Last modfiy: 2023-04-07
# Author: abelit


##################### start user conf #############
# Set oracle environment
source /home/oracle/.bash_profile
# ORACLE_HOME=/u01/app/oracle/product/11.2.0.4/db_1
DBA_LOGPATH=/home/oracle/dba/log
DBA_SCRIPTPATH=/home/oracle/dba/scripts

ARCHIVE_SAVE_DAYS=7
#################### end user conf ################


##################### start auto preparing ##############
# TODAY
RUNNING_TIME=\`date &quot;+%Y%m%d%H&quot;\`
ORACLE_SID=testdb

if [ ! -d &quot;$DBA_LOGPATH&quot; ]; then
	mkdir -p &quot;$DBA_LOGPATH&quot;
fi

if [ ! -d &quot;$DBA_SCRIPTPATH&quot; ]; then
	mkdir -p &quot;$DBA_SCRIPTPATH&quot;
fi
##################### end auto preparing ##############
function ARCHOptionHelp() {
    cat &lt;&lt;EOF
Usage: $0 $1 [option]
    options:
       -h|--helpUsage, help message.
       -d|--days, archvielog saving policy.
       -i|--instance, oracle database instance.
EOF
}

function ARCHOption() {
    while [ \${#} -gt 0 ]; do
        error_message=&quot;Error: a value is needed for &#39;$1&#39;&quot;
        case $1 in
        -d | --days)
            ARCHIVE_SAVE_DAYS=\${2:?$error_message}
            shift 2
            ;;
        -i | --instance)
            ORACLE_SID=\${2:?$error_message}
            shift 2
            ;;
        -h | --help)
            ARCHOptionHelp
            shift 2
            exit 1
            break
            ;;
        *)
            echo &quot;unknown option $1&quot;
            exit 1
            break
            ;;
        esac
    done
}

function PreExecute() {
    ARCHOption &quot;$@&quot;
}

function delete_archivelog() {
echo -e This will delete archivelog completed before &quot;\\033[31m $ARCHIVE_SAVE_DAYS \\033[0m&quot; days of oracle instance &quot;\\033[31m $ORACLE_SID \\033[0m&quot; ...

$ORACLE_HOME/bin/rman log=$DBA_LOGPATH/ora_delete_archive.log &lt;&lt;EOF
connect target /
run {
    delete noprompt archivelog all completed before &#39;sysdate-$ARCHIVE_SAVE_DAYS&#39;;
    crosscheck archivelog all;
    delete noprompt expired archivelog all;
}
exit;
EOF
}

function add_crontab() {
    DELETEARCH_CRONTAB_ENTRY=&quot;0 0 * * * \`pwd\`/\`echo &quot;$0&quot; |sed &#39;s#./##g&#39;\` delarch -i $ORACLE_SID -d $ARCHIVE_SAVE_DAYS &gt;&gt; $DBA_LOGPATH/scripts.log 2&gt;&amp;1&quot;
    cron_entry=$(crontab -l)
    is_in_cron=\`pwd\`/\`echo &quot;$0&quot; |sed &#39;s#./##g&#39;\`

    if [[ $cron_entry != *&quot;$is_in_cron&quot;* ]]; then
        if [[ $cron_entry != &quot;&quot; ]]; then
            printf &#39;%s\\n&#39; &quot;$cron_entry&quot; &quot;$DELETEARCH_CRONTAB_ENTRY&quot; | crontab -
        else
            printf &#39;%s\\n&#39; &quot;$DELETEARCH_CRONTAB_ENTRY&quot; | crontab -
        fi
    fi

    echo -e Adding &quot;\\033[31m $DELETEARCH_CRONTAB_ENTRY \\033[0m&quot; to crontab successfully!
}


function Usage() {
    cat &lt;&lt;EOF
Usage: $0 &lt;subcommand&gt; [option]
    subcommand:
       help, help message.
       delarch, delete archive log
       addcron, add it to crontab
EOF
}

case $1 in
delarch | addcron)
    PreExecute &quot;\${@:2}&quot;
    ;;
*) ;;
esac

function main() {
    if ((\${#} == 0)); then
        Usage 0
        exit 1
    fi

    case \${1} in
    help)
        Usage
        ;;
    delarch)
        echo &quot;staring deleting archivelog ...&quot; &gt;&gt; $DBA_LOGPATH/ora_delete_archive.log
        STARTTIME=$(date +%s)
        delete_archivelog
        ENDTIME=$(date +%s)
        echo &quot;end deleting archivelog: $[ $ENDTIME - $STARTTIME ] s&quot; &gt;&gt; $DBA_LOGPATH/ora_delete_archive.log
        ;;
    addcron)
        add_crontab
        ;;
    *)
        echo &quot;unknown command: $1&quot;
        Usage
        exit 1
        ;;
    esac
}


main &quot;$@&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),a=[d];function t(r,c){return e(),i("div",null,a)}const u=n(l,[["render",t],["__file","scripts.html.vue"]]),m=JSON.parse('{"path":"/guide/database/oracle/scripts.html","title":"脚本","lang":"zh-CN","frontmatter":{"title":"脚本","description":"归档 归档清理","head":[["meta",{"property":"og:url","content":"https://github.com/abelit/abelit-datapeacock.git/guide/database/oracle/scripts.html"}],["meta",{"property":"og:site_name","content":"数之雀"}],["meta",{"property":"og:title","content":"脚本"}],["meta",{"property":"og:description","content":"归档 归档清理"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-11T14:06:18.000Z"}],["meta",{"property":"article:author","content":"Abelit"}],["meta",{"property":"article:modified_time","content":"2024-05-11T14:06:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"脚本\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-11T14:06:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Abelit\\",\\"url\\":\\"https://github.com/abelit\\"}]}"]]},"headers":[{"level":2,"title":"归档","slug":"归档","link":"#归档","children":[{"level":3,"title":"归档清理","slug":"归档清理","link":"#归档清理","children":[]}]}],"git":{"createdTime":1715436378000,"updatedTime":1715436378000,"contributors":[{"name":"ableit","email":"ychenid@live.com","commits":1}]},"readingTime":{"minutes":1.28,"words":384},"filePathRelative":"guide/database/oracle/scripts.md","localizedDate":"2024年5月11日","autoDesc":true,"excerpt":"<h2>归档</h2>\\n<h3>归档清理</h3>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>#!/bin/sh\\n# Function: Backup database by rman\\n# Usage: crontab on linux/Unix, ie.\\n# 0 0 * * * su - oracle -c  \\"/opt/dba/scripts/ora_delete_archivelog.sh -i testdb -d 7\\" &gt; /dev/null 2&gt;&amp;1\\n# 0 0 * * * sh -c  \\"/opt/dba/scripts/ora_delete_archivelog.sh -i testdb -d 7\\" &gt; /dev/null 2&gt;&amp;1\\n# 0 0 * * * /opt/dba/scripts/ora_delete_archivelog.sh -i testdb -d 7 &gt; /dev/null 2&gt;&amp;1\\n# Last modfiy: 2023-04-07\\n# Author: abelit\\n\\n\\n##################### start user conf #############\\n# Set oracle environment\\nsource /home/oracle/.bash_profile\\n# ORACLE_HOME=/u01/app/oracle/product/11.2.0.4/db_1\\nDBA_LOGPATH=/home/oracle/dba/log\\nDBA_SCRIPTPATH=/home/oracle/dba/scripts\\n\\nARCHIVE_SAVE_DAYS=7\\n#################### end user conf ################\\n\\n\\n##################### start auto preparing ##############\\n# TODAY\\nRUNNING_TIME=`date \\"+%Y%m%d%H\\"`\\nORACLE_SID=testdb\\n\\nif [ ! -d \\"$DBA_LOGPATH\\" ]; then\\n\\tmkdir -p \\"$DBA_LOGPATH\\"\\nfi\\n\\nif [ ! -d \\"$DBA_SCRIPTPATH\\" ]; then\\n\\tmkdir -p \\"$DBA_SCRIPTPATH\\"\\nfi\\n##################### end auto preparing ##############\\nfunction ARCHOptionHelp() {\\n    cat &lt;&lt;EOF\\nUsage: $0 $1 [option]\\n    options:\\n       -h|--helpUsage, help message.\\n       -d|--days, archvielog saving policy.\\n       -i|--instance, oracle database instance.\\nEOF\\n}\\n\\nfunction ARCHOption() {\\n    while [ ${#} -gt 0 ]; do\\n        error_message=\\"Error: a value is needed for \'$1\'\\"\\n        case $1 in\\n        -d | --days)\\n            ARCHIVE_SAVE_DAYS=${2:?$error_message}\\n            shift 2\\n            ;;\\n        -i | --instance)\\n            ORACLE_SID=${2:?$error_message}\\n            shift 2\\n            ;;\\n        -h | --help)\\n            ARCHOptionHelp\\n            shift 2\\n            exit 1\\n            break\\n            ;;\\n        *)\\n            echo \\"unknown option $1\\"\\n            exit 1\\n            break\\n            ;;\\n        esac\\n    done\\n}\\n\\nfunction PreExecute() {\\n    ARCHOption \\"$@\\"\\n}\\n\\nfunction delete_archivelog() {\\necho -e This will delete archivelog completed before \\"\\\\033[31m $ARCHIVE_SAVE_DAYS \\\\033[0m\\" days of oracle instance \\"\\\\033[31m $ORACLE_SID \\\\033[0m\\" ...\\n\\n$ORACLE_HOME/bin/rman log=$DBA_LOGPATH/ora_delete_archive.log &lt;&lt;EOF\\nconnect target /\\nrun {\\n    delete noprompt archivelog all completed before \'sysdate-$ARCHIVE_SAVE_DAYS\';\\n    crosscheck archivelog all;\\n    delete noprompt expired archivelog all;\\n}\\nexit;\\nEOF\\n}\\n\\nfunction add_crontab() {\\n    DELETEARCH_CRONTAB_ENTRY=\\"0 0 * * * `pwd`/`echo \\"$0\\" |sed \'s#./##g\'` delarch -i $ORACLE_SID -d $ARCHIVE_SAVE_DAYS &gt;&gt; $DBA_LOGPATH/scripts.log 2&gt;&amp;1\\"\\n    cron_entry=$(crontab -l)\\n    is_in_cron=`pwd`/`echo \\"$0\\" |sed \'s#./##g\'`\\n\\n    if [[ $cron_entry != *\\"$is_in_cron\\"* ]]; then\\n        if [[ $cron_entry != \\"\\" ]]; then\\n            printf \'%s\\\\n\' \\"$cron_entry\\" \\"$DELETEARCH_CRONTAB_ENTRY\\" | crontab -\\n        else\\n            printf \'%s\\\\n\' \\"$DELETEARCH_CRONTAB_ENTRY\\" | crontab -\\n        fi\\n    fi\\n\\n    echo -e Adding \\"\\\\033[31m $DELETEARCH_CRONTAB_ENTRY \\\\033[0m\\" to crontab successfully!\\n}\\n\\n\\nfunction Usage() {\\n    cat &lt;&lt;EOF\\nUsage: $0 &lt;subcommand&gt; [option]\\n    subcommand:\\n       help, help message.\\n       delarch, delete archive log\\n       addcron, add it to crontab\\nEOF\\n}\\n\\ncase $1 in\\ndelarch | addcron)\\n    PreExecute \\"${@:2}\\"\\n    ;;\\n*) ;;\\nesac\\n\\nfunction main() {\\n    if ((${#} == 0)); then\\n        Usage 0\\n        exit 1\\n    fi\\n\\n    case ${1} in\\n    help)\\n        Usage\\n        ;;\\n    delarch)\\n        echo \\"staring deleting archivelog ...\\" &gt;&gt; $DBA_LOGPATH/ora_delete_archive.log\\n        STARTTIME=$(date +%s)\\n        delete_archivelog\\n        ENDTIME=$(date +%s)\\n        echo \\"end deleting archivelog: $[ $ENDTIME - $STARTTIME ] s\\" &gt;&gt; $DBA_LOGPATH/ora_delete_archive.log\\n        ;;\\n    addcron)\\n        add_crontab\\n        ;;\\n    *)\\n        echo \\"unknown command: $1\\"\\n        Usage\\n        exit 1\\n        ;;\\n    esac\\n}\\n\\n\\nmain \\"$@\\"\\n</code></pre></div>"}');export{u as comp,m as data};
