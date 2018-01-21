original procfile: 

web: cd client && npm start
api: bundle exec rails s -p 3001



original start.rake:

task :start do
  exec 'foreman start -p 3000'
end