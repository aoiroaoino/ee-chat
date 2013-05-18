EeChat::Application.routes.draw do
	root :to => "room#index"
	
  get "room/index"
  get "sessions/destroy"
  get "socket/index", :as => :socket_index
  post "socket/index", :as => :socket_index
  post "/socket/create" => "socket#create", :as => :sc
  
  match "/auth/twitter/callback" => "sessions#create"
end
