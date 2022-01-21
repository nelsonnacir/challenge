import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { List } from './List';

export const ModalComponent = ({ open, handleClose, character }) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <img src={character.image} />
                <Typography id="modal-modal-title" variant="h6" component="h2"> 
                    {character.name}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <List character={character} />
                </Typography>
            </Box>
        </Modal>
    )
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 10,
    p: 4,
};