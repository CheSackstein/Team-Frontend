import React from "react";
import { useState } from "react";
import AddService from "./AddService";
import styles from "./Apply.module.css";
import { useForm } from "react-hook-form";
import {
  Button,
  Form,
  Input,
  Label,
  Row,
  Col,
  FormGroup,
  FormText,
} from "reactstrap";
import { POSTtoProviders } from "../../lib/FetchShortcuts";

import { data } from "jquery";

function Apply() {
  const { register, handleSubmit, watch, errors } = useForm();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [company, setCompany] = useState("");
  // const [description, setDescription] = useState("");
  // const [address, setAddress] = useState("");
  // const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  // const [fullName, setFullName] = useState('');
  // const [lName, setlName] = useState("");
  // const [phone, setPhone] = useState("");
  // const [openingHrs, setOpeningHrs] = useState("09");
  // const [closingHrs, setClosingHrs] = useState("17");
  // const [Hrs, setHrs] = useState("");
  // const [errors, setErrors] = useState("");
  // const [profilePictureURL, setProfilePictureUrl] = useState("");
  // const [bannerURL, setBannerUrl] = useState("");
  // const [daysOff, setDaysOff] = useState("");
  // const [numStaff, setNumStaff] = useState("");
  // const [price, setPrice] = useState("");
  // const [duration, setDuration] = useState("");
  // const [serviceName, setServiceName] = useState("");
  // const [availableServices, setAvailableServices] = useState({});

  function submitService(event) {
    console.log(data);
  }

  async function submit(data) {
    // const formData = {
    //   fullName: fullName,
    //   phone: phone,
    //   email: email,
    //   password: password,
    //   companyName: company,
    //   description: description,
    //   address: address,
    //   type: type,
    //   category: category,
    //   openingHrs: openingHrs,
    //   closingHrs: closingHrs,
    //   weekends: daysOff,
    //   numberOfStaff: numStaff,
    //   availableServices: availableServices
    // };
    console.log(data);

    let formData = data;
    const provider = await POSTtoProviders("become-provider", formData);
  }

  // if(provider.errors){
  //   // display errors
  //   console.log(provider.errors);
  //   const errs = {}
  //   for(let err of provider.errors){
  //     errs[err.param] = err.msg;
  //   }
  //   setErrors(errs);
  // }else {
  //   // use the user object
  //   console.log('PROVIDER:',provider);
  // }

  return (
    <div id="Apply" className={styles.Apply}>
      <form
        id="form"
        className="form"
        className="mx-5 rounded px-3 py-1"
        onSubmit={handleSubmit(submit)}
      >
        <label>Full name:</label>

        <input
          name="fullname"
          id="fullName"
          placeholder="Full Name"
          ref={register({ required: true })}
        />
        <br />
        <label for="description"> Short description of company:</label>

        <input
          ref={register}
          type="textarea"
          id="description"
          placeholder="A little about your company ..."
        />
        <label for="phone">Cell:</label>
        <input
          ref={register}
          type="number"
          name="cellPhone"
          placeholder="Cell phone number"
        />
        <label for="exampleEmail">Email</label>
        <input
          ref={register}
          type="email"
          name="email"
          id="exampleEmail"
          placeholder="sample@email.com"
        />
        <legend>Business Category:</legend>
        <label check>
          <select
            ref={register}
            type="radio"
            name="radio1"
            value="beauty"
            defaultChecked
          />
          Beauty
        </label>
        <label check>
          <select ref={register} type="radio" name="radio1" value="health" />
          Health
        </label>
        <label for="examplePassword" password>
          Password
        </label>
        <input
          ref={register}
          type="password"
          name="password"
          id="examplePassword"
          placeholder="Password"
        />

        <label for="type"> Service Type:</label>
        <br />
        {category === "beauty" && (
          <select
            ref={register}
            name="text"
            id="type"
            onSelect={setCategory("beauty")}
          >
            <option value="">select one</option>
            <option value="salon">Salon</option>
            <option value="barber">Barber Shop</option>
            <option value="nail salon">Nail Salon</option>
            <option value="massage">Massage</option>
            <option value="other">Other</option>
          </select>
        )}

        {category === "health" && (
          <select
            ref={register}
            name="text"
            id="type"
            onSelect={setCategory("health")}
          >
            <option value="">select one</option>
            <option value="chiropractor">Chiropractor</option>
            <option value="dentist">Dentist </option>
            <option value="other">Other</option>
          </select>
        )}
        <div className="AddService" id="AddService">
          <form>
            <label for="Service">Service:</label>
            <form>
              <input
                ref={register}
                type="text"
                name="Service"
                id="Service"
                placeholder="Manicure, haircut"
              />
            </form>
            <label for="Price">Price:</label>
            <input
              ref={register}
              type="text"
              name="Price"
              id="Price"
              placeholder="Price"
            />
            <label for="duration">Duration</label>
            <select ref={register} name="duration" id="duration">
              <option>15 mins</option>
              <option>30 mins</option>
              <option>45 mins</option>
              <option>60 mins</option>
              <option>75 mins</option>
              <option>90 mins</option>
              <option>2 hours</option>
            </select>

            <button
              ref={register}
              type="Primary"
              color="secondary"
              onSubmit={handleSubmit(submitService)}
            >
              Add Service
            </button>
          </form>
        </div>

        <label for="address">Address:</label>
        <input
          ref={register}
          type="textarea"
          name="text"
          id="address"
          placeholder="Dizengoff 12, Tel Aviv"
        />

        <label for="banner">Banner url:</label>
        <input ref={register} type="banner" name="banner" id="Banner" />
        <label for="exampleCompany">Company Name:</label>
        <input
          ref={register}
          type="company"
          name="company"
          id="exampleCompnay"
          placeholder="Company Name"
        />
        {/* <label for="examplePicture">Picture url:</label>
                <input
                  ref={register}
                  type="picture"
                  name="picture"
                  id="examplePicture"
                  placeholder=""
                
                /> */}
        <label for="openingTimes">Opening Times</label>
        <select ref={register} name="select" id="openingTimes">
          <option value="05">5:00</option>
          <option value="06">6:00</option>
          <option value="07"> 7:00</option>
          <option value="08">8:00</option>
          <option value="09" selected="selected">
            9:00
          </option>
          <option value="10">10:00</option>
          <option value="11">11:00</option>
          <option value="12">12:00</option>
          <option value="13">13:00</option>
          <option value="14">14:00</option>
          <option value="15">15:00</option>
          <option value="16"> 16:00</option>
          <option value="17">17:00</option>
          <option value="18">18:00</option>
          <option value="19">19:00</option>
          <option value="20">20:00</option>
          <option value="21">21:00</option>
          <option value="22">22:00</option>
        </select>
        <label for="closingTimes">Closing Times</label>
        <select ref={register} name="select" id="closingTimes">
          <option value="05">5:00</option>
          <option value="06">6:00</option>
          <option value="07"> 7:00</option>
          <option value="08">8:00</option>
          <option value="09">9:00</option>
          <option value="10">10:00</option>
          <option value="11">11:00</option>
          <option value="12">12:00</option>
          <option value="13">13:00</option>
          <option value="14">14:00</option>
          <option value="15">15:00</option>
          <option value="16"> 16:00</option>
          <option value="17" selected="selected">
            17:00
          </option>
          <option value="18">18:00</option>
          <option value="19">19:00</option>
          <option value="20">20:00</option>
          <option value="21">21:00</option>
          <option value="22">22:00</option>
        </select>
        <label for="daysOff">Days Off:</label>
        <select ref={register} name="select" id="daysOff">
          <option value="Sunday">Sunday</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday" selected="selected">
            Thursday
          </option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
        </select>
        <label for="staff">Number of Staff:</label>
        <input ref={register} type="number" name="staff" id="staff" />
        <input type="submit" color="secondary" value="Save Changes"></input>
      </form>
    </div>
  );
}

