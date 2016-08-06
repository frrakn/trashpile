function websocketConnection(url, opts) {
  this.url = url;
  this.debug = opts.debug || false;
}

websocketConnection.prototype.connect = function() {
  this.ws = new WebSocket(this.url);

  if (this.debug) {
    console.log('---websocket bound---');
  }
}

websocketConnection.prototype.bindEvents = function() {
  if (this.ws) {
    console.log('---websocket bound---');
  } else if (this.debug) {
    console.warn('Called websocketConnection.bindEvents without creating a websocket first!');
  }
}

const gameId = '1001670144';

// let ws = websocketConnect('ws://52.23.8.215:9721/');
let ws = websocketConnect('ws://localhost:8080/');
ws.onmessage = function(event) {
  let data = JSON.parse(event.data);
  console.log(data);
}

export default websocketConnection;