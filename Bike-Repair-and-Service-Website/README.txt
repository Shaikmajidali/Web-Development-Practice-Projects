MASTERBYKE — GARAGE REPAIR, BIKES
==================================
Domain: masterbykeservice.com

FOLDER CONTENTS
---------------
index.html      Main website page
style.css       All styling (header, hero, about, services, feedback, contact, footer)
script.js       All frontend behaviour (popups, slider, forms, cookies, talks to /php)
image/          Logo, hero photo, service photos, etc.
php/            Backend — handles the quick-booking popup and the Contact Us form

php/ CONTENTS
-------------
config.php    Your email settings — EDIT THIS FIRST
helpers.php   Shared validation, JSON reply, and email/SMS functions
book_now.php  Handles the quick-booking popup form
contact.php   Handles the Contact Us form
ping.php      Diagnostic-only test page — see "FIXING 'COULD NOT REACH
              THE SERVER'" below. Safe to delete once everything works.

NOTE ON THE FEEDBACK / TESTIMONIALS SECTION
--------------------------------------------
There is no feedback form and no "Give Your Feedback" button on the
site. The testimonials slider shows fixed demo reviews only (edit the
review cards directly inside index.html, in the CUSTOMER FEEDBACK
SECTION, to change them).

NOTE ON THE CONTACT FORM "SERVICE REQUIRED" FIELD
----------------------------------------------------
This is now a checkbox list, not a single dropdown — visitors can
select more than one service (e.g. "Oil Change" + "Tyre Service").
All selected services are combined into one comma-separated line in
the email the owner receives.

NOTE ON DATA STORAGE
---------------------
This site does NOT use a database. Nothing is saved on the server.
When someone submits the quick-booking popup or the Contact Us form,
the details are emailed straight to OWNER_EMAIL in php/config.php —
that email is the only record of the submission, so keep an eye on
that inbox.

HOW TO GO LIVE ON HOSTINGER
-----------------------------
1. Upload the entire contents of this folder (not the folder itself)
   to public_html in Hostinger's File Manager, or via FTP — this will
   NOT work by double-clicking index.html on your computer, it needs
   to run on a PHP server. Make sure the php/ subfolder (with its
   contents) ends up at public_html/php/, alongside index.html.
2. Open php/config.php and check:
     - OWNER_EMAIL          — already set to masterbykeservice@gmail.com;
                               change it if bookings/messages should go
                               to a different inbox.
     - MAIL_FROM_ADDRESS     — already set to no-reply@masterbykeservice.com.
                               In Hostinger hPanel -> Emails, create this
                               mailbox (or any address on your domain) so
                               outgoing mail isn't blocked or marked spam.
3. Point your domain (masterbykeservice.com) at the Hostinger hosting
   account in hPanel if you haven't already (Domains -> point to
   hosting / update nameservers).
4. Test each form once live:
     - Quick "Book Now" popup -> should email the owner
     - Contact Us form        -> should email the owner with every field
5. Add your real photos into image/ using the exact filenames already
   referenced in index.html (or update the src= paths to match your
   files).

FIXING "COULD NOT REACH THE SERVER"
--------------------------------------
If the booking popup or the Contact form shows "Could not reach the
server. Please check your connection and try again, or call us
directly." on every submit, PHP is not running correctly at the path
the site is calling — the PHP code itself is not the problem. To
confirm and fix it:

1. Visit this URL directly in a browser, on the actual live site:
       https://masterbykeservice.com/php/ping.php
   You should see exactly this JSON text on the page:
       {"success":true,"message":"PHP is running correctly on this
       server.", ...}

   - If you see a 404 "Not Found" page instead: the php/ folder was
     not uploaded, or was uploaded to the wrong location. It must sit
     at public_html/php/ next to index.html. Linux hosting is also
     case-sensitive — "php/book_now.php" must match exactly, not
     "PHP/Book_Now.php".
   - If the page downloads a file, or shows the raw PHP source code
     as plain text: PHP is not enabled for this domain/path in
     Hostinger. Check hPanel -> Advanced -> PHP Configuration, and
     confirm the domain is pointed at a PHP-enabled hosting plan (not
     a static-only or "coming soon" placeholder page).
   - If you see a blank white page: open hPanel -> Advanced -> Error
     Log Viewer (or Files -> error_log in public_html) to see the
     exact PHP error, and share that if you need further help.

2. Once php/ping.php returns the success JSON above, the booking and
   contact forms will work too — they run the exact same PHP setup.

3. For any remaining case, open the site in Chrome, press F12
   (DevTools) -> Console tab, then submit a form. The console will
   log the exact server response or network error behind the generic
   message shown to visitors — this is the fastest way to pinpoint
   the exact cause.

4. Delete php/ping.php once everything is confirmed working — it's a
   diagnostic-only file, not used by the website itself.

IMPORTANT — SMS TO 8688287636
------------------------------
mail() sends EMAIL only. No free method can text an actual phone number.
The owner gets a full email notification instead (which does the same job —
they see who booked/wrote in and can call or WhatsApp back immediately).

If you specifically want a real SMS/WhatsApp alert on 8688287636 too, sign
up with a paid gateway (Fast2SMS, MSG91, Twilio, Gupshup, etc.), then in
php/config.php set SMS_ENABLED to true and fill in SMS_API_URL / SMS_API_KEY.
notifyOwnerBySms() in helpers.php is already wired to fire the moment those
are filled in — just match the request format to your provider's docs.
