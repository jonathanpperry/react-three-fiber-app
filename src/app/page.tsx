"use client";
import { NextPage } from "next";
import { Canvas } from "@react-three/fiber";
// Relative
import { OrbitControls, Stats, useTexture } from "@react-three/drei";
import Lights from "../../components/Lights";
import Ground from "../../components/Ground";

import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Tree = () => {
  const model = useLoader(GLTFLoader, "./models/tree.glb");

  model.scene.traverse((object) => {
    if (object.isMesh) {
      object.castShadow = true;
    }
  })

  return <primitive object={model.scene} />;
};

const TexturedSpheres = () => {
  const map = useTexture("./textures/pavement_04_diff_1k.png");
  const normalMap = useTexture("./textures/pavement_04_nor_gl_1k.png");
  const roughnessMap = useTexture("./textures/pavement_04_rough_1k.png");
  return (
    <>
      <mesh scale={[0.5, 0.5, 0.5]} position={[0, 1, 0]} castShadow>
        <sphereGeometry />
        <meshStandardMaterial
          map={map}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
        />
      </mesh>
    </>
  );
};

const Home: NextPage = () => {
  const testing = true;

  return (
    <div className="container">
      <Canvas shadows>
        {testing ? <Stats /> : null}
        {testing ? <axesHelper args={[2]} /> : null}
        {testing ? <gridHelper args={[10, 10]} /> : null}
        <OrbitControls />
        <TexturedSpheres />
        <Tree />
        <Lights />
        <Ground />
      </Canvas>
    </div>
  );
};
export default Home;
