import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1, marginBottom: '25px', boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)' }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link href="http://localhost:3000/" sx={{ color: 'inherit', textDecoration: 'none' }}>
                            Home
                        </Link>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link href="http://localhost:3000/popular" sx={{ color: 'inherit', textDecoration: 'none' }}>
                            Popular
                        </Link>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link href="http://localhost:3000/vehicle/new" sx={{ color: 'inherit', textDecoration: 'none' }}>
                            Create
                        </Link>
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
