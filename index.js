export default function wordCounter(s){
    let f=0
    let count=0;
    for(let i=0;i<s.length;i++){
        if(s[i]>='a' && s[i]<='z' || s[i]>='A' && s[i]<='Z'){
            if(f==0){
                count++
                f=1
            }
        }else{
            f=0
        }
    }
    return count
}
