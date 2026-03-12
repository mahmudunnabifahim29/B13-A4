//1. Tabs er State
function attachTabListeners() {
    const tabs = document.querySelectorAll(".tabs");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(btn => {
                btn.classList.remove("bg-blue-600", "text-white");
                btn.classList.add("text-neutral/50");
            });

            tab.classList.add("bg-blue-600", "text-white");
            tab.classList.remove("text-neutral/50");

            currentTab = tab.dataset.tab;

            renderJobs();
        });
    });
}

//2. Initial Jobs er gpt Data
const initialJobs = [
    {
        id: 1,
        companyName: "Grameenphone Ltd",
        position: "Software Engineer",
        location: "Dhaka, Bangladesh",
        type: "Full-time",
        salary: "৳50,000 - ৳70,000",
        description: "Develop and maintain web and mobile applications. Knowledge of JavaScript, React, and Node.js required.",
        status: "NOT APPLIED"
    },
    {
        id: 2,
        companyName: "BRAC IT Services",
        position: "Frontend Developer",
        location: "Dhaka, Bangladesh",
        type: "Full-time",
        salary: "৳45,000 - ৳65,000",
        description: "Build responsive frontend interfaces for NGO projects. Must have experience in HTML, CSS, and React.",
        status: "NOT APPLIED"
    },
    {
        id: 3,
        companyName: "bKash Limited",
        position: "Mobile App Developer",
        location: "Dhaka, Bangladesh",
        type: "Full-time",
        salary: "৳60,000 - ৳90,000",
        description: "Work on Android and iOS apps for mobile financial services. Experience with Flutter or React Native preferred.",
        status: "NOT APPLIED"
    },
    {
        id: 4,
        companyName: "Pathao Ltd",
        position: "Backend Engineer",
        location: "Dhaka, Bangladesh",
        type: "Full-time",
        salary: "৳55,000 - ৳85,000",
        description: "Design and implement scalable backend systems using Node.js or Python. Database experience required.",
        status: "NOT APPLIED"
    },
    {
        id: 5,
        companyName: "Shohoz Ltd",
        position: "Full Stack Developer",
        location: "Dhaka, Bangladesh",
        type: "Full-time",
        salary: "৳50,000 - ৳80,000",
        description: "Develop web platforms for ride-sharing and ticketing services. Proficiency in React and Node.js required.",
        status: "NOT APPLIED"
    },
    {
        id: 6,
        companyName: "REVE Systems",
        position: "Network Engineer",
        location: "Dhaka, Bangladesh",
        type: "Full-time",
        salary: "৳40,000 - ৳60,000",
        description: "Manage and maintain network infrastructure for enterprise clients. CCNA/CCNP certifications preferred.",
        status: "NOT APPLIED"
    },
    {
        id: 7,
        companyName: "DataSoft Systems Bangladesh",
        position: "QA Engineer",
        location: "Dhaka, Bangladesh",
        type: "Full-time",
        salary: "৳35,000 - ৳55,000",
        description: "Perform manual and automated testing of software products. Experience with Selenium or Postman is a plus.",
        status: "NOT APPLIED"
    },
    {
        id: 8,
        companyName: "Samsung R&D Bangladesh",
        position: "Embedded Software Engineer",
        location: "Dhaka, Bangladesh",
        type: "Full-time",
        salary: "৳60,000 - ৳100,000",
        description: "Develop software for embedded systems and IoT devices. Strong knowledge of C/C++ and Linux required.",
        status: "NOT APPLIED"
    },
    {
        id: 9,
        companyName: "Enosis Ltd",
        position: "DevOps Engineer",
        location: "Dhaka, Bangladesh",
        type: "Full-time",
        salary: "৳50,000 - ৳80,000",
        description: "Manage CI/CD pipelines, cloud infrastructure, and server automation. AWS or GCP experience preferred.",
        status: "NOT APPLIED"
    },
    {
        id: 10,
        companyName: "TigerIT Bangladesh",
        position: "AI/ML Engineer",
        location: "Dhaka, Bangladesh",
        type: "Full-time",
        salary: "৳70,000 - ৳120,000",
        description: "Work on AI and machine learning projects for government and enterprise clients. Strong Python and TensorFlow skills required.",
        status: "NOT APPLIED"
    }
];

let jobs = [...initialJobs];
let currentTab = 'all';


// Render jobs current tab based 
function renderJobs() {
    const jobsGrid = document.getElementById('allJobs');
    const emptyState = document.getElementById('emptyState');
    
    let filteredJobs = [];
    if (currentTab === 'all') filteredJobs = jobs;
    else filteredJobs = jobs.filter(job => job.status.toLowerCase() === currentTab);
    
    if (filteredJobs.length === 0) {
        jobsGrid.classList.add('hidden');
        emptyState.classList.remove('hidden');
    } else {
        jobsGrid.classList.remove('hidden');
        emptyState.classList.add('hidden');
        jobsGrid.innerHTML = filteredJobs.map(job => createJobCard(job)).join('');
    }
    
    updateJobsCount(filteredJobs.length);
}

