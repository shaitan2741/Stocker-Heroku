import React,{Fragment} from 'react';
import Plot from 'react-plotly.js';
import { withWindowSizeListener } from 'react-window-size-listener';
import Loading from './LoadingComponent';
import '../App.css';


class Chart extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            loading:false,
            width:2000,
            height:1500,
		}
    }
    
    updateDimensions() {
        
        
        if(window.innerWidth >1500){
            this.setState({ width:700,height: 550})
            console.log('very big width',this.state.width,this.state.height);
            
        }
        if(window.innerWidth >1112){
            this.setState({ width:600,height: 480})
            console.log('window width is extremyl appropiate',this.state.width,this.state.height);
            
        }
        if(window.innerWidth >=1000 ){
            this.setState({ width:550,height: 450})
            console.log('window width is appropiate',window.innerWidth);
            console.log('window',this.state.width,this.state.height);

            

        }
        else if(window.innerWidth<1099 && window.innerWidth>930){
            console.log('not appropiate size',window.innerWidth);
            this.setState({ width:550,height: 450})
            console.log(this.state.width,this.state.height);
        }
        else if(window.innerWidth<930 && window.innerWidth>750){
            console.log('not appropiate size',window.innerWidth);
            this.setState({ width:400,height: 450})
            console.log(this.state.width,this.state.height);
        }
        else{
            this.setState({ width:window.innerWidth-50,height: 400})
            console.log(this.state.width,this.state.height);
        }


    }
    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
        
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    render() {
		console.log(this.props);
		
		{
        return(
            
            
        <Plot
            data={[
                {
                    x: this.props.x_axis,
            y: this.props.y_axis,
            
            
                        type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
                }
            ]}
            
            layout={{
                autosize: true,
                // margin:dict(t=0,b=0,l=0,r=0),
				margin: {
					l: 30,
					r: 0,
					b: 30,
					t: 15,
					pad: 4
					},
                
                paper_bgcolor:'#121212',
    		plot_bgcolor:'#121212',
                    color:'#121212',
                    width:this.state.width,
                    height:this.state.height,
                    position:'inherit',
                    
                    title: this.props,}}

                    
                    />


        );

        

    
    
    };


    }
    
}      


export default Chart;
