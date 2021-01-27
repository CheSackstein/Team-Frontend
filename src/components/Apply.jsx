// import React from 'react';
// import App from '../App';
// import { useState } from 'react';
// import NavBar from './NavBar';
// import AddService from './AddService';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import {
//   Button,
//   Form,
//   Input,
//   Label,
//   Row,
//   Col,
//   FormGroup,
//   FormText,
//   Select
// } from 'reactstrap';
// import './Apply.css';
// import {
//   POSTtoUsers,
//   PUTtoUsers,
//   GETFromUsers,
//   GETFromProviders,
//   PUTtoProviders,
//   POSTtoProviders
// } from '../lib/FetchShortcuts';

// function Apply(props) {
// const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [company, setCompany] = useState('');
//   const [description, setDescription] = useState('');
//   const [address, setAddress] = useState('');
//   const [type, setType] = useState('');
//   const [category, setCategory] = useState('beauty');
//   const [fName, setfName] = useState('');
//   const [lName, setlName] = useState('');
//   const [phone, setPhone] = useState('');
//   const [openingHrs, setOpeningHrs] = useState('09');
//   const [closingHrs, setClosingHrs] = useState('17');
//   const [Hrs, setHrs] = useState('');
//   const [errors, setErrors] = useState("");
//   const [ profilePictureURL, setProfilePictureUrl ] = useState("");
//   const [ bannerURL, setBannerUrl ] = useState("");
//   const [ daysOff, setDaysOff ] = useState("");
//   const [ numStaff, setNumStaff ] = useState("");
//   const [price, setPrice] = useState("");
//   const [duration, setDuration] = useState("");
//   const [serviceName, setServiceName] = useState("");
//   const [availableServices, setAvailableServices] = useState("");

  
//   function onAddService(event) {
//     event.preventDefault();
//     const  availableServices= {
// service: serviceName,
// duration: duration,
// price: price
//     };
//     setAvailableServices(availableServices)
//   }
//   function onApply(event) {

//     event.preventDefault();
//     setHrs(closingHrs - openingHrs);
//     const formData = {
//       firstName: fName,
//       lastName: lName,
//       phone: phone,
//       email: email,
//       password: password,
//       companyName: company,
//       description: description,
//       address: address,
//       type: type,
//       category: category,
//       openingHrs: openingHrs,
//       closingHrs: closingHrs,
//       weekends: daysOff,
//       numberOfStaff: numStaff,
//       availableServices: availableServices
//     };

//     onAddProvider(formData);
//     console.log(JSON.stringify(formData));

//     console.log(formData);
//     const provider = await POSTtoProviders("/become-provider",formData);

//     if(provider.errors){
//       // display errors
//       console.log(provider.errors);
//       const errs = {}
//       for(let err of provider.errors){
//         errs[err.param] = err.msg;
//       }
//       setErrors(errs);
//     }else {
//       // use the user object
//       console.log('PROVIDER:',provider);
//     }
//     Apply(formData);



//   return (
//     <div className="Apply" id="Apply">
//       <NavBar />
//       <Form onSubmit={(event) => onApply(event)}>
//         <FormGroup>
//           <Row form>
//             <Col md={2}>
//               <FormGroup>
//                 <Label for="firstName">First name:</Label>
//                 <Input
//                   type="text"
//                   name="firstName"
//                   id="firstName"
//                   placeholder="First Name"
//                   onChange={(e) => setfName(e.target.value)}
//                 />
//               </FormGroup>
//             </Col>
//             <Col md={2}>
//               <FormGroup>
//                 <Label for="lastName">Last name:</Label>
//                 <Input
//                   type="text"
//                   name="lastName"
//                   id="lastName"
//                   placeholder="Last Name"
//                   onChange={(e) => setlName(e.target.value)}
//                 />
//               </FormGroup>
//             </Col>
//             <Col md={4}>
//               <FormGroup>
//                 <Label for="description"> Short description of company:</Label>
//                 <Input
//                   type="textarea"
//                   name="text"
//                   id="description"
//                   placeholder="A little about your company ..."
//                   onChange={(e) => setDescription(e.target.value)}
//                 />
//               </FormGroup>
//             </Col>

//             <Col md={4}>
//               <FormGroup tag="fieldset">
//                 <legend>Business Category:</legend>
//                 <FormGroup check>
//                   <Label check>
//                     <Input
//                       type="radio"
//                       name="radio1"
//                       value="beauty"
//                       defaultChecked
//                       onChange={(e) => setCategory(e.target.value)}
//                     />{" "}
//                     Beauty
//                   </Label>
//                 </FormGroup>
//                 <FormGroup check>
//                   <Label check>
//                     <Input
//                       type="radio"
//                       name="radio1"
//                       value="health"
//                       onChange={(e) => setCategory(e.target.value)}
//                     />{" "}
//                     Health
//                   </Label>
//                 </FormGroup>
//               </FormGroup>

