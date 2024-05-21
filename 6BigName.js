function chakBignam(){
    let BigName=[0];
for(let i=0;i<friends.length;i++)
    {
        const elemet=friends[i];
        if(elemet.length > BigName.length)
            {
                BigName=elemet;
            }
    }

    return BigName;
}
var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
let result= chakBignam(friends);
console.log(result);
