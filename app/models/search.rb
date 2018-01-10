class Search < ActiveRecord::Base
  def self.search_users(query)
    User.select('*')
      .where("lower(username) LIKE ?", query + '%')
  end
end
