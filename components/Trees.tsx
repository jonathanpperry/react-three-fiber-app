import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

const Trees = () => {
  const model = useLoader(GLTFLoader, "./models/tree.glb");

  model.scene.traverse((object) => {
    if (object.isMesh) {
      object.castShadow = true;
    }
  });

  return <primitive object={model.scene} />;
};

export default Trees;