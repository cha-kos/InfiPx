class User < ApplicationRecord
  validates :username, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}

  after_initialize :ensure_session_token

  has_many :likes
  has_many :photos
  has_many :followers
  belongs_to :followee
  has_many :comments

  has_attached_file :avatar, default_url: "mr_T.jpg"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/


  attr_accessor :password

  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw)
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token
    self.session_token = User.generate_session_token
    self.save!
    return self.session_token
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.password_is?(password) ? user : nil
  end

  def password_is? (password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end


  # def photo_likes_hash
  #   zipped_likes = likes.pluck(:photo_id).zip(likes)
  #   likes_hash = {}
  #
  #   zipped_likes.each do |(id, like)|
  #     likes_hash[id] = like
  #   end
  #
  #   likes_hash
  # end

end
