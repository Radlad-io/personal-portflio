import { FC, useRef } from "react";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";

interface Properties {
  children: JSX.Element | JSX.Element[];
  perfSucks: boolean;
}

const Rig: FC<Properties> = (props) => {
  // Destructing
  const { children, perfSucks } = props;

  // State

  // Effects

  // Logic
  const ref = useRef();
  useFrame((state, delta) => {
    // Animate the environment as well as the camera
    if (!perfSucks) {
      easing.damp3(
        ref.current.rotation,
        [0, state.pointer.x / 4, 0],
        0.2,
        delta
      );
      easing.damp3(
        state.camera.position,
        [
          Math.sin(state.pointer.x / 4) * 9,
          0.25 + state.pointer.y,
          Math.cos(state.pointer.x / 4) * 9,
        ],
        0.5,
        delta
      );
      state.camera.lookAt(0, 0, 0);
    }
  });
  // Returns
  return (
    <group position={[-1.25, -1.85, 0]}>
      <group ref={ref}>{children}</group>
    </group>
  );
};

export default Rig;
