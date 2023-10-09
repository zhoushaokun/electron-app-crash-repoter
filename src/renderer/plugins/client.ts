// eslint-disable-next-line import/no-extraneous-dependencies
import jayson from 'jayson';

// create a client
const client = jayson.Client.tcp({
  port: 3000,
});

export function runAdd() {
    // invoke "add"
    client.request('add', [1, 1], function (err: any, response: any) {
    if (err) throw err;
      console.log(response.result); // 2
    });
}
