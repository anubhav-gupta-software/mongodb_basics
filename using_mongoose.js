//https://www.npmjs.com/package/mongodb
//the above is a way easier package than mongoose


//MONGOOSE- package to connect mongoDB in express apps, it can set a schema and do validations
import mongoose from "mongoose"
import express from "express"
import { Todo } from "./models/Todo.js"

let conn = await mongoose.connect("mongodb://localhost:27017/todo3")
const app = express()
const port = 3000

app.get('/', (req, res) => {
  //C
  const todo = new Todo({name:"Gardening", desc:"Pick up all the leaves",isDone:false})//the app will crash if any wrong datatype entered  
  todo.save()
  res.send('Hello World!')
})

app.get('/top',  async(req, res) => {
  //R
  let todo = await Todo.findOne({})
  res.json(todo);
  //res.send(todo);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
