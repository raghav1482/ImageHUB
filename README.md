**Project Title: Image Gallery with User Authentication and Cloud Storage Integration**

**Description:**
This project is a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) that allows users to upload, view, and manage images. It incorporates user authentication using session management and bcryptjs for password hashing. Cloud storage integration is implemented through the Cloudinary API for image uploading and retrieval. Additionally, the application tracks and displays the number of times each image has been viewed.

**Features:**
1. User Authentication: Users can sign up and log in securely to access the image gallery functionality.
2. Image Upload: Users can upload images along with titles and descriptions from the frontend interface built with React.js.
3. Cloud Storage Integration: Images uploaded by users are stored in the cloud using the Cloudinary API.
4. Image Retrieval: An API endpoint fetches uploaded images from the cloud and displays them on the frontend.
5. Image View Count: The application tracks the number of times each image has been viewed and displays this information on the frontend.

**Technologies Used:**
- MongoDB: Database for storing user information and image metadata.
- Express.js: Backend framework for handling API requests and routing.
- React.js: Frontend library for building interactive user interfaces.
- Node.js: JavaScript runtime environment for server-side code execution.
- Bcryptjs: Library for password hashing to ensure user data security.
- Cloudinary API: Cloud storage service for image upload and retrieval.

**Setup Instructions:**
1. Clone the repository to your local machine.
2. Install dependencies for both frontend and backend using npm or yarn.
3. Set up a MongoDB database and configure the connection string in the backend.
4. Obtain Cloudinary API credentials and integrate them into the backend for image upload.
5. Start the backend server using `npm start` or `yarn start`.
6. Start the frontend development server using `npm start` or `yarn start`.
7. Access the application in your web browser at the specified URL.

**Usage:**
1. Sign Up: Create a new user account by providing a username and password.
2. Log In: Log in to your account using your credentials to access the image gallery.
3. Upload Image: Navigate to the upload page, choose an image file, provide a title and description, and submit.
4. View Images: Browse through the uploaded images on the gallery page.
5. View Image Details: Click on an image to view its title, description, and view count.
6. Log Out: Log out of your account to secure your session.

**Contributors:**
- Raghvendra Tiwari (raghav1482)
