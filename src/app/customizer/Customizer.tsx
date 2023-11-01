import { Canvas } from "@react-three/fiber";
import Experience from "../../components/Experience";
import Configurator from "../../components/Configurator";

const Customizer = () => {

  return (
    <div className="h-screen w-full">
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 9], fov: 15 }}>
        <color attach="background" args={["#27224f"]} />
        <fog attach="fog" args={["#27224f", 10, 20]} />
        <Experience />
      </Canvas>
      <Configurator />
    </div>
  );
};

export default Customizer;
