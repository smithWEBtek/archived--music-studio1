class Api::TeachersController < ApplicationController

  def index
    @teachers = Teacher.all
    render json: @teachers
  end
  
  def create
    @teacher = Teacher.new(teacher_params)
    if @teacher.save
      render json: @teacher
    else
      render json: { errors: { message: 'teacher NOT created' }}
    end
  end
  
  private
  def teacher_params
    params.require(:teacher).permit(:firstname, :lastname, :email)
  end
end
