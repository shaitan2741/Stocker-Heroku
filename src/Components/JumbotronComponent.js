import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

    const Example = (props) => {
    return (
            <Jumbotron fluid style={{background:'#121212',marginBottom:'0'}}>
    <Container>
        <h3 style={{color: 'white'}}>Fluid jumbotron</h3>
        <p>
        This is a modified jumbotron that occupies the entire horizontal space of
        its parent.
        </p>
    </Container>
    </Jumbotron>
    );
    };

export default Example;