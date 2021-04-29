
import axios from 'axios';

const getCoachList = () => {
    return axios({
        url: "/api/coaches/pending", 
        method: "get",
    }).then((res) => {
        return res.data;
    })
};

const updateCoach = (slug) => {
    return axios({
        url: "/api/coaches/approve/" + slug + "/",
        method: 'post',
    }).then((res) => {
        return res.data;
    })
}

const getReview = () => {
    return axios({
        url: "/api/reviews/list",
        method: 'get',
    }).then((res) => {
        return res.data;
    })
}

const approveReview = (params) => {
    return axios({
        url: "/api/reviews/approve",
        method: "post",
        data: params
    }).then((res) => {
        return res.data;
    })
}

const adminServices = {
    getCoachList,
    updateCoach,
    getReview,
    approveReview
};

export default adminServices;