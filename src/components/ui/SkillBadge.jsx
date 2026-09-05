export default function SkillBadge({ name }) {
  return (
    <span
      className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono font-normal bg-[#16181d] border border-[#26282f] text-[#d4d4d8] hover:border-[#3a3d46] hover:text-white transition-colors cursor-default"
    >
      {name}
    </span>
  );
}
