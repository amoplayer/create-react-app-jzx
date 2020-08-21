import React from 'react';
import { Button } from 'antd';

export const isImg = /^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?/;

export const getChildrenToRender = (item, i) => {
  let tag = item.name.indexOf('title') === 0 ? 'h1' : 'div';
  tag = item.href ? 'a' : tag;
  let children = typeof item.children === 'string' && (item.children.match(isImg) || item.name === 'image')
    ? React.createElement('img', { src: item.children, alt: 'img' })
    : item.children;
  if (item.name.indexOf('button') === 0 && typeof item.children === 'object') {
    children = React.createElement(Button, {
      ...item.children
    });
  }
  return React.createElement(tag, { key: i.toString(), ...item }, children);
};


export function parseTime(time, cFormat) {
  if (arguments.length === 0 || !time) {
    return ''
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string') && (/^(-?)[0-9]+$/.test(time))) {
      time = parseInt(time)
    }
    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value ] }
    return value.toString().padStart(2, '0')
  })
  return time_str
}


export const textReplace = (str, max, min)  => {
  const temp = str
      .replace(/\s*/g, "")
      .replace(/<[^>]+>/g, '')
      .replace(/↵/g, '')
      .replace(/[\r\n]/g, '')
      .replace(/&nbsp;/ig,'')
      .replace(/&rdquo;/ig,'')
      .replace(/&middot;/ig,'')
      .replace(/&middot;/ig,'')
      .replace(/&ldquo;/ig,'')
  let i = Math.floor(Math.random() * (max - min)) + min;
  return temp.slice(0, i)
}

export function isJSON(str) {
  if (typeof str === 'string') {
    try {
      var obj = JSON.parse(str)
      if (typeof obj === 'object' && obj) {
        return true
      } else {
        return false
      }
    } catch (e) {
      return false
    }
  }
}


export function getSearch(search) {
  var pairs = search.slice(1).split('&');
  var result = {};
  pairs.forEach(function(pair) {
    if (pair && pair.indexOf('=') !== -1) {
      pair = pair.split('=');
      //兼容写法
      result[pair[0]] = result[
          pair[0].toLocaleLowerCase()
          ] = decodeURIComponent(pair[1] || '');
    }
  });

  return JSON.parse(JSON.stringify(result));
}
