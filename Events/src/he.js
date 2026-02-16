function greet(){
    console.log("Wallah Habibi");
}
function execute(fn){

    fn();//CallBack!!!

}
execute(greet());
const number=[1,2,3,5,8,9];
//map copies elements and transfer it in another array,it doesn't change the existing array.

   /* const newnum=number.map(function(n)){
            return n*2;
    })
   */
  const newnum=number.map(n=>n*2);//=><li>{n}</li>

  // filter 
const newsnum=number.filter((n)=>n%2==0)

const n =[...Number,5];
