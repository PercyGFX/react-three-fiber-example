import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Box, OrbitControls, Stars } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Model() {
  const gltf = useLoader(GLTFLoader, "/scene.gltf");

  // Traverse through the model's children and set the color of each mesh
  gltf.scene.traverse((child) => {
    if (child.isMesh) {
      child.material.color.set("#ff0000"); // Set color to red
    }
  });

  return <primitive object={gltf.scene} />;
}

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
