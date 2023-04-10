import { motion } from "framer-motion";
import Table from "../components/table";
const Demo: React.FC = () => {
  return (
    <motion.div
      key={"demoPage"}
      className="flex justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
    <Table />
    </motion.div>
  );
};

export default Demo;
