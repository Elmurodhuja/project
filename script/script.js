
const box = document.querySelector('.container');
async function fetchUser() {
    try {
        const res = await fetch('https://dummyjson.com/products')
        const res2 = await res.json()
        const products = res2.products

          products.forEach(info => {
                const card = document.createElement('div')
                const item = document.createElement('div')
                const itemImg = document.createElement('div')

                card.classList.add('card')
                item.classList.add('item')
                itemImg.classList.add('itemImg')
              
                let h1 = document.createElement('h1')
                let h2 = document.createElement('h2')
                let img = document.createElement('img')
                let price = document.createElement('p')
                let desc = document.createElement('p')

                img.setAttribute('src', `${info.thumbnail}`)
                h1.innerHTML = `${info.brand}`
                h2.innerHTML = `${info.title}`
                price.innerHTML = `Price: ${ info.price} $` 
                desc.innerHTML = ` ${ info.description} $` 

                h1.classList.add('brand')
                h2.classList.add('title')
                img.classList.add('img')
                price.classList.add('price')
                desc.classList.add('desc')

                item.appendChild(h1)               
                item.appendChild(h2)
                itemImg.appendChild(img)               
                item.appendChild(itemImg)               
                item.appendChild(price) 
                item.appendChild(desc) 
                card.appendChild(item)
                box.appendChild(card) 
       
            });
            
    
    

    } catch (error) {

    }
}
fetchUser()

// const shadow = document.querySelector('.shadow')
// class Box {
//     constructor({box}) {

//         this.box.forEach(card => {
//             card.addEventListener('dblclick', () => {
//                 const cardInfo = card.getAttribute('h2', 'src', 'p')
//                 shadow.setAttribute('src', cardInfo)
//                 shadow.classList.add('active')

//             })
//             console.log(card);
//         })
//     }
// }

// new Box ({
//     box:'.container' 
// })
