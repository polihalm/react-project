import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardTitle, CardBody } from 'reactstrap';


class Dishdetail extends Component {

  renderDish(dish) {
    return (
        <div className='col-12 col-md-5 m-1'>
          <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      )
  }

  renderComments(comments) {
    if (comments != null) {
     const cmnt = comments.map(comment => {
     const date = new Intl.DateTimeFormat('en-US', {
                    year:'numeric',
                    month: 'short',
                    day: '2-digit'
                  }).format(new Date(Date.parse(comment.date)))
      return (
        <li key={comment.id}>
        <p>{comment.comment}</p>
        <p>-- {comment.author} {date}</p>
        </li>
      )
      })
      return (
        <div className='col-12 col-md-5 m-1'>
          <h4>Comments</h4>
          <ul className='list-unstyled'>
           {cmnt}
          </ul>
        </div>
      )}

    else {
      return (<div></div>)
    }
  }

  render () {

    const dish = this.props.dish
     if (dish == null) {
     return (<div></div>)
    }
    const comments = this.props.dish.comments
    const dishdetails = this.renderDish(dish)
    const dishcomments = this.renderComments(comments)

     return (
      <div className="row">
      {dishdetails}
      {dishcomments}
      </div>

    )
  }
}

export default Dishdetail;
