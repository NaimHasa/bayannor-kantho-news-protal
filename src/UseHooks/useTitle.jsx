import { useEffect } from "react";


const useTitle = title => {
    useEffect(() => {
        document.title = `${title} -BayannorKantho`;
    }, [title])
}
export default useTitle;