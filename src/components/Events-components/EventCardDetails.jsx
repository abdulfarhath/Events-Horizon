import React from "react";
import { useParams } from "react-router-dom";
// import '../styles/EventDetails.css'
import "../../styles/EventDetails.css";
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

function EventCardDetails() {
  const { id } = useParams(); // Extracting event id from URL params

  // Example data for event details (replace with actual data retrieval)
  const eventData = {
    1: {
      title: "Cultural Events",
      image: "../assets/cultural-event.jpg", // Replace with actual path or import
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      eligibility: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      rewards: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    2: {
      title: "Technical Events",
      image: "../assets/technical-event.jpg", // Replace with actual path or import
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      eligibility: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      rewards: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    // Add more as per your eventsData
  };

  const event = eventData[id];

  if (!event) return <div>Event not found</div>;

  return (
    <div className="det-page">
      <Navbar></Navbar>
      <div className="event-details">
        <img src={event.image} alt={event.title} className="event-image" />
        <h2>{event.title}</h2>
        <p>
          <strong>About:</strong>
          <br />
          <br />
          {event.about}
        </p>
        {/* <br /> */}
        <p>
          <strong>Eligibility:</strong>
          <br />
          <br /> {event.eligibility}
        </p>
        <p>
          <strong>Rewards:</strong> <br /> <br />
          {event.rewards}
        </p>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default EventCardDetails;