//             <Col md={3}>
//               {/* <AddService /> */}
//               <div className="AddService" id="AddService">
//       <Form onSubmit={(event) => onAddService(event)}>
//           <Row form>
//             <Col md={5}>
//               <FormGroup>
//                 <Label for="Service">Service:</Label>
//                 <Input
//                   type="text"
//                   name="Service"
//                   id="Service"
//                   placeholder="Manicure, haircut"
//                   onChange={(e) => setServiceName(e.target.value)}
//                 />
//               </FormGroup>
//             </Col>
    
//             <Col md={3}>
//               <FormGroup>
//                 <Label for="Price">Price:</Label>
//                 <Input
//                   type="text"
//                   name="Price"
//                   id="Price"
//                   placeholder="Price"
//                   onChange={(e) => setPrice(e.target.value)}
//                 />
//               </FormGroup>
//             </Col>

//             <Col md={3}>
//               <FormGroup>
//                 <Label for="exampleSelect">Duration</Label>
//                 <Input type="select" name="select" id="exampleSelect" onChange={(e) => setDuration(e.target.value)}>
//                   <option>15 mins</option>
//                   <option>30 mins</option>
//                   <option>45 mins</option>
//                   <option>60 mins</option>
//                   <option>75 mins</option>
//                   <option>90 mins</option>
//                   <option>2 hours</option>
//                 </Input>
//               </FormGroup>
//             </Col>
        
//           <Button
//             type="Primary"
//             color="secondary"
//             onSubmit={(event) => onAddService(event)}
//           >
//             Add Service
//           </Button>
   
//         </Row>
//       </Form>
    
//     </div>

//             </Col>
//           </Row>
//           <Row form>
//             <Col md={2}>
//               <FormGroup>
//                 <Label for="phone">Cell:</Label>
//                 <Input
//                   type="text"
//                   name="cellPhone"
//                   id="cellPhone"
//                   placeholder="Cell phone number"
//                   onChange={(e) => setPhone(e.target.value)}
//                 />
//               </FormGroup>
//             </Col>
//             <Col md={2}>
//               <FormGroup>
//                 <Label for="exampleEmail">Email</Label>
//                 <Input
//                   type="email"
//                   name="email"
//                   id="exampleEmail"
//                   placeholder="sample@email.com"
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </FormGroup>
//             </Col>

//             <Col md={4}>
//               <FormGroup>
//                 <Label for="address">Address:</Label>
//                 <Input
//                   type="textarea"
//                   name="text"
//                   id="address"
//                   placeholder="Dizengoff 12, Tel Aviv"
//                   onChange={(e) => setAddress(e.target.value)}
//                 />
//               </FormGroup>
//             </Col>
//           </Row>
//           <Row center>
//             <Col md={4}>
//               <FormGroup>
//                 <Label for="examplePassword" password>Password</Label>
//                 <Input
//                   type="password"
//                   name="password"
//                   id="examplePassword"
//                   placeholder="Password"
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </FormGroup>
//             </Col>

//             <Col md={2}>
//               <FormGroup>
//                 <Label for="type"> Service Type:</Label>
//                 <br />
//                 {category === "beauty" && (
//                   <Input
//                     type="select"
//                     name="text"
//                     id="type"
//                     onChange={(e) => setType(e.target.value)}
//                   >
//                     <option value="">select one</option>
//                     <option value="salon">Salon</option>
//                     <option value="barber">Barber Shop</option>
//                     <option value="nail salon">Nail Salon</option>
//                     <option value="massage">Massage</option>
//                     <option value="other">Other</option>
//                   </Input>
//                 )}

//                 {category === "health" && (
//                   <Input
//                     type="select"
//                     name="text"
//                     id="type"
//                     onChange={(e) => setType(e.target.value)}
//                   >
//                     <option value="">select one</option>
//                     <option value="chiropractor">Chiropractor</option>
//                     <option value="dentist">Dentist </option>
//                     <option value="other">Other</option>
//                   </Input>
//                 )}
//               </FormGroup>
//             </Col>

   

