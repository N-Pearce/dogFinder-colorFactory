import React from "react";
import { useParams, Link } from "react-router-dom";

const Color = (props) => {
    const params = useParams();
    const {color} = params;

    document.body.style.background = color;

    return (
        <Link to='/colors'>Back</Link>
    )
}

export default Color