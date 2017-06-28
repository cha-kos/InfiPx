Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
   resources :users, only: [:create, :show, :update, :edit]
   resource :session, only: [:create, :destroy]
   resources :photos, except: [:edit, :update]
   resources :likes, only: [:create, :destroy]
   resources :comments, only: [:create, :destroy]
   resources :follows, only: [:create, :destroy]
 end
end
