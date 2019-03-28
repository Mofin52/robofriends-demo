import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED,
} from './constants';

import * as reducers from './reducers';

describe('searchRobots', () => {
    const initialStateSearch = { searchTerm: '' };
    it('should return the initial state', () => {
        expect(reducers.searchRobots(undefined, {})).toEqual(initialStateSearch);
    });

    it('should handle CHANGE_SEARCHFIELD', () => {
        expect(reducers.searchRobots(initialStateSearch, {
            type: CHANGE_SEARCHFIELD,
            payload: 'abc'
        })).toEqual({ searchTerm: 'abc'});
    });
})

describe('requestRobots', () => {
    const initialStateRobots = { robots: [], isPending: false, error: ''};
    
    it('should return the initial state', () => {
        expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
    });

    it('should handle REQUEST_ROBOTS_PENDING action', () => {
        expect(reducers.requestRobots(initialStateRobots, {type: REQUEST_ROBOTS_PENDING})).toEqual({
            robots: [],
            isPending: true,
            error: ""
        })
    });

    it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_SUCCESS,
            payload: [{ id: '123', name: 'test', email: 't@t.t'}]
        })).toEqual({
            robots: [{ id: '123', name: 'test', email: 't@t.t'}],
            isPending: false,
            error: ""
        })
    });

    it('should handle REQUEST_ROBOTS_FAILED action', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_FAILED,
            payload: 'NO!'
        })).toEqual({
            robots: [],
            isPending: false,
            error: 'NO!'
        })
    });
})