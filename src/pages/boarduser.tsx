import React, {FC, useState} from "react";

const BoardUserPage:FC = () =>{
    const [content,setContent] =useState("");
    return (
        <div className="container">
        <header className="jumbotron">
          <h3>{content}</h3>
        </header>
      </div>
    )
}
export default BoardUserPage;