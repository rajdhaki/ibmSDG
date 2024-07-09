import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import Earthimg from '../Images/Earth.jpg'

function Globe() {
    const mountRef = useRef(null);

    useEffect(() => {
        // Scene setup
        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setClearColor(0x000000, 0);
        renderer.setSize(width, height);
        mountRef.current.appendChild(renderer.domElement);

        // Earth texture loading
        const loader = new THREE.TextureLoader();
        const earthTexture = loader.load(Earthimg);

        // Add Earth globe using sphere geometry
        const geometry = new THREE.SphereGeometry(8, 32, 32);
        const material = new THREE.MeshPhongMaterial({
            map: earthTexture,
            specular: new THREE.Color('grey') // this gives the water a shiny effect
        });
        const earth = new THREE.Mesh(geometry, material);
        scene.add(earth);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0x333333);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 3, 5);
        scene.add(directionalLight);

        // Camera position
        camera.position.z = 15;

        // Animation loop for rotation
        const animate = () => {
            requestAnimationFrame(animate);
            earth.rotation.y += 0.005; // Slower rotation
            renderer.render(scene, camera);
        };

        animate();

        // Cleanup function to remove the renderer's DOM element
        return () => {
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} style={{ width: '100%', height: '500px' }} />;
}

export default Globe;
