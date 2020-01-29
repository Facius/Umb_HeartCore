import { Client } from "@umbraco/headless-client";

export class Victor {

    constructor(client: Client) {
        client.delivery.content.byUrl('/').then((data)=> console.log(data));

        client.delivery.media.root().then()
        

    }
}