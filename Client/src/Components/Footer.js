import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import React, { Component } from 'react'

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default class Footer extends Component {
    render() {
        return (
            <div className='mt-5 '>
                <hr />
                <div>
                    <Copyright sx={{ mt: 5 }} />
                </div>
            </div>
        )
    }
}
