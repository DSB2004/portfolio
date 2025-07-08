import { useTypewriter } from "react-simple-typewriter";
export default function Typewriter({
  list = [],
  speed = 50,
  delay = 500,
  className,
}: {
  className?: string;
  list: string[];
  speed: number | undefined;
  delay: number | undefined;
}) {
  const word = useTypewriter({
    words: list,
    delaySpeed: delay,
    typeSpeed: speed,
    deleteSpeed: speed,
    loop: true,
  });
  return (
    <p
      className={`flex gap-1 my-2 uppercase font-montserrat text-white relative items-center justify-center ${className}`}
    >
      {word[0]}
      <span className="h-6 w-0.5 bg-white animate-cursor duration-50"></span>
    </p>
  );
}
