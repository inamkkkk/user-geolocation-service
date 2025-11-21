const Location = require('../models/Location');

exports.createLocation = async (req, res, next) => {
  try {
    const { name, latitude, longitude } = req.body;
    const userId = req.user.userId; 

    const location = new Location({ name, latitude, longitude, user: userId });
    await location.save();

    res.status(201).json(location);
  } catch (error) {
    next(error);
  }
};

exports.getAllLocations = async (req, res, next) => {
  try {
    const userId = req.user.userId;
    const locations = await Location.find({user: userId});
    res.json(locations);
  } catch (error) {
    next(error);
  }
};

exports.getLocation = async (req, res, next) => {
  try {
    const location = await Location.findById(req.params.id);
    if (!location) {
      return res.status(404).json({ message: 'Location not found' });
    }
    res.json(location);
  } catch (error) {
    next(error);
  }
};

exports.updateLocation = async (req, res, next) => {
  try {
    const { name, latitude, longitude } = req.body;
    const location = await Location.findByIdAndUpdate(req.params.id, { name, latitude, longitude }, { new: true });
    if (!location) {
      return res.status(404).json({ message: 'Location not found' });
    }
    res.json(location);
  } catch (error) {
    next(error);
  }
};

exports.deleteLocation = async (req, res, next) => {
  try {
    const location = await Location.findByIdAndDelete(req.params.id);
    if (!location) {
      return res.status(404).json({ message: 'Location not found' });
    }
    res.json({ message: 'Location deleted' });
  } catch (error) {
    next(error);
  }
};