(function ($) {
    "use strict";
    // Superfish on nav menu
    $(".nav-menu").superfish({
        animation: {
            opacity: "show",
        },
        speed: 400,
    });

    // Mobile Navigation
    if ($("#nav-menu-container").length) {
        var $mobile_nav = $("#nav-menu-container").clone().prop({
            id: "mobile-nav",
        });
        $mobile_nav.find("> ul").attr({
            class: "",
            id: "",
        });
        $("body").append($mobile_nav);
        $("body").prepend(
            '<button type="button" id="mobile-nav-toggle"><i class="ion-md-menu"></i></button>'
        );
        $("body").append('<div id="mobile-body-overly"></div>');
        $("#mobile-nav")
            .find(".menu-has-children")
            .prepend('<i class="ion-md-arrow-dropdown"></i>');

        $(document).on("click", ".menu-has-children i", function (e) {
            $(this).next().toggleClass("menu-item-active");
            $(this).nextAll("ul").eq(0).slideToggle();
            $(this).toggleClass("ion-md-arrow-dropup ion-md-arrow-dropdown");
        });

        $(document).on("click", "#mobile-nav-toggle", function (e) {
            $("body").toggleClass("mobile-nav-active");
            $("#mobile-nav-toggle i").toggleClass("ion-md-close ion-md-menu");
            $("#mobile-body-overly").toggle();
        });

        $(document).click(function (e) {
            var container = $("#mobile-nav, #mobile-nav-toggle");
            if (
                !container.is(e.target) &&
                container.has(e.target).length === 0
            ) {
                if ($("body").hasClass("mobile-nav-active")) {
                    $("body").removeClass("mobile-nav-active");
                    $("#mobile-nav-toggle i").toggleClass(
                        "ion-md-close ion-md-menu"
                    );
                    $("#mobile-body-overly").fadeOut();
                }
            }
        });
    } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
        $("#mobile-nav, #mobile-nav-toggle").hide();
    }

    // Header scroll
    // $(window).scroll(function () {
    //     if ($(this).scrollTop() > 100) {
    //         $(".header").addClass("header-scrolled");
    //     } else {
    //         $(".header").removeClass("header-scrolled");
    //     }
    // });

    // if ($(window).scrollTop() > 100) {
    //     $(".header").addClass("header-scrolled");
    // }

    // Carousel
    var carousel = $(".carousel");
    var carouselIndicators = $(".carousel-indicators");
    carousel
        .find(".carousel-inner")
        .children(".carousel-item")
        .each(function (index) {
            index === 0
                ? carouselIndicators.append(
                      "<li data-target='#carousel' data-slide-to='" +
                          index +
                          "' class='active'></li>"
                  )
                : carouselIndicators.append(
                      "<li data-target='#carousel' data-slide-to='" +
                          index +
                          "'></li>"
                  );

            $(this).css(
                "background-image",
                "url('" +
                    $(this)
                        .children(".carousel-background")
                        .children("img")
                        .attr("src") +
                    "')"
            );
            $(this).children(".carousel-background").remove();
        });

    $(".carousel").swipe({
        swipe: function (
            event,
            direction,
            distance,
            duration,
            fingerCount,
            fingerData
        ) {
            if (direction == "left") $(this).carousel("next");
            if (direction == "right") $(this).carousel("prev");
        },
        allowPageScroll: "vertical",
    });

    // // Skills section
    // $(".skills").waypoint(
    //     function () {
    //         $(".progress .progress-bar").each(function () {
    //             $(this).css("width", $(this).attr("aria-valuenow") + "%");
    //         });
    //     },
    //     { offset: "80%" }
    // );

    // jQuery counterUp
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 1000,
    });

    // Porfolio isotope and filter
    // var portfolioIsotope = $(".portfolio-container").isotope({
    //     itemSelector: ".portfolio-item",
    //     layoutMode: "fitRows",
    // });

    // $("#portfolio-flters li").on("click", function () {
    //     $("#portfolio-flters li").removeClass("filter-active");
    //     $(this).addClass("filter-active");

    //     portfolioIsotope.isotope({ filter: $(this).data("filter") });
    // });

    // Clients carousel
    // $(".clients-carousel").owlCarousel({
    //     autoplay: true,
    //     dots: true,
    //     loop: true,
    //     responsive: { 0: { items: 2 }, 768: { items: 4 }, 900: { items: 6 } },
    // });

    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        items: 1,
    });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".back-to-top").fadeIn("slow");
        } else {
            $(".back-to-top").fadeOut("slow");
        }
    });
    $(".back-to-top").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
        return false;
    });

    //For Read-More in services
    document.addEventListener("DOMContentLoaded", function () {
        const serviceParagraphs =
            document.querySelectorAll(".single-service p");

        function truncateText(text, maxLength) {
            text = text.replace("...", "").trim();

            if (text.length <= maxLength) return text;

            const truncated = text.substr(0, maxLength);
            const lastSpace = truncated.lastIndexOf(" ");

            return truncated.substr(0, lastSpace);
        }

        serviceParagraphs.forEach((paragraph) => {
            const fullContent = paragraph.innerHTML;

            const temp = document.createElement("div");
            temp.style.position = "absolute";
            temp.style.visibility = "hidden";
            temp.style.width = paragraph.offsetWidth + "px";
            temp.style.font = window.getComputedStyle(paragraph).font;
            temp.style.lineHeight =
                window.getComputedStyle(paragraph).lineHeight;
            document.body.appendChild(temp);

            const sampleText = fullContent.slice(0, 200);
            temp.innerHTML = sampleText;
            const lineHeight = parseInt(
                window.getComputedStyle(temp).lineHeight
            );
            const targetHeight = lineHeight * 4;

            let left = 0;
            let right = fullContent.length;
            let perfectCut = 0;

            while (left <= right) {
                const mid = Math.floor((left + right) / 2);
                temp.innerHTML = truncateText(fullContent, mid);

                if (temp.offsetHeight <= targetHeight) {
                    perfectCut = mid;
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }

            document.body.removeChild(temp);

            const wrapper = document.createElement("div");
            wrapper.className = "content-wrapper";
            paragraph.parentNode.insertBefore(wrapper, paragraph);
            wrapper.appendChild(paragraph);

            const truncatedContent = truncateText(fullContent, perfectCut);
            paragraph.innerHTML = truncatedContent + "...";

            const button = document.createElement("button");
            button.className = "read-more-btn";
            button.textContent = "Read More";
            wrapper.appendChild(button);

            let isExpanded = false;

            // Handle button click
            button.addEventListener("click", function (e) {
                e.stopPropagation(); // Prevent event bubbling
                if (!isExpanded) {
                    paragraph.innerHTML = fullContent;
                    button.textContent = "Read Less";
                    isExpanded = true;
                } else {
                    paragraph.innerHTML = truncatedContent + "...";
                    button.textContent = "Read More";
                    isExpanded = false;
                }
            });

            // Keep button visible if content is expanded
            wrapper.addEventListener("mouseleave", function () {
                if (isExpanded) {
                    button.style.opacity = "1";
                    button.style.visibility = "visible";
                }
            });
        });
    });
    // JavaScript for Popup Toggle
    function togglePopup(card) {
        const isOpen = card.classList.contains("clicked");

        // Close all other popups
        document
            .querySelectorAll(".team-card")
            .forEach((el) => el.classList.remove("clicked"));

        // Toggle the clicked card
        if (!isOpen) {
            card.classList.add("clicked");
        }
    }

    // Close popup when clicking outside
    document.addEventListener("click", (e) => {
        if (!e.target.closest(".team-card")) {
            document
                .querySelectorAll(".team-card")
                .forEach((el) => el.classList.remove("clicked"));
        }
    });
})(jQuery);
