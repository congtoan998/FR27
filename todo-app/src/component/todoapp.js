import React from "react";
import "./todoapp.scss";
import Header from "./header";
import Container from "./container";
import Footer from "./footer";

export default function App(){
    return(
        <div id="todo-app">
        <Header></Header>
        <Container></Container>
        <Footer></Footer>
        </div>
    )
}