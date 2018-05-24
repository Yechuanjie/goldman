interface CallbackData {
    /**
     * 属相 
     * 
     * @type {string}
     * @memberof CallbackData
     */
    Animal: string,
    /**
     * 农历日期汉字表示法
     * 
     * @type {string}
     * @memberof CallbackData
     */
    IDayCn: string,
    /**
     * 农历月份汉字表示法
     * 
     * @type {string}
     * @memberof CallbackData
     */
    IMonthCn: string,
    /**
     * 节气名
     * 
     * @type {(null | string)}
     * @memberof CallbackData
     */
    Term: null | string,
    /**
     * 星座
     * 
     * @type {string}
     * @memberof CallbackData
     */
    astro: string,
    /**
     * 公历日期
     * 
     * @type {number}
     * @memberof CallbackData
     */
    cDay: number,
    /**
     * 公历月份
     * 
     * @type {number}
     * @memberof CallbackData
     */
    cMonth: number,
    /**
     * 公历年份
     * 
     * @type {number}
     * @memberof CallbackData
     */
    cYear: number,
    /**
     * 日期类型0：公历，1：农历
     * 
     * @type {number}
     * @memberof CallbackData
     */
    calendarType: number,
    /**
     * 干支日
     * 
     * @type {string}
     * @memberof CallbackData
     */
    gzDay: string,
    /**
     * 干支月
     * 
     * @type {string}
     * @memberof CallbackData
     */
    gzMonth: string,
    /**
     * 干支年
     * 
     * @type {string}
     * @memberof CallbackData
     */
    gzYear: string,
    /**
     * 是否闰月
     * 
     * @type {boolean}
     * @memberof CallbackData
     */
    isLeap: boolean,
    /**
     * 是否节气
     * 
     * @type {boolean}
     * @memberof CallbackData
     */
    isTerm: boolean,
    /**
     * 是否今天
     * 
     * @type {boolean}
     * @memberof CallbackData
     */
    isToday: boolean,
    /**
     * 农历日期
     * 
     * @type {number}
     * @memberof CallbackData
     */
    lDay: number,
    /**
     * 农历月份
     * 
     * @type {number}
     * @memberof CallbackData
     */
    lMonth: number,
    /**
     * 农历年份
     * 
     * @type {number}
     * @memberof CallbackData
     */
    lYear: number,
    /**
     * 星期几
     * 
     * @type {number}
     * @memberof CallbackData
     */
    nWeek: number,
    /**
     * 星期几中文表示法
     * 
     * @type {string}
     * @memberof CallbackData
     */
    ncWeek: string,
    /**
     * 小时
     * 
     * @type {number}
     * @memberof CallbackData
     */
    hour: number,
    /**
     * 分钟
     * 
     * @type {number}
     * @memberof CallbackData
     */
    minute: number
}

interface Options {
    /**
     * 初始化组件日期
     * 
     * @type {Array<number>}
     * @memberof Options
     */
    dataTime?: Array<number>,
    /**
     * 结束年份，默认当前年份
     * 
     * @type {number}
     * @memberof Options
     */
    endYear?: number,
    /**
     * 取消回调
     * 
     * @param {CallbackData} callbackData 返回组件日期对象
     * @memberof Options
     */
    onCancel?(callbackData: CallbackData): void,
    /**
     * 确认回调
     * 
     * @param {CallbackData} callbackData 返回组件日期对象
     * @memberof Options
     */
    onConfirm?(callbackData: CallbackData): void
}

declare class DataPicker {
    constructor(options?: Options)
    /**
     * 显示组件
     * 
     * @memberof DataPicker
     */
    show(): void;
}

export default DataPicker