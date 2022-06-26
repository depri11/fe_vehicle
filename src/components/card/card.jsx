import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'
import Link from '@mui/material/Link'
import ThumbUp from '@mui/icons-material/ThumbUp'

function Cards(props) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <Link href={`/vehicle/${props.id}`} color="inherit" underline="none">
                <CardActionArea>
                    <CardMedia component="img" height="300" width="120" image={props.img} alt={props.title} />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.title}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="span" sx={{ float: 'right' }}>
                            <ThumbUp sx={{ fontSize: '17px' }} /> {props.likes}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        View
                    </Button>
                </CardActions>
            </Link>
        </Card>
    )
}

export default Cards
