//! CRUD Create Read Update Delete

/**
 * 
 * to add connection ./mongodb/bin/mongod --dbpath=/home/farees/mongodb-data
 * to open robo mongo run robomongo
 * 
 */

	/* 1 way */
// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

	/* 2nd way */
const { MongoClient,ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
// console.log(id)
// console.log(id.id)
// console.log(id.toHexString().length)

MongoClient.connect(connectionURL, { useNewUrlParser:true, useUnifiedTopology:true }, (error,client)=>{
    if(error){
        return console.log('unable to connect to database')
    }
	const db = client.db(databaseName)
	db.collection('users').deleteOne({
		name:"Shahzeb"
	}).then((res)=>{
		console.log(res.deletedCount)
	}).catch((err)=>{
		console.log(err)
	})
})