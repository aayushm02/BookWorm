book-reader/
├── client/
│   ├── public/
│   │   ├── index.html
│   │   └── background.jpg
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   ├── BookList.js
│   │   │   ├── BookReader.js
│   │   │   └── AgeModal.js
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── theme.js
├── server/
│   ├── models/
│   │   └── Book.js
│   ├── routes/
│   │   └── bookRoutes.js
│   ├── server.js
│   └── .env
├── package.json
└── README.md




How to Run the Project
Prerequisites:
Node.js (v16 or higher)
MongoDB (running locally or via a cloud service)
A background image file named background.jpg in client/public/ (you can use an attractive library-themed image).
Setup:
bash

Collapse

Wrap

Copy
# Clone the repository
git clone <repository-url>
cd book-reader

# Install root dependencies
npm install

# Install client dependencies
cd client
npm install
cd ..

# Create .env file in server/ with MongoDB URI
echo "MONGO_URI=mongodb://localhost:27017/book_reader" > server/.env
echo "PORT=5000" >> server/.env
Run the Application:
bash:
Copy
npm run dev

This starts both the server (on port 5000) and the client (on port 3000) concurrently.
Open http://localhost:3000 in your browser.




Features:
Age Restriction: Users are prompted to enter their age on page load, and books are filtered based on age rating.
Navbar: Includes search, genre selection, reader ID input, theme toggle, and book upload button. The navbar hides during scrolling and reappears when scrolling stops, using Framer Motion.
Book List: Displays books with images and descriptions, with hover and tap animations. Clicking a book navigates to the reading page.
Book Reader: Supports dark/light mode with mock content (extend with actual book content).
Theme: Light/dark mode toggle with a library-themed background image.
Animations: Framer Motion is used for smooth transitions and scrolling effects.
Notes:
Replace placeholder book data in BookList.js with actual API calls using Axios to fetch from /api/books.
Implement the book upload functionality in Navbar.js by adding a form and API call to /api/books/upload.
Ensure background.jpg is visually appealing for readers (e.g., a cozy library image).


