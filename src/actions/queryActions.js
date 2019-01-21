import * as types from '../constants/action_types';

export function fetchFilteredItems(filter) {
  return {
    type: types.CALL_API,
    payload: {
      endpoint: 'stac/search',
      authenticated: false,
      types: {
        requestType: types.FETCH_FILTERED_ITEMS,
        successType: types.FETCH_FILTERED_ITEMS_SUCCEEDED,
        errorType: types.FETCH_FILTERED_ITEMS_FAILED
      },
      method: 'POST',
      json: filter
    }
  };
}
