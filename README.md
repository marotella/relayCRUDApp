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
- Index Page:
<img width="439" alt="Screenshot 2023-03-07 at 7 14 12 PM" src="https://user-images.githubusercontent.com/111547566/225480057-2bcb1e56-aa6f-4a41-b5c1-7e45e2d952d5.png">

-New Page:
<img width="472" alt="Screenshot 2023-03-07 at 7 13 19 PM" src="https://user-images.githubusercontent.com/111547566/225480148-f091504e-aa0d-4554-b41f-18f10ccffbc7.png">


-Update page:
<img width="530" alt="Screenshot 2023-03-07 at 7 16 54 PM" src="https://user-images.githubusercontent.com/111547566/225480167-265daf5b-0afd-4221-9b8d-03f4de4ab85b.png">


-Show page:
<img width="530" alt="Screenshot 2023-03-07 at 7 16 54 PM" src="https://user-images.githubusercontent.com/111547566/225480108-b1ead381-aeab-4e1d-988f-998a1ac297ce.png">

# Screen Shots:
Home:
<img width="565" alt="Screenshot 2023-03-15 at 8 47 15 PM" src="https://user-images.githubusercontent.com/111547566/225480501-db103f65-0ba9-46ee-8971-ed2e6019b6c8.png">

Project Overview/Index:
<img width="569" alt="Screenshot 2023-03-15 at 8 48 14 PM" src="https://user-images.githubusercontent.com/111547566/225480582-ed55c58e-a65a-4ccc-854e-65bbaa09e9dc.png">

Task Information/Show:
<img width="507" alt="Screenshot 2023-03-15 at 8 48 40 PM" src="https://user-images.githubusercontent.com/111547566/225480639-1f2bc145-7952-42be-a128-a34bb9cc3804.png">

New Task:
<img width="448" alt="Screenshot 2023-03-15 at 8 49 23 PM" src="https://user-images.githubusercontent.com/111547566/225480811-d37323c6-7d06-4811-abdb-77fe71048074.png">

Update:
<img width="521" alt="Screenshot 2023-03-15 at 8 50 11 PM" src="https://user-images.githubusercontent.com/111547566/225481148-1ef82caa-fca3-4280-a547-fd8de430151a.png">


Register:
<img width="492" alt="Screenshot 2023-03-15 at 8 49 48 PM" src="https://user-images.githubusercontent.com/111547566/225480985-092a74cd-87d8-4506-a5d0-c7e663e16a8d.png">


Sign-in:
<img width="458" alt="Screenshot 2023-03-15 at 8 50 55 PM" src="https://user-images.githubusercontent.com/111547566/225481479-e1a9c4f2-2a21-47e2-86cb-853420a6f8ee.png">




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

