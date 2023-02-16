        document.documentElement.addEventListener("click", function() {
            document.getElementById('music').play();
        });
        var startTime = new Date();

        function freshTime() {
            var nowTime = new Date();
            var runTime = parseInt((nowTime.getTime() - startTime.getTime()) / 1000);
            runD = parseInt(runTime / (24 * 60 * 60));
            runH = parseInt(runTime / (60 * 60) % 24);
            runM = parseInt(runTime / 60 % 60);
            runS = parseInt(runTime % 60);
            if (runH < 10) {
                runH = "0" + runH;
            }
            if (runM < 10) {
                runM = "0" + runM;
            }
            if (runS < 10) {
                runS = "0" + runS;
            }
            document.getElementById("timer").innerHTML = runD + " : " + runH + " : " + runM + " : " + runS;
        }
        var sh;
        sh = setInterval(freshTime, 10);
        var btn = document.getElementById('switchModeBtn');
        btn.addEventListener("touchstart", function() {
            btn.style.background = "rgba(0,0,0,0.2)";
        });
        btn.addEventListener("mousedown", function() {
            btn.style.background = "rgba(0,0,0,0.2)";
        });
        btn.addEventListener("touchend", function() {
            window.setTimeout('btn.style.background="white";', 100);
        });
        btn.addEventListener("mouseup", function() {
            window.setTimeout('btn.style.background="white";', 100);
        });
        mode = "auto";
        btn.addEventListener("click", function() {
            if (mode == "auto") {
                mode = "self";
                speed = "slow";
                btn.innerHTML = "切换为自动";
            } else if (mode == "self") {
                mode = "auto";
                btn.innerHTML = "切换为手动";
            }
        });
        window.setInterval("checkMode();", 1);
        var title = document.getElementById('title');

        function checkMode() {
            if (mode == "auto") {
                tran = 1.25;
                title.innerHTML = name + " 无限旋转";
            } else if (mode == "self") {
                title.innerHTML = "长按为 " + name + " 加速";
                if (speed == "fast" && tran > 0.01) {
                    tran -= 0.001;
                } else if (speed == "slow") {
                    tran += 0.001;
                }
            }
            document.getElementById('rotate').style.animationDuration = tran + "s";
        }
        document.documentElement.addEventListener("touchstart", function() {
            if (mode == "self") {
                speed = "fast";
            }
        });
        document.documentElement.addEventListener("mousedown", function() {
            if (mode == "self") {
                speed = "fast";
            }
        });
        document.documentElement.addEventListener("touchend", function() {
            if (mode == "self") {
                speed = "slow";
            }
        });
        document.documentElement.addEventListener("mouseup", function() {
            if (mode == "self") {
                speed = "slow";
            }
        });