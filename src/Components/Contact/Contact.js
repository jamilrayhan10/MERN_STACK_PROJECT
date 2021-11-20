import React from "react";
import "./Contact.css";
import { Col, Form, Row, Button } from "react-bootstrap";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

const Contact = () => {
  return (
    <>
      <Header></Header>
      <div className="contact">
        <div className="contactForm w-50 m-auto my-5 border p-3">
          <h2 className="py-4 fw-bold text-center border-bottom mb-5">
            <span className="text-info">Contact</span> us
          </h2>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  className="contact_form"
                  type="email"
                  placeholder="Enter email"
                  required
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  className="contact_form"
                  type="password"
                  placeholder="Password"
                  required
                />
              </Form.Group>
              <Form.Group
                className="my-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label> Message</Form.Label>
                <Form.Control
                  placeholder="Your message"
                  className="text_area"
                  as="textarea"
                  rows={4}
                />
              </Form.Group>
            </Row>

            <Button className="w-25 py-2" variant="primary" type="submit">
              Send
            </Button>
          </Form>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Contact;
