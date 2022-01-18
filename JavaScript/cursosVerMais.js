function btncurso()
{
        document.querySelectorAll(".curso.desativado").forEach(curso => {
            curso.classList.remove("desativado");
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