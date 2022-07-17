import { useEffect, useState, useCallback } from 'react'
import axios from '@/utils/axios'
import { pageconfig } from '@/config'
import { message } from 'antd'

const useAntdTable = ({ requestUrl = '', queryParams = null }) => {
    const [loading, setLoading] = useState(false);
    const [dataList, setDataList] = useState([]);
    const [sorter, setSorter] = useState("");
    const [myfilters, setMyFilters] = useState({});
    const [tablePagination, setTablePagination] = useState({ current: 1, pageSize: pageconfig.pageSize, total: 0 });

    useEffect(() => {
        fetchListWithLoading();
    }, [])

    const fetchDataList = (params) => {
        const requestParams = {
            page: tablePagination.current,
            pageSize: tablePagination.pageSize,
            sorter: sorter,
            filters: myfilters,
            ...queryParams,
            ...params
        };

        console.log(requestParams, 'requestParams');
        console.log(tablePagination.current, 'tablePagination.current');

        axios.get(requestUrl, { params: requestParams })
            .then(reg => {
                const { status, data } = reg;
                if (status === 0 || status === '0') {
                    const { totalNum, pageNum } = data;
                    //解决在删除某一项，当前页的内容被删除结束。
                    //下面这个判断条件是为了防止没有接收到数据的情况
                    // if (totalNum > 0 && totalNum > pagesSize) {
                    //     // 防止某些删除的操作导致页码不一致的情况
                    //     if (pages < tablePagination.current) return fetchDataList()
                    // }
                    //后端使用springboot的pagehelper插件，不需要考虑分页超出限制的情况
                    setTablePagination({ ...tablePagination, current: pageNum, total: totalNum }); //分页设置
                    setDataList(data.data);
                    setLoading(false);
                    console.log('useAntdTable ', data.data);
                }
                else {
                    message.error('错误码' + status + ':' + reg.message);
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

    const updateList = async (func) => {
        try {
            console.log('updateList used!!!!!updateList used!!!!:');
            setLoading(true);
            await func();
            setTimeout(() => {
                fetchDataList()
            }, 100);
        } catch (error) {
            console.log('updateList error:', error);
            setLoading(false)
        }

    }


    /**
     * @author: cyong
     * @description: 分页，排序，筛选变化时触发
     *                 当前只封装了分页
     * @param {*} pagination
     * @param {*} filters
     * @param {*} sorter
     * @return {*}
     */
    const handleTableChange = (pagination, filters, sorter) => {
        let tempsorter = '';
        if (sorter && sorter.order) {
            // console.log(sorter.field + '&&' + sorter.order, "sortersortersorter");
            tempsorter = sorter.field + '&&' + sorter.order;
            setSorter(tempsorter);
        }
        // console.log(filters, "filtersfiltersfilters");
        let tmpfilters = {}
        for (let key in filters) {
            if (filters[key] !== null) {
                tmpfilters[key] = filters[key].toString();
            }
        }
        setMyFilters(tmpfilters);


        // console.log(JSON.stringify(sorter));

        fetchListWithLoading({ page: pagination.current, sorter: tempsorter, filters: tmpfilters })

    }

    /**
     * @author: cyong
     * @description: 用户进行检索的函数，检索时页面会回到第一页
     * @param {*} params
     * @return {*}
     */
    const onSearch = (params) => {
        fetchListWithLoading({ page: 1, ...params })
    }


    return {
        tableProps: {
            //数据不是唯一的，出现报错的行为
            rowKey: 'id',
            loading,
            dataSource: dataList,
            pagination: {
                current: tablePagination.current,
                pageSize: tablePagination.pageSize,
                total: tablePagination.total,
                size: 'default',
                showTotal: total => `共${total}条`
            },
            onChange: handleTableChange
        },
        dataList,
        updateList: useCallback(updateList, [tablePagination, queryParams]),
        onSearch: useCallback(onSearch, [tablePagination, queryParams]),
        setLoading: useCallback(setLoading, [])
    }
}

export default useAntdTable