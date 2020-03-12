import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardTitle, CardBody } from 'reactstrap';



class Menu extends Component {

  constructor(props) {
    super(props);

  }


  render () {
    // here receiving dishes as props from parent (app) component
    const menu = this.props.dishes.map((dish) => {

      return (
        //returns from map operator (layout for each dish)
       // key enables react to identify (list) items
        <div key={dish.id} className="col-12 col-md-5 m-1">
         <Card onClick={() => this.props.onClick(dish.id)}>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardImgOverlay body className="ml-5">
           <CardTitle>{dish.name}</CardTitle>
          </CardImgOverlay>
         </Card>
        </div>
      );
    });
    // returns corresponding view for this component
    return (
      <div className="container">
       <div className="row">
         {menu}
       </div>
      </div>
    );
  }
}
// exports in order to be imported in app.js
export default Menu;
