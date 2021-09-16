import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {useState} from "react";
import {CoffeeOutlined} from "@mui/icons-material";
import {Box} from "@mui/material";
import {Typography} from "@material-ui/core";

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
        <div style={{width: '100%', minHeight: 400, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Box style={{width: 300, padding: 100, display: 'flex', flexDirection: 'column'}}>
                <div style={{alignItems: 'center', display: 'flex', flexDirection: 'row', marginBottom: 30}}>
                    <CoffeeOutlined color={"error"} fontSize={"large"} style={{marginRight: 10}}/>
                    {/*<Typography variant={"h4"}*/}
                    {/*            gutterBottom*/}
                    {/*            component={"div"}*/}
                    {/*            color={"textPrimary"}*/}
                    {/*            style={{marginBottom: 0}}>*/}
                    {/*    STARBUCKS*/}
                    {/*</Typography>*/}
                </div>
                <TextField variant="standard"
                           placeholder={"Username"}
                           margin="normal"
                           value={userId}
                           color={"secondary"}
                           onChange={handleChangeUserId}/>
                <TextField type="password"
                           variant="standard"
                           color={"secondary"}
                           placeholder={"Password"}
                           onChange={handleChangePassword}
                           value={password}
                           margin="normal"/>
                <Button variant={"contained"}
                        style={{marginTop: 30}}
                        color={"secondary"}
                        size={"large"}
                        onClick={(e) => {
                            alert('clicked')
                        }}>
                    Login
                </Button>
            </Box>
        </div>
    );
}