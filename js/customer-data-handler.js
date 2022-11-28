let customer =
{

    customer_name: "",
    customer_telephone: "",
    customer_email: "",
    customer_address: "",
    customer_city: "",
    customer_state: "",
    customer_zip: "",

}

function constructCust(customer_name,customer_telephone,customer_email,customer_address,customer_city,customer_state,customer_zip)
{
    customer.customer_name = customer_name;
    customer.customer_telephone = customer_telephone;
    customer.customer_email = customer_email;
    customer.customer_address = customer_address;
    customer.customer_city = customer_city;
    customer.customer_state = customer_state;
    customer.customer_zip = customer_zip;
}

let payment =
{

        card_name: "",
        card_num:   "",
        exp_month:   "",
        cvv: "",
        exp_year: "",

}

function constructPay(card_name,card_num,exp_month,cvv,exp_year)
{
    payment.card_name = card_name;
    payment.card_num = card_num;
    payment.exp_month = exp_month;
    payment.cvv = cvv;
    payment.exp_year = exp_year;
}

function submitForm(customer_data, payment_data) //save customer information for next page or for order
{
    let temp1 = customer;
    let temp2 = payment;
    console.log(customer);
    console.log(JSON.stringify(temp1));
    sessionStorage.setItem("customer",JSON.stringify(temp1));
    sessionStorage.setItem("payment", JSON.stringify(temp2));
}

function readCustomer()            //return customer information
{
    let temp = sessionStorage.getItem("customer");
    console.log(temp);
    return JSON.parse(temp);
}

function readPayment()
{
    let temp = sessionStorage.getItem("payment")
    return JSON.parse(temp);
}
