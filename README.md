# Simple user manegment using node js and Mongo db

This is a simple Node.js application using Express to manage a list of users stored in a JSON file. The application provides RESTful endpoints to get, create, update, and delete users.

## Features

- Get user details by ID
- Create a new user
- Update user details by ID
- Delete a user by ID

## Prerequisites

- Node.js (version 16 or higher)
- npm (Node Package Manager)
- MongoDb (with GUI)

## Installation

1. Install the dependencies:

```bash
npm install
```

## Usage

1. Start the application:

```bash
npm start
```

2. The application will be available at `http://localhost:8000`.

## API Endpoints

- **GET** `/users`: Returns a list of all users in JSON format.
- **GET** `/users/:id`: Returns the details of a specific user by ID.
- **POST** `/users`: Creates a new user.
- **PATCH** `/users/:id`: Updates the details of a specific user by ID.
- **DELETE** `/users/:id`: Deletes a specific user by ID.
