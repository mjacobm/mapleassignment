import * as actionTypes from "./actionTypes";

  export const fetchProvidersSuccess = providers => {
    return {
      type: actionTypes.FETCH_PROVIDERS_SUCCESS,
      providers: providers     
    };
  };
  
  export const fetchProvidersFail = error => {
    return {
      type: actionTypes.FETCH_PROVIDERS_FAIL,
      error: error
    };
  };
  
  export const fetchProvidersStart = () => {
    return {
      type: actionTypes.FETCH_PROVIDERS_START
    };
  };   
  
  export const fetchProviders = () => {
    return {
      type: actionTypes.FETCH_PROVIDERS
    };
  };