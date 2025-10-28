import { useState, useEffect } from "react";

interface TypewriterProps {
  texts: string[];
  delay?: number;
  speed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
}

export default function Typewriter({
  texts,
  delay = 0,
  speed = 100,
  deleteSpeed = 50,
  pauseDuration = 2000,
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started || texts.length === 0) return;

    const currentText = texts[currentTextIndex];

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (currentCharIndex < currentText.length) {
            setDisplayedText(currentText.substring(0, currentCharIndex + 1));
            setCurrentCharIndex((prev) => prev + 1);
          } else {
            // Finished typing, pause then start deleting
            setTimeout(() => setIsDeleting(true), pauseDuration);
          }
        } else {
          // Deleting
          if (currentCharIndex > 0) {
            setDisplayedText(currentText.substring(0, currentCharIndex - 1));
            setCurrentCharIndex((prev) => prev - 1);
          } else {
            // Finished deleting, move to next text
            setIsDeleting(false);
            setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? deleteSpeed : speed
    );

    return () => clearTimeout(timer);
  }, [
    currentCharIndex,
    currentTextIndex,
    isDeleting,
    started,
    texts,
    speed,
    deleteSpeed,
    pauseDuration,
  ]);

  return (
    <span>
      {displayedText}
      {started && <span className="animate-pulse text-blue-500">|</span>}
    </span>
  );
}
