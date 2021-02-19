# Express api 
This is a simple NodeJs API that is used to be an interface of a React app to make external requests to the Deezer API. This API exposes certain endpoints that can be used to search for artists, get artist details, artists top tracks and artists albums.

## Prerequisites
 * Node Js installed at least version 10

## How to run the api
 * Clone the repo
 * On the root folder run 
```bash
    npm install
```
 * This should install all dependencies
 * Then run 
 ```bash
    npm run dev
```
 * The dev script will start the API listening on port 8000 
 * The API will be accessible through this url <http://localhost:8000> 
 * Inpect the console you should see this message "Server is running on port 8000" 

## How to run the test
* After clonning the repo and run npm install 
* Run
```bash
    npm run test
```
 
 * You should see the test cases on your console with coverage
