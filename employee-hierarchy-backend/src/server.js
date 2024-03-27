import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { fetchHierarchy } from './controller/employeeController.js';
import logger from './config/logger.js';
import * as EmployeeController from './controller/employeeController.js';
import * as EmployeeService from './service/employeeService.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true 
  })
    .then(() => {
      logger.info('MongoDB connected')
      if (process.env.NODE_ENV !== 'production') {
        EmployeeService.addEmployees([
          { name: "Alan", id: 100, managerId: 150 },
          { name: "Martin", id: 220, managerId: 100 },
          { name: "Jamie", id: 150, managerId: null },
          { name: "Alex", id: 275, managerId: 100 },
          { name: "Steve", id: 400, managerId: 150 },
          { name: "David", id: 190, managerId: 400 }
        ])
      }
      
    })
    .catch((err) => logger.error(err));

app.get('/hierarchy', EmployeeController.fetchHierarchy);
app.post('/addEmployees', EmployeeController.addEmployees);

app.listen(PORT, () => logger.info(`Server running on port ${PORT}`));
