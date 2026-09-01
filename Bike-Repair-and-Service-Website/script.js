// ==========================================================
// MOTORCYCLE GARAGE WEBSITE — MAIN SCRIPT
// Sections: Mobile Nav, Booking Popup, Phone Validation,
// Booking Form, Scroll Animations, Feedback Slider (static
// demo testimonials only), Contact Form, WhatsApp Button,
// Smooth Scrolling, Sticky Header
// ==========================================================

document.addEventListener('DOMContentLoaded', function () {

    // ==========================================
    // MOBILE NAVIGATION START
    // ==========================================
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function () {
            const isOpen = navMenu.classList.toggle('is-open');
            navToggle.classList.toggle('is-open', isOpen);
            navToggle.setAttribute('aria-expanded', String(isOpen));
        });

        // Close the mobile menu whenever a nav link is tapped
        navMenu.querySelectorAll('.navbar__link').forEach(function (link) {
            link.addEventListener('click', function () {
                navMenu.classList.remove('is-open');
                navToggle.classList.remove('is-open');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // Highlight the active nav link based on scroll position
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar__link');

    function updateActiveLink() {
        let current = '';
        sections.forEach(function (section) {
            const sectionTop = section.offsetTop - 160;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(function (link) {
            link.classList.toggle('is-active', link.dataset.section === current);
        });
    }

    window.addEventListener('scroll', updateActiveLink, { passive: true });
    updateActiveLink();
    // ==========================================
    // MOBILE NAVIGATION END
    // ==========================================


    // ==========================================
    // STICKY HEADER SHRINK EFFECT START
    // ==========================================
    const siteHeader = document.getElementById('siteHeader');
    const topbarEl = document.querySelector('.topbar');
    let lastScrollY = window.scrollY;

    // Keeps --header-height equal to the header's real rendered height
    // (topbar + whatever of header-main/header-ticker/navbar is
    // currently visible) instead of a hardcoded per-breakpoint number.
    // This is what the mobile dropdown menu uses to sit flush below the
    // header — measuring it live means adding/removing header content
    // (like the brands ticker) never leaves a gap or overlap.
    function syncHeaderHeightVar() {
        if (!siteHeader) return;
        const topbarHeight = topbarEl ? topbarEl.offsetHeight : 0;
        document.documentElement.style.setProperty('--header-height', (topbarHeight + siteHeader.offsetHeight) + 'px');
    }

    function handleHeaderShrink() {
        if (!siteHeader) return;
        const scrollY = window.scrollY;
        // Hysteresis: collapse only past 130px, and don't re-expand until
        // scrolled back up past 70px. A single shared threshold let the
        // header flicker open/closed while scroll position hovered right
        // at that line — most noticeable scrolling up slowly.
        if (scrollY > 130) {
            siteHeader.classList.add('is-scrolled');
        } else if (scrollY < 70) {
            siteHeader.classList.remove('is-scrolled');
        }
        lastScrollY = scrollY;
        syncHeaderHeightVar();
    }

    window.addEventListener('scroll', handleHeaderShrink, { passive: true });
    window.addEventListener('resize', syncHeaderHeightVar);
    handleHeaderShrink();
    // Header-main/ticker collapse with a 0.3s CSS transition, so the
    // measured height right after a scroll-triggered class toggle can
    // still be mid-animation. Re-measure once it's finished settling.
    window.setTimeout(syncHeaderHeightVar, 350);
    // ==========================================
    // STICKY HEADER SHRINK EFFECT END
    // ==========================================


    // ==========================================
    // RETURNING VISITOR AUTOFILL (COOKIES) START
    // ==========================================
    // A website can't reach into a visitor's phone/email app and pull their
    // real details — no legitimate site can do that. What this does instead:
    // remember what a visitor typed into the Contact form (and the quick
    // booking phone field) in a cookie on THEIR OWN browser, then silently
    // pre-fill those same fields next time they land on the page. Nothing
    // is sent anywhere, and it only ever contains what they themselves
    // typed in previously.
    const VISITOR_COOKIE_DAYS = 180;

    function setVisitorCookie(name, value) {
        if (!value) return;
        const expires = new Date(Date.now() + VISITOR_COOKIE_DAYS * 24 * 60 * 60 * 1000).toUTCString();
        document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/; SameSite=Lax';
    }

    function getVisitorCookie(name) {
        const match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
        return match ? decodeURIComponent(match[1]) : '';
    }

    function prefillFromCookies() {
        const savedName = getVisitorCookie('garageVisitorName');
        const savedPhone = getVisitorCookie('garageVisitorPhone');
        const savedEmail = getVisitorCookie('garageVisitorEmail');
        const savedBike = getVisitorCookie('garageVisitorBike');

        const popupPhoneInput = document.getElementById('popupPhone');
        const cFullNameInput = document.getElementById('cFullName');
        const cPhoneInput = document.getElementById('cPhone');
        const cEmailInput = document.getElementById('cEmail');
        const cBikeModelInput = document.getElementById('cBikeModel');

        if (popupPhoneInput && savedPhone) popupPhoneInput.value = savedPhone;
        if (cFullNameInput && savedName) cFullNameInput.value = savedName;
        if (cPhoneInput && savedPhone) cPhoneInput.value = savedPhone;
        if (cEmailInput && savedEmail) cEmailInput.value = savedEmail;
        if (cBikeModelInput && savedBike) cBikeModelInput.value = savedBike;
    }

    prefillFromCookies();
    // ==========================================
    // RETURNING VISITOR AUTOFILL (COOKIES) END
    // ==========================================


    // ==========================================
    // BACKEND HELPER START
    // ==========================================
    // Every PHP endpoint under /php lives alongside index.html and always
    // replies with JSON like { success: true/false, message: "..." }.
    // This wraps the fetch + JSON parsing + network-failure handling so
    // each form handler below only has to deal with the result.
    function postToServer(endpoint, fields) {
        const formData = new FormData();
        Object.keys(fields).forEach(function (key) {
            formData.append(key, fields[key]);
        });

        return fetch(endpoint, { method: 'POST', body: formData })
            .then(function (response) {
                // Read the raw text first instead of calling response.json()
                // directly. If the server returned something that ISN'T
                // valid JSON (a PHP error page, a 404 HTML page, a blank
                // page because PHP isn't executing on this host, etc.),
                // response.json() would just throw a generic error with no
                // useful detail. Reading as text first lets us log exactly
                // what came back, which is the fastest way to diagnose a
                // "Could not reach the server" report.
                return response.text().then(function (rawText) {
                    try {
                        return JSON.parse(rawText);
                    } catch (parseError) {
                        console.error(
                            'postToServer: ' + endpoint + ' returned a non-JSON response (HTTP ' +
                            response.status + '). This usually means the php/ folder was not ' +
                            'uploaded correctly, or PHP is not executing on this host/path. ' +
                            'Raw response was:', rawText
                        );
                        throw parseError;
                    }
                });
            })
            .catch(function (error) {
                console.error('postToServer: request to ' + endpoint + ' failed.', error);
                return {
                    success: false,
                    message: 'Could not reach the server. Please check your connection and try again, or call us directly.'
                };
            });
    }
    // ==========================================
    // BACKEND HELPER END
    // ==========================================


    // ==========================================
    // BOOKING POPUP FUNCTIONALITY START
    // ==========================================
    const popupOverlay = document.getElementById('popupOverlay');
    const popupClose = document.getElementById('popupClose');
    const bookingForm = document.getElementById('bookingForm');
    const popupFormMessage = document.getElementById('popupFormMessage');

    function openPopup(overlay) {
        if (!overlay) return;
        overlay.classList.add('is-visible');
        document.body.style.overflow = 'hidden';
    }

    function closePopup(overlay) {
        if (!overlay) return;
        overlay.classList.remove('is-visible');
        document.body.style.overflow = '';
    }

    // Automatically show the booking popup shortly after the page loads
    window.setTimeout(function () {
        openPopup(popupOverlay);
    }, 1200);

    if (popupClose) {
        popupClose.addEventListener('click', function () {
            closePopup(popupOverlay);
        });
    }

    // Close popup when clicking outside the popup card
    if (popupOverlay) {
        popupOverlay.addEventListener('click', function (event) {
            if (event.target === popupOverlay) {
                closePopup(popupOverlay);
            }
        });
    }

    // Close any open popup with the Escape key (keyboard accessibility)
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            document.querySelectorAll('.popup-overlay.is-visible').forEach(function (overlay) {
                closePopup(overlay);
            });
        }
    });

    // Every "Book a Service" / "Book A Service" link points to "#booking",
    // but there is no element with that id on the page — so clicking them
    // used to do nothing at all. These links should open the booking
    // popup instead, so hook them up here and stop the browser from
    // trying (and failing) to scroll to a missing anchor.
    document.querySelectorAll('a[href="#booking"]').forEach(function (trigger) {
        trigger.addEventListener('click', function (event) {
            event.preventDefault();
            openPopup(popupOverlay);
        });
    });
    // ==========================================
    // BOOKING POPUP FUNCTIONALITY END
    // ==========================================


    // ==========================================
    // PHONE VALIDATION START
    // ==========================================
    // A valid Indian mobile number: exactly 10 digits, starting 6-9
    function isValidPhoneNumber(value) {
        return /^[6-9]\d{9}$/.test(value.trim());
    }
    // ==========================================
    // PHONE VALIDATION END
    // ==========================================


    // ==========================================
    // BOOKING FORM START
    // Sends the quick-booking phone number to php/book_now.php, which
    // saves it and emails the garage owner (masterbykeservice@gmail.com)
    // with the customer's number so they can call/WhatsApp them back.
    // ==========================================
    if (bookingForm) {
        bookingForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const phoneInput = document.getElementById('popupPhone');
            const phoneValue = phoneInput ? phoneInput.value.trim() : '';

            if (!isValidPhoneNumber(phoneValue)) {
                popupFormMessage.textContent = 'Please enter a valid 10-digit mobile number.';
                popupFormMessage.className = 'form-message is-error';
                phoneInput.focus();
                return;
            }

            const submitBtn = bookingForm.querySelector('button[type="submit"]');
            if (submitBtn) submitBtn.disabled = true;
            popupFormMessage.textContent = 'Sending your booking...';
            popupFormMessage.className = 'form-message';

            postToServer('php/book_now.php', {
                phone: phoneValue,
                service: 'Quick booking (popup form)'
            }).then(function (data) {
                if (submitBtn) submitBtn.disabled = false;
                popupFormMessage.textContent = data.message;
                popupFormMessage.className = 'form-message ' + (data.success ? 'is-success' : 'is-error');

                if (data.success) {
                    setVisitorCookie('garageVisitorPhone', phoneValue);
                    bookingForm.reset();
                    window.setTimeout(function () {
                        closePopup(popupOverlay);
                        popupFormMessage.textContent = '';
                        popupFormMessage.className = 'form-message';
                    }, 2200);
                }
            });
        });
    }
    // ==========================================
    // BOOKING FORM END
    // ==========================================


    // ==========================================
    // SCROLL ANIMATIONS START
    // ==========================================
    const animatedElements = document.querySelectorAll('[data-animate]');

    if ('IntersectionObserver' in window && animatedElements.length) {
        const revealObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    const delay = entry.target.dataset.delay || 0;
                    entry.target.style.setProperty('--reveal-delay', (delay / 1000) + 's');
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -60px 0px'
        });

        animatedElements.forEach(function (element) {
            revealObserver.observe(element);
        });
    } else {
        // Fallback: if IntersectionObserver isn't supported, just show everything
        animatedElements.forEach(function (element) {
            element.classList.add('is-visible');
        });
    }
    // ==========================================
    // SCROLL ANIMATIONS END
    // ==========================================


    // ==========================================
    // FEEDBACK SLIDER START
    // Displays the fixed demo review cards already in the HTML as an
    // auto-playing / swipeable slider. There is no feedback form and
    // no server call here — testimonials are static content only.
    // ==========================================
    const sliderTrack = document.getElementById('feedbackTrack');
    const sliderDotsWrap = document.getElementById('sliderDots');
    const sliderPrev = document.getElementById('sliderPrev');
    const sliderNext = document.getElementById('sliderNext');

    let slides = [];
    let dots = [];
    let currentSlide = 0;
    let autoplayTimer = null;

    function rebuildSliderDots() {
        if (!sliderDotsWrap) return;
        sliderDotsWrap.innerHTML = '';
        slides = Array.from(sliderTrack.children);

        slides.forEach(function (_, index) {
            const dot = document.createElement('button');
            dot.classList.add('dot');
            dot.setAttribute('aria-label', 'Go to review ' + (index + 1));
            if (index === currentSlide) dot.classList.add('is-active');
            dot.addEventListener('click', function () {
                goToSlide(index);
                pauseAutoplay();
            });
            sliderDotsWrap.appendChild(dot);
        });

        dots = Array.from(sliderDotsWrap.children);
    }

    function goToSlide(index) {
        if (!slides.length) return;
        currentSlide = (index + slides.length) % slides.length;
        sliderTrack.style.transform = 'translateX(-' + (currentSlide * 100) + '%)';
        dots.forEach(function (dot, i) {
            dot.classList.toggle('is-active', i === currentSlide);
        });
    }

    function startAutoplay() {
        pauseAutoplay();
        autoplayTimer = window.setInterval(function () {
            goToSlide(currentSlide + 1);
        }, 12000);
    }

    function pauseAutoplay() {
        if (autoplayTimer) {
            window.clearInterval(autoplayTimer);
            autoplayTimer = null;
        }
    }

    if (sliderTrack) {
        rebuildSliderDots();

        if (sliderNext) {
            sliderNext.addEventListener('click', function () {
                goToSlide(currentSlide + 1);
                pauseAutoplay();
            });
        }

        if (sliderPrev) {
            sliderPrev.addEventListener('click', function () {
                goToSlide(currentSlide - 1);
                pauseAutoplay();
            });
        }

        // Pause autoplay whenever the user interacts with the slider
        [sliderTrack, sliderDotsWrap].forEach(function (el) {
            if (!el) return;
            el.addEventListener('mouseenter', pauseAutoplay);
            el.addEventListener('touchstart', pauseAutoplay, { passive: true });
        });

        startAutoplay();
    }
    // ==========================================
    // FEEDBACK SLIDER END
    // ==========================================
    // Feedback is shown as static demo testimonials only — there is no
    // feedback submission form and no feedback API call.


    // ==========================================
    // CONTACT FORM START
    // Sends every field to php/contact.php, which saves it and emails the
    // garage owner (masterbykeservice@gmail.com) the full name, phone,
    // email, bike model, service required and message.
    // ==========================================
    const contactForm = document.getElementById('contactForm');
    const contactFormMessage = document.getElementById('contactFormMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const fullName = document.getElementById('cFullName').value.trim();
            const phone = document.getElementById('cPhone').value.trim();
            const email = document.getElementById('cEmail').value.trim();
            const bikeModel = document.getElementById('cBikeModel').value.trim();
            const serviceCheckboxes = document.querySelectorAll('input[name="cServiceRequired"]:checked');
            const servicesRequired = Array.from(serviceCheckboxes).map(function (box) { return box.value; });
            const message = document.getElementById('cMessage').value.trim();
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!fullName || !phone || !email || !bikeModel) {
                contactFormMessage.textContent = 'Please fill in all required fields.';
                contactFormMessage.className = 'form-message is-error';
                return;
            }

            if (servicesRequired.length === 0) {
                contactFormMessage.textContent = 'Please select at least one service.';
                contactFormMessage.className = 'form-message is-error';
                return;
            }

            if (!isValidPhoneNumber(phone)) {
                contactFormMessage.textContent = 'Please enter a valid 10-digit mobile number.';
                contactFormMessage.className = 'form-message is-error';
                return;
            }

            if (!emailPattern.test(email)) {
                contactFormMessage.textContent = 'Please enter a valid email address.';
                contactFormMessage.className = 'form-message is-error';
                return;
            }

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            if (submitBtn) submitBtn.disabled = true;
            contactFormMessage.textContent = 'Sending your message...';
            contactFormMessage.className = 'form-message';

            postToServer('php/contact.php', {
                fullName: fullName,
                phone: phone,
                email: email,
                bikeModel: bikeModel,
                service: servicesRequired.join(', '),
                message: message
            }).then(function (data) {
                if (submitBtn) submitBtn.disabled = false;
                contactFormMessage.textContent = data.message;
                contactFormMessage.className = 'form-message ' + (data.success ? 'is-success' : 'is-error');

                if (data.success) {
                    setVisitorCookie('garageVisitorName', fullName);
                    setVisitorCookie('garageVisitorPhone', phone);
                    setVisitorCookie('garageVisitorEmail', email);
                    setVisitorCookie('garageVisitorBike', bikeModel);
                    contactForm.reset();
                }
            });
        });
    }
    // ==========================================
    // CONTACT FORM END
    // ==========================================


    // ==========================================
    // WHATSAPP BUTTON START
    // ==========================================
    // Put the garage's WhatsApp number here (with country code, no + or spaces)
    const whatsappNumber = '918688287636';
    const whatsappMessage = 'Hi! I would like to book a motorcycle service.';
    const whatsappBtn = document.getElementById('whatsappBtn');

    if (whatsappBtn) {
        const encodedMessage = encodeURIComponent(whatsappMessage);
        whatsappBtn.setAttribute('href', 'https://wa.me/' + whatsappNumber + '?text=' + encodedMessage);
    }
    // ==========================================
    // WHATSAPP BUTTON END
    // ==========================================


    // ==========================================
    // GOOGLE MAPS DIRECTIONS BUTTON START
    // ==========================================
    // Replace this placeholder with your real Google Maps share link
    const googleMapsUrl = 'YOUR_GOOGLE_MAPS_URL';
    const directionsBtn = document.getElementById('directionsBtn');

    if (directionsBtn) {
        directionsBtn.setAttribute('href', googleMapsUrl);
        directionsBtn.setAttribute('target', '_blank');
        directionsBtn.setAttribute('rel', 'noopener noreferrer');
    }
    // ==========================================
    // GOOGLE MAPS DIRECTIONS BUTTON END
    // ==========================================


    // ==========================================
    // SMOOTH SCROLLING START
    // ==========================================
    // Handles all in-page anchor links (nav, hero buttons, footer links)
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (event) {
            const targetId = anchor.getAttribute('href');
            if (targetId.length <= 1) return; // ignore bare "#" links
            if (targetId === '#booking') return; // handled by the booking popup trigger above

            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                event.preventDefault();
                targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
    // ==========================================
    // SMOOTH SCROLLING END
    // ==========================================

});