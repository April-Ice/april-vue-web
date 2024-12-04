const codeList = [
    // 比较两个对象值一致
    `
     // 比较两个对象值一致
     let obj1 = {}
     let obj2 = {}
     if(JSON.stringify(obj1) === JSON.stringify(obj2)){
     }
     `,

    //  深拷贝
    `
    // 深拷贝   concat与[...]，操作对象属性会改变原数组
    let arr = [{a:1,b:2}]
    // 1.JSON.parse  缺陷：无法取到函数属性;如果字段undefined会变为null;undefined,null,Date,RegExp,function，error的时候 有问题
    let newArr = JSON.parse(JSON.stringify(arr))

    // 2、第三方库lodash的cloneDeep()方法
    lodash.cloneDeep()
    `,

    // 动态引入组件
    

]
export default codeList;