import faker from 'faker';

const mount=(el)=>{
    let products='';

    for(let i=0;i<3;i++){
        const name=faker.commerce.productName();
        products+=`<div>${name}</div>`;
    }
    el.innerHTML=products
};

//Context 1 when we run it locally/independently
if(process.env.NODE_ENV==='development'){
    const el=document.querySelector("#dev-products");
    if(el){
        mount(el);
    }
}

//Context 2 when we run it through container
export { mount };
