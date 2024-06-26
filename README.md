# **Realtorest**
A small web application used to host a website. Designed for hosting a personal website for realtors. Exploration, sorting, and direct contact functionalities are available for visiting users, while enabling Admin to manage listings and engage with potential buyers effectively, all within a user-friendly, ad-free environment.

### Context
This project is created for the course CMPT 276 D200 from Simon Fraser University, taught by Bobby Chan in 2024 Spring. More details about the course can be seen by following this link: https://www.sfu.ca/outlines.html?2024/spring/cmpt/276/d200

For the course, students are required to gather in groups of 5, and create a project for a client of their choice. As documented by the project desciption: 

> The group project will be completed in teams of five.  The project will have four stages: a project proposal and three iterations of development; each iteration will involve designing, planning, developing, testing, and deploying a web application while submitting proper documentation. You will also need to plan a meeting with your client after each iteration of development.

The purpose of the project is to give students a chance to experience the agile development workflow, and practice using Java, Spring Boot, PostgreSQL, HTML, CSS, and Javascript to create a project. Then deploying the project on Render.com to be evaluated.

Overall, the workload for this project invovles 3 iterations that are 2-weeks each, plus some additional pre-production on things like project proposal and sepcification defenitions, and presenting the project in a final demo.

### Notes for Prosterity

This project uses a PostgreSQL database deployed to Render.com. So by the time someone is reading this, it's very likely the free account have already expired, and it won't be possible to access the website anymore. The website will not be able to start without a functional database, so it might be required to setup a local database and connect it to this project.

Also, the email systems also uses Mailgun API, which is also tied to a free account. Those may also not work in the future.

And most importantly, the enviroment variables for API keys and such are not in this repo, so... if the Render.com website is down, it will be very difficult to get the website running by simply cloning this repo.



## About this project
### Abstract
**Realtorest** is a real estate web application that is created for a realtor. The application displays a list of properties that can be sorted based on price, location and room features, and the available map feature can assist users to explore properties in different locations. From general users’ perspective, users can create an account, manage their basic information, control their property choices with features such as ‘Save as Favorite’, and connect with the website owner to discuss or set up an appointment. The application is specifically tailored for our client, who is the middleman that helps property sellers and buyers connect with each other. This application focuses on helping the client upload and display information of properties that are being sold and help potential buyers who are interested in those properties to make the purchase.

### Project Description
Our client is a realtor in British Columbia who does not have a personal website for their real estate business, and due to the competitiveness in the industry, a personal website can benefit our client a lot by helping them connect with potential clients and widening their business scope. Hence, the web application **Realtorest** is created to help our client connect to property buyers and sellers. The description will outline two types of users that will use this software: the project’s client, who will be the admin of the website. And the general customers, who are home buyers, real estate investors, renters, and real estate professionals. Detailed below are the high-level descriptions of the features that **Realtorest** has to offer.   

General customers can explore properties without the sign in but must register to contact the client or to save the properties to the favorites. Sign up/sign in  can be done using email or through third party accounts like Google. This process will save log in details in the database to avoid scam and enable property tracking. The website will also offer filters for location, room numbers, and sorting by price or distance.

**Realtorest** also utilizes application programming interface (API) for property listing view, which allows customers to view properties as markers on a map; this process requires an external API, for example Google Maps, in order to function. Moreover, customers who wish to get updated frequently about real estate news by the website owner also can sign up to be in the automated mailing list that uses an external API allowing the admins to send the update emails automatically. 

As for the Admin, they will be able to login to their website under admin login, which allows them to manage the property listing, by uploading new properties information or removing any properties that they wishes to. In addition, the website owner can get notified by any customers who are wishing to contact them regarding a property.

### Project Competitiveness
There are many personalized websites tailored for realtors, hence it is very competitive for the project to have its own distinctive features that stand out from the rest of the other websites. However, **Realtorest** is different from many other realtor websites in which it does not have any advertisements, because the project is focused on the client, rather than profit like the others. In addition, under UI perspective, most of the realtors websites that the team encountered are usually very hard to navigate and not user friendly, since there are many website features and interactions that all appear at once. Hence, to avoid this problem, **Realtorest** will focus on the customer interaction experience by creating a minimalist layout that can help the user to navigate with ease, while also providing sufficient features. 



## Screenshots
### Home Page
![Home Page](<Documentation/Screenshots/I2 Home Page.png>)
### Properties Listing
![Properties Listing View](<Documentation/Screenshots/I2 Listing.png>)
### Login
![Login](<Documentation/Screenshots/I2 Login.png>)
### Admin Login
![Admin Login](<Documentation/Screenshots/I2 Admin Login.png>)
### Register
![Register](<Documentation/Screenshots/I2 Register.png>)



