import express from 'express';

//create express app
const app = express();

//middleware
app.use(express.json());

const port = 3000;
try{
    app.listen(port, () => {
        console.log('listening to port 3000...');
    });
}catch(err){
    console.log(err);
}

app.get('/nik', async (req, res) => {
    res.status(200).json({message: "Ako si nik"});
});