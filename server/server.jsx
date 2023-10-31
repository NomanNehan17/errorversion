const express = require("express");
const app = express ();
const cors  = require("cors");
app.use(cors());
require("dotenv").config();
const bodyParser = require("body-parser");
const { parseClassName } = require("react-toastify/dist/utils");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const port = process.env.PORT;
const Stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);



app.get("/", (req, res) =>{
    res.send("Hello World!");
});

app.post("/pay", async(req, res)=>{
    console.log(req.body.token);
    await Stripe.charges.create({
        source: req.body.token.id,
        amount: req.body.amount,
        currency: "usd",
    });
});

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended:true}));

app.listen(port,()=>{
console.log(`Server is running on port ${port}`);
});