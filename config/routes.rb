Rails.application.routes.draw do
  root 'pages#home'

  get '/airlines/:slug', to: 'airlines#show'

  get '/airlines', to: 'airline#index' ## build this

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
