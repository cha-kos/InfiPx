
json.result @result.each do |item|
  json.id item.id
  json.avatarUrl item.avatar.url
  json.username item.username
  json.fullName item.full_name
end
