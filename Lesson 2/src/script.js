import "./style.css";
import * as THREE from "three";
console.log(THREE);

const scene = new THREE.Scene();

//

//red cube
//box =  lbh(1,1,1)
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xf13452 });
const mesh = new THREE.Mesh(geometry, material);
mesh.position.z = 2;
// scene.add(mesh);

//object properties
//position,scale,rotation,quaternion
console.log(mesh.position.length());
//makes the position (1,1,1)
mesh.position.normalize();
mesh.position.set(0, 0, 0);
mesh.scale.set(0.5, 0.7, 0.2);
// half rotaion = 3.14 or Math.PI
mesh.rotation.reorder("xyz");
mesh.rotation.set(0.1, 0.4, Math.PI - 2);

//

//

//creating groups

const group = new THREE.Group();
scene.add(group);
const cube1 = new THREE.Mesh(
	new THREE.BoxGeometry(1, 1, 1),
	new THREE.MeshBasicMaterial({ color: "red" })
);
const cube2 = new THREE.Mesh(
	new THREE.BoxGeometry(1, 1, 1),
	new THREE.MeshBasicMaterial({ color: "green" })
);
const cube3 = new THREE.Mesh(
	new THREE.BoxGeometry(1, 1, 1),
	new THREE.MeshBasicMaterial({ color: "blue" })
);
cube1.position.set(2, 0, 0);
cube2.position.set(-2, 0, 0);
cube3.position.set(0, 0, 0);

group.add(cube1, cube2, cube3);
//

//axis helper
const axisHelper = new THREE.AxesHelper(2);
scene.add(axisHelper);

//

//camera to see the objects perspective(view in degrees angle, aspect ratio, )
const sizes = { width: 800, height: 600 };
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
scene.add(camera);

//changing camera position at z axis to see the scene
camera.position.set(0, 0, 3);
//looking at something
// camera.lookAt(mesh.position);
//distance of camera from mesh
console.log(mesh.position.distanceTo(camera.position));

//

//renderer (it should be the last code)
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({ canvas });
//changing canvas size
renderer.setSize(sizes.width, sizes.height);
//rendering the scene with camera at both at (0,0,0) position
renderer.render(scene, camera);
