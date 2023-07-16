## About 🌮

Simply put, [Street Eatz]([https://birdsongs-mu.vercel.app/](https://streateatz-fe.vercel.app/)) is an app made to help hungry people find good food. Designed and built by a team of seven student developers, **Street Eatz** compiles a back-end database of Denver-local food trucks with the end goal of connecting vendors with customers, whether they're new or they're and long-time fans. Customers can explore food trucks in their area, complete with details about each truck's current location, wait time, menu items, and crowd-sourced reviews, as well as follow their favorite food trucks for status updates straight from the vendor. Vendors can use the application to broadcast their open or closed status, their current location, wait time, and their menu to connect directly with users. It's a win-win.

---

## Set Up 🍜

 ### Installing the front-end repository
> - Head to the front-end [GitHub repository](https://github.com/streeteatz/streateatz-fe). 
> - Click the `code` drop-down menu and copy the SSH key.
> - On your local machine, open the terminal using  `⌘ + space` + `terminal` and navigate to the location you'd like the repository directory cloned to. 
> - Once you're there, run  `git clone [SSH Key] [streeteatz-fe]` via the command line.
> - Run `npm install`.

## Installing the express server
> - Navigate to the front-end [GitHub repository](https://github.com/streeteatz/street-eatz-xpress-server). 
> - Click the `code` drop-down menu and copy the SSH key.
> - On your local machine, open the terminal using  `⌘ + space` + `terminal` and navigate to the location you'd like the repository directory cloned to. 
> - Once you're there, run  `git clone [SSH Key] [streeteatz-express]` via the command line.
> - Run `npm install`.

> ### Opening the application 
> - When you're ready to use the app, open the terminal and navigate to the `streeteatz-fe` directory.
> - Open a second terminal tab using `⌘ + t`.
> - In that second terminal tab, run the command `npm start` to begin running Street Eatz via local host.
> - Copy and paste the local host URL into your browser of choice.
> - Back in your first terminal tab, navigate to the `streeteatz-express` directory.
> - Open a third terminal tab using `⌘ + t`.
> - In that third terminal tab, run the command `npm start` to begin running the express server via local host. 

> ### Sounds like too much work?
> - I get it. You can also visit the [StreetEatz](https://streateatz-fe.vercel.app/) via Vercel right in your browser of choice. Here's the catch-- Vercel doesn't support websockets functionality, so this will only allow you to demo 50% of the application's full capabilities. If you want to explore StreetEatz as a vendor who can make real-time changes to their truck or watch the live updates in action, you'll need to follow the instructions above and run the application locally. 

---

## Preview 🌭

![Preview Home Page](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDZ6Y2IxdHNldHg1ZmpsNzhuOTZ5bGhiaDEwdjB3NWt3cXJsZDZ0OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/G8nv63tz7QfKD05F7x/giphy.gif)

![Preview Search and Sort Functionality](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmdldHh0ZzR3bzA2anVuOWkzNmdtNWM2cG4waWpwdzhmeWMxdXNkNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/FShTuhLJ2C8H4G08gX/giphy.gif)

![Preview Vendor View](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjU4MzBzMWRqNjF2YXFsaXVqamE1ZnZiZ3dibGIza2FuY3E1YnY4cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fOlBvVlq0uVLanbFzA/giphy.gif)

---

## Developers 🌯

**BE Team**
- Angel Byun [GitHub](https://github.com/angelbyun) | [LinkedIn](https://www.linkedin.com/in/angel-byun/)
- Reilly Miller [GitHub](https://github.com/rmiller220) | [LinkedIn](https://www.linkedin.com/in/reilly-miller-6b6131266/)
- Isaac Thill [GitHub](https://github.com/ithill22) | [LinkedIn](https://www.linkedin.com/in/isaac-thill/)

**FE Team**
- Patrick Ankiewicz [GitHub](https://github.com/Pma913) | [LinkedIn](https://www.linkedin.com/in/patrick-ankiewicz/)
- Em Lindvall  [GitHub](https://github.com/emlindvall) | [LinkedIn](https://www.linkedin.com/in/emlindvall/)
- Devynne Marshall [GitHub](https://github.com/Devynnem) | [LinkedIn](https://www.linkedin.com/in/devynnemarshall/)
- Jacob McFarlane [GitHub](https://github.com/JacobMacFarlane) | [LinkedIn](https://www.linkedin.com/in/jacob-macfarlane-052593261/)

---

## Context 🍧

Street Eatz was a group project built by the collaborators during their final semester enrolled at [Turing School of Software & Design's Front End Development program](https://frontend.turing.edu/), a four-semester, eight-month course focused on preparing students for a career as web developers working with Javascript, HTML, CSS, and the React framework. The project was built to match the specifications of the [project rubric](https://mod4.turing.edu/projects/capstone/expectations.html), and is the product of our front-end team's first experience working alongside our back-end counterparts. As our group's capstone project, Street Eatz is a culimination of all of the skills and technologies we've worked so hard to learn, leverage, and love throughout our Turing journey. Here's a quick snapshot of this project's front-end languages, technologies, and competencies:
  * React
  * Real-time WebSockets notifications and updates utilizing [Socket.io](https://socket.io/)
  * URL customization and browser compatibility via Router 
  * Test-Driven Development utilizing the Cypress framework
  * CSS animations and microinteractions
  * Continuous integration
  * Peer-reviewed pull requests 
  * Agile workflow tracked via [GitHub Projects](https://github.com/orgs/streeteatz/projects/1/views/1)
  * Live deployment with [Vercel](https://streateatz-fe.vercel.app/)

---

## Goals and Challenges 🍛

As mentioned above, Street Eatz represents our front-end team's first experience working working directly with a team of back-end developers, rather than with a pre-made API. Luckily, our back end team are all excellent progammers and wonderful human beings, so this experience was a great one; both teams were excited to take a peek into the other side of the stack, and ethusiastic and patient about explaining their processes and abilities. That being said, working as a full-stack team did present different challenges, in addition to those new opportunities-- both teams needed to be very clear in explaining their timelines, needs, and limitations, and flexible in their respecrive approaches when changes needed to be made. 

Like many other Turing projects, the timeline for this project was extemely limited in order to simulate the pressure that professional developers often navigate in the workforce. With only eight full days of work time including weekends, our team had to consider minimum viable product very carefully and stay diligent about scope-creep. Because our team of developers were so excited about the possibilities of this application and each had a ton of ideas about new features, integrations, and tools to bring to the table, we had to make sure we weren't dreaming too big-- while this meant sacrificing some really fantastic suggestions, it also allowed us plenty of room to practice keeping each other in check in a way that was actionable, kind, and professional. 

Our FE team also tackled learning and implementing WebSocket functionality into our application without any prior experience or any guidance from our Turing mentors-- all of our team's learning about this technology was self-taught outside of the classroom, and relied heavily on the [Sockets.io documentation](https://socket.io/docs/v4/), YouTube tutorials by [LamaDev](https://www.youtube.com/watch?v=7vVqMR96T5o&t=968s) and [PedroTech](https://www.youtube.com/watch?v=djMy4QsPWiI&t=435s), and lots of good, old-fashioned Googling. 

---

## Future Development Opportunities 🥙

As mentioned, our team has big dreams for Street Eatz. In particular, we'd love to work with our back-end team to integrate the Google Maps and Google Reviews APIs into the application, allowing users to see nearby trucks pinned on a map and see written reviews from other users. We'd also like to expand on functionality for vendors, allowing them to broadcast custom notifications to customers and update their menu items and current wait in real-time based on what they're serving or what they've run out of. Stay tuned! 
