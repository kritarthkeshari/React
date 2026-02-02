let arr=[1,2,3,4,5,6,7];
arr.forEach((v,i)=>console.log(arr[i]=v+3));

/*for(const i in arr){
    console.log(i,arr[i]);
}
    */
for(const i in arr){
    arr[i]=arr[i]+3;
    console.log(i,arr[i]);
}


const user={name:"Rabins",age:25,Hobby:"Coding"};
for(const index in user){//iterates over indexes
    
    console.log(index,user[index]);
}

for(const index of arr){//iterates over values
    console.log(index);
}
