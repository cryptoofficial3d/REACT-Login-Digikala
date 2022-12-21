import { Button } from "react-bootstrap"

const myButton = (props) => {
    return (
        <Button {...props} className={`btn btn-danger w-100 h-100 ${props.className}`}>Danger</Button>
    )
}

export default myButton