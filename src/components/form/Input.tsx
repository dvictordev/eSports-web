import { InputHTMLAttributes } from "react";

interface inputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: inputProps) {
  return (
    <input
      {...props}
      className="py-3 px-4 bg-zinc-900 placeholder:text-zinc-500 outline-none rounded text-sm"
    />
  );
}
