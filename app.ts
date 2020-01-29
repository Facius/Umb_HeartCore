import { Client } from "@umbraco/headless-client";

const client = new Client({
  projectAlias: 'victors-unassuming-giraffe',
  apiKey: 'wJs55dA7KxchCmRbN6ba'
})

console.log('test')
client.delivery.content.byUrl('/').then((data)=> console.log(data));


