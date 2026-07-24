const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
}, { threshold: 0.1 });

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
});

function handleInitiate() {
    const d = document.getElementById('departmentSelect').value; if (!d) return;
    const email = (d === 'directors' || d === 'general') ? "resolve@axiomnetzero.org" : d + "@axiomnetzero.org";
    window.location.href = `mailto:${email}?subject=Inquiry: ${d.charAt(0).toUpperCase() + d.slice(1)}&body=I am reaching out to discuss the restoration of our shared balance.`;
}
