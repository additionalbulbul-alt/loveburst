import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Message {
  title: string;
  text: string;
}

interface Balloon {
  id: string;
  x: number;
  y: number;
  color: string;
  emoji: string;
  message: Message;
  animationDelay: number;
}

interface HeartParticle {
  id: string;
  x: number;
  y: number;
  emoji: string;
  angle: number;
  distance: number;
}

const romanticMessages: Message[] = [
  {
    title: "You're My Sunshine ☀️",
    text: "Every day with you feels like a beautiful adventure. Your smile brightens even my darkest days, and I'm so grateful to have you in my life."
  },
  {
    title: "Forever & Always 💕",
    text: "No matter where life takes us, my love for you only grows stronger. You're not just my partner, you're my best friend and my greatest blessing."
  },
  {
    title: "You Make Me Better 🌟",
    text: "With you by my side, I feel like I can conquer the world. You inspire me to be the best version of myself every single day."
  },
  {
    title: "My Heart is Yours 💖",
    text: "From the moment I met you, I knew you were special. You've filled my life with so much love, laughter, and joy that I never knew was possible."
  },
  {
    title: "Perfect Together 🥰",
    text: "We fit together like puzzle pieces, complementing each other perfectly. I love how we can be silly together and support each other through anything."
  },
  {
    title: "You're My Everything 💗",
    text: "In a world full of temporary things, you are my constant. Thank you for loving me unconditionally and for being my home."
  }
];

const balloonStyles = [
  { color: '#FF69B4', emoji: '🎈' },
  { color: '#FF6B6B', emoji: '🎈' },
  { color: '#E6E6FA', emoji: '🎈' },
  { color: '#F7CAC9', emoji: '🎈' },
  { color: '#FFB6C1', emoji: '🎈' },
  { color: '#DDA0DD', emoji: '🎈' }
];

const heartEmojis = ['💖', '💕', '💗', '💝', '💘'];
const backgroundHearts = ['💖', '💕', '💝', '💗'];

