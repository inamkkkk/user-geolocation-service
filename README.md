# User Geolocation Service

A Node.js API that uses geolocation data to provide location-based services.

## Features

- User registration and authentication (JWT).
- Create, read, update, and delete locations.
- Secure API endpoints with authentication middleware.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- bcrypt
- dotenv

## Installation

1.  Clone the repository:

    
    git clone <repository_url>
    

2.  Navigate to the project directory:

    
    cd user-geolocation-service
    

3.  Install dependencies:

    
    npm install
    

4.  Configure environment variables:

    -   Create a `.env` file in the root directory.
    -   Add the following environment variables:

        
        PORT=3000
        MONGODB_URI=mongodb://localhost:27017/geolocation
        JWT_SECRET=your_secret_key
        

## Usage

1.  Start the server:

    
    npm start
    

2.  Access the API endpoints:

    -   `GET /api/`
    -   `POST /api/users/register`
    -   `POST /api/users/login`
    -   `POST /api/locations` (Requires authentication)
    -   `GET /api/locations` (Requires authentication)
    -   `GET /api/locations/:id` (Requires authentication)
    -   `PUT /api/locations/:id` (Requires authentication)
    -   `DELETE /api/locations/:id` (Requires authentication)
