// Teste inicial do Vite com ThreeJs e recarregamento automaticos
console.log("Hello ThreeJs with Vite! YES")

// Agora importar o ThreeJss
import * as THREE from 'three';

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Criar cena
const scene = new THREE.Scene();
console.log("Cena criada:", scene);

// Criar uma geometria simples - cubo
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
console.log("Cubo adicionado à cena:", cube);

// Configurar câmera
const sizes = {
    width: 800,
    height: 600
};
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);
console.log("Câmera configurada:", camera);
// Posicionar câmera
camera.position.z = 10;

// Renderizador
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(sizes.width, sizes.height);
console.log("Renderizador criado:", renderer);

// Size Renderer
renderer.setSize(sizes.width, sizes.height);

// Renderizar a cena
renderer.render(scene, camera);
console.log("Cena renderizada!");

// Função de animação
const animate = () => {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();