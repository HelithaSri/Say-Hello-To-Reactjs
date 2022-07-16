import {Component} from "react";
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;
        return (
          <div className={classes.container}>
            <div className={classes.subContainer}>
              <Link className={classes.link} to={"/login"}>
                <Button variant="contained" size="large">
                  Login
                </Button>
              </Link>

              <Link className={classes.link} to={"/dashboard"}>
                <Button variant="contained" size="large">
                  Dashboard
                </Button>
              </Link>

              <Link className={classes.link} to={"/customer"}>
                <Button variant="contained" size="large">
                  Customer
                </Button>
              </Link>

              <Link className={classes.link} to={"/item"}>
                <Button variant="contained" size="large">
                  Item
                </Button>
              </Link>

              <Link className={classes.link} to={"/post"}>
                <Button variant="contained" size="large">
                  Post
                </Button>
              </Link>

              <Link className={classes.link} to={"/*"}>
                <Button variant="contained" size="large">
                  Not Found
                </Button>
              </Link>
            </div>
          </div>
        );
    }
}

export default withStyles(styleSheet)(Home);