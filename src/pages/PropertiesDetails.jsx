import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../CSS/PropertyDetails.css";

import properties from "../data/propertyData";

function PropertyDetails() {
  const { id } = useParams();

  const property = properties.find(
    (item) => item.id === Number(id)
  );

  if (!property) {
    return (
      <>
        <Navbar />

        <main className="property-not-found">
          <h1>Property Not Found</h1>

          <Link to="/properties">
            Back to Properties
          </Link>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="property-details-page">

        <section className="property-details">

          <div className="property-details-image">
            <img
              src={property.image}
              alt={property.name}
            />
          </div>

          <div className="property-details-content">

            <p className="property-details-location">
              📍 {property.location}
            </p>

            <h1>{property.name}</h1>

            <h2>{property.price}</h2>

            <p className="property-details-description">
              {property.description}
            </p>

            <div className="property-features">

              <div>
                <strong>{property.type}</strong>
                <span>Property Type</span>
              </div>

              <div>
                <strong>{property.bedrooms}</strong>
                <span>Bedrooms</span>
              </div>

              <div>
                <strong>{property.bathrooms}</strong>
                <span>Bathrooms</span>
              </div>

              <div>
                <strong>{property.area}</strong>
                <span>Area</span>
              </div>

            </div>

            <div className="property-details-actions">

              <button className="contact-property-btn">
                Contact Us
              </button>

              <Link
                to="/properties"
                className="back-properties-btn"
              >
                Back to Properties
              </Link>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default PropertyDetails;