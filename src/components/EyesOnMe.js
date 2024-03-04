import React from "react";

function EyesOnMe() {
    const handleFocus = () => {
        console.log("Good!")
    }
    const handleBlur = () => {
        console.log('Hey! Eyes on me!')
    }
    const render = () => {
        return (
            <div>
                <button onFocus={handleFocus} onBlur={handleBlur}>Eyes on me</button>
            </div>
        )
    }

    return render(); // You need to return the result of the render function
}

export default EyesOnMe;
