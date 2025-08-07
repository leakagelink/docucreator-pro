
import * as React from "react"

export function useIsPWA() {
  const [isPWA, setIsPWA] = React.useState<boolean>(false)

  React.useEffect(() => {
    // Check if app is running in standalone mode (PWA)
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || 
                        (window.navigator as any).standalone || 
                        document.referrer.includes('android-app://')
    
    setIsPWA(isStandalone)
  }, [])

  return isPWA
}
