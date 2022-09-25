const todayStats = "https://99.124.137.190:8181/api/v2?apikey=e7feb684be924d9190e11ea18e0c8452&cmd=get_home_stats&time_range=1&stats_type=duration&stats_count=3&stat_id=top_music"; 


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