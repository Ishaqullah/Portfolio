"use client"

import { Component, type ErrorInfo, type ReactNode } from "react"

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  }

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="flex items-center justify-center w-full h-full min-h-[200px] bg-black/5 rounded-lg">
            <div className="text-center p-4">
              <p className="text-red-500 font-medium">Something went wrong</p>
              <p className="text-sm text-muted-foreground mt-2">There was an error loading this content</p>
            </div>
          </div>
        )
      )
    }

    return this.props.children
  }
}

