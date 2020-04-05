import React, {useState, useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Image from 'react-bootstrap/Image';
//import { Container, Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import Moment from 'moment';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

const Providers = props =>
{

    useEffect(() => {
        props.fetchProviders(); 
    }, []);


    let listProviders = <Spinner animation="grow" variant="primary" />;
    if(props.providers.data!=undefined)
    {
        listProviders = props.providers.data.map((provider) =>  {
        if(provider.attributes.subspecialties[0].toLowerCase().includes(props.service.toLowerCase()))      
         return(   <Container key={provider.id}>
            <Row>
                <Col xs={6} md={4}>
                <Image src={provider.attributes['card-image']} rounded />
                </Col>
                <Col xs={6} md={4}>
                <h5>{provider.attributes.name}</h5>
                <h5>{provider.attributes.subspecialties[0]}</h5>
                </Col>    
            </Row>
            <br></br>
            </Container>
        )}
        );
    }

    return(        
        <div> 
            {(listProviders!="")?
            listProviders:
            <h3>No records found</h3>}                  
        </div>   
    );
}

const mapStateToProps = state => {
    return {
        providers: state.providers.providers,
        loading: state.providers.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchProviders: () => dispatch(actions.fetchProviders())
        };
};

export default connect( mapStateToProps, mapDispatchToProps )(Providers);