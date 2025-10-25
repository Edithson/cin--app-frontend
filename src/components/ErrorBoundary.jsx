import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
    // Redirection immédiate
    window.location.href = '/error'
  }

  render() {
    if (this.state.hasError) {
      // Affichage temporaire pendant la redirection
      return null
    }
    return this.props.children
  }
}

export default ErrorBoundary