// HTML inside JavaScript (3.1 er Multimedia and Web Development course)
function createJobCard(job) {
    
    let statusBadge = '';
    if (job.status === 'NOT APPLIED') {
        statusBadge = '<span class="inline-block px-3 py-2 text-xs font-semibold rounded-sm text-neutral-600 bg-gray-200">NOT APPLIED</span>';
    } else if (job.status === 'INTERVIEW') {
        statusBadge = '<span class="inline-block px-3 py-2 text-xs font-semibold rounded-sm text-green-600 bg-green-50">INTERVIEW</span>';
    } else {
        statusBadge = '<span class="inline-block px-3 py-2 text-xs font-semibold rounded-sm text-red-600 bg-red-50">REJECTED</span>';
    }
    
    // interview button
    let interviewDisabled = '';
    let interviewBtnClass = 'px-3 py-1 text-xs font-semibold rounded border border-green-500 text-green-600 hover:bg-green-50';
    if (job.status === 'INTERVIEW') {
        interviewDisabled = 'disabled';
        interviewBtnClass = 'px-3 py-1 text-xs font-semibold rounded border border-green-500 text-green-500 bg-green-50 opacity-50 cursor-not-allowed';
    }
    
    // rejected button
    let rejectedDisabled = '';
    let rejectedBtnClass = 'px-3 py-1 text-xs font-semibold rounded border border-red-500 text-red-500 hover:bg-red-50';
    if (job.status === 'REJECTED') {
        rejectedDisabled = 'disabled';
        rejectedBtnClass = 'px-3 py-1 text-xs font-semibold rounded border border-red-500 text-red-500 bg-red-50 opacity-50 cursor-not-allowed';
    }
    
    return `
    <div class="bg-base-100 rounded-lg border border-base-200 hover:shadow-md transition-shadow p-4 sm:p-6 relative" data-id="${job.id}">
    <button class="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 flex items-center justify-center border border-gray-200 hover:bg-red-100 text-base-content/30 hover:text-error transition-colors rounded-full" onclick="deleteJob(${job.id})">
    <i class="fa-regular fa-trash-can text-lg"></i>
    </button>
    <div class="pr-8">
    <h3 class="text-base sm:text-lg font-bold text-blue-900 mb-0.5">${job.companyName}</h3>
    <p class="text-sm font-semibold text-neutral/50 mb-2">${job.position}</p>
    <p class="text-xs text-base-content/50 py-2 sm:py-3 mb-2 sm:mb-3">${job.location} &bull; ${job.type} &bull; ${job.salary}</p>
    <div class="mb-3">${statusBadge}</div>
    <p class="text-xs sm:text-sm text-base-content/70 mb-3 sm:mb-4">${job.description}</p>
    <div class="flex gap-2">
    <button class="${interviewBtnClass} py-1.5" data-id="${job.id}" data-status="INTERVIEW" ${interviewDisabled}>INTERVIEW</button>
    <button class="${rejectedBtnClass}" data-id="${job.id}" data-status="REJECTED" ${rejectedDisabled}>REJECTED</button>
    </div>
    </div>
    </div>
    `;
}

// Button listeners attach (event delegation — 1bar called)
function attachButtonListeners() {
    document.getElementById('allJobs').addEventListener('click', (x) => {
        const btn = x.target.closest('button[data-status]');
        if (!btn || btn.disabled) return;
        const jobId = parseInt(btn.dataset.id);
        const newStatus = btn.dataset.status;
        updateJobStatus(jobId, newStatus);
    });
}

// Job status Update
function updateJobStatus(jobId, newStatus) {
    const job = jobs.find(j => j.id === jobId);
    if (job) {
        job.status = newStatus;
        renderJobs();
        updateDashboard();
    }
}

// Job Delete
function deleteJob(jobId) {
    jobs = jobs.filter(j => j.id !== jobId);
    renderJobs();
    updateDashboard();
}

// Dashboard counts update 
function updateDashboard() {
    document.getElementById('totalCount').textContent = jobs.length;
    document.getElementById('interviewCount').textContent = jobs.filter(j => j.status === 'INTERVIEW').length;
    document.getElementById('rejectedCount').textContent = jobs.filter(j => j.status === 'REJECTED').length;
}

// Jobs count display update 
function updateJobsCount(count) {
    document.getElementById('jobsCount').textContent = `${count} job${count !== 1 ? 's' : ''}`;
}

// Application Initialize
function init() {
    renderJobs();
    attachTabListeners();
    attachButtonListeners();
    updateDashboard();
}

init();