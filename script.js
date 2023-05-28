let containerBox = document.querySelector('.container');

function floatBox(n) {
    let image = document.querySelector('.img');
    let text = document.querySelector('.text-habilidade');
    let title = document.querySelector('.title');
    let number = n;

    containerBox.style.display = 'flex';

    if(number == 1){
        title.innerHTML = "HTML";
        image.src = './img/file_type_html_icon_130541 1.svg';
        text.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptates quisquam, dolore suscipit laboriosam harum. Molestias aliquid ex eveniet recusandae, nemo in illum. Eius possimus harum eaque deserunt, aliquid error!";
    }else if(number == 2){
        title.innerHTML = "CSS";
        image.src = './img/Group 8.svg';
        text.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptates quisquam, dolore suscipit laboriosam harum. Molestias aliquid ex eveniet recusandae, nemo in illum. Eius possimus harum eaque deserunt, aliquid error!";
    }
    else if(number == 3){
        title.innerHTML = "JAVASCRIPT";
        image.src = './img/javascript_icon_130900 1.svg';
        text.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptates quisquam, dolore suscipit laboriosam harum. Molestias aliquid ex eveniet recusandae, nemo in illum. Eius possimus harum eaque deserunt, aliquid error!";
    }
    else if(number == 4){
        title.innerHTML = "TYPESCRIPT";
        image.src = './img/Group 9.svg';
        text.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptates quisquam, dolore suscipit laboriosam harum. Molestias aliquid ex eveniet recusandae, nemo in illum. Eius possimus harum eaque deserunt, aliquid error!";
    }
    else if(number == 5){
        title.innerHTML = "REACT JS";
        image.src = './img/Group 10.svg';
        text.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptates quisquam, dolore suscipit laboriosam harum. Molestias aliquid ex eveniet recusandae, nemo in illum. Eius possimus harum eaque deserunt, aliquid error!";
    }
    else if(number == 6){
        title.innerHTML = "BOOTSTRAP";
        image.src = './img/Vector.svg';
        text.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptates quisquam, dolore suscipit laboriosam harum. Molestias aliquid ex eveniet recusandae, nemo in illum. Eius possimus harum eaque deserunt, aliquid error!";
    }
    else if(number == 7){
        title.innerHTML = "FIGMA";
        image.src = './img/Group 11.svg';
        text.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptates quisquam, dolore suscipit laboriosam harum. Molestias aliquid ex eveniet recusandae, nemo in illum. Eius possimus harum eaque deserunt, aliquid error!";
    }
    else if(number == 8){
        title.innerHTML = "GIT";
        image.src = './img/Group 12.svg';
        text.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptates quisquam, dolore suscipit laboriosam harum. Molestias aliquid ex eveniet recusandae, nemo in illum. Eius possimus harum eaque deserunt, aliquid error!";
    }
}

function removeBox(){
    containerBox.style.display = 'none';
}


function ativaMenu() {
    const menuHbg = document.querySelector('ul');

    if(menuHbg.style.display == 'none'){
        menuHbg.style.display = 'flex';
    } else{
        menuHbg.style.display = 'none';
    }

}