const express =  require('express');
const app = express();

//get route
app.get('/', (req,res) => res.send('Hello'));

const port = 5000;
app.listen(port, () => console.log(`server is running on port ${port}`));