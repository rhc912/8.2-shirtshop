var React = require('react');
var $ = require('jquery');
var ShirtCollection = require('../models/shirts.js').ShirtCollection;
var CartCollection = require('../models/shirts.js').CartCollection;

var CartComponent = React.createClass({

  render: function(){

  var cartList = JSON.parse(localStorage.getItem('cartList'));
  console.log(cartList);

    var fillCart = cartList.map(function(cartItem){
      console.log(cartItem);
      return (
        <li key={cartItem.name}>{cartItem.name} ${cartItem.price / 100}</li>
      )

    });

    return(
    <div>
      <div className="header-outer">
        <div className="app row-fluid">
          <HeaderComponent />
        </div>
      </div>
      <div className="well">
        <ul>
        {fillCart}
        </ul>
      </div>
    </div>
    )
  }
});

var ShowcaseComponent = React.createClass({
  // handleAddtoCart: function(e){
  //     e.preventDefault();
  //     var quantity = $('#quantity').val();
  //     console.log(quantity);
  //     var size = $('#size').val();
  //     console.log(size);
  //     localStorage.setItem("quantity", quantity);
  //     localStorage.setItem("size", size);
  //
  // },
  render: function(){
    var self = this;
    var listOfShirts = this.props.shirts.map(function(shirt){
      return (

        <div key={shirt.cid}>
            <div className="col-sm-6 col-md-4">
           <div className="thumbnail">
             <img  src={shirt.get('thumbImage')} />
           <div className="caption">

           <p>These shirts are genuine cotton. You will feel like an aristocrat while wearing this.</p>
            <input id="quantity" placeholder="Qty"></input>
            <select id="size" className="select-shirt">
              <option>SM</option>
              <option>MD</option>
              <option>LG</option>
              <option>XL</option>
            </select>
            <button onClick={function(){self.props.handleAddtoCart(shirt)}} className="select-shirt btn btn-primary">Add to Cart</button>

         </div>
       </div>
     </div>
   </div>
      )
    });
    return(
      <section className="row">
        <div>
        {listOfShirts}
        </div>
      </section>
    )
  }
})
var HeaderComponent = React.createClass({
  render: function(){
    return (
      <header className="heading well row">
        <h2>Debonair Designs</h2>
          <a href="index.html" className="shirtcase">Shirts</a>
          <a href="cart.html" className="kart">Cart</a>
      </header>
    )
  }
});

var AppComponent = React.createClass({
  getInitialState: function(){
    return {
      shirts: [],
      cartList: [],
    }
  },
  componentWillMount: function(){
  var shirts = new ShirtCollection();
  var cartList = new CartCollection();
    shirts.add([
      {'name': 'Im Lovin I.T', 'price': 500, 'thumbImage': 'http://cdn.somethinggeeky.com/product-images/large/imlovinittshirt_559691127ebe6.jpg' },
      {'name': 'Eat, Sleep, Code', 'price': 500, 'thumbImage': 'https://img1.etsystatic.com/030/1/6378568/il_570xN.516904555_mekh.jpg' },
      {'name': 'Conditional', 'price': 500, 'thumbImage': 'http://lpfpublic.s3.amazonaws.com/images/T01/white_bg/small/front/3354_T01_M_IGN_DWT_XNA.jpg' }
    ])
    this.setState({
      'shirts': shirts,
      'cartList': cartList
    });
  },
  handleAddtoCart: function(shirt){
      var quantity = $('#quantity').val();
      console.log(quantity);
      var size = $('#size').val();
      console.log(size);
      this.state.cartList.add(shirt);
      this.forceUpdate();
      localStorage.setItem('cartList', JSON.stringify(this.state.cartList));
      localStorage.setItem("quantity", quantity);
      localStorage.setItem("size", size);

  },

  render: function(){
    return (
      <div>
        <div className="header-outer">
          <div className="app row-fluid">
            <HeaderComponent />
          </div>
        </div>
          <div className="secondary-outer">
            <div className="secondary-inner">

              <ShowcaseComponent handleAddtoCart={this.handleAddtoCart} shirts={this.state.shirts} />
            </div>
          </div>
      </div>
    );
  }
});


module.exports = {
  'AppComponent': AppComponent,
  'HeaderComponent': HeaderComponent,
  'ShowcaseComponent': ShowcaseComponent,
  'CartComponent': CartComponent
}
