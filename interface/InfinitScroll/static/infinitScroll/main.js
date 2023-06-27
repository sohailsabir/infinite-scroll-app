let counter = 1;
const quantity = 20;
document.addEventListener('DOMContentLoaded', load);

function load(){
        const start = counter;
            const end = start + quantity - 1;
            counter = end + 1;
            fetch(`/posts/posts?start=${start}&end=${end}`)
            .then(response => response.json())
            .then(data => {
                data.posts.forEach(add_post);
             })


}
function add_post(contents){
    const post = document.createElement('div');
    post.className = 'post';
    post.innerHTML = `${contents}<button class="hide">Hide</button>`;
    document.querySelector('#posts').append(post);

};
document.addEventListener('click', function(event) {
 const element = event.target;
 if (element.className === 'hide') {
    element.parentElement.style.animationPlayState = 'running';
    element.parentElement.addEventListener('animationend', function() {
     element.parentElement.remove();
      })   
}
});
window.onscroll = function(){
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        load();
    }
} 