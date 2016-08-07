function WebsocketConnection(url, opts) {
  this.url = url;
  this.debug = opts.debug || false;
}

WebsocketConnection.prototype.connect = function() {
  this.ws = new WebSocket(this.url);
  this.bindEvents();

  if (this.debug) {
    console.log('---websocket created---');
  }
}

function onMessage(event) {
  if (this.debug) {
    console.log('received packet: ');
    console.log(event.data);
  }
}

WebsocketConnection.prototype.bindEvents = function() {
  if (this.ws) {
    if (this.debug) {
      console.log('---websocket bind events---');
    }

    this.ws.onmessage = onMessage;
  }
}

export default WebsocketConnection;