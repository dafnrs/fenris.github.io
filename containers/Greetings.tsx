import React, { useEffect } from "react";
import { greetings } from "../portfolio";
import { Button, Container, Row, Col } from "reactstrap";
import SocialLinks from "../components/SocialLinks";

const Greetings = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement!.scrollTop = 0;
  });

  return (
    <main>
      <section className="hero-section">
        <Container className="py-lg-md d-flex align-items-center">
          <div className="col px-0">
            <Row className="align-items-center">
              <Col lg="6">
                <h1 className="display-3">{greetings.title + " "}</h1>
                <p className="lead">{greetings.description}</p>
                <SocialLinks />
                {greetings.resumeLink && (
                  <div className="btn-wrapper my-4">
                    <Button
                      className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                      color="default"
                      href={greetings.resumeLink}
                    >
                      <span className="btn-inner--icon mr-1">
                        <i className="fa fa-file" />
                      </span>
                      <span className="btn-inner--text">See My Resume</span>
                    </Button>
                  </div>
                )}
              </Col>
              <Col lg="6" className="text-center">
                <img
                  src="/favicon.png"
                  alt="Fenris"
                  className="img-fluid hero-logo"
                  style={{ maxWidth: "260px" }}
                />
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Greetings;
