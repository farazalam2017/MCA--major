# Blog Application using MERN

This project is a full-featured blog application built using the MERN stack (MongoDB, Express, React, Node.js). The application allows users to register, login, and manage their profiles. Users can create, read, update, and delete blog posts with image uploads. The project focuses on secure authentication, responsive design, and seamless user experience.

## Features

- **User Authentication**:
  - Register and login users using JSON Web Token (JWT) for secure access.
  - Utilize bcryptjs for password encryption.
  - Employ dotenv for environment variable management.

- **React Development**:
  - Implement React Hooks and Custom Hooks for state and logic management.
  - Use Context API for global state management.
  - Navigate with React Router 6.

- **Styling and Responsiveness**:
  - Apply CSS Variables for theming.
  - Utilize CSS Media queries for responsive design.

- **File and Image Management**:
  - Use Uuid to generate unique strings for images.
  - Utilize express-fileupload for handling image uploads.
  - Allow users to update profile images, upload images when creating posts, update post images/thumbnails, and delete images.

- **CRUD Operations**:
  - Perform real-world Create, Read, Update, and Delete operations for posts/articles with persistence to a MongoDB database.
  - Enable users to manage posts seamlessly.

- **Backend Development**:
  - Use Mongoose to interact with MongoDB.
  - Use Express as the Node.js framework.

- **User Profile Management**:
  - Allow users to register, login, and edit their details.
  - Provide functionality for updating user profile images.

## Technologies Used

- React
- Node.js
- Express
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- bcryptjs
- dotenv
- express-fileupload
- Uuid

## Setup and Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/your-repo.git
    ```
2. Install dependencies for the backend and frontend:
    ```sh
    cd your-repo
    npm install
    cd client
    npm install
    ```
3. Create a `.env` file in the root directory and add the necessary environment variables:
    ```env
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

4. Run the development server:
    ```sh
    cd ..
    npm run dev
    ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.
