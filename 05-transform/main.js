console.log("hello");
import * as THREE from 'three';

//Scene
const scene = new THREE.Scene();


/**
 * object
 */
const group  = new THREE.Group();
scene.add(group)
group.position.y = 1
group.scale.y = 2;
group.rotation.y = 1;
const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1,1,1),
  new THREE.MeshBasicMaterial({color: 0xff0000})
)

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1,1,1),
  new THREE.MeshBasicMaterial({color: 0x00ff00})
)
const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1,1,1),
  new THREE.MeshBasicMaterial({color: 0x0000ff})
)
group.add(cube1, cube2, cube3)
cube2.position.x = -2;
cube3.position.x = 2;

//Blue cube
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({color: 'blue'});
// const mesh = new THREE.Mesh(geometry, material);

// scene.add(mesh);

// Position
// mesh.position.x = 0.7;
// mesh.position.y = -0.6;
// mesh.position.z = 1
// mesh.position.set(0.7, -0.6, 1);

// // mesh.position.normalize()
// console.log("mesh.position.length(): ", mesh.position.length());


// // Scale
// mesh.scale.set(2, 0.5, 0.5)

// // Rotation
// mesh.rotation.reorder('YXZ')
// mesh.rotation.x = Math.PI / 4;

// mesh.rotation.y = Math.PI / 4;

// Axes helper
const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);

// Size
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height);
camera.position.z = 3;
// camera.position.y = 1
// camera.position.x = 1;
// camera.position.set(3, 1, 1)
scene.add(camera);
// camera.lookAt(new THREE.Vector3(3, 0, 0))
// camera.lookAt(mesh.position)
// console.log("mesh.position.distanceTo(camera.position): ", mesh.position.distanceTo(camera.position));

// Renderer
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);