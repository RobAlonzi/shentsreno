# Zoocasa Exercise

This is a front-end excercise for Zoocasa. Developed by Rob Alonzi


### Prerequisites

NodeJS is needed to view the project locally once set up.


### Installing

You can use Yarn to install the dependencies: 

```
yarn install
```

You can also use npm to install:

```
npm install
```

If neither is installed on your machine, or there is an error, please contact me at info@robalonzi.com and I'll be happy to provide the dependencies.

## Viewing the project

You can build and serve the project with the following commands:

```
yarn prod
```

```
npm run prod
```

This will build the public folder and start a server at http://127.0.0.1:3000. The project can be viewed there.

If you have a package such as 'live-server' it is possible to end the above command and navigate inside the public folder and start the server there. Example:

```
cd public
live-server
```

## Dev server

You can view the project in development mode, which uses webpack-dev-server and doesn't minimize the JS or CSS. It also provides sourcemaps for debugging.

```
yarn dev
```

```
npm run dev
```
This will start a devpack-web-server at http://127.0.0.1:3000. The project can be viewed there. If you make edits to any file the project will rebuild automatically so there is no need to rerun the command.


## Testing

NOTE: Test suite not functional. See below in "Notes" (4th Note).

You can run the rest suite with the following commands:

```
yarn tests
```

```
npm run tests
```

Only a skeleton test suite with two tests has been created. One to make sure the tests can be initialized and another to make sure the main App component can be rendered.

## Notes
* I was able to derive the city name from just the city id (only city id was provided in the data) by looking up the school on scholarhood.ca and seeing which city it fell under. I only matched for what was in the data, so if the data was changed that would be the only thing that might not work. I have a fallback just in case, "Other".

* I had originally had programmed the map to show the full bounds and the map marker all on the default view but I felt it was too zoomed out in some cases. I switched to finding the centre of all the lat/lngs that we're inputted and centering the map to that point with an equal zoom size. 

* My next step would be to not have all the maps load at once, and only if you click through to them. It was something I wanted to tackle and it was always in the back of my mind to get done, but I was more concerned with tackling the main points of the exercise first. 

* I also left my skeleton test suite. I was unable to get it working the way I wanted. There is a problem with react-router-dom when I try to render the component individually and it needs the browserHistory component. Also, I don't have access to Google Maps when I create the SchoolMap component individually inside the test DOM. I will continue to debug this.


## Built With

* [React](https://facebook.github.io/react/) - The web framework used
* [Yarn](https://yarnpkg.com/en/) - Dependency Management
* [Scholarhood](http://www.scholarhood.ca) - School Data
* [Google Maps](https://www.google.ca/maps) - Used to generate featured school maps

