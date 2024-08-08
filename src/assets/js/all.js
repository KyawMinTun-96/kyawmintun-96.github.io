import $ from 'jquery';


/*=================Navbar show / hide=================*/
const mediaQuery = window.matchMedia('(min-width: 576px)');
mediaQuery.addListener(deviceChange);

function deviceChange(e) {

    if (e.matches) {

        var prevScroll = window.pageYOffset;
        window.onscroll = function () {

            const navbar = document.getElementsByClassName('navbar')[0];
            let curScroll = window.pageYOffset;
            if (curScroll > prevScroll) {
                
                navbar.style.top = '-60px';
                navbar.style.transition = 'all .5s ease';
                navbar.style.backgroundColor = 'rgba(51, 54, 70, 1)';
                navbar.style.scrollBehavior = "smooth";
                navbar.style.boxShadow = 'none';

            } else if (prevScroll <= 20) {

                navbar.style.scrollBehavior = "smooth";
                navbar.style.backgroundColor = 'var(--primary-bg)';
                navbar.style.boxShadow = 'none';

            } else {

                navbar.style.top = '0';
                navbar.style.transition = 'all .5s ease';
                navbar.style.backgroundColor = 'rgba(51, 54, 70, 1)';
                //navbar.style.backdropFilter = 'blur(10px)';
                navbar.style.boxShadow = '0 10px 30px -10px rgba(2,12,27,0.7)';
                navbar.style.scrollBehavior = "smooth";
            }

            prevScroll = curScroll;

        }
    }
}
deviceChange(mediaQuery);


/*=================Experiences=================*/
$(document).ready(function () {
    $('.tab-btn').click(function () {
        console.log(this);
        $(".tabSkill").removeClass('tabSkill-active');
        $(".tabSkill[data-id='" + $(this).attr('data-id') + "']").addClass("tabSkill-active");
        $(".tab-btn").removeClass('highlight');
        $(this).addClass('highlight');
    });
});


/*=================Project tab==================*/
$(document).ready(function () {

    $('.proj-btn').click(function () {

        $(".tab").removeClass('tab-active');
        $(".tab[data-id='" + $(this).attr('data-id') + "']").addClass("tab-active");
        $(".proj-btn").removeClass('proj-active');
        $(this).addClass('proj-active');

    });

});



// ==========================Projects SEC============================
const data = [
    {
        "id" : 1,
        "title" : "One Mart Online Shop",
        "content" : "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, eveniet.",
        "languages": ["HTML5", "CSS3", "JavaScript", "JQuery", "Bootstrap", "PHP", "MySQL"],
        "github": "https://github.com/KyawMinTun-96",
        "demo": "https://github.com/HtetYinMin/One-Mart"
    },

    {
        "id" : 2,
        "title" : "Internal Document Management System",
        "content" : "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, eveniet.",
        "languages": ["HTML5", "CSS3", "JavaScript", "JQuery", "PHP", "MySQL"],
        "github": "https://github.com/KyawMinTun-96",
        "demo": "https://github.com/KyawMinTun-96/IDMS"
    },

    {
        "id" : 3,
        "title" : "Myanmar News Website",
        "content" : "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, eveniet.",
        "languages": ["HTML5", "CSS3", "JavaScript", "JQuery", "Bootstrap", "PHP", "MySQL"],
        "github": "https://github.com/KyawMinTun-96",
        "demo": "https://github.com/KyawMinTun-96/news.mm"
    },

    {
        "id" : 4,
        "title" : "Jewellery Online Shop",
        "content" : "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, eveniet.",
        "languages": ["HTML5", "CSS3", "JavaScript", "JQuery", "PHP", "MySQL"],
        "github": "https://github.com/KyawMinTun-96",
        "demo": "https://github.com/KyawMinTun-96/Jewellery"
    },

    {
        "id" : 5,
        "title" : "Travel and Tour Project",
        "content" : "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, eveniet.",
        "languages": ["HTML5", "CSS3", "JavaScript", "JQuery", "PHP", "MySQL"],
        "github": "https://github.com/KyawMinTun-96",
        "demo": "https://github.com/KyawMinTun-96/Travel-and-Tour"
    },

    {
        "id" : 6,
        "title" : "Hotel Website Project",
        "content" : "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, eveniet.",
        "languages": ["HTML5", "CSS3", "JavaScript", "JQuery", "PHP", "MySQL"],
        "github": "https://github.com/KyawMinTun-96",
        "demo": "https://github.com/KyawMinTun-96/hotel.mm"
    },

    {
        "id" : 7,
        "title" : "Laravel Project",
        "content" : "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, eveniet.",
        "languages": ["HTML5", "CSS3", "JavaScript", "JQuery", "PHP", "MySQL", "Laravel framework"],
        "github": "https://github.com/KyawMinTun-96",
        "demo": "https://github.com/KyawMinTun-96/Laravel"
    },
    {
        "id" : 7,
        "title" : "Simple Blog Project",
        "content" : "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, eveniet.",
        "languages": ["HTML5", "CSS3", "JavaScript", "JQuery", "PHP", "MySQL"],
        "github": "https://github.com/KyawMinTun-96",
        "demo": "https://github.com/KyawMinTun-96/simple-blog"
    },
    {
        "id" : 8,
        "title" : "Simple Inventory System Project",
        "content" : "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, eveniet.",
        "languages": ["C#", "MSSQL SERVER"],
        "github": "https://github.com/KyawMinTun-96",
        "demo": "https://github.com/KyawMinTun-96/SimpleInventorySystem"
    },
    {
        "id" : 9,
        "title" : "Employee Management System Project",
        "content" : "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, eveniet.",
        "languages": ["HTML5", "CSS3", "JavaScript", "JQuery", "Python", "Django"],
        "github": "https://github.com/KyawMinTun-96",
        "demo": "https://github.com/KyawMinTun-96/EmployeeManagementSystem"
    },
    {
        "id" : 10,
        "title" : "Simple Student Registration",
        "content" : "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, eveniet.",
        "languages": ["Python", "Tkinter"],
        "github": "https://github.com/KyawMinTun-96",
        "demo": "https://github.com/KyawMinTun-96/Simple_Student_Registration_using_Tkinter-"
    }
];



