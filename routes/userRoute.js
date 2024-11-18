import express from 'express';

import {
  createCar,
  deleteCar,
  getAllCars,
  getCar,
  updateCar,
} from '../controller/carController.js';

const route = express.Router();

route.get('/getallcars', getAllCars);
route.get('/getcar/:id', getCar);
route.post('/create', createCar);
route.put('/update/:id', updateCar);
route.delete('/delete/:id', deleteCar);

export default route;
