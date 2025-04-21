
  //scene
  const scene = new THREE.Scene();

  //camera
  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  camera.position.z = 5;
  scene.add(camera);

  //mesh-> geometry and material
  const geometry = new THREE.BoxGeometry( 1, 1, 1 );
  const material = new THREE.MeshBasicMaterial( { color: "red" } );
  const mesh = new THREE.Mesh( geometry, material );


  scene.add( mesh );
  //renderer
  const canvas = document.querySelector("#draw");
  const renderer = new THREE.WebGLRenderer({canvas, antialias: true});
  renderer.setSize( window.innerWidth, window.innerHeight );
  //request animation frame
  renderer.render(scene, camera);

  const clock = new THREE.Clock();
  function animate(){
    window.requestAnimationFrame(animate);
    renderer.render(scene, camera);
    mesh.rotation.y=clock.getElapsedTime()*2;
  }
  animate();
