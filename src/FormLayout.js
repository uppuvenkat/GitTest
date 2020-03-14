import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row, Col, Button } from 'react-bootstrap';


export default function FormLayout(props){
        return (
            <div className='container'>
                <Form>
                    <Col sm="12">
                        <Row >
                            <Col sm='8'>
                                <Form.Control type="text" name='repoName' placeholder="Enter Repo name" value={props.repoName} onChange={props.onNameChange}/>
                            </Col>
                            <Col sm='2'>
                                <Button variant="primary goBtn" onClick={props.fetchUserRepos}>Go</Button>{' '}
                            </Col>
                            <Col sm='2'>
                                <Button variant="primary clearBtn" onClick={props.clearRepo}>Clear</Button>{' '}
                            </Col>
                        </Row>
                        <br/>
                        <br/>
                        <Row >
                            <Col sm='8'>
                                <Form.Control type="text" name ='filter' value={props.filter} placeholder="Enter some key word to filter Eg: algo" onChange={props.onFilter} />
                            </Col>
                            <Col sm='2'>
                                <Button variant="primary clearBtn" onClick={props.clearFilter}>Clear</Button>{' '}
                            </Col>
                        </Row>
                    </Col>
                </Form>
            </div>
        )
}
