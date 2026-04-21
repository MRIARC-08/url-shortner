import { URLrepository } from "../repository/URL.repository";
import { runInNewContext } from "node:vm";
export class URLController {
    static async manageUrl(req, res) {
        try {
            console.log("rnningg");
            const body = await req.body;
            const result = await URLrepository.createShortURL({
                url: body.url,
                shortCode: body.shortCode || null
            });
            return res.json(result);
        }
        catch (error) {
            return res.json({ error, status: 504 });
        }
    }
    static async redirectUrl(req, res) {
        try {
            const { shortCode } = req.params;
            if (!shortCode || "" || null || undefined || typeof (shortCode) !== "string")
                return res.json({ message: "no such url", status: 501 });
            const url = await URLrepository.getURL(shortCode);
            if (!url || !(url.url))
                return res.json({ message: "no such url", status: 501 });
            return res.redirect(url?.url);
        }
        catch (error) {
            res.json({ err: error, status: 500 });
        }
    }
}
//# sourceMappingURL=URL.controller.js.map