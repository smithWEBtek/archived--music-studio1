class Api::LessonsController < ApplicationController

  def index
    @lessons = Lesson.all
    render json: @lessons
  end

  def show
    @lesson = Lesson.find(params[:id])
    render json: @lesson
  end

  def create
    @lesson = Lesson.new(lesson_params)
    if @lesson.save
      render json: @lesson
    else
      render json: { errors: { message: 'lesson NOT created' }}
    end
  end
  
  def update
    @lesson = Lesson.find(params[:id])
    @lesson.update(lesson_params)
    if @lesson.save
      render json: @lesson
    else
      render json: { errors: { message: 'lesson NOT updated' }}
    end
  end

  def destroy 
    @lesson = Lesson.find(params[:id])
    @lesson.delete
  end

  private
  def lesson_params
    params.require(:lesson).permit(:date, :teacher_id, :student_id, :notes)
  end
end
