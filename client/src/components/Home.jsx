import React from "react";
import LinkComponent from "./LinkComponent";
import Steps  from "./Steps";
import  "../styles/styles.css";

export default function Home(){
    return (
       <div>
         <LinkComponent />
         <Steps />
       </div>
    );
}