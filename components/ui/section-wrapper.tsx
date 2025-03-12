import type { ReactNode } from "react"
import { FloatingBlobs } from "./floating-blobs"

interface SectionWrapperProps {
  id?: string
  children: ReactNode
  className?: string
  title?: string
  subtitle?: string
}

export function SectionWrapper({ id, children, className = "", title, subtitle }: SectionWrapperProps) {
  return (
    <section id={id} className={`relative py-16 overflow-hidden ${className}`}>
      <FloatingBlobs />
      <div className="container relative z-10">
        {(title || subtitle) && (
          <div className="space-y-2 text-center mb-12">
            {title && <h2 className="section-heading text-3xl font-bold tracking-tighter">{title}</h2>}
            {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

