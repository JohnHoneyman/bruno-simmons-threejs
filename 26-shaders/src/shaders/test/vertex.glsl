// uniform mat4 projectionMatrix;
// uniform mat4 modelViewMatrix;
// uniform mat4 modelMatrix;
// uniform mat4 viewMatrix;
uniform vec2 uFrequency;
uniform float uTime;

// attribute vec3 position;
// attribute vec2 uv;

attribute float aRandom;

varying float vRandom;
varying vec2 vUv;
varying float vElevation;

void main(){
    // gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    float elevation = sin(modelPosition.x * uFrequency.x - uTime) * 0.1; 
    elevation += sin(modelPosition.y * uFrequency.y - uTime) * 0.1;

    modelPosition.z += sin(modelPosition.x * uFrequency.x - uTime) * 0.1; 
    modelPosition.z += sin(modelPosition.y * uFrequency.y - uTime) * 0.1; 
    // modelPosition.z += aRandom * 0.1; // Uncomment to have random spikes in fragment
    

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;

    // vRandom = aRandom; // Uncomment to have random colors in fragment
    vUv = uv;
    vElevation = elevation;
}