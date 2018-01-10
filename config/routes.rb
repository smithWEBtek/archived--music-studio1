Rails.application.routes.draw do

  
  root 'api/students#index'
  
  get 'api/students/:id/resources', to: 'students#resources'

  namespace :api do
    get '/resetdb', to: 'resources#resetdb'
    resources :teachers
    resources :students
    resources :lessons
    resources :resources
    resources :lesson_resources
  end

end
