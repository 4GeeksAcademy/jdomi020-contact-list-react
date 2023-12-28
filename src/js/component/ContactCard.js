import { useState } from "react";

function ContactCard({ contact }){

    return(
       <div className="contactCardContainer">
        <div className="contactImage"></div>
        <div className="contactInformation">
            <h2>Contact Details</h2>
            <p>Name: {contact.name}</p>
            <p>Email: {contact.email}</p>
            <p>Phone: {contact.phone}</p>
            <p>Address: {contact.address}</p>
        </div>
        <div className="rightButtons"></div>
       </div> 
    );
}

export default ContactCard;