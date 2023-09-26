const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')
const circles = document.querySelectorAll('.circle')
const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonials = document.querySelectorAll('.testimonial-slide')
// hamburger menu button
btn.addEventListener('click', function(){
    btn.classList.toggle('open')
    menu.classList.toggle('hidden')
    menu.classList.toggle('flex')
})

let currentSlideNum;
let currentTestimonial;
circles.forEach(circle => {
    circle.addEventListener('click', function(){
        // remove active in each circle
        circles.forEach(circle => {
            circle.classList.remove('active')
        })

        // add active in current circle
        circle.classList.add('active')
        // set the testimonial equivalent to the circle
        currentSlideNum = circle.dataset.num 
        // current testimonial
        currentTestimonial =  testimonialsContainer.children[currentSlideNum]

        testimonials.forEach(test => {
            test.classList.remove('active')
            test.classList.add('hidden')
        })
        currentTestimonial.classList.add('active')
    })
})
// console.log(currentSlide)