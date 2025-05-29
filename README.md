# Job Finder App

This project is a simple application for job searching, profile creation, and user authentication. It includes a **Next.js frontend** and an **Express backend with MongoDB**.

**⚠️Note:** The styling in this project has been intentionally kept simple and minimal. The main focus is on demonstrating functionality rather than visual design. Styling can be improved and refined in future development stages.


## 🧩 Key Features

-  **Search for jobs**
-  **View detailed job information**
-  **Add/remove jobs to likes** (stored in `localStorage`)
-  **Create a user profile** (name, desired position, about)
-  **Personalized recommendations** on the `/jobs` page based on your profile
-  **User registration and login** (email + password) via an Express backend

---

## 🛠️ Tech Stack

### Frontend (Next.js 14 + TypeScript)

- **Next.js 14 (App Router)** 
- **Tailwind CSS** 
- **Formik + Yup**
- **Axios + SWR**
- **LocalStorage** 

### Backend (Express)

- **Express.js**
- **MongoDB + Mongoose** 
- **JWT + bcrypt** 

---

## 🚀 How to Run the Project

### 🔧 Start Backend (inside `auth-server` folder):

1. Create a `.env` file with:

    ```ini
    MONGO_URI=your_mongo_connection_string
    JWT_SECRET=your_secret
    ```

2. Install dependencies:

    ```bash
    npm i
    npm run dev
    ```

---

### 🖥️ Start Frontend:
1. Create a `.env` file with:

    ```ini
    NEXT_PUBLIC_RAPIDAPI_KEY==your_secret
    ```

2. Install dependencies:

    ```bash
    npm i
    npm run dev
    ```

---

### Showcase :



https://github.com/user-attachments/assets/b049b659-35df-419d-a12e-a0dbfc60d74b

