const todayStats = "http://99.124.137.190:8181/api/v2?apikey=e226504f58444d879ce88803152b142a&cmd=get_home_stats&time_range=1&stats_type=duration&stats_count=3&stat_id=top_music"; 


// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', todayStats, true)

request.onload = function () {
    var data = JSON.parse(this.response); 
    console.log(data); 
}

// Send request
request.send()