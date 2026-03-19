import nano from "nano";
import base62 from "base62"
import { prisma } from "../db/prisma";

export class URLrepository{
    static async createShortURL (data:{url:string, shortCode:string | null}){
        const res = await prisma.url.create({
            data : {
                url : data.url,
                shortCode : data.shortCode
                
            }
        })

        if (data.shortCode){
            return  res.shortCode
        }else{
            const sc = base62.encode(res.id) 

            const result =  await prisma.url.update({
                where : {
                    url : data.url
                },
                data : {
                    shortCode: sc
                }

            })

            return result.shortCode
            
        }






    }   

    static async getURL(shortCode: string) {
        return await prisma.url.findUnique({
            where: {
                shortCode
            }
        })
    }

  
}