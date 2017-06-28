
  json.partial! '/api/photos/photo', photo: @photo


# json.id @photo.id
# json.user_id @photo.user_id
# json.caption @photo.caption
# json.image_url image_path(@photo.image.url)
# json.comments @photo.comments
# json.num_likes @photo.likes.count
# json.viewer_liked @photo.current_user_liked(current_user)
# json.viewer_like_id @photo.current_user_like_id(current_user)
