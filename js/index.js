let video = document.querySelector('.header__video');
let btnReload = document.querySelector('.header')
let content = document.querySelector('.content')
let mess1 = document.querySelector('.text')
let mess = `Mùa đông lạnh nhưng rất lãng mạn, nắng của mùa đông yếu nhưng đủ làm ấm trái tim một ai đó. Noel là dịp bạn và những người xung quanh tận hưởng những giây phút ngọt ngào của tình yêu thương. Đừng đóng chặt trái tim mình, hãy mở cửa trái tim để biết rằng giữa mùa đông mình vẫn thấy ấm áp. Chúc các bạn của tôi một mùa Giáng sinh vui vẻ.

Khi bạn nhận được tin nhắn này hãy cười đi nhé vì ít nhất đâu đó quanh đây có một người mong bạn hạnh phúc, vui vẻ và luôn yêu đời. Chúc bạn Hằng Giáng Sinh vui vẻ Merry Xmas!`

video.removeAttribute('muted')
let arr = mess.split('')
let result =[]
let arrResult=[]
let arrCoppy =[]

let index =0;
let count = () =>{
    setTimeout( () => {
        console.log(index)
        index+=1;
       
        if(260<=index && index<780){
            setTimeout( () => {
                result.push(arr.shift())
            })
            arrResult = result.join('')
            arrCoppy = arrResult.split(' ')
 console.log(arrCoppy.length)
            if(arrCoppy.length >51){
                arrCoppy.splice(0,51)
               
            }
            mess1.innerHTML=arrCoppy.join(' ')      
        }
        else if(800 <= index && index<900){
            mess1.classList.add('d-none')
            content.classList.remove('d-none')
            content.innerHTML = ` Lần đầu mình làm web vào việc này nên còn bỡ ngỡ nên bạn thông cảm!`
        }
        else if(index >1000){
            index=0;
        } 
        else{
            content.classList.add('d-none')
            
        }
        count()
    },50)
    
  
}

//index =18 start
// index = 45 end


count()