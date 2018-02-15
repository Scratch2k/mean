import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';

/**
 * Park Schema
 */
const ParkSchema = new mongoose.Schema({
  floor: {
    type: String,
    required: true
  },
  park: {
    type: String,
    required: true
  },
  nom_cost: {
    type: Number,
    required: true
  },
  all_cost: {
    type: Number,
    required: true
  },
  attributes: {
    pole: { type: String},
    edge: { type: String},
    motorbike: { type: String},
    acrod: { type: String},
    tier: { type: String},
    prox: { type: String},
    lat: { type: Number},
    lon: { type: Number},
    reception: { type: String}
  }
});

/**
 * Statics
 */
ParkSchema.statics = {
  /**
   * Get park
   * @param {ObjectId} id - The objectId of park.
   * @returns {Promise<Park, APIError>}
   */
  get(id) {
    return this.findById(id)
      .exec()
      .then((park) => {
        if (park) {
          return park;
        }
        const err = new APIError('No such park exists!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });
  },

  /**
   * @param {number} skip - Number of parks to be skipped.
   * @param {number} limit - Limit number of parks to be returned.
   * @returns {Promise<Park[]>}
   */
  list({ skip = 0, limit = 50 } = {}) {
    return this.find()
      .skip(+skip)
      .limit(+limit)
      .exec();
  }
};

/**
 * @typedef Park
 */
export default mongoose.model('Park', ParkSchema);
