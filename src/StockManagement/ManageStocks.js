import React, { Component } from 'react';
import Footer from '../Components/FooterComponent';
import Cards from '../Components/CardComponents';
import StockUtils from './StockUtils';
import Chart from '../Components/MainChartComponent';
import Loading from '../Components/LoadingComponent';
import {Input,Container,Jumbotron} from 'reactstrap';
import NewsCard from './Card';
import TableTrend from '../NewsManagement/Trends';
import ParticlesBg from 'particles-bg';



class Stocks extends Component {
    constructor(props) {
        super(props);
        this.state={
            Stock:StockUtils,
            x_val:[],
            y_val:[],
            closed:[],
            high:[],
            low:[],
            wholeLow:[],
            wholeHigh:[],
            wholeClose:[],
            articles:[],
            presetLow:[],
            stock_Name:'FB',
            initial_Name:'Facebook Inc.',
            loading:true,
            presentDate:'',
            stockWhole:[],
            showMore: false,
            showMoreChart:false,


        }
        
    }
    handleClick(val) {
        this.setState({showMore: !val})
    }
    handleChartTable(val){
        this.setState({showMoreChart: !val})
    }
    

    handleChange = (event) => {
        this.setState({loading:true})
        this.handleClick(true);
        this.handleChartTable(true);
        var symbol=event.target.value;
        console.log('what',symbol);
        var i;
        var index;
        for(i=0;i<symbol.length;i++){
            if(symbol[i]==='-'){
                index=i;
                break;
            }
        }
        //callback function......
        this.setState({
            stock_Name: symbol.substring(index+1),
            initial_Name: symbol.substring(0,index)
        }, () => {
            this.Stocker()
            this.getNews()
            console.log("state",this.state.stock_Name);
        })
    };

    componentDidMount(){
        this.Stocker();
        this.getNews();
        

    }

    Stocker(){
        const pointerToThis =this;
        // console.log(pointerToThis);
        const API_Key='X662IPBO4D3M25MX';
        const Stock_Symbol=this.state.stock_Name;
        console.log(Stock_Symbol);
        //we are using backtick so that we can copy API directly here by putting in it
        let API_Call=`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${Stock_Symbol}&outputsize=compact&apikey=${API_Key}`;
        let stocksXval=[];
        let stocksYval=[];
        let presentDate=[];
        let wholeHigh=[];
        let wholeLow=[];
        let wholeClose=[];
        
        fetch(API_Call)
            .then(
                function(
                    response){
                        return response.json();
                })
            .then(
                function(data){
                    var x=1;
                    console.log(data);
                    // this.setState({loading:true});
                    for (var key in data['Time Series (Daily)']){
                        stocksXval.push(key);
                        stocksYval.push(
                            data['Time Series (Daily)'][key]['1. open']
                            );
                            wholeHigh.push(
                                data['Time Series (Daily)'][key]['2. high']
                                );
                                wholeLow.push(
                                    data['Time Series (Daily)'][key]['3. low']
                                    );
                                    wholeClose.push(
                                        data['Time Series (Daily)'][key]['4. close']
                                        );
                            
                            if(x>=1){
                                presentDate.push(key)
                                    x=x-1
                            }
                    }
                    

                    console.log('dates are here',stocksXval);
                    pointerToThis.setState({ 
                        x_val:stocksXval,
                        y_val:stocksYval,
                        presentDate:presentDate,
                        wholeHigh:wholeHigh,
                        wholeLow:wholeLow,
                        wholeClose:wholeClose,
                        loading:false,
                    })
                }
            )
    }

    getNews(){
        const Stock_Name=this.state.initial_Name;
        console.log('Given News Name::',Stock_Name);
        let API_Call=`http://newsapi.org/v2/everything?q=${Stock_Name}&language=en&from=2020-09-16&sortBy=publishedAt&apiKey=f6fed2d1ae0645569fb2f655b9ecdd97`

        fetch(API_Call)
            .then(
                (
                    response)=>{
                        return response.json();
                })
            .then((data)=>{
                console.log('response to what',data);
                this.setState({
                    articles: data.articles
                })
            })
                

    
    }


