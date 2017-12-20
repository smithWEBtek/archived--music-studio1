Rails.application.routes.draw do

  
  root 'students#index'
  namespace :api do
    resources :teachers
    resources :students
    resources :resources
    resources :lessons
    resources :lesson_resources
  end

end
