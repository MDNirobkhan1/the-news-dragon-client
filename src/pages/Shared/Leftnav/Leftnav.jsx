import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import first from '../../../assets/1.png'
import second from '../../../assets/2.png'
import third from '../../../assets/3.png'
import { Card, Col, Row } from 'react-bootstrap';

const Leftnav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, [])
    return (
        <div>
            <h2>All Categories </h2>
            <div className='ps-4'>

                {
                    categories.map(category => <p
                        key={category.id}
                    >

                        <Link to={`/category/${category.id}`} className='text-decoration-none'>{category.name}</Link>
                    </p>)
                }
            </div>
            <div>
                <Row xs={1} md={2} lg={3} className="">

                    <Col>
                        <Card className='mb-2'>
                            <Card.Img variant="top" src={first} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    
                                    
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='mb-2'>
                            <Card.Img variant="top" src={second} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    
                                
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={third} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                   
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Leftnav;