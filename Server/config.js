//tells the computer what configs to use
var env = process.env.NODE_ENV || 'development'

if(env ==='development') {
	//tells you which port and databse to use
	process.env.PORT = 3000;
	process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
} else if(env==='test'){
	process.env.PORT = 3000;
	process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
}

module.exports = {
	'ACCESS_TOKEN' : "6UjBuRTth7U0YHV7bVbYV1KO9SRBflL57f9fqy0dNBAVa_Pfv07zXte_fNwCuLGXa8tKkbnCFyz7oXkTJCFTnmqVsgI6BLqcm4frVn7gZ5q5eHCWGkfePt4KcRKBWXYx"
}
