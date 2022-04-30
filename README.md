# Project Description

This project is the fourth in the Front-End Developer Nanodegree through Udacity. The aim of this project is to get a handle on API integration, webpack, various loaders, and Natural Language Processing(NLP) through API calls. This project is meant to use NLP to scan through articles to determine the overall tone that different sections of the article are trying to convey. Udacity provided starter code for this project that I then build on top of. References to the lessons used to produce my side of the code have been provided inline. 

## Getting started

To use this project on your own machine, either clone the repo through github or download the ZIP file through the green 'Code' button. 

For this project, dependencies are a big concern for local functionality on your machine. All required dependencies and their compatible versions can be found in the 'package.json' file. Be sure that you have Node version 14 installed on your machine, as older versions of node are not compatible with this project's dependencies. Once you have node v.14 installed, follow these steps to install dependencies: 

1. Open a terminal and cd into your project folder
2. Enter this command to install compatible versions of necessary modules
```
npm i --legacy-peer-deps
```
4. Go to [meaningcloud.com](https://learn.meaningcloud.com/developer/sentiment-analysis/2.1/doc), create an account, and sign up for an API Key
5. Create a .env file in your root directory that contains: 
```
API_KEY=your_api_key_here
```
6. In the terminal, run: 
```
npm run build-prod
```
7. Open a second terminal and cd into the project folder.
8. In terminal 1, enter 'npm run start'
9.  In terminal 2, enter 'npm run build-dev' to start the server. A webpage should pop up after a few seconds. If the webpage doesn't pop up, enter http://localhost:8712/ in your browser.
10. Now the project is ready for your input! Simply enter a URL and click submit.