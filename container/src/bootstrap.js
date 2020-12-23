import {mount} from 'products/ProductsIndex';
import {mount as cartmount} from 'cart/CartShow';

console.log("Container");
const el=document.querySelector("#product-dev");
mount(el);

const el1=document.querySelector('#cart-dev');
cartmount(el1);