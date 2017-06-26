# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
#
User.destroy_all

u1 = User.create({ username: "charles", password: "charles" })
u2 =User.create({ username: "raymond", password: "charles" })
u3 =User.create({ username: "vinny", password: "charles" })
u4 =User.create({ username: "franky", password: "charles" })

Photo.destroy_all

p1 = Photo.create({user_id: u1.id, caption: 'pity the fool!', image: 'https://s3.us-east-2.amazonaws.com/infipx-dev/photos/images/000/000/012/original/mr_T.jpg'})
p2 = Photo.create({user_id: u2.id, caption: 'pity the fool!', image: 'https://s3.us-east-2.amazonaws.com/infipx-dev/photos/images/000/000/012/original/mr_T.jpg'})
p3 = Photo.create({user_id: u3.id, caption: 'pity the fool!', image: 'https://s3.us-east-2.amazonaws.com/infipx-dev/photos/images/000/000/012/original/mr_T.jpg'})
p4 = Photo.create({user_id: u4.id, caption: 'pity the fool!', image: 'https://s3.us-east-2.amazonaws.com/infipx-dev/photos/images/000/000/012/original/mr_T.jpg'})

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
