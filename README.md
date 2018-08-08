# MyReads Project


## Table of Contents

* [Description](#description)
* [Getting Started](#getting-started)
* [Installation](#installation)
* [Instructions](#instructions)
* [Dependencies](#dependencies)
* [Contributing](#contributing)


## Description

This is the final project of the Udacity Nanodegree in Front-end Web Development built in React. This project is about building a single page application from scratch, featuring a map of a neighbourhood of choice and adding a search functionality.

## Getting started

### Installation

The code can be accessed, forked and cloned here:
https://github.com/ChristineReffo/neighbourhood-map


To start the server:

* install all project dependencies with `npm install`
* start the development server with `npm start`

This will automatically start the localhost:3000 port in your browser displaying the app.


### Instructions

The app is a single page application of a neighbourhood centered on Whistler, British Columbia, Canada. It displays 5 restaurants in the area, which are displayed in the listview and on the map as markers. 
The search function enables to narrow down the items by typing in names in the input form, as well as by clicking directly on a list item.
When markers are clicked, an info window opens up with further information about the restaurant, including a link to the relevant page on Foursquare.


#### Important: APIs
This project was used with two APIs:
Google Maps: to create the map, markers and infowindows (https://cloud.google.com/maps-platform/)
Foursquare: to fetch the locations and location details

Each of these are accessed using a private key, which is in the code to keep functionality intact. 
Please substitute these with your own keys (mapContainer line 167, App.js line 27), if possible.



## Dependencies

This project is built with the following dependencies:
1)ES6
2)React
3)React Dom
4)React scripts
5)React Foursquare
6)React Async Script Loader
7)React Bootstrap
8)Bootstrap Create-react-app
9)Lodash Debounce

### Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).


## Contributing

This is a Udacity student project. Contributors are welcome to send pull requests, which will be considered once the project has been reviewed and it passed all requirements.


### Author

Christine Reffo


### License

This project is not licensed.
