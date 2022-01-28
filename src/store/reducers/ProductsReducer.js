const initState = {
    products: [
        {id: 1, name: 'man t-shirt summer season', image: '1.jpg', price: 20, discount: 2, discountPrice: 20  - 2 / 100 * 20, quantity: 1, desc: "100% Original Products,  Easy 30 days returns and exchanges , Try & Buy might be available"},
        {id: 2, name: 'woman jacket for summer', image: '2.jpg', price: 30, discount: 5, discountPrice: 30  - 5 / 100 * 30, quantity: 1, desc: "100% Original Products,  Easy 30 days returns and exchanges , Try & Buy might be available"},
        {id: 3, name: 'man trouser for all seasons', image: '3.jpg', price: 15, discount: 3, discountPrice: 15  - 3 / 100 * 15, quantity: 1, desc: "100% Original Products,  Easy 30 days returns and exchanges , Try & Buy might be available"},
        {id: 4, name: 'shoes for all season', image: '4.jpg', price: 50, discount: 4, discountPrice: 50  - 4 / 100 * 50, quantity: 1, desc: "100% Original Products,  Easy 30 days returns and exchanges , Try & Buy might be available"},
        {id: 5, name: 'female soot for summer', image: '5.jpg', price: 25, discount: 2, discountPrice: 25  - 2 / 100 * 25, quantity: 1, desc: "100% Original Products,  Easy 30 days returns and exchanges , Try & Buy might be available"},
        {id: 6, name: 'male jeans', image: '6.jpg', price: 60, discount: 6, discountPrice: 60  - 6 / 100 * 60, quantity: 1, desc: "100% Original Products,  Easy 30 days returns and exchanges , Try & Buy might be available"},
        {id: 7, name: 'male trouser for all seasons', image: '7.jpg', price: 35, discount: 2, discountPrice: 35  - 2 / 100 * 35, quantity: 1, desc: "100% Original Products,  Easy 30 days returns and exchanges , Try & Buy might be available"},
        {id: 8, name: 'male jacket for winter', image: '8.jpg', price: 80, discount: 7, discountPrice: 80  - 7 / 100 * 80, quantity: 1, desc: "100% Original Products,  Easy 30 days returns and exchanges , Try & Buy might be available"},
        {id: 9, name: 'male jacket for all season', image: '9.jpg', price: 95, discount: 4, discountPrice: 95  - 4 / 100 * 95, quantity: 1, desc: "100% Original Products,  Easy 30 days returns and exchanges , Try & Buy might be available"},        
        {id: 10, name: 'male winter jacket', image: '10.jpg', price: 120, discount: 3, discountPrice: 120  - 3 / 100 * 120, quantity: 1, desc: "100% Original Products,  Easy 30 days returns and exchanges , Try & Buy might be available"},        
        {id: 11, name: 'Men White Sneakers', image: '11.jpg', price: 50, discount: 2, discountPrice: 50  - 3 / 100 * 120, quantity: 1, desc: "100% Original Products,  Easy 30 days returns and exchanges , Try & Buy might be available"},
        {id: 12, name: 'Men Black Woven Design Running Shoes', image: '12.jpg', price: 30, discount: 2, discountPrice: 30  - 2 / 100 * 120, quantity: 1, desc: "100% Original Products,  Easy 30 days returns and exchanges , Try & Buy might be available"},
        {id: 13, name: 'Men Grey AARON 2.0 Driving Shoes', image: '13.jpg', price: 40, discount: 4, discountPrice: 120  - 4 / 100 * 120, quantity: 1, desc: "100% Original Products,  Easy 30 days returns and exchanges , Try & Buy might be available"},
        {id: 14, name: 'Men Blue Analogue Watch TH1791581W', image: '14.jpg', price: 80, discount: 2, discountPrice: 80  - 4 / 100 * 120, quantity: 1, desc: "100% Original Products,  Easy 30 days returns and exchanges , Try & Buy might be available"},
        {id: 15, name: 'Men Blue Solid Leather Two Fold Wallet', image: '15.jpg', price: 32, discount: 2, discountPrice: 32  - 2 / 100 * 120, quantity: 1, desc: "100% Original Products,  Easy 30 days returns and exchanges , Try & Buy might be available"},
        {id: 16, name: 'Air Buds Mini Truly Wireless Bluetooth Headset with 15H play - Pearl White', image: '16.jpg', price: 150, discount: 5, discountPrice: 150  - 5 / 100 * 120, quantity: 1, desc: "100% Original Products,  Easy 30 days returns and exchanges , Try & Buy might be available"},
        {id: 17, name: 'Maroon Solid Shoulder Bag', image: '17.jpg', price: 80, discount: 2, discountPrice: 120  - 3 / 100 * 120, quantity: 1, desc: "100% Original Products,  Easy 30 days returns and exchanges , Try & Buy might be available"},
        {id: 18, name: 'Women White & Black Printed Thong Flip-Flops', image: '18.jpg', price: 8, discount: 2, discountPrice: 8  - 2 / 100 * 120, quantity: 1, desc: "100% Original Products,  Easy 30 days returns and exchanges , Try & Buy might be available"},
        {id: 19, name: 'Girls Multi-Coloured 3-Pack Cotton Bodysuits', image: '19.jpg', price: 40, discount: 3, discountPrice: 40  - 3 / 100 * 120, quantity: 1, desc: "100% Original Products,  Easy 30 days returns and exchanges , Try & Buy might be available"},
        {id: 20, name: 'Women Black Embellished Open Toe Flats', image: '20.jpg', price: 52, discount: 2, discountPrice: 52  - 2 / 100 * 120, quantity: 1, desc: "100% Original Products,  Easy 30 days returns and exchanges , Try & Buy might be available"},

    ],
    product: {}
}
const ProductsReducer = (state = initState, action) => {
    switch(action.type){
        case "PRODUCT": 
        return {...state, product: state.products.find(product => product.id === parseInt(action.id))}
        default: 
        return state;
            
    }
}
export default ProductsReducer;