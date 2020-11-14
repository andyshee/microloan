import React from 'react';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }
    render() {
        return <Container>
            {/* Stack the columns on mobile by making one full-width and the other half-width */}
            <Row>
                <Col xs={5}>
                    5
          </Col>
                <Col xs={7}>
                    7
          </Col>
            </Row>
        </Container>;
    }
}