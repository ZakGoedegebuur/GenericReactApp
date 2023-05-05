import React from "react";
import Header from '../components/Header.js';
import Page from '../components/Page.js';
import "../styles/Body.css";

export default function Body(props) {
  return (
    <div className="Body">
      <Header setPage={props.setPage} page={props.page}/>
      <Page page={props.page}/>
    </div>
    )
}