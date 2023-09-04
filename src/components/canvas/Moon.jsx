import {Suspense} from 'react';
import {Canvas} from '@react-three/fiber';
import {OrbitControls, Preload, useGLTF} from '@react-three/drei';

import CanvasLoader from '../Loader';

const Moon = () => {
  const Moon = useGLTF('./moon/planet.glb');

  return (
    <mesh>
      <hemisphereLight intensity={5} groundColor="white" />

      <primitive object={Moon.scene} scale={0.022} position={[0, -2, 0]} />
    </mesh>
  );
};

const MoonCanvas = () => {
  return (
    <Canvas
      frameloop="always"
      shadows
      camera={{position: [25, 3, 5], fov: 25}}
      gl={{preserveDrawingBuffer: false}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enablePan={false}
        />

        <Moon />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default MoonCanvas;
