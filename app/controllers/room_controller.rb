# -*- encoding: utf-8 -*-
class RoomController < ApplicationController
  def index
	  	@current_user ||= User.find(session[:user_id]) if session[:user_id]
	  	if @current_user.nil?
	  		@current_user = User.new(:name => "ゲスト")
	  	end
  end
end
