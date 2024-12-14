
import imp from '../Model/imp'

const UserSchema= new mongoose.Schema({
    "name":{type:String},
    "roll":{type:Number},
    "age":{type:Number},
    "phno":{type:Number}
});

const UserModel = mongoose.model('expuserss',UserSchema)
export default UserModel 