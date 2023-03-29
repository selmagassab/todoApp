const { ApolloServer, gql } = require("apollo-server");
const { GraphQLScalarType } = require("graphql");

const resolvers = require("./graphql/resolvers");

const fs = require("fs");

const typeDefs = gql(
  fs.readFileSync("./graphql/typeDefs.graphql", {
    encoding: "utf-8",
  })
);
const dateScalar = new GraphQLScalarType({
  name: "Date",
  parseValue(value) {
    return new Date(value);
  },
  serialize(value) {
    return value.toISOString();
  },
});
const server = new ApolloServer({ typeDefs, resolvers });

server.listen(5000).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
