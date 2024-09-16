require("dotenv").config();

const dev = {
  app: {
    port: parseInt(process.env.DEV_APP_PORT || "3000", 10), 
  },
  db: {
    host: process.env.DEV_DB_HOST || "localhost",
    port: parseInt(process.env.DEV_DB_PORT || "27017", 10), 
    name: process.env.DEV_DB_NAME || "tickportal",
  },
};

const product = {
  app: {
    port: parseInt(process.env.PRODUCT_APP_PORT || "3000", 10), 
  },
  db: {
    host: process.env.PRODUCT_DB_HOST || "localhost",
    port: parseInt(process.env.PRODUCT_DB_PORT || "27017", 10), 
    name: process.env.PRODUCT_DB_NAME || "tickportal",
  },
};

const config = { dev, product };
const env = process.env.NODE_ENV || "dev";

module.exports = config[env];
