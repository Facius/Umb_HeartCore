import { Client, ContentResponseElement, ContentManagerMediaType, Media } from '@umbraco/headless-client';
import { performance } from 'perf_hooks';
interface IPageContent extends ContentResponseElement {
    title: string;
    bodyText: string;
    image: Media;
}
export class Victor {
  constructor(client: Client) {
      const t1 = performance.now();

    client.delivery.content.byUrl<IPageContent>('/').then(data => {
      client.delivery.content.children(data._id).then(c => c.items.forEach(c2 => {
        client.delivery.content.children(data._id).then(c => {
            console.log(Math.round(performance.now() - t1));
        });
      }));
    }); 

    // client.delivery.media.root().then(m => {
    //     console.log(m);
    // })
  }
}
