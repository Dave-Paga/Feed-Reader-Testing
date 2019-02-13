$(function() {
    /* This suite is all about the RSS feeds definitions,
     * the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* Simple RegExp checks if the string has the given sequence in the
         * beginning
         */
        const url = new RegExp('^http://');

        /* it tests to make sure that the allFeeds variable has been
         * defined and that it is not empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* loops through each feed in the allFeeds object and ensures
         * it has a URL defined and that the URL is not empty.
         */
        it('has URLs', function() {
            for (let feed of allFeeds) {
                expect(url.test(feed.url)).toBeTruthy();
            };
        });

        /* Loops through each feed in the allFeeds object and ensures it has
         * a name defined and that the name is not empty.
         */
        it('has names',  function() {
            for (let feed of allFeeds) {
                expect(feed.name).not.toBe('');
            };
        });
    });


    describe('The menu', function() {
        const body = document.querySelector('Body'),
              menu = document.querySelector('.menu-icon-link');

        /* Test that ensures the menu element is hidden by default. */
        it('Hidden by default', function() {
            expect(body.classList.contains('menu-hidden')).toBeTruthy();
        });

        /* Ensures the menu changes visibility when the menu icon is clicked. */
        describe('Menu Visibility', function() {
            /// sets menu to be open for each function
            beforeAll(function() {
                menu.click();
            })

            it('Appears when click', function() {
                expect(body.classList.contains('menu-hidden')).toBeFalsy();
            });

            it('Disappears on click', function() {
                menu.click();
                expect(body.classList.contains('menu-hidden')).toBeTruthy();
            });
        });
    });

    describe('Initial Entries', function() {
        /// waits for loadFeed() to finish
        beforeEach(function(done) {
            loadFeed(0, function(){
                done();
            });
        });

        /* Test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        it('has atleast a single entry', function(done) {
            expect(document.querySelectorAll('.feed .entry-link')).not.toBe(0);
            done();
        });
    });

    /// Tests if loadFeed() gives out diffrent entries
    describe('New Feed Selection', function() {
        let feedEntry,
            feedOne = {},
            feedTwo = {};


        /// gets first entries diffrent loadfeeds() and assigns them to variables
        beforeEach(function(done) {
            loadFeed(0, function() {
                feedEntry = document.querySelectorAll('.entry-link');
                feedOne[0] = feedEntry[0];

                loadFeed(1, function() {
                    feedEntry = document.querySelectorAll('.entry-link')
                    feedTwo[0] = feedEntry[0];
                    done();
                });
            });


        });

        ///Tests if feed entries are similar
        it('content changes', function(done) {
            expect(feedOne[0] !== feedTwo[0]).toBeTruthy();
            done();
        });
    })
}());
