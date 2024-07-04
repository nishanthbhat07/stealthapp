import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SplashScreen from "../splash-screen";

function AnimatedAppLoader({ children, image }) {
  // State to track if the splash screen is ready to be shown
  const [isSplashReady, setSplashReady] = useState(false);

  useEffect(() => {
    // Asynchronous function to prepare the splash screen
    async function prepare() {
      // In this simplified version, we're just setting splashReady to true
      // In a real app, you might want to load resources or perform other setup here
      setSplashReady(true);
    }

    // Call the prepare function
    prepare();
  }, [image]); // Effect depends on the image prop

  // If splash is not ready, render nothing
  if (!isSplashReady) {
    return null;
  }

  // Once splash is ready, render the SplashScreen component
  return <SplashScreen image={image}>{children}</SplashScreen>;
}

export default AnimatedAppLoader;

// PropTypes for type checking
AnimatedAppLoader.propTypes = {
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  image: PropTypes.object.isRequired,
};
