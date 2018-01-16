class Api::ResourcesController < ApplicationController

  def index
    @resources = Resource.all
    render json: @resources
  end

  def show
    @resource = Resource.find(params[:id])
    render json: @resource
  end

  def create
    @resource = Resource.new(resource_params)
    if @resource.save
      render json: @resource
    else
      render json: { errors: { message: 'resource NOT created' }}
    end
  end
  
  def update    
    binding.pry
    @resource = Resource.find(params[:id])
    @resource.update(resource_params)
    if @resource.save
      render json: @resource
    else
      render json: { errors: { message: 'resource NOT updated' }}
    end
  end

  def destroy
    @resource = Resource.find(params[:id])
    @resource.delete
  end

  private


  def resource_params
    params.require(:resource).permit(:title, :category, :description, :format, :location, :url)
  end

end
