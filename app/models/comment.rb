class Comment < ActiveRecord::Base
  validates :body, length: {minimum: 1, allow_nil: true}

  belongs_to :photo
  belongs_to :user


end
