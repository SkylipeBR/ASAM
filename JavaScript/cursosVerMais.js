const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
    const windowTop = window.pageXOffset;
    target.forEach(function(element){
        if((windowTop) > element.offsetTop){
            element.classList.add('animate')
        }

        console.log(element.offsetTop)
    });
}


window.addEventListener('scroll', function() {
    animeScroll();
})

console.log(target.length)




function btncurso()
{
        

        document.querySelectorAll(".curso.desativado").forEach(curso => {
            curso.classList.remove("desativado");
            curso.classList.add("animate");
        });
        // $("#btn-ver-mais").click(mostraMais);

        // function mostraMais() {
        // $(".texto").toggle();
        // };

        if($("#btn-ver-mais").text() === 'Voltar') {
            $("#btn-ver-mais").text('Ver mais')
            document.querySelectorAll("#curso").forEach(curso => {
                curso.classList.add("desativado");
            });
          } else {
            $("#btn-ver-mais").text('Voltar')
          }
} 

