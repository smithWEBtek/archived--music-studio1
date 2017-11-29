class Api::StudentsController < ApplicationController

  def index
    @students = Student.all
    render json: @students
  end

  def create
    @student = Student.new(student_params)
    if @student.save
      render json: @student
    else
      render json: { errors: { message: 'student NOT created' }}
    end
  end
  
  private
  def student_params
    params.require(:student).permit(:name, :level)
  end

end