import 'dotenv/config';
import express from 'express';
import { read, readFileSync } from 'fs';
import { createServer } from 'https';
import { compiler } from './build.js';

const app = express();
const server = createServer({
    cert: readFileSync('./cert/cert.pem'),
    key: readFileSync('./cert/key.pem')
}, app);

server.listen(process.env.PORT);

app.use(express.static("/build"), express.json());

app.get("/", async(req, res) => {
    console.log('hi');
    res.send("hi")
})

compiler.run((err, stats) => {
    console.log('build succeded!');
    compiler.close((closeErr) => {
        // console.log(closeErr);
    })
})