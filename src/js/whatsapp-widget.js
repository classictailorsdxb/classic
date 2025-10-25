document.addEventListener('DOMContentLoaded', function() {
    const widget = document.createElement('div');
    widget.className = 'whatsapp-widget';
    widget.innerHTML = `
        <a href="https://wa.me/971556004700?text=Hi%2C%20I%20have%20an%20enquiry." 
           target="_blank" 
           rel="noopener" 
           aria-label="Chat with us on WhatsApp">
            <i class="fab fa-whatsapp"></i>
        </a>
    `;
    document.body.appendChild(widget);
});