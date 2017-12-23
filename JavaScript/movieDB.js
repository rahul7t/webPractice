var movie = [
    {
    isSeen: true,
    title: "matrix",
    star: 5
    },
    {
        isSeen: false,
        title: "horror",
        star: 5
        }
]

movie.forEach(function(movie){
    if(movie.isSeen){
        console.log("You have watched  "+movie.title+" star: "+movie.star);
    }else{
        console.log("You have not seen "+movie.title+" star: "+movie.star);
    }
    })