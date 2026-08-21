import "./Requestform.css";
function Requestform() {
    return (

        <div className="Request-container">

            <form className="Request-Form">
                <h2>MAINTENANCE REQUEST FORM </h2>

                <div className="input-group">
                    <label>Full name</label>
                    <input type="text" id="name" placeholder="Enter first name"></input>

                    <label>Email</label>
                    <input type="email" id="email" placeholder="Example@gmail.com"></input>

                    <label>Address</label>
                    <input type="text" id="address" placeholder="Enter your Address"></input>

                    <label>Phone number</label>
                    <input type="tel" id="phone" placeholder="06xxxxxxxxx"></input>

                    <label> Appointment Day</label>
                    <input type="day" id="time" placeholder="Tell us which day you wish arrive"></input>

                    <label> Appointment time</label>
                    <input type="time" id="time" placeholder="Tell us which time you wish arrive"></input>

                    <label>Device Type</label>
                    <input type="text" id="device" placeholder="Eg..Grinder or Water pump..."/>
                    
                    <label>Message</label>
                    {/* <textarea defaultValue="Explan your device problem here..."/>
{/*  */}
                    <textarea  id="message"placeholder="Please you can explain your problem here shortly"/>
                 
                    {/* <button onClick="Submit()">Submit</button> */}

                    <button>Submit request</button>
                    
                   
                    

                    <div id="result"></div>



                </div>

            </form>

        </div>
        


    );

}
export default Requestform;