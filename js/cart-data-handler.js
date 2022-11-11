let item = class
{
    constructor(item_id,item_name,item_price,item_quantity)
    {
        this.item_id = item_id;
        this.item_name = item_name;
        this.item_price = item_price;
        this.item_quanity = item_quanity;
    }
}

let cart =
    {
        item_array: []

    }

function addItem(item_id,item_name,item_price,item_quantity)
{
    let in_cart = false;
    for(let i = 0;i < cart.item_array.length;i++)      //searches if item is already in cart, if it is increase quantity instead of adding a new item
    {
        if(cart.item_array[i].item_id == item_id)
        {
            cart.item_array[i].quanity =+ 1;
            in_cart = true;
        }
    }
    if(in_cart == false)
        cart.item_array.push(new item(item_id,item_name,item_price,item_quantity));
}

function saveCart()      //save cart to session storage
{
    sessionStorage.setItem("cart",JSON.stringify(cart));
}

function loadCart()      //load cart from item storage
{
    let temp = sessionStorage.getItem("cart");
    if(temp.length>0)
    {
        cart = JSON.parse(temp);
    }
}

loadCart() //Automatically load cart data if it exists