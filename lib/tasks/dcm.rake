namespace :db do
  desc 'drop, create, migrate, seed the db'
  task dcm: :environment do
    puts 'dropping db....'
    Rake::Task['db:drop'].invoke
    
    puts 'creating db....'
    Rake::Task['db:create'].invoke
    
    puts 'running migrations ....'
    Rake::Task['db:migrate'].invoke
    
    puts 'seeding db ....'
    Rake::Task['db:seed'].invoke
    
    puts 'ok Bud, we have flushed the database toilet'
  end
end