// return (
// <div className="Apply" id="Apply">
//   <form
//     id="form"
//     className="form"
//     className="mx-5 rounded px-3 py-1"
//     onSubmit={handleSubmit(submit)}
//   >
//     <FormGroup>
//       <Row form>
//         <Col md={4}>
//           <FormGroup>
//             <Label>Full name:</Label>

//               <Input
//                 // type="text"
//                 name="fullname"
//                 // id="fullName"
//                 // placeholder="Full Name"
//                 ref={register({ required: true })}
//                 // onChange={(e) => setFullName(e.target.value)}
//               />

//           </FormGroup>
//         </Col>
//         <Col md={4}>
//           <FormGroup>
//             <Label for="description"> Short description of company:</Label>

//               <Input
//                 ref={register}
//                 type="textarea"
//                 name="text"
//                 id="description"
//                 placeholder="A little about your company ..."

//                 // onChange={(e) => setDescription(e.target.value)}
//               />

//           </FormGroup>
//         </Col>
//       </Row>

//       <Row form>
//         <Col md={2}>
//           <Label for="phone">Cell:</Label>
//             <Input
//               ref={register}
//               type="number"
//               name="cellPhone"
//               id="cellPhone"
//               placeholder="Cell phone number"
//               // onChange={(e) => setPhone(e.target.value)}
//             />
//         </Col>
//         <Col md={2}>
//           <Label for="exampleEmail">Email</Label>
//             <Input
//               ref={register}
//               type="email"
//               name="email"
//               id="exampleEmail"
//               placeholder="sample@email.com"
//               // onChange={(e) => setEmail(e.target.value)}
//             />
//         </Col>
//         <Col md={4}>
//           <FormGroup tag="fieldset">
//             <legend>Business Category:</legend>
//             <FormGroup check>
//               <Label check>
//                   <Input
//                     ref={register}
//                     type="radio"
//                     name="radio1"
//                     value="beauty"
//                     defaultChecked
//                     onChange={(e) => setCategory(e.target.value)}
//                   />
//                 Beauty
//               </Label>
//             </FormGroup>
//             <FormGroup check>
//               <Label check>
//                   <Input
//                     ref={register}
//                     type="radio"
//                     name="radio1"
//                     value="health"
//                     onChange={(e) => setCategory(e.target.value)}
//                   />
//                 Health
//               </Label>
//             </FormGroup>
//           </FormGroup>
//         </Col>
//       </Row>
//       <Row>
//         <Col md={4}>
//           <FormGroup>
//             <Label for="examplePassword" password>
//               Password
//             </Label>
//               <Input
//                 ref={register}
//                 type="password"
//                 name="password"
//                 id="examplePassword"
//                 placeholder="Password"
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//           </FormGroup>
//         </Col>

