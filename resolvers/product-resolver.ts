import {Arg, Mutation, Query, Resolver} from 'type-graphql';
import {Product, ProductModel} from "../schema/product";
import {ProductInput} from "./types/product-input";

@Resolver(_of => Product)
export class ProductResolver {

    @Query(_returns => Product, {nullable: false})
    async returnSingleProduct(@Arg("id") id: string) {
        return await ProductModel.findById({_id: id});
    };

    @Query(() => [Product])
    async returnAllProducts() {
        return await ProductModel.find();
    };

    @Mutation(() => Product)
    async createProduct(@Arg("data"){ name, crossedPrice, price, category }: ProductInput): Promise<Product> {
        const product = (await ProductModel.create({
            name,
            crossedPrice,
            price,
            category
        })).save();
        return product;
    }

    @Mutation(() => Boolean)
    async deleteProduct(@Arg("id") id: string) {
        await ProductModel.deleteOne({id});
        return true;
    }
}