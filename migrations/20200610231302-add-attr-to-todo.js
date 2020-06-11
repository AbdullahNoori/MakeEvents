'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn('Todos', 'summary', { type: Sequelize.TEXT }),
      queryInterface.addColumn('Todos', 'completedAt', { type: Sequelize.DATE });
    ];
  },

  down: (queryInterface, Sequelize) => {
    return [
      queryInterface.removeColumn('Todos', 'summary');
      queryInterface.removeColumn('Todos', 'completedAt');      
    ]
  }
};
