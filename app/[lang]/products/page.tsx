import Hero from "./components/Hero";
import Divider from "../components/Divider";
import RockWashers from "./components/RockWashers";
import LogWashers from "./components/LogWashers";
import BladeMills from "./components/BladeMills";
import CoarseWashers from "./components/CoarseWashers";
import FineMaterialWashers from "./components/FineMaterialWashers";
import BucketWheels from "./components/BucketWheels";
import UltraFineRetentionPlants from "./components/UltraFineRetentionPlants";
import CompactPlants from "./components/CompactPlants";
import SandWashers from "./components/SandWashers";
import RotaryScrubbers from "./components/RotaryScrubbers";

const AboutPage = () => {
  return (
    <div>
      <Hero title={"PRODUCTS"} />
      <Divider title={"ROCK WASHERS"} />
      <RockWashers />
      <Divider title={"LOG WASHERS"} />
      <LogWashers />
      <Divider title={"BLADE MILLS"} />
      <BladeMills />
      <Divider title={"COARSE WASHERS"} />
      <CoarseWashers />
      <Divider title={"FINE MATERIAL WASHERS"} />
      <FineMaterialWashers />
      <Divider title={"BUCKET WHEELS"} />
      <BucketWheels />
      <Divider title={"ULTRA FINE RETENTION PLANTS"} />
      <UltraFineRetentionPlants />
      <Divider title={"COMPACT PLANTS"} />
      <CompactPlants />
      <Divider title={"SAND WASHERS"} />
      <SandWashers />
      <Divider title={"ROTARY SCRUBBERS"} />
      <RotaryScrubbers />
    </div>
  );
};

export default AboutPage;
