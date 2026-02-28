const fs = require('fs');
const path = require('path');
const rootDir = process.cwd();

// Update subpaginas/ references across the root index.html
const indexHtml = path.join(rootDir, 'index.html');
if (fs.existsSync(indexHtml)) {
    let content = fs.readFileSync(indexHtml, 'utf8');
    content = content.replace(/href="([a-z-]+)\.html"/g, 'href="/"');
    content = content.replace(/href="subpaginas\/catalogo-([a-z]+)\.html"/g, 'href="catalogo/.html"');
    content = content.replace(/href="subpaginas\/adopcion-([a-z]+)\.html"/g, 'href="adopcion/.html"');
    content = content.replace(/href="subpaginas\/cuidados-([a-z]+)\.html"/g, 'href="cuidados/.html"');
    fs.writeFileSync(indexHtml, content);
    console.log('Fixed links in root index.html');
}

// Update subpaginas/ references from within the dir-level index.html
const dirs = ['adopcion', 'ayuda', 'catalogo', 'contacto', 'creditos', 'cuidados', 'historias', 'juego'];
dirs.forEach(dir => {
    const indexPath = path.join(rootDir, dir, 'index.html');
    if (fs.existsSync(indexPath)) {
        let content = fs.readFileSync(indexPath, 'utf8');
        content = content.replace(/href="\.\.\/subpaginas\/catalogo-([a-z]+)\.html"/g, 'href="../catalogo/.html"');
        content = content.replace(/href="\.\.\/subpaginas\/adopcion-([a-z]+)\.html"/g, 'href="../adopcion/.html"');
        content = content.replace(/href="\.\.\/subpaginas\/cuidados-([a-z]+)\.html"/g, 'href="../cuidados/.html"');
        fs.writeFileSync(indexPath, content);
        console.log('Fixed links in ' + dir + '/index.html');
    }
});

// Update the actual subpages that were moved from subpaginas
const subpages = [
    'adopcion/proceso.html', 'adopcion/requisitos.html',
    'catalogo/adultos.html', 'catalogo/gatitos.html',
    'cuidados/comportamiento.html', 'cuidados/salud.html'
];
subpages.forEach(sub => {
    const subPath = path.join(rootDir, sub);
    if (fs.existsSync(subPath)) {
        let content = fs.readFileSync(subPath, 'utf8');
        
        // Root page referencing
        content = content.replace(/href="\.\.\/([a-z-]+)\.html"/g, 'href="..//"');
        content = content.replace(/href="\.\.\/index\.html"/g, 'href="../"');
        
        // Sibling or cross-references
        content = content.replace(/href="\.\.\/subpaginas\/catalogo-([a-z]+)\.html"/g, 'href="../catalogo/.html"');
        content = content.replace(/href="\.\.\/subpaginas\/adopcion-([a-z]+)\.html"/g, 'href="../adopcion/.html"');
        content = content.replace(/href="\.\.\/subpaginas\/cuidados-([a-z]+)\.html"/g, 'href="../cuidados/.html"');
        fs.writeFileSync(subPath, content);
        console.log('Fixed links in ' + sub);
    }
});
