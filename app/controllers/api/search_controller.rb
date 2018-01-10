class Api::SearchController < ApplicationController

  def index
    query = params["query"]
    Search.search_users(query)
  end

end
