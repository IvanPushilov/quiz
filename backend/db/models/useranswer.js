'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserAnswer extends Model {
    static associate({Users, Questions}) {
      this.belongsToMany(Users, {foreignKey: 'user_id'})
      this.belongsToMany(Questions, {foreignKey: 'questions_id'})
    }
  }
  UserAnswer.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    question_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Questions',
        key: 'id'
      }
    },
    userAnswer: {
      type: DataTypes.TEXT,
      allowNull:false
    },
    isCorrect: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  }, {
    sequelize,
    modelName: 'UserAnswer',
  });
  return UserAnswer;
};