

class Photo < ActiveRecord::Base
  validates :user_id, :image, presence: true

  belongs_to :user
  has_many :likes
  has_many :comments

  attr_reader :current_user_liked

  has_attached_file :image, default_url: "/images/:style/missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  def current_user_liked(current_user)
    # debugger
    liked = false
    self.likes.each do |like|
      if (like.user_id == current_user.id)
        liked = true
      end
    end
    return liked
 end

 def current_user_like_id(current_user)
   id = nil
   self.likes.each do |like|
     if (like.user_id == current_user.id)
       id = like.id
     end
   end
     return id
 end



  def get_photo_feed(current_user_id)
    # Obtain the cast list for the film 'Alien'
    execute(<<-SQL)
      SELECT
        *
      FROM
        photos
      JOIN
        users ON photos.user_id = users.id
      JOIN
        follows ON follows.followee_id = user.id
      WHERE
        follows.follower_id = ? ;
    SQL
  end
end
