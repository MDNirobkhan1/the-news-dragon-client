import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import Rightnav from '../pages/Shared/Rightnav/Rightnav';

const NewsLayout = () => {
    return (
        <div>
             <Header></Header>
                <Container>
                    <Row>
                        <Col lg={9}>
                            <Outlet></Outlet>
                        </Col>
                        <Col lg={3}>
                            <Rightnav></Rightnav>
                        </Col>
                    </Row>
                </Container>
            <Footer></Footer>
        </div>
    );
};

export default NewsLayout;