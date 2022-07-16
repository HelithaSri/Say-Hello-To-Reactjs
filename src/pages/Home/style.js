import { border, borderRadius, height } from "@mui/system";

export const styleSheet ={

    container:{
        display:'flex',
        height:'100vh',
        width:'100vw',
        gap:'50px',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        alignContent:'space-around',
        backgroundColor:'#181818',
    }

    ,subContainer:{
        display:'flex',
        flexWrap:'wrap',
        alignContent:'space-around',
        justifyContent:'space-evenly',
        // backgroundColor:'red',
        padding:'0px',
        height:'35%',
        width:'55%',
        border:"1px solid white",
        borderRadius:'15px'
    }

}