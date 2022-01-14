const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  user: String,
  email: { type: String, unique: true, required: true },
  password: String,
});


testUser =[{
    user : "victor",
    email : "v@hotmail.dev"
}]

const User = model("users", userSchema)

const insertf = async function(newUser){
    try{
        const insertedUser = await User.create(newUser)
        console.log(insertedUser)
    }catch(err){console.log(err)}
}

insertf(testUser)

module.exports = User;
