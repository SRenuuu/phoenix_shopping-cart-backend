import { ObjectType, Field, ID, Float } from "type-graphql";
import { prop as Property, getModelForClass } from "@typegoose/typegoose";

const graphql = require('graphql');

@ObjectType({ description: "The Product model"})

export class Product {
    @Field(() => ID)
    id: string;

    @Field()
    @Property()
    name: string;

    @Field()
    @Property(_type => Float)
    crossedPrice: number;

    @Field()
    @Property(_type => Float)
    price: number;

    @Field()
    @Property()
    category: string;
}

export const ProductModel = getModelForClass(Product);

