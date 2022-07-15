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

class Customer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gender: [{label: 'Male'}, {label: 'Female'}],
            customer:{
                name:'',
                nic:'',
                gen:'',
                email:''
            },
            customerTblData:[

            ]
        }
    }

    saveCustomer(){

        let customer = this.state.customer;
        let obj = {
            name:customer.name,
            nic:customer.nic,
            gen:customer.gen,
            email:customer.email
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

                <div className={classes.form_div}>
                    <div className={classes.txt_div}>
                        <TextField id="outlined-basic" label="Customer Name" variant="outlined" onChange={(e) => {
                            let cus = this.state.customer;
                            cus.name=e.target.value
                        }}/>
                        <TextField id="outlined-basic" label="NIC" variant="outlined" onChange={(e) => {
                            let cus = this.state.customer;
                            cus.nic=e.target.value
                        }} />
                    </div>
                    <div className={classes.txt_div}>
                        <Autocomplete
                            onChange={(event, newValue) => {
                                let cus = this.state.customer;
                                cus.gen=newValue.label
                                // console.log(newValue.label);
                            }}
                            disablePortal
                            id="combo-box-demo"
                            options={this.state.gender}
                            renderInput={(params) => <TextField {...params} label="Gender" onChange={(e) => {
                                let cus = this.state.customer;
                                // cus.gen=e.target.value
                            }}/>}
                        />
                        <TextField id="outlined-basic" label="Email" variant="outlined" onChange={(e) => {
                            let cus = this.state.customer;
                            cus.email=e.target.value
                        }}/>
                    </div>
                </div>
                <div className={classes.btn_div}>
                    <Button size="large" color={"error"} variant="outlined">Clear</Button>
                    <Button size="large" variant="outlined" onClick={() =>{this.saveCustomer()}}>Save</Button>
                </div>

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

export default withStyles(styleSheet)(Customer);