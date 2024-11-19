import mongoose from 'mongoose';

const carSchema = new mongoose.Schema(
  {
    make: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    engine: {
      type: String,
      required: true,
    },
    fuelType: {
      type: String,
      enum: ['Petrol', 'Diesel', 'Electric', 'Hybrid'],
      required: true,
    },
    transmission: {
      type: String,
      enum: ['Manual', 'Automatic'],
      required: true,
    },
    mileage: {
      type: Number,
      required: true,
    },
    owner: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('cars', carSchema);
