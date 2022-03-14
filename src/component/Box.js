import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip'

export default function BoxSx() {
    return (
        <Box
            sx={{
                width: 600,
                height: 300,
                backgroundColor: 'white',
                boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 10px;',
                borderRadius: 4
            }}
            className="mainContent"
        >
            <div
                className='mainHeading'
            >
                To Share click the button
            </div>
            <Stack direction="row" spacing={2}>
                <Tooltip title="Gmail" arrow>
                    <Button variant="text" href="https://www.addtoany.com/add_to/google_gmail?linkurl=https%3A%2F%2Fchrome.google.com%2Fwebstore%2Fdetail%2Fmeavana%2Fkpfiddidcfiieigdcgjhnkhmmbkipjcd%3Fhl%3Den-US%20Hey%20check%20this%20cool%20exetension%20&amp;linkname=MeaVana%20Extension" target="_blank" className='shareBtn' >
                        <img src="https://img.icons8.com/color/48/000000/gmail-new.png" height='50px' width='50px' />
                    </Button>
                </Tooltip>
                <Tooltip title="Mail" arrow>
                    <Button variant="text" href="https://www.addtoany.com/add_to/email?linkurl=https%3A%2F%2Fchrome.google.com%2Fwebstore%2Fdetail%2Fmeavana%2Fkpfiddidcfiieigdcgjhnkhmmbkipjcd%3Fhl%3Den-US%20Hey%20check%20this%20cool%20exetension%20&amp;linkname=MeaVana%20Extension" target="_blank" className='shareBtn'>
                        <img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-email-advertising-kiranshastry-solid-kiranshastry-1.png" height='60px' width='50px' />
                    </Button>
                </Tooltip>
            </Stack>
        </Box>
    );
}
