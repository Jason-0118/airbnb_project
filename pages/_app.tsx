import '../styles/globals.css'
import type { AppProps } from 'next/app'
//https://www.npmjs.com/package/@badrap/bar-of-progress
import ProgressBar from "@badrap/bar-of-progress";
//make progress connection with router
import Router from "next/router"
import "mapbox-gl/dist/mapbox-gl.css";

const progress = new ProgressBar({
  size: 4,
  color: "#FE595E",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start)
Router.events.on("routeChangeComplete", progress.finish)
Router.events.on("routeChangeError", progress.finish)

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp


