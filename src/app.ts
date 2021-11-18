import express from 'express';
import 'dotenv/config';
import { router } from './routes';
import { Server, Socket} from 'socket.io';
import http from 'http'
import cors from "cors"


const app = express();
app.use(cors())
const serverHttp = http.createServer(app)
app.use(express.json())
app.use(router)


const io = new Server(serverHttp, {
    cors: {
        origin: '*'
    }
})

io.on('connection', (socket) => {
    console.log(`Usuário conectado no socket ${socket.id}`)
})

 



app.get('/github', (req, res) => {
    res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.
    GITHUB_CLIENT_ID}`
    );
})

app.get('/signin/callback', (req, res) => {
    const { code } = req.query
    return res.json(code)
})


export { serverHttp, io}