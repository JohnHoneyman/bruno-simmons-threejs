import { useThree, extend, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import CustomObject from "./CustomObject";

// extend({ OrbitControls: OrbitControls });
extend({ OrbitControls });

const Experience = () => {
  const { camera, gl } = useThree();

  const cubeRef = useRef();
  const groupRef = useRef();

  useFrame((state, delta) => {
    // const angle = state.clock.elapsedTime;
    // state.camera.position.x = Math.sin(angle) * 8;
    // state.camera.position.z = Math.cos(angle) * 8;
    // state.camera.lookAt(0, 0, 0);

    cubeRef.current.rotation.y += delta; // delta used for time
    // groupRef.current.rotation.y += delta;
  });

  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />

      <directionalLight position={[1, 2, 3]} />
      <ambientLight intensity={0.5} />

      <group ref={groupRef}>
        <mesh position-x={-2}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>

        {/* <mesh scale={[3, 2, 1]}> */}
        {/* <mesh position={[2, 0, 0]} scale={1.5}> */}
        <mesh
          ref={cubeRef}
          rotation-y={Math.PI * 0.23}
          position-x={3}
          scale={1.5}
        >
          {/* <sphereGeometry args={[1.5, 32, 32]} /> */}
          <boxGeometry scale={1.05} />
          <meshStandardMaterial color="mediumpurple" wireframe={false} />
        </mesh>
      </group>

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>

      <CustomObject />
    </>
  );
};

export default Experience;
