import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

const Particle = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}
          options={{
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: false,
                  mode: "push",
                },
                onHover: {
                  enable: false,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 0.5,
                },
                repulse: {
                  distance: 50,
                  duration: 0.7,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: false,
                opacity: 0.9,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: true,
                speed: 0.2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 100,
                },
                value: 1500,
              },
              opacity: {
                value: 1,
                random: true,
                anim: {
                  enable: true,
                  speed: 0.5,
                  opacity_min: 1,
                  sync: false,
                },
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 0.5, max: 1 },
                random: true,
                anim: {
                  enable: true,
                  speed: 0.5,
                  size_min: 0.5,
                  sync: false,
                },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </>
  );
};

export default Particle;
