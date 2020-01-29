import { Client } from "@umbraco/headless-client";
import { Ryan } from "./ryan";
import { Victor } from "./victor";

const client = new Client({
  projectAlias: 'victors-unassuming-giraffe',
  apiKey: 'wJs55dA7KxchCmRbN6ba'
})

console.log('Init')

new Ryan(client);
new Victor(client);
