import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-w-0 max-w-full items-center justify-center gap-2 text-center rounded-lg text-sm font-semibold leading-tight tracking-tight cursor-pointer transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [overflow-wrap:anywhere]",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-gradient-to-r from-[var(--orange)] to-[var(--orange-soft)] text-white shadow-[0_12px_32px_-12px_var(--orange)] hover:brightness-110 hover:shadow-[0_16px_40px_-12px_var(--orange)]",
        emerald: "bg-primary text-primary-foreground shadow-[0_10px_28px_-12px_var(--primary)] hover:bg-primary/90 hover:shadow-[0_14px_34px_-12px_var(--primary)]",
        glass: "border border-white/15 bg-white/5 text-foreground backdrop-blur hover:bg-white/10 hover:border-white/25",
      },
      size: {
        default: "min-h-11 px-5 py-2",
        sm: "min-h-9 rounded-md px-4 py-1.5 text-xs",
        lg: "min-h-12 rounded-lg px-6 py-2.5 text-sm",
        xl: "min-h-14 rounded-xl px-8 py-3 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
