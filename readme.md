# JSD12/Week 11 - Learning Backend, System Design, API

### backend-gen project folder

server.js

- Old style server setup use Node JS.
- Use food menu as mock data, show different route when req.method = "get" then use res.end to show webpage.
  - req.url = "/" : welcome page.
  - req.url = "/menu" : all menu page.
  - req.url = "/randomMenu" : random one menu use Math.floor((Math.random)*) *number of food menu object in array.

index.js

- Learn how to setup server using Node Express.
- Use my Genmate team group for mock data, show different route for app.get then use res.send to show webpage.
  - app.get "/" : Welcome page
  - app.get "/users" : show all Genmate team.
  - app.get "/users/:id" : show Genmate object that jsd_number = id, if not found -> show error message.

### backend-genmate-d project folder.

server.js

- Old style server setup use Node JS.
- Use my Genmate team group for mock data, show different route when req.method = "get" then use res.end to show webpage.
  - req.url = "/" : Welcome page
  - req.url = "/users" : show all Genmate team.
  - req.url = "/randomgenmate" : random one Genmate use Math.floor((Math.random)*) *number of Genmate object in array.

### express_exercise project folder

index.js

- Setup server using Node Express
- Use external API URL to fetch data use in project / Use cors for serve Genmate team data from this server.
- Use my Genmate team group for mock data, show different route when req.method = "get" then use res.end to show webpage.
  Webpage route
  - app.get = "/" : Welcome page
  - app.get = "/users" : Show all Genmate team page
  - app.get "/users/:id" : show Genmate object that jsd_number = id, if not found -> show error message.
- Test connect to this server from external project @ internal port 3000. Otherproject could fetch Genmate data for use in project.
