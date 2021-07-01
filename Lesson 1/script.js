console.log(THREE)
const scene = new THREE.Scene()

//red cube
//box =  lbh(1,1,1)
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({ color: 0xf13452})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

//camera to see the objects perspective(view in degrees angle, aspect ratio, )
const sizes = { width: 800, height: 600}
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height)
//changing camera position at z axis to see the scene
camera.position.z = 3
scene.add(camera)

//renderer
const canvas =  document.querySelector(".webgl")
const renderer = new THREE.WebGLRenderer({canvas
})
//changing canvas size
renderer.setSize(sizes.width, sizes.height)
//rendering the scene with camera at both at (0,0,0) position
renderer.render(scene, camera)
