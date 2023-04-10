import { motion } from "framer-motion";
import Table from "../components/table";
const Demo: React.FC = () => {
  return (
    <motion.div
      key={"demoPage"}
      className="h-screen flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className=" w-3/4 max-h-[80vh] rounded-md flex flex-col">
        <Table />
      </div>
    </motion.div>
  );
};

export default Demo;
