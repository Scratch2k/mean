import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';
import { INT } from 'graphql/language/kinds';

/**
 * Person Schema
 */
const PersonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  pass_no: {
    type: String
  },
  points_bal: {
    type: Number
  },
  vehicles: [{ licence: String }]
});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */
PersonSchema.method({
});

/**
 * Statics
 */
PersonSchema.statics = {
  /**
   * Get Person
   * @param {ObjectId} id - The objectId of Person.
   * @returns {Promise<Person, APIError>}
   */
  get(id) {
    return this.findById(id)
      .exec()
      .then((person) => {
        if (person) {
          return person;
        }
        const err = new APIError('No such person exists!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });
  },

  /**
   * List persons in descending order of 'createdAt' timestamp.
   * @param {number} skip - Number of persons to be skipped.
   * @param {number} limit - Limit number of persons to be returned.
   * @returns {Promise<Person[]>}
   */
  list({ skip = 0, limit = 50 } = {}) {
    return this.find()
      .sort({ createdAt: -1 })
      .skip(+skip)
      .limit(+limit)
      .exec();
  }
};

/**
 * @typedef Person
 */
export default mongoose.model('Person', PersonSchema);
