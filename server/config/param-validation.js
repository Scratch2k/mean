import Joi from 'joi';

export default {
  // POST /api/users
  createUser: {
    body: {
      username: Joi.string().required(),
      mobileNumber: Joi.string().regex(/^[1-9][0-9]{9}$/).required()
    }
  },
  // POST /api/posts
  createPost: {
    body: {
      title: Joi.string().required(),
    }
  },

    // POST /api/persons
    createPerson: {
      body: {
        name: Joi.string(),
        email: Joi.string(),
        pass_no: Joi.string(),
        points_bal: Joi.number()
      }
    },

  // UPDATE /api/users/:userId
  updateUser: {
    body: {
      username: Joi.string().required(),
      mobileNumber: Joi.string().regex(/^[1-9][0-9]{9}$/).required()
    },
    params: {
      userId: Joi.string().hex().required()
    }
  },

  // UPDATE /api/posts/:postId
  updatePost: {
    body: {
      title: Joi.string().required(),
    },
    params: {
      postId: Joi.string().hex().required()
    }
  },

  // UPDATE /api/persons/:personId
  updatePerson: {
    body: {
      name: Joi.string().required(),
      email: Joi.string().required(),
      pass_no: Joi.string().required(),
      points_bal: Joi.number().required(),
      vehicles: Joi.array().items(Joi.string()).required()
    },
    params: {
      personId: Joi.string().hex().required()
    }
  },

  // POST /api/auth/login
  login: {
    body: {
      username: Joi.string().required(),
      password: Joi.string().required()
    }
  }
};
