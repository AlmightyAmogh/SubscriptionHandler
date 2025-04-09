import express from 'express'; 
import { PORT } from './config/env';
import authRouter from './routes/auth.routes'
import userRouter from './routes/user.routes'
import subscriptionRouter from './routes/subscription.routes'
import connectToDatabase from './database/mongodb';
const app = express();

app.use('api/v1/auth',authRouter);
app.use('api/v1/users',userRouter);
app.use('api/v1/subscriptions',subscriptionRouter);

app.get('/',(req,res)=>{
    res.send("Subscription Tracker Api has started");
})

app.listen(PORT,async()=>{
    console.log(`Server running on port ${PORT}`);
    await connectToDatabase();
})

export default app;