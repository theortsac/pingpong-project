import * as Realm from "realm-web";
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, HttpLink, ApolloProvider, InMemoryCache } from '@apollo/client';
import './index.css';

const app = new Realm.App('pingpongapp-mvxcd');
async function getValidAccessToken() {
  if (!app.currentUser) {
    await app.logIn(Realm.Credentials.anonymous());
  } else {
    await app.currentUser.refreshCustomData();
  }
  return app.currentUser?.accessToken;
}

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://us-east-1.aws.realm.mongodb.com/api/client/v2.0/app/pingpongapp-mvxcd/graphql',
    fetch: async (uri, options) => {
      const accessToken = await getValidAccessToken();
      if (!options) {
        options = {};
      }
      const headersInit: HeadersInit = {};
      headersInit.Authorization = `Bearer ${accessToken}`;
      options.headers = headersInit;
      return fetch(uri, options);
    },
  }),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
  <BrowserRouter>
  <App />  
  </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root'),
);