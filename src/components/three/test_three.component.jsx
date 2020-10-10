import React from "react";
import { Canvas } from "react-three-fiber";
import './test_three.styles.scss';

export default function TestThree() {
  return (
    <div className="container">
      <Canvas>
        <mesh>
          <boxBufferGeometry attach='geometry' args={[1,1,1,]} />
          <meshStandardMaterial attach='material' />
        </mesh>
      </Canvas>
    </div>
  );
}
