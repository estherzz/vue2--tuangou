export function username(field,val,cb){
    if(/^\w{4,10}$/.test(val)){
        cb()
    }else{
        return cb(new Error('请输入4-10位数字、英文或下划线'))
    }
}
export function password(field,val,cb){
    if(/\d.*[a-zA-Z]|[a-zA-Z].*\d/.test(val)){
        cb()
    }else{
        return cb(new Error('必须包含字母和数字'))
    }
}
export function rePassword(password,field,val,cb){
    // console.log(6666,password,val)
    if(password === val){
        cb()
    }else{
        return cb(new Error('两次密码不一致'))
    }
}
// 电话 11位 第一位为 1
export function telephone(field,val,cb){
    if(/^1\d{1,10}$/.test(val)){
        cb()
    }else{
        return cb(new Error('请输入正确电话号码'))
    }
}