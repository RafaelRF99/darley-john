import { useState } from 'react'

import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Form from '../../Form'

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
            <Modal open={open} onClose={handleClose}>
                <Box sx={{ ...style }}>
                    <Form close={handleClose} />
                </Box>
            </Modal>
        </>
    )
}
