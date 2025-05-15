import {useRouter} from 'next/navigation'

function useMoveback() {
const router = useRouter()
return ()=> router.back()
}

export default useMoveback