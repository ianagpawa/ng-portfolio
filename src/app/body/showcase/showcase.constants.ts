import { IProject } from 'src/app/app.interfaces';

export const PROJECTS: IProject[] = [
    {
      id: 'newsfeed',
      title: 'News Feed',
      description: 'Article aggregator from some common news sites.',
      site: 'https://ianagpawa.github.io/newsfeed/',
      github: 'https://github.com/ianagpawa/newsfeed',
      tech: ['angular', 'github'],
      image: 'newsfeed'
    }, {
      id: 'blog',
      title: 'Personal Blog',
      description: 'A personal blog created with React and Gatsby hosted on Netlify.',
      site: 'https://inspiring-darwin-85eb36.netlify.app',
      github: 'https://github.com/ianagpawa/blog',
      tech: ['react'],
      image: 'blog'
    }, {
      id: 'weather',
      title: 'React Weather Forecast',
      description: 'A five day weather forecast React app using the OpenWeatherAPI hosted on Google App Engine.',
      site: 'https://weather-forecast-192305.appspot.com',
      github: 'https://github.com/ianagpawa/weather-forecast',
      tech: ['react', 'google'],
      image: 'forecast'
    }, {
      id: 'auralHistory',
      title: 'Youtube Playlist Player',
      description: `A content management system for storing Youtube videos in playlists using Flask with all data stored in a PostgreSQL server.
        It is an Apache web server on an EC2 instance on AWS. `,
      site: 'http://ec2-34-201-35-166.compute-1.amazonaws.com',
      github: 'https://github.com/ianagpawa/catalog',
      tech: ['python', 'aws'],
      image: 'catalog'
    }, {
      id: 'imageSearch',
      title: 'Image Search Microservice',
      description: `An image search API microservice utilizing Node, Express, Google Custom Search API, and MongoDB.  
        Search terms can be passed as parameters and a JSON of relevant result items will be returned.`,
      site: 'https://imgsearch-ia.herokuapp.com',
      github: 'https://github.com/ianagpawa/imageSearch',
      tech: ['node'],
      image: 'image'
    }, {
      id: 'audacious',
      title: 'Playlist Path Script',
      description: 'A Python script for updating song paths in Windows-based music playlists to Linux-based paths.',
      site: null,
      github: 'https://github.com/ianagpawa/audacious.git',
      tech: ['python'],
      image: 'audacious'
    }
];
