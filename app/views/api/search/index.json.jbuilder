debugger
json.result @result.each do |item|
  json.id = item.id
  json.avatar_url item.avatar.url
  json.username item.username
  json.full_name item.full_name
end
