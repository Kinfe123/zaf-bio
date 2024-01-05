"use client"

import * as React from "react"
import Link from "next/link"
import type { MainNavItem } from "@/types"

import { cn } from "@/lib/utils"
import {
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"

export interface MainNavProps {
  items?: MainNavItem[]
}

export const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={String(href)}
          className={cn(
            "block select-none space-y-1 rounded-md bg-transparent p-3 leading-none no-underline outline-none backdrop-blur-md transition-colors  hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
