/**
 * UCSC Xena Web
 *
 * Mixpanel functionality.
 */

(function() {

    "use strict";

    /**
     * Mixpanel module definition.
     *
     * @returns {Object} Public API of Xena website.
     */
    var CC_MIXPANEL = (function() {

        // Constants
        var DATA_ATTR_CLICK = "data-cc-click";
        var DATA_ATTR_LOAD = "data-cc-load";
        var DATA_ATTR_SCROLL = "data-cc-scroll";
        var EVENT_NAME_CLICK = "CLICK";
        var EVENT_NAME_LOAD = "LOAD";
        var EVENT_NAME_SCROLL = "SCROLL";

        /**
         * PUBLIC API
         */
        return {

            // Called on page load to set up components, state, data
            init: init
        };

        /**
         * PRIVATES
         */

        /**
         * Set up components, state, data
         */
        function init() {

            if ( isMixpanelEnabled() ) {

                // Initialize click events
                initClick();

                // Initialize scroll events
                initScroll();

                // Initialize load events
                initLoad();
            }
        }

        /**
         * Setup click events
         */
        function initClick() {

            $.each($("[" + DATA_ATTR_CLICK + "]"), function() {

                var $el = $(this);
                $el.on("click", function() {

                    var eventName = EVENT_NAME_CLICK;
                    var eventDescription = $el.attr(DATA_ATTR_CLICK);
                    track(eventName, eventDescription);
                });
            });
        }

        /**
         * Setup scroll waypoints
         */
        function initScroll() {

            $.each($("[" + DATA_ATTR_SCROLL + "]"), function() {

                var $el = $(this);
                $el.waypoint(function(direction) {

                    if ( direction !== "down" ) {
                        return;
                    }

                    var eventName = EVENT_NAME_SCROLL;
                    var eventDescription = $el.attr(DATA_ATTR_SCROLL);
                    track(eventName, eventDescription);

                    // Only track event once
                    this.destroy();
                }, {
                    offset: "90%"
                });
            });
        }

        /**
         * Setup Load events
         */
        function initLoad() {

            $.each($("[" + DATA_ATTR_LOAD + "]"), function() {

                var $el = $(this);
                var eventName = EVENT_NAME_LOAD;
                var eventDescription = $el.attr(DATA_ATTR_LOAD);

                track(eventName, eventDescription);
            });
        }

        /**
         * Check Mixpanel enabled
         *
         * @returns {boolean}
         */
        function isMixpanelEnabled() {

            return (typeof mixpanel !== "undefined");
        }

        /**
         * Mixpanel tracking method
         *
         * @param eventName {string}
         * @param eventDescription {string}
         */
        function track(eventName, eventDescription) {

            mixpanel.track(eventName + " " + eventDescription);
        }

    })();

    // Initialization mixpanel module
    CC_MIXPANEL.init();
})();