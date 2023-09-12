import express from 'express';
import db from './mongodb.js';

const route = express.Router();
route.get('/:id', async(req, res) => {
    const id = req.params.id
    try {
        const user = await db.collection('users').findOne({name: id})
        res.status(200).send(user);
    } catch (error) {
        console.log(error);}
})
route.put('/:id', async(req, res) => {
    const id = req.params.id
   const  {name , email , age , weight , height , gender ,imgUrl} = req.body
 // console.log(req.body , "body ")
 // console.log(id , "id")

   try {
        const item = await db.collection('users').findOneAndReplace({name: id},{
          name: name,
          email: email,
          age: age,
          weight: weight,
          height: height,
          gender: gender,
          imgUrl: imgUrl,
        }, { upsert: true } )
        res.status(200).send('User updated');
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
})
export default route