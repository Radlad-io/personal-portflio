import { useRouter } from "next/router";
import { FC, Suspense, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import styles from "./Experience.module.scss";
import {
  OrbitControls,
  OrthographicCamera,
  PerformanceMonitor,
} from "@react-three/drei";
import Rig from "@components/atoms/Rig/Rig";

//  Loaders
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// Debug
import { useControls } from "leva";
import { Perf } from "r3f-perf";

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

const Experience: FC<Properties> = (props) => {
  // Destructing
  const router = useRouter();

  // State
  const [isZoom, setZoom] = useState(false);
  const toggleZoom = () => setZoom((active) => !active);

  // FIXME: I mean, come on dude.
  const perfVisable = {};
  const [perfSucks, degrade] = useState(false);

  // Effects
  if (router.asPath.includes("#debug")) {
    perfVisable = useControls({
      showPerformance: false,
    });
  }

  // Logic

  // Returns
  return (
    <div className={styles.wrapper}>
      <div className={styles.bg}></div>
      <Canvas id={styles.canvas} dpr={[1, 2]}>
        <PerformanceMonitor
          onDecline={() => degrade(true)}
          onIncline={() => degrade(false)}
        />
        {perfVisable.showPerformance ? <Perf position="top-left" /> : null}
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
        {/* TODO: Suspense keep breaking this */}
        {/* <Suspense fallback={null}>
        </Suspense> */}
        <Rig perfSucks={perfSucks}>
          <Model source={"model.glb"} />
        </Rig>
      </Canvas>
    </div>
  );
};

export default Experience;
