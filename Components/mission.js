let data = '{"mission" : [' +
'{"title":"Sebarkan SDGs ke Masyarakat", "desc":"Sebarkan tentang SDGs melalui berbagai media kepada keluarga, teman, dan masyarakat. Dengan begitu, maka banyak orang yang akan merasa aware"},' +
'{"title":"Bangkitkan Rasa Kemanusiaan", "desc":"Dengan membangkitkan rasa kemanusiaan, akan membuat kita lebih peka dengan orang - orang disekitar kita yang membutuhkan bantuan kita"},' +
'{"title":"Melakukan Sedekah", "desc":"Sedekah yang anda berikan akan membantu mereka yang membutuhkan untuk memenuhi kebutuhan hidup mereka, seperti : makanan, minuman, dan - lain - lain"},' +
'{"title":"Berbagi dengan Yatim dan Piatu", "desc":"Mereka yang yatim dan piatu sangat membutuhkan bantuan anda untuk hidup dengan layak. Anda dapat membantu mereka dengan memberi mereka makanan dan lain - lain"},' +
'{"title":"Menyediakan Pekerjaan", "desc":"Dengan menyediakan pekerjaan bagi mereka yang membutuhkan pekerjaan bila kita mampu, maka kita akan berkontribusi untuk memutus rantai kemiskinan dan masalah sosial terkait lainnya"},' +
'{"title":"Sekolahkan Anak Miskin", "desc":"Dengan membantu anak miskin untuk bersekolah, maka kita akan membantu mereka untuk dapat meraih cita - cita mereka dan juga agar mereka memiliki masa depan yang lebih baik"}]}' ;

const obj = JSON.parse(data);

window.onclick = function(event){
    if (event.target == document.getElementById("description")) {
        document.getElementById("description").style.display = "none"
    }
}

function closemodal() {
    document.getElementById("description").style.display = "none"
}

function mission1() {
    document.getElementById("description").style.display = "block"
    document.getElementById("title").innerHTML = obj.mission[0].title;
    document.getElementById("overview").innerHTML = obj.mission[0].desc;
}

function mission2() {
    document.getElementById("description").style.display = "block"
    document.getElementById("title").innerHTML = obj.mission[1].title;
    document.getElementById("overview").innerHTML = obj.mission[1].desc;
}

function mission3() {
    document.getElementById("description").style.display = "block"
    document.getElementById("title").innerHTML = obj.mission[2].title;
    document.getElementById("overview").innerHTML = obj.mission[2].desc;
}

function mission4() {
    document.getElementById("description").style.display = "block"
    document.getElementById("title").innerHTML = obj.mission[3].title;
    document.getElementById("overview").innerHTML = obj.mission[3].desc;
}

function mission5() {
    document.getElementById("description").style.display = "block"
    document.getElementById("title").innerHTML = obj.mission[4].title;
    document.getElementById("overview").innerHTML = obj.mission[4].desc;
}

function mission6() {
    document.getElementById("description").style.display = "block"
    document.getElementById("title").innerHTML = obj.mission[5].title;
    document.getElementById("overview").innerHTML = obj.mission[5].desc;
}




