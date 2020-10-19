exports.isprime=function(n){
    flag=0;
    for(i=2;i<n;i++)
    {
        if(n%i==0)
        flag=1;
    }
    if(flag==1)
    return "not prime.";
    else
    return "prime.";
}