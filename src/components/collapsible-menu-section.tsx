"use client"

import React from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

interface MenuItem {
  name: string
  price: string
  description?: string
}

interface CollapsibleMenuSectionProps {
  title: string
  subtitle?: string
  description?: string
  items: MenuItem[]
}

export function CollapsibleMenuSection({ title, subtitle, description, items }: CollapsibleMenuSectionProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full border rounded-lg overflow-hidden bg-white"
    >
      <CollapsibleTrigger asChild>
        <Button
          variant="ghost"
          className="w-full justify-between p-4 text-left font-bold text-lg text-[#5D2E0D] hover:bg-transparent hover:text-[#5D2E0D] hover:shadow-none"
        >
          {title}
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-200 ${
              isOpen ? 'transform rotate-180' : ''
            }`}
          />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="p-4">
          {subtitle && <h4 className="text-xl font-semibold text-[#8B4513] mb-2">{subtitle}</h4>}
          {description && <p className="text-[#5D2E0D] text-sm mb-4 italic">{description}</p>}
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li key={index} className="flex justify-between items-start">
                <div className="flex-1">
                  <span className="text-[#8B4513] font-semibold">{item.name}</span>
                  {item.description && (
                    <p className="text-[#5D2E0D] text-sm mt-1">{item.description}</p>
                  )}
                </div>
                <span className="text-[#8B4513] font-bold ml-4">{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}

