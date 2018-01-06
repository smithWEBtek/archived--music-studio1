README
This project loads all in one repo. React/Redux is in /client folder.

To view:

FORK and CLONE this repo

run: rake db:setup

run: rake db:dcms
this will: D DROP database, C CREATE database, M run MIGRATIONS, S load SEED data

run: rake start

app will show up in browser at: http://localhost:3000/

to view raw API data, go to: http://localhost:3001/api http://localhost:3001/api/students http://localhost:3001/api/teachers http://localhost:3001/api/resources http://localhost:3001/api/lessons

Brad Smith brad@smithwebtek.com

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