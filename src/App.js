import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./component/Navigation";
import HeaderContainer from "./component/HeaderContainer";

import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

import "./App.css";

const client = new ApolloClient({
  link: createHttpLink({ uri: "http://localhost:4000/graphql" }),
  cache: new InMemoryCache()
});

function App() {
  return (
    <HashRouter>
      <ApolloProvider client={client}>
        <HeaderContainer />
        <Navigation />
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/movie/:id" component={Detail} />
      </ApolloProvider>
    </HashRouter>
  );
}

export default App;
