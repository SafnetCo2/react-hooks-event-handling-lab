import react from "react";

const Keypad = () => {
    const handleChange = (event) => {
        console.log("Entering password...")
        console.log(event.target.value)
    }
    return (
        <div>
            <input type="password" onChange = {handleChange} />
        </div>
    )
}



export default Keypad