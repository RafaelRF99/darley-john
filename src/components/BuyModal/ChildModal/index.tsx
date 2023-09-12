import { useState } from 'react'

import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'

const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
    maxHeight: '100vh',
    overflowY: 'auto',
}

export default function ChildModal() {
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <>
            <button
                className="w-full bg-green-200 hover:bg-green-300 py-1 mt-3"
                onClick={handleOpen}
            >
                Comprar
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{ ...style, width: 200 }}>
                    <p>Desenvolvimento...</p>
                    <p>Tela para login</p>
                    <button
                        className="w-full bg-red-200 hover:bg-red-300 py-1 mt-3"
                        onClick={handleClose}
                    >
                        Fechar
                    </button>
                </Box>
            </Modal>
        </>
    )
}
