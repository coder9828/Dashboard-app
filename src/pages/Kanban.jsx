// import React from 'react';
// import Board from '@asseinfo/react-kanban';
// import '@asseinfo/react-kanban/dist/styles.css';

// const board = {
//     columns: [
//         {
//             id: 1,
//             title: 'To Do',
//             cards: [{ id: 1, title: 'Make a new navbar', description: 'create a new modern navbar for attraction of visitors' }],
//         },
//         {
//             id: 2,
//             title: 'In Progress',
//             cards: [{ id: 2, title: 'Modification in Home Page', description: 'Modify homepage like background and svg images and add sale page seprately' }],
//         },
//         {
//             id: 3,
//             title: 'Done',
//             cards: [{ id: 3, title: 'Change Footer', description: 'Need to add in footer like contact, copyright and some reference links and also social media links' }],
//         },
//     ],
// };

// const Kanban = () => {
//     return <Board initialBoard={board} />;
// };

// export default Kanban;



import React from 'react';
import Board from '@asseinfo/react-kanban';
import '@asseinfo/react-kanban/dist/styles.css';
import { Box, Typography, useTheme } from '@mui/material';

const board = {
    columns: [
        {
            id: 1,
            title: 'To Do',
            cards: [{ id: 1, title: 'Make a new navbar', description: 'Create a new modern navbar for attraction of visitors' }],
        },
        {
            id: 2,
            title: 'In Progress',
            cards: [{ id: 2, title: 'Modification in Home Page', description: 'Modify homepage like background and svg images and add sale page separately' }],
        },
        {
            id: 3,
            title: 'Done',
            cards: [{ id: 3, title: 'Change Footer', description: 'Need to add in footer like contact, copyright and some reference links and also social media links' }],
        },
    ],
};

const Kanban = () => {
    const theme = useTheme();

    return (
        <Box
            p={2}
            sx={{
                backgroundColor: theme.palette.background.paper,
                color: theme.palette.text.primary,
            }}
        >
            <Typography variant="h4">Kanban Board</Typography>
            <Typography variant="h6">Manage your tasks effectively.</Typography>
            <Board
                initialBoard={board}
                renderColumnHeader={(column) => (
                    <div
                        style={{
                            maxWidth: '320px',
                            backgroundColor: theme.palette.mode === 'dark' ? '#333' : '#f5f5f5',
                            color: theme.palette.text.primary,
                            padding: '10px',
                            borderBottom: `1px solid ${theme.palette.divider}`,
                            borderRadius: '5px',
                        }}
                    >
                        {column.title}
                    </div>
                )}
                renderCard={({ title, description }) => (
                    <div
                        style={{
                            maxWidth: '300px',
                            backgroundColor: theme.palette.mode === 'dark' ? '#444' : '#fff',
                            color: theme.palette.text.primary,
                            margin: '10px',
                            padding: '10px',
                            border: `1px solid ${theme.palette.divider}`,
                            borderRadius: '5px',
                        }}
                    >
                        <Typography variant="h6">{title}</Typography>
                        <Typography variant="body2">{description}</Typography>
                    </div>
                )}
            />
        </Box>
    );
};

export default Kanban;