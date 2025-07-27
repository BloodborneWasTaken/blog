import { useRouter } from "next/navigation"


function useMoveBack() {
    
    const move = useRouter()

    return ()=> move.back()
}

export default useMoveBack