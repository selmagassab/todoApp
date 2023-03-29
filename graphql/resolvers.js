const { User, Project } = require("../index");

const {
  getUsers,
  getUserDetail,
  getProjects,
  getProjectDetail,
  getTasks,
  getTaskDetail,
  createUser,
  createProject,
  createTask,
  updateUser,
  updateProject,
  updateTask,
  deleteUser,
  deleteProject,
  deleteTask,
} = require("../graphql/helper");
const Query = {
  getUsers,
  getUserDetail,
  getProjects,
  getProjectDetail,
  getTasks,
  getTaskDetail,
};

const Mutation = {
  createUser,
  createProject,
  createTask,
  updateUser,
  updateProject,
  updateTask,
  deleteUser,
  deleteProject,
  deleteTask,
};

module.exports = { Query, Mutation };
