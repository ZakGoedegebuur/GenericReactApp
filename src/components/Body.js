import React from "react";
import Header from '../components/Header.js';
import Page from '../components/Page.js';
import Footer from "./Footer.js";
import "../styles/Body.css";

function ReturnToTop() {
  return (
    <button className="return-to-top" onClick={() => {window.scrollTo(0, 0)}}>
      &#183; &#183; &#183; return to top of page &#183; &#183; &#183;
    </button>
  );
}

export default function Body(props) {
  return (
    <div className="Body">
      <Header setPage={props.setPage} page={props.page}/>
      <Page page={props.page}/>
      <ReturnToTop/>
      <Footer/>
    </div>
    )
}