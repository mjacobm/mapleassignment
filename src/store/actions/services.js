import * as actionTypes from "./actionTypes";

  export const fetchServicesSuccess = services => {
    return {
      type: actionTypes.FETCH_SERVICES_SUCCESS,
      services: services     
    };
  };
  
  export const fetchServicesFail = error => {
    return {
      type: actionTypes.FETCH_SERVICES_FAIL,
      error: error
    };
  };
  
  export const fetchServicesStart = () => {
    return {
      type: actionTypes.FETCH_SERVICES_START
    };
  };   
  
  export const fetchServices = () => {
    return {
      type: actionTypes.FETCH_SERVICES
    };
  };