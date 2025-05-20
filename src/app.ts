import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json()); // permite JSON no corpo das requisições
app.use('/api', routes); // rota base para todas as rotas

export default app;