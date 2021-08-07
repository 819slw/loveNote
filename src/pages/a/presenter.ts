/*
 * @Author: your name
 * @Date: 2021-08-07 13:21:26
 * @LastEditTime: 2021-08-07 13:27:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /loveNote/src/pages/a/presenter.ts
 */
import { useState } from "react";

const Presenter = () => {
  const [list, setlist] = useState([]); // react 定义响应式变量的方式

  const changeList = arr => {
    setlist(arr);
  };

  return [
    {
      list
    }, // 状态
    { changeList } // 事件
  ];
};

export default Presenter;
