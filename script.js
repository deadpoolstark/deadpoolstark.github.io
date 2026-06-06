var resumeData = {
    about: '<h2>Vayush Vasireddy</h2>' +
        '<p>Email: <a href="mailto:vasireddyvayush2004@gmail.com">vasireddyvayush2004@gmail.com</a></p>' +
        '<p>LinkedIn: <a href="https://linkedin.com/in/vayush-vasireddy" target="_blank">linkedin.com/in/vayush-vasireddy</a></p>' +
        '<p>GitHub: <a href="https://github.com/deadpoolstark" target="_blank">github.com/deadpoolstark</a></p>' +
        '<br>' +
        '<p>I am a passionate developer with experience in full-stack web development, Python automation, and creating robust backend systems.</p>',

    education: '<h2>Education</h2>' +
        '<h3>RMK College of Engineering and Technology, Tamil Nadu</h3>' +
        '<div class="job-meta">Bachelor of Engineering in Computer Science | Aug 2021 – Jul 2026</div>' +
        '<h3>Sri Chaitanya, Hyderabad, Telangana</h3>' +
        '<div class="job-meta">Senior Secondary Education: Mathematics, Physics, Chemistry | Aug 2019 – Jul 2021</div>' +
        '<h3>Jubilee Hills Public School</h3>' +
        '<div class="job-meta">Primary and Secondary Education | May 2019</div>' +
        '<h3>Certifications</h3>' +
        '<ul><li>CompTIA Security+ Certification (In Progress)</li></ul>',

    experience: '<h2>Experience</h2>' +
        '<h3>Lead Developer Intern | projectkaapi.com</h3>' +
        '<div class="job-meta">Hyderabad, Telangana | Jan 2025 – Present</div>' +
        '<ul>' +
        '<li>Built and fully customized a responsive Shopify storefront for a specialty coffee brand.</li>' +
        '<li>Developed and deployed a custom POS system for a small cafe inside IIIT Hyderabad.</li>' +
        '<li>Authored UI components using Liquid, HTML/CSS, and JavaScript; configured Shopify apps for subscriptions and faceted product filtering.</li>' +
        '</ul>' +
        '<h3>Web Developer | NeighbourhoodMinds.in</h3>' +
        '<div class="job-meta">Hyderabad, Telangana | Jun 2025 – Jul 2025</div>' +
        '<ul>' +
        '<li>Contributed to a mental health awareness platform built in Framer.</li>' +
        '<li>Resolved responsiveness issues across device breakpoints and improved page load performance.</li>' +
        '<li>Collaborated on UI/UX enhancements; shipped design improvements in a tight two-month engagement.</li>' +
        '</ul>' +
        '<h3>Python Junior Developer | FirstPay eCommerce</h3>' +
        '<div class="job-meta">Hyderabad, Telangana | Oct 2023 – Jun 2025</div>' +
        '<ul>' +
        '<li>Built and maintained internal Python tooling and backend features for a fintech/eCommerce product over a ~20-month tenure.</li>' +
        '<li>Debugged recurring application issues with cross-team collaboration; improved system stability through targeted fixes.</li>' +
        '<li>Applied foundational security practices and participated actively in code reviews.</li>' +
        '</ul>' +
        '<h3>Social Media Intern | Express, Don\'t Suppress</h3>' +
        '<div class="job-meta">Remote | May 2021 – Jul 2021</div>' +
        '<ul>' +
        '<li>Managed multi-platform content and tracked campaign engagement; coordinated with influencers on promotional campaigns.</li>' +
        '</ul>',

    projects: '<h2>Projects</h2>' +
        '<h3>Self-Hosted POS System <a href="https://github.com/deadpoolstark/Open-Source-Pos-System" target="_blank">[GitHub]</a></h3>' +
        '<div class="job-meta">Python, Firebase, NPM</div>' +
        '<ul>' +
        '<li>Developed an open-source, self-hosted POS system designed for small cafes.</li>' +
        '<li>Built inventory tracking and billing workflows on top of Firebase for real-time sync across devices.</li>' +
        '<li>Packaged and distributed via NPM for easy self-deployment.</li>' +
        '</ul>' +
        '<h3>Court Data Scraper Pipelines</h3>' +
        '<div class="job-meta">Python, BeautifulSoup, Requests, OpenPyXL</div>' +
        '<ul>' +
        '<li>Built automated scraper pipelines for 4 Indian tribunals (CESTAT, NGT, NCLT, NCLAT) to extract daily cause list data.</li>' +
        '<li>Handled CSRF tokens, session management, and multipart PDF downloads with async job tracking.</li>' +
        '<li>Designed a unified single-file pipeline architecture with dry-run toggles and Excel/JSON local output.</li>' +
        '</ul>' +
        '<h3>YouTube Stats Scraper <a href="https://github.com/deadpoolstark/Youtube-Analytics-Downloader" target="_blank">[GitHub]</a></h3>' +
        '<div class="job-meta">Python, Flask, Google Cloud, HTML, CSS</div>' +
        '<ul>' +
        '<li>Built a Flask web app that pulls channel and video analytics via the YouTube Data API v3.</li>' +
        '<li>Integrated Google Cloud services for API key management, quota handling, and app deployment.</li>' +
        '<li>Structured the backend to handle paginated API responses and aggregate metrics across multiple videos/channels.</li>' +
        '</ul>',

    skills: '<h2>Technical Skills</h2>' +
        '<ul>' +
        '<li><strong>Languages:</strong> JavaScript, Python, SQL, HTML/CSS</li>' +
        '<li><strong>Frameworks:</strong> Flask</li>' +
        '<li><strong>Developer Tools:</strong> Git, Docker, Google Cloud Platform, VS Code, Angry IP Scanner</li>' +
        '<li><strong>Libraries:</strong> Pandas, NumPy, Matplotlib</li>' +
        '</ul>'
};

