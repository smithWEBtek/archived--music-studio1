Rails.application.routes.draw do
  root 'api/students#index'  
  get 'api/students/:id/resources', to: 'students#resources'
  namespace :api do
    resources :teachers
    resources :students
    resources :lessons
    resources :resources
    resources :lesson_resources
  end
end
