import React, { Component } from 'react';
import { MDBAnimation,
         MDBCard,
         MDBCardBody,
         MDBCardTitle,
         MDBCardText,
         MDBBtn } from "mdbreact";

class ToDoItem extends Component {

    render() {
        const { list } = this.props
        const elements = list.map( (element, ind) => {
            return (
                <MDBAnimation type="pulse" key={element.key}>
                    <MDBCard style={{ width: "22rem" }}>
                    <MDBCardBody className="grey mb-1">
                        <MDBCardTitle className="cardTitle">
                            {`Task number ${ind + 1}`}
                        </MDBCardTitle>
                        <MDBCardText className="cardText">
                            {`${element.text}`}
                        </MDBCardText>
                        <MDBBtn color="grey" href="#">More...</MDBBtn>
                    </MDBCardBody>
                    </MDBCard>
                </MDBAnimation>
            )
        })
      return (
        <ul>
            {elements}
        </ul>
      );
    }
  }

  export default ToDoItem;