const app = require("./app");
const dotenv = require('dotenv');
const connectDatabse = require("./config/database");

dotenv.config({ path: "backend/config/config.env" });

//Connecting to DB
connectDatabse();
app.listen(process.env.PORT, () => console.log(`Server is listerning on port :${process.env.PORT}`));