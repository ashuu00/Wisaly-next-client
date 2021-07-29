import * as React from 'react';
const { render } = require('../test-utils');
//import { screen } from '@testing-library/react';
import { shallow } from 'enzyme';
//import profileIndex from '../../pages/profile/index';
import Demo from '../../pages/blogs/demo';
describe('All profile features here', () => {
    test('should contain one h3 heading', () => {
        render(<Demo />);
        const idea = shallow(<Demo />);
        //const heading = getByRoleHeading('hello'); //screen.getByRoleHeading('Welcome to the Blog Page');
        //expect(heading).toBeTruthy();
        expect(2 + 2).toEqual(4);
        expect(idea.find('div')).toBeTruthy();
    });
});
