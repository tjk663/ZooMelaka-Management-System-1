import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import './CSS/App.css'
import Home from './components/home';

//MEthanin palleha dapn
// import AnimalDashboard from './components/AnimalDashboard';
// import AllAdoptions from './components/AllAdoptions';

import AdminProfileDashboard from './components/AdminProfileDash';

import CreateProfile from './components/CreateProfile';
import Login from './components/Login';
import EditProfile from './components/EditProfile';
import AdminPanelHome from './components/AdminPanelHome';
import EmployeeDashboard from './components/EmployeeDash';
import EditEmployee from './components/EditPost';
import ResearchDashboard from './components/ResearchDashboard';
import AddEmployee from './components/CreatePost';
import EditResearch from './components/EditResearch';
// import ResearchDetails from './components/ResearchDetails';
import CreateResearch from './components/CreateResearch';
import ProjectsHome from './components/ProjectsHome';
import AddProject from './components/ProjectCreate';
import ProjectDetails from './components/ProjectSearch';
import EditDetails from './components/ProjectEdit';
//medicals imported
import MedicalDashboard from './components/MedicalDashboard';
import CreateMedical from './components/CreateMedical';
import EditMedical from './components/EditMedical';
import TourGuideDashboard from './components/TourGuideDashboard';
import CreateBooking from './components/CreateBooking';
import UpdateBooking from './components/EditBooking';
import AllAdoptions from './components/AllAdoptions';
import AdoptionDetails from './components/AdoptionDetails';
import EditAdoptionDetails from './components/UpdateAdoption';
import CreateAdoption from './components/AddAdoption';
import AnimalDashboard from './components/AnimalDashboard';
import CreateAnimalPortfolio from './components/CreateAnimal';
import UpdateAnimalPortfolio from './components/EditAnimal';
import AnimalDetails from './components/AnimalDetails';

class TourApp extends Component {
  
render() {
    return (
      <div>
      <Router>
        <Header/>
        
        <Route path="/" exact component={Home}/>
      
      
        <Route path="/adminprofiledash" component={AdminProfileDashboard}/>
        <Route path ="/createprofile" component={CreateProfile}/>
        <Route path ="/login" component={Login}/>
        <Route path ="/AdminProfileDash" component={Login}/>
        <Route path ="/profile/update/:id" component={EditProfile}/>
        


        <Route path="/adminpanelhome" component={AdminPanelHome}/>


        
        <Route path="/EmployeeDash" component={EmployeeDashboard}/>
        <Route path="/edit/employee/:id" component={EditEmployee}/>
        <Route path="/employee/add" component={AddEmployee}/>

        
        <Route path = "/ResearchDashboard" component ={ResearchDashboard}/>
        <Route path = "/research/edit/:id" component ={EditResearch}/>
        <Route path = "/research/add" component = {CreateResearch}/>
        {/* <Route path = "/research/:id" component = {ResearchDetails}/> */}

        <Route path = "/ProjectsHome" component = {ProjectsHome}/>
        <Route path = "/project/add" component = {AddProject}/>
        <Route path ="/project/find" component={ProjectDetails}/>
        <Route path ="/project/edit/:id" component={EditDetails}/>
        
        
        <Route path = "/medicalDashboard" component = {MedicalDashboard}/>
        <Route path = "/medical/create" component = {CreateMedical}/>
        <Route path = "/medical/update/:id" component = {EditMedical}/>


        <Route path = "/TourGuideDashboard" component = {TourGuideDashboard}/> 
        <Route path = "/booking/add" component = {CreateBooking}/>
        <Route path = "/booking/update/:id" component = {UpdateBooking}/>
        



        <Route path = "/AllAdoptions" component = {AllAdoptions}/>
        <Route path = "/adoption/details/:id" component = {AdoptionDetails}/>
        <Route path = "/adoption/edit/:id" component = {EditAdoptionDetails}/>
        <Route path = "/adoption/add" component = {CreateAdoption}/>

        <Route path = "/animaldashboard" component = {AnimalDashboard}/>
        <Route path="/animal/add" component ={CreateAnimalPortfolio}/>
        <Route path="/animal/update/:id" component={UpdateAnimalPortfolio}/>
        <Route path="/animal/details/:id" component={AnimalDetails}/>





      

        
        
        
         
            

        <Footer/>
      </Router>
    </div>  
    )
  }
}

export default TourApp