import {Component} from "react";
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import Button from "@mui/material/Button";
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";


class Trail extends Component{
    constructor(props) {
        super(props);
        this.state={
            userId:'',
            title:'',
            id:'',
            body:''
        }
    }
    handleChange = (event) => {
        let id = event.target.name;
        switch (id) {
            case "userId":
                const userId = event.target.value;
                this.setState({ userId });
                break;

            case "title":
                const title = event.target.value;
                this.setState({ title });
                break;

            case "id":
                const id = event.target.value;
                this.setState({ id });
                break;

            case "body":
                const body = event.target.value;
                this.setState({ body });
                break;
        }
    }

    handleSubmit = () => {
        // your submit logic
        console.log(this.state.post);
    }

    render() {
        const {classes} = this.props;
        return(<div className={classes.container}>

                    <ValidatorForm
                        ref="form"
                        onSubmit={this.handleSubmit}
                        onError={errors => console.log(errors)}
                    >
                        <div className={classes.form_div}>
                        <TextValidator
                            label="UserID"
                            onChange={this.handleChange}
                            name="userId"
                            value={this.state.userId}
                            validators={['required', 'isEmail']}
                            errorMessages={['this field is required', 'email is not valid']}
                        />

                        <TextValidator
                            label="Title"
                            onChange={this.handleChange}
                            name="title"
                            value={this.state.title}
                            validators={['required', 'isEmail']}
                            errorMessages={['this field is required', 'email is not valid']}
                        />

                        <TextValidator
                            label="ID"
                            onChange={this.handleChange}
                            name="id"
                            value={this.state.id}
                            validators={['required', 'isEmail']}
                            errorMessages={['this field is required', 'email is not valid']}
                        />

                        <TextValidator
                            label="Body"
                            onChange={this.handleChange}
                            name="body"
                            value={this.state.body}
                            validators={['required', 'isEmail']}
                            errorMessages={['this field is required', 'email is not valid']}
                        />

                        </div>

                        <div className={classes.btn_div}>
                            <Button size="large" type="submit">Submit</Button>
                        </div>


                    </ValidatorForm>

            </div>
        )
    }
}
export default withStyles(styleSheet)(Trail);