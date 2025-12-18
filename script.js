// script.js
document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-btn');
    const pages = document.querySelectorAll('.page-content');
    const mobileMenu = document.getElementById('mobile-menu');

    function navigateTo(targetId) {
        pages.forEach(page => page.classList.remove('active'));
        const targetPage = document.getElementById(targetId);
        if (targetPage) {
            targetPage.classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        mobileMenu.classList.add('translate-x-full');
    }

    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-target');
            navigateTo(target);
        });
    });

    document.getElementById('mobile-menu-btn').addEventListener('click', () => {
        mobileMenu.classList.remove('translate-x-full');
    });

    document.getElementById('close-menu').addEventListener('click', () => {
        mobileMenu.classList.add('translate-x-full');
    });

    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (document.getElementById('name').value && document.getElementById('email').value) {
                form.classList.add('hidden');
                document.getElementById('success-msg').classList.remove('hidden');
            } else {
                alert('入力内容を確認してください。');
            }
        });
    }
});