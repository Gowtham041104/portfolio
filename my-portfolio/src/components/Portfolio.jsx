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
          <h1 className="display-3 fw-bold text-dark mb-3">Hi, I'm Gowtham</h1>
          <p className="lead text-muted mb-2">Full Stack Developer | MERN & Django | React | Node.js</p>
          <p className="text-muted fs-5">📍 Chennai, Tamil Nadu | 📞 +91-6382444267 | 📧 gowthamk0411@gmail.com</p>
          <Button variant="dark" size="lg" href="#projects" className="mt-3 px-5 py-2 shadow-sm">Explore My Work</Button>
        </Container>
      </section>

      {/* About Section */}
      <section id="about" className="py-5 bg-white">
        <Container>
          <h2 className="text-center mb-4 text-dark fw-bold fs-2">Professional Summary</h2>
          <p className="text-center fs-5 text-muted">
            A passionate and results-driven engineering graduate with strong foundations in full-stack development. Experienced with the MERN stack and Django-React ecosystems. Adept at building scalable web applications, collaborating with teams, and continuously exploring emerging technologies.
          </p>
        </Container>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-4 text-dark fw-bold fs-2">Technical Skills</h2>
          <Row className="text-center">
            <Col md={4} className="mb-3">
              <Card className="h-100 border-0 shadow-sm rounded-4">
                <Card.Body>
                  <Card.Title className="text-dark fw-semibold fs-5">Languages & Frontend</Card.Title>
                  <Card.Text className="text-muted">
                    JavaScript (ES6+), Python, SQL<br />React.js, Redux, React Router, Axios, Bootstrap
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-3">
              <Card className="h-100 border-0 shadow-sm rounded-4">
                <Card.Body>
                  <Card.Title className="text-dark fw-semibold fs-5">Backend & Security</Card.Title>
                  <Card.Text className="text-muted">
                    Node.js, Express.js, Django, DRF<br />JWT, OAuth2, 2FA (Speakeasy), Bcrypt
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-3">
              <Card className="h-100 border-0 shadow-sm rounded-4">
                <Card.Body>
                  <Card.Title className="text-dark fw-semibold fs-5">DevOps & Tools</Card.Title>
                  <Card.Text className="text-muted">
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
          <h2 className="text-center mb-4 text-dark fw-bold fs-2">Education</h2>
          <Row className="justify-content-center">
            <Col md={8}>
              <ul className="list-group list-group-flush fs-6">
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
          <h2 className="text-center mb-5 text-dark fw-bold fs-2">Projects</h2>
          <Row>
            <Col md={6} className="mb-4">
              <Card className="h-100 shadow-sm border-0 rounded-4">
                <Card.Body>
                  <Card.Title className="fw-semibold text-dark">Social Media App (MERN + 2FA)</Card.Title>
                  <Card.Text className="text-muted">
                    Secure social platform using Node.js, Express, MongoDB, and React. Implemented JWT and two-factor auth with Speakeasy. Features include real-time chat, posts, and profiles.
                  </Card.Text>
                  <Button variant="outline-dark" href="https://github.com/Gowtham041104/majorproject1" target="_blank">View Code</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="h-100 shadow-sm border-0 rounded-4">
                <Card.Body>
                  <Card.Title className="fw-semibold text-dark">E-Commerce Shopping Cart</Card.Title>
                  <Card.Text className="text-muted">
                    Built with React, Redux, and Django REST. Includes authentication, admin dashboard, cart functionality, and order management.
                  </Card.Text>
                  <Button variant="outline-dark" href="https://github.com/Gowtham041104/book-library" target="_blank">View Code</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={12}>
              <Card className="h-100 shadow-sm border-0 rounded-4">
                <Card.Body>
                  <Card.Title className="fw-semibold text-dark">Electricity Board Connection Management</Card.Title>
                  <Card.Text className="text-muted">
                    Full-stack solution using Django and React. Features: bulk CSV upload, searchable tables, form validation, and analytics with Chart.js.
                  </Card.Text>
                  <Button variant="outline-dark" href="https://github.com/Gowtham041104/electricity-project" target="_blank">View Code</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5 bg-white">
        <Container>
          <h2 className="text-center mb-4 text-dark fw-bold fs-2">Contact</h2>
          <div className="text-center text-muted fs-6">
            <p><strong>Email:</strong> gowthamk0411@gmail.com</p>
            <p><strong>Phone:</strong> +91-6382444267</p>
            <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/gowthamk0411" target="_blank" rel="noopener noreferrer">linkedin.com/in/gowthamk0411</a></p>
            <p><strong>GitHub:</strong> <a href="https://github.com/Gowtham041104" target="_blank" rel="noopener noreferrer">github.com/Gowtham041104</a></p>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="text-center py-5 bg-dark text-white border-top">
        <Container>
          <Row className="justify-content-center">
            <Col md={4} className="mb-3">
              <h5 className="text-uppercase mb-3">Languages</h5>
              <p className="mb-0">Tamil, English</p>
            </Col>
            <Col md={4} className="mb-3">
              <h5 className="text-uppercase mb-3">Certifications</h5>
              <p className="mb-0">MERN Stack, Django & React Full Stack, DSA (Ongoing)</p>
            </Col>
            <Col md={4} className="mb-3">
              <h5 className="text-uppercase mb-3">Workshops</h5>
              <p className="mb-0">Basics of Computer Networking — NetworkGeek, Chennai</p>
            </Col>
          </Row>
          <hr className="border-top border-secondary mt-4" />
          <p className="mb-0">&copy; 2025 <strong>Gowtham K</strong>. All rights reserved.</p>
        </Container>
      </footer>
    </div>
  );
};

export default Portfolio;