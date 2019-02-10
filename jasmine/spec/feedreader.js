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
        /* Test that ensures the menu element is hidden by default. */
        it('Hidden by default', function() {
            if (document.body.classList.contains('menu-hidden')) {
                expect(document.body.classList.contains('menu-hidden')).toBeTruthy();
            } else {
                $('body').toggleClass('menu-hidden');
                expect(document.body.classList.contains('menu-hidden')).toBeTruthy();
            }
        });

         /* Ensures the menu changes visibility when the menu icon is clicked. */
        it('Appears on click', function() {
            if (document.body.classList.contains('menu-hidden')) {
                $('body').toggleClass('menu-hidden');
                expect(document.body.classList.contains('menu-hidden')).toBeFalsy();
            } else {
                expect(document.body.classList.contains('menu-hidden')).toBeFalsy();
            }
        });

        it('Disappears on click', function() {
            if (document.body.classList.contains('menu-hidden')) {
                expect(document.body.classList.contains('menu-hidden')).toBeTruthy();
            } else {
                $('body').toggleClass('menu-hidden');
                expect(document.body.classList.contains('menu-hidden')).toBeTruthy();
            }
        });
    });

    describe('Initial Entries', function() {
        /// waits for loadFeed() to finish
        beforeEach(function(done) {
            setTimeout(function() {
                done()
            }, 2000)
        });

        /* Test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        it('has atleast a single entry', function(done) {
            expect(document.querySelector('.feed').childElementCount).not.toBe(0);
            done();
        });
    });

    describe('New Feed Selection', function() {
        /// waits for loadFeed() to finish
        beforeEach(function(done) {
            setTimeout(function() {
                done()
            }, 2000)
        });

        ///Tests if changes are made when loadFeed() is done
        it('content changes', function(done) {
            expect(document.querySelector('.feed').hasChildNodes).toBeTruthy();
            expect(document.querySelector('.feed').innerHTML).toBeTruthy();
            done();
        });
    })
}());
