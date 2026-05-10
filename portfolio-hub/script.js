/* script.js */

// --- 1. مصفوفة مشاريع HTML & CSS (ترقيم مستقل 01-13) ---
const myWork = [
    { id: "01", name: "HTML Code Formatting", path: "https://rajyabdullah-spec.github.io/matrix-master-exercises/Assignment/Fix-Indentation.html", github: "https://github.com/rajyabdullah-spec/matrix-master-exercises/tree/main/Assignment", desc: "Improving HTML readability by organizing code structure and fixing indentation." },
    { id: "02", name: "HTML Code Validation", path: "https://rajyabdullah-spec.github.io/matrix-master-exercises/Assignment/Code-Validation.html", github: "https://github.com/rajyabdullah-spec/matrix-master-exercises/tree/main/Assignment", desc: "Identifying and fixing syntax errors to ensure W3C web standards compliance." },
    { id: "03", name: "Personal Website Foundations", path: "https://rajyabdullah-spec.github.io/matrix-master-exercises/Assignment/Your-first-website.html", github: "https://github.com/rajyabdullah-spec/matrix-master-exercises/tree/main/Assignment", desc: "Building a personal website from scratch using essential semantic HTML elements." },
    { id: "04", name: "Layout Repair & Box Model", path: "https://rajyabdullah-spec.github.io/matrix-master-exercises/Assignment/The Evil Hacker/index.html", github: "https://github.com/rajyabdullah-spec/matrix-master-exercises/tree/main/Assignment/The%20Evil%20Hacker", desc: "Reconstructing layouts using CSS Box Model and Display properties without floats." },
    { id: "05", name: "Classic Google UI Clone", path: "https://rajyabdullah-spec.github.io/matrix-master-exercises/Assignment/Google/index.html", github: "https://github.com/rajyabdullah-spec/matrix-master-exercises/tree/main/Assignment/Google", desc: "Recreating the iconic 1998 Google interface with precise layout replication." },
    { id: "06", name: "Twitter Login UI Redesign", path: "https://rajyabdullah-spec.github.io/matrix-master-exercises/Assignment/Twitter/index.html", github: "https://github.com/rajyabdullah-spec/matrix-master-exercises/tree/main/Assignment/Twitter", desc: "Developing a modern, responsive login page focusing on UI and logo integration." },
    { id: "07", name: "Legacy Airbnb UI Clone", path: "https://rajyabdullah-spec.github.io/matrix-master-exercises/Assignment/AirBNB/index.html", github: "https://github.com/rajyabdullah-spec/matrix-master-exercises/tree/main/Assignment/AirBNB", desc: "Recreating the 2009 Airbnb landing page using fixed-width layout techniques." },
    { id: "08", name: "Craigslist Legacy Layout", path: "https://rajyabdullah-spec.github.io/matrix-master-exercises/Assignment/Craigslist/index.html", github: "https://github.com/rajyabdullah-spec/matrix-master-exercises/tree/main/Assignment/Craigslist", desc: "Building a multi-column layout with manual content organization." },
    { id: "09", name: "Front-End Demo Challenge", path: "https://rajyabdullah-spec.github.io/matrix-master-exercises/Demo-Challenge-paypal2002/index.html", github: "https://github.com/rajyabdullah-spec/matrix-master-exercises/tree/main/Demo-Challenge-paypal2002", desc: "Recreating the original 2001 PayPal landing page with clean HTML and CSS." },
    { id: "10", name: "Legacy LinkedIn Login UI", path: "https://rajyabdullah-spec.github.io/matrix-master-exercises/Front-End-Challenge-Linkedin/index.html", github: "https://github.com/rajyabdullah-spec/matrix-master-exercises/tree/main/Front-End-Challenge-Linkedin", desc: "Replicating the 2008 LinkedIn login page focusing on clean code structure." },
    { id: "11", name: "Materialize CSS Design", path: "https://rajyabdullah-spec.github.io/matrix-master-exercises/Assignment/The Materialize/index.html", github: "https://github.com/rajyabdullah-spec/matrix-master-exercises/tree/main/Assignment/The%20Materialize", desc: "Replicating professional UI styling using Materialize CSS standards." },
    { id: "12", name: "Bootstrap Personal Site", path: "https://rajyabdullah-spec.github.io/matrix-master-exercises/Assignment/Time-to-Bootstrap/index.html", github: "https://github.com/rajyabdullah-spec/matrix-master-exercises/tree/main/Assignment/Time-to-Bootstrap", desc: "Modernizing a site using Bootstrap's grid system for mobile-first design." },
    { id: "13", name: "Framework-Powered Redesign", path: "https://rajyabdullah-spec.github.io/matrix-master-exercises/Assignment/Your-first-website-with-Framework/index.html", github: "https://github.com/rajyabdullah-spec/matrix-master-exercises/tree/main/Assignment/Your-first-website-with-Framework", desc: "Applying advanced Bootstrap components for a professional, responsive layout." }
];

