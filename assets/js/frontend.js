// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

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
    [ 'dashboard',
      [
        'def', {
          'bahasa'          : 'Language :&nbsp;',
          'carousel'        : 'A man who love code and photoshop.',
          'aboutme_judul'   : 'A Little About Me',
          'aboutme_isi'     : '&emsp;&ensp;&nbsp;Saya adalah seorang pelajar berumur 18 tahun jurusan Sistem Informatika Jaringan dan Informasi di SMKN 1 Cimahi yang berspesialis pada bidang Programming. Saya senang mengedit photo dan image menggunakan software photoshop, bisa mengoperasikan microsoft office (word, excel, power point, visio), pernah belajar tentang 3d grafik, dan juga memahami cara memperbaiki sebagian besar general problem yang sering terjadi pada windows.',
          'code_judul'      : 'Love to Code!',
          'code_isi'        : 'Waktu terasa cepat berlalu ketika saya melakukan coding. Saya juga senang ketika membuat algoritma, perasaan saat menyelesaikan algoritma yang sulit adalah perasaan yang terbaik.',
          'photoshop_judul' : 'Sometimes do photoshop too!',
          'photoshop_isi'   : 'Ketika saya mempunyai waktu luang dan sedang ada inspirasi, saya kadang melakukan editing photo atau manipulasi image.'
        }
      ],
      [
        'id', {
          'bahasa'          : 'Bahasa :&nbsp;',
          'carousel'        : 'Seseorang yang menyukai coding dan photoshop.',
          'aboutme_judul'   : 'Sedikit Tentang Saya',
          'aboutme_isi'     : '&emsp;&ensp;&nbsp;Saya adalah seorang pelajar berumur 18 tahun jurusan Sistem Informatika Jaringan dan Informasi di SMKN 1 Cimahi yang berspesialis pada bidang Programming. Saya senang mengedit photo dan image menggunakan software photoshop, bisa mengoperasikan microsoft office (word, excel, power point, visio), pernah belajar tentang 3d grafik, dan juga memahami cara memperbaiki sebagian besar masalah umum yang sering terjadi pada windows.',
          'code_judul'      : 'Menyukai Coding!',
          'code_isi'        : 'Waktu terasa cepat berlalu ketika saya melakukan coding. Saya juga senang ketika membuat algoritma, perasaan saat menyelesaikan algoritma yang sulit adalah perasaan yang terbaik.',
          'photoshop_judul' : 'Kadang mengedit photo juga!',
          'photoshop_isi'   : 'Ketika saya mempunyai waktu luang dan sedang ada inspirasi, saya kadang melakukan editing photo atau manipulasi image.'
        }
      ],
      [
        'eng', {
          'bahasa'          : 'Language :&nbsp;',
          'carousel'        : 'A man who love code and photoshop.',
          'aboutme_judul'   : 'A Little About Me',
          'aboutme_isi'     : '&emsp;&ensp;&nbsp;I am an 18 year old student majoring in Information and Network Information Systems at SMKN 1 Cimahi who specializes in programming. I enjoy editing photos and images using Photoshop software, can operate Microsoft Office (word, excel, power point, visio), have learned about 3d graphics, and also understand how to fix most of the general problems that often occur on windows.',
          'code_judul'      : 'Love to Code!',
          'code_isi'        : 'Time flies fast when Im coding. I also enjoy creating algorithms, the feeling of solving difficult algorithms is the best feeling.',
          'photoshop_judul' : 'Sometimes do photoshop too!',
          'photoshop_isi'   : 'When I have free time and Im inspired, I sometimes do photo editing or image manipulation.'
        }
      ]
    ],
    ['input3','input4']
];

$(".language img.flag").addClass("flagvisibility");

$(".language dt a").click(function() {
    $(".language dd ul").toggle();
});
            
$(".language dd ul li a").click(function() {
    var text = $(this).html();
    var page = document.getElementById('page').value;
    $(".language dt a span").html(text);
    $(".language dd ul").hide();

    // search page now
    var page_now;
    for( var i = 0, len = database_language.length; i < len; i++ ) {
        if( database_language[i][0] === page ) {
            page_now = database_language[i]
            break;
        }
    }

    //search language
    // translate
    var language_now;
    for( var i = 0, len = page_now.length; i < len; i++ ) {
        if( page_now[i][0] === getSelectedValue("select_language") ) {
            language_now = page_now[i][1]
            break;
        }
    }

    // change language
    var parts = Object.keys(language_now);
    for( var i = 0, len = parts.length; i < len; i++ ) {
        $("#" + parts[i]).html(language_now[parts[i]]);
    }
});
            
function getSelectedValue(id) {
    return $("#" + id).find("dt a span.value").html();
}

$(document).bind('click', function(e) {
    var $clicked = $(e.target);
    if (! $clicked.parents().hasClass("language"))
        $(".language dd ul").hide();
});

$(".language img.flag").toggleClass("flagvisibility");
       
