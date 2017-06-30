# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
#
User.destroy_all

u1 = User.create({ username: "charles", password: "charles", avatar: File.open('app/assets/images/avatarCharles.png') })
u2 = User.create({ username: "kel", password: "charles", bio: 'welcome to Good Burger',avatar: File.open('app/assets/images/avatarKel.png') })
u3 = User.create({ username: "larry", password: "charles", avatar: File.open('app/assets/images/avatarLarry.png') })
u4 = User.create({ username: "michelangelo", password: "charles", avatar: File.open('app/assets/images/avatarMichelangelo.png') })
u5 = User.create({ username: "Mr_T", password: "charles", avatar: File.open('app/assets/images/avatarMrT.jpg') })
u6 = User.create({ username: "Pope", password: "charles", avatar: File.open('app/assets/images/avatarPope.png') })

Photo.destroy_all

p1 = Photo.create({user_id: u1.id, username: u1.username, caption: 'pittttteeeedddd', image: File.open('app/assets/images/barreled.png')})
p2 = Photo.create({user_id: u2.id, username: u2.username, caption: 'wheres his head?', image: File.open('app/assets/images/air.png')})
p3 = Photo.create({user_id: u3.id, username: u3.username, caption: 'watch out for the choppa', image: File.open('app/assets/images/copterflip.png')})
p4 = Photo.create({user_id: u6.id, username: u6.username, caption: 'yikes', image: File.open('app/assets/images/gaptorail.png')})
p5 = Photo.create({user_id: u5.id, username: u5.username, caption: 'I would climb it', image: File.open('app/assets/images/greenmountain.png')})
p6 = Photo.create({user_id: u1.id, username: u1.username, caption: 'fresh fluff', image: File.open('app/assets/images/powday.png')})
p7 = Photo.create({user_id: u1.id, username: u1.username, caption: 'get me a corona (and a lime)', image: File.open('app/assets/images/sunsetpalms.png')})
p8 = Photo.create({user_id: u1.id, username: u1.username, caption: 'tuck that knee', image: File.open('app/assets/images/tuckknee.png')})
p9 = Photo.create({user_id: u1.id, username: u1.username, image: File.open('app/assets/images/wakeflip.png')})
p10 = Photo.create({user_id: u1.id, username: u1.username, caption: 'that boy on the wall though', image: File.open('app/assets/images/wallride.png')})
p11 = Photo.create({user_id: u1.id, username: u1.username, caption: 'where I want to be', image: File.open('app/assets/images/wave.png')})
p12 = Photo.create({user_id: u1.id, username: u1.username, caption: 'that snow is red', image: File.open('app/assets/images/sunsetspinetransfer.png')})
p13 = Photo.create({user_id: u1.id, username: u1.username, caption: 'NYC YO!', image: File.open('app/assets/images/cityscape.png')})
p14 = Photo.create({user_id: u4.id, username: u4.username, caption: 'is he going to land in the water?', image: File.open('app/assets/images/hugemthod.png')})
p15 = Photo.create({user_id: u2.id, username: u2.username, image: File.open('app/assets/images/photographer.png')})
p16 = Photo.create({user_id: u2.id, username: u2.username, caption: 'looks warm', image: File.open('app/assets/images/coldwave.png')})
p17 = Photo.create({user_id: u2.id, username: u2.username, caption: 'he is destructing property!', image: File.open('app/assets/images/marbletail.png')})
p18 = Photo.create({user_id: u2.id, username: u2.username, caption: 'pity the fool!', image: File.open('app/assets/images/tailslide.png')})
p19 = Photo.create({user_id: u2.id, username: u2.username, caption: 'mrrrka', image: File.open('app/assets/images/smithgrind.png')})
p19 = Photo.create({user_id: u2.id, username: u2.username, caption: 'look at those colors', image: File.open('app/assets/images/rainbowrail.png')})

Comment.destroy_all

c1 = Comment.create({user_id: u2.id, photo_id: p1.id, body: 'who eat yo breakfast', username: User.find(u2.id).username })
c2 = Comment.create({user_id: u1.id, photo_id: p2.id, body: 'who eat yo breakfast', username: User.find(u1.id).username })
c3 = Comment.create({user_id: u4.id, photo_id: p3.id, body: 'who eat yo breakfast', username: User.find(u4.id).username })
c4 = Comment.create({user_id: u3.id, photo_id: p4.id, body: 'who eat yo breakfast', username: User.find(u3.id).username })
c5 = Comment.create({user_id: u2.id, photo_id: p1.id, body: 'you took my heart', username: User.find(u2.id).username })

Like.destroy_all

l1 = Like.create({user_id: u2.id, photo_id: p1.id})
l2 = Like.create({user_id: u4.id, photo_id: p3.id})
l3 = Like.create({user_id: u3.id, photo_id: p4.id})
l4 = Like.create({user_id: u1.id, photo_id: p2.id})
l5 = Like.create({user_id: u3.id, photo_id: p1.id})
l6 = Like.create({user_id: u4.id, photo_id: p1.id})

Follow.destroy_all

f1 = Follow.create({followee_id: u2.id, follower_id: u1.id})
f2 = Follow.create({followee_id: u3.id, follower_id: u1.id})
f3 = Follow.create({followee_id: u4.id, follower_id: u1.id})
f4 = Follow.create({followee_id: u5.id, follower_id: u1.id})
f5 = Follow.create({followee_id: u6.id, follower_id: u1.id})
f6 = Follow.create({followee_id: u3.id, follower_id: u2.id})
f7 = Follow.create({followee_id: u4.id, follower_id: u2.id})
f8 = Follow.create({followee_id: u5.id, follower_id: u2.id})
f9 = Follow.create({followee_id: u6.id, follower_id: u2.id})
f10 = Follow.create({followee_id: u1.id, follower_id: u2.id})
