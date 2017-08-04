
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
    canViewDisabled: false, // 是否可以阅读不在范围内的月份
    beforeRenderArr: [{
        stamp: 1512057600000,
        className: 'able1',
    }],
    success: function(item, arr, cal) {
        console.log(item, arr);
        cal.hideBackground();
    },
    switchRender: function(year, month, cal) {
        console.log('计算机识别的 - 年份: ' + year + ' 月份: ' + month);
        var data = [{
            'stamp': 1507737600000,
            'className': 'able1',
        }];
        cal.renderCallbackArr(data);
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
    beforeRenderArr: [{
        stamp: 1514822400000,
        className: 'able2',
    }],
    success: function(item, arr) {
        console.log(item, arr);
        document.getElementsByClassName('container2-item-' + item)[0].classList.add('able2');
    },
    switchRender: function(year, month, cal) {
        console.log('计算机识别的 - 年份: ' + year + ' 月份: ' + month);
        var data = [{
            'stamp': 1507737600000,
            'className': 'able2',
        }];
        cal.renderCallbackArr(data);
    }
});