const mongoose = require("mongoose");
const {
  db: { host, port, name },
} = require("../configs/configMongo");


const connectString = `mongodb://${host}:${port}/${name}`;

class Database {
  constructor() {
    this.connect();
    this.instance = null;
  }

  connect() {
    mongoose.set("debug", true);
    mongoose.set("debug", { color: true });
    mongoose
      .connect(connectString)
      .then(() => {
        console.log("Database connection successful");
        //checkOverload();
      })
      .catch((err) => {
        console.error("Database connection error");
      });
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new Database();
    }
    return this.instance;
  }
}

const instance = Database.getInstance();
module.exports = instance;
