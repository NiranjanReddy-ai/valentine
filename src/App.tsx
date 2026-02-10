import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

interface HomePageProps {
  onYes: () => void;
}

const HomePage = ({ onYes }: HomePageProps) => {
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [yesScale, setYesScale] = useState(1);
  const [noTextIndex, setNoTextIndex] = useState(0);

  const noTexts = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Think again!,This is your Niru",
    "Last chance!",
    "Surely not?",
    "You might regret this!",
    "Give it another thought!",
    "Are you absolutely certain?",
    "This could be a mistake!",
    "Have a heart!",
    "Don't be so cold!",
    "Change of heart?",
    "Wouldn't you reconsider?",
    "Is that your final answer?",
    "You're breaking my heart ;(",
    "Pls?",
    "Pretty please?",
    "With a cherry on top?",
    "I'll give you a massage!",
    "What about pizza?",
    "I'll make you cookies!",
    "Think about the kittens! 🐱",
    "Please don't say no :(",
    "My heart will break 💔",
    "I promise I'm nice!",
    "No is not an option!",
    "Error 404: No not found",
    "Too late, you're mine! 😈",
    "Just click YES already!",
    "I'll buy you chocolate!",
    "Don't be stubborn!",
    "Look at that big YES button!",
    "Okay, I'll ask again...",
    "So... is that a yes?",
    "You Are Mine!",
    "C'mon, be my Valentine and wife!",

  ];

  const handleNoInteraction = () => {
    const x = (Math.random() - 0.5) * 500;
    const y = (Math.random() - 0.5) * 500;
    setNoPosition({ x, y });

    setYesScale(prev => prev + 0.3);
    setNoTextIndex(prev => (prev + 1) % noTexts.length);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full bg-black/5 z-0 pointer-events-none" />

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="z-10 bg-pink-50/90 backdrop-blur-md p-10 rounded-[3rem] border-4 border-white shadow-2xl max-w-lg w-full relative"
      >
        <div className="mb-6 flex justify-center">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <Heart className="w- h-20 text-red-600 fill-red-600 drop-shadow-xl" />
          </motion.div>
        </div>

        <h1 className="text-5xl md:text-6xl font-handwriting font-bold text-gray-800 mb-8 leading-tight drop-shadow-sm">
          Will you be my Valentine?
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8 relative h-40">
          <motion.button
            layout
            style={{ scale: yesScale }}
            whileHover={{ scale: yesScale * 1.1 }}
            whileTap={{ scale: yesScale * 0.95 }}
            onClick={onYes}
            className="px-10 py-4 bg-gradient-to-r from-rose-400 to-red-500 text-white font-bold rounded-full text-xl shadow-xl hover:shadow-2xl transition-all z-20 min-w-[120px] font-modern uppercase tracking-wider"
          >
            YES 🥰
          </motion.button>

          <motion.button
            animate={{ x: noPosition.x, y: noPosition.y }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            onMouseEnter={handleNoInteraction}
            onTouchStart={handleNoInteraction}
            className="px-10 py-4 bg-white/80 text-gray-500 font-bold rounded-full text-xl shadow-lg hover:bg-white transition-all absolute md:relative z-10 min-w-[120px] whitespace-nowrap border-2 border-dashed border-gray-300 font-modern"
            style={{
              position: noPosition.x !== 0 ? 'absolute' : 'relative',
              zIndex: 30
            }}
          >
            {noTexts[noTextIndex]}
          </motion.button>
        </div>

        <p className="mt-8 text-sm text-gray-600 font-modern font-medium">
          (There's really only one choice... 😉)
        </p>
      </motion.div>
    </div>
  );
};

const SuccessPage = () => {
  const { width, height } = useWindowSize();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center overflow-hidden">
      <Confetti width={width} height={height} numberOfPieces={500} recycle={false} />

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', duration: 0.8 }}
        className="bg-white/40 backdrop-blur-xl p-4 rounded-[3rem] shadow-2xl w-full max-w-[450px] aspect-square border border-white/50 z-10 relative flex flex-col items-center justify-center"
      >
        <div className="text-10xl mb-2 animate-bounce">💖</div>
        {/* To edit the font size, change 'text-4xl' to 'text-5xl' or 'text-6xl' below */}
        <h1 className="text-4xl font-handwriting font-bold text-rose-600 mb-2 drop-shadow-sm">
          YAYYYY!
        </h1>
        <div className="text-lg text-gray-800 font-modern font-semibold mb-4 leading-tight">
          I knew you would say yes!
          <div className="text-rose-500 font-bold mt-1">Best. Valentine. Ever. ❤️</div>
        </div>
        <div className="w-40 h-40 rounded-2xl overflow-hidden shadow-lg border-4 border-rose-500 mb-4 bg-white">
          <img
            src="https://media.giphy.com/media/26BRv0ThflsHCqDrG/giphy.gif"
            alt="Celebration"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mt-2 text-2xl font-handwriting font-bold text-rose-600 animate-bounce tracking-wide">
          Waiting for u to see u on Feb 14th...❤️
        </div>
      </motion.div>
    </div>
  );
};

function App() {
  const [agreed, setAgreed] = useState(false);

  return (
    <>
      <AnimatePresence mode="wait">
        {!agreed ? (
          <motion.div key="home" className="w-full h-full">
            <HomePage onYes={() => setAgreed(true)} />
          </motion.div>
        ) : (
          <motion.div key="success" className="w-full h-full">
            <SuccessPage />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
