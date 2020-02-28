'use strict'
const http = require('http')
const fs = require('fs');
const querystring = require('querystring')
const url = require('url')
let user = {
	admin:123456;
}
http.createServer((req,res)=>{
	//获取数据
	let path,get,post
	if(req.method == 'GET'){
		let {pathname,query} = url.parse(req.url,true)
		path = pathname,
		get = query
		complete();
	}else if(req.method == 'POST'){
		let arr = [];
		req.on('data',buffer=>{
			arr.push(buffer);
		})
		req.on('end',()=>{
			post = querystring.parse(Buffer.concat(arr).toString());
		});
		complete();
	}
	function complete(){
		if(path = '/login'){
			res.writeHead(200,{
			'Content-Type':'text/plain;charset = utf-8'
		})
			let {username,password} = get
			if(!user[username]){
				res.writeHead(200,{
					'Content-Type':'text/plain;charset = utf-8'
		})
				res.end(JSON.stringify{
					err:1,
					msg:'用户名不存在'
				})
			}else if(user[password] !== password){
				res.writeHead(200,{
			'Content-Type':'text/plain;charset = utf-8'
		})
				res.end(JSON.stringify({
					err:1,
					msg:'密码错误'
				}))
			}else{
				res.writeHead(200,{
			'Content-Type':'text/plain;charset = utf-8'
		})
				res.end(JSON.stringify({
					err:0,
					msg:'登录成功';
				}));
			}
		}else if(path = '/reg'){

		}else{
			fs.readFile('demo${path}',(err,data)=>{
				if(err){
					res.end('404')
				}else{
					res.end(data)
				}
			});
		}
	}
}).listen(8888);