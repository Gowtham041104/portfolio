import React from "react";
import { Container, Navbar, Nav, Button, Card, Row, Col } from "react-bootstrap";

const Portfolio = () => {
  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", backgroundColor: "#f9f9f9" }}>
      {/* Header */}
      <Navbar bg="white" expand="lg" fixed="top" className="shadow-sm border-bottom">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold text-dark fs-3">Gowtham K</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto fw-medium">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#education">Education</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section className="text-center d-flex align-items-center justify-content-center" style={{ marginTop: "72px", minHeight: "100vh", background: "linear-gradient(135deg, #ffffff, #f0f4f8)" }}>
        <Container>
          <h1 className="display-4 fw-bold text-dark mb-3">Hello, I'm Gowtham</h1>
          <p className="lead text-muted mb-2">Full Stack Developer | MERN & Django | React | Node.js</p>
          <p className="text-muted">Chennai, Tamil Nadu | 📞 +91-6382444267 | 📧 gowthamk0411@gmail.com</p>
          <Button variant="dark" size="lg" href="#projects" className="mt-3 px-4">Explore My Work</Button>
        </Container>
      </section>

      {/* About Section */}
      <section id="about" className="py-5 bg-white">
        <Container>
          <h2 className="text-center mb-4 text-dark">Professional Summary</h2>
          <p className="text-center fs-5 text-muted">
            Engineering graduate with hands-on experience in building scalable web applications using modern technologies. Proficient in both MERN and Django-React stacks. Eager to contribute to a dynamic development team by leveraging my technical expertise, creative problem-solving abilities, and passion for continuous learning.
          </p>
        </Container>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-4 text-dark">Technical Proficiencies</h2>
          <Row className="text-center">
            <Col md={4} className="mb-3">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body>
                  <Card.Title className="text-dark fw-semibold">Languages & Frontend</Card.Title>
                  <Card.Text>
                    JavaScript (ES6+), Python, SQL<br />React.js, Redux, React Router, Axios, Bootstrap
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-3">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body>
                  <Card.Title className="text-dark fw-semibold">Backend & Security</Card.Title>
                  <Card.Text>
                    Node.js, Express.js, Django, DRF<br />JWT, OAuth2, 2FA (Speakeasy), Bcrypt
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-3">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body>
                  <Card.Title className="text-dark fw-semibold">DevOps & Tools</Card.Title>
                  <Card.Text>
                    MongoDB, MySQL<br />Git, GitHub, Netlify, Vercel, AWS EC2, CI/CD basics
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Education Section */}
      <section id="education" className="py-5 bg-white">
        <Container>
          <h2 className="text-center mb-4 text-dark">Academic Background</h2>
          <Row className="justify-content-center">
            <Col md={8}>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>B.E. in Electronics and Communication (2021–2025)</strong><br />
                  S.A. Engineering College, Chennai — Anna University<br />
                  CGPA: 7.8 / 10
                </li>
                <li className="list-group-item">
                  <strong>HSC – 2021</strong><br />
                  St. John’s MHSS, Chennai — 75%
                </li>
                <li className="list-group-item">
                  <strong>SSLC – 2019</strong><br />
                  St. John’s MHSS, Chennai — 66%
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5 text-dark">Key Projects</h2>
          <Row>
            <Col md={6} className="mb-4">
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <Card.Title className="fw-semibold text-dark">Social Media App (MERN + 2FA)</Card.Title>
                  <Card.Text className="text-muted">
                    Secure social platform built using Node.js, Express, MongoDB, and React. Integrated JWT and two-factor authentication using Speakeasy. Includes real-time messaging, post interactions, and user profiles.
                  </Card.Text>
                  <Button variant="outline-dark" href="https://github.com/Gowtham041104/majorproject1" target="_blank">View Code</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <Card.Title className="fw-semibold text-dark">E-Commerce Shopping Cart</Card.Title>
                  <Card.Text className="text-muted">
                    Complete shopping experience using React, Redux, and Django REST Framework. Features include user authentication, cart and checkout flow, admin dashboard, and product/order management.
                  </Card.Text>
                  <Button variant="outline-dark" href="https://github.com/Gowtham041104/majorproject1" target="_blank">View Code</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={12}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <Card.Title className="fw-semibold text-dark">Electricity Board Connection Management</Card.Title>
                  <Card.Text className="text-muted">
                    Developed with Django and React, including CSV upload, searchable/filterable data tables, validations, and visual analytics using Chart.js.
                  </Card.Text>
                   <Button variant="outline-dark" className="text-align-center" href="https://github.com/Gowtham041104/electricity-project" target="_blank">View Code</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5 bg-white">
        <Container>
          <h2 className="text-center mb-4 text-dark">Get in Touch</h2>
          <div className="text-center text-muted">
            <p><strong>Email:</strong> gowthamk0411@gmail.com</p>
            <p><strong>Phone:</strong> +91-6382444267</p>
            <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/gowtham-k-589128276/" target="_blank" rel="noopener noreferrer">linkedin.com/in/gowthamk0411</a></p>
            <p><strong>GitHub:</strong> <a href="https://github.com/Gowtham041104" target="_blank" rel="noopener noreferrer">github.com/Gowtham041104</a></p>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="text-center py-4 bg-dark text-white">
        <Container>
          <p className="mb-1">Languages: Tamil, English</p>
          <p className="mb-1">Certifications: MERN Stack, Django & React Full Stack, DSA (Ongoing)</p>
          <p className="mb-1">Workshops: Computer Networking — NetworkGeek, Chennai</p>
          <p className="mb-0">&copy; 2025 Gowtham K. All rights reserved.</p>
        </Container>
      </footer>
    </div>
  );
};

export default Portfolio;
