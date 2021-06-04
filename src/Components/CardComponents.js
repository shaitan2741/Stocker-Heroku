    import React,{Component} from 'react';
    
    import Chart from '../Components/MainChartComponent';

    import {
    CardBody,CardSubtitle
    } from 'reactstrap';
    import {RiSunFill}from "react-icons/ri";
    import {MdTrendingUp}from "react-icons/md";
    import {MdTrendingDown}from "react-icons/md";
    import {RiMoonClearFill}from "react-icons/ri";
    class Cards extends Component{
        render() {
            console.log("card",this.props);
            return (
                <div  >
                
                <br />
                
                <div style={{color:"white"}}>
                
                    <CardSubtitle><RiSunFill color="yellow" />&nbsp;OPEN</CardSubtitle>
                    <h2>﹩{this.props.open[0]}</h2>
                    <br />
                    <div className="row">
                        <div className="col xs-3">
                            <p style={{fontFamily:'sans-serif'}}><MdTrendingUp color="green" size="20" />&nbsp;High</p>
                            <p>﹩{this.props.high[0] }</p>
                        </div>
                        <div className="col xs-3" >
                            <p style={{fontFamily:'sans-serif'}}><MdTrendingDown color="red" size="20" />&nbsp;Low</p>
                            <p>﹩{this.props.low[0]}</p>
                        </div>
                        <div className="col xs-3" >
                            <p style={{fontFamily:'sans-serif'}}><RiMoonClearFill color="silver" size="20" />&nbsp;Close</p>
                            <p>﹩{this.props.close[0]}</p>
                        </div>

                    </div>
                    

                    <div className="row">
                    <div className="col-12 xs-6">
                        <p style={{color: "grey"}}>Last updated at <p style={{color:'#f7d2a5'}}>{new Date(this.props.date).toString()}</p></p>
                    </div>
                    </div>
                    
                </div>
                </div>
            );
        }
    
    
}
    export default Cards;