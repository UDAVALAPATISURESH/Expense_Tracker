const db = require('mysql2')
const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('app','root','suresh',{
    host:'localhost',
    dialect:'mysql'
});
(async()=>{ try{
    await sequelize.authenticate()
    console.log("connect")
}catch(error){
    console.log(error)

}})();

module.exports = sequelize