let customer = class
{
    constructor(customer_name,customer_telephone,customer_email,customer_address,payment_info)
    {
        this.customer_name = customer_name;
        this.customer_telephone = customer_telephone;
        this.customer_email = customer_email;
        this.customer_address = customer_address;
        this.payment_info = payment_info;
    }

    submitForm(customer_name,customer_telephone,customer_email,customer_address,payment_info) //save customer information for next page or for order
    {
        let temp = new customer(customer_name,customer_telephone,customer_email,customer_address,payment_info);
        sessionStorage.setItem("customer",JSON.stringify(temp));
    }

    readForm()            //return customer information
    {
        return JSON.parse(sessionStorage("customer"));
    }
}
