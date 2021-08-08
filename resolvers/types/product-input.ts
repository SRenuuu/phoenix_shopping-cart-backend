import { InputType, Field } from 'type-graphql';
import { Product } from "../../schema/product";

@InputType()
export class ProductInput implements Partial<Product> {

    @Field()
    name: String;

    @Field()
    crossedPrice: number;

    @Field()
    price: number;

    @Field()
    category: String;

    @Field({ nullable: true })
    imageUrl?: String;
}

