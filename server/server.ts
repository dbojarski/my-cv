import express from 'express';
import enforce from 'express-sslify';
import path from 'path';

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, '/../../build')));
app.use(enforce.HTTPS({ trustProtoHeader: true }));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../../build/index.html'));
});

app.listen(port, () => {
  console.log(`App listening to ${port} port.`);
});
