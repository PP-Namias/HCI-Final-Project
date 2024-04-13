   document.addEventListener("DOMContentLoaded", function() {
            let links = document.querySelectorAll(".sideli a");

            for (let link of links) {
                link.addEventListener("click", function(event) {
                    event.preventDefault();

                    // Remove "active" class from all links
                    for (let otherLink of links) {
                        otherLink.parentElement.classList.remove("active");
                    }

                    // Add "active" class to the clicked link
                    link.parentElement.classList.add("active");

                    // Perform the redirection
                    let href = link.getAttribute("href");
                    window.location.href = href;
                });
            }

            // Add active class to the current link based on the current URL
            let currentURL = window.location.href;
            for (let link of links) {
                let href = link.getAttribute("href");
                if (currentURL.includes(href)) {
                    link.parentElement.classList.add("active");
                    break;
                }
            }
        });

        