import { Sequelize } from "sequelize"; 
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const movie = db.define('pizzas', {
  flavour: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.STRING
  },
  price: {
    type: DataTypes.DOUBLE
  }
}, {
  freezeTableName: true
});
 
export default movie;