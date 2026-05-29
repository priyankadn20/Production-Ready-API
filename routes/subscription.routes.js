import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import { createSubscription, getUserSubscriptions } from "../controllers/subscription.controller.js";
const subscriptionRouter = Router();

subscriptionRouter.get('/',(req,res)=>res.send({title:'GET all subscription'}));
subscriptionRouter.get('/:id',(req,res)=>res.send({title:'GET all subscription details'}));
subscriptionRouter.post('/',authorize,createSubscription);
subscriptionRouter.put('/:id',(req,res)=>res.send({title:'update subscription'}));
subscriptionRouter.delete('/:id',(req,res)=>res.send({title:'delete subscription'}));
subscriptionRouter.get('/user/:id',authorize,getUserSubscriptions)
subscriptionRouter.put('/:id/cancle',(req,res)=>res.send({title:'cancle subscription'}));
subscriptionRouter.get('/upcoming-renewals',(req,res)=>res.send({title:'GET upcoming subscription'}));


export default subscriptionRouter;