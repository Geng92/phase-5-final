Rails.application.routes.draw do
  
  resources :riders, only: [:index, :show, :create, :destroy]
  resources :locations, only: [:index, :show, :create, :destroy]
  resources :post, only: [:index, :show, :create, :destroy]
  resources :comment, only: [:index, :show, :create, :destroy]
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
