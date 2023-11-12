const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("TeamBenders E-Commerce-OnlineSite");
});

app.post("/pay", async (req, res) => {
  try {
    const token = req.body.token;
    const amount = req.body.amount;

    // Create a charge using the Stripe API
    const charge = await stripe.charges.create({
      source: token.id,
      amount: amount,
      currency: "usd",
    });

    res.send("Payment successful");
  } catch (error) {
    console.error(error);
    res.status(500).send("Payment failed");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
