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


import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar/Navbar';
import AddBook from './pages/AddBook';
import AllBooksHome from './pages/AllBooksHome';
import MyBooks from './pages/MyBooks';
import SingleBook from './pages/SingleBook';




const httpLink = createHttpLink({
  uri: '/graphql',
});


const authLink = setContext((_, { headers }) => {
  
  const token = localStorage.getItem('id_token');
  
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  
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
              
                <div className="container">

                  <Route exact path="/" component={AllBooksHome}/>              
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/signup"component={Signup}/>
                  <Route exact path="/mybooks"component={MyBooks}/>
                  <Route exact path="/add"component={AddBook}/>
                  <Route exact path="/book/:id" component={SingleBook}/>
                                                     
                </div>
                       
            </div>
          <Footer/>
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;
