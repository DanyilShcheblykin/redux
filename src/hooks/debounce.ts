import { useState, useEffect } from "react"

export const useDebounce = (val: string) => {

    const [state, setState] = useState<string>('')

    let timout: NodeJS.Timeout;

    useEffect(() => {
        if (timout) {
            clearTimeout(timout)
        }
        timout = setTimeout(() => {
            setState(val)
        }, 2000)
        return () => {
            clearInterval(timout)
        }
    }, [val])

    return state
}