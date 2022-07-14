import {Component} from "react";
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;
        return (<div>Hello World</div>)
    }
}

export default withStyles(styleSheet)(Home);