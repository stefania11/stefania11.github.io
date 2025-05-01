export function scrollToSection(sectionId: string): void {
  // Check if we're on the home page
  const isHomePage = window.location.pathname === "/" || window.location.pathname === "";
  
  if (!isHomePage) {
    // If not on home page, navigate to home page with the section hash
    window.location.href = `/#${sectionId}`;
    return;
  }
  
  // If on home page, smoothly scroll to the section
  const section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop - 100, // Adjust for header
      behavior: "smooth",
    });
  }
}
