
/*!1. Write an SQL statement to select all articles with their author’s email.*/;
SELECT ar.author,ur.email,at.title,at.content FROM assignment.article as at 
inner join assignment.author as ar on (at.author_id=ar.id) 
inner join assignment.user as ur on (ar.email_id=ur.id);


/*2. Write another SQL statement to select articles from 7th to 12th sorted by id.*/;
SELECT id,title,content from (SELECT *, ROW_NUMBER() OVER (ORDER BY id asc) as id_order from `assignment`.article )
as temp where id_order >6 and id_order <13 ;