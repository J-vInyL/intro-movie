import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./component/Navigation";
import HeaderContainer from "./component/HeaderContainer";

import { ApolloProvider } from "@apollo/client";
//import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";

import client from "./apollo/Client";

import "./App.css";

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
