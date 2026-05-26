import { Router } from "express";
const subscriptionRouter = Router();

subscriptionRouter.get('/',(req,res)=>res.send({title:'GET all subscription'}));
subscriptionRouter.get('/:id',(req,res)=>res.send({title:'GET all subscription details'}));
subscriptionRouter.post('/',(req,res)=>res.send({title:'create new subscription'}));
subscriptionRouter.put('/:id',(req,res)=>res.send({title:'update subscription'}));
subscriptionRouter.delete('/:id',(req,res)=>res.send({title:'delete subscription'}));
subscriptionRouter.get('/user/:id',(req,res)=>res.send({title:'GET all user subscription'}));
subscriptionRouter.put('/:id/cancle',(req,res)=>res.send({title:'cancle subscription'}));
subscriptionRouter.get('/upcoming-renewals',(req,res)=>res.send({title:'GET upcoming subscription'}));


export default subscriptionRouter;