    render() {

        const{loading} =this.state
        const newsElement =this.state.articles;
        const numberOfItems = this.state.showMore ? newsElement.length : 7;

        const dateVal=this.state.x_val;
        const noOfDate=this.state.showMoreChart ? dateVal.length :21;

        const openVal=this.state.y_val;
        const noOfOpen=this.state.showMoreChart ? openVal.length :21;

        const highVal=this.state.wholeHigh;
        const noOfHigh=this.state.showMoreChart ? highVal.length :21;

        const lowVal=this.state.wholeLow;
        const noOfLow=this.state.showMoreChart ? lowVal.length :21;

        const closeVal=this.state.wholeClose;
        const noOfClose=this.state.showMoreChart ? closeVal.length :21;


        
    
        return (
            
            <div >
            
                <div className="jumbotron jumbotron-fluid bg-dark text-light">
                    <div className="container">
                        <h2 className="display-3">React Stock Market</h2>
                            <p className="lead">A simple stock market API app hello</p>
                                <div className="row">
                                    <div className="col input-group">
                                        <Input className="inputBrand" type="select" name="carbrand" id="carBrand" onChange={this.handleChange} style={{background_color:'red'}} >
                                            <option>Please select a stock</option>
                                            {StockUtils.map((data) => {
                                            return <option key={data.id}>{data.name}-{data.symbol}</option>
                                            })}
                                        </Input>
                                    </div>
                                </div>
                    </div>
                </div>

                <br />
                <br />

                <div className="container-fluid" >
                    <div className="row ">
                        <div className="col-md-7 col-xs-12 col-sm-12 graph_container" >
                            {loading ?<Loading /> :<Chart x_axis={this.state.x_val} y_axis={this.state.y_val} loader={this.state.loading}  />}
                        </div>
                    
                    <div className="col-md-5 col-xs-12 col-sm-12 "> 
                        <h2 style={{align: 'left' ,color:"white",style:'underline'}}>{this.state.initial_Name}</h2>
                                    
                                            <hr  style={{background: "grey",}} />
                                            {loading ?<Loading /> :<Cards  open={this.state.y_val} close={this.state.wholeClose} high={this.state.wholeHigh} low={this.state.wholeLow} date={this.state.presentDate} />}
                                            <hr style={{background: "grey"}}></hr>
                    </div>
                </div>

                        <Container-fluid>
                        
                            <br />        
                                <br />
                            
                            <div className="row mt-4">
                            
                                <div className="col-md-7 col-sm-12" >
                                <div className="row">
                                    <div className="col">
                                    <h2 style={{color: 'white',textAlign: 'justify'}}>Trends</h2>
                                    </div>
                                    <div className="col">
                                    <span>{this.state.showMoreChart ?<button onClick={()=> this.handleChartTable(true)} style={{color:"red"}}>Show Less</button>:<button onClick={()=> this.handleChartTable(false)} style={{color:"red"}}>Show more</button> }</span>
                                    </div>
                                </div>
                                    
                                    
                                    {/* <TableTrend dates={this.state.x_val} open={this.state.y_val} high={this.state.wholeHigh} low={this.state.wholeLow} close={this.state.wholeClose}/> */}
                                    {loading ?<Loading />:  
                                    <div className="container-fluid">
                                            
                                        <div className="row" style={{}}>
                                            <div className="col-xs-3" style={{border: '1px solid',padding:'10px',textAlign: 'center'}} >
                                            <h5 style={{color: 'white' ,textAlign: 'center'}}>Date</h5>
                                            <hr style={{background: "grey"}}/>
                                            {dateVal.slice(0,noOfDate).map((item) => {
                                                    return (
                                                    <div style={{color: 'aqua',padding:'10', margin:'10',fontSize:"2vmin",padding: '10px'}}>{item}</div>
                                                    )
                                                    })
                                                }
                                            </div>
                                            
                                            <div className="col" style={{border: '1px solid',padding:'10px',textAlign: 'center'}}>
                                            <h5 style={{color: 'white' ,textAlign: 'center'}}>open</h5>
                                            <hr style={{background: "grey"}}/>
                                            {openVal.slice(0,noOfOpen).map((item) => {
                                                    return (
                                                    <div style={{color: '#8d93ab',padding:'10', margin:'10',fontSize:"2vmin",padding: '10px'}}>{parseFloat(item).toFixed( 2 )}</div>
                                                    )
                                                    })
                                                }
                                            </div>

                                            <div className="col see" style={{border: '1px solid',padding:'10px',textAlign: 'center'}}>
                                            <h5 style={{color: 'white' ,textAlign: 'center'}}>High</h5>
                                            <hr style={{background: "grey"}}/>
                                            
                                            {highVal.slice(0,noOfHigh).map((item) => {
                                                    return (
                                                    <div style={{padding:'10', margin:'10',marginBottom:'100',fontSize:"2vmin",padding: '10px',color: '#8d93ab'}}>{parseFloat(item).toFixed( 2 )}</div>
                                                    )
                                                    })
                                                }
                                            </div>

                                            <div className="col" style={{border: '1px solid',padding:'10px',textAlign: 'center'}}>
                                            <h5 style={{color: 'white' }}>Low</h5>
                                            <hr style={{background: "grey"}}/>
                                            {lowVal.slice(0,noOfLow).map((item) => {
                                                    return (
                                                    <div style={{color: '#8d93ab',padding:'10', margin:'10',fontSize:"2vmin",padding: '10px'}}>{parseFloat(item).toFixed( 2 )}</div>
                                                    )
                                                    })
                                                }
                                            </div>

                                            <div className="col" style={{border: '1px solid',padding:'10px'}}>
                                            <h5 style={{color: 'white' ,textAlign: 'center'}}>Close</h5>
                                            <hr style={{background: "grey"}}/>
                                            {closeVal.slice(0,noOfClose).map((item) => {
                                                    return (
                                                    <div style={{color: '#8d93ab',fontSize:"2vmin",padding: '10px'}}>{parseFloat(item).toFixed( 2 )}</div>
                                                    )
                                                    })
                                                }
                                            </div>
                                            
                                            
                                        </div>
                                                
                                                    
                                                
                                        
                                                
                                                
                    </div>
                    }
                                </div>
                                <div className="col-md-5 col-sm-12" >
                                    <h2 style={{color: 'white',textAlign: 'justify'}}>News</h2>
                                    {/* <NewsCard newsArticle={this.state.articles} /> */}
                                    <div className="container-fluid">
                        {newsElement.slice(0,numberOfItems).map((item,index)=>
                                        <div className="col" style={{border: "0.2px solid", color: "#ffffff" ,marginBottom: "20px"}}>
                                            <div className="row">
                                                <div className="col-sm-4 col-xs-4" >
                                                    <img src={item.urlToImage} style={{width:'100%',maxHeight:"100px",objectFit:'contain',verticalAlign: "middle",margin:'10px'}} />
                                                </div>
                                                        <div className="col-sm-8 col-xs-8" style={{}} >
                                                        
                                                            <h6 style={{color: '#dee4e7', textAlign:'justify',padding:'15px',paddingLeft:'0px'}}>{item.title}</h6>
                                                            
                                                            <p></p>
                                                        </div>
                                                        <hr style={{background:'grey'}} />
                                            </div>
                                        </div>
                                                )}
                                                {this.state.showMore ?<button onClick={()=> this.handleClick(true)} style={{color:"red"}}>Show Less</button>:<button onClick={()=> this.handleClick(false)} style={{color:"red"}}>Show more</button> }
                                            </div>
                                </div>
                            </div>
                            </Container-fluid>
                        
                    <Footer/>
                    </div>
            
            </div>      
);
        }
}
export default Stocks;
