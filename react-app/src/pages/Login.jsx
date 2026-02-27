
import Button from 'react-bootstrap/Button';

const Login = ({onLogin})=>{
    return(
        <>
           <Button variant="danger" onClick={onLogin}>Login</Button>
        </>
    )
}

export default Login;