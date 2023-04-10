import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Home: React.FC = () => {
  return (
    <motion.div
      key={"homePage"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .5 }}
      className="h-[100vh] w-[100vw] flex"
    >
      <div className=" w-1/2 h-full flex flex-col justify-center items-center bg-purple-950 text-white text-6xl font-semibold text-center">
        <p>
          Create reports <span className="text-[#CF91FF]">automatically</span>
        </p>
        <p>using JSON schema and</p>
        <p>
          <span className="text-[#F5744C]">visualize</span> with recharts
        </p>
      </div>
      <div className="w-1/2 h-full flex flex-col justify-center items-center gap-4">
        <Link to="/demo">
          <button className=" bg-teal-400 hover:bg-teal-300 ease-in-out duration-300 w-32 border-2 border-slate-300  text-xl font-semibold h-12 rounded-full">
            Try it out
          </button>
        </Link>

        <button className=" bg-stone-400 hover:bg-stone-300 ease-in-out duration-300 w-32 text-white border-2 text-xl font-semibold  rounded-full h-12">
          Github
        </button>
      </div>
    </motion.div>
  );
};

export default Home;
