import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {useState} from "react";
import {AccountCircle, CoffeeOutlined, VpnKey} from "@mui/icons-material";
import {Box} from "@mui/material";
import {InputAdornment} from "@material-ui/core";

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
                </div>
                <TextField
                    size={"medium"}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle/>
                            </InputAdornment>
                        ),
                    }}
                    label={"Username"}
                    // placeholder={"Username"}
                    variant="standard"
                    onChange={handleChangeUserId}
                />
                <TextField
                    size={"medium"}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <VpnKey/>
                            </InputAdornment>
                        ),
                    }}
                    label={"Password"}
                    // placeholder={"Password"}
                    variant="standard"
                    onChange={handleChangePassword}
                />
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