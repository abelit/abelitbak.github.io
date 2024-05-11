import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as t,f as n}from"./app-DR5J2daJ.js";const a={},l=n(`<h2 id="示例数据" tabindex="-1"><a class="header-anchor" href="#示例数据"><span>示例数据</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>use testdb;
drop table abelit_sample_tb1;
create table if not exists abelit_sample_tb1(id int primary key auto_increment, name varchar(100), value int);

set autocommit=0;
drop procedure if exists abelit_proc_sample_data;

DELIMITER $$

create procedure abelit_proc_sample_data(in imax int)
BEGIN
    DECLARE i int;
    DECLARE icommit int;
    DECLARE istring varchar(50);
    SET i = 0;
    WHILE i &lt;= imax DO
        select substring(md5(rand()), 1, 50) into istring;
        INSERT INTO  abelit_sample_tb1(name, value) values (concat(&#39;abelit-&#39;,istring), i);
        SET i = i+1;
        select i % 10000 into icommit;
        IF icommit = 0 THEN
            select icommit;
            commit;
        END IF;
    END WHILE;
    commit;
END $$

DELIMITER ;

call abelit_proc_sample_data(10000000);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),s=[l];function d(r,c){return i(),t("div",null,s)}const v=e(a,[["render",d],["__file","dml.html.vue"]]),p=JSON.parse(`{"path":"/guide/database/mysql/dml.html","title":"DML","lang":"zh-CN","frontmatter":{"title":"DML","description":"示例数据","head":[["meta",{"property":"og:url","content":"https://github.com/abelit/abelit-datapeacock.git/guide/database/mysql/dml.html"}],["meta",{"property":"og:site_name","content":"数之雀"}],["meta",{"property":"og:title","content":"DML"}],["meta",{"property":"og:description","content":"示例数据"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-11T14:06:18.000Z"}],["meta",{"property":"article:author","content":"Abelit"}],["meta",{"property":"article:modified_time","content":"2024-05-11T14:06:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"DML\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-11T14:06:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Abelit\\",\\"url\\":\\"https://github.com/abelit\\"}]}"]]},"headers":[{"level":2,"title":"示例数据","slug":"示例数据","link":"#示例数据","children":[]}],"git":{"createdTime":1715436378000,"updatedTime":1715436378000,"contributors":[{"name":"ableit","email":"ychenid@live.com","commits":1}]},"readingTime":{"minutes":0.35,"words":104},"filePathRelative":"guide/database/mysql/dml.md","localizedDate":"2024年5月11日","autoDesc":true,"excerpt":"<h2>示例数据</h2>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>use testdb;\\ndrop table abelit_sample_tb1;\\ncreate table if not exists abelit_sample_tb1(id int primary key auto_increment, name varchar(100), value int);\\n\\nset autocommit=0;\\ndrop procedure if exists abelit_proc_sample_data;\\n\\nDELIMITER $$\\n\\ncreate procedure abelit_proc_sample_data(in imax int)\\nBEGIN\\n    DECLARE i int;\\n    DECLARE icommit int;\\n    DECLARE istring varchar(50);\\n    SET i = 0;\\n    WHILE i &lt;= imax DO\\n        select substring(md5(rand()), 1, 50) into istring;\\n        INSERT INTO  abelit_sample_tb1(name, value) values (concat('abelit-',istring), i);\\n        SET i = i+1;\\n        select i % 10000 into icommit;\\n        IF icommit = 0 THEN\\n            select icommit;\\n            commit;\\n        END IF;\\n    END WHILE;\\n    commit;\\nEND $$\\n\\nDELIMITER ;\\n\\ncall abelit_proc_sample_data(10000000);\\n</code></pre></div>"}`);export{v as comp,p as data};
