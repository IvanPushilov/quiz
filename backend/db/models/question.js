'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate({Quizzes, UserAnswers}) {
     this.hasMany(UserAnswers, {foreignKey:'question_id'})
     this.belongsTo(Quizzes, {foreignKey:'quizz_id'})
    }
  }
  Question.init({
    title: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    correctAnsver: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    quizz_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: "Quizzes",
        key: "id",
      },
    },
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};