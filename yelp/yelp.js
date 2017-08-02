// var merge = require('merge');
// var yelp = require('node-yelp-api');
// var jwt = require('jsonwebtoken');
//
// var options = {
//   consumer_key: 'doIRj3RDvSIxYjFGLJKurg',
//   consumer_secret: 'G14y7VDaszIT5Gwx_MJfJFZKI4Y',
//   token: '72qmPiwUnAXzQb3EmMwelsIBUBAMOBXa-BYTi',
//   token_secret: '4YTMQeKOgxBKswjLTUwUXu5HWMI',
// };
//
// // See http://www.yelp.com/developers/documentation/v2/search_api
// var parameters = {
//   term: 'food',
//   location: 'San Jose',
// };
//
// yelp.search(merge(options, parameters), (data) => {
//   console.log('data')
//   console.log(data);
// }, (err) => {
//   console.error(err);
// });
//
// //6UjBuRTth7U0YHV7bVbYV1KO9SRBflL57f9fqy0dNBAVa_Pfv07zXte_fNwCuLGXa8tKkbnCFyz7oXkTJCFTnmqVsgI6BLqcm4frVn7gZ5q5eHCWGkfePt4KcRKBWXYx
var Yelp = require('yelp');

var yelp = new Yelp({
  consumer_key: 'doIRj3RDvSIxYjFGLJKurg',
  consumer_secret: 'G14y7VDaszIT5Gwx_MJfJFZKI4Y',
  token: '72qmPiwUnAXzQb3EmMwelsIBUBAMOBXa',
  token_secret: '4YTMQeKOgxBKswjLTUwUXu5HWMI',
});

// See http://www.yelp.com/developers/documentation/v2/search_api
yelp.search({ term: 'restaurants', location: '7126 Clarendon Street', radius_filter: 8000 })
.then(function (data) {
  console.log(data.businesses.length);
  var x = Math.floor(Math.random() * 20)
  console.log(x);
  console.log(data.businesses[x].name);
})
.catch(function (err) {
  console.error(err);
});
