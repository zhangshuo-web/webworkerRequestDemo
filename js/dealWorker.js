class WorkerDeal {
    constructor() {
        console.info("WorkerDeal 已经创建");
    }

    logHandler(type="info", msg="log info", color="#2980b9") {
        let _type = type;
        let _msg = msg;
        if(window.console.hasOwnProperty(_type)) {
            window.console[_type].call(window.console, "%c" + _msg, "color: " + color + "; font-style: bold");
        }else {
            this.logHandler({type: warn, msg: '当前方法不存在'});
        }
    }

    isSupport() {
        if(window.Worker) {
            this.logHandler('info', '-> 您当前的浏览器支持 webworker');
            return true;
        }else {
            this.logHandler('wran', '-> 您当前的浏览器不支持 webworker', "#e74c3c");
            return false;
        }
    }

    getOne(path="") {
        if(path==null||path==""||path==false) {
            this.logHandler('wran', '-> 请传入woker文件路径', "#e74c3c");
            return;
        }
        this.logHandler('info', '-> worker创建成功');
        return new Worker(path);
    }


}