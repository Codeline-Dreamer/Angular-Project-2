**Welcome to my learning journey repository!** 🚀

This repository serves as a testament to my dedication and passion for mastering Angular, one of the most powerful front-end frameworks in the world of web development.

As a full-stack developer, I embarked on this journey to expand my skill set and explore the endless possibilities that Angular brings to the table.

**Why hire me**

🧠 **Passion for Learning**: My journey is a testament to my passion for continuous learning and improvement. I thrive on challenges and constantly seek opportunities to enhance my skills.

💪 **Problem Solver**: Throughout this journey, I've honed my problem-solving skills. I approach every project with determination, seeking creative solutions to complex problems.

🤝 **Team Player**: Collaboration is at the heart of great software development. I'm committed to working harmoniously with diverse teams to deliver exceptional results.

🌟 **Innovation**: My innovative projects highlight my ability to think outside the box and create meaningful solutions that make a difference.

## Let's Connect!

If my journey resonates with you or if you're interested in collaborating, feel free to reach out! I'm always open to new opportunities and challenges.

Thank you for joining me on this incredible learning journey. Together, we can build a lot with Angular!

# AngularBasicsProject1

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.2.

## Run the local json-server

json-server --watch db.json

## Run the project on local machine

ng serve

### Note on Implementing Search Functionality

#### Before the Implementation of Search Functionality

Prior to the addition of search functionality, our Angular application consisted of a basic structure where the `HomeComponent` displayed a list of housing locations fetched from a static source via the `HousingService`. The `HeaderComponent` was primarily used for navigation purposes, containing links to various sections of the application without any interactive elements that influenced other components' data. The `HousingService` served as a straightforward service to fetch housing location data, without any dynamic filtering capabilities based on user input. This setup provided a solid foundation but lacked the interactivity and usability that a search feature could offer to enhance user experience significantly.

#### After Implementing Search Functionality

The enhancement of our application with search functionality marked a significant leap in interactivity and user engagement. The `HeaderComponent` was augmented to include a search input field, allowing users to filter housing locations by city. This introduced a more dynamic and user-driven approach to displaying data in the `HomeComponent`.

The implementation involved several key changes:

- **`HeaderComponent`**: Updated to include a form with a text input and a search button. The input utilizes Angular's `[(ngModel)]` for two-way data binding of the user's search term, which is then communicated to the `HousingService` upon the user initiating a search.

- **`HousingService`**: Enhanced with a `BehaviorSubject` to track the current search term. This allows for a reactive approach, where changes to the search term are immediately reflected across the application. The service now includes methods to update and subscribe to the search term, enabling dynamic filtering of housing locations based on user input.

- **`HomeComponent`**: Modified to subscribe to the search term from `HousingService` and apply filtering logic to the housing locations displayed. This component now reacts to changes in the search term, updating the list of displayed locations to match the user's search criteria.

These enhancements collectively transform the application into a more interactive and user-friendly platform. The search functionality allows users to quickly find housing locations that match their preferences, significantly improving the usability and efficiency of the application.

This implementation demonstrates the power of Angular's reactive programming model, showcasing how components and services can work together to respond dynamically to user input. It also highlights the importance of thoughtful feature integration to enhance user experience without compromising the application's foundational structure.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
