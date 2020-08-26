const mongoose = require('mongoose')
const validator = require('validator')

const connectionURL = 'mongodb://127.0.0.1:27017'

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const User = mongoose.model('User',{
    name:{
        type:String,
        required: true,
        trim: true
    },
    email:{
        type:String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    age:{
        type:Number,
        default: 18,
        validate(value){
            if(value<0){
                throw new Error('Age must be a positive number')
            }
        }
    },
    password:{
        type:String,
        required: true,
        trim:true,
        minlength: 7,
        validator(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('password cannot contain the "password"')
            }
        }
    }
})

const me = new User({
    name: ' Farees Hussain  ',
    email: 'fareezzhussaiN@gmail.com',
    password: 'fareess'
})

me.save().then(()=>{
    console.log(me)
}).catch((err)=>{
    console.log(err)
})

const Task = mongoose.model('Task',{
    description:{
        type:String,
        trim: true,
        required: true,
    },
    completed:{
        type:Boolean,
        default: false,
    }
})

const task = new Task({
    description: '       learned how to save document using mongoose library',
})

task.save().then(()=>{
    console.log(task)
}).catch((err)=>{
    console.log(err)
})