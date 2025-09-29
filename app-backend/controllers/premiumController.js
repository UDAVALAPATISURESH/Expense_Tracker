const Express = require('../models/Product')

const User = require('../models/User')
const {Sequelize} = require('sequelize')

const showLeadBoard = async (req,res){
    try {
        const express = await Express.findAll({
            attributes:[
                'userId',
                [Sequelize.fn('SUM',Sequelize.col('amount')),'totalExpense']
            ]
        })
    } catch (error) {
        
    }
}