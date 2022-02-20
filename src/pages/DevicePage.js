import React from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import star from './../assets/star.png'

const DevicePage = () => {
    const device = {id: 1, name: 'iphone12pro', price: 25000, rating: 5, img: ''}
    const description = []
    return (
        <Container className={'mt-3'}>
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img}/>
                </Col>
                <Col md={4}>
                    <Row className='d-flex flex-column align-items-center'>
                        <h2>{device.name}</h2>
                        <div className='d-flex align-items-center justify-content-center'
                             style={{
                                 background: `url(${star}) no-repeat center center `,
                                 width: 240,
                                 height: 240,
                                 backgroundSize: 'cover',
                                 fontSize: 64
                             }}>
                            {device.rating}
                        </div>
                    </Row>
                </Col>
            <Col md={4}>
                <Card className='d-flex flex-column align-items-center justify-content-around'
                style = {{width: 300, height: 300, fontSize: 32, border:'5px solid lightgrey'}}>
                    <h3> While {device.price} byn </h3>
                        <Button variant={"outline-dark"}>
                            Add
                        </Button>
                </Card>
            </Col>
            </Row>
            <Row className='d-flex flex-column m-3'>
                <h1>Characters</h1>
                {description.map((info,index)=>
                    <Row key = {info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent' , padding: 10}}>
                        {info.title}:{info.description}
                    </Row>)}
            </Row>
        </Container>
    );
};

export default DevicePage;