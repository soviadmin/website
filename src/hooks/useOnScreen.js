import { useState, useEffect, useRef } from "react"

export default function useOnScreen(ref) {
  const [isIntersecting, setIntersecting] = useState(false)

  const observer = useRef()

  useEffect(() => {
    observer.current = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    )
    observer.current.observe(ref.current)
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.current.disconnect()
    }
  }, [])

  return isIntersecting
}
