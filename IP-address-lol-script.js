document.addEventListener('DOMContentLoaded', function() {
    fetch('https://api.ipify.org') // This sends a request to ipify to get the public IP address.
        .then(response => response.text())
        .then(ip => {
            const imgElement = document.getElementById('ipImage');
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            
            // Set canvas dimensions
            canvas.width = 300;
            canvas.height = 50;
            
            // Set font properties
            context.font = '20px Arial';
            context.fillStyle = '#000';
            
            // Draw the IP text
            context.fillText(`Your IP Address: ${ip}`, 10, 30);
            
            // Convert the canvas to a data URL and set it as the image source
            imgElement.src = canvas.toDataURL();
        });
});
