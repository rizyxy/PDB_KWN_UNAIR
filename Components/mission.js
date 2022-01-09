let data = '{"mission" : [' +
'{"title":"Sebarkan SDGs ke Masyarakat","desc":"Sebarkan tentang SDGs melalui berbagai media kepada keluarga, teman, dan masyarakat. Dengan begitu, maka banyak orang yang akan mengetahui tentang Sustainable Development Goals, sehingga masyarakat akan lebih aware tentang pelaksanaan SDGs dan lebih aware tentang permasalahan - permasalahan yang ada di Indonesia. Dengan lebih banyak masyarakat yang aware, diharapkan dapat menunjang pelaksanaan dan pencapaian SDGs di Indonesia"},' +
'{"title":"Bangkitkan Rasa Kemanusiaan", "desc":"Dengan membangkitkan rasa kemanusiaan, akan membuat kita lebih peka dengan orang - orang disekitar kita yang membutuhkan bantuan kita. Dengan begitu, kita akan lebih terbuka dalam kegiatan - kegiatan kemanusiaan yang mana hal ini akan menunjang pelaksanaan SDGs dan akan membantu mengurangi permasalahan - permasalahan yang ada di Indonesia"},' +
'{"title":"Melakukan Sedekah", "desc":"Sedekah yang anda berikan akan membantu mereka yang membutuhkan untuk memenuhi kebutuhan hidup mereka, seperti : makanan, minuman, uang, dan lain - lain yang bermanfaat bagi kehidupan mereka. Dengan begitu, anda turut membantu agar mereka agar mendapatkan kehidupan yang layak, serta berkontribusi terhadap pencapaian SDGs No Hunger dan No Poverty."},' +
'{"title":"Berbagi dengan Yatim dan Piatu", "desc":"Mereka yang yatim dan piatu sangat membutuhkan bantuan anda untuk hidup dengan layak. Anda dapat membantu mereka dengan memberi mereka makanan, minuman, uang, dan lain - lain. Anda juga bisa mengadopsi mereka atau menyekolahkan mereka apabila mampu, dengan begitu anda turut berkontribusi dalam kebaikkan masa depan mereka serta terhadap pencapaian SDGs No Poverty, No Hunger, dan Quality Education"},' +
'{"title":"Menyediakan Pekerjaan", "desc":"Dengan menyediakan pekerjaan bagi mereka yang membutuhkan pekerjaan bila kita mampu, maka kita akan berkontribusi untuk memutus rantai kemiskinan dan masalah sosial terkait lainnya. Apabila mereka memiliki ekonomi yang layak, tentunya mereka akan dapat makan dengan cukup, serta mendapatkan akses terhadap pendidikan yang bermutu, fasilitas kesehatan. Dengan begitu, anda turut berkontribusi terhadap pencapaian SDGs No Poverty, No Hunger, Quality Education, Good Health and Well Being"},' +
'{"title":"Sekolahkan Anak Miskin", "desc":"Sering kali didapatkan anak miskin putus sekolah dan terpaksa bekerja untuk membantu orang tuanya. Dengan membantu anak miskin untuk bersekolah, maka kita akan membantu mereka untuk dapat meraih cita - cita mereka dan juga agar mereka memiliki masa depan yang lebih baik. Dengan begitu, anda turut berkontribusi terhadap pencapaian SDGs Quality Education"}]}' ;

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




