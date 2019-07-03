create database nestschool;
use nestschool;
CREATE TABLE user ( id smallint unsigned not null auto_increment, name varchar(200), email varchar(200) not null, password
    varchar(200) not null, age INTEGER, constraint pk_user primary key(id) );
INSERT INTO user VALUES ( null, 'John', 'john@sfeir.com', '123456', 23 );
