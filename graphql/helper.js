const { User, Project, Task } = require("../index");

getUsers = async () => {
  try {
    const users = await User.findAll();
    return users;
  } catch (err) {
    console.log(err);
  }
};

getUserDetail = async (root, { id }) => {
  try {
    const usr = await User.findByPk(id);
    return usr;
  } catch (err) {
    console.log(err);
  }
};

getProjects = async () => {
  try {
    const projects = await Project.findAll({ include: ["tasks"] });
    return projects;
  } catch (err) {
    console.log(err);
  }
};

getProjectDetail = async (root, { id }) => {
  try {
    const proj = await Project.findByPk(id, { include: ["tasks"] });
    return proj;
  } catch (err) {
    console.log(err);
  }
};

getTasks = async () => {
  try {
    const tasks = await Task.findAll();
    return tasks;
  } catch (err) {
    console.log(err);
  }
};

getTaskDetail = async (root, { id }) => {
  try {
    const task = await Task.findByPk(id, { include: ["project"] });
    return task;
  } catch (err) {
    console.log(err);
  }
};

createUser = async (root, { username, email, password, role }) => {
  try {
    (await User) &&
      User.create({
        username,
        email,
        password,
        role,
      });
    return "User created successfully";
  } catch (err) {
    console.log(err);
  }
};

updateUser = async (root, { id, username, email, password }) => {
  try {
    (await User) &&
      User.update({ id, username, email, password }, { where: { id: id } });
    return "User updated successfully";
  } catch (err) {
    console.log(err);
  }
};

deleteUser = async (root, { id }) => {
  await User.destroy({ where: { id: id } });
  return "User deleted successfully";
};

createProject = async (root, { title, startDate, endDate, UserId }) => {
  try {
    (await Project) &&
      Project.create({
        title,
        startDate,
        endDate,
        UserId,
      });
    return "Project created successfully";
  } catch (err) {
    console.log(err);
  }
};

updateProject = async (root, { id, title, startDate, endDate, UserId }) => {
  try {
    (await Project) &&
      Project.update(
        { id, title, startDate, endDate, UserId },
        { where: { id: id } }
      );
    return "Project updated successfully";
  } catch (err) {
    console.log(err);
  }
};

deleteProject = async (root, { id }) => {
  await Project.destroy({ where: { id: id } });
  return "Project deleted successfully";
};

createTask = async (
  root,
  { title, startDate, endDate, ProjectId, status, description }
) => {
  try {
    (await Task) &&
      Task.create({
        title,
        startDate,
        endDate,
        ProjectId,
        status,
        description,
      });
    return "Task created successfully";
  } catch (err) {
    console.log(err);
  }
};

updateTask = async (
  root,
  { id, title, description, startDate, endDate, status, ProjectId }
) => {
  try {
    (await Task) &&
      Task.update(
        { id, title, description, startDate, endDate, status, ProjectId },
        { where: { id: id } }
      );
    return "Task updated successfully";
  } catch (err) {
    console.log(err);
  }
};
deleteTask = async (root, { id }) => {
  await Task.destroy({ where: { id: id } });
  return "Task deleted successfully";
};

module.exports = {
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
};
