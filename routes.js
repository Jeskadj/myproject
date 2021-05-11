const express = require('express');
const usermodel = require('./usermodel')
const router = express.Router();
const checkUser =require('./middleware')
router.get('/', function (request, response) {
    response.status(200), send("hello home")
})


router.post("/login", async (request, response) => {

    const { email, password } = request.body
    // console.log(email,password);
    let responseData =  await usermodel.findOne({email})
    console.log(responseData);
    if(responseData){
        if(responseData.password == password){
            response.send({success:true, message:"login successful"})
        }
        else{
            response.send({success:false,message:"email or password incorrect"})
        }
    }
    else{
        response.send({success:'error',message:"account doesnt exist"})
    }
    // response.send({message:"login successful"})
   
})

router.get('/allusers', function (request, response)  {
    response.status(200).send("allusers")
})
// router.post('/signup', function(request, response) {
//     response.status(200).send({message:"successful"})
// })

router.post('/signup',async(request,response)=>{
    const{firstname,lastname,email,address,phone,password,id_type,id_num,vehicle_image,upload_image}=request.body
    // console.log(firstname,lastname,email,address,phone,password,id_type,id_num,vehicle_image,upload_image);
    let userModel=new usermodel ({firstname,lastname,email,phone,password,address,id_type,id_num,vehicle_image,upload_image})

    // userModel = new userModel({firstname,lastname,email,password,address,phone,password,id_type,id_num,vehicle_image,upload_image})
    let responseData = await userModel.save()
    // console.log(responseData);
    response.status(200).send ({message:"you have successfully signed up."})
})
router.post("/payment",checkUser,  async function (request,response){
    const { username, password } = request.body
})

module.exports = router