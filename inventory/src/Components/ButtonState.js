import React, { useState } from "react";

function ButtonState(){
const [count, setCount] = useState(0);

const updateCounter = () => {
    setCount(count + 1);
};

    return(
        <div>
            <h2>Counter = {count}</h2>
            <button onClick={updateCounter}>Add to counter</button>
        </div>
    )
}

export default ButtonState;