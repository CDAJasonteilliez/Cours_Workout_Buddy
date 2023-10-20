import mongoose from 'mongoose';
import 'dotenv/config';

async function connectdb () {
    try {
        const url = `${process.env.MONGO_URI}`;
        await mongoose.connect(url);
    } catch (err) {
        console.log(err)
    }
};

export default connectdb