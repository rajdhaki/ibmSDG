import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import Earthimg from '../Images/Earth.jpg';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function Globe() {
    const mountRef = useRef(null);

    useEffect(() => {
        // Scene setup
        let width = mountRef.current.clientWidth;
        let height = mountRef.current.clientHeight;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        
        // OrbitControls setup
        const control = new OrbitControls(camera, mountRef.current);
        control.enableDamping = true;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setClearColor(0x000000, 0);
        renderer.setSize(width, height);
        mountRef.current.appendChild(renderer.domElement);

        // Earth texture loading
        const loader = new THREE.TextureLoader();
        const earthTexture = loader.load(Earthimg);
        earthTexture.colorSpace = THREE.SRGBColorSpace;
        earthTexture.minFilter = THREE.NearestFilter;

        // Add Earth globe using sphere geometry
        const geometry = new THREE.SphereGeometry(8, 30, 30);
        const material = new THREE.MeshPhongMaterial({
            map: earthTexture,
            side: THREE.DoubleSide
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

        // Resizing
        const handleResize = () => {
            width = mountRef.current.clientWidth;
            height = mountRef.current.clientHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup function to remove the renderer's DOM element and event listener
        return () => {
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <div ref={mountRef} title="Double click to toggle earth" className="md:w-[100%] md:h-[500px] w-full h-[300px] cursor-pointer" />;
}

export default Globe;
