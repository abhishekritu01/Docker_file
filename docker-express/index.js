import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const data =[
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'John Smith' },
    { id: 4, name: 'Jane Smith' },
    ];

app.get('/', (req, res) => {
    res.send(data);
    });

app.get('/home', (req, res) => { 
    res.send('Welcome to the home page');
    });   

const PORT = process.env.PORT || 3000;    

app.listen(PORT, () => {
    console.log('Server is running on port', PORT); 
    });