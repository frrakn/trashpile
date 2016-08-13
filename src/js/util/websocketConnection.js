function WebsocketConnection(url, handleMessage, opts) {
  this.url = url;
  this.handleMessage = handleMessage;
  this.debug = opts.debug || false;
}

WebsocketConnection.prototype.connect = function() {
  this.ws = new WebSocket(this.url);
  this.bindEvents();

  if (this.debug) {
    console.log('---websocket created---');
  }
}

function formatData(data) {
  let parsedData;

  try {
    parsedData = JSON.parse(data);
  } catch (e) {
    console.log('Could not parse data:');
    console.log(data);
  }

  return parsedData;
}

function onMessage(event) {
  if (this.debug) {
    console.log('received packet: ');
    console.log(event.data);
  }

  const parsedData = formatData(event.data);
  if (parsedData) {
    this.handleMessage(parsedData);
  }
}

WebsocketConnection.prototype.bindEvents = function() {
  if (this.ws) {
    if (this.debug) {
      console.log('---websocket bind events---');
    }

    this.ws.onmessage = onMessage.bind(this);
  }
}

export default WebsocketConnection;