export default function LoveApp() {
  const [showAnimation, setShowAnimation] = useState(false);
  const [balloons, setBalloons] = useState<Balloon[]>([]);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [heartParticles, setHeartParticles] = useState<HeartParticle[]>([]);
  const [balloonCounter, setBalloonCounter] = useState(0);

  const createBalloon = useCallback(() => {
    const style = balloonStyles[Math.floor(Math.random() * balloonStyles.length)];
    const message = romanticMessages[Math.floor(Math.random() * romanticMessages.length)];
    
    const newBalloon: Balloon = {
      id: `balloon-${Date.now()}-${Math.random()}`,
      x: Math.random() * (window.innerWidth - 100),
      y: Math.random() * (window.innerHeight - 200) + 100,
      color: style.color,
      emoji: style.emoji,
      message,
      animationDelay: Math.random() * 2
    };

    setBalloons(prev => [...prev, newBalloon]);
    setBalloonCounter(prev => prev + 1);

    // Remove balloon after 15 seconds if not clicked
    setTimeout(() => {
      setBalloons(prev => prev.filter(b => b.id !== newBalloon.id));
    }, 15000);
  }, []);

  const createHeartParticles = useCallback((x: number, y: number) => {
    const particles: HeartParticle[] = [];
    
    for (let i = 0; i < 8; i++) {
      const angle = (Math.PI * 2 * i) / 8;
      const distance = Math.random() * 100 + 50;
      
      particles.push({
        id: `heart-${Date.now()}-${i}`,
        x,
        y,
        emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
        angle,
        distance
      });
    }
    
    setHeartParticles(prev => [...prev, ...particles]);
    
    // Remove particles after animation
    setTimeout(() => {
      setHeartParticles(prev => 
        prev.filter(p => !particles.some(newP => newP.id === p.id))
      );
    }, 1500);
  }, []);

  const popBalloon = useCallback((balloon: Balloon, event: React.MouseEvent) => {
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    
    // Remove balloon
    setBalloons(prev => prev.filter(b => b.id !== balloon.id));
    
    // Create heart particles
    createHeartParticles(x, y);
    
    // Show message after short delay
    setTimeout(() => {
      setSelectedMessage(balloon.message);
    }, 250);
  }, [createHeartParticles]);

  const startLoveAnimation = () => {
    setShowAnimation(true);
    
    // Create balloons periodically
    const interval = setInterval(() => {
      createBalloon();
      
      // Occasionally create random heart particles
      if (Math.random() > 0.7) {
        setTimeout(() => {
          createHeartParticles(
            Math.random() * window.innerWidth,
            Math.random() * window.innerHeight
          );
        }, Math.random() * 2000);
      }
    }, 2000);

    // Stop creating balloons after 30 seconds
    setTimeout(() => {
      clearInterval(interval);
    }, 30000);
  };

  return (
    <div className="min-h-screen overflow-hidden relative bg-gradient-to-br from-peach via-light-pink to-lavender">
      {/* Background Hearts */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {backgroundHearts.map((heart, index) => (
          <motion.div
            key={index}
            className="absolute text-romantic-pink opacity-20"
            style={{
              top: `${10 + (index * 20)}%`,
              left: `${10 + (index * 20)}%`,
              fontSize: index % 2 === 0 ? '2rem' : '1.5rem'
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: index * 1,
              ease: "easeInOut"
            }}
          >
            {heart}
          </motion.div>
        ))}
      </div>

      {/* Main Container */}
      <div className="min-h-screen flex flex-col items-center justify-center p-4 relative z-10">
        
        {/* Welcome Section */}
        <AnimatePresence>
          {!showAnimation && (
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              data-testid="welcome-section"
            >
              <motion.h1
                className="font-dancing text-6xl md:text-8xl text-deep-rose mb-4 drop-shadow-lg"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              >
                For My Love
              </motion.h1>
              
              <motion.p
                className="font-poppins text-lg md:text-xl text-deep-rose opacity-80 mb-8 max-w-md mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ delay: 0.5 }}
                data-testid="welcome-message"
              >
                A little something special just for you. Click the button below to see the magic unfold! 💕
              </motion.p>
              
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring", bounce: 0.6 }}
              >
                <Button
                  onClick={startLoveAnimation}
                  className="bg-gradient-to-r from-romantic-pink to-soft-red hover:from-soft-red hover:to-romantic-pink text-white font-poppins font-semibold py-4 px-8 md:py-5 md:px-12 rounded-full text-lg md:text-xl shadow-2xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                  data-testid="button-start-love"
                >
                  <span className="relative z-10">Show Some Love</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 group-hover:translate-x-full transition-all duration-700"></div>
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Instructions */}
        <AnimatePresence>
          {showAnimation && (
            <motion.div
              className="text-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              data-testid="instructions"
            >
              <motion.p
                className="font-poppins text-deep-rose text-lg opacity-90"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Click on the balloons to pop them and reveal sweet messages! 💖
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Balloons Container */}
      <div className="fixed inset-0 pointer-events-none z-20">
        <AnimatePresence>
          {balloons.map((balloon) => (
            <motion.div
              key={balloon.id}
              className="absolute text-6xl md:text-8xl cursor-pointer pointer-events-auto hover:scale-110 transition-transform duration-200"
              style={{
                left: balloon.x,
                top: balloon.y,
                color: balloon.color
              }}
              initial={{ opacity: 0, scale: 0, rotate: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 360,
                y: [0, -20, 0]
              }}
              exit={{ opacity: 0, scale: 3 }}
              transition={{
                initial: { duration: 0.6, type: "spring", bounce: 0.6 },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: balloon.animationDelay },
                exit: { duration: 0.5 }
              }}
              whileHover={{
                scale: 1.1,
                rotate: 5
              }}
              onClick={(e) => popBalloon(balloon, e)}
              data-testid={`balloon-${balloon.id}`}
            >
              {balloon.emoji}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Heart Particles */}
      <div className="fixed inset-0 pointer-events-none z-30">
        <AnimatePresence>
          {heartParticles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute pointer-events-none"
              style={{
                left: particle.x,
                top: particle.y,
                fontSize: `${Math.random() * 10 + 15}px`,
                color: '#FF6B6B'
              }}
              initial={{ opacity: 1, scale: 1 }}
              animate={{
                x: Math.cos(particle.angle) * particle.distance,
                y: Math.sin(particle.angle) * particle.distance - Math.random() * 50,
                opacity: 0,
                scale: 0.2
              }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              data-testid={`heart-particle-${particle.id}`}
            >
              {particle.emoji}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Message Modal */}
      <AnimatePresence>
        {selectedMessage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMessage(null)}
            data-testid="message-modal"
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.5, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.5, y: 20, opacity: 0 }}
              transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
            >
              <Card className="max-w-md w-full mx-4 shadow-2xl backdrop-blur-md bg-white/90 border-2 border-romantic-pink/30">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-4xl mb-4">💝</div>
                    <h3 className="font-dancing text-2xl md:text-3xl text-deep-rose mb-4" data-testid="message-title">
                      {selectedMessage.title}
                    </h3>
                    <p className="font-poppins text-deep-rose text-base md:text-lg leading-relaxed mb-6" data-testid="message-text">
                      {selectedMessage.text}
                    </p>
                    <Button
                      onClick={() => setSelectedMessage(null)}
                      className="bg-gradient-to-r from-romantic-pink to-soft-red text-white font-poppins py-2 px-6 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                      data-testid="button-close-message"
                    >
                      Close ✨
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
