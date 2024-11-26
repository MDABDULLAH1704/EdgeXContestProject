import React from 'react'
import './ShopComp.css'
import ShopItem from '../shopItem/ShopItem'
import shop1 from '../../assets/shop1.png'
import shop2 from '../../assets/shop2.png'
import shop3 from '../../assets/shop3.png'
import shop4 from '../../assets/shop4.png'

const ShopComp = () => {
    return (
        <>
            <div className='shopComp-container'>
                <div className='shopComp'>
                    <ShopItem id={1} image={shop1} title='T-Shirt' price='50$' description='Embrace Boldness: Confidence and Comfort in Every Wear!' />
                </div>
                <div className='shopComp'>
                    <ShopItem id={2} image={shop2} title='Bag' price='100$' description='Own Your Journey: Bold, Durable Bags for Success!' />
                </div>
                <div className='shopComp'>
                    <ShopItem id={3} image={shop3} title='Watch' price='150$' description='Seize Every Moment: Watch Time Work for You!' />
                </div>
                <div className='shopComp'>
                    <ShopItem id={4} image={shop4} title='Shoes' price='200$' description='Step Up Your Game: Unleash Confidence with Every Step!' />
                </div>
            </div>
        </>
    )
}

export default ShopComp
