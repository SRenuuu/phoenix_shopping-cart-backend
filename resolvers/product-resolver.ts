import {Arg, Mutation, Query, Resolver} from 'type-graphql';
import {Product, ProductModel} from "../schema/product";
import {ProductInput} from "./types/product-input";

@Resolver(_of => Product)
export class ProductResolver {

    @Query(_returns => Product, {nullable: false})
    async returnProductByID(@Arg("id") id: string) {
        return ProductModel.findById({ _id: id });
    };

    @Query(_returns => Product, {nullable: false})
    async returnProductByName(@Arg("name") name: string) {
        return await ProductModel.find({ name: name }).exec();
    };

    @Query(() => [Product])
    async returnAllProducts() {
        return await ProductModel.find();
    };

    @Mutation(() => Product)
    async createProduct(@Arg("data") data: ProductInput): Promise<Product> {
        const newProduct = (await ProductModel.create(data)).save();
        return newProduct;
    }

    @Mutation(() => Product)
    async updateProductByID(
        @Arg("id") !id: string,
        @Arg("data") data: ProductInput): Promise<Product> {
        const updatedProduct = (await ProductModel.findByIdAndUpdate({_id: id}, data, { new: true }));
        return updatedProduct;
    }

    @Mutation(() => Boolean)
    async deleteProduct(@Arg("id") id: string) {
        // const productID = mongoose.Types.ObjectId(id);
        await ProductModel.deleteOne({_id: id});
        return true;
    }
}