
//code Explanation:
//Since velocity = distance /time
//So, distance  = velocity * jumps => distance == vj
// let x1 (kangaroo 1 initial positon) plus j jumps times v1 kangarooo 1 velocity) equals x2 (kangaroo 2 initial positon) plus j jumps times v2 kangarooo 2 velocity):
//i.e (x1 + v1j) = (x2 + v2j) => (x2 -x1) = j(v2 - v1) => j=(x2-x1)/(v1 - v2)
//So, it is worth to note here that , v1 must alwalys be greater than v2 if kangaroo 1 has to catch up with kangaroo 2
// and the  reminder of ((x2 -x1) % (v1 -v2)) === 0
//otherswise kangoroo 2 will run off and kangaroo 1 will not be able to catch up with it.

function kangaroo(x1, v1, x2, v2) {
    if(v1 > v2){
        let reminder = (x2 -x1) % (v1 -v2);
        if(reminder === 0){
             return "YES";
        }
         return "NO";
    }
     return "NO"
}


 console.log(kangaroo(0, 2 ,5,3));
 console.log(kangaroo(0, 3 ,4,2));
 