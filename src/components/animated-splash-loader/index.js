import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SplashScreen from "../splash-screen";

function AnimatedAppLoader({ children, image }) {
  const [isSplashReady, setSplashReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      setSplashReady(true);
    }

    prepare();
  }, [image]);

  if (!isSplashReady) {
    return null;
  }

  return <SplashScreen image={image}>{children}</SplashScreen>;
}

export default AnimatedAppLoader;
AnimatedAppLoader.propTypes = {
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  image: PropTypes.object.isRequired,
};
