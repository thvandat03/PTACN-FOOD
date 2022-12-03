  // core version + navigation, pagination modules:
  import Swiper from 'swiper';
  // import Swiper and modules styles
  import 'swiper/css';



document.getElementById('salads').src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABcklEQVRIie2Wu0oDQRSGzwhesEghWIuViIV2AUlhmd7WXix9CSsFFdFOsFBEg5WFjYKXQp9A0SIqWngFCSrBJJ+FszBsZia7OApi/m7nXL5zzuzOrEhTTWkBrcAM8ADcAFNA22+Ap6nXObCtC3nUhYUrBugDShawTfMhgFng1gEYBnIO2zNwBvS4crf4wEqpExEZFZEVESlbYpUjdEtEckqpq6Qd3gMXwCYwAXQbtl5gDah5xlwBxo2YLLAEnAJ3PnAxlqgMrAODhs+IxS/SmPbJAKsxW9EHLjgS1oDlaAKOxIva1gkcW3IUfOC8AxzpKepK+08CH8AL0KXXNhyxee8+/y8BRw1G/R0dmizvdxy6L/Oh7gAA3kWkIzC0pJTKmAu2jq8DQ0VELuMLNvDuD4Ab5wSGgGrAl6oC9Ccqj6/zNZTmEs8FaAf2AkB3SPtjoOEL+G8jl6rAbGporIAB4C0F9JWke5oAfpACvB8E2tSf1yfv8fK7Uu9zfQAAAABJRU5ErkJggg==";
document.getElementById('drinks').src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAACf0lEQVR4nO2azWpTURSFv10Eo6k48gcH0o6sLWghsz6Ddaajjp3pC/kWOlGfoFMFEdGBOIwSBW0M1rAcJEo4JKY5d5977rXng5Dkwll7nZV9T+4fnHIst4FFSLoI7AIdM3ueqs6ZVMKrIOka0AO2gZ3p5y1gDfgAbOZzlxBJjyV90XI2cnt1R5JJ+rpk4j8lvZB0M7dfdyRtLpj0UNJTSQ8kXc7tMxmS7gYTfzfddq5OHzkXwd3g+zMze1K3ibW6C85wK/j+KoeJJgXwMouLHEjqShrP7P9jSd3cvtyQtHOC//ZV2U7hNdUucC+B5v0EmmmQ9DpBB7xJ4bVSB0jqSToMnTI5pvdma04oh5J6CWotR9KeJkdtuRlK2oudR9TpsKQO8Ba4HlvYmY/ADTMbrTowdhc4oDmTh4mXg5iBsQHsR45LyZ2YQbEB3I4cl5IoT7EBXIocl5L/99S5kJDKV4UlHQHngRHwI+KdCmNHZvZHIwqPCyJ9YAPoTF918h24UEXA42Tok4NGLP2qAiWAJpjIWbt0gIOJEoCDRrbabQ+gER1QFkEHjVgqB+B1JBiybmZHDtp/kbQOfAs2518DzGwIDIPNV6vqziHUFPC5qqjXfYHwl7jipPsvzYGZHVcV9Qog3A3qCMBl8W1zBzQ6gBRrQKsCSNEBYainLoBQ0+X4oyyCHiKURbC9i6DXU2Khma4kOWmftGYUqTqgDlwCcHtafOb+QB0cA2fNrHKXeT4jVGcX9D0mDy0OwEvIM4A6rww1MoA6O8CtVlsDKB3gJdTWABrZAWURdNRaRiMDeA+MHfUW8WtaywW3AMxsADwCBl6acxgAD6e1CoVCoVCV31D2pN325l2CAAAAAElFTkSuQmCC";
document.getElementById('combos').src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACYElEQVRoge2Zv2sUQRiG31lMsAgqp4aAFlaC5i+wsDcKnoWCpY1RxMpCbBRrRSGonVjZCmIbewuJhRYWognZU1SEqFcEQo7HYncvu3Oz92vnshfcp9rdmXm/97u5nW+GlSoqKsYSoA78BH4AZ8v2MzDAV7ZolO2nA+AM0ABCYM7RnqEMj12JjSesOtr7SiAYrc1CrKSul0tzkQcwF8/CKnCqS3voaq+oqBgC4CBwG3gD/ALWgLfAXeAEcB94D/x2jE3W/aI460Y/5s/HhvvCMT7sOah/2nXD5JidlnRFUl3SrKR1Sfvy+rswxmT6upIqQqK/y24g2jg9k7Q/9Xi3z+A+yVRioC7phbLmbTYk3ZBUk3RY0i1FMyRJXyRdlLTXu9NeAAeIXsxutIBLjrEzwElgsou+V1wB7lh91oGrwBRQIyrtxwr8QCNP4J3V5/qwZrczAZMK8EfSnlTMmjFmzWcCvrSkrVUo/RLbAXL/z+NEQFwh1blyfPcxxaPGAKGi5dCv8DYVskBRhd2xBJK+lW2iCIGkpVEIA1PWo6ZH+b/JRSDppUfhNDPWfehRu70bTRL47FE84ah1v+hRu60VGGM2JN30KJ5gHzqeSmp50G3FWlmITlM+CbE2d8BjD7oLzrSAALjnIUCaeSvGJPC6gN4iMNF1foBzwCcf7olmoeZI4hGwOYDOJrDQ03wqyARwAXgOfASaBZJ4BXQcRYFZ4CHwIUe/Gbc9AI73Zbyi4j/EAKclPZF0pGwzA7Ii6ZohOswcKtvNkDQCdR4ldxSBpHmN4yec3ixLuly2iYqKsvkHppKWMsWC6rMAAAAASUVORK5CYII=";

function time(){
    var times = new Date();    
    console.log(times.getHours() +"h "+ times.getMinutes() +"p " + times.getSeconds() + " "+ (15*16) );
}
setInterval(time, 1000)
setTimeout(() => {
    
}, 1000);



let swiper = new Swiper(".mySwiper", {
  lazy: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
 });
