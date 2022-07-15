import {Component} from "react";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";
import {
    Autocomplete,
    Card,
    CardActions,
    CardContent,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography
} from "@mui/material";

import Button from "@mui/material/Button";
import {Link} from "react-router-dom";

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gender: [{label: 'Male'}, {label: 'Female'}],
            item:{
                code:'',
                description:'',
                price:null,
                qty:null
            },
            itemTblData:[

            ]
        }
    }

    saveItem(){
        const item = this.state.item;
        let obj = {
            code:item.code,
            description:item.description,
            price:item.price,
            qty:item.qty
        }

        let {itemTblData} = this.state;
        itemTblData.push(obj);
        this.setState({itemTblData:itemTblData})
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
                        <TextField id="outlined-basic" label="Code" variant="outlined" onChange={(e) =>{
                            let item = this.state.item;
                            item.code=e.target.value
                        }}/>
                        <TextField id="outlined-basic" label="Description" variant="outlined" onChange={(e) =>{
                            let item = this.state.item;
                            item.description=e.target.value
                        }}/>
                    </div>
                    <div className={classes.txt_div}>
                        <TextField id="outlined-basic" label="Price" type='number' variant="outlined" onChange={(e) =>{
                            let item = this.state.item;
                            item.price=e.target.value
                        }}/>
                        <TextField id="outlined-basic" label="Qty" type='number' variant="outlined" onChange={(e) =>{
                            let item = this.state.item;
                            item.qty=e.target.value
                        }}/>
                    </div>
                </div>
                <div className={classes.btn_div}>
                    <Button size="large" color={"error"} variant="outlined">Clear</Button>
                    <Button size="large" variant="outlined" onClick={() =>{
                        this.saveItem()
                    }}>Save</Button>
                </div>

                <div>
                    <TableContainer component={Paper} sx={{maxHeight:'580px'}}>
                        <Table sx={{minWidth: 650}} aria-label="simple table" stickyHeader>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Code</TableCell>
                                    <TableCell>Description</TableCell>
                                    <TableCell>Price</TableCell>
                                    <TableCell>Qty</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {/*<TableRow>
                                    <TableCell>I001</TableCell>
                                    <TableCell>Mouse</TableCell>
                                    <TableCell>1500</TableCell>
                                    <TableCell>2</TableCell>
                                </TableRow>*/}

                                {this.state.itemTblData.map((row) => (
                                    <TableRow
                                        key={row.code}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell>
                                            {row.code}
                                        </TableCell>
                                        <TableCell>{row.description}</TableCell>
                                        <TableCell>{row.price}</TableCell>
                                        <TableCell>{row.qty}</TableCell>
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

export default withStyles(styleSheet)(Item);