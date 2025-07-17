'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight, Users, TrendingUp, Globe, Zap, ChevronDown, Star, ArrowUpRight, CheckCircle, Mail, MapPin, Send, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import { ContactForm } from '@/components/ContactForm';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [metrics, setMetrics] = useState({
    communities: 0,
    events: 0,
    users: 0,
    projects: 0
  });

  useEffect(() => {
    setIsVisible(true);

    // Animate metrics
    const animateMetrics = () => {
      const targets = { communities: 20, events: 100, users: 50000, projects: 50 };
      let current = { communities: 0, events: 0, users: 0, projects: 0 };

      const increment = () => {
        Object.keys(targets).forEach(key => {
          const typedKey = key as keyof typeof targets;
          if (current[typedKey] < targets[typedKey]) {
            current[typedKey] += Math.ceil(targets[typedKey] / 50);
            if (current[typedKey] > targets[typedKey]) current[typedKey] = targets[typedKey];
          }
        });
        setMetrics({ ...current });

        if (Object.values(current).some((val, i) => val < Object.values(targets)[i])) {
          setTimeout(increment, 50);
        }
      };

      setTimeout(increment, 500);
    };

    animateMetrics();
  }, []);

  const services = [
    {
      title: "Dev Campaign Management",
      description: "Strategic campaigns that drive developer adoption and community engagement in the Web3 ecosystem",
      features: ["Technical Content Strategy", "Developer Outreach", "Community Building", "Event Coordination"],
      metrics: "10+ campaigns launched",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "IRL Events",
      description: "IRL Web3 events that connect communities and drive real-world engagement across APAC",
      features: ["Event Planning", "Venue Management", "Speaker Coordination", "Attendee Experience"],
      metrics: "100+ events organized",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Community Building",
      description: "Building vibrant Web3 communities that foster innovation and sustainable growth",
      features: ["Discord Management", "Telegram Growth", "Social Media Strategy", "Community Analytics"],
      metrics: "50K+ community members",
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: "User Acquisition",
      description: "Data-driven user acquisition strategies tailored for Web3 products and services",
      features: ["Growth Hacking", "Referral Programs", "KOL Partnerships", "Ambassador Programs"],
      metrics: "15+ successful launches",
      icon: <TrendingUp className="w-8 h-8" />
    }
  ];

  const caseStudies = [
    {
      title: "DeFi Protocol Launch",
      description: "Grew from 0 to 100K users in 3 months",
      metrics: { users: "100K+", growth: "300%", retention: "85%" },
      tags: ["DeFi", "Community", "Growth"]
    },
    {
      title: "NFT Marketplace Expansion",
      description: "Expanded into 5 APAC markets with localized strategies",
      metrics: { markets: "5", revenue: "$2M+", engagement: "250%" },
      tags: ["NFT", "Marketplace", "Expansion"]
    },
    {
      title: "Gaming Token Launch",
      description: "Successful token launch with sustainable community growth",
      metrics: { holders: "50K+", volume: "$10M+", retention: "90%" },
      tags: ["Gaming", "Token", "Community"]
    }
  ];

  const testimonials = [
    {
      name: "Alex",
      role: "Founder, Koii Network",
      content: "Morphine Labs transformed our community from a small group to a thriving ecosystem. Their Web3 expertise is unmatched.",
      rating: 5
    },
    {
      name: "Sandeep Ladpakre",
      role: "CEO, The Swwaaag Co",
      content: "The APAC expansion strategy they developed helped us capture 40% market share in just 6 months.",
      rating: 5
    },
    {
      name: "Lisa Wang",
      role: "Head of Growth, Gaming DAO",
      content: "Their IRL events created genuine connections that translated to 300% online engagement growth.",
      rating: 5
    }
  ];

  // Floating particles for background effect
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 20 + 10
  }));

  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-x-hidden">
      {/* Floating Particles Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute bg-lime-400/20 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Morphine Labs"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-lg sm:text-xl font-bold">Morphine Labs</span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['About', 'Services', 'Partner with us', 'Contact'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-zinc-300 hover:text-lime-400 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {item}
                </motion.a>
              ))}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button href='https://calendly.com/raj-morphinelabs/morphinelabs'
                  external variant="default"
                  size='lg'
                  className="bg-lime-400 hover:bg-lime-500 text-black font-semibold">
                  Book Consultation
                </Button>
              </motion.div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="sm"
                  className="bg-lime-400 hover:bg-lime-500 text-black font-semibold text-xs px-3 py-2"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      window.location.href = '/contact';
                    }
                  }}
                >
                  Contact
                </Button>
              </motion.div>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-zinc-300 hover:text-lime-400 hover:bg-zinc-800 transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? 'auto' : 0
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800"
        >
          {isMobileMenuOpen && (
            <div className="px-4 py-4 space-y-4">
              {['About', 'Services', 'Portfolio', 'Contact'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-zinc-300 hover:text-lime-400 transition-colors py-2 text-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-2"
              >
                <Button className="w-full bg-lime-400 hover:bg-lime-500 text-black font-semibold">
                  Book Consultation
                </Button>
              </motion.div>
            </div>
          )}
        </motion.div>
      </motion.nav>

      {/* Hero Section - Fixed to proper viewport height */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-32 sm:pt-32 md:pt-36 lg:pt-32 xl:pt-20 pb-20 xl:pb-32">
        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-lime-400/10 via-blue-400/5 to-purple-400/10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Floating crypto assets */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48"
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Image
            src="/assets/btc.png"
            alt="Bitcoin"
            width={192}
            height={192}
            className="w-full h-full object-contain"
            style={{
              filter: 'drop-shadow(0 0 20px rgba(247, 147, 26, 0.5))',
              opacity: 0.6
            }}
            priority
          />
        </motion.div>

        <motion.div
          className="absolute bottom-1/3 left-1/4 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40"
          animate={{
            y: [20, -20, 20],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <Image
            src="/assets/eth.png"
            alt="Ethereum"
            width={160}
            height={160}
            className="w-full h-full object-contain"
            style={{
              filter: 'drop-shadow(0 0 20px rgba(98, 126, 234, 0.5))',
              opacity: 0.6
            }}
            priority
          />
        </motion.div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Badge className="mb-4 sm:mb-6 xl:mb-8 bg-lime-400/10 text-lime-400 border-lime-400/20 text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2">
                Leading Web3 Growth Agency in APAC
              </Badge>
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 xl:mb-10 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <span className="bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
                Accelerate Your
              </span>
              <br />
              <motion.span
                className="bg-gradient-to-r from-lime-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: '200% 200%'
                }}
              >
                Web3 Growth
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-300 mb-8 sm:mb-10 xl:mb-12 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* We build thriving Web3 communities, manage successful campaigns, and drive sustainable growth across the APAC region with cutting-edge strategies and proven results. */}
              We help Web3 companies grow by bringing in real users and building strong communities across APAC. From dev campaigns to IRL events, we create hype that actually converts.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 xl:mb-20 px-4 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(132, 204, 22, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button size="lg" className="w-full sm:w-auto bg-lime-400 hover:bg-lime-500 text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg">
                  Start Your Growth Journey
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button href='https://www.notion.so/Morphine-Labs-230f9b5ba55880a69b44c68a26dc589e?source=copy_link'
                  size="lg" external variant="outline" className="w-full sm:w-auto border-zinc-700 text-white hover:bg-zinc-800 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg">
                  View Our Work
                </Button>
              </motion.div>
            </motion.div>

            {/* Enhanced Metrics */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 xl:gap-10 px-4 sm:px-0 mb-16 xl:mb-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              {[
                { value: metrics.communities, suffix: '+', label: 'Communities Built' },
                { value: metrics.events, suffix: '+', label: 'Events Organized' },
                { value: Math.floor(metrics.users / 1000), suffix: 'K+', label: 'Users Acquired' },
                { value: metrics.projects, suffix: '+', label: 'Partners' }
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <div className="relative">
                    <motion.div
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-lime-400 mb-1 sm:mb-2 group-hover:text-blue-400 transition-colors"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    >
                      {metric.value}{metric.suffix}
                    </motion.div>
                    <div className="text-xs sm:text-sm md:text-base xl:text-base text-zinc-400 group-hover:text-zinc-300 transition-colors">
                      {metric.label}
                    </div>
                    {/* Glow effect */}
                    <motion.div
                      className="absolute inset-0 bg-lime-400/20 rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced scrolling ticker */}
        <motion.div
          className="absolute bottom-0 left-0 w-full bg-gradient-to-r from-lime-400 to-blue-400 text-black py-2 sm:py-3 overflow-hidden"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="flex overflow-hidden relative">
            {/* First ticker instance */}
            <motion.div
              className="flex whitespace-nowrap flex-shrink-0"
              animate={{ x: ['0%', '-100%'] }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop"
              }}
            >
              {['WEB3 GROWTH', 'COMMUNITY BUILDING', 'DEV CAMPAIGNS', 'APAC EXPANSION', 'USER ACQUISITION', 'IRL EVENTS'].map((text, index) => (
                <span key={index} className="mx-6 sm:mx-12 font-bold text-sm sm:text-lg flex items-center flex-shrink-0">
                  {text} <span className="mx-2 sm:mx-4 text-lg sm:text-2xl">✦</span>
                </span>
              ))}
            </motion.div>

            {/* Second ticker instance for seamless loop */}
            <motion.div
              className="flex whitespace-nowrap flex-shrink-0"
              animate={{ x: ['0%', '-100%'] }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop"
              }}
            >
              {['WEB3 GROWTH', 'COMMUNITY BUILDING', 'DEV CAMPAIGNS', 'APAC EXPANSION', 'USER ACQUISITION', 'IRL EVENTS'].map((text, index) => (
                <span key={`second-${index}`} className="mx-6 sm:mx-12 font-bold text-sm sm:text-lg flex items-center flex-shrink-0">
                  {text} <span className="mx-2 sm:mx-4 text-lg sm:text-2xl">✦</span>
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-16 sm:bottom-12 xl:bottom-20 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-lime-400" />
        </motion.div>
      </section>
      {/* Partner Logos Marquee */}
      <motion.div
        className="mb-12 sm:mb-16 xl:mb-20 overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="bg-gradient-to-r from-lime-400 to-blue-400 text-black py-2 overflow-hidden">
          <div className="flex overflow-hidden relative">
            {/* First ticker instance */}
            <motion.div
              className="flex whitespace-nowrap flex-shrink-0 items-center"
              animate={{ x: ['0%', '-100%'] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop"
              }}
            >
              {[
                'beefy-logo.png', 'bitgo-logo.png', 'core-logo.png', 'japanopenchain-logo.png',
                'nodeshift-logo.png', 'nomikes-logo.png', 'paysafe-logo.png',
                'rarible-logo.png', 'tangem-logo.png', 'tinytrader-logo.png',
                'velia-logo.png', 'wow-logo.png'
              ].map((logo, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-center flex-shrink-0 mx-4 sm:mx-6 lg:mx-8"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Image
                    src={`/partners/${logo}`}
                    alt={`${logo.replace('-logo.png', '').replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} Logo`}
                    width={160}
                    height={100}
                    className="w-auto h-12 sm:h-16 lg:h-20 object-contain filter brightness-110 contrast-110"
                    style={{
                      filter: 'brightness(1.1) contrast(1.1) saturate(1.2)',
                      imageRendering: 'crisp-edges'
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Second ticker instance for seamless loop */}
            <motion.div
              className="flex whitespace-nowrap flex-shrink-0 items-center"
              animate={{ x: ['0%', '-100%'] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop"
              }}
            >
              {[
                'beefy-logo.png', 'bitgo-logo.png', 'core-logo.png', 'japanopenchain-logo.png',
                'nodeshift-logo.png', 'nomikes-logo.png', 'paysafe-logo.png',
                'rarible-logo.png', 'tangem-logo.png', 'tinytrader-logo.png',
                'velia-logo.png', 'wow-logo.png'
              ].map((logo, index) => (
                <motion.div
                  key={`second-${index}`}
                  className="flex items-center justify-center flex-shrink-0 mx-4 sm:mx-6 lg:mx-8"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Image
                    src={`/partners/${logo}`}
                    alt={`${logo.replace('-logo.png', '').replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} Logo`}
                    width={160}
                    height={100}
                    className="w-auto h-12 sm:h-16 lg:h-20 object-contain filter brightness-110 contrast-110"
                    style={{
                      filter: 'brightness(1.1) contrast(1.1) saturate(1.2)',
                      imageRendering: 'crisp-edges'
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Services Section with enhanced animations */}
      <section id="services" className="py-12 sm:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12 sm:mb-16 xl:mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-lime-400/10 text-lime-400 border-lime-400/20">
              Our Services
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 xl:mb-8">
              Comprehensive Web3
              <span className="block bg-gradient-to-r from-lime-400 to-blue-400 bg-clip-text text-transparent">
                Growth Solutions
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-zinc-300 max-w-2xl mx-auto px-4 sm:px-0">
              From strategy to execution, we provide end-to-end Web3 growth services tailored for the APAC market.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 xl:gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(132, 204, 22, 0.1)"
                }}
              >
                <Card
                  className={`service-card-dark transition-all duration-300 cursor-pointer group relative overflow-hidden h-full ${activeService === index ? 'ring-2 ring-lime-400/50' : ''
                    }`}
                  onClick={() => setActiveService(index)}
                >
                  {/* Animated background gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-lime-400/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  <CardHeader className="relative z-10 pb-4">
                    <div className="flex items-center justify-between">
                      <motion.div
                        className="text-lime-400"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {service.icon}
                      </motion.div>
                      <Badge className="bg-lime-400/10 text-lime-400 border-lime-400/20 text-xs">
                        {service.metrics}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg sm:text-xl text-white group-hover:text-lime-400 transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-sm sm:text-base text-zinc-300">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10 pt-0">
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          className="flex items-center text-sm sm:text-base text-zinc-300"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                        >
                          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-lime-400 mr-2 flex-shrink-0" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      {/* <section id="portfolio" className="py-12 sm:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-12 sm:mb-16 xl:mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-lime-400/10 text-lime-400 border-lime-400/20">
              Our Partners
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Proven Results in
              <span className="block text-lime-400">Web3 Growth</span>
            </h2>
          </motion.div>

         
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 xl:gap-10">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="service-card-dark transition-all duration-300 group h-full">
                  <CardHeader className="pb-4">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} className="bg-lime-400/10 text-lime-400 border-lime-400/20 text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <CardTitle className="text-lg sm:text-xl text-white group-hover:text-lime-400 transition-colors">
                      {study.title}
                    </CardTitle>
                    <CardDescription className="text-sm sm:text-base text-zinc-300">
                      {study.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3 sm:space-y-4">
                      {Object.entries(study.metrics).map(([key, value]) => (
                        <motion.div 
                          key={key} 
                          className="flex justify-between items-center"
                          whileHover={{ x: 10 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <span className="text-zinc-400 capitalize text-sm sm:text-base">{key}:</span>
                          <span className="text-lime-400 font-semibold text-sm sm:text-base">{value}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Testimonials */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12 sm:mb-16 xl:mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-lime-400/10 text-lime-400 border-lime-400/20">
              Our Partners
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 xl:mb-8">
              What Our Clients
              <span className="block text-lime-400">Say About Us</span>
            </h2>
          </motion.div>
          {/* Partner Logos Marquee */}
          <motion.div
            className="mb-12 sm:mb-16 xl:mb-20 overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-lime-400 to-blue-400 text-black py-2 overflow-hidden">
              <div className="flex overflow-hidden relative">
                {/* First ticker instance */}
                <motion.div
                  className="flex whitespace-nowrap flex-shrink-0 items-center"
                  animate={{ x: ['0%', '-100%'] }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop"
                  }}
                >
                  {[
                    'beefy-logo.png', 'bitgo-logo.png', 'core-logo.png', 'japanopenchain-logo.png',
                    'nodeshift-logo.png', 'nomikes-logo.png', 'paysafe-logo.png',
                    'rarible-logo.png', 'tangem-logo.png', 'tinytrader-logo.png',
                    'velia-logo.png', 'wow-logo.png'
                  ].map((logo, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center justify-center flex-shrink-0 mx-4 sm:mx-6 lg:mx-8"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <Image
                        src={`/partners/${logo}`}
                        alt={`${logo.replace('-logo.png', '').replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} Logo`}
                        width={160}
                        height={100}
                        className="w-auto h-12 sm:h-16 lg:h-20 object-contain filter brightness-110 contrast-110"
                        style={{
                          filter: 'brightness(1.1) contrast(1.1) saturate(1.2)',
                          imageRendering: 'crisp-edges'
                        }}
                      />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Second ticker instance for seamless loop */}
                <motion.div
                  className="flex whitespace-nowrap flex-shrink-0 items-center"
                  animate={{ x: ['0%', '-100%'] }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop"
                  }}
                >
                  {[
                    'beefy-logo.png', 'bitgo-logo.png', 'core-logo.png', 'japanopenchain-logo.png',
                    'nodeshift-logo.png', 'nomikes-logo.png', 'paysafe-logo.png',
                    'rarible-logo.png', 'tangem-logo.png', 'tinytrader-logo.png',
                    'velia-logo.png', 'wow-logo.png'
                  ].map((logo, index) => (
                    <motion.div
                      key={`second-${index}`}
                      className="flex items-center justify-center flex-shrink-0 mx-4 sm:mx-6 lg:mx-8"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <Image
                        src={`/partners/${logo}`}
                        alt={`${logo.replace('-logo.png', '').replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} Logo`}
                        width={160}
                        height={100}
                        className="w-auto h-12 sm:h-16 lg:h-20 object-contain filter brightness-110 contrast-110"
                        style={{
                          filter: 'brightness(1.1) contrast(1.1) saturate(1.2)',
                          imageRendering: 'crisp-edges'
                        }}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 xl:gap-10">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="testimonial-bg border-zinc-800 h-full">
                  <CardContent className="pt-4 sm:pt-6">
                    <div className="flex mb-3 sm:mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <Star className="w-3 h-3 sm:w-4 sm:h-4 text-lime-400 fill-current" />
                        </motion.div>
                      ))}
                    </div>
                    <p className="text-zinc-300 mb-3 sm:mb-4 italic text-sm sm:text-base">&ldquo;{testimonial.content}&rdquo;</p>
                    <div>
                      <p className="text-white font-semibold text-sm sm:text-base">{testimonial.name}</p>
                      <p className="text-zinc-400 text-xs sm:text-sm">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 xl:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-lime-400/10 text-lime-400 border-lime-400/20">
                About Morphine Labs
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Web3 Growth Experts
                <span className="block text-lime-400">for APAC Markets</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-zinc-300 mb-6 sm:mb-8">
                We&apos;re a specialized growth agency focused exclusively on Web3 projects in the Asia-Pacific region.
                Our deep understanding of local markets, combined with cutting-edge Web3 expertise, makes us the
                go-to partner for blockchain projects looking to scale.
              </p>
              <div className="grid grid-cols-2 gap-6 sm:gap-8">
                {[
                  { value: '5+', label: 'Years in Web3' },
                  { value: '18+', label: 'Countries' },
                  { value: '500+', label: 'Global Hosts' },
                  { value: '50+', label: 'Projects Completed' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-xl sm:text-2xl font-bold text-lime-400 mb-1 sm:mb-2">{stat.value}</h3>
                    <p className="text-sm sm:text-base text-zinc-300">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-lime-400/20 to-blue-400/20 rounded-2xl blur-3xl"></div>
              <div className="relative bg-zinc-900 rounded-2xl p-6 sm:p-8 border border-zinc-800">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-lime-400">Our Mission</h3>
                <p className="text-sm sm:text-base text-zinc-300 mb-4 sm:mb-6">
                  To accelerate the adoption of Web3 across APAC by building sustainable,
                  engaged communities that drive real value for projects and users alike.
                </p>
                <div className="space-y-3 sm:space-y-4">
                  {[
                    'Community-first approach',
                    'Data-driven strategies',
                    'Long-term partnerships'
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-lime-400 mr-3 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-zinc-300">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12 sm:mb-16 xl:mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-lime-400/10 text-lime-400 border-lime-400/20">
              Get In Touch
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 xl:mb-8">
              Ready to Scale Your
              <span className="block text-lime-400">Web3 Project?</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-zinc-300 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help you build a successful Web3 community and achieve sustainable growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 xl:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">Contact Information</h3>
              <div className="space-y-4 sm:space-y-6">
                {[
                  { icon: Mail, title: 'Email', value: 'partner@morphinelabs.com' },
                  { icon: Send, title: 'Telegram', value: '@MorphineLabs' },
                  { icon: MapPin, title: 'Headquarters', value: 'JustCo, 10 Anson Rd, Singapore 79903' },

                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10 }}
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-lime-400/10 rounded-lg flex items-center justify-center mr-3 sm:mr-4 group-hover:bg-lime-400/20 transition-colors flex-shrink-0">
                      <contact.icon className="w-5 h-5 sm:w-6 sm:h-6 text-lime-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm sm:text-base">{contact.title}</p>
                      <p className="text-zinc-300 text-sm sm:text-base">{contact.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="pt-6">
                  <ContactForm isSection={true} className="p-0 shadow-none max-w-none" />
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 py-8 sm:py-10 lg:py-12 xl:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="sm:col-span-2 lg:col-span-1"
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center overflow-hidden">
                  <Image
                    src="/logo.png"
                    alt="Morphine Labs Logo"
                    width={32}
                    height={32}
                    className="w-full h-full object-contain"
                    priority={false}
                  />
                </div>
                <span className="text-lg sm:text-xl font-bold">Morphine Labs</span>
              </div>
              <p className="text-zinc-400 mb-4 text-sm sm:text-base">
                Leading Web3 growth agency helping projects scale across APAC through community-driven strategies.
              </p>
            </motion.div>

            {[
              {
                title: 'Services',
                links: [
                  { name: 'Dev Campaign Management', url: '' },
                  { name: 'IRL Events', url: '' },
                  { name: 'Community Building', url: '' },
                  { name: 'User Acquisition', url: '' },
                ]
              },
              {
                title: 'Connect with us',
                links: [
                  {
                    name: 'Twitter',
                    url: 'https://x.com/morphinelabs'
                  },
                  {
                    name: 'LinkedIn',
                    url: 'https://www.linkedin.com/company/morphine-labs/'
                  },
                  {
                    name: 'Telegram',
                    url: 'https://t.me/morphinelabs'
                  }
                ]
              }
            ].map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">{section.title}</h4>

                <ul className="space-y-1 sm:space-y-2 text-zinc-400">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <motion.a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-lime-400 transition-colors text-xs sm:text-sm"
                        whileHover={{ x: 5 }}
                      >
                        {link.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="border-t border-zinc-800 mt-6 sm:mt-8 pt-6 sm:pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-xs sm:text-sm text-zinc-400">
                &copy; 2025 Morphine Labs. All rights reserved.
              </p>
              <div className="flex items-center space-x-4">
                {/* <span className="text-xs text-zinc-500">Powered by Web3</span> */}
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-zinc-400">Live</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}