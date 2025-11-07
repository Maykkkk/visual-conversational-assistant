import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface SmallAvatarProps {
  isSpeaking: boolean;
}

export default function SmallAvatar({ isSpeaking }: SmallAvatarProps) {
  return (
    <div className="relative w-8 h-8">
      {/* Animated ring when speaking */}
      {isSpeaking && (
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-orange-400"
          initial={{ scale: 1, opacity: 0.8 }}
          animate={{ scale: 1.5, opacity: 0 }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeOut" }}
        />
      )}
      
      {/* Avatar */}
      <motion.div
        className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-orange-200 bg-gradient-to-br from-orange-100 to-orange-200"
        animate={isSpeaking ? {
          scale: [1, 1.1, 1],
        } : {}}
        transition={{
          duration: 0.5,
          repeat: isSpeaking ? Infinity : 0,
          ease: "easeInOut"
        }}
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1712168567859-e24cbc155219?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGF2YXRhcnxlbnwxfHx8fDE3NjIxNTg2OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="AI Advisor"
          className="w-full h-full object-cover"
        />
        
        {/* Speaking indicator overlay */}
        {isSpeaking && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-orange-500/30 to-transparent"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
      </motion.div>

      {/* Speaking dots indicator */}
      {isSpeaking && (
        <div className="absolute -bottom-1 -right-1 flex gap-0.5 bg-white px-1 py-0.5 rounded-full shadow-sm">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-1 h-1 bg-orange-500 rounded-full"
              animate={{ y: [0, -3, 0] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
