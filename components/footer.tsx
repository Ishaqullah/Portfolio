export default function Footer() {
  return (
    <footer className="py-6 md:py-8 border-t border-border/40 bg-card/20 md:pl-24">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © {new Date().getFullYear()} <span className="text-primary font-medium">Ishaqullah Siddiqui</span>. All rights
          reserved.
        </p>
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-right">
          Built with <span className="text-primary">Next.js</span>, <span className="text-primary">Tailwind CSS</span>,
          and <span className="text-primary">shadcn/ui</span>
        </p>
      </div>
    </footer>
  )
}

