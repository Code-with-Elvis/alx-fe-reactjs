# ALX React App

This is a React application built with Vite, showcasing modern web development practices and component-based architecture.

## Project Structure

```
alx-react-app/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── MainContent.jsx
│   │   ├── UserProfile.jsx
│   │   └── WelcomeMessage.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Code-with-Elvis/alx-fe-reactjs.git
   ```

2. Navigate to the project directory:

   ```bash
   cd alx-react-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Development

To start the development server:

```bash
npm run dev
```

This will start the application in development mode. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### Building for Production

To create a production build:

```bash
npm run build
```

### Component Structure

The application is organized into several key components:

- `Header`: Main navigation and branding
- `MainContent`: Primary content area of the application
- `Footer`: Footer section with relevant links and information
- `UserProfile`: User information display component
- `WelcomeMessage`: Welcome message component

## Technologies Used

- React 18
- Vite
- ESLint
- CSS Modules
