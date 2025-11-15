import express from 'express';
import 'dotenv/config.js';
import bookRoutes from './router/BookRoutes.js';
import studentRoutes from './router/StudentRoutes.js';
import cors from "cors";

//init app
const app = express();

//enable cors to frontend
let corsOptions = {
    origin: process.env.ORIGIN
}

//middleware
app.use(express.json());
app.use(cors(corsOptions));

//this is used to log the request on the console
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

try {
    app.listen(process.env.PORT || 5000, () => {
        console.log(`listening to port ${process.env.Port || 5000}`);
    });
} catch (e) {
    console.log(e);
}

app.use('/book', bookRoutes);
app.use('/student', studentRoutes);