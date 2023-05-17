import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';
import Footer from './pages/contact';

function App() {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: '',
  //     email: '',
  //     message: ''
  //   }
  // }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   fetch('http://localhost:3002/send', {
  //       method: "POST",
  //       body: JSON.stringify(this.state),
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json'
  //       },
  //     }).then(
  //     (response) => (response.json())
  //       ).then((response)=> {
  //     if (response.status === 'success') {
  //       alert("Message Sent.");
  //       this.resetForm()
  //     } else if(response.status === 'fail') {
  //       alert("Message failed to send.")
  //     }
  //   })
  // }

  // resetForm(){
  //   this.setState({name: '', email: '', message: ''})
  // }

  return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' exact element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/footer' element={<Footer/>} />
    </Routes>
    </Router>
  );

//   onNameChange(event) {
//     this.setState({name: event.target.value})
//   }

//   onEmailChange(event) {
//     this.setState({email: event.target.value})
//   }

//   onMessageChange(event) {
//     this.setState({message: event.target.value})
//   }

//   handleSubmit(event) {
//   } 
}
export default App;