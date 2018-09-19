//importScripts('one.js', 'two.js');  //这里我们可以引入多个外来的脚本，便于我们的开发

onmessage = function(e) {
    if(e.data == 1) {
        var i = 0;
        setInterval(()=> {
            console.log(i++);
            fetch('https://way.jd.com/jisuapi/channel?appkey=1e58cd8eefb3ed489f9f3ddc00ad5486')
                .then(response => {
                    return response.json()
                })
                .catch(error => {
                    console.error('Error:', error)
                })
                .then(response => {
                    console.log(response.result);
                    postMessage(response.result);
                });
        }, 500000000)
    }else {
        console.log('no sign');
    }
  }