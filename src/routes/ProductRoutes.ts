import { Router } from "express";
import ProductController from "../controllers/ProductController"
class ProductRotes {
    router = Router();
    productController = new ProductController();

    constructor(){
        this.intializeRoutes()
    }

    intializeRoutes(){
        this.router.route('/').get(this.productController.getProductList)
    }
}

export default new ProductRotes().router;