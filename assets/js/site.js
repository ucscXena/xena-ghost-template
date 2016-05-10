/**
 * UCSC Xena Web
 *
 * Site functionality.
 */

(function init() {

    "use strict";

    // Set up hamburger/menu toggle
    initHamburger();

    /**
     * Add/remove class on body to toggle visibility of nav menu on mobile. Must explicitly toggle to a "closed"
     * class (rather than just removing the open class) so that we can animate to the closed class as the final state.
     */
    function initHamburger() {

        var CSS_NAVBAR_OPEN = "navbar-open";
        var CSS_NAVBAR_CLOSED = "navbar-closed";

        var $body = $("body");
        $(".navbar-hamburger").click(function(evt) {

            // Mind you own business!
            evt.preventDefault();

            // Menu has been previously toggled - swap out open/closed state
            if ( $body.hasClass(CSS_NAVBAR_CLOSED) || $body.hasClass(CSS_NAVBAR_OPEN) ) {
                $body.toggleClass([CSS_NAVBAR_CLOSED, CSS_NAVBAR_OPEN].join(" "));
            }
            // Menu has never been toggled - open menu
            else {
                $body.addClass(CSS_NAVBAR_OPEN);
            }
        });
    }
})();
