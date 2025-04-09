import mongoose from 'mongoose'
import { DB_URI, NODE_ENV } from '../config/env'

if(!DB_URI){
    throw new Error('Please define MONGODB_URI variable in local environment (env.production/development.local)');
}

const connectToDatabase = async() => {
    try {
        await mongoose.connect(DB_URI);
        console.log('Server Connected to DB successfully');
        
    } catch (error) {
        console.error("Error Connecting to DB : ",error)
    }
}


export default connectToDatabase;