import {Component} from "react";
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import Button from "@mui/material/Button";
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
//import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import CustomSnackBars from "../../components/common/SnakBar"
import PostService from "../../services/PostService";
//import { DataGrid } from '@mui/x-data-grid';
import CommonDataTable from "../../components/common/Table";

class Trail extends Component{
    constructor(props) {
        super(props);
        this.state = {
          formData: {
            userId: "",
            title: "",
            id: "",
            body: "",
          },
          alert: false,
          message: '',
          severity: '',

        //  for table
        data:[],
        loaded:false,

        //  for data table
        columns:[
            {
                field:'id',
                headerName:'Post ID',
                width:70
            },

            {
                field:'userId',
                headerName:'User Id',
                width:130
            },

            {
                field:'title',
                headerName:'Title',
                width:500,
                sortable:false
            },

            {
                field:'body',
                headerName:'Body',
                width:1000
            }
        ]

        }
    }


    async loadData(){
        let resp = await PostService.fetchPosts();
        if(resp.status === 200){
            this.setState({
                loaded:true,
                data:resp.data
            })
            console.log(this.state.data);
            // console.log(JSON.stringify(resp.data));
        }else{
            console.log("error "+resp);
        }
    }

    componentDidMount(){
        this.loadData();
        console.log("Mounted")
    }

    componentWillUnmount(){
        console.log("unmount");
    }




    handleChange = (event) => {
        let id = event.target.name;
        switch (id) {
          case "userId":
            const userId = event.target.value;
            this.setState(
              Object.assign(this.state.formData, { userId: userId })
            );
            // this.setState({ userId });
            break;

          case "title":
            const title = event.target.value;
            this.setState(Object.assign(this.state.formData, { title: title }));
            break;

          case "id":
            const id = event.target.value;
            this.setState(Object.assign(this.state.formData, { id: id }));
            break;

          case "body":
            const body = event.target.value;
            this.setState(Object.assign(this.state.formData, { body: body }));
            break;

          default:
            break;
        }
    }

    handleSubmit = async () => {
        // your submit logic
        console.log(this.state.formData);
        let formData = this.state.formData
        let response = await PostService.createPost(formData);
        if (response.status === 201) {
            this.setState({
                alert:true,
                message:'Post Created',
                severity:'success'
            })
        }else{
            this.setState({
                alert:true,
                message:'Post Not Created',
                severity:'error'
            })
        }
        console.log(this.state);
    }


    render() {
        const {classes} = this.props;
        return (
          <div className={classes.container}>
            <ValidatorForm
              ref="form"
              onSubmit={this.handleSubmit}
              onError={(errors) => console.log(errors)}
            >
              <div className={classes.form_div}>
                <TextValidator
                  label="UserID"
                  onChange={this.handleChange}
                  name="userId"
                  value={this.state.formData.userId}
                  validators={["required", "isPositive"]}
                  errorMessages={[
                    "this field is required",
                    "email is not valid",
                  ]}
                />

                <TextValidator
                  label="Title"
                  onChange={this.handleChange}
                  name="title"
                  value={this.state.formData.title}
                  validators={["required"]}
                  errorMessages={[
                    "this field is required",
                    "email is not valid",
                  ]}
                />

                <TextValidator
                  label="ID"
                  onChange={this.handleChange}
                  name="id"
                  value={this.state.formData.id}
                  validators={["required", "isPositive"]}
                  errorMessages={[
                    "this field is required",
                    "email is not valid",
                  ]}
                />

                <TextValidator
                  label="Body"
                  onChange={this.handleChange}
                  name="body"
                  value={this.state.formData.body}
                  validators={["required"]}
                  errorMessages={[
                    "this field is required",
                    "email is not valid",
                  ]}
                />
              </div>

              <div className={classes.btn_div}>
                <Button variant="contained" size="large" type="submit">
                  Submit
                </Button>
              </div>
            </ValidatorForm>

            <div className={classes.table_container}>
              {/* <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>User ID</TableCell>
                                    <TableCell>Title</TableCell>
                                    <TableCell>ID</TableCell>
                                    <TableCell>Body</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                
                            </TableBody>
                        </Table>
                    </TableContainer> */}

              <div className={classes.cTbl}>
              <CommonDataTable
                columns={this.state.columns}
                rows={this.state.data}
                rowsPerPageOptions={5}
                pageSize={10}
                // checkboxSelection={true}
              />
              </div>

            </div>
            <CustomSnackBars
              open={this.state.alert}
              onClose={() => {
                this.setState({ alert: false });
              }}
              message={this.state.message}
              autoHideDuration={3000}
              severity={this.state.severity}
              varient="filled"
            />
          </div>
        );
    }
}
export default withStyles(styleSheet)(Trail);