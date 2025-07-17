'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <motion.h1 
              className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-lime-400 to-blue-400 bg-clip-text text-transparent mb-4"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              404
            </motion.h1>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Page Not Found</h2>
            <p className="text-zinc-300 mb-8">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild className="bg-lime-400 hover:bg-lime-500 text-black font-semibold">
                <Link href="/">
                  <Home className="mr-2 w-4 h-4" />
                  Go Home
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                onClick={() => window.history.back()}
                className="border-zinc-700 text-white hover:bg-zinc-800"
              >
                <ArrowLeft className="mr-2 w-4 h-4" />
                Go Back
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
