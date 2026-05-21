## <p align="center" style="text-decoration: none !important;padding:0;margin:0;"> <br>DV 200 Term 2</p>

## <p align="center" style="text-decoration: none !important;padding:0;margin:0;">Colour Sequence Creative Authentication System</p>

## Table of Contents

* [About the Project](#about-the-project)
  * [Project Description](#project-description)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [How to Install](#how-to-install)
* [Features and Functionality](#features-and-functionality)
* [Final Outcome](#final-outcome)
    * [Video Presentation](#presentation-video)
* [Conclusion](#conclusion)
* [Acknowledgements](#acknowledgements)

---

## About the Project

### Project Description
This project is a creative authentication web application built using the MERN stack. Challenging the paradigm of traditional text-based passwords, this system introduces a **Colour Sequence Memory Login**. 

Instead of typing a traditional password, users interact with a beautifully curated grid of Pantone™ colour cards. During registration, users select a personalised 5 colour sequence that acts as their secure key. Upon logging in, the user must remember and click their unique 5 colour sequence from the palette grid to gain entry. This brings a visual, highly intuitive and gamified memory twist to security, making it ideal for visual thinkers while preserving strong core authentication principles.

### Built With
This project is built using JavaScript and spanning across the entire MERN ecosystem:
* **Frontend:** React.js, React Router, Axios (API requests)
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (via Mongoose ORM)
* **Security & Auth:** JSON Web Tokens (JWT), Bcrypt.js (Password/Sequence hashing)

---

## Getting Started

### Prerequisites
To run this project locally, ensure you have the following installed:
* [Git](https://git-scm.com/downloads)
* [Node.js](https://nodejs.org/en) (which includes **NPM**)
* A MongoDB Atlas account or local MongoDB Community Server instance running.

### How to Install

1. **Clone the Repository:**
   ```bash
   git clone <your-github-repo-url>
   cd <your-project-folder>

2. **Backend Setup:**
Navigate to the backend folder and install dependencies:
  ```bash
  cd backend
  npm i
  ```

Create a .env file in the backend root directory:
  ```bash
  MONGO_URI=your_mongodb_atlas_connection_string
  JWT_SECRET=your_super_secret_jwt_key
  ```

Start the backend server:
  ```bash
  npm run dev
  ```

3. **Frontend Setup:**
  Open a new terminal window, navigate to the frontend folder and install the client side dependencies:
  ```bash
  cd frontend
  npm i 
  ```

4. Start the React development server:
  ```bash
  npm start
  ```
  The app will open automatically on http://localhost:3000

### Features and Functionality

***Visual Sign Up Interface:** Users register by entering their basic details (Name, Email) and selecting an ordered 5 colour sequence from a custom designed grid featuring stylised Pantone™ colour blocks (such as Petal, Burgundy, Sepia etc).

***Dynamic Feedback Slots:*** A dedicated preview container displays empty slots that fill up interactively as the user clicks their colour combination, providing clear real time user feedback.

***Secure Hashing & Storage:*** The backend treats the password as a secure key, hashing it with bcrypt.js before saving it to the MongoDB database, with the colour sequence being stored as a string of the respective HEX codes.

***JWT Protected Sessions:*** Upon a successful sequence match during the login phase, the backend issues a signed JSON Web Token (JWT) to securely manage the authenticated user session.

***Modern CSS UI Design:*** The frontend features a sleek card layout, rich color gradients, clean typography and responsive grid layouts.

### Final Outcome
***Presentation Video***
Demo Video: Link to be uploaded shortly

### Conclusion

This Creative Authentication System demonstrates that web security does not have to be visually dull or mathematically rigid to be structurally sound. By building on top of the MERN framework, the application safely stores user identities with modern hashing procedures while providing a beautiful, friction free frontend experience. The process of building this app pushed standard authentication models out of their comfort zone, showcasing how design oriented development can breathe life into technical backend structures.

## Acknowledgements
MongoDB Atlas for secure cloud database hosting.

Pantone Color Matching System inspiration for UI assets.

My lecturer, Tsungai Katsuro, for guidance.

Author: Kiera Poley
