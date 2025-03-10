import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import gosendImage1 from "../assets/image1.png";
import { TypographyH1, TypographyP } from "./Typography";
import { Button } from "./ui/button";

const HeroSection = () => {
  const { ref, inView } = useInView({threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-16"
    >
      {/* Left Side */}
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <TypographyP className="font-bold text-xs uppercase tracking-wider">
          Try It Now!
        </TypographyP>
        <TypographyH1 className="text-5xl font-bold leading-tight">
          Change the way you use your{" "}
          <span className="text-orange-500">money</span>
        </TypographyH1>
        <TypographyP className="text-gray-600">
          From managing daily expenses to securing your financial future with
          savings and investments, Ascone empowers you to make the most of your
          money.
        </TypographyP>
        <div className="flex items-center gap-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Button className="rounded-full shadow-lg transition duration-300 hover:shadow-xl">
              Get Started Now
            </Button>
          </motion.div>
          <div className="flex items-center gap-1">
            ⭐ ⭐ ⭐ ⭐ ⭐
            <span className="text-sm text-gray-600">5.0 from 120+ reviews</span>
          </div>
        </div>
      </motion.div>

      {/* Right Side - Image with Animation */}
      <motion.div
        className="grid grid-cols-2 gap-4"
        initial={{ opacity: 0, x: 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        <motion.img
          src={gosendImage1}
          alt="Image 1"
          className="w-full rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;