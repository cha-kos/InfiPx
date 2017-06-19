# InstaClone Schema

## users
column name     | data type  | details
----------------|------------|--------------------------
id              | integer    | not null, primary key
username        | string     | not null, unique, indexed
password_digest | string     | not null
session_token   | string     | not null, indexed, unique
name            | string     |
bio             | string     |
avatar          | attachment | paperclip

## photos
column name | data type  | details
------------|------------|--------------------------------------------------
id          | integer    | not null, primary key
user_id     | integer    | not null, foreign key (references users), indexed
image       | attachment | not null, paperclip
caption     | string     |

## likes
column name | data type | details
------------|-----------|---------------------------------------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key, indexed, unique w/ photo_id
photo_id    | integer   | not null, foreign key, indexed unique w/ user_id

## comments
column name | data type | details
------------|-----------|---------------------------------------------------
id          | integer   | not null, primary key
body        | string    | not null
user_id     | integer   | not null, foreign key, indexed
photo_id    | integer   | not null, foreign key, indexed

## follows
column name  | data type | details
-------------|-----------|--------------------------------------------------
id           | integer   | not null, primary key
follower_id  | integer   | not null, foreign key, indexed, unique w/ followee_id
followee_id | integer   | not null, foreign key, indexed, unique w/ follower_id
