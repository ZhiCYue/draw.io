## example01
requestanimationframe

#### flow.drawio
刷新帧率调和算法示意图。

#### index.html
animationTick 简易示例动态计算帧频率

![image](img/Tick.png)

显示：
>
>任务时长：当前进程中js 任务时长<br/>
>过期时长：异步调度的任务，设置的过期时间<br>

操作：
> 随机：随机当前进程中js 任务时长<br/>
> 执行：开启任务调度<br/>
> 停止：停止调度<br/>

通过示例，可以理解 requestAnimationFrame 模拟 requestIdleCallback 的原理。
