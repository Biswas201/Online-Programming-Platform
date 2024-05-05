
var mongoose=require("mongoose");
mongoose.connect('mongodb://localhost:27017/compitative-code',{useNewUrlParser:true});
var conne=mongoose.connection;
var checkSchema=new mongoose.Schema({
pid:String,
username:String,
score:Number,
hasSolved:Boolean
});
var checkModel=mongoose.model("Check",checkSchema);
module.exports=checkModel;
