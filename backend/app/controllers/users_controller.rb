
    class UsersController < ApplicationController

        # before_action :define_current_user
    
        def create
            user = User.create({
                username: params[:username],
                password: params[:password]
            })
        
            if user.valid?
                current_user = user
                session[:user_id] = user.id
                render json: { success: true, id: user.id }
            else
                render json: { success: false}
            end
        end
    
        def show
            # @current_user
    
            @current_user = User.find(params[:id])
            render json: @current_user
        end
    
        def define_current_user
            if params[:id]
                @current_user = User.find(params[:id])
            # else
            #     @current_user = Passenger.new
            end
        end
    
        def current_user
            @current_user
            # byebug
        end
    
    end
