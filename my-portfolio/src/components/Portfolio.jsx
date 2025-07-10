import React from "react";
import {
  Container,
  Navbar,
  Nav,
  Button,
  Card,
  Row,
  Col,
} from "react-bootstrap";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGithub,
  FaLinkedin,
  FaAws,
  FaGitAlt,
} from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const Portfolio = () => {
  return (
    <div
      style={{
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        background: "linear-gradient(to right, #e0eafc, #cfdef3)",
        minHeight: "100vh",
      }}
    >
      {/* Navbar */}
      <Navbar bg="white" expand="lg" fixed="top" className="shadow-sm border-bottom">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold text-dark fs-3">
            Gowtham K
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto fw-medium">
              <ScrollLink to="about" smooth className="nav-link">About</ScrollLink>
              <ScrollLink to="projects" smooth className="nav-link">Projects</ScrollLink>
              <ScrollLink to="skills" smooth className="nav-link">Skills</ScrollLink>
              <ScrollLink to="education" smooth className="nav-link">Education</ScrollLink>
              <ScrollLink to="contact" smooth className="nav-link">Contact</ScrollLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section
        className="d-flex align-items-center justify-content-center text-center"
        style={{
          marginTop: "72px",
          minHeight: "100vh",
          background: "linear-gradient(145deg, #ffffff, #f1f5f9)",
        }}
        id="home"
      >
        <Container>
          <h1 className="display-4 fw-bold text-dark mb-3">Hi, I'm Gowtham 👋</h1>
          <p className="lead text-muted fs-4">Full Stack Developer | MERN & Django</p>
          <p className="text-muted fs-6 mb-4">
            📍 Chennai, Tamil Nadu | 📞 +91-6382444267 | 📧 gowthamk0411@gmail.com
          </p>
          <Button
            size="lg"
            className="px-5 py-2 rounded-pill shadow"
            style={{
              background: "linear-gradient(to right, #4b6cb7, #182848)",
              color: "#fff",
              border: "none",
            }}
            href="#projects"
          >
            Explore My Work
          </Button>
        </Container>
      </section>

      {/* About Section */}
      <section id="about" className="py-5 bg-white">
        <Container>
          <h2 className="text-center mb-4 text-dark fw-bold fs-2">Professional Summary</h2>
          <p className="text-center fs-5 text-muted px-3">
            Passionate Full Stack Developer with hands-on experience building full-fledged applications using the MERN and Django stacks. Strong in clean architecture, secure coding, and solving real-world problems through technology.
          </p>
        </Container>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-5" style={{ background: "#f8f9fc" }}>
        <Container>
          <h2 className="text-center mb-4 text-dark fw-bold fs-2">Technical Skills</h2>
          <Row className="text-center">
            <Col md={4} className="mb-3">
              <Card className="h-100 border-0 shadow-lg rounded-4">
                <Card.Body>
                  <Card.Title className="text-dark fw-semibold fs-5">Frontend & Languages</Card.Title>
                  <Card.Text className="text-muted">
                    <FaReact className="me-2 text-primary" /> React.js, Redux<br />
                    <FaPython className="me-2 text-warning" /> JavaScript, Python, SQL<br />
                    Bootstrap, Axios, Router
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-3">
              <Card className="h-100 border-0 shadow-lg rounded-4">
                <Card.Body>
                  <Card.Title className="text-dark fw-semibold fs-5">Backend & Security</Card.Title>
                  <Card.Text className="text-muted">
                     <FaNodeJs className="me-2 text-success" /> Node.js, Express<br />
                    <FaPython className="me-2 text-warning" /> Django, DRF<br />
                   
                    JWT, 2FA (Speakeasy), Bcrypt
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-3">
              <Card className="h-100 border-0 shadow-lg rounded-4">
                <Card.Body>
                  <Card.Title className="text-dark fw-semibold fs-5">DevOps & Tools</Card.Title>
                  <Card.Text className="text-muted">
                    <FaAws className="me-2 text-warning" /> AWS EC2, Vercel, Netlify<br />
                    <FaGitAlt className="me-2 text-danger" /> Git, GitHub, MongoDB, MySQL
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
              <Card className="h-100 shadow-lg border-0 rounded-4">
                <Card.Body>
                  <Card.Title className="fw-semibold text-dark">Social Media App (MERN + 2FA)</Card.Title>
                  <Card.Text className="text-muted">
                    Real-time platform with JWT & 2FA, React, Node, MongoDB. Secure and scalable chat and post system.
                  </Card.Text>
                  <Button variant="outline-dark" href="https://github.com/Gowtham041104/Majorproject2" target="_blank">
                    View Code
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="h-100 shadow-lg border-0 rounded-4">
                <Card.Body>
                  <Card.Title className="fw-semibold text-dark">E-Commerce Shopping Cart</Card.Title>
                  <Card.Text className="text-muted">
                    Built using Django + React + Redux. Includes full user auth, cart, checkout, admin dashboard.
                  </Card.Text>
                  <Button variant="outline-dark" href="https://github.com/Gowtham041104/majorproject1" target="_blank">
                    View Code
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={12}>
              <Card className="h-100 shadow-lg border-0 rounded-4">
                <Card.Body>
                  <Card.Title className="fw-semibold text-dark">Electricity Board Connection Management</Card.Title>
                  <Card.Text className="text-muted">
                    Admin dashboard with Django + React, CSV import, form validation, and visual analytics (Chart.js).
                  </Card.Text>
                  <Button variant="outline-dark" href="https://github.com/Gowtham041104/electricity-project" target="_blank">
                    View Code
                  </Button>
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
            <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/gowtham-k-589128276/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="me-1" /> linkedin.com/in/gowthamk0411</a></p>
            <p><strong>GitHub:</strong> <a href="https://github.com/Gowtham041104" target="_blank" rel="noopener noreferrer"><FaGithub className="me-1" /> github.com/Gowtham041104</a></p>
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
              <p className="mb-0">Computer Networking – NetworkGeek, Chennai</p>
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
