class StaticController < ApplicationController

  def index
    @students = Student.all
    @teachers = Teacher.all 
    @resources = Resource.all
    @lessons = Lesson.all

    render 'static/index'
  end

  def db_backup
    Resource.db_backup
  end

  def db_reset
    Resource.db_reset
  end
end
