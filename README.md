# Blog Database

This is a simple backend application for managing blogs.It uses Express.js and MongoDB with Mongoose. It provides endpoints for CRUD operations on blog posts.

## Features

- Create, read, update, and delete blog posts.
- MongoDB integration using Mongoose for data storage.
- API endpoints for interacting with the blog data.
- Error handling middleware for handling server errors.
- Environmental variables management using dotenv.
- Cross-Origin Resource Sharing (CORS) enabled.

## File Structure
- **models/**: Contains Mongoose models for defining database schemas.
- **utilities/**: Includes utility files such as seed data.
- **.env**: Environmental variables file for storing sensitive data.
- **README.md**: Documentation file explaining the project and how to use it.
- **app.js**: Main entry point of the application.
- **package.json**: File containing project metadata and dependencies.

## API Endpoints
### Blog Data
- POST /blogData: Create a new blog post.
- GET /blogData: Get all blog posts.
- PUT /blogData/:id: Update a blog post by ID.
- DELETE /blogData/:id: Delete a blog post by ID.
