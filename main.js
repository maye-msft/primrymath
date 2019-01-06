const exprssions = []
const random = require("random-js")(); // uses the nativeMath engine


for(let i=0;i<20;) {
    var item = []
    var itemCount = random.integer(3, 5);
    for(let i=0;i<itemCount;i++) {
        var num = random.integer(1, 20);
        item.push(num)
        if(i<itemCount-1) {
            var sign = random.integer(0,1);
            item.push(sign==0?'+':'-')
        }

        
    }
    let expr = item.join(' ');
    let result = eval(expr)
    if(result>0) {
        i++;
        exprssions.push(expr)
    }
    
}

exprssions.forEach((expr)=>{
    console.log(expr+" = "+eval(expr))
});

