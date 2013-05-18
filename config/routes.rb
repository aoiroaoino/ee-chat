EeChat::Application.routes.draw do
  get "room/index"
  post "room/index"
  get "socket/index", :as => :socket_index
  post "socket/index", :as => :socket_index
  # post "/socket/create" => "socket#create", :as => :sc
end
