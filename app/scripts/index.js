var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var Cookies = require('js-cookie');


var CartComponent = require('./components/main.jsx').CartComponent;

var AppComponent = require('./components/main.jsx').AppComponent;
// var models = require('./models/shirts.js').ShirtCollection;

// ReactDOM.render(
//     React.createElement(AppComponent),
//     document.getElementById('container')
//   );
//   ReactDOM.render(
//       React.createElement(AppComponent),
//       document.getElementById('container2')
//     );

if($('#container').length > 0){
 ReactDOM.render(
   React.createElement(AppComponent),
   document.getElementById('container')
 );
}

if($('#container2').length > 0){
 ReactDOM.render(
   React.createElement(CartComponent),
   document.getElementById('container2')
 );
}
