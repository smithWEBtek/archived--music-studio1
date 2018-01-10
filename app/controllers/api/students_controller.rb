class Api::StudentsController < ApplicationController
 before_action :set_student, only: [:show, :edit, :update, :destroy, :resources]
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

  def destroy
    @student = Student.find(params[:id])
    @student.delete
  end
  
  def resources
    raise params.inspect

    @resources = @student.resources
    if @resources
      render json: @resources
    else
      render json: { errors: { message: 'student resources NOT found' }}
    end
  end

  private
  def set_student
	  @student = Student.find_by_id(params[:id])
	  end
  def student_params
    params.require(:student).permit(:firstname, :lastname, :email, :level, :teacher_id)
  end

end