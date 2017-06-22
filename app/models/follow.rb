class Follow < ActiveRecord::Base

  belongs_to :user
  Class: :user,
  foreign_key :id,
  primary_key :followee_id

  has_many :users
  Class: :user,
  foreign_key :follower_id,
  primary_key :id


end
