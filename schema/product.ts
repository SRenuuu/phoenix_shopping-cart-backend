import { ObjectType, Field, ID, Float } from "type-graphql";
import { prop as Property, getModelForClass } from "@typegoose/typegoose";

const graphql = require('graphql');

@ObjectType({ description: "The Product model"})

export class Product {
    @Field(() => ID)
    id: String;

    @Field()
    @Property()
    name: String;

    @Field()
    @Property(_type => Float)
    crossedPrice: number;

    @Field()
    @Property(_type => Float)
    price: number;

    @Field()
    @Property()
    category: String;

    @Field({ nullable: true })
    @Property()
    imageUrl?: String;
}

export const ProductModel = getModelForClass(Product);

