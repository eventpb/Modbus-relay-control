var mongoose=require('mongoose');

module.exports=()=>{
    mongoose.set('debug',true);
    var db=mongoose.connect('mongodb://localhost/s59030195');
    return db;
}