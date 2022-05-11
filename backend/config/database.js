const { connect } = require("mongoose");
const connectDatabase=()=> {
    connect(process.env.DB_URI).then((data) => {
        console.log(`Alhamdu lillah, mongodb Connected with server: ${data.connection.host}`);
    }).catch(e => {
        console.log(e);
    });
}
module.exports = connectDatabase;   
// connect("mongodb+srv://chat-application:chat-application1234@cluster0.lznpq.mongodb.net/Ecommarce",{useNewUrlParser:true, UseUnifiedTopology:true,useCreateIndex:true})