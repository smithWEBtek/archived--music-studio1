class Api::ResourcesController < ApplicationController

  def index
    @resources = Resource.all
    render json: @resources
  end

  def create
    @resource = Resource.new(resource_params)
    if @resource.save
      render json: @resource
    else
      render json: { errors: { message: 'resource NOT created' }}
    end
  end
  
  private
  def resource_params
    params.require(:resource).permit(:title, :category, :description, :format, :location)
  end

end
