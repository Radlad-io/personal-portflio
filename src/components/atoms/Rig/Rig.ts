import * as THREE from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

interface Properties {
  // Key: sting any allows for additional unknown types
  [key: string]: any;
  children?: JSX.Element | JSX.Element[];
  current: {} | null;
}

const Rig = ({ children }: Properties) => {
  const ref = useRef();
  useFrame((state) => {
    ref.current.rotation.y = THREE.MathUtils.lerp(
      ref.current.rotation.y,
      (state.mouse.x * Math.PI) / 10,
      0.025
    );
    ref.current.rotation.x = THREE.MathUtils.lerp(
      ref.current.rotation.x,
      (state.mouse.y * Math.PI) / 15,
      0.025
    );
  });
  return (
    <group>{children}</group>;
  ) 
}
