import {Component} from "react";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";
import {TextField, Typography} from "@mui/material";
import Button from '@mui/material/Button';
import CustomSnackBar from "../../../components/common/SnakBar";


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_Name: 'admin',
            pw: '123',
            formData: {
                userName: '',
                password: ''
            },
            // for snakBar props
            open: false,
            message: '',
            severity: ''

        }
    }

    checkValidity() {
        console.log("hi..clicked")
        console.log(this.state.user_Name)
        console.log(this.state.pw)

        console.log(this.state.formData)

        let admin = this.state.user_Name;
        let adminPw = this.state.pw;

        let userName = this.state.formData.userName;
        let password = this.state.formData.password;

        if (admin === userName && adminPw === password) {
            console.log('Done')
            this.setState({
                open: true,
                message: 'User Credential Matching Success',
                severity: 'success'
            })
        } else {
            console.log("check")
            this.setState({
                open: true,
                message: 'User Credential Not Matching',
                severity: 'error'
            })
        }

    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.container}>
                <div className={classes.login_cover}>
                    <div className={classes.title_container}>
                        <Typography variant="h4">LOGIN</Typography>
                    </div>
                    <div className={classes.form_container}>
                        <TextField id="outlined-basic" label="User Name" variant="outlined" onChange={(e) => {
                            let formData = this.state.formData
                            formData.userName = e.target.value
                            this.setState(formData)
                        }}/>
                        <TextField id="outlined-basic" type="password" label="User Name" variant="outlined"
                                   onChange={(e) => {
                                       let formData = this.state.formData
                                       formData.password = e.target.value
                                       this.setState(formData)
                                   }}/>

                    </div>
                    <div className={classes.btn_container}>
                        <Button className={classes.btn} variant="contained" onClick={() => {
                            this.checkValidity()
                        }}>Login</Button>
                    </div>
                </div>
                <CustomSnackBar
                    open={this.state.open}
                    onClose={() => {
                        this.setState({open: false})
                    }}
                    message={this.state.message}
                    autoHideDuration={3000}
                    severity={this.state.severity}
                    varient="filled"
                />
            </div>
        )
    }
}

export default withStyles(styleSheet)(Login);