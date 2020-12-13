'use strict';
//crear registros en la BD
module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('users', [{
            name: 'carlos',
            email: 'ejemplo@gmail.com',
            password: '$2y$12$p4oZ5.VNvgwYHnTJzlPo7OtSCdZ2tEVhryp5NmrizP9mWBIG25Tb2', //micontraseñaa
            createdAt: new Date(),
            updatedAt: new Date()
        }]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('users', null, {});

    }
};