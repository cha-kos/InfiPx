Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
   resources :users, only: [:create, :show]
   resource :session, only: [:create, :destroy]
   resources :photos, except: [:new, :edit]
   resources :likes, only: [:create, :destroy]
   resources :comments, only: [:create, :destroy]
 end
end
