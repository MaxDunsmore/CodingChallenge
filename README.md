# Employee Hierarchy Management System

This project is a comprehensive system designed for managing and visualizing the hierarchical structure of employees within an organization. It employs a robust backend built with Node.js and Express, MongoDB for database needs, Winston for efficient logging, and now includes React.js for the frontend, making it even more dynamic and user-friendly. The system offers a REST API to retrieve the organization's hierarchy in a structured format, while React.js enhances the user interface and interaction on the frontend.

## Technologies

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine for building fast and scalable network applications.
- **Express**: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- **MongoDB**: A NoSQL database used for storing employee data in a scalable and flexible manner.
- **Mongoose**: An elegant MongoDB object modeling for Node.js, providing a straightforward, schema-based solution to model your application data.
- **Winston**: A versatile logging library for Node.js designed to be simple and universal, with support for multiple transports.
- **React.js**: A declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.


## Getting Started

Follow these instructions to get the project up and running on your local machine for development and testing purposes.

## Cloning Project
git clone https://github.com/MaxDunsmore/CodingChallengee

### EMPLOYEE-HIERARCHY-FRONTEND

### Prerequisites

Before starting, ensure you have Node.js and npm installed on your machine. MongoDB should be running locally for the database connections to work. You can check Node.js and npm versions by running:

```bash
node -v
npm -v
```

## Installation
cd employee-hierarchy-backend

### Install Dependencies 

npm install

### Configure the environment variables

Create a .env file in the root directory and specify your MongoDB URI:

```bash
MONGODB_URI=mongodb://localhost:27017/yourDatabaseName
```

### Run the application
For development:

```bash
npm run dev
```

### For Production

```bash
npm start
```
## File Structure

```perl 
employee-hierarchy-system/
│   server.js                      # Application entry point
│
└───src/
    │
    ├───config/
    │       logger.js              # Winston logger configuration
    │
    ├───controller/
    │       employeeController.js  # Controller for employee hierarchy operations
    │
    ├───model/
    │       employeeModel.js       # Mongoose model for employees
    │
    └───service/
            employeeService.js     # Service layer for business logic
    └───util/
            generateMockEmployeeData.js     # Generate mock data for business logic

```

## Usage

The application provides an API endpoint to retrieve the employee hierarchy.

### API Endpoint

GET /hierarchy: Fetches the hierarchical structure of employees.

Post /addEmployees: Adds or updates employee/s details.

### EMPLOYEE-HIERARCHY-BACKEND

### Prerequisites

Before starting, ensure you have Node.js and npm installed on your machine. MongoDB should be running locally for the database connections to work. You can check Node.js and npm versions by running:

```bash
node -v
npm -v
```

## Installation
cd employee-hierarchy-frontend

### Install Dependencies 

npm install


### Run the application
For development:

```bash
npm start
```

### For Production

```bash
npm start
```
## File Structure

```perl
employee-hierarchy-system/
│
└───App.js                           # Base of react application
└───App.test.js                      # Tests for the App component
└───index.js                         # JavaScript entry point
└───index.css                        # Global styles
└───logo.svg                         # React logo used in the template
└───reportWebVitals.js               # Analytics for web vitals
└───setupTests.js                    # Setup file for Jest
└───.eslintrc.js                     # ESLint configuration
└───package-lock.json                # Automatically generated for any operations where npm modifies either the node_modules tree, or package.json
└───package.json                     # Lists the packages your project depends on
└───README.md                        # Markdown file with description of the project
└───src/
│   │
│   ├───components/
│   │       Hierarchy.js            # Component for displaying the hierarchy
│   │
│   └───services/
│           hierarchyService.js     # Service for hierarchy related operations


```

## Usage

The application provides a interface for viewing the hierarchy of employees as well as editing and adding new users