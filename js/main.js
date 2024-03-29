
const scene = new THREE.Scene();//create a scene
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );//create a camera
const renderer = new THREE.WebGLRenderer();//create the graphics into the canvas


renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const light = new THREE.AmbientLight( 0xffffff ); // soft white light
scene.add( light );

// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

camera.position.z = 5;

const loader = new THREE.GLTFLoader();
loader.load("../models/scene.gltf", function(gltf){
    scene.add(gltf.scene);

})

function animate() {//function that constantly animates/render the scene

	renderer.render( scene, camera );
	requestAnimationFrame( animate );

}
animate();