export const GradientButton = ({ text }: { text: string }) => (
  <button className="gradientButton group overflow-hidden rounded-xl p-[2px] font-bold transition-all duration-300">
    <span className="bg-black btn">{text}</span>
  </button>
);
