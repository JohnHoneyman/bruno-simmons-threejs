import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

/**
 * Base
 */
// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Object
// const geometry = new THREE.BoxBufferGeometry(1, 1, 1, 4, 4, 4);
// const geometry = new THREE.BufferGeometry();

// // TODO: This creates random triangles
// const vertices = [];
// const indices = [];
// for (let i = 0; i < 50; i++) {
//   for (let j = 0; j < 3; j++) {
//     const vertex = new THREE.Vector3(
//       (Math.random() - 0.5) * 4,
//       (Math.random() - 0.5) * 4,
//       (Math.random() - 0.5) * 4
//     );
//     vertices.push(vertex.x, vertex.y, vertex.z);
//   }
//   const verticesIndex = i * 3;

//   indices.push(verticesIndex, verticesIndex + 1, verticesIndex + 2);
// }
// const positions = new Float32Array(vertices);
// const faces = new Uint32Array(indices);
// geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
// geometry.setIndex(new THREE.BufferAttribute(faces, 1));

// // TODO: Process of creating a triangle
// const vertices = new Float32Array([
//   -1.0,
//   -1.0,
//   1.0, // v0
//   1.0,
//   -1.0,
//   1.0, // v1
//   1.0,
//   1.0,
//   1.0, // v2
// ]);
// const indices = new Float32Array([0, 1, 2]);
// geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
// geometry.setIndex(new THREE.BufferAttribute(indices, 1));

// // TODO: Another way of adding custom shapes.
// const geometry = new THREE.BufferGeometry();
// const positionsArray = new Float32Array();
// positionsArray[0] = 0;
// positionsArray[1] = 0;
// positionsArray[2] = 0;
// positionsArray[3] = 0;
// positionsArray[4] = 1;
// positionsArray[5] = 0;
// positionsArray[6] = 1;
// positionsArray[7] = 0;
// positionsArray[8] = 0;
// const positionsAttribute = new THREE.BufferAttribute(positionsArray, 3);
// geometry.setAttribute("position", positionsAttribute);

const geometry = new THREE.BufferGeometry();
const count = 50;
const positionsArray = new Float32Array(count * 3 * 3);
// Count means 50 triangles with 3 vertices and each vertex will be composed of 3 values

for (let i = 0; i < count * 3 * 3; i++) {
  positionsArray[i] = (Math.random() - 0.5) * 4;
}

const positionsAttribute = new THREE.BufferAttribute(positionsArray, 3);
geometry.setAttribute("position", positionsAttribute);

const material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
camera.position.z = 3;
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Animate
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
