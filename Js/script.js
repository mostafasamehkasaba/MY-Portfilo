const vedio1 = document.getElementById('viedoproject1');
const vedio2 = document.getElementById("viedoproject2");
const vedio3 = document.getElementById("viedoproject3");
const hoverSigen =document.querySelector(".hover-sign")
const viedeoList = [vedio1 ,vedio2 ,vedio3];
viedeoList.forEach((video) =>{
    video.addEventListener("mouseover",function(){
        video.play();
        hoverSigen.classList.add("active")
    })
    video.addEventListener('mouseout',()=>{
        video.pause();
        hoverSigen.classList.remove("active");
    })
})

// sidebar Elements

    const menuIcon = document.getElementById("menu-icon");
    const sidebar = document.getElementById("sidebar");
    const closeIcon = document.querySelector(".close-icon");

    // فتح
    menuIcon.addEventListener("click", () => {
        sidebar.classList.add("open");
        sidebar.classList.remove("close");
    });

    // قفل
    closeIcon.addEventListener("click", () => {
        sidebar.classList.add("close");
        sidebar.classList.remove("open");
    });

