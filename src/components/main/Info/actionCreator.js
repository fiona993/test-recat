import axios from 'axios'
export const GET_LIST_DATA='info/get_list_data'
export const loadListData=(res)=>{
    return {
        type:GET_LIST_DATA,
        res
    }
}
export const loadListDataAsyanc=(dispatch)=>{
    return ()=>{ 
        axios({
            method: 'get',
            url: '/apis/home/getRecommendShow',
            data: {
              cityAdd:"",
              page:"2",
              version:"5.1.4",
              referer:"2"
            }
        }).then((res)=>{
          dispatch(loadListData(res.data.data.recommend_show_list)) 
        })
    }
}
//------------------------
export const LIST_DATA='info/list_data'
export const ListData=(res)=>{
    return {
        type:LIST_DATA,
        res
    }
}
export const ListDataAsyanc=(dispatch)=>{
    return ()=>{ 
        axios({
            method: 'get',
            url: '/apis/home/getTourRecommendList',
            data: {
                city_id: '0',
                rows: '6',
                version: '5.1.4',
                referer: '2'
            }
        }).then((res)=>{
          dispatch(ListData(res.data.data.tour_show_list)) 
        })
    }
}