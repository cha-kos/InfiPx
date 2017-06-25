# json.extract! user, :id, :username, :full_name, :bio, :avatar
# json.set! user.id do
  json.id user.id
  json.username user.username
  json.full_name user.full_name
  json.bio user.bio
  json.avatar_url asset_path(user.avatar.url)
  # json.photos do
  #   user.photos.each do |photo|
  #     json.set! photo.id do
  #       json.partial! '/api/photos/photo', photo: photo
  #     end
  #   end
  # end
