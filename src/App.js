import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import ShoesDetail from "./routes/ShoesDetail";
import Navigation from "./component/Navigation";
import Header from "./component/Header";

import { ApolloProvider } from "@apollo/client";
//import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";

import client from "./apollo/Client";

import "./App.css";

function App() {
  return (
    <HashRouter>
      <Header />
      <ApolloProvider client={client}>
        <Navigation />
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/movie/:id" component={Detail} />
        <Route path="/about/:id" component={ShoesDetail} />
      </ApolloProvider>
    </HashRouter>
  );
}

export default App;
