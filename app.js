function rippleEffect(event) {
  const hexagon = event.currentTarget;

  // Get click coordinates relative to the hexagon
  const rect = hexagon.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  // Create a ripple element
  const ripple = document.createElement("span");
  ripple.classList.add("ripple");
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;

  // Append the ripple to the hexagon and remove it after animation
  hexagon.appendChild(ripple);
  setTimeout(() => {
    ripple.remove();
  }, 600);
}
