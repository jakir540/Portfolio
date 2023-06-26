import { useEffect } from "react";
import "./Home.css";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import moonImage from "../../../assets/moon.jpg";
import venusImage from "../../../assets/venus.jpg";
import spaceImage from "../../../assets/space.jpg";

const Home = () => {
  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();

    const moonTexture = textureLoader.load(moonImage);
    const venusTexture = textureLoader.load(venusImage);
    const spaceTexture = textureLoader.load(spaceImage);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.01,
      1000
    );
    camera.position.set(4, 4, 8);
    const canvas = document.querySelector(".homeCanvas");
    const renderer = new THREE.WebGLRenderer({ canvas });

    const moonGeometry = new THREE.SphereGeometry(3, 64, 64);
    const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);

    const venusGeometry = new THREE.SphereGeometry(3, 64, 64);
    const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
    const venus = new THREE.Mesh(venusGeometry, venusMaterial);
    venus.position.set(6, 5, 5);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(8,5,5);

    const pointLight2 = new THREE.PointLight(0xffffff, 0.1);
    pointLight.position.set(-8,-5,-5);

    const lightHelper = new THREE.PointLightHelper(pointLight);
    const controls = new OrbitControls(camera, renderer.domElement);
    scene.add(moon);
    scene.add(pointLight);
    scene.add(pointLight2);
    scene.add(lightHelper);
    scene.add(venus);
    scene.background = spaceTexture;


    // add eventListener 

   window.addEventListener("mousemove",(e)=>{
    const rotationSpeed = 0.01
    if (e.clientX <= window.innerWidth /2) {
      moon.rotation.x -= rotationSpeed;
      moon.rotation.y += rotationSpeed;
      venus.rotation.x -= rotationSpeed;
      venus.rotation.y += rotationSpeed;

    }
   else if (e.clientX > window.innerWidth /2) {
      moon.rotation.x -= rotationSpeed;
      moon.rotation.y -= rotationSpeed;
      venus.rotation.x -= rotationSpeed;
      venus.rotation.y -= rotationSpeed;

    }
   else if (e.clientY > window.innerHeight /2) {
      moon.rotation.x -= rotationSpeed;
      moon.rotation.y += rotationSpeed;
      venus.rotation.x -= rotationSpeed;
      venus.rotation.y += rotationSpeed;

    }
    else if (e.clientY <= window.innerHeight /2) {
      moon.rotation.x -= rotationSpeed;
      moon.rotation.y -= rotationSpeed;
      venus.rotation.x -= rotationSpeed;
      venus.rotation.y -= rotationSpeed;

    }

   })
   

   

    const animate = () => {
      requestAnimationFrame(animate);
      //   mesh.rotation.z += 0.01;
      // camera.position.x += 0.01
      moon.rotation.y += 0.001;
      venus.rotation.y += 0.001;
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    };

    animate();
  }, []);
  return (
    <div className="home">
      <canvas className="homeCanvas"></canvas>
    </div>
  );
};

export default Home;
