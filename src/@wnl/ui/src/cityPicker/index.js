/* eslint-disable global-require */
import { util } from '@wnl/util';
import $ from '../util/dom';
import picker from '../picker/index';
// import importCityCodeData from './cityData_code.json';
// import importCityData from './cityData.json';

export default class cityPicker {
  constructor(options) {
    this.cityData = [];
    this.defaults = $.extend(
      {
        id: 'cityPicker',
        className: '',
        container: 'body',
        onChange: $.noop,
        onConfirm: $.noop,
        defaultValue: ['01', '0101', '101010100'],
        // defaultValue: ['07', '0702', '101070202'],
        resultType: 'value', //回调时返回的数据，value：值，默认：序号
        cityCode: true,
        showAuto: false, //TODO: 展示自动定位
        level: 3
      },
      options
    );
    let defaultIndex = [];
    let cityData = [];
    if (this.defaults.cityCode) {
      System.import('./cityData_code.json').then(importCityCodeData => {
        cityData = util.deepCopy(importCityCodeData);
        //显示包含citycode的城市数据，这个数据的value为code
        cityData.forEach((element, index) => {
          element.label = element.name;
          element.value = element.id;
          if (element.value === this.defaults.defaultValue[0]) {
            defaultIndex.push(index);
          }
          if (element.children && this.defaults.level > 1) {
            element.children.forEach((element1, index1) => {
              element1.label = element1.name;
              element1.value = element1.id;
              if (element1.value === this.defaults.defaultValue[1]) {
                defaultIndex.push(index1);
              }
              if (element1.children && this.defaults.level > 2) {
                element1.children.forEach((element2, index2) => {
                  element2.label = element2.name;
                  element2.value = element2.id;
                  if (element2.value === this.defaults.defaultValue[2]) {
                    defaultIndex.push(index2);
                  }
                });
              } else {
                delete element1.children;
              }
            });
          } else {
            delete element.children;
          }
        });
        this.defaults.defaultIndex = defaultIndex;
        this.cityData = cityData;
        this.show();
      });
    } else {
      System.import('./cityData.json').then(importCityData => {
        cityData = util.deepCopy(importCityData);
        //显示包含经纬度的城市数据，这个数据的value为label即名称
        this.defaults.defaultValue = ['北京市', '市辖区', '东城区']; //经纬度数据没有value值，故设置初始值为城市名称
        cityData.forEach((element, index) => {
          element.value = element.label;
          if (element.value === this.defaults.defaultValue[0]) {
            defaultIndex.push(index);
          }
          if (element.children && this.defaults.level > 1) {
            element.children.forEach((element1, index1) => {
              element1.value = element1.label;
              if (element1.value === this.defaults.defaultValue[1]) {
                defaultIndex.push(index1);
              }
              if (element1.children && this.defaults.level > 2) {
                element1.children.forEach((element2, index2) => {
                  element2.value = element2.label;
                  if (element2.value === this.defaults.defaultValue[2]) {
                    defaultIndex.push(index2);
                  }
                });
              } else {
                delete element1.children;
              }
            });
          } else {
            delete element.children;
          }
        });
        this.defaults.defaultIndex = defaultIndex;
        this.cityData = cityData;
        this.show();
      });
    }
  }
  getCityList(cityList1, provinceId) {
    let localList = cityList1[provinceId];
    let resultList = [];
    if (!localList || localList.length === 0) {
      return resultList;
    }
    localList.forEach(element => {
      resultList.push({
        label: element.name,
        value: element.id
      });
    });
    return resultList;
  }
  getCountyList(countyList1, cityId) {
    let localList = countyList1[cityId];
    let resultList = [];
    if (!localList || localList.length === 0) {
      return resultList;
    }
    localList.forEach(element => {
      resultList.push({
        label: element.name,
        value: element.id
      });
    });
    return resultList;
  }
  show() {
    new picker(this.cityData, this.defaults);
  }
}
