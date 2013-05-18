class SocketController < ApplicationController
  def index
    if request.post?
      Pusher["channel"].trigger("event", params[:text]+"!!!")
    end
  end
end
