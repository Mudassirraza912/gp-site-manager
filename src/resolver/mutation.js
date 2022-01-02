const { prisma } = require("../database.js");
require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require('../utils/jwt');
const createError = require('http-errors');
const AuthServices = require("../services/authServices.js");
const PostServices = require("../services/PostServices");
const SiteServices = require("../services/siteServices.js");
const Mutation = {
    addUser: async (args, req) => { 
      const response = await AuthServices.createUser(req)     
      return response 
    },
    AddSite: async (args, req) => { 
      const response = await SiteServices.AddSite(req)     
      return response 
    },
    updateSite: async (args, req) => { 
      const response = await SiteServices.updateSite(req)     
      return response 
    },
    deleteSite: async (args, req) => { 
      const response = await SiteServices.deleteSite(req)     
      return response 
    },
    // changePassword: async (args, req) => {
    //   const response = await AuthServices.changePassword(req)
    //   return response
    // },
    // deleteUser: async (args, req) => {
    //   const response = await AuthServices.deleteUser(req)
    //   return response
    // },
    // addPost: async (args, req) => {
    //   const response = await PostServices.createPost(req)
    //   return response
    // },
    // verifyOtp: async (args, req) => {
    //   const response = await AuthServices.verifyOtp(req)
    //   return response
    // },
    // resendOtp: async (args, req) => {
    //   const response = await AuthServices.resendOtp(req)
    //   return response
    // },
  };

  module.exports = {
    Mutation,
  }

