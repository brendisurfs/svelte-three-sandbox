import {
    BoxGeometry,
    Mesh,
    MeshNormalMaterial,
    PerspectiveCamera,
    Scene,
    WebGLRenderer,
} from "three";

// globals
let renderer: WebGLRenderer;

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
};

// main components
const scene = new Scene();
const camera = new PerspectiveCamera(35, sizes.width / sizes.height, 0, 1000);

const cubeGeo = new BoxGeometry();
const normalMaterial = new MeshNormalMaterial();
const cube = new Mesh(cubeGeo, normalMaterial);
scene.add(cube);

// camera mods
camera.position.z = 5;

// renders the scene constantly.
const animate = () => {
    requestAnimationFrame(animate);
    renderer.setSize(sizes.width, sizes.height);

    cube.rotation.x += 0.01;

    // renderer
    renderer.render(scene, camera);
};

const resize = () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    camera.aspect = sizes.width / sizes.height;
    renderer.setSize(sizes.width, sizes.height);
};
window.addEventListener("resize", resize);

/**
 * CreateThreeScene - creates a Threejs render on the browser window from the specified code in the module.
 */
export const CreateThreeScene = (el: Element) => {
    renderer = new WebGLRenderer({
        antialias: true,
        canvas: el,
    });
    resize();
    animate();
};
