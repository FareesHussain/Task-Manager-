const mongoose = require('mongoose')

const connectionURL = 'mongodb://127.0.0.1:27017'

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const User = mongoose.model('User',{
    name:{
        type:String
    },
    age:{
        type:Number
    }
})

const me = new User({
    name: 'Farees Hussain',
    age:'farees husain'
})

me.save().then(()=>{
    console.log(me)
}).catch((err)=>{
    console.log(err)
})

const Task = mongoose.model('Task',{
    description:{
        type:String
    },
    completed:{
        type:Boolean
    }
})

const task = new Task({
    description: 'learned how to save document using mongoose library',
    completed: true
})

task.save().then(()=>{
    console.log(task)
}).catch((err)=>{
    console.log(err)
})