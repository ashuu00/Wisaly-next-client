import 'jsdom-global/register';
import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import Layout from '../components/layout/Complete';
import DefaultLayout from '../components/layout/DefaultLayout';
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import store from '../redux/store';
//import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

const MyRender = ({ children }): JSX.Element => (
    //for any custom layout, just add to the page, ex myPage.Layout=myLayout
    <ChakraProvider>
        <Provider store={store}>{children}</Provider>
    </ChakraProvider>
);
const makeStore = () => store;
const wrapper = createWrapper(makeStore);

const customRender = (ui, options) => {
    render(ui, {
        wrapper: wrapper.withRedux(MyRender),
        ...options
    });
};

//export * from '@testing-library/react';
export { customRender as render };
