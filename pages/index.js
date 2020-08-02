import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {Container, Row, Col, Form, Button, Card, CardGroup, Navbar, Nav} from 'react-bootstrap';
import Particles from 'react-particles-js';
import {Link} from 'react-scroll';

export default function Home() {
  return (
    <>
      <Head>
        <title>Krisha Escano</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon_io/favicon-16x16.png" />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Montserrat:wght@400;500;700&family=Noto+Sans+JP:wght@400;500;700&display=swap" rel="stylesheet"/>
        <script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>
      </Head> 


      <Navbar fixed="top" bg="light" expand="lg" id="mainNav">
        <Navbar.Brand href="#home">
          <img className="logo float-left" src="./krishalogo.png" alt="mylogo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto my-lg-0">
            <Nav.Link className="navLink js-scroll-trigger" href="#landing-page">Home</Nav.Link>
            <Nav.Link className="navLink js-scroll-trigger" href="#about">About</Nav.Link>
            <Nav.Link className="navLink js-scroll-trigger" href="#project">Project</Nav.Link>
            <Nav.Link className="navLink js-scroll-trigger" href="#getintouch">Contact</Nav.Link>
            <Nav.Link className="navLink js-scroll-trigger" href="日本語">日本語</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>      

      <section data-aos="fade-up" id="landing-page" className="homepage Home">
      <Particles className="particles"
        params={{
          particles: {
    number: {
      value: 400,
      density: {
        enable: true,
        area: 800
      }
    },
    color: {
      value: ["#BD10E0", "#B8E986", "#50E3C2", "#FFD300", "#E86363"]
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#b6b2b2"
      }
    },
    opacity: {
      value: 0.5211089197812949,
      random: false,
      animation: {
        enable: true,
        speed: 1,
        minimumValue: 0.1,
        sync: false
      }
    },
    size: {
      value: 8.017060304327615,
      random: true,
      animation: {
        enable: true,
        speed: 12.181158184520175,
        minimumValue: 0.1,
        sync: false
      }
    },
    lineLinked: {
      enable: false,
      distance: 150,
      color: "#c8c8c8",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: false,
      straight: false,
      outMode: "bounce",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detectOn: "canvas",
    events: {
      onHover: {
        enable: true,
        mode: "connect"
      },
      onClick: {
        enable: false,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        lineLinked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      connect: {},
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  detectRetina: true

        }} />
      <Row className="align-items-center justify-content-center text-center">
        <Col lg={10} className="align-self-end">
          <h1 className="font-weight-bold">Krisha Escano</h1>
          <hr className="divider my-4" />
        </Col>
        <Col lg={8}className="align-self-baseline">
          <h2 className="text-white-75 font-weight-light mb-5">Psychometrician and Software Developer</h2>
          <a className="about-button btn btn-primary btn-xl js-scroll-trigger" href="#about">About Me</a>
        </Col>
      </Row>
    </section>

      <section id="about">
        <div className="about-me">
          <Row>
            <Col>
              <img className="profile-picture" src="../images/circle-krisha.png" alt="Krisha Picture" />
              <h2 className="about-heading">ABOUT ME</h2>
              <p className="about-paragraph">
                Hi. Thanks for visiting my website. My name is Krisha and I'm a graduate of Bachelor of Science in Psychology and a licensed Psychometrician based here in Nagoya, Japan.
                Passionate in web and software development and currently on a freelance work.
                I love hiking, baking and coding. I'm always open for new opportunities. So feel free to reach out.
              </p>
            </Col>
          </Row>
        </div>
      </section>

      <section>
        <div id="education">
          <h2>Education</h2>
          <Row>
            <Col className="education-content">
              <Row>
                <Col lg={4} px={4}>
                  <h3>Bachelor of Science in Psychology</h3>
                  <small className="school-name">Our Lady of Fatima University, 2013 - 2017 </small>
                    <p>Licensed Psychomerician by Professional Regulation Commission in the Philippines</p>
                    <dl>
                      <dt>Coursework:</dt>
                      <dd>Industrial, Clinical and Student-Relation Management</dd>
                    </dl>
                </Col>

                <Col lg={4} px={4}>
                  <h3>The 2020 Web Development Full Stack Bootcamp</h3>
                  <small className="school-name">
                    Udemy.com, Instructor: Dr. Angela Yu
                  </small>
                    <p>Crafted websites and projects using both front-end and back-end technologies</p>
                    <dl>
                        <dt>Coursework focused on:</dt>
                        <dt>client-side:</dt>
                          <dd>HTML, CSS, JS, Bootstrap, jQuery</dd>
                        <dt>server-side:</dt>
                          <dd>Express.js, EJS</dd>
                        <dt>database:</dt>
                          <dd>Mongoose, MongoDB, Express.js, ReactJS, Node.js</dd>                          
                    </dl>
                </Col>

                <Col lg={4} px={4}>
                  <h3>Full-Stack Web Development in Javascript Bootcamp</h3>
                  <small className="school-name">Zuitt.co, Philippine-based-school</small>
                    <p>
                      Crafted websites and projects using both front-end and back-end technologies
                    </p>
                    <dl>
                      <dt>Course focused on:</dt>
                        <dt>client-side:</dt>
                          <dd>HTML, CSS, JS, Bootstrap, Wireframes and Mock-up</dd>
                        <dt>server-side: Javascript, Heroku, </dt>
                          <dd></dd>
                        <dt>database:</dt>
                          <dd>Robo3t, MERN (MongoDB, ExpressJS, ReactJS, and NodeJS)</dd>
                    </dl>
                </Col>

              </Row>
            </Col>
          </Row>
        </div>
      </section>

      <section className="skill-hobbies">
          <Row>
            <Col xs={12} md={6} lg={6} className="skills">
              <h2 className="skill-font">Skills</h2>
                <Container>
                <Row className="skill-row">
                  <Col xs={12} md={12} lg={12}>
                  <h3 className="software-heading">Front-End</h3>
                  </Col>
                  <Col className=" skill-col" xs={12} md={6} lg={3}>
                    <Button className="skill-button html-skill">
                      <p className="font-language">HTML</p>
                      <i className="skill-icons fab fa-html5 fa-3x"></i>
                      </Button>
                  </Col>
                  <Col className="skill-col" xs={12} md={6} lg={3}>
                    <Button className="skill-button css-skill">
                      <p>CSS</p>
                      <i className="skill-icons fab fa-css3-alt fa-3x"></i>
                      </Button>
                  </Col>
                  <Col className="skill-col" xs={12} md={6} lg={3}>
                    <Button className="skill-button javascript-skill">
                      <p className="font-language">JAVASCRIPT</p>
                      <i className="skill-icons fab fa-js fa-3x"></i>
                      </Button>
                  </Col>
                  <Col className="skill-col" xs={12} md={6} lg={3}>
                    <Button className="skill-button bootstrap-skill">
                      <p className="font-language">BOOTSTRAP</p>
                      <i className="skill-icons fab fa-bootstrap fa-3x"></i>
                      </Button>
                  </Col>

                  <Col xs={12} md={12} lg={12}>
                  <h3 className="software-heading back-end">Back-End</h3>
                  </Col>
                  
                  <Col className="skill-col" xs={12} md={6} lg={3}>
                    <Button className="skill-button react-skill">
                      <p>REACT JS</p>
                      <i class="skill-icons fab fa-react fa-3x"></i>
                      </Button>
                  </Col>
                  <Col className="skill-col" xs={12} md={6} lg={3}>
                    <Button className="skill-button nextjs-skill">
                      <p className="skill-span"> NEXT.JS</p>
                      <img className="skill-icons nextjs-image" src="../images/nextjslogo.png"/>
                      
                    </Button>
                  </Col>
                  <Col className="skill-col" xs={12} md={6} lg={3}></Col>
                  <Col className="skill-col" xs={12} md={6} lg={3}></Col>

                  <Col xs={12} md={12} lg={12}>
                  <h3 className="software-heading others">Others</h3>
                  </Col>
                  <Col className="skill-col" xs={12} md={6} lg={3}>
                    <Button className="skill-button git-skill">
                      <p>GIT</p>
                      <i class="fab fa-git-alt fa-3x"></i>
                      </Button>
                  </Col>
                  <Col className="skill-col" xs={12} md={6} lg={3}>
                    <Button className="skill-button gh-skill">
                      <p>GITHUB</p>
                      <i class="skill-icons fab fa-github fa-3x"></i>
                      </Button>
                  </Col>
                  <Col className="skill-col" xs={12} md={6} lg={3}>
                    <Button className="skill-button gl-skill">
                      <p>GITLAB</p>
                      <i class="skill-icons fab fa-gitlab fa-3x"></i>
                      </Button>
                  </Col>
                  <Col className="skill-col" xs={12} md={6} lg={3}>
                      <Button className="skill-button heroku-skill">
                      <p className="skill-image"> HEROKU</p>
                      <img className="skill-icons heroku-image" src="../images/herokulogo.png"/>
                      </Button>
                  </Col>
                </Row>
                </Container>
            </Col>

            <Col xs={12} md={6} lg={6} className="hobbies">
              <h2 className="hobbies-font">Hobbies</h2>
                <Container>
                <Row>
                  <Col xs={12} md={12} lg={12}>
                    <Button className="hobby-icon reading-hobby btn-block"><i className="fas fa-book fa-3x"></i>READING</Button>
                  </Col>
                  <Col xs={12} md={12} lg={12}>
                    <Button className="hobby-icon swimming-hobby btn-block"><i className="fas fa-swimmer fa-3x"></i>SWIMMING</Button>
                  </Col>
                  <Col xs={12} md={12} lg={12}>
                    <Button className="hobby-icon hiking-hobby btn-block"><i className="fas fa-hiking fa-3x"></i>HIKING</Button>
                  </Col>
                  <Col xs={12} md={12} lg={12}>
                    <Button className="hobby-icon baking-hobby btn-block"><i className="fas fa-cheese fa-3x"></i>BAKING</Button>
                  </Col>
                </Row>
                <img className="skill-hobbies-image" src="../images/skill-hobbies.png"/>
                </Container>
            </Col>
        </Row>
      </section>


      <section className="portfolio" id="project">
          <Row>
            <Col xs={12} md={6} lg={3} className="project-wrapper">
              <h2 className="project-heading">Projects</h2>
              <img className="project-image" src="../images/project-image.png"/>
            </Col>
            <Col xs={12} md={6} lg={3}>
                <Card className="project-card project-one">
                <Card.Img variant="top" className="project-card-image" src="../images/StarBuzzCoffee.png" />
                  <Card.Body>
                    <Card.Title className="project-title">StarBuzz</Card.Title>
                    <Card.Text>
                    Project in Head First in HTML and CSS -O'Reilly Publishing Company.
                    </Card.Text>
                  </Card.Body>
                    <Button className="project-button">
                      <a className="button-text" target="_blank" href="https://krishaescano.github.io/starbuzzcoffee/">View</a>
                    </Button>
                </Card>
            </Col>

            
            <Col xs={12} md={6} lg={3}>
                <Card className="project-card project-two">
                <Card.Img variant="top" className="project-card-image" src="../images/BullsEye.png" />
                  <Card.Body>
                    <Card.Title className="project-title">BullsEye</Card.Title>
                    <Card.Text>
                    Project in Web Development Full Stack Bootcamp -Udemy.com
                    </Card.Text>
                  </Card.Body>
                    <Button className="project-button">
                      <a className="button-text" target="_blank" href="https://krishaescano.github.io/BullsEye/">View</a>
                    </Button>
                </Card>
            </Col>

           
            <Col xs={12} md={6} lg={3}>
              <Card className="project-card project-three">
              <Card.Img variant="top" className="project-card-image" src="../images/HeadfirstLounge.png" />
                <Card.Body>
                  <Card.Title className="project-title">Head First Lounge</Card.Title>
                  <Card.Text>
                  Project in Head First in HTML and CSS -O'Reilly Publishing Company.
                  </Card.Text>
                </Card.Body>
                  <Button className="project-button">
                    <a className="button-text" target="_blank" href="https://krishaescano.github.io/HeadFirst-Lounge/">View</a>
                  </Button>
              </Card>
            </Col>
           
          </Row>
    </section>

    <section className="contact" id="getintouch">
      <Container fluid data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
        <Row>
          <Col lg={12}>
            <h3 className="getintouch-header">Get in Touch</h3>
            <h4>I'm a freelance worker and willing to collab.</h4>
            <p>
              If you have a project and you think you need my help or just want to talk. Send me a message.
            </p>
          </Col>
        </Row>

        <Row className="contact-form-container-row">
          <Col md={1} lg={1}></Col>
          <Col md={4} lg={4}>
            <img className="form-image" src="../images/getintouch.png" alt="two persons collaborating" />
          </Col>

          <Col md={1} lg={1}></Col>

          <Col md={5} lg={5}>
            <Form className="contact-form" action="" method=""> {/* onSubmit={handleSubmit}>*/}
              <Row>
                <Col lg={12} className="col-lg-12">
                  <Form.Group className="form-label">
                    Full Name:
                   <Form.Control type="text" name="fullName" placeholder="John Doe" />
                   </Form.Group>
                </Col>

                <Col lg={12}>
                  <Form.Group className="form-label">      
                    Email:      
                    <Form.Control type="email" name="email" placeholder="email@example.com" />
                  </Form.Group>            
                </Col>            

                <Col lg={12}>      
                  <Form.Group className="form-label">      
                    Message:      
                    <Form.Control as="textarea" rows="5" cols="20" placeholder="Your Message Here" />
                  </Form.Group>            
                </Col>      

                <Col lg={12}>      
                  <Form.Group>      
                    <Button className="submitButton" /*onClick={thankYou}*/>Submit</Button>
                  </Form.Group>                     
                </Col>      
                <Col md={1} lg={1}></Col>      
              </Row>            
            </Form>
          </Col>
        </Row>
      </Container>
    </section>

      <footer>
      <div className="container">
        <ul>
        <li>
          <a target="_blank" href="https://www.facebook.com/kishescano">
            <i className="fb-icon icon-media fab fa-facebook-f fa-2x"></i>
          </a>
        </li>
        
        <li>
          <a target="_blank" href="https://www.linkedin.com/in/krisha-may-escano-aa7b361b1/">
            <i className="li-icon icon-media fab fa-linkedin fa-2x"></i>
          </a>
        </li>

        <li>
          <a target="_blank" href="https://gitlab.com/krishaescano">
            <i className="gl-icon icon-media fab fa-gitlab fa-2x"></i>
          </a>
        </li>

        <li>
          <a target="_blank" href="https://github.com/KrishaEscano">
            <i className="gh-icon icon-media fab fa-github fa-2x"></i>
          </a>
        </li>

        <li>
          <a target="_blank" href="mailto:krishamayramos22@gmail.com">
            <i className="mail-icon icon-media fas fa-envelope fa-2x"></i>
          </a>
        </li>
        </ul>
        <p className="font-weight-bold">&copy; Copyright 2020 <span className="name">Krisha Escano.</span></p>
      </div>
    </footer>
    </>
    
  )
}
