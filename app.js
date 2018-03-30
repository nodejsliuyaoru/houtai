var express=require('express')
var mysql=require('mysql')
var bodyparser=require('body-parser')
var app=express()
var pool=mysql.createPool({
	host:'localhost',
	user:'root',
	password:'123456789',
	database:'item',
	port:3306
})

app.get('/',(req,res)=>{
	res.setHeader('Access-Control-Allow-Origin','*')
	pool.getConnection(function(err,connection){
		if(err){
			console.log(err)
			return
		}
		var sql='select * from news'
		connection.query(sql,(err,data)=>{
			if(err){
				console.log(err)
				return
			}
			res.send(data)
			connection.end()
		})
		
	})
})
// app.post('/del',(req,res)=>{
// 	res.setHeader('Access-Control-Allow-Origin','*')
// 	var id=req.body.id
// 	console.log(id)
// 	pool.getConnection(function(err,connection){
// 		if(err){
// 			console.log(err)
// 			return
// 		}
// 		var sql='delete from news where id=index'
// 		connection.query(sql,(err,data)=>{
// 			if(err){
// 				console.log(err)
// 				return
// 			}
// 			res.send(data)
// 			connection.end()
// 		})
		
// 	})
// })
app.listen(8000,function(){
    console.log('ok')
})