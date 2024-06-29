import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EventsCard from "../components/Events-components/EventsCard";
import "../styles/EventsRoute.css";

function EventsRoute() {
  const eventsData = [
    {
      id: 1,
      image: "../assets/cultural-event.jpg",
      title: "Cultural Events",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      image: "../assets/tech-event.webp",
      title: "Technical Events",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      image: "../assets/sports-event.jpg",
      title: "Sports Events",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 4,
      image: "../../assets/film-making-event.jpg",
      title: "Film Making Events",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <div className="events-page">
      <Navbar />
      <div className="container-evt">
        <div className="events-page-hero">
          {eventsData.map((event) => (
            <Link key={event.id} to={`/event/${event.id}`}>
              <EventsCard
                className="evt-crd"
                image={event.image}
                title={event.title}
                data={event.description}
              />
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EventsRoute;
