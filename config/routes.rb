Rails.application.routes.draw do

  
  root 'api/students#index'
  
  namespace :api do
    get '/resetdb', to: 'resources#resetdb'
    resources :teachers
    resources :students
    resources :resources
    resources :lessons
    resources :lesson_resources
  end

end
