import { string } from "zod"

export function formatPrice(amount: number) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(amount)
}

export function getImagePath( imagePath: string ) {

    const cloudinartUrl = 'https://res.cloudinary.com'
    if(imagePath.startsWith(cloudinartUrl)){
        return imagePath
    } else {
        return `/products/${imagePath}.jpg`
    }

}