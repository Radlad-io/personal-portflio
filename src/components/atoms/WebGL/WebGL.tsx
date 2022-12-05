import { FC, Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import styles from "./WebGL.module.scss";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";

//  Loaders
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

interface Properties {
  // Key: sting any allows for additional unknown types
  [key: string]: any;
  children?: JSX.Element | JSX.Element[];
}

const Model = (props: any) => {
  const { source, position, scale, rotation } = props;
  const gltf = useLoader(GLTFLoader, source);
  return (
    <primitive
      object={gltf.scene}
      position={position}
      rotation={rotation}
      scale={scale}
    />
  );
};

const WebGL: FC<Properties> = (props) => {
  // Destructing

  // State
  const [isZoom, setZoom] = useState(false);
  const toggleZoom = () => setZoom((active) => !active);

  // Effects

  // Logic

  // Returns
  return (
    <div className={styles.wrapper}>
      <Canvas id={styles.canvas} dpr={[1, 2]}>
        <OrthographicCamera
          makeDefault={true}
          frames={1}
          zoom={600}
          top={200}
          bottom={-200}
          left={200}
          right={-200}
          near={1}
          far={2000}
          position={[0, 0, 300]}
        />
        <ambientLight intensity={0.5} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.75}
          penumbra={0.5}
          intensity={0.75}
        />
        <pointLight position={[-10, -10, -10]} />
        <Suspense fallback={null}>
          <Model source={"mockup.glb"} position={[-0.25, -1.85, 0]} />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default WebGL;
