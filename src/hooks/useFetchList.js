import { useState } from 'react';
import { pageconfig } from '@/config';
import { useEffect } from 'react';
import axios from '@/utils/axios';
import { message } from 'antd';
// import { useCallback } from 'react';

const useFetchList = ({
    requestUrl = '',
    queryParams = null,
}) => {
    const [dataList, setDataList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pagination, setPagination] = useState({ current: 1, pageSize: pageconfig.homePagesize, total: 0 });

    useEffect(() => {
        fetchListWithLoading();
    }, []);

    function fetchDataList(params) {
        const requestParams = {
            page: pagination.current,
            pageSize: pagination.pageSize,
            ...queryParams,
            ...params
        };
        axios.get(requestUrl, { params: requestParams })
            .then(res => {
                const { status, data } = res;
                if (status === 0 || status === '0') {
                    const { totalNum, pageNum } = data;
                    setPagination({ ...pagination, current: pageNum, total: totalNum }); //分页设置
                    setDataList(data.data);
                    setLoading(false);
                    console.log('useFetchList ', data.data);
                }
                else {
                    message.error('错误码' + status + ':' + res.message);
                    setLoading(false);
                }
            })
            .catch(error => {
                console.log('fetchDataList error', error);
                setLoading(false);
            })


    }

    const fetchListWithLoading = async (params) => {
        setLoading(true);
        fetchDataList(params);
    }

    const handlePageChange = thispage => {
        fetchListWithLoading({ page: thispage });
    }

    const onFetch = (params) => {
        fetchListWithLoading(params);
    }

    return {
        dataList,
        loading,
        pagination: {
            ...pagination,
            hideOnSinglePage: true,
            onChange: handlePageChange
        },
        onFetch

    }
}

export default useFetchList;