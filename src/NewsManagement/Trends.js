import React ,{Component} from 'react';
import '../cards.css';

class TableTrend extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        const open1='1. open';

        return(

                    <div className="container-fluid">
                        
                                        <div className="row" style={{}}>
                                            <div className="col" style={{border: '1px solid'}} >
                                            <h5>Date</h5>
                                            <hr style={{background: "grey"}}/>
                                            {this.props.dates.map((item) => {
                                                    return (
                                                    <div style={{color: 'aqua',padding:'10', margin:'10'}}>{item}</div>
                                                    )
                                                    })
                                                }
                                            </div>
                                            
                                            <div className="col" style={{border: '1px solid'}}>
                                            <h5>open</h5>
                                            <hr style={{background: "grey"}}/>
                                            {this.props.open.map((item) => {
                                                    return (
                                                    <div style={{color: 'red',padding:'10', margin:'10'}}>{parseFloat(item).toFixed( 2 )}</div>
                                                    )
                                                    })
                                                }
                                            </div>

                                            <div className="col see" style={{border: '1px solid'}}>
                                            <h5>High</h5>
                                            <hr style={{background: "grey"}}/>
                                            
                                            {this.props.high.map((item) => {
                                                    return (
                                                    <div style={{padding:'10', margin:'10',marginBottom:'100'}}>{parseFloat(item).toFixed( 2 )}</div>
                                                    )
                                                    })
                                                }
                                            </div>

                                            <div className="col" style={{border: '1px solid'}}>
                                            <h5>Low</h5>
                                            <hr style={{background: "grey"}}/>
                                            {this.props.low.map((item) => {
                                                    return (
                                                    <div style={{color: 'red',padding:'10', margin:'10'}}>{parseFloat(item).toFixed( 2 )}</div>
                                                    )
                                                    })
                                                }
                                            </div>

                                            <div className="col" style={{border: '1px solid'}}>
                                            <h5>Close</h5>
                                            <hr style={{background: "grey"}}/>
                                            {this.props.close.map((item) => {
                                                    return (
                                                    <div style={{color: '#8d93ab'}}>{parseFloat(item).toFixed( 2 )}</div>
                                                    )
                                                    })
                                                }
                                            </div>
                                        </div>
                                        
                                                    
                                                
                                        
                                                
                                                
                    </div>
        )
    }

}
export default TableTrend;

