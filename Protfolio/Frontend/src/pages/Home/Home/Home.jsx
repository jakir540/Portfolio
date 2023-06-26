import { useEffect } from "react";
import "./Home.css";
import * as THREE from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const Home = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.01,
      1000
    );
    const canvas = document.querySelector(".homeCanvas");
    const renderer = new THREE.WebGLRenderer({ canvas });

    const moonGeometry = new THREE.SphereGeometry(3, 64, 64);
    const moonMaterial = new THREE.MeshStandardMaterial({color:0xffffff});

    const pointLight = new THREE.PointLight(0xffffff,1)

    pointLight.position.z= 10

    const lightHelper = new THREE.PointLightHelper(pointLight)
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);
    const controls = new OrbitControls( camera, renderer.domElement );
    scene.add(moon);
    scene.add(pointLight);
    scene.add(lightHelper);

    camera.position.z = 10;

    const animate = () => {
      requestAnimationFrame(animate);
    //   mesh.rotation.z += 0.01;
    // camera.position.x += 0.01
    moon.rotation.x += 0.01
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