//         <Col md={2}>
//           <FormGroup>
//             <Label for="type"> Service Type:</Label>
//             <br />
//             {category === "beauty" && (
//                 <Input
//                   ref={register}
//                   type="select"
//                   name="text"
//                   id="type"
//                   onChange={(e) => setType(e.target.value)}
//                 >
//                   <option value="">select one</option>
//                   <option value="salon">Salon</option>
//                   <option value="barber">Barber Shop</option>
//                   <option value="nail salon">Nail Salon</option>
//                   <option value="massage">Massage</option>
//                   <option value="other">Other</option>
//                 </Input>
//             )}

//             {category === "health" && (
//                 <Input
//                   ref={register}
//                   type="select"
//                   name="text"
//                   id="type"
//                   onChange={(e) => setType(e.target.value)}
//                 >
//                   <option value="">select one</option>
//                   <option value="chiropractor">Chiropractor</option>
//                   <option value="dentist">Dentist </option>
//                   <option value="other">Other</option>
//                 </Input>
//             )}
//           </FormGroup>
//         </Col>

//         <Col md={3}>
//           {/* <AddService /> */}
//           <div className="AddService" id="AddService">
//             <Form onSubmit={(event) => onAddService(event)}>
//               <Row form>
//                 <Col md={5}>
//                   <FormGroup>
//                     <Label for="Service">Service:</Label>
//                     <Form>
//                       <Input
//                         ref={register}
//                         type="text"
//                         name="Service"
//                         id="Service"
//                         placeholder="Manicure, haircut"
//                         onChange={(e) => setServiceName(e.target.value)}
//                       />
//                     </Form>
//                   </FormGroup>
//                 </Col>
//                 <Col md={3}>
//                   <FormGroup>
//                     <Label for="Price">Price:</Label>
//                       <Input
//                         ref={register}
//                         type="text"
//                         name="Price"
//                         id="Price"
//                         placeholder="Price"
//                         onChange={(e) => setPrice(e.target.value)}
//                       />
//                   </FormGroup>
//                 </Col>

//                 <Col md={3}>
//                   <FormGroup>
//                     <Label for="exampleSelect">Duration</Label>
//                       <Input
//                         ref={register}
//                         type="select"
//                         name="select"
//                         id="exampleSelect"
//                         onChange={(e) => setDuration(e.target.value)}
//                       >
//                         <option>15 mins</option>
//                         <option>30 mins</option>
//                         <option>45 mins</option>
//                         <option>60 mins</option>
//                         <option>75 mins</option>
//                         <option>90 mins</option>
//                         <option>2 hours</option>
//                       </Input>
//                   </FormGroup>
//                 </Col>

