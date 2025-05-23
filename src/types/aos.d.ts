declare module 'aos' {
  interface AOSOptions {
    offset?: number
    delay?: number
    duration?: number
    easing?: string
    once?: boolean
    mirror?: boolean
    anchorPlacement?: string
    // puedes agregar más opciones si las necesitas
  }

  const AOS: {
    init: (options?: AOSOptions) => void
    refresh: () => void
    refreshHard: () => void
  }

  export default AOS
}