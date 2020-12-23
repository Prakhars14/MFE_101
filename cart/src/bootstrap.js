import faker from 'faker';

const mount=(el)=>{
    const cartText=`<div>You have ${faker.random.number()} items in your cart</div>`;

    el.innerHTML=cartText
};

//Context 1 when we run it locally/independently
if(process.env.NODE_ENV==='development'){
    const el=document.querySelector("#dev-cart");
    if(el){
        mount(el);
    }
}

//Context 2 when we run it through container
export { mount };