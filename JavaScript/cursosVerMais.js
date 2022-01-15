function btncurso()
{
        document.querySelectorAll(".curso.desativado").forEach(curso => {
            curso.classList.remove("desativado");
        });

} 