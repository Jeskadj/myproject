const mongoose = require('mongoose');
const connectDB=async()=>{
   try {
        await mongoose.connect('mongodb+srv://admin:admin@cluster0.jawvh.mongodb.net/MyProjectDB?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true})
   console.log("DB Connected ...")
       
   } catch (error) {
      console.log(error) 
   }
}



module.exports = connectDB