//                 <Button
//                   ref={register}
//                   type="Primary"
//                   color="secondary"
//                   onSubmit={(event) => onAddService(event)}
//                 >
//                   Add Service
//                 </Button>
//               </Row>
//           </div>
//         </Col>
//       </Row>
//       <Row>
//         <Col md={4}>
//           <FormGroup>
//             <Label for="address">Address:</Label>
//             <Input
//               ref={register}
//               type="textarea"
//               name="text"
//               id="address"
//               placeholder="Dizengoff 12, Tel Aviv"
//               onChange={(e) => setAddress(e.target.value)}
//             />
//           </FormGroup>
//         </Col>
//         <Col md={4}>
//           <FormGroup>
//             <Label for="exampleBanner">Banner url:</Label>
//             <Input
//               ref={register}
//               type="banner"
//               name="banner"
//               id="exampleBanner"
//               placeholder=""
//               onChange={(e) => setBannerUrl(e.target.value)}
//             />
//           </FormGroup>
//         </Col>
//       </Row>
//       <Row>
//         <Col md={4}>
//           <FormGroup>
//             <Label for="exampleCompany">Company Name:</Label>
//             <Input
//               ref={register}
//               type="company"
//               name="company"
//               id="exampleCompnay"
//               placeholder="Company Name"
//               onChange={(e) => setCompany(e.target.value)}
//             />
//           </FormGroup>
//         </Col>
//         <Col md={4}>
//           <FormGroup>
//             <Label for="examplePicture">Picture url:</Label>
//             <Input
//               ref={register}
//               type="picture"
//               name="picture"
//               id="examplePicture"
//               placeholder=""
//               onChange={(e) => setProfilePictureUrl(e.target.value)}
//             />
//           </FormGroup>
//         </Col>
//       </Row>
//       <Row>
//         <Col md={1}>
//           <FormGroup>
//             <Label for="openingTimes">Opening Times</Label>
//             <Input
//               ref={register}
//               type="select"
//               name="select"
//               id="openingTimes"
//               onChange={(e) => setOpeningHrs(e.target.value)}
//             >
//               <option value="05">5:00</option>
//               <option value="06">6:00</option>
//               <option value="07"> 7:00</option>
//               <option value="08">8:00</option>
//               <option value="09" selected="selected">
//                 9:00
//               </option>
//               <option value="10">10:00</option>
//               <option value="11">11:00</option>
//               <option value="12">12:00</option>
//               <option value="13">13:00</option>
//               <option value="14">14:00</option>
//               <option value="15">15:00</option>
//               <option value="16"> 16:00</option>
//               <option value="17">17:00</option>
//               <option value="18">18:00</option>
//               <option value="19">19:00</option>
//               <option value="20">20:00</option>
//               <option value="21">21:00</option>
//               <option value="22">22:00</option>
//             </Input>
//           </FormGroup>
//         </Col>
//         <Col md={1}>
//           <FormGroup>
//             <Label for="closingTimes">Closing Times</Label>
//             <Input
//               ref={register}
//               type="select"
//               name="select"
//               id="closingTimes"
//               onChange={(e) => setClosingHrs(e.target.value)}
//             >
//               <option value="05">5:00</option>
//               <option value="06">6:00</option>
//               <option value="07"> 7:00</option>
//               <option value="08">8:00</option>
//               <option value="09">9:00</option>
//               <option value="10">10:00</option>
//               <option value="11">11:00</option>
//               <option value="12">12:00</option>
//               <option value="13">13:00</option>
//               <option value="14">14:00</option>
//               <option value="15">15:00</option>
//               <option value="16"> 16:00</option>
//               <option value="17" selected="selected">
//                 17:00
//               </option>
//               <option value="18">18:00</option>
//               <option value="19">19:00</option>
//               <option value="20">20:00</option>
//               <option value="21">21:00</option>
//               <option value="22">22:00</option>
//             </Input>
//           </FormGroup>
//         </Col>
//         <Col md={2}>
//           <FormGroup>
//             <Label for="daysOff">Days Off:</Label>
//             <Input
//               ref={register}
//               type="select"
//               name="select"
//               id="daysOff"
//               onChange={(e) => setDaysOff(e.target.value)}
//             >
//               <option value="Sunday">Sunday</option>
//               <option value="Monday">Monday</option>
//               <option value="Tuesday">Tuesday</option>
//               <option value="Wednesday">Wednesday</option>
//               <option value="Thursday" selected="selected">
//                 Thursday
//               </option>
//               <option value="Friday">Friday</option>
//               <option value="Saturday">Saturday</option>
//             </Input>
//           </FormGroup>
//         </Col>
//       </Row>
//       <Row>
//         <Col md={3}>
//           <FormGroup>
//             <Label for="exampleStaff">Number of Staff:</Label>
//             <Input
//               ref={register}
//               type="number"
//               name="staff"
//               id="staff"
//               placeholder=""
//               onChange={(e) => setNumStaff(e.target.value)}
//             />
//           </FormGroup>
//         </Col>
//       </Row>
//       <Input type="submit" color="secondary" value="Save Changes"></Input>
//     </FormGroup>
//   </form>
// </div>

{
  /* <div>
      <form onSubmit={handleSubmit(submit)}>
        <label for="company-name">my label</label>
        <input type="text" name="company-name" ref={register}></input>
        <input type="submit" value="Submit"></input>
      </form>
    </div> */
}

export default Apply;
