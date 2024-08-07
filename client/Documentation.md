# Eventure Pro 


## Description: Eventure Pro is a system for managing all types of events



### The application has the following pages:

Home page - available for logged in and not logged in users

All events page - available for logged in and not logged in users

Event details page -  available for logged in and not logged in users

My events page - available for logged in users

Create event page - available for logged in users

Create category page - available for logged in users

Edit event page - available for logged in users

Delete event - available for logged in users

Login page - available for not logged in users 

Register page - available for not logged in users


### Functional activities:

Logged in users can create events

Logged in users can view their own events

Logged in users can edit or delete their own events

Logged in users can comment on events

Logged in users can create event categories

Not logged in users can only view events and event details

Not logged in users can login or register



### Project Architecture:

Components: Define how the UI is displayed and use the hooks to get dynamic data from the server

Hooks: Share common functionality between different components, hold a local state and use API to get data from the server

API: Contain methods that can make requests to the server for getting, creating, updating or deleting data 

Context: Holds the application context

