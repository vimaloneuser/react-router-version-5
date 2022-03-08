import React from "react"
import { Container, Row, Col } from "reactstrap";
import Config from './../../constants/config';

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <Container fluid={true}>
          <Row>
            <Col md={6}>{new Date().getFullYear()} © {Config.copyright}</Col>
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  )
}

export default Footer
