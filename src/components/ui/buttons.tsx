import React from "react";

// Using a standard interface so you get "Auto-complete" in VS Code
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "danger" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

export default function Button({
  variant = "primary",
  size = "md",
  isLoading,
  children,
  className = "",
  ...props
}: ButtonProps) {
  // Base styles: Center the text, add rounded corners, and a click animation
  const baseStyles =
    "inline-flex items-center justify-center font-bold transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none rounded-2xl cursor-pointer";

  // Professional Car Detailing Color Palette
  const variants = {
    primary:
      "bg-blue-600 text-white shadow-lg shadow-blue-100 hover:bg-blue-700 hover:shadow-blue-200",
    secondary: "bg-slate-900 text-white hover:bg-black",
    outline:
      "border-2 border-slate-200 text-slate-900 hover:border-blue-600 hover:text-blue-600 bg-transparent",
    danger: "bg-red-500 text-white hover:bg-red-600 shadow-lg shadow-red-100",
    ghost: "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center gap-2">
          <svg
            className="animate-spin h-4 w-4 text-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  );
}