function displayProject() {

//     $.ajax({

//         url: "assets/json/projects.json",
//         dataType: "json",
//         method: "GET",
//         success: function (data) {

            var output = "";
            let animatePrj = ["animate__slideInRight", "animate__slideInDown", "animate__slideInLeft", "animate__slideInUp"]
            let aniCountPrj = 0;
            let directionPrj = 1;
            for (var i = 0; i < data.length; i++) {

                if(i == 4) {
                    directionPrj = -1;
                }

                if(aniCountPrj == 0) {

                    directionPrj = 1;

                }

                if((aniCountPrj == 4 || aniCountPrj == 3 || aniCountPrj == 1 || aniCountPrj==2 || aniCountPrj == 0) && (directionPrj == -1)) {

                    aniCountPrj -= 2;
                    
                }
                output +=
                    `<div className="card animate__animated ${animatePrj[aniCountPrj]}">
                        <div className="card-body">
                            <div className="card-header">
                                <a href="` + data[i].github + `" title="github" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a>
                                <a href="` + data[i].demo + `" title="projects" target="_blank"><i className="fa fa-link" aria-hidden="true"></i></a>
                            </div>
                            <p className="title">` + data[i].title + `</p>

                            <div className="description">
                                <p>` + data[i].content + `</p>
                            </div>
                        </div>

                        <div className="card-footer">
                            <ul>
                                <li>` + data[i].languages.join(', ') + ' ' + `</li>
                            </ul>
                        </div>
                    </div>`;

                if((aniCountPrj == 3 || aniCountPrj == 1 || aniCountPrj==2 || aniCountPrj == 0) && (directionPrj == 1)) {

                    aniCountPrj++;
                    
                }
            }


           $('#dataProj').append(output);
            // console.log($(this).$('#dataProj'));


            // $(document).ready(function () {

            //     if ($(window).width() > 1024) {

            //         var pjSec = $('.projects-sec');
            //         $.each(pjSec, function () {
            //             $(this)
            //                 .find('.card')
            //                 .slice(6)
            //                 .hide();
            //         });

            //         $('.load-btn').click(function (e) {

            //             e.preventDefault();

            //             $(this).parent().find(".card:hidden").slice(0, 3).fadeIn('fast');

            //         });

            //     }

            //     if ($(window).width() > 768 && $(window).width() <= 1024) {

            //         pjSec = $('.projects-sec');
            //         $.each(pjSec, function () {
            //             $(this)
            //                 .find('.card')
            //                 .slice(4)
            //                 .hide();
            //         });

            //         $('.load-btn').click(function (e) {

            //             e.preventDefault();

            //             $(this).parent().find(".card:hidden").slice(0, 2).fadeIn('fast');

            //         });

            //     }

            //     if ($(window).width() <= 768) {

            //         pjSec = $('.projects-sec');
            //         $.each(pjSec, function () {
            //             $(this)
            //                 .find('.card')
            //                 .slice(4)
            //                 .hide();
            //         });

            //         $('.load-btn').click(function (e) {

            //             e.preventDefault();

            //             $(this).parent().find(".card:hidden").slice(0, 2).fadeIn('fast');

            //         });

            //     }

            // });

        // },
        // error: function (error) {
        //     console.log(error)
        // }

    // });
}
displayProject();

