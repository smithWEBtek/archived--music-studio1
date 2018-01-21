namespace :db do
  desc 'heroku pg:reset, migrate, seed'
  task hdcms: :environment do
    exec('heroku pg:reset --app music-studio --confirm music-studio
      heroku run rake db:migrate --app music-studio
      heroku run rake db:seed --app music-studio')	
  end
end
