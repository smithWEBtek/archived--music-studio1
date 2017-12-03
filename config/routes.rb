Rails.application.routes.draw do
 
  resources :lesson_resources
  resources :resources
  resources :lessons
  resources :teachers
  namespace :api do
    resources :students
  end
end
