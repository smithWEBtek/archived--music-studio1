Rails.application.routes.draw do
  
  root 'api/students#index'  
  get 'api/students/:id/resources', to: 'api/students#resources'
  namespace :api do
    resources :teachers
    resources :students
    resources :lessons
    resources :resources
    resources :lesson_resources
  end


  # get '*path', to: "application#fallback_index_html", constraints: ->(request) do
  #   !request.xhr? && request.format.html?
  # end

end
