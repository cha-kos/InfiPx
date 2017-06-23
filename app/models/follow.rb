class Follow < ActiveRecord::Base

  belongs_to :user
  class_name: :user,
  foreign_key: :id,
  primary_key: :followee_id

  has_many :users
  class_name: :user,
  foreign_key: :follower_id,
  primary_key: :id


end
