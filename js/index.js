(function() {
    let WD = new WorkerDeal();
    if(WD.isSupport()) {
        let worker = WD.getOne('./js/webworker.js'); //  执行worker的操作
        worker.postMessage(1);  //  请求数据的标志符，以后可以把标志符统一写在一起，这样worker可以根据不同的方式去调用
        let app = document.getElementById("app");
        worker.addEventListener('message', function(e) {
            WD.logHandler('info', '数据已经获取');
            let data = e.data.result;
            let _dom = '';
            data.forEach(element => {
                _dom += `<span class='you'>${element}</span>`;
            });
            app.innerHTML += _dom;
        }, false)
    }else {
        //  不满足只能走其他的打算
    }
})()