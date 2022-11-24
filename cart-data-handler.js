let item = class
{
    constructor(item_id,item_img,item_name,item_price,item_quantity)
    {
        this.item_id = item_id;
        this.item_img = item_img
        this.item_name = item_name;
        this.item_price = item_price;
        this.item_quanity = item_quantity;
    }
}

let cart =
    {
        item_array: []

    }

function addItem(the_item)
{
    let in_cart = false;
    for(let i = 0;i < cart.item_array.length;i++)      //searches if item is already in cart, if it is increase quantity instead of adding a new item
    {
        if(cart.item_array[i].item_id === the_item.item_id)
        {
            cart.item_array[i].item_quanity =+ 1;
            in_cart = true;
            console.log("added quantity");
        }
    }
    if(in_cart == false) {
        cart.item_array.push(the_item);
        console.log("added to cart");
    }
}

function getCartSize()
{
    if(cart != null)
        return cart.item_array.length;
    else
        {
            return 0;
        }
}

function saveCart()      //save cart to session storage
{
    sessionStorage.setItem("cart",JSON.stringify(cart));
}

function loadCart()      //load cart from item storage
{
    let temp = sessionStorage.getItem("cart");
    if(temp != null && temp.length>0)
    {
        cart = JSON.parse(temp);
        return cart;
    }

}

loadCart(); //Automatically load cart data if it exists