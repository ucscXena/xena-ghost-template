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

        var CSS_SELECTOR_MENU_ITEM = ".navbar-nav li a";

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

                // If menu has never been opened before, add closed state
                var $body = $("body");
                if ( !$body.hasClass(CSS_NAVBAR_CLOSED) && !$body.hasClass(CSS_NAVBAR_OPEN) ) {
                    $body.addClass(CSS_NAVBAR_CLOSED);
                }

                // Handle case where menu is currently closed
                if ( $body.hasClass(CSS_NAVBAR_CLOSED) ) {
                    showMenu($body);
                }
                // Handle case where menu is currently open
                else {
                    hideMenu($body);
                }
            });
        }

        /**
         * Disable click handler that closes menu on click of menu item.
         */
        function disableClickToClose() {

            // Close the menu when a menu item is clicked.
            $(CSS_SELECTOR_MENU_ITEM).unbind("click");
        }

        /**
         * Prevent scroll when menu is open. Touch devices only - non-touch devices use overflow CSS property to
         * control scroll.
         *
         * @param $body {Object}
         */
        function disableScroll($body) {

            $body.on("touchmove", function(evt) {

                // Enable scroll only if we're scrolling the actual menu
                if ( $(evt.target).parents(".navbar-nav").length === 0 ) {
                    evt.preventDefault();
                }
            });
        }

        /**
         * Enable click handler to close menu on click of menu item.
         *
         * @param $body {Object}
         */
        function enableClickToClose($body) {

            // Close the menu when a menu item is clicked.
            $(CSS_SELECTOR_MENU_ITEM).on("click", function() {

                hideMenu($body);

                // Remove this click handler
                disableClickToClose();
            });
        }

        /**
         * Enable scroll when menu is closed.
         *
         * @param $body {Object}
         */
        function enableScroll($body) {

            $body.unbind("touchmove");
        }

        /**
         * Hide menu.
         * 
         * @param $body {Object}
         */
        function hideMenu($body) {

            // Toggle visibility of menu
            toggleMenu($body);

            // Disable click to close menu
            disableClickToClose();

            // Enable scroll
            enableScroll($body);
        }

        /**
         * Show menu.
         *
         * @param $body {Object}
         */
        function showMenu($body) {

            // Toggle visibility of menu
            toggleMenu($body);

            // Enable click to close menu
            enableClickToClose($body);

            // Disable scroll
            disableScroll($body);
        }

        /**
         * Toggle menu visibility by swapping out open and close state CSS classes.
         *
         * @param $body {Object}
         */
        function toggleMenu($body) {

            $body.toggleClass([CSS_NAVBAR_CLOSED, CSS_NAVBAR_OPEN].join(" "));
        }
    })();

    // Kick off initialization of hamburger...
    CC_HAMBURGER.init();

})();
