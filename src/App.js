import React from 'react'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

import Typed from 'typed.js'

import Home from './Home'

function App() {
	// Create reference to store the DOM element containing the animation
	const el = React.useRef(null);
  // Create reference to store the Typed instance itself
	const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
    	strings: [
        'Code',
        'Debug',
        'Ankit Saikia&nbsp;`<i class="ion ion-beer"></i>`',
        'A dev `<i class="ion ion-code"></i>`',
        'Anime',
        'AI',
        'Audio',
        'Android',
        'Animation',
        'Automation',
        'Java',
        'Coding',
        'Github `<i class="ion ion-social-github"></i>`',
        'Game Development',
        'Kotlin',
        'JavaScript',
        'nodeJS',
        'NPM',
        'Ruby',
        'C++',
        'Python',
        'C',
        'CSS',
        'HTML5',
        'PHP',
        'React',
        'Vue',
        'Iconic',
        'Web Development',
        'Photoshop',
        '3D Design',
        'Web Design',
        'House Designs',
        'Video Editing',
        'Database',
      ],
      smartBackspace: true,
      stringsElement: null,
      startDelay: 2,
      fadeOut: false,
      backSpeed: 30,
      typeSpeed: 40,
      shuffle: false,
      backDelay: 1500,
      loop: true,
      cursorChar: null,
    };
    
    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);
    
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, [])


  return (
    <Router>
      <Navbar expand='lg' className='navbar navbar-dark bg-dark py-2 m-0' sticky='top'>
        <Container>
          <Navbar.Brand className='devtyped neon-color position-absolute top-0 mt-2' ref={el}></Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarResponsive' style={{outline:'none',boxShadow:'none',border:'none',backgroundColor:'#000'}}/>
          <Navbar.Collapse id='navbarResponsive'>
            <Nav className='ms-auto'>
              <Nav.Link as={Link} to='/web'>Web</Nav.Link>
              <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
              <Nav.Link as={Link} to='/hire_me'>Hire Me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route exact path='/' element={<Home/>}/>
      </Routes>
  </Router>
  );
}

export default App;
