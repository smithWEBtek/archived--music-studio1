class Api::TeachersController < ApplicationController
  
    def index
      @teachers = Teacher.all
      render json: @teachers
    end
  
    def show
      @teacher = Teacher.find(params[:id])
      render json: @teacher
    end
  
    def create
      @teacher = Teacher.new(teacher_params)
      if @teacher.save
        render json: @teacher
      else
        render json: { errors: { message: 'teacher NOT created' }}
      end
    end
  
    def update
      @teacher = Teacher.find(params[:id])
      @teacher.update(teacher_params)
      if @teacher.save
        render json: @teacher
      else
        render json: { errors: { message: 'teacher NOT updated' }}
      end
    end
    
    def destroy
      @teacher = Teacher.find(params[:id])
      @teacher.delete
    end

    private
    def teacher_params
      params.require(:teacher).permit(:firstname, :lastname, :email)
    end
  
  end