//             <Col md={1}>
//               <FormGroup>
//                 <Label for="openingTimes">Opening Times</Label>
//                 <Input
//                   type="select"
//                   name="select"
//                   id="openingTimes"
//                   onChange={(e) => setOpeningHrs(e.target.value)}
//                 >
//                   <option value="05">5:00</option>
//                   <option value="06">6:00</option>
//                   <option value="07"> 7:00</option>
//                   <option value="08">8:00</option>
//                   <option value="09" selected="selected">
//                     9:00
//                   </option>
//                   <option value="10">10:00</option>
//                   <option value="11">11:00</option>
//                   <option value="12">12:00</option>
//                   <option value="13">13:00</option>
//                   <option value="14">14:00</option>
//                   <option value="15">15:00</option>
//                   <option value="16"> 16:00</option>
//                   <option value="17">17:00</option>
//                   <option value="18">18:00</option>
//                   <option value="19">19:00</option>
//                   <option value="20">20:00</option>
//                   <option value="21">21:00</option>
//                   <option value="22">22:00</option>
//                 </Input>
//               </FormGroup>
//             </Col>
//             <Col md={1}>
//               <FormGroup>
//                 <Label for="closingTimes">Closing Times</Label>
//                 <Input
//                   type="select"
//                   name="select"
//                   id="closingTimes"
//                   onChange={(e) => setClosingHrs(e.target.value)}
//                 >
//                   <option value="05">5:00</option>
//                   <option value="06">6:00</option>
//                   <option value="07"> 7:00</option>
//                   <option value="08">8:00</option>
//                   <option value="09">9:00</option>
//                   <option value="10">10:00</option>
//                   <option value="11">11:00</option>
//                   <option value="12">12:00</option>
//                   <option value="13">13:00</option>
//                   <option value="14">14:00</option>
//                   <option value="15">15:00</option>
//                   <option value="16"> 16:00</option>
//                   <option value="17" selected="selected">
//                     17:00
//                   </option>
//                   <option value="18">18:00</option>
//                   <option value="19">19:00</option>
//                   <option value="20">20:00</option>
//                   <option value="21">21:00</option>
//                   <option value="22">22:00</option>
//                 </Input>
//               </FormGroup>
//             </Col>
//             <Col md={2}>
//               <FormGroup>
//                 <Label for="daysOff">Days Off:</Label>
//                 <Input
//                   type="select"
//                   name="select"
//                   id="daysOff"
//                   onChange={(e) => setDaysOff(e.target.value)}
//                 >
//                   <option value="Sunday">Sunday</option>
//                   <option value="Monday">Monday</option>
//                   <option value="Tuesday">Tuesday</option>
//                   <option value="Wednesday">Wednesday</option>
//                   <option value="Thursday" selected="selected">
//                   Thursday
//                   </option>
//                   <option value="Friday">Friday</option>
//                   <option value="Saturday">Saturday</option>
//                 </Input>
//               </FormGroup>
//             </Col>
//             <Col md={3}>
//               <AddService />
//             </Col>
//           </Row>
//           <Row>
//             <Col md={4}>
//               <FormGroup>
//                 <Label for="exampleCompany">Company Name:</Label>
//                 <Input
//                   type="company"
//                   name="company"
//                   id="exampleCompnay"
//                   placeholder="Company Name"
//                   onChange={(e) => setCompany(e.target.value)}
//                 />
//               </FormGroup>
//             </Col>
//             <Col md={4}>
//               <FormGroup>
//               <Label for="examplePicture">Picture url:</Label>
//                 <Input
//                   type="picture"
//                   name="picture"
//                   id="examplePicture"
//                   placeholder=""
//                   onChange={(e) => setProfilePictureUrl(e.target.value)}
//                 />
//               </FormGroup>
//             </Col>
//           </Row>
//           <Row>
//           <Col md={4}>
//               <FormGroup>
//               <Label for="exampleBanner">Banner url:</Label>
//                 <Input
//                   type="banner"
//                   name="banner"
//                   id="exampleBanner"
//                   placeholder=""
//                   onChange={(e) => setBannerUrl(e.target.value)}
//                 />
//               </FormGroup>
//             </Col>
//             <Col md={3}>
//               <FormGroup>
//               <Label for="exampleStaff">Number of Staff:</Label>
//                 <Input
//                   type="staff"
//                   name="staff"
//                   id="staff"
//                   placeholder=""
//                   onChange={(e) => setNumStaff(e.target.value)}
//                 />
//               </FormGroup>
//             </Col>
//           </Row>
//           <Button
//             type="Primary"
//             color="secondary"
//             onSubmit={(event) => onApply(event)}
//           >
//             Save Changes
//           </Button>
//         </FormGroup>
//       </Form>
//     </div>
//   );
// }

// export default Apply;
