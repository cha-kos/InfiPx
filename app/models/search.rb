class Search < ActiveRecord::Base
  def self.search_users(query)
    users = User.select('*')
      .where("lower(username) LIKE ?", query + '%')
    debugger
  end
end
