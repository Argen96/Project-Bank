
let SlideAll=document.querySelectorAll('.Slide')
let button= document.querySelectorAll('.button')
let button1= document.querySelector('.button1')
let button2= document.querySelector('.button2')
let button3= document.querySelector('.button3')
let button4= document.querySelector('.button4')
let ProjectDiv= document.querySelector('.divProject')
let ProjectChild= document.querySelector('.ProjectOnChild')
let body=document.querySelector('body')
let divPlan=document.querySelector('.divPlans')
let div1Plan=document.querySelector('.divPlansb')
let calculator=document.querySelector('.calculator')
let results=document.querySelector('.Results')
let DataNumber=document.querySelectorAll('[data-set]')
//number operators
let numberButton=1
let number=0
let interval=''
//interval
button1.style.background='yellow'
function time(){
interval=setInterval(()=>{
    if(number===300){
        number=0
    }
    else{
    number=number+100
    }
    if(numberButton===4){
        numberButton=1
    }
    else{
        numberButton=numberButton+1
    }
    button.forEach(function(button){
        button.style.background='white'
    })
    document.querySelector(`.button${numberButton}`).style.background='yellow'
SlideAll.forEach(function(slides,i){
 slides.style.transform=`translatex(${i*100-number}%)`
 
})
},5000)
}
    document.querySelector(`.button${numberButton}`).style.background='yellow'
SlideAll.forEach(function(slides,i){
 slides.style.transform=`translatex(${i*100-number}%)`
 
})
time()

button1.addEventListener('click',function(){
    clearInterval(interval)
    button.forEach(function(button){
    button.style.background='white' 
   })
    button1.style.background='yellow'
    number=0
    numberButton=1
   document.querySelector('.Slide1').style.transform=`translatex(0)`
   document.querySelector('.Slide2').style.transform=`translatex(100%)`
   document.querySelector('.Slide3').style.transform=`translatex(200%)`
   document.querySelector('.Slide4').style.transform=`translatex(300%)`
   time()
})
button2.addEventListener('click',function(){
    clearInterval(interval)
    button.forEach(function(button){
   button.style.background='white' 
    })
    number=100
    numberButton=2
   button2.style.background='yellow'
   document.querySelector('.Slide1').style.transform=`translatex(-100%)`
   document.querySelector('.Slide2').style.transform=`translatex(0%)`
   document.querySelector('.Slide3').style.transform=`translatex(100%)`
   document.querySelector('.Slide4').style.transform=`translatex(200%)`
   time()
})
button3.addEventListener('click',function(){
    clearInterval(interval)
    button.forEach(function(button){
    button.style.background='white' 
    })
    button3.style.background='yellow'
    number=200
    numberButton=3
   document.querySelector('.Slide1').style.transform=`translatex(-200%)`
   document.querySelector('.Slide2').style.transform=`translatex(-100%)`
   document.querySelector('.Slide3').style.transform=`translatex(0%)`
   document.querySelector('.Slide4').style.transform=`translatex(100%)`
   time()
})
button4.addEventListener('click',function(){
    clearInterval(interval)
    button.forEach(function(button){
    button.style.background='white' 
    })
    button4.style.background='yellow'
    number=300
    numberButton=4
   document.querySelector('.Slide1').style.transform=`translatex(-300%)`
   document.querySelector('.Slide2').style.transform=`translatex(-200%)`
   document.querySelector('.Slide3').style.transform=`translatex(-100%)`
   document.querySelector('.Slide4').style.transform=`translatex(0%)`
   time()
})

body.addEventListener('mouseover',function(e){
    if(e.target.closest('.divProject')||e.target.closest('.ProjectOnChild')){
        ProjectChild.classList.remove('ProjectChild')
    }
    else{
        ProjectChild.classList.add('ProjectChild') 
    }
})



body.addEventListener('mouseover',function(e){
   if(e.target.closest('.divPlansb')||e.target.closest('.liNav33')||e.target.closest('.liNav55')||e.target.closest('.liNav44')||e.target.closest('.liNav22')){
    div1Plan.classList.remove('divPlans2')
     }
      else{
        div1Plan.classList.add('divPlans2') 
     }
  })
  const reviews = [
    {
      id: 1,
      name: "Susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto  asperiores debitis incidunt, eius earum ipsam cupiditate libero?Iste, doloremque nihil?",
    },
    {
      id: 2,
      name: "Anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
      "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto  asperiores debitis incidunt, eius earum ipsam cupiditate libero?Iste, doloremque nihil?",
    },
    {
      id: 3,
      name: "Peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
      "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto  asperiores debitis incidunt, eius earum ipsam cupiditate libero?Iste, doloremque nihil?"
    },
    {
      id: 4,
      name: "Bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
      "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto  asperiores debitis incidunt, eius earum ipsam cupiditate libero?Iste, doloremque nihil?"
    },
 
  ];
  let x=-1
   let previous=document.querySelector('.prev-btn')
   let randomBtn=document.querySelector('.random-btn')
   let next=document.querySelector('.next-btn')
   let author=document.getElementById('author')
   let job=document.getElementById('job')
   let info=document.getElementById('info')
   let img=document.getElementById('person-img')

   
//next button
   next.addEventListener('click',function(){
    x=x+1
    if(x===4){
      x=0
          }
   author.innerHTML=reviews[x].name
   job.innerHTML=reviews[x].job
   info.innerHTML=reviews[x].text
 img.src=reviews[x].img
   console.log(x)


  
   })
//previous btn
   previous.addEventListener('click',function(){
    x=x-1
    if(x<=-1 ){
        x=3
            }
    author.innerHTML=reviews[x].name
    job.innerHTML=reviews[x].job
    info.innerHTML=reviews[x].text
  img.src=reviews[x].img
  console.log(x)
  })
  //suprise btn
   randomBtn.addEventListener('click',function(){
    let random=Math.trunc(Math.random()*reviews.length)
   author.innerHTML=reviews[random].name
    job.innerHTML=reviews[random].job
    info.innerHTML=reviews[random].text
  img.src=reviews[random].img
  
  })

 

  