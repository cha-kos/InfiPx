json.id photo.id
json.user_id photo.user_id
json.caption photo.caption
json.image_url image_path(photo.image.url)
json.num_likes photo.likes.count
json.comments photo.comments
# debugger
json.viewer_liked photo.current_user_liked(current_user)
json.viewer_like_id photo.current_user_like_id(current_user)
# do
#    @photo.likes do |like|
#     like.user_id
#   end
# end
