import React from 'react';
import { Provider } from 'react-redux';

import { useStore } from '../state/store';
import { Layout } from '../components/Layout';

import 'mapbox-gl/dist/mapbox-gl.css';
import '../styles/global.css';

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}