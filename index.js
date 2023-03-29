const Sequelize = require("sequelize");
const { DataTypes, Op } = Sequelize;
const bcrypt = require("bcrypt");
const zlib = require("zlib");
const sequelize = new Sequelize("todoAppv3", "root", "", {
  dialect: "mysql",
  define: {
    freezeTableName: true,
  },
});

const User = sequelize.define(
  "User",
  {
    username: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.ENUM("admin", "user"),
    },
  },
  {
    timestamps: false,
  }
);

const Project = sequelize.define("Project", {
  title: {
    type: DataTypes.STRING,
  },

  startDate: {
    type: DataTypes.DATE,
  },
  endDate: {
    type: DataTypes.DATE,
  },
});

User.hasMany(Project);
Project.belongsTo(User);

const Task = sequelize.define("Task", {
  title: {
    type: DataTypes.STRING,
  },
  startDate: {
    type: DataTypes.DATE,
  },
  endDate: {
    type: DataTypes.DATE,
  },
  status: {
    type: DataTypes.ENUM("new", "inprogress", "completed"),
  },
  description: {
    type: DataTypes.STRING,
  },
});

Project.hasMany(Task, { as: "tasks" });
Task.belongsTo(Project, {
  foreignKey: "ProjectId",
  as: "project",
});

sequelize
  .sync({ alter: true })
  .then(() => {})
  .then(() => {})
  .catch((err) => {
    console.log(err);
  });
module.exports = { User, Project, Task };
