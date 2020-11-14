class Welcome extends React.Component {
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