# relayCRUDApp
A full CRUD web app used for collaborative project management.

# Descripion:
The goal of the applicaion is to provide a tool for a team to track progress for a sprint. The app allows anyone with the link to read updates and view the current status of the project. Each task can be created to include a title, task lead, due date, current progress, updates, and if they are currently blocked. Team members are able to also create and update tasks as they are completed. The Project Lead is the only role able to delete tasks for the project.  
# User Stories
From a homepage the user can view the project as a whole, access pages to register, sign in, or sign out of a relay account.
A user can view all project tasks from the project overview page. From this page users can see all tasks, the lead for each task, current status, and if someone is currently blocked. It also has a button to update tasks. Users can click into tasks from this page to see more detailed information.
From the show route a user can see more data on a specific part of a project. This includes due date, any updates, and the other information shown on the project overview page. There are also links for a user to update or delete tasks based on their level of authorization.
Users who are singed in can create new tasks using a form, and update tasks using a form.
Users who are signed in with a role of "Proejct Lead" are also able to delete tasks.
Users can create an account by providing and user name, password, and role. 
Users can signout of an account by clicking a sign out link in the header or footer.



# Technologies Used:
- Javascript
- HTML 5
- CSS
- Node.js
- MongoDB
- Express.js
- RESTful routes
- Bcrypt
- Heroku

# Features
 - Users can run full C.R.U.D for tasks on a shared project.
 - App controls the level of access based on the user's account type.
 - Project view to give high level information on the current status of a project.
 - Task view to show more detailed information on individual task projects.

# Wireframe:

# Screen Shots:


# Design
CSS was used to design the project, along with Canva for logo creation. 
Asana and Monday were used for design inspiration.
All pages have the same header and footer to allow for ease of navigation.
Icons were used for buttons when feasible to reduce tesk.

# Next Steps
Create a Task Lead View so individual users can see their tasks in one screen.
Allow users to view a log of updates from task creation to completion.
More responsive styling for mobile access.
Use Multer to allow users to upload screenshots of code or resources to support blocked tasks.


# Deployed Link

Deployed via Heroku: https://relaycrudapp.herokuapp.com

