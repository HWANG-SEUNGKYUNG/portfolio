const bar = document.querySelector("#minwon-bar .progress")  // 민원바
const bar2 = document.querySelector(".progress-bar2")  // 민원바
const bar3 = document.querySelector(".progress-bar3")  // 여러 색 민원바
const donut = document.getElementsByClassName("donut")[0]
const donut2 = document.getElementsByClassName("donut")[1]

let totalMinwon = 72, resolveMinwon = 12
let t = 0
bar.style.width = 0
const barAnimation = setInterval(() => {
bar.style.width =  t + '%'
t++ >= totalMinwon && clearInterval(barAnimation)
}, 10)

let t2 = 0
const barAnimation2 = setInterval(() => {
bar2.style.background = `linear-gradient(to right, #4F98FF 0 ${t2}%, #dedede ${t2}% 100% )`
t2++ >= totalMinwon && clearInterval(barAnimation2)
}, 10)

let t3 = 0
const barAnimation3 = setInterval(() => {
bar3.style.background = totalMinwon > t3 ? `linear-gradient(to right, #4F98FF 0 ${t3}%, #dedede ${t3}% 100% )` : 
totalMinwon + resolveMinwon > t3 ? `linear-gradient(to right, #4F98FF 0 ${totalMinwon}%, #f44336 ${totalMinwon}% ${t3}%, #dedede ${t3}% 100%)` : 
`linear-gradient(to right, #4F98FF 0 ${totalMinwon}%, #f44336 ${totalMinwon}% ${totalMinwon + resolveMinwon}%, #dedede ${totalMinwon + resolveMinwon}% 100%)`
t3++ >= totalMinwon + resolveMinwon && clearInterval(barAnimation3)
}, 10)

let t4 = 0
const donutAnimation = setInterval(() => {
donut.dataset.percent = t4
donut.style.background = `conic-gradient(#4F98FF 0 ${t4}%, #DEDEDE ${t4}% 100% )`
t4++ >= totalMinwon && clearInterval(donutAnimation)
}, 10)

let t5 = 0
const donutAnimation2 = setInterval(() => {
donut2.dataset.percent = t5
donut2.style.background = totalMinwon > t5 ? `conic-gradient(#4F98FF 0 ${t3}%, #dedede ${t3}% 100% )` : 
totalMinwon + resolveMinwon > t5 ? `conic-gradient(#4F98FF 0 ${totalMinwon}%, #f44336 ${totalMinwon}% ${t3}%, #dedede ${t3}% 100%)` : 
`conic-gradient(#4F98FF 0 ${totalMinwon}%, #f44336 ${totalMinwon}% ${totalMinwon + resolveMinwon}%, #dedede ${totalMinwon + resolveMinwon}% 100%)`
t5++ >= totalMinwon + resolveMinwon && clearInterval(donutAnimation2)
}, 10)

