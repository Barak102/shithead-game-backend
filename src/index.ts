import express from 'express';
import gameRouter from './routes/game-router';

const app = express();
const port = 3000;

app.use('/api/game', gameRouter);

// app.get('/', (req: any, res: any) => {
//   res.send('Hello, this is your Node.js API with TypeScript!');
// });

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});