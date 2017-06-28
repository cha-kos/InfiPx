# json.extract! @user, :id, :username, :full_name, :bio, :avatar
json.set! @user.id do
  json.partial! '/api/users/user', user: @user
end
