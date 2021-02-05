import '../App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import educationImg from '../assets/education.png';
import {Card,CardDeck} from 'react-bootstrap';
import schoolImg from '../assets/school.jpg';

class Education extends React.Component{
    render(){
        return(
            <div>
                <div style={{textAlign: "center"}}>
                    <img src={educationImg} id="educationImg"/>
                    <h3 id="educationText"> My Education</h3>
                </div>
                <div>
                    {/* <CardDeck>
                        <Card>
                            <Card.Img variant="top" src={schoolImg}/>
                            <Card.Body>
                            <Card.Title>
                                <h3>Shah Grammar High School</h3>
                            </Card.Title>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Pass Out in 2016</small>
                            <h5>Pass Out in 2016</h5>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                            </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="holder.js/100px160" />
                                <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to
                                    show that equal height action.
                                </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                            </CardDeck> */}
                </div>
            </div>    
        )
    }
}
export default Education;