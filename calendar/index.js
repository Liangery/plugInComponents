
new Calendar({
    // 用户传入实际的数据
    clickTarget: 'target',//非必传，触发日历控件的target。不传的时候，是直接展示到页面中
    container: 'container',//非必传，插件会自己创建
    angle: 0,
    isMask: true, // 是否需要弹层
    beginTime: [2017, 1, 1], //如空数组默认设置成1970年1月1日开始,数组的每一位分别是年月日。
    endTime: [2018, 1, 13], //如空数组默认设置成次年12月31日,数组的每一位分别是年月日。
    recentTime: [2018, 1, 2], //如空数组默认设置成当月1日,数组的每一位分别是年月日。
    isSundayFirst: true, // 周日是否要放在第一列
    isShowNeighbor: true, // 是否展示相邻月份的月尾和月头
    isToggleBtn: true, // 是否展示左右切换按钮
    isChinese: true, // 是否是中文
    monthType: 3, // 0:1月, 1:一月, 2:Jan, 3: April
    resultType:1,//返回的结果的格式, 1:2017-1-1,2:2017年1月1日,3:2017/1/1,4:时间戳
    canViewDisabled: false, // 是否可以阅读不在范围内的月份
    beforeRenderArr: [{
        stamp: new Date(2018,0,2).getTime(),
        className: 'able1',
    }],//方形背景
    classConfig:[{year:2017,month:11,dayArr:[{day:1,class:'able1'},{day:2,class:'able1'},{day:3,class:'able1'}]}],//默认是原形的背景
    success: function(item, arr, cal) {
        console.log(item, arr);
        cal.hideBackground();
    },
    switchRender: function(year, month,direct, cal) {
        console.log('计算机识别的 - 年份: ' + year + ' 月份: ' + month);
        var data = [{
            'stamp': new Date(cal.currentYear,cal.currentMonth,1).getTime(),
            'className': 'able1',
        }];
        cal.renderCallbackArr(data);
    },
    showCalendarFn:function(){
        console.log("弹出日期弹框");
    },
    hideCalendarFn:function(){
        console.log("隐藏日期弹框");
    }

});


new Calendar({
    // 用户传入实际的数据
    container: 'container2',
    angle: 14,
    isMask: false, // 是否需要弹层
    beginTime: [2017, 1, 1], //如空数组默认设置成1970年1月1日开始,数组的每一位分别是年月日。
    endTime: [2018, 12, 31], //如空数组默认设置成次年12月31日,数组的每一位分别是年月日。
    recentTime: [2017, 9, 1], //如空数组默认设置成当月1日,数组的每一位分别是年月日。
    isSundayFirst: true, // 周日是否要放在第一列
    isShowNeighbor: true, // 是否展示相邻月份的月尾和月头
    isToggleBtn: true, // 是否展示左右切换按钮
    isChinese: true, // 是否是中文
    monthType: 0, // 0:1月, 1:一月, 2:Jan, 3: April
    canViewDisabled: true, // 是否可以阅读不在范围内的月份
    fixedCalendarHeight:true,//是否固定日历高度，固定后会一直显示42天的日期，
    beforeRenderArr: [{ //创建日历的时候，渲染的class样式控制
        stamp: new Date(2017,8,15).getTime(),
        className: 'able2',
    }],
    success: function(item, arr,cal,ele) { //点击日期的时候的回调函数，item当前返回的结果，arr最近点击的日期
        console.log(item, arr);
        document.getElementsByClassName('container2-item-' + item)[0].classList.add('able2');//这里可以动态修改颜色
    },
    switchRender: function(year, month, direct,cal) {
        console.log('计算机识别的 - 年份: ' + year + ' 月份: ' + month);
        var data = [{
            'stamp': new Date(cal.currentYear,cal.currentMonth,1).getTime(),
            'className': 'able2',
        }];
        cal.renderCallbackArr(data);
    }
    
});