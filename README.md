# README: note this readme is being updated as of Tuesday, Jan 23, 2018. The final version of this readme will be available by Wednesday, Jan 24 10:00PM EST.

Brad Smith 
brad@smithwebtek.com
www.smithWEBtek.com

The applicaton was built with Rails 5.0 in API mode.
The gem 'foreman' was used to implement the Reack client app within the same project, using [this blog post](https://www.fullstackreact.com/articles/how-to-get-create-react-app-to-work-with-your-rails-api/) as a guide: 

There is a 'procfile' at the root of the Rails app, where you can control 

## SEED DATA and related RAKE tasks
There is a seeds.rb file in app/db/seeds.rb with sample data.
There are 3 rake tasks that incorporate this seed data:

rake db:backup

rake db:dcms

rake db:hdcms


## API and interacting with the Rails app 'back-end'
All of the backend data starts with 127.0.0.1:3001/api as a base URL

The project loads all in one repo, with the front-end client using React/Redux in the /app/client folder.

You can navigate to the /client folder to interact with the React app on its own.
To see the React app, navigate to /client folder and run:

$ npm install
$ npm start

To view:
FORK and CLONE this repo

run: rake db:setup
run: rake db:dcms
this will: D DROP database, C CREATE database, M run MIGRATIONS, S load SEED dat
run: rake start

The React app will show appear the in browser at: http://localhost:3000/

To view raw API data, go to: 
http://localhost:3001/api 
http://localhost:3001/api/students 
http://localhost:3001/api/teachers 
http://localhost:3001/api/resources 
http://localhost:3001/api/lessons


This README would normally document whatever steps are necessary to get the application up and running.

Things you may want to cover:

Ruby version

System dependencies

Configuration

Database creation

Database initialization

How to run the test suite

Services (job queues, cache servers, search engines, etc.)

Deployment instructions

...