import '../styles/globals.scss';
import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import Layout from '../components/layout/Complete';
import DefaultLayout from '../components/layout/DefaultLayout';
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import store from '../redux/store';

function MyApp({ Component, pageProps }) {
    const CustomLayout = Component.Layout || DefaultLayout; //for any custom layout, just add to the page, ex myPage.Layout=myLayout
    return (
        <ChakraProvider>
            <Provider store={store}>
                <Layout>
                    <CustomLayout>
                        <Component {...pageProps} />
                    </CustomLayout>
                </Layout>
            </Provider>
        </ChakraProvider>
    );
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(MyApp);
