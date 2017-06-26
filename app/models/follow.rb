class Follow < ActiveRecord::Base
  validates :followee_id, :follower_id, presence: true
  validates :follower_id, uniqueness: { scope: :followee_id }

  belongs_to :user,
  class_name: :User,
  foreign_key: :followee_id,
  primary_key: :id

  belongs_to :user,
  class_name: :User,
  foreign_key: :follower_id,
  primary_key: :id


end
