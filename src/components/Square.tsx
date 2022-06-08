import React from "react";

interface Props {
    onClick: () => void;
    value: string;
}


const Square: React.FC<Props> = ({ onClick, value }) => {
    return (<button
        className="square"
        onClick={onClick}
    >
        {value}
    </button>);
}

export default Square;