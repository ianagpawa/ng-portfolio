export const PROJECTS = [
    {
      id: 'techBlog',
      title: 'Tech Blog',
      description: 'Blurbs chronicling personal tech projects. Built simple authentication and registration system.  Developed database models for users and posts.',
      site: 'https://chronicle-170419.appspot.com',
      github: 'https://github.com/ianagpawa/tech-blog',
      tech: ['Python', 'Flask', 'Google App Engine', 'NoSQL']
    }, {
      id: 'weather',
      title: 'React Weather App',
      description: 'A 5 day weather forecast app using React.',
      site: 'https://weather-forecast-192305.appspot.com',
      github: 'https://weather-forecast-192305.appspot.com',
      tech: ['ES6', 'React', 'Redux']
    }, {
      id: 'auralHistory',
      title: 'Music web app',
      description: 'Item catalog that stores playlists of songs.',
      details: 'Provided user registration and authentication system, where only users can post, edit and delete their own items.  Authentication is handled by Oauth2 through Facebook and Google, and HTTP methods are mapped to CRUD operations to implement a properly secured web application.  Developed database schema for storing playlists of songs.  Configured and secured a baseline Ubuntu Amazon Web Services server into an Apache Web Server and PostgreSQL database server.',
      site: 'http://ec2-34-201-35-166.compute-1.amazonaws.com',
      github: 'https://github.com/ianagpawa/catalog',
      tech: ['Flask', 'PostgreSQL', 'Python', 'Amazon Web Services']
    }, {
      id: 'newsfeed',
      title: 'News Feed',
      description: 'Article aggregator from some common news sites.',
      site: null,
      github: 'https://github.com/ianagpawa/newsfeed',
      tech: ['Angular', 'Github']
    }, {
      id: 'imageSearch',
      title: 'Image Search Microservice',
      description: 'Developed an image search API microservice using the Google Custom Search API.  Search terms can be passed as parameters and a JSON output will be received.  Search results can be paginated through by passing an additional parameter.  Search terms are recorded and the ten most recent search can be viewed via an API endpoint.',
      site: 'https://imgsearch-ia.herokuapp.com',
      github: 'https://github.com/ianagpawa/imageSearch',
      tech: ['MongoDB', 'Express', 'Node', 'Heroku']
    }, {
      id: 'audacious',
      title: 'Playlist Path Script',
      description: 'Updates song paths in Windows-based music playlists to Linux-based paths.',
      details: 'This repo is for a python script to convert music playlists saved in Windows to Ubuntu use-able playlists. File paths of song files are updated and new playlists are created. This works best if all your music is stored in a centralized location (sub-folders are fine).',
      site: null,
      github: 'https://github.com/ianagpawa/audacious.git',
      tech: ['Python']
    },
];
// forecast = Project("Weather React",
//                     "A 5 day weather forecast",
//                     "Developed React weather forecast app.",
//                     "https://weather-forecast-192305.appspot.com",
//                     "https://github.com/ianagpawa/weather-forecast",
//                     ["ES6", "React", "Redux"],
//                     'forecast',
//                     'Jan. 2018'
//                     )

// google = Project("Google Search",
//                 "A google search extension for Chrome.",
//                 "Developed Chrome extension that uses Google search.",
//                 "https://github.com/ianagpawa/search-extension",
//                 "https://github.com/ianagpawa/search-extension",
//                 ["Javascript", "XML"],
//                 'github',
//                 "Sep. 2017"
//                 )

// monitor = Project("Monitor",
//                 "Script for automating tasks with work invoices.",
//                 "Developed script to parse data from weekly invoices in Excel to create and update a spreadsheet of therapist submissions for tracking and monitoring.",
//                 "https://github.com/ianagpawa/monitor",
//                 "https://github.com/ianagpawa/monitor",
//                 ["Python"],
//                 'github',
//                 "Aug. 2017",
//                 True
//                 )


// portfolio = Project("Portfolio",
//                     "Personal portfolio of projects.",
//                     "Replicated a design mockup in HTML and CSS to create a responsive website, displaying images, descriptions and links to each portfolio project.",
//                     "https://ian-agpawa.appspot.com/",
//                     "https://github.com/ianagpawa/portfolio",
//                     ["Python", "Jinja2", "Webapp2", "Grunt", "Google App Engine"],
//                     "currentPortfolio",
//                     "Oct. 2017",
//                     True
//                     )

// chronicle = Project("Tech Blog",
//                     "Blurbs chronicling personal tech projects.",
//                     "Built simple authentication and registration system.  Developed database models for users and posts.",
//                     "https://chronicle-170419.appspot.com/",
//                     "https://github.com/ianagpawa/tech-blog",
//                     ["Python", "Flask", "Google App Engine", "NoSQL"],
//                     'chronicle',
//                     "Jun. 2017",
//                     True)

