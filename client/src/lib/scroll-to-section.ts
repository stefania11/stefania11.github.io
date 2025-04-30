export function scrollToSection(sectionId: string): void {
  const section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop - 100, // Adjust for header
      behavior: "smooth",
    });
  }
}
