const recommendations = {
    usa: [
      { src: 'usa1.jpg', alt: 'USA 1', desc: 'Description of USA 1' },
      { src: 'usa2.jpg', alt: 'USA 2', desc: 'Description of USA 2' }
    ],
    japan: [
      { src: 'japan1.jpg', alt: 'Japan 1', desc: 'Description of Japan 1' },
      { src: 'japan2.jpg', alt: 'Japan 2', desc: 'Description of Japan 2' }
    ]
    // Add more countries as needed
  };
  
  document.getElementById('country-select').addEventListener('change', function() {
    const country = this.value;
    const container = document.getElementById('recommendations');
    container.innerHTML = '';
  
    if (country && recommendations[country]) {
      recommendations[country].forEach(rec => {
        const div = document.createElement('div');
        div.classList.add('recommendation');
        div.innerHTML = `
          <img src="${rec.src}" alt="${rec.alt}">
          <p>${rec.desc}</p>
        `;
        container.appendChild(div);
      });
    }
  });
  