// --- 2. مصفوفة تمارين JavaScript (ترقيم مستقل يبدأ من 01) ---
const jsExercises = [
    { id: "01", name: "Variables", desc: "Mastering data types, let, const, and naming conventions.", path: "../vanilla-js-exercises/01-Variables/index.html", github: "https://github.com/rajyabdullah-spec/matrix-master-exercises/tree/main/vanilla-js-exercises/01-Variables" },
    { id: "02", name: "Functions", desc: "Creating and invoking reusable logic blocks with parameters.", path: "../vanilla-js-exercises/02-Functions/index.html", github: "https://github.com/rajyabdullah-spec/matrix-master-exercises/tree/main/vanilla-js-exercises/02-Functions" },
    { id: "03", name: "Arrays & Loops", desc: "Mastering data collections and iteration using For loops.", path: "../vanilla-js-exercises/03-Arrays-Loops/index.html", github: "https://github.com/rajyabdullah-spec/matrix-master-exercises/tree/main/vanilla-js-exercises/03-Arrays-Loops" },
    { id: "04", name: "Object Literals", desc: "Storing and accessing data using structured JavaScript objects.", path: "../vanilla-js-exercises/04-Objects/index.html", github: "https://github.com/rajyabdullah-spec/matrix-master-exercises/tree/main/vanilla-js-exercises/04-Objects" },
    { id: "05", name: "Objects as Classes", desc: "Introduction to OOP, constructors, and class methods.", path: "../vanilla-js-exercises/05-Objects-as-Classes/index.html", github: "https://github.com/rajyabdullah-spec/matrix-master-exercises/tree/main/vanilla-js-exercises/05-Objects-as-Classes" },
    { id: "06", name: "Window Object", desc: "Using browser APIs like alert, prompt, and window methods.", path: "../vanilla-js-exercises/06-Window-Object/index.html", github: "https://github.com/rajyabdullah-spec/matrix-master-exercises/tree/main/vanilla-js-exercises/06-Window-Object" },
    { id: "07", name: "DOM Manipulation", desc: "Dynamic interaction: Events, Selection, and live UI updates.", path: "../vanilla-js-exercises/07-DOM-Manipulation/index.html", github: "https://github.com/rajyabdullah-spec/matrix-master-exercises/tree/main/vanilla-js-exercises/07-DOM-Manipulation" }
];

const grid = document.getElementById('projects-grid');
const btnHtml = document.getElementById('show-html');
const btnJs = document.getElementById('show-js');

function render(type) {
    grid.style.opacity = '0';
    
    setTimeout(() => {
        grid.innerHTML = '';
        const currentList = (type === 'html') ? myWork : jsExercises;

        currentList.forEach(p => {
            grid.innerHTML += `
            <div class="col-md-6 col-lg-4">
                <div class="project-card">
                    <span class="task-tag">${type === 'js' ? 'Logic' : 'Mission'} #${p.id}</span>
                    <h3 class="card-title">${p.name}</h3>
                    <p class="card-desc">${p.desc}</p>
                    <div class="d-flex gap-2 mt-auto">
                        <a href="${p.path}" target="_blank" class="btn-launch flex-grow-1">Launch Demo</a>
                        <a href="${p.github}" target="_blank" class="btn btn-outline-dark rounded-3 d-flex align-items-center justify-content-center px-3" title="View Code">
                            <svg xmlns="http://www.w3.org/2001/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>`;
        });

        // المهمات المشفرة تبدأ من بعد آخر تمرين جافا سكريبت (رقم 08)
        if (type === 'js') {
            for(let i = 8; i <= 25; i++) {
                grid.innerHTML += `
                <div class="col-md-6 col-lg-4">
                    <div class="project-card future-card">
                        <span class="task-tag" style="color: #64748b">Mission #${i.toString().padStart(2, '0')}</span>
                        <h3 class="card-title">Encrypted Lab</h3>
                        <p class="card-desc" style="color: #64748b">Content hidden until skills are unlocked.</p>
                        <button class="btn btn-outline-light disabled w-100 border-0 opacity-25">Locked Access</button>
                    </div>
                </div>`;
            }
        }
        grid.style.opacity = '1';
    }, 200);
}

// أزرار التحكم والتبديل
btnHtml.onclick = () => {
    btnHtml.classList.add('active');
    btnJs.classList.remove('active');
    render('html');
};

btnJs.onclick = () => {
    btnJs.classList.add('active');
    btnHtml.classList.remove('active');
    render('js');
};

// العرض الافتراضي عند فتح الصفحة
render('html');