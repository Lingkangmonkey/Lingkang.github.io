const milestones = [
    {
        year: "1998",
        title: "LOREM IPSUM",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus lorem tempus tortor.",
        text: "LOREM",
        color: "#003B5C",
        image: "https://via.placeholder.com/150"
    },
    {
        year: "2001",
        title: "DOLOR ANETIS",
        description: "Donec vitae felis pulvinar est molestie venenatis. Sed hendrerit diam non.",
        text: "DOLOR",
        color: "#005580",
        image: "https://via.placeholder.com/150"
    },
    {
        year: "2005",
        title: "VITAE KOLIEN",
        description: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.",
        text: "VITAE",
        color: "#0077B3",
        image: "https://via.placeholder.com/150"
    },
    {
        year: "2011",
        title: "NATOETU EXIT",
        description: "Praesent euismod augue sit amet efficitur rhoncus. Sed hendrerit diam non.",
        text: "NATOETU",
        color: "#009CE6",
        image: "https://via.placeholder.com/150"
    },
    {
        year: "2013",
        title: "ACCOUNTANIS",
        description: "Nullam sit amet consectetur nisi. Vestibulum ante ipsum primis in faucibus.",
        text: "ACCOUNT",
        color: "#33B8FF",
        image: "https://via.placeholder.com/150"
    },
    {
        year: "2017",
        title: "SNECTUS EXIS",
        description: "Maecenas vitae tellus nec augue varius venenatis. Sed faucibus lorem tempus.",
        text: "SNECTUS",
        color: "#FF6B33",
        image: "https://via.placeholder.com/150"
    }
];

function createTimelineItem(milestone, index) {
    const timelineItem = document.createElement('div');
    timelineItem.className = 'timeline-item';

    const content = `
        <div class="timeline-content">
            <div class="timeline-text-box" style="background-color: ${milestone.color}">
                ${milestone.text}
            </div>
            <div class="timeline-title" style="color: ${milestone.color}">
                ${milestone.title}
            </div>
            <div class="timeline-description">
                ${milestone.description}
            </div>
            <div class="timeline-year" style="color: ${milestone.color}">
                ${milestone.year}
            </div>
        </div>
        <div class="timeline-image">
            <img src="${milestone.image}" alt="${milestone.title}">
        </div>
        <div class="timeline-dot" style="border-color: ${milestone.color}"></div>
    `;

    timelineItem.innerHTML = content;
    return timelineItem;
}

function populateTimeline() {
    const timelineContainer = document.getElementById('timeline');
    milestones.forEach((milestone, index) => {
        const timelineItem = createTimelineItem(milestone, index);
        timelineContainer.appendChild(timelineItem);
    });
}

document.addEventListener('DOMContentLoaded', populateTimeline);

