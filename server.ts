import { ApolloServer } from "apollo-server-express";
import express from "express";
import { buildSchema } from "type-graphql";
import mongoose from "mongoose";

import {ProductResolver} from "./resolvers/product-resolver";

const main = async () => {
   const schema = await buildSchema({
      resolvers: [ProductResolver],
      emitSchemaFile: true,
      validate: false,
   });

   const server = new ApolloServer({ schema });

   const app = express();
   server.applyMiddleware({ app });

   const CONNECTION_URL = 'mongodb+srv://azma_123:azma123@cluster0.dby6v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
   const PORT = process.env.PORT || 4000;

   mongoose.connect(CONNECTION_URL, { useNewUrlParser:true, useUnifiedTopology: true })
       .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
       .catch((error) => console.log(error.message));
}

main().catch((error) => {
   console.log(error, 'error');
})




