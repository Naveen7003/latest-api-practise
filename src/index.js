// git checkout -b //to check old branch
// git add   create a new branch after cloning others repo
const dotenv = require("dotenv");
const path = require("path");
const app = require("./app");
dotenv.config({ path: path.join(__dirname, "..", ".env") });


app.listen(process.env.PORT, () =>{
    console.log(`app is running on port ${process.env.PORT}`)
})
