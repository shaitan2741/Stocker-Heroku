import React ,{Component} from 'react';
import '../cards.css';

class NewsCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        
        return(

                    <div className="container-fluid">
                        {this.props.newsArticle.map((item,index)=>
                                        <div className="center-col" style={{border: "0.2px dotted", color: "#ffffff" ,marginBottom: "20px"}}>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <img src={item.urlToImage} style={{height:'100px'}} />
                                                </div>
                                                        <div className="col-sm-6" >
                                                            <h6 style={{color: 'red', align:'justify'}}>{item.title}</h6>
                                                            <p>{item.description}</p>
                                                        </div>
                                                        <hr style={{background:'grey'}} />
                                            </div>
                                        </div>
                                                )}
                                            </div>
        )
    }

}
export default NewsCard;
