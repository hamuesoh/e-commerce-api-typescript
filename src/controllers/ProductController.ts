import { Request, Response, NextFunction } from "express";
export default class Product{
    constructor(){}

    getProductList(req: Request, res: Response){
        const test: String = "Hello Wa";
        res.json(test);
    }
}