
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:scale-105 active:scale-95 relative overflow-hidden hover:shadow-lg border border-yellow-400/50 shadow-[0_0_15px_rgba(255,215,0,0.4)] hover:shadow-[0_0_25px_rgba(255,215,0,0.7)] hover:border-yellow-300/70",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 after:absolute after:inset-0 after:z-0 after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent after:opacity-0 hover:after:animate-shimmer after:translate-x-[-100%] hover:after:translate-x-[100%] hover:after:opacity-100 after:transition-all after:duration-1000",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 after:absolute after:inset-0 after:z-0 after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent after:opacity-0 hover:after:animate-shimmer after:translate-x-[-100%] hover:after:translate-x-[100%] hover:after:opacity-100 after:transition-all after:duration-1000",
        outline:
          "border-yellow-400/60 bg-background hover:bg-accent hover:text-accent-foreground after:absolute after:inset-0 after:z-[-1] after:bg-gradient-to-r after:from-transparent after:via-accent/30 after:to-transparent after:opacity-0 hover:after:animate-shimmer after:translate-x-[-100%] hover:after:translate-x-[100%] hover:after:opacity-100 after:transition-all after:duration-1000 shadow-[0_0_12px_rgba(255,215,0,0.3)] hover:shadow-[0_0_20px_rgba(255,215,0,0.6)]",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 after:absolute after:inset-0 after:z-0 after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent after:opacity-0 hover:after:animate-shimmer after:translate-x-[-100%] hover:after:translate-x-[100%] hover:after:opacity-100 after:transition-all after:duration-1000",
        ghost: "hover:bg-accent hover:text-accent-foreground hover:shadow-inner border-yellow-400/30 shadow-[0_0_8px_rgba(255,215,0,0.2)] hover:shadow-[0_0_15px_rgba(255,215,0,0.5)]",
        link: "text-primary underline-offset-4 hover:underline relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100 border-yellow-400/40 shadow-[0_0_8px_rgba(255,215,0,0.2)] hover:shadow-[0_0_15px_rgba(255,215,0,0.5)]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
