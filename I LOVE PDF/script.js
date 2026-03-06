const tools = [
  ['Merge PDF', 'Combine multiple PDFs in seconds.'],
  ['Split PDF', 'Extract or separate pages instantly.'],
  ['Compress PDF', 'Reduce file size without losing quality.'],
  ['PDF to Word', 'Convert PDFs to editable DOCX.'],
  ['Word to PDF', 'Create polished PDFs from documents.'],
  ['PDF to JPG', 'Turn pages into high-quality images.'],
  ['JPG to PDF', 'Build PDFs from image files.'],
  ['Rotate PDF', 'Fix orientation of selected pages.'],
  ['Organize PDF', 'Reorder, delete, and add pages quickly.'],
  ['Edit PDF', 'Add text, shapes, highlights, and notes.'],
  ['Sign PDF', 'Create legally binding e-signatures.'],
  ['Protect PDF', 'Encrypt files with a strong password.'],
  ['Unlock PDF', 'Remove open-password restrictions.'],
  ['Add Watermark', 'Stamp branding across all pages.'],
  ['OCR PDF', 'Extract searchable text from scans.'],
  ['PDF/A Converter', 'Archive-ready PDF conversion.'],
  ['Repair PDF', 'Recover corrupted document structure.'],
  ['Compare PDF', 'Spot text and layout differences.']
];

const grid = document.getElementById('toolGrid');
const search = document.getElementById('toolSearch');
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const year = document.getElementById('year');
const themeToggle = document.getElementById('themeToggle');

const renderTools = (query = '') => {
  const q = query.trim().toLowerCase();
  const filtered = tools.filter(([name, desc]) =>
    name.toLowerCase().includes(q) || desc.toLowerCase().includes(q)
  );

  grid.innerHTML = filtered
    .map(
      ([name, desc]) => `
      <article class="tool-card">
        <h3>${name}</h3>
        <p>${desc}</p>
      </article>`
    )
    .join('');
};

search.addEventListener('input', (e) => renderTools(e.target.value));
menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('show'));

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  const light = document.body.classList.contains('light');
  themeToggle.textContent = light ? '☀️' : '🌙';
  localStorage.setItem('theme', light ? 'light' : 'dark');
});

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  document.body.classList.add('light');
  themeToggle.textContent = '☀️';
}

document.getElementById('dropzone').addEventListener('click', () => {
  alert('Demo mode: integrate backend upload API to process real files.');
});

year.textContent = new Date().getFullYear();
renderTools();