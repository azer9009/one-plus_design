

window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var stickyPoint = navbar.offsetTop;

    
    if (window.pageYOffset > stickyPoint) {
        navbar.classList.add('sticky');
        navbar.style.top = "0"

    } else {
        navbar.classList.remove('sticky');
        navbar.style.top = "97px"

    }
});

window.addEventListener('load', function() {
    var navbar = document.getElementById('navbar');
    var stickyPoint = navbar.offsetTop;

    
    if (window.pageYOffset > stickyPoint) {
        navbar.classList.add('sticky');
        navbar.style.top = "0"
    } else {
        navbar.classList.remove('sticky');
        navbar.style.top = "97px"

    }
});



document.querySelectorAll('.navbar-logo-item').forEach(item => {
    const menu = item.querySelector('.button-menu');
    const button = item.querySelector('button');

    button.addEventListener('mouseenter', () => {
        menu.style.display = 'block';
        menu.style.opacity = '1';
    });

    item.addEventListener('mouseleave', () => {
        menu.style.opacity = '0';
        setTimeout(() => {
            if (menu.style.opacity === '0') {
                menu.style.display = 'none';
            }
        }, 200);
    });
});



const cls_btn_1 =  document.getElementById("close-btn-1")

const cls_btn_2 =  document.getElementById("close-btn-2")



const offer_sect = document.getElementById("nation-sect")
const nation_sect = document.getElementById("nation-sect")

cls_btn_1.addEventListener("click", ()=>{
    nation_sect.remove()
})
cls_btn_2.addEventListener("click", ()=>{
    nation_sect.remove()
})



document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', function() {
        const toggleList = this.nextElementSibling;
        toggleList.classList.toggle('active');
        this.classList.toggle('active');
    });
});


function toggle_nav() {
    const toggle_mbl = document.getElementById("toggle-mbl")
    if (toggle_mbl.style.display === "block") {
        toggle_mbl.style.display = "none";
      } else {
        toggle_mbl.style.display = "block";
      }
}