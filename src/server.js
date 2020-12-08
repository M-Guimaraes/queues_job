import 'dotenv/config'
import express from 'express';
import UserController from './app/controllers/UserController';
import { setQueues, BullAdapter, router } from 'bull-board';
import Queue from './app/lib/QueueConfig';

const app = express();

// setQueues([
//   new BullAdapter(Queue.queues.map(queue => queue.bull))
// ]);

app.use(express.json())
app.post('/users', UserController.store)

app.use('/admin/queues', router);


app.listen(3333, () => {
  console.log('Serving on port 3333')
})