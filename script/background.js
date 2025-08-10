
document.addEventListener("DOMContentLoaded", function() {
    const section = document.querySelector("section.school");
    const bgUrl = getComputedStyle(section).backgroundImage
        .replace(/^url\(["']?/, '')
        .replace(/["']?\)$/, '');

    const img = new Image();
    img.onload = function() {
        // Width of section (in pixels)
        const sectionWidth = section.offsetWidth;

        // Scale the image height to match section width
        const scale = sectionWidth / img.width;
        const newHeight = img.height * scale;

        section.style.height = newHeight + "px";
    };
    img.src = bgUrl;
});