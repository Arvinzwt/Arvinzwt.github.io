/**
 * @desc: 自定义工具函数
 * @docs: underscore => https://underscorejs.org
 * @docs: moment => http://momentjs.cn
 */
import moment from 'moment';

export default ({}, inject) => {
    inject('utils', {
        formatDate(date) {
            return date ? moment(date).format('YYYY-MM-DD HH:mm:ss') : '';
        },
        getType(tag) {
            switch (tag) {
                case 'Home':
                    return '#67C23A';
                case 'socket':
                    return '#909399';
                case 'webrtc':
                    return '#E6A23C';
                case 'websocket':
                    return '#F56C6C';
            }
        }
    })
}