const express = require('express')
const {PrismaClient} = require('@prisma/client')

const app = express()
const prisma = new PrismaClient();
app.use(express.json())

//Simple Request for Testing
//GET Request
app.get('/',(req,res)=>{
    //1. Data from Frontend

    //2. DB Logic

    //3. Response to Frontend
    res.send("Server is Working for the Get Request")
})
app.post('/',(req,res)=>{
    //1. Data from Frontend

    //2. DB Logic

    //3. Response to Frontend
    res.send('This is for POST Request from Client to Server.... uhhh Its Working!!!!')
})
app.put('/',(req,res)=>{
    //1. Data from Frontend

    //2. DB Logic

    //3. Response to Frontend
    res.send('Server is responding for PUT request got from Client..... No worry buddy its working!!!!!')
})
app.delete('/',(req,res)=>{
    //1. Data from Frontend

    //2. DB Logic

    //3. Response to Frontend
    res.send('Server is working and your Delete Request is received in Server bruh........ Chilll!!!!')
})

//DB Request from Server
//GET REQUEST

app.get('/restaurants',async(req,res)=>{
    //1.Data from Frontend

    //2. DB logic
    const db_data =await prisma.Restaurant.findMany()

    //3. Response to Frontend
    res.send(db_data)

})
app.post('/restaurants',async(req,res)=>{
    //1.Data from front end
    const data = req.body
    console.log(data)
    
    // 2.DB logic
    const new_data = await prisma.Restaurant.create({
        data : {
            id : data.id,
            restaurant_id : data.restaurant_id,
            name : data.name,
            image_url : data.image_url,
            location : data.location,
            rating : data.rating,
            tag  : data.tag
        }        
    })

    //3. Data to Frontend
    let message = new_data.name + " has been added to your POSTGRES Database"
    res.send(message)
})
app.put('/restaurants',async(req,res)=>{
    //1.Data from frontend
    const data = req.body
    
    //2.DB logic
    const updated_data =await prisma.Restaurant.update({
        where:{
            id : data.id
        },
        data : {
            id : data.id,
            restaurant_id : data.restaurant_id,
            name : data.name,
            image_url : data.image_url,
            location : data.location,
            rating : data.rating,
            tag  : data.tag
        }        
    })

    //3.Data to frontend
    res.send(updated_data)
})
app.delete('/restaurants',async(req,res)=>{
    const data = req.body
    console.log(req.body)
    await prisma.Restaurant.delete({
        where:{
            restaurant_id : data.restaurant_id
        }
    })
    res.send("Deleted Successfully, Check DB for Reference...")
})

app.listen(3000)