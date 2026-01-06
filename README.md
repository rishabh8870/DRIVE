# DRIVE - File Storage Application

## 💾 Project Overview
DRIVE is a full-stack file storage application built with Node.js, Express, and EJS. This project provides a secure and efficient way to store and manage files online.

## ✨ Features
- 📂 File upload and download functionality
- 📋 File organization and management
- 🔒 Secure file storage
- 📱 Responsive web interface
- ⚡ Fast and efficient file operations

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js
- **Template Engine:** EJS
- **Language:** JavaScript
- **Architecture:** MVC Pattern

## 📁 Project Structure
```
DRIVE/
├── config/         # Configuration files
├── models/         # Database models
├── routes/         # Application routes
├── views/          # EJS templates
├── node_modules/   # Dependencies
├── app.js          # Main application file
└── package.json    # Project dependencies
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
1. Clone the repository
```bash
git clone https://github.com/rishabh8870/DRIVE.git
```

2. Install dependencies
```bash
cd DRIVE
npm install
```

3. Start the application
```bash
npm start
```

4. Open your browser and visit `http://localhost:3000`

## 📝 Author
**Rishabh** - [@rishabh8870](https://github.com/rishabh8870)

## 🔗 Links
- [GitHub Profile](https://github.com/rishabh8870)
- [Repository](https://github.com/rishabh8870/DRIVE)

---

## 📝 Recent Updates (Nov 28, 2025)

### v1.1 - Enhanced Documentation
- Improved README with detailed setup instructions
- Added comprehensive feature descriptions
- Better project structure documentation
- - Updated documentation and improved code quality

### Future Improvements
- Advanced file compression support
- User authentication system
- Cloud storage integration

⭐️ If you find this project useful, please consider giving it a star!


## 🔌 API Endpoints

### File Operations

- **GET** `/files` - Retrieve all files
- **POST** `/upload` - Upload a new file
- **GET** `/download/:id` - Download a file
- **DELETE** `/delete/:id` - Delete a file
- **GET** `/file/:id` - Get file details

## ⚙️ Environment Configuration

Create a `.env` file in the root directory:

```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=drive_db
NODE_ENV=development
FILE_UPLOAD_PATH=./uploads
```

## 📚 Usage Examples

### Uploading a File

```javascript
const formData = new FormData();
formData.append('file', fileInput.files[0]);

fetch('/upload', {
  method: 'POST',
  body: formData
})
.then(res => res.json())
.then(data => console.log('File uploaded:', data))
.catch(err => console.error('Upload failed:', err));
```

### Downloading a File

```javascript
const fileId = '123';
window.location.href = `/download/${fileId}`;
```

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes and commit (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Guidelines

- Use meaningful variable names
- Write comments for complex logic
- Follow MVC pattern structure
- Test your changes before submitting PR
- Update README if adding new features

## 📄 License

This project is open source and available under the MIT License.
