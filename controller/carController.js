import Car from '../model/carModel.js';

export const create = async (req, res) => {
  try {
    const carData = new Car(req.body);
    const { make, model, year } = carData;

    const carExist = await Car.findOne({ make, model, year });
    if (carExist) {
      return res
        .status(400)
        .json({ message: 'Car with these details already exists.' });
    }

    const savedCar = await carData.save();
    res.status(201).json(savedCar);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error.' });
  }
};

export const fetch = async (req, res) => {
  try {
    const cars = await Car.find();
    if (!cars.length) {
      return res.status(404).json({ message: 'No cars found.' });
    }
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error.' });
  }
};

export const update = async (req, res) => {
  try {
    const id = req.params.id;
    const carExist = await Car.findById(id);

    if (!carExist) {
      return res.status(404).json({ message: 'Car not found.' });
    }

    const updatedCar = await Car.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedCar);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error.' });
  }
};

export const deleteCar = async (req, res) => {
  try {
    const id = req.params.id;
    const carExist = await Car.findById(id);

    if (!carExist) {
      return res.status(404).json({ message: 'Car not found.' });
    }

    await Car.findByIdAndDelete(id);
    res.status(200).json({ message: 'Car deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error.' });
  }
};
