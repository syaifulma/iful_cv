  function loadeffect1() {

            
        let element = document.getElementById("outer-content-wrapper");
        let opacity = 0;
        let fadeIn = setInterval(() => {
            if (opacity >= 1) {
                clearInterval(fadeIn);
            }
            element.style.opacity = opacity;
            opacity += 0.01;
        }, 10);

        document.getElementById("li-about").style.backgroundColor = '#e5e5e5';
        document.getElementById("li-experience").style.backgroundColor =  'white';
        document.getElementById("li-education").style.backgroundColor = 'white';
        document.getElementById("li-skill").style.backgroundColor = 'white';
        document.getElementById("li-interest").style.backgroundColor = 'white';
        document.getElementById("li-award").style.backgroundColor = 'white';
    }


    function loadeffect2() {
                let element = document.getElementById("outer-content-wrapper");
                let opacity = 0;
                let fadeIn = setInterval(() => {
                    if (opacity >= 1) {
                        clearInterval(fadeIn);
                    }
                    document.getElementById("content-2").style.opacity = opacity;
                    opacity += 0.01;
                }, 7);

        document.getElementById("li-about").style.backgroundColor = 'white';
        document.getElementById("li-experience").style.backgroundColor = '#e5e5e5';
        document.getElementById("li-education").style.backgroundColor = 'white';
        document.getElementById("li-skill").style.backgroundColor = 'white';
        document.getElementById("li-interest").style.backgroundColor = 'white';
        document.getElementById("li-award").style.backgroundColor = 'white';
    }

    function loadeffect3() {
            let element = document.getElementById("outer-content-wrapper");
            let opacity = 0;
            let fadeIn = setInterval(() => {
                if (opacity >= 1) {
                    clearInterval(fadeIn);
                }
                document.getElementById("content-3").style.opacity = opacity;
                opacity += 0.01;
            }, 7);

            document.getElementById("li-about").style.backgroundColor = 'white';
            document.getElementById("li-experience").style.backgroundColor = 'white';
            document.getElementById("li-education").style.backgroundColor = '#e5e5e5';
            document.getElementById("li-skill").style.backgroundColor = 'white';
            document.getElementById("li-interest").style.backgroundColor = 'white';
            document.getElementById("li-award").style.backgroundColor = 'white';
        }


        function loadeffect4() {
                let element = document.getElementById("outer-content-wrapper");
                let opacity = 0;
                let fadeIn = setInterval(() => {
                    if (opacity >= 1) {
                        clearInterval(fadeIn);
                    }
                    document.getElementById("content-4").style.opacity = opacity;
                    opacity += 0.01;
                }, 7);

                document.getElementById("li-about").style.backgroundColor = 'white';
                document.getElementById("li-experience").style.backgroundColor = 'white';
                document.getElementById("li-education").style.backgroundColor = 'white';
                document.getElementById("li-skill").style.backgroundColor = '#e5e5e5';
                document.getElementById("li-interest").style.backgroundColor = 'white';
                document.getElementById("li-award").style.backgroundColor = 'white';
            }


        function loadeffect5() {
                let element = document.getElementById("outer-content-wrapper");
                let opacity = 0;
                let fadeIn = setInterval(() => {
                    if (opacity >= 1) {
                        clearInterval(fadeIn);
                    }
                    document.getElementById("content-5").style.opacity = opacity;
                    opacity += 0.01;
                }, 7);

                document.getElementById("li-about").style.backgroundColor = 'white';
                document.getElementById("li-experience").style.backgroundColor = 'white';
                document.getElementById("li-education").style.backgroundColor = 'white';
                document.getElementById("li-skill").style.backgroundColor = 'white';
                document.getElementById("li-interest").style.backgroundColor = '#e5e5e5';
                document.getElementById("li-award").style.backgroundColor = 'white';
            }


        function loadeffect6() {
                let element = document.getElementById("outer-content-wrapper");
                let opacity = 0;
                let fadeIn = setInterval(() => {
                    if (opacity >= 1) {
                        clearInterval(fadeIn);
                    }
                    document.getElementById("content-6").style.opacity = opacity;
                    opacity += 0.01;
                }, 7);

                document.getElementById("li-about").style.backgroundColor = 'white';
                document.getElementById("li-experience").style.backgroundColor = 'white';
                document.getElementById("li-education").style.backgroundColor = 'white';
                document.getElementById("li-skill").style.backgroundColor = 'white';
                document.getElementById("li-interest").style.backgroundColor = 'white';
                document.getElementById("li-award").style.backgroundColor = '#e5e5e5';
            }

    // slideshow

    let slideIndex = 0;
        showSlides();

        function showSlides() {
            let i;
            let slides = document.getElementsByClassName("mySlides");
            let dots = document.getElementsByClassName("dot");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) { slideIndex = 1 }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
            setTimeout(showSlides, 2000); // Change image every 2 seconds
        }