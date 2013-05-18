class SocketController < ApplicationController
  def index
  end

  def create
    # Pusher["channel"].trigger("event", params[:text]+"2")
    redirect_to :socket_index
  end
end
