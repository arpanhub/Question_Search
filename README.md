
## Live Demo

You can access the live demo of the project at [QuestSearch Query](https://questsearch-query.netlify.app/).

## Overview
 project  consists of a frontend and a backend. The backend is implemented using Node.js, Express, and gRPC, while the frontend is built using React and Vite. The backend connects to a MongoDB database to fetch and manage questions.

## Backend

### Technologies Used

- Node.js
- Express
- gRPC
- MongoDB
- Mongoose
- dotenv
- cors

### Setup and Installation

1. **Clone the repository:**
    ```sh
    git clone <repository-url>
    cd speakx/backend
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Set up environment variables:**
    Create a `.env` file in the `backend` directory and add the following variables:
    ```env
    MONGODB_URI=<your-mongodb-uri>
    COLLECTION_NAME=<your-collection-name>
    PORT=3000
    ```

4. **Run the backend server:**
    ```sh
    node src/express.js
    ```

### gRPC Server

The gRPC server is implemented in `src/config/grpc_Server.js` and is started along with the Express server. It provides an endpoint to fetch questions based on search queries.

### MongoDB Connection

The MongoDB connection is handled in `src/config/Db.js`. It connects to the MongoDB database using Mongoose and provides a function to get the questions collection.

## Frontend

### Technologies Used

- React
- Vite
- Tailwind CSS
- Axios

### Setup and Installation

1. **Navigate to the frontend directory:**
    ```sh
    cd ../frontend
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Run the frontend server:**
    ```sh
    npm run dev
    ```

### Package.json

The `package.json` file for the frontend includes dependencies for React, Tailwind CSS, and other libraries used in the project. The `devDependencies` include tools for linting, building, and running the development server.

## Running the Project

1. **Start the backend server:**
    ```sh
    cd backend
    node src/express.js
    ```

2. **Start the frontend server:**
    ```sh
    cd ../frontend
    npm run dev
    ```

3. **Access the application:**
    Open your browser and navigate to `http://localhost:3000` to access the frontend application.

## Conclusion

This project demonstrates the integration of a Node.js backend with a React frontend, using gRPC for communication and MongoDB for data storage. Follow the steps above to set up and run the project locally.