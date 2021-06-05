    import React,{Component} from 'react';
    import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

    class AiPrediction extends Component {
    render() {
        return (
            <div>
            <div className="jumbotron bg-dark text-light">
                    <div className="container">
                        <h2 className="display-3">Stockfaq</h2>
                            <p className="lead">An AI based Stock predicting model.</p>
                    </div>
            </div>
            <div className="text-white text-center m-4">
                <p>
                    To prepare training dataset for our neural network, we will be using adjusted close stocks price; which also means that we will be aiming to predict future closing price.
                </p>
            </div>
            
            </div>
        )
    }
    }
        


    export default AiPrediction;
