import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50" : "bg-transparent"
      )}
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