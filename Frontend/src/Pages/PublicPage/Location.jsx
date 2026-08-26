import Map from "../../Components/Map";

function Location() {

  return (

    <div>

      {/* Page title */}
      <h1
        style={{
          textAlign: "center",
        }}
      >
        📍 Our Location
      </h1>


      {/* Small description */}
      <p
        style={{
          textAlign: "center",
        }}
      >
        Find our site and your current location on the map.
      </p>


      {/* Display the Leaflet map */}
      <Map />

    </div>

  );
}

export default Location;