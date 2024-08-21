import React from "react";

function About({image="https://via.placeholder.com/215", about}) {
    let url = image
    // url= "https://via.placeholder.com/215"
    return(
        <aside>
            <img src={url} alt="blog logo" />
            <p>{about}</p>
        </aside>
    )
}
export default About;