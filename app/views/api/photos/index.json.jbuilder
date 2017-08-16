current_user.fetch_photo_feed.each do |photo|
  json.set! photo.id do
    json.partial! 'photo', photo: photo
  end
end
