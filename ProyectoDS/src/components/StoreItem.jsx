import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { Button, CardActionArea, CardActions } from '@mui/material'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom'
import { formatCurrency } from './../utilities/formatCurrency';
import { useShoppingCart } from '../context/ShoppingCartContext'

export function StoreItem({id, title, price, category, image}) {
    const { 
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
    } = useShoppingCart()
    const quantity = getItemQuantity(id)
    const navigate = useNavigate();

    const handleCardClick = () => {
        // Navigate to the product page when the card is clicked
        navigate(`/products/${id}`);
    };

    return (
        <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <CardActionArea onClick={handleCardClick}>
                <CardMedia
                    component='img'
                    height='250'
                    image={image}
                    alt={title}
                    sx={{ objectFit: 'cover' }}
                />
                <CardContent>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', mb: '4' }}>
                        <Typography>{title}</Typography>
                        <Typography>{formatCurrency(price)}</Typography>
                    </div>
                    <Typography sx={{display: 'flex'}}>
                        <span>{category}</span>
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {quantity === 0 ? ( 
                        <Button onClick={() => increaseCartQuantity(id)} sx={{ width: 1 }}>+ Agregar al carrito</Button>
                    ) : <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'}}>
                                <Button onClick={() => decreaseCartQuantity(id)} variant='outlined' size='small'>-</Button>
                                <div>
                                    <span>{quantity}</span> en orden
                                </div>
                                <Button onClick={() => increaseCartQuantity(id)} variant='outlined' size='small'>+</Button>
                            </div>
                            <Button onClick={() => removeFromCart(id)} size='small' variant='outlined' color='warning'>Eliminar</Button>
                        </div>
                }
            </CardActions>
        </Card>
    )
}