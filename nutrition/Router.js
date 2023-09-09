import express from 'express';
import db from './mongodb.js';

const route = express.Router();
route.get('/', async(req, res) => {
    // const name = req.params.id

   try {
        const item = await db.collection('food').find({}).toArray();
        res.status(200).send(item);
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
})
export default route