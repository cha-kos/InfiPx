# json.session do
#   json.currentUser do
#     json.id current_user.id
#     json.username current_user.username
#     json.feed current_user.fetch_photo_feed
    # json.likes do
    #  
    #   json.array! current_user.likes do |like|
    #     like.photo_id
    #   end
    # end
#   end
# end

json.id @user.id
json.username @user.username
json.full_name @user.full_name
json.bio @user.bio
json.avatar_url asset_path(@user.avatar.url)
json.followers @user.followers.count
json.following @user.followings.count
json.viewer_follows @user.current_user_follows(current_user)
json.viewer_follow_id @user.current_user_follow_id(current_user)
