namespace :db do
  desc 'heroku pg:reset, migrate, seed'
  task hdcms: :environment do
    exec('heroku pg:reset --app piano-student-api --confirm piano-student-api
      heroku run rake db:migrate --app piano-student-api
      heroku run rake db:seed --app piano-student-api')	
  end
end
