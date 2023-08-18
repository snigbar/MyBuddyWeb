# MyBuddyWeb - A Social Media-like Application

![MyBuddyWeb Screenshot](https://github.com/snigbar/MyBuddyWeb/assets/116255837/0ae44167-61e4-4bd1-9383-1aae659b95ba)


MyBuddyWeb is a full-stack social media application that allows users to connect, share moments, and interact with friends. This project demonstrates the implementation of various features commonly found in social media platforms, including user registration, login, adding/removing friends, uploading photos, posting status updates, and customizable themes (dark mode/night mode).

## Live Demo

Check out the live demo of MyBuddyWeb [here](https://mybuddyweb.web.app/).

## Technologies Used

### Frontend

- **React**: A JavaScript library for building user interfaces.
- **@mui/material**: A modern, responsive, and customizable UI framework.
- **@reduxjs/toolkit**: A set of utilities to manage state using Redux.
- **formik**: A form library for handling form validation and submission.
- **react-dropzone**: A popular library for drag-and-drop file uploads.
- **react-redux**: Official Redux bindings for React.
- **react-router-dom**: A library for handling routing and navigation in React apps.
- **yup**: A library for schema validation, used with formik.

### Backend

- **Express**: A fast and minimal web application framework for Node.js.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB.
- **bcrypt**: A library for hashing and salting passwords.
- **cors**: A middleware for enabling CORS (Cross-Origin Resource Sharing).
- **dotenv**: A zero-dependency module for loading environment variables.
- **jsonwebtoken**: A library for creating and verifying JSON Web Tokens (JWT).
- **gridfs-stream**: A library for working with MongoDB's GridFS file storage.
- **multer**: A middleware for handling file uploads.
- **multer-gridfs-storage**: A storage engine for GridFS using multer.
- **helmet**: A middleware to help secure your Express apps by setting various HTTP headers.
- **morgan**: A middleware for logging HTTP requests.

## Features

- **User Authentication**: Allow users to create accounts and securely log in.
- **Friend Management**: Enable users to send friend requests, accept/reject requests, and remove friends.
- **Photo Upload**: Allow users to upload and share photos.
- **Status Updates**: Let users post status updates and share their thoughts.
- **Customizable Themes**: Provide dark mode and night mode for user-friendly viewing.
- **Security**: Implement password hashing, JWT-based authentication, and secure HTTP headers.

## Installation

1. Clone the repository: `git clone https://github.com/your-username/MyBuddyWeb.git`
2. Navigate to the frontend directory: `cd MyBuddyWeb/frontend`
3. Install frontend dependencies: `npm install`
4. Navigate to the backend directory: `cd ../backend`
5. Install backend dependencies: `npm install`

## Usage

1. Start the frontend: `cd ../frontend && npm run dev`
2. Start the backend: `cd ../backend && nodemon index.js`

## Contributing

Contributions are welcome! Feel free to open issues and pull requests.

## License

This project is licensed under the [MIT License](LICENSE).

---

*Disclaimer: This project is created inspired by [Ed Roh](https://github.com/ed-roh) purposes and might not cover all production-level features or security considerations. Use at your own risk.*
