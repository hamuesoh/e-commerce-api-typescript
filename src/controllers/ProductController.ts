import { Request, Response, NextFunction } from "express";
export default class Product{
    constructor(){}

    getProductList(req: Request, res: Response){
        const test: String = "He   llon   Wa";
        res.json(test);
    }
}