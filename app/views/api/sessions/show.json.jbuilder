json.session do
  json.currentUser do
    json.id current_user.id
    json.username current_user.username
    # json.likes do
    #   debugger
    #   json.array! current_user.likes do |like|
    #     like.photo_id
    #   end
    # end
  end
end
