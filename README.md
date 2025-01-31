# YourPlaces Application

A full-stack MERN (MongoDB, Express, React, Node.js) application for managing places. This app allows users to add places with name, description, image, address, and a Google Maps location. Features include user creation, authentication, image upload, token-based authentication, and REST API integration.

## Features

- **User Management:** Create and authenticate users.
- **Place Management:**
  - Add, view, update, and delete places.
  - Each place includes a name, description, image, and Google Maps location.
  - Places are tied to the authenticated user who created them.
- **Image Upload:** Upload place images.
- **Authentication:** Token-based user authentication.
- **Google Maps Integration:** Display location maps using Google API.

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB Atlas Account](https://www.mongodb.com/cloud/atlas)
- Google Cloud Platform account for API key

## Installation

### 1. Clone the repository:
```bash
git clone https://github.com/MSalazar7/MERN-Website.git
cd MERN-Website
```

### 2. Set up the backend environment:

- Navigate to the backend folder:
  ```bash
  cd backend
  ```
- Update the included `nodemon.json` file with your database credentials and Google API key:
  ```json
  {
    "env": {
      "DB_USER": "<your-mongodb-username>",
      "DB_PASS": "<your-mongodb-password>",
      "DB_NAME": "<your-database-name>",
      "GOOGLE_API_KEY": "<your-google-api-key>",
      "JWT_SECRET": "<your-jwt-secret>",
    }
  }
  ```

### 3. Set up the frontend environment:

- Navigate to the frontend folder:
  ```bash
  cd ../frontend
  ```
- Update the included `.env` file with the following content:
  ```env
  REACT_APP_GOOGLE_API_KEY=<your-google-api-key>
  REACT_APP_BACKEND_URL=http://localhost:5000/api
  REACT_APP_ASSET_URL=http://localhost:5000
  ```

> **Note:** Ensure you do not share these files with sensitive credentials publicly.

### 4. Install dependencies for both backend and frontend:
```bash
cd backend
npm install
cd ../frontend
npm install
```

### 5. Start the development servers:

- Backend server:
  ```bash
  npm start
  ```

- Frontend server:
  ```bash
  npm start
  ```

## Usage

1. Register as a new user.
2. Log in to access authenticated features.
3. Add new places by entering the name, description, image, and address.
4. View places on a Google Map.
5. Edit or delete places as needed.

## API Endpoints

### Authentication
- `POST /api/users/signup`: Create a new user
- `POST /api/users/login`: Authenticate a user

### Places
- `GET /api/places`: Fetch all places
- `GET /api/places/:pid`: Fetch a place by ID
- `POST /api/places`: Create a new place (authenticated)
- `PATCH /api/places/:pid`: Update a place (authenticated)
- `DELETE /api/places/:pid`: Delete a place (authenticated)

## Environment Variables

| Key                  | Description                        |
|----------------------|------------------------------------|
| DB_USER              | MongoDB Atlas username            |
| DB_PASS              | MongoDB Atlas password            |
| DB_NAME              | Name of the database              |
| GOOGLE_API_KEY       | Google Maps API key               |
| JWT_SECRET           | Secret for JWT                    |
| REACT_APP_BACKEND_URL | Backend API URL                   |
| REACT_APP_ASSET_URL   | Asset base URL                    |

## Technologies Used

- **Frontend:** React, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Authentication:** JWT (JSON Web Token)
- **Image Upload:** Multer
- **Mapping Service:** Google Maps API

## Deployment

1. Set up your MongoDB Atlas database.
2. Configure environment variables.
3. Deploy the frontend and backend separately.


## Acknowledgments

- [MERN Stack Documentation](https://mern.io/)
- [Google Maps API Documentation](https://developers.google.com/maps/documentation)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

---
GRÜVY FUNK coding adventure complete! Happy hacking!

