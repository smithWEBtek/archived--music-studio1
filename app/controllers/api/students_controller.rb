class Api::StudentsController < ApplicationController

  def index
    @students = Student.all
    render json: @students
  end

  def show
    @student = Student.find(params[:id])
    render json: @student
  end

  def create
    @student = Student.new(student_params)
    if @student.save
      render json: @student
    else
      render json: { errors: { message: 'student NOT created' }}
    end
  end

  def update
    @student = Student.find(params[:id])
    @student.update(student_params)
    if @student.save
      render json: @student
    else
      render json: { errors: { message: 'student NOT updated' }}
    end
  end
  
  private
  def student_params
    params.require(:student).permit(:firstname, :lastname, :email, :level, :teacher_id)
  end

end