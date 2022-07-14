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
            gender: [{label: 'Male'}, {label: 'Female'}]
        }
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
                        <TextField id="outlined-basic" label="Code" variant="outlined"/>
                        <TextField id="outlined-basic" label="Description" variant="outlined"/>
                    </div>
                    <div className={classes.txt_div}>
                        <TextField id="outlined-basic" label="Price" type='number' variant="outlined"/>
                        <TextField id="outlined-basic" label="Qty" type='number' variant="outlined"/>
                    </div>
                </div>
                <div className={classes.btn_div}>
                    <Button size="large" color={"error"} variant="outlined">Clear</Button>
                    <Button size="large" variant="outlined">Save</Button>
                </div>

                <div>
                    <TableContainer component={Paper}>
                        <Table sx={{minWidth: 650}} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Code</TableCell>
                                    <TableCell>Description</TableCell>
                                    <TableCell>Price</TableCell>
                                    <TableCell>Qty</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>I001</TableCell>
                                    <TableCell>Mouse</TableCell>
                                    <TableCell>1500</TableCell>
                                    <TableCell>2</TableCell>
                                </TableRow>

                                {/*{rows.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.calories}</TableCell>
                                        <TableCell align="right">{row.fat}</TableCell>
                                        <TableCell align="right">{row.carbs}</TableCell>
                                        <TableCell align="right">{row.protein}</TableCell>
                                    </TableRow>
                                ))}*/}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>

            </div>
        </div>)
    }

}

export default withStyles(styleSheet)(Item);