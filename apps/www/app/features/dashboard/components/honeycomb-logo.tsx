import { cn } from "@captsone/ui";

interface HoneycombLogoProps {
  className?: string;
}

export const HoneycombLogo = ({ className }: HoneycombLogoProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-6 w-6", className)}
    >
      <path d="M5 12.5c.5.3 1.2.5 2 .5s1.5-.2 2-.5 1.2-.5 2-.5 1.5.2 2 .5 1.2.5 2 .5 1.5-.2 2-.5" />
      <path d="M18.5 17.4c.2-.5.3-1 .4-1.4-1 0-1.5.2-2 .5s-1.2.5-2 .5-1.5-.2-2-.5-1.2-.5-2-.5-1.5.2-2 .5-1.2.5-2 .5c.1.4.2 1 .4 1.4" />
      <path d="M18.5 6.6c.2.5.4 1 .5 1.4-1 0-1.5-.2-2-.5s-1.2-.5-2-.5-1.5.2-2 .5-1.2.5-2 .5-1.5-.2-2-.5-1.2-.5-2-.5c.1-.4.3-1 .5-1.4" />
      <path d="M12 8a3 3 0 0 0-3 3v2a3 3 0 0 0 6 0v-2a3 3 0 0 0-3-3Z" />
    </svg>
  );
};