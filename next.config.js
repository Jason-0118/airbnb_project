/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com"],
  },
  //only for public key
  env:{
    mapbox_key: "pk.eyJ1IjoiemhhbnhpbjIiLCJhIjoiY2w5dXR1OTE5MDJlMTN0bzYxbnp3NTRzZiJ9.7KJsMfG-ujvaz1HYf3mRvA"
  }
}
