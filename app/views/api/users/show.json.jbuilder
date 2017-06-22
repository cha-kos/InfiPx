# json.extract! @user, :id, :username, :full_name, :bio, :avatar
json.id @user.id
json.username @user.username
json.full_name @user.full_name
json.bio @user.bio
json.avatar_url asset_path(@user.avatar.url)
