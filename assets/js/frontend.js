// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky")
    navbar.classList.remove("bg-transparent")
    navbar.classList.add("bg-white")
  } else {
    navbar.classList.remove("sticky")
    navbar.classList.remove("bg-white")
    navbar.classList.add("bg-transparent")
  }
}

// LANGUAGE DATABASE
var database_language = [
  ['dashboard',
    [
      'def', {
        'bahasa': 'Language :&nbsp;',
        'carousel': 'A man who love code and photoshop.',
        'aboutme_judul': 'A Little About Me',
        'aboutme_isi': '&emsp;&ensp;&nbsp;Saya adalah seorang lelaki kelahiran tahun 2003 berasal dari Kota Cimahi, Indonesia yang berspesialis pada bidang Programming. Saya senang mengedit photo dan image menggunakan software photoshop, bisa mengoperasikan microsoft office (word, excel, power point, visio), pernah belajar tentang 3d grafik, dan juga memahami cara memperbaiki sebagian besar general problem yang sering terjadi pada windows.',
        'code_judul': 'Love to Code!',
        'code_isi': 'Waktu terasa cepat berlalu ketika saya melakukan coding. Saya juga senang ketika membuat algoritma, perasaan saat menyelesaikan algoritma yang sulit adalah perasaan yang terbaik.',
        'photoshop_judul': 'Sometimes do photoshop too!',
        'photoshop_isi': 'Ketika saya mempunyai waktu luang dan sedang ada inspirasi, saya kadang melakukan editing photo atau manipulasi image.',
        'saya_judul': 'This is me!',
        'saya_isi': 'Ini adalah salah satu foto formal yang saya miliki, saya mengambil foto ini sekitar tahun 2021.'
      }
    ],
    [
      'id', {
        'bahasa': 'Bahasa :&nbsp;',
        'carousel': 'Seseorang yang menyukai coding dan photoshop.',
        'aboutme_judul': 'Sedikit Tentang Saya',
        'aboutme_isi': '&emsp;&ensp;&nbsp;Saya adalah seorang lelaki kelahiran tahun 2003 berasal dari Kota Cimahi, Indonesia yang berspesialis pada bidang Programming. Saya senang mengedit photo dan image menggunakan software photoshop, bisa mengoperasikan microsoft office (word, excel, power point, visio), pernah belajar tentang 3d grafik, dan juga memahami cara memperbaiki sebagian besar masalah umum yang sering terjadi pada windows.',
        'code_judul': 'Menyukai Coding!',
        'code_isi': 'Waktu terasa cepat berlalu ketika saya melakukan coding. Saya juga senang ketika membuat algoritma, perasaan saat menyelesaikan algoritma yang sulit adalah perasaan yang terbaik.',
        'photoshop_judul': 'Kadang mengedit photo juga!',
        'photoshop_isi': 'Ketika saya mempunyai waktu luang dan sedang ada inspirasi, saya kadang melakukan editing photo atau manipulasi image.',
        'saya_judul': 'Ini adalah saya!',
        'saya_isi': 'Ini adalah salah satu foto formal yang saya miliki, saya mengambil foto ini sekitar tahun 2021.'
      }
    ],
    [
      'eng', {
        'bahasa': 'Language :&nbsp;',
        'carousel': 'A man who love code and photoshop.',
        'aboutme_judul': 'A Little About Me',
        'aboutme_isi': '&emsp;&ensp;&nbsp;I am a man born in 2003 from Cimahi City, Indonesia who specializes in the field of programming. I enjoy editing photos and images using Photoshop software, can operate Microsoft Office (word, excel, power point, visio), have learned about 3d graphics, and also understand how to fix most of the general problems that often occur on windows.',
        'code_judul': 'Love to Code!',
        'code_isi': 'Time flies fast when Im coding. I also enjoy creating algorithms, the feeling of solving difficult algorithms is the best feeling.',
        'photoshop_judul': 'Sometimes do photoshop too!',
        'photoshop_isi': 'When I have free time and Im inspired, I sometimes do photo editing or image manipulation.',
        'saya_judul': 'This is me!',
        'saya_isi': 'This is one of the formal photos I have, I took this photo around 2021.'
      }
    ]
  ],
  ['about_me',
    [
      'def', {
        'bahasa': 'Language :&nbsp;',
        'title': 'About Me',

        // pendidikan
        'title_pendidikan': 'Pendidikan',
        'sub_pendidikan_title_1': 'Sekolah Dasar',
        'sub_pendidikan_isi_1': 'SDN Cibabat Mandiri 2 | 2009 - 2015',
        'sub_pendidikan_title_2': 'Sekolah Menengah Pertama',
        'sub_pendidikan_isi_2': 'SMPN 6 Cimahi | 2015 - 2018',
        'sub_pendidikan_title_3': 'Sekolah Menengah Kejuruan',
        'sub_pendidikan_isi_3': 'SMKN 1 Cimahi | 2018 - 2022',

        // kemampuan
        'title_kemampuan': 'Kemampuan',
        'sub_kemampuan_title_1': 'Bahasa Pemrograman',
        'sub_kemampuan_isi_1': 'PHP, CSS, C++, C#, Python, Java, javascript, Typescript, Golang',
        'sub_kemampuan_title_2': 'Database',
        'sub_kemampuan_isi_2': 'MySQL, PostgreSQL',
        'sub_kemampuan_title_3': 'Microsoft Office',
        'sub_kemampuan_isi_3': 'Word, Power Point, Excel, Visio',
        'sub_kemampuan_title_4': 'Design Software',
        'sub_kemampuan_isi_4': 'CorelDraw, Photoshop, Primere Pro',

      }
    ],
    [
      'id', {
        'bahasa': 'Bahasa :&nbsp;',
        'title': 'Tentang Saya',

        // pendidikan
        'title_pendidikan': 'Pendidikan',
        'sub_pendidikan_title_1': 'Sekolah Dasar',
        'sub_pendidikan_isi_1': 'SDN Cibabat Mandiri 2 | 2009 - 2015',
        'sub_pendidikan_title_2': 'Sekolah Menengah Pertama',
        'sub_pendidikan_isi_2': 'SMPN 6 Cimahi | 2015 - 2018',
        'sub_pendidikan_title_3': 'Sekolah Menengah Kejuruan',
        'sub_pendidikan_isi_3': 'SMKN 1 Cimahi | 2018 - 2022',

        // kemampuan
        'title_kemampuan': 'Kemampuan',
        'sub_kemampuan_title_1': 'Bahasa Pemrograman',
        'sub_kemampuan_isi_1': 'PHP, CSS, C++, C#, Python, Java, javascript, Typescript, Golang',
        'sub_kemampuan_title_2': 'Basis Data',
        'sub_kemampuan_isi_2': 'MySQL, PostgreSQL',
        'sub_kemampuan_title_3': 'Microsoft Office',
        'sub_kemampuan_isi_3': 'Word, Power Point, Excel, Visio',
        'sub_kemampuan_title_4': 'Aplikasi Desain',
        'sub_kemampuan_isi_4': 'CorelDraw, Photoshop, Primere Pro',
      }
    ],
    [
      'eng', {
        'bahasa': 'Language :&nbsp;',
        'title': 'About Me',

        // pendidikan
        'title_pendidikan': 'Education',
        'sub_pendidikan_title_1': 'Elementary school',
        'sub_pendidikan_isi_1': 'SDN Cibabat Mandiri 2 | 2009 - 2015',
        'sub_pendidikan_title_2': 'Junior high school',
        'sub_pendidikan_isi_2': 'SMPN 6 Cimahi | 2015 - 2018',
        'sub_pendidikan_title_3': 'Vocational High School',
        'sub_pendidikan_isi_3': 'SMKN 1 Cimahi | 2018 - 2022',

        // kemampuan
        'title_kemampuan': 'Ability',
        'sub_kemampuan_title_1': 'Programming language',
        'sub_kemampuan_isi_1': 'PHP, CSS, C++, C#, Python, Java, javascript, Typescript, Golang',
        'sub_kemampuan_title_2': 'Database',
        'sub_kemampuan_isi_2': 'MySQL, PostgreSQL',
        'sub_kemampuan_title_3': 'Microsoft Office',
        'sub_kemampuan_isi_3': 'Word, Power Point, Excel, Visio',
        'sub_kemampuan_title_4': 'Design Software',
        'sub_kemampuan_isi_4': 'CorelDraw, Photoshop, Primere Pro',
      }
    ]
  ]
];

$(".language img.flag").addClass("flagvisibility");

$(".language dt a").click(function () {
  $(".language dd ul").toggle();
});

$(".language dd ul li a").click(function () {
  var text = $(this).html();
  var page = document.getElementById('page').value;
  $(".language dt a span").html(text);
  $(".language dd ul").hide();

  // search page now
  var page_now;
  for (var i = 0, len = database_language.length; i < len; i++) {
    if (database_language[i][0] === page) {
      page_now = database_language[i]
      break;
    }
  }

  //search language
  // translate
  var language_now;
  for (var i = 0, len = page_now.length; i < len; i++) {
    if (page_now[i][0] === getSelectedValue("select_language")) {
      language_now = page_now[i][1]
      break;
    }
  }

  // change language
  var parts = Object.keys(language_now);
  for (var i = 0, len = parts.length; i < len; i++) {
    $("#" + parts[i]).html(language_now[parts[i]]);
  }
});

function getSelectedValue(id) {
  return $("#" + id).find("dt a span.value").html();
}

$(document).bind('click', function (e) {
  var $clicked = $(e.target);
  if (!$clicked.parents().hasClass("language"))
    $(".language dd ul").hide();
});

$(".language img.flag").toggleClass("flagvisibility");

