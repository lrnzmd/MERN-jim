require("dotenv").config();

const express = require("express");

const mongoose = require("mongoose");

const workputRouters = require("./routes/workouts");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

/* app.get('/', (req, res) => {
    res.json({mssg: 'welcome here'})
}) */

//routes
app.use("/api/workout", workputRouters);

// connect to db
mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    app.listen(process.env.PORT, (req, res) => {
      console.log("connect to db end listen in port ", process.env.PORT);
    });
  })
  .catch((err) => console.log(err));

//listen
/* app.listen(process.env.PORT, (req, res) => {
    console.log("listen in port ", process.env.PORT)
})
 */
