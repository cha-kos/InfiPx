
json.id photo.id
json.user_id photo.user_id
json.user_avatar image_path(User.get_avatar(photo.user_id))
json.caption photo.caption
json.image_url image_path(photo.image.url)
json.num_likes photo.likes.count
json.comments photo.comments
json.username photo.username
json.viewer_liked photo.current_user_liked(current_user)
json.viewer_like_id photo.current_user_like_id(current_user)
json.time_ago time_ago_in_words(photo.created_at) + ' ago'
