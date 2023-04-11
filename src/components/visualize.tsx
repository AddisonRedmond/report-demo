import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
type VisualizeProps = {
    isBuildChart: boolean,
    setIsBuildChart: Dispatch<SetStateAction<boolean>>
}
const Visualize = (props : VisualizeProps) => {

    const variants: any = {
        open: {
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: "10",
          width: "30vw",
          height: "30vh",
          borderRadius: "10px",
        },
        closed: {
          position: "fixed",
          top: "10px",
          borderRadius: "300px",
        },
      };
      

  return (
    <motion.div
      animate={props.isBuildChart ? "open" : "closed"}
      variants={variants}
      className="bg-black cursor-pointer w-fit p-2"
      onClick={() => props.setIsBuildChart(!props.isBuildChart)}
    >
      <p>Visualize</p>
    </motion.div>
  );
};


export default Visualize;