// function loadImage() {

//     $.ajax({

//         url: 'assets/json/design.json',
//         method: 'GET',
//         dataType: "json",
//         success: function (data) {

//             let output = '';
//             let animate = ["animate__slideInRight", "animate__slideInLeft", "animate__slideInUp", "animate__slideInDown"]
//             let aniCount = 0;
//             let direction = 1;
//             for (let i = 0; i < data.length; i++) {
                
//                 if(i == 4) {
//                     direction = -1;
//                 }

//                 if(aniCount == 0) {

//                     direction = 1;

//                 }

//                 if((aniCount == 4 || aniCount == 3 || aniCount == 1 || aniCount==2 || aniCount == 0) && (direction == -1)) {

//                     --aniCount;
                    
//                 }

//                 output += `
//                     <div class="card animate__animated ${animate[aniCount]}">
//                         <div class="card-image">
//                             <img src="assets/imgs/designs/` + data[i].image + `" alt="design image">
//                         </div>
                        
//                         <button type="button" data-img="` + data[i].image + `" data-name="` + data[i].title + `" class="view-btn"><i class="fa fa-eye"></i></button>
//                     </div>
//                     `;


//                 if((aniCount == 3 || aniCount == 1 || aniCount==2 || aniCount == 0) && (direction == 1)) {

//                     aniCount++;
                    
//                 }
//             }

//             $('.design').append(output);


//             $(document).ready(function () {

//                 if ($(window).width() <= 768) {

//                     design = $('.design');
//                     $.each(design, function () {
//                         $(this)
//                             .find('.card')
//                             .slice(6)
//                             .hide();
//                     });

//                     $('.load-btn').click(function (e) {

//                         e.preventDefault();

//                         $(this).parent().find(".card:hidden").slice(0, 3).fadeIn('fast');

//                     });

//                 }

//                 if ($(window).width() > 1024) {

//                     design = $('.design');
//                     $.each(design, function () {
//                         $(this)
//                             .find('.card')
//                             .slice(8)
//                             .hide();
//                     });

//                     $('.load-btn').click(function (e) {

//                         e.preventDefault();

//                         $(this).parent().find(".card:hidden").slice(0, 4).fadeIn('fast');

//                     });
//                 }

//                 if ($(window).width() > 768 && $(window).width() <= 1024) {

//                     design = $('.design');
//                     $.each(design, function () {
//                         $(this)
//                             .find('.card')
//                             .slice(6)
//                             .hide();
//                     });

//                     $('.load-btn').click(function (e) {

//                         e.preventDefault();

//                         $(this).parent().find(".card:hidden").slice(0, 3).fadeIn('fast');

//                     });

//                 }


//                 $('.card').on('click', '.view-btn', function () {

//                     let image = $(this).data('img');
//                     let name = $(this).data('name');

//                     $('.model').css({
//                         'z-index': 999999999,
//                         'opacity': 1
//                     });
//                     $('body').addClass('loading');


//                     /*--------model box-------*/
//                     const mTitle = document.querySelector('.model-title #title');
//                     const mImage = document.getElementById('design-image');
//                     mTitle.textContent = name;
//                     mImage.src = 'assets/imgs/designs/' + image;



//                     $('.close-btn').click(function () {

//                         $('.model').css({
//                             'z-index': -1,
//                             'opacity': 0
//                         });

//                         $('body').removeClass('loading');

//                     });

//                 });

//             });
//         },
//         error: function (error) {
//             console.log(`Error: ${error}`);
//         }

//     });
// }
// loadImage();

// function displayBlog() {

//     $.ajax ({
//         url: "assets/json/blog.json",
//         dataType: "json",
//         method: "GET",
//         success: function (data) {

//             var output = "";

//             for (var i = 0; i < data.length; i++) {

//                 output +=
//                     `<div class="card animate__animated animate__flipInY">
//                         <div class="card-body">
//                             <p class="title" style="height:80px">` + data[i].title + `</p>

