import Link from "next/link";
import { AnimatedText } from "@/components/common/animated-text";
import { Icons } from "@/components/common/icons";

export default function Cards() {
  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 items-center justify-center text-center">
      {/* Card 1 */}
      <AnimatedText delay={0.6}>
        <Link
          href="https://github.com/ankit526"
          target="_blank"
          aria-label="View Ankit Sen GitHub profile"
          className="block border border-gray-300 hover:border-black transition-all rounded-lg px-6 py-4 text-xl font-semibold flex items-center justify-center gap-3 shadow-md hover:shadow-lg"
        >
          <Icons.gitHub className="w-6 h-6" />
          GitHub
        </Link>
      </AnimatedText>

      {/* Card 2 */}
      <AnimatedText delay={0.8}>
        <Link
          href="mailto:senankit379@gmail.com"
          className="block border border-gray-300 hover:border-black transition-all rounded-lg px-6 py-4 text-xl font-semibold flex items-center justify-center gap-3 shadow-md hover:shadow-lg"
        >
          <Icons.gmail className="w-6 h-6" />
          Contact
        </Link>
      </AnimatedText>
      <AnimatedText delay={0.8}>
        <Link
          href="https://www.linkedin.com/in/ankit-sen-29778320a"
          className="block border border-gray-300 hover:border-black transition-all rounded-lg px-6 py-4 text-xl font-semibold flex items-center justify-center gap-3 shadow-md hover:shadow-lg"
        >
          <Icons.linkedin className="w-6 h-6" />
          Linkedin
        </Link>
      </AnimatedText>
    </div>
  );
}
