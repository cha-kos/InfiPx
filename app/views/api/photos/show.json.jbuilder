json.id @photo.id
json.user_id @photo.user_id
json.caption @photo.caption
json.image_url image_path(@photo.image.url)
