class Search < ActiveRecord::Base
  def self.search_users(query)
    User.select(:avatar, :username, :name)
      .where("username = %?")
  end
end
