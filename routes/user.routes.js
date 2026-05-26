import { Router } from "express";

const userRouter = Router();

userRouter.get('/',(req,res)=>res.send({title:'GET all the users'}));
userRouter.get('/:id',(req,res)=>res.send({title:'GET all details'}));
userRouter.post('/',(req,res)=>res.send({title:'create new users'}));
userRouter.put('/:id',(req,res)=>res.send({title:'update the users'}));
userRouter.delete('/:id',(req,res)=>res.send({title:'DELETE the users'}));

export default userRouter;