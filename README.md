# Secure User Authentication System

## You can find Frontend Code on this Repo
https://github.com/Sayli555/wanderonfe

## Video Explaination
https://drive.google.com/file/d/1ONZ38IaK9oIPuU_e9Cw1pZAwkjOKY7uB/view?usp=sharing

# Note :
- Using the free version of deployemnet a sometime delay in fetching data from backend .

## Deployed App

 Frontend: https://wanderonfe.vercel.app/

## Technology Stack

This project utilizes the following technologies for backend
- Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- Express.js: A minimal and flexible Node.js web application framework
- MongoDB: A document-based, distributed database built for modern application developers.

## test credentials for login 
- email - test@test.com
- password - Test@12345
 
## Features

- Register Form: Users can create an account by providing necessary information (username/email, password, etc.).
- Login Page: Registered users can log in using their credentials.
- Private Page: After logging in, users can access protected pages.
- Secure User Data: Passwords are hashed using a strong hashing algorithm (e.g., bcrypt) before saving.
- JWT Authentication: Generates a JSON Web Token (JWT) upon successful login to maintain user sessions securely.
- Sanitized Input: User input is sanitized to prevent vulnerabilities like Cross-Site Scripting (XSS)


## Installation & Getting started

1. Clone this repository
    ```
    git clone https://github.com/Sayli555/wanderonBe
    cd wanderonBe
    ```

2. Install dependencies:

    ```
    npm install
    ```
3. Run the development server:
    ```
    npm run server
    ```

This will start your server.

## Usage

1. Register User:
- Provide an email, password, and other necessary information.
- Ensure the email is in the correct format and the password is strong (at least 8 characters).
<img src="https://github.com/Sayli555/project-images/blob/master/wonderonbe1.png?raw=true"/>

3. Login :
- After logging in, a JWT token is created for the user.
<img src="https://github.com/Sayli555/project-images/blob/master/wonderonbe2.png?raw=true"/>

4. Private page(Product) :
- Pass the JWT token for authorization to access protected routes.
<img src="https://github.com/Sayli555/project-images/blob/master/wonderonbe33.png?raw=true"/>

5. Logout
- Upon logging out, the user cannot access private routes and must log in again.
<img src="https://github.com/Sayli555/project-images/blob/master/wonderonbe4.png?raw=true"/>

## Security Measures

- Password Hashing: Uses bcrypt for hashing passwords before storing them in the database
- JWT Authentication: Utilizes JSON Web Tokens for maintaining user sessions without exposing sensitive data.
- Data Validation: Implements server-side data validation to ensure data integrity.
- Input Sanitization: Sanitizes user inputs to prevent XSS and other injection attacks.
  

   

