/*
 ********************GraphQL*******************

 What is GraphQL?
 Why GraphQl benefits ?
 REST Vs GraphQL?
 Building Block 
 Build GraphQl App
 Calling GraphQL from client
 tool
 Advance
 


 GraphQL Benifits

 => Avoid over-fetching
 => Avoid under-fetching
 => Better mobile performance
 => Efficiency & Precision
 => Declarative & data fetching
 => Structured / Hierarchical Structure
 => Strongly typed
 => introspection
 => real time capability  > Subscription


   Ascept                          |     REST                        |    GraphQL
                                   |                                 |
=>  Data fetching                  | Multiple endpoints              | Single endpoints
=>  Request Structure              | Fixed structure + HTTP methods  | Flexible (Query/Mutation)
=>  Over-fetching/Under-fetching   | Isuues                          | Resolved
=>  Response Size                  | Fixed Size                      | flexible size
=>  Versioning                     | Explicit Versioning             | flexbile nature
=>  Schema Definition              | No well defined                 | Explicit schema definition
=>  Real time capabilites          | Polling, webSocket              | Out of scope support(Subscription)
=>  Tooling Support                | Postman                         | PlayGround
=>  Caching                        | Relies on HTTP cache            | Fine grained
=>  Client Control                 | No client can't decide response | Yes client can decide
=>  Adoption and Community         | widely adopted                  | Rapidly growing adoption


GraphQL has two parts: 

https://www.apollographql.com/docs/apollo-server/getting-started

   ===> Creator (Server) ===> GraphQL server libraries 
   ===> Consumer (Client) 
                 ==> fetch
                 ==> Client library

GraphQL Building Blocks
               ===> Schema/Types
               ===> Query/Mutation (HTTP POST ) [Query is used for GET] [Mutation is used for POST]

               example ;
                        ===> Get Data                   
                         type Query {
                           countries: [Country]
                         }

                         ==> type Mutation {
                            language(id:ID) : Language;
                         }

               ===> Resolver

                Query : {
                   countries : (parenet,args,context,info) {
                      return
                   }
                }

  open network tab and pick that graphql api and then make a copy as fetch and then paste in console and make it response inside console and get GraphQL data 

   .then(res => res.json()).then(data => console.log(data))

*/