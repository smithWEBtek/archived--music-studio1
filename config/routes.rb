Rails.application.routes.draw do

  root '/api/students'

  namespace :api do
    resources :teachers
    resources :students
    resources :resources
    resources :lessons
    resources :lesson_resources
  end

end