//                             <div class="card_image">
//                                 <img src="assets/imgs/blogs/`+ data[i].image + `" title="This is a blog image">
//                             </div>
                        
//                             <div class="description">
//                                 <p>` + data[i].content + `</p>
//                             </div>

//                             <div id="read_more">
//                                 <button>Read more</button>
//                             </div>
//                         </div>
//                     </div>`;

//             }
//             $('#dataBlog').append(output);


//             $(document).ready(function () {

//                 if ($(window).width() > 1024) {

//                     pjSec = $('.blg');
//                     $.each(pjSec, function () {
//                         $(this)
//                             .find('.card')
//                             .slice(6)
//                             .hide();
//                     });

//                     $('.load-btn').click(function (e) {

//                         e.preventDefault();

//                         $(this).parent().find(".card:hidden").slice(0, 3).fadeIn('fast');

//                     });

//                 }

//                 if ($(window).width() > 768 && $(window).width() <= 1024) {

//                     pjSec = $('.blg');
//                     $.each(pjSec, function () {
//                         $(this)
//                             .find('.card')
//                             .slice(4)
//                             .hide();
//                     });

//                     $('.load-btn').click(function (e) {

//                         e.preventDefault();

//                         $(this).parent().find(".card:hidden").slice(0, 2).fadeIn('fast');

//                     });

//                 }

//                 if ($(window).width() <= 768) {

//                     pjSec = $('.blg');
//                     $.each(pjSec, function () {
//                         $(this)
//                             .find('.card')
//                             .slice(4)
//                             .hide();
//                     });

//                     $('.load-btn').click(function (e) {

//                         e.preventDefault();

//                         $(this).parent().find(".card:hidden").slice(0, 2).fadeIn('fast');

//                     });

//                 }

//             });

//         },
//         error: function (error) {
//             console.log(error)
//         }
//     });
// }

// displayBlog();







/*=================Form Request====================*/
// const scriptURL = 'https://prod-41.southeastasia.logic.azure.com:443/workflows/bd2ac059878a44b5a9b5716687759cab/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=6k-iZ5Kn8PNR04P5S-1OphbtUtl6vtiJ0CqsgQjfIgM';

// const form = document.forms['form-data'];
// form.addEventListener('submit', e => {

//     e.preventDefault()

//     // Get form data
//     const formData = new FormData(document.getElementById('reset'));

//     // Convert FormData to JSON
//     const jsonData = {};

//     formData.forEach((value, key) => {

//         jsonData[key] = value;

//     });

//     fetch(
//             scriptURL, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                   },
//                 body: JSON.stringify(jsonData),
//             }
//         )
//         .then(

//             response => {

//                 Swal.fire({
//                     position: 'center',
//                     icon: 'success',
//                     title: 'Thanks for Contacting me..! I Will Contact You Soon...',
//                     confirmButtonColor: '#3085d6'
//                 })

//                 form.reset()

//             }

//         )
//         .catch(
//             error => console.error('Error!', error.message)
//         )

// });




/*===============preloader===================*/
// window.addEventListener('load', function () {

//     setTimeout(removeLoader, .3);

// });


// function removeLoader() {

//     $('#preloader').fadeOut(1, function () {

//         $('#preloader').remove();
//         $('.loading').removeClass();

//     });
// }


// function dateCalculate(startDate, endDate, ID) {

//     var sDate = new Date(startDate);

//     //get the current date from the system
//     var now = new Date(endDate);

//     //extract the year, month, and date from user date input
//     var sDateYear = sDate.getYear();
//     var sDateMonth = sDate.getMonth();
//     var sDateDate = sDate.getDate();

//     //extract the year, month, and date from current date
//     var currentYear = now.getYear();
//     var currentMonth = now.getMonth();
//     var currentDate = now.getDate();

//     //declare a variable to collect the year, month, and days
//     var exp = {};
//     var expString = "";

//     //get years
//     yearExp = currentYear - sDateYear;



//     //get months
//     if (currentMonth >= sDateMonth)
//         //get months when current month is greater
//         var monthExp = currentMonth - sDateMonth;

//     else {
//         yearExp--;
//         var monthExp = 12 + currentMonth - sDateMonth;
//     }

//     //get days
//     if (currentDate >= sDateDate)
//         //get days when the current date is greater
//         var dateExp = currentDate - sDateDate;
//     else {
//         monthExp--;
//         var dateExp = 31 + currentDate - sDateDate;

