import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <Link to="/" className="text-lg font-bold tracking-tight text-foreground">
          PERPETUAL BETA
        </Link>

        <Link
          to="/about"
          className="hidden md:block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          About
        </Link>
      </nav>
    </motion.header>
  );
};

export default Header;