// --- Global window state ---
var openWindows = {};   // target -> window DOM element
var topZ = 100;         // global z-index counter
var windowOffset = 0;   // stagger offset so windows don't stack exactly

document.addEventListener('DOMContentLoaded', function () {

    // --- Boot Sequence ---
    var bootScreen = document.getElementById('boot-screen');
    var bootStatus = document.getElementById('boot-status');

    function runBoot() {
        bootScreen.style.transition = 'opacity 0.6s ease';
        setTimeout(function () { bootStatus.textContent = 'Loading kernel modules... OK'; }, 900);
        setTimeout(function () { bootStatus.textContent = 'Mounting file systems... OK'; }, 1600);
        setTimeout(function () { bootStatus.textContent = 'Starting GUI server... OK'; }, 2300);
        setTimeout(function () {
            bootScreen.style.opacity = '0';
            setTimeout(function () {
                bootScreen.style.display = 'none';
                sessionStorage.setItem('hasBooted', 'true');
                initOS();
            }, 700);
        }, 3200);
    }

    if (!sessionStorage.getItem('hasBooted')) {
        runBoot();
    } else {
        bootScreen.style.display = 'none';
        initOS();
    }

    // ----------------------------------------------------------------
    function initOS() {

        // Clock
        function updateClock() {
            var now = new Date();
            var hours = now.getHours();
            var minutes = now.getMinutes();
            var ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12 || 12;
            minutes = minutes < 10 ? '0' + minutes : minutes;
            document.getElementById('clock').textContent = hours + ':' + minutes + ' ' + ampm;
        }
        setInterval(updateClock, 1000);
        updateClock();

        // --- Start Menu Dropdown ---
        var dropdownBtn = document.querySelector('.dropdown-btn');
        var dropdown = document.querySelector('.dropdown');

        dropdownBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            dropdown.classList.toggle('show');
        });
        document.addEventListener('click', function () {
            dropdown.classList.remove('show');
        });
        document.getElementById('menu-about').addEventListener('click', function (e) {
            e.preventDefault();
            dropdown.classList.remove('show');
            openWindow('about');
        });
        document.getElementById('menu-shutdown').addEventListener('click', function (e) {
            e.preventDefault();
            document.body.innerHTML = '<div style="background:#000;color:red;font-family:monospace;font-size:28px;padding:60px;text-align:center;text-shadow:0 0 10px red;height:100vh;display:flex;align-items:center;justify-content:center;">It is now safe to turn off your computer.</div>';
        });

        // --- Desktop Icon Clicks ---
        var icons = document.querySelectorAll('.desktop-icon');
        icons.forEach(function (icon) {
            icon.addEventListener('click', function () {
                openWindow(icon.dataset.target);
            });
        });

        // Open About by default
        setTimeout(function () {
            openWindow('about');
        }, 300);
    }

    // ----------------------------------------------------------------
    // Multi-window system
    // ----------------------------------------------------------------
    function bringToFront(winEl) {
        topZ++;
        winEl.style.zIndex = topZ;
    }

    function makeWindow(target) {
        var label = target.charAt(0).toUpperCase() + target.slice(1).replace('-', ' ');

        // Calculate staggered starting position
        var startX = Math.min(60 + windowOffset * 28, window.innerWidth - 670);
        var startY = Math.min(50 + windowOffset * 28, window.innerHeight - 540);
        windowOffset = (windowOffset + 1) % 8;

        // Build the window element
        var win = document.createElement('div');
        win.className = 'window';
        win.style.left = startX + 'px';
        win.style.top = startY + 'px';
        win.style.opacity = '0';
        win.style.transform = 'scale(0.95)';
        win.style.transition = 'opacity 0.2s ease, transform 0.2s ease';

        win.innerHTML =
            '<div class="window-header">' +
                '<button class="close-btn window-btn" title="Close"></button>' +
                '<div class="title-stripes"></div>' +
                '<span class="window-title">' + label + '</span>' +
                '<div class="title-stripes"></div>' +
                '<button class="min-btn window-btn" title="Minimize"></button>' +
                '<button class="max-btn window-btn" title="Maximize"></button>' +
            '</div>' +
            '<div class="window-content-wrapper">' +
                '<div class="window-content">' +
                    (resumeData[target] || '<p>No content.</p>') +
                '</div>' +
            '</div>';

        document.querySelector('.desktop').appendChild(win);

        // Animate in
        requestAnimationFrame(function () {
            win.style.opacity = '1';
            win.style.transform = 'scale(1)';
        });

        bringToFront(win);

        // GSAP entry animation on content items
        if (typeof gsap !== 'undefined') {
            var items = win.querySelectorAll('p, li, h3');
            gsap.fromTo(items,
                { opacity: 0, y: 10 },
                { opacity: 1, y: 0, duration: 0.25, stagger: 0.04, ease: 'power2.out', delay: 0.15 }
            );
        }

        // Click anywhere on window -> bring to front
        win.addEventListener('mousedown', function () {
            bringToFront(win);
        });

        // --- Dragging ---
        var header = win.querySelector('.window-header');
        var closeBtn = win.querySelector('.close-btn');
        var minBtn = win.querySelector('.min-btn');
        var maxBtn = win.querySelector('.max-btn');
        var isDragging = false;
        var dragOffsetX, dragOffsetY;
        var savedPos = null; // for maximize/restore

        header.addEventListener('mousedown', function (e) {
            if (e.target === closeBtn || e.target === minBtn || e.target === maxBtn) return;
            if (win.classList.contains('maximized')) return;
            isDragging = true;
            dragOffsetX = e.clientX - win.getBoundingClientRect().left;
            dragOffsetY = e.clientY - win.getBoundingClientRect().top;
        });

        document.addEventListener('mousemove', function (e) {
            if (!isDragging) return;
            var newX = e.clientX - dragOffsetX;
            var newY = e.clientY - dragOffsetY;
            newX = Math.max(0, Math.min(newX, window.innerWidth - win.offsetWidth));
            newY = Math.max(30, Math.min(newY, window.innerHeight - win.offsetHeight));
            win.style.left = newX + 'px';
            win.style.top = newY + 'px';
        });

        document.addEventListener('mouseup', function () {
            isDragging = false;
        });

        // Close
        closeBtn.addEventListener('click', function () {
            win.style.opacity = '0';
            win.style.transform = 'scale(0.93)';
            setTimeout(function () {
                win.remove();
                delete openWindows[target];
                // deselect icon
                var icon = document.querySelector('.desktop-icon[data-target="' + target + '"]');
                if (icon) icon.classList.remove('selected');
            }, 200);
        });

        // Minimize (hide the window but keep state)
        minBtn.addEventListener('click', function () {
            win.style.opacity = '0';
            win.style.pointerEvents = 'none';
            win.dataset.minimized = 'true';
            var icon = document.querySelector('.desktop-icon[data-target="' + target + '"]');
            if (icon) icon.classList.remove('selected');
        });

        // Maximize / Restore
        maxBtn.addEventListener('click', function () {
            if (win.classList.contains('maximized')) {
                win.classList.remove('maximized');
                if (savedPos) {
                    win.style.left = savedPos.left;
                    win.style.top = savedPos.top;
                    win.style.width = savedPos.width;
                    win.style.height = savedPos.height;
                }
            } else {
                savedPos = {
                    left: win.style.left,
                    top: win.style.top,
                    width: win.style.width,
                    height: win.style.height
                };
                win.classList.add('maximized');
            }
        });

        return win;
    }

    function openWindow(target) {
        // Mark icon as selected
        document.querySelectorAll('.desktop-icon').forEach(function (i) {
            if (i.dataset.target === target) {
                i.classList.add('selected');
            }
        });

        // If window already open, bring to front (or un-minimize)
        if (openWindows[target]) {
            var existing = openWindows[target];
            if (existing.dataset.minimized === 'true') {
                existing.style.opacity = '1';
                existing.style.pointerEvents = '';
                existing.dataset.minimized = 'false';
            }
            bringToFront(existing);
            return;
        }

        // Create a brand new window
        openWindows[target] = makeWindow(target);
    }
});