// weather2 = Project("Weather Forecast",
//                 "Local weather forecast.",
//                 "Developed a seven day weather forecast web app utilizing the Weather Underground API.",
//                 "https://weather-169903.appspot.com",
//                 "https://github.com/ianagpawa/weather2.0",
//                 ["Python", "Google App Engine", "Weather Underground API"],
//                 "weather2",
//                 "Jun. 2017",
//                 True)

// tacohub = Project("TacoHub",
//                 "Map of Spanish Harlem's finest tacos.",
//                 "Developed single-page application that utilizes Foursquare API to asynchronously display restaurant info on Google Maps.  Implemented functionality of dynamically updating and filtering restaurant map markers and info with Knockoutjs.",
//                 "https://tacohub-155203.appspot.com/",
//                 "https://github.com/ianagpawa/neighborhood-map",
//                 ["Knockoutjs", "Python", "Google App Engine", "Jinja"],
//                 "tacohub",
//                 "Jan. 2017")

// audacious = Project("Audacious",
//                 "Simple script for music playlists.",
//                 "Developed script to convert music playlists created in Windows to be Linux compatible.",
//                 "https://github.com/ianagpawa/audacious",
//                 "https://github.com/ianagpawa/audacious",
//                 ["Python"],
//                 "github",
//                 "Jan. 2017",
//                 True)

// catalog = Project("Music Catalog",
//                 "Item catalog that stores playlists of songs.",
//                 "Provided user registration and authentication system, where only users can post, edit and delete their own items.  Authentication is handled by Oauth2 through Facebook and Google, and HTTP methods are mapped to CRUD operations to implement a properly secured web application.  Developed database schema for storing playlists of songs.  Configured and secured a baseline Ubuntu Amazon Web Services server into an Apache Web Server and PostgreSQL database server.",
//                 "http://ec2-34-201-35-166.compute-1.amazonaws.com",
//                 "https://github.com/ianagpawa/catalog",
//                 ["Flask", "PostgreSQL","Python", "Amazon Web Services"],
//                 "catalog1",
//                 "Dec. 2016",
//                 True)

// synchronicity = Project("The Synchronicity Collective",
//                 "Multi-user music blog.",
//                 "Built an authentication system for users to register, sign in, and then create posts.  Set permissions so that only users can 'Like' and comment on posts.  Developed database schema for storing users and their content.",
//                 "https://synchronicity-collective.appspot.com/",
//                 "https://github.com/ianagpawa/synchronicity",
//                 ["Python", "Google App Engine", "Jinja", "NoSQL"],
//                 "synchronicity",
//                 "Nov. 2016")

// image = Project("Image Search",
//                 "An image search microservice.",
//                 "Developed an image search API microservice using the Google Custom Search API.  Search terms can be passed as parameters and a JSON output will be received.  Search results can be paginated through by passing an additional parameter.  Search terms are recorded and the ten most recent search can be viewed via an API endpoint. ",
//                 "https://imgsearch-ia.herokuapp.com",
//                 "https://github.com/ianagpawa/imageSearch",
//                 ["MongoDB", "Express", "Node", "Heroku"],
//                 "image",
//                 "Oct. 2016")

// shortener = Project("Url Shortener",
//                 ("A url shortener microservice."),
//                 "Developed API endpoint for shortening url addresses.  Set up MongoDB to store and map shortened URLs to their original address for later retrieval and use.",
//                 "https://u-short.herokuapp.com",
//                 "https://github.com/ianagpawa/urlShortener",
//                 ["MongoDB", "Express", "Node", "Heroku"],
//                 "url-shortener",
//                 "Sept. 2016")


// weather = Project("Local Weather",
//                 ("Fullstack javascript local weather app"),
//                 "Utilized Express as middleware for retrieving weather info from Weather Underground API",
//                 "https://weather-ia.herokuapp.com/",
//                 "https://github.com/ianagpawa/weather",
//                 ["Express", "Node", "Heroku"],
//                 "weather",
//                 "Oct. 2016")

// simon = Project("Simon Says",
//                 ("A Simon Says clone."),
//                 "Developed game that uses light and audio elements.",
//                 "https://simon-says-ia.herokuapp.com",
//                 "https://github.com/ianagpawa/simon-says",
//                 ["Ruby on Rails", "Heroku"],
//                 "simon",
//                 "Jul. 2016")

