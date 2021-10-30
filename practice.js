let department = ["hello", 'mello', 'jello']

let value = "mello";

department = department.filter(function(string){
    return string !== value
})
console.log(department);