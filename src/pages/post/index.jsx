import {Component} from "react";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";
import {
    Autocomplete,
    Card,
    CardActions,
    CardContent, Paper,
    Table, TableBody, TableCell,
    TableContainer, TableHead, TableRow,
    TextField,
    Typography
} from "@mui/material";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';


class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gender: [{label: 'Male'}, {label: 'Female'}],
            post:{
                userId:'',
                title:'',
                id:'',
                body:''
            },
            customerTblData:[

            ]
        }
    }

    saveCustomer(){

        let post = this.state.post;
        let obj = {
            userId:post.userId,
            title:post.title,
            id:post.id,
            body:post.body
        }

        let {customerTblData} = this.state;
        customerTblData.push(obj);
        this.setState({customerTblData: customerTblData});

    }

    render() {

        const {classes} = this.props;

        return (<div className={classes.container}>
            <div className={classes.nav_div}>
                <div>
                    <Link className={classes.link} to={"/dashboard"}>
                        <Typography variant="h4">
                            Dashboard
                        </Typography>
                    </Link>
                </div>
                <div>
                    <div className={classes.btn_container}>

                        <Link className={classes.link} to={"/customer"}>
                            <Button size="large">Customer</Button>
                        </Link>

                        <Link className={classes.link} to={"/item"}>
                            <Button size="large">Item</Button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={classes.content_div}>
                <ValidatorForm
                    ref="form"
                    // onSubmit={this.saveCustomer()}
                    onSubmit={() => {
                        this.saveCustomer()
                    }}
                    onError={errors => console.log(errors)}
                >
                    <div className={classes.form_div}>
                        <div className={classes.txt_div}>
                            <TextValidator id="outlined-basic" label="User ID" variant="outlined" onChange={(e) => {
                                let post = this.state.post;
                                post.userId = e.target.value
                            }} validators={['required', 'isPositive']}/>
                            <TextValidator id="outlined-basic" label="Title" variant="outlined" validators={['required']} onChange={(e) => {
                                let post = this.state.post;
                                post.title = e.target.value
                            }}/>

                            <TextValidator id="outlined-basic" label="ID" variant="outlined" validators={['required', 'isPositive']} onChange={(e) => {
                                let post = this.state.post;
                                post.id = e.target.value
                            }}/>
                            <TextValidator id="outlined-basic" label="Body" variant="outlined" validators={['required']} onChange={(e) => {
                                let post = this.state.post;
                                post.body = e.target.value
                            }}/>
                        </div>
                        <div className={classes.btn_div}>
                            <Button size="large" color={"error"} variant="outlined">Clear</Button>
                            <Button size="large" variant="outlined" type='submit'>Save</Button>
                        </div>
                    </div>
                </ValidatorForm>




                <div>
                    <TableContainer component={Paper} sx={{maxHeight:'580px'}}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table" stickyHeader>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Customer Name</TableCell>
                                    <TableCell>Nic</TableCell>
                                    <TableCell>Gender</TableCell>
                                    <TableCell>Email</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {/*<TableRow>
                                    <TableCell>Helitha Sri</TableCell>
                                    <TableCell>20001256879</TableCell>
                                    <TableCell>Male</TableCell>
                                    <TableCell>heli@gmail.com</TableCell>
                                </TableRow>*/}

                                {this.state.customerTblData.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell>{row.name}</TableCell>
                                        <TableCell>{row.nic}</TableCell>
                                        <TableCell>{row.gen}</TableCell>
                                        <TableCell>{row.email}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>

            </div>
        </div>)
    }

}

export default withStyles(styleSheet)(Post);