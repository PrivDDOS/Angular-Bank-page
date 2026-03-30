import express from 'express'
import cors from 'cors'

const app = express(); // create EXPRESS app

app.use(cors());
app.use(express.json());

// Import routes
import bankRouter from './routes/bank.routes.js';

app.use("/api/v1/request", bankRouter)

export default app