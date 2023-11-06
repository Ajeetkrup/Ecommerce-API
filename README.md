# [Ecommerce API]() - Backend Web Application with Node.js, Express, and MongoDB

This is a Backend web application built with the Node.js runtime environment, Express.js framework, and MongoDB as the database. The application follows the Model-View-Controller (MVC) architecture pattern. 

Check out this application - 

## Following API's are implemented - 
1. To create a product with name and quantity property - POST /products/create
2. To get the list of all the products - GET /products
3. To delete product by id - DELETE /products/:id
4. To update the quantity of the product by id - POST /products/:id/update_quantity?number=qtyToUpdae

## Prerequisites
Before running the application, ensure that you have the following installed on your system:
- Node.js: [Download and Install Node.js](https://nodejs.org)
- MongoDB: [Download and Install MongoDB](https://www.mongodb.com/try/download/community)

## Installation
1. Clone the repository or download the source code.
2. Open a terminal and navigate to the project directory.
3. Run the following command to install the dependencies:
npm install
## Configuration
1. Create a  `.env`  file in the root directory of the project.
2. Specify the following environment variables in the  `.env`  file:
PORT=<port_number>            # Port number on which the server will run
MONGODB_URI=<mongodb_uri>     # MongoDB connection URI
## Starting the Application
1. Open a terminal and navigate to the project directory.
2. Run the following command to start the application:
npm start
3. The server will start running and you should see a message indicating the port number on which it is listening.

## Usage
Once the application is up and running, you can access it through a web browser by visiting  `http://localhost:<port_number>` . Replace  `<port_number>`  with the actual port number specified in the  `.env`  file.

## Folder Structure
The project follows a typical MVC structure:
-  `controllers/` : Contains the controller logic for handling HTTP requests and responses.
-  `models/` : Defines the data models and interacts with the MongoDB database.
-  `routes/` : Defines the application routes and maps them to the corresponding controller methods.
-  `app.js` : Entry point of the application where the server is configured and routes are registered.

That's it! You now have a backend web application built with Node.js, Express, and MongoDB. Enjoy building awesome web applications!