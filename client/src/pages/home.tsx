import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Table4Logo } from "@/components/Table4Logo";

export default function Home() {

  return (
    <div className="min-h-screen bg-beige">
      {/* Header */}
      <motion.header 
        className="w-full py-6 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center">
            <Table4Logo size="sm" />
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              New Plates. New People
            </h1>
            
            <p className="text-xl sm:text-2xl text-secondary mb-12 max-w-2xl mx-auto">
              Launching in London and Dubai soon. Be the first to know when we launch.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button 
                asChild
                className="bg-purple-primary hover:bg-purple-secondary text-white font-semibold px-8 py-4 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a 
                  href="https://airtable.com/appCNnHsdPsQOtcWZ/pag3oX6eAp6Kb1apT/form"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join Waitlist
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Featured Image */}
          <motion.div 
            className="flex justify-center mt-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="relative overflow-hidden rounded-2xl shadow-xl max-w-2xl w-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="People dining together at restaurant"
                className="w-full h-64 lg:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </motion.div>
          </motion.div>

          {/* Supporting Text */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <p className="text-secondary text-lg max-w-3xl mx-auto">
              Discover amazing restaurants and connect with fellow food lovers in London and Dubai. 
              Table4 is coming soon to transform how you experience dining.
            </p>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <motion.footer 
        className="w-full py-8 px-4 sm:px-6 lg:px-8 mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <p className="text-secondary text-sm">
              © 2024 Table4. All rights reserved.
            </p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
