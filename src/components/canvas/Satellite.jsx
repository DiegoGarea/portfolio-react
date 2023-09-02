import {Suspense} from 'react';
import {Canvas} from '@react-three/fiber';
import {OrbitControls, useGLTF} from '@react-three/drei';
import CanvasLoader from '../Loader';

const Satellite = () => {
  const satellite = useGLTF('./satellite/satellite.glb');

  return (
    <primitive
      object={satellite.scene}
      scale={0.2}
      position-y={0}
      rotation-y={0}
    />
  );
};

const SatelliteCanvas = () => {
  return (
    <Canvas
      shadow
      frameloop="demand"
      dpr={[1, 2]}
      gl={{preserveDrawingBuffer: true}}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [0, 3, 6],
      }}
    >
      <ambientLight intensity={3} />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          mixPolarAngle={Math.PI / 2}
          enablePan={false}
        />
        <Satellite />
      </Suspense>
    </Canvas>
  );
};

export default SatelliteCanvas;
