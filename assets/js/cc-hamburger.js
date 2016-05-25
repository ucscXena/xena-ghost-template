/**
 * UCSC Xena Web
 *
 * Hamburger/full screen nav functionality, mobile only.
 */

(function() {

    "use strict";

    /**
     * CC hamburger/full screen nav module.
     *
     * @returns {Object} Public API of Xena website.
     */
    var CC_HAMBURGER = (function() {

        var CSS_NAVBAR_OPEN = "navbar-open";
        var CSS_NAVBAR_CLOSED = "navbar-closed";

        /**
         * PUBLIC API
         */
        return {

            // Called on page load to set up hamburger
            init: init
        };

        /**
         * PRIVATES
         */

        /**
         * Set up components, state, data
         */
        function init() {

            // Set up hamburger/menu toggle
            initHamburger();
        }

        /**
         * Add/remove class on body to toggle visibility of nav menu on mobile. Must explicitly toggle to a "closed"
         * class (rather than just removing the open class) so that we can animate to the closed class as the final state.
         *
         * Also prevent scroll if menu is open. This is specifically for touch devices where overflow: hidden on body
         * is not obeyed. https://worldvectorlogo.com/logos/obey.svg
         */
        function initHamburger() {

            // Set up hamburger toggle
            $(".navbar-hamburger").click(function toggleHamburger(evt) {

                // Mind you own business!
                evt.preventDefault();

                // Menu has been previously toggled - swap out open/closed state
                var $body = $("body");
                if ( $body.hasClass(CSS_NAVBAR_CLOSED) || $body.hasClass(CSS_NAVBAR_OPEN) ) {

                    $body.toggleClass([CSS_NAVBAR_CLOSED, CSS_NAVBAR_OPEN].join(" "));
                }
                // Menu has never been toggled - open menu
                else {

                    $body.addClass(CSS_NAVBAR_OPEN);
                }

                // Disable/enable scroll according to menu state
                toggleScroll($body);
            });
        }

        /**
         * Prevent scroll when menu is open.
         *
         * @param $body {Object}
         */
        function toggleScroll($body) {

            if ( $body.hasClass(CSS_NAVBAR_OPEN) ) {

                $body.on("touchmove", function(evt) {

                    // No scroll while menu is open
                    evt.preventDefault();
                });
            }
            else {
                $body.unbind("touchmove");
            }
        }

    })();

    // Kick off initialization of hamburger...
    CC_HAMBURGER.init();

})();
