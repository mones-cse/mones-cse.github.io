"use client"
import React, { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { MoveDirection, OutMode } from '@tsparticles/engine';

const ParticleDemo = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#000000",
        },
      },
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      particles: {
        color: {
          value: ["#FFF"],
          // animation: {
            // enable: true,
            // speed: 200,
            // sync: false
          // }
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default:OutMode.bounce,
          },
          random: true,
          speed: 1,
          straight: false,
          attract: {
            enable: true,
            rotateX: 600,
            rotateY: 1200
          }
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 200,
        },
        opacity: {
          value: 0.8,
          random: true,
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 0.1,
            sync: false
          }
        },
        shape: {
          type: ["circle"],
        },
        size: {
          value: { min: 1, max: 1 },
          random: true,
          animation: {
            enable: true,
            speed: 4,
            minimumValue: 0.3,
            sync: false
          }
        },
        links: {
          enable: false,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        interactivity: {
          detect_on: "window",
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
          },
        },
      },
    }),
    []
  );

  return (
    <div className="h-screen w-full ">
      {init && (
        <Particles
          id="tsparticles"
          options={options}
        />
      )}
    </div>
  );
};

export default ParticleDemo;