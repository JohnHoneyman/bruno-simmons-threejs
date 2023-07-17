const Placeholder = (props) => {
  return (
    <mesh {...props}>
      <boxGeometry args={[1, 1, 1, 2, 2, 2]} />
      <meshBasicMaterial wireframe color="red" />
    </mesh>
  );
};
// const Placeholder = ({ scale, args, color, wireframe }) => {
//   return (
//     <mesh position-y={0.5} scale={scale}>
//       <boxGeometry args={args} />
//       <meshBasicMaterial wireframe={wireframe} color={color} />
//     </mesh>
//   );
// };

export default Placeholder;
