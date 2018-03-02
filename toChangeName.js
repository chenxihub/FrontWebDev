// let Str = 'RECHART_NAME_RECHART_NAME';
// function ToChangeName(str) {
//     let lowerString = str.toLowerCase();
//     let strArr = lowerString.split('_');
//     for (let i = 1; i < strArr.length; i++) {
//         strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].substring(1);
//     }
//     return strArr.join('');
// }
//
// function Student(props) {
//     this.name = props
// }
//
// Student.prototype.hello = function () {
//     console.log('proptotype')
// }
//
// let xiaoming = new Student('xiaoming');
// console.log(xiaoming.name)
// xiaoming.hello();


let allRes = [{
    "id": "4",
    "pid": "1",
    "name": "大家电"
},
    {
        "id": "5",
        "pid": "1",
        "name": "生活电器"
    },
    {
        "id": "1",
        "pid": "0",
        "name": "家用电器"
    },
    {
        "id": "2",
        "pid": "0",
        "name": "服饰"
    },
    {
        "id": "3",
        "pid": "0",
        "name": "化妆"
    },
    {
        "id": "7",
        "pid": "4",
        "name": "空调"
    },
    {
        "id": "8",
        "pid": "4",
        "name": "冰箱"
    },
    {
        "id": "9",
        "pid": "4",
        "name": "洗衣机"
    },
    {
        "id": "10",
        "pid": "4",
        "name": "热水器"
    },
    {
        "id": "11",
        "pid": "3",
        "name": "面部护理"
    },
    {
        "id": "12",
        "pid": "3",
        "name": "口腔护理"
    },
    {
        "id": "13",
        "pid": "2",
        "name": "男装"
    },
    {
        "id": "14",
        "pid": "2",
        "name": "女装"
    },
    {
        "id": "15",
        "pid": "7",
        "name": "海尔空调"
    },
    {
        "id": "16",
        "pid": "7",
        "name": "美的空调"
    },
    {
        "id": "19",
        "pid": "5",
        "name": "加湿器"
    },
    {
        "id": "20",
        "pid": "5",
        "name": "电熨斗"
    }
]

//将json串转换成树形结构
function transData(a, idStr, pidStr, chindrenStr) {
    let r = [],
        hash = {},
        id = idStr,
        pid = pidStr,
        children = chindrenStr,
        len = a.length;
    for (let i = 0; i < len; i++) {
        hash[a[i][id]] = a[i];
    }
    for (let j = 0; j < len; j++) {
        let aVal = a[j],
            hashVP = hash[aVal[pid]];
        if (hashVP) {
            !hashVP[children] && (hashVP[children] = []);
            hashVP[children].push(aVal);
        } else {
            r.push(aVal);
        }
    }
    return r;
}

//测试方法
function test() {
    //json串
    let jsonData = eval(allRes);
    //绑定的字段
    let jsonDataTree = transData(jsonData, 'id', 'pid', 'chindren');
    console.log(jsonDataTree);
}

//窗体加载执行的方法
test();