Rails.application.routes.draw do
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
  resources :riders, only: [:index, :show, :create, :destroy]
  resources :locations, only: [:index, :show, :create, :destroy]
  resources :posts, only: [:index, :show, :create, :destroy, :update]
  resources :comments, only: [:index, :show, :create, :destroy]

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  post"/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
