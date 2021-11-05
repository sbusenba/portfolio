const projects = document.querySelectorAll('.project')
function mouseEnter(e){
    this.classList.add('mousedover')
}
function mouseLeave(e){
    this.classList.remove('mousedover')
}
projects.forEach((project)=>{
    project.addEventListener('mouseover',mouseEnter)
})
projects.forEach((project)=>{
    project.addEventListener('mouseout',mouseLeave)
})