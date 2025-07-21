import React from "react";

const defaultImage = "https://via.placeholder.com/215";

function About({ image = defaultImage, about = "About this blog" }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;