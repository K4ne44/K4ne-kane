'use client'

import { ReactNode, ButtonHTMLAttributes } from 'react'

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
}

export default function GradientButton({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  ...props
}: GradientButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const baseClasses = `relative inline-flex items-center justify-center font-semibold rounded-xl 
    transition-all duration-300 overflow-hidden group ${sizeClasses[size]}`

  const variantClasses = {
    primary: `bg-gradient-to-r from-blue-500 to-cyan-500 text-white 
      hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105 active:scale-95`,
    secondary: `glass-strong text-white hover:bg-white/10 hover:scale-105 active:scale-95`,
    ghost: `text-cyan-400 hover:text-white hover:bg-white/5 active:scale-95`,
  }

  const Tag = href ? 'a' : 'button'
  const extraProps = href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {}

  return (
    <Tag
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...extraProps}
      {...(props as any)}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {variant === 'primary' && (
        <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
    </Tag>
  )
}
