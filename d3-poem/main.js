let poemVerses = ["One does not stack.", "It would be like",
"a mouse on the back", "of a mouse", "on a mouse's back.",
"Courses of mice,", "layers of shivers", "and whiskers,",
"a wobbling tower", "mouse-wide", "with nothing more",
"than a mouse inside."];
let selection = d3.select("#viz")
    .selectAll("p")
    .data(poemVerses)
    .enter()
    .append("p")
    .text("Click Me!")
    .on("click", function(d, i){d3.select(this).text(d); });