//         if (monthExp < 0) {
//             monthExp = 11;
//             yearExp--;
//         }
//     }

//     //group the age in a single variable
//     exp = {
//         years: yearExp,
//         months: monthExp,
//         days: dateExp
//     };


//     if ((exp.years > 0) && (exp.months > 0) && (exp.days > 0))
//         expString = exp.years + " years, " + exp.months + " months, and " + exp.days + " days";
//     else if ((exp.years == 0) && (exp.months == 0) && (exp.days > 0))
//         expString = exp.days + " days";
//     //when current month and date is same as birth date and month
//     else if ((exp.years > 0) && (exp.months == 0) && (exp.days == 0))
//         expString = exp.years + " years";
//     else if ((exp.years > 0) && (exp.months > 0) && (exp.days == 0))
//         expString = exp.years + " years and " + exp.months + " months";
//     else if ((exp.years == 0) && (exp.months > 0) && (exp.days > 0))
//         expString = exp.months + " months and " + exp.days + " days";
//     else if ((exp.years > 0) && (exp.months == 0) && (exp.days > 0))
//         expString = exp.years + " years, and " + exp.days + " days";
//     else if ((exp.years == 0) && (exp.months > 0) && (exp.days == 0))
//         expString = exp.months + " months";
//     //when current date is same as dob(date of birth)
//     else expString = "Something";

//     return document.getElementById(ID).innerHTML = expString;

// }




// dateCalculate('2021-11-26', '2023-1-26', 'galaxy_exp');
// dateCalculate('2023-03-28', '2024-04-12', 'nex4_exp');










// Get information Get Website Visitor info
// document.addEventListener('DOMContentLoaded', function() {
//     // Function to send data to your server
//     function sendVisitorInfo(data) {
//         // Replace the following URL with the endpoint on your server to handle the data
//         // const endpoint = 'https://prod-50.southeastasia.logic.azure.com:443/workflows/efc3a04d12a34a52b9b8c8720c5756db/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=-Y6B4QDJoLFJ3zto74rofhqk2emUnaBpnZl-cryJeVE';

//         const endpoint = 'https://prod2-59.southeastasia.logic.azure.com:443/workflows/42ef4487b5ae41a29170530ddb701d60/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=IQyAHtZqWqNMXhjLTsiOps8HHwhzOv3iwWhgOAoaGV0';
        
//         // Use fetch API to send data to the server
//         fetch(endpoint, {
//             method: 'POST',
//             headers: {
//             'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(data),
//         })
//         // .then(response => {
//         //     if (!response.ok) {

//         //         throw new Error('Network response was not ok');

//         //     }

//         //     return response.json();
//         // })
//         // .then(data => {

//         //     console.log('Data sent successfully:', data);

//         // })

//     }

//     // Get visitor information
//     const visitorInfo = {
//         userAgent: navigator.userAgent,
//         language: navigator.language,
//         platform: navigator.platform,
//         cookiesEnabled: navigator.cookieEnabled,
//         online: navigator.onLine,
//         javaEnabled: navigator.javaEnabled(),
//         doNotTrack: navigator.doNotTrack,
//         hardwareConcurrency: navigator.hardwareConcurrency,
//         maxTouchPoints: navigator.maxTouchPoints,
//         plugins: getPluginInfo(),
//         screen: {
//           width: window.screen.width,
//           height: window.screen.height,
//           pixelDepth: window.screen.pixelDepth,
//         },
//         viewport: {
//           width: window.innerWidth,
//           height: window.innerHeight,
//         },
//         location: {
//           href: window.location.href,
//           protocol: window.location.protocol,
//           host: window.location.host,
//           pathname: window.location.pathname,
//           search: window.location.search,
//         },
//         timestamp: new Date().toISOString(),
//     };

//     // Function to get plugin information
//     function getPluginInfo() {

//         const plugins = [];
//         for (let i = 0; i < navigator.plugins.length; i++) {

//             plugins.push({
//             name: navigator.plugins[i].name,
//             description: navigator.plugins[i].description,
//             });

//         }

//         return plugins;
//     }

//     sendVisitorInfo(visitorInfo);

// });





// Get the user's current location
// navigator.geolocation.getCurrentPosition(
//     function(position) {
//         const location = {
//         latitude: position.coords.latitude,
//         longitude: position.coords.longitude
//         };
//     },
//     function(error) {

//         console.error('Error getting location:', error.message);

//     }
// );


