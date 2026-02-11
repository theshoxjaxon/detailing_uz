"use client";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

function Model(props: any) {
  // We'll use a standard high-quality car model URL
  const { scene } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/lamborghini/model.gltf",
  );
  return <primitive object={scene} {...props} />;
}

export default function CarCanvas() {
  return (
    <div className="h-[500px] w-full cursor-grab active:cursor-grabbing">
      <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }}>
        <color attach="background" args={["#1E1E1E"]} />
        <PresentationControls
          speed={1.5}
          global
          zoom={0.5}
          polar={[-0.1, Math.PI / 4]}
        >
          <Stage environment="city" intensity={0.6} shadows={false}>
            <Model scale={0.01} />
          </Stage>
        </PresentationControls>
      </Canvas>
    </div>
  );
}
