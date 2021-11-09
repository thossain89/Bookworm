![Logo](assets/img/logo.png)

## A platform that brings book lovers together….  
</br>

<a href="https://img.shields.io/badge/JavaScipt-100%25-yellow"><img alt="JavaScript use" src="https://img.shields.io/badge/JavaScipt-100%25-yellow"></a> <a href="https://img.shields.io/badge/Used-Node.js-red"><img alt="Node.js use" src="https://img.shields.io/badge/Used-Node.js-red"></a> <a href="https://img.shields.io/badge/Used-Express-orange"><img alt="Express" src="https://img.shields.io/badge/Used-Express-orange"></a> <a href="https://img.shields.io/badge/Used-Dotenv-blueviolet"><img alt="Dotenv" src="https://img.shields.io/badge/Used-Dotenv-blueviolet"></a> <a href="https://img.shields.io/badge/Used-MongoDB-informational"><img alt="MongoDb" src="https://img.shields.io/badge/Used-MongoDB-informational"></a> <a href="https://img.shields.io/badge/Used-Mongoose-success"><img alt="Mongoose" src="https://img.shields.io/badge/Mongoose-success"></a> <a href="https://img.shields.io/badge/Used-React-informational"><img alt="React" src="https://img.shields.io/badge/Used-React-informational"> <a href="https://img.shields.io/badge/Used-MERN-blueviolet"><img alt="MERN" src="https://img.shields.io/badge/Used-MERN-blueviolet"></a>

## Table of Contents

- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [Test Instructions](#test-instructions)
- [Contribution](#contribution)
- [License](#license)
- [Author](#author)


## User Story  

In recent years covid affected how we used to interact in our daily life. Due to continuous lockdown and other restrictions, it is  really hard time for people who regularly visit the library or bookshop and discuss about the books they have read and likes. To make life enjoyable for book enthusiasts, bookworm platform is created where book lovers can review and discuss books.


## Acceptance Criteria

As a USER 

WHEN I load the website <br />
THEN I am presented with a Navbar with Login/Signup and an input field with request tio login or signin <br />
WHEN I click on the Login/Register menu option <br />
THEN a page appears on the screen with the option to log in or sign up <br /> 
WHEN I click Register <br />
THEN I am presented with four inputs for a username, an email address, a password, and a register button <br />
WHEN I click Login <br />
THEN I am presented with two inputs for an email address and a password and login button <br />
WHEN I enter a valid email address and a password and click on the register button <br />
THEN my user account is created and I am logged in to the site <br />
WHEN I enter my account’s email address and password and click on the login button <br />
THEN the page closes and I am logged in to the site <br />
WHEN I am logged in to the site <br />
THEN the menu options for my books, marked books, add books, donations will be available <br />
WHEN I am logged in and enter a search term in the input field and click the submit button <br />
THEN I am presented with several results, each featuring a book’s title, author, genre, year published, description, image. <br />
WHEN I click join discussion <br />
THEN I am taken to a page where you can write reviews and rate a book <br />
WHEN I click on the red button on the review card <br />
THEN I will see that the review is deleted <br />
WHEN I am logged in and click add books on the menu. <br />
THEN I am presented with a form with input field title, author, category, year published, description, image to add a book. <br />
WHEN I am logged in and click my books on the menu. <br />
THEN I am presented with books I have added on the platform <br />
WHEN I click on the donate button <br />
Then I will be taken to a payment portal <br />
WHEN I click on the Logout button <br />
THEN I am presented with a Navbar with the options Search for Books and Login/Register and an input field to search for books and suggested books below with a menu on the side. <br />

 

## Installation  

### This app can be used directly on web browser no Installation needed.
### You can find the HEROKU app below

### [BOOKWORM](https://project03-bookworm.herokuapp.com/)

#### If you want to check the source code please check the steps below.

#### MongoDB is needed to create database. 

#### To run this code repo in your computer, user must install Node.js.

#### User can Install the following dependencies using ``` yarn install``` or your favorite package manager  

##### For Backend

    * "bcrypt"
    * "mongoose"
    * "dotenv"
    * "express"
    * "Concurrently"
    * "apollo-server-express"
    * "graphql"
    * "jsonwebtoken"
    * "stripe"

##### For Frontend

    * "@mui/icons-material"
    * "@mui/material"
    * "@stripe/stripe-js"
    * "dotenv"
    * "graphql"
    * "jwt-decode"
    * "node-sass"
    * "react-icons"
    * "react-router-dom"

#### For testing and debugging purpose the following dependencies are required

    * "nodemon"
    * "eslint"
    * "eslint-config-airbnb"
    * "eslint-config-prettier" 
    * "eslint-plugin-prettier" 
    * "prettier" 
    
### Steps to install 

- open terminal
- clone the repo: `https://github.com/thossain89/Bookworm.git`
- cd into root directory (Must be in directory to work) 
- Download all dependency package by entering `yarn install`
- Create The database in MongoDB  by running `yarn run seed`
- Run `yarn run develop` to start the server


## Usage

```
Sign up to create an account and start adding books and review, rate or discuss the books !!!

```


## Demo of APP :

![BOOKWORM](./assets/img/Bookworm.gif)  

## Test Instructions

#### For testing REACT module come with JEST test features for frontend.
#### You must Download jest to conduct any test in backend  
- Download jest in cmd by running the code `yarn add jest`
- Then run: `yarn run test` in console



-------------------------------------------------------------------------------------------------------------------------------------------------------
## Contributors

If you would like to contribute to this project reach out to Authors of the project below . 


## License

<a href="https://img.shields.io/badge/License-MIT-brightgreen"><img alt="M.I.T. License use" src="https://img.shields.io/badge/License-MIT-brightgreen"></a>



## Author  


<img src="assets/img/tanvir.jpg" width="50">

**Tanvir Hossain** [Git Hub Profile](https://github.com/thossain89)  



&copy; 2021 Coding Bootcamp ,University of Sydney and Trilogy Education


