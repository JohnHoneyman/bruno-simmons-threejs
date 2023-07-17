import { useGLTF } from "@react-three/drei";

const Hamburger = (props) => {
  const { nodes, materials } = useGLTF("./hamburger-draco.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bottomBun.geometry}
        material={materials.BunMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.meat.geometry}
        material={materials.SteakMaterial}
        position={[0, 2.817, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cheese.geometry}
        material={materials.CheeseMaterial}
        position={[0, 3.04, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.topBun.geometry}
        material={materials.BunMaterial}
        position={[0, 1.771, 0]}
      />
    </group>
  );
};

export default Hamburger;

useGLTF.preload("./hamburger-draco.glb");
