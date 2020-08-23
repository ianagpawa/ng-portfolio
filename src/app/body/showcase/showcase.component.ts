import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IProject } from '../../app.interfaces';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent implements OnInit {
  @Output() output: EventEmitter<any> = new EventEmitter();

  projects: IProject[];
  blockCard: any;

  constructor() { 
    
  }

  ngOnInit(): void {
    this.blockCard = {};
    
    this.projects = [
      {
        id: 'techBlog',
        title: 'Tech Blog',
        description: 'Blurbs chronicling personal tech projects. Built simple authentication and registration system.  Developed database models for users and posts.',
        site: 'https://chronicle-170419.appspot.com',
        github: 'https://github.com/ianagpawa/tech-blog',
        tech: ["Python", "Flask", "Google App Engine", "NoSQL"]
      }, {
        id: 'weather',
        title: 'Weather App',
        description: 'Blurbs chronicling personal tech projects.',
        site: 'https://weather-forecast-192305.appspot.com',
        github: 'https://weather-forecast-192305.appspot.com',
        tech: ["ES6", "React", "Redux"]



//     chronicle = Project("Tech Blog",
//                     "Blurbs chronicling personal tech projects.",
//                     "Built simple authentication and registration system.  Developed database models for users and posts.",
//                     "https://chronicle-170419.appspot.com/",
//                     "https://github.com/ianagpawa/tech-blog",
//                     ["Python", "Flask", "Google App Engine", "NoSQL"],
//                     'chronicle',
//                     "Jun. 2017",
//                     True)


      }, {
        id: 'auralHistory',
        title: 'Music web app',
        description: 'something something web app'
      }, {
        id: 'techBlog',
        title: 'Tech Blog',
        description: 'A tech blog'
      }, {
        id: 'weather',
        title: 'Weather App',
        description: 'A web app for viewing the weather.'
      }, {
        id: 'auralHistory',
        title: 'Music web app',
        description: 'something something web app'
      }
    ];

    this.projects.forEach(proj => this.blockCard[proj.id] = false);

    // techblog
    // weather
    // news

    // forecast = Project("Weather React",
    //                 "A 5 day weather forecast",
    //                 "Developed React weather forecast app.",
    //                 "https://weather-forecast-192305.appspot.com",
    //                 "https://github.com/ianagpawa/weather-forecast",
    //                 ["ES6", "React", "Redux"],
    //                 'forecast',
    //                 'Jan. 2018'
    //                 )



//     chronicle = Project("Tech Blog",
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
  }


  // onClick(event) {
  //   this.output.emit({ selectedProject: event });
  // }

  onHover(id): void {
    this.blockCard[id] = !this.blockCard[id];
  }

  getBlocking(id): boolean {
    return this.blockCard[id];
  }

}
