import React, { Suspense, useRef } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { Box, OrbitControls, Stars } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Model from "./Scene";

// function Model() {
//   const gltf = useLoader(GLTFLoader, "/scene.gltf");
//   const group = useRef();

//   useFrame(() => {
//     group.current.rotation.y += 0.01; // Adjust the rotation speed as needed
//   });

//   return (
//     <group ref={group}>
//       <primitive object={gltf.scene} />
//     </group>
//   );
// }

function App() {
  return (
    <Canvas style={{ width: "100vw", height: "100vh" }}>
      <ambientLight intensity={0.5} />
      <directionalLight
        intensity={0.8}
        position={[5, 10, -5]} // Adjust the position as needed
        color="#ffffff" // Adjust the color as needed
      />
      <pointLight intensity={0.8} position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}

export default App;
