/**
 * UCSC Xena Web
 *
 * Site functionality.
 */

(function() {

    "use strict";

    /**
     * USCS website module definition.
     *
     * @returns {Object} Public API of Xena website.
     */
    var UCSC_XENA = (function() {

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

            // Set up forum
            initForum();

            // Mailchimp form
            initMailchimpForm();
        }

        /**
         * Init Mailchimp form
         */
        function initMailchimpForm() {

            window.fnames = new Array();
            window.ftypes = new Array();
            fnames[0] = "EMAIL";
            ftypes[0] = "email";
            fnames[1] = "FNAME";
            ftypes[1] = "text";
            fnames[2] = "LNAME";
            ftypes[2] = "text";
        }

        /**
         * Initiate Forum
         */
         function initForum() {

            var url = "https://groups.google.com/forum/feed/ucsc-cancer-genomics-browser/msgs/rss_v2_0.xml?num=20";
            readRSSFeed(url,parseRSSFeed);
         }

        /**
         * Read RSS feed method
         * @param {string} url - Forum url
         * @param {function} callback - callback function for parseRSSFeed
         */
         function readRSSFeed(url, callback) {

            $.ajax({
                url: document.location.protocol + "//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=" + encodeURIComponent(url),
                dataType: "json",
                success: function(data) {
                    callback(data.responseData.feed);
                }
            });
         }

         /**
         * Parse RSS feed method
         * @param {JSON object} data - latest forum data in JSON format
         */
         function parseRSSFeed(data) {

            var entries = data.entries;
            var html = "";
            var count = 0;

            $.each(entries, function(i, item) {

                if ( item.title.indexOf("Re:") === -1 && count < 3 ) {
                    html = html + "<li><a href='"+ item.link +"' target='_blank'>"+ item.title +"</a><span>By "+ item.author +"</span></li>";
                    count++;
                }
            });

            $("#forum-group").html(html);
         }
    })();

    // Kick off initialization of website...
    UCSC_XENA.init();

})();
