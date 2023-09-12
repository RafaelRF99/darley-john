import { MotoModel } from '../../model/MotoModel';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ChildModal from './ChildModal';

const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 4,
    px: 4,
    pb: 3,
};

interface NesteModalProps {
    moto: MotoModel | null
    status: boolean
    handleClose: () => void
}

export default function BuyModal(props: NesteModalProps) {

    return (
        <div>
            <Modal
                open={props.status}
                onClose={props.handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style, width: 400, }}>
                    <div>
                        <img className='rounded-md border-2 border-black'
                            src={props.moto?.img} alt={props.moto?.marca} />
                        <div className='mt-4'>
                            <h2><strong>Modelo/Ano:</strong> {props.moto?.model}</h2>
                            <p><strong>Marca:</strong> {props.moto?.marca}</p>
                            <p><strong>Cor:</strong> {props.moto?.color}</p>
                            <p><strong>Km rodado:</strong> {props.moto?.km}Km</p>
                            <p><strong>Documentação:</strong> {props.moto?.documentation}</p>
                            <p><strong>Licenciamento:</strong> {props.moto?.licensing}</p>
                        </div>
                    </div>
                    <ChildModal />
                    <button
                        className='w-full bg-red-200 hover:bg-red-300 py-1 mt-1'
                        onClick={props.handleClose}>Fechar</button>
                </Box>
            </Modal>
        </div>
    );
}
