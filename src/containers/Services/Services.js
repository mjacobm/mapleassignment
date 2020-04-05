import React, {useState, useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Providers from '../Providers/Providers';

const Services = props =>
{

    const [service,setService] = useState("cardiology");

    useEffect(() => {
        props.fetchServices(); 
    }, []);

    const handleServices = e =>
    {
        setService(e.target.id);
    }

    let listServices = <Spinner animation="grow" variant="primary" />;
    if(props.services.data!=undefined)
    {
        listServices = props.services.data.map((services) =>
            <Button key={services.id} id={services.id} onClick={handleServices} variant="outline-primary">{services.id}</Button>
        );
    }

    return(        
        <div>
            <hr/>
            {listServices}          
            <hr/>
            <Providers service={service.replace('-', ' ')}></Providers>             
        </div>   
    );
}

const mapStateToProps = state => {
    return {
        services: state.services.services,
        loading: state.services.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchServices: () => dispatch(actions.fetchServices())
        };
};

export default connect( mapStateToProps, mapDispatchToProps )(Services);