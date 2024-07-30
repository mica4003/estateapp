## Table of Contents
1. Introduction
2. Features
3. Technologies Used
4. Project Structure
5. Getting Started
    1. Frontend Setup
    2. Backend Setup
6. Environment Variables
7. Usage
8. Client Routes and Components
9. Backend Routes

## Introduction
The Real Estate App is a full-stack application for renting and buying homes in London. 
The app features interactive maps, real-time chat, and user authentication.
Users can create new posts, save listings, and manage their profiles.

## Features
- User authentication and authorization using JWT
- Real-time chat functionality with Socket.io
- Interactive maps using React-Leaflet
- Create, update, and delete property listings
- Save listings to personal lists
- Profile management

## Technologies Used
### Frontend
- React
- React Router
- React Context API
- React-Leaflet
- SCSS
- Axios

### Backend
- Node.js
- Express
- MongoDB
- Prisma
- Socket.io
- Bcrypt
- JWT
- Cors

## Project Structure
```
|-- client
|   |-- public
|   |-- src
|       |-- components
|       |-- context
|       |-- lib
|       |-- pages
|       |-- App.js
|       |-- index.js
|       |-- loader.js
|-- api
|   |-- controllers
|   |-- middleware
|   |-- routes
|   |-- app.js
|   |-- prisma.js
|   |-- .env
|-- .env
|-- package.json
|-- README.md
```

## Getting Started

### Frontend Setup

1. Navigate to the `client` folder.
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the frontend development server:
    ```bash
    npm start
    ```

### Backend Setup

1. Navigate to the `api` folder.
2. Install dependencies:
    ```bash
    npm install
    ```
3. Set up Prisma:
    ```bash
    npx prisma migrate dev --name init
    ```
4. Start the backend development server:
    ```bash
    npm run dev
    ```

## Environment Variables

Create a `.env` file in the `api` folder with the following environment variables:

```
DATABASE_URL=<your_mongo_db_connection_string>
JWT_SECRET_KEY=<your_jwt_secret_key>
CLIENT_URL=http://localhost:3000
```

## Usage

1. Register a new user or login with an existing account.
2. Create new property listings or browse existing ones.
3. Save listings to your personal list.
4. Start a real-time chat with the listing owner.
5. Update your profile information.

## Routes and Components

### Frontend Routes

- `/` - HomePage with search functionality.
- `/profile` - User profile page.
- `/profile/update` - Update user profile.
- `/add` - Create a new post.
- `/login` - User login page.
- `/register` - User registration page.
- `/posts/:id` - Single post page.

### Frontend Components

- `Navbar` - Navigation bar.
- `SearchBar` - Search bar on the homepage.
- `Filter` - Filter component on the list page.
- `Card` - Card component to display individual listings.
- `List` - List component to display a list of cards.
- `Map` - Interactive map component using React-Leaflet.
- `Chat` - Real-time chat component.
- `Slider` - Image slider for the single post page.
- `UploadWidget` - File upload widget.

### Backend Routes

#### Auth Routes

- `POST /auth/register` - Register a new user.
- `POST /auth/login` - Login a user.
- `POST /auth/logout` - Logout a user.

#### User Routes

- `GET /users` - Get all users.
- `PUT /users/:id` - Update a user.
- `POST /users/saved` - Save a post to user's list.
- `GET /users/saved` - Get posts saved in the user's list.

#### Post Routes

- `GET /posts` - Get all posts.
- `GET /posts/:id` - Get a specific post.
- `POST /posts` - Add a new post.
- `PUT /posts/:id` - Update a post.
- `DELETE /posts/:id` - Delete a post.


