# API Endpoints

## HTML

### Root

Method | URI | Description
-------|-----|--------------------
`GET`  | `/` | Loads Index (Feed)

## JSON

### Session

Method   | URI            | Description
---------|----------------|------------
`POST`   | `/api/session` | Log in
`DELETE` | `/api/session` | Log out

### Users

Method  | URI                    | Description
--------|------------------------|---------------------------
`POST`  | `/api/users`           | Create new user
`GET`   | `/api/users/:id`       | Get user id
`PATCH` | `/api/users/:id`       | Edit User attributes

### Photos

Method   | URI                          | Description
---------|------------------------------|----------------------------------
`GET`    | `/api/photos`                | Get all photos
`POST`   | `/api/photos`                | Create new photo (should be nested route to user?)
`GET`    | `/api/photos/:id`            | Get photo by id
`DELETE` | `/api/photos/:id`            | Delete photo by id
`GET`    | `/api/users/:user_id/photos` | Get all photos by user id

### Comments

Method   | URI                 | Description
---------|---------------------|---------------------------
`POST`   | `/api/comments`     | Create comment
`DELETE` | `/api/comments/:id` | Delete comment by id

### Likes

Method   | URI                           | Description
---------|-------------------------------|----------------------------
`POST`   | `/api/photos/:id/likes`       | Current user like a photo
`DELETE` | `/api/photos/:id/likes`       | Current user unlike a photo


### Follows

Method   | URI                             | Description
---------|---------------------------------|------------------------------------
`GET`    | `/api/users/:id/following`      | Get following
`GET`    | `/api/users/:id/followers`      | Get followers
`POST`   | `/api/users/:id/follow`         | Current user follows another user
`DELETE` | `/api/users/:id/follow`         | Current user unfollows another user
