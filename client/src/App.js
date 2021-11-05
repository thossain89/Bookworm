import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

// Import Components


import Header from './pages/Header';
import Footer from './pages/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar/Navbar';
import AddBook from './pages/AddBook';
import AllBooksHome from './pages/AllBooksHome';
import MyBooks from './pages/MyBooks';
// import NotFound from './components/notFound';


// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <Router>       
          <div className="flex-column justify-flex-start min-100-vh">        
          <Header />          
            <Navbar />
              <Switch>
                <div className="container">
                  <Route exact path="/" component={AllBooksHome}/>              
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/signup"component={Signup}/>
                  <Route exact path="/mybooks"component={MyBooks}/>
                  <Route exact path="/add"component={AddBook}/>
                  {/* <Route exact path="/book/:id" component={BookSingle}>             */}
                  {/* user not loggedIn show a message, query to get book by id */}          
                  {/* <Route component ={NotFound}/> */}    
                </div>
              </Switch>          
            </div>
          <Footer/>
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;
