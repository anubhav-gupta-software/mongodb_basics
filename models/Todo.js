//this has the schema
import mongoose from "mongoose";
//const { Schema } = mongoose;

//imposing conditions will make the app more secure!
const todoSchema = new mongoose.Schema({
    name: {type:String, required:true, default: "Anonymous"},
    desc: String,
    isDone: Boolean,
    days: Number
});

export const Todo = mongoose.model('Todo', todoSchema);


// required: boolean or function, if true adds a required validator for this property
// default: Any or function, sets a default value for the path. If the value is a function, the return value of the function is used as the default.
// select: boolean, specifies default projections for queries
// validate: function, adds a validator function for this property
// get: function, defines a custom getter for this property using Object.defineProperty().
// set: function, defines a custom setter for this property using Object.defineProperty().
// alias: string, mongoose >= 4.10.0 only. Defines a virtual with the given name that gets/sets this path.
// immutable: boolean, defines path as immutable. Mongoose prevents you from changing immutable paths unless the parent document has isNew: true.
// transform: function, Mongoose calls this function when you call Document#toJSON() function, including when you JSON.stringify() a document.