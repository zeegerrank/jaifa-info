import React from "react";
const Map = (props) => {
  const smallMap = (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1319.6755322100742!2d100.76851105658655!3d14.81336751435377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311e07ba8c7f63a7%3A0xbf60333bbfd07b37!2z4LmD4LiI4Lif4LmJ4Liy4Lif4Liy4Lij4LmM4LihIC0gSmFpIEZhIEZhcm0!5e1!3m2!1sen!2sth!4v1673408858082!5m2!1sen!2sth"
      style={{ border: 0, width: 400, height: 300 }}
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    />
  );
  const mediumMap = (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1319.6755322100742!2d100.76851105658655!3d14.81336751435377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311e07ba8c7f63a7%3A0xbf60333bbfd07b37!2z4LmD4LiI4Lif4LmJ4Liy4Lif4Liy4Lij4LmM4LihIC0gSmFpIEZhIEZhcm0!5e1!3m2!1sen!2sth!4v1673408858082!5m2!1sen!2sth"
      style={{ border: 0, width: 600, height: 450 }}
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    />
  );
  const largeMap = (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1319.6755322100742!2d100.76851105658655!3d14.81336751435377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311e07ba8c7f63a7%3A0xbf60333bbfd07b37!2z4LmD4LiI4Lif4LmJ4Liy4Lif4Liy4Lij4LmM4LihIC0gSmFpIEZhIEZhcm0!5e1!3m2!1sen!2sth!4v1673408858082!5m2!1sen!2sth"
      style={{ border: 0, width: 800, height: 600 }}
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    />
  );

  const shownMap = (chosenSize) => {
    if (chosenSize === "s") {
      return smallMap;
    } else if (chosenSize === "m") {
      return mediumMap;
    } else if (chosenSize === "l") {
      return largeMap;
    }
  };
  return <>{shownMap(props.size)}</>;
};

export default Map;
