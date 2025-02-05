import React from "react";


const Image = (props) => {
    return(
        <div className="photo-list" key={props.id}>
            <h2>{props.title}</h2>
            <p>{props.date}</p>
            <img src={props.picture} />
            <p>{props.description}</p>
        </div>
    )
};

export default Image; 