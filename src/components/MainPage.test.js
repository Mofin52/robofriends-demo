import { shallow, mount, render } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper;
beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchTerm: '',
        isPending: false
    };
    wrapper = shallow(<MainPage { ...mockProps }/>)
});

it('renders mainpage without crashing', () => {
    expect(wrapper).toMatchSnapshot();
});

it('filters robots correctly', () => {
    
    const mockProps2 = {
        onRequestRobots: jest.fn(),
        robots: [{ id: 3, name: 'John', email: 'j@j.j'}],
        searchTerm: 'o',
        isPending: false
    };
    const wrapper2 = shallow(<MainPage {...mockProps2}/>)

    expect(wrapper.instance().filterRobots()).toEqual([]);
    expect(wrapper2.instance().filterRobots()).toEqual([{ id: 3, name: 'John', email: 'j@j.j'}]);
});

it('filters robots correctly 2', () => {
    
    const mockProps3 = {
        onRequestRobots: jest.fn(),
        robots: [{ id: 3, name: 'John', email: 'j@j.j'}],
        searchTerm: 'a',
        isPending: false
    };
    const filterRobots = []
    const wrapper3 = shallow(<MainPage {...mockProps3}/>)
    expect(wrapper3.instance().filterRobots()).toEqual(filterRobots);
});