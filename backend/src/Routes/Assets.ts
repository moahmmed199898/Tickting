import { Snipe } from 'snipe-it.js';
import {Router} from "express"
import dotenv from "dotenv"

dotenv.config()
const snipe = new Snipe(process.env.SNIPE_IT_URL as string, process.env.SNIPE_IT_TOEKN as string)
export const assetRouter = Router()


assetRouter.get("/list/", async (req,res)=>{
    const data = await snipe.hardware.get({limit: 50, search: req.query.name as string})
    res.json(data)
})
