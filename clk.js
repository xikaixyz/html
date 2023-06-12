(function () {
            var a_idx = 0;
            window.onclick = function (event) {
                var a = new Array("❤江畔何人初见月❤","❤江月何年初照人❤", "❤唯见青山不见君❤", "❤殚尽红颜如神明❤", "❤夏天有着迟暮的霞光，正如晚来的你皆是笑意❤", "❤回赠只风铃，不用也响，不用也想❤", "❤我不知道什么是光，我只知道你来了，光就来了❤", "❤我与神明画押，赌你心动一刹❤", "❤爱意随风起❤", "❤风吹哪页读哪页❤", "❤玉勒雕鞍游冶处❤",
                     "❤楼高不见章台路❤");
 
                var heart = document.createElement("b"); //创建b元素
                heart.onselectstart = new Function('event.returnValue=false'); //防止拖动
 
                document.body.appendChild(heart).innerHTML = a[a_idx]; //将b元素添加到页面上
                a_idx = (a_idx + 1) % a.length;
                heart.style.cssText = "position: fixed;left:-100%;"; //给p元素设置样式
 
                var f = 16, // 字体大小
                    x = event.clientX - f / 2, // 横坐标
                    y = event.clientY - f, // 纵坐标
                    c = randomColor(), // 随机颜色
                    a = 1, // 透明度
                    s = 1.2; // 放大缩小
 
                var timer = setInterval(function () { //添加定时器
                    if (a <= 0) {
                        document.body.removeChild(heart);
                        clearInterval(timer);
                    } else {
                        heart.style.cssText = "font-size:16px;cursor: default;position: fixed;color:" +
                            c + ";left:" + x + "px;top:" + y + "px;opacity:" + a + ";transform:scale(" +
                            s + ");";
 
                        y--;
                        a -= 0.016;
                        s += 0.002;
                    }
                }, 15)
 
            }
            // 随机颜色
            function randomColor() {
 
                return "rgb(" + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + "," + (~~(Math
                .random() * 255)) + ")";
 
            }
        }());