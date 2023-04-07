import { motion, AnimatePresence } from "framer-motion";

const Demo: React.FC = () => {
  return (
      <motion.div
        key={"demoPage"}
        className="bg-black h-[100vh]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>test</h1>
      </motion.div>
  );
};

export default Demo;
