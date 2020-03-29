/**
 * @desc 全局类型文件定义，
 * @desc 参考地址：https://www.tslang.cn/docs/handbook/declaration-files/by-example.html
 */

// 给默认对象，可以添加任意属性的一个接口类型；
interface DefaultObject {
    [propName: string]: any;
}

// 给默认对象，可以添加字符串属性的一个接口类型；
interface DefaultStringObject {
    [propName: string]: string;
}

// 给默认对象，可以添加字符串属性的一个接口类型；
interface DefaultNumberObject {
    [propName: string]: number;
}

// 给默认对象，可以添加字符串属性的一个接口类型；
interface DefaultFunctionObject {
    [propName: string]: Function;
}

// aid的类型判断
type aidTypes = string | number;

// ajax的参数类型
interface AjaxTypes {
    method: string;
    data?: object;
    url: string;
    success?: Function;
    error?: Function;
    timeout?: number;
}

// ajax的参数类型
interface AjaxResObjTypes {
    success: boolean;
    code?: boolean;
    [propName: string]: any;
}

// 传入function，返回Function的
interface FnToFnTypes {
    (fn: Function): Function;
}

// 扩展原生的Window对象的属性；
interface Window {
    requestIdleCallback: RICBFnTypes;
    cancelIdleCallback: CICBFnTypes;
    _config?: any;
    tcb_ssp_ad58?: Array<object>; // eslint-disable-line
    _qksdk?: DefaultObject;
    cpcAndroid?: any;
    slotbydup?: Array<object>; // 百度广告用的
    cproStyleApi?: Object<DefaultObject>; // 百度广告用的
}

// 扩展原生的 Element 对象的属性
interface Element {
    style?: any;
    src?: string;
    sync?: boolean;
    href?: string;
    rel?: string;
    attachEvent?: any;
    type?: any;
    offsetHeight?: any;
    detachEvent?: any;
}

// 扩展支持一下Function
interface Function {
    handleEvent: any;
}

// requestIdleCallback的函数类型
interface RICBFnTypes {
    (fn: Function): number;
}
interface CICBFnTypes {
    (fn: number): any;
}

// userInfo的信息结构
interface UserInfoTypes {
    brand?: string; // 设备品牌
    model?: string; // 不知道啥~ // todo'
    member_id?: string | number; //eslint-disable-line
    // member_id 是后端传递的，所以这里不做eslint检查；
    dtu?: string; // 不知道干啥的~ // todo',
    osVersion?: string | number; // 系统版本号',
    lat?: string; // 纬度信息
    lon?: string; // 经度信息
    time?: string; // 时间，时区信息；
}

// MessageFromNative接收到的参数结构
interface MsgFNDataTypes {
    data: string; // 设备品牌
    callbackId: string; // 设备品牌
    method: stiring; //
}

// URL Config支持配置的参数；
interface UrlConfigTypes {
    channel?: string; // 渠道号
    dc?: string; // 设备唯一标识符，idfa或者imei
    isCarousel?: boolean; // 是否为轮播的容器
}

// URL Config支持配置的参数；
interface StyleConfigTypes {
    rss1?: string; // background属性值
    margin?: any; // margin属性值
    ptFs?: any; // font-size属性值，只支持数字，不能携带单位
    // width属性值，用于img的父元素，只支持数字，不能携带单位，默认我90
    img_w?: any; //eslint-disable-line
    // height属性值，用于img父元素，只支持数字，不能携带单位，默认子元素撑开
    img_h?: any; //eslint-disable-line
}

// baseInfo的格式
interface BaseInfoTypes {
    queryInfo: DefaultObject; // url上获取得到的参数
    userInfo: UserInfoTypes; // 从客户端获取的User的相关信息
    uaInfo: DefaultObject; // ua信息，保存一次，不再重复读取
    protocol: string; // 当前的协议；
    viewPortHeight: number; // 根据平台不同，取的可是高度的区域不同
    viewPortWidth: number; // 根据平台不同，取的可是宽度的区域不同
    isWiFi: boolean; // 当前是否为wifi状态；
}

// advInfoTypes 每个广告初始化时，配置的广告格式信息；
interface AdvInfoTypes {
    aid: aidTypes; // 广告id
    dom: string; // 广告要插入的dom的id
    isHQW?: string; // 第三方广告的一个配置；
    styleConfig?: StyleConfigTypes; // 当前重置的样式
    urlCfg?: UrlConfigTypes; // 重置或补充url上的配置参数
    searchId?: string; // eslint-disable-line // 后端返回的一个id
    ext?: DefaultObject; // 配置的一些扩展信息
    eleId?: string; // 生成div的id
    startTime?: number; // 该跳广告，请求发出的时间；
}

// 显示上报，需要的对象格式
interface ViewReportTypes {
    aid: aidTypes; // 广告id
    eleId: string; // 生成div的id
    dom: string; // 需要显示的元素
    log: string | string[]; // 上报时调用的url地址；
    percent?: number; // 显示多少元素时，进行上报
    featureId?: string | number; //
    time: number; // 时间戳
    hasReport?: boolean; // 是否report过；
}

// 打底广告，显示的配置结构
interface OtherAdvConfigTypes {
    dom: string; // 需要显示的元素
    id: string; // adslotid 的id
    aid: aidTypes; // 广告位id
    isHQW?: advConfig.isHQW; // 第三方广告的一个配置；
    styleConfig?: StyleConfigTypes; // 当前重置的样式
    eleId: string; // 生成div的id
}

// 灰度的配置参数
interface GrayConfigTypes {
    onlineUrl: string; // 线上的地址
    grayUrl: string; // 灰度的地址；
}
