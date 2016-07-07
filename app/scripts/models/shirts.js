var Backbone = require('backbone');

var Shirt = Backbone.Model.extend({

});

var ShirtCollection = Backbone.Collection.extend({
  model: Shirt,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/robbed'
});
var CartCollection = Backbone.Collection.extend({
  model: Shirt,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/robbed'
})

module.exports = {
  'Shirt': Shirt,
  'ShirtCollection': ShirtCollection,
  'CartCollection': CartCollection
}
