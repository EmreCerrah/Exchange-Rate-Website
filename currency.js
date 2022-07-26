
class Change {

    apikey = "Vb70yZqXj0CxW8v9rvBVESVn4Q8PYup8";

    baseURL = "https://api.apilayer.com/exchangerates_data/convert";

    async get(from, to, amount) {
        const URL = `${this.baseURL}?to=${to}&from=${from}&amount=${amount}`;
 /*  
        this.xhr.open("GET", URL);
        this.xhr.setRequestHeader("apikey", this.apikey);

        this.xhr.onload = () => {
            if (this.xhr.status === 200) {
                console.log(this.xhr.responseText);

            } else console.log("hata");


        }
        this.xhr.send();
*/
        const response = await fetch(URL,{
            headers:{"apikey": this.apikey}
        })
        const data= response.json();
        return data;
    }
}