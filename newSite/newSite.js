// Random data generation
const events = [
    {
        id: 1,
        title: "Annual Sports Gala",
        date: "November 15, 2025",
        location: "University Stadium",
        description: "Join us for our biggest sporting event of the year with competitions across 10 sports.",
        image: "newSiteImg/img1.jpg"
    },
    {
        id: 2,
        title: "Alumni Meetup",
        date: "December 5, 2025",
        location: "Campus Lawn",
        description: "Network with fellow alumni and current students over food and drinks.",
        image: "newSiteImg/img2.png"
    },
    {
        id: 3,
        title: "Basketball Tournament",
        date: "January 20, 2025",
        location: "Sports Complex",
        description: "Intra-university basketball competition with prizes for winning teams.",
        image: "newSiteImg/img3.jpg"
    }
];

const news = [
    {
        id: 1,
        title: "New Sports Facilities Opened",
        date: "October 10, 2025",
        content: "The university has invested $2 million in state-of-the-art sports facilities including a new swimming pool and fitness center. These facilities are now open to all students and alumni members."
    },
    {
        id: 2,
        title: "Scholarship Recipients Announced",
        date: "September 5, 2025",
        content: "We're proud to announce this year's scholarship recipients. Ten students will receive financial support thanks to our generous donors and alumni network."
    },
    {
        id: 3,
        title: "Annual Report Published",
        date: "August 15, 2025",
        content: "Our 2022-2025 annual report is now available, highlighting our achievements, financials, and impact on the university community."
    }
];

const faqs = [
    {
        question: "How do I become a member?",
        answer: "You can register online through our membership portal or visit our office during working hours to fill out an application form."
    },
    {
        question: "What benefits do members receive?",
        answer: "Members get access to all our facilities, discounted event tickets, career networking opportunities, and eligibility for scholarships."
    },
    {
        question: "Can alumni participate in sports events?",
        answer: "Yes! We have special alumni divisions in most of our sporting events and welcome participation from all graduates."
    }
];

// Render events
const eventsContainer = document.getElementById('events-container');
events.forEach(event => {
    eventsContainer.innerHTML += `
        <div class="event-card">
            <img src="${event.image}" alt="${event.title}" class="event-img">
            <div class="event-content">
                <p class="event-date">${event.date} • ${event.location}</p>
                <h3 class="event-title">${event.title}</h3>
                <p>${event.description}</p>
                <a href="#" class="btn" style="display: inline-block; margin-top: 1rem;">Learn More</a>
            </div>
        </div>
    `;
});

// Render news
const newsContainer = document.getElementById('news-container');
news.forEach(item => {
    newsContainer.innerHTML += `
        <div class="news-item">
            <p class="news-date">${item.date}</p>
            <h3 class="news-title">${item.title}</h3>
            <p>${item.content}</p>
            <a href="#" style="color: var(--primary); font-weight: bold; display: inline-block; margin-top: 1rem;">Read More →</a>
        </div>
    `;
});

// Render FAQ
const faqContainer = document.getElementById('faq-container');
faqs.forEach(faq => {
    faqContainer.innerHTML += `
        <div style="margin-bottom: 1.5rem;">
            <h4 style="color: var(--secondary); margin-bottom: 0.5rem;">${faq.question}</h4>
            <p>${faq.answer}</p>
        </div>
    `;
});

// Contact form handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});