import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";

const GoogleMap = () => {
  //   const [position, setPosition] = useState("");
  const position = { lat: 43.6532, lng: -79.3832 };

  // navigator.geolocation.getCurrentPosition((positon) => {
  //   setPosition({ latitude, longitude });
  //   console.log(latitude , longitude , 'sasas');
  // });

  return (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232861.16904763048!2d69.11456084252347!3d41.282479934139765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2z0KLQsNGI0LrQtdC90YIsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e1!3m2!1sru!2s!4v1705492665486!5m2!1sru!2s"
        style={{border:"0" , width:"880px" , height:"416px"}}
        allowFullScreen="true"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
  );
};

export default GoogleMap;
