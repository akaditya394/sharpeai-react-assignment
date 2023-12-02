````markdown
# React.js Web Application - Frontend Developer Assignment

## Assignment Details

### 1. React Router Navigation

- Designed a web application with three pages: Home, Transaction, and Data.
- Utilized React Router for seamless navigation between pages.

### 2. Transaction Page (Form Input Validation)

- Implemented a form on the Transaction page requesting wallet address and amount.
- Ensured validation for wallet address and amount:
  - **Wallet Address:** Should not be empty and must follow the standard Ethereum address format (0x...).
  - **Amount:** Validated as a number within a specified range (e.g., 0 - 10,000).
- **Bonus:** Submit button stores data in Google Firestore database.

### 3. Data Page

- Fetched data from 'https://jsonplaceholder.typicode.com/posts'.
- Filtered posts to include only those with a user ID of 1.
- Visualized filtered data in a table format.
- Included a pie chart representing the number of posts by user ID 1 out of the total posts.

### 4. Error Handling

- Provided clear and user-friendly error messages for form validations.
- Examples: "Wallet address field cannot be empty", "Invalid values entered".

### 5. Code Proficiency and Readability

- Maintained clean, concise, and readable code.
- Included comments where necessary to explain complex functionality.
- Avoided corner cases that could break the application.

## Submission

## How to Install and Run the Application

1. **Clone Repository:**

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Create and config firebase.js in src folder**

4. **Run the Application:**

   ```bash
   npm start
   ```

5. **Open in Browser:**
   Open your browser and navigate to [http://localhost:3000](http://localhost:3000)
````
