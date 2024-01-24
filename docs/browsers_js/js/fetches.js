// fetch는 try를 기본으로 가지고 있음. catch가 exception의 역할
// network 가 걸려있기 때문에 await(비동기 방식)을 사용해야 한다.
// async가 있어야 await을 쓸 수 있기 때문에 앞에 써준 것. 둘이 짝이다.
// arrow function 사용
// async (params) => {
//     try {
//         let response = await fetch(url, options)
//     } catch (error) {
//         console.log(`Error Message : ${error.message}`)  //error안에 message가 있음.
//     }
// }

// from data.go.kr with loan rate
let rate_list = document.querySelector("#rent-loan-rate-info_rate-list");
rate_list.addEventListener('click', async (event) => {
    // object 선언.
    let url = `https://apis.data.go.kr/B551408/rent-loan-rate-info/rate-list?serviceKey=Gc7paAk%2Bpu9XSVXtB0YmE6%2FxA9zA4D8Q%2BfrMBjne9OMNaQdfGSppOtS54DkAhAfYt6Lvx8NUr8ct46cuTNMwtg%3D%3D&pageNo=1&numOfRows=30&dataType=JSON` ;
    let options = {}; // option은 python의 dict과 같은 역할을 함
    try {
        let response = await fetch(url, options); // send
 
        let result =  await response.json() ; // 응답

        console.log(`${result}`);

        let contents = document.querySelector("#rent-loan-rate-info_rate-list_contents_contents");
        contents.innerHTML = result['header']['resultMsg']


    } catch (error) {
        console.log(`Error Message : ${error.message}`)  //error안에 message가 있음.
    }
});

// datalab_shoppinginsight from naver api
let shoppinginsight = document.querySelector("#datalab_shoppinginsight");
shoppinginsight.addEventListener('click', async(event) => {
    let url = `https://openapi.naver.com/v1/datalab/shopping/categories`
    let data = {
        "startDate": "2024-01-01",
        "endDate": "2024-01-22",
        "timeUnit": "month",
        "category": [
            {"name": "패션의류", "param": [ "50000000"]},
            {"name": "화장품/미용", "param": [ "50000002"]}
        ],
        "device": "pc",
        "gender": "f",
        "ages": [ "20",  "30"]
      };
    let options ={ //datatype은 key:value로 넣어주어도 됨
        method :  "POST"
        , headers : {
            "X-Naver-Client-Id" : "taH_0plC1S0PwAZzX4iJ"
            ,'X-Naver-Client-Secret' : 'yLKRlYcavp'
            ,'Content-Type' : 'application/json'
        }
        , body : JSON.stringify(data) // 그냥 data로 하면 javascript의 data이기 때문에 json으로 바꿔줘야 함. 이때 JSON.stringify()를 사용함
    };
    try {
        let response = await fetch(url, options); // send
 
        let result =  await response.json() ; // 응답

        console.log(`${result}`);

        let contents = document.querySelector("#datalab_shoppinginsight_contents");
        contents.innerHTML = result['header']['endDate']


    } catch(error) {
        console.log(`Error Message : ${error.message}`)
    }
});

