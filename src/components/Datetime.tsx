import { LOCALE } from "../config";

export interface Props {
  datetime: string | Date;
  size?: "sm" | "lg";
  className?: string;
}

export default function Datetime({ datetime, size = "sm", className }: Props) {
  return (
    <div className={`${className}`}>
      <span>Posted on:</span>
      <span>Posted on:</span>
    </div>
  );
}
