import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/home";
import Demo from "../pages/demo";
import { AnimatePresence } from "framer-motion";
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