// quote = Project("Random Quote Generator",
//                 "A few of my favorite quotes.",
//                 "",
//                 "https://rand-quote-gen.herokuapp.com",
//                 "https://github.com/ianagpawa/random-quote",
//                 ["Ruby on Rails", "Heroku"],
//                 "random",
//                 "Mar. 2016")


// tictactoe = Project("Tic Tac Toe",
//                 "A tic tac toe game.",
//                 "",
//                 "https://ianagpawa.github.io/TickyTacky",
//                 "https://github.com/ianagpawa/TickyTacky",
//                 ["Github"],
//                 "tic",
//                 "Jul. 2016")


// calculator = Project("Javascript Calculator",
//                 "A fully functional simple calculator.",
//                 "First project "
//                 "utilizing 'this' in js.",
//                 "https://ianagpawa.github.io/calculator",
//                 "https://github.com/ianagpawa/calculator",
//                 ["Github"],
//                 "calculator",
//                 "Jun. 2016")

// pomodoro = Project("Pomodoro Productivity Timer",
//                 ("Productivity timer."),
//                 "First project utilizing setInterval().",
//                 "https://pomodoro-timer-ia.herokuapp.com",
//                 "https://github.com/ianagpawa/pomodoro",
//                 ["Ruby on Rails", "Heroku"],
//                 "pomodoro",
//                 "Jun. 2016")

// metadata = Project("File Metadata",
//                 ("A file metadata microservice."),
//                 "Uploading files will return "
//                 "a  JSON object of the file's name, file type, and size"
//                 " in bytes.",
//                 "https://metadata-ia.herokuapp.com",
//                 "https://github.com/ianagpawa/metadata",
//                 ["Express", "Node", "Heroku"],
//                 "meta",
//                 "Oct. 2016")

// header = Project("Request Header Parser",
//                 ("A request header parser microservice that will return your "
//                 "browser IP address, language, and operating system."),
//                 "",
//                 "https://header-parser-ia.herokuapp.com",
//                 "https://github.com/ianagpawa/headerParser",
//                 ["Express", "Node", "Heroku"],
//                 "header",
//                 "Sep. 2016")

// timestamp = Project("TimeStamp",
//                 "A timestamp microservice.  First Node api project.",
//                 "",
//                 "https://timestamp-microservice-ia.herokuapp.com/",
//                 "https://github.com/ianagpawa/timestamp",
//                 ["Express", "Node", "Heroku"],
//                 "timestamp",
//                 "Sep. 2016")


// twitch = Project("Twitch",
//                 "For tracking some Twitch streamers.",
//                 "Utilized Twitch API.",
//                 "https://twitch-it.herokuapp.com/",
//                 "https://github.com/ianagpawa/twitch",
//                 ["Ruby on Rails", "Heroku"],
//                 "twitch",
//                 "May 2016")



// wiki = Project("Wiki",
//                 ("Search and view a listing of Wikipedia articles."),
//                 "Utilized Wikipedia API.",
//                 "https://wiki-it-ia.herokuapp.com",
//                 "https://github.com/ianagpawa/wiki",
//                  ["Ruby on Rails", "Heroku"],
//                 "wiki",
//                 "Apr. 2016")

// finance = Project("Finance Tracker",
//                 ("Ruby on Rails social stocks tracker project."),
//                 "Built using scaffolding and bootstrap.  Styling in progress,functionality complete.",
//                 "https://thawing-plains-40720.herokuapp.com/users/sign_in",
//                 "https://github.com/ianagpawa/finance-tracker",
//                  ["Ruby on Rails", "Heroku"],
//                 "finance",
//                 "Mar. 2016")

// tribute = Project("Tribute Project",
//                 ("Tribute Project about Hunter S. Thompson."),
//                 "My first HTML and CSS project.",
//                 "https://hunter-s-tribute.herokuapp.com",
//                 "https://github.com/ianagpawa/tribute",
//                  ["Ruby on Rails", "Heroku"],
//                 "tribute",
//                 "Feb. 2016")

// blog = Project("AlphaBlog",
//                 ("Ruby on Rails multi-user blog."),
//                 "My first project, built from the ground up.  Styling and content in progress, functionality completed.",
//                 "https://project-prometheus-alphablog.herokuapp.com",
//                 "https://github.com/ianagpawa/alpha-blog",
//                  ["Ruby on Rails", "Heroku"],
//                 "alpha",
//                 "Jan. 2016")

// portfolio_old = Project("Portfolio",
//                     ("Personal Portfolio - NO LONGER USED."),
//                     "",
//                     "https://ian-agpawa.herokuapp.com",
//                     "https://github.com/ianagpawa/old-portfolio",
//                     ["Ruby on Rails", "Heroku"],
//                     "portfolio",
//                     "Apr. 2016")