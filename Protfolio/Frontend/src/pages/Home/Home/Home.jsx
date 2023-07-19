import { useEffect } from "react";
import "./Home.css";
import * as THREE from "three";
import moonImage from "../../../assets/moon.jpg";
import venusImage from "../../../assets/venus.jpg";
import spaceImage from "../../../assets/space.jpg";
import { Typography } from "@mui/material";
import TimeLine from "../TimeLine/TimeLine";
import ressume from "../../../assets/Jakir hossain ressume.pdf";
import { FaDownload } from "react-icons/fa";
import timelines from "../../../../public/timeline.json"


import {
  SiChai,
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiThreedotjs,
} from "react-icons/si";

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
    venus.position.set(8, 5, 5);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(8, 5, 5);

    const pointLight2 = new THREE.PointLight(0xffffff, 0.1);
    pointLight2.position.set(-8, -5, -5);

    const lightHelper = new THREE.PointLightHelper(pointLight);
    // const controls = new OrbitControls(camera, renderer.domElement);
    scene.add(moon);
    scene.add(pointLight);
    scene.add(pointLight2);
    scene.add(lightHelper);
    scene.add(venus);
    scene.background = spaceTexture;

    // add eventListener

    window.addEventListener("mousemove", (e) => {
      const rotationSpeed = 0.01;
      if (e.clientX <= window.innerWidth / 2) {
        moon.rotation.x -= rotationSpeed;
        moon.rotation.y += rotationSpeed;
        venus.rotation.x -= rotationSpeed;
        venus.rotation.y += rotationSpeed;
      } else if (e.clientX > window.innerWidth / 2) {
        moon.rotation.x -= rotationSpeed;
        moon.rotation.y -= rotationSpeed;
        venus.rotation.x -= rotationSpeed;
        venus.rotation.y -= rotationSpeed;
      } else if (e.clientY > window.innerHeight / 2) {
        moon.rotation.x -= rotationSpeed;
        moon.rotation.y += rotationSpeed;
        venus.rotation.x -= rotationSpeed;
        venus.rotation.y += rotationSpeed;
      } else if (e.clientY <= window.innerHeight / 2) {
        moon.rotation.x -= rotationSpeed;
        moon.rotation.y -= rotationSpeed;
        venus.rotation.x -= rotationSpeed;
        venus.rotation.y -= rotationSpeed;
      }
    });

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
    return window.addEventListener("scroll", () => {
      camera.rotation.z = window.scrollY * 0.001;
      camera.rotation.y = window.scrollY * 0.003;
      const skillsBox = document.getElementById("homeSKillsBox");
      if (window.scrollY > 1500) {
        skillsBox.style.animationName = "homeSKillsBoxAnimationOn";
      } else {
        skillsBox.style.animationName = "homeSKillsBoxAnimationOff";
      }
    });
  }, []);


  return (
    <div className="home w-full">
      <canvas className="homeCanvas"></canvas>
      <div className="homeCanvasContainer">
        <Typography className="h-[420px]  text-center rounded-md"  variant="h1">
          <p className="pt-5">M</p>
          <p>D</p>
          <br />
          <p>J</p>
          <p>A</p>
          <p>K</p>
          <p>I</p>
          <p>R</p>
          <br />

          <p>H</p>
          <p>O</p>
          <p>S</p>
          <p>S</p>
          <p>A</p>
          <p>I</p>
          <p>N</p>
        </Typography>

        <div className="homeCanvasBox">
          <Typography variant="h2">
           HI, I AM A <span style={{ color: "hsl(250, 100%, 75%)" }}>FRONT-END</span>
          </Typography>
          <Typography variant="h2">DEVELOPER</Typography>
          <Typography variant="h2">WEB DESIGNER</Typography>
          <Typography variant="h2">PHOTOGRAPHER</Typography>
        </div>

        <a className="ressume" href={ressume} download>
          <p>Ressume <FaDownload style={{marginLeft:"5px"}}/></p>
        </a>
      </div>
      <div className="homeContainer">
        <Typography variant="h3">TimeLine</Typography>
        <TimeLine timelines={timelines}></TimeLine>
      </div>

      {/* all skills show here */}
      <div className="homeSkills">
        <Typography variant="h3">Skills</Typography>

        <div className="homeCubeSkills">
          <div className="homeCubeSkillFaces homeCubeSkillsFace1">
            <img
              src="https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png"
              alt="Face1"
            />
          </div>

          <div className="homeCubeSkillFaces homeCubeSkillsFace2">
            <img
              src="https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Symbol.png"
              alt="Face2"
            />
          </div>

          <div className="homeCubeSkillFaces homeCubeSkillsFace3">
            <img
              src="https://w7.pngwing.com/pngs/324/26/png-transparent-c-letter-alphabet-letter-c-angle-a-letter-case.png"
              alt="Face3"
            />
          </div>

          <div className="homeCubeSkillFaces homeCubeSkillsFace4">
            <img
              src="https://1.bp.blogspot.com/-jkSmywQ57sA/Wer3KKSqgaI/AAAAAAAACc4/07TexMsBBI4v7WlVKo76YvxM3TvrMxIdwCLcBGAs/s640/express.js.png"
              alt="Face4"
            />
          </div>

          <div className="homeCubeSkillFaces homeCubeSkillsFace5">
            <img src="https://reactnative.dev/img/logo-og.png" alt="Face5" />
          </div>

          <div className="homeCubeSkillFaces homeCubeSkillsFace6">
            <img
              src="https://hopetutors.com/wp-content/uploads/2017/03/nodejs-logo-1.png"
              alt="Face6"
            />
          </div>
        </div>
        {/* cube under shadow create */}
        <div className="cubeShadow"></div>
        <div className="homeSKillsBox" id="homeSKillsBox">
          <SiChai />
          <SiCss3 />
          <SiExpress />
          <SiHtml5 />
          <SiJavascript />
          <SiMongodb />
          <SiNodedotjs />
          <SiReact />
          <SiThreedotjs />
        </div>
      </div>

     


      <div style={{backgroundColor:"rgba(0, 0, 0, 0.048)"}} className="custom-shape-divider-top-1687544512">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Home;
