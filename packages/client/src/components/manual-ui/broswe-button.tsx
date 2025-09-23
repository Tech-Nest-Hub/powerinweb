import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const browseButtonVariants = cva(
  "inline-flex cursor-target  items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none relative overflow-hidden group",
  {
    variants: {
      variant: {
        default: " hover:text-white dark:hover:text-black",
        royal: "hover:text-white dark:hover:text-black",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 px-3",
        lg: "h-12 px-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface BrowseButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof browseButtonVariants> {
  asChild?: boolean
}

const BrowseButton = React.forwardRef<HTMLButtonElement, BrowseButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"

    return (
      <Comp
        className={cn(browseButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
        <span className="absolute left-0 top-0 w-full h-full bg-transparent z-[-1] border-4 border-royal-blue" />
      </Comp>
    )
  }
)
BrowseButton.displayName = "BrowseButton"



export { BrowseButton, browseButtonVariants }