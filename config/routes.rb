Rails.application.routes.draw do

  
  root 'api/students#index'
  
  namespace :api do
    get '/resetdb', to: 'resources#resetdb'
    resources :teachers
    resources :students
    resources :lessons
    resources :resources
    resources :lesson_resources
  end

end
