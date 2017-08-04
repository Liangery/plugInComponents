### 插件原著作者：appian [插件原著github地址](https://github.com/AppianZ/Desert-or-Ocean)

### 参数说明
|Name|Mean|Type|Value|Must|change|
|:---:|:---:|:---:|:---:|:---:|
|clickTarget | the id of the dom you touch | {String}| - | × | × |
|container| the id of the container you ready to append dom| {String}| - | √ | √|
|angle| fix the sensibility of user touches by angle | {Number}|  had better set it between  **5** and **20** | × | × |
|isMask| set layout | {Boolean} | true:“**popup layout**”, false:“**normal layout**”  | √ | √ |
|beginTime| user-defined begin time points.  | {Array(Number)} |an empty array means` [1970, 1, 1]`. every position sequent meas “**year**”, "**month**" and "**date**".  | √ | × |
|endTime| user-defined end time points. | {Array(Number)}| the same to beginTime. an empty array means `[nextYear, 12, 31] `| √ | × |
|recentTime| user-defined current time points. | {Array(Number)} | the same to beginTime. an empty array means `[currentYear, currentMonth, 1]`  | √ | × |
|isSundayFirst| the Sequence of Sunday | {Boolean}| true:Sunday at the **first** column, false:Sunday at the **last** column | √ | × |
|isShowNeighbor| controll the display of the adjacent months| {Boolean} |true: show the adjacent months, false: hide the adjacent months | √ | × |
|isToggleBtn| controll the display of the switch button| {Boolean}| true:show the switch button, false:hide the switch button| √ | × |
|isChinese| controll the language of week |  {Boolean} |true:show Chinese week like ‘六’，false: show English week like ‘S’ | √ | × |
|monthType| controll the type of month  | {Number 0-3}| 0: 1月, 1:一月, 2:Jan, 3: January | √ | × |
|canViewDisabled| controll the display of the out-range months |  {Boolean} |true: show the out-range months，false:hide the out-range months| √ | × |
|beforeRenderArr| rend the style of the specified date |   {unordered Array(Object)} | every item of this array has two arguments:  the specified date  `stamp{Number}` & the specified classname `className {String}`, see below for details | √ | × |
|success| the callback of  tap events|   {Fuction(item, array,cal)}| there are 3 arguments，`item`: the time stamp of the target，`array` :the two targets after two tap events ,`cal` : the instance| √ | × |
|switchRender| the callback of  switch events |   {Fuction(year, month, cal)} |  there are 3 arguments，`year` : the generating year，`month`: the generating month (from zero), `cal` : the instance| √ | × |