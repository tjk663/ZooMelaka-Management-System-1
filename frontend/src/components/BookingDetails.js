import React, { Component } from 'react'
import axios from 'axios';
import '../CSS/booking-details.css'


class BookingDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            booking:{}
        };
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`http://localhost:8015/booking/${id}`).then((res)=>{
            
        if(res.data.success){
                this.setState({
                        booking:res.data.booking
                });

                console.log(this.state.booking);
            }
           
        });
     
                
    }




    render() {

        const { CustomerName,CustomerEmail,MobileNumber,TourOption,Date,Time,TourGuideName} =this.state.booking;

  
        return (
            <div>
            <div className="col-md-8 mt-4 mx-auto" id="edit-booking-body">
                    <h1>    Booking Details</h1> 
                    <br/>
                    <br/>
                    <div className="details-form">
                     <form>
                    <div class="form-group">
                        <label for="emailC">Email address</label>
                        <input type="email" class="form-control" id="emailC" placeholder={CustomerEmail} disabled/>
                    </div>
                    <br/>
                    <div class="form-group">
                    <label for="cName">Customer Name</label>
                        <input type="text" class="form-control" id="cName" placeholder={CustomerName} disabled/>
                        
                    </div>
                    <br/>
                    <div class="form-group">
                    <label for="MobileNo">Mobile Number</label>
                        <input type="text" class="form-control" id="MobileNo" placeholder={MobileNumber}  disabled/>
                        
                    </div>
                    <br/>
                    <div class="form-group">
                    <label for="TourOp">Tour Option</label>
                        <input type="text" class="form-control" id="TourOp" placeholder={TourOption} disabled/>
                        
                    </div>
                    <br/>
                    <div class="form-group">
                    <label for="Date">Date</label>
                        <input type="text" class="form-control" id="Date" placeholder={Date} disabled/>
                        
                    </div>
                    <br/>
                    <div class="form-group">
                    <label for="Time">Allocated time</label>
                        <input type="text" class="form-control" id="Time" placeholder={Time} disabled/>
                        
                    </div>
                    <br/>
                    <div class="form-group">
                    <label for="TName">Tour Guide Name</label>
                        <input type="text" class="form-control" id="TName" placeholder={TourGuideName}disabled />
                        
                    </div>
                   
                    </form>
                    </div>

                                        





            </div> <br/><br/>
            </div>
            
        )
    }
}

export default BookingDetails