import cors from 'cors';
import express, { Request, Response } from 'express';
const app = express()

app.use(cors())

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        message: 'Ciao'
    });
});

app.listen(3000, () => {
    console.log('listening on port 3000');
})