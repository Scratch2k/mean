import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';

/**
 * Ballot Schema
 */
const BallotSchema = new mongoose.Schema({
  start_date: {
    type: Date,
    required: true
  },
  end_date: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    required: true
  }
});

/**
 * Statics
 */
BallotSchema.statics = {
  /**
   * Get park
   * @param {ObjectId} id - The objectId of park.
   * @returns {Promise<Park, APIError>}
   */
  get(id) {
    return this.findById(id)
      .exec()
      .then((ballot) => {
        if (ballot) {
          return ballot;
        }
        const err = new APIError('No such ballot exists!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });
  },

  /**
   * @param {number} skip - Number of parks to be skipped.
   * @param {number} limit - Limit number of parks to be returned.
   * @returns {Promise<Ballot[]>}
   */
  list({ skip = 0, limit = 50 } = {}) {
    return this.find()
      .skip(+skip)
      .limit(+limit)
      .exec();
  }
};

/**
 * @typedef Ballot
 */
export default mongoose.model('Ballot', BallotSchema);
