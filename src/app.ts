import express, { Request, Response } from 'express'
const app = express()

import cors from 'cors'

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(cors());
app.use(express.json())

// const userRouter = express.Router()

// app.use('/api/v1/user/',userRouter)

//userRouter.post('/create-user',userRouter)

// userRouter.post('/create-user', (req:Request, res:Response) =>{
// const {...user} = req.body;
// console.log(user)
// res.json({
//   success:true,
//   message:"user created successfully",
//   data:user
// })
// })
export default app