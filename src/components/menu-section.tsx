import React from 'react'

interface MenuItem {
  name: string
  price: string
  description?: string
}

interface MenuSectionProps {
  title: string
  subtitle?: string
  description?: string
  items: MenuItem[]
}

export const MenuSection: React.FC<MenuSectionProps> = ({ title, subtitle, description, items }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg transition-transform hover:scale-105">
      <h3 className="text-3xl font-bold text-[#5D2E0D] mb-2 border-b border-[#8B4513] pb-2">{title}</h3>
      {subtitle && (
        <h4 className="text-xl font-semibold text-[#8B4513] mb-2">{subtitle}</h4>
      )}
      {description && (
        <p className="text-[#5D2E0D] text-sm mb-4 italic">{description}</p>
      )}
      <ul className="space-y-4">
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
  )
}

