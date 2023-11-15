import { useState } from "react"

interface newGameControler{
  
}

const newGameController = () => {
    const [open, setOpen] = useState()


    function closeModal(){
        setOpen(false)
    }

    return{
        open,
        setOpen,
        closeModal
    }
}

export {newGameController}