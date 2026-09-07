
// We use useState to store the user's current location.
import { useState } from "react";


// Import required components from React-Leaflet.
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";


// Import Leaflet.
import L from "leaflet";


// Importing Leaflet CSS.
// Without this CSS, the map will not display correctly.
import "leaflet/dist/leaflet.css";


// This code tells Leaflet where to find its marker images.
// ---------------------------------------------------------

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({

  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",

  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",

  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",

});



// ---------------------------------------------------------
// FIND LOCATION BUTTON
// ---------------------------------------------------------
//
// This component creates the "Find My Location" button.
//
// It uses the browser's built-in Geolocation API.
// ---------------------------------------------------------

function FindLocationButton({ setUserLocation }) {
  // Get access to the Leaflet map.
  const map = useMap();


 
  // Function executed when the user clicks the button.
  const findMyLocation = () => {

    // Check whether the browser supports geolocation.
    if (!navigator.geolocation) {

      alert(
        "Your browser does not support location services."
      );

      return;
    }


    // Ask the browser for the user's current location.
    navigator.geolocation.getCurrentPosition(

     
      // SUCCESS
      (position) => {

        // Get latitude.
        const latitude =
          position.coords.latitude;


        // Get longitude.
        const longitude =
          position.coords.longitude;

        // Create an array containing the coordinates.
        const location = [
          latitude,
          longitude,
        ];


        // Save user's location in React state.
        setUserLocation(location);


        // Move the map to the user's location.
        map.flyTo(
          location,

          // Zoom level after finding the user.
          16,

          // Animation settings.
          {
            duration: 1.5,
          }
        );
      },


      // ERROR
      (error) => {

        console.error(
          "Location error:",
          error
        );

        alert(
          "Unable to find your location. Please allow location access in your browser.");
      },

      // OPTIONS
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  };


  
  // BUTTON UI
  return (

    <button
      onClick={findMyLocation}

      style={{
        position: "absolute",
        top: "20px",
        right: "20px",
        zIndex: 1000,
        padding: "12px 18px",
        backgroundColor: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "15px",
        fontWeight: "bold",
        boxShadow:
          "0 2px 8px rgba(0,0,0,0.3)",
      }}
    >

      Find My Location

    </button>
  );
}


// MAIN MAP COMPONENT

function Map() {



  const site = {

    name: "IronPulse restoration group",

    address:
      "MIcheweni,kaskazini, pemba",

    description:
      "We deals with technological mecahnical solutions",

    phone:"+255 627496194--Email: allyfaki@gmail.com",


    latitude: -4.987389,

    longitude: 39.8333,

  };


  // -------------------------------------------------------
  // USER LOCATION
  // -------------------------------------------------------
  //
  // Initially the user location is null.
  //
  // When the user clicks "Find My Location", the browser
  // provides the latitude and longitude.
  // -------------------------------------------------------

  const [userLocation, setUserLocation] =
    useState(null);



  // -------------------------------------------------------
  // RETURN THE MAP
  // -------------------------------------------------------

  return (

    <div
      style={{

        position: "relative",

        width: "100%",

        height: "600px",

      }}
    >


      {/* -------------------------------------------------
          LEAFLET MAP CONTAINER
          
          center:
          Initial position of the map.

          zoom:
          Initial zoom level.

          scrollWheelZoom:
          Allows the user to zoom using the mouse wheel.

          dragging:
          Allows the user to drag the map.
      -------------------------------------------------- */}

      <MapContainer

        center={[
          site.latitude,
          site.longitude,
        ]}

        zoom={13}

        scrollWheelZoom={true}

        dragging={true}

        style={{

          width: "100%",

          height: "100%",

        }}

      >


        {/* -------------------------------------------------
            OPENSTREETMAP TILE
           
            This provides the actual map tiles.

            It does not require our own backend.
        -------------------------------------------------- */}

        <TileLayer

          attribution='&copy; OpenStreetMap contributors'

          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

        />



        {/* -------------------------------------------------
            FIXED MARKER FOR OUR SITE
        -------------------------------------------------- */}

        <Marker

          position={[
            site.latitude,
            site.longitude,
          ]}

        >


          {/* ------------------------------------------------
              SITE POPUP
              
              This popup appears when the user clicks
              the site marker.
          ------------------------------------------------- */}

          <Popup>

            <div>

              <h3>
                📍 {site.name}
              </h3>


              <p>

                <strong>
                  Address:
                </strong>

                <br />

                {site.address}

              </p>


              <p>

                <strong>
                  Description:
                </strong>

                <br />

                {site.description}

              </p>


              <p>

                <strong>
                  Phone:
                </strong>

                <br />

                {site.phone}

              </p>


              <p>

                <strong>
                  Coordinates:
                </strong>

                <br />

                Latitude: {site.latitude}

                <br />

                Longitude: {site.longitude}

              </p>

            </div>

          </Popup>

        </Marker>



        {/* -------------------------------------------------
            USER LOCATION MARKER
           
            This marker only appears after the user clicks
            "Find My Location" and gives permission.
        -------------------------------------------------- */}

        {userLocation && (

          <Marker
            position={userLocation}
          >

            <Popup>

              <div>

                <h3>
                  📍 Your Location
                </h3>


                <p>
                  You are currently here.
                </p>


                <p>

                  <strong>
                    Latitude:
                  </strong>

                  <br />

                  {userLocation[0]}

                </p>


                <p>

                  <strong>
                    Longitude:
                  </strong>

                  <br />

                  {userLocation[1]}

                </p>

              </div>

            </Popup>

          </Marker>

        )}



        {/* -------------------------------------------------
            FIND MY LOCATION BUTTON
        -------------------------------------------------- */}

        <FindLocationButton
          setUserLocation={setUserLocation}
        />


      </MapContainer>

    </div>
  );
}


export default Map;