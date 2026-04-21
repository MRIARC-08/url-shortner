import type { Request, Response } from "express";
export declare class URLController {
    static manageUrl(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static redirectUrl(req: Request, res: Response): Promise<void | Response<any, Record<string, any>>>;
}
//# sourceMappingURL=URL.controller.d.ts.map