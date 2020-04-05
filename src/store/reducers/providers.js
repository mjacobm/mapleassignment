import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    providers: []
};

const fetchProvidersStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const fetchProvidersSuccess = ( state, action ) => {
    return updateObject( state, {
        providers: action.providers,
        loading: false
    } );
};

const fetchProvidersFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};


const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {       
        case actionTypes.FETCH_PROVIDERS_START: return fetchProvidersStart( state, action );
        case actionTypes.FETCH_PROVIDERS_SUCCESS: return fetchProvidersSuccess( state, action );
        case actionTypes.FETCH_PROVIDERS_FAIL: return fetchProvidersFail( state, action );      
        default: return state;
    }
};

export default reducer;