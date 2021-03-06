import React, {Component} from 'react';

import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import axios from 'axios';
import Header from './layout/Header.js';
import Slide from './layout/Slide.js';

import Footer from './layout/Footer.js';
class DisplayProduct extends Component {
	 constructor(props){
        super(props)
        this.state = {
           products : [],
           sort : true,       
        }
    }    
    componentDidMount(){
      axios({
        method: 'GET',
        url :'http://localhost:3000/products',
        data : null
      }).then(res =>{
        this.setState({
          products :res.data
        });
      }).catch( err =>{
      });
    }


    componentWillUpdate(){
      if (this.state.sort === true) {
          axios({
            method: 'GET',
            url :'http://localhost:3000/products?_sort=price&_order=asc',
            data : null
          }).then(res =>{
            this.setState({
              products :res.data
            });
          }).catch( err =>{
          });
      }else{
          axios({
          method: 'GET',
          url :'http://localhost:3000/products?_sort=price&_order=desc',
          data : null
          }).then(res =>{
            this.setState({
              products :res.data
            });
          }).catch( err =>{
          });
      }
      
    }

    Low = () =>{
      this.setState({
        sort: true
      });
    }

    High = () =>{
      this.setState({
        sort: false
      });
    }

    onChange = (event) =>{
      var target = event.target;
      var name = target.name;
      var value = target.value;
      this.setState({
        [name] : value
      });
    }

    render() {
    var { products,keyword } = this.state;
  	return (
       <React.Fragment>
        <Header/>
          <div className="row">
          {this.state.products.map((product,index) => {
              return < Item key={index} product={product} />
          })}
          </div>     
  			<Footer/>
        </React.Fragment>
   		);
	}
}

class Item extends Component {

 render() {
  return (
  <React.Fragment> 


    <div className="col-md-3 col-sm-6" >
    <div className="product-grid3">
                <div className="product-image3">

                <NavLink to={`/products/${this.props.product.id}/product-detail`}><img src={this.props.product.avatar} alt="" height="300" width="500" /></NavLink>
                    <ul className="social">
                      <li><a ><i className="fa fa-shopping-cart" /></a></li>
                          <div className="clearfix" ></div>
                    </ul>
                    <span className="product-new-label">New</span>
                </div>
                <div className="product-content">
                    <h3 className="title"><a href="#">{this.props.product.name}</a></h3>
                    <div >
                    <span>$ {this.props.product.price}</span>
                    </div>
                    
                </div>
      </div>
            </div>  
           
     
    </React.Fragment>
      );
  }
  
}
export default DisplayProduct;