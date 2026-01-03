document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('input[name="anime"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      if (e.target.id === 'demon-slayer') alert('You picked Demon Slayer');
      if (e.target.id === 'one-piece') alert('You suck');
    });
  });
});