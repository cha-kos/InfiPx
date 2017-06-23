# json.extract! @user, :id, :username, :full_name, :bio, :avatar
json.partial! '/api/users/user', user: @user
