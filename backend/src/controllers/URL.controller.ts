import type { Request,Response } from "express";
import { URLrepository } from "../repository/URL.repository";
import { runInNewContext } from "node:vm";

export class URLController {
    static async manageUrl(req:Request, res: Response){
       

        try {
            console.log("im hereeeee")
            let result;
            console.log("rnningg")
            const body = await req.body
            console.log(body)

            result = await URLrepository.getURLByURL(body.url)

            console.log(result)

            if (result){
                return res.json(
                    result.shortCode
                )
            }else{

                result = await URLrepository.createShortURL({
                    url : body.url,
                    shortCode : body.shortCode || null
                })



                return res.json(
                    result
                )

            }
            
            
            
        } catch (error) {
            return res.json({error , status: 504})
        }
        
    }

    static async redirectUrl(req:Request, res:Response){
        try {
            const {shortCode}  = req.params
            if (!shortCode || "" || null || undefined || typeof(shortCode) !== "string") return res.json({message: "no such url", status : 501})
            const url = await URLrepository.getURL(shortCode)
            if (!url || !(url.url)) return res.json({message: "no such url", status : 501})
            
            return res.redirect(url?.url)
            
        } catch (error) {
            res.json({err: error, status: 500})
        }
    }



    
}