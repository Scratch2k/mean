import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';


var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

/**
 * Allocation Schema
 */
const AllocationSchema = new mongoose.Schema({
    ballot: { type: ObjectId, ref: 'Ballot' },
    person: { type: ObjectId, ref: 'Person' },
    park: { type: ObjectId, ref: 'Park' },
    daysOfWeek: [Number],
    createdAt: {
        type: Date,
        default: Date.now
      }
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
AllocationSchema.method({
});

/**
 * Statics
 */
AllocationSchema.statics = {
  /**
   * Get allocation
   * @param {ObjectId} id - The objectId of allocation.
   * @returns {Promise<Allocation, APIError>}
   */
  get(id) {
    return this.findById(id)
      .exec()
      .then((allocation) => {
        if (allocation) {
          return allocation;
        }
        const err = new APIError('No such allocation exists!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });
  },

  /**
   * List allocations in descending order of 'createdAt' timestamp.
   * @param {number} skip - Number of allocations to be skipped.
   * @param {number} limit - Limit number of allocations to be returned.
   * @returns {Promise<Allocation[]>}
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
 * @typedef Allocation
 */
export default mongoose.model('Allocation', AllocationSchema);
