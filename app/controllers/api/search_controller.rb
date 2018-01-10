class Api::SearchController < ApplicationController

  def index
    query = params["query"]
    return @result = Search.search_users(query)
  end

end
