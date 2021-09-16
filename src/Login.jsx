import TextField from "@material-ui/core/TextField";
import Paper from '@material-ui/core/Paper'
import {Button} from "@material-ui/core";
import {useState} from "react";

export default function Login() {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const handleChangeUserId = (e) => {
        setUserId(e.currentTarget.value);
    };
    const handleChangePassword = (e) => {
        setPassword(e.currentTarget.value);
    };
    return (
        <div style={{width: '100%', minHeight: 500, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Paper style={{width: 300, padding: 200, display: 'flex', flexDirection: 'column'}}>
                <TextField variant="standard"
                           placeholder="Username"
                           margin="normal"
                           value={userId}
                           onChange={handleChangeUserId}/>
                <TextField type="password"
                           variant="standard"
                           placeholder="password"
                           onChange={handleChangePassword}
                           value={password}
                           margin="normal"/>
                <Button variant={"contained"}
                        color={"primary"}
                        onClick={(e) => {
                            console.log(e);
                        }}>
                    Login
                </Button>
            </Paper>
        </div>
    )
}