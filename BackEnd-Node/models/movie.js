import { Sequelize } from "sequelize"; 
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const movie = db.define('favoritemovie', {
 movie_id: {
    type: DataTypes.INTEGER
  }
}, {
  freezeTableName: true
});
 
export default movie;