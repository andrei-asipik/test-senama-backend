import express from 'express';

import {
  create,
  deleteCar,
  fetch,
  update,
} from '../controller/carController.js';

const route = express.Router();

route.get('/getallcars', fetch);
route.post('/create', create);
route.put('/update/:id', update);
route.delete('/delete/:id', deleteCar);

export default route;
