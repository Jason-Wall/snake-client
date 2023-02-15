
const net = require("net");

const connect = (connectConfig) => {
  const conn = net.createConnection(connectConfig);
  conn.setEncoding('utf8');
  conn.on('connect', () => {
    console.log('Connection successful!');
    conn.write('Name: JW');
  })

  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = connect;