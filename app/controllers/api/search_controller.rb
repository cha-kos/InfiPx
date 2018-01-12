class Api::SearchController < ApplicationController

  def index
    query = params["query"]
    if query.length > 0
      return @result = Search.search_users(query)
    else
      return @result = []
    end
  end

end
