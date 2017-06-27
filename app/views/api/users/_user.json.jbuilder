
  json.id user.id
  json.username user.username
  json.full_name user.full_name
  json.bio user.bio
  json.avatar_url asset_path(user.avatar.url)
  json.followers user.followers.count
  json.following user.followings.count
  json.viewer_follows user.current_user_follows(current_user)
  json.viewer_follow_id user.current_user_follow_id(current_user)
  json.photos user.get_user_photos(user) do |photo|
    json.caption photo.caption
    json.id photo.id
    json.user_id photo.user_id
    json.created_at photo.created_at
    json.image_url image_path(photo.image.url)
  end
