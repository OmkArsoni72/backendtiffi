# Login Signup Backend

This mini project is a simple authentication system implemented using Node.js, Express.js, and MongoDB with Mongoose. It provides user signup, login, and logout functionalities, securing passwords using bcrypt for hashing and JWT for authentication.

## Features

- **User Signup:** Allows users to create an account with a unique email address and a securely hashed password.
- **User Login:** Provides authentication for users using their email and password, with password hashing implemented using bcrypt.
- **JSON Web Tokens (JWT):** Includes the potential for future implementation of JWT-based authentication for secure user sessions.
- **Express Routing:** Organized routing system implemented using Express.js, separating functionality into dedicated routes for user signup and login.
- **Database Connection:** Configured MongoDB connection to store user data, with environmental variables managed using dotenv for enhanced security and flexibility.

## How to Use

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/login_signup_backend.git

   ```

2. **Install Dependencies:**

   ```bash
   npm install

   ```

3. **Set up MongoDB:**

   - Update the .env file with your MongoDB URI and JWT secret key

4. **Start the Server:**

   ```bash
   npm start

   ```

5. **Test API Endpoints:**
   - Use tools like Insomnia or Postman to test the API endpoints
   - Endpoint examples:
     - Signup: POST http://localhost:3000/api/signup
     - Login: POST http://localhost:3000/api/login
     - Logout: GET http://localhost:3000/api/logout

## Dependencies

- **Express:** Web framework for Node.js.
- **Mongoose:** MongoDB object modeling.
- **Bcrypt.js:** Library for hashing passwords.
- **Jsonwebtoken:** JSON Web Token generation and verification.

## Contributing

Feel free to contribute, report issues, or use this backend as a foundation for building more advanced authentication features. Pull requests are welcome!
