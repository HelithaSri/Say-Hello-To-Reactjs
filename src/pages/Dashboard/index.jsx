import {Component} from "react";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";
import {Card, CardActions, CardContent, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";

class Dashboard extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;

        return(
            <div className={classes.container}>
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

                    <div>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Word of the Day
                                </Typography>
                                <Typography variant="h5" component="div">
                                    lent
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    adjective
                                </Typography>
                                <Typography variant="body2">
                                    well meaning and kindly.
                                    <br />
                                    {'"a benevolent smile"'}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </div>
                    <div>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Daily Profit
                                </Typography>
                                <Typography variant="h5" component="div">
                                    90%
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    lorem
                                </Typography>
                                <Typography variant="body2">
                                    well meaning and kindly.
                                    <br />
                                    {'"a benevolent smile"'}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </div>
                    <div>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Word of the Day
                                </Typography>
                                <Typography variant="h5" component="div">
                                    lent
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    adjective
                                </Typography>
                                <Typography variant="body2">
                                    well meaning and kindly.
                                    <br />
                                    {'"a benevolent smile"'}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </div>
                    <div>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Daily Profit
                                </Typography>
                                <Typography variant="h5" component="div">
                                    90%
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    lorem
                                </Typography>
                                <Typography variant="body2">
                                    well meaning and kindly.
                                    <br />
                                    {'"a benevolent smile"'}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </div>

                </div>
            </div>
        )
    }

}
export default withStyles(styleSheet)(Dashboard);