import React from 'react';
import Layout from './core/Layout';
import { Helmet } from 'react-helmet';

const App = () => {
    const head = () => (
        <Helmet>
            <meta charSet="utf-8" />
            <title>MERN Stack</title>
            <link rel="canonical" href="https://mern-stack.com" />
        </Helmet>
    );
    return (
        <Layout>
            {head()}
            <div className="col-md-6 offset-md-3 text-center">
                <h1 className="p-5">Don't try authentication it won't work</h1>
            </div>
        </Layout>
    );
};

export default App;
