# Test Fagprøve app
<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Test Fagprøve app](#test-fagprøve-app)
  - [Getting Started](#getting-started)
    - [Install dependencies](#install-dependencies)
    - [Run the CAP service](#run-the-cap-service)
    - [To run the UI5 app](#to-run-the-ui5-app)
    - [To run the Cypress studio app](#to-run-the-cypress-studio-app)

<!-- /code_chunk_output -->



## Getting Started
This is a project that I did in correlation with a test exam where I had to create a full stack app in 3.5 days, and the app was to adhere to some criteria I got in an assignment.

### Install dependencies
Install all the dependencies in both the progject root directory and in the app directory ``app/test_fagprove_app/``

### Run the CAP service
To run the app open a terminal in the root folder of the progject and run the comand under this starts the cap service on port `` 4008 `` that the UI5 app are going to do API-calls to.
```bash
npm run w
```

### To run the UI5 app 
To run the UI5 app oppen a terminal and navigate to the app  
```bash
cd app/test_fagprove_app/
```
And to run the app and oppen it on the start page 
```bash
npm run start
```
The user's are ``Jon`` and ``Alice`` password is ``jao`` and ``a``

<br>

### To run the Cypress studio app
To run the Cypress studio app oppen a terminal in the root progject folder and run the comand
```bash
npx cypress open
```

