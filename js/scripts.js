var tweetApi = "https://twitter.com/intent/tweet";

$('.btn').on('click', function() {

    $.ajax({
        url: "https://talaikis.com/api/quotes/random/",
        cache: false,
        success: function(data) {
            $('.container').hide().fadeIn(1000);
            $('#text').text(shortString(data.quote));
            quote = data.quote;
            $('#author').text("-" + data.author);
            // console.log(data);
            tweetApi += "?text=" + encodeURI(data.quote) + " " + encodeURI(data.author);
            // console.log(tweetApi);
            $('.tweet').attr("href", tweetApi);
        }


        // });
        // $.ajax({
        //     url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=mycallback",
        //     dataType: "jsonp"
        // });


    });
})

// function mycallback(json) {
//     console.log(json);

// }

// $('#text').on('click', function() {
//     console.log(quote);
//     // $('#author').remove();
//     console.log(this.val);
//     // if (this.val.length === quote.length) {
//     //     $(this).text(shortString(quote));
//     // }
//     // $(this).text('"' + quote + '"');
//     // $(this).text(shortString(quote));
// })


function shortString(arg) {
    var str;
    console.log(arg.length);
    if (arg.length > 100) {
        str = arg.slice(0, 97) + "...";
    } else {
        str = arg.slice(0, 100);
    }

    return str;

}