## Notes for Marking This
### Recommended Way for Marking
When working on this project, GitHub's productivity tools are being used extensively. Because commits are being done on multiple branches concurrently, it may be confusing if you are only looking at the commit history. This is also compounded by the fact that the commits are not being squashed, because we are still uncertain if it would be a good idea to do so. Thus to better understand how this project came to be, it is recommended to approach reviewing this project following these steps:

1. Setup the project by cloning this repo, then place the `etc\secrets\.env` file provided as part of the submission into the corresponding location.

2. Run the website locally and visit the locally hosted page (http://localhost:9090/) to play around with the website. You can visit the dev pages for [users](http://localhost:9090/dev/users), [properties](http://localhost:9090/dev/properties), and [admins](http://localhost:9090/dev/admins) for helpful tools. A list of all dev pages can be found [here](http://localhost:9090/dev).

3. Check out the [GitHub Projects page](https://github.com/orgs/CMPT276-Project-Group-6/projects/1) to see a list of [all Issues](https://github.com/orgs/CMPT276-Project-Group-6/projects/1/views/8) and [all Pull Requests](https://github.com/orgs/CMPT276-Project-Group-6/projects/1/views/11). As shown by the screenshots below, here, you can see a list of everything we worked on in Issues, and every time we merged something into the main branch in Pulls. The start date and end date also shows when was each person working on each item. If you prefer, you can also find a list of everything in the [Issues page](https://github.com/CMPT276-Project-Group-6/Realtorest/issues?q=is%3Aissue) and the [Pull Requests page](https://github.com/CMPT276-Project-Group-6/Realtorest/pulls?q=is%3Apr) of the repo.

![All Issues](<Documentation/Screenshots/GitHub Projects - All Issues.png>)

![All Pull Requests](<Documentation/Screenshots/GitHub Projects - All Pull Requests.png>)

4. Furthermore, the [Timeline](https://github.com/orgs/CMPT276-Project-Group-6/projects/1/views/4) may also provide a helpful view of who is working on what at when.

![Timeline](<Documentation/Screenshots/GitHub Projects - Timeline.png>)

### Port ID
The port when deploying this project to `localhost` have been changed to `9090`. This is because `8080` is being used by a local LLM that have the port number hardcoded in.

### Environment Variables
Environment variables are being used to store the database credentials.

As shown in `src\main\resources\application.properties`, this project uses some environment variables.

Using `cdimascio/dotenv-java`, the data is being read from the file `etc\secrets\.env`, which should be provided as a part of the submission. If there are any issues, please contact me at <kzcheng@sfu.ca>.

### Admin Pages
The admin pages can be accessed by going to `/dev`, `/dev/users`, `/dev/properties`, and `/dev/admins`. It have some useful functions, like displaying the table of all users and adding users manually. Those pages will be disabled in the final product, but while developing, they are pretty useful.

### Password Reset
The Mailgun API only allows for sending emails to 5 pre-authorized accounts if you don't pay. So it may be impossible to receive the password reset email. 

It may be a good idea to register for a Mailgun Account and use your own credentials for this.

### Why Does Kevin Have So Many Commits / Pulls / Lines Changed
For this project, Kevin have been mostly working on things like setting things up, refactoring, auto formatting files, etc. Kevin have not actually worked on that many features, but doing those side activities causes a lot of changes to the code base.

Setting things up often only takes a few clicks, but a lot of code will be automatically generated by Spring Boot and such. Auto formatting means a massive amount of new lines will be "added" and "deleted" simply from a click of a button. Refactoring means moving stuff around and pulling out components from files, which also cause a lot of bloat in change history.

Workflow wise, because Kevin is familiar with Git and GitHub, this also means Kevin have the tendency to commit a lot, causing massive amounts of commits being recorded. Doing things like merging pull requests with software like GitKraken also compounds with this fact.

So yeah, when checking information with things like `git blame`, remember to check the full history, since other wise it may cause confusion, due to issues where only the most recent activity only shows Kevin auto formatting the file.



## Group Members
### Kevin
GitHub: https://github.com/kzcheng
 
### Nam
GitHub: https://github.com/namneyugn21

### Drishty
GitHub: https://github.com/drishty02

### Amrit
GitHub: https://github.com/htoor1999

### Malaika
GitHub: https://github.com/MalaikaQ



## Documentation
### Project Proposal
https://docs.google.com/document/d/18ciUDUsWcUADZHcMQhobZ8FYAu0NfuLscaJnMyYtte0

### Requirements and Specification Document
https://docs.google.com/document/d/1_oOKkc0if6xlwWooyd694t9nAQmbeQBu31ZJ956VdmE



## Links
### GitHub Repository
https://github.com/CMPT276-Project-Group-6/Realtorest

### GitHub Organization
https://github.com/CMPT276-Project-Group-6
