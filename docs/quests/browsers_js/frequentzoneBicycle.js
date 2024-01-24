

//  데이터 가지고 오기 

let bicycle_table_button = document.querySelector("#bicycle_table_button")
bicycle_table_button.addEventListener('click', async(event) => {

    let url = 'https://apis.data.go.kr/B552061/frequentzoneBicycle/getRestFrequentzoneBicycle?serviceKey=Gc7paAk%2Bpu9XSVXtB0YmE6%2FxA9zA4D8Q%2BfrMBjne9OMNaQdfGSppOtS54DkAhAfYt6Lvx8NUr8ct46cuTNMwtg%3D%3D&searchYearCd=2021&siDo=&guGun=&type=json&numOfRows=10&pageNo=1'
    let options = {};
    
    try {
        let response = await fetch(url, options);
        let data_result = await response.json();
        let data_list = data_result['items']['item'];
        
        let bicycle_list ='';
        for (let data of data_list) {
            bicycle_list = `${bicycle_list}<tr><td>${data["afos_fid"]}</td><td>${data["spot_nm"]}</td><td>${data["occrrnc_cnt"]}</td><td>${data["caslt_cnt"]}</td><td>${data["dth_dnv_cnt"]}</td><td>${data["se_dnv_cnt"]}</td><td>${data["sl_dnv_cnt"]}</td><td>${data["wnd_dnv_cnt"]}</td><td>${data["lo_crd"]}</td><td>${data["la_crd"]}</td></tr>`
        };
        
        let bicycle_things = document.querySelector("#bicycle_array_id");
        bicycle_things.innerHTML = bicycle_list 
        
    } catch(error) {
        console.log(`${error.message}`)
    }
});

// 필요한 변수들 집어넣기

let currentPage = 1 // 현재 페이지 ---> 변화하는 값
let totalCount = data_result['totalCount'] // 전체 개수
const pageCount = 5 // 한번에 보여지는 페이지 개수
const limit = 10 // 한번에 보여지는 데이터의 개수

let totalPage = Math.ceil(totalCount / limit) // 전체 페이지
let pageGroup = currentPage / pageCount // 현재 그룹
let firstpage = (pageGroup-1) +1
let lastpage = pageGroup * pageCount

const numberButtonWrapper = document.querySelector(".number-button-wrapper");
const setpageButtons = () => {
    numberButtonWrapper.innerHTML = '';
    for (let i=1; 1 <= totalPage; i++) {
        numberButtonWrapper.innerHTML += `<span class="number-button>${i}</span>`;
    }
};

setpageButtons()

