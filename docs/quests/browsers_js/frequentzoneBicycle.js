

//  데이터 가지고 오기

let bicycle_table_button = document.querySelector("#bicycle_table_button")
bicycle_table_button.addEventListener('click', async(event) => {

    let url = 'https://apis.data.go.kr/B552061/frequentzoneBicycle/getRestFrequentzoneBicycle?serviceKey=Gc7paAk%2Bpu9XSVXtB0YmE6%2FxA9zA4D8Q%2BfrMBjne9OMNaQdfGSppOtS54DkAhAfYt6Lvx8NUr8ct46cuTNMwtg%3D%3D&searchYearCd=2021&siDo=11&guGun=110&type=json&numOfRows=10&pageNo=1'
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