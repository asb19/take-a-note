const mongoose=require('mongoose');
const Todoschema=new mongoose.Schema({
    todo:{
        type:String,
        required:true,
    },
    email_:{
        type:String,
        required: true,
          },
          link:{
            type:String,
              },
    done:{
        type:String,
        required: true,
    }

}, {timestamps: true});

module.exports=new mongoose.model("Todo",Todoschema);